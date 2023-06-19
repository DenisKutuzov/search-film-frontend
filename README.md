Инструкция по тому, как запустить и посмотреть проект локально c работающими серверами:

1) Сделать git clone https://github.com/M-D-I-kinopoisk/search-film-frontend.git

2) Сделать git clone https://github.com/Keronon/__learnjs_Project_A.git

3) Скачать https://drive.google.com/file/d/1yvaQp2c-QtMsLnfBHxXuz2F5Lle99XPy/view?usp=sharing и переместить папку images в папку из пункта 2)

4) Чтобы запустить контейнеры docker, необходимо зайти в IDE, открыть папку из пункта 2 и прописать в терминале следующую команду: docker-compose up -d --build

5) Вскоре после этого контейнеры будут запущены, а вам нужно будет зайти в IDE, открыть папку из пункта 1 и прописать npm run dev.  Вскоре после этого в вашем браузере на http://localhost:3000 появится данный сайт.

6) Чтобы зайти как Администратор, введите при авторизации :<br/>
   e-mail       :   mail@mail.io <br/>
   password :   password


Команды, которые можно использовать:

    npm run dev - запускает проект
    npm run build - собирает проект  
    npm run sb - запускает StoryBook проекта
    npm run build-storybook - собирает StoryBook проекта
    npm run test - запускает тесты 
    npm run cypress:open - так же запускает тесты

Все команды при необходимости нужно прописывать в терминале.

Основной стек проекта:

Typescript,
Next,
Redux,
Jest,
Cypress

