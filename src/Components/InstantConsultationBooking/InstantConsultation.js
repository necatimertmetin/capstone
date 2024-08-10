import React, { useEffect, useState } from "react";
import "./InstantConsultation.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import FindDoctorSearchIC from "./FindDoctorSearchIC/FindDoctorSearchIC";
import DoctorCardIC from "./DoctorCardIC/DoctorCardIC";
import CardContainer from "../CardContainer/CardContainer";
import Card from "../Card/Card";

const InstantConsultation = () => {
  const [searchParams] = useSearchParams();
  const [doctors, setDoctors] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [isSearched, setIsSearched] = useState(false);

  const getDoctorsDetails = () => {
    fetch("https://api.npoint.io/9a5543d36f1460da2f63")
      .then((res) => res.json())
      .then((data) => {
        if (searchParams.get("speciality")) {
          // window.reload()
          const filtered = data.filter(
            (doctor) =>
              doctor.speciality.toLowerCase() ===
              searchParams.get("speciality").toLowerCase()
          );

          setFilteredDoctors(filtered);

          setIsSearched(true);
          window.reload();
        } else {
          setFilteredDoctors([]);
          setIsSearched(false);
        }
        setDoctors(data);
      })
      .catch((err) => console.log(err));
  };
  const handleSearch = (searchText) => {
    if (searchText === "") {
      setFilteredDoctors([]);
      setIsSearched(false);
    } else {
      const filtered = doctors.filter((doctor) =>
        //
        doctor.speciality.toLowerCase().includes(searchText.toLowerCase())
      );

      setFilteredDoctors(filtered);
      setIsSearched(true);
      window.location.reload();
    }
  };
  const navigate = useNavigate();
  useEffect(() => {
    getDoctorsDetails();
    // const authtoken = sessionStorage.getItem("auth-token");
    // if (!authtoken) {
    //     navigate("/login");
    // }
  }, [searchParams]);

  const [hideDoctors, setHideDoctors] = useState(false);
  return (
    <center>
      <div className="searchpage-container">
        <FindDoctorSearchIC
          hideDoctors={hideDoctors}
          setHideDoctors={setHideDoctors}
          onSearch={handleSearch}
        />
        <div className="search-results-container">
          {!hideDoctors && isSearched ? (
            <CardContainer cardData={filteredDoctors} cardType="Appointment" />
          ) : (
            ""
          )}
        </div>
      </div>
    </center>
  );
};

export default InstantConsultation;
