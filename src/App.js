import "./App.css";
import React,{startTransition, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Badge from "react-bootstrap/Badge";
import Card from 'react-bootstrap/Card';
import { BsCartFill} from "react-icons/bs";
import { AiFillStar} from "react-icons/ai";

export default function App() {
  const data = [
    {
      productImage:"https://wp.uthscsa.edu/demo/wp-content/uploads/sites/13/2017/06/450x300.png",
      productName: "Fancy Product",
      price:"$40.00-$80.00",
      rating1:"rate",
      addbutton:"View Options",
      
    },
    {
      productImage:"https://wp.uthscsa.edu/demo/wp-content/uploads/sites/13/2017/06/450x300.png",
      productName: "Special Item",
      price:<s>$20.00</s>,
      price1:"$18.00",
      rating:<AiFillStar/>,
      addbutton:"Add to Cart",
      sale:"sale"
    },
    {
      productImage:"https://wp.uthscsa.edu/demo/wp-content/uploads/sites/13/2017/06/450x300.png",
      productName: "Sale Item",
      price:<s>$50.00</s>,
      price1: "$25.00",
      rating1: "rate",
      addbutton:"Add to Cart",
      sale:"sale"
    },
    {
      productImage:"https://wp.uthscsa.edu/demo/wp-content/uploads/sites/13/2017/06/450x300.png",
      productName: "Popular Item",
      price: "$40.00",
      rating: <AiFillStar/>,
      addbutton:"Add to Cart",
    },
    {
      productImage:"https://wp.uthscsa.edu/demo/wp-content/uploads/sites/13/2017/06/450x300.png",
      productName: "Sale Item",
      price:<s>$50.00</s>,
      price1:"$25.00",
       rating1: "rate",
      addbutton:"Add to Cart",
      sale:"sale"
    },
    {
      productImage:"https://wp.uthscsa.edu/demo/wp-content/uploads/sites/13/2017/06/450x300.png",
      productName: "Fancy Product",
      price: "$120.00 - $280.00",
      rating1: "rate",
      addbutton:"View Options",
    },
    {
      productImage:"https://wp.uthscsa.edu/demo/wp-content/uploads/sites/13/2017/06/450x300.png",
      productName: "Special Item",
      price:<s>$20.00</s>,
      price1:"$18.00",
      rating:<AiFillStar/>,
      addbutton:"Add to Cart",
      sale:"sale"
    },
    {
      productImage:"https://wp.uthscsa.edu/demo/wp-content/uploads/sites/13/2017/06/450x300.png",
      productName: "Popular Item",
      price:"$40.00",
      rating: <AiFillStar/>,
      addbutton:"Add to Cart",
    },
  ]

  const [count,setCount]=useState(0)
  return (
    <div className="App">
      <header>
      <span className="start">Start Bootstrap</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span>Home</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span>About</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span>
      <select>
    <option >Shop</option>
    <option >All Products</option><hr></hr>
  <option >Popular Items</option>
  <option >New Arrivals</option>
  </select>
      </span>
      <span className="cart-value">
  <Badge bg="sucess" className="badge">
    <BsCartFill/>&nbsp;&nbsp;Cart {count}
</Badge>
</span>
      </header>
      <div className="box">
<h1>Shop in Style</h1>
<p>With this shop hompeage template</p>
</div>
    
    
  <div className="card-container">
      {data.map((product,index)=>(
   <Product
   key={index}
   prod={product}
   count={count}
   setCount={setCount}
   sale={product.sale}
   />
      ))}
   </div>
    </div>
  );
}

function Product({prod,count,setCount,sale}){
  const [show, setShow]=useState(false)
  function addtocart(){
    setCount(count+1);
    setShow(!show)
  }
  function removefromcart(){
    setCount(count-1);
    setShow(!show)
  }
  return(
    <Card style={{ width: '18rem' }}>
      <div className="image">
      <Card.Img variant="top" className="img"src={prod.productImage} />
    <p className="p">{prod.sale}</p>
      </div>
    
    <Card.Body>

      {/* {sale==true?<p className="sale">sale</p>:''} */}
      <Card.Text className="text">{prod.productName}</Card.Text>
     <Card.Text className="rating">{prod.rating}{prod.rating}{prod.rating}{prod.rating}{prod.rating}</Card.Text>

      <Card.Text className="price">{prod.price}  {prod.price1}</Card.Text>
      <Card.Text className="rating1">{prod.rating1}</Card.Text>

     
     

{!show?
      <Button variant="outline-secondary"
      onClick={addtocart}>{prod.addbutton}</Button>:""}
      {show?
      <Button variant="outline-danger"
      onClick={removefromcart}>Remove from Cart</Button>:""}
    </Card.Body>
  </Card>
  )
}