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
    };
  }

  searchRecipes = (e) => {
    this.setState({ 
      searchString: e.target.value
    })
  }

  filterRecipes = (regex) => {
    return this.recipes.filter(({title, ingredients}) => {
      return (
        title.search(regex) >= 0
        || ingredients.search(regex) >= 0
      )
    }).map((recipe) => {
      return <RecipeItem 
                key={recipe.title} 
                searchString={this.state.searchString}
                recipe={recipe}/>
    })
  }

  render() { 
    const { searchString } = this.state
    const regex = new RegExp(searchString, 'ig')

    return (
      <div className="App">
        <Navbar 
          handleSearchRecipes={this.searchRecipes} 
          searchString={this.state.searchString}/>
        <div className="container mt-10">
          <div className="row">
            {this.filterRecipes(regex)}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
