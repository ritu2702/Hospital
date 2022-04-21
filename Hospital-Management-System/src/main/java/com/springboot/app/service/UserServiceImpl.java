package com.springboot.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springboot.app.entities.User;
import com.springboot.app.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository userRepository;

	@Override
	public List<User> allUsers() {

		return userRepository.findAll();
	}

	@Override
	public User getUserById(int userId) {
		
		return userRepository.findById(userId).orElse(null);
	}

	@Override
	public int saveUsers(User user) {
		
		String password = user.getPassword(); 
		String confirmPassword = user.getConfirmPassword();
		String name = user.getName();
		String email = user.getEmail();
		String address = user.getAddress();
		String mobileNo = user.getMobileNo();
		int age = user.getAge();
		String bloodGroup = user.getBloodGroup();
		
		User n = new User();
		
		n.setPassword(password);
		n.setConfirmPassword(confirmPassword);
		n.setName(name);
        n.setEmail(email);
        n.setAddress(address);
        n.setMobileNo(mobileNo);
        n.setAge(age);
        n.setBloodGroup(bloodGroup);
        
        User result = userRepository.save(n); 
        
        if(result != null) {
    		System.out.println("Record inserted");
    		return 0;
    		
    		} 
            
            return 1;
		
	}

	@Override
	public int validate(User user) {
		
		String email = user.getEmail();
		String password = user.getPassword(); 
		
		User validUser=userRepository.findByEmailAndPassword(email, password);
		
		if(validUser!=null) {
			System.out.println("login successfull");
		    return 0;
		}
		else {
		System.out.println("login failed");
		return 1;
		}
	}

	@Override
	public boolean checkIfEmailExists(User user) {
		
		String email = user.getEmail();
		boolean validEmail=userRepository.existsByEmail(email);
		if(validEmail==true)
		{
			System.out.println("DUPLICATE_EMAIL");
			return false;
		}
		System.out.println("UNIQUE_EMAIL");
		return true;
	}

	@Override
	public int updateUser(int userId, User user) {
		   User user1 = userRepository.findById(userId).orElse(null);
		   
		   user1.setName(user.getName());
		   user1.setPassword(user.getPassword());
		   user1.setConfirmPassword(user.getConfirmPassword());
		   user1.setEmail(user.getEmail());
		   user1.setAddress(user.getAddress());
		   user1.setMobileNo(user.getMobileNo());
		   user1.setAge(user.getAge());
		   user1.setBloodGroup(user.getBloodGroup());
		   
		   User result = userRepository.save(user1);
		  
		   if(result != null) {
				System.out.println("Record updated");
				return 0;
				
				} 
		   
		return 1;
	}

	@Override
	public int deleteUser(int userId) {
		userRepository.deleteById(userId);
		System.out.println("User Deleted");
		return 0;
	}

	

	

	

}
