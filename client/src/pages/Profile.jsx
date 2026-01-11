import Navbar from "../components/Navbar";
import ProfileHeader from "../components/ProfileHeader";
import PostCard from "../components/PostCard";

const Profile = () => {
  // Dummy user data
  const user = {
    name: "Gaurav",
    username: "gaurav_dev",
    bio: "Full-stack developer | React & Node 🚀",
  };

  // Dummy user posts
  const posts = [
    {
      id: 1,
      user: "Gaurav",
      time: "1 day ago",
      content: "Building my own social media platform 💪",
      likes: 20,
      commentsList: ["Awesome!", "Keep going 🔥"],
    },
    {
      id: 2,
      user: "Gaurav",
      time: "3 days ago",
      content: "Learning by building is the best way.",
      likes: 35,
      commentsList: [],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />

      <div className="max-w-2xl mx-auto p-6">
        <ProfileHeader user={user} />

        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Profile;
