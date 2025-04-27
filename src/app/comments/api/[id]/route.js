export const PATCH = async (request, { params }) => {
  const id = (await params).id;
  const body = await request.json();
  const index = comments.findIndex((comment) => comment.id === parseInt(id));
  comments[index] = {
    text: body.text,
  };
  return Response.json({
    message: "Comment Update",
    comments,
  });
};
export const DELETE = async (request, { params }) => {
  const id = (await params).id;
  const newComments = comments.filter((c) => c.id !== parseInt(id));
  return Response.json({
    message: "Comment Deleted",
    newComments,
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
