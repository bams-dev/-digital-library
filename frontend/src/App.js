import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";

function App() {
  // 🔐 Auth (simple)
  const [user, setUser] = useState(null);

  // 📚 Books
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // 🔄 Charger les livres
  useEffect(() => {
    axios
      .get("http://localhost:5001/books")
      .then((res) => {
        setBooks(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Impossible de charger les livres");
        setLoading(false);
      });
  }, []);

  // ➕ Ajouter un livre
  const addBook = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5001/books", { title, author })
      .then(() => {
        setMessage("✅ Livre ajouté avec succès");
        setTitle("");
        setAuthor("");
        return axios.get("http://localhost:5001/books");
      })
      .then((res) => setBooks(res.data))
      .catch(() => setMessage("❌ Erreur lors de l’ajout"));
  };

  // ✅ UN SEUL RETURN
  return (
    <div style={styles.page}>
      {/* Navbar */}
      <Navbar user={user} setUser={setUser} />

      {/* Header */}
      <header style={styles.header}>
        <h1 style={styles.title}>📚 Digital Library</h1>
        <p style={styles.subtitle}>
          Plateforme de gestion et recommandation de livres
        </p>
      </header>

      {/* Main */}
      <main style={styles.container}>
        <h2 style={styles.sectionTitle}>Catalogue des livres</h2>

        {loading && <p style={styles.info}>Chargement des livres...</p>}
        {error && <p style={styles.error}>{error}</p>}

        {!loading && books.length === 0 && (
          <p style={styles.info}>Aucun livre disponible</p>
        )}

        {/* Formulaire */}
        <form onSubmit={addBook} style={styles.form}>
          <h3>➕ Ajouter un livre</h3>

          <input
            type="text"
            placeholder="Titre du livre"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            style={styles.input}
          />

          <input
            type="text"
            placeholder="Auteur"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
            style={styles.input}
          />

          <button type="submit" style={styles.button}>
            Ajouter
          </button>

          {message && <p>{message}</p>}
        </form>

        {/* Liste */}
        <div style={styles.grid}>
          {books.map((book) => (
            <div key={book.id} style={styles.card}>
              <h3 style={styles.bookTitle}>{book.title}</h3>
              <p style={styles.author}>✍️ {book.author}</p>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>© 2026 — Digital Library | Dakar Institute of Technology</p>
      </footer>
    </div>
  );
}

export default App;

/* 🎨 STYLES */
const styles = {
  page: {
    fontFamily: "Segoe UI, Arial, sans-serif",
    backgroundColor: "#f8fafc",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  header: {
    backgroundColor: "#0f172a",
    color: "white",
    padding: "30px",
    textAlign: "center",
  },
  title: {
    margin: 0,
    fontSize: "2.5rem",
  },
  subtitle: {
    marginTop: "10px",
    color: "#cbd5f5",
  },
  container: {
    flex: 1,
    padding: "40px",
    maxWidth: "1100px",
    margin: "0 auto",
  },
  sectionTitle: {
    marginBottom: "20px",
    color: "#0f172a",
  },
  info: {
    color: "#475569",
    fontStyle: "italic",
  },
  error: {
    color: "#dc2626",
    fontWeight: "bold",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "20px",
    marginTop: "20px",
  },
  card: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 10px 20px rgba(0,0,0,0.08)",
  },
  bookTitle: {
    margin: "0 0 10px",
    color: "#1e293b",
  },
  author: {
    color: "#475569",
  },
  footer: {
    backgroundColor: "#e2e8f0",
    padding: "15px",
    textAlign: "center",
    color: "#334155",
  },
  form: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "10px",
    marginBottom: "30px",
    boxShadow: "0 8px 16px rgba(0,0,0,0.08)",
  },
  input: {
    display: "block",
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "5px",
    border: "1px solid #cbd5f5",
  },
  button: {
    backgroundColor: "#2563eb",
    color: "white",
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};