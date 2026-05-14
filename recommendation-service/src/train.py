import pandas as pd
import pickle
from sklearn.neighbors import NearestNeighbors

df = pd.read_csv("recommendation-service/data/loans_clean.csv")
X = df[['user_id', 'book_id']]

model = NearestNeighbors(n_neighbors=2)
model.fit(X)

pickle.dump(model, open("recommendation-service/model/model.pkl", "wb"))

print("Model trained")