import React, { Component } from 'react';
import Navbar from './Navbar'
import RecipeItem from './RecipeItem'
import recipes from '../sample_data/recipes.json'

class App extends Component {
  constructor(props) {
    super(props);
    
    this.recipes = recipes.results;
    this.state = {
      searchString: '',
      filteredRecipes: []
    };
    this.state.filteredRecipes = this.recipes
  }

  searchRecipes = (e) => {
    let filteredRecipes = this.recipes.filter(recipe => {
      return (
        recipe.title.toLowerCase().includes(e.target.value.toLowerCase())
        || recipe.ingredients.toLowerCase().includes(e.target.value.toLowerCase())
      )
    })
    this.setState({ 
      searchString: e.target.value,
      filteredRecipes
    })
  }

  render() { 
    const { filteredRecipes } = this.state
    return (
      <div className="App">
        <Navbar 
          handleSearchRecipes={this.searchRecipes} 
          searchString={this.state.searchString}/>
        <div className="container mt-10">
          <div className="row">
            {
              filteredRecipes.map((recipe) => {
                return <RecipeItem 
                          key={Math.random()} 
                          searchString={this.state.searchString}
                          recipe={recipe}/>
              })
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
