import Link from "next/link";
import styles from "./index.module.css";

function HomePage() {
	return (
		<div className={styles.ok}>
			<Link href="/"> 
                <h1> Home</h1> 
            </Link>
			<Link href="/blogs"> 
                <h1> Blogs</h1> 
            </Link>
			<Link href="/about"> 
                <h1> About</h1> 
            </Link>
		</div>
	);
}

export default HomePage;
