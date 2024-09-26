import React from 'react';
import KanbanCard from '../KanbanCard/KanbanCard';
import './KanbanColumn.css';

// Helper function to map priority to corresponding image
const getPriorityImage = (priority) => {
  switch (priority) {
      case 4:
        return '/SVG - Urgent Priority grey.svg';  // Urgent
      case 3:
        return '/Img - High Priority.svg';    // High
      case 2:
        return '/Img - Medium Priority.svg';  // Medium
      case 1:
        return '/Img - Low Priority.svg';     // Low
      default:
        return '/No-priority.svg';    // No priority
  }
}

// Helper function to map status to corresponding image
const getStatusImage = (status) => {
  switch (status) {
    case 'Todo':
      return '/To-do.svg';        // To Do status
    case 'In progress':
      return '/in-progress.svg'; // In Progress status
    case 'Backlog':
      return '/Backlog.svg';     // Backlog status
    case 'Cancelled':
      return '/Cancelled.svg';     // Cancelled status
    case 'Done':
      return '/Done.svg';     // Done status
    default:
      return '/To-do.svg';     // Default status (to-do)
  }
};

const getPriority = (priority) => {
  switch (priority) {
      case 4:
        return 'Urgent';  
      case 3:
        return 'High';    
      case 2:
        return 'Medium'; 
      case 1:
        return 'Low';   
      default:
        return 'No priority';    
  }
};

const KanbanColumn = ({ groupKey,groupType,tickets }) => {

  // Determine the image based on groupType
  const getGroupImage = () => {
    if (groupType === 'priority') {
      return getPriorityImage(parseInt(groupKey));  // Parse groupKey if it's a number (priority level)
    } else if (groupType === 'status') {
      return getStatusImage(groupKey);              // Use the groupKey directly for status
    }
    return '/dot.svg';  // Default icon if no match
  };

  const getGroupPriority = () => {
    if (groupType === 'priority') {
      return getPriority(parseInt(groupKey));
    }
    else return groupKey;
  } 

  return (
    <div className="kanban-column">
      <div className='kanban-column-header'>
        <div id='group'>
          <img src={getGroupImage()} alt={groupKey} />
          <span>{getGroupPriority()}</span>
          <span className='count'>{tickets.length}</span>
        </div>
        <div>
          <img 
            className="tool" 
            src='/add.svg'
            alt='add' 
          />
          <img 
            className="tool" 
            src='/3 dot menu.svg' 
            alt='menu' 
          />
        </div>
      </div>
      <div>
        {tickets.map(ticket => (
          <KanbanCard key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </div>
  );
};

export default KanbanColumn;
