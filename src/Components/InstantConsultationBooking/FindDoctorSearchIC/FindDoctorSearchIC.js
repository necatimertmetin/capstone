import React, { useState } from "react";
import "./FindDoctorSearchIC.css";
import { useNavigate, Navigate } from "react-router-dom";
import searchIcon from "../../assets/media/Icon.png";
import CardContainer from "../../CardContainer/CardContainer";

const initSpeciality = [
  "Dentist",
  "Gynecologist/obstetrician",
  "General Physician",
  "Dermatologist",
  "Ear-nose-throat (ent) Specialist",
  "Homeopath",
  "Ayurveda",
];

const FindDoctorSearchIC = ({ setHideDoctors, hideDoctors }) => {
  const [doctorResultHidden, setDoctorResultHidden] = useState(true);
  const [searchDoctor, setSearchDoctor] = useState("");
  const [specialities, setSpecialities] = useState(initSpeciality);

  const navigate = useNavigate();
  const handleDoctorSelect = (speciality) => {
    console.log(speciality);
    setSearchDoctor(speciality);
    setDoctorResultHidden(true);
    navigate(`/instant-consultation?speciality=${speciality}`);
    window.location.reload();
  };
  return (
    <div className="finddoctor">
      <center>
        <div className="dashboard-title">Find a doctor at your own ease</div>
        <div
          className="home-search-container"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="doctor-search-box">
            {/* <p>Perform a search to see the results.</p> */}

            <div className="search-container">
              <input
                type="text"
                className="search-doctor-input-box"
                placeholder="Search doctors, clinics, hospitals, etc."
                onFocus={() => {
                  setDoctorResultHidden(false);
                  setHideDoctors(true);
                }}
                value={searchDoctor}
                onChange={(e) => setSearchDoctor(e.target.value)}
              />
              <img src={searchIcon} />
            </div>

            <div className="findiconimg">
              <img
                className="findIcon"
                src={process.env.PUBLIC_URL + "/images/search.svg"}
                alt=""
              />
            </div>
            <div
              className="search-doctor-input-results"
              hidden={doctorResultHidden}
            >
              <CardContainer
                cardData={specialities}
                cardType={"speciality"}
                onSelect={(e) => {
                  setDoctorResultHidden(true);
                  handleDoctorSelect(e);
                }}
              />
            </div>
          </div>
        </div>
      </center>
    </div>
  );
};

export default FindDoctorSearchIC;
