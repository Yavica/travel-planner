import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="border p-4 rounded shadow flex items-center gap-4">
      <img
        src={user.avatar_url}
        alt={`${user.login} avatar`}
        className="w-16 h-16 rounded-full"
      />
      <div>
        <h2 className="font-bold text-lg">{user.login}</h2>
        <p>
          <a
            href={user.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            View Profile
          </a>
        </p>
        {user.site_admin && <span className="text-sm text-red-500">Admin</span>}
      </div>
    </div>
  );
};

export default UserCard;
