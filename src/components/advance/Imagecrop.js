import React, { Fragment,useState,useRef } from 'react';
import BreadCrumb from '../../layout/Breadcrumb'
import {Container,Card,CardHeader,CardBody, Row, Col,Label, Input, FormGroup} from 'reactstrap'
import ReactCrop, { centerCrop, makeAspectCrop } from 'react-image-crop';
import {ImageCropper} from '../../constant'
import { useDebounceEffect } from './useDebounceEffect';
import { canvasPreview } from './canvasPreview';

function centerAspectCrop(mediaWidth,mediaHeight,aspect) {
  return centerCrop(makeAspectCrop({unit: "%",width: 90,},aspect,mediaWidth,mediaHeight),mediaWidth,mediaHeight);
}

const Imagecropper = ()  => {
  const [imgSrc, setImgSrc] = useState("");
  const previewCanvasRef = useRef(null);
  const imgRef = useRef(null);
  const [crop, setCrop] = useState();
  const [completedCrop, setCompletedCrop] = useState();
  const [scale, setScale] = useState(1);
  const [rotate, setRotate] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [aspect, setAspect] = useState(16 / 9);


  function onSelectFile(e) {
    if (e.target.files && e.target.files.length > 0) {
      setCrop(undefined); // Makes crop preview update between images.
      const reader = new FileReader();
      reader.addEventListener("load", () =>
        setImgSrc(reader.result?.toString() || "")
      );
      reader.readAsDataURL(e.target.files[0]);
    }
  }

  function onImageLoad(e) {
    if (aspect) {
      const { width, height } = e.currentTarget;
      setCrop(centerAspectCrop(width, height, aspect));
    }
  }

  useDebounceEffect(async () => {
      if ( completedCrop?.width && completedCrop?.height && imgRef.current && previewCanvasRef.current) {
        canvasPreview(imgRef.current,previewCanvasRef.current,completedCrop,scale,rotate);
      }
    },100,[completedCrop, scale, rotate]
  );

  return (
    <Fragment>
    <BreadCrumb parent="Home" subparent="Advance" title="Image Cropper"/>
    <Container fluid={true}>
      <Row>
        <Col>
        <Card>
          <CardHeader>
              <h5>{ImageCropper}</h5>
          </CardHeader>
          <CardBody>
            <FormGroup>
              <Input type="file" accept="image/*" onChange={onSelectFile} />
            </FormGroup>
            <Row>
              <div className='col-xl-6 mb-3'>
                <Label htmlFor="scale-input">Scale: </Label>
                <Input id="scale-input" type="number" step="0.1" value={scale} disabled={!imgSrc} onChange={(e) => setScale(Number(e.target.value))}/>
              </div>
              <div className='col-xl-6 mb-3'>
                <Label  htmlFor="rotate-input">Rotate: </Label>
                <Input id="rotate-input" type="number" value={rotate} disabled={!imgSrc} onChange={(e) =>setRotate(Math.min(180, Math.max(-180, Number(e.target.value))))}/>
              </div>
            </Row>
            {!!imgSrc && (
              <ReactCrop crop={crop} onChange={(_, percentCrop) => setCrop(percentCrop)} onComplete={(c) => setCompletedCrop(c)} aspect={aspect}>
                  <img ref={imgRef} alt="Crop me" src={imgSrc} onLoad={onImageLoad} style={{ transform: `scale(${scale}) rotate(${rotate}deg)`,}}/>
              </ReactCrop>
            )}
            <div className='mt-3'>
              {!!completedCrop && (
                <canvas
                  ref={previewCanvasRef} style={{ objectFit: "contain", width: completedCrop.width, height: completedCrop.height,}}
                />
              )}
            </div>
          </CardBody>
        </Card>
        </Col>
      </Row>
      </Container>
      </Fragment>

  );
}

export default Imagecropper;