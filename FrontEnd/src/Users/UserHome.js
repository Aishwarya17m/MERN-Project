
import axios from 'axios'
import React, { useEffect,useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './Style/Userpage.css';
import Navbar from './Navbar'
import './Style/home.css'

function UserHome(props) {

  const [products, setproducts] = useState([])
  const { uid } = useParams();
const [searchdata,setsearchdata]=useState("")
const[ watch,setwatch]=useState(false)
const[ clock,setclock]=useState(false)
const[lower,setlower]=useState("");
const[higher,sethigher]=useState("");
  useEffect(() => {
    

    axios.get("http://localhost:4000/product/Allproducts").then(res => {
      setproducts(res.data)
    })
  
   
  }, [])
const Allproductshandle=()=>{
  axios.get("http://localhost:4000/product/Allproducts").then(res => {
      setproducts(res.data)
    })
    setwatch(false);
setclock(false)
}
 const watchhandle=()=>{
 
setwatch(true);
setclock(false)
    axios.get("http://localhost:4000/product/Allproducts").then(res => {
      const pro=res.data.filter(d=>d.product_category==="Watch")
      setproducts(pro)
     
      }
    
    )
   
    }
    const clockhandle=()=>{
  
 
 setclock(true)
 setwatch(false)
      axios.get("http://localhost:4000/product/Allproducts").then(res => {
        const pro=res.data.filter(d=>d.product_category==="Clock")
        setproducts(pro)
        
  
        }
      )
}

  
const changehandle=(e)=>{
  setsearchdata(e.target.value);

   axios.get("http://localhost:4000/product/Allproducts").then(res => {
     const pro=res.data.filter(d=>d.brand.toLowerCase().includes(e.target.value.toLowerCase()))
     setproducts(pro)
    
     }
   )
   
 }
 var prod=[]
 const subcategoryhandle=(val)=>{
  
    axios.get("http://localhost:4000/product/Allproducts").then(res => {
        const pro=res.data.filter(d=>d.product_subcategory===val)
        setproducts(pro)
       
        prod.push(products)

     
        }
      )
  
  

  
  
 }

 const applyrange=()=>{

  if(lower.length>0 && higher.length>0){
 const pro=products.filter(d=>d.price <=higher && d.price>=lower)
         setproducts(pro)
 }
   else{
    alert("enter value")
   }
     
      
        
       

          
 }
 const sortltohprice=()=>{
const prodcopy=[...products]
  prodcopy.sort((a,b)=>{
    return a.price-b.price
  }
  )
  setproducts(prodcopy)
 }
 const sorthtolprice=()=>{
  const prod1copy=[...products]
  prod1copy.sort((a,b)=>{
    return b.price-a.price
  }
  )
  setproducts(prod1copy)
 }

 
  return (
    <div>
      <Navbar />
      <div className='main-content'>
      <div className='left-menu'>
        
         
             
                  <ul className='left-menu-category' >
                  <li onClick={Allproductshandle}>All Products</li>
                  <li onClick={watchhandle}>Watch</li>
                  <li onClick={clockhandle}>Clock</li>
                  <h3 style={{color:"white",marginTop:"3%"}}>Brands</h3>
                  <input type="text" placeholder='enter clock/watch brand' style={{marginTop:"3%",padding:"10px",borderRadius:"10px"}} onChange={e=>{changehandle(e)}} value={searchdata}/>
               {watch? (
                <ul className='left-menu-category'>
               <li onClick={()=>subcategoryhandle("Men")} >Men</li>
                        <li onClick={()=>subcategoryhandle("Women")} value="Women">Women</li> </ul>):clock?(
                <ul className='left-menu-category'>
              <li onClick={()=>subcategoryhandle("Analog")} >Analog</li>
                        <li onClick={()=>subcategoryhandle("Digital")} >Digital</li>
                        </ul>) :""}
                        <h3 style={{color:"white",marginTop:"3%"}}>Price Range</h3>
                      <div className='price-range-values'>
                        <input type="number" className="price-low-range" placeholder='Lower'  onChange={e=>setlower(e.target.value)} value={lower} />
                        <input type="number" className="price-high-range" placeholder='Higher'  onChange={e=>sethigher(e.target.value)} value={higher} />
                       
                        </div>
                        <button onClick={applyrange} className="pricerangebutton">Apply</button>
                        <h3 style={{color:"white",marginTop:"3%"}}>Sort By Price</h3>
                        <li onClick={sortltohprice}>Low to High</li>
                        <li onClick={sorthtolprice}>High to Low</li>
                       
               </ul>
                 
             
                 
                 
                  
         
        
                 
                    
        


      </div>
      <div className='product-content'>
  
        <div className='grid-products'>
          {
            products.map(p => {
          
              return (
               
                <div key={p._id} className="products-gridview">
                  
                 
                  <div><img className='product-images' alt="product-img" src={p.product_image} /></div>
                  <div className='description'>
                  <div>{p.brand}</div>
                  <div><Link to={`/${uid}/${p._id}`}>{p.product_name}</Link></div>
                  
                  <div className='price'>Price: &#8377; {p.price}</div>
                  </div>
                                   
                  
                  

                </div>
              )
            })
          }
        </div>


      </div>
      </div>
    </div>
  )
}

export default UserHome