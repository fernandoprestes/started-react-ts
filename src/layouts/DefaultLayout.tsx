import { Outlet } from 'react-router-dom';

export default function DefaultLayout() {
  return (
    <>
      <div className='container'>
        <Outlet />
      </div>
    </>
  );
}
