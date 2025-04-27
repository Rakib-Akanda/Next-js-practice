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
// eta hocche catch all segment jodi ami params e ekhadik route de tobe eta hobe like app/example1/example2/ ekahne example1 and 2 te ekshate catch korar jonno use kora hoi fille name create korar time [...fileName]
/**
-------------Route--------	Example URL----	params
app/shop/[...slug]/page.js	/shop/a   	    { slug: ['a'] }
app/shop/[...slug]/page.js	/shop/a/b	      { slug: ['a', 'b'] }
app/shop/[...slug]/page.js	/shop/a/b/c	    { slug: ['a', 'b', 'c'] }


*/
