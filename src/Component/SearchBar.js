import React from 'react';

const SearchBar = ({setSearch}) => {

    return (<>
            <div className="container bg-warning  rounded-pill my-5 shadow-lg">
                        <div className="   mx-auto py-2   my-5">
                            <form>
                                <div>
                                    <input type="text" onChange={(e) => {
                                        setSearch(e.target.value)
                                    }} className="form-control rounded-4"
                                           placeholder="Search Movie..."/>

                                </div>
                            </form>
                        </div>

            </div>

        </>

    );
}

export default SearchBar
