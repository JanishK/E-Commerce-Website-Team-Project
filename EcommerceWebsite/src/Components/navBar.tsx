import { Link } from "react-router-dom";


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
            <Link to="/" className="cb-links">
                <img
                src="https://placehold.co/400x400"
                alt=""
                className="cb-brand__logo"
                />
                <span className="cb-brand__text">Core Byte</span>
            </Link>

            <ul className="cb-links" id="cbNavLinks">
                <li><Link to="/home" className="cb-link">Home</Link></li>
                <li><Link to="/products" className="cb-link">Products</Link></li>
                <li><Link to="/about" className="cb-link">About</Link></li>
            </ul>

            <div className="cb-user">
                <button
                className="cb-user__btn"
                id="cbUserBtn"
                type="button"
                aria-expanded={isMenuOpen}
                aria-controls="cbUserMenu"
                onClick={(e) => {
                    e.stopPropagation();
                    setIsMenuOpen((v) => !v);
                }}
                >
                <span className="sr-only">User menu</span>
                <img
                    src="https://placehold.co/400x400"
                    alt=""
                    className="cb-user__avatar"
                />
                </button>

                <div className={`cb-user__menu ${isMenuOpen ? "" : "hidden"}`} id="cbUserMenu" role="menu" onClick={(e) => e.stopPropagation()}>
                <div className="cb-user__header">
                    <span className="cb-user__name">Janish</span>
                    <span className="cb-user__email">Janish@CoreByte.com</span>
                </div>

                <Link to="/basket" role="menuitem">Basket</Link>
                <Link to="/profile" role="menuitem">Profile</Link>
                <Link to="/settings" role="menuitem">Settings</Link>
                <Link to="/support" role="menuitem">Support</Link>
                <Link to="/logout" role="menuitem">Logout</Link>
                </div>
            </div>

            </div>
        </div>
    </>

  )
}

export default navBar
