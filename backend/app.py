from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def read_root():
    return {"message": "Hello"}

@app.get("/about")
async def read_about():
    return {"message": "This page is a personal project created by Olof Olheim. "
    "The purpose of this project is to sharpen my skills in react, javascript and python while hopefully creating a useful tool for tick recognition. "
    "The project is still in development but will hopefully be done in the near future."}

@app.get("/contact")
async def read_contact():
    return {"message1": "Email: olleolheim@gmail.com",
            "message2": "GitHub: https://github.com/potatisgrottan",
            "message3": "Phone number: +46 ..."}

@app.post("/upload")
async def upload_file(image: UploadFile = File(...)):
    return {"message": "File uploaded successfully"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("app:app", host="127.0.0.1", port=5000, reload=True)