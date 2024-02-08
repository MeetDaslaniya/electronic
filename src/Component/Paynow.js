const Paynow=()=>{
    return(
        <div>
            <div>Billing Address</div>
            Full name:<input type="text" placeholder="Jethalal Gada"/>
            Email:<input type="email" placeholder="abdjn125@gmail.com"/>
            Address:<input type="text" placeholder="302,harshal apartment"/>
            City:<input type="text" placeholder="Ahmedabad"/>
            <div>Payment</div>
            <div>Cards Accepted</div>
            Name on Card<input type="text" placeholder="Jethalal Gada"/>
            Credit card number<input type="number" placeholder="1252-1514-3695"/>
            Exp Month<input type="number" placeholder="9"/>
            Exp Year<input type="number" placeholder="2026"/>
            CVV<input type="number" placeholder="698"/>
            <button>Continue to checkout</button>
        </div>
    )
}

export default Paynow;