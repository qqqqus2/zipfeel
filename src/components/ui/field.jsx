"use client";

import * as React from "react";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

function FieldSet({ className, ...props }) {
    return (
        <fieldset
            data-slot="field-set"
            className={cn(
                "flex flex-col gap-6",
                "has-[>[data-slot=checkbox-group]]:gap-3 has-[>[data-slot=radio-group]]:gap-3",
                className,
            )}
            {...props}
        />
    );
}

function FieldLegend({ className, variant = "legend", ...props }) {
    return (
        <legend
            data-slot="field-legend"
            data-variant={variant}
            className={cn(
                "mb-3 font-medium",
                "data-[variant=legend]:text-base",
                "data-[variant=label]:text-sm",
                className,
            )}
            {...props}
        />
    );
}

function FieldGroup({ className, ...props }) {
    return (
        <div
            data-slot="field-group"
            className={cn(
                "group/field-group @container/field-group flex w-full flex-col gap-7 data-[slot=checkbox-group]:gap-3 [&>[data-slot=field-group]]:gap-4",
                className,
            )}
            {...props}
        />
    );
}

const fieldVariants = cva(
    "group/field data-[invalid=true]:text-destructive flex w-full min-w-0 gap-3",
    {
        variants: {
            orientation: {
                vertical: ["flex-col [&>*]:w-full [&>.sr-only]:w-auto"],
                horizontal: [
                    "flex-row items-center",
                    "[&>[data-slot=field-label]]:flex-auto",
                    "has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px has-[>[data-slot=field-content]]:items-start",
                ],
                responsive: [
                    "@md/field-group:flex-row @md/field-group:items-center @md/field-group:[&>*]:w-auto flex-col [&>*]:w-full [&>.sr-only]:w-auto",
                    "@md/field-group:[&>[data-slot=field-label]]:flex-auto",
                    "@md/field-group:has-[>[data-slot=field-content]]:items-start @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px",
                ],
            },
        },
        defaultVariants: {
            orientation: "vertical",
        },
    },
);

function Field({ className, orientation = "vertical", invalid, ...props }) {
    const {
        "data-invalid": dataInvalidProp,
        className: propsClassName,
        ...rest
    } = props;
    const isInvalid =
        invalid === true ||
        (invalid !== false &&
            (dataInvalidProp === true || dataInvalidProp === ""));

    return (
        <div
            role="group"
            data-slot="field"
            data-orientation={orientation}
            data-invalid={isInvalid ? "true" : undefined}
            className={cn(
                fieldVariants({ orientation }),
                className,
                propsClassName,
            )}
            {...rest}
        />
    );
}

function FieldContent({ className, ...props }) {
    return (
        <div
            data-slot="field-content"
            className={cn(
                "group/field-content flex flex-1 flex-col gap-[6px] leading-snug",
                className,
            )}
            {...props}
        />
    );
}

function FieldLabel({ className, required, children, ...props }) {
    return (
        <Label
            data-slot="field-label"
            data-required={required ? "" : undefined}
            className={cn(
                "group/field-label peer/field-label flex w-fit gap-1 leading-snug group-data-[disabled=true]/field:opacity-50 group-data-[invalid=true]/field:text-destructive",
                "has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col has-[>[data-slot=field]]:rounded-md has-[>[data-slot=field]]:border [&>[data-slot=field]]:p-4",
                "has-data-[state=checked]:bg-primary/5 has-data-[state=checked]:border-primary dark:has-data-[state=checked]:bg-primary/10",
                className,
            )}
            {...props}
        >
            {children}
            {required ? (
                <span className="text-sub-2" aria-hidden="true">
                    *
                </span>
            ) : null}
        </Label>
    );
}

function FieldTitle({ className, required, children, ...props }) {
    return (
        <div
            data-slot="field-label"
            data-required={required ? "" : undefined}
            className={cn(
                "flex w-fit items-center gap-2 text-sm font-medium leading-snug group-data-[disabled=true]/field:opacity-50 group-data-[invalid=true]/field:text-destructive",
                className,
            )}
            {...props}
        >
            {children}
            {required ? (
                <span className="text-destructive" aria-hidden="true">
                    *
                </span>
            ) : null}
        </div>
    );
}

function FieldDescription({ className, ...props }) {
    return (
        <p
            data-slot="field-description"
            className={cn(
                "text-muted-foreground text-sm font-normal leading-normal group-has-[[data-orientation=horizontal]]/field:text-balance",
                "nth-last-2:-mt-1 last:mt-0 [[data-variant=legend]+&]:-mt-1.5",
                "[&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4",
                className,
            )}
            {...props}
        />
    );
}

function FieldSeparator({ children, className, ...props }) {
    return (
        <div
            data-slot="field-separator"
            data-content={!!children}
            className={cn(
                "relative -my-2 h-5 text-sm group-data-[variant=outline]/field-group:-mb-2",
                className,
            )}
            {...props}
        >
            <Separator className="absolute inset-0 top-1/2" />
            {children && (
                <span
                    className="bg-background text-muted-foreground relative mx-auto block w-fit px-2"
                    data-slot="field-separator-content"
                >
                    {children}
                </span>
            )}
        </div>
    );
}

function FieldMessage({
    className,
    children,
    errors,
    type = "error",
    ...props
}) {
    const content = React.useMemo(() => {
        if (children) {
            return children;
        }

        if (!errors) {
            return null;
        }

        if (errors?.length === 1 && errors[0]?.message) {
            return errors[0].message;
        }

        return (
            <ul className="ml-4 flex list-disc flex-col gap-1">
                {errors.map(
                    (error, index) =>
                        error?.message && <li key={index}>{error.message}</li>,
                )}
            </ul>
        );
    }, [children, errors]);

    if (!content) {
        return null;
    }

    const isError = type === "error";
    const isSuccess = type === "success";

    return (
        <div
            role={isError ? "alert" : "status"}
            data-slot={isError ? "field-error" : "field-success"}
            className={cn(
                "text-xs font-normal flex items-start gap-1",
                isError && "text-destructive",
                isSuccess && "text-point-2",
                className,
            )}
            {...props}
        >
            {isError && (
                <svg
                    className="size-6 shrink-0"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M5.5 13H7V12.5208C7 11.6875 7.29167 10.9792 7.875 10.3958C8.45833 9.8125 9.16667 9.52083 10 9.52083C10.8333 9.52083 11.5417 9.8125 12.125 10.3958C12.7083 10.9792 13 11.6875 13 12.5208V13H14.5V12.5208C14.5 11.2708 14.0625 10.2083 13.1875 9.33333C12.3125 8.45833 11.25 8.02083 10 8.02083C8.75 8.02083 7.6875 8.45833 6.8125 9.33333C5.9375 10.2083 5.5 11.2708 5.5 12.5208V13ZM6.10417 7.75C6.65972 7.68056 7.24306 7.47569 7.85417 7.13542C8.46528 6.79514 8.95139 6.41667 9.3125 6L8.1875 5C7.9375 5.27778 7.58681 5.54167 7.13542 5.79167C6.68403 6.04167 6.27083 6.19444 5.89583 6.25L6.10417 7.75ZM13.8958 7.75L14.1042 6.25C13.7292 6.19444 13.316 6.04167 12.8646 5.79167C12.4132 5.54167 12.0625 5.27778 11.8125 5L10.6875 6C11.0486 6.41667 11.5347 6.79514 12.1458 7.13542C12.7569 7.47569 13.3403 7.68056 13.8958 7.75ZM6.89583 17.375C5.92361 16.9583 5.07292 16.3854 4.34375 15.6562C3.61458 14.9271 3.04167 14.0764 2.625 13.1042C2.20833 12.1319 2 11.0938 2 9.98958C2 8.88542 2.20833 7.85069 2.625 6.88542C3.04167 5.92014 3.61458 5.07292 4.34375 4.34375C5.07292 3.61458 5.92361 3.04167 6.89583 2.625C7.86806 2.20833 8.90625 2 10.0104 2C11.1146 2 12.1493 2.20833 13.1146 2.625C14.0799 3.04167 14.9271 3.61458 15.6562 4.34375C16.3854 5.07292 16.9583 5.92014 17.375 6.88542C17.7917 7.85069 18 8.88542 18 9.98958C18 11.0938 17.7917 12.1319 17.375 13.1042C16.9583 14.0764 16.3854 14.9271 15.6562 15.6562C14.9271 16.3854 14.0799 16.9583 13.1146 17.375C12.1493 17.7917 11.1146 18 10.0104 18C8.90625 18 7.86806 17.7917 6.89583 17.375Z"
                        fill="currentColor"
                    />
                </svg>
            )}
            {isSuccess && (
                <svg
                    className="size-6 shrink-0"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M11.6667 12.4368C12.1528 12.0618 12.5139 11.5827 12.75 10.9993H7.25C7.48611 11.5827 7.84785 12.0618 8.33521 12.4368C8.82257 12.8118 9.37812 12.9993 10.0019 12.9993C10.6256 12.9993 11.1806 12.8118 11.6667 12.4368ZM8.70833 9.70768C8.90278 9.51324 9 9.27713 9 8.99935C9 8.72157 8.90278 8.48546 8.70833 8.29102C8.51389 8.09657 8.27778 7.99935 8 7.99935C7.72222 7.99935 7.48611 8.09657 7.29167 8.29102C7.09722 8.48546 7 8.72157 7 8.99935C7 9.27713 7.09722 9.51324 7.29167 9.70768C7.48611 9.90213 7.72222 9.99935 8 9.99935C8.27778 9.99935 8.51389 9.90213 8.70833 9.70768ZM12.7083 9.70768C12.9028 9.51324 13 9.27713 13 8.99935C13 8.72157 12.9028 8.48546 12.7083 8.29102C12.5139 8.09657 12.2778 7.99935 12 7.99935C11.7222 7.99935 11.4861 8.09657 11.2917 8.29102C11.0972 8.48546 11 8.72157 11 8.99935C11 9.27713 11.0972 9.51324 11.2917 9.70768C11.4861 9.90213 11.7222 9.99935 12 9.99935C12.2778 9.99935 12.5139 9.90213 12.7083 9.70768ZM6.54167 5.45768L8.83333 2.49935C8.98347 2.29865 9.16188 2.15122 9.36854 2.05706C9.57507 1.96303 9.79097 1.91602 10.0163 1.91602C10.2415 1.91602 10.4549 1.96463 10.6562 2.06185C10.8576 2.15907 11.0347 2.3049 11.1875 2.49935L13.4792 5.45768L16.9792 6.60352C17.2986 6.71463 17.5486 6.90004 17.7292 7.15977C17.9097 7.41935 18 7.70615 18 8.02018C18 8.16907 17.979 8.31803 17.9369 8.46706C17.8947 8.61595 17.8254 8.75865 17.7292 8.89518L15.4792 12.041L15.5625 15.416C15.5625 15.8466 15.4167 16.2112 15.125 16.5098C14.8333 16.8084 14.4849 16.9577 14.0796 16.9577C14.0543 16.9577 13.9236 16.9368 13.6875 16.8952L10 15.8743L6.31146 16.896C6.24271 16.9232 6.17708 16.9403 6.11458 16.9473C6.05208 16.9542 5.98938 16.9577 5.92646 16.9577C5.52382 16.9577 5.17153 16.8084 4.86958 16.5098C4.56764 16.2112 4.42361 15.8466 4.4375 15.416L4.52083 12.041L2.27083 8.89518C2.17361 8.75629 2.10417 8.6174 2.0625 8.47852C2.02083 8.33963 2 8.19358 2 8.04039C2 7.72136 2.09153 7.42977 2.27458 7.1656C2.45764 6.90143 2.71333 6.71407 3.04167 6.60352L6.54167 5.45768Z"
                        fill="currentColor"
                    />
                </svg>
            )}
            <span className="pt-[3px]">{content}</span>
        </div>
    );
}

// 하위 호환성을 위한 alias
const FieldError = (props) => <FieldMessage type="error" {...props} />;
const FieldSuccess = (props) => <FieldMessage type="success" {...props} />;

export {
    Field,
    FieldLabel,
    FieldDescription,
    FieldMessage,
    FieldError,
    FieldSuccess,
    FieldGroup,
    FieldLegend,
    FieldSeparator,
    FieldSet,
    FieldContent,
    FieldTitle,
};
