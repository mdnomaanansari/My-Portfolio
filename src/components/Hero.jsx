import { useTilt } from "../hooks/useTilt";
import { profile } from "../data/profile";

export default function Hero() {
  const tilt = useTilt(5);

  return (
    <section id="top" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="hero-role">{profile.role}</p>
          <h1>{profile.name}</h1>
          <p className="hero-intro">{profile.intro}</p>
          <p className="muted hero-tagline">{profile.tagline}</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">View My Projects</a>
            <a className="btn btn-ghost" href="#contact">Contact Me</a>
          </div>
        </div>

        <div className="hero-photo-wrap">
          <div
            className="photo-frame"
            ref={tilt.ref}
            onMouseMove={tilt.onMouseMove}
            onMouseLeave={tilt.onMouseLeave}
          >
            <div className="photo-halo" aria-hidden="true" />
            <div className="photo-card">
              <div className="photo-layer" aria-hidden="true" />
              <img
                src={profile.photo}
                alt={profile.photoAlt}
                width="900"
                height="1171"
                fetchPriority="high"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
