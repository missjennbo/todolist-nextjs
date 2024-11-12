import {UserDropdownComponent} from "@/app/components/UserDropdownComponent";
import React from "react";
import {NavbarComponent} from "@/app/components/NavbarComponent";

export default function Home() {
    return (
        <main>
            <NavbarComponent/>
            <UserDropdownComponent/>
        </main>
    );
}
