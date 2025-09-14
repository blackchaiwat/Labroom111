import React, { Fragment, useState, useCallback } from "react";
import BreadCrumb from "../../layout/Breadcrumb";
import DataTable from "react-data-table-component";
import { tableData } from "../../data/dummyTableData";
import { Container, Row, Col, Card, CardHeader, CardBody } from "reactstrap";

const DataTables = () => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [toggleCleared, setToggleCleared] = useState(false);
  const [data, setData] = useState(tableData);

  const tableColumns = [
    {
      name: "ID",
      selector: (row) => row["id"],
      sortable: true,
      center: true,
    },
    {
      name: "Name",
      selector: (row) => row["name"],
      sortable: true,
      center: true,
    },
    {
      name: "Status",
      selector: (row) => row["status"],
      sortable: true,
      center: true,
    },
    {
      name: "Creat_on",
      selector: (row) => row["creat_on"],
      sortable: true,
      center: true,
    },
  ];

  const handleRowSelected = useCallback((state) => {
    setSelectedRows(state.selectedRows);
  }, []);
  const handleDelete = () => {
    if (
      window.confirm(
        `Are you sure you want to delete:\r ${selectedRows.map(
          (r) => r.title
        )}?`
      )
    ) {
      setToggleCleared(!toggleCleared);
      setData(
        data.filter((item) =>
          selectedRows.filter((elem) => elem.id === item.id).length > 0
            ? false
            : true
        )
      );
      setSelectedRows("");
    }
  };

  return (
    <Fragment>
      <BreadCrumb parent="Home" subparent="Table" title="Data Tables" />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader>
                <h5>{"Select Multiple and Delete Single Data"}</h5>
              </CardHeader>
              <CardBody>
                {selectedRows.length !== 0 && (
                  <div
                    className={`d-flex align-items-center justify-content-between bg-light-info p-2`}
                  >
                    <h4 className="text-muted m-0">Delete Selected Data?</h4>
                    <div className="btn btn-danger" onClick={handleDelete}>
                      Delete
                    </div>
                  </div>
                )}
                <DataTable
                  className="data-tables theme-scrollbar"
                  data={data}
                  columns={tableColumns}
                  striped={true}
                  center={true}
                  pagination
                  selectableRows
                  onSelectedRowsChange={handleRowSelected}
                  clearSelectedRows={toggleCleared}
                  noDataComponent={
                    <div style={{ padding: '10px', fontSize: '16px', height: '70px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      ไม่มีข้อมูลแสดงในขณะนี้
                    </div>
                }
                persistTableHead
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default DataTables;
