import React, { Fragment, useState } from "react";
import { getBrands, getColors } from "../../../../services/ecommerce.service";
import { filterBrand, filterColor, filterPrice } from "../../../../redux/ecommerce/Filter/action";
import { useDispatch, useSelector } from "react-redux";
import { Brand, Price, Colors, STEP, MIN, MAX } from "../../../../constant";
import { Range, getTrackBackground } from "react-range";
const Allfilters = () => {
  const data = useSelector((content) => content.data.productItems);
  const brands = getBrands(data);
  const colors = getColors(data);
  const filteredBrand = useSelector((content) => content.filters.brand);
  const dispatch = useDispatch();

  const clickBrandHendle = (event, brands) => {
    var index = brands.indexOf(event.target.value);

    if (event.target.checked === true) brands.push(event.target.value);
    else brands.splice(index, 1);

    dispatch(filterBrand(brands));
  };

  const colorHandle = (event, color) => {
    var elems = document.querySelectorAll(".color-selector ul li");
    [].forEach.call(elems, function (el) {
      el.classList.remove("active");
    });
    event.target.classList.add("active");
    dispatch(filterColor(color));
  };
  const [values, setValues] = useState([150, 650]);

  const priceHandle = (value) => {
    setValues(value);
    dispatch(filterPrice({ value }));
  };
  return (
    <Fragment>
      <div className='product-filter'>
        <h6 className='f-w-600'>{Brand}</h6>
        <div className='checkbox-animated mt-0'>
          {brands.map((brand, index) => {
            return (
              <label className='d-block' key={index}>
                <input className='checkbox_animated' onClick={(e) => clickBrandHendle(e, filteredBrand)} value={brand} defaultChecked={filteredBrand.includes(brand) ? true : false} id={brand} type='checkbox' data-original-title='' title='' />
                {brand}
              </label>
            );
          })}
        </div>
      </div>
      <div className='product-filter slider-product'>
        <h6 className='f-w-600'>{Colors}</h6>
        <div className='color-selector'>
          <ul>
            {colors.map((color, i) => {
              return <li className={color} key={i} title={color} onClick={(e) => colorHandle(e, color)}></li>;
            })}
          </ul>
        </div>
      </div>
      <div>
        <div className='product-filter pb-0'>
          <h6 className='f-w-600'>{Price}</h6>
          <Range
            values={values}
            step={STEP}
            min={MIN}
            max={MAX}
            onChange={(values) => {
              priceHandle(values);
            }}
            renderTrack={({ props, children }) => (
              <div
                className='price-range'
                onMouseDown={props.onMouseDown}
                onTouchStart={props.onTouchStart}
                style={{
                  ...props.style,
                  height: "36px",
                  display: "flex",
                  width: "100%",
                }}
              >
                <output style={{ marginTop: "30px" }}>{values[0]}</output>
                <div
                  ref={props.ref}
                  style={{
                    height: "5px",
                    width: "100%",
                    borderRadius: "4px",
                    background: getTrackBackground({
                      values,
                      colors: ["#ccc", "#4d8aff", "#ccc"],
                      min: MIN,
                      max: MAX,
                    }),
                    alignSelf: "center",
                  }}
                >
                  {children}
                </div>
                <output style={{ marginTop: "30px" }}>{values[1]}</output>
              </div>
            )}
            renderThumb={({ props }) => {
              const { key, ...restprops } = props;
              const prop = { ...restprops };
              return (
                <div
                  key={key}
                  {...restprops}
                  style={{
                    ...prop.style,
                    height: "16px",
                    width: "16px",
                    borderRadius: "60px",
                    backgroundColor: "#4d8aff",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    boxShadow: "0px 2px 6px #AAA",
                  }}
                ></div>
              );
            }}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default Allfilters;
