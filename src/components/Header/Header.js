import React, { useState } from 'react';
import './Header.css';

const Header = ({ groupBy, sortBy, onGroupChange, onSortChange }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="header">
      <button className='display' onClick={() => setShowDropdown(!showDropdown)}>
        <div>
          <img 
            src='/Display.svg' 
          />
        </div>
        <div>
          <span>
            Display
          </span>
        </div>
        <div>
          <img 
            src='/down.svg' 
          />
        </div>
      </button>
      {showDropdown && (
        <div className='dropdown'>
          <div className='dropdown-item'>
            <label>Grouping </label>
            <select className='selection' value={groupBy} onChange={(e) => onGroupChange(e.target.value)}>
              <option value="status">Status</option>
              <option value="user">User</option>
              <option value="priority">Priority</option>
            </select>
          </div>
          <div className='dropdown-item'>
            <label>Ordering </label>
            <select className='selection' value={sortBy} onChange={(e) => onSortChange(e.target.value)}>
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};


export default Header;