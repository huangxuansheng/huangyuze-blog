var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// 定义属性装饰器;
function logProperty(params) {
    // target--->类的原型对象；attr--->传入的参数url
    // return function(target: any, attr: any) {
    //   console.log("属性装饰器;", target, attr);
    //   target[attr] = params;
    // };
    return function (url, trueUrl) {
        console.log("属性装饰", url, trueUrl);
    };
}
var HttpClient = /** @class */ (function () {
    function HttpClient() {
    }
    HttpClient.prototype.getUrl = function () {
        console.log("getUrl", this.url);
    };
    __decorate([
        logProperty("http://www.baidu.com")
    ], HttpClient.prototype, "url");
    return HttpClient;
}());
console.log(new HttpClient().getUrl());
