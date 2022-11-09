export default function SocialMediaNav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand text-white" href="#">
                Creator's :
            </a>
            <div className="collapse navbar-collapse">
                <div className="navbar-nav">
                    <a
                        className="nav-item nav-link active text-white"
                        href="https://es.linkedin.com/in/carlos-alegre-urquiz%C3%BA-0b19701b3"
                    >
                        {" "}
                        LinkedIn{" "}
                    </a>
                    <img
                        width="3%"
                        src="images/linked-in.webp"
                        alt="linked-in logo"
                    />
                    <a
                        className="nav-item nav-link active text-white"
                        href="https://github.com/CarlosAlegreUr"
                    >
                        {" "}
                        GitHub{" "}
                        <img
                            classNameName="nav-item"
                            width="9%"
                            src="images/git-hub.webp"
                            alt="git-hub logo"
                        />
                    </a>
                </div>
            </div>
        </nav>
    )
}
