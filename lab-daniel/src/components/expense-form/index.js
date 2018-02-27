import React from 'react';
import {renderIf} from '../../lib/utils';

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.expense? this.props.expense 
      : {
        catId: this.props.catId,
        name: '',
        cost: 0,
      };
    Object.getOwnPropertyNames(ExpenseForm.prototype).filter(prop => prop.startsWith('handle')).map(name => this[name] = this[name].bind(this));
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onComplete(this.state);
    this.setState({name: '', cost: 0});
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
      <form className='expense-form' onSubmit={this.handleSubmit}>
        <input 
          type='text'
          name='name'
          value={this.state.name}
          placeholder='Expense Name'
          onChange={this.handleChange}/>
        <input
          type='number'
          name='cost'
          value={this.state.cost}
          placeholder='0'
          onChange={this.handleChange} />
        <button type='submit'>{this.props.buttonText}</button>
        {renderIf(this.props.expense, <button onClick={this.handleCancel}>Cancel</button>)}
      </form>
    );
  }
}

export default ExpenseForm;