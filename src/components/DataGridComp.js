import React from "react";
import { ReactDataGrid, ReactDataGridColumn } from "flexicious-react-datagrid";
import { CssStyles, ApiStyles } from "flexicious-react-datagrid-styles";
import { data } from "./Data";

function DataGridComp() {
  return (
    <div>
      <h1>Hello World!</h1>
      <ReactDataGrid
        styles={ApiStyles.getThemeStyles("officeblue")}
        width={"30%"}
        editable
        dataProvider={data.map((item) => ({
          id: item.id,
          subs: item.subs,
          views: item.views,
        }))}
      >
        <ReactDataGridColumn dataField="id" />
        <ReactDataGridColumn dataField="subs" />
        <ReactDataGridColumn dataField="views"  />
      </ReactDataGrid>
    </div>
  );
}

export default DataGridComp;
