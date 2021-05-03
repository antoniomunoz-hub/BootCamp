import {Paginate} from 'react-pagination-component';
import React from "react";
import Pagination from "react-pagination-library";
import "react-pagination-library/build/css/index.css"; //for css

class PaginationCard extends React.Component {
  state = {
    currentPage: 1
  };
  changeCurrentPage = numPage => {
    this.setState({ currentPage: numPage });
    //fetch a data
    //or update a query to get data
  };
  render() {
    return (
      <div>
        <Pagination
          currentPage={this.state.currentPage}
          totalPages={10}
          changeCurrentPage={this.changeCurrentPage}
          theme="bottom-border"
        />
        <h2>current Page:{this.state.currentPage}</h2>
      </div>
    );
  }
}
export default App;

// https://reactjsexample.com/simple-library-for-pagination-in-react/