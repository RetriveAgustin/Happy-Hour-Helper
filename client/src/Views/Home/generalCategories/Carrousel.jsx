import React from "react";
import Card from "../../../components/Card/Card";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Skeleton from "@mui/material/Skeleton";

function Carrousel({ category, products }) {
  let filteredProducts = products.length
    ? products.filter((instance) => {
        return instance.Categories[0].id === category.id;
      })
    : false;

  const responsive = {
    superLargeDesktop: {
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

  return filteredProducts !== false ? (
    <div style={{ display: "block", width: "80vw", color: "black" }}>
      <Carousel centerMode={true} responsive={responsive} infinite={true}>
        {filteredProducts[0] ? (
          <div>
            <Card product={filteredProducts[0]} />
          </div>
        ) : (
          <></>
        )}
        {filteredProducts[1] ? (
          <div>
            <Card product={filteredProducts[1]} />
          </div>
        ) : (
          <></>
        )}
        {filteredProducts[2] ? (
          <div>
            <Card product={filteredProducts[2]} />
          </div>
        ) : (
          <></>
        )}
        {filteredProducts[3] ? (
          <div>
            <Card product={filteredProducts[3]} />
          </div>
        ) : (
          <></>
        )}
        {filteredProducts[4] ? (
          <div>
            <Card product={filteredProducts[4]} />
          </div>
        ) : (
          <></>
        )}
        {filteredProducts[5] ? (
          <div>
            <Card product={filteredProducts[5]} />
          </div>
        ) : (
          <></>
        )}
        {filteredProducts[6] ? (
          <div>
            <Card product={filteredProducts[6]} />
          </div>
        ) : (
          <></>
        )}
        {filteredProducts[7] ? (
          <div>
            <Card product={filteredProducts[7]} />
          </div>
        ) : (
          <></>
        )}
      </Carousel>
    </div>
  ) : (
    <div style={{ display: "block", width: "80vw", color: "white" }}>
      <Carousel centerMode={true} responsive={responsive} infinite={true}>
        <div>
          <Skeleton
            sx={{ bgcolor: "grey.900" }}
            variant="rectangular"
            width="250px"
            height="440px"
          />
        </div>
        <div>
          <Skeleton
            sx={{ bgcolor: "grey.900" }}
            variant="rectangular"
            width="250px"
            height="440px"
          />
        </div>
        <div>
          <Skeleton
            sx={{ bgcolor: "grey.900" }}
            variant="rectangular"
            width="250px"
            height="440px"
          />
        </div>
        <div>
          <Skeleton
            sx={{ bgcolor: "grey.900" }}
            variant="rectangular"
            width="250px"
            height="440px"
          />
        </div>
        <div>
          <Skeleton
            sx={{ bgcolor: "grey.900" }}
            variant="rectangular"
            width="250px"
            height="440px"
          />
        </div>
        <div>
          <Skeleton
            sx={{ bgcolor: "grey.900" }}
            variant="rectangular"
            width="250px"
            height="440px"
          />
        </div>
        <div>
          <Skeleton
            sx={{ bgcolor: "grey.900" }}
            variant="rectangular"
            width="250px"
            height="440px"
          />
        </div>
        <div>
          <Skeleton
            sx={{ bgcolor: "grey.900" }}
            variant="rectangular"
            width="250px"
            height="440px"
          />
        </div>
      </Carousel>
    </div>
  );
}

export default Carrousel;
