package com.springboot.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.springboot.app.entities.User;

@Repository
public interface UserRepository extends JpaRepository<User,Integer> {
	
     boolean existsByEmail(String email);
	
	 User findByEmailAndPassword(String email,String password);

}
