import './home.style.scss';

const Home =({Data})=>{
    // const [title, id] = [...Data];
    // console.log(title);
    // {console.log(Data)}
    const data =[...Data]
    console.log(data);
    return(
        <div className="card">
            {data.map(({title, images, id, brand, description})=>{
            return (
                // <div >
                //     <h3 key={id}>{title}</h3>
                //     <h4>{brand}</h4>
                //     <p>{description}</p>
                //     {/* {console.log(image)} */}
                //     <div className="image-container">
                //     <img src={images[0]} alt={title} className="img"></img>
                //     </div>
                // </div>
                <div className='container' >
                    <h2>{title}</h2>
                    <h3>{brand}</h3>
                    
                </div>
            )
        })}
        </div>
    )
}
export default Home;