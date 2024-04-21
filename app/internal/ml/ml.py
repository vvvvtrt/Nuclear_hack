import requests
import os
from dotenv import load_dotenv
import pandas as pd

load_dotenv()

BOT_ID = os.environ.get("BOT_ID_2")
# PORT = os.environ.get("PORT")
USER_ID = os.environ.get("USER_ID_2")
API_TOKEN = os.environ.get("API_TOKEN_2")
# DB_NAME = os.environ.get("DB_NAME")


data = pd.read_csv('data\\data.csv')
data.columns = ['Станция', "Номер линии  ", "Дата"] + ['0'+str(i) for i in data.columns[3:]]
data.columns = ['Станция', "Номер линии", "Дата"] + [str(i)[:3] + '0' + str(i)[3:] if len(i) == 9 else i for i in data.columns[3:]]

class Koza_llama_alpaca_lora_flex:
    def __init__(self, prompt):
        self.prompt = prompt

    def output_date(self):
        url = 'https://api.coze.com/open_api/v2/chat'
        data = {'conversation_id': "123",
                "bot_id": f"{BOT_ID}",
                "user": f"{USER_ID}",
                "query": self.prompt,
                "stream": False}
        headers = {'Authorization': f'Bearer {API_TOKEN}'}

        response = requests.post(url, data=data, headers=headers)

        return response.json()['messages'][0]['content']

    def output_station(self):
        url = 'https://api.coze.com/open_api/v2/chat'
        data = {'conversation_id': "123",
                "bot_id": f"{BOT_ID}",
                "user": f"{USER_ID}",
                "query": self.prompt,
                "stream": False}
        headers = {'Authorization': f'Bearer {API_TOKEN}'}

        response = requests.post(url, data=data, headers=headers)

        return response.json()['messages'][0]['content']

    def output_data(self):
        try:

            query = [f"date - {data.loc[data['Станция'].str == f'{self.output_station()}'][f'{date}']}" for
                     date in self.output_date().split()]

            return query

        except Exception as ex:
            print(ex)
            return "error"


if __name__ == '__main__':
    part_1 = Koza_llama_alpaca_lora_flex("""ты - внимательный читатель. Твоя задача - найти в тексте информацию о временной дате. Ключевые слова - вчера, 1 неделю назад, в прошлом месяце. Формат output - только конкретная дата, выведи все даты. Сегодняшняя дата - 04/03/2024, ее формат ММ/ДД/ГГГГ.
    Текст - найди информацию об оттоке пассажиров за последний месяц, выведи все даты""")
    # data.loc[data['Станция'] == f'{part_1.output_station()}'][f'{part_1.output_date()}']
    print(part_1.output_date())