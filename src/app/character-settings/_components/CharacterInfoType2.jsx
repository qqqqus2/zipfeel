"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";

import { characterData, statusIconMap } from "@/data/characterData";

// 상세 셀 컴포넌트
function CharacterDetailCell({ row, onSelect, isLast }) {
    // metaLines를 역순으로 (애칭, 호칭 순서로 변경)
    const reversedMetaLines = [...(row.metaLines || [])].reverse();

    return (
        <div
            className={`flex min-w-0 flex-1 flex-col gap-2 py-3 px-4 cursor-pointer hover:bg-gray-1 transition-colors ${!isLast ? "border-b border-gray-2" : ""}`}
            onClick={() => onSelect?.(row)}
        >
            <div className="flex min-w-0 flex-col gap-0.5">
                {/* Status 표시 */}
                <div className="flex items-center justify-between gap-1 mb-1">
                    <span className="fz-12">{row.role}</span>
                    <div className="flex items-center gap-1">
                        {statusIconMap[row.status] && (
                            <Icon
                                name={statusIconMap[row.status]}
                                size={16}
                                className="text-[#000]"
                            />
                        )}
                        <span className="text-xs font-medium text-[#000]">
                            {row.status}
                        </span>
                    </div>
                </div>

                {/* metaLines 표시 */}
                <div className="flex min-w-0 items-center gap-x-1 text-xs text-muted-foreground">
                    {reversedMetaLines.map((line, i) => (
                        <React.Fragment key={`${i}-${line.label}`}>
                            {i > 0 && (
                                <span
                                    className="shrink-0 text-muted-foreground px-1"
                                    aria-hidden
                                >
                                    ·
                                </span>
                            )}
                            <div className="flex items-center gap-1 min-w-0 flex-1">
                                <span className="shrink-0 font-bold text-foreground">
                                    {line.label}
                                </span>
                                <span className="truncate">{line.text}</span>
                            </div>
                        </React.Fragment>
                    ))}
                </div>
                <p className="m-0 min-w-0 text-sm font-bold whitespace-normal break-words line-clamp-2">
                    {row.title}
                </p>
                <p className="m-0 min-w-0 text-xs text-muted-foreground whitespace-normal break-words">
                    {row.summary}
                </p>
            </div>
            <div
                className="flex w-full flex-wrap items-center justify-between gap-x-1 gap-y-2 "
                onClick={(e) => e.stopPropagation()}
            >
                <div>
                    <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="p-0"
                        onClick={(e) => {
                            e.stopPropagation();
                            window.location.href = `/character-settings?id=${row.id}`;
                        }}
                    >
                        <Icon name="eyeglasses" size={16} />
                        보기
                    </Button>
                </div>

                <Button type="button" variant="ghost" size="sm">
                    <Icon name="balance" size={16} />
                    비교
                </Button>
            </div>
        </div>
    );
}

/**
 * CharacterInfoType2 - 캐릭터 정보 컴포넌트 (좌측 영역용)
 */
export const CharacterInfoType2 = () => {
    const [characters] = useState(characterData);
    const [selectedCharacter, setSelectedCharacter] = useState(null);

    const handleSearch = () => {
        console.log("검색 실행");
    };

    const handleSelectCharacter = (character) => {
        setSelectedCharacter(character);
        console.log("선택된 캐릭터:", character);
    };

    return (
        <div className="w-full h-full overflow-hidden flex flex-col">
            {/* 헤더 영역 */}
            <div className="mt-[15px] mb-2.5 px-4 flex justify-between items-center flex-shrink-0">
                <span className="text-sm font-medium">
                    {characters.length} 개
                </span>
                <div>
                    <Input type="search" onSearch={handleSearch} />
                </div>
            </div>

            {/* 상세 셀 영역 */}
            <div className="h-full overflow-y-auto border-1 border-[#ebebeb] rounded-[10px] custom-scrollbar min-h-0">
                {characters.map((character, index) => (
                    <CharacterDetailCell
                        key={character.id}
                        row={character}
                        onSelect={handleSelectCharacter}
                        isLast={index === 1}
                    />
                ))}
            </div>
            {/* 상세 셀 영역 - data 없을때 */}
            {/* <div className="flex-1 bg-point-1 flex text-white rounded-tl-[20px] rounded-br-[20px]">
                <div className="flex flex-col gap-2 items-center text-center relative mt-[100px] fz-14 mx-auto">
                    <Icon name="sms" size={24} className="text-white" />
                    등록된 캐릭터가 없어요. <br />
                    인물 관리 화면에서 캐릭터를 등록해주세요.
                </div>
            </div> */}
        </div>
    );
};
