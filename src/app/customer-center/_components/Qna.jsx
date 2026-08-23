"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { Icon } from "@/components/ui/icon";
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "@/components/ui/accordion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { HexagonChart } from "@/components/ui/hexagon-chart";

/**
 * Q&A
 */
export const Qna = () => {
    return (
        <div className="pt-[30px] flex flex-col gap-[30px]">
            <div className="h-[210px] bg-point-3 text-center flex items-center justify-center">
                Event Banner
            </div>
        </div>
    );
};
