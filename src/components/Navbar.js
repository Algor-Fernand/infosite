import logo from '../logo.svg'
import React from "react";


export default function Navbar() {
  return (
  <nav>
    <img src={logo}alt="" width='100px' />
    <h3 >ReactFacts</h3>
    <h4 >React Course- Project1</h4>
  </nav>
  );
}
