import { useState } from "react";

const CreatePost = () => {
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!content.trim()) return;

    console.log("NEW POST:", content);

    setContent("");
  };

  return (
    <div className="bg-gray-800 rounded-lg p-5 mb-6">
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="What's on your mind?"
          className="w-full bg-gray-700 text-white p-3 rounded resize-none outline-none"
          rows="3"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <div className="flex justify-end mt-3">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded"
          >
            Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
