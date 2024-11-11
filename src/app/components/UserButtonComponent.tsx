import React from 'react';
import Link from "next/link";

function UserButtonComponent() {
    return (
        <div className="p-5 my-5 bg-sky-500 text-white text-xl hover:bg-sky-600">
            <Link href="/user">A fancy styled button that produces an error</Link>
        </div>
    );
}

export default UserButtonComponent;