"use client";
import { useAuth } from "@/context/AuthContext";
import { signOut } from "@aws-amplify/auth";
import { useRouter } from "next/navigation";
import React from "react";

const HomePage: React.FC = () => {
  const router = useRouter();
  const { setUser } = useAuth();

  const handleLogout = () => {
    signOut();
    setUser(null); // reset auth state
    router.push("/login"); // redirect to login
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#f0f4f8",
        color: "#333",
      }}
    >
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
        Welcome to the Home Page
      </h1>
      <p
        style={{
          fontSize: "1.5rem",
          marginBottom: "2rem",
          textAlign: "center",
          maxWidth: "600px",
        }}
      >
        This is the main page of the application. Explore the features and enjoy
        your experience!
      </p>
      <button
        onClick={handleLogout}
        style={{
          padding: "0.75rem 1.5rem",
          fontSize: "1rem",
          color: "#fff",
          backgroundColor: "#007bff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          transition: "background-color 0.3s ease",
        }}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#0056b3")}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#007bff")}
      >
        Logout
      </button>
    </div>
  );
};

export default HomePage;
