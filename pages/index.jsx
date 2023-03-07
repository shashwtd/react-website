import Link from "next/link";

function HomePage() {
	return (
		<div>
			<h1>
				<Link href="/"> HOME </Link>
			</h1>
			<br />
			<h1>
				<Link href="/blogs"> BLOGS </Link>
			</h1>
			<br />
			<h1>
				<Link href="/about"> ABOUT </Link>
			</h1>
		</div>
	);
}

export default HomePage;
