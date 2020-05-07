import React from 'react';
import './Breadcrumbs.style.scss';

const Breadcrumbs = ({parent, child}) => {
  return (
    <div className="breadcrumbs-container">
      <span>{parent}</span>
      <span>/</span>
      <span>{child}</span>
    </div>
  );
}

export default Breadcrumbs;
