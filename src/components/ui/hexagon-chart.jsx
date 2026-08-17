import * as React from "react";

import { cn } from "@/lib/utils";

const AXES = 6;
const DEFAULT_MAX = 100;
const DEFAULT_GRID_LEVELS = 5;

/** 시계 방향: 상단부터 — 외모, 성격, 학력, 직업, 자산, 집안 */
const DEFAULT_DATA = [
    { label: "외모", value: 34 },
    { label: "성격", value: 65 },
    { label: "학력", value: 92 },
    { label: "직업", value: 92 },
    { label: "자산", value: 85 },
    { label: "집안", value: 79 },
];

function axisAngle(index) {
    return -Math.PI / 2 + (index * 2 * Math.PI) / AXES;
}

function vertexAt(cx, cy, radius, index, scale = 1) {
    const angle = axisAngle(index);
    const r = radius * scale;
    return {
        x: cx + r * Math.cos(angle),
        y: cy + r * Math.sin(angle),
    };
}

function toPolygonPoints(cx, cy, radius, values, max) {
    return values.map((value, index) =>
        vertexAt(cx, cy, radius, index, Math.min(value / max, 1)),
    );
}

function polygonPath(points) {
    if (!points.length) return "";
    const [first, ...rest] = points;
    return (
        `M ${first.x} ${first.y} ` +
        rest.map((p) => `L ${p.x} ${p.y}`).join(" ") +
        " Z"
    );
}

function normalizeItems(items) {
    return items.slice(0, AXES).map((item, index) => ({
        label: item.label ?? `항목${index + 1}`,
        value: Number(item.value) || 0,
        delta:
            item.delta === undefined || item.delta === null
                ? undefined
                : Number(item.delta),
    }));
}

function HexagonChart({
    className,
    data = DEFAULT_DATA,
    max = DEFAULT_MAX,
    gridLevels = DEFAULT_GRID_LEVELS,
    showLegend = true,
    showDelta = false,
    legendLabelMaxWidth = 96,
    size = 220,
    title,
    ...props
}) {
    const items = normalizeItems(data);
    const values = items.map((item) => item.value);

    const padding = 28;
    const viewSize = size + padding * 2;
    const cx = viewSize / 2;
    const cy = viewSize / 2;
    const radius = size / 2 - 8;

    const gridPaths = Array.from({ length: gridLevels }, (_, level) => {
        const scale = (level + 1) / gridLevels;
        const points = Array.from({ length: AXES }, (_, i) =>
            vertexAt(cx, cy, radius, i, scale),
        );
        return polygonPath(points);
    });

    const dataPoints = toPolygonPoints(cx, cy, radius, values, max);
    const dataPath = polygonPath(dataPoints);

    const labelRadius = radius * 1.22;
    const labelPositions = items.map((_, index) => {
        const { x, y } = vertexAt(cx, cy, labelRadius, index);
        return {
            x: ((x / viewSize) * 100).toFixed(2),
            y: ((y / viewSize) * 100).toFixed(2),
        };
    });

    const leftLegend = items.filter((_, i) => i % 2 === 0);
    const rightLegend = items.filter((_, i) => i % 2 === 1);

    return (
        <div
            data-slot="hexagon-chart"
            className={cn("w-full min-w-0", className)}
            {...props}
        >
            {title && (
                <div className="text-[14px] mb-[6px] font-semibold">{title}</div>
            )}
            <div
                className="relative mx-auto w-full max-w-[280px] overflow-visible"
                style={{ aspectRatio: "1 / 1" }}
            >
                <svg
                    viewBox={`0 0 ${viewSize} ${viewSize}`}
                    className="size-full"
                    role="img"
                    aria-label="육각형 능력치 차트"
                >
                    {gridPaths.map((d, i) => (
                        <path
                            key={`grid-${i}`}
                            d={d}
                            fill="none"
                            stroke="rgb(var(--gray-scale-3))"
                            strokeWidth={1}
                        />
                    ))}
                    {Array.from({ length: AXES }, (_, i) => {
                        const outer = vertexAt(cx, cy, radius, i);
                        return (
                            <line
                                key={`axis-${i}`}
                                x1={cx}
                                y1={cy}
                                x2={outer.x}
                                y2={outer.y}
                                stroke="rgb(var(--gray-scale-3))"
                                strokeWidth={1}
                            />
                        );
                    })}
                    <path
                        d={dataPath}
                        fill="rgb(var(--point-color-2))"
                        fillOpacity={0.25}
                        stroke="rgb(var(--point-color-1))"
                        strokeWidth={2}
                        strokeLinejoin="round"
                    />
                </svg>

                {items.map((item, index) => {
                    const pos = labelPositions[index];
                    return (
                        <span
                            key={`label-${item.label}-${index}`}
                            className="absolute text-center text-xs text-gray-6 max-w-[60px] truncate cursor-default"
                            style={{
                                left: `${pos.x}%`,
                                top: `${pos.y}%`,
                                transform: "translate(-50%, -50%)",
                            }}
                            title={item.label}
                        >
                            {item.label}
                        </span>
                    );
                })}
            </div>

            {showLegend ? (
                <div className="mt-4 border-t border-dashed border-gray-3 pt-4">
                    <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-gray-6">
                        <div className="flex flex-col gap-2">
                            {leftLegend.map((item) => (
                                <HexagonChartLegendRow
                                    key={item.label}
                                    item={item}
                                    labelMaxWidth={legendLabelMaxWidth}
                                />
                            ))}
                        </div>
                        <div className="flex flex-col gap-2">
                            {rightLegend.map((item) => (
                                <HexagonChartLegendRow
                                    key={item.label}
                                    item={item}
                                    labelMaxWidth={legendLabelMaxWidth}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    );
}

function HexagonChartLegendRow({ item, labelMaxWidth }) {
    const hasDelta =
        item.delta !== undefined &&
        !Number.isNaN(item.delta) &&
        item.delta !== 0;
    const deltaText =
        hasDelta && (item.delta > 0 ? `+${item.delta}` : `${item.delta}`);

    return (
        <div className="flex min-w-0 fz-14 items-baseline gap-[5px]">
            <span
                className="min-w-0 truncate font-medium"
                style={{ maxWidth: labelMaxWidth }}
                title={item.label}
            >
                {item.label}
            </span>
            <span className="shrink-0 tabular-nums font-semibold">
                ({item.value}
                {hasDelta ? (
                    <span
                        className={cn(
                            "ml-1",
                            item.delta > 0
                                ? "text-point-2"
                                : item.delta < 0
                                  ? "text-sub-6"
                                  : "text-gray-6",
                        )}
                    >
                        {deltaText}
                    </span>
                ) : null}
                )
            </span>
        </div>
    );
}

export { HexagonChart, DEFAULT_DATA, AXES };
