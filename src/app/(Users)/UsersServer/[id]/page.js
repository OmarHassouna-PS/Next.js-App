import React from 'react';
import  ErrorBoundary  from '@/app/utils/ErrorBoundary';
import Test from '@/app/utils/Test'
import Error from '../error';

async function GetUser({ params }) {
  const res = await fetch(`http://localhost:3000/api/users/${params.id}`);
  const user = await res.json();


  return (
    <>
      <h1 className='text-center pt-8 text-blue-600 font-bold text-4xl'>User</h1>
      <main className='grid justify-center p-5'>
        <div className='p-3 cursor-pointer justify-self-center'>
          <img
            src={user.image}
            className='border-blue-600 border-4 rounded-lg bg-blue-400 hover:bg-white duration-300 ease-linear'
          />
        </div>

        <ErrorBoundary fallback={<Error/>}>
          <Test />
        </ErrorBoundary>

        {Object.keys(user).map((key) => (
          <li
            key={key}
            className='bg-blue-400 text-white hover:bg-blue-600 duration-300 ease-linear p-3 cursor-pointer'
          >
            <strong>{key}:</strong> {user[key].toString()}
          </li>
        ))}
      </main>
    </>
  );
}

export default GetUser;
