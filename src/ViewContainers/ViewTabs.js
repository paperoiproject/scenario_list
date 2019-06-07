import React from 'react';
import Tabs from '../components/TabsBar.js';

const ViewTabs = (props) => {
  return (
    <div className="">
      <Tabs labels={props.labels}/>
   </div>
  );
}

export default ViewTabs;
