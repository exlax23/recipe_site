import React from "react";

function Header() {
  return (
    <section class="p-menu1">
      <nav id="navbar" class="navigation" role="navigation">
        <input id="toggle1" type="checkbox" />
        <label class="hamburger1" for="toggle1">
          <div class="top"></div>
          <div class="meat"></div>
          <div class="bottom"></div>
        </label>

        <nav class="menu1">
          <a class="link1" href="">Home</a>
          <a class="link1" href="">Catalogue</a>
          <a class="link1" href="">Search</a>
        </nav>
      </nav>
    </section>
  );
}

export default Header;



//Header

//DESKTOP

//Logo
//Title
//Home (highlighted)
//Search Bar
//Catalogue Btn

//MOBILE

//Logo
//Hamburger dropdown
//  -Home (highlighted)
//  -Search btn
//  -Catalogue btn