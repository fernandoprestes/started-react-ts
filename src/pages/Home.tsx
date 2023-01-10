import { Link } from 'react-router-dom';

export const Home = function PageHome() {
  return (
    <>
      <h2 className='text-2xl font-bold text-slate-800'>Hello World</h2>
      <Link
        to={{
          pathname: 'hi',
        }}
        className='text-xl text-slate-500 underline'
      >
        Hi
      </Link>
    </>
  );
};
