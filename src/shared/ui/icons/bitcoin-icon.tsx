import { twMerge } from "tailwind-merge";

import { iconSizeToClassName } from "./theme";
import { IconProps } from "./types";

export const BitcoinIcon = ({ size, className }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      className={twMerge(iconSizeToClassName[size], className)}
    >
      <path d="M15.75 8C15.75 12.2802 12.2802 15.75 8 15.75C3.71978 15.75 0.25 12.2802 0.25 8C0.25 3.71978 3.71978 0.25 8 0.25C12.2802 0.25 15.75 3.71978 15.75 8ZM11.3234 6.89594C11.4777 5.86472 10.6924 5.31034 9.61872 4.94053L9.96703 3.54359L9.11662 3.33169L8.77753 4.69181C8.55397 4.63609 8.32434 4.58356 8.09619 4.5315L8.43772 3.16244L7.58778 2.95053L7.23925 4.34697C7.05419 4.30481 6.87253 4.26316 6.69622 4.21934L6.69719 4.21497L5.52437 3.92216L5.29816 4.83034C5.29816 4.83034 5.92912 4.97494 5.91581 4.98387C6.26025 5.06984 6.3225 5.29775 6.31206 5.47841L5.91531 7.06981C5.93906 7.07587 5.96981 7.08459 6.00372 7.09816C5.97538 7.09113 5.94509 7.08337 5.91384 7.07587L5.35772 9.30519C5.31556 9.40981 5.20875 9.56675 4.968 9.50719C4.97647 9.51953 4.34987 9.35291 4.34987 9.35291L3.92769 10.3263L5.03438 10.6021C5.24025 10.6537 5.44203 10.7077 5.64062 10.7585L5.28869 12.1714L6.13812 12.3833L6.48666 10.9854C6.71192 11.0465 6.93784 11.1051 7.16437 11.1613L6.81703 12.5526L7.66744 12.7645L8.01937 11.3543C9.4695 11.6287 10.56 11.518 11.0189 10.2066C11.3888 9.15062 11.0005 8.54153 10.2376 8.14434C10.7932 8.01628 11.2118 7.65084 11.3234 6.89594ZM9.38037 9.62028C9.11756 10.6762 7.3395 10.1054 6.76303 9.96225L7.23003 8.09041C7.80647 8.23425 9.65503 8.51906 9.38037 9.62028ZM9.64341 6.88069C9.40362 7.84119 7.92369 7.35319 7.44362 7.23356L7.867 5.53584C8.34709 5.65547 9.89312 5.87875 9.64341 6.88069Z" />
    </svg>
  );
};