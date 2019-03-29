import React from 'react'
import * as Highlight from "react-highlighter";

const RecipeItem = (props) => (
    <div className="col-sm-3 mt-4">
        <div className="card">
            <img className="card-img-top img-fluid" src={props.recipe.thumbnail} alt="" />
            <div className="card-body">
                <h5 className="card-title">
                  <Highlight search={props.searchString || false}>
                    {props.recipe.title}
                  </Highlight>
                </h5>
                <p className="card-text">
                    <strong>Ingredients: </strong>
                    <Highlight search={props.searchString || false}>
                      {props.recipe.ingredients}
                    </Highlight>
                </p>
            </div>
        </div>
    </div>
)

export default RecipeItem;