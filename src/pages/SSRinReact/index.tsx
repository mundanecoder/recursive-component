// Import React and React Helmet
import { Helmet } from "react-helmet";

// Define your component
const MyComponent = ({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) => {
  return (
    <div>
      {/* React Helmet for managing meta tags */}
      <Helmet>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
      </Helmet>

      {/* Your page content */}
      <h1>{title}</h1>
      <p>{description}</p>
      <img src={image} alt={title} />
    </div>
  );
};

// Example usage of MyComponent
const SSRComponent = () => (
  <MyComponent
    title="Dynamic Page Title"
    description="This is a description for the dynamic page."
    image="https://as1.ftcdn.net/v2/jpg/02/75/28/44/1000_F_275284479_U4cKD05wWRsEnL2rWRLvxZ0MxRgUbihv.jpg"
  />
);

export default SSRComponent;
