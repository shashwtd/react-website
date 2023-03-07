import Link from "next/link";

function HomePage() {
    return (
        <div>
            <Link href="/"> HOME </Link>
            <Link href="/blogs"> BLOGS </Link>
            <Link href="/about"> ABOUT </Link>
        </div>
    );
}

export default HomePage;