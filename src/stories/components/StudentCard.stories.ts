import type { Meta, StoryObj } from '@storybook/vue3';

import StudentCard from 'src/components/StudentCard.vue';

const meta = {
  title: 'Student Card',
  component: StudentCard,
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'text',
      description: 'Student full name'
    },
    recordId: {
      control: 'text',
      description: 'Student identifier'
    },
    status: {
      control: 'number',
      description: 'Shows if the user is active or not'
    },
  },
  args: {
    name: 'Danielle Munchen Schollengberg',
    recordId: 'AYSI32392',
    status: 1
  }
} satisfies Meta<typeof StudentCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {};