import './App.module.css';

import { Route, Routes } from 'react-router-dom';

import { lazy, Suspense } from 'react';

// const HomeLayout = lazy(() => import('./layouts/HomeLayout/HomeLayout'));

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const ErrorPage = lazy(() => import('../../pages/ErrorPage/ErrorPage'));
const Movies = lazy(() => import('../../pages/Movies/Movies'));
const MovieInfo = lazy(() => import('../../pages/MovieInfo/MovieInfo'));

const App = () => {
  return (
    <div>
      {/* <Nav /> */}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieInfo />}>
            {/* <Route path="cast" element={<MovieInfoCast />} />
            <Route path="review" element={<MovieInfoReview />} /> */}
          </Route>

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
