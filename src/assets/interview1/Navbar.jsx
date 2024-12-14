

function Navbar() {
    return (
        <>
            <div className="container border border-1">
                <nav className="navbar bg-body-tertiary">
                    <div className="container-fluid">
                        <a className="navbar-brand">my-will</a>
                        <form className="d-flex align-items-center" role="search">
                            <div className="input-group">
                                <input
                                    className="form-control me-2 "
                                    type="search"
                                    placeholder="Search"
                                    aria-label="Search"
                                />
                                <span className="input-group-text">
                                    <i className="bi bi-search"></i>
                                </span>
                            </div>
                            <div className="icons">
                                <div className="icon-bell">
                                    <i class="fa-solid fa-bell"></i>
                                </div>
                                <div className="icon-setting">
                                    <i class="bi bi-gear"></i>
                                </div>
                                <div className="icon-men">
                                    <i class="bi bi-person"></i>
                                </div>
                                <div className="icon-power">
                                    <i class="bi bi-power"></i>
                                </div>
                            </div>

                        </form>
                    </div>
                </nav>

            </div>
           
           


        </>
    )
}
export default Navbar;