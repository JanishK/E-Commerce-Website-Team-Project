
import { useState, useEffect } from "react"

function navBar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const close = () => setIsMenuOpen(false);
        document.addEventListener("click", close);
        return () => document.removeEventListener("click", close); 
    }, [])



  return (
    <>
        <div className="cb-nav">
            <div className="cb-nav__container">
                <a href="/" className="cb-links">
                    <img src="https://placehold.co/400x400" alt="" className="cb-brand__logo" />
                    <span className="cb-brand__text">Core Byte</span>
                </a>
                <ul className="cb-links" id="cbNavLinks">
                    <li><a href="/" className="cb-link">Home</a></li>
                    <li><a href="/" className="cb-link">Products</a></li>
                    <li><a href="/" className="cb-link">About</a></li>

                </ul>
                <div className="cb-user">
                    <button className="cb-user__btn" id="cbUserBtn" type="button" aria-expanded={isMenuOpen} aria-controls="cbUserMenu" onClick={(e) => {e.stopPropagation(); setIsMenuOpen((v) => !v)}}>
                        <span className="sr-only">User menu</span>
                        <img src="https://placehold.co/400x400" alt="" className="cb-user__avatar" />
                    </button>
                    
                    <div className={`cb-user__menu ${isMenuOpen ? "" : "hidden"}`} id="cbUserMenu" role="menu">
                        <div className="cb-user__header">
                            <span className="cb-user__name">Janish</span>
                            <span className="cb-user__email">Janish@CoreByte.com</span>

                        </div>

                        <a href="" role="menuitem">Basket</a>
                        <a href="" role="menuitem">Profile</a>
                        <a href="" role="menuitem">Settings</a>
                        <a href="" role="menuitem">Support</a>
                        <a href="" role="menuitem">Logout</a>
                    </div>


                </div>

            </div>
        </div>
    </>
  )
}

export default navBar
