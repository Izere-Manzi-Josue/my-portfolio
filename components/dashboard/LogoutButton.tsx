"use client";

import { signOut } from "next-auth/react";

export default function LogoutButton() {
  const handleLogout = async () => {
    await signOut({
      callbackUrl: "/login",
    });
  };

  return (
    <button
      type="button"
      onClick={handleLogout}
      className="rounded-lg bg-red-500 px-4 py-2 text-white"
    >
      Logout
    </button>
  );
}
