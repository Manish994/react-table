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

  renderTableHeader = () => {
    let { headers } = this.state;
    headers.sort((a, b) => {
      if (a.index > b.index) return 1;
      return -1;
    });

    let headerView = headers.map((header, index) => {
      let title = header.title;
      let cleanTitle = header.accessor;
      let width = header.width;

      return (
        <th
          //set props
          key={cleanTitle}
          ref={(th) => (this.th = th)}
          style={{ width: width }}
          data-col={cleanTitle}
        >
          <span className="header-cell">{title}</span>
        </th>
      );
    });

    return headerView;
  };

  renderNoData = () => {
    return (
      <tr>
        <td colSpan={this.state.headers.length}>{this.noData}</td>
      </tr>
    );
  };

  renderContent = () => {
    return (
      <tr>
        <td colSpan={this.state.headers.length}>Record goes here</td>
      </tr>
    );
  };

  renderTable = () => {
    let title = this.props.title || "Data-Table";
    let headerView = this.renderTableHeader();
    let contentView =
      this.state.data.length > 0 ? this.renderContent() : this.renderNoData();

    return (
      <table className="data-inner-table">
        <caption className="data-table-caption">{title}</caption>
        <thead>
          <tr>{headerView}</tr>
        </thead>
        <tbody>{contentView}</tbody>
      </table>
    );
  };
  //every component must have render method
  //component means page
  render() {
    return <div className={this.props.className}>{this.renderTable()}</div>;
  }
}
