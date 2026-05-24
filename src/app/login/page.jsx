"use client";

import { Button } from "@/components/ui/button";
import {
    Field,
    FieldContent,
    FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function Login() {
    return (
        <div className="space-y-8 pt-9 md:pt-[42px] max-w-[330px] mx-auto">
            <div className="text-center mb-8">
                <h1 className="text-2xl font-bold text-gray-6 mb-2">로그인</h1>
                <p className="text-sm text-gray-5">
                    Zipfeel에 오신 것을 환영합니다
                </p>
            </div>

            <Field>
                <FieldLabel htmlFor="field-email" required={true}>
                    이메일
                </FieldLabel>
                <FieldContent>
                    <Input
                        id="field-email"
                        type="email"
                        placeholder="이메일을 입력하세요"
                    />
                </FieldContent>
            </Field>

            <Field>
                <FieldLabel htmlFor="field-password" required={true}>
                    비밀번호
                </FieldLabel>
                <FieldContent>
                    <Input
                        id="field-password"
                        type="password"
                        placeholder="비밀번호를 입력하세요"
                    />
                </FieldContent>
            </Field>

            <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded" />
                    <span className="text-gray-6">로그인 상태 유지</span>
                </label>
                <Link
                    href="/password-reset"
                    className="text-point-2 hover:underline"
                >
                    비밀번호 찾기
                </Link>
            </div>

            <Button className="w-full" size="lg" variant="point1">
                로그인
            </Button>

            <div className="text-center text-sm text-gray-5">
                아직 회원이 아니신가요?{" "}
                <Link href="/join" className="text-point-2 hover:underline">
                    회원가입
                </Link>
            </div>
        </div>
    );
}
