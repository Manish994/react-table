import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    let model = {
      //headers means table Column Name
      //Here Cell has two variant . one is object variant and
      // another is function variant.
      // Object variant support image and function variant is for Rating
      // function variant is callback function and has (row) as parameter.
      headers: [
        { title: "ID", accessor: "id", index: 0 },
        //cell attribute is object based
        {
          title: "Profile",
          accessor: "profile",
          width: 80,
          index: 1,
          cell: {
            type: "image",
            style: {
              width: "50px",
            },
          },
        },
        { title: "Name", accessor: "name", width: 300, index: 2 },
        {
          title: "Age",
          accessor: "age",
          index: 3,
        },
        { title: "Qualification", accessor: "qualification", index: 4 },
        {
          title: "Rating",
          accessor: "rating",
          width: 200,
          index: 5,
          cell: (row) => {
            <div className="rating">
              <div
                styles={{
                  backgroundColor: "lightskyblue",
                  textAlign: "center",
                  height: "1.9rem",
                  width: (row / 5) * 201 + "px",
                  margin: "3px 0 4px 0",
                }}
              >
                {row}
              </div>
            </div>;
          },
        },
      ],
    };
  }
  render() {
    return <div className="App"></div>;
  }
}

export default App;
