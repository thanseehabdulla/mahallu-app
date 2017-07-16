"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class API {
}
API.API_ENDPOINT = "http://localhost:4000";
API.API_REGISTER = API.API_ENDPOINT + "/users";
API.API_AccessToken = API.API_ENDPOINT + "/oauth/token";
API.API_ADDMAHAL = API.API_ENDPOINT + "/api/addmahal";
API.API_ADDMEMBER = API.API_ENDPOINT + "/api/addmember";
API.API_GETMAHAL = API.API_ENDPOINT + "/api/getmahal/";
API.API_GETMEMBERS = API.API_ENDPOINT + "/api/getmembers/";
API.API_UPDATEMAHAL = API.API_ENDPOINT + "/api/updatemahal/";
API.API_UPDATEMEMBERS = API.API_ENDPOINT + "/api/updatemembers/";
API.API_REMOVEMEMBERS = API.API_ENDPOINT + "/api/removemembers/";
API.API_REMOVEMAHAL = API.API_ENDPOINT + "/api/removemahal/";
API.API_UPDATEPASSWORD = API.API_ENDPOINT + '/api/updatepassword';
exports.API = API;
