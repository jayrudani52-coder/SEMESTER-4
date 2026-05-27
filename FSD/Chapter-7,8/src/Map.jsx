function Map(){
    const Students=[{rollno:1,name:"ABC",std:5},{rollno:2,name:"XYZ",std:4},
    {rollno:3,name:"PQR",std:5}
    ]
    return(
        <>
        {Students.filter((s)=>s.std===5).map((s,i)=>
        <div key={s.rollno}>
                <h2>Students Name:{s.name}</h2>
                <h3>Standard:{s.std+1}</h3>
        </div>)}
        </>
    )
} export default Map;