import PostGridPage from '../posts/post-grid'
import classes from './featured-posts.module.css'

export default function FeaturedPosts({ posts }) {
    return (
        <section className={classes.latest  }>
            <h2>Featured Post</h2>
            <PostGridPage posts={posts} />
        </section>
    )
}