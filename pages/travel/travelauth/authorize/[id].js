import { useState, useEffect } from 'react'
import { getSession } from 'next-auth/client'
import { useRouter } from 'next/router'
import TravelAuth from '../../../../components/travelAuth/travelAuth'
import Breadcrumb from '../../../../components/breadcrumb'

const Authorize = () => {
    const router = useRouter()
    const [travelAuth, setTravelAuth] = useState({
      name: '',
      number: '',
      department: '',
      phone: '',
      reqDate: Date.now(),
      purpose: '',
      startDate: null,
      endDate: null,
      itinerary: [{date: null, location: '', people: '', reason: ''}],
      travelAdv: {advance: true, amount: 0},
      personalTravel: {personal: false, startDate: null, endDate: null},
      international: true,
      approveBy: [],
      employeeSig: {
          signature: '', 
          date: null
      },
      managerSig: {
          user: null,
          signature: '', 
          date: null
      },
      presidentSig: {
          user: null,
          signature: '', 
          date: null
      },
      notes: '',
      status: "pending"
  })

    useEffect(async () => {
        const res = await fetch('/api/travel/travelauth/' + router.query.id)
        const user = await res.json()
        if (!user.err) setTravelAuth(user)
    }, [])

    const pages = [
        { name: 'Travel', href: '/travel' },
        { name: 'Travel Authorizations', href: '/travel/travelauth' },
        { name: 'Authorize', href: router.asPath }
    ]
    return (
        <div className="h-[100vh] w-[100vw]">
            <Breadcrumb pages={pages}/>
            <div className="w-full h-full bg-gray-100 overflow-y-auto px-10 pb-[100px]">
              <TravelAuth type="authorize" viewer={router.query.user} data={travelAuth} />
            </div>
        </div>
    )
}

export async function getServerSideProps(context) {
    const session = await getSession(context)
    console.log(session)
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

export default Authorize