const axios = require('axios');
function Arrogan(username, password) {
    this.apiurl = "https://api.arrogan.gg"
    this.username = username;
    this.password = password;
}
this.token = undefined;
Arrogan.prototype.authorization = async function () {
    try {
        const { data } = await axios.post(this.apiurl + '/api/auth', { email: this.username, password: this.password }, {
            headers: {
                "Content-Type": "application/json"
            }
        })
        this.token = data.token;
    } catch (e) {
        return data.message;
    }
}
Arrogan.prototype.getInstance = async function () {
    try {
        const { data } = await axios.get(this.apiurl + '/api/instance', {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + this.token
            }
        })
        return data;
    } catch (e) {
        return e;
    }
}
Arrogan.prototype.getBalance = async function () {
    try {
        const { data } = await axios.get(this.apiurl + '/api/user/balance', {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + this.token
            }
        })
        return data.balance;
    } catch (e) {
        return e;
    }
}
Arrogan.prototype.startInstance = async function () {
    try {
        const { data } = await axios.post(this.apiurl + '/api/instance/start', {}, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + this.token
            }
        })
        return data;
    } catch (e) {
        return e;
    }
}
Arrogan.prototype.stopInstance = async function () {
    try {
        const { data } = await axios.post(this.apiurl + '/api/instance/stop', {}, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + this.token
            }
        })
        return data;
    } catch (e) {
        return e;
    }
}
Arrogan.prototype.createInstance = async function (region, type) {
    try {
        const { data } = await axios.post(this.apiurl + '/api/instance', {
            region: region,
            type: type
        }, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + this.token
            }
        })
        return data;
    } catch (e) {
        return e;
    }
}
Arrogan.prototype.deleteInstance = async function (region, type) {
    try {
        const { data } = await axios.post(this.apiurl + '/api/instance/delete', {}, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + this.token
            }
        })
        return data;
    } catch (e) {
        return e;
    }
}
Arrogan.prototype.getUser = async function () {
    try {
        const { data } = await axios.get(this.apiurl + '/api/user', {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + this.token
            }
        })
        return data;
    } catch (e) {
        return e;
    }
}
module.exports = Arrogan;