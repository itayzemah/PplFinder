import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import * as S from "./style";

const CheckBox = ({ isChecked, onChange, label, value }) => {
  const handleChange = (checked) => {
    onChange && onChange(value, label, checked);
  };
  return (
    <S.CheckBox>
      <FormControlLabel
        control={<Checkbox checked={isChecked} onChange={(e) => handleChange(e.currentTarget.checked)} color="primary" />}
        label={label}
      />
    </S.CheckBox>
  );
};

export default CheckBox;
