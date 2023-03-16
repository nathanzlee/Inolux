import { useState, useRef } from 'react'
import Router from 'next/router'
import PersonalInfo from './sections/personalInfo'
import InternationalTravel from './sections/internationalTravel'
import TripPurpose from './sections/tripPurpose'
import TripDuration from './sections/tripDuration'
import Itinerary from './sections/itinerary/itinerary'
import TravelAdvance from './sections/travelAdvance'
import PersonalTravel from './sections/personalTravel'
import Signature from './sections/signature'
import Notes from './sections/notes'

const TravelAuth = ({ type, requester, viewer, data }) => {
    // Requester is person who requested travel auth, viewer is person who is currently looking at it, data is travel auth data
    // All possible situations
    // 1. Creating new travel auth -> type == "new"
    // mode = "edit", only show employee signature field, set all states to initial

    // 2. Not approved yet, requester is viewing their own travel auth
    // mode = "edit", show all signature fields (depending on international or not), set all states based on data 

    //3. Approved, requester, manager, or president is viewing travel auth 
    // mode = "view", show all signature fields (depending on international or not), set all states based on data

    // 4. Not approved yet, direct manager is viewing employee's travel auth 
    // mode = "authorize", show all signature fields (depending on international or not), set all states based on data

    // 5. Not approved yet, president (not direct manager) is viewing employee's travel auth 
    // mode = "authorize", show all signature fields , set all states based on data
    let submitText, edit, signatures
    if (type == 'new') {
        submitText = 'submit'
        edit = true
        signatures = (
            <Signature label={'Employee Signature'} user={requester} onChange={handleEmployeeSignature} />
        )
    }

   
    const { personalInfo, tripInfo, approval, status } = data 
    console.log(data)
    const [internationalTravel, setInternationalTravel] = useState(tripInfo.international)
    const [tripPurpose, setTripPurpose] = useState(tripInfo.purpose)
    const [tripDuration, setTripDuration] = useState({startDate: tripInfo.startDate, endDate: tripInfo.endDate})
    const [itinerary, setItinerary] = useState(tripInfo.itinerary)
    const [travelAdvance, setTravelAdvance] = useState(tripInfo.travelAdv)
    const [personalTravel, setPersonalTravel] = useState(tripInfo.personalTravel)
    const [employeeSignature, setEmployeeSignature] = useState({user: null, signature: '', date: null})
    const [managerSignature, setManagerSignature] = useState({user: null, signature: '', date: null})
    const [presidentSignature, setPresidentSignature] = useState({user: null, signature: '', date: null})
    const [notes, setNotes] = useState('')

    function handleInternationalTravelChange(e) {
        setInternationalTravel(e.target.value)
    }

    function handleTripPurposeChange(e) {
        setTripPurpose(e.target.value)
    }

    function handleTripDurationChange(data) {
        setTripDuration(data)
        console.log(data)
    }

    function handleItineraryChange(data) {
        setItinerary(data)
    }

    function handleTravelAdvanceChange(data) {
        setTravelAdvance(data)
        console.log(data)
    }

    function handlePersonalTravelChange(data) {
        setPersonalTravel(data)
        console.log(data)
    }

    function handleEmployeeSignature(data) {
        setEmployeeSignature(data)
    }

    function handleManagerSignature(data) {
        setManagerSignature(data)
    }

    function handlePresidentSignature(data) {
        setPresidentSignature(data)
    }

    function handleNotes(data) {
        setNotes(data)
    }

    function handleCancel() {
        Router.push('/travel')
    }

    function handleSubmit(e) {
        e.preventDefault()
    }

    

    return (
        <form className="space-y-8 divide-y divide-gray-200">
            <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
                <div className="space-y-6 divide-y divide-gray-200 pt-8 sm:space-y-5 sm:pt-10">
                    <div>
                        <h3 className="text-base font-semibold leading-6 text-gray-900">Personal Information</h3>
                    </div> 
                    <PersonalInfo data={personalInfo}/>
                </div>
                <div className="space-y-6 divide-y divide-gray-200 pt-8 sm:space-y-5 sm:pt-10">
                    <div>
                        <h3 className="text-base font-semibold leading-6 text-gray-900">Trip Information</h3>
                    </div>
                    <InternationalTravel data={internationalTravel} onChange={(e) => {handleInternationalTravelChange(e)}} />
                    <TripPurpose data={tripPurpose} onChange={(e) => {handleTripPurposeChange(e)}} />
                    <TripDuration data={tripDuration} onChange={handleTripDurationChange} />
                    <Itinerary data={itinerary} onChange={handleItineraryChange}/>
                    <TravelAdvance data={travelAdvance} onChange={handleTravelAdvanceChange} />
                    <PersonalTravel data={personalTravel} onChange={handlePersonalTravelChange} />
                </div>
                <div className="space-y-6 divide-y divide-gray-200 pt-8 sm:space-y-5 sm:pt-10">
                    <div>
                        <h3 className="text-base font-semibold leading-6 text-gray-900">Approval</h3>
                    </div>
                    {/* <Signature label={'Employee Signature'} user={requester} onChange={handleEmployeeSignature} />
                    <Signature label={'Manager Signature'} user={requester} onChange={handleManagerSignature} />
                    <Signature label={'President Signature'} user={requester} onChange={handlePresidentSignature} /> */}
                    {signatures}
                    <Notes data={notes} onChange={handleNotes}/>
                </div>
            </div>

            <div className="pt-5">
                <div className="flex justify-end gap-x-3">
                    <button
                        type="button"
                        onClick={handleCancel}
                        className="rounded-md bg-white py-2 px-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        onClick={(e) => {handleSubmit(e)}}
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