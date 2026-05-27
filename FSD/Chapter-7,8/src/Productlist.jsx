import ProductCard from "./ProductCard.jsx"
import img1 from "./assets/img1.png"
import img2 from "./assets/img2.png"
import img3 from "./assets/img3.png"
function Productlist(){
    const products=[{name:"IPhone 17",price:"120000",rating:4.3,image:img1},
                    {name:"IPhone12",price:"60000",rating:4.1,image:img2},
                    {name:"IPhoneX",price:"30000",rating:3.8,image:img3}
    ]
    return(
        <>
        <ProductCard data={products}/>
        </>
    )
}export default Productlist