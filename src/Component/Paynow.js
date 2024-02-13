const Paynow = () => {
  return (
    <div>
      <div className="maindiv">Billing Address</div>
      Full name:
      <input type="text" placeholder="Jethalal Gada" /><br/>
      Email:
      <input type="email" placeholder="abdjn125@gmail.com" /><br/>
      Address:
      <input type="text" placeholder="302,harshal apartment" /><br/>
      City:
      <input type="text" placeholder="Ahmedabad" /><br/>
      <div className="maindiv">Payment</div>
      <div>Cards Accepted</div><br/>
      Name on Card
      <input type="text" placeholder="Jethalal Gada" /><br/>
      Credit card number
      <input type="number" placeholder="1252-1514-3695" /><br/>
      Exp Month
      <input type="number" placeholder="9" /><br/>
      Exp Year
      <input type="number" placeholder="2026" /><br/>
      CVV
      <input type="number" placeholder="698" /><br/>
      <button>Continue to checkout</button>
    </div>
  );
};

export default Paynow;
