import QuasarConfFile from '@quasar/app-vite/lib/quasar-config-file'
import getQuasarCtx from '@quasar/app-vite/lib/helpers/get-quasar-ctx'
import extensionRunner from '@quasar/app-vite/lib/app-extension/extensions-runner'

// This code is taken from @quasar/app/bin/quasar-inspect
export async function getQuasarConfig (mode='spa', debug=true, cmd='dev', hostname=9000, port=9000) {

  // Requires adding
  // // https://github.com/evanw/esbuild/issues/1921#issuecomment-1197938703
  // + "\nimport { createRequire } from 'module';const require = createRequire(import.meta.url);"
  // to apps/quasar/node_modules/@quasar/app-vite/lib/quasar-config-file.js / createEsbuildConfig () / esbuilConfig.banner.js

  const ctx = getQuasarCtx({
    mode: mode,
    target: mode === 'cordova' || mode === 'capacitor'
      ? 'android'
      : void 0,
    debug: debug,
    dev: cmd === 'dev',
    prod: cmd === 'build'
    // vueDevtools?
  })


  await extensionRunner.registerExtensions(ctx)


  const quasarConfFile = new QuasarConfFile({
    ctx,
    port: port,
    host: hostname,
    watch: undefined
  })

  const quasarConf = await quasarConfFile.read()
  if (quasarConf.error !== void 0) {
    throw new Error(quasarConf.error)
  }
  // console.log('quasarConf', quasarConf)

  const modeConfig = (await import(`@quasar/app-vite/lib/modes/${mode}/${mode}-config.js`));

  const cfgEntries = [];

  cfgEntries.push({
    name: 'vite',
    object: await modeConfig['vite'](quasarConf)
  })

  return cfgEntries
}
