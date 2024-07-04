import React, { forwardRef, useId } from 'react';
import { inputProps } from "@/src/Interfaces/common/input/input";
import { Label, TextInput } from "flowbite-react";

const Input = forwardRef<HTMLInputElement, inputProps>(({
    label = "",
    placeHolder,
    id = "input_",
    type = "text",
    error = "",
    rquired = false,
    ...rest
}, ref) => {
    const uniqueId = useId();
    const generatedId = `${id}_${uniqueId}`;

    return (
        <div>
            <div className="mb-2 block">
                {label && <Label htmlFor={generatedId} value={label} />}
            </div>
            <TextInput
                ref={ref}
                id={generatedId}
                type={type}
                placeholder={placeHolder}
                required={rquired}
                color={error ? "failure" : ""}
                helperText={error}
                {...rest}
            />
        </div>
    );
});
Input.displayName = "Input"
export default Input;
