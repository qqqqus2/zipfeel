import { Button } from "@/components/ui/button";
import {
    Field,
    FieldContent,
    FieldMessage,
    FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export default function Join() {
    return (
        <div className="space-y-8 max-w-[330px] mx-auto">
            <Field>
                <div className="flex items-center justify-between w-full">
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
                    <FieldMessage type="error">
                        사용할 수 없는 아이디입니다.
                    </FieldMessage>
                    <FieldMessage type="success">
                        사용할 수 있는 아이디입니다.
                        <br /> 다른 아이디 사용을 원할 경우 &apos;다시하기&apos;
                        버튼을 눌러주세요.
                    </FieldMessage>
                </FieldContent>
            </Field>
        </div>
    );
}
