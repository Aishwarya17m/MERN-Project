import React, { useState } from 'react'
import axios from 'axios'
import { storage } from "../firebase"
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { Link, useParams } from 'react-router-dom'

import { v4 } from 'uuid'
function AddProducts() {
    const {rid}=useParams()
  const [prodname, setprodname] = useState("")
  const [category, setcategory] = useState("")
  const [subcategory, setsubcategory] = useState("")
  const [price, setprice] = useState("")
  const [desc, setdesc] = useState("")
  const [brand, setbrand] = useState("")
  const [stock, setstock] = useState("")
  const [image, setimage] = useState(null)
  const [status, setstatus] = useState("not approved")
  const [imgUrl, setImgUrl] = useState(null);
  const [percent, setpercent] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = {
      Retailer:rid,
      product_name: prodname,
      product_category: category,
      product_subcategory: subcategory,
      price: price,
      description: desc,
      brand: brand,
      stock: stock,
      product_image: imgUrl,
      status: status

    };
    if(prodname.length===0 || category==='none' || price.length===0||desc.length===0||subcategory==='none' ||brand.length===0||stock.length===0||image===null)
{
  alert("enter all product details")
}
    // if(username && email && password && phone){
else{
  
    axios.post(`http://localhost:4000/retailer/productap/${rid}`, data)
      .then(res => {
        alert("successfully submitted for approval")
        
        

      })
      .catch(err=>alert(err.response.data))

    //.catch(console.log("error",id))

  }
}



  const imageupload = (e) => {

    e.preventDefault()

   
    if (e.target.files[0] === null) return;
    

    const imgref = ref(storage, `${category}/${subcategory}/${brand}/${e.target.files[0].name + v4()}`)
    const uploadTask = uploadBytesResumable(imgref, e.target.files[0])

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const per = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );

        // update progress
        setpercent(per);
      },
      (err) =>{

      console.log(err.response.data);
      alert("upload image ")
      },
      () => {
        // download url
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          setImgUrl(url)
          setimage(url)
          
        });
      }
      
    );
  };

  return (
    <div>
    <h4 style={{textAlign:"center",margin:"20px",color:"red"}}>Add product Details</h4>

    <form className='add-product-details'>

      <div >
        <label htmlFor="productname" className='product-name'> Product Name: </label>
        <input type="text" name="productname" className='productname' value={prodname} onChange={e => setprodname(e.target.value)} />
      </div>

      <div >
        <label htmlFor="category" className='category'>Category: </label>
        <select name="category" className="categoryselect" onChange={e => setcategory(e.target.value)}>
          <option value="none"  >Select an Option</option>
          <option value="Watch">Watch</option>
          <option value="Clock">Clock</option>


        </select>

      </div>

      <div >
        <label htmlFor="subcategory" className='subcategory'>Sub Category: </label>
       
        {category === "Watch" ?
          <select name="subcategory" className="select-subcategory" onChange={e => setsubcategory(e.target.value)}>
            <option value="none"  >Select an Option</option>
            <option value="Men">Men</option>
            <option value="Women">Women</option>




          </select>
          :
          <select name="subcategory" className='select-subcategory' placeholder="select subcategory" onChange={e => setsubcategory(e.target.value)}>
            <option value="none"  >Select an Option</option>
            <option value="Analog">Analog</option>
            <option value="Digital">Digital</option>
          </select>

        }
      </div>


      <div >
        <label htmlFor="price" className='pricelable' >Price: </label>
        <input type="number" name="price" className="proprice" value={price} onChange={e => setprice(e.target.value)} />
      </div>

      <div >
        <label htmlFor="desc" className='desc'> Description: </label>
        <textarea value={desc} name="desc" className='prodescription' onChange={e => setdesc(e.target.value)} />
      </div>
      <div >
        <label htmlFor="brand" className='brandlable'> Brand: </label>
        <input type="text" name="brand" className="brand" value={brand} onChange={e => setbrand(e.target.value)} />
      </div>
      <div >
        <label htmlFor="stock" className='stocklable'>Stock: </label>
        <input type="number" name="stock" className='stock' value={stock} onChange={e => setstock(e.target.value)} />
      </div>
      <div >
        <label className='imagelable' >Image: </label>

        <input type='file' id="image" className='imageupload' name='image' onChange={imageupload} />

        {
        !imgUrl &&
       
          <span className='innerbar' style={{ width: `${percent}%` }}>{percent}%</span>
       
      }

      </div>


    
      <button className='submit-product'  onClick={handleSubmit}>Submit</button>
     
    
     
    </form>


    </div>
  )
}

export default AddProducts