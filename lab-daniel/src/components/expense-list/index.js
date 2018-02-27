import React from 'react';
import {connect} from 'react-redux';
import {expenseCreate} from '../../actions/expense-actions';
import ExpenseForm from '../expense-form';
import ExpenseItem from '../expense-item';

class ExpenseList extends React.Component {
  render () {
    return (
      <section>
        <ExpenseForm buttonText='Create' catId={this.props.catId} onComplete={this.props.expenseCreateExpense}/>
        {this.props.expenses?
          <ul>
            {this.props.expenses[this.props.catId].map(expense => <ExpenseItem key={expense._id} expense={expense} />)}
          </ul>
          :
          undefined
        }
      </section>
    );
  }
}

const mapStateToProps = state => ({
  expenses: state.expenses,
});

const mapDispatchToProps = (dispatch, getState) => ({
  expenseCreateExpense: expense => dispatch(expenseCreate(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseList);