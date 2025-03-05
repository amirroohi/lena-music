// src/pages/Schedule.js
import { teachers } from "../data/teachers";
import "./Schedule.css";

const Schedule = () => {
  return (
    <div className="schedule-page">
      <h1>⏳ زمان‌بندی کلاس‌های اساتید</h1>
      <table className="schedule-table">
        <thead>
          <tr>
            <th>استاد</th>
            <th>ساز</th>
            <th>روزها</th>
          </tr>
        </thead>
        <tbody>
          {teachers.map((teacher) => (
            <tr key={teacher.id}>
              <td>{teacher.name}</td>
              <td>{teacher.instruments.join(", ")}</td>
              <td>{teacher.availableDays.join(" - ")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Schedule;
