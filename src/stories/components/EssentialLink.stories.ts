import type { Meta, StoryObj } from '@storybook/vue3';

import EssentialLink from 'src/components/EssentialLink.vue';
import { Report, Subreport } from 'src/components/models';

const meta = {
  title: 'Essential Link',
  component: EssentialLink,
  tags: ['autodocs'],
  argTypes: {
    report: {
      control: 'object',
      type: Object as () => Report,
      description: 'Button main text'
    },
    active: {
      control: 'boolean',
      description: 'Set to hightlight button'
    },
    subreports: {
      control: 'object',
      type: Object as () => Subreport[],
      description: 'Optional field with list of reports'
    }
  },
  args: {
    report: {
      "id": 1,
      "name": "Custom Reports",
      "icon": "add_chart",
      "highlight": false,
      "route": "",
      subreports: []
    },
    active: true
  }
} satisfies Meta<typeof EssentialLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ExampleActive: Story = {};

export const ExampleInactive: Story = {
  args: {
    report: {
      "id": 2,
      "name": "Custom Reports",
      "icon": "add_chart",
      "highlight": false,
      "route": ""
    },
    active: false
  }
};

export const ExampleSubreports: Story = {
  args: {
    report: {
      "id": 3,
      "name": "Custom Reports",
      "icon": "add_chart",
      "highlight": false,
      "route": "",
      "subreports": [
        {
            "id": 1,
            "name": "My Reports 1"
        },
        {
            "id": 2,
            "name": "My Reports 2"
        },
        {
            "id": 3,
            "name": "My Reports 3"
        }
      ]
    },
    active: false
  }
};