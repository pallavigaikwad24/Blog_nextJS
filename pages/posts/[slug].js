import PostContent from "@/components/posts/post-detail/post-content";
import { getPostData, getPostsFiles } from "../../lib/posts-util";
import Head from "next/head";

export default function PostPage({ post }) {

    return <>
        <Head>
            <title>{post.title}</title>
            <meta name='description' content={post.excerpt} />
        </Head>
        <PostContent post={post} />
    </>
}

export function getStaticProps(context) {
    const { slug } = context.params;
    const postData = getPostData(slug);
    return {
        props: {
            post: postData
        },
        revalidate: 600
    }
}

export function getStaticPaths() {
    const postFilenames = getPostsFiles();

    const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ''));
    const allPaths = slugs.map(slug => ({ params: { slug: slug } }));

    return {
        paths: allPaths,
        fallback: false
    }
}