from fastapi import FastAPI

app = FastAPI()

@app.get("/test-api")
def hello():
    return {"message": "hello"}