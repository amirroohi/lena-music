import { Link } from "react-router-dom";
import { teachers } from "../data/teachers";
import "./Teachers.css";

const Teachers = () => {
  return (
    <div className="teachers">
      <h1>اساتید ما</h1>
      <div className="teachers-list">
        {teachers.map((teacher) => (
          <Link
            to={`/teachers/${teacher.id}`} // لینک به صفحه جزئیات
            key={teacher.id}
            className="teacher-card"
          >
            <img src={teacher.image} alt={teacher.name} loading="lazy" />
            <h2>{teacher.name}</h2>
            <p>{teacher.bio.substring(0, 30)}...</p> {/* توضیحات کوتاه */}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Teachers;
