import { redirect } from "next/navigation";

const getPosts = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}posts`);
  const data = await res.json();
  // if (data) {
  //   redirect(`/posts/${data[0].id}`);
  // }
  return data;
};

export default getPosts;
