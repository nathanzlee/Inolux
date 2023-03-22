import { useState, useEffect } from 'react'
import { getSession } from 'next-auth/client'
import { useRouter } from 'next/router'
import Breadcrumb from '../../../../components/breadcrumb'

const Authorize = () => {
    const router = useRouter()
    const [travelAuth, setTravelAuth] = useState(null)

    useEffect(async () => {
        const res = await fetch('/api/travel/travelauth/' + router.query.id)
        user = await res.json()
        if (!user.err) setTravelAuth(user.data)
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
                {/* <TravelAuth type="authorize" requester={(user) ? user : null} data={travelAuthData} /> */}
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