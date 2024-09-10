"use client"

import ReactMarkdown from "react-markdown";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function Markdown({ content }: { content: string }) {
    return (<ReactMarkdown>{content}</ReactMarkdown>);
}
