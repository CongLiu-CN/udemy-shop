import { Routes, Route } from 'react-router-dom';

import College from '../college/college.component';
import ProvinceSelected from '../province-selected/province-selected.component';

const ProvinceRoute = () => {
  return (
    <Routes>
      <Route index element={<ProvinceSelected />} />
      <Route path=':college' element={<College />} />
    </Routes>
  );
};

export default ProvinceRoute;
