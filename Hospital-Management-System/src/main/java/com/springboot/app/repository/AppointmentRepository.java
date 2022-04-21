package com.springboot.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.springboot.app.entities.Appointment;

@Repository
public interface AppointmentRepository extends JpaRepository<Appointment,Integer> {

	//@Query("SELECT e from Appointment e where e.email =:emailID")       // using @query
    List<Appointment> findByEmail(String email);
	
	//@Query("SELECT e from Appointment e where e.speciality =:speciality")       // using @query
    List<Appointment> findBySpeciality(@Param("speciality") String speciality);
    
    List<Appointment> findByDoctorname(String doctorname);
}
