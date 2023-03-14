import { useState } from 'react'
import FormQuestion from '../travelAuth/formQuestion'

const TripInfo = ({ data }) => {
    const [formData, setFormData] = useState(data)
    const questions = [
        {
            question: "International Travel",
            options: [
                {label: "Yes", value: "yes"},
                {label: "No", value: "no"}
            ]
        },
        {
            question: "Purpose of Trip",
            options: [
                {label: "Customer Visit", value: "Customer Visit"},
                {label: "Supplier Visit", value: "Supplier Visit"},
                {label: "Show", value: "Show"}
            ]
        }
    ]
    return (
        <div className="space-y-6 divide-y divide-gray-200 pt-8 sm:space-y-5 sm:pt-10">
            <div>
                <h3 className="text-base font-semibold leading-6 text-gray-900">Trip Information</h3>
            </div>
            <div className="space-y-6 divide-y divide-gray-200 sm:space-y-5">
                {questions.map((question, index) => {
                    return (
                        <FormQuestion question={question} key={index} />
                    )
                })}
            </div>
        </div>
    )
}

export default TripInfo