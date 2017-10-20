var gulp = require("gulp");
var webserver = require("gulp-webserver");
var url = require("url");


gulp.task("server", function () {
    gulp.src(".")
        .pipe(webserver({
            livereload: true,
            directoryListing: true,
            middleware: function (req, res, next) {
                var requestUrl = url.parse(req.url).pathname;
                console.log(requestUrl);
                if (requestUrl == "/pag") {
                    var data = [{
                        id: 1,
                        image: "http://localhost:7799/Content/images/car_14.jpg",
                        name: "上汽大众-全新旅途",
                        content: "上汽大众-全新旅途L享2年0利率",
                        price: "1元"
                    },
                        {
                            id: 2,
                            image: "http://localhost:7799/Content/images/car_16.jpg",
                            name: "上汽大众-全新旅途",
                            content: "上汽大众-全新旅途L享2年0利率",
                            price: "1元"
                        },
                        {
                            id: 3,
                            image: "http://localhost:7799/Content/images/car_20.jpg",
                            name: "上汽大众-全新旅途",
                            content: "上汽大众-全新旅途L享2年0利率",
                            price: "1元"
                        },
                        {
                            id: 4,
                            image: "http://localhost:7799/Content/images/car_21.jpg",
                            name: "上汽大众-全新旅途",
                            content: "上汽大众-全新旅途L享2年0利率",
                            price: "1元"
                        },
                        {
                            id: 5,
                            image: "http://localhost:7799/Content/images/car_24.jpg",
                            name: "上汽大众-全新旅途",
                            content: "上汽大众-全新旅途L享2年0利率",
                            price: "1元"
                        },
                        {
                            id: 6,
                            image: "http://localhost:7799/Content/images/car_25.jpg",
                            name: "上汽大众-全新旅途",
                            content: "上汽大众-全新旅途L享2年0利率",
                            price: "1元"
                        }
                    ];
                    res.writeHead(200, {
                        "Content-type": "application/json;charset=UTF-8",
                        "Access-Control-Allow-Origin": "*"
                    });
                    res.write(JSON.stringify(data));
                    res.end();
                }
                next()
            },
            open: "/index.html",
            port: 7799
        }))
});