import type { Meta, StoryObj } from '@storybook/vue3';

import AboutStudent from 'src/components/AboutStudent.vue';
import { StudentRisk } from 'src/components/models';

const meta = {
  title: 'About Student',
  component: AboutStudent,
  tags: ['autodocs'],
  argTypes: {
    studentRisk: {
      control: 'object',
      type: Object as () => StudentRisk,
      description: 'Details about student risk of admission'
    },
  },
  args: {
    studentRisk: {
      "id": 1,
      "period": "2023 - 1",
      "status": "Alumno Regular",
      "school": "Shaka",
      "admission": "Centro Pre",
      "classesRisk": [
        {
          "id": 1,
          "name": "Matemática",
          "risk": 30,
          "score": 7
        },
        {
          "id": 1,
          "name": "Química",
          "risk": 70,
          "score": 5
        },
        {
          "id": 1,
          "name": "Programación"
        },
        {
          "id": 1,
          "name": "Comunicación"
        }
      ]
    }
  }
} satisfies Meta<typeof AboutStudent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {};