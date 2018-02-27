import React from 'react';
import {renderIf} from '../../lib/utils';

class CategoryForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = this.props.category? this.props.category : {
      title: '',
      budget: 0,
    };

    Object.getOwnPropertyNames(CategoryForm.prototype).filter(prop => prop.startsWith('handle')).map(name => this[name] = this[name].bind(this));
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onComplete(this.state);
    this.setState({ name: '', cost: 0, _id: null, timestamp: null });
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleCancel(e) {
    e.preventDefault();
    this.props.onCancel();
  }

  render() {
    return (
      <form className='category-form' onSubmit={this.handleSubmit}>
        <input 
          type='text' 
          name='title'
          value={this.state.title}
          onChange={this.handleChange}
          placeholder='Insert Title Here'/>
        <input
          type='number'
          name='budget'
          value={this.state.budget}
          onChange={this.handleChange} />
        <button type='submit'>{this.props.buttonText}</button>
        {renderIf(this.props.category, <button onClick={this.handleCancel}>Cancel</button>)}
      </form>
    );
  }
}

export default CategoryForm;