import getPosts from "@/FetchData/postApi";
import Link from "next/link";

const PostPage = async () => {
  const postsData = await getPosts();
  //   console.log(postsData);
  return (
    <div className="m-10 ">
      <h6 className="font-black">All Posts</h6>
      <div className="grid grid-cols-4 gap-6">
        {postsData?.slice(0, 20)?.map((post) => (
          <div key={post.id} className="border-2 p-6">
            <div>
              <h3 className="font-bold">Title: {post.title}</h3>
              <h6>Body: {post.body}</h6>
            </div>
            <div className="">
              <button className="btn btn-primary my-3">
                <Link href={`/posts/${post.id}`}>See Details</Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostPage;
