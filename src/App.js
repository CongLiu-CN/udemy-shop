import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';
import Checkout from './routes/checkout/checkout.component';
import Province from './routes/province/province.component';
import ProvinceRoute from './routes/province-route/province-route.component';
import College from './routes/college/college.component';
import Major from './routes/major/major.component';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='province' element={<Province />} />
        <Route path=':provinceSelected/*' element={<ProvinceRoute />} />
        <Route path='college' element={<College />} />
        <Route path='major' element={<Major />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='checkout' element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
