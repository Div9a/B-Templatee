import React from 'react'
import styled from 'styled-components'

function Navbar() {
  return (
    <Nav>
     
     <Logo src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq27_1te97ZwQhi8CxZJuBAwoOJ0D6_mjGJg&usqp=CAU"/>

<h6>BURGER CLUB</h6>

<NavMenu>


</NavMenu>

<Anchors>



<p><span>HOME</span></p>
<p><span>MEAL </span></p>
<p><span>OFFERS</span></p> 

<p><span>CALL-547574565 </span></p>


</Anchors>


    </Nav>
  )
}

export default Navbar


const Nav = styled.div`
width: 70vh;
background:rgb(223, 206, 93);
display: flex;
  padding:0 25px;
  margin-left: 500px;
  

  h6{
  display:flex;
  color: brown;
  margin-left: 5px;
  margin-top: 15px;
  letter-spacing: 1.2px;}
  
`

const Logo = styled.img`
width : 30px;
height: 30px;
margin-top: 17px;

`

const NavMenu = styled.div`
margin-left: 150px;



`

const Anchors = styled.div`

display: flex;


p{
  font-size: 10px;
  margin-right:5px;
  margin-top:5px;
}

a{

  margin-top: 20px;
  margin-right:0px;  
  }
  
  
  span {
    font-size: 10px;
    letter-spacing: 1px;
    margin-left: 15px;
  
  }


`





