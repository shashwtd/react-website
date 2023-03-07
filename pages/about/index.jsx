import Link from "next/link";

function About() {
	return (
		<>
			<center>
				<b>
					<h1 style={{ marginTop: "10em" }}>
						{" "}
						I am too lazy for this.{" "}
					</h1>
				</b>
				<Link href="/">
					<button
						style={{
							marginTop: "2em",
							scale: "1.5",
							padding: "0.5em 1em",
						}}
					>
						{" "}
						← Go Back
					</button>
				</Link>
			</center>
		</>
	);
}

export default About;
