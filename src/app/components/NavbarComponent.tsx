import React from "react";
import Link from "next/link";

export const NavbarComponent = () =>
    <div className="navbar bg-blue-200">
        <Link href="/" className="text-xl pl-5">Aufgabenliste</Link>
    </div>;