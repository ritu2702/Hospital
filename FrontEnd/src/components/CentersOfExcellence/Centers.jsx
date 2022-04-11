import style from "./Centers.module.css";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTooth,
  faEye,
  faCapsules,
  faHeartPulse,
  faBone,
  faLungs,
  faBacteria,
  faHeadSideVirus,
  faEarDeaf,
  faBaby,
  faPersonPregnant,
  faUserDoctor,
} from "@fortawesome/free-solid-svg-icons";
import Auxer from "./Hoc/Auxer.js";

const cards = {
  faTooth: {
    image: faTooth,
    h3: "Dental",
    p: "Trained on the largest collection of expertly annotated dental imagery in the world, Pearl’s computer vision system.",
  },

  faEye: {
    image: faEye,
    h3: "Optical",
    p: "To reduce or eliminate the need for glasses or contact lenses for cosmetic reasons and To improve the quality of life adversely affected by changes or loss in vision and we  give you lot of other treatments",
  },

  faCapsules: {
    image: faCapsules,
    h3: "Medicine",
    p: " India Ki Pharmacy, is brought to you by the CliniCo & Company – one of India’s most trusted pharmacies, with over 100 years’ experience in dispensing quality medicines.",
  },

  faHeartPulse: {
    image: faHeartPulse,
    h3: "Cardiology",
    p: "We believe in quality service at the right time with the help of efficient specialist so as to fulfill its motto of ‘Saving Lives’. Headed by one of the finest first generation Cardiologist .",
  },

  faBone: {
    image: faBone,
    h3: "Bone",
    p: "We are equipped with latest technology like Western India’s First Fully Automatic Joint Replacement System and best experts to take care of your orthopedic healthcare needs",
  },

  faLungs: {
    image: faLungs,
    h3: "Lungs",
    p: "Lung Care and Sleep Centre has a team of Chest Physicians that offers state-of-the-art diagnosis and treatment for Respiratory / Pulmonary Diseases. They diagnose and treat various types diseases",
  },

  faBacteria: {
    image: faBacteria,
    h3: "Bacteria",
    p: "Caused by viral, bacterial, and fungal pathogens, the most common types are bloodstream infection (BSI), pneumonia (ventilator-associated pneumonia [VAP]), urinary tract infection (UTI).",
  },

  faHeadSideVirus: {
    image: faHeadSideVirus,
    h3: "Neorology",
    p: "It is mainly dedicated to BRAIN, SPINE & ACCIDENT patients. Back bone of the fully trained NEURO TEAM is 2 full time neurosurgeons, full time intensivist-anesthetist. Paramedical staff naturally well.",
  },

  faEarDeaf: {
    image: faEarDeaf,
    h3: "Ear",
    p: "The major task of the Ear is to detect, transmit and transduce sound to the brain through the parts of the Ear and also to maintain our sense of balance.We also provide daily checkups for patients",
  },

  faBaby: {
    image: faBaby,
    h3: "Children",
    p: "Your children need specially designed health care services with unique needs, which can fulfilled by specialty-trained pediatrics and child specialists.Our Child specialist is gentle and caring ",
  },

  faPersonPregnant: {
    image: faPersonPregnant,
    h3: "Mother Care",
    p: "Doctors and staff guide you through the miraculous journey of welcoming a healthy, gurgling baby into this world.We offers excellent maternity services tailor-made for moms-to-be. ",
  },

  faUserDoctor: {
    image: faUserDoctor,
    h3: "General Physician",
    p: "We are highly trained specialists who provide a range of non-surgical health care to adult patients.We continue to see the patient until these problems have resolved or stabilised.",
  },
};

export const Centers = () => {
  const [pageNumber, setPageNumber] = useState(0);
  var itemPerpage = 4;

  var totalPage = Object.keys(cards).length / itemPerpage;

  var cardDisplay = Object.keys(cards)
    .slice(pageNumber * itemPerpage, pageNumber * itemPerpage + itemPerpage)
    .map((item) => {
      console.log("item" + item);
      return (
        <div key={item} className={style.Card}>
          <FontAwesomeIcon className={style.Font} icon={cards[item]["image"]} />
          <h3 className={style.FontHeader}>{cards[item]["h3"]}</h3>
          <p className={style.FontText}>{cards[item]["p"]}</p>
        </div>
      );
    });

  var page = [];

  for (let i = 0; i < totalPage; i++) {
    page.push(i);
  }

  var pagination = page.map((item) => {
    return (
      <div
        style={
          pageNumber === item ? { backgroundColor: "rgb(7, 4, 187)" } : null
        }
        className={style.Btn}
        onClick={() => {
          setPageNumber(item);
        }}
      ></div>
    );
  });

  console.log(page);

  return (
    <div>
      <div className={style.textcenters}>
        <h4>
          <u>Centers of Excellence</u>
        </h4>
        <p>
          Combining the best specialists and equipment to provide you nothing
          short of the best in healthcare
        </p>
      </div>
      <Auxer>
        <div className={style.Main}>{cardDisplay}</div>

        <div className={style.Pagination}>{pagination}</div>

        <div className={style.Pagination}></div>
      </Auxer>
    </div>
  );
};
