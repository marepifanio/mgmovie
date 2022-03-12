import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Movie } from 'types/movie';
import { BASE_URL } from 'utils/requests';
import './style.css';

type Props = {
    movieId : string;
}

function FormCard( { movieId } : Props ) {

    const [movie, setMovie] = useState<Movie>();

    useEffect(() => {
        axios.get(`${BASE_URL}/movies/${movieId}`)
        .then(response => {
            setMovie(response.data)
        });
    }, [movieId]);


    return (
        <div className="mgmovie-form-container">
            <img className="mgmovie-movie-card-image" src={movie?.image} alt={movie?.title} />
            <div className="mgmovie-card-bottom-container">
                <h3>{movie?.title}</h3>
                <form className="mgmovie-form">
                    <div className="form-group mgmovie-form-group">
                        <label htmlFor="email">Informe seu email</label>
                        <input type="email" className="form-control" id="email" />
                    </div>
                    <div className="form-group mgmovie-form-group">
                        <label htmlFor="score">Informe sua avaliação</label>
                        <select className="form-control" id="score">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div className="mgmovie-form-btn-container">
                        <button type="submit" className="btn btn-primary mgmovie-btn">Salvar</button>
                    </div>
                </form >
                <Link to ='/'>
                    <button className="btn btn-primary mgmovie-btn mt-3">Cancelar</button>                
                </Link>
            </div >
        </div >
        );
}

export default FormCard;