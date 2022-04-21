package com.springboot.app.service;

import java.util.List;

import com.springboot.app.entities.Admin;


public interface AdminService {
	
	public List<Admin> allAdmins();

	public Admin getAdminById(int adminId);
	
	public int saveAdmins(Admin admin);
	
	public int validate(Admin admin);
	
	public int updateAdmin(int adminId, Admin admin);
	
	public int deleteAdmin(int adminId);

}