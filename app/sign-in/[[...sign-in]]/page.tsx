import { SignIn } from '@clerk/nextjs'
import React from 'react'

const page = () => {
  return (
    <div className='h-screen w-full bg-amber-300 flex justify-center items-center'><SignIn/></div>
  )
}

export default page