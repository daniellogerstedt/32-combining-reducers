import React from 'react';
import {connect} from 'react-redux';
import {categoryCreate} from '../../actions/category-actions';
import CategoryForm from '../category-form/';
import CategoryItem from '../category-item/';

class Dashboard extends React.Component {
  render () {
    return (
      <div>
        <h1>Welcome to my CATEGORY Board</h1>
        <CategoryForm buttonText='create' onComplete={this.props.dashboardCategoryCreate}/>
        {this.props.categories ? 
          this.props.categories.map(category => 
            <CategoryItem key={category._id} category={category}/>
          )
          :
          undefined
      
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories,
});

const mapDispatchToProps = (dispatch, getState) => ({
  dashboardCategoryCreate: category => dispatch(categoryCreate(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);