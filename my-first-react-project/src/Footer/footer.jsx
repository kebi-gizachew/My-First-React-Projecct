import './footer.css';
function Footer(){
    return(
        <footer>
            <div className="footerMain">
            <div className="footer1">
                <h1>Company</h1>
                <p>About Us</p>
                <p>Careers</p>
                <p>Contact</p>
            </div>
            <div className="footer2">
                <h1>Product</h1>
                <p>Features</p>
                <p>Pricing</p>
                <p>Support</p>
            </div>
            <div className="footer3">
                <h1>Resources</h1>
                <p>Documentation</p>
                <p>Blog</p>
                <p>Community</p>
            </div>
            </div>
            <p>© 2024 Task Management Dashboard. All rights reserved.</p>
        </footer>
    )
}
export default Footer;