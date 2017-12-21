import React from 'react';
import './BusinessList.css';
import '../business/Business';

class BusinessList extends React.Component {
    render(){
      return (
        <div className="BusinessList">
          this.props.businesses.map(business => {
            return <Business business={business} />
          })
        }
        </div>
      );
    }



export default BusinessList;
