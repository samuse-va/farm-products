import React from "react";
import { Ul, Li } from "/src/components/styled";
import Checkbox from "../../ui/checkbox/checkbox";

export default function CheckboxList({
  selectValues,
  options,
  name,
  labelComponent,
  onChange,
  onClickLabel = () => {}
}) {
  const handleChange = (value) => {
    const newValue = [...selectValues];
    const indexValue = newValue.indexOf(value);
    if (indexValue !== -1) {
      newValue.splice(indexValue, 1);
    } else {
      newValue.push(value);
    }
    onChange && onChange(newValue);
  };

  return (
    <Ul>
      {options.map((option, index) => (
        <Li key={option.value}>
          <Checkbox
            labelComponent={labelComponent}
            onChange={handleChange}
            selectValues={selectValues}
            value={option.value}
            name={name}
            text={option.title}
            isChecked={selectValues.includes(option.value)}
            onClick={(value) => onClickLabel(value, index)}
          />
        </Li>
      ))}
    </Ul>
  );
}
