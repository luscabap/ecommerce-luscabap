import type { Meta, StoryObj } from "@storybook/react";
import Header from ".";

const meta: Meta<typeof Header> = {
  title: "UI/Header",
  component: Header,
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Primary: Story = {
  args: {
    titulo: "Teste",
    secundario: true,
  },
};
