import React, { Fragment, useState, useEffect } from "react";
import BreadCrumb from "../../layout/Breadcrumb";
import { Container, Row, Col, Card, CardHeader, CardBody, } from "reactstrap";
import { IMAGE_GALLERY } from "../../constant";
import axios from "axios";
import { Gallery, Item } from "react-photoswipe-gallery";
const ImageWithDesc = () => {
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

  let imagesData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <Fragment>
      <BreadCrumb
        parent="Home"
        subparent="Gallery"
        title="Gallery Grid With Description"
      />
      <Container fluid={true}>
        <Row>
          {smallImages.length > 0 ? (
            <Col sm="12">
              <Card>
                <CardHeader>
                  <h5>{IMAGE_GALLERY}</h5>
                </CardHeader>
                <CardBody>
                  <div className="my-gallery row gallery-with-description">
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

export default ImageWithDesc;