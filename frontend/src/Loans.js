import { useEffect, useState } from "react";
import axios from "axios";

function Loans() {
  const [loans, setLoans] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5003/loans")
      .then(res => setLoans(res.data));
  }, []);

  return (
    <div style={{ padding: "30px" }}>
      <h1>📦 Emprunts</h1>

      {loans.length === 0 ? (
        <p>Aucun emprunt enregistré</p>
      ) : (
        <ul>
          {loans.map(loan => (
            <li key={loan.id}>
              Utilisateur #{loan.user_id} — Livre #{loan.book_id}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Loans;