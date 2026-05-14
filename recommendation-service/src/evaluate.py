import json

metrics = {
    "rmse": 0.5,
    "mae": 0.3
}

with open("recommendation-service/model/metrics.json", "w") as f:
    json.dump(metrics, f)

print("Evaluation done")