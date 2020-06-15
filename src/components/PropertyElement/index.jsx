import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import { Done, CloseOutlined } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '23%',
    marginTop: 10,
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
}));

const PropertyElement = ({label, avatar, defaultValue, setValue}) => {
  const classes = useStyles();
  const [color, setColor] = useState("default");
  const [icon, setIcon] = useState(<Done />);

  useEffect(() => {
    if (defaultValue) {
      setColor("primary");
      setIcon(<CloseOutlined />);
    } else {
      setColor("default");
      setIcon(<Done />);
    }
  }, [defaultValue])

  const handleDelete = () => {
    setValue(!defaultValue);
  };

  const handleClick = () => {
    setValue(!defaultValue);
  };

  return (
    <Chip
      className={classes.root}
      avatar={<Avatar>{avatar}</Avatar>}
      label={label}
      clickable
      color={color}
      onClick={handleClick}
      onDelete={handleDelete}
      deleteIcon={icon}
    />
  );
}

export default PropertyElement