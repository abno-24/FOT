const Header = () => {
  const link = [
    {
      id: 1,
      name: "Home",
      to: "#",
    },
    {
      id: 2,
      name: "About",
      to: "#",
    },
    {
      id: 3,
      name: "Contact",
      to: "#",
    },
  ];

  return (
    <header className="shadow">
      <nav className="max-container flex justify-between items-center py-2">
        <div className="text-center">
          <h1 className="custom-font text-2xl capitalize font-bold">
            Food on <br />
            <span>time 🍜</span>
          </h1>
        </div>
        <div>
          <ul className="text-xl flex justify-between items-center gap-12 tracking-widest">
            {link.map((link) => (
              <li key={link.id}>{link.name}</li>
            ))}
          </ul>
        </div>
        <div className="cart-btn-bx">
          <span className="text-3xl material-symbols-outlined">
            shopping_cart
          </span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
