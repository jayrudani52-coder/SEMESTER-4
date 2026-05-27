function Events(){
    const myclick=()=>{
        alert("Hello");
    }
    return(
        <>
            <button onClick={myclick}>Click here</button>
        </>
    )
}export default Events;