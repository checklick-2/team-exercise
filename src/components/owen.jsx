import profileSrc from "../assets/owen.jpg";
import "./owen.css";

export default function Owen() {
  return (
    <div id="owen">
      <img alt="owen-profile" src={profileSrc} />
      <div className="text-container">
        <h1>Owen Murovec</h1>
        <p>
          I'm a Front-end developer with a major focus in React. I also have a
          lot of experience in the blockchain space and have worked on multiple
          projects in the space. I am currently working full-time and working
          towards finishing by B.Sc. degree at UBC Okanagan.
        </p>
      </div>
    </div>
  );
}
