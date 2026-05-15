# 📚 Digital Library

##  Présentation du projet

Digital Library est une application complète de gestion de bibliothèque basée sur une architecture microservices. Elle permet :
* La gestion des livres (CRUD)
* La gestion des utilisateurs
* La gestion des emprunts
* Un système de recommandation basé sur le Machine Learning
* Une interface utilisateur moderne développée en React

Le projet intègre des pratiques professionnelles : Docker, GitHub Actions (CI/CD), DVC, et un workflow Git structuré.

---

##  Architecture

Architecture microservices conteneurisée :

```text
Frontend (React)
    │
    ▼
API Gateway (Docker Compose)
    │
    ├── Books Service (Node.js + Express)
    ├── Users Service (Node.js + Express)
    ├── Loans Service (Node.js + Express)
    ├── Recommendation Service (ML + Python)
    └── PostgreSQL
```

* Chaque service est indépendant
* Communication via API REST
* Orchestration via Docker Compose

---

##  Technologies utilisées

### Backend
* Node.js (Express)
* Sequelize ORM
* PostgreSQL

### Frontend
* React (Create React App)
* Axios

### Machine Learning
* Python
* Pandas
* Scikit-learn
* DVC (Data Version Control)

### DevOps
* Docker & Docker Compose
* Git & GitHub
* GitHub Actions (CI/CD)

---

##  Installation locale

### Prérequis
* Node.js ≥ 18
* Docker & Docker Compose
* Python ≥ 3.10

### Cloner le projet
```bash
git clone https://github.com/<username>/digital-library.git
cd digital-library
```

---

##  Lancement avec Docker Compose

```bash
docker compose up --build
```

### Services exposés :


| Service | URL |
| :--- | :--- |
| **Frontend** | http://localhost:3000 |
| **Books API** | http://localhost:5001 |
| **Users API** | http://localhost:5002 |
| **Loans API** | http://localhost:5003 |

---

##  Git Workflow

* `main` : branche stable
* `feature/*` : développement par fonctionnalité

### Exemple :
```bash
git checkout -b feature/frontend
git commit -m "feat: add frontend UI"
git checkout main
git merge feature/frontend
```

---

##  DVC Workflow (Machine Learning)

Les datasets sont versionnés avec DVC. Le pipeline ML comprend :
* Preprocessing
* Entraînement
* Évaluation

### Commandes principales :
```bash
dvc repro
dvc metrics show
```

---

##  API Endpoints

### Books Service

| Méthode | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/books` | Liste des livres |
| `POST` | `/books` | Ajouter un livre |

### Users Service

| Méthode | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/users` | Liste des utilisateurs |

### Loans Service

| Méthode | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/loans` | Liste des emprunts |

---

##  Captures d’écran

* Dossiers `/docs/screenshots`*
* Interface React (liste des livres)
* Formulaire d’ajout de livre
* GitHub Actions (pipeline vert )

---

##  Pipeline CI/CD (GitHub Actions)

Un pipeline CI/CD est configuré via GitHub Actions :
* Installation des dépendances backend
* Build du frontend React
* Déclenchement automatique à chaque push ou pull request

**Fichier de configuration :** `.github/workflows/ci.yml`  
**Statut attendu :**  SUCCESS

---

##  État du projet

* [x] Backend fonctionnel
* [x] Frontend opérationnel
* [x] Machine Learning intégré
* [x] DVC configuré
* [x] CI/CD validé

---

##  Auteur

* **BAMBA INZA, Master 2 IA
* **Institution** — Dakar Institute of Technology

---

##  Licence
Projet à usage pédagogique.
