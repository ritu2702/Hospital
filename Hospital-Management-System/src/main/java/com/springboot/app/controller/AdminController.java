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

import com.springboot.app.entities.Admin;
import com.springboot.app.service.AdminService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class AdminController {
	
	@Autowired
	private AdminService adminService;
	
	@GetMapping("/admins")
	public List<Admin> getAllAdmins()
	{
		return adminService.allAdmins();
	}
	
	@GetMapping("/getByAdminid/{adminId}")
	public Admin getAdmin(@PathVariable Integer adminId)
	{
		return adminService.getAdminById(adminId);
	}
	
	@PostMapping(value="/registerAdmins" , consumes=MediaType.APPLICATION_JSON_VALUE, produces=MediaType.APPLICATION_JSON_VALUE)
    public int PostAdmin(@RequestBody Admin admin) {
		return adminService.saveAdmins(admin);
	}
	
	@PostMapping("/adminLogin")
    public int loginAdmin(@RequestBody Admin admin) {  
    
		return adminService.validate(admin);
	}
	
	@PutMapping("/editAdmin/{adminId}")
	public int update(@PathVariable int adminId, @RequestBody Admin admin) {
		return adminService.updateAdmin(adminId, admin);
	}
	
	@DeleteMapping("/deleteAdmin/{adminId}")
    public int delete(@PathVariable int adminId) { 		
		return adminService.deleteAdmin(adminId);
        
    }  
	
}
