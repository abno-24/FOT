const Header = () => {
  return (
    <header className="app-header">
      <nav>
        <div className="logo-bx">
          <h1 className="text-3xl font-bold underline text-red-400">Hello</h1>
        </div>
        <div className="nav-links">
          <ul className="text-3xl font-bold underline text-red-400">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
