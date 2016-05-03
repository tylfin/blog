from flask import Flask
from app.configs import CONFIGS
app = Flask(__name__, static_folder=CONFIGS['STATIC_PATH'],
    template_folder=CONFIGS['TEMPLATE_PATH'])
from app import views
