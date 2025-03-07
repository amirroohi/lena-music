// src/components/Contact.js
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "./Contact.css";

const position = [35.6393122, 51.3940574];
const Contact = () => {
  return (
    <div className="contact">
      <h1>ارتباط با ما</h1>
      <p>برای اطلاعات بیشتر و هماهنگی جهت ثبت نام با ما تماس بگیرید:</p>
      <ul>
        <li>
          تلفن: <span>55068036</span>-<span>021</span>
        </li>
        <li>
          آدرس: تهران، نازی آباد، انتهای خیابان اکبر مشهدی، تقاطع خیابان شیر
          محمدی
        </li>
      </ul>
      <div>
        <MapContainer
          id="map"
          center={position}
          zoom={16}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>آکادمی موسیقی لنا</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default Contact;
