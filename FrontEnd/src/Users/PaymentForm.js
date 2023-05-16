import React,{useState} from 'react'
import {CardElement, useElements,useStripe} from "@stripe/react-stripe-js"
import axios from 'axios'
import './Style/paymentform.css'
const card_options = {
	// iconStyle: "solid",
    hidePostalCode:true,
	style: {
		base: {
			
			fontWeight: 500,
			
			fontSize: "16px",
			
		},
		invalid: {
			color:"red"
		}
	}
}
function PaymentForm(props) {
    const [success,setsuccess]=useState(false)
    const stripe=useStripe()
    const elements=useElements()


    const handleSubmit=async(e)=>{
        e.preventDefault();
        const {error,paymentMethod}=await stripe.createPaymentMethod({
            type:"card",
            card:elements.getElement(CardElement)
        })
    

    if(!error){
        try{
const {id}=paymentMethod
console.log(id)
const response=await axios.post("http://localhost:4000/payment/cardpayment",{
    amount:props.totalamount,
    id
})
if(response){
  console.log("sucessfull payment")
    
    const click=props.handleclick();
    if(click){
    setsuccess(true)
    }
}
else{
   
    console.log("error---")
}
        }catch(error){
            console.log(props.totalamount)
           console.log("-error-")

        }
    }
    else{
        alert("enter card details")
    }
}
      return (
    <div className='payment-form-details'>
    {
        !success?
        <form onSubmit={handleSubmit}>
            <fieldset className="FormGroup">
                <div className='FormRow'>
                    <CardElement options={card_options}/>
                </div>
            </fieldset>
            <button className='FormButton' >Pay</button> 
        </form>
        :
        <div>
            <h2>Congrats! Payment done!!!</h2>
            </div>
    }
    </div>
  )
}

export default PaymentForm