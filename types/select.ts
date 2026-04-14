type SelectOption = {
    value: string;
    label: string;
}
export type SelectProps = {
    currentValue: string;
    title: string;
    defaultValue?: string,
    defaultLabel?: string,
    options: SelectOption[];
    handleChange: (value: string) => void;
}

export type SelectItemProps = {
    value: string;
    label: string;
    currentValue: string;
    onSelect: (value: string) => void;
}