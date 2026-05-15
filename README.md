📚 Digital Library - Exam versioning

# Présentation du projet 

Digital Library est une application complète de gestion de bibliothèque basée sur une architecture microservices. Elle permet : 

la gestion des livres (CRUD) 

la gestion des utilisateurs 

la gestion des emprunts 

un système de recommandation basé sur le Machine Learning 

une interface utilisateur moderne développée en React 

Le projet intègre des pratiques professionnelles : Docker, GitHub Actions (CI/CD), DVC, et un workflow Git structuré. 

 

#  Architecture 

Architecture microservices conteneurisée : 

1     Frontend (React) 

2          │ 

3          ▼ 

4     API Gateway (Docker Compose) 

5          │ 

6          ├── Books Service (Node.js + Express) 

7          ├── Users Service (Node.js + Express) 

8          ├── Loans Service (Node.js + Express) 

9          ├── Recommendation Service (ML + Python) 

10          └── PostgreSQL 

Chaque service est indépendant 

Communication via API REST 

Orchestration via Docker Compose 

 
#  Technologies utilisées 

Backend 

Node.js (Express) 

Sequelize ORM 

PostgreSQL 

Frontend 

React (Create React App) 

Axios 

Machine Learning 

Python 

Pandas 

Scikit-learn 

DVC (Data Version Control) 

DevOps 

Docker & Docker Compose 

Git & GitHub 

GitHub Actions (CI/CD) 

 
# Installation locale 

Prérequis 

Node.js ≥ 18 

Docker & Docker Compose 

Python ≥ 3.10 

Cloner le projet 

1     git clone https://github.com/bams-dev/-digital-library.git

2     cd digital-library 

 

# Lancement avec Docker Compose 

1     docker compose up --build 

Services exposés : 

Service 

URL 

Frontend 

http://localhost:3000 

Books API 

http://localhost:5001 

Users API 

http://localhost:5002 

Loans API 

http://localhost:5003 

 

# Git Workflow 

main : branche stable 

feature/* : développement par fonctionnalité 

Exemple : 

1     git checkout -b feature/frontend 

2     git commit -m "feat: add frontend UI" 

3     git merge feature/frontend 

 

# DVC Workflow (Machine Learning) 

Les datasets sont versionnés avec DVC 

Le pipeline ML comprend : 

preprocessing 

entraînement 

évaluation 

Commandes principales : 

1     dvc repro 

2     dvc metrics show 

 

# API Endpoints 

Books Service 

Méthode 

Endpoint 

Description 

GET 

/books 

Liste des livres 

POST 

/books 

Ajouter un livre 

Users Service 

| GET | /users | Liste des utilisateurs | 

Loans Service 

| GET | /loans | Liste des emprunts | 

 

# Captures d’écran 

- À ajouter dans le dossier /docs/screenshots 

Interface React (liste des livres) 

Formulaire d’ajout de livre 

GitHub Actions (pipeline vert ) 

 

- Pipeline CI/CD (GitHub Actions) 

Un pipeline CI/CD est configuré via GitHub Actions : 

Installation des dépendances backend 

Build du frontend React 

Déclenchement automatique à chaque push ou pull request 

Fichier : 

1     .github/workflows/ci.yml 

Statut attendu :  SUCCESS 

 

# État du projet 

✔ Backend fonctionnel 

✔ Frontend opérationnel 

✔ Machine Learning intégré 

✔ DVC configuré 

✔ CI/CD validé 

 

# Auteur 

BAMBA INZA, Master 2 IA 
Dakar Institute of Technology 

# Licence 
Projet à usage pédagogique. 