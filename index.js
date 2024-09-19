import React from "react";
import ReactDOM from "react-dom/client";

// create root
const root = ReactDOM.createRoot(document.getElementById("root"));

// Create an element using React.createElement
const heading1 = React.createElement("h1", {}, "hello");

// JSX create element
const heading3 = <h1 id="heading">Hello from JSX</h1>;

// Define a functional component
const HeadingComponent = () => <h1>Hello</h1>;


// Render the HeadingComponent into root
root.render(<HeadingComponent />);
