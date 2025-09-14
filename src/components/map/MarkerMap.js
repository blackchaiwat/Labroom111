import { useState } from "react";
import { Card, CardBody, CardHeader, Col } from "reactstrap";
import { GoogleMap, InfoWindow, useJsApiLoader } from "@react-google-maps/api";
import { MarkerMapTitle } from "../../constant";

export default function MarkerMap() {
  const [location] = useState({
    address: false,
    mapPosition: { lat: 18.5204, lng: 73.8567 },
    markerPosition: { lat: 18.5204, lng: 73.8567 },
  });
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyAjeJEPREBQFvAIqDSZliF0WjQrCld-Mh0",
  });

  const mapStyles = {
    height: "500px",
    width: "100%",
  };
  const center = {
    lat: 37.7749,
    lng: -122.4194,
  };
  return (
    <Col xl={6}>
      <Card>
        <CardHeader>
          <h5>{MarkerMapTitle}</h5>
        </CardHeader>
        <CardBody>
          <div className="map-js-height">
            <div id="gmap-simple" className="map-block">
              {isLoaded ? (
                <GoogleMap
                  mapContainerStyle={mapStyles}
                  center={center}
                  zoom={10}
                >
                  {location.address ? (
                    <InfoWindow
                      position={{
                        lat: location.markerPosition.lat + 0.0018,
                        lng: location.markerPosition.lng,
                      }}
                    >
                      <div>
                        <span style={{ padding: 0, margin: 0 }}>
                          {"Current Location"}
                        </span>
                      </div>
                    </InfoWindow>
                  ) : (
                    ""
                  )}
                </GoogleMap>
              ) : (
                ""
              )}
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
}
