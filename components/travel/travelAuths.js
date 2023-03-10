import Row from '../travel/row'

const TravelAuths = ({ data }) => {
    return (data.length == 0) ? 
    (
        <div class="h-[400px] w-[100%] flex flex-col justify-center text-center">
            <h2 class="text-3xl text-gray-300">No Travel Authorizations</h2>
        </div>
    )
    :
    (
        <div class="flex flex-col items-center w-full">
            <div class="w-[70%] grid grid-cols-5 border-solid border-b-2 border-[blue] mt-10">
                <div class="flex flex-col justify-center items-center p-2">Requester</div>
                <div class="flex flex-col justify-center items-center p-2">Manager</div>
                <div class="flex flex-col justify-center items-center p-2">Requested</div>
                <div class="flex flex-col justify-center items-center p-2">Approved</div>
                <div class="flex flex-col justify-center items-center p-2">Status</div>
            </div>
            <div class="w-[70%] h-[500px] overflow-y-auto">
                {data.map(({ name, reqDate, managerSig, presidentSig, status}) => {
                    const approvedDate = (presidentSig.date == null) ? new Date(managerSig.date).toLocaleDateString() : new Date(Math.max(new Date(managerSig.date), new Date(presidentSig.date))).toLocaleDateString()
                    return (
                        <Row requester={name} manager={managerSig.user.firstName + ' ' + managerSig.user.lastName} reqDate={new Date(reqDate).toLocaleDateString()} approvedDate={approvedDate} status={status}/>
                    )
                })}
            </div>
        </div>
        
    )
}

export default TravelAuths