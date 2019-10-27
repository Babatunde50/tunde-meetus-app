import React from "react";

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
        <a href={href}> {children} </a>
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
