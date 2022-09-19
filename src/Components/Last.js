import React from 'react'
import styled from 'styled-components'
import './column.css'

function Last() {
  return (
    <Container>


 <div className='first'>
      <Logo src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq27_1te97ZwQhi8CxZJuBAwoOJ0D6_mjGJg&usqp=CAU"/>


      <h6>BURGER CLUB</h6></div>

      <div className='likho'>
      <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi architecto, magni eveniet aut debitis maxime quod error voluptas iusto exercitationem ipsam quis sunt quo aspernatur optio molestias laboriosam culpa odio!</p>
</div>

    </Container>
  )
}

export default Last

const Container = styled.div`
width: 70vh;
background: white;
display: flex;
flex-direction:column;
padding: 0 25px;
margin-left: 500px;
background-image: url("https://pancan.org/wp-content/uploads/2019/09/hamburger-733x450.jpg");



h6{
 
  color: brown;
  margin-left: 5px;
 
  letter-spacing: 1.2px;}
`

const Logo = styled.img`
width : 30px;
height: 30px;
margin-top: 16px;

`

const Photo = styled.img`
width: 70vh;
`
