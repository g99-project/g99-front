import axios from 'axios';

const BASE_URL = "http://localhost:8080";
const MAIN_API = BASE_URL + "/api/v1/main";

class MainService {

    getMain() {
        return axios.get(MAIN_API);
    }
}

export default new MainService();
