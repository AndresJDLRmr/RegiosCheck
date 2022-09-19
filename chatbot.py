import json
import random
from chatterbot import ChatBot 
from chatterbot.trainers import ListTrainer
from chatterbot.trainers import ChatterBotCorpusTrainer

data = json.loads(open(r"C:\Users\Juan Amaya\Documents\Estudio\8-Octavo Semestre\Sistemas Inteligentes\Proyecto\Proyecto\PYTHON\lugares.json", 'r', encoding='utf-8-sig').read())

train = []

for k, row in enumerate(data):
  train.append(row['question'])
  # random.shuffle(row['answers'])
  train.append(row['answers'][random.randrange(0, len(row['answers']), 1)])

chatbot = ChatBot('RegiosCheck')

entrenador = ListTrainer(chatbot)

entrenador.train(train)
