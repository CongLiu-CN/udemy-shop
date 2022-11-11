import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { UserProvider } from './contexts/user.context';
import { MajorProvider } from './contexts/major.context';
import { CartProvider } from './contexts/cart.context';
import { ProvinceProvider } from './contexts/province.context';
import { CollegeProvider } from './contexts/college.context';

import './index.scss';

const rootElement = document.getElementById('root');

render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ProvinceProvider>
          <CollegeProvider>
            <MajorProvider>
              <CartProvider>
                <App />
              </CartProvider>
            </MajorProvider>
          </CollegeProvider>
        </ProvinceProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);
