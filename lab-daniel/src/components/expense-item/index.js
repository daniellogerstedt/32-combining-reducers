import React from 'react';
import ExpenseForm from '../expense-form/';
import {connect} from 'react-redux';
import {expenseUpdate, expenseDelete} from '../../actions/expense-actions';
import {renderIf} from '../../lib/utils';

class ExpenseItem extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      editing: false,
    };
    Object.getOwnPropertyNames(ExpenseItem.prototype).filter(prop => prop.startsWith('handle')).map(name => this[name] = this[name].bind(this));
  }
  
  handleEditComplete (state) {
    this.props.expenseUpdateExpense(state);
    this.setState({editing: false});
  }

  handleEditing () {
    this.setState({editing: !this.state.editing});
  }

  handleDelete() {
    this.props.expenseDeleteExpense(this.props.expense);
  }

  render() {
    return (
      <li className='expense-list-item'>
        <section onDoubleClick={this.handleEditing}>
          <h4>{this.props.expense.name}</h4>
          <p>{this.props.expense.cost}</p>
          <button onClick={this.handleDelete}>Delete</button>
        </section>
        {renderIf(this.state.editing, <ExpenseForm buttonText='Update' expense={this.props.expense} onComplete={this.handleEditComplete} onCancel={this.handleEditing}/>)}
      </li>
    );
  }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = (dispatch, getState) => ({
  expenseUpdateExpense: expense => dispatch(expenseUpdate(expense)),
  expenseDeleteExpense: expense => dispatch(expenseDelete(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseItem);