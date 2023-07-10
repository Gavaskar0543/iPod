import React, { useState } from 'react';

const Display = (props) => {
  

  return (
    <div className='container ipodjs'>
      <h3 className='title-ipod'>iPod.js</h3>
      <ul className='menu-list' type="none" >
        <div>
          <li >coverFlow</li>
        </div>
        <div>
          <li>music</li>
        </div>
        <div>
          <li >Game</li>
        </div>
        <div>
          <li >setting</li>
        </div>
      </ul>
    </div>
  );
};

export default Display;
