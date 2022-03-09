package com.devsuperior.mgmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.mgmovie.entities.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long>{

}
