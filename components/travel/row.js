import Status from '../travel/status'

const Row = ({ requester, manager, reqDate, approvedDate, status }) => {
    return (
        <div class="grid grid-cols-5 h-[50px] border-solid border-gray-300 border-2 rounded mt-1">
            <div class="flex flex-col justify-center items-center h-[50px] p-5">{requester}</div>
            <div class="flex flex-col justify-center items-center h-[50px] p-5">{manager}</div>
            <div class="flex flex-col justify-center items-center h-[50px] p-5">{reqDate}</div>
            <div class="flex flex-col justify-center items-center h-[50px] p-5">{approvedDate}</div>
            <div class="flex flex-col justify-center items-center h-[50px] p-5">
                <Status status={status} />
            </div>
        </div>
    )
}

export default Row