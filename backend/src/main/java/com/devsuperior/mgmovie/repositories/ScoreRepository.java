package com.devsuperior.mgmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.mgmovie.entities.Score;
import com.devsuperior.mgmovie.entities.ScorePK;

public interface ScoreRepository extends JpaRepository<Score, ScorePK>{

}
