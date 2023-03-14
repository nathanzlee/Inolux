import { useState } from 'react'
import PersonalInfo from './sections/personalInfo'
import InternationalTravel from './sections/internationalTravel'
import TripPurpose from './sections/tripPurpose'
import TripDuration from './sections/tripDuration'
import Itinerary from './sections/itinerary'
import TravelAdvance from './sections/travelAdvance'
import PersonalTravel from './sections/personalTravel'
import EmployeeSignature from './sections/employeeSignature'
import ManagerSignature from './sections/managerSignature'
import PresidentSignature from './sections/presidentSignature'

const TravelAuth = ({ type, user }) => {
    const personalInfo = {
        name: (user) ? user.firstName  + ' ' + user.lastName : '',
        number: (user) ? user.number : '',
        department: (user) ? user.department : '',
        phone: (user) ? user.phone : '',
        reqDate: Date.now()
    }
    const [internationalTravel, setInternationalTravel] = useState(false)
    const [tripPurpose, setTripPurpose] = useState(null)
    const [tripDuration, setTripDuration] = useState(null)
    const [itinerary, setItinerary] = useState(null)
    const [travelAdvance, setTravelAdvance] = useState(null)
    const [personalTravel, setPersonalTravel] = useState(null)
    const [employeeSignature, setEmployeeSignature] = useState(null)
    const [managerSignature, setManagerSignature] = useState(null)
    const [presidentSignature, setPresidentSignature] = useState(null)

    function handleInternationalTravelChange(e) {
        setInternationalTravel(e.target.value)
    }

    return (
        <form className="space-y-8 divide-y divide-gray-200">
            <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
                <PersonalInfo user={(user) ? user : null}/>
                <InternationalTravel onChange={(e) => {handleInternationalTravelChange(e)}}/>
                <TripPurpose />
                <TripDuration />
                <Itinerary />
                <TravelAdvance />
                <PersonalTravel />
                <EmployeeSignature />
                <ManagerSignature />
                <PresidentSignature />
            </div>

            <div className="pt-5">
                <div className="flex justify-end gap-x-3">
                    <button
                        type="button"
                        className="rounded-md bg-white py-2 px-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Save
                    </button>
                </div>
            </div>
        </form>
    )
}


export default TravelAuth