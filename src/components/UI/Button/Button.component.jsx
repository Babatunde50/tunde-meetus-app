import React from "react";
import { Link } from 'react-router-dom'

import "./Button.styles.css";

export default function Button({
  mode,
  color,
  children,
  type,
  disabled = false,
  click,
  href
}) {
  return (
    <>
      {href ? (
        <Link className={[mode, color].join(" ")} to={href}> {children} </Link>
      ) : (
        <button
          className={[mode, color].join(" ")}
          type={type}
          disabled={disabled}
          onClick={click}
        >
          {" "}
          {children}{" "}
        </button>
      )}
    </>
  );
}
