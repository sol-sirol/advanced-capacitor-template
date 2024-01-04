import { RadioGroup, RadioGroupProps } from "@headlessui/react";
import { twMerge } from "tailwind-merge";

import { Label } from "../labels";

interface TabLikeRadioButtonGroupProps<T> extends RadioGroupProps<"ul", T> {
  label?: string;
  required?: boolean;
  className?: string;
  containerClassName?: string;
}

export function TabLikeRadioButtonGroup<T>({
  children,
  className,
  containerClassName,
  label,
  required = false,
  ...props
}: TabLikeRadioButtonGroupProps<T>) {
  return (
    <div className={twMerge("flex flex-col gap-2", containerClassName)}>
      {label && <Label label={label} required={required} />}
      <RadioGroup
        as="ul"
        className={twMerge("flex gap-1 p-1 bg-surface0 rounded", className)}
        {...props}
      >
        {children}
      </RadioGroup>
    </div>
  );
}
