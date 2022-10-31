import Sighting from '../Sighting/Sighting';

const Sightings = ({ sightings }) => {
  const cards = sightings.map(sighting => <Sighting {...sighting} />);

  return (
    <section className="sightings">
      {cards}
    </section>
  )
}

export default Sightings;