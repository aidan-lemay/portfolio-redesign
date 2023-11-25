const Footer = () => {
    return (
        <>
            <hr />
            <div className="footer-container">
                <p>
                    &copy;{new Date().getFullYear()}, Aidan LeMay
                </p>

                <div>
                    <a
                        href="index_old.html"
                        aria-label="Old Index"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-solid fa-code"></i>
                    </a>
                    <div className="divider"></div>
                    <a
                        href="/TackOverflow/index.pxp"
                        aria-label="Old Index"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-solid fa-database"></i>
                    </a>
                </div>

                <div className="social_icons">
                    <a
                        href="https://github.com/aidan-lemay"
                        aria-label="GitHub"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-github"></i>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/aidan-lemay/"
                        aria-label="LinkedIn"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Footer;