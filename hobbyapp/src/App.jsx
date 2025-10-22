import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Link, Routes, Route, useParams, useNavigate} from 'react-router-dom';
   
const hobbies = [
{
    id: 1,
    name: 'Hanging out with family',
    description: 'A family is sitting on a mountiontop overlooking the horizon.',
    imgSrc:"https://images.unsplash.com/photo-1559054109-82d938dac629?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fGZhbWlseXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=400"
  },
  {
    id: 2,
    name: 'Watching Movies',
    description: 'I enjoy watching a variety of movies. Some of the franchises I enjoy watching are Fast and Furious and Mission Impossible.',
    imgSrc:"https://images.unsplash.com/photo-1512070679279-8988d32161be?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2F0Y2hpbmclMjBtb3ZpZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=400"
  },
  {
    id: 3,
    name: 'Playing Video Games',
    description: 'I like to play video games such as Valorant, Call of Duty, and other video games during my leisure time.',
    imgSrc:"https://images.unsplash.com/photo-1593305841991-05c297ba4575?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1057"
  },
  {
    id: 4,
    name: 'Hanging out with Friends',
    description: 'I like to hang out with my friends on the weekends, we usually go to the park or catch a movie together.',
    imgSrc:"https://images.unsplash.com/photo-1569617084133-26942bb441f2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
  },
  {
    id: 5,
    name: 'Traveling',
    description: 'I love to travel and explore new places. One of my favroite destinations includes the all inclusive resorts in Dominican Republic.',
    imgSrc:"https://images.unsplash.com/photo-1619467416348-6a782839e95f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
  }
];

function App() {

  const img_helper = ({src, alt, width}) => (
    <img src={src} alt={alt} width={width} className='rounded'/>
  )

  const Home = () => {
    return(
      <div>
        <h1 className="text-center fw-bold shadow">Main Page - Welcome Home!</h1>
        <h2 className='d-flex justify-content-center'>
          <img src="https://plus.unsplash.com/premium_photo-1680466057202-4aa3c6329758?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2l0eSUyMHNreWxpbmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500" width="300"></img>
        </h2>
      </div>
    )
  }

  const render_Hobby = () => {
    
    const hobbies_list = hobbies.slice(0,4);

    return hobbies_list.map(hobby => (
        <div key={hobby.id} className="border border-1 border-dark rounded-4 m-2 p-2 shadow-lg d-inline-block">
          <h3>{hobby.name}</h3>
          {img_helper({src: hobby.imgSrc, alt: hobby.name, width:300, height:200})}
          <div className='p-1'><Link to={`/Hobbies/${hobby.id}`} className="btn btn-primary">See Details</Link></div>
        </div>
      ))
  }

  const Hobbies = () => {

    return(
      <div>
        <h1 className="text-center">Take a look at the list of Hobbies!</h1>
        <br/>
        <p className='text-center'>Below are some of my hobbies. Click on each hobby to see more details about it!</p>
        <div className='m-4 p-2'>{render_Hobby()}</div>
        </div>
    )
  }

  const HobbyDetails = () => {
    const {id} = useParams();
    const hobby = hobbies.find(hobby => hobby.id === parseInt(id));
    const navigate = useNavigate();
    
    return(
      <div>
        <h2 className='text-center fw-bold'>{hobby.name}</h2>
        <div className="m-2">{img_helper({src: hobby.imgSrc, alt: hobby.name, width: 800})}
        <p className="m-2">{hobby.description}</p></div>
        <button className="btn btn-primary m-2" onClick={() => navigate(-1)}>Back to Hobbies</button>
      </div>
    )
  }

  const About = () => {
    return(
    <div>
      <h1 className="text-center">About Me!</h1>
      <br/>
      <p>My name is Alex and I am a senior undergrad student studying Computer Science with a minor in Mathematics</p> 
      <p>Class: CS491 - Software Engineering (Capstone Class).</p>
      <p>Below is a picture of my university, which is located in the financial disctrict of downtown Manhattan in New York City:</p>
      <div className="d-flex justify-content-center">
      <img src="https://imgs.search.brave.com/M51GBdd0bDMxFpDGCuxrpGRYxfIS7w78yBRSENiCS4A/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zMy1t/ZWRpYTAuZmwueWVs/cGNkbi5jb20vYnBo/b3RvL3JwaDhUZS1J/MHlvclNEalk1Uk5D/U0EvbC5qcGc" ></img>
      </div>
    </div>
  )}

  return (
    <>
    <nav className="navbar navbar-expand-sm bg-secondary navbar-light shadow-lg">
      <div className="container-fluid">

        <span className='text-black fw-bold border rounded-5 p-1 border-dark border-2 shadow-lg'>Hobby Website</span>
          <ul className="navbar-nav">
            <li className="nav-item border border-black rounded-5 m-1 shadow-lg p-1">
              <Link to="/" className="text-black ">Home</Link>
            </li>
            <li className="nav-item border border-black rounded-5 m-1 shadow-lg p-1">
              <Link to="/Hobbies" className="text-black ">Hobbies</Link>
            </li>
            <li className="nav-item border border-black rounded-5 m-1 shadow-lg p-1">
              <Link to="/About" className="text-black ">About</Link>
            </li>
          </ul>

      </div>
    </nav>

  <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/Hobbies' element={<Hobbies/>}></Route>
    <Route path='/Hobbies/:id' element={<HobbyDetails/>}></Route>
    <Route path='/About' element={<About/>}></Route>
  </Routes>
      
  </>
  )
}

export default App