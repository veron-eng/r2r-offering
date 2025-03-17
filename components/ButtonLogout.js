"use client";
import { signOut } from "next-auth/react";

const ButtonLogout = () => {
    return <button className="btn btn-ghost" onClick={() =>
        signOut(undefined, { callbackUrl: "/" })}>Logout</button>
}

export default ButtonLogout;