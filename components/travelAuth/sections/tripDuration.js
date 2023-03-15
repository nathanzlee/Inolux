import { useState } from 'react'
import Duration from '../form/duration'

const TripDuration = ({ onChange }) => {
    const [startDate, setStartDate] = useState(null)
    const [endDate, setEndDate] = useState(null)

    function getDateFromInput(date) {
        date.setDate(date.getDate() + 1);
        return new Date(date);
    }

    function handleStartChange(e) {
        const newDate = getDateFromInput(e.target.valueAsDate)
        setStartDate(newDate)
        onChange({
            startDate: newDate,
            endDate: endDate
        })
    }

    function handleEndChange(e) {
        const newDate = getDateFromInput(e.target.valueAsDate)
        setEndDate(newDate)
        onChange({
            startDate: startDate,
            endDate: newDate
        })
    }


    return (
        <div className="space-y-6 divide-y divide-gray-200 sm:space-y-5">
            <div className="pt-6 sm:pt-5">
                <div role="group" aria-labelledby="label-notifications">
                    <div className="sm:grid sm:grid-cols-3 sm:items-baseline sm:gap-4">
                        <div>
                            <div className="text-sm font-semibold leading-6 text-gray-900" id="label-notifications">
                            Duration of Trip
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <div className="max-w-lg">
                                <Duration start={startDate} end={endDate} onStartChange={(e) => {handleStartChange(e)}} onEndChange={(e) => {handleEndChange(e)}}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TripDuration