import {InputsTypes, useInputs} from "../hooks/useInputs.tsx";
import React from "react";

type Props = {
    inputType: InputsTypes
}

export const MyInputComponent = (props: Props) => {
    const InputComponent = useInputs(props.inputType);
    return <div><InputComponent /></div>;
};
