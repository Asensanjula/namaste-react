const heading = React.createElement(
    "h1", 
    { id: "header" }, 
    "Hello From React"
);

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
