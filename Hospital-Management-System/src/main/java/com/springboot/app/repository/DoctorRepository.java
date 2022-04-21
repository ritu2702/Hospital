package com.springboot.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.springboot.app.entities.Appointment;
import com.springboot.app.entities.Doctor;

@Repository
public interface DoctorRepository extends JpaRepository<Doctor,Integer> {
	
	Doctor findByEmailAndPassword(String email, String passwordString);

	List<Doctor> findDoctorByName(String name);
	
	@Query("SELECT DISTINCT d.speciality FROM Doctor d")
	List<String> getDistinctDoctorsBySpeciality();
}
