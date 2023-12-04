const parent = React.createElement("div", 
    {id: "parent"}, 
    React.createElement("div", 
        {id: "child"},
        React.createElement("h1", 
            {}, 
            "Hello from H1 tag!"
        )
    )    
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

// creating a nested structure 
// <div id="parent">
//  <div id="child">
//      <h1></h1>
//  </div>
// </div>