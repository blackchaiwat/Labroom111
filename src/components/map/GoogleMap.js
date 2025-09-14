import React, { Fragment } from "react";
import BreadCrumb from "../../layout/Breadcrumb";
import { Container, Row} from "reactstrap";
import BasicMap from "./BasicMap";
import PolygonsMap from "./PolygonsMap";
import PolylineMap from "./PolylineMap";
import MarkerMap from "./MarkerMap";

const GoogleMaps = (props) => {
  return (
    <Fragment>
      <BreadCrumb parent="Home" subparent="Maps" title="Google Maps" />
      <Container fluid={true}>
        <Row>
          <BasicMap />
          <PolygonsMap />
          <PolylineMap />
          <MarkerMap />
        </Row>
      </Container>
    </Fragment>
  );
};

export default GoogleMaps;
