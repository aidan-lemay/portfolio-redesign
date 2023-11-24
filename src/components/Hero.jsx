import Image from "next/image";

const Hero = () => {
    return (
        <div className="hero-container">
            <Image src='/images/profile.jpg' className="profile-img" width={300} height={300} alt="Joe's personal headshot" />
            <div className="hero-text">
                <h1>Hey, I'm Aidan 👋</h1>
                <p>
                    I'm a software developer based in Rochester, New York. I specialize in full-stack web development using NodeJs APIs, Angular, React, and HTML/CSS. I have classroom and professional experience with PHP, Javascript, Java, Python, and more! I also have experience with various database technologies; including SQL based databases like MySQL, MariaDB, and PostgreSQL - and NoSQL databases like MongoDB, Neo4j, and Cytoscape.
                </p>
                <div className="social-icons">
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
        </div>
    )
}

export default Hero;