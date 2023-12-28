import type { StorybookConfig } from '@storybook/vue3-vite';
import type { Options } from '@storybook/types';
import type { InlineConfig, PluginOption } from 'vite';
import { mergeConfig } from 'vite';
import { getQuasarConfig } from './quasar-config-result';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  async viteFinal(config: InlineConfig, options: Options): Promise<Record<string, any>> {
    // https://github.com/storybookjs/builder-vite#migration-from-webpack--cra
    const quasarConfig = await getQuasarConfig()
    const quasarViteConfig = quasarConfig[0].object
    // console.log('quasarConfig', quasarViteConfig.server)
    // console.log('storybook Vite config', JSON.stringify(config, null, 2))

    // Quasar's Vite Plugins
    const quasarVitePluginNames = quasarViteConfig.plugins.map((pluginConfig: PluginOption) => {
      if (pluginConfig instanceof Promise) {
        throw new Error('Promise is not supported for Quasar\'s vite config merge')
      }
      if (Array.isArray(pluginConfig)) {
        // TODO are these config required for stories rendering?
        console.warn('Arrays of Vite PluginOption are not supported for Quasar\'s vite config merge', JSON.stringify(pluginConfig, null, 2))
      }
      else if (pluginConfig !== false && pluginConfig !== undefined && pluginConfig !== null) {
        return pluginConfig.name
      }
    })

    // We must remove Vue plugins from Storybook before injecting Quasar's ones
    const pluginsResult = await Promise.all(config.plugins!);

    config.plugins = pluginsResult.filter((pluginConfig) => {
      if (pluginConfig instanceof Promise) {
        // throw new Error('Promise is not supported for Quasar\'s vite config merge')
        // pluginConfig = await pluginConfig;
      }
      if (pluginConfig instanceof Array) {
        throw new Error('Arrays of Vite PluginOption are not supported for Quasar\'s vite config merge')
      }
      return !pluginConfig || pluginConfig.name == null || ! quasarVitePluginNames.includes(pluginConfig.name)
    })
    config.plugins = [...config.plugins!, ...quasarViteConfig.plugins]

    const updatedConfig: Record<string, any> =  mergeConfig(config, {
      resolve: {
        alias: {
          ...quasarViteConfig.resolve.alias
        },
      },
      server: {
        ...quasarViteConfig.server
      },
      // Avoid error Failed to load url /sb-preview/runtime.js (resolved id: /sb-preview/runtime.js). Does the file exist?
      // [vite]: Rollup failed to resolve import "/./sb-preview/runtime.js" from "/home/jean/dev/Hippocast/prototype/apps/quasar/iframe.html".
      // This is most likely unintended because it can break your application at runtime.
      // If you do want to externalize this module explicitly add it to
      // `build.rollupOptions.external`
      build: {
        rollupOptions: {
          external: [
            /sb-preview\/runtime.js$/,
          ]
        }
      }
    });

    return updatedConfig
  },
};
export default config;
