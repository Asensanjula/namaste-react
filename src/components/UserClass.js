import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props); // to call the parent class constructor

    this.state = {
      count1: 0,
      count2: 0,
    };
    console.log(props);
  }

  render() {
    const { name } = this.props;
    const { count1, count2 } = this.state;

    return (
      <div className="user-card">
        <h1>Count {count1}</h1>
        <h1>Count 2 {count2}</h1>
        <button
          onClick={() => {
            this.setState({
              count1: count1 + 1,
            });
          }}
        >
          Increase Count 1
        </button>
        <h2>Name : {name}</h2>
        <h3>Location : Sri Lanka</h3>
        <h3>Contact : @asensanjula</h3>
      </div>
    );
  }
}

export default UserClass;
