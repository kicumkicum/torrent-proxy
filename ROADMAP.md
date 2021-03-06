# Road Map of full torrent-proxy service

## Version 0.1.0

- [ ] WebApp: интерфейс: в удовлетворительном визуальном состоянии
    - [ ] WebApp: найти/реализовать визуальный стиль/верстку
- [x] WebApp: интерфейс: поле ввода хеша
- [x] WebApp: интерфейс: содержимое раздачи
- [x] WebApp: функциональность: по хешу получать список файлов в раздаче
- [x] WebApp: функциональность: по клику на файл из раздачи скачать средствами браузера
- [x] TorrentProxy: API: по хешу получить содержимое раздачи
- [x] TorrentProxy: API: по файлу из раздачи получить ссылку на скачивание
- [x] TorrentProxy: API: ссылка на скачивание возвращает stream
- [ ] TorrentProxy: API: поддержка нескольких клиентов
- [x] BitTorrent-stream: скачивать раздачи последовательно на любой скорости 
- [ ] BitTorrent-stream: закончить рефакторинг
- [ ] BitTorrent-stream: корректно закрывать соединение 
- [ ] Hosting/Server: поднять сервер для деплоя
    - [ ] Настроить домены `api.torrent-proxy.xyz`, `torrent-proxy.xyz`
    - [ ] Добавить скрипты в torrent-proxy и web-app для деплоя
    - [ ] Завести пространство для torrent-proxy и web-app

## Version 0.2.0

- [ ] BitTorrent-stream: увеличить скорость скачивания на 30 процентов
- [ ] BitTorrent-stream: решить проблему с нескачиванием - не нахождением пиров
- [ ] TorrentProxy: API: возвращать браузеру метаинфорамцию о скачиваемом файле
- [ ] TorrentProxy: API: поддержка паузы/восстановления закачки браузером
- [ ] Hosting/Server: поднять сервер для деплоя
- [ ] WebApp: интерфейс: сделать более-менее симпатичный интерфейс
- [ ] Hosting/Server: разделить деплой сервера и бека
