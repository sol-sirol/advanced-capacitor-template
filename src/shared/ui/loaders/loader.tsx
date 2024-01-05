import { Preloader } from "framework7-react";
import React, { FC } from "react";

import classNames from "./style.module.css";

interface LoaderType {
  center?: boolean;
  size?: number;
  style?: React.CSSProperties;
  styleContainer?: React.CSSProperties;
  white?: boolean;
  f7?: boolean;
}

const f7Preloader: FC<LoaderType> = ({
  center,
  size,
  style,
  styleContainer,
  white,
}) => {
  return center ? (
    <div
      style={{ width: "100%", height: "100%", ...styleContainer }}
      className="display-flex justify-content-center align-items-center"
    >
      <Preloader
        size={size}
        color={white ? "white" : "var(--f7-theme-color)"}
        style={style}
      />
    </div>
  ) : (
    <Preloader
      size={size}
      color={white ? "white" : "var(--f7-theme-color)"}
      style={style}
    />
  );
};

const customLoader: FC<LoaderType> = ({
  size,
  style,
  center,
  styleContainer,
}) => {
  return center ? (
    <div
      style={{ width: "100%", height: "100%", ...styleContainer }}
      className="display-flex justify-content-center align-items-center"
    >
      <div className={classNames.loader} style={{ width: size, ...style }}>
        <svg className={classNames.circular} viewBox="25 25 50 50">
          <circle
            className={classNames.path}
            cx="50"
            cy="50"
            r="20"
            fill="none"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
        </svg>
      </div>
    </div>
  ) : (
    <div className={classNames.loader} style={{ width: size, ...style }}>
      <svg className={classNames.circular} viewBox="25 25 50 50">
        <circle
          className={classNames.path}
          cx="50"
          cy="50"
          r="20"
          fill="none"
          strokeWidth="2"
          strokeMiterlimit="10"
        />
      </svg>
    </div>
  );
};

export const Loader: FC<LoaderType> = ({
  f7 = true,
  center = true,
  size = 24,
  style,
  styleContainer,
  white,
}) => {
  return f7
    ? f7Preloader({ size, style, center, styleContainer, white })
    : customLoader({ size, style, center, styleContainer });
};
