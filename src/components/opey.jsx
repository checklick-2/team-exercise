import opeyImage from '../assets/opey.jpg';
import './opey.css';

const Opey = () => {
    return (
        <div id='opey'>
            <img src={opeyImage} id="opeyImage" alt='Opey Adeyemi'/>
            <div className='personal-introduction'>
                <h1>Opey Adeyemi</h1>
                <p>
                    Howdy - I'm also a 4th-year Honours Computer Science student at UBC Okanagan.
                    I mainly work with web development (Django, Angular, Node.js) and I'm currently expanding my
                    knowledge of Next.js and React.js. I'm also a visual designer specializing in motion and graphic
                    design, copywriting, & UX design. In my free time, I lead the Design Club at UBCO, educating and
                    connecting young designers so they can thrive! I have a knack for organization and I love injecting
                    more kindness and care into any space I find myself in!
                </p>
            </div>
        </div>
    );
};

export default Opey;
