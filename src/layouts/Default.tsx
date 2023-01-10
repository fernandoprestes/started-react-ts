import { Outlet } from 'react-router-dom';

export const Default = function LayoutDefault() {
  return (
    <div className='container'>
      <header>Started React + TS + UnoCSS</header>
      <main className='flex h-[calc(100vh-1.5rem)] flex-col items-center justify-center'>
        <Outlet />
      </main>
    </div>
  );
};
