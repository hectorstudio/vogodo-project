import React, { Fragment, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ListingItem from "../../components/ListingItem";
import PropertiesService from "../../services/PropertiesService";

const MyListing = () => {
  const globalState = useSelector(state => state);
  const userId = localStorage.getItem('userId');
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const result = await PropertiesService.getPropertiesByOwnerId(userId || globalState.userId);
        if (result && result.Properties) {
          const { Properties } = result;
          setData(Properties);
        } else {
          console.log("Loading User Properties Error: ");
        }
      } catch (error) {
        console.log("Loading User Properties Error: ");
      }
    })();
  }, [userId, globalState.userId]);

  return (
    <Fragment>
      <div className="pane-header">
        <div className="pane-title">My Listing - {data.length} Items</div>
        <button className="add-button">+ Add a Listing</button>
      </div>
      <div className="pane-body listing">
        {data.length > 0 ? 
          data.map((element, index) => (
            <ListingItem
              key={`element-${index}`}
              data={element}
            />
          )) : (
            <div className="no-properties"> No properties </div>
          )}
      </div>
    </Fragment>
  );
};

export default MyListing;
