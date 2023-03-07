import "@/styles/globals.css";
import Lenis from "@studio-freight/lenis";
import Head from "next/head";
import Sidebar from "@/components/sidebar/Sidebar";

export default function App({ Component, pageProps }) {
	// const lenis = new Lenis({
	// 	duration: 1.2,
	// 	easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
	// 	direction: "vertical", // vertical, horizontal
	// 	gestureDirection: "vertical", // vertical, horizontal, both
	// 	smooth: true,
	// 	mouseMultiplier: 1,
	// 	smoothTouch: false,
	// 	touchMultiplier: 2,
	// 	infinite: false,
	// });

	// //get scroll value
	// lenis.on("scroll", ({ scroll, limit, velocity, direction, progress }) => {
	// 	console.log({ scroll, limit, velocity, direction, progress });
	// });

	// function raf(time) {
	// 	lenis.raf(time);
	// 	requestAnimationFrame(raf);
	// }

	// requestAnimationFrame(raf);

	return (
		<>
			<Head>
				<title>BloggD</title>
			</Head>
			<main>
				<Sidebar />
				<div className="app-main">
					<Component {...pageProps} />
				</div>
			</main>
		</>
	);
}
