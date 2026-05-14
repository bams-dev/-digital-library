function Navbar({ user, setUser }) {
  return (
    <header style={{ background: "#0f172a", color: "white", padding: "20px" }}>
      <h1>📚 Digital Library</h1>

      {!user ? (
        <button onClick={() => setUser("INZA")}>
          🔐 Se connecter
        </button>
      ) : (
        <p>Connecté en tant que {user}</p>
      )}
    </header>
  );
}

export default Navbar;