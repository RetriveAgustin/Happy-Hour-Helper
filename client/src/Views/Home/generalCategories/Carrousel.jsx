import React from "react";
import Card from "../../../components/Card/Card";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Carrousel({ category, products }) {
  let filteredProducts = products.filter((instance) => {
    return instance.Categories[0].id === category.id;
  });
  let presentableProducts = [];
  for (let i = 0; i < 8; i++) {
    presentableProducts.push(filteredProducts[i]);
  }
  console.log(presentableProducts);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div style={{ display: "block", width: "80vw", color: "white"}}>
      <Carousel
        centerMode={true}
        responsive={responsive}
        infinite={true}
      >
        <div>
          <Card product={presentableProducts[0]} />
        </div>
        <div>
          <Card product={presentableProducts[1]} />
        </div>
        <div>
          <Card product={presentableProducts[2]} />
        </div>
        <div>
          <Card product={presentableProducts[3]} />
        </div>
        <div>
          <Card product={presentableProducts[4]} />
        </div>
        <div>
          <Card product={presentableProducts[5]} />
        </div>
        <div>
          <Card product={presentableProducts[6]} />
        </div>
        <div>
          <Card product={presentableProducts[7]} />
        </div>
      </Carousel>
    </div>
  );
}

export default Carrousel;
