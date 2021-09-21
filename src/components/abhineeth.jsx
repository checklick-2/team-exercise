import profileImg from "../assets/abhineeth.jpg";
import "./abhineeth.css";

export default function Abhineeth() {
    return (
        <div id="abhineeth">
            <img alt="abhineeth" src={profileImg}/>
            <div className="text-container">
                <h1>Abhineeth Adiraju</h1>
                <h2>Client Liaison</h2>
                <p>
                    Hey! I'm a 4th Year Computer Science honors Student at UBC Okanagan. I am currently working on web
                    development projects for work and school (using Angular, Django, and Node.js), but I have experience
                    with a broad category of computer
                    science fields. In my free time, I like to do some UI/UX design and pixel art in hopes of making
                    that a marketable skill. In general, I'm interested in adding artistic flair and creativity into the
                    Computer Science field!
                </p>
            </div>
        </div>
    );
}
