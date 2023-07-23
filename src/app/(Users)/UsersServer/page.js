'user client'

import Link from "next/link";
import Loader from "./loading";
import { Suspense } from "react";

async function userServer() {

  const res = await fetch('http://localhost:3000/api/users');
  const users = await res.json();

  if (!users) {
    return (
      <>Loading...</>
    )
  }
  return (
    <>
      <h1 className='text-center pt-8 text-blue-600 font-bold text-4xl'>Users</h1>
      <main className='grid grid-cols-4 gap-x-3  gap-y-6 p-10'>

        <Suspense fallback={<Loader />}>
          {users.users.map((user) => {
            return (
              <Link key={user.id} href={`/UsersServer/${user.id}`}>
                <div className='bg-blue-400 text-white hover:bg-blue-600 duration-300 ease-linear p-3  cursor-pointer group rounded-lg'>
                  <img src={user.image} className="group-hover:bg-white rounded-lg duration-300 ease-linear" />
                  <p className="py-3">firstName : {user.firstName}</p>
                  <p>lastName : {user.lastName}</p>
                  <p>maidenName : {user.maidenName}</p>
                  <p>age : {user.age}</p>
                  <p>gender : {user.gender}</p>
                  <p>email : {user.email}</p>
                  <p>phone : {user.phone}</p>
                </div>
              </Link>
            )
          })}
          </Suspense>
      </main>
    </>
  )
}

export default userServer

