import { v4 as uuidv4 } from "uuid";
import doctor1 from "../../images/doctor1.jpg";
import doctor2 from "../../images/doctor6.jpg";
import doctor3 from "../../images/doctor3.jpg";
import doctor4 from "../../images/doctor8.jpg";
import doctor5 from "../../images/doctor5.jpg";

const dataSlider = [
  {
    id: uuidv4(),
    title: "Dr. Vicky Jain, Neuro Surgeon, 6years",
    img: doctor1,
    subTitle:
      "Dr. Vicky Jain regularly conducts instructional courses in minimally invasive disc surgery, minimally invasive spinal fusion, disc arthroplasty and balloon kyphoplasty in nationally conducted workshops. He think that I am a doctor - it’s a profession that may be considered a special mission, a devotion. It calls for involvement, respect and willingness to help all other people.",
  },
  {
    id: uuidv4(),
    title: "Dr. Nidhi Varma, Obstetrician, 3years",
    img: doctor2,
    subTitle:
      "Dr.Nidhi has a flair for gynecological surgeries and has a reputation for performing complex surgeries both amongst her patients and colleagues alike. FIGO fellowship in laparoscopy to University of Rochester, USA and Uro-gynecology Fellowship at Mercy Hospital, Melbourne gave her international perspectives. Pioneered Robotic surgery in India since 2012, today has done maximum number of Robotic Myomectomies amongst other robotic surgeries.",
  },
  {
    id: uuidv4(),
    title: "Dr. Komal Shah, Bariatric Surgeon, 4years",
    img: doctor3,
    subTitle:
      " Dr. Komal Shah is one of the most experienced surgeons in the field of bariatric and metabolic surgery in India. With more than 14 years of experience she has the expertise to cater to this high risk population of patients suffering from clinically severe obesity both during and after bariatric surgery.",
  },
  {
    id: uuidv4(),
    title: "Dr. Rita Kale, Thyroid Specialist, 8years",
    img: doctor4,
    subTitle:
      "Dr. Rita Kale is a Endocrinologist at Currae hospital in Thane and has an experience of 6 years in this field.She completed DNB - Endocrinology, Diabetes, Metabolism from P.D. Hinduja National Hospital and Medical Research Centre in 2017 and MD - General Medicine from Ayush and heal;th sciences University of Chattisgarh , Raipur in 2012.",
  },
  {
    id: uuidv4(),
    title: "Dr. Rahul Mishra, Consultant Physician, 6years",
    img: doctor5,
    subTitle:
      "Dr Rahul Mishra is consultant physician at currae hospital.He has completed his MBBS from Dr V M Government medical College and MD(Medicine) from Grant Government medical College and JJ hospital, Mumbai in 2014.He served as assistant professor in department of medicine at Grant Government medical College for 1year.His area of expertise is diabetes management, hypertension, heart disease, thyroid disorders, infectious disease, headache and vertigo management.",
  },
];

export default dataSlider;
