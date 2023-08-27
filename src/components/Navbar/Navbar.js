import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
   <>
   <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <img src="/images/nft1.jpg" className='logo' alt=''/>
    <button class="navbar-toggler white-color" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-auto">
        <li class="nav-item">
          <Link class="nav-link active white-color" aria-current="page" to ="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active white-color" to ="/Projects">Project</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link active white-color" to = "/about">About US</Link>
      </li>
      <li class="nav-item">
      <Link class="nav-link active white-color" to ="/terms-and-condition">Terms And Conditon</Link>
    </li>
    <li class="nav-item">
    <Link class="nav-link active white-color" to = "/contact">Contact</Link>
  </li>
      </ul>
      <form class="d-flex" role="search">
        <button class="btn btn-navbar" type="submit">Contact Us</button>
      </form>
    </div>
  </div>
</nav>
   </>
  )
}

export default Navbar
