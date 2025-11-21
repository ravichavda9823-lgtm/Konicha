import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Search() {
  let [data, setData] = useState([]);
  let [query, setQuery] = useState("");

  let navigate = useNavigate();

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((response) => {
        return response.json();
      })
      .then((recipe) => {
        console.log(recipe);
        setData(recipe["recipes"]);
      });
  }, []);
  console.log(query);

  function handelSubmit(e) {
    e.preventDefault();
    navigate(`/searchResult?query=${query}`);
  }
  return (
    <div>
      <div className="container mt-4">
        <div className="row">
          <div className="col-lg-12 col-md-8 col-12">
            <div className="right-side mt-3">
              <form
                onSubmit={handelSubmit}
                className="d-flex flex-wrap gap-2 align-items-center mb-4 justify-content-between"
              >
                <div className="position-relative w-75">
                  <span className="fa fa-search position-absolute top-50 start-0 translate-middle-y ps-3 text-secondary" />
                  <input
                    onChange={(e) => {
                      setQuery(e.target.value);
                    }}
                    type="search"
                    className="form-control ps-5 py-2 bg-light border-0"
                    placeholder="Search for recipes..."
                    id="searchInput"
                  />
                </div>
                {/* <button className="btn btn-danger rounded-pill px-4 py-2 ms-5">
                  Sort by Latest <i className="fa fa-sort ms-2" />
                </button> */}
              </form>
              <div className="container mt-4">
                <div className="row">
                  {data.map((value, index) => {
                    return (
                      <div className="col-md-6 col-lg-4 col-12" key={index}>
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
  );
}

export default Search;
