import psycopg2
import asyncio
from dotenv import load_dotenv
import warnings
import os
import random

load_dotenv()

HOST = os.environ.get("HOST")
PORT = os.environ.get("PORT")
USER = os.environ.get("USER")
PASSWORD = os.environ.get("PASSWORD")
DB_NAME = os.environ.get("DB_NAME")

warnings.simplefilter("always")


async def create_data():
    connection = None

    try:
        connection = psycopg2.connect(
            host=HOST,
            port=PORT,
            user=USER,
            password=PASSWORD,
            database=DB_NAME
        )
        connection.autocommit = True

        with connection.cursor() as cursor:
            cursor.execute(
                F"""CREATE TABLE {DB_NAME}(
                        id INT,
                        name varchar(100),
                        second_name varchar(100),
                        patronymic varchar(100),
                        birth_data varchar(50),
                        death_data varchar(50),
                        birth_place varchar(100),
                        death_place varchar(100),
                        partner varchar(100),
                        kind varchar(100),
                        workplace varchar(100),
                        awards varchar(100),
                        epitaph varchar(10000),
                        biography_1 varchar(10000),
                        biography_2 varchar(10000),
                        biography_3 varchar(10000),
                        biography_4 varchar(10000),
                        word_familiar varchar(10000)
                        );
                        """
            )
        print("[INFO] Table created")

    except Exception as _ex:
        warnings.warn(f"Error: {_ex}")
        return "error"

    finally:
        if connection:
            connection.close()

        return "ok"

