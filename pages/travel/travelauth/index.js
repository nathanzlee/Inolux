import React, { useState, useEffect, Fragment } from 'react'
import { useSession, getSession } from 'next-auth/client'
import Nav from '../../../components/Nav'
import Select from '../../../components/select'
import TravelAuths from '../../../components/travel/travelAuths'
import Router, { useRouter } from 'next/router'
import { CheckCircleIcon, XMarkIcon } from '@heroicons/react/20/solid'
import { XCircleIcon } from '@heroicons/react/20/solid'

const Travel = () => {
    const [session, status] = useSession()

    if (!session) return null 

    let user 
    if (status) {
        console.log("loading")
    } else {
        user = session.user
        console.log(user)
    }
    const [travelAuths, setTravelAuths] = useState([])
    const [loading, setLoading] = useState(false)

    const selectOptions = [
        {id: 1, option: "Any status"},
        {id: 2, option: "Approved"},
        {id: 3, option: "Pending"},
        {id: 4, option: "Denied"}
    ]

    const [filter, setFilter] = useState(selectOptions[0])

    useEffect(async () => {
        setLoading(true)
        const res = await fetch('/api/travel')
        user = await res.json()
        if (!user.err) setTravelAuths(user.data)
        setLoading(false)
    }, [])

    const router = useRouter()
    const [alert, setAlert] = useState(router.query.success == 'true' || router.query.success == 'false')
    console.log(alert)
    return (
        <div class="h-[100vh] w-[100vw]">
            <Nav />
            <div class="w-full h-full bg-gray-100 p-10">
                <div className="sm:px-6 lg:px-8">
                    <h1 className="text-base font-semibold leading-6 text-gray-900">Travel Authorizations</h1>
                    <div className="flex flex-row justify-between items-center mt-10 sm:flex sm:items-center">
                        <Select options={selectOptions} initial={filter} onChange={(e) => {
                            console.log(e)
                            setFilter(e)
                        }}/>
                        {user && user.level !== 3 &&  
                        <button
                            type="button"
                            onClick={() => {Router.push('/travel/travelauth/new')}}
                            className="block rounded-md bg-[var(--primary-color)] py-2 px-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary-color)]"
                        >
                            New
                        </button>
                        }
                        
                    </div>
                    <TravelAuths data={travelAuths.filter(travelAuth => {
                        if (filter.option == "Any status") {
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
                {alert && ((router.query.success == 'true') ? (
                    <div className="rounded-md bg-green-50 p-4 absolute bottom-10">
                        <div className="flex">
                            <div className="flex-shrink-0">
                                <CheckCircleIcon className="h-5 w-5 text-green-400" aria-hidden="true" />
                            </div>
                            <div className="ml-3">
                                <p className="text-sm font-medium text-green-800">Successfully {(router.query.action == 'new') ? 'created' : 'approved'} travel authorization!</p>
                            </div>
                            <div className="ml-auto pl-3">
                                <div className="-mx-1.5 -my-1.5">
                                    <button
                                        type="button"
                                        className="inline-flex rounded-md bg-green-50 p-1.5 text-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50"
                                        onClick={() => {setSuccessAlert(false)}}
                                    >
                                        <span className="sr-only">Dismiss</span>
                                        <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
                :
                (
                    <div className="rounded-md bg-red-50 p-4 absolute bottom-10">
                        <div className="flex">
                            <div className="flex-shrink-0">
                                <XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
                            </div>
                            <div className="ml-3">
                                <p className="text-sm font-medium text-red-800">A problem occurred!</p>
                            </div>
                            <div className="ml-auto pl-3">
                                <div className="-mx-1.5 -my-1.5">
                                    <button
                                        type="button"
                                        className="inline-flex rounded-md bg-red-50 p-1.5 text-red-500 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-red-50"
                                        onClick={() => {setAlert(false)}}
                                    >
                                        <span className="sr-only">Dismiss</span>
                                        <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            )}
                
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
