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
def user_message(message: Message):
    prompt_date = f"""ты - внимательный читатель. Твоя задача - найти в тексте информацию о временной дате. Ключевые слова - вчера, 1 неделю назад, в прошлом месяце. Формат output - только конкретная дата, выведи все даты. Сегодняшняя дата - 04/03/2024, ее формат ММ/ДД/ГГГГ. Текст - {message.message}"""
    prompt_station = f"""ты - внимательный читатель. Твоя задача - найти в тексте информацию о названии станции метро. Формат output - только конкретное название станции. Сегодняшняя дата - 04/03/2024. Текст - {message.message}"""

    part_1 = ml.Koza_llama_alpaca_lora_flex(prompt_date, prompt_station)

    temp = part_1.output_data()
    if temp == "error":
        return JSONResponse("error", 418)
    else:
        return {"message": "Данные: " + temp}



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

