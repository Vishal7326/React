//Creating an heading h1-tag in react.
//{} This object is where we can give attributes.
//const heading = React.createElement("h1" , 
//{ id : "heading" , xyz:"abc"} , "Hello World From React");//This line creates a React element for an <h1> tag with the text "Hello World From React".
// //React Intitally needs root to do all the operations of DOM.
// //React neads root to render all the stuff.
// //Connect the heading to the div.
//const root = ReactDOM.createRoot(document.getElementById("root"));//Root is a place where all react code will learn.
// //We Render Using render in react we have to render.
//root.render(heading);
// //React.createElement is nothing but javascript object.
// //root.render(heading) its job is to take the heading(object) create the h1 tag which the browser understands and put it up inside the root element.
//console.log(heading)//object.
// //render method is responsible to take the heading object and put it up on the dom
// //render method is converting this object to an h1 tag and put it up in the root.


/**
 * <div id="parent">
 *      <div id="child">
 *          <h1></h1>
 *      </div>
 * </div>
 */

//How Do we create a nested structure like this in React

// const parent = React.createElement(
//     "div",
//     {id:"parent"},
//     React.createElement("div",
//         { id:"child" },
//         React.createElement("h1",{},"Hii i am h1 tag")
//     )
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);

// console.log(parent) // Object.

//While u use react.createelement it is creating an object.
//while it is rendering to the dom it converts object into html and puts it up in the dom.

/**
 * <div id="parent">
 *      <div id="child">
 *          <h1></h1>
 *          <h2></h2> If i want to cretae the siblings or h2 after h1 how do i do it.
 *      </div>
 * </div>
 */

// const parent = React.createElement("div",{id:"parent"},
//     //Another div 
//     //This is one h1 tag if u multiple h1 than we pass it into array. we use array.
//    [ React.createElement("h1",{},"hi i am h1 tag"), // This Repersent the first h1 tag.
//      React.createElement("h2",{},"hii i am h2 tag") // This Repersent the h2 tag
//     ] 
// )

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);

/**How do u make structure like this in react 

<div id = "parent">
    <div id = "child1">
        <h1></h1>
        <h2></h2>
    </div>
    <div id = "child2">
        <h1></h1>
        <h2></h2>
    </div>
</div>
*/

const parent = React.createElement("div",{},[
    React.createElement("div",{},
        [
            React.createElement("h1",{},"Hi i am h1 tag from first child"),
            React.createElement("h2",{},"Hello i am h2 tag from first child")
        ]
    ),
    React.createElement("div",{},
        [
            React.createElement("h1",{},"Hello im h1 tag from second div"),
            React.createElement("h2",{},"Hello im h2 tag from second div")
        ]
    )
    ]
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);//putting parent in root tag.
//if there is something already present in the root than it will be replaced by the parent.

