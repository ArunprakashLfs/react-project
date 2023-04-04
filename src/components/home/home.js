import './home.style.scss';

const Home =({Data})=>{
    // const [title, id] = [...Data];
    // console.log(title);
    // {console.log(Data)}
    const data =[...Data]
    console.log(data);
    return(
        <div className="card">
            {data.map(({title, images})=>{
            return (
                <div >
                    <h3>{title}</h3>
                    {/* {console.log(image)} */}
                    <div className="image-container">
                    <img src={images[0]} alt={title} className="img"></img>
                    </div>
                </div>
            )
        })}
        </div>
    )
}
export default Home;