export default function Navbar({ title }) {
  return (
    <nav className="navbar navbar-expand-lg bg-light px-3">
      <a className="navbar-brand" href="#">{title}</a>
      <ul className="navbar-nav me-auto flex-row gap-3">
        <li className="nav-item"><a className="nav-link active" href="#">Home</a></li>
        <li className="nav-item"><a className="nav-link" href="#">About</a></li>
      </ul>
      <input className="form-control w-auto me-2" placeholder="Search" />
      <button className="btn btn-outline-success">Search</button>
    </nav>
  );
}
