import React from "react";

const Paginate = ({page, total, setPage}) => {

    const pageNumbers = [];

    for (let i = parseInt(page) - 1; i >= page - 3; i--) {
        if (i > 0 && i <= total) {
            pageNumbers.push(i);
        }
    }

    for (let i = parseInt(page); i <= page + 3; i++) {
        if (i <= total && i > 0) {

            pageNumbers.push(i);

        }
    }

    pageNumbers.sort((a, b) => a - b);

    const previousPage = () => {
        if (page - 1 >= 1) {

            setPage(prev => prev - 1);
        }
    };

    const nextPage = () => {
        if (page + 1 <= 25) {
            setPage(prev => prev + 1)
        }
    };

    return (
        <>
            <div>
                <nav aria-label="Page navigation example mt-5">
                    <ul className="pagination justify-content-center">
                        <li className="page-item">
                            <a className="page-link" href="" onClick={previousPage}>
                                Previous
                            </a>
                        </li>
                        <li className="page-item">
                            <a className="page-link">...</a>
                        </li>
                        {pageNumbers?.map((number, index) => (<div key={index}>
                            <li
                                className="page-item"
                                onClick={() => {
                                    setPage(number)
                                }}
                            >
                                <a
                                    className={page === number ? "page-link active" : "page-link"}

                                    href="#"
                                >
                                    {number}
                                </a>
                            </li>
                        </div>))}
                        <li className="page-item">
                            <a className="page-link">...</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="" onClick={nextPage}>
                                Next
                            </a>

                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
};

export default Paginate;
