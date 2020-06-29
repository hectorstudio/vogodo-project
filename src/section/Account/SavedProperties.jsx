import React, { Fragment, useState, useEffect } from "react";
import PropertiesService from "../../services/PropertiesService";
import PropertyItem from "../../components/PropertyItem";

const SavedProperties = ({setOpenModal}) => {
  const userId = localStorage.getItem('userId');
  const [data, setData] = useState([]);
  const [saved, setSaved] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const result = await PropertiesService.getFavoritesByOwnerId(userId);
        if (result && result.Properties) {
          const { Properties } = result;
          setData(Properties);
        } else {
          console.log("Loading Saved Properties Data Error: ");
        }
      } catch (error) {
        console.log("Loading Saved Properties Data Error: ");
      }
      try {
        const { result } = await PropertiesService.getFavorites(userId);
        if (result) {
          setSaved(result);
        } else {
          console.log("Saved Data Loading Error");
        }
      } catch (error) {
        console.log("Loading Data Error: ");
      }
    })();
  }, [userId]);

  const handleUpdateSaved = (item) => {
    if(saved.some(el => el.property_id === item.pid)) {
      setSaved(saved.map(el => el.property_id === item.pid ? {...el, favorite: item.favorite} : el));
    } else {
      let items = [...saved];
      items.push({owner_id: parseInt(userId), property_id: item.pid, favorite: item.favorite});
      setSaved(items);
    }    
    PropertiesService.saveAsFavorite({uid: userId, pid: item.pid, favorite: item.favorite});
  };
  console.log(data);
  console.log(saved);
  return (
    <Fragment>
      <div className="pane-title">Saved Properties - {data.length} Items</div>
      <div className="pane-body">
        {data.length > 0 ? 
          data.map((element, index) => (
            <PropertyItem
              key={`element-${index}`}
              data={element}
              saved={saved.find(el => el.property_id === element.id)}
              onUpdate={handleUpdateSaved}
            />
          )) : (
            <div className="no-properties"> No properties </div>
          )}
      </div>
    </Fragment>
  );
};

export default SavedProperties;
