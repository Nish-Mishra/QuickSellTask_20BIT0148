import React from 'react';
import '../styles/ControlPanel.css';

function ControlPanel({
  selectedGrouping,
  selectedSorting,
  onGroupingChange,
  onSortingChange,
  onDisplayClick,
}) {
  return (
    <div className="control-panel">
      <div className="navbar">
        <div className="control-group">
          <label htmlFor="groupingSelect">Group By:</label>
          <select
            id="groupingSelect"
            value={selectedGrouping}
            onChange={(e) => onGroupingChange(e.target.value)}
          >
            <option value="status">Status</option>
            <option value="user">User</option>
            <option value="priority">Priority</option>
          </select>
        </div>
        <div className="control-group">
          <label htmlFor="sortingSelect">Sort By:</label>
          <select
            id="sortingSelect"
            value={selectedSorting}
            onChange={(e) => onSortingChange(e.target.value)}
          >
            <option value="priority">Priority</option>
            <option value="title">Title</option>
          </select>
        </div>
        <button onClick={onDisplayClick} className="display-button">
          Display
        </button>
      </div>
    </div>
  );
}

export default ControlPanel;
