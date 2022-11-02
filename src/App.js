import React, { Component } from "react";
import "./App.css";
import DataTable from "./Components/DataTable";

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

      data: [
        {
          id: 1,
          name: "a",
          age: 29,
          qualification: "B.Tech",
          rating: 2,
          profile: "https://unsplash.com/photos/jbcY_yvsDzk",
        },
        {
          id: 2,
          name: "b",
          age: 10,
          qualification: "M.Tech",
          rating: 4,
          profile: "https://unsplash.com/photos/jbcY_yvsDzk",
        },
        {
          id: 3,
          name: "c",
          age: 54,
          qualification: "MSC",
          rating: 3,
          profile: "https://unsplash.com/photos/jbcY_yvsDzk",
        },
      ],
    };

    for (var i = 4; i <= 20; i++) {
      model.data.push({
        id: i,
        name: "name" + i,
        age: i + 14,
        qualification: "Graduate" + i,
        rating: i % 2 ? 3 : 4,
        profile: "https://unsplash.com/photos/jbcY_yvsDzk",
      });
    }

    // set model into state
    this.state = model;
  }
  render() {
    return (
      <div className="App">
        <DataTable
          //here props are passed into datatable -- classname, title, pagination, width,...
          className="data-table"
          title="USER PROFILES"
          keyField="id"
          edit={true}
          pagination={{
            enabled: true,
            pageLength: 5,
            type: "long", // long, short
          }}
          width="100%"
          headers={this.state.headers}
          data={this.state.data}
          noData="No records!"
        ></DataTable>
      </div>
    );
  }
}

export default App;
