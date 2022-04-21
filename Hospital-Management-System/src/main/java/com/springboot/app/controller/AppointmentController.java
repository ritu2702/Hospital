package com.springboot.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.app.entities.Appointment;
import com.springboot.app.service.AppointmentService;




@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class AppointmentController {
	
	@Autowired
	AppointmentService appointmentService;
	
	@GetMapping("/appoint")
	public List<Appointment> getAllAppointments()
	{
		return appointmentService.getAllApp();
	}
	
	@GetMapping("/appointByEmail/{email}")
	public List<Appointment> getAllByEmail(@PathVariable String email)
	{
		return appointmentService.getAppByEmail(email);
	}
	
	@GetMapping("/appointbySpeciality/{speciality}")
	public List<Appointment> getAllBySpeciality(@PathVariable String speciality)
	{
		return appointmentService.getAppBySpeciality(speciality);
	}
	
	@PostMapping(value = "/registerAppoint", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public int PostAppointment(@RequestBody Appointment appoint) {
		return appointmentService.saveAppoint(appoint);
	}
	
	@PutMapping("/editAppoint/{id}")
	public int updateAppointment(@PathVariable int id, @RequestBody Appointment appoint) {
		return appointmentService.updateAppoint(id, appoint);
	}
	
	@DeleteMapping("/deleteAppoint/{id}")
    public int deleteAppointment(@PathVariable int id) { 		
		return appointmentService.deleteAppoint(id);
        
    } 
	
	@GetMapping("/getByappointid/{id}")
	public Appointment getAppoint(@PathVariable int id) {
		return appointmentService.getAppById(id);
	}
	
	
	@PutMapping("/approved/{id}")
	public int approveAppointment(@PathVariable int id,@RequestBody Appointment appoint) {
		return appointmentService.approveApp(id,appoint);
	}
	
	@GetMapping("/appointBydoctor/{doctorname}")
	public List<Appointment> getAllByDoctor(@PathVariable String doctorname)
	{
		return appointmentService.getAppByDoctor(doctorname);
	}
	
	

}
