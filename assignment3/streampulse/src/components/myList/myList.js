import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MyList = () => {
  const [moviename, setMoviename] = useState('');
  const [releaseDate, setReleaseDate] = useState('');
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/mylist');
      setItems(response.data);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/mylist', {
        moviename,
        releaseDate: new Date(releaseDate),
      });
      setItems([...items, response.data]);
      setMoviename('');
      setReleaseDate('');
    } catch (error) {
      console.error('Error creating item:', error);
    }
  };

  const handleWatched = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/mylist/${id}`);
      setItems(items.filter((item) => item._id !== id));
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
  };

  return (
    <div
      style={{
        maxWidth: '500px',
        margin: '0 auto',
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f8f8f8',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        marginTop:'7%'
      }}
    >
      <h1
        style={{
          textAlign: 'center',
          fontSize: '24px',
          marginBottom: '20px',
          color: 'black',
        }}
      >
        My List
      </h1>
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          marginBottom: '20px',
        }}
        onSubmit={handleSubmit}
      >
        <label style={{ marginBottom: '10px',color: 'black' }}>
          Movie Name:
          <input
            type="text"
            value={moviename}
            onChange={(e) => setMoviename(e.target.value)}
            style={{
              padding: '8px',
              fontSize: '14px',
              borderRadius: '4px',
              border: '1px solid #ccc',
              backgroundColor: '#e1e1e1',
              color: '#333',
            }}
          />
        </label>
        <label style={{ marginBottom: '10px',color: 'black' }}>
          Release Date:
          <input
            type="date"
            value={releaseDate}
            onChange={(e) => setReleaseDate(e.target.value)}
            style={{
              padding: '8px',
              fontSize: '14px',
              borderRadius: '4px',
              border: '1px solid #ccc',
              backgroundColor: '#e1e1e1',
              color: '#333',
            }}
          />
        </label>
        <button
          type="submit"
          style={{
            padding: '8px 16px',
            fontSize: '14px',
            borderRadius: '4px',
            backgroundColor: '#2196f3',
            color: '#fff',
            border: 'none',
            cursor: 'pointer',
            background: '#2196f3',
          }}
        >
          Add
        </button>
      </form>
      <h2 style={{ color: '#333' }}>Items:</h2>
      <ul style={{ listStyleType: 'none', padding: '0' }}>
        {items.map((item) => (
          <li
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '10px',
              backgroundColor: '#f5f5f5',
              padding: '10px',
              borderRadius: '4px',
            }}
            key={item._id}
          >
            <span style={{ marginRight: '10px', color: '#000' }}>
              {item.moviename} - {formatDate(item.releaseDate)}
            </span>
            <div>
              <button
                onClick={() => handleWatched(item._id)}
                style={{
                  marginRight: '5px',
                  padding: '6px 12px',
                  fontSize: '12px',
                  borderRadius: '4px',
                  backgroundColor: '#888',
                  color: '#fff',
                  border: 'none',
                  cursor: 'pointer',
                  background: '#888',
                }}
              >
                Watched
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyList;
