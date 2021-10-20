import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faHospitalUser, faSmile, faUserMd } from '@fortawesome/free-solid-svg-icons'

const smile = <FontAwesomeIcon icon={faSmile} size="4x" className="text-success" />
const doctor = <FontAwesomeIcon icon={faUserMd} size="4x" className="text-success" />
const success = <FontAwesomeIcon icon={faHospitalUser} size="4x" className="text-success" />
const beds = <FontAwesomeIcon icon={faBed} size="4x" className="text-success" />

const Ratings = () => {
    return (
        <>
            <h1 className="mb-3 fw-bold">Our Ratings</h1>
            <div className="container bg-white py-5 mb-5">
                <div className="row">
                    <div className="col-lg-3">
                        <p>{smile}</p>
                        <h3>2500</h3>
                        <h3>Happy Clients</h3>
                    </div>
                    <div className="col-lg-3">
                        <p>{doctor}</p>
                        <h3>12</h3>
                        <h3>Experienced Doctors</h3>
                    </div>
                    <div className="col-lg-3">
                        <p>{success}</p>
                        <h3>200</h3>
                        <h3>Successful Operations</h3>
                    </div>
                    <div className="col-lg-3">
                        <p>{beds}</p>
                        <h3>2000</h3>
                        <h3>Number of Beds</h3>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Ratings;