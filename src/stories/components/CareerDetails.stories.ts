import type { Meta, StoryObj } from '@storybook/vue3';

import CareerDetails from 'src/components/CareerDetails.vue';
import { UsersCareers } from 'src/components/models';

const meta = {
  title: 'Career Details',
  component: CareerDetails,
  tags: ['autodocs'],
  argTypes: {
    usersCareers: {
      control: 'object',
      type: Object as () => UsersCareers[],
      description: 'List of student careers'
    },
    studentId: {
      control: 'text',
      description: 'Student identifier'
    },
  },
  args: {
    usersCareers: [
      {
        "id": 1,
        "userId": 3,
        "career": {
            "id": 1,
            "careerId": "0398P",
            "name": "Software Engineering",
            "careerType": {
                "id": 1,
                "name": "Graduate"
            },
            "careerModalities": [
                {
                    "id": 1,
                    "name": "On-Campus"
                },
                {
                    "id": 2,
                    "name": "Remote"
                }
            ]
        },
        "modality": {
            "id": 2,
            "name": "Remote"
        },
        "status": "Enrollment"
      },
      {
        "id": 2,
        "userId": 3,
        "career": {
            "id": 2,
            "careerId": "0399Q",
            "name": "Medical Assistant",
            "careerType": {
                "id": 1,
                "name": "Graduate"
            },
            "careerModalities": [
                {
                    "id": 1,
                    "name": "On-Campus"
                }
            ]
        },
        "modality": {
            "id": 1,
            "name": "On-Campus"
        },
        "status": "Enrollment"
    }
    ],
    studentId: 'ASDQ1231SF'
  }
} satisfies Meta<typeof CareerDetails>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {};