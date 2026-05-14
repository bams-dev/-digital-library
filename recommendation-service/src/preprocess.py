import pandas as pd

df = pd.read_csv("recommendation-service/data/loans.csv")
df.to_csv("recommendation-service/data/loans_clean.csv", index=False)

print("Preprocessing done")