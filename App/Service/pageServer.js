app.factory("pageServer", ["baseServer", function (baseServer) {
    return {
        getPage: function (type, url) {
            return baseServer.ajax(type, url);
        }
    }
}]);