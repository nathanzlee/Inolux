import React, { useState, useEffect, Fragment } from 'react'
import { getSession } from 'next-auth/client'
import Nav from '../components/Nav'
import Select from '../components/select'
import TravelAuths from '../components/travel/travelAuths'
import Router, { useRouter } from 'next/router'

const Travel = () => {
    let user
    const [travelAuths, setTravelAuths] = useState([])
    const [loading, setLoading] = useState(false)

    const selectOptions = [
        {id: 1, option: "All"},
        {id: 2, option: "Approved"},
        {id: 3, option: "Pending"},
        {id: 4, option: "Denied"}
    ]

    const [filter, setFilter] = useState(selectOptions[0])

    async function getTravelAuths() {
        setLoading(true)
        const res = await fetch('/api/travel')
        user = await res.json()
        if (!user.err) setTravelAuths(user.travelAuths)
        setLoading(false)
    }

    useEffect(() => {
        getTravelAuths()
    }, [])
    console.log(travelAuths)
    
    return (
        <div class="h-[100vh] w-[100vw]">
            <Nav />
            <div class="w-full h-full bg-gray-100 p-10">
                <div className="sm:px-6 lg:px-8">
                    <h1 className="text-base font-semibold leading-6 text-gray-900">Travel Authorizations</h1>
                    <div className="flex flex-row justify-between items-center mt-2 sm:flex sm:items-center">
                        <Select options={selectOptions} initial={filter} onChange={(e) => {
                            console.log(e)
                            setFilter(e)
                        }}/>
                        <button
                            type="button"
                            onClick={() => {Router.push('/travelauth/new')}}
                            className="block rounded-md bg-[var(--primary-color)] py-2 px-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary-color)]"
                        >
                            New
                        </button>
                    </div>
                    <TravelAuths data={travelAuths.filter(travelAuth => {
                        if (filter.option == "All") {
                            return true
                        } else if (filter.option == "Approved") {
                            return travelAuth.status == "approved"
                        } else if (filter.option == "Pending") {
                            return travelAuth.status == "pending"
                        } else {
                            return travelAuth.status == "denied"
                        }
                    })} loading={loading}/>
                </div>
            </div>
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
  

export default Travel
