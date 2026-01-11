import Navbar from "../components/Navbar";
import PostCard from "../components/PostCard";
import CreatePost from "../components/CreatePost";

const Home = () => {
const posts = [
  {
    id: 1,
    user: "Gaurav",
    time: "2 hours ago",
    content: "This is my first post on this platform 🚀",
    likes: 12,
    commentsList: ["you are doing a good job till now"],
  },
  {
    id: 2,
    user: "Aman",
    time: "5 hours ago",
    content: "Learning React + Node feels amazing!",
    likes: 25,
    commentsList: [],
  },
  {
    id: 3,
    user: "Neha",
    time: "1 day ago",
    content: "Consistency is the key 🔥",
    likes: 40,
    commentsList: [],
  },
];



  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />

<div className="max-w-2xl mx-auto p-6">
  <CreatePost />

  {posts.map((post) => (
    <PostCard key={post.id} post={post} />
  ))}
</div>

    </div>
  );
};

export default Home;
