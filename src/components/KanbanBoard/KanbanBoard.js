
import React from 'react';
import KanbanColumn from '../KanbanColumn/KanbanColumn';
import './KanbanBoard.css';

const KanbanBoard = ({ tickets, users, groupBy, sortBy }) => {
  const groupTickets = (tickets, groupBy) => {
    const grouped = {};
    tickets.forEach(ticket => {
      let groupKey = ticket[groupBy];

      // If grouping by user, resolve the username
      if (groupBy === 'user') {
        const user = users.find(u => u.id === ticket.userId);
        groupKey = user ? user.name : 'Unassigned';
      }

      if (!grouped[groupKey]) grouped[groupKey] = [];
      grouped[groupKey].push(ticket);
    });
    return grouped;
  };

  const sortTickets = (tickets, sortBy) => {
    if (sortBy === 'priority') {
      return tickets.sort((a, b) => b.priority - a.priority);
    } else if (sortBy === 'title') {
      return tickets.sort((a, b) => a.title.localeCompare(b.title));
    }
    return tickets;
  };

  const groupedTickets = groupTickets(tickets, groupBy);

  return (
    <div className="kanban-board">
      {Object.keys(groupedTickets).map(groupKey => (
        <KanbanColumn
          key={groupKey}
          groupKey={groupKey}
          groupType={groupBy}
          tickets={sortTickets(groupedTickets[groupKey], sortBy)}
        />
      ))}
    </div>
  );
};

export default KanbanBoard;
