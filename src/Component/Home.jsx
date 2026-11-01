
import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
    const movies = [
        {
            title: "Featured Movie",
            image:
                "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
            className: "poster-left",
            alt: "Featured cinematic movie poster",
        },
        {
            title: "Cinema Spotlight",
            image:
                "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
            className: "poster-main",
            alt: "Cinema spotlight movie poster",
        },
        {
            title: "Movie Night",
            image:
                "https://image.tmdb.org/t/p/w500/qhb1qOilapbapxWQn9jtRCMwXJF.jpg",
            className: "poster-right",
            alt: "Movie night poster",
        },
    ];

    const features = [
        {
            icon: "🎬",
            title: "Latest Movies",
            description: "Discover the latest blockbusters and releases.",
        },
        {
            icon: "🎟️",
            title: "Easy Booking",
            description: "Book your favourite seats in just a few clicks.",
        },
        {
            icon: "🍿",
            title: "Cinema Experience",
            description: "Make every movie night special.",
        },
        {
            icon: "⭐",
            title: "Special Offers",
            description: "Explore exciting deals and movie offers.",
        },
    ];

    return (
        <main className="home-page">
            <section className="home-container">
                <div className="home-content">
                    <p className="home-subtitle">
                        ✦ YOUR WORLD OF ENTERTAINMENT ✦
                    </p>

                    <h1 className="home-title">
                        Feel The
                        <br />
                        <span>Magic</span> Of Cinema
                    </h1>

                    <p className="home-description">
                        Your next favourite movie is waiting for you.
                        Explore exciting movies, discover unforgettable
                        stories, and book your perfect cinema experience
                        with ScreenSeat.
                    </p>

                    <div className="home-search">
                        <input
                            type="search"
                            placeholder="Search movies..."
                            aria-label="Search movies"
                            onKeyDown={(event) => {
                                if (event.key === "Enter") {
                                    const query = event.currentTarget.value.trim();
                                    if (query) {
                                        window.location.href =
                                            "/Movies?search=" +
                                            encodeURIComponent(query);
                                    }
                                }
                            }}
                        />

                        <button
                            type="button"
                            aria-label="Search movies"
                            onClick={() => {
                                const input =
                                    document.querySelector(
                                        ".home-search input"
                                    );
                                const query = input?.value.trim();

                                if (query) {
                                    window.location.href =
                                        "/Movies?search=" +
                                        encodeURIComponent(query);
                                } else {
                                    window.location.href = "/Movies";
                                }
                            }}
                        >
                            ⌕
                        </button>
                    </div>

                    <div className="home-buttons">
                        <Link to="/Movies" className="home-btn">
                            Explore Movies <span>&nbsp;→</span>
                        </Link>

                        <Link
                            to="/Theatres"
                            className="home-btn secondary"
                        >
                            Find Theatres
                        </Link>
                    </div>
                </div>

                <div
                    className="home-visual"
                    aria-label="Featured movie posters"
                >
                    {movies.map((movie) => (
                        <img
                            key={movie.className}
                            src={movie.image}
                            alt={movie.alt}
                            className={`home-poster ${movie.className}`}
                            loading="lazy"
                            onError={(event) => {
                                event.currentTarget.style.visibility = "hidden";
                            }}
                        />
                    ))}
                </div>
            </section>

            <section className="home-features">
                {features.map((feature) => (
                    <article className="home-feature" key={feature.title}>
                        <div
                            style={{
                                fontSize: "30px",
                                marginBottom: "10px",
                            }}
                        >
                            {feature.icon}
                        </div>

                        <h3>{feature.title}</h3>
                        <p>{feature.description}</p>
                    </article>
                ))}
            </section>
        </main>
    );
}

export default Home;