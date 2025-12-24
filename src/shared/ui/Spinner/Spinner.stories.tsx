import type { Meta, StoryObj } from '@storybook/react';
import { LoadingSpinner } from './Spinner.ui';

export const meta: Meta<typeof LoadingSpinner> = {
  title: 'UI/Spinner',
  component: LoadingSpinner,
  tags: ['autodocs'],
};

type Story = StoryObj<typeof LoadingSpinner>;

export const Default: Story = {};
