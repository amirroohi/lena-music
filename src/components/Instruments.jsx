import { Link } from "react-router-dom";
import { instrumentsData } from "../data/instruments";
import "./Instruments.css";

const Instruments = () => {
  return (
    <div className="instruments-page">
      <h1>🎼 لیست سازهای موسیقی</h1>
      <div className="instruments-list">
        {instrumentsData.map((instrument) => (
          <Link
            to={`/instruments/${instrument.id}`}
            key={instrument.id}
            className="instrument-card"
          >
            <img src={instrument.image} alt={instrument.name} className="instrument--img" />
            <h2>{instrument.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Instruments;
