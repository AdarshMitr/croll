import React from "react";
import user from "../img/user-icon.png";
const commentsData = [
  {
    name: "Adarsh Kumar Patel",
    text: "That's awesome.",
    replies: [
      {
        name: "Adarsh Kumar Patel",
        text: "Lorem ipsum dolor sit amet",
        replies: [
          {
            name: "Adarsh Kumar Patel",
            text: "Lorem ipsum dolor sit amet",
            replies: [
              {
                name: "Adarsh Kumar Patel",
                text: "Lorem ipsum dolor sit amet",
                replies: [],
              },
              {
                name: "Adarsh Kumar Patel",
                text: "Lorem ipsum dolor sit amet",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Adarsh Kumar Patel",
    text: "Lorem ipsum dolor sit amet",
    replies: [],
  },
  {
    name: "Adarsh Kumar Patel",
    text: "Lorem ipsum dolor sit amet",
    replies: [],
  },
  {
    name: "Adarsh Kumar Patel",
    text: "Lorem ipsum dolor sit amet",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
      <img alt="user" src={user} className="w-10 h-10" />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  //don't use indexes as keys
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment  data={comment} />
      <div className="pl-5 border border-l black ml-5">
        <CommentsList comments={comment.replies}/>
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
