import React from "react";
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

// SpecialtyCard bileşenini güncelleyip parametreleri ekleyelim
const SpecialtyCard = ({ name, description, otherDetails }) => {
  // Specialty adlarını ve karşılık gelen resimleri içeren bir eşleme nesnesi
  const specialtyImages = {
    cardiology: heartImg,
    neurology: brainImg,
    opthalmology: eyeImg, // Örnek, skinImg'i tanımlamanız gerekiyor
    orthopedics: jointImg,
    otology: earImg,
    pulmonology: lungsImg,
    urology: kidneysImg,
    endocrinology: thyroidImg,
    gynecology: uterusImg
    // Diğer specialty'ler buraya eklenebilir
  };

  // İlgili resim veya varsayılan bir resim döndür
  const imageSrc = specialtyImages[name.toLowerCase()] || earImg;

  return (
    <div className="card medical-specialty-card">
      <img src={imageSrc} alt={name} />
      <div>{name}</div>
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

// Card bileşenini güncelleyip parametreleri ile çalışmasını sağlayalım
const Card = ({ type, data }) => {
  return (
    <div>
      {type === "doctor" ? (
        <DoctorCard
          name={data.name}
          speciality={data.speciality}
          review={data.review}
        />
      ) : (
        <SpecialtyCard
          name={data.name}
          description={data.description}
          otherDetails={data.otherDetails}
        />
      )}
    </div>
  );
};

export default Card;
