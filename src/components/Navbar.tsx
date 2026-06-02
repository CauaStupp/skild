import { Link } from "@tanstack/react-router";
import { LogIn } from "lucide-react";

function Navbar() {
	return (
		<nav className="navbar">
			<div className="brand">
				<div className="mark">
					<div className="glyph" />
				</div>

				<Link to="/">
					<span>Skild</span>
				</Link>
			</div>

			<div className="actions">
				<Link to="/sign-in/$" className="btn-primary">
					<LogIn size={15} />
					Sign in
				</Link>
			</div>
		</nav>
	);
}

export default Navbar;
