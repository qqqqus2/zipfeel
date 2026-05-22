import { Button } from "@/components/ui/button";
import {
    Field,
    FieldContent,
    FieldMessage,
    FieldLabel,
} from "@/components/ui/field";
import { Icon } from "@/components/ui/icon";
import { Input } from "@/components/ui/input";

export default function Join() {
    return (
        <div className="space-y-8 pt-9 md:pt-[42px] max-w-[330px] mx-auto">
            <Field>
                <div className="flex gap-1 items-center justify-between w-full">
                    <FieldLabel htmlFor="field-id" required={true}>
                        아이디
                    </FieldLabel>
                    <Button
                        size="xs"
                        variant="point1"
                        rounded="full"
                        className="shadow-md"
                    >
                        중복확인
                    </Button>
                </div>
                <FieldContent>
                    <Input
                        id="field-id"
                        type="text"
                        placeholder="아이디를 입력하세요"
                    />
                    <FieldMessage type="success">
                        사용할 수 있는 아이디입니다.
                        <br /> 다른 아이디 사용을 원할 경우 &apos;다시하기&apos;
                        버튼을 눌러주세요.
                    </FieldMessage>
                    <FieldMessage type="error">
                        사용할 수 없는 아이디입니다.
                    </FieldMessage>
                </FieldContent>
                <FieldContent>
                    <div className="flex gap-2">
                        <Icon
                            name="info"
                            size={16}
                            className="text-gray-5 shrink-0"
                        />
                        영문, 숫자, 특수문자를 사용해 4~20자 이내로 입력하세요.
                        영문은 대소문자를 구분하여 사용할 수 있습니다.
                        특수문자는 언더바(_)와 미들바(-)를 사용할 수 있습니다.
                    </div>
                </FieldContent>
            </Field>
        </div>
    );
}
