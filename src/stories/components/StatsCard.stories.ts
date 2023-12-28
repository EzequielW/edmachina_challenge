import type { Meta, StoryObj } from '@storybook/vue3';

import StatsCard from 'src/components/StatsCard.vue';

const meta = {
  title: 'Stats Card',
  component: StatsCard,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Card title'
    },
    stat: {
      control: 'text',
      description: 'Main stat to be displayed'
    },
    icon: {
      control: 'text',
      description: 'Icon from the Material Icon library'
    },
    subtitleLeft: {
      control: 'text',
      description: 'Left subtitle under main content'
    },
    subtitleRight: {
      control: 'text',
      description: 'Right subtitle under main content'
    },
  },
  args: {
    title: 'Sample title',
    stat: 'Main Stat',
    icon: 'email',
    subtitleLeft: 'Subtitle 1',
    subtitleRight: 'Subtitle 2'
  }
} satisfies Meta<typeof StatsCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {};