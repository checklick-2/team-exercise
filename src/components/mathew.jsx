import mathewImage from '../assets/mathew.jpg';
import './mathew.css';

const Mathew = () => {
  return (
    <div className='mathew-container'>
      <img src={mathewImage} alt='Mathew de Vin'/>
      <div className='text-container'>
        <h1>Mathew de Vin</h1>
        <p>
          An in the works creative full stack developer, designer, and
          student. Working with tools like React/Next.js, Angular, django,
          and other web frameworks. Currently in my fourth year completing
          a Bachelor of Science in Computer Science.
        </p>
      </div>
    </div>
  );
};

export default Mathew;