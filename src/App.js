import React from "react";
import "./App.css";
import {BsX} from "react-icons/bs";
import {FaCheck} from "react-icons/fa";
import {ImCross} from "react-icons/im";


import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function AutoLayoutExample() {
  return (
    <Container className="big-box">
     
      <Row>
        <Col className="box1">
          <header className="header">FREE</header>
          <h1>$0</h1><span>/month</span><hr></hr>
          <div className="move"><FaCheck></FaCheck> Single User</div><br></br>
          <div className="move"><FaCheck></FaCheck> 5GB Storage</div><br></br>
           <div className="move"><FaCheck></FaCheck> Unlimited Public  Projects</div><br></br>
           <div className="move"><FaCheck></FaCheck> Community Access</div><br></br>
          <div className="move-cross"><ImCross></ImCross> Unlimited Private Projects </div><br></br>
          <div className="move-cross"><ImCross></ImCross> Dedicated Phone Support</div> <br></br>
          <div className="move-cross"><ImCross></ImCross> Free Subdomain</div> <br></br>
          <div className="move-cross"><ImCross></ImCross> Monthly Status Reports</div><br></br>
          <Button variant="primary">BUTTON</Button>
        </Col>
        <Col className="box2">
        <header className="header">PLUS</header>
          <h1>$9</h1><span>/month</span><hr></hr>
          <div className="move"><FaCheck></FaCheck> <b>5 Users</b></div><br></br>
          <div className="move"><FaCheck></FaCheck> 5GB Storage</div><br></br>
           <div className="move"><FaCheck></FaCheck> Unlimited Public  Projects</div><br></br>
           <div className="move"><FaCheck></FaCheck> Community Access</div><br></br>
          <div className="move"><FaCheck></FaCheck> Unlimited Private Projects </div><br></br>
          <div className="move"><FaCheck></FaCheck> Dedicated Phone Support</div> <br></br>
          <div className="move"><FaCheck></FaCheck> Free Subdomain</div> <br></br>
          <div className="move-cross"><ImCross></ImCross> Monthly Status Reports</div><br></br>
          <Button variant="primary">BUTTON</Button>
        </Col>
        <Col className="box3">
        <header className="header">PRO</header>
          <h1>$49</h1><span>/month</span><hr></hr>
          <div className="move"><FaCheck></FaCheck> <b>Unlimited Users</b></div><br></br>
          <div className="move"><FaCheck></FaCheck> 5GB Storage</div><br></br>
           <div className="move"><FaCheck></FaCheck> Unlimited Public  Projects</div><br></br>
           <div className="move"><FaCheck></FaCheck> Community Access</div><br></br>
          <div className="move"><FaCheck></FaCheck> Unlimited Private Projects </div><br></br>
          <div className="move"><FaCheck></FaCheck> Dedicated Phone Support</div> <br></br>
          <div className="move"><FaCheck></FaCheck> <b>Unlimited</b> Free Subdomain</div> <br></br>
          <div className="move"><FaCheck></FaCheck> Monthly Status Reports</div><br></br>
          <Button variant="primary">BUTTON</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default AutoLayoutExample;
  
  