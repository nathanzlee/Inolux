import { useState } from 'react'
import FormOption from '../travelAuth/formOption'

const FormQuestion = ({ question }) => {

    const [selectedOption, setSelectedOption] = useState(null)

    function handleOnChange(e) {
        setSelectedOption(e.target.value)
    }

    return (
        <div className="pt-6 sm:pt-5">
            <div role="group" aria-labelledby="label-notifications">
                <div className="sm:grid sm:grid-cols-3 sm:items-baseline sm:gap-4">
                    <div>
                        <div className="text-sm font-semibold leading-6 text-gray-900" id="label-notifications">
                        {question.question}
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <div className="max-w-lg">
                            <FormOption options={question.options} selected={selectedOption} onChange={(e) => {handleOnChange(e)}}/>
                            {/* <div className="mt-4 space-y-4">
                                <div className="flex items-center">
                                    <input
                                        id="push-everything"
                                        name="push-notifications"
                                        type="radio"
                                        className="h-4 w-4 border-gray-300 text-text-[var(--primary-color) focus:ring-text-[var(--primary-color)"
                                    />
                                    <label
                                        htmlFor="push-everything"
                                        className="ml-3 block text-sm font-medium leading-6 text-gray-900"
                                    >
                                        Yes
                                    </label>
                                </div>
                                <div className="flex items-center">
                                    <input
                                        id="push-email"
                                        name="push-notifications"
                                        type="radio"
                                        className="h-4 w-4 border-gray-300 text-text-[var(--primary-color) focus:ring-text-[var(--primary-color)"
                                    />
                                    <label
                                        htmlFor="push-email"
                                        className="ml-3 block text-sm font-medium leading-6 text-gray-900"
                                    >
                                        No
                                    </label>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormQuestion