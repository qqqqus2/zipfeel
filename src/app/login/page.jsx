"use client";

import { Button } from "@/components/ui/button";
import {
    Field,
    FieldContent,
    FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useTranslation } from "@/hooks/useTranslation";

export default function Login() {
    const { t } = useTranslation('auth');

    return (
        <div className="space-y-8 pt-9 md:pt-[42px] max-w-[330px] mx-auto">
            <div className="text-center mb-8">
                <h1 className="text-2xl font-semibold text-gray-6 mb-2">
                    {t('login.title')}
                </h1>
                <p className="text-sm text-gray-5">
                    {t('login.welcome')}
                </p>
            </div>

            <Field>
                <FieldLabel htmlFor="field-email" required={true}>
                    {t('login.emailLabel')}
                </FieldLabel>
                <FieldContent>
                    <Input
                        id="field-email"
                        type="email"
                        placeholder={t('login.emailPlaceholder')}
                    />
                </FieldContent>
            </Field>

            <Field>
                <FieldLabel htmlFor="field-password" required={true}>
                    {t('login.passwordLabel')}
                </FieldLabel>
                <FieldContent>
                    <Input
                        id="field-password"
                        type="password"
                        placeholder={t('login.passwordPlaceholder')}
                    />
                </FieldContent>
            </Field>

            <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded" />
                    <span className="text-gray-6">{t('login.rememberMe')}</span>
                </label>
                <Link
                    href="/password-reset"
                    className="text-point-2 hover:underline"
                >
                    {t('login.forgotPassword')}
                </Link>
            </div>

            <Button className="w-full" size="lg" variant="point1">
                {t('login.loginButton')}
            </Button>

            <div className="text-center text-sm text-gray-5">
                {t('login.noAccount')}{" "}
                <Link href="/join" className="text-point-2 hover:underline">
                    {t('login.signupLink')}
                </Link>
            </div>
        </div>
    );
}
