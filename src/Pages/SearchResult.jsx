import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

function SearchResult() {
    let [data, setData] = useState([]);

    let query = useLocation().search.split("=")[1];
    console.log(query);

     useEffect(() => {
          fetch(`https://dummyjson.com/recipes/search?q=${query}`)
            .then((response) => {
              return response.json();
            })
            .then((recipe) => {
              console.log(recipe);
              setData(recipe["recipes"]);
            });
        }, []); 
  return (
    <div>
        <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-12 col-md-8 col-12">    
              <div className="container mt-5">
                <div className="row">
                  {data.map((value) => {
                    return (
                      <div className="col-md-6 col-lg-4 col-12">
                        <div className="recipes-items">
                          <a href="details.html?id=${value.id}">
                            <img src={value.image} alt />
                          </a>
                          <div className="recipes mt-4">
                            <h2 className="fs-5">{value.name}</h2>
                            <div className="reviwe d-flex justify-content-between mt-3">
                              <span className="fa fa-star text-warning">
                                <a className="text-secondary">{value.rating}</a>
                              </span>
                              <h5 className="text-secondary">
                                {value.cuisine}
                              </h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default SearchResult