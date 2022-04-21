package com.springboot.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.stereotype.Service;

import com.springboot.app.entities.Appointment;

import com.springboot.app.repository.AppointmentRepository;


@Service
public class AppointmentServiceImpl implements AppointmentService {
	
	@Autowired
	AppointmentRepository appointmentRepository;
	
	@Autowired
	private EmailSenderService senderService;

	@Override
	public List<Appointment> getAllApp() {
		
		return appointmentRepository.findAll(Sort.by(Direction.ASC, "dateofapp"));
	}
	
	@Override
	public List<Appointment> getAppByEmail(String email) {
		
		return appointmentRepository.findByEmail(email);
	}

//	@Override
//	public List<Appointment> getAppByEmail(String email) {
//		
//		return appointmentRepository.findByEmail(email);
//	}

	@Override
	public List<Appointment> getAppBySpeciality(String speciality) {
		
		return appointmentRepository.findBySpeciality(speciality);
	}

	@Override
	public int saveAppoint(Appointment appoint) {
		String name = appoint.getName();
		String email = appoint.getEmail();
		String speciality = appoint.getSpeciality();
		String timeofapp = appoint.getTimeofapp();
		String dateofapp = appoint.getDateofapp();
		String doctorname = appoint.getDoctorname();
		String prescription = appoint.getPrescription();
		String paymentStatus = appoint.getPaymentStatus();
		String patientProblem = appoint.getPatientProblem();
		
		Appointment app = new Appointment();
		app.setName(name);
		app.setEmail(email);
		app.setSpeciality(speciality);
		app.setTimeofapp(timeofapp);
		app.setDateofapp(dateofapp);
		app.setDoctorname(doctorname);
		app.setPrescription(prescription);
		app.setPaymentStatus(paymentStatus);
		app.setPatientProblem(patientProblem);
		
		Appointment result = appointmentRepository.save(app);
		
		if(result != null) {
    		System.out.println("appointment Booked");
    		return 0;
    		
    		} 
		return 1;
	}

	@Override
	public int updateAppoint(int id, Appointment appoint) {
		
		Appointment appoint1 = appointmentRepository.findById(id).orElse(null);
		appoint1.setName(appoint.getName());
		appoint1.setEmail(appoint.getEmail());
		appoint1.setSpeciality(appoint.getSpeciality());
		appoint1.setTimeofapp(appoint.getTimeofapp());
		appoint1.setDateofapp(appoint.getDateofapp());
		appoint1.setDoctorname(appoint.getDoctorname());
		appoint1.setPrescription(appoint.getPrescription());
		appoint1.setPaymentStatus(appoint.getPaymentStatus());
		appoint1.setPatientProblem(appoint.getPatientProblem());
		
		Appointment result = appointmentRepository.save(appoint1);
		
		if(result != null) {
			System.out.println("Appointment updated");
			return 0;
			
			} 
	   
	return 1;
	}

	@Override
	public int deleteAppoint(int id) {
		appointmentRepository.deleteById(id);
		System.out.println("Appointment Deleted");
		return 0;
	}
	
	

	@Override
	public int approveApp(int id,Appointment appoint) {
		
		Appointment appoint1 = appointmentRepository.findById(id).orElse(null);
		
//		appoint1.setSpeciality(appoint.getSpeciality());
		
		appoint1.setDoctorname(appoint.getDoctorname());
		appoint1.setPrescription(appoint.getPrescription());
		appoint1.setPaymentStatus(appoint.getPaymentStatus());
		
  
		
		Appointment result = appointmentRepository.save(appoint1);
		
  		String email = appoint.getEmail();    
    		String timeof = appoint.getTimeofapp();    
    		String dateof = appoint.getDateofapp();    	
    		String doctoename = appoint.getDoctorname();

		senderService.sendEmail(email, "ClinoCo Hospital", "Your appointment is booked by the Dr. '"+doctoename+"' On date '"+dateof+"' at '"+timeof+"' ,Your patient ID is '"+id+"'");

		if(result != null) {
			System.out.print("Appointment approved");
			return 0;
			
			} 
			
			return 1;
	}
	
	@Override
	public List<Appointment> getAppByDoctor(String doctorname) {
		
		return appointmentRepository.findByDoctorname(doctorname);
	}

	@Override
	public Appointment getAppById(int id) {
		
		return appointmentRepository.findById(id).orElse(null);
	}

}
