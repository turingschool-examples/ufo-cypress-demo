import { useState } from 'react';

const Form = ({ addNewSighting }) => {
  const [location, updateLocation] = useState('');
  const [description, updateDescription] = useState('');
  // const [redirect, updateRedirect] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newSighting = {location, description};

    addNewSighting(newSighting);
  };


  return (
    <form onSubmit={handleSubmit} >
      <input
        type="text"
        name="location"
        placeholder="Location of sighting"
        value={location}
        onChange={e => updateLocation(e.target.value)}
      />
      <textarea
        name="description"
        placeholder="Description of sighting"
        value={description}
        onChange={e => updateDescription(e.target.value)}
      />
      <input type="submit" value="Report sighting" />
    </form>
  )
}

export default Form;