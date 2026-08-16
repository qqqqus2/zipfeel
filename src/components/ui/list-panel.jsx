"use client";

import * as React from "react";
import { createPortal } from "react-dom";
import {
    DndContext,
    DragOverlay,
    KeyboardSensor,
    PointerSensor,
    closestCenter,
    useSensor,
    useSensors,
} from "@dnd-kit/core";
import {
    SortableContext,
    arrayMove,
    sortableKeyboardCoordinates,
    useSortable,
    verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { GripVertical } from "lucide-react";

import { cn } from "@/lib/utils";

/**
 * 드래그 가능한 리스트 아이템
 */
function SortableListItem({ id, content, disabled = false }) {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging,
    } = useSortable({ id, disabled });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
        <div
            ref={setNodeRef}
            style={style}
            className={cn(
                "group flex items-center gap-3 rounded-md border border-input bg-background px-3 py-2.5",
                "shadow-sm",
                isDragging && "opacity-50",
                disabled && "cursor-not-allowed opacity-50",
            )}
        >
            <button
                type="button"
                className={cn(
                    "inline-flex size-6 items-center justify-center rounded-sm",
                    "text-muted-foreground hover:text-gray-6",
                    "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
                    disabled && "cursor-not-allowed",
                )}
                aria-label="드래그 핸들"
                {...attributes}
                {...listeners}
            >
                <GripVertical className="size-4" aria-hidden />
            </button>

            <div className="min-w-0 flex-1">
                <div className="truncate text-sm font-medium text-gray-6">
                    {content}
                </div>
            </div>
        </div>
    );
}

/**
 * 드래그 오버레이용 아이템
 */
function DragOverlayItem({ content }) {
    return (
        <div
            className={cn(
                "flex items-center gap-3 rounded-md border border-input bg-background px-3 py-2.5",
                "shadow-lg",
            )}
        >
            <div className="inline-flex size-6 items-center justify-center rounded-sm text-muted-foreground">
                <GripVertical className="size-4" aria-hidden />
            </div>
            <div className="min-w-0 flex-1">
                <div className="truncate text-sm font-medium text-gray-6">
                    {content}
                </div>
            </div>
        </div>
    );
}

/**
 * 300px 너비의 드래그 앤 드롭 리스트 패널
 *
 * @param {{
 *   items: Array<{ id: string; content: React.ReactNode; disabled?: boolean }>;
 *   onItemsChange?: (items: Array) => void;
 *   title?: React.ReactNode;
 *   description?: React.ReactNode;
 *   className?: string;
 * }} props
 */
export function ListPanel({
    items = [],
    onItemsChange,
    title,
    description,
    className,
}) {
    const [activeId, setActiveId] = React.useState(null);

    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: { distance: 8 },
        }),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        }),
    );

    const activeItem = activeId
        ? items.find((item) => item.id === activeId)
        : null;

    const handleDragStart = (event) => {
        setActiveId(event.active?.id ?? null);
    };

    const handleDragEnd = (event) => {
        const { active, over } = event;

        if (active && over && active.id !== over.id) {
            const oldIndex = items.findIndex((item) => item.id === active.id);
            const newIndex = items.findIndex((item) => item.id === over.id);

            if (oldIndex !== -1 && newIndex !== -1) {
                const newItems = arrayMove(items, oldIndex, newIndex);
                onItemsChange?.(newItems);
            }
        }

        setActiveId(null);
    };

    const handleDragCancel = () => {
        setActiveId(null);
    };

    return (
        <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            onDragCancel={handleDragCancel}
        >
            <div
                className={cn(
                    "w-[300px] rounded-lg bg-white",
                    "shadow-[5px_5px_10px_0px_rgb(230_230_230_/_0.8),-5px_-5px_10px_0px_rgb(255_255_255_/_0.2)]",
                    "p-4",
                    className,
                )}
            >
                {/* 헤더 */}
                {(title || description) && (
                    <div className="mb-4">
                        {title && (
                            <h3 className="text-base font-semibold leading-6">
                                {title}
                            </h3>
                        )}
                        {description && (
                            <p className="mt-1 text-sm text-muted-foreground">
                                {description}
                            </p>
                        )}
                    </div>
                )}

                {/* 드래그 가능한 리스트 */}
                <SortableContext
                    items={items.map((item) => item.id)}
                    strategy={verticalListSortingStrategy}
                >
                    <div className="flex flex-col gap-2">
                        {items.map((item) => (
                            <SortableListItem
                                key={item.id}
                                id={item.id}
                                content={item.content}
                                disabled={item.disabled}
                            />
                        ))}
                    </div>
                </SortableContext>

                {/* 빈 상태 */}
                {items.length === 0 && (
                    <div className="py-8 text-center text-sm text-muted-foreground">
                        항목이 없습니다.
                    </div>
                )}
            </div>

            {/* 드래그 오버레이 */}
            {typeof document !== "undefined"
                ? createPortal(
                      <DragOverlay>
                          {activeItem ? (
                              <DragOverlayItem content={activeItem.content} />
                          ) : null}
                      </DragOverlay>,
                      document.body,
                  )
                : null}
        </DndContext>
    );
}
