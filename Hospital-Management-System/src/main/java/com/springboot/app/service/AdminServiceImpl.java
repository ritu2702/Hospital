package com.springboot.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springboot.app.entities.Admin;
import com.springboot.app.repository.AdminRepository;

@Service
public class AdminServiceImpl implements AdminService {

	@Autowired
	private AdminRepository adminRepository;

	@Override
	public List<Admin> allAdmins() {

		return adminRepository.findAll();
	}
	
	@Override
	public Admin getAdminById(int adminId) {
		
		return adminRepository.findById(adminId).orElse(null);
	}
	
	@Override
	public int saveAdmins(Admin admin) {
		
		String password = admin.getPassword(); 
		String confirmPassword = admin.getConfirmPassword();
		String name = admin.getName();
		String email = admin.getEmail();
		
		Admin a = new Admin();
		
		a.setPassword(password);
		a.setConfirmPassword(confirmPassword);
		a.setName(name);
        a.setEmail(email);
        
        Admin result = adminRepository.save(a); 
        
        if(result != null) {
    		System.out.print("Record inserted");
    		return 0;
    		
    		} 
            
            return 1;
		
	}

	@Override
	public int validate(Admin admin) {
		String email = admin.getEmail();
		String password = admin.getPassword(); 
		
		Admin validAdmin=adminRepository.findByEmailAndPassword(email, password);
		
		if(validAdmin!=null){
			System.out.println("login successfull");
		    return 0;
		}
		else {
		System.out.println("login failed");
		return 1;
		}
	}
	
	@Override
	public int updateAdmin(int adminId, Admin admin) {
		Admin admin1 = adminRepository.findById(adminId).orElse(null);
		   
		admin1.setName(admin.getName());
		admin1.setPassword(admin.getPassword());
		admin1.setConfirmPassword(admin.getConfirmPassword());
		admin1.setEmail(admin.getEmail());
		   
		Admin result = adminRepository.save(admin1);
		  
		   if(result != null) {
				System.out.println("Record updated");
				return 0;
				
				} 
		   
		return 1;
	}

	@Override
	public int deleteAdmin(int adminId) {
		adminRepository.deleteById(adminId);
		System.out.println("Admin Deleted");
		return 0;
	}

}