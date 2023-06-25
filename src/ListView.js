import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AiOutlineSearch } from "react-icons/ai"
import './ListView.css';

const ListView = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://reqres.in/api/users?page=2');
        setUsers(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredUsers = users.filter((user) =>
    user.first_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
  <div class="search-box">
    <button class="btn-search"><AiOutlineSearch size={40} className='icon' /></button>
    <input type="text" class="input-search" placeholder="Type to Search..."  value={searchTerm}
        onChange={handleSearch} />
  </div>

      <div className="card-container">
        {filteredUsers.map((user) => (
          <div key={user.id} className="card">
            <img src={user.avatar} alt={user.first_name} />
            <h4>{user.first_name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListView;
