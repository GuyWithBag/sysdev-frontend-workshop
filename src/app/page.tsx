import Image from "next/image";
import { IoMdMenu } from "react-icons/io";
export default function Home() {
	return (
		<div className="body">
			<div className="navbar">
				<h2>Pokedex</h2>
				<IoMdMenu />
			</div>
			<div className="section">
				<div className="card">
					<img src="https://png.pngtree.com/png-vector/20240322/ourmid/pngtree-capybara-photograph-as-a-funny-way-to-illustrate-nature-photographer-png-image_12192166.png"></img>
					<div className="bio">
						<div className="content">
							<h1>Catch 'Em All!</h1>
							<p>Explore with Our Interactive Pokedex</p>
						</div>
						<button>View Pokedex</button>
					</div>
				</div>
			</div>
		</div>
	);
}
