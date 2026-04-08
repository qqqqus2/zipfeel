"use client";

import * as React from "react";
import { createPortal } from "react-dom";
import {
  DndContext,
  DragOverlay,
  KeyboardSensor,
  PointerSensor,
  closestCorners,
  useDroppable,
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
import { Check, GripVertical, Pencil } from "lucide-react";

import { cn } from "@/lib/utils";

function isContainerId(id, containers) {
  return containers.some((c) => c.id === id);
}

function findContainerId({ containers, itemId }) {
  for (const c of containers) {
    if (c.items.some((it) => it.id === itemId)) return c.id;
  }
  return null;
}

function getItemById({ containers, itemId }) {
  for (const c of containers) {
    const found = c.items.find((it) => it.id === itemId);
    if (found) return found;
  }
  return null;
}

function moveItemBetweenContainers({
  containers,
  activeId,
  overId,
  overIsContainer,
  insertPosition = "before",
}) {
  const fromId = findContainerId({ containers, itemId: activeId });
  if (!fromId) return containers;

  const toId = overIsContainer
    ? overId
    : findContainerId({ containers, itemId: overId });
  if (!toId) return containers;

  if (fromId === toId && !overIsContainer) {
    const container = containers.find((c) => c.id === fromId);
    const oldIndex = container.items.findIndex((it) => it.id === activeId);
    const newIndex = container.items.findIndex((it) => it.id === overId);
    if (oldIndex < 0 || newIndex < 0 || oldIndex === newIndex)
      return containers;
    return containers.map((c) =>
      c.id === fromId
        ? { ...c, items: arrayMove(c.items, oldIndex, newIndex) }
        : c,
    );
  }

  const activeItem = getItemById({ containers, itemId: activeId });
  if (!activeItem) return containers;

  return containers.map((c) => {
    if (c.id === fromId) {
      return { ...c, items: c.items.filter((it) => it.id !== activeId) };
    }
    if (c.id === toId) {
      if (overIsContainer) {
        return { ...c, items: [...c.items, activeItem] };
      }
      const overIndex = c.items.findIndex((it) => it.id === overId);
      if (overIndex < 0) return { ...c, items: [...c.items, activeItem] };
      const next = [...c.items];
      const index = insertPosition === "after" ? overIndex + 1 : overIndex;
      next.splice(index, 0, activeItem);
      return { ...c, items: next };
    }
    return c;
  });
}

function DropContainer({ id, title, description, className, children }) {
  const { setNodeRef, isOver } = useDroppable({ id });
  return (
    <section
      ref={setNodeRef}
      className={cn(
        "rounded-lg bg-white text-card-foreground",
        "shadow-[5px_5px_10px_0px_rgb(230_230_230_/_0.8),-5px_-5px_10px_0px_rgb(255_255_255_/_0.2)]",
        "p-4",
        isOver && "ring-2 ring-point-2/60",
        className,
      )}
      aria-label={title}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <div className="truncate text-base font-semibold leading-6">
            {title}
          </div>
          {description ? (
            <div className="mt-0.5 text-sm text-muted-foreground">
              {description}
            </div>
          ) : null}
        </div>
      </div>
      <div className="mt-3">{children}</div>
    </section>
  );
}

function SortableCardItem({
  id,
  title,
  meta,
  leading,
  trailing,
  className,
  disabled = false,
  showHandle = true,
  handlePlacement = "start",
}) {
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
        "group flex items-start gap-3 rounded-md border border-input bg-background px-3 py-2.5",
        "shadow-sm",
        isDragging && "opacity-60",
        className,
      )}
    >
      {leading ? <div className="mt-0.5 shrink-0">{leading}</div> : null}

      {showHandle && handlePlacement === "start" ? (
        <button
          type="button"
          className={cn(
            "mt-0.5 inline-flex size-7 items-center justify-center rounded-sm",
            "text-muted-foreground hover:text-foreground",
            "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
            disabled && "cursor-not-allowed opacity-50",
          )}
          aria-label="드래그 핸들"
          {...attributes}
          {...listeners}
        >
          <GripVertical className="size-4" aria-hidden />
        </button>
      ) : null}

      <div className="min-w-0 flex-1">
        <div className="truncate text-sm font-medium text-foreground">
          {title}
        </div>
        {meta ? (
          <div className="mt-0.5 line-clamp-2 text-xs text-muted-foreground">
            {meta}
          </div>
        ) : null}
      </div>

      {trailing ? (
        <div className="mt-0.5 flex shrink-0 items-center gap-1 text-muted-foreground">
          {trailing}
        </div>
      ) : null}

      {showHandle && handlePlacement === "end" ? (
        <button
          type="button"
          className={cn(
            "mt-0.5 inline-flex size-7 items-center justify-center rounded-sm",
            "text-muted-foreground hover:text-foreground",
            "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
            disabled && "cursor-not-allowed opacity-50",
          )}
          aria-label="드래그 핸들"
          {...attributes}
          {...listeners}
        >
          <GripVertical className="size-4" aria-hidden />
        </button>
      ) : null}
    </div>
  );
}

function DragOverlayCard({ title, meta }) {
  return (
    <div
      className={cn(
        "flex items-start gap-3 rounded-md border border-input bg-background px-3 py-2.5",
        "shadow-md",
      )}
    >
      <div className="mt-0.5 inline-flex size-7 items-center justify-center rounded-sm text-muted-foreground">
        <GripVertical className="size-4" aria-hidden />
      </div>
      <div className="min-w-0 flex-1">
        <div className="truncate text-sm font-medium text-foreground">
          {title}
        </div>
        {meta ? (
          <div className="mt-0.5 line-clamp-2 text-xs text-muted-foreground">
            {meta}
          </div>
        ) : null}
      </div>
    </div>
  );
}

function DropIndicator({ className }) {
  return (
    <div
      className={cn(
        "relative h-2",
        "before:absolute before:left-0 before:right-0 before:top-1/2 before:-translate-y-1/2 before:h-[2px] before:rounded-full before:bg-point-2/70",
        className,
      )}
      aria-hidden
    />
  );
}

/**
 * shadcn/ui 톤의 Drag & Drop 보드.
 *
 * @param {{
 *  containers: Array<{ id: string; title: React.ReactNode; description?: React.ReactNode; items: Array<{ id: string; title: React.ReactNode; meta?: React.ReactNode; disabled?: boolean }> }>;
 *  onContainersChange?: (next: any) => void;
 *  className?: string;
 * }} props
 */
export function DragDropBoard({ containers, onContainersChange, className }) {
  const [activeId, setActiveId] = React.useState(null);
  const [indicator, setIndicator] = React.useState(null);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 6 } }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  const activeItem = activeId
    ? getItemById({ containers, itemId: activeId })
    : null;

  const onDragStart = (event) => {
    setActiveId(event.active?.id ?? null);
  };

  const onDragCancel = () => {
    setActiveId(null);
    setIndicator(null);
  };

  const onDragOver = (event) => {
    const active = event.active?.id;
    const over = event.over?.id;
    if (!active || !over || active === over) return;

    const overIsContainer = isContainerId(over, containers);
    if (overIsContainer) {
      setIndicator({ overId: over, position: "inside" });
      return;
    }

    const fromId = findContainerId({ containers, itemId: active });
    const toId = findContainerId({ containers, itemId: over });

    const overRect = event.over?.rect;
    const activeRect =
      event.active?.rect?.current?.translated ??
      event.active?.rect?.current?.initial;

    const position =
      overRect &&
      activeRect &&
      activeRect.top + activeRect.height / 2 >
        overRect.top + overRect.height / 2
        ? "after"
        : "before";

    setIndicator({ overId: over, position, containerId: toId ?? null });

    // 드래그 중엔 같은 컨테이너 정렬은 바꾸지 않고(튀는 느낌 방지),
    // 다른 컨테이너로 넘어갈 때만 미리보기로 이동시킵니다.
    if (fromId && toId && fromId !== toId) {
      const next = moveItemBetweenContainers({
        containers,
        activeId: active,
        overId: over,
        overIsContainer: false,
        insertPosition: position,
      });
      if (next !== containers) onContainersChange?.(next);
    }
  };

  const onDragEnd = (event) => {
    const active = event.active?.id;
    const over = event.over?.id;
    setActiveId(null);
    setIndicator(null);
    if (!active || !over || active === over) return;

    const overIsContainer = isContainerId(over, containers);

    if (overIsContainer) {
      const next = moveItemBetweenContainers({
        containers,
        activeId: active,
        overId: over,
        overIsContainer: true,
      });
      if (next !== containers) onContainersChange?.(next);
      return;
    }

    const fromId = findContainerId({ containers, itemId: active });
    const toId = findContainerId({ containers, itemId: over });
    if (!fromId || !toId) return;

    if (fromId === toId) {
      const container = containers.find((c) => c.id === fromId);
      const oldIndex = container.items.findIndex((it) => it.id === active);
      const newIndex = container.items.findIndex((it) => it.id === over);
      if (oldIndex < 0 || newIndex < 0 || oldIndex === newIndex) return;
      const next = containers.map((c) =>
        c.id === fromId
          ? { ...c, items: arrayMove(c.items, oldIndex, newIndex) }
          : c,
      );
      onContainersChange?.(next);
      return;
    }

    const insertPosition =
      indicator?.overId === over ? indicator.position : "before";
    const next = moveItemBetweenContainers({
      containers,
      activeId: active,
      overId: over,
      overIsContainer: false,
      insertPosition,
    });
    if (next !== containers) onContainersChange?.(next);
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCorners}
      onDragStart={onDragStart}
      onDragCancel={onDragCancel}
      onDragOver={onDragOver}
      onDragEnd={onDragEnd}
    >
      <div
        className={cn(
          "grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3",
          className,
        )}
      >
        {containers.map((container) => (
          <DropContainer
            key={container.id}
            id={container.id}
            title={container.title}
            description={container.description}
          >
            <SortableContext
              items={container.items.map((it) => it.id)}
              strategy={verticalListSortingStrategy}
            >
              <div className="flex flex-col gap-2">
                {container.items.map((it, index) => {
                  const showBefore =
                    indicator &&
                    indicator.overId === it.id &&
                    indicator.position === "before";
                  const showAfter =
                    indicator &&
                    indicator.overId === it.id &&
                    indicator.position === "after";

                  return (
                    <div key={it.id}>
                      {showBefore ? <DropIndicator /> : null}
                      <SortableCardItem
                        id={it.id}
                        title={it.title}
                        meta={it.meta}
                        disabled={Boolean(it.disabled)}
                        handlePlacement={container.handlePlacement ?? "start"}
                        leading={
                          container.variant === "list" ? (
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <Check
                                className="size-4 opacity-70"
                                aria-hidden
                              />
                              <div className="w-4 text-xs tabular-nums">
                                {index + 1}
                              </div>
                            </div>
                          ) : null
                        }
                        trailing={
                          container.variant === "list" ? (
                            <>
                              <button
                                type="button"
                                className="inline-flex size-7 items-center justify-center rounded-sm hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                                aria-label="수정"
                              >
                                <Pencil className="size-4" aria-hidden />
                              </button>
                            </>
                          ) : null
                        }
                        className={cn(
                          container.variant === "list" &&
                            "py-3 shadow-[5px_5px_10px_0px_rgb(230_230_230_/_0.35),-5px_-5px_10px_0px_rgb(255_255_255_/_0.15)]",
                        )}
                      />
                      {showAfter ? <DropIndicator /> : null}
                    </div>
                  );
                })}
              </div>
            </SortableContext>
          </DropContainer>
        ))}
      </div>

      {typeof document !== "undefined"
        ? createPortal(
            <DragOverlay className="pointer-events-none">
              {activeItem ? (
                <DragOverlayCard
                  title={activeItem.title}
                  meta={activeItem.meta}
                />
              ) : null}
            </DragOverlay>,
            document.body,
          )
        : null}
    </DndContext>
  );
}
