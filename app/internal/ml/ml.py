import requests
import os
from dotenv import load_dotenv
import pandas as pd

load_dotenv()

BOT_ID = os.environ.get("BOT_ID_4")
# PORT = os.environ.get("PORT")
USER_ID = os.environ.get("USER_ID_4")
API_TOKEN = os.environ.get("API_TOKEN_4")
# DB_NAME = os.environ.get("DB_NAME")


data = pd.read_csv('data\\data.csv')
data.columns = ['Станция', "Номер линии  ", "Дата"] + ['0'+str(i) for i in data.columns[3:]]
data.columns = ['Станция', "Номер линии", "Дата"] + [str(i)[:3] + '0' + str(i)[3:] if len(i) == 9 else i for i in data.columns[3:]]

class Koza_llama_alpaca_lora_flex:
    def __init__(self, prompt_date, prompt_station):
        self.prompt_station = prompt_station
        self.prompt_date = prompt_date

    def output_date(self):
        url = 'https://api.coze.com/open_api/v2/chat'
        data = {'conversation_id': "123",
            "bot_id": f"{BOT_ID}",
            "user": f"{USER_ID}",
            "query": self.prompt_date,
            "stream":False}
        headers = {'Authorization': f'Bearer {API_TOKEN}'}

        response = requests.post(url, data=data, headers=headers)

        return response.json()['messages'][0]['content']

    def output_station(self):
        url = 'https://api.coze.com/open_api/v2/chat'
        data = {'conversation_id': "123",
            "bot_id": f"{BOT_ID}",
            "user": f"{USER_ID}",
            "query": self.prompt_station,
            "stream":False}
        headers = {'Authorization': f'Bearer {API_TOKEN}'}

        response = requests.post(url, data=data, headers=headers)

        return response.json()['messages'][0]['content']

    def output_station(self):
        url = 'https://api.coze.com/open_api/v2/chat'
        data = {'conversation_id': "123",
                "bot_id": f"{BOT_ID}",
                "user": f"{USER_ID}",
                "query": self.prompt_station,
                "stream": False}
        headers = {'Authorization': f'Bearer {API_TOKEN}'}

        response = requests.post(url, data=data, headers=headers)

        return response.json()['messages'][0]['content']

    def output_data(self):
        try:
            all_date = self.output_date().split()
            tmp = []
            station = self.output_station()

            for i in all_date:
                tmp.append(f'{i} - {data[data["Станция"] == station][i].to_list()[0]} человек. ')
            return "\n".join(tmp)

        except Exception as ex:
            print(ex)
            return "error"


