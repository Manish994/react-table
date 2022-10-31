import React from "react";
import "./datatable.css";

export default class DataTable extends React.Component {
  //when you have constructor then call the parents constructor
  // by invoking super method
  constructor(props) {
    super(props);

    //set state
    this.state = {
      headers: props.headers,
      data: props.data,
    };

    // if user didn't pass anything in keyfield , then default value will be "id"
    this.keyField = props.keyField || "id";
    this.noData = props.noData || "No Records Found!";
    this.width = props.width || "100%";
  }
  //every component must have render method
  //component means page
  render() {
    return <div>DataTable</div>;
  }
}
