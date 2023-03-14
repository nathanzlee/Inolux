const PersonalInfo = ({ user }) => {
    return (
        <div className="space-y-6 pt-8 sm:space-y-5 sm:pt-10">
            <div>
                <h3 className="text-base font-semibold leading-6 text-gray-900">Personal Information</h3>
            </div>
            <div className="space-y-6 sm:space-y-5">
                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                    <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                        First name
                    </label>
                    <div className="mt-2 sm:col-span-2 sm:mt-0">
                        <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                            {user && user.firstName}
                        </label>
                    </div>
                </div>
                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                    <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                        Last name
                    </label>
                    <div className="mt-2 sm:col-span-2 sm:mt-0">
                        <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                            {user && user.lastName}
                        </label>
                    </div>
                </div>
                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                    <label htmlFor="employee-number" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                        Employee Number
                    </label>
                    <div className="mt-2 sm:col-span-2 sm:mt-0">
                        <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                            {user && user.number}
                        </label>
                    </div>
                </div>
                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                    <label htmlFor="department" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                        Department
                    </label>
                    <div className="mt-2 sm:col-span-2 sm:mt-0">
                        <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                            {user && user.department}
                        </label>
                    </div>
                </div>
                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                    <label htmlFor="department" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                        Phone
                    </label>
                    <div className="mt-2 sm:col-span-2 sm:mt-0">
                        <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                            {user && user.phone}
                        </label>
                    </div>
                </div>
                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                    <label htmlFor="department" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                        Date 
                    </label>
                    <div className="mt-2 sm:col-span-2 sm:mt-0">
                        <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                            {new Date(Date.now()).toLocaleDateString()}
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PersonalInfo