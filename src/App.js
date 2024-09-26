import React, { useState, useEffect } from 'react';
import { fetchTickets, fetchUsers } from './api/fetchData';
import Header from './components/Header/Header';
import KanbanBoard from './components/KanbanBoard/KanbanBoard';
import './index.css';

function App() {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);

  // Load initial values from localStorage or use default values
  const [groupBy, setGroupBy] = useState(() => {
    return localStorage.getItem('groupBy') || 'status';  // Default: 'status'
  });
  const [sortBy, setSortBy] = useState(() => {
    return localStorage.getItem('sortBy') || 'priority';  // Default: 'priority'
  });

  useEffect(() => {
    // Fetch tickets and users from API
    const loadData = async () => {
      const ticketsData = await fetchTickets();
      const usersData = await fetchUsers();
      setTickets(ticketsData);
      setUsers(usersData);
    };
    loadData();
  }, []);

  // Function to handle grouping change and save to localStorage
  const handleGroupChange = (newGroupBy) => {
    setGroupBy(newGroupBy);
    localStorage.setItem('groupBy', newGroupBy);  // Save to localStorage
  };

  // Function to handle sorting change and save to localStorage
  const handleSortChange = (newSortBy) => {
    setSortBy(newSortBy);
    localStorage.setItem('sortBy', newSortBy);  // Save to localStorage
  };

  return (
    <div>
      <Header
        groupBy={groupBy}
        sortBy={sortBy}
        onGroupChange={handleGroupChange}
        onSortChange={handleSortChange}
      />
      <KanbanBoard
        tickets={tickets}
        users={users}
        groupBy={groupBy}
        sortBy={sortBy}
      />
    </div>
  );
}

export default App;
