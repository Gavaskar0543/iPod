import React, { useState } from 'react';

const Display = ( ) => {
  

  return (
    <div className='container ipodjs'>
      <h3 className='title-ipod'>iPod.js</h3>
      <ul className='menu-list' type="none" >
        <div>
          <li className={selectedItem === 'coverFlow' ? 'selected' : ''}>coverFlow</li>
        </div>
        <div>
          <li className={selectedItem === 'music' ? 'selected' : ''}>music</li>
        </div>
        <div>
          <li className={selectedItem === 'Game' ? 'selected' : ''}>Game</li>
        </div>
        <div>
          <li className={selectedItem === 'setting' ? 'selected' : ''}>setting</li>
        </div>
      </ul>
    </div>
  );
};

export default Display;
