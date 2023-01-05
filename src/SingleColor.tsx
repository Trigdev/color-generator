/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect, FC, ReactElement } from "react";
import { SingleColorProps } from "./App.types";
import rgbToHex from "./utils";

const SingleColor: FC<SingleColorProps> = ({
  rgb,
  weight,
  index,
  hexColor,
}: SingleColorProps): ReactElement => {
  const [alert, setAlert] = useState<boolean>(false);
  const bcg = rgb.join(",");
  const hex = rgbToHex(...rgb);
  const hexValue = `#${hexColor}`;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [alert]);

  return (
    <article
      className={`color ${index > 10 && "color-light"}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hexValue);
      }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexValue}</p>
      {alert && <p className="alert">copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;
