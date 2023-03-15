import { useState } from 'react'
import RadioOptions from '../form/radioOptions'

const InternationalTravel = ({ data, onChange }) => {
    const [selectedOption, setSelectedOption] = useState('')

    function handleOnChange(e) {
        setSelectedOption(e.target.value)
    }
    const options = [
        {label: "Yes", value: "yes"},
        {label: "No", value: "no"}
    ]
    return (
        <div className="space-y-6 divide-y divide-gray-200 sm:space-y-5">
            <div className="pt-6 sm:pt-5">
                <div role="group" aria-labelledby="label-notifications">
                    <div className="sm:grid sm:grid-cols-3 sm:items-baseline sm:gap-4">
                        <div>
                            <div className="text-sm font-semibold leading-6 text-gray-900" id="label-notifications">
                            International Travel 
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <div className="max-w-lg">
                                <RadioOptions options={options} selected={selectedOption} onChange={(e) => {
                                    handleOnChange(e)
                                    onChange(e)
                                }}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InternationalTravel