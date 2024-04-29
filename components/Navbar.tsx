import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="navbar bg-dark navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
            <div className="container-fluid">
                <Link className="navbar-brand" href="/">Ruuf Test</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link" href="/ejercicio1">Ejercicio 1</Link>
                        <Link className="nav-link" href="/ejercicio2">Ejercicio 2</Link>
                        <Link className="nav-link" href="/ejercicio3">Ejercicio 3</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}