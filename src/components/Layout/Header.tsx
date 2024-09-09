"use client"

import { useNetwork } from "ahooks";
import Link from "next/link";
import { useMemo } from "react";

export default function Header() {
    const middleColor = () => {
        return "bg-gradient-to-b from-gray-50 to-gray-300 ";
    }

    const { online } = useNetwork();

    const onlineBgColor = useMemo(() => {
        return online ? "bg-blue-500" : "bg-red-500";
    }, [online]);

    return <header className={"bg-gray-100 sticky top-0 w-full border-b-1 shadow-md " + middleColor()}>
        <div className="h-8 flex justify-between px-4 items-center">
            <div>
                <nav className="mx-auto py-1">
                    <div className="flex items-center">
                        <Link href="/" className="select-none font-semibold text-sm">
                            <span className={`px-2 ${onlineBgColor} rounded-full shadow-inner text-neutral-100 hover:bg-blue-700`}>
                                hjkl1
                            </span>
                        </Link>
                        <div className="flex space-x-3 ml-3 text-xs items-center">
                            <Link href="/articles" className="select-none text-gray-800">Articles</Link>
                            <Link href="#" className="select-none text-gray-800">About</Link>
                        </div>
                    </div>
                </nav>
            </div>
            <div>
                <a className="text-xs">Others</a>
            </div>
        </div>
    </header>
}
