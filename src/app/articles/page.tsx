
export default function Articles() {
    const categories = () => {
        return <div>
            <a>Programing</a>
            <a>Life</a>
            <a>Other...</a>
        </div>
    }

    const subCategories = () => {
        return <div>
            <a>PHP</a>
            <a>Typescipt</a>
            <a>Rust</a>
        </div>;
    }

    return <>
        <section>
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                {/* Filter Grid */}
                <div>
                    <ul role="list">
                        <li>
                            <input type="radio" name="type" /><label className="text-sm">Newest</label>
                        </li>
                        <li>
                            <input type="radio" name="type" /><label>Hotest</label>
                        </li>
                        <li>
                            <input type="radio" name="type" /><label>Oldest</label>
                        </li>
                    </ul>
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

