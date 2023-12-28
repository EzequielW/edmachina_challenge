import type { Meta, StoryObj } from '@storybook/vue3';

import AboutUser from 'src/components/AboutUser.vue';
import { UserAbout } from 'src/components/models';

const meta = {
  title: 'About User',
  component: AboutUser,
  tags: ['autodocs'],
  argTypes: {
    userAbout: {
      control: 'object',
      type: Object as () => UserAbout,
      description: 'Basic user account information'
    },
  },
  args: {
    userAbout: {
      firstName: 'First name',
      lastName: 'Last name',
      email: 'Email@example.com',
      phone: '111222333444',
      category: {
        id: 1,
        name: "Do Not Contact"
      },
      country: {
        id: 1,
        name: "México",
        phoneCode: "52"
      },
    }
  }
} satisfies Meta<typeof AboutUser>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {};