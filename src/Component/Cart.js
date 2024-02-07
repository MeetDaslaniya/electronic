const Cart=()=>{
    let cartitem=localStorage.getItem("cartitem")
    cartitem=JSON.parse(cartitem)
    return(
        <div className="header">
        <h1>Cart</h1>
        {
            cartitem.map((item)=>{
                return <div>{item}</div>
            })
        }
        </div>
    )
}

export default Cart;