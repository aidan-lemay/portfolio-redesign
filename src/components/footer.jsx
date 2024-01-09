const Footer = () => {
    return (
        <>
            <hr />
            <div className="footer-container">
                <p>
                    &copy;{new Date().getFullYear()}, Aidan LeMay
                </p>

                <div className="social_icons">
                    {/* Uncomment for deployment on aidanlemay.com */}
                    <a
                        href="index_old.html"
                        aria-label="Old Index"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-solid fa-code"></i>
                    </a>
                    <a
                        href="/TackOverflow/index.php"
                        aria-label="Tack Overflow"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-solid fa-database"></i>
                    </a>

                    {/* Uncomment for deployment on k5doc.tech */}
                    {/* <a
                        href="https://bookstack.k5doc.tech/"
                        aria-label="BookStack"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-solid fa-book-open"></i>
                    </a>
                    <a
                        href="https://pihole.k5doc.tech/admin/"
                        aria-label="PiHole Admin Gateway"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-raspberry-pi"></i>
                    </a> */}
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