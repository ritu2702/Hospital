package com.springboot.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.springboot.app.entities.Admin;

@Repository
public interface AdminRepository extends JpaRepository<Admin,Integer> {

	Admin findByEmailAndPassword(String email, String password);
}
