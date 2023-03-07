import styles from "./index.module.css";
import Blog from "@/components/blog/Blog";
import { useState, useEffect } from "react";

function Blogs() {
	const [blogs, setBlogs] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [searchQuery, setSearchQuery] = useState("");

	useEffect(() => {
		async function fetchBlogs() {
			const response = await fetch("/api/blogs");
			const data = await response.json();
			setBlogs(data.blogs);
			setIsLoading(false);
		}
		fetchBlogs();
	}, []);

	function handleSearchInputChange(event) {
		setSearchQuery(event.target.value);
	}

	const filteredBlogs = blogs.filter((blog) => {
		const normalizedSearchQuery = searchQuery.toLowerCase().trim();
		const normalizedTitle = blog.title.toLowerCase();
        const normalizedDescription = blog.description.toLowerCase();
        const normalizedDate = blog.date.toLowerCase();

        return (
            normalizedTitle.includes(normalizedSearchQuery) ||
            normalizedDescription.includes(normalizedSearchQuery) ||
            normalizedDate.includes(normalizedSearchQuery)
        );
	});

	return (
		<div className={styles.page}>
			<header className={styles.header}>
				<h2>
					<a
						target="_blank"
						href="https://github.com/shashwtt/blogs/blob/main/data.json"
					>
						<span className={styles.hilight}>*github </span>
					</a>
				</h2>
				<div className={styles.search}>
					<input
						type="text"
						name="blog"
						id="blogSearch"
						placeholder="What are you looking for?"
						onChange={handleSearchInputChange}
					/>
					<button>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="800px"
							height="800px"
							viewBox="0 0 24 24"
							fill="transparent"
							strokeWidth="3"
							stroke="red"
						>
							<path d="M15 15L21 21" />
							<path d="M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" />
						</svg>
					</button>
				</div>
			</header>

			<div className={styles.blogs}>
				{isLoading ? (
					<>
						<Blog fake />
					</>
				) : filteredBlogs.length ? (
					filteredBlogs.map((blog) => (
						<Blog
							blogId={blog.id}
							date={blog.date}
							title={blog.title}
							description={blog.description}
							searchQuery={searchQuery}
						/>
					))
				) : (
					<p>No blogs found.</p>
				)}
			</div>
		</div>
	);
}

export default Blogs;
