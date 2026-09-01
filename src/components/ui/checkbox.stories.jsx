import React from "react";
import { Checkbox } from "./checkbox";

const CHECKBOX_DOC_PROPS = [
    "disabled",
    "checked",
    "defaultChecked",
    "fixed",
    "required",
    "name",
    "value",
];

const meta = {
    title: "UI/Checkbox",
    component: Checkbox,
    parameters: {
        layout: "centered",
        controls: { include: CHECKBOX_DOC_PROPS },
        docs: {
            description: {
                component: `### 주요 props

- **disabled** — 선택 불가·스타일 비활성.
- **checked** — 제어 모드에서의 선택 상태.
- **defaultChecked** — 비제어 모드 초기 선택.
- **fixed** — 체크된 상태를 고정 (변경 불가, X 아이콘 없음).
- **required** — 폼에서 반드시 체크해야 할 때.
- **name** / **value** — 폼 제출 시 전달되는 필드 이름·값.

라벨은 보통 인접 \`<label htmlFor>\`와 \`id\`로 연결합니다.`,
            },
            controls: { include: CHECKBOX_DOC_PROPS },
        },
    },
    tags: ["autodocs"],
    argTypes: {
        disabled: {
            control: "boolean",
            description: "비활성",
        },
        defaultChecked: {
            control: "boolean",
            description: "비제어: 초기 선택",
        },
        checked: {
            control: "boolean",
            description: "제어: 선택 여부",
        },
        fixed: {
            control: "boolean",
            description: "고정 상태 (변경 불가)",
        },
        required: {
            control: "boolean",
            description: "폼에서 필수",
        },
        name: {
            control: "text",
            description: "폼 필드 name",
        },
        value: {
            control: "text",
            description: "폼 제출 시 value",
        },
    },
};

export default meta;

export const Default = {
    args: {},
};

export const Checked = {
    args: {
        defaultChecked: true,
    },
};

export const Disabled = {
    args: {
        disabled: true,
    },
};

export const DisabledChecked = {
    args: {
        disabled: true,
        defaultChecked: true,
    },
};

export const Fixed = {
    args: {
        checked: true,
        fixed: true,
    },
};

export const WithLabel = {
    render: () => (
        <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                Accept terms and conditions
            </label>
        </div>
    ),
};

export const MultipleCheckboxes = {
    render: () => (
        <div className="flex flex-col gap-4">
            <div className="flex items-center space-x-2">
                <Checkbox id="option1" defaultChecked />
                <label htmlFor="option1" className="text-sm font-medium">
                    Option 1
                </label>
            </div>
            <div className="flex items-center space-x-2">
                <Checkbox id="option2" />
                <label htmlFor="option2" className="text-sm font-medium">
                    Option 2
                </label>
            </div>
            <div className="flex items-center space-x-2">
                <Checkbox id="option3" />
                <label htmlFor="option3" className="text-sm font-medium">
                    Option 3
                </label>
            </div>
            <div className="flex items-center space-x-2">
                <Checkbox id="option4" disabled />
                <label
                    htmlFor="option4"
                    className="text-sm font-medium opacity-50"
                >
                    Option 4 (Disabled)
                </label>
            </div>
        </div>
    ),
};

export const AllStates = {
    name: "All States Comparison",
    render: () => (
        <div className="flex flex-col gap-6">
            <div>
                <h3 className="text-sm font-semibold mb-3">기본 상태</h3>
                <div className="flex flex-col gap-3">
                    <div className="flex items-center space-x-3">
                        <Checkbox id="normal-unchecked" />
                        <label htmlFor="normal-unchecked" className="text-sm">
                            Unchecked (클릭 가능)
                        </label>
                    </div>
                    <div className="flex items-center space-x-3">
                        <Checkbox id="normal-checked" defaultChecked />
                        <label htmlFor="normal-checked" className="text-sm">
                            Checked (클릭 가능)
                        </label>
                    </div>
                </div>
            </div>

            <div>
                <h3 className="text-sm font-semibold mb-3">Disabled 상태</h3>
                <div className="flex flex-col gap-3">
                    <div className="flex items-center space-x-3">
                        <Checkbox id="disabled-unchecked" disabled />
                        <label
                            htmlFor="disabled-unchecked"
                            className="text-sm opacity-50"
                        >
                            Disabled Unchecked (X 아이콘)
                        </label>
                    </div>
                    <div className="flex items-center space-x-3">
                        <Checkbox
                            id="disabled-checked"
                            disabled
                            defaultChecked
                        />
                        <label
                            htmlFor="disabled-checked"
                            className="text-sm opacity-50"
                        >
                            Disabled Checked (체크 아이콘)
                        </label>
                    </div>
                </div>
            </div>

            <div>
                <h3 className="text-sm font-semibold mb-3">
                    Fixed 상태 (고정)
                </h3>
                <div className="flex flex-col gap-3">
                    <div className="flex items-center space-x-3">
                        <Checkbox id="fixed-checked" checked={true} fixed />
                        <label
                            htmlFor="fixed-checked"
                            className="text-sm"
                            style={{ color: "rgba(172, 167, 203, 1)" }}
                        >
                            Fixed Checked (변경 불가, 연한 보라색)
                        </label>
                    </div>
                </div>
            </div>
        </div>
    ),
};
