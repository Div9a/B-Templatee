import React from 'react'
import styled from 'styled-components'

function List() {
  return (
    
    <Box>


    <h6> ALWAYS TASTY BURGER </h6>
    

    <Heading> <h2> CHOOSE & ENJOY </h2> </Heading>

    <Para> <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptatibus nulla in aut rerum. Nulla minima dignissimos eius voluptate deserunt. </p></Para>
      

     <Wrap> 
     <Div>
     <img src="https://media.istockphoto.com/photos/juicy-hamburger-on-white-background-picture-id1206323282?b=1&k=20&m=1206323282&s=612x612&w=0&h=bc5sx10B4xnTKL5c05tDXMWDXaIS-GI1Gm7rQB-zgeQ="/>
     <h3 align='center'>Spicy Maharaja</h3>
     <p align="center">Loaded with Cheese and spice</p>
     <p align="center"><button> Order Now </button></p>
     </Div>
    <Div>
    <img src="https://thumbs.dreamstime.com/b/vegan-burger-white-background-horizontal-no-people-copy-space-vegan-burger-white-background-horizontal-no-people-copy-space-208935395.jpg"/>
     <h3 align='center'>Evergreen Love</h3>
     <p align="center">Simple with the best taste</p>
     <p align="center"><button> Order Now </button></p>
     </Div>
     <Div>
     <img src="https://media.istockphoto.com/photos/burger-isolated-on-white-background-picture-id1154755006?k=20&m=1154755006&s=170667a&w=0&h=sh-IsgC97GIfUvrBA3ogxti-LgbdDvPa0uz-UPrf4yk="/>
     <h3 align='center'>Double Trouble </h3>
     <p align="center">Just have everything in double</p>
     <p align="center"><button> Order Now </button></p>
     </Div>
     
     </Wrap>


    </Box>
  )
}

export default List

const Box = styled.div`
height: 100vh;
width: 70vh;
background: white;
align-items: center;
display: flex;
flex-direction: column;
padding: 0 25px;
margin-left: 500px;

h6{
   padding: 5px;
   height: 16px;
   font-size: 13px;
   background: rgb(218, 6, 6);
}
`

const Heading = styled.div`
h2{
color: brown;
font-size: 25px;
}
`

const Para = styled.div`

p{
font-size: 10px;
padding: 5px;
   height: 10px;
   font-size: 10px; 
}
`

const Wrap = styled.div`
width: 75%;
  height: 70%;
  align-items: center;
  justify-content: center;
  gap: 15px;
  display: flex;
  flex-direction: row;

img{
  width :150px;
    height: 200px;
    margin-top: 40px;
    box-shadow: 0px 0px 20px 12px grey;
    border-radius:50%;
    


}
`

const Div = styled.div`

h3{
  color: brown;
}

button{
  height: 40px;
  width: 80px;
  background: red;
  border-radius: 5px;
  color: white;
  
}
`