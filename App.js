import React from "react";
import ReactDOM from "react-dom/client";

// React component
const Title = () => (
    <h1>Namasthe React!</h1>
);

const HeadingComponent = () => (
    <div>
        <Title />
        <h1>Namasthe React with Functional component!</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

// rendering the component
root.render(<HeadingComponent />);