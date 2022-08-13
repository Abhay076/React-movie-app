import React from "react";
import { connect} from "../index";
import { handleMovieSearch } from "../actions";
// import { data } from "../data";
import {addMovieToList} from "../actions"
// import {data} from '../data';
 class Navbar extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            showSearchResults: true,
            searchText:''
        };
    }
    handleAddToMovies = (movie) =>{
        this.props.dispatch(addMovieToList(movie));
        this.setState({
            showSearchResults: false
        });
    }
    handleSearchClick = () =>{
        const { searchText } = this.state;
        this.props.dispatch(handleMovieSearch(searchText));
    }
    handleSearchChange = (e) =>{
        this.setState({
            searchText:e.target.value
        });
    }
    render (){
        // const {showSearchResults} = this.state;
        const { results,showSearchResults } = this.props.search;
        console.log(results);
        return (

            <div className="nav">
            <div className="search-container">
              <input onChange={this.handleSearchChange} />
              <button id="search-btn" onClick={this.handleSearchClick}>
                Search
              </button>
    
              {showSearchResults && (
                <div className="search-results">
                  {/* {results && results.map((result) => ( */}
                  <div className="search-result">
                    <img src={results.Poster} alt="search-pic" />
                    <div className="movie-info">
                      <span>{results.Title}</span>
                      <button onClick={() => this.handleAddToMovies(results)}>
                        Add to Movies
                      </button>
                    </div>
                  </div>
                  {/* ))} */}
                </div>
              )}
            </div>
          </div>
    
        )
    }
 
}

// class NavbarWrapper extends React.Component {
//   render(){
//     return(
//       <StoreContext.Consumer>
//         {(store)=> <Navbar dispatch={store.dispatch} search={this.props.search} />}
//       </StoreContext.Consumer>
//     )
//   }
// }


function mapStateToProps ({search}){
  return {
     search

  }
}


export default connect(mapStateToProps)(NavbarWrapper);
