export default function Navbar() {
    
    return (
        <nav className="nav">
            <a href ="/" className="Sportsync">
                SportSync
                </a>
                <ul>
                    <li className="active">
                        <a href = "/Organize">Organize</a>
                    </li>
                    <li>
                        <a href="/Join"> Join </a>
                    </li>
                </ul>
        </nav>
    )
}