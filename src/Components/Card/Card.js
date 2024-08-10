import React, { useState, useEffect } from "react";
import "./Card.css";
import avatarIcon from "../assets/media/Generic avatar.png";
import brainImg from "../assets/media/brain.png";
import earImg from "../assets/media/ear.png";
import eyeImg from "../assets/media/eye.png";
import hairImg from "../assets/media/hair.png";
import heartImg from "../assets/media/heart.png";
import jointImg from "../assets/media/joint.png";
import kidneysImg from "../assets/media/kidneys.png";
import liverImg from "../assets/media/liver.png";
import lungsImg from "../assets/media/lungs.png";
import mouthImg from "../assets/media/mouth.png";
import noseImg from "../assets/media/nose.png";
import spineImg from "../assets/media/spine.png";
import stomachImg from "../assets/media/stomach.png";
import thyroidImg from "../assets/media/thyroid.png";
import toothImg from "../assets/media/tooth.png";
import uterusImg from "../assets/media/uterus.png";
import teethImg from "../assets/media/tooth.png";
import esophagusImg from "../assets/media/esophagus.png";
import medicineImg from "../assets/media/medicine.png";
import AppointmentPopup from "../Popup/AppointmentPopup/AppointmentPopup";
import PopupWrapper from "../wrapper/PopupWrapper";

// SpecialtyCard bileşenini güncelleyip parametreleri ekleyelim
const SpecialtyCard = ({ name, description, otherDetails, onSelect }) => {
  // Specialty adlarını ve karşılık gelen resimleri içeren bir eşleme nesnesi
  const specialtyImages = {
    cardiology: heartImg,
    neurology: brainImg,
    ophthalmology: eyeImg,
    orthopedics: jointImg,
    otology: earImg,
    pulmonology: lungsImg,
    urology: kidneysImg,
    endocrinology: thyroidImg,
    ayurveda: stomachImg,
    gynecologist: uterusImg,
    dentist: teethImg,
    dermatologist: hairImg,
    ent: esophagusImg,
    // Diğer specialty'ler buraya eklenebilir
  };

  // İlgili resim veya varsayılan bir resim döndür
  const imageSrc =
    specialtyImages[
      name.includes("(ent)") ? "ent" : name.split("/")[0]?.toLowerCase()
    ] || medicineImg;

  return (
    <div
      className="card medical-specialty-card"
      onClick={() => {
        onSelect(name);
        console.log(name);
      }}
    >
      <img src={imageSrc} alt={name} />
      <div>{name.includes("(ent)") ? "ent" : name.split("/")[0]}</div>
    </div>
  );
};

// DoctorCard bileşenini parametrelerle güncelleyelim
const DoctorCard = ({ name, speciality, review }) => {
  return (
    <div className="card doctor-card">
      <img src={avatarIcon} alt="Avatar" />
      <h3>Dr. {name}</h3>
      <p>{speciality}</p>
      {review ? (
        <p>{review}</p>
      ) : (
        <button className="button card-button primary-button">
          Give Review
        </button>
      )}
    </div>
  );
};

const handleSubmit = (e) => {
  console.log(e);
};

// AppointmentCard bileşenini parametrelerle güncelleyelim
const AppointmentCard = ({ data, onSubmit }) => {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [isBooked, setIsBooked] = useState(false);


  // Check localStorage to see if the doctor's name is already booked
  useEffect(() => {
    const appointments = JSON.parse(localStorage.getItem("appointments")) || [];
    const isDoctorBooked = appointments.some(
      (appointment) => appointment.doctorName === data.name
    );
    setIsBooked(isDoctorBooked);
  }, [data.name]);

  // Show appointment popup with specific mode (book or cancel)
  const showAppointment = (mode) => {
    setPopupVisible(true);
    setPopupMode(mode); // Set mode for popup
  };

  const hideAppointment = () => {
    setPopupVisible(false);
  };

  const [popupMode, setPopupMode] = useState("book");

  return (
    <div className="card doctor-card">
      <img src={avatarIcon} alt="Avatar" />
      <h3>{data.name}</h3>
      <p>{data.speciality}</p>
      <p>{data.ratings}</p>
      {!isBooked ? (
        <button
          className="button card-button primary-button"
          onClick={() => showAppointment("book")}
        >
          Book Appointment
        </button>
      ) : (
        <button
          className="button card-button negative-button"
          onClick={() => showAppointment("cancel")}
        >
          Cancel Appointment
        </button>
      )}
      {isPopupVisible && (
        <PopupWrapper
          onClose={() => {
            setPopupVisible(false);
          }}
        >
          <AppointmentPopup
            onClose={() => {
              setPopupVisible(false);
            }}
            data={data}
            onSubmit={onSubmit}
            mode={popupMode} // Pass mode to the popup
          />
        </PopupWrapper>
      )}
    </div>
  );
};

// Card bileşenini güncelleyip parametreleri ile çalışmasını sağlayalım
const Card = ({ type, data, cardType, onSelect, onSubmit }) => {
  return (
    <div>
      {cardType === "Appointment" ? (
        <AppointmentCard data={data} onSubmit={onSubmit} />
      ) : cardType === "doctor" ? (
        <DoctorCard
          name={data?.name}
          speciality={data?.speciality}
          review={data?.review}
        />
      ) : (
        <SpecialtyCard onSelect={onSelect} name={data} />
      )}
    </div>
  );
};

export default Card;
