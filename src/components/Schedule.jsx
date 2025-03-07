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
            <th>ساز</th>
            <th>روزها</th>
            <th>استاد</th>
          </tr>
        </thead>
        <tbody>
          {teachers.map((teacher) => (
            <tr key={teacher.id}>
              <td>{teacher.instruments.join(", ")}</td>
              <td>{teacher.availableDays.join(" - ")}</td>
              <td>{teacher.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Schedule;
