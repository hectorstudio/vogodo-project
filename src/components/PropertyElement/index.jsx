import React from 'react';
import { FormControlLabel, Checkbox } from '@material-ui/core';

const PropertyElement = ({label, defaultValue, setValue}) => {
  const handleChange = (e) => {
    setValue(e.target.checked);
  }

  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={defaultValue}
          onChange={handleChange}
          name="checkedB"
          color="primary"
        />
      }
      label={label}
    />
  );
}

export default PropertyElement