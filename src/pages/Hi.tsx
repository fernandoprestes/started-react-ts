import { Link } from 'react-router-dom';

export const Hi = function PageHi() {
  return (
    <>
      <h2 className='text-2xl font-bold text-slate-800'>Hi</h2>
      <Link
        to={{
          pathname: '/',
        }}
        className='text-xl text-slate-500 underline'
      >
        Go home
      </Link>
    </>
  );
};
