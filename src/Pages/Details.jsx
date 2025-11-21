import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Details() {
  const{tag} = useParams();

  let [category,setCategory] = useState(null);
   let [ingredients,setIngredients] = useState([]);
   let [introduction,setIntroduction] = useState([]);
  
  useEffect(() =>{
     fetch(`https://dummyjson.com/recipes/${tag}`)
      .then((response) => {
        return response.json();
      })
      .then((recipe) => {
        console.log(recipe);
        setCategory(recipe);
        setIngredients(recipe.ingredients || []);
        setIntroduction(recipe.introduction || []);
      });
  }, []);
  
  return<div>
  (
  <div>
    {/* banner section start */}
    <div className="container">
      <div className="row mt-4" id="recipedetails">
      </div>
    </div>
    {/* banner section ends */}
    {/* details section start */}
    <div className="container ">
      <div className="row">
            <div className="col-lg-6 col-md-12 mb-4">
              <div className="details-images">
                <img src={category?.image} alt className=" w-100 " style={{borderRadius: 20, height: 740}} />
              </div>
            </div>
            <div className="col-lg-6 col-md-12 ">
              <div className="recipe-items">
                <h1 className="display-4 fw-bold mb-4">{category?.name}</h1>
                <h2 className="fs-1">Ingredients :</h2>
                <ul className="mt-3">
                  {ingredients.length > 0 ? (
                    ingredients.map((item, index) => (
                      <li key={index} className="fs-5 text-secondary">
                        {item}
                      </li>
                    ))
                  ) : (
                    <li className="text-muted">No ingredients found.</li>
                  )}
                </ul>
              </div>
              <div className="row text-center mt-5">
                <div className="col-12 col-md-4">
                  <div className="time">
                    <span className="fa  fa-clock-o fs-1  mb-3" />
                    <h2 className="fs-4">Prep Time</h2>
                    <h5 className="text-secondary">{category?.prepTimeMinutes}</h5>
                  </div>
                </div>
                <div className="col-1 d-sm-none d-md-block">
                  <div className="border border-1 border-secconadary" style={{height: 150, width: 1}}>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="time">
                    <span className="fa fa-history fs-1  mb-3" />
                    <h2 className="fs-4">cock Time</h2>
                    <h5 className="text-secondary">{category?.cookTimeMinutes}</h5>
                  </div>
                </div>
                <div className="col-1 d-sm-none d-md-block">
                  <div className="border border-1 border-secconadary" style={{height: 150, width: 1}}>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="time">
                    <span className="fa fa-users fs-1  mb-3" />
                    <h2 className="fs-4">Yield</h2>
                    <h5 className="text-secondary">{category?.servings}</h5>
                  </div>
                </div>
              </div>
              <hr className="mt-4" />
            </div>
          </div>
      </div>

      {/* introduction seaction start */}
      <div className="container ">
        <h2 className="fw-bold mb-5">How to Make it</h2>
              <div className='row'>
                  {introduction.length > 0 ? (
                    introduction.map((value,index) =>{
                       <div className="col-lg-12 col-md-12">    
                          <div className="details">
                            <div className="details-content d-flex align-items-center gap-3">
                                <span className="fa fa-check-circle-o fs-1 text-danger" />
                                <h3 className="mt-2 text-danger fw-bold fs-2">{index+1}. STEP</h3>
                              </div>
                              <div className="details-pregraphs">
                                <p className="ms-4 mt-2 fs-5 mb-3">{value}</p>
                              </div>
                            </div>
                          <hr className="mt-4" />
                      </div>
                    })
                  ):(
                        <p className="text-muted fs-5">No steps found for this recipe.</p>
                  )
                }
              </div>
      </div>
    {/* details section ends */}
    {/* comment section start */}
    <div className="container">
      <div className="row mt-5">
        <div className="col-lg-8 col-md-12">
          <h2 className="fw-bold fs-3">Comments</h2>
          <div className="d-flex gap-3">
            <img src="https://m.media-amazon.com/images/S/amzn-author-media-prod/ktcs20pook7q145t4t4itjhql1._SY450_CR0%2C0%2C450%2C450_.jpg" alt className="w-25" />
            <div className="items">
              <h3 className="fw-bold fs-3">Alice Thomson</h3>
              <h5 className="text-secondary">12 days ago</h5>
              <span className="fa fa-star text-warning" />
              <span className="fa fa-star text-warning" />
              <span className="fa fa-star text-warning" />
              <span className="fa fa-star text-warning" />
              <span className="fa fa-star " />
            </div>
          </div>
          <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt magnam cumque facere
            ipsa labore
            animi eos, blands, quidem esse voluptate quasi! Fugit provident laborum pariatur sint dolorem
            cumque maiores, beatae excepturi dolor eius a dolore exercitationem repudiandae explicabo esse est
            odit fuga eum minima, iste expedita quam facilis laudantium enim qui ipsum nostrum itaque
            sint, incidunt labore nulla dolorem?</p>
          <div className="team bg-light w-75 p-4 ms-auto  my-5">
            <div className="team-images d-flex gap-3">
              <img src="https://pbs.twimg.com/profile_images/1918425132558684160/f1Fd5pGO_400x400.jpg" alt className="w-25" />
              <div className="items">
                <h4 className="fw-bold fs-3">Tom Solender </h4>
                <h6 className="text-secondary">12 days ago</h6>
              </div>
            </div>
            <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. At corrupti dicta error
              illum quo eum
              voluptas vel voluptatibus! Consequatur, est? Unde fugiat pariatur, incidunt aperiam labore rem
              molestias cupiditate suscipit molestiae magnam non assumenda.</p>
          </div>
          <div className="team my-5 ms-auto w-75">
            <div className="d-flex gap-3 ">
              <img src="https://m.media-amazon.com/images/S/amzn-author-media-prod/ktcs20pook7q145t4t4itjhql1._SY450_CR0%2C0%2C450%2C450_.jpg" alt className="w-25" />
              <div className="items">
                <h3 className="fw-bold fs-3">Alice Thomson</h3>
                <h5 className="text-secondary">12 days ago</h5>
                <span className="fa fa-star text-warning" />
                <span className="fa fa-star text-warning" />
                <span className="fa fa-star text-warning" />
                <span className="fa fa-star text-warning" />
                <span className="fa fa-star " />
              </div>
            </div>
            <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt magnam cumque
              facere
              ipsa labore
              animi eos, blands, quidem esse voluptate quasi! Fugit provident laborum pariatur sint dolorem
              cumque maiores, beatae excepturi dolor eius a dolore exercitationem repudiandae explicabo esse
              est
              odit fuga eum minima./p&gt;
            </p></div>
        </div>
        <div className="col-lg-4 col-md-12 mt-5">
          <h2 className="fw-bold fs-3">Tags</h2>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12">
              <div className="buttons mt-4 ms-3">
                <button className="pt-2  pb-2 ps-4 pe-4 border-0 text-secondary fw-bold rounded">DINNER</button>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="buttons mt-4 ms-3">
                <button className="pt-2  pb-2 ps-2 pe-2 border-0 text-secondary fw-bold ms-auto ">CASSEROLE</button>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="buttons mt-4 ms-3">
                <button className="pt-2  pb-2 ps-4 pe-4 border-0 text-secondary fw-bold ">PARTY</button>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="buttons mt-4 ms-3">
                <button className="pt-2  pb-2 ps-4 pe-4 border-0 text-secondary fw-bold">MEAT</button>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <h2 className="fw-bold  mb-5">Share Recipe</h2>
            <a href="#" className="text-dark me-3  border border-dark rounded-circle text-dark text-decoration-none p-2"><span className="fa fa-facebook-f" style={{color: '#1877F2'}} /></a>
            <a href="#" className=" me -3 border border-dark rounded-circle text-dark text-decoration-none p-2 "><span className="fa fa-instagram" style={{color: '#E1306C'}} /></a>
            <a href="#" className="text-dark ms-3 border border-dark rounded-circle text-dark text-decoration-none p-2"><span className="fa fa-twitter" style={{color: '#1877F2'}} /></a>
          </div>
        </div>
      </div>
    </div>
    {/* comment section ends */}
    {/* recipe section start */}
    <div className="bg-light p-5">
      <div className="container ">
        <div className="row">
          <h2 className="fw-bold display-5 ">Other Recipes You May Like</h2>
        </div>
      </div>
    </div>
    {/* recipe section ends */}
  </div>
  )
</div>

}

export default Details