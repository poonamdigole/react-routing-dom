import './Home.css';
import HomeCard from './HomeCard';
import Navbar from '../../components/Navbar/Navbar';
import img1 from './ganeshji01.png';
import img2 from './ganeshji02.png';
import img3 from './ganeshji03.png';



function Home() {
  return (
    <>
      <Navbar/>
    
<div className='home-container'>
      <HomeCard title="EcoFriendly Ganeshji" description="Pedda Amberpet, which is around 14 kilometres from the bustling Dilshuknagar in Hyderabad is home to idol makers from Kolkata.clay Ganeshas ranging from 8 inches to 6 feet in height are at different stages of completion. " img={img1} />

      <HomeCard title="EcoFriendly Ganeshji" description="Pedda Amberpet, which is around 14 kilometres from the bustling Dilshuknagar in Hyderabad is home to idol makers from Kolkata.clay Ganeshas ranging from 8 inches to 6 feet in height are at different stages of completion. "img={img2}/>

      <HomeCard title="EcoFriendly Ganeshji" description="Pedda Amberpet, which is around 14 kilometres from the bustling Dilshuknagar in Hyderabad is home to idol makers from Kolkata.clay Ganeshas ranging from 8 inches to 6 feet in height are at different stages of completion. " img={img3}/>
</div>
      
    </>
  );
}

export default Home;


// export  function CardSecond() {
//   return (
//     <>
//       <div className='card'>
//         <img src={ImgGanpati02} className='img' ></img>
//         <h3 className="card-title">Eco-friendly Ganesha</h3>
//         <p className="card-text">11.2 Inch Muktidaya Eco-Friendly Ganesha Idol in Sinhasana Pose of 
//          Ganpati</p>
//         <h5 className="prize">Rs. 1400/-</h5>
//         <Button />
//       </div>
//     </>
//   )
// }

// export  function CardThird() {
//   return (
//     <>
//       <div className='card'>
//         <img src={ImgGanpati03} className='img' ></img>
//         <h3 className="card-title">Eco-friendly Ganesha</h3>
//         <p className="card-text">12.7 Inch Muktidaya Eco-Friendly Ganesha Idol in Padmasana Pose of 
//          Ganpati</p>
//         <h5 className="prize">Rs. 1550/-</h5>
//         <Button />
//       </div>
//     </>
//   )
// }
