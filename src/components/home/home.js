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
                <div className='container' style={{backgroundImage: images[0] }}>
                    <div>
                        <h2>{brand}</h2>
                        <h3>{title}</h3>
                    </div>
                    <div className='image-container'>
                        <img src={images[0]} alt={brand} className='img'/>
                    </div>
                    
                </div>
            )
        })}
        </div>
    )
}
export default Home;