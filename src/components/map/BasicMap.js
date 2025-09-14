import { Card, CardBody, CardHeader, Col } from "reactstrap";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { BasicDemo } from "../../constant";

export default function BasicMap() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAjeJEPREBQFvAIqDSZliF0WjQrCld-Mh0",
  });
  const mapStyles = {
    height: "500px",
    width: "100%",
  };
  const defaultCenter = {
    lat: 37.7749,
    lng: -122.4194,
  };
  return (
    <Col xl={6}>
      <Card>
        <CardHeader>
          <h5>{BasicDemo}</h5>
        </CardHeader>
        <CardBody>
          <div className='map-js-height'>
            <div id='gmap-simple' className='map-block'>
              {isLoaded ? <GoogleMap mapContainerStyle={mapStyles} center={defaultCenter} zoom={10} /> : "Loading"}
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
}
