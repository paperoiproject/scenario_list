import React from 'react';
import TitleBar from '../components/TitleBar.js';

const ViewTitleBar = (props) => {
  return (
    <div className="">
      <TitleBar title={props.title}/>
   </div>
  );
}

export default ViewTitleBar;

