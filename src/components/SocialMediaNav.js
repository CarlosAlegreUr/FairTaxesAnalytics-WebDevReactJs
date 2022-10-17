export default function SocialMediaNav() {
    return (
        <nav
            className="nav justify-content-end align-items-center"
            id="social-nav-var"
        >
            <a className="nav-link text-white"> Creator's </a>

            <a
                className="nav-link border"
                href="https://es.linkedin.com/in/carlos-alegre-urquiz%C3%BA-0b19701b3"
            >
                LinkedIn
                <img
                    width="3%"
                    src="images/linked-in.webp"
                    alt="linked-in logo"
                />{" "}
            </a>

            <a
                className="nav-link border"
                href="https://github.com/CarlosAlegreUr"
            >
                GitHub
                <img
                    width="10%"
                    src="images/git-hub.webp"
                    alt="git-hub logo"
                />{" "}
            </a>
        </nav>
    )
}
