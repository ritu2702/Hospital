package com.springboot.app.service;

import java.sql.Time;
import java.util.List;

import com.springboot.app.entities.Doctor;
import com.springboot.app.repository.DoctorRepository;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;


@Service
public class DoctorServiceImpl implements DoctorService{
	
	@Autowired
	private DoctorRepository doctorRepository;
	
	@Override
	public List<Doctor> allDoctors() {

		return doctorRepository.findAll();
	}
	
	@Override
	public Doctor getDoctorById(int doctorId) {
		
		return doctorRepository.findById(doctorId).orElse(null);
	}
	@Override
	public int saveDoctors(Doctor doctor) {
		
		String password = doctor.getPassword(); 
		String confirmPassword = doctor.getConfirmPassword();
		String name = doctor.getName();
		String email = doctor.getEmail();
		String mobileNo = doctor.getMobileNo();
		String speciality = doctor.getSpeciality();
		int experience = doctor.getExperience();
		String qualification = doctor.getQualification();
		String arrivalTime = doctor.getArrivalTime();
		String leavingTime = doctor.getLeavingTime();
		
		Doctor n = new Doctor();
		
		n.setPassword(password);
		n.setConfirmPassword(confirmPassword);
		n.setName(name);
		n.setEmail(email);
		n.setMobileNo(mobileNo);
		n.setSpeciality(speciality);
		n.setExperience(experience);
		n.setQualification(qualification);
		n.setArrivalTime(arrivalTime);
		n.setLeavingTime(leavingTime);
		
		Doctor result = doctorRepository.save(n);
		if(result != null) {
			System.out.println("Record inserted");
			return 0;
		}
		return 1;
		
	}

//	@Override
//	public int validate(Doctor doctor) {
//		String email = doctor.getEmail();
//		String password = doctor.getPassword();
//		
//		Doctor validDoctor = doctorRepository.findByEmailAndPassword(email, password);
//		
//		if(validDoctor!=null) {
//			System.out.println("login successfull");
//			return 0;
//		}else {
//			System.out.println("login failed");
//			return 1;
//		}
//
//	}

	@Override
	public int updateDoctor(int doctorId, Doctor doctor) {
		Doctor doctor1 =doctorRepository.findById(doctorId).orElse(null);
		
		doctor1.setName(doctor.getName());
		doctor1.setPassword(doctor.getPassword());
		doctor1.setConfirmPassword(doctor.getConfirmPassword());
		doctor1.setEmail(doctor.getEmail());
		doctor1.setMobileNo(doctor.getMobileNo());
		doctor1.setSpeciality(doctor.getSpeciality());
		doctor1.setQualification(doctor.getQualification());
		doctor1.setExperience(doctor.getExperience());
		doctor1.setArrivalTime(doctor.getArrivalTime());
		doctor1.setLeavingTime(doctor.getLeavingTime());
		
		Doctor result = doctorRepository.save(doctor1);
		
		  if(result != null) {
				System.out.println("Record updated");
				return 0;	
				} 		   
		return 1;

	}

	@Override
	public int deleteDoctor(int doctorId) {
		doctorRepository.deleteById(doctorId);
		System.out.println("Doctor Deleted");
		return 0;
	}

	@Override
	public List<Doctor> getDoctorByName(String name) {
		return doctorRepository.findDoctorByName(name);
	}
	
	@Override
	public Doctor validate(Doctor doctor) {
		String email = doctor.getEmail();
		String password = doctor.getPassword();
		System.out.println(email);
		
		return doctorRepository.findByEmailAndPassword(email, password);
		
//		if(validDoctor!=null)
//			return true;
//		
//		return false;
	}
	
	@Override
	public List<String> allSpeciality() {
		
		return doctorRepository.getDistinctDoctorsBySpeciality();
	}

}
