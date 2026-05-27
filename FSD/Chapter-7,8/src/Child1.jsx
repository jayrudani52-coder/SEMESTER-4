function Child1(props){
    return(
        <>
            <h3 style={{color:"blue",textDecoration:"underline"}}>
                Welcome {props.data.name} to {props.data.clg}
            </h3>
        </>
    )
} export default  Child1;