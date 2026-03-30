import type { Meta, StoryObj } from "@storybook/react";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from "./field";
import { Input } from "./input";

const meta = {
  title: "UI/Field",
  component: Field,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Field>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-[min(100%,420px)]">
      <Field>
        <FieldLabel htmlFor="field-email">Email</FieldLabel>
        <FieldContent>
          <Input id="field-email" type="email" placeholder="name@example.com" />
          <FieldDescription>
            We&apos;ll never share your email with anyone else.
          </FieldDescription>
        </FieldContent>
      </Field>
    </div>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <div className="w-[min(100%,480px)]">
      <Field orientation="horizontal">
        <FieldLabel htmlFor="field-name">Name</FieldLabel>
        <FieldContent>
          <Input id="field-name" placeholder="Jane Doe" />
        </FieldContent>
      </Field>
    </div>
  ),
};

export const WithError: Story = {
  render: () => (
    <div className="w-[min(100%,420px)]">
      <Field data-invalid={true}>
        <FieldLabel htmlFor="field-password">Password</FieldLabel>
        <FieldContent>
          <Input id="field-password" type="password" aria-invalid />
          <FieldError>Password must be at least 8 characters.</FieldError>
        </FieldContent>
      </Field>
    </div>
  ),
};

export const FieldSetGroup: Story = {
  render: () => (
    <div className="w-[min(100%,480px)]">
      <FieldSet>
        <FieldLegend>Account</FieldLegend>
        <FieldGroup>
          <Field>
            <FieldTitle>Username</FieldTitle>
            <FieldContent>
              <Input placeholder="johndoe" />
              <FieldDescription>
                This is your public display name.
              </FieldDescription>
            </FieldContent>
          </Field>
          <FieldSeparator />
          <Field>
            <FieldLabel htmlFor="field-bio">Bio</FieldLabel>
            <FieldContent>
              <Input id="field-bio" placeholder="Tell us about yourself" />
            </FieldContent>
          </Field>
        </FieldGroup>
      </FieldSet>
    </div>
  ),
};

export const FieldSeparatorWithLabel: Story = {
  render: () => (
    <div className="w-[min(100%,480px)]">
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="a">Field A</FieldLabel>
          <FieldContent>
            <Input id="a" />
          </FieldContent>
        </Field>
        <FieldSeparator>Or</FieldSeparator>
        <Field>
          <FieldLabel htmlFor="b">Field B</FieldLabel>
          <FieldContent>
            <Input id="b" />
          </FieldContent>
        </Field>
      </FieldGroup>
    </div>
  ),
};
