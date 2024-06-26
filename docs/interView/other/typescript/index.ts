// 定义属性装饰器;
function logProperty(params: any) {
  // target--->类的原型对象；attr--->传入的参数url
  // return function(target: any, attr: any) {
  //   console.log("属性装饰器;", target, attr);
  //   target[attr] = params;
  // };
  return (url: any, trueUrl: string) => {
    console.log("属性装饰", url, trueUrl);
  };
}

class HttpClient {
  @logProperty("http://www.baidu.com")
  public url: any | undefined;
  constructor() {}
  getUrl() {
    console.log("getUrl", this.url);
  }
}

console.log(new HttpClient().getUrl());

var ttt = (): never => {
  while (true) {}
};

let num = [123, 123213, 12321321, 132];
let res = num.find((i) => i > 30);
let aaa = res as number;
let bbb = <number>res;

interface Post {
  val: string;
  aa?: number;
}

var tfun = (options: Post): void => {
  console.log(options);
};
tfun({ val: "123" });

class AS {
  readonly qqqq: any;
  ewqwq;
  constructor(opt: any) {
    console.log(opt);
    this.ewqwq = opt;
  }
  aa() {}
  public aas() {}
  static das() {}
  protected qwe() {}
  asdsad() {}
}

function createArr<t>(length: number, value: t): t[] {
  return Array<t>(length).fill(value);
}

console.log(createArr(12, "12312"));
