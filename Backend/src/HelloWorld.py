# -*- coding: utf-8 -*-
# @Author: Heliang
# @Date:   2022-05-15 22:45:36
# @Last Modified by:   Heliang
# @Last Modified time: 2022-05-15 23:28:24

from fastapi import FastAPI
import uvicorn

app = FastAPI()


@app.get("/")
def Hello():
    return "Hello World"


if __name__ == "__main__":
    uvicorn.run(app, host='127.0.0.1', port=8000)
