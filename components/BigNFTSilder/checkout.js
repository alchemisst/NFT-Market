import { loadStripe } from "@stripe/stripe-js"

export async function checkout({lineItems}){
    let stripePromise = null

    const getStripe = ()=>{
        if(!stripePromise){
            stripePromise = loadStripe(process.env.NEXT_PUBLIC_API_KEY)
        }
        return stripePromise
    }
    const stripe = await getStripe()
    await stripe.redirectToCheckout({
        mode:'payment',
        lineItems,
        successUrl:`${window.location.origin}?session_id={Checkout_Session_Id}`,
        cancelUrl:window.location.origin
    
    })
}