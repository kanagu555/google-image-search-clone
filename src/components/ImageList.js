import React from "react";

const ImageList = (props) => {
  const images = props.images.map(({ id, description, urls }) => {
    return (
      <img
        key={id}
        src={urls.regular}
        alt={description}
        width="250px"
        height="200px"
      />
    );
  });

  return <div>{images}</div>;
};

export default ImageList;
