import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button.ui';

export const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
};

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Primary Button',
  },
};

export const WithOnClick: Story = {
  args: {
    children: 'Click me',
    onClick: () => alert('clicked'),
  },
};
