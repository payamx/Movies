
function Cards({cardData}) {

    //search bar filter
// filter((item) => {if (item && item.title === "") {return item}
// else if (item.title.toLowerCase().includes(searchName.toLowerCase())) {return item}})
    return (<>
        <div>

            <div className=" row  " id="num">
                {cardData?.map((item) => (<div className="col-6  col-md-2 g-3  g-md-4" key={item.id}>
                    <div className="card card-main card:hover border-0 m-auto  ">
                        <a href={`/react-test/movies/${item.id}`} target="_blank" className=" text-decoration-none ">

                            <div className="">

                                <img src={item.poster} className="card-img-top    rounded-2  " alt="..."/>
                                <div className="card-body  card-img-overlay  p-0  text-white d-flex align-items-end   ">
                                    <div className="bg-dark card-footer text-truncate fs-6   bg-opacity-75 flex-fill  ">{item.title}</div>
                            < /div>




                        </div></a>
                    </div>
                </div>))}
            </div>


        </div>
    </>);
}

export default Cards;
