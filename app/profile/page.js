"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Profile from "@components/Profile";

const MyProfile = () => {
  const { data: session } = useSession();
  //   const router = useRouter();

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPrompts = async () => {
      const response = await fetch(`/api/user/${session?.user.id}/posts`);
      const data = await response.json();
      setPosts(data);
      console.log(data);
    };
    if (session?.user.id) fetchPrompts();
  }, []);

  const handleEdit = () => {};

  const handleDelete = async () => {};
  return (
    <Profile
      name="My"
      desc="Welcome to your Profile"
      data={posts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};
export default MyProfile;
