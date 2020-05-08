import React from "react";
import Select from "react-dropdown-select";
import "./FilterItem.style.scss";

const FilterItem = ({data, multiple=false, prefix, value, setFilterValues}) => {
  return (
    <div className="item">
      <Select
        options={data}
        className="property_select"
        value={value}
        placeholder={prefix}
        onChange={(value) => setFilterValues(prefix, value, multiple)}
      />
    </div>
  );
};

export default FilterItem;
