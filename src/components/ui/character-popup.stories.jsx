import React, { useState } from "react";
import { CharacterPopup } from "./character-popup";
import { Button } from "./button";

const meta = {
    title: "UI/CharacterPopup",
    component: CharacterPopup,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};

export default meta;

/**
 * 기본 캐릭터 팝업
 */
export const Default = {
    render: () => {
        const CharacterPopupExample = () => {
            const [isOpen, setIsOpen] = useState(false);

            return (
                <>
                    <Button variant="outline" onClick={() => setIsOpen(true)}>
                        캐릭터 팝업 열기
                    </Button>

                    <CharacterPopup open={isOpen} onOpenChange={setIsOpen} />
                </>
            );
        };

        return <CharacterPopupExample />;
    },
};
