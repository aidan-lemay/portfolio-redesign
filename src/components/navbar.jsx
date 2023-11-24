import Link from "next/link";

const Navbar = () => {
    return (
        <div className="nav-container" class="nav-container" id="navbar">
            <div className="logo">
                <Link href="/">
                    Aidan's Portfolio
                </Link>
            </div>
            <div>
                <a href="#about" className="nav-btn">About Me</a>
                <a href="#skills" className="nav-btn">Skills</a>
                <a href="#projects" className="nav-btn">Projects</a>
            </div>
            <a href="https://drive.google.com/file/d/1FaIcui5ZMmm7LYZQtyiwtAFDo3NfhSSY/view?usp=sharing" className="cta-btn">Resume</a>
        </div>
    )
}

export default Navbar;