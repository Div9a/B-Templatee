import React from 'react'
import styled from 'styled-components'

function Burger() {
  return (
    <Container>
    <h1> BURGER WEEK </h1>
    
      <BGP>

      <Logo src="https://rancherscafe.com/wp-content/uploads/2022/05/410240499-new-deal-carousel_4-min-scaled.jpg"/>

      </BGP>
    </Container>
  )
}

export default Burger

const Container = styled.div`
height: 30vh;
width: 70vh;
background:rgb(223, 206, 93);
display: flex;
padding: 0 25px;
margin-left: 500px;
padding-top: 60px;

  

  h1 {

color: brown;
}

`

const BGP = styled.div`



`

const Logo = styled.img`
width : 240px;
height: 200px;
margin-left: 100px;
margin-bottom: 100px;

`

