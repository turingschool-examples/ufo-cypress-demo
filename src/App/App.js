import { useState, useEffect } from 'react';
import Sightings from '../Sightings/Sightings';
import Form from '../Form/Form';
import { Routes, Route, NavLink, useNavigate } from 'react-router-dom';
import './App.css';

const App = () => {
  const [sightings, updateSightings] = useState([]);
  const [error, updateError] = useState('');
  const navigate = useNavigate();


  useEffect(() => {
    fetch('http://localhost:3001/sightings')
      .then(res => res.json())
      .then(response => {
        if (response.message) {
          throw new Error(response.message);
        } else {
          return response;
        }
      })
      .then(data => {
        updateSightings(data.reverse());
        updateError('');
      })
      .catch(error => updateError(error))
  }, []);

  const addNewSighting = (newSighting) => {
    fetch('http://localhost:3001/sightings', {
      method: 'POST',
      body: JSON.stringify(newSighting),
      headers: {'Content-Type': 'application/json'}
    })
    .then(res => res.json())
    .then(response => {
      if (response.message) {
        throw new Error(response.message);
      } else {
        return response;
      }
    })
    .then(data => {
      updateSightings([data, ...sightings]);
      updateError('');
      navigate('/');
    })
    .catch(error => updateError(error))
  }

  return (
    <>
      <h1>👁 SkyWatcher 👁</h1>
      <nav>
        <NavLink to='/'>Sightings</NavLink>
        <NavLink to='/report'>Report a new sighting</NavLink>
      </nav>

      {error && <p className='error'>{error.message}</p>}

      {!sightings.length && <p>Loading ...</p>}

      {sightings.length && !error &&
        <Routes>
          <Route exact path='/' element={<Sightings sightings={sightings} />} />
          <Route exact path='/report' element={<Form addNewSighting={addNewSighting} />} />
        </Routes>
      }
    </>
  )
}

export default App;