import React, { useEffect } from "react";

const MyComponent = ({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) => {
  useEffect(() => {
    document.title = title;

    const metaTitle = document.querySelector('meta[property="og:title"]');
    const metaDescription = document.querySelector(
      'meta[property="og:description"]'
    );
    const metaImage = document.querySelector('meta[property="og:image"]');

    if (metaTitle) {
      metaTitle.setAttribute("content", title);
    } else {
      const newMetaTitle = document.createElement("meta");
      newMetaTitle.setAttribute("property", "og:title");
      newMetaTitle.setAttribute("content", title);
      document.head.appendChild(newMetaTitle);
    }

    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    } else {
      const newMetaDescription = document.createElement("meta");
      newMetaDescription.setAttribute("property", "og:description");
      newMetaDescription.setAttribute("content", description);
      document.head.appendChild(newMetaDescription);
    }

    if (metaImage) {
      metaImage.setAttribute("content", image);
    } else {
      const newMetaImage = document.createElement("meta");
      newMetaImage.setAttribute("property", "og:image");
      newMetaImage.setAttribute("content", image);
      document.head.appendChild(newMetaImage);
    }
  }, [title, description, image]);

  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <img src={image} alt={title} />
    </div>
  );
};

const SSRComponent = () => (
  <MyComponent
    title="Dynamic Page Title"
    description="This is a description for the dynamic page."
    image="https://as1.ftcdn.net/v2/jpg/02/75/28/44/1000_F_275284479_U4cKD05wWRsEnL2rWRLvxZ0MxRgUbihv.jpg"
  />
);

export default SSRComponent;
