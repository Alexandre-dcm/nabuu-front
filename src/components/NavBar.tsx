import "../assets/styles/components/NavBar.scss";

const NavBar = (): JSX.Element => {
    return (
        <div id="navbar-main">
            <div className="container navbar-container">
                <div className="navbar-logo-wrapper">
                    <h1><a href="/">Nabuu</a></h1>
                </div>
                <div className="navbar-links-wrapper">
                    <a className="navbar-link" href="/docs">Documentations</a>
                    <a className="navbar-link" href="/login">Log in</a>
                </div>
            </div>
        </div>
    );
}

export default NavBar;