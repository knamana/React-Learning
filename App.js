import React from "react";
import ReactDOM from "react-dom/client";

// Using React.createElement
// const header = React.createElement("div", 
//     {class: "title"}, 
//     [
//         React.createElement("h1", 
//         {}, 
//         "Hello from H1 tag!"
//         ), React.createElement("h2", 
//         {}, 
//         "Hello from H2 tag!"
//         ), React.createElement("h3", 
//         {}, 
//         "Hello from H3 tag!"
//         )
//     ]    
// );

// Using JSX
// const header = (
//     <div className="title">
//         <h1>Hello from H1 tag!</h1>
//         <h2>Hello from H2 tag!</h2>
//         <h3>Hello from H3 tag!</h3>
//     </div>
// );

// using Functional component
// const HeaderComponent = () => {
//     return (
//         <div className="title">
//             <h1>Hello from H1 tag!</h1>
//             <h2>Hello from H2 tag!</h2>
//             <h3>Hello from H3 tag!</h3>
//         </div>
//     );
// };

// Compositional component
// const AnotherComponent = () => (
//     <div>
//         <HeaderComponent/>
//         <h1>This is another component!</h1>
//     </div>
// );

// `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in JSX.
const element = <h1>This is an react element</h1>

const TitleFnComponent = () => {
    return <h1>This is title functional component!</h1>;
};

const HeaderComponent = () => {
    return(
        <div className="Title" key="title">
            {element}
            <h1 style={{color: "orange"}}>This is h1 tag</h1>
            <TitleFnComponent/>
            <h2 style={{color: "blue"}}>This is h2 tag</h2>
            <TitleFnComponent></TitleFnComponent>
            <h3 style={{color: "green"}}>This is h3 tag</h3>
        </div>
    );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

// rendering the component
root.render(<HeaderComponent/>);