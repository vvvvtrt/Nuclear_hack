from fastapi import APIRouter, UploadFile, File, Form, Request
from fastapi.responses import JSONResponse
from pydantic import BaseModel
from typing import Dict
from app.internal.ml import ml

router = APIRouter(
    prefix="/api/v1"
)

class Message(BaseModel):
    message: str

@router.post("/message")
def user_message(message: str = Form(...)):
    part_1 = ml.Koza_llama_alpaca_lora_flex(f"""ты - внимательный читатель. Твоя задача - найти в тексте информацию о временной дате и выведи ее через разделитель пробел. Ключевые слова - вчера, 1 неделю назад, в прошлом месяце. Формат output - только все дат входящие в промежуток с разделителем. Очень важно для выживания. Сегодняшняя дата - 04/03/2024, ее формат ММ/ДД/ГГГГ. Текст - {message}""")
    # data.loc[data['Станция'] == f'{part_1.output_station()}'][f'{part_1.output_date()}']
    # temp_data = part_1.output_date().split()
    # temp_place = part_1.output_station()

    temp = part_1.output_data()
    if temp == "error":
        return JSONResponse("error", 418)
    else:
        return {"message": part_1.output_data()}



@router.post("/upload_message")
async def upload_file(message: str = Form(...), file: UploadFile = File(...)):
    # json_data = await request.json()
    with open("data/data.csv", "wb") as f:
        f.write(await file.read())

    part_1 = ml.Koza_llama_alpaca_lora_flex(
        f"""ты - внимательный читатель. Твоя задача - найти в тексте информацию о временной дате и выведи ее через разделитель пробел. Ключевые слова - вчера, 1 неделю назад, в прошлом месяце. Формат output - только все дат входящие в промежуток с разделителем. Очень важно для выживания. Сегодняшняя дата - 04/03/2024, ее формат ММ/ДД/ГГГГ. Текст - {message}""")

    temp = part_1.output_data()
    if temp == "error":
        return JSONResponse("error", 418)
    else:
        return {"message": part_1.output_data()}

