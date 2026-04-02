type SelectOption = {
    value: string;
    label: string;
}
export type SelectProps = {
    currentValue: string;
    title: string;
    defaultValue: string,
    defaultLabel: string,
    options: SelectOption[];
    handleChange: (value: string) => void;
}