import React from "react";

export const NavbarComponent = ({text}: {text: string}) =>
    <div className="navbar bg-blue-200">
        <p>{text}</p>
    </div>;