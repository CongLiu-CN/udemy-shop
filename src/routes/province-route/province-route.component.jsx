import { Routes, Route } from 'react-router-dom';

import CollegeDetail from '../../components/college-detail/college-detail.component'
import Major from '../../components/major/major.component'
import ProvinceSelected from '../province-selected/province-selected.component';

const ProvinceRoute = () => {
  return (
    <Routes>
      <Route index element={<ProvinceSelected />} />
      <Route path=':college' element={<CollegeDetail />} />
      <Route path=':college/*' element={<Major />} />
    </Routes>
  );
};

export default ProvinceRoute;
