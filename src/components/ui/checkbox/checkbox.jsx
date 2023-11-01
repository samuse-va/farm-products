import React, { useState } from "react";
import { Label } from "./styles";
import VisuallyHiddenInput from "../../styled/visually-hidden-input/visually-hidden-input";

function Checkbox({
  label,
  value,
  name,
  labelComponent,
  isChecked,
  text,
  onClick,
  onChange,
  ...props
}) {
  const LabelComponent = labelComponent;

  return (
    <Label>
      <VisuallyHiddenInput
        type="checkbox"
        value={value}
        name={name}
        checked={isChecked}
        onChange={() => {
          onChange(value);
        }}
        {...props}
      />
      <LabelComponent onClick={() => onClick(value)} $isChecked={isChecked}>
        {text}
      </LabelComponent>
    </Label>
  );
}

export default Checkbox;
