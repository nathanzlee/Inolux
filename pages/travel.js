import React, { useState, useEffect } from 'react'
import { getSession } from 'next-auth/client'
import Nav from '../components/Nav'
import TravelAuths from '../components/travel/travelAuths'
import Router, { useRouter } from 'next/router'

const Travel = () => {
    let user
  const [travelAuths, setTravelAuths] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function getTravelAuths() {
        setLoading(true)
        const res = await fetch('/api/travel')
        user = await res.json()
        setTravelAuths(user.travelAuths)
        setLoading(false)
    }
    getTravelAuths()
  },[])

  return (
    <div>
      <Nav />
      <div class="flex flex-col items-center w-full">
        { true && (
            <button onClick={() => {Router.push('/travelauth/new')}} class="bg-white text-[var(--primary-color)] border-2 border-[var(--primary-color)] border-solid px-1 py-1 rounded-md hover:bg-[var(--primary-color)] hover:text-white my-10">New Travel Authorization</button>
        ) }
        {/* { loading && <h2>Loading ....</h2> } */}
        <TravelAuths data={travelAuths} />
      </div>
        
    </div>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context)
  
  if (!session){
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

export default Travel
