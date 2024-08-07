import { useState, useEffect } from "react";

// CommentsSection component to handle blog comments
export default function CommentsSection({ blogId }) {
  const [comments, setComments] = useState([]); // State for comments
  const [newComment, setNewComment] = useState(""); // State for new comment input

  useEffect(() => {
    // Simulate fetching comments from an API
    setComments([
      { id: 1, text: "Great post!" },
      { id: 2, text: "Very informative." },
    ]);
  }, [blogId]); // Run effect when blogId changes

  // Handle new comment submission
  const handleCommentSubmit = (e) => {
    e.preventDefault();
    const newCommentObj = { id: comments.length + 1, text: newComment };
    setComments([...comments, newCommentObj]); // Add new comment to state
    setNewComment(""); // Clear input field
  };

  return (
    <div>
      <h2>Comments</h2>
      <ul>
        {/* Loop through comments and display each */}
        {comments.map((comment) => (
          <li key={comment.id}>{comment.text}</li>
        ))}
      </ul>
      {/* Form to add new comment */}
      <form onSubmit={handleCommentSubmit}>
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        ></textarea>
        <button type="submit">Add Comment</button>
      </form>
    </div>
  );
}
