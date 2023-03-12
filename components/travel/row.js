import Status from '../travel/status'

const Row = ({ _id, requester, manager, reqDate, approvedDate, status }) => {
    return (
        <tr key={_id} class="my-2">
            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm">
                <div className="flex items-center">
                    {/* <div className="h-10 w-10 flex-shrink-0">
                        <img className="h-10 w-10 rounded-full" src={person.image} alt="" />
                    </div> */}
                    <div className="font-medium text-gray-900">{requester}</div>
                </div>
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                <div className="text-gray-900">{manager}</div>
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                <div className="text-gray-900">{reqDate}</div>
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                <div className="text-gray-900">{approvedDate}</div>
            </td>
            <td className="whitespace-nowrap py-4 text-sm text-gray-500">
                <Status status={status}/>
            </td>
            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium">
                <a href="#" className="text-[var(--primary-color)] hover:text-blue-900">
                    View
                </a>
            </td>
        </tr>
    )
}

export default Row