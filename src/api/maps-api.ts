import axios from "axios";

const MapsInstance = axios.create({
    baseURL: 'https://api.tomtom.com/map/1/tile/basic/main/2/1/1.jpg?key=cnyV3FttzEnSVJxnBZSJAkrwvErLAPdj&tileSize=256&view=RU&language=ru-RU',
    // withCredentials: true,
    params: {
        appid: '3929ddf77b924b797c8a4c1418ff771f'
    }
})
