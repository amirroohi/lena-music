import { Link, useParams } from "react-router-dom";
import { instrumentsData } from "../data/instruments";
import { teachers } from "../data/teachers";
import "./InstrumentDetail.css";

const InstrumentDetail = () => {
  const { id } = useParams();
  const instrument =
    instrumentsData["percussion"].find((inst) => inst.id === id) ||
    instrumentsData["string"].find((inst) => inst.id === id) ||
    instrumentsData["wind"].find((inst) => inst.id === id);

  if (!instrument) {
    return <h2>ساز مورد نظر یافت نشد! 😔</h2>;
  }

  // فیلتر کردن اساتیدی که این ساز را تدریس می‌کنند
  const relatedTeachers = teachers.filter((teacher) =>
    teacher.instruments.includes(instrument.name)
  );

  return (
    <div className="instrument-detail-page">
      <h1>{instrument.name}</h1>
      <img src={instrument.image} alt={instrument.name} />
      <p>{instrument.description}</p>

      <h2>اساتید مرتبط</h2>
      {relatedTeachers.length > 0 ? (
        <ul className="teacher-list">
          {relatedTeachers.map((teacher) => (
            <li key={teacher.id}>
              <Link
                to={`/teachers/${teacher.id}`} // لینک به صفحه جزئیات
                key={teacher.id}
              >
                {teacher.name}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>استادی یافت نشد.</p>
      )}
    </div>
  );
};

export default InstrumentDetail;
