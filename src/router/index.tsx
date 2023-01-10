import { Route, Routes } from 'react-router-dom';

import { Home } from '~/pages/Home';
import { Hi } from '~/pages/Hi';
import { Default } from '~/layouts/Default';

export function Router() {
  return (
    <Routes>
      <Route
        path='/'
        element={<Default />}
      >
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/hi'
          element={<Hi />}
        />
      </Route>
    </Routes>
  );
}
