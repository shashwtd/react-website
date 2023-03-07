import styles from "./index.module.css";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";

function BlogPage() {
	const router = useRouter();
	const blogId = router.query.blogKey;

	const [blogData, setBlogData] = useState("");
	const [loading, setLoading] = useState(true);
	const [frontMatter, setFrontMatter] = useState({});

	useEffect(() => {
		if (blogId) {
			fetch(`/api/blog?id=${blogId}`)
				.then((response) => response.text())
				.then((data) => {
					const { data: frontMatter, content } = matter(data);
					setFrontMatter(frontMatter);
					setBlogData(content);
					setLoading(false);
				})
				.catch((error) => {
					console.error("Error fetching blog data: ", error);
					setLoading(false);
				});
		}
	}, [blogId]);

	return (
		<div className={styles.page}>
			{loading && (
				<div className={styles.loaderScreen}>
					<div className={styles.loaderContainer}>
						<div className={styles.loaderText}>
							Loading Blog Content...
						</div>
						<div className={styles.loader}></div>
					</div>
				</div>
			)}

			<div className={styles.blogMeta}>
				<p>{frontMatter.date}</p>
				<h1>{frontMatter.title}</h1>
				<h3>{frontMatter.description}</h3>
			</div>

			<div className={styles.blog}>
				{!loading && <Markdown>{blogData}</Markdown>}
			</div>
		</div>
	);
}

export default BlogPage;
