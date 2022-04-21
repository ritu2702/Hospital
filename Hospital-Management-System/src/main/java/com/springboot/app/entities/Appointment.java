package com.springboot.app.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

//@FilterDef(
//	    name="email",
//	    parameters=@ParamDef(
//	        name="emailID",
//	        type="String"
//	    )
//	)
//	@Filter(
//	    name="email",
//	    condition="email=:emailID"
//	)

//@FilterDef(
//	    name="speciality",
//	    parameters=@ParamDef(
//	        name="speciality",
//	        type="String"
//	    )
//	)
//	@Filter(
//	    name="speciality",
//	    condition="speciality=:speciality"
//	)

@Entity
@Table(name = "appointments")
public class Appointment {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private String name;
	
	@NotNull
	@Column(unique=true)
	private String email;
	
	@NotNull
	private String speciality;
	
	@NotNull
	private String timeofapp;
	
	@NotNull
	private String dateofapp;
	
	@NotNull
	private String doctorname;
	
	private String prescription;
	
	private String paymentStatus;
	
	@NotNull
	private String patientProblem;
	

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getSpeciality() {
		return speciality;
	}

	public void setSpeciality(String speciality) {
		this.speciality = speciality;
	}

	public String getTimeofapp() {
		return timeofapp;
	}

	public void setTimeofapp(String timeofapp) {
		this.timeofapp = timeofapp;
	}

	public String getDateofapp() {
		return dateofapp;
	}

	public void setDateofapp(String dateofapp) {
		this.dateofapp = dateofapp;
	}

	public String getDoctorname() {
		return doctorname;
	}

	public void setDoctorname(String doctorname) {
		this.doctorname = doctorname;
	}

	public String getPrescription() {
		return prescription;
	}

	public void setPrescription(String prescription) {
		this.prescription = prescription;
	}

	public String getPaymentStatus() {
		return paymentStatus;
	}

	public void setPaymentStatus(String paymentStatus) {
		this.paymentStatus = paymentStatus;
	}

	public String getPatientProblem() {
		return patientProblem;
	}

	public void setPatientProblem(String patientProblem) {
		this.patientProblem = patientProblem;
	}
	
	

}
