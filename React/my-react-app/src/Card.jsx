import picture from './assets/norris.jpg'


function Card(){

    return(
        <div className="card">
            <img className="card-img" src={picture} alt="chuck Noris picture"></img>
            <h2 className="card-title">Chuck Noris</h2>
            <p className="card-text">Actor and kick-boxer <br/>(Actor no de die)</p>
            &copy;&nbsp;{new Date().toLocaleDateString()}
        </div>
    );
}

export default Card 