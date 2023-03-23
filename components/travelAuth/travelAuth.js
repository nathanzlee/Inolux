import { useState } from 'react'
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

const TravelAuth = ({ type, viewer, data }) => {
    console.log(data)
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

    const personalInfo = {
        name: data.name,
        number: data.number,
        department: data.department,
        phone: data.phone,
        reqDate: data.reqDate
    }

    const [internationalTravel, setInternationalTravel] = useState(data.international)
    const [tripPurpose, setTripPurpose] = useState(data.purpose)
    const [tripDuration, setTripDuration] = useState({startDate: data.startDate, endDate: data.endDate})
    const [itinerary, setItinerary] = useState(data.itinerary)
    const [travelAdvance, setTravelAdvance] = useState(data.travelAdv)
    const [personalTravel, setPersonalTravel] = useState(data.personalTravel)
    const [employeeSignature, setEmployeeSignature] = useState(data.employeeSig)
    const [managerSignature, setManagerSignature] = useState(data.managerSig)
    const [presidentSignature, setPresidentSignature] = useState(data.presidentSig)
    const [notes, setNotes] = useState(data.notes)
    
    function handleInternationalTravelChange(e) {
        setInternationalTravel(e.target.value)
    }

    function handleTripPurposeChange(e) {
        setTripPurpose(e.target.value)
    }

    function handleTripDurationChange(data) {
        setTripDuration(data)
    }

    function handleItineraryChange(data) {
        setItinerary(data)
    }

    function handleTravelAdvanceChange(data) {
        setTravelAdvance(data)
    }

    function handlePersonalTravelChange(data) {
        setPersonalTravel(data)
    }

    function handleEmployeeSignature(data) {
        setEmployeeSignature(data)
        console.log(data)
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
        Router.push('/travel/travelauth')
    }

    async function handleSubmit(e) {
        e.preventDefault()

        const data = {
            name: personalInfo.name,
            number: personalInfo.number,
            department: personalInfo.department,
            phone: personalInfo.phone,
            reqDate: personalInfo.reqDate,
            international: internationalTravel,
            purpose: tripPurpose,
            startDate: tripDuration.startDate,
            endDate: tripDuration.endDate,
            itinerary: itinerary,
            travelAdv: travelAdvance,
            personalTravel: personalTravel,
            employeeSig: employeeSignature,
            notes: notes,
            status: 'pending'
        }
        console.log(data)
        const req = await fetch('/api/travel/travelauth/new', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const res = await req.json()
        if (res.msg == 'Success!') {
            Router.push({pathname: '/travel/travelauth', query: {action: 'new', success: true}})
        } else {
            Router.push({pathname: '/travel/travelauth', query: {action: 'new', success: false}})
        }
    }

    async function handleSave(e) {
        e.preventDefault()

        const update = {
            startDate: tripDuration.startDate,
            endDate: tripDuration.endDate,
            itinerary: itinerary,
            travelAdv: travelAdvance,
            personalTravel: personalTravel,
            notes: notes,
        }
        
        const req = await fetch('/api/travel/travelauth/edit/' + data.id, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(update)
        })
        const res = await req.json()
        if (res.msg == 'Success!') {
            Router.push({pathname: '/travel/travelauth', query: {action: 'edit', success: true}})
        } else {
            Router.push({pathname: '/travel/travelauth', query: {action: 'edit', success: false}})
        }
    }

    async function handleAuthorize(e) {
        e.preventDefault()
        let approval
        if (viewer == 'manager') {
            const status = (presidentSignature !== null && presidentSignature.signature == '') ? 'pending' : 'approved'
            approval = {role: 'manager', signature: managerSignature.signature, date: new Date(), status: status, notes: notes}
        } else {
            const status = (managerSignature.signature == '') ? 'pending' : 'approved'
            approval = {role: 'president', presidentSig: presidentSignature, status: status, notes: notes}
        }
        console.log(data)
        const req = await fetch('/api/travel/travelauth/authorize/' + data.id, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(approval)
        })
        const res = await req.json()
        console.log(res)
        if (res.msg == 'Success!') {
            Router.push({pathname: '/travel/travelauth', query: {action: 'authorize', success: true}})
        } else {
            Router.push({pathname: '/travel/travelauth', query: {action: 'authorize', success: false}})
        }
    }

    let submit, edit, editEmployee, showManager, editManager, showPresident, editPresident
    if (type == 'new') {
        submit = (
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
                    Submit
                </button>
            </div>
        )
        edit = true
        editEmployee = true
        showManager = false 
        editManager = false 
        showPresident = false
        editPresident = false
    } else if (type == 'view') {
        if (viewer == 'requester' && data.status !== 'approved') {
            submit = (
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
                        onClick={(e) => {handleSave(e)}}
                        className="inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Save
                    </button>
                </div>
            )
            edit = true
            editEmployee = false
            showManager = true
            editManager = false 
            showPresident = (presidentSignature !== null) && true
            editPresident = false
        } else {
            submit = (
                <div className="flex justify-end gap-x-3">
                    <button
                        type="button"
                        onClick={handleCancel}
                        className="rounded-md bg-white py-2 px-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    >
                        Cancel
                    </button>
                </div>
            )
            edit = false
            editEmployee = false
            showManager = true
            editManager = false 
            showPresident = (presidentSignature !== null) && true
            editPresident = false
        }
    } else {
        submit = (
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
                    onClick={(e) => {handleAuthorize(e)}}
                    className="inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Authorize
                </button>
            </div>
        )
        edit = false
        editEmployee = false

        if (viewer == 'manager') {
            showManager = true
            editManager = true
            showPresident = (presidentSignature !== null) && true
            editPresident = false
        } else {
            showManager = true
            editManager = false 
            showPresident = true
            editPresident = true
        }
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
                    <InternationalTravel data={internationalTravel} edit={type == 'new'} onChange={(e) => {handleInternationalTravelChange(e)}} />
                    <TripPurpose data={tripPurpose} edit={type == 'new'} onChange={(e) => {handleTripPurposeChange(e)}} />
                    <TripDuration data={tripDuration} edit={edit} onChange={handleTripDurationChange} />
                    <Itinerary data={itinerary} edit={edit} onChange={handleItineraryChange}/>
                    <TravelAdvance data={travelAdvance} edit={edit} onChange={handleTravelAdvanceChange} />
                    <PersonalTravel data={personalTravel} edit={edit} onChange={handlePersonalTravelChange} />
                </div>
                <div className="space-y-6 divide-y divide-gray-200 pt-8 sm:space-y-5 sm:pt-10">
                    <div>
                        <h3 className="text-base font-semibold leading-6 text-gray-900">Approval</h3>
                    </div>
                    <Signature label={'Employee Signature'} data={employeeSignature} edit={editEmployee} onChange={handleEmployeeSignature} />
                    {showManager && <Signature label={'Manager Signature'} data={managerSignature} edit={editManager} onChange={handleManagerSignature} />}
                    {showPresident && <Signature label={'President Signature'} data={presidentSignature} edit={editPresident} onChange={handlePresidentSignature} />}
                    <Notes data={notes} edit={(data.status == 'approved') ? false : true} onChange={handleNotes}/>
                </div>
            </div>

            <div className="pt-5">
                {submit}
            </div>
        </form>
    )
}


export default TravelAuth