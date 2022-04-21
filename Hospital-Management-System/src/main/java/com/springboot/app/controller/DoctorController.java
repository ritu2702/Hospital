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
import com.springboot.app.entities.Doctor;
import com.springboot.app.service.DoctorService;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class DoctorController {
	
	@Autowired
	private DoctorService doctorService;
	
	@GetMapping("/doctors")
	public List<Doctor> getAllDoctors(){
		return doctorService.allDoctors();
	}
	
	@GetMapping("/getByDoctorid/{doctorId}")
	public Doctor getDoctor(@PathVariable Integer doctorId)
	{
		return doctorService.getDoctorById(doctorId);
	}
	@GetMapping("/getDoctorByName/{name}")
	public List<Doctor> getDoctorByName(@PathVariable String name){
		return doctorService.getDoctorByName(name);
	}	
	
	@PostMapping(value="/registerDoctors" , consumes=MediaType.APPLICATION_JSON_VALUE, produces=MediaType.APPLICATION_JSON_VALUE)
    public int PostDoctor(@RequestBody Doctor doctor) {
		return doctorService.saveDoctors(doctor);
	}
	
//	@PostMapping("/doctorLogin")
//	public int loginDoctor(@RequestBody Doctor doctor) {
//		return doctorService.validate(doctor);
//	}
	
	@PutMapping("/editDoctor/{doctorId}")
	public int update(@PathVariable int doctorId, @RequestBody Doctor doctor) {
		return doctorService.updateDoctor(doctorId, doctor);
	}
	
	@DeleteMapping("/deleteDoctor/{doctorId}")
	public int delete(@PathVariable int doctorId) {
		return doctorService.deleteDoctor(doctorId);
	}
	
	@PostMapping("/doctorLogin")
	public Doctor loginDoctor(@RequestBody Doctor doctor) {
		System.out.println("login successfull");
		 return doctorService.validate(doctor);
		
//		if(checkingLogin) {
//			System.out.println("login successfull");
//		    return 0;
//		}
//		System.out.println("login failed");
//		return 1;
		
	}
	
	@GetMapping("/allSpeciality")
	public List<String> getAllSpeciality(){
		return doctorService.allSpeciality();
	}
	
}
