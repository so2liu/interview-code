var myObj = {
  foo: "bar",
  func: function () {
    var self = this;
    console.log(this.foo);
    console.log(self.foo);

    // 普通函数
    (function () {
      console.log(this.foo);
      // 不是obj.func的情况，this是window
      console.log(self.foo);
    })();

    // 箭头函数
    (() => {
      console.log(this.foo);
      // this从外环境里面找
      console.log(self.foo);
    })();
  },
};

myObj.func();
// bar
// bar

// undefined
// bar

// bar
// bar
