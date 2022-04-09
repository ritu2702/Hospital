import React from "react";
import "./ServicePage.css";

export const Service = () => {
  return (
    <div>
      <div className="servicewrapper">
        <h1>Our Services</h1>
        <p className="servicespara">
          Personal Health Record system stores all your data in a secure
          environment and gives you complete control over who accesses your
          information. Access your Health Records from the comfort of your home
          while seamlessly maintaining a record of your medical conditions. The
          Key features of Prism include lot of benefits. Our Heart Institutes
          are regarded as one of the best heart hospitals in India, performing a
          multitude of treatments and procedures in cardiology and
          cardiothoracic surgery. The scorecard shows an unmatched record of
          over 1,52,000 cardiac and cardiothoracic surgeries.
        </p>

        <div className="servicecontent-box">
          <div className="servicecard">
            <i className="bx bx-male-female bx-md"></i>
            <h2>Patient Care</h2>
            <p>
              We serve our patients with utmost care. Patient Care is provided
              through the In-Patient Department and Out- Patient Department.
            </p>
          </div>

          <div className="servicecard">
            <i className="bx bxs-injection bx-md"></i>
            <h2>Medical Services</h2>
            <p>
              In our commitment to improving the health and well-being of the
              people we cater to, our medical services cover every major
              specialty. A team of experienced medical consultants dedicated to
              delivering excellence in patient care are equipped to offer
              solutions for medical conditions ranging from the common to the
              complex.
            </p>
          </div>

          <div className="servicecard">
            <i className="bx bxs-chat bx-md"></i>
            <h2>24/7 Online Support</h2>
            <p>
              A wide range of services and resources, conveniently available
              under one roof, provide the necessary diagnostic and
              rehabilitative support to address any current or potential health
              issues. It complements all treatments and procedures offered at
              the hospital.
            </p>
          </div>

          <div className="servicecard">
            <i className="bx bx-video-recording bx-md"></i>
            <h2>Surgical Support</h2>
            <p>
              The four major state-of-the-art modular operating theatres are
              equipped to handle every kind of elective and emergency surgery.
              From procedures in categories as diverse as oncology,
              orthopaedics, neurology, urology, otolaryngology and gynaecology
              to sophisticated minimally invasive techniques.
            </p>
          </div>

          <div className="servicecard">
            <i className="bx bxs-spa bx-md"></i>
            <h2>Cancer Care</h2>
            <p>
              Patients suffering from malignancy can benefit from a full
              spectrum of care, including diagnostic investigations, medical and
              surgical treatments, chemotherapy and radiation therapy. Radiation
              therapy is a highly complex procedure that requires cutting-edge
              technology and a team of highly trained and experienced health
              care professionals.
            </p>
          </div>

          <div className="servicecard">
            <i className="bx bx-male bx-md"></i>
            <h2>Pediatric Care</h2>
            <p>
              The Hospital has a well supported department to meet the unique
              physical, emotional and developmental needs of children from
              infancy through childhood to young adulthood. It has a panel of
              high quality Consultants committed to providing care in various
              paediatric subspecialties, offering in-patient, out-patient,
              diagnostic, surgical, behavioural and emergency services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
