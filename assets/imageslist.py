""" Script para criar um arquivo javascript contendo uma lista de imagens jpeg, jpg e png """

import os

listaimg = os.listdir(".\\")
listajpg = [arq for arq in listaimg if arq.lower().endswith(".jpg")]
listajpeg = [arq for arq in listaimg if arq.lower().endswith(".jpeg")]
listapng = [arq for arq in listaimg if arq.lower().endswith(".png")]
listaimg = listajpg + listajpeg + listapng
listaimgjs = "var portfoliolist = ["
for i in range(len(listaimg) - 1):
    listaimgjs += "\"" + listaimg[i] + "\",\n "

listaimgjs += "\"" + listaimg[len(listaimg) - 1] + "\"]"

print(listaimgjs)
with open("portfoliolist.js", "w") as arquivo:
    arquivo.write(listaimgjs)
input("Pressione enter para sair!")
