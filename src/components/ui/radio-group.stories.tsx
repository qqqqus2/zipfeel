import type { Meta, StoryObj } from "@storybook/react";
import { RadioGroup, RadioGroupItem } from "./radio-group";

const meta = {
  title: "UI/RadioGroup",
  component: RadioGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <RadioGroup defaultValue="option-one">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-one" id="option-one" />
        <label htmlFor="option-one" className="text-sm font-medium">
          Option One
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-two" id="option-two" />
        <label htmlFor="option-two" className="text-sm font-medium">
          Option Two
        </label>
      </div>
    </RadioGroup>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <RadioGroup defaultValue="comfortable">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="default" id="r1" />
        <label htmlFor="r1" className="text-sm font-medium">
          Default
          <p className="text-xs text-muted-foreground">
            The default spacing option
          </p>
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="comfortable" id="r2" />
        <label htmlFor="r2" className="text-sm font-medium">
          Comfortable
          <p className="text-xs text-muted-foreground">
            More spacing between elements
          </p>
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="compact" id="r3" />
        <label htmlFor="r3" className="text-sm font-medium">
          Compact
          <p className="text-xs text-muted-foreground">
            Less spacing, more content
          </p>
        </label>
      </div>
    </RadioGroup>
  ),
};

export const Disabled: Story = {
  render: () => (
    <RadioGroup defaultValue="option-one" disabled>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-one" id="d1" />
        <label htmlFor="d1" className="text-sm font-medium opacity-50">
          Option One (Disabled)
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-two" id="d2" />
        <label htmlFor="d2" className="text-sm font-medium opacity-50">
          Option Two (Disabled)
        </label>
      </div>
    </RadioGroup>
  ),
};

export const HorizontalLayout: Story = {
  render: () => (
    <RadioGroup defaultValue="card" className="flex gap-4">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="card" id="h1" />
        <label htmlFor="h1" className="text-sm font-medium">
          Card
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="paypal" id="h2" />
        <label htmlFor="h2" className="text-sm font-medium">
          PayPal
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="apple" id="h3" />
        <label htmlFor="h3" className="text-sm font-medium">
          Apple Pay
        </label>
      </div>
    </RadioGroup>
  ),
};
