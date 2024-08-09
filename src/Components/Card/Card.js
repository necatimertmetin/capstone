import React from 'react';
import './Card.css';
import avatarIcon from '../assets/media/Generic avatar.png';

// SpecialtyCard bileşenini güncelleyip parametreleri ekleyelim
const SpecialtyCard = ({ name, description, otherDetails }) => {
  return (
    <div className='card medical-specialty-card'>
      <h3>Medical Specialty</h3>
      <p>{name}</p>
      <p>{description}</p>
      <p>{otherDetails}</p>
    </div>
  );
};

// DoctorCard bileşenini parametrelerle güncelleyelim
const DoctorCard = ({ name, speciality, review }) => {
  return (
    <div className='card doctor-card'>
      <img src={avatarIcon} alt="Avatar" />
      <h3>Dr. {name}</h3>
      <p>{speciality}</p>
      {review ? <p>{review}</p> : <button className='button card-button primary-button'>Give Review</button>}
    </div>
  );
};

// Card bileşenini güncelleyip parametreleri ile çalışmasını sağlayalım
const Card = ({ type, data }) => {
  return (
    <div>
      {type === 'doctor' ? 
        <DoctorCard 
          name={data.name} 
          speciality={data.speciality} 
          review={data.review} 
        /> 
        : 
        <SpecialtyCard 
          name={data.name} 
          description={data.description} 
          otherDetails={data.otherDetails} 
        />
      }
    </div>
  );
};

export default Card;
