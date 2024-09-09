"use client"

import { useEffect, useState } from "react";
import { categories as jsonData } from "./json";

interface CategoryItem {
    id: number,
    name: string,
}

export default function Category() {
    const [categories, setCategories] = useState<CategoryItem[]>([]);
    const [subCategories, setSubCategories] = useState<CategoryItem[]>([]);

    const fetchCategories = (parentId: number) => {
        const items: CategoryItem[] = [];

        jsonData.forEach(item => {
            if (item.parentId === parentId) {
                items.push({ id: item.id, name: item.name });
            }
        });

        if (parentId === 0) {
            setCategories(items);
        } else {
            setSubCategories(items);
        }
    };

    const resetCategory = () => { };

    const onCategoryClick = (evt: React.MouseEvent<HTMLAnchorElement>) => {
        fetchCategories(evt.currentTarget.dataset?.id as unknown as number);
    };

    useEffect(() => {
        // 先加载第一级分类
        fetchCategories(0);
    }, []);

    return <div>
        <h3 className="font-bold text-sm">Categories</h3>
        {/* Categories */}
        <div className="w-5/6">
            <a className="hover:cursor-pointer text-sm text-gray-600" onClick={() => resetCategory()}>Default</a>
            {
                categories.map(item => {
                    return <a
                        key={item.id}
                        data-id={item.id}
                        onClick={onCategoryClick}
                        className="hover:cursor-pointer text-sm ml-3 text-gray-600"
                    >
                        {item.name}
                    </a>;
                })
            }
        </div>
        {/* Sub-Categories */}
        <div>
            {
                subCategories.length > 0
                    ? subCategories.map(item => {
                        return <a
                            key={item.id}
                            data-id={item.id}
                            onClick={onCategoryClick}
                            className="hover:cursor-pointer text-sm ml-3"
                        >
                            {item.name}
                        </a>;

                    })
                    : null
            }
        </div>
    </div>;
}
