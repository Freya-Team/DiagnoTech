import React from "react";
import { Link } from "@inertiajs/react";

export default function () {
    return (
        <div>
            <h1>DETECTION</h1>
            <Link
                href={route('home')}
                className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
            >
                back to welcome
            </Link>
        </div>
    );
}
