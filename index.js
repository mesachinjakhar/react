import React from "react"
import ReactDOM from "react-dom/client"

// creating 2 h1 elements
    const heading1 = React.createElement("h1", {
        id: "title",
    }, "Heading 1" )

    const heading2 = React.createElement("h1", {
        id: "title",
    }, "Heading 2" )

    // creating div to store created h1 elements
    const div = React.createElement("div", {
        id: "container"
    }, [heading1, heading2])


    // create root
    const root = ReactDOM.createRoot(document.getElementById("root"))

    // insert div into root
    root.render(div)