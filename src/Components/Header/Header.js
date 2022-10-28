import { useState } from "react"
import "./header.css"
export const Header = () => {
    const [hamburgerOpen, setHamburgerOpen] = useState(false)
    return(
        <>
            <section>
                <div className="hero_area">
                    <header className="header_section">
                        <div className="container-fluid">
                            <nav className="navbar d-flex custom_nav-container align-center justify-content-between pt-1 pb-1">
                                <a href="" className="nav-brand d-flex">
                                    <img src="images/logo.png" />
                                    <span>Zezmon</span>
                                </a>
                                <div className="navbar-collapse d-flex align-center">
                                    <div className="container mr-4">
                                        <div className="flex-column">
                                            <ul className="d-flex">
                                                <div className="d-none d-flex mr-4">
                                                    <li className="nav-item">
                                                        <a href="" className="p-1 nav-link">Customer Number : 01234567890</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="" className="nav-link">Demo@demo.com</a>
                                                    </li>
                                                </div>

                                                <div className="d-none d-flex">
                                                    <li className="nav-item">
                                                        <a href="" className="nav-link">Login / Register</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <button type="submit" className="btn pl-1 pr-1"><i class="fa-solid fa-magnifying-glass"></i></button>
                                                    </li>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="custom_menu-btn ml-1">
                                        <button onClick={() =>{
                                            setHamburgerOpen(!hamburgerOpen)
                                        }} className="mt-1"></button>
                                    </div>
                                    <div className={hamburgerOpen ? "myNav overlay" : "myNav" } >
                                        <a href="" className="closebtn">&times;</a>
                                        <div className="d-flex flex-column">
                                            <a href="">Home</a>
                                            <a href="">Products</a>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </header>
                </div>
            </section>        
        </>
    )
}
// export default Header
// or we can export here 