package com.exam.service;

import com.exam.model.User;
import com.exam.model.UserRole;
import com.exam.model.exam.Category;

import java.util.Set;

public interface UserService {
    //Creating user
    public User creatUser(User user, Set<UserRole>userRoles) throws Exception;

    //get users
    public Set<User> getUsers();

    //get user by username
    public User getUser(String username);


    //delete user by id
    public void deleteUser(Long userId);

    public  User updateUser(User user);

}
