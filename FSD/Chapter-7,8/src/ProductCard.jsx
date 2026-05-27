function ProductCard(props){
    return(
        <>
        <table border="1">
            {
              props.data.filter((p)=>p.rating>4).map((p,i)=>
                <tr><th>{p.name}</th>
                <td>{p.price}</td>
                <td><img src={p.image} width="100"></img></td>
                <td>{p.rating}</td>
</tr>
   ) }
        </table>
        </>
    )
}export default ProductCard