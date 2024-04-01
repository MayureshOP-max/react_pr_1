import profilePic from './assets/i1.jpeg'
function Card(){

    return(
        <div className="card">
            <img className='card-img' src={profilePic} alt="profile picture" />
            <h2 className='card-title'>Gaming</h2>
            <p className='card-text'>I am learning React.js and play video games.</p>
        </div>
    );
}
export default Card