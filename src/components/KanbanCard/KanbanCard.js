import React from 'react';
import './KanbanCard.css';

const KanbanCard = ({ ticket }) => {

  return (
    <div className="kanban-card">
      <div className="kanban-card-header">
        <span className="ticket-id">{ticket.id}</span>
        <span className="user-id">{ticket.userId}</span>
      </div>

      <div className="kanban-card-title">
        {ticket.title}
      </div>

      <div className="kanban-card-footer">
        <div>
          <img 
            className="priority-indicator" 
            src={getPriorityIcon(ticket.priority)} 
            alt={`Priority ${ticket.priority}`} 
          />
        </div>
        <div>
          <span className="circle">  </span>
          <span className="tag">{ticket.tag[0]}</span>  
        </div>
      </div>
    </div>
  );
};

// Helper function to get the priority image path
const getPriorityIcon = (priority) => {
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
};

export default KanbanCard;
