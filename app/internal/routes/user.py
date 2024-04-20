from fastapi import APIRouter, UploadFile, File, Form, Request
from fastapi.responses import JSONResponse
from pydantic import BaseModel
from typing import Dict

router = APIRouter(
    prefix="/api/v1"
)

class Message(BaseModel):
    message: str
@router.post("/message")
def user_message(item: Message):
    if item.message:
        return {"message": item.message}
    else:
        return JSONResponse(content={"error": "I'm a teapot"}, status_code=418)



@router.post("/upload_message")
async def upload_file(message: str = Form(...), file: UploadFile = File(...)):
    # json_data = await request.json()
    print(message)

    with open("data/temp.html", "wb") as f:
        f.write(await file.read())

    return {"message": message}