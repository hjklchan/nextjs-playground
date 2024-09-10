"use client"

import { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import "./styles.css";

export default function PostPage({ params }: { params: { slug: string } }) {
    const markdown = `
        # 说明
          - a
          - b
          
          ~~~js
          cosole.log(111)
          ~~~
        `;

    useEffect(() => {
    }, []);

    return <>
        <div>
            <h1 className="text-xl">{"Title..."}</h1>
            <div>
                <article className="prose lg:prose-xl">
                </article>
            </div>
        </div>
    </>;
}
