import { Outlet } from 'react-router-dom';
import { Header } from './Header/Header';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <div
      style={{
        maxWidth: 960,
        margin: '0 auto',
        padding: '0 16px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
      }}
    >
      <Header />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
