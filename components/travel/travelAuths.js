import Row from '../travel/row'

// const TravelAuths = ({ data }) => {
//     return (!data || data.length == 0) ? 
//     (
//         <div class="h-[400px] w-[100%] flex flex-col justify-center text-center">
//             <h2 class="text-3xl text-gray-300">No Travel Authorizations</h2>
//         </div>
//     )
//     :
//     (
//         <div class="flex flex-col items-center w-full">
//             <div class="w-[70%] grid grid-cols-5 border-solid border-b-2 border-[blue] mt-10">
//                 <div class="flex flex-col justify-center items-center p-2">Requester</div>
//                 <div class="flex flex-col justify-center items-center p-2">Manager</div>
//                 <div class="flex flex-col justify-center items-center p-2">Requested</div>
//                 <div class="flex flex-col justify-center items-center p-2">Approved</div>
//                 <div class="flex flex-col justify-center items-center p-2">Status</div>
//             </div>
//             <div class="w-[70%] h-[500px] overflow-y-auto">
//                 {data.map(({ name, reqDate, managerSig, presidentSig, status}) => {
//                     const approvedDate = (presidentSig.date == null) ? new Date(managerSig.date).toLocaleDateString() : new Date(Math.max(new Date(managerSig.date), new Date(presidentSig.date))).toLocaleDateString()
//                     return (
//                         <Row requester={name} manager={managerSig.user.firstName + ' ' + managerSig.user.lastName} reqDate={new Date(reqDate).toLocaleDateString()} approvedDate={approvedDate} status={status}/>
//                     )
//                 })}
//             </div>
//         </div>
        
//     )
// }
const TravelAuths = ({ data }) => {
    return (!data || data.length == 0) ?
    (
        <div className="h-[600px] flex flex-col justify-center items-center border-dashed border-2 border-gray-300 rounded-md mt-8 p-4">
            <h1 class="text-3xl text-gray-300">No Travel Authorizations</h1>
        </div>
    )
    :
    (
        <div className="h-[600px] bg-white border-solid border-[1px] border-gray-300 rounded-md mt-8 flow-root p-4">
            <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <table className="min-w-full divide-y divide-[var(--primary-color)]">
                        <thead>
                            <tr>
                                <th scope="col" className="px-3 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                                    Name
                                </th>
                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                    Manager
                                </th>
                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                    Requested
                                </th>
                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                    Approved
                                </th>
                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                    Status
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 bg-white overflow-y-auto">
                            {data.map(({ _id, name, reqDate, managerSig, presidentSig, status }) => {
                                const approvedDate = (presidentSig.date == null) ? new Date(managerSig.date).toLocaleDateString() : new Date(Math.max(new Date(managerSig.date), new Date(presidentSig.date))).toLocaleDateString()
                                return (
                                    <Row key={_id} requester={name} manager={managerSig.user.firstName + ' ' + managerSig.user.lastName} reqDate={new Date(reqDate).toLocaleDateString()} approvedDate={approvedDate} status={status}/>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default TravelAuths