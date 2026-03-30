"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Textarea.displayName = "Textarea"

type TextareaBoxProps = {
  /** 라벨 텍스트 (기본: "항목명") */
  label?: string
  /** 라벨 노출 여부 (기본: true) */
  showLabel?: boolean
  /** 글자수 카운터 노출 여부 (기본: true) */
  showCount?: boolean
  /** 최대 글자수(표시용). 지정 시 maxLength도 기본 적용 (기본: 5000) */
  max?: number
  /** 바깥 박스 클래스 */
  containerClassName?: string
  /** 라벨/카운터 줄 클래스 */
  headerClassName?: string
} & Omit<React.ComponentProps<typeof Textarea>, "maxLength">

function getValueLength(v: unknown) {
  return typeof v === "string" ? v.length : 0
}

function TextareaBox({
  label = "항목명",
  showLabel = true,
  showCount = true,
  max = 5000,
  containerClassName,
  headerClassName,
  className,
  value,
  defaultValue,
  onChange,
  ...props
}: TextareaBoxProps) {
  const isControlled = value !== undefined
  const [internal, setInternal] = React.useState(
    typeof defaultValue === "string" ? defaultValue : ""
  )

  const currentValue = isControlled ? (value as string) : internal
  const count = getValueLength(currentValue)

  return (
    <div className={cn("rounded-lg border bg-card px-4 py-3", containerClassName)}>
      {(showLabel || showCount) && (
        <div
          className={cn(
            "flex items-center justify-between gap-4",
            headerClassName
          )}
        >
          {showLabel ? (
            <span className="text-sm font-medium text-foreground">{label}</span>
          ) : (
            <span />
          )}
          {showCount ? (
            <span className="text-sm tabular-nums text-muted-foreground">
              {count} / {max}
            </span>
          ) : null}
        </div>
      )}

      <Textarea
        {...props}
        value={currentValue}
        onChange={(e) => {
          onChange?.(e)
          if (!isControlled) setInternal(e.target.value)
        }}
        maxLength={max}
        className={cn(
          "mt-2 min-h-[92px] resize-none border-0 bg-transparent px-0 py-0 shadow-none focus-visible:ring-0",
          className
        )}
      />
    </div>
  )
}

export { Textarea, TextareaBox }
