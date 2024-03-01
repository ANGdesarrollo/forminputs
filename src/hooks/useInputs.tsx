import React, { FunctionComponent } from "react";
import {InputSimple} from "../components/InputSimple.tsx";
import {InputSelector} from "../components/InputSelector.tsx";
import {InputDoubleInt} from "../components/InputDoubleInt.tsx";
import {InputDoubleDate} from "../components/InputDoubleDate.tsx";

export enum InputsTypes {
    InputSimple = "InputSimple",
    InputSelector = "InputSelector",
    InputDoubleInt = "InputDoubleInt",
    InputDoubleDate = "InputDoubleDate"
}

export const useInputs = (type: InputsTypes): FunctionComponent => {
    switch(type) {
        case InputsTypes.InputSimple:
            return InputSimple;
        case InputsTypes.InputSelector:
            return InputSelector;
        case InputsTypes.InputDoubleInt:
            return InputDoubleInt;
        case InputsTypes.InputDoubleDate:
            return InputDoubleDate;
        default:
            assertNever();
    }
};

const assertNever = (): never => {
    throw new Error("component not found")
}
