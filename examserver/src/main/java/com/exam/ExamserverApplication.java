package com.exam;

import com.exam.helper.UserFoundException;
import com.exam.model.Role;
import com.exam.model.User;
import com.exam.model.UserRole;
import com.exam.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.HashSet;
import java.util.Set;

@SpringBootApplication
public class ExamserverApplication implements CommandLineRunner {

	@Autowired
	private UserService userService;

	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;


	public static void main(String[] args) {

		SpringApplication.run(ExamserverApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {

		System.out.println("Starting Code");
		try {

		User user= new User();
		user.setFirstName("Ankit");
		user.setLastName("vitale");
		user.setUsername("admin");
		user.setEmail("ankitvitale39@email.com");
		user.setProfile("default.png");
			user.setPassword(this.bCryptPasswordEncoder.encode("ankit1226"));

		Role role1= new Role();
		role1.setRoleId(44L);
		role1.setRoleName("ADMIN");

		Set<UserRole>set= new HashSet<>();
		UserRole userRole=new UserRole();
		userRole.setRole(role1);
		userRole.setUser(user);
		set.add(userRole);

		User user1=this.userService.creatUser(user,set);
		System.out.println(user1.getUsername());
		}catch (UserFoundException e){
			e.printStackTrace();
		}
		}
}
