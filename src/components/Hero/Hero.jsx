import './Hero.css';
export function Hero(props) {
    return (
    <div className="basic__hero persone">
        <div className="card">
            <div className="persone__main">
            <div className="persone__image"><img src={props.img} className="hero__img"/>
        </div>
            <div className="persone__names">
                <div>Альтер Эго: {props.alter}</div>
                <h3>Имя: {props.name}</h3>
                <div>Род занятий: {props.occupation}</div>
                <div>Друзья: {props.friends}</div>
                <div>Враги: {props.forces}</div>
            </div>
        </div>
        <div className="persone__container">
        Описание: {props.description}
        </div>
    </div>
    </div>
      
    );
}
export default Hero;