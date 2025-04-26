const getDetailsPost = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return data;
};
// export const metadata = {
//   title: "Post Details",
//   description: "Super Powerful next Website",
// };
export const generateMetadata = async ({ params }) => {
  const id = (await params).id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const postData = await res.json();

  return {
    title: `${postData.title}`,
    description: `${postData.body}`,
    keywords: `${postData.body.slice(" ")}`,
  };
};
const postDetailPage = async ({ params }) => {
  const id = (await params).id;
  const postDetails = await getDetailsPost(id);
  // console.log(postDetails);
  // console.log(id);
  return (
    <div>
      <div className="border-2 p-6 m-6">
        <div>
          <h3 className="font-bold">Title: {postDetails.title}</h3>
          <h6>Body: {postDetails.body}</h6>
        </div>
      </div>
    </div>
  );
};

export default postDetailPage;
