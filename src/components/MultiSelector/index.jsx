import React, { useState, useEffect } from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > * + *": {
      marginTop: theme.spacing(3),
    },
  },
}));

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
];

const MultiSelector = ({ data = null, label, placeholder }) => {
  const classes = useStyles();
  const [selectorData, setSelectorData] = useState([]);

  useEffect(()=>{
    if(data){
      setSelectorData(data);
    }
    else {
      setSelectorData(top100Films);
    }
  }, [data])

  return (
    <div className={classes.root}>
      <Autocomplete
        multiple
        id="tags-standard"
        options={selectorData || data}
        getOptionLabel={(option) => option.title}
        defaultValue={[selectorData[0] || data[0]]}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label={label}
            placeholder={placeholder}
          />
        )}
      />
    </div>
  );
};

export default MultiSelector;
