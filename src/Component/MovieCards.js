import {useNavigate ,Link} from "react-router-dom";

const MovieCards = ({cardData}) => {
    let navigate = useNavigate();
    const handelClick = (id) => {
        navigate(`/react-test/movies/${id}`)

    }


    return (
        <>

            <div>
                <div className=" row  " id="movie">
                    {cardData?.map((item) => (<div className="col-6  col-md-2 g-3  g-md-4" key={item.id}>
                        <div className="card card-main card:hover border-0 m-auto  pointer   ">
                            <div  className="text-decoration-none">
                                <div onClick={()=>handelClick(item.id)} >

                                    <img  src={item.poster} className="card-img-top    rounded-2  " alt="..."/>
                                    <div className="card-body  card-img-overlay  p-0  text-white d-flex align-items-end   ">
                                        <div className="bg-dark card-footer text-truncate fs-6   bg-opacity-75 flex-fill  ">{item.title}</div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>))}
                </div>

            </div>
        </>
    );
}

export default MovieCards;
