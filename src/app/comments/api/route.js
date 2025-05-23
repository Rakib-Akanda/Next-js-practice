export const GET = async () => {
  // return Response.json(
  //   {
  //     comments,
  //   }
  // );
  return Response.json(comments, {
    headers: {
      "set-cookie": "theme=light",
    },
  });
};
export const POST = async (request) => {
  const newComment = await request.json();
  comments.push({
    id: comments.length + 1,
    text: newComment.text,
  });
  return Response.json({
    message: "new comment added",
    comments,
  });
};

const comments = [
  { id: 1, text: "comments 1" },
  { id: 2, text: "comments 2" },
  { id: 3, text: "comments 3" },
  { id: 4, text: "comments 4" },
  { id: 5, text: "comments 5" },
  { id: 6, text: "comments 6" },
];
