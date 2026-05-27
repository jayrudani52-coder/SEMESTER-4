function Sproject(props){
    return(
        <div>
            {
                props.data.map((d,i)=>
                <div key={i}>
                    <h1>Project Name: {d.name}</h1>
                    <h4>{d.desc}</h4>
                    <img src={d.image} width="300"/>
                </div>
                )
            }
        </div>
    )
}
export default Sproject;