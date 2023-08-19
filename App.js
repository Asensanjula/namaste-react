import React from "react";
import ReactDOM from "react-dom/client";

const jsxHeading = <h1 id="header">Namaste JSX</h1>;

// React Functional component
const HeadingComponent = () => {
  return <h1 className="heading">Namaste Functional Component</h1>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
