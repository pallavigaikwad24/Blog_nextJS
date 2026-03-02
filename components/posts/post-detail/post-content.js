import ReactMarkdown from 'react-markdown';
import classes from './post-content.module.css'
import PostHeader from "./post-header";
import Image from 'next/image';
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark";

import js from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import css from "react-syntax-highlighter/dist/cjs/languages/prism/css";

SyntaxHighlighter.registerLanguage("javascript", js);
SyntaxHighlighter.registerLanguage("css", css);

export default function PostContent({ post }) {
    const imagePath = `/images/posts/${post.slug}/${post.image}`;

    const customRenderers = {
        img({ src, alt }) {
            return (
                <Image
                    src={`/images/posts/${post.slug}/${src}`}
                    alt={alt}
                    width={800}
                    height={500}
                    style={{ width: "100%", height: "auto" }}
                />
            );
        },

        code({ className, children, inline }) {
            const match = /language-(\w+)/.exec(className || "");

            if (!inline && match) {
                return (
                    <SyntaxHighlighter style={atomDark} language={match[1]}>
                        {children}
                    </SyntaxHighlighter>
                );
            }

            return <code className={className}>{children}</code>;
        }
    };

    return (
        <article className={classes.content}>
            <PostHeader title={post.title} image={imagePath} />
            <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
        </article>
    )
}