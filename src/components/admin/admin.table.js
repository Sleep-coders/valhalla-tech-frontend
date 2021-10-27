import React from "react";
import { MDBDataTable } from "mdbreact";

const DatatablePage = (props) => {
  const data = {
    columns: [
      {
        label: "ID",
        field: "id",
        sort: "asc",
        width: 40,
      },
      {
        label: "Name",
        field: "name",
        sort: "asc",
        width: 200,
      },
      {
        label: "Price",
        field: "price",
        sort: "asc",
        width: 150,
      },
      {
        label: "Brand",
        field: "brand",
        sort: "asc",
        width: 100,
      },
      {
        label: "Description",
        field: "description",
        sort: "asc",
        width: 400,
      },
      {
        label: "Quantity",
        field: "quantity",
        sort: "asc",
        width: 100,
      },
      {
        label: "Product Type",
        field: "type",
        sort: "asc",
        width: 400,
      },
    ],

    rows: props.productsList,
  };

  return (
    <MDBDataTable
      paging={false}
      striped
      bordered
      scrollX
      data={data}
      maxHeight="60vh"
    />
  );
};

export default DatatablePage;
