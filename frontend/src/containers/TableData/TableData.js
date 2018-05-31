import React from "react";
import Table from "Components/Table";

const fields = require("./fields.json");
const records = require("./records.json");

class TableData extends React.Component {
  constructor() {
    super();

    this.state = {
      fields: fields,
      records: records
    };
  }
  buyLeads = leads => {
    console.log(leads);
  };
  buyLead = lead => {
    this.buyLeads([lead]);
  };
  onScrollBottom = cb => {
    let leads = this.state.records;

    if (leads.length < 70) {
      setTimeout(() => {
        this.setState({
          records: [...leads, ...leads]
        });
        cb();
      }, 1000);
    }
  };
  render() {
    let state = this.state;

    return (
      <Table
        fields={state.fields}
        records={state.records}
        multipleSelectionButton="Buy Selected Leads"
        multipleSelectionAction={this.buyLeads}
        recordMainButton="Buy"
        recordMainAction={this.buyLead}
        onScrollBottom={this.onScrollBottom}
      />
    );
  }
}

export default TableData;
