import React from 'react'
import styled from 'styled-components'
import './column.css'

function Columns() {
  return (
    <Container>
    <div className='para'>
    <p> REGISTRATION </p></div>
    <h1> BOOK YOUR TABLE </h1>

<Form> 
<div className='Row'>
<input type='text' placeholder='Full Name'/>
<input type='email' placeholder='Type Your E-Mail'/></div>

<div className='Dead'>
<textarea placeholder='Write Here.....'></textarea>
<input type='submit' value='BOOK'/>
</div>
</Form>

    </Container>
  )
}

export default Columns

const Container = styled.div`
width: 70vh;
background: white;
display: flex;
flex-direction: column;
padding: 0 25px;
margin-left: 500px;


div{
    color: brown;
    font-size: 13px;
    margin-top: 40px;
}



h1{
      margin-left: 110px;
      color: brown;
  
  }
`

const Form = styled.div`
align-items: center;
display:flex;
gap: 20px;
    
   

    

  





`