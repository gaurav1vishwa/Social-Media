const ProfileHeader = ({ user }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-6 mb-6 flex items-center gap-6">
      {/* Avatar */}
      <div className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center text-3xl font-bold text-white">
        {user.name[0]}
      </div>

      {/* User Info */}
      <div>
        <h2 className="text-2xl font-bold">{user.name}</h2>
        <p className="text-gray-400">@{user.username}</p>
        <p className="text-gray-300 mt-2">{user.bio}</p>
      </div>
    </div>
  );
};

export default ProfileHeader;
