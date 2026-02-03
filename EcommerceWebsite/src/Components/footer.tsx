import { Link } from "react-router-dom";

function footer() {
  return (
      <>
        <footer>
            <div className="footer-box">
                <div className="footer-header">
                    <h3>Core Byte</h3>
                    <p>Your go-to store for digital games and instant downloads</p>
                </div>
                <div className="footer-coloums">
                    <div className="footer-section">
                        <h3>Quick Links</h3>
                        <ul>
                            <Link to="/basket" role="menuitem">Home</Link>
                            <Link to="/basket" role="menuitem">Products</Link>
                            <Link to="/basket" role="menuitem">About</Link>
                            <Link to="/basket" role="menuitem">Contact</Link>


                        </ul>
                    </div>
                    <div className="footer-section">
                        <h3>Support</h3>
                        <ul>
                            <Link to="/" role="menuitem">FAQ</Link>
                            <Link to="/" role="menuitem">Customer Services</Link>
                            <Link to="/" role="menuitem">Refund Policy</Link>
                        </ul>
                    </div>
                    <div className="footer-section">

                        <h3>Follow Us</h3>
                        <p>Instagram / TikTok / Youtube</p>
                    </div>
                </div>
                <p>© 2024 Core Byte. All rights reserved.</p>
            </div>
        </footer>
    </>  
  );

}

export default footer;
