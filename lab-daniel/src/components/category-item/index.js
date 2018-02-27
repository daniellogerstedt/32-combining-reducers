import React from 'react';
import CategoryForm from '../category-form/';
import ExpenseList from '../expense-list/';
import {connect} from 'react-redux';
import {renderIf} from '../../lib/utils';
import {categoryUpdate, categoryDelete} from '../../actions/category-actions';

class CategoryItem extends React.Component {
  constructor (props) {
    super(props);
    this.state = {editing: false};
    Object.getOwnPropertyNames(CategoryItem.prototype).filter(prop => prop.startsWith('handle')).map(name => this[name] = this[name].bind(this));
  }
  
  handleEditing () {
    this.setState({editing: !this.state.editing});
  }

  handleDelete () {
    this.props.categoryItemCategoryDelete(this.props.category);
  }

  render() {
    return (
      <section>
        <div className='category-item' onDoubleClick={this.handleEditing}>
          <h3>Category: {this.props.category.title}</h3>
          <p>Budget: ${this.props.category.budget}</p>
          <button onClick={this.handleDelete}>Delete</button>
        </div>
        <div className='expense-list'>
          {renderIf(this.state.editing, <CategoryForm category={this.props.category} buttonText='update' onComplete={this.props.categoryItemCategoryUpdate} onCancel={this.handleEditing}/>)}
          <ExpenseList catId={this.props.category._id}/>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  categories: state,
});

const mapDispatchToProps = (dispatch, getState) => ({
  categoryItemCategoryUpdate: category => dispatch(categoryUpdate(category)),
  categoryItemCategoryDelete: category => dispatch(categoryDelete(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);