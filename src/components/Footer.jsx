import { profile } from "../data/profile";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p className="muted small">&copy; {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
