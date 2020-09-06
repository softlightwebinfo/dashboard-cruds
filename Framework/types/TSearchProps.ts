import { TProps } from "@app_types/TProps";
import { OnChange } from "@props/InputProps";

export type TSearchProps = TProps & {
    value: string;
    onChange: OnChange
};