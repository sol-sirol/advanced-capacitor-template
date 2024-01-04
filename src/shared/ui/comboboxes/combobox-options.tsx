import {
  Combobox,
  ComboboxOptionsProps as HeadlessComboboxOptionsProps,
  Transition,
} from "@headlessui/react";
import { Fragment } from "react";
import { twMerge } from "tailwind-merge";

type ComboboxOptionsProps = HeadlessComboboxOptionsProps<"ul"> & {
  className?: string;
};

export const ComboboxOptions = ({
  className,
  children,
  ...props
}: ComboboxOptionsProps) => {
  return (
    <Transition
      as={Fragment}
      enter="transition-opacity"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <Combobox.Options
        className={twMerge(
          "absolute flex flex-col w-full rounded py-1.25 mt-1.5 bg-surface0 overflow-y-auto",
          "ui-open:outline ui-open:outline-1 ui-open:-outline-offset-1 ui-open:outline-overlay0",
          className,
        )}
        {...props}
      >
        {children}
      </Combobox.Options>
    </Transition>
  );
};
