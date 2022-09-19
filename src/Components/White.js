import React from 'react'
import styled from 'styled-components'

function White() {
  return (
    <Container>
      
      <First>
       
      <img src="https://thumbs.dreamstime.com/b/fresh-juicy-bacon-burger-fries-grey-table-163110835.jpg"/> 

      </First>

     <Second>

     <img src="https://assets.gqindia.com/photos/6041d62040ec5beed7557247/master/w_1600%2Cc_limit/BOSS%2520Burger.JPG" />

      <img src= "https://i.insider.com/5bbd187101145529745a9895?width=700"/>

     </Second>
     

    </Container>
  )
}

export default White

const Container = styled.div`
width: 70vh;
background: white;
display: flex;
padding: 0 25px;
margin-left: 500px;

`

const First = styled.div`
width: 70vh;
align-items: center;
gap: 5px;
display: flex;
flex-direction: column;

  img{
    width :250px;
    height: 250px;
    margin-top: 40px;
  }
  `

  const Second = styled.div`

  height: 90%;
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  gap: 10px;

  img{
    width : 225px;
    height: 120px;

  }

  `