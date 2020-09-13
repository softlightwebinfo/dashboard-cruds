import { TProps } from "@app_types/TProps";
import { IChildren } from "@codeunic/library-ui/build";

export interface IModalProps extends TProps {
    title: string;
    children: IChildren | IChildren[];
    initial?: boolean;

    onSubmit(callback: TOnSubmitCallback);
}

export interface IModalState {
    show: boolean;
    loading: boolean;
}

export type TOnSubmitCallback = (success: boolean) => void;