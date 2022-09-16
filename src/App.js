import "./App.css";
import {
  GridComponent,
  ColumnDirective,
  ColumnsDirective,
  Page,
  Inject,
  Filter,
  Group,
} from "@syncfusion/ej2-react-grids";
import { data } from "./components/Data";

function App() {
  return (
    <div style={{ margin: "5%", marginTop: "10%"}}>
      <GridComponent
        dataSource={data}
        allowPaging={true}
        pageSettings={{ pageSize: 13 }}
        allowFiltering={true}
        allowGrouping={true}
      >
        <ColumnsDirective>
          <ColumnDirective
            field="OrderId"
            headerText="Invoice ID"
            textAlign="Right"
            width="100"
          />
          <ColumnDirective
            field="CustomerId"
            headerText="Customer ID"
            width="100"
          />
          <ColumnDirective field="ShipCountry" headerText="Ship Country" />
          <ColumnDirective field="ShipName" headerText="Ship Name" />
          <ColumnDirective
            field="Freight"
            textAlign="Right"
            format="C2"
            width="100"
          />
        </ColumnsDirective>
        <Inject services={[Page, Filter, Group]} />
      </GridComponent>
    </div>
  );
}

export default App;
