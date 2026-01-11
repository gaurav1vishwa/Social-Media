import { useState } from "react";

const PostCard = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(post.likes);
  const [showComments, setShowComments] = useState(false);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState(post.commentsList || []);

  const handleLike = () => {
    setLiked(!liked);
    setLikes((prev) => (liked ? prev - 1 : prev + 1));
  };

  const handleAddComment = (e) => {
    e.preventDefault();
    if (!comment.trim()) return;

    setComments([...comments, comment]);
    setComment("");
  };

  return (
    <div className="bg-gray-800 rounded-lg p-5 mb-6">
      {/* User Info */}
      <div className="flex items-center mb-3">
        <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
          {post.user[0]}
        </div>
        <div className="ml-3">
          <p className="font-semibold">{post.user}</p>
          <p className="text-sm text-gray-400">{post.time}</p>
        </div>
      </div>

      {/* Content */}
      <p className="text-gray-200 mb-4">{post.content}</p>

      {/* Actions */}
      <div className="flex gap-6 text-gray-400 mb-3">
        <button
          onClick={handleLike}
          className={liked ? "text-red-500" : ""}
        >
          ❤️ {likes}
        </button>

        <button
          onClick={() => setShowComments(!showComments)}
          className="hover:text-blue-400"
        >
          💬 {comments.length}
        </button>
      </div>

      {/* Comments Section */}
      {showComments && (
        <div className="mt-3">
          {/* Existing comments */}
          <div className="space-y-2 mb-3">
            {comments.map((cmt, index) => (
              <div
                key={index}
                className="bg-gray-700 px-3 py-2 rounded text-sm"
              >
                {cmt}
              </div>
            ))}
          </div>

          {/* Add comment */}
          <form onSubmit={handleAddComment} className="flex gap-2">
            <input
              type="text"
              placeholder="Write a comment..."
              className="flex-1 bg-gray-700 text-white px-3 py-2 rounded outline-none"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <button
              type="submit"
              className="bg-blue-600 px-4 py-2 rounded"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default PostCard;
