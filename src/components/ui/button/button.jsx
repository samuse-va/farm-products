import React, { forwardRef } from "react";
import { StyledButton } from "./styles";

const Button = forwardRef(
  ({ children, minWidth, link, className, onClick, ...props }, ref) => {
    return (
      <StyledButton
        ref={ref}
        $minWidth={minWidth}
        {...(link ? { to: link } : { as: "button", onClick, type: "button" })}
        className={className}
        {...props}
      >
        {children}
      </StyledButton>
    );
  }
);

export default Button;
