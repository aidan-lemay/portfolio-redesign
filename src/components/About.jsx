import Image from "next/image";

const About = () => {
    return (
        <div className="about-container" id="about">
            <h2>About Me</h2>
            <div className="flex-about">
                <div className="about-text">
                    <p>
                        As a developer, I have always been passionate about creating functional, well thought solutions to problems that most people don't even notice. I have a strong foundation in software development, with a focus on web technologies such as HTML, CSS, and JavaScript. I enjoy working on both the front-end and back-end of applications, and I am always looking for ways to optimize performance, improve user experience, and ensure the highest level of code quality.
                    </p>
                    <p>
                        Throughout my career, I have worked on a wide range of projects, from simple static websites to complex enterprise-level applications. I am experienced in working with a variety of development tools and frameworks, including React, Angular, Vue.js, and Node.js. I am always eager to learn and explore new technologies, and I am constantly seeking out opportunities to improve my skills and knowledge.
                    </p>
                    <p>
                        I am a graduate of the Rochester Institute of Technology, class of 2023, with a Bachelors of Science in Web and Mobile Computing with concentrations in Database Technologies and Secure Web Application Development, as well as a minor in American Sign Language and Deaf Cultural Studies. In my time at RIT I served on the executive board of K2GXT - RIT's Amateur Radio Club. <a href="https://www.qrz.com/db/K5DOC/">You can read more about my experience here!</a> In my later years I joined the RIT Ambulance and became a NYS/NREMT certified EMT.
                    </p>
                    <p>
                        In my free time, I like to design solutions to everyday problems, as well as create things to save myself money. I learned 3D design / CAD on my own, using Fusion360 and SolidWorks to create designs to 3D print, laser cut, and CNC route.
                    </p>
                </div>
                <div className="about-img">
                    <Image src='/images/about.jpeg' className="profile-img" width={300} height={500} alt="Joe and animal relaxing and having fun" />
                </div>
            </div>
        </div>

    )
}

export default About;