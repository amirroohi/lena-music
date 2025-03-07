import { Link } from "react-router-dom";
import { instrumentsData } from "../data/instruments";
import "./Instruments.css";

const Instruments = () => {
  return (
    <div className="instruments-page">
      <h1>ساز های زهی</h1>
      <div className="instruments-list">
        {instrumentsData["string"].map((instrument) => (
          <Link
            to={`/instruments/${instrument.id}`}
            key={instrument.id}
            className="instrument-card"
          >
            <img
              src={instrument.image}
              alt={instrument.name}
              className="instrument--img"
            />
            <h2 className="instrument--title">{instrument.name}</h2>
          </Link>
        ))}
      </div>
      <h1>ساز های کوبه ای</h1>
      <div className="instruments-list">
        {instrumentsData["percussion"].map((instrument) => (
          <Link
            to={`/instruments/${instrument.id}`}
            key={instrument.id}
            className="instrument-card"
          >
            <img
              src={instrument.image}
              alt={instrument.name}
              className="instrument--img"
            />
            <h2 className="instrument--title">{instrument.name}</h2>
          </Link>
        ))}
      </div>
      <h1>ساز های بادی</h1>
      <div className="instruments-list">
        {instrumentsData["wind"].map((instrument) => (
          <Link
            to={`/instruments/${instrument.id}`}
            key={instrument.id}
            className="instrument-card"
          >
            <img
              src={instrument.image}
              alt={instrument.name}
              className="instrument--img"
            />
            <h2 className="instrument--title">{instrument.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Instruments;
