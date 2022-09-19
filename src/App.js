import React from 'react';
import Navbar from './Components/Navbar';
import Burger from './Components/Burger';
import White from './Components/White';
import List from './Components/List';
import Next from './Components/Next';
// import Columns from './Components/Columns';
import Last from './Components/Last';

function App() {
  return (
    <div>
    <Navbar/>
    <Burger/>
    <White/>
    <List/>
    <Next/>
    {/* <Columns/> */}
    <Last/>
    </div>
  )
}

export default App