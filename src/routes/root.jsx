import { Navigate, Route, Routes } from 'react-router-dom';

import { MainLayout } from '~/layouts';
import { Dashboard } from '~/pages';

export const Router = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route
          path="/"
          element={
            <Navigate
              to="/dashboard"
              replace
            />
          }
        />
        <Route
          path="/dashboard"
          element={<Dashboard />}
        />
      </Route>
    </Routes>
  );
};
