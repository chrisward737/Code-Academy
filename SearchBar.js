import React from 'react';
import ReactDOM from 'react-dom';
import './SearchBar.css';

const sortByOption ={
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count'
};

class SearchBar extends React.Component {
    renderSortByOption(){
      return
      Object.keys(sortByOption).map(sortByOption =>{
        let sortByOptionValue =
          sortByOptions[sortByOption];
          return <li key={sortByOptionValue}>{sortByOption}<li />;
      });
    }

    render() {
        return (
          <div className="SearchBar">
            <div className="SearchBar-sort-options">
              <ul>
                {this.renderSortByOptions()}
              </ul>
            </div>
            <div className="SearchBar-fields">
              <input placeholder="Search Businesses" />
              <input placeholder="Where?" />
            </div>
            <div className="SearchBar-submit">
              
            </div>
          </div>
        );
      }
    }

    export default SearchBar;
