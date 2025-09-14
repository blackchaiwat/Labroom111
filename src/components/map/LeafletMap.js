import  { Fragment } from "react";
import BreadCrumb from "../../layout/Breadcrumb";
import { Container, Row, Col, Card, CardHeader, CardBody } from "reactstrap";
import {AustraliaMap,IndiaMap,PopupinFeatureGroup,USAMap,WorldMap,} from "../../constant";
import {FeatureGroup,MapContainer,Popup,Rectangle,SVGOverlay,TileLayer,} from "react-leaflet";
const LeafletMapComp = () => {
  const centerAustralia = [-25.2744, 130.7751];
  const rectangleAustralia = [
    [-23.2744, 132.7751],
    [-30.2744, 144.7751],
  ];
  const purpleOptions = { color: "purple" };

  const positionIndia = [20.5937, 78.9629];
  const positionUSA = [51.505, -0.09];
  const boundsIndia = [[21.5937, 80.9629],[22.5937, 70.9629],];


  return (
    <Fragment>
      <BreadCrumb parent="Home" subparent="Maps" title="Leaflet Maps" />
      <Container fluid={true}>
        <Row>
          <Col xl="6" md="12">
            <Card>
              <CardHeader>
                <h5>{WorldMap}</h5>
              </CardHeader>
              <CardBody>
                <div id="gmap-simple">
                  <MapContainer
                    className="jvector-map-height"
                    style={{ height: 389, width: "100%" }}
                    center={[50, 10]}
                    zoom={1}
                    maxZoom={10}
                    attributionControl={true}
                    zoomControl={true}
                    doubleClickZoom={true}
                    scrollWheelZoom={true}
                    dragging={true}
                    animate={true}
                    easeLinearity={0.35}
                  >
                    <TileLayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />
                  </MapContainer>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col xl="6" md="12">
            <Card>
              <CardHeader>
                <h5>{USAMap}</h5>
              </CardHeader>
              <CardBody>
                <div id="gmap-simple">
                  <MapContainer
                    className="jvector-map-height"
                    style={{ height: 389, width: "100%" }}
                    zoom={13}
                    center={positionUSA}
                    attributionControl={true}
                    zoomControl={true}
                    doubleClickZoom={true}
                    scrollWheelZoom={true}
                    dragging={true}
                    animate={true}
                    easeLinearity={0.35}
                  >
                    <TileLayer
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                  </MapContainer>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col xl="6" md="12">
            <Card>
              <CardHeader>
                <h5>{IndiaMap}</h5>
              </CardHeader>
              <CardBody>
                <div>
                  <MapContainer
                    className="jvector-map-height"
                    style={{ height: 389, width: "100%" }}
                    zoom={5}
                    center={positionIndia}
                    zoomControl={true}
                    doubleClickZoom={true}
                    scrollWheelZoom={true}
                    dragging={true}
                    animate={true}
                  >
                    <TileLayer
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <SVGOverlay
                      attributes={{ stroke: "blue" }}
                      bounds={boundsIndia}
                    >
                      <rect
                        x="0"
                        y="0"
                        width="100%"
                        height="100%"
                        fill="white"
                      />
                      <circle r="5" cx="10" cy="10" fill="skyblue" />
                      <text x="50%" y="50%" stroke="blue">
                        {Text}
                      </text>
                    </SVGOverlay>
                  </MapContainer>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col xl="6" md="12">
            <Card>
              <CardHeader>
                <h5>{AustraliaMap}</h5>
              </CardHeader>
              <CardBody>
                <MapContainer
                  className="jvector-map-height"
                  style={{ height: 389, width: "100%" }}
                  zoom={4}
                  center={centerAustralia}
                  zoomControl={true}
                  doubleClickZoom={true}
                  scrollWheelZoom={true}
                  dragging={true}
                  animate={true}
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />

                  <FeatureGroup pathOptions={purpleOptions}>
                    <Popup>{PopupinFeatureGroup}</Popup>
                    <Rectangle bounds={rectangleAustralia} />
                  </FeatureGroup>
                </MapContainer>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default LeafletMapComp;
