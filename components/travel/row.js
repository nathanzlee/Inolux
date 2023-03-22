import Status from '../travel/status'

const Row = ({ id, requester, manager, reqDate, approvedDate, status, type }) => {
    const url = (type == 'View') ? '/travel/travelauth/view/' + id : '/travel/travelauth/authorize/' + id 
    
    return (
        <tr>
            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{requester}</td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{manager}</td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{reqDate}</td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{approvedDate}</td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                <Status status={status} />
            </td>
            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                <a href={url} className="text-[var(--primary-color)] hover:text-indigo-900">
                    {type}
                </a>
            </td>
        </tr>
    )
}

export default Row