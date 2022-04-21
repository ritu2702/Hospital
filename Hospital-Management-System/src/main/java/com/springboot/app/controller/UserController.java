package com.springboot.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.MediaType;


import com.springboot.app.entities.User;
import com.springboot.app.service.UserService;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class UserController {

	@Autowired
	private UserService userService;

	@GetMapping("/users")
	public List<User> getAllUsers() {
		return userService.allUsers();
	}

	@GetMapping("/getByUserid/{userId}")
	public User getUser(@PathVariable int userId) {
		return userService.getUserById(userId);
	}

	@PostMapping(value = "/registerUsers", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public int PostUser(@RequestBody User user) {
		return userService.saveUsers(user);
	}

	@PostMapping("/login")

	public int loginUser(@RequestBody User user) {

		return userService.validate(user);

	}

	@PostMapping("/emailExists")
	public boolean checkIfEmailExists(@RequestBody User user) {
		return userService.checkIfEmailExists(user);

	}

	@PutMapping("/editUser/{userId}")
	public int updateUser(@PathVariable int userId, @RequestBody User user) {
		return userService.updateUser(userId, user);
	}
	
	@DeleteMapping("/deleteUser/{userId}")
    public int deleteUser(@PathVariable int userId) { 		
		return userService.deleteUser(userId);
        
    }  

}
