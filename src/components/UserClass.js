import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props); // to call the parent class constructor

    this.state = {
      name: "dummy"
    };
  }


  async componentDidMount() {

      const data = await fetch("https://api.github.com/users/asensanjula");
      let jsonData = await data.json();

      this.setState({
        name: jsonData.name,
        location : jsonData.location
      })

      this.timer = setInterval(() => {
          console.log('Namaste Interval OP');
      }, 1000);

      console.log('Component Did Mount')
  }

  componentDidUpdate() {
    console.log('Component Did Update!')
  }

  componentWillUnmount() {
    console.log('Component Will Unmount!')
    clearInterval(this.timer);
  }

  render() {
    const { name, location } = this.state;

    return (
      <div className="user-card">
        <h2>Name : {name}</h2>
        <h3>Location : {location}</h3>
        <h3>Contact : @asensanjula</h3>
      </div>
    );
  }
}

export default UserClass;
