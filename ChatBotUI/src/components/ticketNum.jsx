
const TicketNum = ({num , index})=>{

    return (
        <>
        <span key={index} className="mx-2 text-lg font-semibold">{num}</span>
        </>
    )

    
}

export default TicketNum;