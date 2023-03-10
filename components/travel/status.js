const Status = ({ status }) => {
    const approvedStyle = "h-[25px] w-[50%] bg-[#077E8C] text-white rounded flex flex-row items-center justify-center"
    const pendingStyle = "h-[25px] w-[50%] bg-[#F7CB73] text-white rounded flex flex-row items-center justify-center"
    const deniedStyle = "h-[25px] w-[50%] bg-[#D9512C] text-white rounded flex flex-row items-center justify-center"

    let style, text 
    
    if (status == "approved") {
        style = approvedStyle
        text = "Approved"
    } else if (status == "pending") {
        style = pendingStyle
        text = "Pending"
    } else {
        style = deniedStyle
        text = "Denied"
    }

    return (
        <div class={style}>{text}</div>
    )
}

export default Status