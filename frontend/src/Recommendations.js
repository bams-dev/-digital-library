import { useState } from "react";
import axios from "axios";

function Recommendations() {
  const [userId, setUserId] = useState("");
  const [reco, setReco] = useState([]);

  const getReco = () => {
    axios
      .get(`http://localhost:8000/recommend/${userId}`)
      .then(res => setReco(res.data.rec));
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>🤖 Recommandations</h1>

      <input
        placeholder="ID utilisateur"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />

      <button onClick={getReco}>Obtenir</button>

      <ul>
        {reco.map((r, i) => (
          <li key={i}>Livre recommandé #{r}</li>
        ))}
      </ul>
    </div>
  );
}

export default Recommendations;