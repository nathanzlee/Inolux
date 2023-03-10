import React, { useState, useEffect } from 'react'
import { getSession } from 'next-auth/client'
import axios from 'axios'

import Nav from '../components/Nav'


const Home = () => {

  return (
    <div>
      <Nav />
    </div>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context)
  
  if(!session){
    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    }
  }
  
  return {
    props: { session }
  }
}

export default Home
