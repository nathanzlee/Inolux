import { getSession, useSession } from 'next-auth/client'
import Router from 'next/router'
import Breadcrumb from '../../../components/breadcrumb'
import TravelAuth from '../../../components/travelAuth/travelAuth'

const NewTravelAuth = () => {
    const pages = [
        { name: 'Travel', href: '/travel' },
        { name: 'Travel Authorizations', href: '/travel/travelauth' },
        { name: 'New', href: '/travel/travelauth/new' }
    ]

    const [session, status] = useSession()

    if (!session) return null 

    let user 
    if (status) {
        console.log("loading")
    } else {
        user = session.user
        console.log(user)
    }

    const travelAuthData = {
        name: (user) ? user.firstName  + ' ' + user.lastName : '',
        number: (user) ? user.number : '',
        department: (user) ? user.department : '',
        phone: (user) ? user.phone : '',
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
            date: new Date()
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
    }

    return (
        <div className="h-[100vh] w-[100vw]">
            <Breadcrumb pages={pages}/>
            <div className="w-full h-full bg-gray-100 overflow-y-auto px-10 pb-[100px]">
                <TravelAuth type="new" requester={(user) ? user : null} data={travelAuthData} />
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

export default NewTravelAuth