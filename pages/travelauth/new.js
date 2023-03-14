import { getSession, useSession } from 'next-auth/client'
import Breadcrumb from '../../components/breadcrumb'
import TravelAuth from '../../components/travelAuth/travelAuth'

const NewTravelAuth = () => {
    const pages = [
        { name: 'Travel', href: '/travel' },
        { name: 'New', href: '/travelauth/new' }
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


    return (
        <div class="h-[100vh] w-[100vw]">
            <Breadcrumb pages={pages}/>
            <div class="w-full h-full bg-gray-100 overflow-y-auto px-10 pb-[100px]">
                <TravelAuth type="new" user={(user) ? user : null} />
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