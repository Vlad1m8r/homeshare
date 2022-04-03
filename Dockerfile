FROM node

WORKDIR /app

#Копируем и устанавливаем для того чтобы докер
#отдельно их захешировал, и в след раз не устанавливал
COPY package.json /app
# ЗАпускается один раз при создании image
RUN npm install

#Копирует содержимое текущего каталога в рабочую дир (/app)
COPY . .

# Порты выставлнные наружу
EXPOSE 3000

# Запускается каждый раз при создании контейнера
CMD ["npm", "start"]
#RUN npm run build