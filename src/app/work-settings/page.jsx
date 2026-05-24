"use client";

import { CommonLayout } from "@/components/layout/CommonLayout";
import { Button } from "@/components/ui/button";
import {
    Field,
    FieldContent,
    FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function WorkSettings() {
    return (
        <CommonLayout
            title="작품 설정"
            description="작품의 기본 정보와 설정을 관리합니다"
        >
            <div className="space-y-6">
                <Field>
                    <FieldLabel htmlFor="work-title" required={true}>
                        작품 제목
                    </FieldLabel>
                    <FieldContent>
                        <Input
                            id="work-title"
                            type="text"
                            placeholder="작품 제목을 입력하세요"
                        />
                    </FieldContent>
                </Field>

                <Field>
                    <FieldLabel htmlFor="work-subtitle">
                        부제목
                    </FieldLabel>
                    <FieldContent>
                        <Input
                            id="work-subtitle"
                            type="text"
                            placeholder="부제목을 입력하세요 (선택사항)"
                        />
                    </FieldContent>
                </Field>

                <Field>
                    <FieldLabel htmlFor="work-genre" required={true}>
                        장르
                    </FieldLabel>
                    <FieldContent>
                        <Input
                            id="work-genre"
                            type="text"
                            placeholder="예: 판타지, 로맨스, SF 등"
                        />
                    </FieldContent>
                </Field>

                <Field>
                    <FieldLabel htmlFor="work-description">
                        작품 소개
                    </FieldLabel>
                    <FieldContent>
                        <Textarea
                            id="work-description"
                            placeholder="작품에 대한 간단한 소개를 입력하세요"
                            rows={5}
                        />
                    </FieldContent>
                </Field>

                <Field>
                    <FieldLabel htmlFor="work-target">
                        타겟 독자
                    </FieldLabel>
                    <FieldContent>
                        <Input
                            id="work-target"
                            type="text"
                            placeholder="예: 10대, 20-30대 여성 등"
                        />
                    </FieldContent>
                </Field>

                <div className="flex gap-3 justify-end pt-4 border-t border-gray-2">
                    <Button variant="outline">취소</Button>
                    <Button variant="point1">저장</Button>
                </div>
            </div>
        </CommonLayout>
    );
}
