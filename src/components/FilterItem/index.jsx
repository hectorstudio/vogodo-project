import React from "react";
import Select from "react-dropdown-select";
import "./FilterItem.style.scss";

const FilterItem = ({data, multiple=false, prefix, value, onChange}) => {
  return (
    <div className="item">
      <Select
        options={data}
        className="property_select"
        value={value}
        placeholder={prefix}
        onChange={onChange}
      />
    </div>
  );
};

export default FilterItem;
