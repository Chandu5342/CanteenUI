import './Navbar.css'
function Navbar()
{
  return(
    <>
       <div className='navmain'>
            <nav class="navbar  px-3 justify-content-between ">
                        <div class="d-flex align-items-center gap-2">
                        <img src="https://cdn-icons-png.flaticon.com/512/3595/3595455.png" alt="logo" width="40" />
                        <span class="fw-bold fs-5">Byte and Bite</span>
                        </div>
                        <button class="btn login-btn px-3">Login</button>
                </nav>
       </div>
    </>
  )
}
export default Navbar