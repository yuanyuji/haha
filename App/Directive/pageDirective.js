/**
 * Created by Nan on 2017/10/18.
 */
app.directive("page", function () {
    return {
        restrict: "EA",
        scope: {
            item: "=item"
        },
        templateUrl: "App/View/page.html",
    }
});