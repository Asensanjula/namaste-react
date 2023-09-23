import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    // console.log('Parent Constructor')
  }

  render() {
    // console.log('Parent Render')
    return (
      <div className="about">
        <h2>About US</h2>
        <p>This is Namaste React About Us Page!!!</p>
        <User />

        {/* <UserClass name={"Asen De Silva class"} /> */}
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div className="about">
//       <h2>About US</h2>
//       <p>This is Namaste React About Us Page!!!</p>
//       <User />

//       <UserClass name={"Asen De Silva class"}/>
//     </div>
//   );
// };

export default About;
