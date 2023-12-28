import type { Meta, StoryObj } from '@storybook/vue3';

import UserActivityComponent from 'src/components/UserActivity.vue';
import { UserActivity } from 'src/components/models';

const meta = {
  title: 'User Activity',
  component: UserActivityComponent,
  tags: ['autodocs'],
  argTypes: {
    userActivities: {
      control: 'object',
      type: Object as () => UserActivity[],
      description: 'List of user activity, initial contact, emails, calls, and chats'
    }
  },
  args: {
    userActivities: [
      {
          "id": 1,
          "userId": 3,
          "type": "email",
          "url": "https://www.example.com",
          "user": {
              "id": 1,
              "firstName": "Gerardo",
              "lastName": "Moyano",
              "role": {
                  "id": 1,
                  "name": "Admin"
              }
          },
          "description": "Upselling email sent.",
          "createdAt": "2023-09-23T13:45:00"
      },
      {
          "id": 2,
          "userId": 3,
          "type": "chat",
          "url": "",
          "user": {
              "id": 2,
              "firstName": "Jean",
              "lastName": "Charleton",
              "role": {
                  "id": 2,
                  "name": "Professor"
              }
          },
          "description": "Whatsapp chat meeting.",
          "createdAt": "2023-09-02T13:45:00"
      },
      {
          "id": 3,
          "userId": 3,
          "type": "assigment",
          "url": "",
          "user": {
              "id": 3,
              "firstName": "Danielle",
              "lastName": "Munchen Schollengberg",
              "role": {
                  "id": 3,
                  "name": "Student"
              }
          },
          "description": "For: \"Career Planning and Development\"\nAssignment Name: \"Quiz 01\", Delivered ON TIME\nGrade: TBD",
          "createdAt": "2023-08-05T17:33:00"
      },
      {
          "id": 4,
          "userId": 3,
          "type": "call",
          "url": "",
          "user": {
              "id": 1,
              "firstName": "Gerardo",
              "lastName": "Moyano",
              "role": {
                  "id": 1,
                  "name": "Admin"
              }
          },
          "description": "Direct Call made to +52 55 22126164\nCall Duration: 0 min, 10 sec.",
          "createdAt": "2023-08-04T13:45:00"
      },
      {
          "id": 5,
          "userId": 3,
          "type": "tag_added",
          "url": "",
          "user": {
              "id": 2,
              "firstName": "Jean",
              "lastName": "Charleton",
              "role": {
                  "id": 2,
                  "name": "Professor"
              }
          },
          "description": "Multiple Problems, Injuried, Check, Late",
          "createdAt": "2023-08-03T17:33:00"
      },
    ]
  }
} satisfies Meta<typeof UserActivityComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {};