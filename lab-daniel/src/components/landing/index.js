import React from 'react';

class Landing extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='landing'>
        <h1>Landing</h1>
        <p>Welcome to the Landing, Navigate to <a href='/dashboard'>"/dashboard"</a> to add categorys.</p>
      </div>
    );
  }
}

export default Landing;