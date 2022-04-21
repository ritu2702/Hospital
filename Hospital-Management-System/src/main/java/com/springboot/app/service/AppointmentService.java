package com.springboot.app.service;

import java.util.List;

import com.springboot.app.entities.Appointment;


public interface AppointmentService {
	
	public List<Appointment> getAllApp(); 
	
	public List<Appointment> getAppByEmail(String email); 
	
	public List<Appointment> getAppBySpeciality(String speciality); 
	
	public int saveAppoint(Appointment appoint);
	
    public int updateAppoint(int id,Appointment appoint);
	
	public int deleteAppoint(int id);
	
	public int approveApp(int id,Appointment appoint);
	
	public List<Appointment> getAppByDoctor(String doctorname);
	
	public Appointment getAppById(int id);

}
