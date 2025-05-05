'use client'
import { useAuth } from "@/context/AuthContext";
import { signOut } from "@aws-amplify/auth";
import { useRouter } from "next/navigation";
import React from "react";

const HomePage: React.FC = () => {
  const router = useRouter();
  
  const handleLogout = () => {
    signOut; // reset auth state
    router.push("/login"); // redirect to login
  };
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This is the main page of the application.</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default HomePage;
