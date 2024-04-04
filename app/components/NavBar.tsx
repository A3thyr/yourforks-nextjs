"use client";

import Link from "next/link";
import { FC } from "react";
import AuthModal from "./AuthModal";
import { useContext } from "react";
import { AuthenticationContext } from "../context/AuthContext";
import useAuth from "../../hooks/useAuth";

const NavBar: FC = () => {
  const { data, loading } = useContext(AuthenticationContext);

  const { signout } = useAuth();
  return (
    <nav className="bg-white p-2 flex justify-between">
      <Link href="/" className="font-bold text-gray-700 text-2xl">
        YourForks
      </Link>
      <div>
        {loading ? null : (
          <div className="flex">
            {data ? (
              <button
                onClick={signout}
                className="bg-blue-400 text-white border p-1 px-4 rounded mr-3"
              >
                Logout
              </button>
            ) : (
              <>
                <AuthModal isSignIn={true} />
                <AuthModal isSignIn={false} />
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
