import React from 'react'
import styled from 'styled-components'

function Next() {
  return (
    <Container>

    <Box>
    <Wrap>
    <div>
    <h3> UPCOMING EVENTS </h3>
    
    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium exercitationem neque iure? Natus aspernatur rem quod. Voluptates vero sapiente odit.</p> </div>

    <Logo src= "https://media.istockphoto.com/photos/fresh-tasty-burger-picture-id495204032?k=20&m=495204032&s=612x612&w=0&h=x44AnT8kHv-apqnG9t1ILwf2sIr4uq14CUB7MBaiuOI="/> 

    </Wrap>
    </Box>

    </Container>
  )
}

export default Next

const Container = styled.div`
height: 35vh;
width: 70vh;
background: white;
padding:0 25px;
margin-left: 500px;  
                   
`

const Wrap = styled.div`
display: flex;
align-items: center;


h3{
font-size: 20px;
  color: brown;
}

p{
  font-size: 15px;
  padding: 5px;
}`

const Logo = styled.img`
height: 180px;
width: 220px;
margin-right: 10px;
margin-top: 20px;
`

const Box = styled.div`
  width: 100%;
  height: 90%;
  align-items: center;
  justify-content: center;
  display: flex;

  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
`


