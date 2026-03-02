import Image from "next/image";
import Link from "next/link";
import classes from "./post-item.module.css"

export default function PostItem({ post }) {
    const { title, image, excerpt, date, slug } = post;
    const formattedDate = new Date(date).toLocaleDateString('en-US', {
        month: 'long',
        year: 'numeric',
        day: 'numeric'
    })

    const imagePath = `/images/posts/${slug}/${image}`;
    console.log(imagePath);

    const LinkPath = `/posts/${slug}`

    return <li className={classes.post}>
        <Link href={LinkPath}>
            <div className={classes.image}>
                <Image
                    src={imagePath}
                    alt={title}
                    width={300}
                    height={200}
                    layout="responsive"
                />
            </div>
            <div className={classes.content}>
                <h3>{title}</h3>
                <time>{formattedDate}</time>
                <p>{excerpt}</p>
            </div>
        </Link>
    </li>
}