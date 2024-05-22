import React from "react";
import ReactDOM from "react-dom/client";

const heading = <h1 id="css1">I am an React Element</h1>;

const Heading1 = () =>{
    return <div><p id="css2">I am 1st React Component</p></div>
}

const Heading2 = () => (
    <div>
        <Heading1/>
        <h2 className="heading">I am 2nd React component</h2>
    </div>
)

const Heading3 = () => <h1 className="heading">3rd Component</h1>;

const Heading4 = () => {
    return    <div>
        <Heading2/>
        <Heading2></Heading2>
        {Heading3()}
        {heading}
       {5+6}
        <div className="heading2">
            in am 4th component
        </div>
    </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading4/>);
// root.render(heading);