import './HomePage.module.css';
import { useState, useEffect } from 'react';
import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import { getTrandingMovies } from '../../api/movies';

const HomePage = () => {
  const [hits, setHits] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const tranding_movies_fetching = async () => {
      try {
        setIsLoading(true);

        const data = await getTrandingMovies(1);

        if (data && data.results) {
          setHits(data.results);
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

    tranding_movies_fetching();
  }, []);

  console.log('hits', hits);

  return <div>HomePage</div>;
};

export default HomePage;
