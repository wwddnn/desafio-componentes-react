
import './styles.css';
import carImg from '../../assets/car.png';

export default function Card() {
    
    return (
        <>
            <h2>Venha nos visitar</h2>
            <div className="ct-card-car">
                <img src={carImg} alt="Car" />
                <p>Lorem ipsum dolor</p>
            </div>
            <div className="ct-card-car">
                <img src={carImg} alt="Car" />
                <p>Lorem ipsum dolor</p>
            </div>
        </>
    );
}