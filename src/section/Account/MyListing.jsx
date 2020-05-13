import React, { Fragment } from "react";
import ListingItem from "../../components/ListingItem";

const MyListing = ({setOpenModal}) => {
  return (
    <Fragment>
      <div className="pane-title">My Listing - 4 Items</div>
      <div className="pane-body listing">
        <ListingItem />
        <ListingItem />
        <ListingItem />
        <ListingItem />
      </div>
    </Fragment>
  );
};

export default MyListing;
