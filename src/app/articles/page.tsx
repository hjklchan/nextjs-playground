"use client"

import { useState } from "react";

export default function Articles() {
    const [count, setCount] = useState(0);

    return <>
        <section>
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                {/* Filter Grid */}
                <div>
                    <ul role="list" className="text-sm">
                        <li>
                            <input type="radio" name="type" />
                            <label className="ml-1">Newest</label>
                        </li>
                        <li>
                            <input type="radio" name="type" />
                            <label className="ml-1">Hotest</label>
                        </li>
                        <li>
                            <input type="radio" name="type" />
                            <label className="ml-1">Oldest</label>
                        </li>
                    </ul>
                    <div>
                        Other filters...
                    </div>
                </div>
                {/* Content Grid */}
                <div className="lg:col-span-3">
                    Article List
                </div>
            </div>
        </section>
    </>;
}

function Categories() {
    return <div>
    </div>;
}

