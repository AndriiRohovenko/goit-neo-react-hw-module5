import styles from './MovieCast.module.css';

import { getMovieDetailsCredits } from '../../api/movies';

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

function MovieCast() {
  const [hits, setHits] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    const movie_actors_data_fetching = async () => {
      try {
        setIsLoading(true);

        const data = await getMovieDetailsCredits(movieId);
        if (data) {
          setHits(data.cast.slice(0, 20));
          setError(false);
        } else {
          setError(true);
        }
      } catch (error) {
        console.error(error);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    movie_actors_data_fetching();
  }, [movieId]);

  const defaultImg =
    'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg';

  console.log(hits);
  console.log(`https://image.tmdb.org/t/p/w500${hits.profile_path}`);

  return (
    <>
      <div className={styles.movieCastWrapper}>
        {error == true && (
          <ErrorMessage message={'Please try to reload the page!'} />
        )}
        <ul>
          {isLoading ? (
            <Loader />
          ) : (
            hits.map(actor => (
              <li className={styles.castItemWrapper} key={actor.id}>
                <img
                  src={
                    actor.profile_path
                      ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                      : defaultImg
                  }
                  alt="Actor photo"
                />
                <b>
                  <p>{actor.name}</p>
                </b>
                <p>{actor.character}</p>
              </li>
            ))
          )}
        </ul>
      </div>
    </>
  );
}

export default MovieCast;
