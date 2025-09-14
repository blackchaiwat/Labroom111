import React, { Fragment, useState, useEffect } from "react";
import { Col, Row, Card, CardBody } from "reactstrap";
import axios from "axios";
 import { Gallery, Item } from "react-photoswipe-gallery";

const PhotosTab = () => {
  let imagesData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const [smallImages, setsmallImages] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.PUBLIC_URL}/api/image-big-light.json`)
      .then((response) => {
        setsmallImages(response.data.src);
      });
  }, []);

  const images = require.context("../../assets/images", true);
  const dynamicImage = (image) => {
    return images(`./${image}`);
  };

  return (
    <Fragment>
      <Row>
        {smallImages.length > 0 ? (
          <Col sm="12">
            <Card>
              <CardBody className="my-gallery row gallery-with-description">
                 <Gallery>
                  {imagesData.map((data, key) => (
                    <Item
                      key={data}
                      original={dynamicImage(smallImages[key])}
                      thumbnail={dynamicImage(smallImages[key])}
                      width="1024"
                      height="768"
                      id={`image-${key}`}
                    >
                      {({ ref, open }) => (
                        <figure className="col-xl-3 col-sm-6" key={key}>
                          <a href="#javascript">
                            <img
                              ref={ref}
                              onClick={open}
                              src={require(`../../assets/images/${smallImages[key]}`)}
                              alt="Gallery"
                              className="img-thumbnail"
                            />
                            <div className="caption">
                              <h4>Portfolio Title</h4>
                              <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
                            </div>
                          </a>
                        </figure>
                      )}
                    </Item>
                  ))}
                </Gallery> 
              </CardBody>
            </Card>
          </Col>
        ) : (
          ""
        )}
      </Row>
    </Fragment>
  );
};

export default PhotosTab;
