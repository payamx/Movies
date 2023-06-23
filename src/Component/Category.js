import React from 'react';

const Category = ({categories, setCatid}) => {


    return (

        <>
            <div>

                <div
                    className=" d-none d-md-flex flex-md-column    ">

                    {categories?.map((category) => (
                        <ul className="  ">

                            <li className=" d-flex  flex-row me-auto justify-content-between pb-1 border-bottom  "
                                key={category.id}>
                                <div type="button" className="  "

                                     onClick={() => {
                                         setCatid(category.id)
                                     }}>{category.name}
                                </div>


                            </li>
                        </ul>

                    ))}

                </div>


            </div>


        </>
    );
};

export default Category;
