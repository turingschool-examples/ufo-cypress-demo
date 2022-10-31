const Sighting = ({ id, location, description }) => {
  return (
    <div className="card">
      <p className="description">{description}</p>
      <p className="location">{location}</p>
    </div>
  )
}

export default Sighting;