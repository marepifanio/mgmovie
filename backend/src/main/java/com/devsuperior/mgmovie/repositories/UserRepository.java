package com.devsuperior.mgmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.mgmovie.entities.User;

public interface UserRepository extends JpaRepository<User, Long>{
	
	User findByEmail(String email);
}
