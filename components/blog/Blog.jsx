import styles from "./Blog.module.css";
import Link from "next/link";
import { setTransformOrigin } from "@/utils/transformOrigin";

function Blog({ title='', date='', description='', blogId='', fake = false, searchQuery }) {
	function handleMouseLeave(event) {
		setTransformOrigin(event.currentTarget);
	}

	const highlightedTitle = searchQuery ? (
		<span
			dangerouslySetInnerHTML={{
				__html: title.replace(
					new RegExp(searchQuery, "gi"),
					(match) => `<mark>${match}</mark>`
				),
			}}
		/>
	) : (
		title
	);
	const highlightedDate = searchQuery ? (
		<span
			dangerouslySetInnerHTML={{
				__html: date.replace(
					new RegExp(searchQuery, "gi"),
					(match) => `<mark>${match}</mark>`
				),
			}}
		/>
	) : (
		date
	);
	const highlightedDescription = searchQuery ? (
		<span
			dangerouslySetInnerHTML={{
				__html: description.replace(
					new RegExp(searchQuery, "gi"),
					(match) => `<mark>${match}</mark>`
				),
			}}
		/>
	) : (
		description
	);

	if (fake) {
		return (
			<div className={styles.fakeBlog}>
				<div className={`${styles.fakeBlogDate} ${styles.shine}`}></div>
				<div
					className={`${styles.fakeBlogTitle} ${styles.shine}`}
				></div>
				<div className={`${styles.fakeBlogDesc} ${styles.shine}`}></div>
			</div>
		);
	} else {
		return (
			<div className={styles.blog} onMouseLeave={handleMouseLeave}>
				<div className={styles.date}>{highlightedDate}</div>
				<Link href={"/blogs/" + blogId}>
					<div className={styles.title}>{highlightedTitle}</div>
				</Link>
				<div className={styles.desc}>{highlightedDescription}</div>
			</div>
		);
	}
}

export default Blog;
