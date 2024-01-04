import { twMerge } from "tailwind-merge";

import { iconSizeToClassName } from "./theme";
import { IconProps } from "./types";

export const RightLeftArrowIcon = ({ size, className }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      className={twMerge(iconSizeToClassName[size], className)}
    >
      <path d="M14.7063 4.70578C15.0969 4.3152 15.0969 3.68088 14.7063 3.2903L11.7063 0.29059C11.3156 -0.0999966 10.6812 -0.0999966 10.2906 0.29059C9.9 0.681177 9.9 1.31549 10.2906 1.70608L11.5844 2.9997H2C1.44687 2.9997 1 3.44653 1 3.9996C1 4.55267 1.44687 4.99951 2 4.99951H11.5844L10.2906 6.29313C9.9 6.68372 9.9 7.31803 10.2906 7.70862C10.6812 8.0992 11.3156 8.0992 11.7063 7.70862L14.7063 4.70891V4.70578ZM4.29063 15.7047C4.68125 16.0953 5.31563 16.0953 5.70625 15.7047C6.09688 15.3141 6.09688 14.6798 5.70625 14.2892L4.41563 12.9987H14C14.5531 12.9987 15 12.5519 15 11.9988C15 11.4458 14.5531 10.9989 14 10.9989H4.41563L5.70937 9.7053C6.1 9.31471 6.1 8.6804 5.70937 8.28981C5.31875 7.89922 4.68438 7.89922 4.29375 8.28981L1.29375 11.2895C0.903125 11.6801 0.903125 12.3144 1.29375 12.705L4.29375 15.7047H4.29063Z" />
    </svg>
  );
};