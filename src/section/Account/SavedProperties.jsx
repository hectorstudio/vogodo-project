import React, { Fragment } from "react";
import PropertyItem from "../../components/PropertyItem";

const SavedProperties = ({setOpenModal}) => {
  return (
    <Fragment>
      <div className="pane-title">Saved Properties - 4 Items</div>
      <div className="pane-body">
        <PropertyItem setOpenModal={setOpenModal} />
        <PropertyItem setOpenModal={setOpenModal} />
        <PropertyItem setOpenModal={setOpenModal} />
        <PropertyItem setOpenModal={setOpenModal} />
      </div>
    </Fragment>
  );
};

export default SavedProperties;
