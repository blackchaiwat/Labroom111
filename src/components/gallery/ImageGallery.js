import React, { Fragment, useState, useEffect } from "react";
import BreadCrumb from "../../layout/Breadcrumb";
import { Container, Row, Col, Card, CardHeader, CardBody, } from "reactstrap";
import { IMAGE_GALLERY } from "../../constant";
import axios from "axios";
import { Gallery, Item } from "react-photoswipe-gallery";

const ImageGallery = () => {
  const [smallImages, setsmallImages] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.PUBLIC_URL}/api/image-big-light.json`)
      .then((response) => {
        setsmallImages(response.data.src);
      });
  }, []);

  let imagesData = [
    { width: 150, height: 150, index: 0 },
    { width: 150, height: 150, index: 2 },
    { width: 150, height: 150, index: 1 },
    { width: 150, height: 150, index: 3 },
    { width: 150, height: 150, index: 8 },
    { width: 150, height: 150, index: 5 },
    { width: 150, height: 150, index: 4 },
    { width: 150, height: 150, index: 9 },
    { width: 150, height: 150, index: 6 },
    { width: 150, height: 150, index: 7 },
    { width: 150, height: 150, index: 11 },
    { width: 150, height: 150, index: 10 },
  ];
  const images = require.context("../../assets/images", true);
  const dynamicImage = (image) => {
    return images(`./${image}`);
  };
  return (
    <Fragment>
      <BreadCrumb parent="Home" subparent="Gallery" title="Gallery Grid" />
      <Container fluid={true}>
        <Row>
          {smallImages.length > 0 ? (
            <Col sm="12">
              <Card>
                <CardHeader>
                  <h5>{IMAGE_GALLERY}</h5>
                </CardHeader>
                <CardBody>
                  <div className="row my-gallery">
                  <div className="pswp-gallery row mx-0 p-0" id="my-test-gallery">
                     <Gallery>
                      {imagesData.map((data, key) => (
                        <Item
                          key={key}
                          original={dynamicImage(smallImages[data.index])}
                          thumbnail={dynamicImage(smallImages[data.index])}
                          width="1024"
                          height="768"
                          id={`image-${key}`}
                        >
                          {({ ref, open }) => (
                            <figure className="col-xl-3 col-sm-6" key={key}>
                              <img
                                ref={ref}
                                onClick={open}
                                src={require(`../../assets/images/${
                                  smallImages[data.index]
                                }`)}
                                alt="Gallery"
                                className="img-thumbnail"
                              />
                            </figure>
                          )}
                        </Item>
                      ))}
                    </Gallery> 
                  </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          ) : (
            ""
          )}
        </Row>
      </Container>
    </Fragment>
  );
};

export default ImageGallery;
