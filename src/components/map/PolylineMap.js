import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { Card, CardBody, CardHeader, Col } from "reactstrap";
import { Polylines } from "../../constant";

const PolylineMap = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyAjeJEPREBQFvAIqDSZliF0WjQrCld-Mh0",
  });
  const mapStyles = { height: "500px", width: "100%" };
  const center = { lat: 37.7749, lng: -122.4194 };
  return (
    <Col xl={6}>
      <Card>
        <CardHeader>
          <h5>{Polylines}</h5>
        </CardHeader>
        <CardBody>
          <div className="map-js-height">
            <div id="gmap-simple" className="map-block">
              {isLoaded ? (
                <GoogleMap
                  mapContainerStyle={mapStyles}
                  center={center}
                  zoom={10}
                ></GoogleMap>
              ) : (
                "loading"
              )}
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
export default PolylineMap;
