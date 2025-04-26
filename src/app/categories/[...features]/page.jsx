import React from "react";

const CategoriesDetailsPage = async ({ params }) => {
  const { features } = await params;
  console.log(features);
  if (features.length === 3) {
    return <div>Features: {features[2]}</div>;
  }
  if (features.length === 2) {
    return <div>Features: {features[1]}</div>;
  }
  return (
    <div className="h-screen">
      <h2>Categories Details Page</h2>
    </div>
  );
};

export default CategoriesDetailsPage;
