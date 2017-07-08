"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var API = (function () {
    function API() {
    }
    return API;
}());
API.API_ENDPOINT = "http://localhost:4000";
API.API_REGISTER = API.API_ENDPOINT + "/users";
API.API_AccessToken = API.API_ENDPOINT + "/oauth/token";
API.API_ADDMAHAL = API.API_ENDPOINT + "/api/addmahal";
API.API_GETMAHAL = API.API_ENDPOINT + "/api/getmahal/";
API.API_UPDATEMAHAL = API.API_ENDPOINT + "/api/updatemahal/";
API.API_REMOVEMAHAL = API.API_ENDPOINT + "/api/removemahal/";
API.API_UPDATEPASSWORD = API.API_ENDPOINT + '/api/updatepassword';
exports.API = API;
//# sourceMappingURL=api_config.js.map