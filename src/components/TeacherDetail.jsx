import { useParams } from "react-router-dom";
import { teachers } from "../data/teachers";
import "./TeacherDetail.css";

const TeacherDetail = () => {
  const { id } = useParams(); // گرفتن id از URL
  const teacher = teachers.find((t) => t.id === parseInt(id)); // یافتن استاد

  if (!teacher) {
    return <h2>استاد مورد نظر یافت نشد!</h2>;
  }

  return (
    <div className="teacher-detail">
      <div className="teacher-info">
        <img src={teacher.image} alt={teacher.name} />
        <h1>{teacher.name}</h1>
        <p>{teacher.bio}</p>
      </div>
      <div className="teacher-video">
        <h2>ویدیو معرفی:</h2>
        <video src={teacher.videoUrl} controls  />
      </div>
      {/* <div className="teacher-comments">
        <h2>نظرات:</h2>
        <ul>
          {teacher.comments.map((comment) => (
            <li key={comment.id}>{comment.text}</li>
          ))}
        </ul>
      </div> */}
    </div>
  );
};

export default TeacherDetail;
