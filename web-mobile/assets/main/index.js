window.__require = function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var b = o.split("/");
        b = b[b.length - 1];
        if (!t[b]) {
          var a = "function" == typeof __require && __require;
          if (!u && a) return a(b, !0);
          if (i) return i(b, !0);
          throw new Error("Cannot find module '" + o + "'");
        }
        o = b;
      }
      var f = n[o] = {
        exports: {}
      };
      t[o][0].call(f.exports, function(e) {
        var n = t[o][1][e];
        return s(n || e);
      }, f, f.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = "function" == typeof __require && __require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
}({
  AtlasPlayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6e164ry4AJND7mI8958p2jj", "AtlasPlayer");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.atlas = null;
        _this.frames = [];
        _this.sprite = null;
        _this.index = 0;
        _this.interval = .1;
        return _this;
      }
      NewClass.prototype.onLoad = function() {
        this.sprite = this.getComponent(cc.Sprite);
        if (null != this.atlas) {
          this.frames = this.atlas.getSpriteFrames();
          cc.log(this.frames);
        }
      };
      NewClass.prototype.start = function() {
        this.schedule(this.onTimer, this.interval);
      };
      NewClass.prototype.onDestroy = function() {
        this.unschedule(this.onTimer);
      };
      NewClass.prototype.onTimer = function() {
        if (0 == this.frames.length) return;
        this.sprite.spriteFrame = this.frames[this.index];
        this.index++;
        this.index >= this.frames.length && (this.index = 0);
      };
      __decorate([ property([ cc.SpriteAtlas ]) ], NewClass.prototype, "atlas", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {} ],
  BallScript: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "45b53O2j6FBKaqV3EM+1tEL", "BallScript");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = "hello";
        return _this;
      }
      NewClass.prototype.onLoad = function() {
        this.node.on("touchstart", this.onClicked, this);
      };
      NewClass.prototype.start = function() {};
      NewClass.prototype.onClicked = function() {
        var h = 300;
        cc.log("NOOOOOO");
        cc.tween(this.node).by(.5, {
          position: cc.v3(0, -h, 0)
        }, {
          easing: "quardIn"
        }).by(.2, {
          position: cc.v3(0, h / 6, 0)
        }, {
          easing: "quardOut"
        }).by(.2, {
          position: cc.v3(0, -h / 6, 0)
        }, {
          easing: "quardIn"
        }).start();
      };
      __decorate([ property(cc.Label) ], NewClass.prototype, "label", void 0);
      __decorate([ property ], NewClass.prototype, "text", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {} ],
  GifPlayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4e6db7op2hEFKVyHGeHZ7tq", "GifPlayer");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.frames = [];
        _this.sprite = null;
        _this.index = 0;
        _this.interval = .1;
        return _this;
      }
      NewClass.prototype.onLoad = function() {
        this.sprite = this.getComponent(cc.Sprite);
      };
      NewClass.prototype.start = function() {
        this.schedule(this.onTimer, this.interval);
      };
      NewClass.prototype.onDestroy = function() {
        this.unschedule(this.onTimer);
      };
      NewClass.prototype.onTimer = function() {
        if (0 == this.frames.length) return;
        this.sprite.spriteFrame = this.frames[this.index];
        this.index++;
        this.index >= this.frames.length && (this.index = 0);
      };
      __decorate([ property([ cc.SpriteFrame ]) ], NewClass.prototype, "frames", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {} ],
  Null: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7e4dcP/M05BZIAAm/HDWX7Z", "Null");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = "hello";
        _this.direction = null;
        return _this;
      }
      NewClass.prototype.onKeyPress = function(e) {
        e.keyCode == cc.macro.KEY.left ? this.direction = cc.v2(-1, 0) : e.keyCode == cc.macro.KEY.right ? this.direction = cc.v2(1, 0) : e.keyCode == cc.macro.KEY.up ? this.direction = cc.v2(0, 1) : e.keyCode == cc.macro.KEY.down ? this.direction = cc.v2(0, -1) : e.keyCode == cc.macro.KEY.space && (this.direction = null);
      };
      NewClass.prototype.update = function(dt) {
        if (null == this.direction) return;
        var pos = this.node.getPosition();
        pos.x += this.speed * this.direction.x;
        pos.y += this.speed * this.direction.y;
        this.node.setPosition(pos);
      };
      __decorate([ property(cc.Label) ], NewClass.prototype, "label", void 0);
      __decorate([ property ], NewClass.prototype, "text", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {} ],
  ShowTips: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "65598xiBOFI5LJef64ijmdy", "ShowTips");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = null;
        _this.index = 0;
        return _this;
      }
      NewClass.prototype.onLoad = function() {
        this.label = this.getComponent(cc.Label);
        cc.log(this.label);
        this.text = this.label.string;
        cc.log(this.text);
        this.label.string = "";
        this.schedule(this.onTimer, .3);
      };
      NewClass.prototype.start = function() {};
      NewClass.prototype.onTimer = function() {
        this.index++;
        var str = this.text.substring(0, this.index);
        this.label.string = str;
        this.index >= this.text.length && this.unschedule(this.onTimer);
      };
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {} ],
  sResources: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "26b2dH8UL9DS5TgRgVrzxOm", "sResources");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      NewClass.prototype.onLoad = function() {
        this.node.on("touchstart", this.onClicked, this);
      };
      NewClass.prototype.start = function() {};
      NewClass.prototype.onClicked = function() {
        var self = this;
        cc.resources.load("b-1", cc.SpriteFrame, function(err, assets) {
          self.node.getComponent(cc.Sprite).spriteFrame = assets;
        });
      };
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {} ],
  xiyouScript: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b545alGLcRBN52fp5WMlwq1", "xiyouScript");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = "hello";
        _this.speed = 3;
        _this.direction = null;
        return _this;
      }
      NewClass.prototype.onLoad = function() {
        this.node.on("mousedown", this.moveLeft, this);
        cc.systemEvent.on("keydown", this.onKeyPress, this);
      };
      NewClass.prototype.start = function() {
        cc.log("\u7ec4\u4ef6");
      };
      NewClass.prototype.update = function(dt) {
        if (null == this.direction) return;
        var pos = this.node.getPosition();
        pos.x += this.speed * this.direction.x;
        pos.y += this.speed * this.direction.y;
        this.node.setPosition(pos);
      };
      NewClass.prototype.moveLeft = function() {
        this.node.x -= 20;
        var x = this.node.x;
        var y = this.node.y;
        cc.log("node at:", x, ",", y);
      };
      NewClass.prototype.onKeyPress = function(e) {
        e.keyCode == cc.macro.KEY.left ? this.direction = cc.v2(-1, 0) : e.keyCode == cc.macro.KEY.right ? this.direction = cc.v2(1, 0) : e.keyCode == cc.macro.KEY.up ? this.direction = cc.v2(0, 1) : e.keyCode == cc.macro.KEY.down ? this.direction = cc.v2(0, -1) : e.keyCode == cc.macro.KEY.space && (this.direction = null);
      };
      __decorate([ property(cc.Label) ], NewClass.prototype, "label", void 0);
      __decorate([ property ], NewClass.prototype, "text", void 0);
      __decorate([ property ], NewClass.prototype, "speed", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {} ]
}, {}, [ "AtlasPlayer", "BallScript", "GifPlayer", "Null", "ShowTips", "sResources", "xiyouScript" ]);