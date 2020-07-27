import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import './App.css';
import Head from './Head/header.js';


function App() {
  


  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);
  



  
  return (
    <div className="App">
      <Head/> 
     <Dropdown id="dropwrap"  isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle className="wer" style={{backgroundColor:"#143d59"}} caret>
        Menu
        </DropdownToggle>
      <DropdownMenu  >
        <DropdownItem> <a href="http://www.edbudz.in/about-us/">About Us</a></DropdownItem>
        <DropdownItem> <a href="http://www.edbudz.in/">Home</a></DropdownItem>
        <DropdownItem> <a href="http://www.edbudz.in/courses/">Courses</a></DropdownItem>
        <DropdownItem><a href="http://www.edbudz.in/contact-us/">Contact Us</a></DropdownItem>
      </DropdownMenu>
    </Dropdown> 
<div>rsvsvsrrvs</div>
<div>rsvsvsrrvs</div>

<div>rsvsvsrrvs</div>


<div>rsvsvsrrvs</div>

<div>rsvsvsrrvs</div>

<div>rsvsvsrrvs</div>

<div>rsvsvsrrvs</div>

<div>rsvsvsrrvs</div>

<div>rsvsvsrrvs</div>

<div>rsvsvsrrvs</div>

<div>rsvsvsrrvs</div>

<div>rsvsvsrrvs</div>

<div>rsvsvsrrvs</div>

<div>rsvsvsrrvs</div>

<div>rsvsvsrrvs</div>

<div>rsvsvsrrvs</div>

<div>rsvsvsrrvs</div>
<div>rsvsvsrrvs</div>

<div>rsvsvsrrvs</div>

<div>rsvsvsrrvs</div>

<div>rsvsvsrrvs</div>

<div>rsvsvsrrvs</div>

<div>rsvsvsrrvs</div>

<div>rsvsvsrrvs</div>

<div>rsvsvsrrvs</div>

<div>rsvsvsrrvs</div>
<div>rsvsvsrrvs</div>

<div>rsvsvsrrvs</div>

<div>rsvsvsrrvs</div>

<div>rsvsvsrrvs</div>

<div>rsvsvsrrvs</div>

<div>rsvsvsrrvs</div>

<div>rsvsvsrrvs</div>

<div>rsvsvsrrvs</div>

<div>rsvsvsrrvs</div>
<div>rsvsvsrrvs</div>

<div>rsvsvsrrvs</div>

<div>rsvsvsrrvs</div>

<div>rsvsvsrrvs</div>

<div>rsvsvsrrvs</div>

<div>rsvsvsrrvs</div>

<div>rsvsvsrrvs</div>

<div>rsvsvsrrvs</div>

<div>rsvsvsrrvs</div>
<div>rsvsvsrrvs</div>

<div>rsvsvsrrvs</div>

<div>rsvsvsrrvs</div>

<div>rsvsvsrrvs</div>

<div>rsvsvsrrvs</div>

<div>rsvsvsrrvs</div>

<div>rsvsvsrrvs</div>

<div>rsvsvsrrvs</div>

<div>rsvsvsrrvs</div>
<div>rsvsvsrrvs</div>

<div>rsvsvsrrvs</div>

<div>rsvsvsrrvs</div>

<div>rsvsvsrrvs</div>

<div>rsvsvsrrvs</div>

<div>rsvsvsrrvs</div>

<div>rsvsvsrrvs</div>

<div>rsvsvsrrvs</div>

<div>rsvsvsrrvs</div>
<div>rsvsvsrrvs</div>

<div>rsvsvsrrvs</div>

<div>rsvsvsrrvs</div>

<div>rsvsvsrrvs</div>

<div>rsvsvsrrvs</div>

<div>rsvsvsrrvs</div>

<div>rsvsvsrrvs</div>

<div>rsvsvsrrvs</div>

<div>rsvsvsrrvs</div>
<div>rsvsvsrrvs</div>

<div>rsvsvsrrvs</div>

<div>rsvsvsrrvs</div>

<div>rsvsvsrrvs</div>

<div>rsvsvsrrvs</div>

<div>rsvsvsrrvs</div>

<div>rsvsvsrrvs</div>

<div>rsvsvsrrvs</div>

<div>rsvsvsrrvs</div>


    </div>
  );
}

export default App;
