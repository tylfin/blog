import os

CONFIGS = {}

CONFIGS['DEBUG'] = True

CONFIGS['STATIC_PATH'] = os.path.join(os.getcwd(), 'public/static')

CONFIGS['TEMPLATE_PATH'] = os.path.join(os.getcwd(), 'public/templates')

print(CONFIGS['STATIC_PATH'], CONFIGS['TEMPLATE_PATH'])
