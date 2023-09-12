import './HomeCard.css';
import Button from '../../components/Button/Button';


function HomeCard({title, description ,img }) {
  return (
    <div className="home-card">
          <img src={img} className='imgganesh'/>
        <h2 className='heading'>{title}</h2>
        <p>{description}</p>
        <Button/>
      
    </div>
  )
}

export default HomeCard