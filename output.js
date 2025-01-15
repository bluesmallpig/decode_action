//Wed Jan 15 2025 10:46:34 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
System.register("chunks:///_virtual/AimStage.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./CameraHandler.ts", "./ComposerHandler.ts", "./HardLookAtHandler.ts", "./BaseStage.ts"], function (_0x4fd8dd) {
  var _0x1fda91;
  var _0x166488;
  var _0x29a72c;
  var _0x57ee57;
  var _0x5b2627;
  var _0x1e5b95;
  return {
    setters: [function (_0x516314) {
      _0x1fda91 = _0x516314.inheritsLoose;
    }, function (_0x4c628c) {
      _0x166488 = _0x4c628c.cclegacy;
    }, function (_0x3cfb71) {
      _0x29a72c = _0x3cfb71.CameraHandler;
    }, function (_0x210a79) {
      _0x57ee57 = _0x210a79.ComposerHandler;
    }, function (_0x3c0238) {
      _0x5b2627 = _0x3c0238.HardLookAtHandler;
    }, function (_0x2e0fdc) {
      _0x1e5b95 = _0x2e0fdc.BaseStage;
    }],
    execute: function () {
      _0x166488._RF.push({}, "9aaa9R0RxZFwrBQPW5bAcZD", "AimStage", undefined);
      _0x4fd8dd("AimStage", function (_0x4db1e7) {
        function _0x59efae() {
          for (var _0xac74ae, _0x366a51 = arguments.length, _0xad1c58 = new Array(_0x366a51), _0x40c7da = 0; _0x40c7da < _0x366a51; _0x40c7da++) {
            _0xad1c58[_0x40c7da] = arguments[_0x40c7da];
          }
          (_0xac74ae = _0x4db1e7.call.apply(_0x4db1e7, [this].concat(_0xad1c58)) || this)._handlers = [new _0x29a72c(_0xac74ae._vcam), new _0x57ee57(_0xac74ae._vcam), new _0x5b2627(_0xac74ae._vcam)];
          return _0xac74ae;
        }
        _0x1fda91(_0x59efae, _0x4db1e7);
        var _0x8b28f0 = _0x59efae.prototype;
        _0x8b28f0.onEnable = function () {
          this._handlers.forEach(function (_0x22a5b9) {
            {
              return _0x22a5b9.enable = true;
            }
          });
        };
        _0x8b28f0.onDisable = function () {
          {
            this._handlers.forEach(function (_0xb5d6c4) {
              return _0xb5d6c4.enable = false;
            });
          }
        };
        _0x8b28f0.updateStage = function (_0x4c179) {
          var _0x3d779c = this._vcam.aim;
          var _0x521fbd = this._handlers[_0x3d779c.type];
          _0x521fbd && _0x521fbd.updateCamera(_0x4c179);
        };
        return _0x59efae;
      }(_0x1e5b95));
      _0x166488._RF.pop();
    }
  };
});
System.register("chunks:///_virtual/AppTool.ts", ["cc", "./webTools.ts"], function (_0x515943) {
  var _0x5a6041;
  var _0x39b0b8;
  return {
    setters: [function (_0x1d6cb5) {
      _0x5a6041 = _0x1d6cb5.cclegacy;
    }, function (_0x56eef3) {
      _0x39b0b8 = _0x56eef3.getUrlParams;
    }],
    execute: function () {
      _0x515943({
        isIos: function () {
          return navigator.userAgent.match(/iphone|ipod|ipad/gi);
        },
        isType1: function () {
          return 1 == +_0x39b0b8("type");
        },
        miniGoUrl: function (_0x2ec9b5) {
          wx.miniProgram.navigateTo({
            url: _0x2ec9b5,
            success: function () {
              console.log("跳转成功");
            },
            fail: function (_0x2ed979) {
              console.error("跳转失败", _0x2ed979);
            }
          });
        }
      });
      _0x5a6041._RF.push({}, "0515br/+iVCB67j8DZgIC1J", "AppTool", undefined);
      _0x5a6041._RF.pop();
    }
  };
});
System.register("chunks:///_virtual/AudioMgr.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], function (_0x4e2cf4) {
  var _0x5022db;
  var _0x4271db;
  var _0x25403f;
  var _0xdeb2e5;
  var _0xecd125;
  var _0x1155b3;
  var _0xd80960;
  return {
    setters: [function (_0x31ab72) {
      _0x5022db = _0x31ab72.extends;
      _0x4271db = _0x31ab72.createClass;
    }, function (_0x589ab1) {
      _0x25403f = _0x589ab1.cclegacy;
      _0xdeb2e5 = _0x589ab1.AudioClip;
      _0xecd125 = _0x589ab1.assetManager;
      _0x1155b3 = _0x589ab1.Node;
      _0xd80960 = _0x589ab1.AudioSource;
    }],
    execute: function () {
      _0x25403f._RF.push({}, "d506fCKEkdMY7qkdZWU6ieq", "AudioMgr", undefined);
      _0x4e2cf4("AudioMgr", function () {
        {
          function _0x4c6e61() {
            {
              this._audioSource = undefined;
              this._musicVolume = 1;
              this._musicVolumeScale = 1;
              this._soundVolume = 1;
              new _0x1155b3().name = "__audioMgr__";
              this._audioSource = new _0xd80960();
            }
          }
          var _0x539828 = _0x4c6e61.prototype;
          _0x539828.playOneShot = function (_0x5bddf3, _0x1a4a36) {
            var _0x482b0a = this;
            (undefined === _0x1a4a36 && (_0x1a4a36 = {}), _0x1a4a36 = _0x5022db({
              bundleName: "resources",
              volume: this.soundVolume
            }, _0x1a4a36), _0x5bddf3 instanceof _0xdeb2e5) ? this.audioSource.playOneShot(_0x5bddf3, _0x1a4a36.volume) : _0xecd125.getBundle(_0x1a4a36.bundleName).load(_0x5bddf3, function (_0x460540, _0x56e53e) {
              _0x460540 ? console.log(_0x460540) : _0x482b0a.audioSource.playOneShot(_0x56e53e, _0x1a4a36.volume);
            });
          };
          _0x539828.play = function (_0x4ffe11, _0x3beba2) {
            var _0xaa9d44 = this;
            (undefined === _0x3beba2 && (_0x3beba2 = {}), _0x3beba2 = _0x5022db({
              bundleName: "resources",
              loop: true,
              volume: 1
            }, _0x3beba2), this._musicVolumeScale = _0x3beba2.volume, _0x4ffe11 instanceof _0xdeb2e5) ? (this.audioSource.clip = _0x4ffe11, this.audioSource.loop = _0x3beba2.loop, this.audioSource.play(), this.audioSource.volume = this._musicVolume * this._musicVolumeScale) : _0xecd125.getBundle(_0x3beba2.bundleName).load(_0x4ffe11, function (_0x33aada, _0x265796) {
              _0x33aada ? console.log(_0x33aada) : (_0xaa9d44.audioSource.clip = _0x265796, _0xaa9d44.audioSource.loop = _0x3beba2.loop, _0xaa9d44.audioSource.play(), _0xaa9d44.audioSource.volume = _0xaa9d44._musicVolume * _0xaa9d44._musicVolumeScale);
            });
          };
          _0x539828.stop = function () {
            this._audioSource.stop();
          };
          _0x539828.pause = function () {
            this._audioSource.pause();
          };
          _0x539828.resume = function () {
            this._audioSource.play();
          };
          _0x4271db(_0x4c6e61, [{
            key: "audioSource",
            get: function () {
              return this._audioSource;
            }
          }, {
            key: "musicVolume",
            get: function () {
              return this._musicVolume;
            },
            set: function (_0x5b0bae) {
              this._musicVolume = _0x5b0bae;
              this._audioSource.volume = this._musicVolume * this._musicVolumeScale;
            }
          }, {
            key: "soundVolume",
            get: function () {
              return this._soundVolume;
            },
            set: function (_0x3f6b9f) {
              this._soundVolume = _0x3f6b9f;
            }
          }], [{
            key: "ins",
            get: function () {
              this._ins || (this._ins = new _0x4c6e61());
              return this._ins;
            }
          }]);
          return _0x4c6e61;
        }
      }())._ins = undefined;
      _0x25403f._RF.pop();
    }
  };
});
System.register("chunks:///_virtual/Ball.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], function (_0x49e197) {
  var _0x27fb21;
  var _0x44c353;
  var _0x3a7365;
  var _0x4e1b7f;
  var _0x5abbfd;
  var _0x5e8a85;
  var _0x57121d;
  var _0x4b0de0;
  var _0x532939;
  return {
    setters: [function (_0xa61a7b) {
      _0x27fb21 = _0xa61a7b.applyDecoratedDescriptor;
      _0x44c353 = _0xa61a7b.inheritsLoose;
      _0x3a7365 = _0xa61a7b.initializerDefineProperty;
      _0x4e1b7f = _0xa61a7b.assertThisInitialized;
    }, function (_0x258b9d) {
      _0x5abbfd = _0x258b9d.cclegacy;
      _0x5e8a85 = _0x258b9d._decorator;
      _0x57121d = _0x258b9d.ccenum;
      _0x4b0de0 = _0x258b9d.RigidBody;
      _0x532939 = _0x258b9d.Component;
    }],
    execute: function () {
      {
        var _0x88886e;
        var _0x467c14;
        var _0x88d7aa;
        var _0x36a9a0;
        var _0x399d0d;
        _0x5abbfd._RF.push({}, "92ad7CkqzdERKx29DNw0IAS", "Ball", undefined);
        var _0x526696 = _0x5e8a85.ccclass;
        var _0x32d50e = _0x5e8a85.property;
        var _0x11a28f = _0x49e197("BallType", function (_0x4cbb7e) {
          _0x4cbb7e[_0x4cbb7e.Red = 0] = "Red";
          _0x4cbb7e[_0x4cbb7e.Gold = 1] = "Gold";
          return _0x4cbb7e;
        }({}));
        _0x57121d(_0x11a28f);
        _0x49e197("Ball", (_0x88886e = _0x526696("Ball"), _0x467c14 = _0x32d50e({
          type: _0x11a28f
        }), _0x88886e((_0x399d0d = _0x27fb21((_0x36a9a0 = function (_0x212ecf) {
          function _0x36b251() {
            for (var _0x3f86ce, _0x54e3f0 = arguments.length, _0x14fe9a = new Array(_0x54e3f0), _0x101245 = 0; _0x101245 < _0x54e3f0; _0x101245++) {
              _0x14fe9a[_0x101245] = arguments[_0x101245];
            }
            _0x3f86ce = _0x212ecf.call.apply(_0x212ecf, [this].concat(_0x14fe9a)) || this;
            _0x3a7365(_0x3f86ce, "type", _0x399d0d, _0x4e1b7f(_0x3f86ce));
            _0x3f86ce.rb = null;
            _0x3f86ce.collected = false;
            _0x3f86ce.drawOrderNo = null;
            return _0x3f86ce;
          }
          _0x44c353(_0x36b251, _0x212ecf);
          var _0x3809ea = _0x36b251.prototype;
          _0x3809ea.onLoad = function () {
            this.rb = this.getComponent(_0x4b0de0);
            this.rb.enabled = false;
          };
          _0x3809ea.start = function () {};
          _0x3809ea.update = function (_0x20907f) {};
          _0x3809ea.onEnable = function () {};
          _0x3809ea.onDisable = function () {};
          _0x3809ea.reset = function (_0x2339b7) {
            var _0x10c3d8 = _0x2339b7.x;
            var _0x5b41c3 = _0x2339b7.y;
            var _0x1507d0 = _0x2339b7.z;
            var _0x4f9377 = _0x2339b7.drawOrderNo;
            this.node.setWorldPosition(_0x10c3d8, _0x5b41c3, _0x1507d0);
            this.drawOrderNo = _0x4f9377;
          };
          return _0x36b251;
        }(_0x532939)).prototype, "type", [_0x467c14], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function () {
            return _0x11a28f.Red;
          }
        }), _0x88d7aa = _0x36a9a0)) || _0x88d7aa));
        _0x5abbfd._RF.pop();
      }
    }
  };
});
System.register("chunks:///_virtual/Base.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], function (_0x4f2c67) {
  var _0xb8fdd4;
  var _0x2c2d04;
  return {
    setters: [function (_0x46f04b) {
      _0xb8fdd4 = _0x46f04b.createClass;
    }, function (_0x22316b) {
      _0x2c2d04 = _0x22316b.cclegacy;
    }],
    execute: function () {
      _0x2c2d04._RF.push({}, "3be5frJskNL5ZI9D4VeEHjM", "Base", undefined);
      var _0x5b201d = _0x4f2c67("BaseFlag", function (_0x50effd) {
        _0x50effd[_0x50effd.None = 0] = "None";
        _0x50effd[_0x50effd.Enable = 1] = "Enable";
        _0x50effd[_0x50effd.Custom = 4] = "Custom";
        return _0x50effd;
      }({}));
      _0x4f2c67("Base", function () {
        function _0x16b6d3() {
          this._objFlag = 0;
        }
        _0xb8fdd4(_0x16b6d3, [{
          key: "enable",
          get: function () {
            return !!(this._objFlag & _0x5b201d.Enable);
          },
          set: function (_0x3343d2) {
            _0x3343d2 ? this._objFlag & _0x5b201d.Enable || (this._objFlag |= _0x5b201d.Enable, this.onEnable && this.onEnable()) : this._objFlag & _0x5b201d.Enable && (this._objFlag &= ~_0x5b201d.Enable, this.onDisable && this.onDisable());
          }
        }]);
        return _0x16b6d3;
      }());
      _0x2c2d04._RF.pop();
    }
  };
});
System.register("chunks:///_virtual/BaseStage.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Base.ts"], function (_0x9a1774) {
  var _0x83bec;
  var _0x4a3f72;
  var _0x520cfc;
  return {
    setters: [function (_0x235f38) {
      _0x83bec = _0x235f38.inheritsLoose;
    }, function (_0x17d964) {
      _0x4a3f72 = _0x17d964.cclegacy;
    }, function (_0x1ef82a) {
      _0x520cfc = _0x1ef82a.Base;
    }],
    execute: function () {
      _0x4a3f72._RF.push({}, "f3957i4i6tInKV6Rdsk1/N/", "BaseStage", undefined);
      _0x9a1774("BaseStage", function (_0x2dee26) {
        function _0x413103(_0x2bedd8) {
          var _0x2321d4;
          (_0x2321d4 = _0x2dee26.call(this) || this)._vcam = _0x2bedd8;
          return _0x2321d4;
        }
        _0x83bec(_0x413103, _0x2dee26);
        var _0x3a70b5 = _0x413103.prototype;
        _0x3a70b5.updateStage = function (_0x3690c5) {};
        _0x3a70b5.onLookAtChanged = function (_0x25de38) {};
        _0x3a70b5.onFollowChanged = function (_0x22a7cc) {};
        return _0x413103;
      }(_0x520cfc));
      _0x4a3f72._RF.pop();
    }
  };
});
System.register("chunks:///_virtual/BodyStage.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./CameraHandler.ts", "./FreeLookHandler.ts", "./TrackedHandler.ts", "./BaseStage.ts"], function (_0x34cf64) {
  var _0x377bd5;
  var _0x25e41b;
  var _0x58797b;
  var _0x971cf2;
  var _0x1b6516;
  var _0x11dd50;
  return {
    setters: [function (_0x19801e) {
      _0x377bd5 = _0x19801e.inheritsLoose;
    }, function (_0x5bb66e) {
      _0x25e41b = _0x5bb66e.cclegacy;
    }, function (_0x3eac9e) {
      _0x58797b = _0x3eac9e.CameraHandler;
    }, function (_0x550670) {
      _0x971cf2 = _0x550670.FreeLookHandler;
    }, function (_0xcf80c9) {
      _0x1b6516 = _0xcf80c9.TrackedHandler;
    }, function (_0x8a34cc) {
      _0x11dd50 = _0x8a34cc.BaseStage;
    }],
    execute: function () {
      _0x25e41b._RF.push({}, "91293QxSQ5IN51MM9zHKjye", "BodyStage", undefined);
      _0x34cf64("BodyStage", function (_0x58869e) {
        function _0x273fac() {
          for (var _0x254055, _0x3f7e17 = arguments.length, _0x373e8d = new Array(_0x3f7e17), _0x2141b0 = 0; _0x2141b0 < _0x3f7e17; _0x2141b0++) {
            _0x373e8d[_0x2141b0] = arguments[_0x2141b0];
          }
          (_0x254055 = _0x58869e.call.apply(_0x58869e, [this].concat(_0x373e8d)) || this)._handlers = [new _0x58797b(_0x254055._vcam), new _0x971cf2(_0x254055._vcam), new _0x1b6516(_0x254055._vcam)];
          return _0x254055;
        }
        _0x377bd5(_0x273fac, _0x58869e);
        var _0x372b85 = _0x273fac.prototype;
        _0x372b85.onEnable = function () {
          this._handlers.forEach(function (_0x52de0e) {
            return _0x52de0e.enable = true;
          });
        };
        _0x372b85.onDisable = function () {
          this._handlers.forEach(function (_0xaf974f) {
            return _0xaf974f.enable = false;
          });
        };
        _0x372b85.onLookAtChanged = function (_0x436a0b) {
          this._handlers.forEach(function (_0x9a4fa) {
            return _0x9a4fa.onLookAtChanged(_0x436a0b);
          });
        };
        _0x372b85.updateStage = function (_0x536bb2) {
          var _0x2dbcae = this._vcam.body;
          var _0x5355de = this._handlers[_0x2dbcae.type];
          _0x5355de && _0x5355de.updateCamera(_0x536bb2);
        };
        return _0x273fac;
      }(_0x11dd50));
      _0x25e41b._RF.pop();
    }
  };
});
System.register("chunks:///_virtual/CameraHandler.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Base.ts"], function (_0x50e3b1) {
  var _0x292ea6;
  var _0x51874a;
  var _0x15d9c6;
  return {
    setters: [function (_0x5885dd) {
      _0x292ea6 = _0x5885dd.inheritsLoose;
    }, function (_0x3db442) {
      _0x51874a = _0x3db442.cclegacy;
    }, function (_0x58bc85) {
      _0x15d9c6 = _0x58bc85.Base;
    }],
    execute: function () {
      _0x51874a._RF.push({}, "afacb7lEPtHtbhSDdmkKpy2", "CameraHandler", undefined);
      _0x50e3b1("CameraHandler", function (_0x468182) {
        function _0x133563(_0x27f30a) {
          var _0x45097f;
          (_0x45097f = _0x468182.call(this) || this)._vcam = _0x27f30a;
          return _0x45097f;
        }
        _0x292ea6(_0x133563, _0x468182);
        var _0x2d1adf = _0x133563.prototype;
        _0x2d1adf.updateCamera = function (_0x39fbb5) {};
        _0x2d1adf.onLookAtChanged = function (_0x5c5c00) {};
        _0x2d1adf.onFollowChanged = function (_0x2b1f5d) {};
        return _0x133563;
      }(_0x15d9c6));
      _0x51874a._RF.pop();
    }
  };
});
System.register("chunks:///_virtual/CharacterMovement.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./EasyController.ts"], function (_0x472cda) {
  var _0x3b09d7;
  var _0x7ab501;
  var _0x11a2c4;
  var _0x181f14;
  var _0x365fe9;
  var _0x35b4c7;
  var _0x14ed72;
  var _0x496746;
  var _0x4fcdc1;
  var _0x499189;
  var _0x34ec5d;
  var _0x18cbfd;
  var _0x510767;
  var _0x1eb9fe;
  var _0x5e76a8;
  var _0x90ea75;
  var _0x557883;
  return {
    setters: [function (_0x3ccee1) {
      _0x3b09d7 = _0x3ccee1.applyDecoratedDescriptor;
      _0x7ab501 = _0x3ccee1.inheritsLoose;
      _0x11a2c4 = _0x3ccee1.initializerDefineProperty;
      _0x181f14 = _0x3ccee1.assertThisInitialized;
    }, function (_0x3ce018) {
      _0x365fe9 = _0x3ce018.cclegacy;
      _0x35b4c7 = _0x3ce018._decorator;
      _0x14ed72 = _0x3ce018.v3;
      _0x496746 = _0x3ce018.Camera;
      _0x4fcdc1 = _0x3ce018.AnimationClip;
      _0x499189 = _0x3ce018.find;
      _0x34ec5d = _0x3ce018.RigidBody;
      _0x18cbfd = _0x3ce018.Animation;
      _0x510767 = _0x3ce018.Collider;
      _0x1eb9fe = _0x3ce018.Vec3;
      _0x5e76a8 = _0x3ce018.Component;
    }, function (_0x4dc338) {
      _0x90ea75 = _0x4dc338.EasyController;
      _0x557883 = _0x4dc338.EasyControllerEvent;
    }],
    execute: function () {
      var _0x15f88a;
      var _0x5c24e7;
      var _0x3deed5;
      var _0x1893b3;
      var _0x313765;
      var _0x345de3;
      var _0x1017ad;
      var _0x4fd1e0;
      var _0x4b153c;
      var _0x2a438c;
      var _0x306476;
      var _0x2a90ab;
      var _0x1866c4;
      var _0x9757c3;
      var _0x1a9bc5;
      var _0xf7f1f4;
      var _0x50cb29;
      var _0x370ac6;
      _0x365fe9._RF.push({}, "d197aTs7v1GkpwypdJ1ezJ8", "CharacterMovement", undefined);
      var _0x4fd46b = _0x35b4c7.ccclass;
      var _0x2fd29a = _0x35b4c7.property;
      var _0x4073b7 = _0x14ed72();
      _0x472cda("CharacterMovement", (_0x15f88a = _0x4fd46b("tgxCharacterMovement"), _0x5c24e7 = _0x2fd29a(_0x496746), _0x3deed5 = _0x2fd29a(_0x4fcdc1), _0x1893b3 = _0x2fd29a(_0x4fcdc1), _0x313765 = _0x2fd29a(_0x4fcdc1), _0x345de3 = _0x2fd29a(_0x4fcdc1), _0x1017ad = _0x2fd29a(_0x4fcdc1), _0x15f88a((_0x2a438c = _0x3b09d7((_0x4b153c = function (_0x1d7a11) {
        {
          function _0x105d86() {
            {
              for (var _0x394989, _0x38e15a = arguments.length, _0x561ea0 = new Array(_0x38e15a), _0x318cd9 = 0; _0x318cd9 < _0x38e15a; _0x318cd9++) {
                _0x561ea0[_0x318cd9] = arguments[_0x318cd9];
              }
              _0x394989 = _0x1d7a11.call.apply(_0x1d7a11, [this].concat(_0x561ea0)) || this;
              _0x11a2c4(_0x394989, "mainCamera", _0x2a438c, _0x181f14(_0x394989));
              _0x11a2c4(_0x394989, "velocity", _0x306476, _0x181f14(_0x394989));
              _0x11a2c4(_0x394989, "jumpVelocity", _0x2a90ab, _0x181f14(_0x394989));
              _0x11a2c4(_0x394989, "maxJumpTimes", _0x1866c4, _0x181f14(_0x394989));
              _0x394989._curJumpTimes = 0;
              _0x11a2c4(_0x394989, "idleAnimClip", _0x9757c3, _0x181f14(_0x394989));
              _0x11a2c4(_0x394989, "moveAnimClip", _0x1a9bc5, _0x181f14(_0x394989));
              _0x11a2c4(_0x394989, "jumpBeginAnimClip", _0xf7f1f4, _0x181f14(_0x394989));
              _0x11a2c4(_0x394989, "jumpLoopAnimClip", _0x50cb29, _0x181f14(_0x394989));
              _0x11a2c4(_0x394989, "jumpLandAnimClip", _0x370ac6, _0x181f14(_0x394989));
              _0x394989._rigidBody = undefined;
              _0x394989._isMoving = false;
              _0x394989._velocityScale = 1;
              _0x394989._isInTheAir = false;
              _0x394989._currentVerticalVelocity = 0;
              _0x394989._anim = undefined;
              _0x394989._tmp = _0x14ed72();
              return _0x394989;
            }
          }
          _0x7ab501(_0x105d86, _0x1d7a11);
          var _0x2383cf = _0x105d86.prototype;
          _0x2383cf.start = function () {
            var _0x23b972;
            var _0x2576fe = this;
            this.mainCamera || (this.mainCamera = null == (_0x23b972 = _0x499189("Main Camera")) ? undefined : _0x23b972.getComponent(_0x496746));
            if (this._rigidBody = this.node.getComponent(_0x34ec5d), this._anim = this.node.getComponent(_0x18cbfd), this._anim) {
              for (var _0xf323b9 = [this.idleAnimClip, this.moveAnimClip, this.jumpBeginAnimClip, this.jumpLoopAnimClip, this.jumpLandAnimClip], _0x2599a8 = 0; _0x2599a8 < _0xf323b9.length; ++_0x2599a8) {
                var _0x37633d = _0xf323b9[_0x2599a8];
                _0x37633d && (this._anim.getState(_0x37633d.name) || this._anim.addClip(_0x37633d));
              }
              this.idleAnimClip && this._anim.play(this.idleAnimClip.name);
            }
            _0x90ea75.on(_0x557883.MOVEMENT, this.onMovement, this);
            _0x90ea75.on(_0x557883.MOVEMENT_STOP, this.onMovementRelease, this);
            _0x90ea75.on(_0x557883.BUTTON, this.onJump, this);
            var _0x2675de = this.getComponent(_0x510767);
            null == _0x2675de || _0x2675de.on("onCollisionEnter", function (_0x32a3bb) {
              _0x32a3bb.otherCollider != _0x32a3bb.selfCollider && _0x2576fe.onLand();
            });
          };
          _0x2383cf.onDestroy = function () {
            _0x90ea75.off(_0x557883.MOVEMENT, this.onMovement, this);
            _0x90ea75.off(_0x557883.MOVEMENT_STOP, this.onMovementRelease, this);
            _0x90ea75.off(_0x557883.MOVEMENT_STOP, this.onJump, this);
          };
          _0x2383cf.update = function (_0x183327) {
            if (this._isMoving && (this._tmp.set(this.node.forward), this._tmp.multiplyScalar(-1), this._tmp.multiplyScalar(this.velocity * this._velocityScale), this._rigidBody ? (this._rigidBody.getLinearVelocity(_0x4073b7), this._tmp.y = _0x4073b7.y, this._rigidBody.setLinearVelocity(this._tmp)) : (this._tmp.multiplyScalar(_0x183327), this._tmp.add(this.node.position), this.node.setPosition(this._tmp))), this._isInTheAir) {
              if (this.jumpBeginAnimClip && this._anim) {
                var _0x2db654 = this._anim.getState(this.jumpBeginAnimClip.name);
                _0x2db654.isPlaying && _0x2db654.current >= _0x2db654.duration && this.jumpLoopAnimClip && this._anim.crossFade(this.jumpLoopAnimClip.name);
              }
              if (!this._rigidBody) {
                {
                  this._currentVerticalVelocity -= 9.8 * _0x183327;
                  var _0x41deab = this.node.position;
                  var _0x517f99 = _0x41deab.y + this._currentVerticalVelocity * _0x183327;
                  _0x517f99 <= 0 && (this.onLand(), _0x517f99 = 0);
                  this.node.setPosition(_0x41deab.x, _0x517f99, _0x41deab.z);
                }
              }
            }
          };
          _0x2383cf.onLand = function () {
            this._isInTheAir = false;
            this._currentVerticalVelocity = 0;
            this._curJumpTimes = 0;
            this.moveAnimClip && (this._isMoving ? this._anim.crossFade(this.moveAnimClip.name, 0.5) : this._anim.crossFade(this.idleAnimClip.name, 0.5));
          };
          _0x2383cf.onMovement = function (_0x2e29b8, _0x4dc9c0) {
            var _0x1e9ee2 = 0;
            this.mainCamera && (_0x1e9ee2 = this.mainCamera.node.eulerAngles.y);
            this._velocityScale = _0x4dc9c0;
            this._tmp.set(0, _0x1e9ee2 + _0x2e29b8 - 90 + 180, 0);
            this.node.setRotationFromEuler(this._tmp);
            this._anim && (this._isMoving || this._isInTheAir || this.moveAnimClip && this._anim.crossFade(this.moveAnimClip.name, 0.1), this.moveAnimClip && (this._anim.getState(this.moveAnimClip.name).speed = this._velocityScale));
            this._isMoving = true;
          };
          _0x2383cf.onMovementRelease = function () {
            var _0x5181d0;
            !this._isInTheAir && this.idleAnimClip && (null == (_0x5181d0 = this._anim) || _0x5181d0.crossFade(this.idleAnimClip.name, 0.5));
            this._isMoving = false;
            this._rigidBody && this._rigidBody.setLinearVelocity(_0x1eb9fe.ZERO);
          };
          _0x2383cf.onJump = function (_0x4e0dc8) {
            var _0x1ff3ac;
            (console.log(_0x4e0dc8), "btn_slot_0" == _0x4e0dc8) && (this._curJumpTimes >= this.maxJumpTimes || (this._curJumpTimes, this.jumpBeginAnimClip && (null == (_0x1ff3ac = this._anim) || _0x1ff3ac.crossFade(this.jumpBeginAnimClip.name)), this._curJumpTimes++, this._rigidBody ? (this._rigidBody.getLinearVelocity(_0x4073b7), _0x4073b7.y = this.jumpVelocity, this._rigidBody.setLinearVelocity(_0x4073b7)) : this._currentVerticalVelocity = this.jumpVelocity, this._isInTheAir = true));
          };
          return _0x105d86;
        }
      }(_0x5e76a8)).prototype, "mainCamera", [_0x5c24e7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _0x306476 = _0x3b09d7(_0x4b153c.prototype, "velocity", [_0x2fd29a], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1;
        }
      }), _0x2a90ab = _0x3b09d7(_0x4b153c.prototype, "jumpVelocity", [_0x2fd29a], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          {
            return 1;
          }
        }
      }), _0x1866c4 = _0x3b09d7(_0x4b153c.prototype, "maxJumpTimes", [_0x2fd29a], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _0x9757c3 = _0x3b09d7(_0x4b153c.prototype, "idleAnimClip", [_0x3deed5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _0x1a9bc5 = _0x3b09d7(_0x4b153c.prototype, "moveAnimClip", [_0x1893b3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _0xf7f1f4 = _0x3b09d7(_0x4b153c.prototype, "jumpBeginAnimClip", [_0x313765], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _0x50cb29 = _0x3b09d7(_0x4b153c.prototype, "jumpLoopAnimClip", [_0x345de3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _0x370ac6 = _0x3b09d7(_0x4b153c.prototype, "jumpLandAnimClip", [_0x1017ad], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _0x4fd1e0 = _0x4b153c)) || _0x4fd1e0));
      _0x365fe9._RF.pop();
    }
  };
});
System.register("chunks:///_virtual/CharacterMovement2D.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./EasyController.ts"], function (_0x36f113) {
  var _0x5206ca;
  var _0x45d102;
  var _0x30995a;
  var _0x3b8fa1;
  var _0x44aa67;
  var _0x5af569;
  var _0x2e4a60;
  var _0x4f9d9c;
  var _0x24b632;
  var _0x4bcb2b;
  var _0x5b420b;
  var _0xd00f96;
  return {
    setters: [function (_0x316fc3) {
      _0x5206ca = _0x316fc3.applyDecoratedDescriptor;
      _0x45d102 = _0x316fc3.inheritsLoose;
      _0x30995a = _0x316fc3.initializerDefineProperty;
      _0x3b8fa1 = _0x316fc3.assertThisInitialized;
      _0x44aa67 = _0x316fc3.createClass;
    }, function (_0x30dc66) {
      _0x5af569 = _0x30dc66.cclegacy;
      _0x2e4a60 = _0x30dc66._decorator;
      _0x4f9d9c = _0x30dc66.v2;
      _0x24b632 = _0x30dc66.Vec2;
      _0x4bcb2b = _0x30dc66.Component;
    }, function (_0x4766f6) {
      _0x5b420b = _0x4766f6.EasyController;
      _0xd00f96 = _0x4766f6.EasyControllerEvent;
    }],
    execute: function () {
      var _0x121bd7;
      var _0x5bdc4b;
      var _0x5522e1;
      var _0x345c9d;
      _0x5af569._RF.push({}, "6bdfa3YMw1PwobXdjV+aWTX", "CharacterMovement2D", undefined);
      var _0x2ba30a = _0x2e4a60.ccclass;
      var _0x1043a9 = _0x2e4a60.property;
      var _0x1cd7fd = _0x4f9d9c();
      _0x36f113("CharacterMovement2D", _0x2ba30a("tgxCharacterMovement2D")((_0x5522e1 = _0x5206ca((_0x5bdc4b = function (_0x1777fe) {
        function _0x321615() {
          {
            for (var _0x5c0dfa, _0x4825ab = arguments.length, _0x58853e = new Array(_0x4825ab), _0x29f051 = 0; _0x29f051 < _0x4825ab; _0x29f051++) {
              _0x58853e[_0x29f051] = arguments[_0x29f051];
            }
            _0x5c0dfa = _0x1777fe.call.apply(_0x1777fe, [this].concat(_0x58853e)) || this;
            _0x30995a(_0x5c0dfa, "moveSpeed", _0x5522e1, _0x3b8fa1(_0x5c0dfa));
            _0x30995a(_0x5c0dfa, "needRotation", _0x345c9d, _0x3b8fa1(_0x5c0dfa));
            _0x5c0dfa._moveFactor = 0;
            _0x5c0dfa._moveDir = _0x4f9d9c(1, 0);
            return _0x5c0dfa;
          }
        }
        _0x45d102(_0x321615, _0x1777fe);
        var _0xa63e25 = _0x321615.prototype;
        _0xa63e25.start = function () {
          _0x5b420b.on(_0xd00f96.MOVEMENT, this.onMovement, this);
          _0x5b420b.on(_0xd00f96.MOVEMENT_STOP, this.onMovementStop, this);
        };
        _0xa63e25.getRealSpeed = function () {
          return this.moveSpeed * this._moveFactor;
        };
        _0xa63e25.onMovement = function (_0x2906cc, _0x22341f) {
          {
            var _0x2811a1 = _0x2906cc / 180 * Math.PI;
            this.needRotation && this.node.setRotationFromEuler(0, 0, _0x2906cc);
            this._moveDir.set(Math.cos(_0x2811a1), Math.sin(_0x2811a1));
            this._moveDir.normalize();
            this._moveFactor = _0x22341f;
          }
        };
        _0xa63e25.onMovementStop = function () {
          this._moveFactor = 0;
        };
        _0xa63e25.onDestroy = function () {
          _0x5b420b.off(_0xd00f96.MOVEMENT, this.onMovement, this);
          _0x5b420b.off(_0xd00f96.MOVEMENT_STOP, this.onMovementStop, this);
        };
        _0xa63e25.update = function (_0x54d3b4) {
          if (this._moveFactor) {
            _0x24b632.multiplyScalar(_0x1cd7fd, this._moveDir, this.getRealSpeed() * _0x54d3b4);
            var _0x3d235 = this.node.position;
            this.node.setPosition(_0x3d235.x + _0x1cd7fd.x, _0x3d235.y + _0x1cd7fd.y, _0x3d235.z);
          }
        };
        _0x44aa67(_0x321615, [{
          key: "moveDir",
          get: function () {
            return this._moveDir;
          }
        }]);
        return _0x321615;
      }(_0x4bcb2b)).prototype, "moveSpeed", [_0x1043a9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 100;
        }
      }), _0x345c9d = _0x5206ca(_0x5bdc4b.prototype, "needRotation", [_0x1043a9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _0x121bd7 = _0x5bdc4b)) || _0x121bd7);
      _0x5af569._RF.pop();
    }
  };
});
System.register("chunks:///_virtual/CinestaionImpulseSource.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./CinestationData.ts", "./CinestationMath.ts", "./VCamNoise.ts", "./NoiseGenerator.ts"], function (_0x34ce70) {
  var _0x265f0e;
  var _0x462484;
  var _0x49b6cb;
  var _0x5d7e15;
  var _0x12e12d;
  var _0x3cb98a;
  var _0x5cc7c9;
  var _0xd86ee8;
  var _0x1136b1;
  var _0x4609f2;
  var _0x643bcd;
  var _0xdec92d;
  var _0x14f257;
  var _0x1cbc77;
  return {
    setters: [function (_0x2962b4) {
      _0x265f0e = _0x2962b4.applyDecoratedDescriptor;
      _0x462484 = _0x2962b4.inheritsLoose;
      _0x49b6cb = _0x2962b4.initializerDefineProperty;
      _0x5d7e15 = _0x2962b4.assertThisInitialized;
    }, function (_0x2f4722) {
      _0x12e12d = _0x2f4722.cclegacy;
      _0x3cb98a = _0x2f4722._decorator;
      _0x5cc7c9 = _0x2f4722.Component;
    }, function (_0x116c1b) {
      _0xd86ee8 = _0x116c1b.cinestation;
    }, function (_0x3f57dd) {
      _0x1136b1 = _0x3f57dd.EPSILON;
      _0x4609f2 = _0x3f57dd.quarticDamp;
    }, function (_0x3d8d69) {
      _0x643bcd = _0x3d8d69.VCamNoise;
      _0xdec92d = _0x3d8d69.NoiseType;
    }, function (_0x1dbf8d) {
      _0x14f257 = _0x1dbf8d.NoiseGenerator;
      _0x1cbc77 = _0x1dbf8d.NoiseProfile;
    }],
    execute: function () {
      var _0x31fcdf;
      var _0x1bd5a1;
      var _0x494f42;
      var _0x4878ea;
      var _0x68089;
      var _0x3a84fb;
      var _0x2f6be8;
      _0x12e12d._RF.push({}, "a2054HVIkhGUYOxTPABQa7g", "CinestaionImpulseSource", undefined);
      var _0x5a77a1 = _0x3cb98a.ccclass;
      var _0x428832 = _0x3cb98a.property;
      var _0xf17479 = _0x3cb98a.menu;
      _0x34ce70("CinestaionImpulseSource", (_0x31fcdf = _0x5a77a1("CinestaionImpulseSource"), _0x1bd5a1 = _0xf17479("Cinestation/CinestaionImpulseSource"), _0x494f42 = _0x428832({
        type: _0x643bcd
      }), _0x31fcdf(_0x4878ea = _0x1bd5a1((_0x3a84fb = _0x265f0e((_0x68089 = function (_0x37c146) {
        function _0x53e76a() {
          for (var _0x108f28, _0x5d8a74 = arguments.length, _0x53b492 = new Array(_0x5d8a74), _0x3e6480 = 0; _0x3e6480 < _0x5d8a74; _0x3e6480++) {
            _0x53b492[_0x3e6480] = arguments[_0x3e6480];
          }
          (_0x108f28 = _0x37c146.call.apply(_0x37c146, [this].concat(_0x53b492)) || this)._generator = new _0x14f257();
          _0x108f28._impluseDecay = 0;
          _0x49b6cb(_0x108f28, "noise", _0x3a84fb, _0x5d7e15(_0x108f28));
          _0x49b6cb(_0x108f28, "decayTime", _0x2f6be8, _0x5d7e15(_0x108f28));
          return _0x108f28;
        }
        _0x462484(_0x53e76a, _0x37c146);
        var _0x43a852 = _0x53e76a.prototype;
        _0x43a852.onLoad = function () {
          this.node.on("setImpulse", this._setImpulse, this);
        };
        _0x43a852._setImpulse = function (_0x53eda6) {
          undefined === _0x53eda6 && (_0x53eda6 = 1);
          this._impluseDecay = _0x53eda6;
        };
        _0x43a852.onEnable = function () {
          _0xd86ee8.addImpulseSource(this);
        };
        _0x43a852.onDisable = function () {
          _0xd86ee8.removeImpulseSource(this);
        };
        _0x43a852.generateImpulse = function (_0x11810b) {
          if (this._impluseDecay <= _0x1136b1) {
            return null;
          }
          this._impluseDecay = _0x4609f2(this._impluseDecay, 0, this.decayTime, _0x11810b);
          for (var _0x5436ce = this._generator.fractalNoise(this.noise, _0x11810b), _0x1cacb0 = 0; _0x1cacb0 < _0x5436ce.length; _0x1cacb0++) {
            _0x5436ce[_0x1cacb0] *= this._impluseDecay;
          }
          return _0x5436ce;
        };
        return _0x53e76a;
      }(_0x5cc7c9)).prototype, "noise", [_0x494f42], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          (_0x585cc4 = new _0x643bcd()).type = _0xdec92d.Perlin;
          _0x585cc4.profile = _0x1cbc77.Shake_6D;
          _0x585cc4.amplitudeGain = 0.5;
          _0x585cc4.frequncyGain = 4;
          return _0x585cc4;
          var _0x585cc4;
        }
      }), _0x2f6be8 = _0x265f0e(_0x68089.prototype, "decayTime", [_0x428832], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          {
            return 0.3;
          }
        }
      }), _0x4878ea = _0x68089)) || _0x4878ea) || _0x4878ea));
      _0x12e12d._RF.pop();
    }
  };
});
System.register("chunks:///_virtual/CinestationBlendDefinition.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./CinestationEasing.ts"], function (_0x1c065f) {
  var _0x522188;
  var _0x352fc0;
  var _0x5a80e9;
  var _0x564df2;
  var _0x980d;
  var _0x36e604;
  var _0x3b0680;
  var _0x96972;
  var _0x4141c9;
  var _0x565452;
  var _0xd3be07;
  var _0x46fe5e;
  var _0x59808d;
  var _0xcb3c51;
  var _0x2a5754;
  var _0x7255e3;
  var _0x15fe0c;
  var _0x43d955;
  var _0x22bd28;
  var _0x3bc355;
  var _0x1be73f;
  var _0x2e00a6;
  var _0x36a4f9;
  var _0x20b889;
  var _0x456014;
  var _0x25ab60;
  var _0x38f6ac;
  var _0x4351bf;
  var _0x464a70;
  var _0x36f330;
  var _0x468ca8;
  var _0x44ba8e;
  var _0x3b0853;
  var _0xe833cc;
  var _0x14ccdb;
  var _0x42f954;
  return {
    setters: [function (_0x5888a0) {
      _0x522188 = _0x5888a0.applyDecoratedDescriptor;
      _0x352fc0 = _0x5888a0.initializerDefineProperty;
    }, function (_0x59e576) {
      _0x5a80e9 = _0x59e576.cclegacy;
      _0x564df2 = _0x59e576._decorator;
      _0x980d = _0x59e576.Enum;
    }, function (_0x436fd1) {
      _0x36e604 = _0x436fd1.LinearNone;
      _0x3b0680 = _0x436fd1.QuadraticIn;
      _0x96972 = _0x436fd1.QuadraticOut;
      _0x4141c9 = _0x436fd1.QuadraticInOut;
      _0x565452 = _0x436fd1.CubicIn;
      _0xd3be07 = _0x436fd1.CubicOut;
      _0x46fe5e = _0x436fd1.CubicInOut;
      _0x59808d = _0x436fd1.QuarticIn;
      _0xcb3c51 = _0x436fd1.QuarticOut;
      _0x2a5754 = _0x436fd1.QuarticInOut;
      _0x7255e3 = _0x436fd1.QuinticIn;
      _0x15fe0c = _0x436fd1.QuinticOut;
      _0x43d955 = _0x436fd1.QuinticInOut;
      _0x22bd28 = _0x436fd1.SinusoidalIn;
      _0x3bc355 = _0x436fd1.SinusoidalOut;
      _0x1be73f = _0x436fd1.SinusoidalInOut;
      _0x2e00a6 = _0x436fd1.ExponentialIn;
      _0x36a4f9 = _0x436fd1.ExponentialOut;
      _0x20b889 = _0x436fd1.ExponentialInOut;
      _0x456014 = _0x436fd1.CircularIn;
      _0x25ab60 = _0x436fd1.CircularOut;
      _0x38f6ac = _0x436fd1.CircularInOut;
      _0x4351bf = _0x436fd1.ElasticIn;
      _0x464a70 = _0x436fd1.ElasticOut;
      _0x36f330 = _0x436fd1.ElasticInOut;
      _0x468ca8 = _0x436fd1.BackIn;
      _0x44ba8e = _0x436fd1.BackOut;
      _0x3b0853 = _0x436fd1.BackInOut;
      _0xe833cc = _0x436fd1.BounceIn;
      _0x14ccdb = _0x436fd1.BounceOut;
      _0x42f954 = _0x436fd1.BounceInOut;
    }],
    execute: function () {
      var _0x3454f2;
      var _0x527d7b;
      var _0x3015e4;
      var _0xf6ba11;
      var _0x12d5a6;
      var _0x362412;
      var _0x383229;
      _0x5a80e9._RF.push({}, "cba4dde1xRHC72ACnFBatq1", "CinestationBlendDefinition", undefined);
      var _0x231710 = _0x564df2.ccclass;
      var _0x417e4e = _0x564df2.property;
      var _0x36cbe0 = _0x1c065f("CinestationBlendStyle", function (_0x2d08fc) {
        _0x2d08fc[_0x2d08fc.Linear = 0] = "Linear";
        _0x2d08fc[_0x2d08fc.QuadraticIn = 1] = "QuadraticIn";
        _0x2d08fc[_0x2d08fc.QuadraticOut = 2] = "QuadraticOut";
        _0x2d08fc[_0x2d08fc.QuadraticInOut = 3] = "QuadraticInOut";
        _0x2d08fc[_0x2d08fc.CubicIn = 4] = "CubicIn";
        _0x2d08fc[_0x2d08fc.CubicOut = 5] = "CubicOut";
        _0x2d08fc[_0x2d08fc.CubicInOut = 6] = "CubicInOut";
        _0x2d08fc[_0x2d08fc.QuarticIn = 7] = "QuarticIn";
        _0x2d08fc[_0x2d08fc.QuarticOut = 8] = "QuarticOut";
        _0x2d08fc[_0x2d08fc.QuarticInOut = 9] = "QuarticInOut";
        _0x2d08fc[_0x2d08fc.QuinticIn = 10] = "QuinticIn";
        _0x2d08fc[_0x2d08fc.QuinticOut = 11] = "QuinticOut";
        _0x2d08fc[_0x2d08fc.QuinticInOut = 12] = "QuinticInOut";
        _0x2d08fc[_0x2d08fc.SinusoidalIn = 13] = "SinusoidalIn";
        _0x2d08fc[_0x2d08fc.SinusoidalOut = 14] = "SinusoidalOut";
        _0x2d08fc[_0x2d08fc.SinusoidalInOut = 15] = "SinusoidalInOut";
        _0x2d08fc[_0x2d08fc.ExponentialIn = 16] = "ExponentialIn";
        _0x2d08fc[_0x2d08fc.ExponentialOut = 17] = "ExponentialOut";
        _0x2d08fc[_0x2d08fc.ExponentialInOut = 18] = "ExponentialInOut";
        _0x2d08fc[_0x2d08fc.CircularIn = 19] = "CircularIn";
        _0x2d08fc[_0x2d08fc.CircularOut = 20] = "CircularOut";
        _0x2d08fc[_0x2d08fc.CircularInOut = 21] = "CircularInOut";
        _0x2d08fc[_0x2d08fc.ElasticIn = 22] = "ElasticIn";
        _0x2d08fc[_0x2d08fc.ElasticOut = 23] = "ElasticOut";
        _0x2d08fc[_0x2d08fc.ElasticInOut = 24] = "ElasticInOut";
        _0x2d08fc[_0x2d08fc.BackIn = 25] = "BackIn";
        _0x2d08fc[_0x2d08fc.BackOut = 26] = "BackOut";
        _0x2d08fc[_0x2d08fc.BackInOut = 27] = "BackInOut";
        _0x2d08fc[_0x2d08fc.BounceIn = 28] = "BounceIn";
        _0x2d08fc[_0x2d08fc.BounceOut = 29] = "BounceOut";
        _0x2d08fc[_0x2d08fc.BounceInOut = 30] = "BounceInOut";
        return _0x2d08fc;
      }({}));
      _0x1c065f("CinestationBlendFunc", [_0x36e604, _0x3b0680, _0x96972, _0x4141c9, _0x565452, _0xd3be07, _0x46fe5e, _0x59808d, _0xcb3c51, _0x2a5754, _0x7255e3, _0x15fe0c, _0x43d955, _0x22bd28, _0x3bc355, _0x1be73f, _0x2e00a6, _0x36a4f9, _0x20b889, _0x456014, _0x25ab60, _0x38f6ac, _0x4351bf, _0x464a70, _0x36f330, _0x468ca8, _0x44ba8e, _0x3b0853, _0xe833cc, _0x14ccdb, _0x42f954]);
      _0x1c065f("CinestationBlendDefinition", (_0x3454f2 = _0x231710("CinestationBlendDefinition"), _0x527d7b = _0x417e4e({
        tooltip: "i18n:cinestation.CinestationBlendDefinition.style",
        type: _0x980d(_0x36cbe0)
      }), _0x3015e4 = _0x417e4e({
        tooltip: "i18n:cinestation.CinestationBlendDefinition.time。"
      }), _0x3454f2((_0x362412 = _0x522188((_0x12d5a6 = function () {
        _0x352fc0(this, "style", _0x362412, this);
        _0x352fc0(this, "time", _0x383229, this);
      }).prototype, "style", [_0x527d7b], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return _0x36cbe0.QuarticInOut;
        }
      }), _0x383229 = _0x522188(_0x12d5a6.prototype, "time", [_0x3015e4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 4;
        }
      }), _0xf6ba11 = _0x12d5a6)) || _0xf6ba11));
      _0x5a80e9._RF.pop();
    }
  };
});
System.register("chunks:///_virtual/CinestationBrain.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./CinestationBlendDefinition.ts", "./CinestationData.ts", "./Visualization.ts"], function (_0x352105) {
  var _0x1a5dcc;
  var _0x17d03e;
  var _0x3f08a5;
  var _0x56a154;
  var _0x4f71b4;
  var _0x44454c;
  var _0x4be57b;
  var _0x17600a;
  var _0x3c7c5b;
  var _0x27d8fc;
  var _0x21acd8;
  var _0x229c66;
  var _0x30afbc;
  var _0x14e039;
  var _0xb95b01;
  var _0x150655;
  var _0x4a40c3;
  var _0x156c58;
  var _0x580b96;
  return {
    setters: [function (_0x32dac9) {
      {
        _0x1a5dcc = _0x32dac9.applyDecoratedDescriptor;
        _0x17d03e = _0x32dac9.inheritsLoose;
        _0x3f08a5 = _0x32dac9.initializerDefineProperty;
        _0x56a154 = _0x32dac9.assertThisInitialized;
      }
    }, function (_0xc55efb) {
      _0x4f71b4 = _0xc55efb.cclegacy;
      _0x44454c = _0xc55efb._decorator;
      _0x4be57b = _0xc55efb.Vec2;
      _0x17600a = _0xc55efb.Vec3;
      _0x3c7c5b = _0xc55efb.Quat;
      _0x27d8fc = _0xc55efb.Material;
      _0x21acd8 = _0xc55efb.Camera;
      _0x229c66 = _0xc55efb.utils;
      _0x30afbc = _0xc55efb.primitives;
      _0x14e039 = _0xc55efb.clamp01;
      _0xb95b01 = _0xc55efb.lerp;
    }, function (_0x58bf2f) {
      _0x150655 = _0x58bf2f.CinestationBlendDefinition;
      _0x4a40c3 = _0x58bf2f.CinestationBlendFunc;
    }, function (_0x11aa75) {
      _0x156c58 = _0x11aa75.cinestation;
    }, function (_0x337aaf) {
      _0x580b96 = _0x337aaf.Visualization;
    }],
    execute: function () {
      var _0x4ca9eb;
      var _0x39fe53;
      var _0x493784;
      var _0x48b1ac;
      var _0x78ed9;
      var _0x4d1051;
      var _0x236281;
      var _0x2feee3;
      _0x4f71b4._RF.push({}, "74f8188NbxO264ejP51X1vr", "CinestationBrain", undefined);
      var _0x309cc5 = _0x44454c.ccclass;
      var _0x39028e = _0x44454c.property;
      var _0x529723 = _0x44454c.executionOrder;
      var _0x38128d = _0x44454c.executeInEditMode;
      var _0x3b4bd8 = new _0x4be57b();
      var _0x49bf5a = new _0x17600a();
      var _0x16af1e = new _0x3c7c5b();
      _0x352105("CinestationBrain", (_0x4ca9eb = _0x309cc5("CinestationBrain"), _0x39fe53 = _0x529723(-1), _0x493784 = _0x39028e(_0x150655), _0x48b1ac = _0x39028e(_0x27d8fc), _0x4ca9eb(_0x78ed9 = _0x38128d(_0x78ed9 = _0x39fe53((_0x236281 = _0x1a5dcc((_0x4d1051 = function (_0x560c29) {
        function _0x1f8985() {
          for (var _0x2749dc, _0x479eac = arguments.length, _0x2f9a92 = new Array(_0x479eac), _0x87e67 = 0; _0x87e67 < _0x479eac; _0x87e67++) {
            _0x2f9a92[_0x87e67] = arguments[_0x87e67];
          }
          (_0x2749dc = _0x560c29.call.apply(_0x560c29, [this].concat(_0x2f9a92)) || this).__selectedCamera = null;
          _0x2749dc._visibleInRuntime = true;
          _0x3f08a5(_0x2749dc, "brainBlend", _0x236281, _0x56a154(_0x2749dc));
          _0x3f08a5(_0x2749dc, "debugMaterial", _0x2feee3, _0x56a154(_0x2749dc));
          return _0x2749dc;
        }
        _0x17d03e(_0x1f8985, _0x560c29);
        var _0x517751 = _0x1f8985.prototype;
        _0x517751.onLoad = function () {
          _0x156c58.mainCamera = this.getComponent(_0x21acd8);
          _0x156c58.lerpTime = this.brainBlend.time;
          this._material = this.debugMaterial;
        };
        _0x517751._updateMesh = function (_0x16f2be) {
          return _0x229c66.createMesh(_0x30afbc.quad(), _0x16f2be);
        };
        _0x517751.update = function (_0x17d65c) {
          _0x560c29.prototype.update.call(this, _0x17d65c);
          var _0x1012fd = this._getActiveCamera();
          if (null != _0x1012fd) {
            _0x1012fd.updateCamera(_0x17d65c);
            var _0x4c415c = _0x156c58.blendTime > -1 ? _0x156c58.blendTime : this.brainBlend.time;
            if (_0x156c58.lerpTime < _0x4c415c) {
              _0x156c58.lerpTime += _0x17d65c;
              var _0x197f32 = _0x14e039(_0x156c58.lerpTime / _0x4c415c);
              var _0xf15f9d = _0x4a40c3[this.brainBlend.style];
              _0xf15f9d && (_0x197f32 = _0xf15f9d(_0x197f32));
              this._lerpToMainCamera(_0x1012fd, _0x197f32);
            } else {
              this._lerpToMainCamera(_0x1012fd, 1);
            }
          }
        };
        _0x517751._getActiveCamera = function () {
          _0x156c58.vcam = _0x156c58.getPriorCamera();
          var _0x2d57ec = _0x156c58.vcam;
          this.visible = CC_EDITOR ? !!this.__selectedCamera : _0x2d57ec && _0x2d57ec.debug;
          this._setDebugProperties(CC_EDITOR ? this.__selectedCamera : _0x2d57ec);
          return _0x2d57ec;
        };
        _0x517751._setDebugProperties = function (_0x2790d8) {
          if (this.debugMaterial && _0x2790d8 && (CC_EDITOR || _0x2790d8.debug)) {
            if (_0x2790d8._composerChanged) {
              {
                _0x2790d8._composerChanged = false;
                var _0x2bc53f = _0x2790d8.aim.composer;
                this.debugMaterial.setProperty("deadZoneWidth", _0x2bc53f.deadZoneWidth);
                this.debugMaterial.setProperty("deadZoneWidth", _0x2bc53f.deadZoneWidth);
                this.debugMaterial.setProperty("deadZoneHeight", _0x2bc53f.deadZoneHeight);
                this.debugMaterial.setProperty("softZoneWidth", _0x2bc53f.softZoneWidth);
                this.debugMaterial.setProperty("softZoneHeight", _0x2bc53f.softZoneHeight);
              }
            }
            _0x2790d8.lookAt && this.debugMaterial.setProperty("lookatPoint", _0x156c58.worldToScreen(_0x3b4bd8, _0x2790d8.lookaheadPosition));
          }
        };
        _0x517751._lerpToMainCamera = function (_0x206231, _0x2c2bb4) {
          if (!CC_EDITOR && _0x156c58.mainCamera) {
            var _0x5a403c = _0x156c58.mainCamera;
            var _0x46cf52 = _0x206231;
            _0x5a403c.node.getWorldPosition(_0x49bf5a);
            _0x5a403c.node.getWorldRotation(_0x16af1e);
            _0x5a403c.node.setWorldPosition(_0x49bf5a.lerp(_0x46cf52.finalPosition, _0x2c2bb4));
            _0x5a403c.node.setWorldRotation(_0x16af1e.lerp(_0x46cf52.finalRotation, _0x2c2bb4));
            _0x5a403c.fov = _0xb95b01(_0x5a403c.fov, _0x46cf52.lens.fov, _0x2c2bb4);
            _0x5a403c.near = _0xb95b01(_0x5a403c.near, _0x46cf52.lens.near, _0x2c2bb4);
            _0x5a403c.far = _0xb95b01(_0x5a403c.far, _0x46cf52.lens.far, _0x2c2bb4);
          }
        };
        return _0x1f8985;
      }(_0x580b96)).prototype, "brainBlend", [_0x493784], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new _0x150655();
        }
      }), _0x2feee3 = _0x1a5dcc(_0x4d1051.prototype, "debugMaterial", [_0x48b1ac], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x78ed9 = _0x4d1051)) || _0x78ed9) || _0x78ed9) || _0x78ed9));
      _0x4f71b4._RF.pop();
    }
  };
});
System.register("chunks:///_virtual/CinestationData.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], function (_0xe4fd39) {
  var _0x1e9add;
  var _0x182668;
  var _0x4f2966;
  var _0x31913b;
  var _0x46f724;
  return {
    setters: [function (_0x5ab5e8) {
      _0x1e9add = _0x5ab5e8.createClass;
      _0x182668 = _0x5ab5e8.createForOfIteratorHelperLoose;
    }, function (_0x4958b2) {
      _0x4f2966 = _0x4958b2.cclegacy;
      _0x31913b = _0x4958b2.Vec3;
      _0x46f724 = _0x4958b2.director;
    }],
    execute: function () {
      _0x4f2966._RF.push({}, "8557eOKYVBCHKKtG3JMOZtJ", "CinestationData", undefined);
      var _0x129dad = new _0x31913b();
      _0xe4fd39("cinestation", new (function () {
        function _0x48b5f8() {
          this._brain = null;
          this._vcam = null;
          this._vcamSolo = null;
          this._virtualCameras = [];
          this._impulseSources = [];
          this._input = true;
          this.lerpTime = 0;
          this.blendTime = -1;
          this.mainCamera = null;
        }
        var _0x400ab7 = _0x48b5f8.prototype;
        _0x400ab7.activeCamera = function (_0xec849c, _0x221959) {
          undefined === _0x221959 && (_0x221959 = -1);
          this._vcamSolo !== _0xec849c && (this._vcamSolo = _0xec849c, this.lerpTime = 0, this.blendTime = _0x221959);
        };
        _0x400ab7.addCamera = function (_0x3390db) {
          -1 === this._virtualCameras.indexOf(_0x3390db) && this._virtualCameras.push(_0x3390db);
        };
        _0x400ab7.removeCamera = function (_0x1318f1) {
          var _0x330612 = this._virtualCameras.indexOf(_0x1318f1);
          -1 !== _0x330612 && this._virtualCameras.splice(_0x330612, 1);
          this._vcamSolo === _0x1318f1 && (this._vcamSolo = null);
        };
        _0x400ab7.addImpulseSource = function (_0x4d2932) {
          -1 === this._impulseSources.indexOf(_0x4d2932) && this._impulseSources.push(_0x4d2932);
        };
        _0x400ab7.removeImpulseSource = function (_0x21093b) {
          var _0x35059f = this._impulseSources.indexOf(_0x21093b);
          -1 !== _0x35059f && this._impulseSources.splice(_0x35059f, 1);
        };
        _0x400ab7.getPriorCamera = function () {
          return this._vcamSolo || this._virtualCameras.filter(function (_0x50cfa2) {
            return _0x50cfa2.isValid && _0x50cfa2.enabled;
          }).sort(function (_0x34072a, _0x4303fe) {
            return _0x4303fe.priority - _0x34072a.priority;
          })[0];
        };
        _0x400ab7.worldToScreen = function (_0x144c62, _0x987b16) {
          if (this.mainCamera) {
            var _0x516496 = CC_EDITOR ? cce.Camera.camera.camera : this.mainCamera.camera;
            var _0x3f6fd8 = _0x31913b.transformMat4(_0x129dad, _0x987b16, _0x516496.matViewProj).add(_0x31913b.ONE).multiplyScalar(0.5);
            _0x144c62.set(_0x3f6fd8.x, _0x3f6fd8.y);
          }
          return _0x144c62;
        };
        _0x1e9add(_0x48b5f8, [{
          key: "input",
          get: function () {
            return this._input;
          },
          set: function (_0x323f41) {
            {
              this._input !== _0x323f41 && (this._input = _0x323f41, _0x46f724.emit("VCam.enableInput", _0x323f41));
            }
          }
        }, {
          key: "brain",
          get: function () {
            return this._brain;
          },
          set: function (_0x32ad29) {
            this._brain = _0x32ad29;
          }
        }, {
          key: "vcam",
          get: function () {
            null === this._vcam && (this._vcam = this.getPriorCamera());
            return this._vcam;
          },
          set: function (_0xad98f6) {
            if (this._vcam !== _0xad98f6) {
              this._vcam = _0xad98f6;
              for (var _0x5ae5f1, _0x3486e0 = _0x182668(this._virtualCameras); !(_0x5ae5f1 = _0x3486e0()).done;) {
                var _0x1d8d04 = _0x5ae5f1.value;
                _0x1d8d04 === _0xad98f6 ? _0x1d8d04.onActive() : _0x1d8d04.onDeActive();
              }
            }
          }
        }, {
          key: "vcams",
          get: function () {
            {
              return this._virtualCameras;
            }
          }
        }, {
          key: "impulseSources",
          get: function () {
            return this._impulseSources;
          }
        }]);
        return _0x48b5f8;
      }())());
      _0x4f2966._RF.pop();
    }
  };
});
System.register("chunks:///_virtual/CinestationEasing.ts", ["cc"], function (_0x21645a) {
  var _0x30dad2;
  return {
    setters: [function (_0x4d7430) {
      _0x30dad2 = _0x4d7430.cclegacy;
    }],
    execute: function () {
      _0x21645a({
        BackIn: function (_0x574c28) {
          var _0x1b36d8 = 1.70158;
          return _0x574c28 * _0x574c28 * ((_0x1b36d8 + 1) * _0x574c28 - _0x1b36d8);
        },
        BackInOut: function (_0xc48c4) {
          var _0x10a3e1 = 2.5949095;
          if ((_0xc48c4 *= 2) < 1) {
            return _0xc48c4 * _0xc48c4 * ((_0x10a3e1 + 1) * _0xc48c4 - _0x10a3e1) * 0.5;
          }
          return 0.5 * ((_0xc48c4 -= 2) * _0xc48c4 * ((_0x10a3e1 + 1) * _0xc48c4 + _0x10a3e1) + 2);
        },
        BackOut: function (_0x1030af) {
          {
            var _0x459d3e = 1.70158;
            return --_0x1030af * _0x1030af * ((_0x459d3e + 1) * _0x1030af + _0x459d3e) + 1;
          }
        },
        BounceIn: _0x520f66,
        BounceInOut: function (_0x5426b8) {
          if (_0x5426b8 < 0.5) {
            return 0.5 * _0x520f66(2 * _0x5426b8);
          }
          return 0.5 * _0x3e3da4(2 * _0x5426b8 - 1) + 0.5;
        },
        BounceOut: _0x3e3da4,
        CircularIn: function (_0x4620cb) {
          return 1 - _0x480608(1 - _0x4620cb * _0x4620cb);
        },
        CircularInOut: function (_0x524e8c) {
          if ((_0x524e8c *= 2) < 1) {
            return -0.5 * (_0x480608(1 - _0x524e8c * _0x524e8c) - 1);
          }
          return 0.5 * (_0x480608(1 - (_0x524e8c -= 2) * _0x524e8c) + 1);
        },
        CircularOut: function (_0x3286bb) {
          return _0x480608(1 - --_0x3286bb * _0x3286bb);
        },
        CubicIn: function (_0x44f5cf) {
          return _0x44f5cf * _0x44f5cf * _0x44f5cf;
        },
        CubicInOut: function (_0x868f63) {
          if ((_0x868f63 *= 2) < 1) {
            return 0.5 * _0x868f63 * _0x868f63 * _0x868f63;
          }
          return 0.5 * ((_0x868f63 -= 2) * _0x868f63 * _0x868f63 + 2);
        },
        CubicOut: function (_0x31c84a) {
          return --_0x31c84a * _0x31c84a * _0x31c84a + 1;
        },
        ElasticIn: function (_0x204f83) {
          if (0 === _0x204f83) {
            return 0;
          }
          if (1 === _0x204f83) {
            return 1;
          }
          return -_0x3c89e4(2, 10 * (_0x204f83 - 1)) * _0x28d0a9(5 * (_0x204f83 - 1.1) * _0x3f6f66);
        },
        ElasticInOut: function (_0x48338f) {
          if (0 === _0x48338f) {
            return 0;
          }
          if (1 === _0x48338f) {
            return 1;
          }
          if ((_0x48338f *= 2) < 1) {
            return -0.5 * _0x3c89e4(2, 10 * (_0x48338f - 1)) * _0x28d0a9(5 * (_0x48338f - 1.1) * _0x3f6f66);
          }
          return 0.5 * _0x3c89e4(2, -10 * (_0x48338f - 1)) * _0x28d0a9(5 * (_0x48338f - 1.1) * _0x3f6f66) + 1;
        },
        ElasticOut: function (_0xa91645) {
          if (0 === _0xa91645) {
            return 0;
          }
          if (1 === _0xa91645) {
            return 1;
          }
          return _0x3c89e4(2, -10 * _0xa91645) * _0x28d0a9(5 * (_0xa91645 - 0.1) * _0x3f6f66) + 1;
        },
        ExponentialIn: function (_0x42407b) {
          return 0 === _0x42407b ? 0 : _0x3c89e4(1024, _0x42407b - 1);
        },
        ExponentialInOut: function (_0x77667f) {
          if (0 === _0x77667f) {
            return 0;
          }
          if (1 === _0x77667f) {
            return 1;
          }
          if ((_0x77667f *= 2) < 1) {
            return 0.5 * _0x3c89e4(1024, _0x77667f - 1);
          }
          return 0.5 * (2 - _0x3c89e4(2, -10 * (_0x77667f - 1)));
        },
        ExponentialOut: function (_0x2d532e) {
          return 1 === _0x2d532e ? 1 : 1 - _0x3c89e4(2, -10 * _0x2d532e);
        },
        LinearNone: function (_0x355c1b) {
          {
            return _0x355c1b;
          }
        },
        QuadraticIn: function (_0x12ca0a) {
          return _0x12ca0a * _0x12ca0a;
        },
        QuadraticInOut: function (_0x4ecefc) {
          if ((_0x4ecefc *= 2) < 1) {
            return 0.5 * _0x4ecefc * _0x4ecefc;
          }
          return -0.5 * (--_0x4ecefc * (_0x4ecefc - 2) - 1);
        },
        QuadraticOut: function (_0x23a465) {
          {
            return _0x23a465 * (2 - _0x23a465);
          }
        },
        QuarticIn: function (_0x270442) {
          return _0x270442 * _0x270442 * _0x270442 * _0x270442;
        },
        QuarticInOut: function (_0x2ac8e9) {
          if ((_0x2ac8e9 *= 2) < 1) {
            return 0.5 * _0x2ac8e9 * _0x2ac8e9 * _0x2ac8e9 * _0x2ac8e9;
          }
          return -0.5 * ((_0x2ac8e9 -= 2) * _0x2ac8e9 * _0x2ac8e9 * _0x2ac8e9 - 2);
        },
        QuarticOut: function (_0x5c3aaf) {
          return 1 - --_0x5c3aaf * _0x5c3aaf * _0x5c3aaf * _0x5c3aaf;
        },
        QuinticIn: function (_0x268a90) {
          return _0x268a90 * _0x268a90 * _0x268a90 * _0x268a90 * _0x268a90;
        },
        QuinticInOut: function (_0x11585b) {
          {
            if ((_0x11585b *= 2) < 1) {
              return 0.5 * _0x11585b * _0x11585b * _0x11585b * _0x11585b * _0x11585b;
            }
            return 0.5 * ((_0x11585b -= 2) * _0x11585b * _0x11585b * _0x11585b * _0x11585b + 2);
          }
        },
        QuinticOut: function (_0x1415d7) {
          return --_0x1415d7 * _0x1415d7 * _0x1415d7 * _0x1415d7 * _0x1415d7 + 1;
        },
        SinusoidalIn: function (_0x36db5c) {
          return 1 - _0x3697f0(_0x36db5c * _0x3f6f66 / 2);
        },
        SinusoidalInOut: function (_0x25e8fd) {
          return 0.5 * (1 - _0x3697f0(_0x3f6f66 * _0x25e8fd));
        },
        SinusoidalOut: function (_0x297b76) {
          return _0x28d0a9(_0x297b76 * _0x3f6f66 / 2);
        }
      });
      _0x30dad2._RF.push({}, "ac89cJg7jNAToTCRvLAJisF", "CinestationEasing", undefined);
      var _0x3f6f66 = Math.PI;
      var _0x3697f0 = Math.cos;
      var _0x28d0a9 = Math.sin;
      var _0x3c89e4 = Math.pow;
      var _0x480608 = Math.sqrt;
      function _0x520f66(_0x54972d) {
        return 1 - _0x3e3da4(1 - _0x54972d);
      }
      function _0x3e3da4(_0xa518fd) {
        {
          return _0xa518fd < 0.36363636363636365 ? 7.5625 * _0xa518fd * _0xa518fd : _0xa518fd < 0.7272727272727273 ? 7.5625 * (_0xa518fd -= 0.5454545454545454) * _0xa518fd + 0.75 : _0xa518fd < 0.9090909090909091 ? 7.5625 * (_0xa518fd -= 0.8181818181818182) * _0xa518fd + 0.9375 : 7.5625 * (_0xa518fd -= 0.9545454545454546) * _0xa518fd + 0.984375;
        }
      }
      _0x30dad2._RF.pop();
    }
  };
});
System.register("chunks:///_virtual/CinestationMath.ts", ["cc"], function (_0x3a48f0) {
  var _0x3114c7;
  var _0x156203;
  var _0x30192c;
  var _0x472ed6;
  var _0x1f7d22;
  var _0x561ec8;
  var _0x3cb0ae;
  var _0x58b8e7;
  return {
    setters: [function (_0x4bb085) {
      _0x3114c7 = _0x4bb085.cclegacy;
      _0x156203 = _0x4bb085.Quat;
      _0x30192c = _0x4bb085.clamp01;
      _0x472ed6 = _0x4bb085.Mat4;
      _0x1f7d22 = _0x4bb085.Vec3;
      _0x561ec8 = _0x4bb085.clamp;
      _0x3cb0ae = _0x4bb085.Vec2;
      _0x58b8e7 = _0x4bb085.Vec4;
    }],
    execute: function () {
      _0x3a48f0({
        FInterpConstantTo: function (_0x262743, _0x22218d, _0x47086a, _0x169225) {
          var _0x5db5e4 = _0x22218d - _0x262743;
          if (_0x4ac300(_0x5db5e4) < 0.0001) {
            return _0x22218d;
          }
          var _0x388f70 = _0x169225 * _0x47086a;
          return _0x262743 + _0x561ec8(_0x5db5e4, -_0x388f70, _0x388f70);
        },
        FInterpTo: function (_0x57ac00, _0x36bc7b, _0x42ac91, _0x183be1) {
          if (_0x183be1 <= 0) {
            return _0x36bc7b;
          }
          if (_0x4ac300(_0x36bc7b - _0x57ac00) < 0.0001) {
            return _0x36bc7b;
          }
          return _0x57ac00 + _0x30192c(_0x183be1 * _0x42ac91);
        },
        QInterpConstantTo: function (_0x1dd1ce, _0x51b83d, _0x590c49, _0x1b9b8d, _0x34132) {
          undefined === _0x34132 && (_0x34132 = _0x1dd1ce);
          if (_0x1b9b8d <= 0) {
            return _0x34132.set(_0x51b83d);
          }
          if (_0x1dd1ce.equals(_0x51b83d, 0.0001)) {
            return _0x34132.set(_0x51b83d);
          }
          var _0x53ab8a = _0x30192c(_0x1b9b8d * _0x590c49);
          var _0x2f41a7 = _0x574edd((_0x21df80 = _0x1dd1ce, _0x400612 = _0x51b83d, _0x5b8de0 = _0x21df80.x * _0x400612.x + _0x21df80.y * _0x400612.y + _0x21df80.z * _0x400612.z + _0x21df80.w * _0x400612.w, _0x3328ea(2 * _0x5b8de0 * _0x5b8de0 - 1)), 0.0001);
          var _0x21df80;
          var _0x400612;
          var _0x5b8de0;
          return _0x156203.lerp(_0x34132, _0x1dd1ce, _0x51b83d, _0x30192c(_0x53ab8a / _0x2f41a7));
        },
        QInterpTo: function (_0xa2328b, _0x41f910, _0x552714, _0x1a006e, _0x50bb54) {
          undefined === _0x50bb54 && (_0x50bb54 = _0xa2328b);
          if (_0x1a006e <= 0) {
            return _0x50bb54.set(_0x41f910);
          }
          if (_0xa2328b.equals(_0x41f910, 0.0001)) {
            return _0x50bb54.set(_0x41f910);
          }
          return _0x156203.lerp(_0x50bb54, _0xa2328b, _0x41f910, _0x30192c(_0x1a006e * _0x552714));
        },
        Quat_exponentialDamp: function (_0x4d677a, _0x3a3c3c, _0x3a97bb, _0xae4379, _0x18970e) {
          return _0x156203.lerp(_0x4d677a, _0x3a3c3c, _0x3a97bb, _0x18f8e3(0, 1, _0xae4379, _0x18970e));
        },
        Quat_quarticDamp: function (_0x32b473, _0x267296, _0x109ef6, _0x53fdd2, _0x314c14) {
          return _0x156203.lerp(_0x32b473, _0x267296, _0x109ef6, _0x1b7f37(0, 1, _0x53fdd2, _0x314c14));
        },
        Quat_smoothDamp: function (_0x2a3419, _0x5daafd, _0x1efacd, _0x17041b, _0x4abf8c) {
          return _0x156203.lerp(_0x2a3419, _0x5daafd, _0x1efacd, _0x1e1400(_0x2a3419, 0, 1, _0x17041b, Infinity, _0x4abf8c));
        },
        VInterpConstantTo: function (_0x2ebe87, _0x2b429a, _0x495f47, _0x13ec13, _0x1899c3) {
          undefined === _0x1899c3 && (_0x1899c3 = _0x2ebe87);
          var _0x419110 = _0x1f7d22.subtract(_0x3e49a7, _0x2b429a, _0x2ebe87);
          var _0x346309 = _0x419110.length();
          var _0x44c3d6 = _0x13ec13 * _0x495f47;
          if (_0x346309 > _0x44c3d6) {
            if (_0x44c3d6 > 0) {
              var _0x27cd38 = _0x419110.multiplyScalar(1 / _0x346309);
              return _0x1899c3.set(_0x2ebe87).add(_0x27cd38);
            }
            return _0x1899c3.set(_0x2ebe87);
          }
          return _0x1899c3.set(_0x2b429a);
        },
        VInterpTo: function (_0x30a576, _0x644fc5, _0xfba9b0, _0xbf8445, _0x8c8749) {
          undefined === _0x8c8749 && (_0x8c8749 = _0x30a576);
          if (_0xbf8445 <= 0) {
            return _0x8c8749.set(_0x644fc5);
          }
          var _0xd449b4 = _0x1f7d22.subtract(_0x3e49a7, _0x644fc5, _0x30a576);
          if (_0xd449b4.lengthSqr() < 0.0001) {
            return _0x8c8749.set(_0x644fc5);
          }
          return _0x8c8749.set(_0x30a576).add(_0xd449b4.multiplyScalar(_0x30192c(_0xfba9b0 * _0xbf8445)));
        },
        Vec3_closeTo: function (_0x11e932, _0x31a306) {
          return _0x4ac300(_0x11e932.x - _0x31a306.x) + _0x4ac300(_0x11e932.y - _0x31a306.y) + _0x4ac300(_0x11e932.z - _0x31a306.z) <= _0x4b0582;
        },
        Vec3_closestPointOnSegment: function (_0x3e103b, _0x3469e0, _0x57e378) {
          var _0x57d7c4 = _0x1f7d22.subtract(_0x31a33e, _0x57e378, _0x3469e0);
          var _0x196877 = _0x1f7d22.lengthSqr(_0x57d7c4);
          if (_0x196877 < _0x4b0582) {
            return 0;
          }
          return _0x30192c(_0x1f7d22.dot(_0x1f7d22.subtract(_0x5b6297, _0x3e103b, _0x3469e0), _0x57d7c4) / _0x196877);
        },
        Vec3_setFromMatrixColumn: function (_0x1d2c77, _0x56b27c, _0x46d6d1) {
          switch (_0x46d6d1) {
            case 0:
              _0x1d2c77.x = _0x56b27c.m00;
              _0x1d2c77.y = _0x56b27c.m01;
              _0x1d2c77.z = _0x56b27c.m02;
              break;
            case 1:
              _0x1d2c77.x = _0x56b27c.m04;
              _0x1d2c77.y = _0x56b27c.m05;
              _0x1d2c77.z = _0x56b27c.m06;
              break;
            case 2:
              _0x1d2c77.x = _0x56b27c.m08;
              _0x1d2c77.y = _0x56b27c.m09;
              _0x1d2c77.z = _0x56b27c.m10;
          }
          return _0x1d2c77;
        },
        Vec3_setFromSpherical: function (_0x47e964, _0x39f802) {
          var _0x350139 = _0x39f802.radius;
          var _0x4cee52 = _0x39f802.phi;
          var _0x379f1d = _0x39f802.theta;
          var _0x25df62 = _0x4a07d5(_0x4cee52) * _0x350139;
          _0x47e964.x = _0x25df62 * _0x4a07d5(_0x379f1d);
          _0x47e964.y = _0x34585e(_0x4cee52) * _0x350139;
          _0x47e964.z = _0x25df62 * _0x34585e(_0x379f1d);
          return _0x47e964;
        },
        Vec3_smoothDamp: function (_0x9449cf, _0x13b2ce, _0x8a6571, _0x1b110d, _0x56fd67) {
          return _0x1f7d22.lerp(_0x9449cf, _0x13b2ce, _0x8a6571, _0x1e1400(_0x9449cf, 0, 1, _0x1b110d, Infinity, _0x56fd67));
        },
        Vec4_closeTo: function (_0x5c9978, _0xaa1189) {
          return _0x4ac300(_0x5c9978.x - _0xaa1189.x) + _0x4ac300(_0x5c9978.y - _0xaa1189.y) + _0x4ac300(_0x5c9978.z - _0xaa1189.z) + _0x4ac300(_0x5c9978.w - _0xaa1189.w) <= _0x4b0582;
        },
        closeTo: function (_0x1eee51, _0x364146) {
          return _0x4ac300(_0x1eee51 - _0x364146) <= _0x4b0582;
        },
        exponentialDamp: _0x18f8e3,
        quarticDamp: _0x1b7f37
      });
      _0x3114c7._RF.push({}, "7ff71Qvm1lPXa04xQGPtXd/", "CinestationMath", undefined);
      var _0x1a64e8 = Math.sqrt;
      var _0x4c3a88 = Math.atan2;
      var _0x3328ea = Math.acos;
      var _0x4a07d5 = Math.sin;
      var _0x34585e = Math.cos;
      var _0x3442ed = Math.floor;
      var _0x574edd = Math.max;
      var _0x404c84 = Math.min;
      var _0x4ac300 = Math.abs;
      _0x156203.lerp = function (_0x9004d4, _0x2286ae, _0x32ad84, _0x8aea02) {
        _0x156203.dot(_0x2286ae, _0x32ad84) < 0 && _0x156203.set(_0x32ad84, -_0x32ad84.x, -_0x32ad84.y, -_0x32ad84.z, -_0x32ad84.w);
        _0x8aea02 = _0x30192c(_0x8aea02);
        _0x9004d4.x = _0x2286ae.x + _0x8aea02 * (_0x32ad84.x - _0x2286ae.x);
        _0x9004d4.y = _0x2286ae.y + _0x8aea02 * (_0x32ad84.y - _0x2286ae.y);
        _0x9004d4.z = _0x2286ae.z + _0x8aea02 * (_0x32ad84.z - _0x2286ae.z);
        _0x9004d4.w = _0x2286ae.w + _0x8aea02 * (_0x32ad84.w - _0x2286ae.w);
        _0x156203.normalize(_0x9004d4, _0x9004d4);
        return _0x9004d4;
      };
      _0x156203.prototype.lerp = function (_0x2d55cb, _0x5ebc30) {
        return _0x156203.lerp(this, this, _0x2d55cb, _0x5ebc30);
      };
      _0x472ed6.prototype.makeRotationAxis = function (_0x25df7a, _0x182ec9) {
        var _0x1982fd = Math.cos(_0x182ec9);
        var _0x391d56 = Math.sin(_0x182ec9);
        var _0x1be06f = 1 - _0x1982fd;
        var _0x33f50a = _0x25df7a.x;
        var _0x132774 = _0x25df7a.y;
        var _0x180bd2 = _0x25df7a.z;
        var _0xed6feb = _0x1be06f * _0x33f50a;
        var _0x14614b = _0x1be06f * _0x132774;
        this.set(_0xed6feb * _0x33f50a + _0x1982fd, _0xed6feb * _0x132774 - _0x391d56 * _0x180bd2, _0xed6feb * _0x180bd2 + _0x391d56 * _0x132774, 0, _0xed6feb * _0x132774 + _0x391d56 * _0x180bd2, _0x14614b * _0x132774 + _0x1982fd, _0x14614b * _0x180bd2 - _0x391d56 * _0x33f50a, 0, _0xed6feb * _0x180bd2 - _0x391d56 * _0x132774, _0x14614b * _0x180bd2 + _0x391d56 * _0x33f50a, _0x1be06f * _0x180bd2 * _0x180bd2 + _0x1982fd, 0, 0, 0, 0, 1);
        return this;
      };
      var _0x3e49a7 = new _0x1f7d22();
      var _0x4b0582 = _0x3a48f0("EPSILON", 0.0001);
      var _0x31a33e = new _0x1f7d22();
      var _0x5b6297 = new _0x1f7d22();
      var _0xaf8410 = Math.log(0.01);
      function _0x18f8e3(_0x2c1e85, _0x2e165f, _0x1fb18b, _0x27f2cc) {
        var _0x247e53 = -_0xaf8410 / _0x1fb18b;
        return _0x2c1e85 + (_0x2e165f - _0x2c1e85) * (1 - Math.exp(-_0x247e53 * _0x27f2cc));
      }
      function _0x1b7f37(_0x43c354, _0x105b3e, _0x36b834, _0x438448) {
        var _0x55db0b = 1 - _0x404c84(_0x438448, _0x36b834) / _0x36b834;
        var _0x293183 = _0x55db0b * _0x55db0b;
        return _0x43c354 + (_0x105b3e - _0x43c354) * (1 - _0x293183 * _0x293183);
      }
      function _0x1e1400(_0x4e94e2, _0x2f4f61, _0x49f6d7, _0x1b07af, _0x3abe83, _0x5794ab) {
        undefined === _0x4e94e2.velocity && (_0x4e94e2.velocity = 0);
        var _0x7eaac9 = 2 / (_0x1b07af = Math.max(0.0001, _0x1b07af));
        var _0x22827d = _0x7eaac9 * _0x5794ab;
        var _0x7715db = 1 / (1 + _0x22827d + 0.48 * _0x22827d * _0x22827d + 0.235 * _0x22827d * _0x22827d * _0x22827d);
        var _0x2f78e2 = _0x2f4f61 - _0x49f6d7;
        var _0x9a864d = _0x49f6d7;
        var _0x217625 = _0x3abe83 * _0x1b07af;
        _0x49f6d7 = _0x2f4f61 - (_0x2f78e2 = _0x561ec8(_0x2f78e2, -_0x217625, _0x217625));
        var _0x486586 = (_0x4e94e2.velocity + _0x7eaac9 * _0x2f78e2) * _0x5794ab;
        _0x4e94e2.velocity = (_0x4e94e2.velocity - _0x7eaac9 * _0x486586) * _0x7715db;
        var _0x172b1b = _0x49f6d7 + (_0x2f78e2 + _0x486586) * _0x7715db;
        _0x9a864d - _0x2f4f61 > 0 == _0x172b1b > _0x9a864d && (_0x172b1b = _0x9a864d, _0x4e94e2.velocity = (_0x172b1b - _0x9a864d) / _0x5794ab);
        return _0x172b1b;
      }
      _0x3a48f0("Spherical", function () {
        {
          function _0x10bb89(_0x117e5f, _0x20fb0e, _0x2f99c8) {
            undefined === _0x117e5f && (_0x117e5f = 1);
            undefined === _0x20fb0e && (_0x20fb0e = 0);
            undefined === _0x2f99c8 && (_0x2f99c8 = 0);
            this.radius = undefined;
            this.phi = undefined;
            this.theta = undefined;
            this.radius = _0x117e5f;
            this.phi = _0x20fb0e;
            this.theta = _0x2f99c8;
          }
          var _0x111dc3 = _0x10bb89.prototype;
          _0x111dc3.setFromVec3 = function (_0x29ede6) {
            return this.setFromCartesianCoords(_0x29ede6.x, _0x29ede6.y, _0x29ede6.z);
          };
          _0x111dc3.setFromCartesianCoords = function (_0x4c6f47, _0x559aa0, _0x3d75fc) {
            this.radius = _0x1a64e8(_0x4c6f47 * _0x4c6f47 + _0x559aa0 * _0x559aa0 + _0x3d75fc * _0x3d75fc);
            0 === this.radius ? (this.theta = 0, this.phi = 0) : (this.theta = _0x4c3a88(_0x4c6f47, _0x3d75fc), this.phi = _0x3328ea(_0x561ec8(_0x559aa0 / this.radius, -1, 1)));
            return this;
          };
          return _0x10bb89;
        }
      }());
      _0x3a48f0("Perlin", function () {
        function _0x15db14() {}
        _0x15db14.Noise = function (_0x2f9641, _0x3c5b46, _0x54708e) {
          var _0xdcf1b6 = _0x15db14._Fade;
          var _0x32035a = _0x15db14._Grad;
          var _0x527f52 = _0x15db14._Lerp;
          var _0x1974d3 = _0x15db14._Permutation;
          if (undefined !== _0x3c5b46 && undefined !== _0x54708e) {
            var _0x205802 = _0x3442ed(_0x2f9641);
            var _0x426fd1 = _0x3442ed(_0x3c5b46);
            var _0x290613 = _0x3442ed(_0x54708e);
            var _0x31d255 = 255 & _0x205802;
            var _0x34b312 = 255 & _0x426fd1;
            var _0xbe2f8a = 255 & _0x290613;
            _0x3c5b46 -= _0x426fd1;
            _0x54708e -= _0x290613;
            var _0x2791fb = _0xdcf1b6(_0x2f9641 -= _0x205802);
            var _0x1ec6cf = _0xdcf1b6(_0x3c5b46);
            var _0x41b10a = _0xdcf1b6(_0x54708e);
            var _0x5e8427 = _0x1974d3[_0x31d255] + _0x34b312;
            var _0x301221 = _0x1974d3[_0x5e8427] + _0xbe2f8a;
            var _0x5a897d = _0x1974d3[_0x5e8427 + 1] + _0xbe2f8a;
            var _0x3e7283 = _0x1974d3[_0x31d255 + 1] + _0x34b312;
            var _0x12ee1d = _0x1974d3[_0x3e7283] + _0xbe2f8a;
            var _0x14a713 = _0x1974d3[_0x3e7283 + 1] + _0xbe2f8a;
            return _0x527f52(_0x41b10a, _0x527f52(_0x1ec6cf, _0x527f52(_0x2791fb, _0x32035a(_0x1974d3[_0x301221], _0x2f9641, _0x3c5b46, _0x54708e), _0x32035a(_0x1974d3[_0x12ee1d], _0x2f9641 - 1, _0x3c5b46, _0x54708e)), _0x527f52(_0x2791fb, _0x32035a(_0x1974d3[_0x5a897d], _0x2f9641, _0x3c5b46 - 1, _0x54708e), _0x32035a(_0x1974d3[_0x14a713], _0x2f9641 - 1, _0x3c5b46 - 1, _0x54708e))), _0x527f52(_0x1ec6cf, _0x527f52(_0x2791fb, _0x32035a(_0x1974d3[_0x301221 + 1], _0x2f9641, _0x3c5b46, _0x54708e - 1), _0x32035a(_0x1974d3[_0x12ee1d + 1], _0x2f9641 - 1, _0x3c5b46, _0x54708e - 1)), _0x527f52(_0x2791fb, _0x32035a(_0x1974d3[_0x5a897d + 1], _0x2f9641, _0x3c5b46 - 1, _0x54708e - 1), _0x32035a(_0x1974d3[_0x14a713 + 1], _0x2f9641 - 1, _0x3c5b46 - 1, _0x54708e - 1))));
          }
          if (undefined !== _0x3c5b46) {
            var _0x1d8c09 = _0x3442ed(_0x2f9641);
            var _0x3dda1d = _0x3442ed(_0x3c5b46);
            var _0x553216 = 255 & _0x1d8c09;
            var _0x478084 = 255 & _0x3dda1d;
            _0x3c5b46 -= _0x3dda1d;
            var _0x5911a7 = _0xdcf1b6(_0x2f9641 -= _0x1d8c09);
            var _0x33ccdb = _0xdcf1b6(_0x3c5b46);
            var _0x11d33d = _0x1974d3[_0x553216] + _0x478084 & 255;
            var _0x39990a = _0x1974d3[_0x553216 + 1] + _0x478084 & 255;
            return _0x527f52(_0x33ccdb, _0x527f52(_0x5911a7, _0x32035a(_0x1974d3[_0x11d33d], _0x2f9641, _0x3c5b46), _0x32035a(_0x1974d3[_0x39990a], _0x2f9641 - 1, _0x3c5b46)), _0x527f52(_0x5911a7, _0x32035a(_0x1974d3[_0x11d33d + 1], _0x2f9641, _0x3c5b46 - 1), _0x32035a(_0x1974d3[_0x39990a + 1], _0x2f9641 - 1, _0x3c5b46 - 1)));
          }
          var _0x205df0 = _0x3442ed(_0x2f9641);
          var _0x24b5fb = 255 & _0x205df0;
          return _0x527f52(_0xdcf1b6(_0x2f9641 -= _0x205df0), _0x32035a(_0x1974d3[_0x24b5fb], _0x2f9641), _0x32035a(_0x1974d3[_0x24b5fb + 1], _0x2f9641 - 1));
        };
        _0x15db14.Fbm = function (_0x4c9ee3, _0x895e69, _0xcd8a44, _0x3c9ebc) {
          var _0x201e68 = 0;
          var _0x2307d5 = 0.5;
          var _0x562e98 = _0x15db14.Noise;
          if (undefined !== _0xcd8a44 && undefined !== _0x3c9ebc) {
            for (var _0x4dc8c4 = 0; _0x4dc8c4 < _0x4c9ee3; _0x4dc8c4++) {
              _0x201e68 += _0x2307d5 * _0x562e98(_0x895e69, _0xcd8a44, _0x3c9ebc);
              _0x895e69 *= 2;
              _0xcd8a44 *= 2;
              _0x3c9ebc *= 2;
              _0x2307d5 *= 0.5;
            }
          } else {
            if (undefined !== _0xcd8a44) {
              for (var _0x42c3c4 = 0; _0x42c3c4 < _0x4c9ee3; _0x42c3c4++) {
                _0x201e68 += _0x2307d5 * _0x562e98(_0x895e69, _0xcd8a44);
                _0x895e69 *= 2;
                _0xcd8a44 *= 2;
                _0x2307d5 *= 0.5;
              }
            } else {
              for (var _0x2212e5 = 0; _0x2212e5 < _0x4c9ee3; _0x2212e5++) {
                _0x201e68 += _0x2307d5 * _0x562e98(_0x895e69);
                _0x895e69 *= 2;
                _0x2307d5 *= 0.5;
              }
            }
          }
          return _0x201e68;
        };
        _0x15db14._Fade = function (_0x171bb2) {
          {
            return _0x171bb2 * _0x171bb2 * _0x171bb2 * (_0x171bb2 * (6 * _0x171bb2 - 15) + 10);
          }
        };
        _0x15db14._Lerp = function (_0xcce714, _0x482eb3, _0x9c27ac) {
          return _0x482eb3 + _0xcce714 * (_0x9c27ac - _0x482eb3);
        };
        _0x15db14._Grad = function (_0xad6b0a, _0x15cc67, _0x2e4470, _0x519d47) {
          {
            if (undefined !== _0x2e4470 && undefined !== _0x519d47) {
              var _0x599c6e = 15 & _0xad6b0a;
              var _0x4d4dac = _0x599c6e < 8 ? _0x15cc67 : _0x2e4470;
              var _0x58a488 = _0x599c6e < 4 ? _0x2e4470 : 12 == _0x599c6e || 14 == _0x599c6e ? _0x15cc67 : _0x519d47;
              return (0 == (1 & _0x599c6e) ? _0x4d4dac : -_0x4d4dac) + (0 == (2 & _0x599c6e) ? _0x58a488 : -_0x58a488);
            }
            return undefined !== _0x2e4470 ? (0 == (1 & _0xad6b0a) ? _0x15cc67 : -_0x15cc67) + (0 == (2 & _0xad6b0a) ? _0x2e4470 : -_0x2e4470) : 0 == (1 & _0xad6b0a) ? _0x15cc67 : -_0x15cc67;
          }
        };
        return _0x15db14;
      }())._Permutation = [151, 160, 137, 91, 90, 15, 131, 13, 201, 95, 96, 53, 194, 233, 7, 225, 140, 36, 103, 30, 69, 142, 8, 99, 37, 240, 21, 10, 23, 190, 6, 148, 247, 120, 234, 75, 0, 26, 197, 62, 94, 252, 219, 203, 117, 35, 11, 32, 57, 177, 33, 88, 237, 149, 56, 87, 174, 20, 125, 136, 171, 168, 68, 175, 74, 165, 71, 134, 139, 48, 27, 166, 77, 146, 158, 231, 83, 111, 229, 122, 60, 211, 133, 230, 220, 105, 92, 41, 55, 46, 245, 40, 244, 102, 143, 54, 65, 25, 63, 161, 1, 216, 80, 73, 209, 76, 132, 187, 208, 89, 18, 169, 200, 196, 135, 130, 116, 188, 159, 86, 164, 100, 109, 198, 173, 186, 3, 64, 52, 217, 226, 250, 124, 123, 5, 202, 38, 147, 118, 126, 255, 82, 85, 212, 207, 206, 59, 227, 47, 16, 58, 17, 182, 189, 28, 42, 223, 183, 170, 213, 119, 248, 152, 2, 44, 154, 163, 70, 221, 153, 101, 155, 167, 43, 172, 9, 129, 22, 39, 253, 19, 98, 108, 110, 79, 113, 224, 232, 178, 185, 112, 104, 218, 246, 97, 228, 251, 34, 242, 193, 238, 210, 144, 12, 191, 179, 162, 241, 81, 51, 145, 235, 249, 14, 239, 107, 49, 192, 214, 31, 181, 199, 106, 157, 184, 84, 204, 176, 115, 121, 50, 45, 127, 4, 150, 254, 138, 236, 205, 93, 222, 114, 67, 29, 24, 72, 243, 141, 128, 195, 78, 66, 215, 61, 156, 180, 151];
      _0x3a48f0("Spline", function () {
        function _0x1be0d6() {}
        _0x1be0d6.Bezier3 = function (_0x494712, _0x1799db, _0x4852a1, _0xae3371, _0x30c8b2, _0x237b62) {
          var _0x41c8c3 = 1 - (_0x1799db = _0x30192c(_0x1799db));
          var _0xf58ce5 = _0x41c8c3 * _0x41c8c3 * _0x41c8c3;
          var _0x49a1f8 = 3 * _0x41c8c3 * _0x41c8c3 * _0x1799db;
          var _0x9f5112 = 3 * _0x41c8c3 * _0x1799db * _0x1799db;
          var _0xbde406 = _0x1799db * _0x1799db * _0x1799db;
          return _0x494712.set(_0xf58ce5 * _0x4852a1.x + _0x49a1f8 * _0xae3371.x + _0x9f5112 * _0x30c8b2.x + _0xbde406 * _0x237b62.x, _0xf58ce5 * _0x4852a1.y + _0x49a1f8 * _0xae3371.y + _0x9f5112 * _0x30c8b2.y + _0xbde406 * _0x237b62.y, _0xf58ce5 * _0x4852a1.z + _0x49a1f8 * _0xae3371.z + _0x9f5112 * _0x30c8b2.z + _0xbde406 * _0x237b62.z);
        };
        _0x1be0d6.ComputeSmoothControlPoints = function (_0x1e5c54, _0x4fc990, _0x4999a9) {
          var _0x45b21a = _0x1e5c54.length;
          if (_0x45b21a <= 2) {
            2 == _0x45b21a ? (_0x58b8e7.lerp(_0x4fc990[0], _0x1e5c54[0], _0x1e5c54[1], 0.33333), _0x58b8e7.lerp(_0x4999a9[0], _0x1e5c54[0], _0x1e5c54[1], 0.66666)) : 1 == _0x45b21a && (_0x4fc990[0] = _0x4999a9[0] = _0x1e5c54[0]);
          } else {
            for (var _0x4178ea = new Array(_0x45b21a), _0x55f1a5 = new Array(_0x45b21a), _0x1dc8ab = new Array(_0x45b21a), _0x4070d7 = new Array(_0x45b21a), _0x1f4175 = _0x1e5c54, _0x495710 = _0x4fc990, _0x1f794b = _0x4999a9, _0x3795d4 = ["x", "y", "z", "w"], _0x39d91d = 0; _0x39d91d < 4; ++_0x39d91d) {
              var _0x11be0e = _0x3795d4[_0x39d91d];
              var _0x4c20cc = _0x45b21a - 1;
              _0x4178ea[0] = 0;
              _0x55f1a5[0] = 2;
              _0x1dc8ab[0] = 1;
              _0x4070d7[0] = _0x1f4175[0][_0x11be0e] + 2 * _0x1f4175[1][_0x11be0e];
              for (var _0x4a4c0b = 1; _0x4a4c0b < _0x4c20cc - 1; ++_0x4a4c0b) {
                _0x4178ea[_0x4a4c0b] = 1;
                _0x55f1a5[_0x4a4c0b] = 4;
                _0x1dc8ab[_0x4a4c0b] = 1;
                _0x4070d7[_0x4a4c0b] = 4 * _0x1f4175[_0x4a4c0b][_0x11be0e] + 2 * _0x1f4175[_0x4a4c0b + 1][_0x11be0e];
              }
              _0x4178ea[_0x4c20cc - 1] = 2;
              _0x55f1a5[_0x4c20cc - 1] = 7;
              _0x1dc8ab[_0x4c20cc - 1] = 0;
              _0x4070d7[_0x4c20cc - 1] = 8 * _0x1f4175[_0x4c20cc - 1][_0x11be0e] + _0x1f4175[_0x4c20cc][_0x11be0e];
              for (var _0x32ddaf = 1; _0x32ddaf < _0x4c20cc; ++_0x32ddaf) {
                var _0x29820b = _0x4178ea[_0x32ddaf] / _0x55f1a5[_0x32ddaf - 1];
                _0x55f1a5[_0x32ddaf] = _0x55f1a5[_0x32ddaf] - _0x29820b * _0x1dc8ab[_0x32ddaf - 1];
                _0x4070d7[_0x32ddaf] = _0x4070d7[_0x32ddaf] - _0x29820b * _0x4070d7[_0x32ddaf - 1];
              }
              _0x495710[_0x4c20cc - 1][_0x11be0e] = _0x4070d7[_0x4c20cc - 1] / _0x55f1a5[_0x4c20cc - 1];
              for (var _0x315911 = _0x4c20cc - 2; _0x315911 >= 0; --_0x315911) {
                _0x495710[_0x315911][_0x11be0e] = (_0x4070d7[_0x315911] - _0x1dc8ab[_0x315911] * _0x495710[_0x315911 + 1][_0x11be0e]) / _0x55f1a5[_0x315911];
              }
              for (var _0xe610f0 = 0; _0xe610f0 < _0x4c20cc; _0xe610f0++) {
                _0x1f794b[_0xe610f0][_0x11be0e] = 2 * _0x1f4175[_0xe610f0 + 1][_0x11be0e] - _0x495710[_0xe610f0 + 1][_0x11be0e];
              }
              _0x1f794b[_0x4c20cc - 1][_0x11be0e] = 0.5 * (_0x1f4175[_0x4c20cc][_0x11be0e] + _0x495710[_0x4c20cc - 1][_0x11be0e]);
            }
          }
        };
        _0x1be0d6.ComputeSmoothControlPointsLooped = function (_0xfc2d1d, _0x72134a, _0x460308) {
          var _0x57d622 = _0xfc2d1d.length;
          if (_0x57d622 < 2) {
            1 == _0x57d622 && (_0x72134a[0] = _0x460308[0] = _0xfc2d1d[0]);
          } else {
            for (var _0x4d6b98 = Math.min(4, _0x57d622 - 1), _0x2e4a2d = _0x57d622 + 2 * _0x4d6b98, _0x2eb40d = new Array(_0x2e4a2d), _0x30975a = new Array(_0x2e4a2d), _0x31787e = new Array(_0x2e4a2d), _0x5ae889 = 0; _0x5ae889 < _0x4d6b98; ++_0x5ae889) {
              _0x2eb40d[_0x5ae889] = _0xfc2d1d[_0x57d622 - (_0x4d6b98 - _0x5ae889)];
              _0x2eb40d[_0x57d622 + _0x4d6b98 + _0x5ae889] = _0xfc2d1d[_0x5ae889];
            }
            for (var _0x3efb0a = 0; _0x3efb0a < _0x57d622; ++_0x3efb0a) {
              _0x2eb40d[_0x3efb0a + _0x4d6b98] = _0xfc2d1d[_0x3efb0a];
            }
            for (var _0x3cf616 = 0; _0x3cf616 < _0x2e4a2d; ++_0x3cf616) {
              _0x30975a[_0x3cf616] = new _0x58b8e7();
              _0x31787e[_0x3cf616] = new _0x58b8e7();
            }
            _0x1be0d6.ComputeSmoothControlPoints(_0x2eb40d, _0x30975a, _0x31787e);
            for (var _0x2b90aa = 0; _0x2b90aa < _0x57d622; ++_0x2b90aa) {
              _0x72134a[_0x2b90aa] = _0x30975a[_0x2b90aa + _0x4d6b98];
              _0x460308[_0x2b90aa] = _0x31787e[_0x2b90aa + _0x4d6b98];
            }
          }
        };
        return _0x1be0d6;
      }());
      _0x3a48f0("Curve", function () {
        function _0x56e07f() {
          this.type = "Curve";
          this.arcLengthDivisions = 200;
          this.cacheArcLengths = [];
          this.needsUpdate = false;
        }
        var _0x5a59a3 = _0x56e07f.prototype;
        _0x5a59a3.getPoint = function (_0x40261f, _0x48165b) {
          console.warn("THREE.Curve: .getPoint() not implemented.");
          return null;
        };
        _0x5a59a3.getPointAt = function (_0x33260b, _0x33c5ad) {
          var _0x198d60 = this.getUtoTmapping(_0x33260b);
          return this.getPoint(_0x198d60, _0x33c5ad);
        };
        _0x5a59a3.getPoints = function (_0x2ecfd2) {
          undefined === _0x2ecfd2 && (_0x2ecfd2 = 5);
          for (var _0x2d4f99 = [], _0x32b7fe = 0; _0x32b7fe <= _0x2ecfd2; _0x32b7fe++) {
            _0x2d4f99.push(this.getPoint(_0x32b7fe / _0x2ecfd2));
          }
          return _0x2d4f99;
        };
        _0x5a59a3.getSpacedPoints = function (_0x2af6c3) {
          {
            undefined === _0x2af6c3 && (_0x2af6c3 = 5);
            for (var _0x429146 = [], _0x145d20 = 0; _0x145d20 <= _0x2af6c3; _0x145d20++) {
              _0x429146.push(this.getPointAt(_0x145d20 / _0x2af6c3));
            }
            return _0x429146;
          }
        };
        _0x5a59a3.getLength = function () {
          var _0x280ee8 = this.getLengths();
          return _0x280ee8[_0x280ee8.length - 1];
        };
        _0x5a59a3.getLengths = function (_0x3cbe3f) {
          if (undefined === _0x3cbe3f && (_0x3cbe3f = this.arcLengthDivisions), this.cacheArcLengths && this.cacheArcLengths.length === _0x3cbe3f + 1 && !this.needsUpdate) {
            return this.cacheArcLengths;
          }
          this.needsUpdate = false;
          var _0x244ba0;
          var _0x7444c0 = [];
          var _0x5b63a5 = this.getPoint(0);
          var _0x4291b1 = 0;
          _0x7444c0.push(0);
          for (var _0x1eb3ea = 1; _0x1eb3ea <= _0x3cbe3f; _0x1eb3ea++) {
            _0x244ba0 = this.getPoint(_0x1eb3ea / _0x3cbe3f);
            _0x4291b1 += _0x1f7d22.distance(_0x244ba0, _0x5b63a5);
            _0x7444c0.push(_0x4291b1);
            _0x5b63a5 = _0x244ba0;
          }
          this.cacheArcLengths = _0x7444c0;
          return _0x7444c0;
        };
        _0x5a59a3.updateArcLengths = function () {
          this.needsUpdate = true;
          this.getLengths();
        };
        _0x5a59a3.getUtoTmapping = function (_0x3be658, _0x4b19d2) {
          var _0x17d4f0;
          var _0x5a54de = this.getLengths();
          var _0x1aac21 = 0;
          var _0x3eca8f = _0x5a54de.length;
          _0x17d4f0 = _0x4b19d2 || _0x3be658 * _0x5a54de[_0x3eca8f - 1];
          for (var _0x11880c, _0x4587ac = 0, _0x47c3b4 = _0x3eca8f - 1; _0x4587ac <= _0x47c3b4;) {
            if ((_0x11880c = _0x5a54de[_0x1aac21 = Math.floor(_0x4587ac + (_0x47c3b4 - _0x4587ac) / 2)] - _0x17d4f0) < 0) {
              _0x4587ac = _0x1aac21 + 1;
            } else {
              if (!(_0x11880c > 0)) {
                _0x47c3b4 = _0x1aac21;
                break;
              }
              _0x47c3b4 = _0x1aac21 - 1;
            }
          }
          if (_0x5a54de[_0x1aac21 = _0x47c3b4] === _0x17d4f0) {
            return _0x1aac21 / (_0x3eca8f - 1);
          }
          var _0x34ed53 = _0x5a54de[_0x1aac21];
          return (_0x1aac21 + (_0x17d4f0 - _0x34ed53) / (_0x5a54de[_0x1aac21 + 1] - _0x34ed53)) / (_0x3eca8f - 1);
        };
        _0x5a59a3.getTangent = function (_0x39dcf1, _0x7a04) {
          var _0x4d1c37 = 0.0001;
          var _0x5b5009 = _0x39dcf1 - _0x4d1c37;
          var _0x3344ed = _0x39dcf1 + _0x4d1c37;
          _0x5b5009 < 0 && (_0x5b5009 = 0);
          _0x3344ed > 1 && (_0x3344ed = 1);
          var _0x344e1b = this.getPoint(_0x5b5009);
          var _0x497992 = this.getPoint(_0x3344ed);
          var _0x43c981 = _0x7a04 || (_0x344e1b instanceof _0x3cb0ae ? new _0x3cb0ae() : new _0x1f7d22());
          _0x43c981.set(_0x497992).subtract(_0x344e1b).normalize();
          return _0x43c981;
        };
        _0x5a59a3.getTangentAt = function (_0x5ea8d0, _0x324ecb) {
          var _0x596b36 = this.getUtoTmapping(_0x5ea8d0);
          return this.getTangent(_0x596b36, _0x324ecb);
        };
        _0x5a59a3.computeFrenetFrames = function (_0x5600a3, _0x1a9f1c) {
          for (var _0x300041 = new _0x1f7d22(), _0x3705be = [], _0x2a8a42 = [], _0x1a61f0 = [], _0x5c1ccd = new _0x1f7d22(), _0x2aeaf8 = new _0x472ed6(), _0x3b6305 = 0; _0x3b6305 <= _0x5600a3; _0x3b6305++) {
            var _0x920f6f = _0x3b6305 / _0x5600a3;
            _0x3705be[_0x3b6305] = this.getTangentAt(_0x920f6f, new _0x1f7d22());
          }
          _0x2a8a42[0] = new _0x1f7d22();
          _0x1a61f0[0] = new _0x1f7d22();
          var _0x1d8f65 = Number.MAX_VALUE;
          var _0x3151f9 = Math.abs(_0x3705be[0].x);
          var _0x1e8a86 = Math.abs(_0x3705be[0].y);
          var _0x3752f6 = Math.abs(_0x3705be[0].z);
          _0x3151f9 <= _0x1d8f65 && (_0x1d8f65 = _0x3151f9, _0x300041.set(1, 0, 0));
          _0x1e8a86 <= _0x1d8f65 && (_0x1d8f65 = _0x1e8a86, _0x300041.set(0, 1, 0));
          _0x3752f6 <= _0x1d8f65 && _0x300041.set(0, 0, 1);
          _0x1f7d22.cross(_0x5c1ccd, _0x3705be[0], _0x300041).normalize();
          _0x1f7d22.cross(_0x2a8a42[0], _0x3705be[0], _0x5c1ccd);
          _0x1f7d22.cross(_0x1a61f0[0], _0x3705be[0], _0x2a8a42[0]);
          for (var _0x7a777a = 1; _0x7a777a <= _0x5600a3; _0x7a777a++) {
            if (_0x2a8a42[_0x7a777a] = _0x2a8a42[_0x7a777a - 1].clone(), _0x1a61f0[_0x7a777a] = _0x1a61f0[_0x7a777a - 1].clone(), _0x1f7d22.cross(_0x5c1ccd, _0x3705be[_0x7a777a - 1], _0x3705be[_0x7a777a]), _0x5c1ccd.length() > Number.EPSILON) {
              _0x5c1ccd.normalize();
              var _0x4a3b3f = Math.acos(_0x561ec8(_0x3705be[_0x7a777a - 1].dot(_0x3705be[_0x7a777a]), -1, 1));
              _0x2a8a42[_0x7a777a].transformMat4(_0x2aeaf8.makeRotationAxis(_0x5c1ccd, _0x4a3b3f));
            }
            _0x1f7d22.cross(_0x1a61f0[_0x7a777a], _0x3705be[_0x7a777a], _0x2a8a42[_0x7a777a]);
          }
          if (true === _0x1a9f1c) {
            var _0x19321b = Math.acos(_0x561ec8(_0x2a8a42[0].dot(_0x2a8a42[_0x5600a3]), -1, 1));
            _0x19321b /= _0x5600a3;
            _0x3705be[0].dot(_0x1f7d22.cross(_0x5c1ccd, _0x2a8a42[0], _0x2a8a42[_0x5600a3])) > 0 && (_0x19321b = -_0x19321b);
            for (var _0x31e0d1 = 1; _0x31e0d1 <= _0x5600a3; _0x31e0d1++) {
              _0x2a8a42[_0x31e0d1].transformMat4(_0x2aeaf8.makeRotationAxis(_0x3705be[_0x31e0d1], _0x19321b * _0x31e0d1));
              _0x1f7d22.cross(_0x1a61f0[_0x31e0d1], _0x3705be[_0x31e0d1], _0x2a8a42[_0x31e0d1]);
            }
          }
          return {
            tangents: _0x3705be,
            normals: _0x2a8a42,
            binormals: _0x1a61f0
          };
        };
        _0x5a59a3.clone = function () {
          return new _0x56e07f().copy(this);
        };
        _0x5a59a3.copy = function (_0x5e8fa8) {
          this.arcLengthDivisions = _0x5e8fa8.arcLengthDivisions;
          return this;
        };
        return _0x56e07f;
      }());
      _0x3114c7._RF.pop();
    }
  };
});
System.register("chunks:///_virtual/CinestationShareAssets.ts", ["cc"], function (_0x28f40c) {
  var _0x1a6722;
  var _0x2fa66d;
  var _0x542853;
  var _0x3203b5;
  var _0x81cc90;
  return {
    setters: [function (_0x28a458) {
      _0x1a6722 = _0x28a458.cclegacy;
      _0x2fa66d = _0x28a458.Material;
      _0x542853 = _0x28a458.game;
      _0x3203b5 = _0x28a458.Game;
      _0x81cc90 = _0x28a458.gfx;
    }],
    execute: function () {
      _0x1a6722._RF.push({}, "53319txRnNOJ7hdwo/uO++u", "CinestationShareAssets", undefined);
      _0x28f40c("cinestationShareAssets", new (function () {
        {
          function _0x143da4() {
            this.lineMaterial = undefined;
            this.lineMaterial = new _0x2fa66d();
            this.lineMaterial._uuid = "cinestation-line-material";
            _0x542853.on(_0x3203b5.EVENT_GAME_INITED, this._compile, this);
          }
          _0x143da4.prototype._compile = function () {
            this.lineMaterial.initialize({
              effectName: "builtin-unlit",
              defines: {
                USE_VERTEX_COLOR: true
              },
              states: {
                primitive: _0x81cc90.PrimitiveMode.LINE_LIST
              }
            });
            this.lineMaterial.passes.forEach(function (_0x172a4f) {
              return _0x172a4f.tryCompile();
            });
          };
          return _0x143da4;
        }
      }())());
      _0x1a6722._RF.pop();
    }
  };
});
System.register("chunks:///_virtual/CinestationSmoothPath.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./CinestationMath.ts", "./Visualization.ts"], function (_0x248b1d) {
  var _0x19b671;
  var _0x11e231;
  var _0x8407c8;
  var _0x7e8baa;
  var _0x4a5f08;
  var _0x42b24b;
  var _0x20e1e8;
  var _0x106bad;
  var _0x57c195;
  var _0x11c941;
  var _0x149866;
  var _0x1b3dc5;
  var _0x3ed4f;
  var _0x2aafb8;
  var _0x4f238b;
  var _0x18b269;
  var _0xe5b3a0;
  var _0xdf2927;
  var _0x2cc4;
  return {
    setters: [function (_0x5637d6) {
      _0x19b671 = _0x5637d6.applyDecoratedDescriptor;
      _0x11e231 = _0x5637d6.inheritsLoose;
      _0x8407c8 = _0x5637d6.initializerDefineProperty;
      _0x7e8baa = _0x5637d6.assertThisInitialized;
      _0x4a5f08 = _0x5637d6.createForOfIteratorHelperLoose;
      _0x42b24b = _0x5637d6.createClass;
    }, function (_0x5f029b) {
      _0x20e1e8 = _0x5f029b.cclegacy;
      _0x106bad = _0x5f029b._decorator;
      _0x57c195 = _0x5f029b.Vec3;
      _0x11c941 = _0x5f029b.Vec2;
      _0x149866 = _0x5f029b.Quat;
      _0x1b3dc5 = _0x5f029b.Node;
      _0x3ed4f = _0x5f029b.clamp;
      _0x2aafb8 = _0x5f029b.Vec4;
      _0x4f238b = _0x5f029b.Color;
      _0x18b269 = _0x5f029b.utils;
    }, function (_0x4e95b2) {
      _0xe5b3a0 = _0x4e95b2.Spline;
      _0xdf2927 = _0x4e95b2.Vec3_closestPointOnSegment;
    }, function (_0x23598f) {
      _0x2cc4 = _0x23598f.Visualization;
    }],
    execute: function () {
      var _0x361e56;
      var _0x1773e6;
      var _0x359677;
      var _0xab66d6;
      var _0x4e1ab1;
      var _0x159680;
      var _0x12a847;
      var _0x5858d0;
      var _0x3fb9ac;
      var _0x56c94c;
      var _0x3d5e55;
      var _0x2f58d1;
      var _0x26923f;
      var _0x368189;
      var _0x419436;
      _0x20e1e8._RF.push({}, "234b1QMPE9PjaikyMraAdcc", "CinestationSmoothPath", undefined);
      var _0x20d394 = _0x106bad.ccclass;
      var _0xb0c394 = _0x106bad.property;
      var _0x3a9e96 = _0x106bad.menu;
      var _0x37f52a = _0x106bad.executeInEditMode;
      var _0x32b074 = new _0x57c195();
      var _0x26b8b6 = new _0x57c195();
      var _0x52295b = new _0x57c195();
      var _0xa9c8ef = new _0x11c941();
      var _0x5ae62c = new _0x149866();
      _0x248b1d("CinestationSmoothPath", (_0x361e56 = _0x20d394("CinestationSmoothPath"), _0x1773e6 = _0x3a9e96("Cinestation/CinestationSmoothPath"), _0x359677 = _0xb0c394({
        visible: false
      }), _0xab66d6 = _0xb0c394({
        visible: false
      }), _0x4e1ab1 = _0xb0c394({
        visible: false
      }), _0x159680 = _0xb0c394({
        visible: false
      }), _0x12a847 = _0xb0c394({
        visible: false
      }), _0x5858d0 = _0xb0c394({
        range: [2, 100],
        step: 5,
        slide: true
      }), _0x361e56(_0x3fb9ac = _0x1773e6(_0x3fb9ac = _0x37f52a((_0x3d5e55 = _0x19b671((_0x56c94c = function (_0x40b481) {
        function _0x1ff748() {
          for (var _0x37dd05, _0x230336 = arguments.length, _0x274648 = new Array(_0x230336), _0x4d07e0 = 0; _0x4d07e0 < _0x230336; _0x4d07e0++) {
            _0x274648[_0x4d07e0] = arguments[_0x4d07e0];
          }
          _0x37dd05 = _0x40b481.call.apply(_0x40b481, [this].concat(_0x274648)) || this;
          _0x8407c8(_0x37dd05, "_resolution", _0x3d5e55, _0x7e8baa(_0x37dd05));
          _0x8407c8(_0x37dd05, "_looped", _0x2f58d1, _0x7e8baa(_0x37dd05));
          _0x8407c8(_0x37dd05, "_localControlPoints1", _0x26923f, _0x7e8baa(_0x37dd05));
          _0x8407c8(_0x37dd05, "_localControlPoints2", _0x368189, _0x7e8baa(_0x37dd05));
          _0x8407c8(_0x37dd05, "_localUpVectors", _0x419436, _0x7e8baa(_0x37dd05));
          return _0x37dd05;
        }
        _0x11e231(_0x1ff748, _0x40b481);
        var _0x47c9ba = _0x1ff748.prototype;
        _0x47c9ba.onLoad = function () {
          if (CC_EDITOR) {
            this.node.on(_0x1b3dc5.EventType.CHILD_ADDED, this._onChildAdded, this);
            this.node.on(_0x1b3dc5.EventType.CHILD_REMOVED, this._onNodeChanged, this);
            for (var _0x571970, _0x519e0e = _0x4a5f08(this.node.children); !(_0x571970 = _0x519e0e()).done;) {
              var _0x29fb80 = _0x571970.value;
              this._onNodeChanged(_0x29fb80);
            }
          }
        };
        _0x47c9ba._onChildAdded = function (_0x8387dc) {
          var _0x46cb43 = this.node.children;
          var _0x2107dd = _0x46cb43.length;
          if (2 === _0x2107dd) {
            _0x8387dc.position = new _0x57c195(_0x46cb43[0].position).add3f(0, 0, 5);
          } else {
            if (_0x2107dd > 2) {
              var _0x3228e8 = _0x46cb43[_0x2107dd - 3].position;
              var _0x1b210e = _0x46cb43[_0x2107dd - 2].position;
              var _0x1f2080 = new _0x57c195(_0x1b210e).subtract(_0x3228e8).normalize().multiplyScalar(5);
              _0x8387dc.position = _0x1f2080.add(_0x1b210e);
            }
          }
          this._onNodeChanged(_0x8387dc);
        };
        _0x47c9ba._onNodeChanged = function (_0x1a4bd1) {
          {
            var _0x34b968 = this;
            _0x1a4bd1.on(_0x1b3dc5.EventType.TRANSFORM_CHANGED, function () {
              _0x34b968._modelChanged = true;
            });
            this._modelChanged = true;
          }
        };
        _0x47c9ba._getBoundingIndices = function (_0x40272d, _0x3ce83b) {
          _0x40272d = this._clampProgress(_0x40272d);
          var _0x2970f4 = this.node.children.length;
          _0x2970f4 < 2 ? _0x3ce83b.x = _0x3ce83b.y = 0 : (_0x3ce83b.x = Math.floor(_0x40272d), _0x3ce83b.x >= _0x2970f4 && (_0x40272d -= this._maxProgress, _0x3ce83b.x = 0), _0x3ce83b.y = _0x3ce83b.x + 1, _0x3ce83b.y == _0x2970f4 && (this.looped ? _0x3ce83b.y = 0 : (--_0x3ce83b.y, --_0x3ce83b.x)));
          return _0x40272d;
        };
        _0x47c9ba._clampProgress = function (_0x59ce5d) {
          var _0x2e9b07 = this._maxProgress;
          return this._looped && _0x2e9b07 > 0 ? ((_0x59ce5d %= _0x2e9b07) < 0 && (_0x59ce5d += _0x2e9b07), _0x59ce5d) : _0x3ed4f(_0x59ce5d, 0, _0x2e9b07);
        };
        _0x47c9ba.evaluatePosition = function (_0x3807e2, _0x23ad62) {
          return _0x57c195.transformMat4(_0x3807e2, this.evaluateLocalPosition(_0x3807e2, _0x23ad62), this.node.worldMatrix);
        };
        _0x47c9ba.evaluteUp = function (_0x1c2564, _0x1e0271) {
          return _0x57c195.transformQuat(_0x1c2564, this.evaluteLocalUp(_0x1c2564, _0x1e0271), this.node.worldRotation);
        };
        _0x47c9ba.evaluateLocalPosition = function (_0x4a1f8e, _0x283a95) {
          var _0x16fb88 = this.node.children;
          if (0 === _0x16fb88.length) {
            return _0x4a1f8e.set(this.node.position);
          }
          var _0x1dbdce = _0xa9c8ef.set(0, 0);
          _0x283a95 = this._getBoundingIndices(_0x283a95, _0x1dbdce);
          return _0x1dbdce.x === _0x1dbdce.y ? _0x4a1f8e.set(_0x16fb88[_0x1dbdce.x].position) : _0xe5b3a0.Bezier3(_0x4a1f8e, _0x283a95 - _0x1dbdce.x, _0x16fb88[_0x1dbdce.x].position, this._localControlPoints1[_0x1dbdce.x], this._localControlPoints2[_0x1dbdce.x], _0x16fb88[_0x1dbdce.y].position);
        };
        _0x47c9ba.evaluateLocalRotation = function (_0x258606, _0x3e1bde) {
          {
            var _0x2812a2 = this.node.children;
            if (0 === _0x2812a2.length) {
              return _0x258606.set(this.node.rotation);
            }
            var _0x51b4b3 = _0xa9c8ef.set(0, 0);
            _0x3e1bde = this._getBoundingIndices(_0x3e1bde, _0x51b4b3);
            return _0x51b4b3.x === _0x51b4b3.y ? _0x258606.set(_0x2812a2[_0x51b4b3.x].rotation) : _0x258606.set(_0x2812a2[_0x51b4b3.x].rotation).lerp(_0x2812a2[_0x51b4b3.y].rotation, _0x3e1bde - _0x51b4b3.x);
          }
        };
        _0x47c9ba.evaluteLocalUp = function (_0x5a5e0a, _0x5c82c3) {
          if (0 === this.node.children.length) {
            return _0x5a5e0a.set(_0x57c195.UP);
          }
          var _0x41da61 = _0xa9c8ef.set(0, 0);
          _0x5c82c3 = this._getBoundingIndices(_0x5c82c3, _0x41da61);
          return _0x41da61.x === _0x41da61.y ? _0x5a5e0a.set(this._localUpVectors[_0x41da61.x]) : _0x5a5e0a.set(this._localUpVectors[_0x41da61.x]).lerp(this._localUpVectors[_0x41da61.y], _0x5c82c3 - _0x41da61.x);
        };
        _0x47c9ba.findClosestPoint = function (_0x20c31d, _0x47b918, _0x11b3f4, _0x3d2372) {
          var _0x9b718a = this._minProgress;
          var _0x1de99a = this._maxProgress;
          if (_0x11b3f4 >= 0) {
            var _0x54b3ac = Math.floor(Math.min(_0x11b3f4, Math.max(1, (_0x1de99a - _0x9b718a) / 2)));
            _0x9b718a = _0x47b918 - _0x54b3ac;
            _0x1de99a = _0x47b918 + _0x54b3ac + 1;
            this.looped || (_0x9b718a = Math.max(_0x9b718a, this._minProgress), _0x1de99a = Math.min(_0x1de99a, this._maxProgress));
          }
          for (var _0x268808 = _0x47b918, _0x4bfaf8 = Infinity, _0x494207 = 1 / _0x3ed4f(_0x3d2372, 1, 100), _0x2fca2a = this.evaluatePosition(_0x32b074, 0), _0x3452b5 = _0x9b718a + _0x494207; _0x3452b5 <= _0x1de99a; _0x3452b5 += _0x494207) {
            var _0x4a180a = this.evaluatePosition(_0x26b8b6, _0x3452b5);
            var _0x4e5a8b = _0xdf2927(_0x20c31d, _0x2fca2a, _0x4a180a);
            var _0x3b1d57 = _0x57c195.squaredDistance(_0x20c31d, _0x57c195.lerp(_0x52295b, _0x2fca2a, _0x4a180a, _0x4e5a8b));
            _0x3b1d57 < _0x4bfaf8 && (_0x4bfaf8 = _0x3b1d57, _0x268808 = _0x3452b5 - (1 - _0x4e5a8b) * _0x494207);
            _0x2fca2a.set(_0x4a180a);
          }
          return _0x268808;
        };
        _0x47c9ba._updateControlPoints = function () {
          var _0x43fe0c = this.node.children;
          var _0x18947d = _0x43fe0c.length;
          if (_0x18947d > 1) {
            for (var _0x5d2f73 = new Array(_0x18947d), _0x169d5c = new Array(_0x18947d), _0x2edd16 = new Array(_0x18947d), _0x1904ae = 0; _0x1904ae < _0x18947d; _0x1904ae++) {
              _0x5d2f73[_0x1904ae] = new _0x2aafb8();
              _0x169d5c[_0x1904ae] = new _0x2aafb8();
              var _0x4cf73a = _0x43fe0c[_0x1904ae].position;
              _0x2edd16[_0x1904ae] = new _0x2aafb8(_0x4cf73a.x, _0x4cf73a.y, _0x4cf73a.z, 0);
            }
            this.looped ? _0xe5b3a0.ComputeSmoothControlPointsLooped(_0x2edd16, _0x5d2f73, _0x169d5c) : _0xe5b3a0.ComputeSmoothControlPoints(_0x2edd16, _0x5d2f73, _0x169d5c);
            this._localControlPoints1.length = _0x18947d;
            this._localControlPoints2.length = _0x18947d;
            for (var _0xe71475 = 0; _0xe71475 < _0x18947d; _0xe71475++) {
              this._localControlPoints1[_0xe71475] = new _0x57c195(_0x5d2f73[_0xe71475].x, _0x5d2f73[_0xe71475].y, _0x5d2f73[_0xe71475].z);
              this._localControlPoints2[_0xe71475] = new _0x57c195(_0x169d5c[_0xe71475].x, _0x169d5c[_0xe71475].y, _0x169d5c[_0xe71475].z);
            }
          }
        };
        _0x47c9ba._updateUpVectors = function () {
          this._localUpVectors = [];
          for (var _0x39cb80 = this.node.children, _0xa65e88 = _0x39cb80.length, _0x59a23c = 0; _0x59a23c + 1 < _0xa65e88; _0x59a23c++) {
            var _0x1283ac = _0x57c195.subtract(new _0x57c195(), _0x39cb80[_0x59a23c + 1].position, _0x39cb80[_0x59a23c].position);
            var _0x5d902f = _0x57c195.cross(new _0x57c195(), _0x1283ac, _0x57c195.UP).cross(_0x1283ac);
            _0x57c195.transformQuat(_0x5d902f, _0x5d902f, _0x39cb80[_0x59a23c].rotation);
            this._localUpVectors[_0x59a23c] = _0x5d902f.normalize();
          }
          if (_0xa65e88 >= 2) {
            var _0xb79802 = new _0x57c195().set(this._localUpVectors[_0xa65e88 - 2]);
            _0x57c195.transformQuat(_0xb79802, _0xb79802, _0x39cb80[_0xa65e88 - 1].rotation);
            this._localUpVectors[_0xa65e88 - 1] = _0xb79802.normalize();
          }
        };
        _0x47c9ba._updateMesh = function (_0x520f55) {
          {
            this._updateControlPoints();
            this._updateUpVectors();
            for (var _0x42c7d1 = [], _0x323884 = [], _0x3f2d6e = this.node.children, _0x36e785 = 1 / Math.max(2, this._resolution), _0x2ddf7c = 0; _0x2ddf7c < _0x3f2d6e.length; _0x2ddf7c += _0x36e785) {
              if (_0x42c7d1.push(this.evaluateLocalPosition(new _0x57c195(), _0x2ddf7c)), _0x42c7d1.length >= 2) {
                var _0x546b56 = _0x42c7d1[_0x42c7d1.length - 2];
                var _0x404893 = _0x42c7d1[_0x42c7d1.length - 1];
                var _0x1e4e9e = _0x57c195.subtract(new _0x57c195(), _0x404893, _0x546b56).cross(_0x57c195.UP).normalize();
                _0x57c195.transformQuat(_0x1e4e9e, _0x1e4e9e, this.evaluateLocalRotation(_0x5ae62c, _0x2ddf7c));
                _0x323884.push(_0x1e4e9e);
              }
            }
            var _0x3284c6 = [];
            var _0x317397 = [];
            var _0x17aef0 = [];
            var _0x465b53 = [];
            var _0x1eb348 = new _0x4f238b(0, 1, 0, 1);
            var _0x2c2843 = new _0x4f238b(0.3, 0.3, 0.3, 1);
            function _0x39d62d(_0x46350c, _0x10b095, _0x31dac3) {
              _0x46350c && _0x10b095 && (_0x57c195.toArray(_0x3284c6, _0x46350c, _0x3284c6.length), _0x57c195.toArray(_0x3284c6, _0x10b095, _0x3284c6.length), _0x317397.push(_0x31dac3.r, _0x31dac3.g, _0x31dac3.b, _0x31dac3.a), _0x317397.push(_0x31dac3.r, _0x31dac3.g, _0x31dac3.b, _0x31dac3.a));
            }
            for (var _0x21a242 = 0; _0x21a242 + 1 < _0x42c7d1.length; _0x21a242++) {
              var _0xe0a217 = _0x42c7d1[_0x21a242];
              var _0x421e99 = _0x42c7d1[_0x21a242 + 1];
              var _0x333265 = _0x323884[_0x21a242];
              var _0xfe9fd1 = new _0x57c195().set(_0x333265).multiplyScalar(0.1);
              0 === _0x21a242 && (_0x17aef0.push(new _0x57c195(_0xe0a217).subtract(_0xfe9fd1)), _0x465b53.push(new _0x57c195(_0xe0a217).add(_0xfe9fd1)));
              _0x17aef0.push(new _0x57c195(_0x421e99).subtract(_0xfe9fd1));
              _0x465b53.push(new _0x57c195(_0x421e99).add(_0xfe9fd1));
              _0x39d62d(new _0x57c195(_0xe0a217).subtract(_0xfe9fd1), new _0x57c195(_0xe0a217).add(_0xfe9fd1), _0x1eb348);
              _0x39d62d(_0xe0a217, _0x421e99, _0x2c2843);
            }
            this._looped && _0x39d62d(_0x42c7d1[_0x42c7d1.length - 1], _0x42c7d1[0], _0x2c2843);
            for (var _0x461fcf = 0; _0x461fcf + 1 < _0x17aef0.length; _0x461fcf++) {
              _0x39d62d(_0x17aef0[_0x461fcf], _0x17aef0[_0x461fcf + 1], _0x1eb348);
            }
            this._looped && _0x39d62d(_0x17aef0[_0x17aef0.length - 1], _0x17aef0[0], _0x1eb348);
            for (var _0x3903fe = 0; _0x3903fe + 1 < _0x465b53.length; _0x3903fe++) {
              _0x39d62d(_0x465b53[_0x3903fe], _0x465b53[_0x3903fe + 1], _0x1eb348);
            }
            this._looped && _0x39d62d(_0x465b53[_0x465b53.length - 1], _0x465b53[0], _0x1eb348);
            return _0x18b269.createMesh({
              positions: _0x3284c6,
              colors: _0x317397
            }, _0x520f55);
          }
        };
        _0x42b24b(_0x1ff748, [{
          key: "resolution",
          get: function () {
            return this._resolution;
          },
          set: function (_0x5717ff) {
            {
              this._resolution = _0x5717ff;
              this._modelChanged = true;
            }
          }
        }, {
          key: "looped",
          get: function () {
            return this._looped;
          },
          set: function (_0x4c0564) {
            this._looped !== _0x4c0564 && (this._looped = _0x4c0564, this._modelChanged = true);
          }
        }, {
          key: "_minProgress",
          get: function () {
            {
              return 0;
            }
          }
        }, {
          key: "_maxProgress",
          get: function () {
            var _0x544ba2 = this.node.children.length - 1;
            return _0x544ba2 < 1 ? 0 : this.looped ? _0x544ba2 + 1 : _0x544ba2;
          }
        }]);
        return _0x1ff748;
      }(_0x2cc4)).prototype, "_resolution", [_0x359677], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 10;
        }
      }), _0x2f58d1 = _0x19b671(_0x56c94c.prototype, "_looped", [_0xab66d6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _0x26923f = _0x19b671(_0x56c94c.prototype, "_localControlPoints1", [_0x4e1ab1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _0x368189 = _0x19b671(_0x56c94c.prototype, "_localControlPoints2", [_0x159680], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _0x419436 = _0x19b671(_0x56c94c.prototype, "_localUpVectors", [_0x12a847], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _0x19b671(_0x56c94c.prototype, "resolution", [_0x5858d0], Object.getOwnPropertyDescriptor(_0x56c94c.prototype, "resolution"), _0x56c94c.prototype), _0x19b671(_0x56c94c.prototype, "looped", [_0xb0c394], Object.getOwnPropertyDescriptor(_0x56c94c.prototype, "looped"), _0x56c94c.prototype), _0x3fb9ac = _0x56c94c)) || _0x3fb9ac) || _0x3fb9ac) || _0x3fb9ac));
      _0x20e1e8._RF.pop();
    }
  };
});
System.register("chunks:///_virtual/CirculatePageView.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], function (_0x1f9012) {
  var _0x1084b9;
  var _0x2ac127;
  var _0x127f6d;
  var _0x2a1aac;
  var _0x5494ea;
  var _0x1bbc27;
  var _0x43306d;
  var _0x360a21;
  return {
    setters: [function (_0x56d6dd) {
      _0x1084b9 = _0x56d6dd.applyDecoratedDescriptor;
      _0x2ac127 = _0x56d6dd.inheritsLoose;
      _0x127f6d = _0x56d6dd.initializerDefineProperty;
      _0x2a1aac = _0x56d6dd.assertThisInitialized;
    }, function (_0x676b0e) {
      _0x5494ea = _0x676b0e.cclegacy;
      _0x1bbc27 = _0x676b0e._decorator;
      _0x43306d = _0x676b0e.Vec2;
      _0x360a21 = _0x676b0e.PageView;
    }],
    execute: function () {
      var _0x4ac3bb;
      var _0x5979f8;
      var _0x481b5f;
      var _0x10b584;
      var _0x3904d3;
      var _0x2e25e2;
      _0x5494ea._RF.push({}, "1563enYGZRGPL27FbANH5mO", "CirculatePageView", undefined);
      _0x1bbc27.icon;
      var _0x289290 = _0x1bbc27.ccclass;
      var _0x35f920 = _0x1bbc27.property;
      var _0x5ad552 = _0x1bbc27.disallowMultiple;
      var _0xb9ad3e = _0x1bbc27.menu;
      _0x1f9012("CirculatePageView", (_0x4ac3bb = _0x289290("CirculatePageView"), _0x5979f8 = _0xb9ad3e("自定义组件/CirculatePageView"), _0x481b5f = _0x35f920({
        displayName: "循环滚动",
        tooltip: "是否循环"
      }), _0x4ac3bb(_0x10b584 = _0x5ad552(_0x10b584 = _0x5979f8((_0x2e25e2 = _0x1084b9((_0x3904d3 = function (_0x53df5a) {
        function _0x5876b6() {
          for (var _0x311579, _0x4d8621 = arguments.length, _0x1fc61e = new Array(_0x4d8621), _0x17d092 = 0; _0x17d092 < _0x4d8621; _0x17d092++) {
            _0x1fc61e[_0x17d092] = arguments[_0x17d092];
          }
          _0x311579 = _0x53df5a.call.apply(_0x53df5a, [this].concat(_0x1fc61e)) || this;
          _0x127f6d(_0x311579, "circulate", _0x2e25e2, _0x2a1aac(_0x311579));
          return _0x311579;
        }
        _0x2ac127(_0x5876b6, _0x53df5a);
        _0x5876b6.prototype._autoScrollToPage = function () {
          var _0x3789b7 = this._startBounceBackIfNeeded();
          if (!this.circulate && _0x3789b7) {
            var _0x5d6c3 = this._getHowMuchOutOfBoundary();
            this._clampDelta(_0x5d6c3);
            (_0x5d6c3.x > 0 || _0x5d6c3.y < 0) && (this._curPageIdx = 0 === this._pages.length ? 0 : this._pages.length - 1);
            (_0x5d6c3.x < 0 || _0x5d6c3.y > 0) && (this._curPageIdx = 0);
            this.indicator && this.indicator._changedState();
          } else {
            var _0x4c176f = new _0x43306d();
            _0x43306d.subtract(_0x4c176f, this._touchBeganPosition, this._touchEndPosition);
            var _0x32fa1d = this._curPageIdx;
            var _0x75f420 = _0x32fa1d + this._getDragDirection(_0x4c176f);
            var _0x126041 = this.pageTurningSpeed * Math.abs(_0x32fa1d - _0x75f420);
            if (this.circulate) {
              if (_0x75f420 >= this._pages.length) {
                return void this.scrollToPage(0, _0x126041);
              }
              if (_0x75f420 < 0) {
                return void this.scrollToPage(this._pages.length - 1, _0x126041);
              }
            }
            if (_0x75f420 < this._pages.length) {
              if (this._isScrollable(_0x4c176f, _0x32fa1d, _0x75f420)) {
                return void this.scrollToPage(_0x75f420, _0x126041);
              }
              var _0x1c3f2f = this._calculateTouchMoveVelocity();
              if (this._isQuicklyScrollable(_0x1c3f2f)) {
                return void this.scrollToPage(_0x75f420, _0x126041);
              }
            }
            this.scrollToPage(_0x32fa1d, _0x126041);
          }
        };
        return _0x5876b6;
      }(_0x360a21)).prototype, "circulate", [_0x481b5f], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return true;
        }
      }), _0x10b584 = _0x3904d3)) || _0x10b584) || _0x10b584) || _0x10b584));
      _0x5494ea._RF.pop();
    }
  };
});
System.register("chunks:///_virtual/ComposerHandler.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./CinestationData.ts", "./CinestationMath.ts", "./Predictor.ts", "./CameraHandler.ts"], function (_0x187b15) {
  var _0x2c02c0;
  var _0x15f835;
  var _0x28aa5c;
  var _0x2244fa;
  var _0x4655eb;
  var _0x86e306;
  var _0x697ecd;
  var _0x585602;
  var _0x1e6e3b;
  return {
    setters: [function (_0x58431e) {
      _0x2c02c0 = _0x58431e.inheritsLoose;
    }, function (_0x46c9dd) {
      _0x15f835 = _0x46c9dd.cclegacy;
      _0x28aa5c = _0x46c9dd.Vec3;
      _0x2244fa = _0x46c9dd.Quat;
    }, function (_0x3e38b6) {
      _0x4655eb = _0x3e38b6.cinestation;
    }, function (_0x37f8be) {
      {
        _0x86e306 = _0x37f8be.Quat_smoothDamp;
        _0x697ecd = _0x37f8be.Vec4_closeTo;
      }
    }, function (_0x2d1323) {
      _0x585602 = _0x2d1323.Predictor;
    }, function (_0x2bd440) {
      _0x1e6e3b = _0x2bd440.CameraHandler;
    }],
    execute: function () {
      _0x15f835._RF.push({}, "ed040GtNkhPZ5yR4yNDSf5W", "ComposerHandler", undefined);
      var _0xbd46f4 = new _0x28aa5c();
      var _0x3c9e6c = new _0x28aa5c();
      var _0x452298 = new _0x2244fa();
      _0x187b15("ComposerHandler", function (_0x13d968) {
        function _0x25e385() {
          for (var _0x1f8927, _0x3590a1 = arguments.length, _0x436606 = new Array(_0x3590a1), _0x218a52 = 0; _0x218a52 < _0x3590a1; _0x218a52++) {
            _0x436606[_0x218a52] = arguments[_0x218a52];
          }
          (_0x1f8927 = _0x13d968.call.apply(_0x13d968, [this].concat(_0x436606)) || this)._predictor = new _0x585602();
          _0x1f8927._rotation = new _0x2244fa();
          return _0x1f8927;
        }
        _0x2c02c0(_0x25e385, _0x13d968);
        var _0x597ea0 = _0x25e385.prototype;
        _0x597ea0.updateCamera = function (_0x4aae0c) {
          var _0x247bc4 = this._vcam;
          if (_0x247bc4.lookAt) {
            var _0x5ba77f = _0x247bc4.aim.composer;
            _0x28aa5c.add(_0x3c9e6c, _0x247bc4.lookAt.position, _0x247bc4.aim.trackedObjectOffset);
            _0x247bc4.lookAt.parent && _0x3c9e6c.add(_0x247bc4.lookAt.parent.worldPosition);
            this._predictor.predictPosition(_0x247bc4.lookaheadPosition, _0x3c9e6c, _0x5ba77f.lookaheadDamping, _0x5ba77f.lookaheadTime, _0x4aae0c);
            this._clampWithDeadZone(_0x3c9e6c, _0x247bc4.lookaheadPosition);
            _0x2244fa.fromViewUp(this._rotation, _0x28aa5c.subtract(_0x3c9e6c, _0x247bc4.node.worldPosition, _0x3c9e6c).normalize());
            _0x86e306(_0x452298, _0x247bc4.node.worldRotation, this._rotation, _0x5ba77f.lookatDamping, _0x4aae0c);
            _0x697ecd(_0x452298, _0x247bc4.node.worldRotation) || (_0x247bc4.node.worldRotation = _0x452298);
          }
        };
        _0x597ea0._clampWithDeadZone = function (_0x5c473c, _0x4893b6) {
          var _0xe7ded5 = this._vcam.aim.composer;
          var _0x24417f = _0x4655eb.mainCamera;
          if (_0x24417f) {
            var _0x14a710 = _0x24417f.camera;
            var _0x55cbc5 = _0x28aa5c.transformMat4(_0xbd46f4, _0x4893b6, _0x14a710.matViewProj).add(_0x28aa5c.ONE).multiplyScalar(0.5);
            var _0x54e69e = _0xe7ded5.deadZoneWidth / 2;
            var _0x42e3ba = _0xe7ded5.deadZoneHeight / 2;
            _0x5c473c.set(0.5, 0.5, _0x55cbc5.z);
            _0x55cbc5.x < 0.5 - _0x54e69e && (_0x5c473c.x += _0x55cbc5.x - 0.5 + _0x54e69e);
            _0x55cbc5.x > 0.5 + _0x54e69e && (_0x5c473c.x += _0x55cbc5.x - 0.5 - _0x54e69e);
            _0x55cbc5.y < 0.5 - _0x42e3ba && (_0x5c473c.y += _0x55cbc5.y - 0.5 + _0x42e3ba);
            _0x55cbc5.y > 0.5 + _0x42e3ba && (_0x5c473c.y += _0x55cbc5.y - 0.5 - _0x42e3ba);
            _0x5c473c.multiplyScalar(2).subtract(_0x28aa5c.ONE);
            _0x5c473c.transformMat4(_0x14a710.matViewProjInv);
          }
          return _0x5c473c;
        };
        return _0x25e385;
      }(_0x1e6e3b));
      _0x15f835._RF.pop();
    }
  };
});
System.register("chunks:///_virtual/constants.ts", ["cc"], function (_0x292c20) {
  var _0x410711;
  return {
    setters: [function (_0x112333) {
      _0x410711 = _0x112333.cclegacy;
    }],
    execute: function () {
      _0x410711._RF.push({}, "7adb1yGt+pKIov+PxxXqvzW", "constants", undefined);
      var _0x532918 = _0x292c20("SpIdMap", {
        sp_tag_normal_2x: "sp_tag_normal_2x",
        sp_tag_normal_5x: "sp_tag_normal_5x",
        sp_tag_normal_10x: "sp_tag_normal_10x",
        sp_tag_normal_66x: "sp_tag_normal_66x",
        sp_tag_normal_100x: "sp_tag_normal_100x",
        sp_tag_normal_2025x: "sp_tag_normal_2025x",
        sp_tag_gold_1x: "sp_tag_gold_1x",
        sp_tag_gold_2x: "sp_tag_gold_2x",
        sp_tag_gold_5x: "sp_tag_gold_5x",
        sp_tag_gold_25x: "sp_tag_gold_25x",
        sp_tag_double_1: "sp_tag_double_1",
        sp_tag_double_2: "sp_tag_double_2",
        sp_tag_double_3: "sp_tag_double_3"
      });
      _0x292c20("SpIdIndex", [_0x532918.sp_tag_double_2, _0x532918.sp_tag_normal_2x, _0x532918.sp_tag_gold_1x, _0x532918.sp_tag_normal_5x, _0x532918.sp_tag_gold_2x, _0x532918.sp_tag_normal_10x, _0x532918.sp_tag_gold_5x, _0x532918.sp_tag_normal_66x, _0x532918.sp_tag_gold_25x, _0x532918.sp_tag_normal_100x, _0x532918.sp_tag_double_1, _0x532918.sp_tag_normal_2025x, _0x532918.sp_tag_double_3]);
      _0x292c20("userImg", "https://yun.duiba.com.cn/polaris/avatar.0482cced731afe9200524879497e9d505cb012f1.png");
      _0x292c20("userName", "口味王用户");
      _0x410711._RF.pop();
    }
  };
});
System.register("chunks:///_virtual/CoroutineRunner.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], function (_0x531b8b) {
  var _0x2efa14;
  var _0x1e39d2;
  var _0x2dd2b8;
  return {
    setters: [function (_0x2c915a) {
      {
        _0x2efa14 = _0x2c915a.regeneratorRuntime;
        _0x1e39d2 = _0x2c915a.createForOfIteratorHelperLoose;
      }
    }, function (_0x33e74d) {
      _0x2dd2b8 = _0x33e74d.cclegacy;
    }],
    execute: function () {
      var _0x357afb = _0x2efa14().mark(_0x1ae795);
      function _0x1ae795(_0x525a99) {
        var _0x232826;
        var _0x3afe17;
        var _0x14862d;
        return _0x2efa14().wrap(function (_0x415466) {
          for (;;) {
            switch (_0x415466.prev = _0x415466.next) {
              case 0:
                _0x232826 = Date.now();
              case 1:
                if (!(_0x525a99 > 0)) {
                  _0x415466.next = 10;
                  break;
                }
                _0x3afe17 = Date.now();
                _0x14862d = _0x3afe17 - _0x232826;
                _0x232826 = _0x3afe17;
                _0x525a99 -= _0x14862d;
                return void (_0x415466.next = 8);
              case 8:
                _0x415466.next = 1;
                break;
              case 10:
              case "end":
                return _0x415466.stop();
            }
          }
        }, _0x357afb);
      }
      _0x2dd2b8._RF.push({}, "142cc/Z5EJPKZ50iOI7tfhv", "CoroutineRunner", undefined);
      _0x531b8b("CoroutineRunner", function () {
        function _0x1b14a1() {
          this.generatorStacks = undefined;
          this.removeQueue = undefined;
          this.addQueue = undefined;
          this.generatorStacks = [];
          this.addQueue = [];
          this.removeQueue = new Set();
        }
        var _0x4fb7c1 = _0x1b14a1.prototype;
        _0x4fb7c1.isBusy = function () {
          return this.addQueue.length + this.generatorStacks.length > 0;
        };
        _0x4fb7c1.add = function (_0x179081, _0x2c3c0e) {
          undefined === _0x2c3c0e && (_0x2c3c0e = 0);
          var _0x4b3df7 = [_0x179081];
          _0x2c3c0e && _0x4b3df7.push(_0x1ae795(_0x2c3c0e));
          this.addQueue.push(_0x4b3df7);
        };
        _0x4fb7c1.remove = function (_0x2b1006) {
          this.removeQueue.add(_0x2b1006);
        };
        _0x4fb7c1.update = function () {
          this._addQueued();
          this._removeQueued();
          for (var _0x4589c1, _0x26040a = _0x1e39d2(this.generatorStacks); !(_0x4589c1 = _0x26040a()).done;) {
            var _0x2b4808 = _0x4589c1.value;
            var _0x16262f = _0x2b4808[0];
            if (!this.removeQueue.has(_0x16262f)) {
              for (; _0x2b4808.length;) {
                var _0x21b66a = _0x2b4808[_0x2b4808.length - 1];
                var _0x2c2103 = _0x21b66a.next();
                var _0x3d404d = _0x2c2103.value;
                if (_0x2c2103.done) {
                  if (1 === _0x2b4808.length) {
                    this.removeQueue.add(_0x21b66a);
                    break;
                  }
                  _0x2b4808.pop();
                } else {
                  if (!_0x3d404d) {
                    break;
                  }
                  _0x2b4808.push(_0x3d404d);
                }
              }
            }
          }
          this._removeQueued();
        };
        _0x4fb7c1._addQueued = function () {
          {
            var _0x3f2f1f;
            this.addQueue.length && ((_0x3f2f1f = this.generatorStacks).splice.apply(_0x3f2f1f, [this.generatorStacks.length, 0].concat(this.addQueue)), this.addQueue = []);
          }
        };
        _0x4fb7c1._removeQueued = function () {
          var _0x5d0b73 = this;
          this.removeQueue.size && (this.generatorStacks = this.generatorStacks.filter(function (_0x18831f) {
            return !_0x5d0b73.removeQueue.has(_0x18831f[0]);
          }), this.removeQueue.clear());
        };
        return _0x1b14a1;
      }());
      _0x2dd2b8._RF.pop();
    }
  };
});
System.register("chunks:///_virtual/CravePanel.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Panel.ts", "./store.ts", "./decorators.ts", "./Utils.ts"], function (_0x3e314b) {
  var _0x2b47b3;
  var _0x188564;
  var _0x454e04;
  var _0x4bca0b;
  var _0x58834e;
  var _0x59d7f7;
  var _0x4da9e7;
  var _0xf6e91c;
  var _0x494882;
  var _0x5a4001;
  var _0xf2dacc;
  var _0x443e20;
  var _0x34d6de;
  var _0x41935b;
  var _0x12edbc;
  var _0x133dde;
  var _0x437e1d;
  return {
    setters: [function (_0xce53f5) {
      _0x2b47b3 = _0xce53f5.applyDecoratedDescriptor;
      _0x188564 = _0xce53f5.inheritsLoose;
      _0x454e04 = _0xce53f5.initializerDefineProperty;
      _0x4bca0b = _0xce53f5.assertThisInitialized;
      _0x58834e = _0xce53f5.asyncToGenerator;
      _0x59d7f7 = _0xce53f5.regeneratorRuntime;
    }, function (_0x40fe76) {
      _0x4da9e7 = _0x40fe76.cclegacy;
      _0xf6e91c = _0x40fe76._decorator;
      _0x494882 = _0x40fe76.Label;
      _0x5a4001 = _0x40fe76.Sprite;
      _0xf2dacc = _0x40fe76.Button;
      _0x443e20 = _0x40fe76.assetManager;
      _0x34d6de = _0x40fe76.SpriteFrame;
    }, function (_0x53bada) {
      _0x41935b = _0x53bada.default;
    }, function (_0x46dcd9) {
      _0x12edbc = _0x46dcd9.default;
    }, function (_0x5da84e) {
      _0x133dde = _0x5da84e.observer;
    }, function (_0x5ac327) {
      _0x437e1d = _0x5ac327._asyncThrottle;
    }],
    execute: function () {
      var _0x4a1b78;
      var _0x457c8e;
      var _0x3fc9fc;
      var _0x2484f9;
      var _0x15f74b;
      var _0x38cd3d;
      var _0x47182d;
      var _0x5f4dde;
      var _0x381195;
      var _0x52579e;
      var _0x2d240b;
      var _0x56c15f;
      var _0x4a2227;
      var _0x1086ad;
      var _0x30455b;
      var _0x3488c7;
      var _0x3c4f8b;
      var _0x145715;
      _0x4da9e7._RF.push({}, "e0977LDrBFDc49BPwCL3BnQ", "CravePanel", undefined);
      var _0x3848f5 = _0xf6e91c.ccclass;
      var _0x18f16b = _0xf6e91c.property;
      _0x3e314b("default", (_0x4a1b78 = _0x3848f5("CravePanel"), _0x457c8e = _0x18f16b(_0x494882), _0x3fc9fc = _0x18f16b(_0x494882), _0x2484f9 = _0x18f16b(_0x5a4001), _0x15f74b = _0x18f16b(_0x494882), _0x38cd3d = _0x18f16b(_0x494882), _0x47182d = _0x18f16b(_0xf2dacc), _0x5f4dde = _0x18f16b(_0xf2dacc), _0x133dde(_0x381195 = _0x4a1b78(((_0x145715 = function (_0x51c970) {
        function _0x34c6a7() {
          for (var _0x2a222a, _0x573028 = arguments.length, _0x46d931 = new Array(_0x573028), _0x40c3cd = 0; _0x40c3cd < _0x573028; _0x40c3cd++) {
            _0x46d931[_0x40c3cd] = arguments[_0x40c3cd];
          }
          _0x2a222a = _0x51c970.call.apply(_0x51c970, [this].concat(_0x46d931)) || this;
          _0x454e04(_0x2a222a, "fuQiNum", _0x2d240b, _0x4bca0b(_0x2a222a));
          _0x454e04(_0x2a222a, "fuQiText", _0x56c15f, _0x4bca0b(_0x2a222a));
          _0x454e04(_0x2a222a, "levelIcon", _0x4a2227, _0x4bca0b(_0x2a222a));
          _0x454e04(_0x2a222a, "levelText", _0x1086ad, _0x4bca0b(_0x2a222a));
          _0x454e04(_0x2a222a, "craveNum", _0x30455b, _0x4bca0b(_0x2a222a));
          _0x454e04(_0x2a222a, "closeBtn", _0x3488c7, _0x4bca0b(_0x2a222a));
          _0x454e04(_0x2a222a, "mainBtn", _0x3c4f8b, _0x4bca0b(_0x2a222a));
          _0x2a222a.closePanel = _0x437e1d(function () {
            {
              _0x2a222a.hidePanel();
            }
          });
          return _0x2a222a;
        }
        _0x188564(_0x34c6a7, _0x51c970);
        var _0x3b5eb6 = _0x34c6a7.prototype;
        _0x3b5eb6.onLoad = function () {
          this.closeBtn.node.on(_0xf2dacc.EventType.CLICK, this.closePanel, this);
          this.mainBtn.node.on(_0xf2dacc.EventType.CLICK, this.closePanel, this);
        };
        _0x3b5eb6.start = function () {
          var _0x5c16c6 = _0x58834e(_0x59d7f7().mark(function _0x5934ce() {
            {
              var _0x37065c;
              var _0x32cc2b;
              var _0x31551e = this;
              return _0x59d7f7().wrap(function (_0x589580) {
                for (;;) {
                  switch (_0x589580.prev = _0x589580.next) {
                    case 0:
                      _0x37065c = _0x12edbc.homeInfo.dividePop;
                      _0x32cc2b = 1;
                      (null == _0x37065c ? undefined : _0x37065c.rankMultiply) <= 4 ? _0x32cc2b = null == _0x37065c ? undefined : _0x37065c.rankMultiply : 8 == (null == _0x37065c ? undefined : _0x37065c.rankMultiply) ? _0x32cc2b = 5 : 16 == (null == _0x37065c ? undefined : _0x37065c.rankMultiply) || 16 == (null == _0x37065c ? undefined : _0x37065c.rankMultiply) ? _0x32cc2b = 6 : 32 == (null == _0x37065c ? undefined : _0x37065c.rankMultiply) ? _0x32cc2b = 7 : 64 == (null == _0x37065c ? undefined : _0x37065c.rankMultiply) ? _0x32cc2b = 8 : 128 == (null == _0x37065c ? undefined : _0x37065c.rankMultiply) && (_0x32cc2b = 9);
                      this.fuQiNum.string = "x" + (null == _0x37065c ? undefined : _0x37065c.obtainScoreNum);
                      this.fuQiText.string = (null == _0x37065c ? undefined : _0x37065c.obtainScoreNum) + "枚福气";
                      _0x443e20.getBundle("common").load("rankIcon/icon_" + _0x32cc2b + "/spriteFrame", _0x34d6de, function (_0x139dca, _0x1b2938) {
                        _0x31551e.levelIcon.spriteFrame = _0x1b2938;
                      });
                      this.levelText.string = "倍率" + (null == _0x37065c ? undefined : _0x37065c.rankMultiply);
                      this.craveNum.string = (null == _0x37065c ? undefined : _0x37065c.creditsNum) + "积分";
                    case 8:
                    case "end":
                      return _0x589580.stop();
                  }
                }
              }, _0x5934ce, this);
            }
          }));
          return function () {
            return _0x5c16c6.apply(this, arguments);
          };
        }();
        return _0x34c6a7;
      }(_0x41935b)).bundle = "CravePanel", _0x145715.skin = "CravePanel", _0x2d240b = _0x2b47b3((_0x52579e = _0x145715).prototype, "fuQiNum", [_0x457c8e], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x56c15f = _0x2b47b3(_0x52579e.prototype, "fuQiText", [_0x3fc9fc], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x4a2227 = _0x2b47b3(_0x52579e.prototype, "levelIcon", [_0x2484f9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x1086ad = _0x2b47b3(_0x52579e.prototype, "levelText", [_0x15f74b], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x30455b = _0x2b47b3(_0x52579e.prototype, "craveNum", [_0x38cd3d], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x3488c7 = _0x2b47b3(_0x52579e.prototype, "closeBtn", [_0x47182d], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x3c4f8b = _0x2b47b3(_0x52579e.prototype, "mainBtn", [_0x5f4dde], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x381195 = _0x52579e)) || _0x381195) || _0x381195));
      _0x4da9e7._RF.pop();
    }
  };
});
System.register("chunks:///_virtual/Crypto.ts", ["cc", "./core.mjs_cjs=&original=.js", "./aes.mjs_cjs=&original=.js", "./pad-zeropadding.mjs_cjs=&original=.js", "./core.js"], function (_0x30939e) {
  var _0x259c1e;
  var _0x4671d2;
  return {
    setters: [function (_0x5ae9e6) {
      _0x259c1e = _0x5ae9e6.cclegacy;
    }, null, null, null, function (_0x864f33) {
      _0x4671d2 = _0x864f33.default;
    }],
    execute: function () {
      _0x259c1e._RF.push({}, "4fb94L5AjtDgrOb1aczAwFd", "Crypto", undefined);
      var _0x3ae0ff = _0x4671d2.AES;
      var _0x59fd20 = _0x4671d2.enc;
      var _0x594994 = _0x4671d2.mode;
      var _0x3111cf = _0x4671d2.pad;
      var _0xc318b1 = function (_0x148324) {
        return {
          iv: _0x59fd20.Utf8.parse(_0x148324),
          mode: _0x594994.CBC,
          padding: _0x3111cf.ZeroPadding
        };
      };
      _0x30939e("AESEncrypt", function (_0x1314b7, _0x230284, _0xa52e93) {
        var _0x1a1d10 = _0xc318b1(_0xa52e93);
        return _0x3ae0ff.encrypt(_0x1314b7, _0x59fd20.Utf8.parse(_0x230284), _0x1a1d10).toString();
      });
      _0x30939e("AESDecrypt", function (_0x4fc3c8, _0xf3ad8d, _0x8ab9d2) {
        var _0x2f869a = _0xc318b1(_0x8ab9d2);
        return _0x3ae0ff.decrypt(_0x4fc3c8, _0x59fd20.Utf8.parse(_0xf3ad8d), _0x2f869a).toString(_0x59fd20.Utf8).trim().replace(//g, "").replace(//g, "").replace(/\v/g, "").replace(/\x00/g, "");
      });
      _0x259c1e._RF.pop();
    }
  };
});
System.register("chunks:///_virtual/custom-grid-flow-layout.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./yx-collection-view.ts"], function (_0x5c214d) {
  var _0x4ecf68;
  var _0x3667e1;
  var _0x32fb5f;
  var _0x1a7da7;
  var _0x581371;
  var _0x163f77;
  var _0xaf1071;
  var _0x42bd09;
  return {
    setters: [function (_0x2fea2d) {
      _0x4ecf68 = _0x2fea2d.inheritsLoose;
    }, function (_0x401513) {
      _0x3667e1 = _0x401513.cclegacy;
      _0x32fb5f = _0x401513._decorator;
      _0x1a7da7 = _0x401513.UITransform;
      _0x581371 = _0x401513.math;
    }, function (_0x2a5d8f) {
      _0x163f77 = _0x2a5d8f.YXIndexPath;
      _0xaf1071 = _0x2a5d8f.YXLayoutAttributes;
      _0x42bd09 = _0x2a5d8f.YXLayout;
    }],
    execute: function () {
      _0x3667e1._RF.push({}, "f2421LIywlGsL9dgBHrHn/N", "custom-grid-flow-layout", undefined);
      _0x32fb5f.ccclass;
      _0x32fb5f.property;
      _0x5c214d("CustomGridFlowLayout", function (_0xcd4e7c) {
        function _0x31c46f() {
          for (var _0x5658c8, _0x360e50 = arguments.length, _0xb74c3e = new Array(_0x360e50), _0x1f32b2 = 0; _0x1f32b2 < _0x360e50; _0x1f32b2++) {
            _0xb74c3e[_0x1f32b2] = arguments[_0x1f32b2];
          }
          (_0x5658c8 = _0xcd4e7c.call.apply(_0xcd4e7c, [this].concat(_0xb74c3e)) || this).itemSize = new _0x581371.Size(100, 100);
          _0x5658c8.verticalSpacing = 0;
          _0x5658c8.horizontalSpacing = 0;
          _0x5658c8.alignment = 1;
          return _0x5658c8;
        }
        _0x4ecf68(_0x31c46f, _0xcd4e7c);
        var _0x1f7744 = _0x31c46f.prototype;
        _0x1f7744.prepare = function (_0x73b484) {
          this._vertical(_0x73b484);
        };
        _0x1f7744._vertical = function (_0x4581c5) {
          {
            _0x4581c5.scrollView.horizontal = false;
            _0x4581c5.scrollView.vertical = true;
            for (var _0x13a1e4 = [], _0xf43efb = _0x4581c5.node.getComponent(_0x1a7da7).contentSize.clone(), _0x1dfc01 = _0x4581c5.node.getComponent(_0x1a7da7).width, _0x122701 = 1; _0x122701 * this.itemSize.width + (_0x122701 - 1) * this.horizontalSpacing <= _0x1dfc01;) {
              _0x122701++;
            }
            _0x122701 = Math.max(1, _0x122701 - 1);
            var _0xfb4f9d = 0;
            1 == this.alignment && (_0xfb4f9d = 0.5 * (_0x1dfc01 - (_0x122701 * this.itemSize.width + (_0x122701 - 1) * this.horizontalSpacing)));
            2 == this.alignment && (_0xfb4f9d = _0x1dfc01 - (_0x122701 * this.itemSize.width + (_0x122701 - 1) * this.horizontalSpacing));
            for (var _0xf8caf3 = [], _0x581256 = _0x4581c5.numberOfItems instanceof Function ? _0x4581c5.numberOfItems(0, _0x4581c5) : _0x4581c5.numberOfItems, _0x82f2bd = 0; _0x82f2bd < _0x581256; _0x82f2bd++) {
              var _0x199b69 = Math.floor(_0x82f2bd / _0x122701);
              var _0x272a76 = _0x82f2bd % _0x122701;
              var _0x478a9d = _0xfb4f9d + (this.itemSize.width + this.horizontalSpacing) * _0x272a76;
              var _0x266755 = 0 + (this.itemSize.height + this.verticalSpacing) * _0x199b69;
              var _0x71643d = new _0xaf1071();
              _0x71643d.indexPath = new _0x163f77(0, _0x82f2bd);
              _0x71643d.frame = new _0x581371.Rect();
              _0x71643d.frame.x = _0x478a9d;
              _0x71643d.frame.y = _0x266755;
              _0x71643d.frame.width = this.itemSize.width;
              _0x71643d.frame.height = this.itemSize.height;
              _0x13a1e4.push(_0x71643d);
              var _0x31f26c = _0xf8caf3[_0x199b69];
              null == _0x31f26c && (_0x31f26c = [], _0xf8caf3[_0x199b69] = _0x31f26c);
              _0x31f26c.push(_0x71643d);
              _0xf43efb.height = Math.max(_0xf43efb.height, _0x71643d.frame.yMax);
            }
            if (_0xf8caf3.length > 0) {
              var _0x5e9ef1 = _0xf8caf3[_0xf8caf3.length - 1];
              if (_0x5e9ef1.length < _0x122701) {
                var _0x61b237 = 0;
                if (1 == this.alignment) {
                  _0x61b237 = 0.5 * (_0x1dfc01 - (_0x5e9ef1.length * this.itemSize.width + (_0x5e9ef1.length - 1) * this.horizontalSpacing));
                }
                if (2 == this.alignment) {
                  _0x61b237 = _0x1dfc01 - (_0x5e9ef1.length * this.itemSize.width + (_0x5e9ef1.length - 1) * this.horizontalSpacing);
                }
                for (var _0xc37327 = 0; _0xc37327 < _0x5e9ef1.length; _0xc37327++) {
                  _0x5e9ef1[_0xc37327].frame.x = _0x61b237 + (this.itemSize.width + this.horizontalSpacing) * _0xc37327;
                }
              }
            }
            this.attributes = _0x13a1e4;
            this.contentSize = _0xf43efb;
            _0xf8caf3 = [];
          }
        };
        _0x1f7744.initOffset = function (_0x3ed378) {
          _0x3ed378.scrollView.scrollToTop();
        };
        return _0x31c46f;
      }(_0x42bd09));
      _0x3667e1._RF.pop();
    }
  };
});
System.register("chunks:///_virtual/decorators.ts", ["cc", "./index.mjs_cjs=&original=.js", "./index.js"], function (_0x5b1865) {
  var _0x25da77;
  var _0x587d01;
  return {
    setters: [function (_0x17fe22) {
      _0x25da77 = _0x17fe22.cclegacy;
    }, null, function (_0x2a25b5) {
      _0x587d01 = _0x2a25b5.default;
    }],
    execute: function () {
      _0x5b1865({
        observer: function (_0x523e0e) {
          if (CC_EDITOR) {
            return;
          }
          var _0x2a5a2c = _0x523e0e.prototype;
          if (!_0x2a5a2c[_0x2e64e3] && !_0x2a5a2c[_0x31d537]) {
            return;
          }
          var _0x28f6f2 = _0x2a5a2c.onLoad;
          var _0x584538 = _0x2a5a2c.onDestroy;
          _0x28f6f2 ? _0x28f6f2 !== _0x28432e && (_0x2a5a2c.onLoad = function () {
            false !== _0x28f6f2.call(this) && _0x28432e.call(this);
          }) : _0x2a5a2c.onLoad = _0x28432e;
          _0x584538 ? _0x584538 !== _0x1e717f && (_0x2a5a2c.onDestroy = function () {
            _0x1e717f.call(this);
            _0x584538.call(this);
          }) : _0x2a5a2c.onDestroy = _0x1e717f;
        },
        reactor: function (_0x39ea26, _0x33ae7a) {
          if (null == _0x33ae7a) {
            _0x3aba6e = _0x39ea26;
            return function (_0x4b7396, _0x38a7e2, _0x1089f7) {
              _0x1e9522(_0x4b7396, _0x38a7e2, _0x31d537);
              var _0x260026 = _0x1089f7.value;
              _0x1089f7.value = function () {
                return _0x90ba45(_0x3aba6e, _0x260026.bind(this), {
                  fireImmediately: true
                });
              };
            };
          }
          var _0x3aba6e;
          return _0x1e9522(_0x39ea26, _0x33ae7a, _0x31d537);
        },
        render: function (_0x18665c, _0x3de461, _0x101947) {
          if (CC_EDITOR) {
            return;
          }
          if ("onEnable" === _0x3de461 || "onDisable" === _0x3de461) {
            throw new Error("should not bind @render for " + _0x3de461);
          }
          _0x1e9522(_0x18665c, _0x3de461, _0x2e64e3);
        }
      });
      _0x25da77._RF.push({}, "dd803lYquZI16B/H/rMJZpA", "decorators", undefined);
      var _0x5a7cb9 = _0x587d01.autorun;
      var _0x90ba45 = _0x587d01.reaction;
      (0, _0x587d01.configure)({
        enforceActions: "observed"
      });
      var _0x3b96dc = Object.prototype.hasOwnProperty;
      var _0x2e64e3 = Symbol("autoRuns");
      var _0x31d537 = Symbol("reactions");
      var _0x1cf3f = Symbol("disposers");
      function _0x1e717f() {
        var _0x49c12a = this[_0x1cf3f];
        _0x49c12a && _0x49c12a.splice(0).forEach(function (_0x1455c0) {
          {
            return _0x1455c0();
          }
        });
      }
      function _0x28432e() {
        var _0x3042e4 = function (_0x137647) {
          var _0x37e5fb = _0x137647[_0x1cf3f];
          if (_0x37e5fb) {
            return _0x37e5fb;
          }
          var _0x352af7 = [];
          _0x389bdb(_0x137647, _0x1cf3f, _0x352af7);
          return _0x352af7;
        }(this);
        if (!_0x3042e4.length) {
          var _0x1973f7 = this[_0x2e64e3];
          var _0x216d24 = this[_0x31d537];
          var _0x36390a = this;
          if (_0x1973f7) {
            var _0x4251a3 = this.constructor.name;
            _0x1973f7.forEach(function (_0x39b71a) {
              var _0x2ef9d7 = _0x36390a[_0x39b71a].bind(_0x36390a);
              var _0x236a7b = _0x5a7cb9(_0x2ef9d7, {
                name: _0x4251a3 + "#" + _0x39b71a
              });
              _0x3042e4.push(_0x236a7b);
            });
          }
          _0x216d24 && _0x216d24.forEach(function (_0x48d535) {
            var _0x45f6bb = _0x36390a[_0x48d535]();
            _0x3042e4.push(_0x45f6bb);
          });
        }
      }
      function _0x1e9522(_0x293de9, _0x5896f0, _0x5d5d97) {
        if (!_0x3b96dc.call(_0x293de9, _0x5d5d97)) {
          var _0xfd38c6 = _0x293de9[_0x5d5d97] ? _0x293de9[_0x5d5d97].slice(0) : [];
          _0x389bdb(_0x293de9, _0x5d5d97, _0xfd38c6);
        }
        -1 === _0x293de9[_0x5d5d97].indexOf(_0x5896f0) && _0x293de9[_0x5d5d97].push(_0x5896f0);
      }
      function _0x389bdb(_0x32e124, _0x1e972a, _0xda0892) {
        Object.defineProperty(_0x32e124, _0x1e972a, {
          enumerable: false,
          writable: false,
          configurable: false,
          value: _0xda0892
        });
      }
      _0x25da77._RF.pop();
    }
  };
});
System.register("chunks:///_virtual/EasyController.ts", ["cc"], function (_0x2206cf) {
  var _0x456abc;
  var _0x2c6975;
  return {
    setters: [function (_0x1440bf) {
      _0x456abc = _0x1440bf.cclegacy;
      _0x2c6975 = _0x1440bf.director;
    }],
    execute: function () {
      _0x456abc._RF.push({}, "cc933ijiadBG47GZ61xXA52", "EasyController", undefined);
      var _0x5a8eed = _0x2206cf("EasyControllerEvent", function () {});
      _0x5a8eed.CAMERA_ROTATE = "EasyControllerEvent.CAMERA_ROTATE";
      _0x5a8eed.CAMERA_ZOOM = "EasyControllerEvent.CAMERA_ZOOM";
      _0x5a8eed.MOVEMENT = "EasyControllerEvent.MOVEMENT";
      _0x5a8eed.MOVEMENT_STOP = "EasyControllerEvent.MOVEMENT_STOP";
      _0x5a8eed.BUTTON = "EasyControllerEvent.BUTTON";
      _0x5a8eed.SCREEN_TOUCH_START = "EasyControllerEvent.SCREEN_TOUCH_START";
      _0x5a8eed.SCREEN_TOUCH_END = "EasyControllerEvent.SCREEN_TOUCH_END";
      _0x2206cf("EasyController", function () {
        {
          function _0x2c8872() {}
          _0x2c8872.on = function (_0x23702a, _0x342f82, _0x2e78bc) {
            _0x2c6975.getScene().on(_0x23702a, _0x342f82, _0x2e78bc);
          };
          _0x2c8872.off = function (_0x9b457d, _0x478d2f, _0x14d31e) {
            var _0x24384a;
            null == (_0x24384a = _0x2c6975.getScene()) || _0x24384a.off(_0x9b457d, _0x478d2f, _0x14d31e);
          };
          return _0x2c8872;
        }
      }());
      _0x456abc._RF.pop();
    }
  };
});
System.register("chunks:///_virtual/ecaptcha.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Utils.ts", "./jsonp.ts"], function (_0x29c8f5) {
  var _0x5c8f0f;
  var _0x36c545;
  var _0x1917b3;
  var _0x228ad5;
  var _0x359770;
  return {
    setters: [function (_0x140e10) {
      _0x5c8f0f = _0x140e10.asyncToGenerator;
      _0x36c545 = _0x140e10.regeneratorRuntime;
    }, function (_0xace58e) {
      _0x1917b3 = _0xace58e.cclegacy;
    }, function (_0x5917e3) {
      {
        _0x228ad5 = _0x5917e3.parseHtml;
      }
    }, function (_0x16f694) {
      _0x359770 = _0x16f694.jsonp;
    }],
    execute: function () {
      _0x29c8f5("startNecCaptcha", function (_0x1e32d3, _0xa7ebbb, _0x32f82e) {
        return _0x57bde9.apply(this, arguments);
      });
      _0x1917b3._RF.push({}, "12f68qSPBFC6LqmOsOf2w13", "ecaptcha", undefined);
      var _0x133bbd;
      var _0x598095;
      var _0x585c0c = false;
      var _0x45aa64 = false;
      function _0x57bde9() {
        return (_0x57bde9 = _0x5c8f0f(_0x36c545().mark(function _0x3f1347(_0x52fd6f, _0x39377c, _0x27a33f) {
          {
            var _0x3f558b;
            var _0xc37e63;
            var _0xb897a2;
            return _0x36c545().wrap(function (_0x1990dc) {
              for (;;) {
                switch (_0x1990dc.prev = _0x1990dc.next) {
                  case 0:
                    undefined === _0x39377c && (_0x39377c = 1);
                    undefined === _0x27a33f && (_0x27a33f = "embed");
                    _0x3f558b = _0x39377c <= 0 ? Number.MAX_VALUE : _0x39377c;
                    _0xb897a2 = 0;
                  case 4:
                    if (!(_0xb897a2 < _0x3f558b)) {
                      _0x1990dc.next = 13;
                      break;
                    }
                    _0x1990dc.next = 7;
                    return _0x519068(_0x52fd6f, _0x27a33f).catch(console.info);
                  case 7:
                    if (!(_0xc37e63 = _0x1990dc.sent)) {
                      _0x1990dc.next = 10;
                      break;
                    }
                    return _0x1990dc.abrupt("return", _0xc37e63);
                  case 10:
                    _0xb897a2++;
                    _0x1990dc.next = 4;
                    break;
                  case 13:
                    return _0x1990dc.abrupt("return", Promise.reject("out of times"));
                  case 14:
                  case "end":
                    return _0x1990dc.stop();
                }
              }
            }, _0x3f1347);
          }
        }))).apply(this, arguments);
      }
      function _0x519068(_0x244d00, _0x1915d4) {
        return _0x57d28e.apply(this, arguments);
      }
      function _0x57d28e() {
        return (_0x57d28e = _0x5c8f0f(_0x36c545().mark(function _0x344e2a(_0x54a1ba, _0x67976b) {
          var _0x2c43a1;
          var _0x3c69e5;
          return _0x36c545().wrap(function (_0x31c308) {
            for (;;) {
              switch (_0x31c308.prev = _0x31c308.next) {
                case 0:
                  _0x3c69e5 = function () {
                    _0x133bbd.removeEventListener("click", _0x2c43a1);
                    document.body.removeChild(_0x133bbd);
                  };
                  _0x2c43a1 = function (_0x4e8163) {
                    _0x45aa64 ? _0x4e8163.target == _0x133bbd && _0x598095 && _0x598095.refresh() : (_0x3c69e5(), _0x519068(_0x54a1ba, _0x67976b));
                  };
                  undefined === _0x67976b && (_0x67976b = "embed");
                  _0x31c308.next = 5;
                  return _0x13fa31();
                case 5:
                  return _0x31c308.abrupt("return", new Promise(function (_0x39ea1f, _0x25310f) {
                    document.body.appendChild(_0x133bbd);
                    var _0x3cf56d = _0x133bbd.children[0];
                    _0x3cf56d.innerHTML = null;
                    _0x3cf56d.style.visibility = "hidden";
                    var _0x59fb05 = {
                      element: _0x3cf56d,
                      captchaId: _0x54a1ba,
                      width: "100%",
                      mode: _0x67976b,
                      onVerify: function (_0x2606b5, _0x5f0e42) {
                        _0x3c69e5();
                        _0x2606b5 ? _0x25310f(_0x2606b5) : _0x39ea1f(_0x5f0e42.validate);
                      }
                    };
                    window.initNECaptcha(_0x59fb05, function (_0x1610ee) {
                      _0x598095 = _0x1610ee;
                      _0x45aa64 = true;
                      _0x3cf56d.style.visibility = "visible";
                      _0x133bbd.addEventListener("click", _0x2c43a1);
                    }, function (_0x563b35) {
                      _0x45aa64 = false;
                      _0x133bbd.addEventListener("click", _0x2c43a1);
                    });
                    _0x133bbd.style.visibility = "visible";
                  }));
                case 6:
                case "end":
                  return _0x31c308.stop();
              }
            }
          }, _0x344e2a);
        }))).apply(this, arguments);
      }
      function _0x13fa31() {
        return _0x6dfa0.apply(this, arguments);
      }
      function _0x6dfa0() {
        return (_0x6dfa0 = _0x5c8f0f(_0x36c545().mark(function _0x3b6ec4() {
          return _0x36c545().wrap(function (_0x72aaa7) {
            for (;;) {
              switch (_0x72aaa7.prev = _0x72aaa7.next) {
                case 0:
                  if (_0x585c0c) {
                    _0x72aaa7.next = 12;
                    break;
                  }
                  _0x72aaa7.next = 3;
                  return _0x359770("//cstaticdun.126.net/load.min.js", null);
                case 3:
                  _0x133bbd = _0x228ad5("<div class=\"sui-captcha\"><div class=\"neCaptcha-dialog\"></div></div>");
                case 4:
                  _0x72aaa7.next = 7;
                  return new Promise(function (_0x598bf2) {
                    {
                      return setTimeout(_0x598bf2, 100);
                    }
                  });
                case 7:
                  if (!window.initNECaptcha) {
                    _0x72aaa7.next = 9;
                    break;
                  }
                  return _0x72aaa7.abrupt("break", 11);
                case 9:
                  _0x72aaa7.next = 4;
                  break;
                case 11:
                  _0x585c0c = true;
                case 12:
                case "end":
                  return _0x72aaa7.stop();
              }
            }
          }, _0x3b6ec4);
        }))).apply(this, arguments);
      }
      _0x1917b3._RF.pop();
    }
  };
});
System.register("chunks:///_virtual/Events.ts", ["cc"], function (_0x43e297) {
  var _0x4bf16;
  return {
    setters: [function (_0x5cbbc2) {
      _0x4bf16 = _0x5cbbc2.cclegacy;
    }],
    execute: function () {
      _0x4bf16._RF.push({}, "47855R5MFhELIl5drKNn+/P", "Events", undefined);
      _0x43e297("CinestationEvent", {
        EDITOR_CHANGED: "cinestation-editor-changed",
        COMPOSER_CHANGED: "cinestation-composer-changed",
        LENS_CHANGED: "cinestation-lens-changed"
      });
      _0x4bf16._RF.pop();
    }
  };
});
System.register("chunks:///_virtual/ExchangePowerPanel.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Panel.ts", "./store.ts", "./decorators.ts", "./UIFast.ts", "./ExchangePowerSucPanel.ts", "./WebNet.ts"], function (_0x359442) {
  var _0x34d167;
  var _0x2ec155;
  var _0x533c57;
  var _0x565c6b;
  var _0x3d85d0;
  var _0x2966df;
  var _0x3a37b2;
  var _0x3dfea0;
  var _0x41b1df;
  var _0x158cf6;
  var _0x599df2;
  var _0x54b1fc;
  var _0x465d2f;
  var _0x552fbb;
  var _0x5e982a;
  var _0x3e59f8;
  var _0x252e55;
  var _0x2e2858;
  var _0x546671;
  var _0x3d3761;
  var _0x40f1c6;
  var _0x1bd35f;
  return {
    setters: [function (_0x54fa6c) {
      _0x34d167 = _0x54fa6c.applyDecoratedDescriptor;
      _0x2ec155 = _0x54fa6c.inheritsLoose;
      _0x533c57 = _0x54fa6c.initializerDefineProperty;
      _0x565c6b = _0x54fa6c.assertThisInitialized;
      _0x3d85d0 = _0x54fa6c.asyncToGenerator;
      _0x2966df = _0x54fa6c.regeneratorRuntime;
    }, function (_0x35a247) {
      _0x3a37b2 = _0x35a247.cclegacy;
      _0x3dfea0 = _0x35a247._decorator;
      _0x41b1df = _0x35a247.Node;
      _0x158cf6 = _0x35a247.Label;
      _0x599df2 = _0x35a247.Button;
    }, function (_0x3ab50e) {
      _0x54b1fc = _0x3ab50e.default;
    }, function (_0x3a356b) {
      _0x465d2f = _0x3a356b.default;
    }, function (_0x274885) {
      _0x552fbb = _0x274885.observer;
    }, function (_0x52876f) {
      _0x5e982a = _0x52876f.showPanel;
      _0x3e59f8 = _0x52876f.showToast;
    }, function (_0x2e4e68) {
      _0x252e55 = _0x2e4e68.default;
    }, function (_0x9f0240) {
      _0x2e2858 = _0x9f0240.sendWebNetWithToken;
      _0x546671 = _0x9f0240.WebNetName;
      _0x3d3761 = _0x9f0240.sendLog;
      _0x40f1c6 = _0x9f0240.LOG_TYPE;
      _0x1bd35f = _0x9f0240.creditsCost;
    }],
    execute: function () {
      {
        var _0x589451;
        var _0x52f634;
        var _0x3c0464;
        var _0x3f3168;
        var _0x3ae98d;
        var _0x1b065e;
        var _0x7d2e9;
        var _0x70e085;
        var _0x50f157;
        var _0x17173e;
        var _0x384add;
        var _0x366c49;
        var _0x353112;
        var _0x2e1257;
        var _0x2dcd8c;
        var _0x55877d;
        var _0x28bb77;
        var _0x6beb7d;
        var _0x3903fd;
        var _0x3e5e77;
        var _0x53e44b;
        var _0x29d9df;
        var _0x5ef7d0;
        var _0x4fd196;
        _0x3a37b2._RF.push({}, "2a788P3D2lLJruVcnWqljPf", "ExchangePowerPanel", undefined);
        var _0x58e6f5 = _0x3dfea0.ccclass;
        var _0x13e2b5 = _0x3dfea0.property;
        _0x359442("default", (_0x589451 = _0x58e6f5("ExchangePowerPanel"), _0x52f634 = _0x13e2b5(_0x41b1df), _0x3c0464 = _0x13e2b5(_0x41b1df), _0x3f3168 = _0x13e2b5(_0x41b1df), _0x3ae98d = _0x13e2b5(_0x41b1df), _0x1b065e = _0x13e2b5(_0x41b1df), _0x7d2e9 = _0x13e2b5(_0x158cf6), _0x70e085 = _0x13e2b5(_0x158cf6), _0x50f157 = _0x13e2b5(_0x158cf6), _0x17173e = _0x13e2b5(_0x158cf6), _0x384add = _0x13e2b5(_0x158cf6), _0x552fbb(_0x366c49 = _0x589451(((_0x4fd196 = function (_0x59bac9) {
          function _0x28ce21() {
            for (var _0x4371a8, _0x42ab20 = arguments.length, _0x293a26 = new Array(_0x42ab20), _0x38806f = 0; _0x38806f < _0x42ab20; _0x38806f++) {
              _0x293a26[_0x38806f] = arguments[_0x38806f];
            }
            _0x4371a8 = _0x59bac9.call.apply(_0x59bac9, [this].concat(_0x293a26)) || this;
            _0x533c57(_0x4371a8, "closeBtn", _0x2e1257, _0x565c6b(_0x4371a8));
            _0x533c57(_0x4371a8, "leftBtn", _0x2dcd8c, _0x565c6b(_0x4371a8));
            _0x533c57(_0x4371a8, "leftBtn_gary", _0x55877d, _0x565c6b(_0x4371a8));
            _0x533c57(_0x4371a8, "rightBtn", _0x28bb77, _0x565c6b(_0x4371a8));
            _0x533c57(_0x4371a8, "rightBtn_gary", _0x6beb7d, _0x565c6b(_0x4371a8));
            _0x533c57(_0x4371a8, "leftCreditNum", _0x3903fd, _0x565c6b(_0x4371a8));
            _0x533c57(_0x4371a8, "leftAwardNum", _0x3e5e77, _0x565c6b(_0x4371a8));
            _0x533c57(_0x4371a8, "rightCreditNum", _0x53e44b, _0x565c6b(_0x4371a8));
            _0x533c57(_0x4371a8, "rightCreditNumYuanJia", _0x29d9df, _0x565c6b(_0x4371a8));
            _0x533c57(_0x4371a8, "rightAwardNum", _0x5ef7d0, _0x565c6b(_0x4371a8));
            _0x4371a8.canClick = true;
            _0x4371a8.clickClose = function () {
              _0x4371a8.hidePanel();
            };
            _0x4371a8.clickExchange = _0x3d85d0(_0x2966df().mark(function _0x1bee12(_0x376289, _0x2deb0e, _0x53ec89, _0x212cda) {
              var _0x218c6c;
              var _0x3e934a;
              var _0xc980c3;
              var _0x1ff350;
              var _0x403451;
              return _0x2966df().wrap(function (_0x32a982) {
                for (;;) {
                  switch (_0x32a982.prev = _0x32a982.next) {
                    case 0:
                      if (_0x4371a8.canClick) {
                        _0x32a982.next = 2;
                        break;
                      }
                      return _0x32a982.abrupt("return");
                    case 2:
                      _0x4371a8.canClick = false;
                      _0x32a982.next = 5;
                      return _0x1bd35f("coin", "exEnergy", "exchange_desc", _0x376289);
                    case 5:
                      if (_0x218c6c = _0x32a982.sent, _0x3e934a = _0x218c6c.success, _0xc980c3 = _0x218c6c.ticket, _0x3d3761(_0x40f1c6.CLICK, "left" == _0x212cda ? 7 : 8), _0x3e934a) {
                        _0x32a982.next = 13;
                        break;
                      }
                      _0x3e59f8("网络异常，请稍后重试～");
                      _0x4371a8.canClick = true;
                      return _0x32a982.abrupt("return");
                    case 13:
                      _0x32a982.next = 15;
                      return _0x2e2858(_0x546671.powerExchange, {
                        ticketNum: _0xc980c3,
                        id: _0x53ec89
                      });
                    case 15:
                      _0x1ff350 = _0x32a982.sent;
                      _0x403451 = _0x1ff350.success;
                      _0x1ff350.data;
                      _0x465d2f.updateEnergy();
                      _0x403451 && (_0x4371a8.hidePanel(), _0x5e982a(_0x252e55, {
                        awardNum: _0x2deb0e
                      }));
                      _0x4371a8.canClick = true;
                    case 21:
                    case "end":
                      return _0x32a982.stop();
                  }
                }
              }, _0x1bee12);
            }));
            return _0x4371a8;
          }
          _0x2ec155(_0x28ce21, _0x59bac9);
          var _0x289be8 = _0x28ce21.prototype;
          _0x289be8.onLoad = function () {
            var _0x4f0030;
            var _0x311fe6;
            var _0x29ee56;
            var _0xd0ff51;
            var _0x5a3156;
            var _0x2f410f;
            var _0x169c6f;
            var _0x1d7f14;
            var _0x15de6c;
            var _0x264756 = this;
            this.closeBtn.on(_0x599df2.EventType.CLICK, this.clickClose);
            var _0x45831d = (null == (_0x4f0030 = _0x465d2f.homeInfo) ? undefined : _0x4f0030.currentEnergy).exchangeEnergyConfigs;
            var _0x4d6186 = undefined === _0x45831d ? [] : _0x45831d;
            var _0x4a7b43 = _0x465d2f.homeInfo.remainCredits;
            var _0x1abef3 = undefined === _0x4a7b43 ? 0 : _0x4a7b43;
            this.leftBtn_gary.active = _0x1abef3 < (null == _0x4d6186 || null == (_0x311fe6 = _0x4d6186[0]) ? undefined : _0x311fe6.creditNum);
            this.rightBtn_gary.active = _0x1abef3 < (null == _0x4d6186 || null == (_0x29ee56 = _0x4d6186[1]) ? undefined : _0x29ee56.creditNum);
            this.leftBtn.active = _0x1abef3 >= (null == _0x4d6186 || null == (_0xd0ff51 = _0x4d6186[0]) ? undefined : _0xd0ff51.creditNum);
            this.rightBtn.active = _0x1abef3 >= (null == _0x4d6186 || null == (_0x5a3156 = _0x4d6186[1]) ? undefined : _0x5a3156.creditNum);
            this.leftCreditNum.string = ((null == _0x4d6186 || null == (_0x2f410f = _0x4d6186[0]) ? undefined : _0x2f410f.creditNum) || 188) + "积分";
            this.leftAwardNum.string = ((null == _0x4d6186 || null == (_0x169c6f = _0x4d6186[0]) ? undefined : _0x169c6f.awardNum) || 20) + "点体力";
            this.rightCreditNum.string = ((null == _0x4d6186 || null == (_0x1d7f14 = _0x4d6186[1]) ? undefined : _0x1d7f14.creditNum) || 828) + "积分";
            this.rightAwardNum.string = ((null == _0x4d6186 || null == (_0x15de6c = _0x4d6186[1]) ? undefined : _0x15de6c.awardNum) || 100) + "点体力";
            this.leftBtn.on(_0x599df2.EventType.CLICK, function () {
              var _0x382135;
              var _0x42e092;
              var _0x4dbe00;
              _0x264756.clickExchange(null == _0x4d6186 || null == (_0x382135 = _0x4d6186[0]) ? undefined : _0x382135.creditNum, null == _0x4d6186 || null == (_0x42e092 = _0x4d6186[0]) ? undefined : _0x42e092.awardNum, null == _0x4d6186 || null == (_0x4dbe00 = _0x4d6186[0]) ? undefined : _0x4dbe00.id, "left");
            });
            this.rightBtn.on(_0x599df2.EventType.CLICK, function () {
              var _0x1674f9;
              var _0x2cce41;
              var _0x30a5ad;
              _0x264756.clickExchange(null == _0x4d6186 || null == (_0x1674f9 = _0x4d6186[1]) ? undefined : _0x1674f9.creditNum, null == _0x4d6186 || null == (_0x2cce41 = _0x4d6186[1]) ? undefined : _0x2cce41.awardNum, null == _0x4d6186 || null == (_0x30a5ad = _0x4d6186[1]) ? undefined : _0x30a5ad.id, "right");
            });
          };
          _0x289be8.start = function () {
            {
              var _0x569538 = _0x3d85d0(_0x2966df().mark(function _0x3884a0() {
                return _0x2966df().wrap(function (_0x3c3be2) {
                  for (;;) {
                    switch (_0x3c3be2.prev = _0x3c3be2.next) {
                      case 0:
                      case "end":
                        return _0x3c3be2.stop();
                    }
                  }
                }, _0x3884a0);
              }));
              return function () {
                return _0x569538.apply(this, arguments);
              };
            }
          }();
          return _0x28ce21;
        }(_0x54b1fc)).bundle = "ExchangePowerPanel", _0x4fd196.skin = "ExchangePowerPanel", _0x2e1257 = _0x34d167((_0x353112 = _0x4fd196).prototype, "closeBtn", [_0x52f634], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function () {
            return null;
          }
        }), _0x2dcd8c = _0x34d167(_0x353112.prototype, "leftBtn", [_0x3c0464], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function () {
            return null;
          }
        }), _0x55877d = _0x34d167(_0x353112.prototype, "leftBtn_gary", [_0x3f3168], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function () {
            return null;
          }
        }), _0x28bb77 = _0x34d167(_0x353112.prototype, "rightBtn", [_0x3ae98d], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function () {
            return null;
          }
        }), _0x6beb7d = _0x34d167(_0x353112.prototype, "rightBtn_gary", [_0x1b065e], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function () {
            return null;
          }
        }), _0x3903fd = _0x34d167(_0x353112.prototype, "leftCreditNum", [_0x7d2e9], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function () {
            return null;
          }
        }), _0x3e5e77 = _0x34d167(_0x353112.prototype, "leftAwardNum", [_0x70e085], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function () {
            return null;
          }
        }), _0x53e44b = _0x34d167(_0x353112.prototype, "rightCreditNum", [_0x50f157], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function () {
            return null;
          }
        }), _0x29d9df = _0x34d167(_0x353112.prototype, "rightCreditNumYuanJia", [_0x17173e], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function () {
            return null;
          }
        }), _0x5ef7d0 = _0x34d167(_0x353112.prototype, "rightAwardNum", [_0x384add], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function () {
            return null;
          }
        }), _0x366c49 = _0x353112)) || _0x366c49) || _0x366c49));
        _0x3a37b2._RF.pop();
      }
    }
  };
});
System.register("chunks:///_virtual/ExchangePowerSucPanel.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Panel.ts", "./decorators.ts"], function (_0x3c6e76) {
  var _0x349b6c;
  var _0x372143;
  var _0x55b396;
  var _0x3c21db;
  var _0xfe9533;
  var _0x36bd8b;
  var _0xa9e1d;
  var _0x4744ac;
  var _0x43090c;
  var _0x3cd8bf;
  var _0x55ec9a;
  var _0x469fa5;
  var _0x286891;
  return {
    setters: [function (_0x169033) {
      _0x349b6c = _0x169033.applyDecoratedDescriptor;
      _0x372143 = _0x169033.inheritsLoose;
      _0x55b396 = _0x169033.initializerDefineProperty;
      _0x3c21db = _0x169033.assertThisInitialized;
      _0xfe9533 = _0x169033.asyncToGenerator;
      _0x36bd8b = _0x169033.regeneratorRuntime;
    }, function (_0x209926) {
      _0xa9e1d = _0x209926.cclegacy;
      _0x4744ac = _0x209926._decorator;
      _0x43090c = _0x209926.Node;
      _0x3cd8bf = _0x209926.Label;
      _0x55ec9a = _0x209926.Button;
    }, function (_0x4682d8) {
      _0x469fa5 = _0x4682d8.default;
    }, function (_0x19be50) {
      _0x286891 = _0x19be50.observer;
    }],
    execute: function () {
      var _0xa2444c;
      var _0x33d05f;
      var _0xacd17;
      var _0x3824e9;
      var _0x4b8c94;
      var _0x33ef9f;
      var _0xa2eac9;
      var _0x14981f;
      var _0x4450c;
      var _0x467b77;
      _0xa9e1d._RF.push({}, "4ab6eFu279EAqNrHYqtjGSt", "ExchangePowerSucPanel", undefined);
      var _0x4292b5 = _0x4744ac.ccclass;
      var _0x2a894e = _0x4744ac.property;
      _0x3c6e76("default", (_0xa2444c = _0x4292b5("ExchangePowerSucPanel"), _0x33d05f = _0x2a894e(_0x43090c), _0xacd17 = _0x2a894e(_0x43090c), _0x3824e9 = _0x2a894e(_0x3cd8bf), _0x286891(_0x4b8c94 = _0xa2444c(((_0x467b77 = function (_0x54a97d) {
        function _0xb1638f() {
          for (var _0x8da060, _0x551ea6 = arguments.length, _0xc3b3d = new Array(_0x551ea6), _0x58bddf = 0; _0x58bddf < _0x551ea6; _0x58bddf++) {
            _0xc3b3d[_0x58bddf] = arguments[_0x58bddf];
          }
          _0x8da060 = _0x54a97d.call.apply(_0x54a97d, [this].concat(_0xc3b3d)) || this;
          _0x55b396(_0x8da060, "closeBtn", _0xa2eac9, _0x3c21db(_0x8da060));
          _0x55b396(_0x8da060, "mainBtn", _0x14981f, _0x3c21db(_0x8da060));
          _0x55b396(_0x8da060, "awardNum", _0x4450c, _0x3c21db(_0x8da060));
          _0x8da060.clickClose = function () {
            _0x8da060.hidePanel();
          };
          return _0x8da060;
        }
        _0x372143(_0xb1638f, _0x54a97d);
        var _0x5241cf = _0xb1638f.prototype;
        _0x5241cf.onLoad = function () {};
        _0x5241cf.start = function () {
          var _0x51b98e = _0xfe9533(_0x36bd8b().mark(function _0x33903f() {
            var _0x3026c9;
            var _0xc01337;
            return _0x36bd8b().wrap(function (_0x4915ce) {
              {
                for (;;) {
                  switch (_0x4915ce.prev = _0x4915ce.next) {
                    case 0:
                      _0x3026c9 = this.data.awardNum;
                      _0xc01337 = undefined === _0x3026c9 ? 0 : _0x3026c9;
                      this.awardNum.string = "体力+" + (_0xc01337 || 0);
                      this.closeBtn.on(_0x55ec9a.EventType.CLICK, this.clickClose);
                      this.mainBtn.on(_0x55ec9a.EventType.CLICK, this.clickClose);
                    case 4:
                    case "end":
                      return _0x4915ce.stop();
                  }
                }
              }
            }, _0x33903f, this);
          }));
          return function () {
            return _0x51b98e.apply(this, arguments);
          };
        }();
        return _0xb1638f;
      }(_0x469fa5)).bundle = "ExchangePowerSucPanel", _0x467b77.skin = "ExchangePowerSucPanel", _0xa2eac9 = _0x349b6c((_0x33ef9f = _0x467b77).prototype, "closeBtn", [_0x33d05f], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x14981f = _0x349b6c(_0x33ef9f.prototype, "mainBtn", [_0xacd17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x4450c = _0x349b6c(_0x33ef9f.prototype, "awardNum", [_0x3824e9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x4b8c94 = _0x33ef9f)) || _0x4b8c94) || _0x4b8c94));
      _0xa9e1d._RF.pop();
    }
  };
});
System.register("chunks:///_virtual/ExecutePreFrame.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], function (_0x1da6d3) {
  var _0x2a9190;
  var _0x437b19;
  return {
    setters: [function (_0x4bb258) {
      _0x2a9190 = _0x4bb258.regeneratorRuntime;
    }, function (_0x4582d9) {
      _0x437b19 = _0x4582d9.cclegacy;
    }],
    execute: function () {
      _0x1da6d3({
        executePreFrame: function (_0x599f97, _0x51bd5a, _0x30058f) {
          {
            return new Promise(function (_0x4debfd, _0x4bf573) {
              var _0x591da4 = _0x599f97;
              !function _0x29b988() {
                for (var _0x3a795b = Date.now(), _0xb7d267 = _0x591da4.next();; _0xb7d267 = _0x591da4.next()) {
                  if (null == _0xb7d267 || _0xb7d267.done) {
                    return void _0x4debfd();
                  }
                  if (Date.now() - _0x3a795b > _0x51bd5a) {
                    return void _0x30058f.scheduleOnce(function () {
                      _0x29b988();
                    });
                  }
                }
              }();
            });
          }
        },
        getItemGenerator: _0x3f159f
      });
      var _0x7996b8 = _0x2a9190().mark(_0x3f159f);
      function _0x3f159f(_0x57b465, _0x530f7d) {
        var _0x851082;
        return _0x2a9190().wrap(function (_0x3c5ab9) {
          for (;;) {
            switch (_0x3c5ab9.prev = _0x3c5ab9.next) {
              case 0:
                _0x851082 = 0;
              case 1:
                if (!(_0x851082 < _0x57b465)) {
                  _0x3c5ab9.next = 7;
                  break;
                }
                _0x3c5ab9.next = 4;
                return _0x530f7d(_0x851082);
              case 4:
                _0x851082++;
                _0x3c5ab9.next = 1;
                break;
              case 7:
              case "end":
                return _0x3c5ab9.stop();
            }
          }
        }, _0x7996b8);
      }
      _0x437b19._RF.push({}, "020d2jV09VEw65GnIOzX199", "ExecutePreFrame", undefined);
      _0x437b19._RF.pop();
    }
  };
});
System.register("chunks:///_virtual/FirstSkinPanel.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Panel.ts", "./decorators.ts"], function (_0x258258) {
  var _0x28b44a;
  var _0x549a73;
  var _0x472a50;
  var _0x28a652;
  var _0x391782;
  var _0x518a64;
  var _0x53b381;
  var _0x5ef988;
  var _0xd8383b;
  var _0x2efdd8;
  var _0x31da3f;
  var _0x17bba0;
  return {
    setters: [function (_0x455635) {
      _0x28b44a = _0x455635.applyDecoratedDescriptor;
      _0x549a73 = _0x455635.inheritsLoose;
      _0x472a50 = _0x455635.initializerDefineProperty;
      _0x28a652 = _0x455635.assertThisInitialized;
      _0x391782 = _0x455635.asyncToGenerator;
      _0x518a64 = _0x455635.regeneratorRuntime;
    }, function (_0x23278b) {
      _0x53b381 = _0x23278b.cclegacy;
      _0x5ef988 = _0x23278b._decorator;
      _0xd8383b = _0x23278b.Node;
      _0x2efdd8 = _0x23278b.Button;
    }, function (_0x15bdd8) {
      _0x31da3f = _0x15bdd8.default;
    }, function (_0x277d1f) {
      _0x17bba0 = _0x277d1f.observer;
    }],
    execute: function () {
      var _0xeae9f5;
      var _0x5a5f1d;
      var _0x25edfc;
      var _0x33e56b;
      var _0x2a484c;
      var _0x56d6dc;
      _0x53b381._RF.push({}, "52c80SEFPBJBbevjyHnShfx", "FirstSkinPanel", undefined);
      var _0x250f2f = _0x5ef988.ccclass;
      var _0x2a1f88 = _0x5ef988.property;
      _0x258258("default", (_0xeae9f5 = _0x250f2f("FirstSkinPanel"), _0x5a5f1d = _0x2a1f88(_0xd8383b), _0x17bba0(_0x25edfc = _0xeae9f5(((_0x56d6dc = function (_0x17a093) {
        function _0xb4db8d() {
          for (var _0x4a6d44, _0x3b58dd = arguments.length, _0x457583 = new Array(_0x3b58dd), _0x52e0d9 = 0; _0x52e0d9 < _0x3b58dd; _0x52e0d9++) {
            _0x457583[_0x52e0d9] = arguments[_0x52e0d9];
          }
          _0x4a6d44 = _0x17a093.call.apply(_0x17a093, [this].concat(_0x457583)) || this;
          _0x472a50(_0x4a6d44, "closeBtn", _0x2a484c, _0x28a652(_0x4a6d44));
          _0x4a6d44.clickClose = function () {
            _0x4a6d44.hidePanel();
          };
          return _0x4a6d44;
        }
        _0x549a73(_0xb4db8d, _0x17a093);
        var _0x5b86fe = _0xb4db8d.prototype;
        _0x5b86fe.onLoad = function () {
          this.closeBtn.on(_0x2efdd8.EventType.CLICK, this.clickClose);
        };
        _0x5b86fe.start = function () {
          var _0x2fa568 = _0x391782(_0x518a64().mark(function _0x2ef149() {
            return _0x518a64().wrap(function (_0x1df46d) {
              {
                for (;;) {
                  switch (_0x1df46d.prev = _0x1df46d.next) {
                    case 0:
                    case "end":
                      return _0x1df46d.stop();
                  }
                }
              }
            }, _0x2ef149);
          }));
          return function () {
            return _0x2fa568.apply(this, arguments);
          };
        }();
        return _0xb4db8d;
      }(_0x31da3f)).bundle = "FirstSkinPanel", _0x56d6dc.skin = "FirstSkinPanel", _0x2a484c = _0x28b44a((_0x33e56b = _0x56d6dc).prototype, "closeBtn", [_0x5a5f1d], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x25edfc = _0x33e56b)) || _0x25edfc) || _0x25edfc));
      _0x53b381._RF.pop();
    }
  };
});
System.register("chunks:///_virtual/FollowCamera2D.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], function (_0x53b9d6) {
  var _0x1edc88;
  var _0x13df61;
  var _0x19b535;
  var _0xe76ed1;
  var _0x1e47ff;
  var _0x4950c7;
  var _0x420f37;
  var _0x2ea362;
  var _0x5e1367;
  var _0x3d5d0f;
  return {
    setters: [function (_0x2c34ba) {
      {
        _0x1edc88 = _0x2c34ba.applyDecoratedDescriptor;
        _0x13df61 = _0x2c34ba.inheritsLoose;
        _0x19b535 = _0x2c34ba.initializerDefineProperty;
        _0xe76ed1 = _0x2c34ba.assertThisInitialized;
      }
    }, function (_0x248953) {
      _0x1e47ff = _0x248953.cclegacy;
      _0x4950c7 = _0x248953._decorator;
      _0x420f37 = _0x248953.v3;
      _0x2ea362 = _0x248953.Node;
      _0x5e1367 = _0x248953.Camera;
      _0x3d5d0f = _0x248953.Component;
    }],
    execute: function () {
      {
        var _0xb70701;
        var _0x5986c4;
        var _0x130bf7;
        var _0x107ce9;
        var _0x208c58;
        var _0x1f0a25;
        _0x1e47ff._RF.push({}, "901c88RzPNC+KzYY4c1byNp", "FollowCamera2D", undefined);
        var _0x256bfa = _0x4950c7.ccclass;
        var _0x189e08 = _0x4950c7.property;
        var _0x34275b = _0x420f37();
        _0x53b9d6("FollowCamera2D", (_0xb70701 = _0x256bfa("tgxFollowCamera2D"), _0x5986c4 = _0x189e08(_0x2ea362), _0xb70701((_0x208c58 = _0x1edc88((_0x107ce9 = function (_0x2b9deb) {
          function _0x4b427d() {
            for (var _0x4013b8, _0x14205a = arguments.length, _0x3609ce = new Array(_0x14205a), _0x45f546 = 0; _0x45f546 < _0x14205a; _0x45f546++) {
              _0x3609ce[_0x45f546] = arguments[_0x45f546];
            }
            _0x4013b8 = _0x2b9deb.call.apply(_0x2b9deb, [this].concat(_0x3609ce)) || this;
            _0x19b535(_0x4013b8, "target", _0x208c58, _0xe76ed1(_0x4013b8));
            _0x19b535(_0x4013b8, "offset", _0x1f0a25, _0xe76ed1(_0x4013b8));
            _0x4013b8._camera = undefined;
            return _0x4013b8;
          }
          _0x13df61(_0x4b427d, _0x2b9deb);
          var _0x2f5f44 = _0x4b427d.prototype;
          _0x2f5f44.start = function () {
            this._camera = this.node.getComponent(_0x5e1367);
          };
          _0x2f5f44.lateUpdate = function (_0x4a874e) {
            this.target.getWorldPosition(_0x34275b);
            _0x34275b.add(this.offset);
            this.node.worldPosition = _0x34275b;
          };
          return _0x4b427d;
        }(_0x3d5d0f)).prototype, "target", [_0x5986c4], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: null
        }), _0x1f0a25 = _0x1edc88(_0x107ce9.prototype, "offset", [_0x189e08], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function () {
            return _0x420f37();
          }
        }), _0x130bf7 = _0x107ce9)) || _0x130bf7));
        _0x1e47ff._RF.pop();
      }
    }
  };
});
System.register("chunks:///_virtual/FPSCamera.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], function (_0x17895b) {
  var _0x38dadc;
  var _0x2556c9;
  var _0x1be890;
  var _0x5692e1;
  return {
    setters: [function (_0x1be5ca) {
      _0x38dadc = _0x1be5ca.inheritsLoose;
    }, function (_0x52ffdb) {
      _0x2556c9 = _0x52ffdb.cclegacy;
      _0x1be890 = _0x52ffdb._decorator;
      _0x5692e1 = _0x52ffdb.Component;
    }],
    execute: function () {
      var _0x40a3b7;
      _0x2556c9._RF.push({}, "35e79Dy4FRKopwoxbqfPUBI", "FPSCamera", undefined);
      var _0x59e45f = _0x1be890.ccclass;
      _0x1be890.property;
      _0x17895b("FPSCamera", _0x59e45f("tgxFPSCamera")(_0x40a3b7 = function (_0x501879) {
        function _0x31a188() {
          return _0x501879.apply(this, arguments) || this;
        }
        _0x38dadc(_0x31a188, _0x501879);
        var _0x5182e6 = _0x31a188.prototype;
        _0x5182e6.start = function () {};
        _0x5182e6.update = function (_0x4c3e09) {};
        return _0x31a188;
      }(_0x5692e1)) || _0x40a3b7);
      _0x2556c9._RF.pop();
    }
  };
});
System.register("chunks:///_virtual/FreeCamera.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], function (_0x2059be) {
  var _0xee6784;
  var _0x38e6e6;
  var _0x57357f;
  var _0x3a98dc;
  var _0x36dbd8;
  var _0x524dbb;
  var _0xe249c8;
  var _0x596cd7;
  var _0x56b10d;
  var _0x5e4c09;
  var _0x4e598b;
  var _0x263878;
  var _0x34d77c;
  var _0x354a10;
  var _0x7fa62c;
  return {
    setters: [function (_0x103372) {
      _0xee6784 = _0x103372.applyDecoratedDescriptor;
      _0x38e6e6 = _0x103372.inheritsLoose;
      _0x57357f = _0x103372.initializerDefineProperty;
      _0x3a98dc = _0x103372.assertThisInitialized;
    }, function (_0x468e9c) {
      _0x36dbd8 = _0x468e9c.cclegacy;
      _0x524dbb = _0x468e9c._decorator;
      _0xe249c8 = _0x468e9c.Vec2;
      _0x596cd7 = _0x468e9c.Vec3;
      _0x56b10d = _0x468e9c.Quat;
      _0x5e4c09 = _0x468e9c.input;
      _0x4e598b = _0x468e9c.Input;
      _0x263878 = _0x468e9c.game;
      _0x34d77c = _0x468e9c.KeyCode;
      _0x354a10 = _0x468e9c.v2;
      _0x7fa62c = _0x468e9c.Component;
    }],
    execute: function () {
      {
        var _0x56b29f;
        var _0x509f84;
        var _0x16e56a;
        var _0x21fe7a;
        var _0x464754;
        var _0x48ecb6;
        var _0x41ceea;
        var _0x37308b;
        _0x36dbd8._RF.push({}, "9cfdbEnosdDcIV51/qKNoBS", "FreeCamera", undefined);
        var _0x59fe2b = _0x524dbb.ccclass;
        var _0x2685ff = _0x524dbb.property;
        var _0x59a6f0 = new _0xe249c8();
        var _0x42030d = new _0xe249c8();
        var _0x4a830e = new _0x596cd7();
        var _0x3acc21 = new _0x56b10d();
        var _0x195542 = new _0x596cd7();
        var _0x109663 = new _0x596cd7();
        _0x2059be("FreeCamera", (_0x56b29f = _0x59fe2b("tgxFreeCamera"), _0x509f84 = _0x2685ff({
          slide: true,
          range: [0.05, 0.5, 0.01]
        }), _0x56b29f((_0x464754 = _0xee6784((_0x21fe7a = function (_0x1f8f99) {
          function _0x88eb2b() {
            for (var _0x496aa0, _0x4a0af9 = arguments.length, _0x436c69 = new Array(_0x4a0af9), _0x11a82f = 0; _0x11a82f < _0x4a0af9; _0x11a82f++) {
              _0x436c69[_0x11a82f] = arguments[_0x11a82f];
            }
            _0x496aa0 = _0x1f8f99.call.apply(_0x1f8f99, [this].concat(_0x436c69)) || this;
            _0x57357f(_0x496aa0, "moveSpeed", _0x464754, _0x3a98dc(_0x496aa0));
            _0x57357f(_0x496aa0, "moveSpeedShiftScale", _0x48ecb6, _0x3a98dc(_0x496aa0));
            _0x57357f(_0x496aa0, "damp", _0x41ceea, _0x3a98dc(_0x496aa0));
            _0x57357f(_0x496aa0, "rotateSpeed", _0x37308b, _0x3a98dc(_0x496aa0));
            _0x496aa0._euler = new _0x596cd7();
            _0x496aa0._velocity = new _0x596cd7();
            _0x496aa0._position = new _0x596cd7();
            _0x496aa0._speedScale = 1;
            _0x496aa0._eulerP = new _0x596cd7();
            _0x496aa0.keys = [];
            _0x496aa0.moveDir = new _0x596cd7();
            _0x496aa0.key2dirMap = null;
            return _0x496aa0;
          }
          _0x38e6e6(_0x88eb2b, _0x1f8f99);
          var _0x4769c7 = _0x88eb2b.prototype;
          _0x4769c7.onLoad = function () {
            _0x5e4c09.on(_0x4e598b.EventType.MOUSE_WHEEL, this.onMouseWheel, this);
            _0x5e4c09.on(_0x4e598b.EventType.TOUCH_START, this.onTouchStart, this);
            _0x5e4c09.on(_0x4e598b.EventType.TOUCH_MOVE, this.onTouchMove, this);
            _0x5e4c09.on(_0x4e598b.EventType.TOUCH_END, this.onTouchEnd, this);
            _0x596cd7.copy(this._euler, this.node.eulerAngles);
            _0x596cd7.copy(this._position, this.node.getPosition());
            _0x596cd7.copy(this._eulerP, this.node.eulerAngles);
            _0x5e4c09.on(_0x4e598b.EventType.KEY_DOWN, this.onKeyDown, this);
            _0x5e4c09.on(_0x4e598b.EventType.KEY_UP, this.onKeyUp, this);
          };
          _0x4769c7.onDestroy = function () {
            _0x5e4c09.off(_0x4e598b.EventType.MOUSE_WHEEL, this.onMouseWheel, this);
            _0x5e4c09.off(_0x4e598b.EventType.TOUCH_START, this.onTouchStart, this);
            _0x5e4c09.off(_0x4e598b.EventType.TOUCH_MOVE, this.onTouchMove, this);
            _0x5e4c09.off(_0x4e598b.EventType.TOUCH_END, this.onTouchEnd, this);
            _0x5e4c09.off(_0x4e598b.EventType.KEY_DOWN, this.onKeyDown, this);
            _0x5e4c09.off(_0x4e598b.EventType.KEY_UP, this.onKeyUp, this);
          };
          _0x4769c7.update = function (_0x53864c) {
            var _0x3a5867 = Math.min(_0x53864c / this.damp, 1);
            _0x596cd7.transformQuat(_0x4a830e, this._velocity, this.node.rotation);
            _0x596cd7.scaleAndAdd(this._position, this._position, _0x4a830e, this.moveSpeed * this._speedScale);
            _0x596cd7.lerp(_0x4a830e, this.node.getPosition(), this._position, _0x3a5867);
            this.node.setPosition(_0x4a830e);
            this.moveDir.lengthSqr() && (_0x596cd7.transformQuat(_0x195542, _0x596cd7.FORWARD, this.node.rotation), _0x195542.normalize(), _0x596cd7.cross(_0x109663, _0x195542, _0x596cd7.UP), _0x109663.normalize(), _0x596cd7.scaleAndAdd(this._position, this._position, _0x195542, this.moveSpeed * this._speedScale * this.moveDir.z), _0x596cd7.lerp(_0x4a830e, this.node.getPosition(), this._position, _0x3a5867), this.node.setPosition(_0x4a830e), _0x596cd7.scaleAndAdd(this._position, this._position, _0x109663, this.moveSpeed * this._speedScale * this.moveDir.x), _0x596cd7.lerp(_0x4a830e, this.node.getPosition(), this._position, _0x3a5867), this.node.setPosition(_0x4a830e), _0x596cd7.scaleAndAdd(this._position, this._position, _0x596cd7.UP, this.moveSpeed * this._speedScale * this.moveDir.y), _0x596cd7.lerp(_0x4a830e, this.node.getPosition(), this._position, _0x3a5867), this.node.setPosition(_0x4a830e));
            _0x56b10d.fromEuler(_0x3acc21, this._eulerP.x, this._eulerP.y, this._eulerP.z);
            _0x56b10d.slerp(_0x3acc21, this.node.rotation, _0x3acc21, _0x3a5867);
            this.node.setWorldRotationFromEuler(this._eulerP.x, this._eulerP.y, this._eulerP.z);
          };
          _0x4769c7.onMouseWheel = function (_0x4767d1) {
            var _0xc3f3f7 = -_0x4767d1.getScrollY() * this.moveSpeed * 0.1;
            _0x596cd7.transformQuat(_0x4a830e, _0x596cd7.UNIT_Z, this.node.rotation);
            _0x596cd7.scaleAndAdd(this._position, this.node.position, _0x4a830e, _0xc3f3f7);
          };
          _0x4769c7.onTouchStart = function (_0x57742e) {
            _0x263878.canvas.requestPointerLock && _0x263878.canvas.requestPointerLock();
          };
          _0x4769c7.onTouchMove = function (_0x4a45b0) {
            _0x4a45b0.getStartLocation(_0x59a6f0);
            _0x59a6f0.x;
            _0x263878.canvas.width;
            _0x4a45b0.getDelta(_0x42030d);
            this._eulerP.y -= _0x42030d.x * this.rotateSpeed * 0.1;
            this._eulerP.x += _0x42030d.y * this.rotateSpeed * 0.1;
          };
          _0x4769c7.onTouchEnd = function (_0x597982) {
            document.exitPointerLock && document.exitPointerLock();
            _0x597982.getStartLocation(_0x59a6f0);
            _0x59a6f0.x < 0.4 * _0x263878.canvas.width && (this._velocity.x = 0, this._velocity.z = 0);
          };
          _0x4769c7.onKeyDown = function (_0x1d7ec8) {
            var _0x555777 = _0x1d7ec8.keyCode;
            _0x555777 != _0x34d77c.KEY_A && _0x555777 != _0x34d77c.KEY_S && _0x555777 != _0x34d77c.KEY_D && _0x555777 != _0x34d77c.KEY_W || -1 == this.keys.indexOf(_0x555777) && (this.keys.push(_0x555777), this.updateDirection());
            _0x555777 == _0x34d77c.KEY_Q ? this.moveDir.y = -1 : _0x555777 == _0x34d77c.KEY_E && (this.moveDir.y = 1);
          };
          _0x4769c7.onKeyUp = function (_0x4275d5) {
            var _0x309820 = _0x4275d5.keyCode;
            if (_0x309820 == _0x34d77c.KEY_A || _0x309820 == _0x34d77c.KEY_S || _0x309820 == _0x34d77c.KEY_D || _0x309820 == _0x34d77c.KEY_W) {
              var _0x59e6db = this.keys.indexOf(_0x309820);
              -1 != _0x59e6db && (this.keys.splice(_0x59e6db, 1), this.updateDirection());
            }
            _0x309820 != _0x34d77c.KEY_Q && _0x309820 != _0x34d77c.KEY_E || (this.moveDir.y = 0);
          };
          _0x4769c7.updateDirection = function () {
            null == this.key2dirMap && (this.key2dirMap = {}, this.key2dirMap[0] = _0x354a10(0, 0), this.key2dirMap[_0x34d77c.KEY_A] = _0x354a10(-1, 0), this.key2dirMap[_0x34d77c.KEY_D] = _0x354a10(1, 0), this.key2dirMap[_0x34d77c.KEY_W] = _0x354a10(0, 1), this.key2dirMap[_0x34d77c.KEY_S] = _0x354a10(0, -1), this.key2dirMap[1000 * _0x34d77c.KEY_A + _0x34d77c.KEY_W] = this.key2dirMap[1000 * _0x34d77c.KEY_W + _0x34d77c.KEY_A] = _0x354a10(-1, 1), this.key2dirMap[1000 * _0x34d77c.KEY_D + _0x34d77c.KEY_W] = this.key2dirMap[1000 * _0x34d77c.KEY_W + _0x34d77c.KEY_D] = _0x354a10(1, 1), this.key2dirMap[1000 * _0x34d77c.KEY_A + _0x34d77c.KEY_S] = this.key2dirMap[1000 * _0x34d77c.KEY_S + _0x34d77c.KEY_A] = _0x354a10(-1, -1), this.key2dirMap[1000 * _0x34d77c.KEY_D + _0x34d77c.KEY_S] = this.key2dirMap[1000 * _0x34d77c.KEY_S + _0x34d77c.KEY_D] = _0x354a10(1, -1), this.key2dirMap[1000 * _0x34d77c.KEY_A + _0x34d77c.KEY_D] = this.key2dirMap[_0x34d77c.KEY_D], this.key2dirMap[1000 * _0x34d77c.KEY_D + _0x34d77c.KEY_A] = this.key2dirMap[_0x34d77c.KEY_A], this.key2dirMap[1000 * _0x34d77c.KEY_W + _0x34d77c.KEY_S] = this.key2dirMap[_0x34d77c.KEY_S], this.key2dirMap[1000 * _0x34d77c.KEY_S + _0x34d77c.KEY_W] = this.key2dirMap[_0x34d77c.KEY_W]);
            var _0x252089 = this.keys[this.keys.length - 1] || 0;
            var _0x216974 = this.keys[this.keys.length - 2] || 0;
            var _0x3aff08 = this.key2dirMap[1000 * _0x216974 + _0x252089];
            this.moveDir.x = _0x3aff08.x;
            this.moveDir.z = _0x3aff08.y;
          };
          return _0x88eb2b;
        }(_0x7fa62c)).prototype, "moveSpeed", [_0x2685ff], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function () {
            return 1;
          }
        }), _0x48ecb6 = _0xee6784(_0x21fe7a.prototype, "moveSpeedShiftScale", [_0x2685ff], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function () {
            return 5;
          }
        }), _0x41ceea = _0xee6784(_0x21fe7a.prototype, "damp", [_0x509f84], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function () {
            return 0.2;
          }
        }), _0x37308b = _0xee6784(_0x21fe7a.prototype, "rotateSpeed", [_0x2685ff], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function () {
            return 1;
          }
        }), _0x16e56a = _0x21fe7a)) || _0x16e56a));
        _0x36dbd8._RF.pop();
      }
    }
  };
});
System.register("chunks:///_virtual/FreeLookHandler.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./CinestationData.ts", "./CinestationMath.ts", "./CameraHandler.ts"], function (_0x506a28) {
  var _0x1638a0;
  var _0x338235;
  var _0x17e0fa;
  var _0x170688;
  var _0x32f0af;
  var _0x558929;
  var _0x1361ac;
  var _0x3ac901;
  var _0x490fd7;
  var _0x5e4546;
  var _0x3a4cc6;
  var _0x3dfc1f;
  var _0x2cb6e5;
  var _0x139ca1;
  var _0x17b7f8;
  var _0x230371;
  var _0xb14ab6;
  var _0x28570d;
  var _0x162ebe;
  var _0x5c002d;
  var _0x52c24a;
  return {
    setters: [function (_0x416e07) {
      _0x1638a0 = _0x416e07.inheritsLoose;
    }, function (_0x5d6e7b) {
      _0x338235 = _0x5d6e7b.cclegacy;
      _0x17e0fa = _0x5d6e7b.Vec3;
      _0x170688 = _0x5d6e7b.Vec2;
      _0x32f0af = _0x5d6e7b.director;
      _0x558929 = _0x5d6e7b.input;
      _0x1361ac = _0x5d6e7b.Input;
      _0x3ac901 = _0x5d6e7b.sys;
      _0x490fd7 = _0x5d6e7b.EventMouse;
      _0x5e4546 = _0x5d6e7b.view;
      _0x3a4cc6 = _0x5d6e7b.isValid;
      _0x3dfc1f = _0x5d6e7b.clamp;
      _0x2cb6e5 = _0x5d6e7b.toRadian;
    }, function (_0x27607e) {
      _0x139ca1 = _0x27607e.cinestation;
    }, function (_0x5d4fdf) {
      _0x17b7f8 = _0x5d4fdf.quarticDamp;
      _0x230371 = _0x5d4fdf.Vec3_setFromSpherical;
      _0xb14ab6 = _0x5d4fdf.Vec3_setFromMatrixColumn;
      _0x28570d = _0x5d4fdf.Vec3_smoothDamp;
      _0x162ebe = _0x5d4fdf.Vec3_closeTo;
      _0x5c002d = _0x5d4fdf.Spherical;
    }, function (_0x31172c) {
      _0x52c24a = _0x31172c.CameraHandler;
    }],
    execute: function () {
      _0x338235._RF.push({}, "1d097iHg4pBDLtSMsYjfxFc", "FreeLookHandler", undefined);
      var _0x2680c7 = Math.abs;
      var _0x4efc0e = Math.tan;
      var _0x16e6bb = new _0x17e0fa();
      var _0x4d8cec = new _0x17e0fa();
      var _0x4c2c7a = new _0x170688();
      var _0x375c05 = new _0x17e0fa();
      var _0x131754 = new _0x17e0fa();
      var _0x189473 = new _0x17e0fa();
      var _0x2afe18 = new _0x170688();
      var _0x4b7329 = new _0x170688();
      var _0x451208 = new _0x170688();
      var _0x1d7d0f = new _0x170688();
      _0x506a28("FreeLookHandler", function (_0x538c9c) {
        function _0x1b9afb() {
          for (var _0x48aa91, _0x42b728 = arguments.length, _0x5c79a0 = new Array(_0x42b728), _0x380490 = 0; _0x380490 < _0x42b728; _0x380490++) {
            _0x5c79a0[_0x380490] = arguments[_0x380490];
          }
          (_0x48aa91 = _0x538c9c.call.apply(_0x538c9c, [this].concat(_0x5c79a0)) || this)._button = -1;
          _0x48aa91._needUpdateRotate = false;
          _0x48aa91._rotateDelta = new _0x170688();
          _0x48aa91._panDelta = new _0x170688();
          _0x48aa91._distanceScale = 1;
          _0x48aa91._spherical = new _0x5c002d();
          return _0x48aa91;
        }
        _0x1638a0(_0x1b9afb, _0x538c9c);
        var _0x5c0928 = _0x1b9afb.prototype;
        _0x5c0928.onEnable = function () {
          _0x139ca1.input && this._registInputEvents();
          _0x32f0af.on("VCam.enableInput", this._onEnableInput, this);
        };
        _0x5c0928.onDisable = function () {
          _0x139ca1.input && this._clearInputEvents();
          _0x32f0af.off("VCam.enableInput", this._onEnableInput, this);
        };
        _0x5c0928.onLookAtChanged = function (_0x18116c) {
          this._needUpdateRotate = true;
        };
        _0x5c0928._registInputEvents = function () {
          _0x558929.on(_0x1361ac.EventType.MOUSE_DOWN, this._onMouseDown, this);
          _0x558929.on(_0x1361ac.EventType.MOUSE_UP, this._onMouseUp, this);
          _0x558929.on(_0x1361ac.EventType.MOUSE_MOVE, this._onMouseMove, this);
          _0x558929.on(_0x1361ac.EventType.MOUSE_WHEEL, this._onMouseWheel, this);
          _0x558929.on(_0x1361ac.EventType.TOUCH_MOVE, this._onTouchMove, this);
          _0x558929.on(_0x1361ac.EventType.TOUCH_END, this._onTouchEnd, this);
        };
        _0x5c0928._clearInputEvents = function () {
          _0x558929.off(_0x1361ac.EventType.MOUSE_DOWN, this._onMouseDown, this);
          _0x558929.off(_0x1361ac.EventType.MOUSE_UP, this._onMouseUp, this);
          _0x558929.off(_0x1361ac.EventType.MOUSE_MOVE, this._onMouseMove, this);
          _0x558929.off(_0x1361ac.EventType.MOUSE_WHEEL, this._onMouseWheel, this);
          _0x558929.off(_0x1361ac.EventType.TOUCH_MOVE, this._onTouchMove, this);
          _0x558929.off(_0x1361ac.EventType.TOUCH_END, this._onTouchEnd, this);
        };
        _0x5c0928._onEnableInput = function (_0x425ffa) {
          {
            _0x425ffa ? this._registInputEvents() : this._clearInputEvents();
          }
        };
        _0x5c0928._getPreviousLocation = function (_0x1d808d, _0x2dd298) {
          return _0x1d808d.getPreviousLocation(_0x2dd298);
        };
        _0x5c0928._getLocation = function (_0x12ae23, _0x54a797) {
          return _0x12ae23.getLocation(_0x54a797);
        };
        _0x5c0928._onTouchMove = function (_0x167800) {
          if (_0x3ac901.isMobile) {
            var _0x46ac0e = this._vcam.body.freelook.rotateTouchID;
            var _0x359e2d = _0x167800.getAllTouches();
            _0x359e2d.length > _0x46ac0e + 1 ? (this._getPreviousLocation(_0x359e2d[_0x46ac0e], _0x451208), this._getPreviousLocation(_0x359e2d[_0x46ac0e + 1], _0x1d7d0f), this._getLocation(_0x359e2d[_0x46ac0e], _0x2afe18), this._getLocation(_0x359e2d[_0x46ac0e + 1], _0x4b7329), this._distanceScale *= this._calculateDistanceScale(_0x170688.distance(_0x451208, _0x1d7d0f) / _0x170688.distance(_0x2afe18, _0x4b7329)), _0x451208.add(_0x1d7d0f).multiplyScalar(0.5), _0x2afe18.add(_0x4b7329).multiplyScalar(0.5), this._setPanDelta(this._calculatePanDelta(_0x4c2c7a, _0x451208, _0x2afe18))) : _0x359e2d.length > _0x46ac0e && this._rotateDelta.add(this._calculateRotateDelta(_0x4c2c7a, this._getPreviousLocation(_0x359e2d[_0x46ac0e], _0x2afe18), this._getLocation(_0x359e2d[_0x46ac0e], _0x4b7329)));
          }
        };
        _0x5c0928._onTouchEnd = function (_0x3307e7) {};
        _0x5c0928._onMouseDown = function (_0x25764e) {
          this._button = _0x25764e.getButton();
        };
        _0x5c0928._onMouseUp = function (_0xb9baf6) {
          this._button = -1;
        };
        _0x5c0928._onMouseWheel = function (_0x48e920) {
          _0x48e920.getScrollY() > 0 ? this._distanceScale *= this._calculateDistanceScale(0.95) : _0x48e920.getScrollY() < 0 && (this._distanceScale *= this._calculateDistanceScale(1.0526315789473684));
        };
        _0x5c0928._onMouseMove = function (_0x4841f7) {
          {
            switch (this._button) {
              case _0x490fd7.BUTTON_LEFT:
                this._rotateDelta.add(this._calculateRotateDelta(_0x4c2c7a, this._getPreviousLocation(_0x4841f7, _0x2afe18), this._getLocation(_0x4841f7, _0x4b7329)));
                break;
              case _0x490fd7.BUTTON_MIDDLE:
                this._setPanDelta(this._calculatePanDelta(_0x4c2c7a, this._getPreviousLocation(_0x4841f7, _0x2afe18), this._getLocation(_0x4841f7, _0x4b7329)));
            }
          }
        };
        _0x5c0928._setPanDelta = function (_0x349162) {
          this._panDelta.add(_0x349162);
        };
        _0x5c0928._calculateDistanceScale = function (_0x4d1bb3) {
          return _0x4d1bb3;
        };
        _0x5c0928._calculateRotateDelta = function (_0x3e5c92, _0x5a0bf4, _0x2950e8) {
          var _0x3ba26e = this._vcam.body.freelook;
          _0x170688.subtract(_0x3e5c92, _0x2950e8, _0x5a0bf4).multiplyScalar(2 * _0x3ba26e.rotateSpeed * Math.PI / _0x5e4546.getVisibleSizeInPixel().height);
          return _0x3e5c92;
        };
        _0x5c0928._calculatePanDelta = function (_0x1fb2d1, _0x30d390, _0x35c9f3) {
          var _0x44a8e3 = this._vcam.body.freelook;
          _0x170688.subtract(_0x1fb2d1, _0x35c9f3, _0x30d390).multiplyScalar(_0x44a8e3.panSpeed / _0x5e4546.getVisibleSizeInPixel().height);
          return _0x1fb2d1;
        };
        _0x5c0928.updateCamera = function (_0x54b2f5) {
          var _0x204c60 = this._vcam;
          var _0x24f8ef = _0x204c60.body.freelook;
          var _0x3917f8 = 0;
          if (_0x3a4cc6(_0x204c60.lookAt)) {
            _0x17e0fa.add(_0x16e6bb, _0x204c60.lookAt.worldPosition, _0x204c60.aim.trackedObjectOffset);
            var _0x230f76 = _0x17b7f8(1, 0, _0x24f8ef.rotateSmoothing, _0x54b2f5);
            if ((_0x2680c7(this._rotateDelta.x) + _0x2680c7(this._rotateDelta.y) > 0.01 || 1 !== this._distanceScale || this._needUpdateRotate) && (_0x17e0fa.subtract(_0x4d8cec, _0x204c60.node.worldPosition, _0x16e6bb), this._spherical.setFromVec3(_0x4d8cec), _0x24f8ef.forbidX || (this._spherical.theta = _0x3dfc1f(this._spherical.theta - this._rotateDelta.x * (1 - _0x230f76), _0x24f8ef.thetaMin, _0x24f8ef.thetaMax)), _0x24f8ef.forbidY || (this._spherical.phi = _0x3dfc1f(this._spherical.phi + this._rotateDelta.y * (1 - _0x230f76), _0x24f8ef.phiMin, _0x24f8ef.phiMax)), _0x24f8ef.forbidZ || (this._spherical.radius = _0x3dfc1f(this._spherical.radius * this._distanceScale, _0x24f8ef.distanceMin, _0x24f8ef.distanceMax)), _0x230371(_0x4d8cec, this._spherical), _0x204c60.node.worldPosition = _0x4d8cec.add(_0x16e6bb), _0x3917f8 = this._needUpdateRotate || 1 !== this._distanceScale ? 1 : 2, this._needUpdateRotate = false, this._rotateDelta.multiplyScalar(_0x230f76), this._distanceScale = 1), !_0x24f8ef.forbidPan && _0x2680c7(this._panDelta.x) + _0x2680c7(this._panDelta.y) > 0.01) {
              _0x17e0fa.subtract(_0x4d8cec, _0x204c60.node.worldPosition, _0x16e6bb);
              _0xb14ab6(_0x131754, _0x204c60.node.worldMatrix, 0);
              _0xb14ab6(_0x189473, _0x204c60.node.worldMatrix, 1);
              var _0x12ab36 = 2 * _0x4d8cec.length() * _0x4efc0e(_0x2cb6e5(0.5 * _0x204c60.lens.fov));
              var _0x178b68 = _0x204c60.aim.trackedObjectOffset;
              _0x178b68.subtract(_0x131754.multiplyScalar(this._panDelta.x * (1 - _0x230f76) * _0x12ab36));
              _0x178b68.subtract(_0x189473.multiplyScalar(this._panDelta.y * (1 - _0x230f76) * _0x12ab36));
              _0x17e0fa.add(_0x16e6bb, _0x204c60.lookAt.worldPosition, _0x178b68);
              _0x204c60.node.worldPosition = _0x4d8cec.add(_0x16e6bb);
              this._panDelta.multiplyScalar(_0x230f76);
              _0x3917f8 = 1;
            }
          }
          _0x3a4cc6(_0x204c60.follow) && (1 === _0x3917f8 ? _0x17e0fa.subtract(_0x24f8ef.followOffset, _0x204c60.node.worldPosition, _0x204c60.follow.worldPosition) : 2 === _0x3917f8 && (_0x17e0fa.subtract(_0x375c05, _0x24f8ef.followOffset, _0x204c60.aim.trackedObjectOffset), _0x17e0fa.subtract(_0x4d8cec, _0x17e0fa.subtract(_0x16e6bb, _0x204c60.node.worldPosition, _0x204c60.follow.worldPosition), _0x204c60.aim.trackedObjectOffset), _0x17e0fa.add(_0x24f8ef.followOffset, _0x4d8cec.normalize().multiplyScalar(_0x375c05.length()), _0x204c60.aim.trackedObjectOffset)), _0x17e0fa.add(_0x4d8cec, _0x204c60.follow.worldPosition, _0x24f8ef.followOffset), _0x24f8ef.followDamping > 0 ? _0x28570d(_0x16e6bb, _0x204c60.node.worldPosition, _0x4d8cec, _0x24f8ef.followDamping, _0x54b2f5) : _0x16e6bb.set(_0x4d8cec), _0x162ebe(_0x16e6bb, _0x204c60.node.worldPosition) || (_0x204c60.node.worldPosition = _0x16e6bb));
        };
        return _0x1b9afb;
      }(_0x52c24a));
      _0x338235._RF.pop();
    }
  };
});
System.register("chunks:///_virtual/gameStore.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./index.mjs_cjs=&original=.js", "./WebNet.ts", "./Crypto.ts", "./UIFast.ts", "./store.ts", "./Utils.ts", "./NetTime.ts", "./index.js"], function (_0x2cfb9c) {
  var _0x2a6110;
  var _0x4ffa7c;
  var _0x3a1089;
  var _0x227c62;
  var _0x28bda6;
  var _0x3eeabe;
  var _0xca6a93;
  var _0x3646f5;
  var _0x9049dd;
  var _0x35329c;
  var _0x20391f;
  var _0x3d7045;
  var _0x15955e;
  var _0x1e5168;
  var _0x2efad3;
  return {
    setters: [function (_0x517133) {
      _0x2a6110 = _0x517133.asyncToGenerator;
      _0x4ffa7c = _0x517133.regeneratorRuntime;
    }, function (_0x4937e2) {
      _0x3a1089 = _0x4937e2.cclegacy;
    }, null, function (_0x3b15a0) {
      {
        _0x227c62 = _0x3b15a0.sendWebNet;
        _0x28bda6 = _0x3b15a0.WebNetName;
        _0x3eeabe = _0x3b15a0.creditsCost;
      }
    }, function (_0x18df3b) {
      _0xca6a93 = _0x18df3b.AESDecrypt;
      _0x3646f5 = _0x18df3b.AESEncrypt;
    }, function (_0x3d07a1) {
      _0x9049dd = _0x3d07a1.hideGlobalDisable;
      _0x35329c = _0x3d07a1.showGlobalDisable;
      _0x20391f = _0x3d07a1.showToast;
    }, function (_0x20bd65) {
      _0x3d7045 = _0x20bd65.default;
    }, function (_0x420c8f) {
      _0x15955e = _0x420c8f.prefixInteger;
    }, function (_0x58df24) {
      _0x1e5168 = _0x58df24.NetTime;
    }, function (_0x4beede) {
      _0x2efad3 = _0x4beede.default;
    }],
    execute: function () {
      _0x3a1089._RF.push({}, "69f786kaFpDMLGOhAnAhwS/", "gameStore", undefined);
      var _0x353503 = _0x2efad3.makeAutoObservable;
      var _0xd005bb = 0;
      _0x2cfb9c("default", _0x353503(new (function () {
        function _0x2aab1f() {}
        var _0x40381a = _0x2aab1f.prototype;
        _0x40381a.putLuck = function () {
          var _0x37e717 = _0x2a6110(_0x4ffa7c().mark(function _0x2b2ca1() {
            var _0x16673e;
            var _0x5eb066;
            var _0x26d9a6;
            var _0x19ab37;
            var _0x451852;
            var _0x1138cc;
            var _0x254e0f;
            var _0x530e50;
            return _0x4ffa7c().wrap(function (_0x6aad91) {
              {
                for (;;) {
                  switch (_0x6aad91.prev = _0x6aad91.next) {
                    case 0:
                      if (!(_0x3d7045.homeInfo.currentEnergy.initEnergy <= 0)) {
                        _0x6aad91.next = 4;
                        break;
                      }
                      _0x20391f("体力不足");
                      _0x3d7045.updateEnergy();
                      return _0x6aad91.abrupt("return", null);
                    case 4:
                      if (_0x16673e = {}, !(_0x3d7045.homeInfo.normalNum <= 0)) {
                        _0x6aad91.next = 21;
                        break;
                      }
                      if (!(_0x3d7045.homeInfo.remainCredits < _0x3d7045.homeInfo.eachLuckCredits)) {
                        _0x6aad91.next = 9;
                        break;
                      }
                      _0x20391f("积分不足");
                      return _0x6aad91.abrupt("return", null);
                    case 9:
                      _0x35329c();
                      _0x6aad91.next = 12;
                      return _0x3eeabe("coin", "putLuck", "put_luck_desc", _0x3d7045.homeInfo.eachLuckCredits);
                    case 12:
                      if (_0x5eb066 = _0x6aad91.sent, _0x26d9a6 = _0x5eb066.success, _0x19ab37 = _0x5eb066.ticket, _0x26d9a6) {
                        _0x6aad91.next = 19;
                        break;
                      }
                      _0x9049dd();
                      _0x20391f("点太快啦！");
                      return _0x6aad91.abrupt("return", null);
                    case 19:
                      _0x16673e.ticketNum = _0x19ab37;
                      _0x3d7045.homeInfo.remainCredits -= _0x3d7045.homeInfo.eachLuckCredits;
                    case 21:
                      _0x35329c();
                      _0x6aad91.next = 24;
                      return _0x227c62(_0x28bda6.putLuck, _0x16673e);
                    case 24:
                      if (_0x451852 = _0x6aad91.sent, _0x1138cc = _0x451852.success, _0x254e0f = _0x451852.data, _0x9049dd(), _0x1138cc) {
                        _0x6aad91.next = 30;
                        break;
                      }
                      return _0x6aad91.abrupt("return", null);
                    case 30:
                      _0x530e50 = _0x254e0f;
                      try {
                        _0x530e50 = JSON.parse(_0xca6a93(_0x530e50, "6FDCE02EBB43C3A8", "cDOiBC1n2QrkAY2P"));
                      } catch (_0x1552ab) {
                        console.log("解析失败", _0x1552ab);
                      }
                      _0x3d7045.homeInfo.currentEnergy.initEnergy--;
                      _0x3d7045.homeInfo.currentEnergy.initEnergy % 5 == 0 && _0x3d7045.updateEnergy();
                      _0x3d7045.homeInfo.normalNum = _0x530e50.normalNum;
                      _0x3d7045.homeInfo.goldNum = _0x530e50.goldNum;
                      return _0x6aad91.abrupt("return", _0x530e50);
                    case 37:
                    case "end":
                      return _0x6aad91.stop();
                  }
                }
              }
            }, _0x2b2ca1);
          }));
          return function () {
            return _0x37e717.apply(this, arguments);
          };
        }();
        _0x40381a.report = function () {
          var _0xe0295e = _0x2a6110(_0x4ffa7c().mark(function _0x2598eb(_0x5a40cc) {
            var _0x1bfb89;
            var _0x1cc550;
            var _0x3963c8;
            var _0x42fc49;
            var _0x61d1c1;
            var _0xa3ea15;
            var _0x459ae5;
            var _0x2afcc4;
            var _0x567b74;
            var _0x443a9c;
            var _0x57d716;
            var _0x531ac2;
            var _0x384f25;
            var _0x5508e5;
            return _0x4ffa7c().wrap(function (_0x23c36b) {
              for (;;) {
                switch (_0x23c36b.prev = _0x23c36b.next) {
                  case 0:
                    _0x1bfb89 = _0x5a40cc.lossGoldNum;
                    _0x1cc550 = _0x5a40cc.lossNormalNum;
                    _0x3963c8 = _0x5a40cc.acquireGoldNum;
                    _0x42fc49 = _0x5a40cc.acquireNormalNum;
                    _0x23c36b.next = 3;
                    return _0x227c62(_0x28bda6.currentTime);
                  case 3:
                    if (_0x61d1c1 = _0x23c36b.sent, _0xa3ea15 = _0x61d1c1.success, _0x459ae5 = _0x61d1c1.data, _0x2afcc4 = undefined === _0x459ae5 ? Date.now() : _0x459ae5, _0xa3ea15) {
                      _0x23c36b.next = 9;
                      break;
                    }
                    return _0x23c36b.abrupt("return", null);
                  case 9:
                    _0x1e5168.ins.setTime(_0x2afcc4);
                    _0x567b74 = {
                      lossGoldNum: _0x1bfb89,
                      lossNormalNum: _0x1cc550,
                      acquireGoldNum: _0x3963c8,
                      acquireNormalNum: _0x42fc49,
                      uniqueOrderNo: ("xxxx-xxxx-xxxx-xxxx-xxxx-xxxx-" + _0x15955e(_0xd005bb++ % 100, 2)).replace(/[x]/g, function (_0x179908) {
                        return (16 * Math.random() | 0).toString(16);
                      }),
                      timestamp: _0x2afcc4
                    };
                    console.log("上报", _0x567b74);
                    _0x443a9c = _0x3646f5(JSON.stringify(_0x567b74), "6FDCE02EBB43C3A8", "cDOiBC1n2QrkAY2P");
                    _0x23c36b.next = 15;
                    return _0x227c62(_0x28bda6.reportResult, {
                      param: _0x443a9c
                    }, {
                      isGet: false
                    });
                  case 15:
                    if (_0x57d716 = _0x23c36b.sent, _0x531ac2 = _0x57d716.success, _0x384f25 = _0x57d716.data, _0x531ac2) {
                      _0x23c36b.next = 20;
                      break;
                    }
                    return _0x23c36b.abrupt("return", null);
                  case 20:
                    _0x5508e5 = _0x384f25;
                    try {
                      _0x5508e5 = JSON.parse(_0xca6a93(_0x5508e5, "6FDCE02EBB43C3A8", "cDOiBC1n2QrkAY2P"));
                    } catch (_0x47824c) {
                      console.log("解析失败", _0x47824c);
                    }
                    _0x3d7045.homeInfo.normalNum = _0x5508e5.normalNum;
                    _0x3d7045.homeInfo.goldNum = _0x5508e5.goldNum;
                    return _0x23c36b.abrupt("return", _0x5508e5);
                  case 25:
                  case "end":
                    return _0x23c36b.stop();
                }
              }
            }, _0x2598eb);
          }));
          return function (_0x286aa7) {
            return _0xe0295e.apply(this, arguments);
          };
        }();
        _0x40381a.draw = function () {
          var _0x223063 = _0x2a6110(_0x4ffa7c().mark(function _0x3c4391(_0x44ace6) {
            var _0x5b0093;
            var _0x55b9da;
            var _0x5dc2ba;
            var _0xda1ecc;
            return _0x4ffa7c().wrap(function (_0x40163a) {
              for (;;) {
                switch (_0x40163a.prev = _0x40163a.next) {
                  case 0:
                    _0x40163a.next = 2;
                    return _0x227c62(_0x28bda6.draw, {
                      drawOrderNo: _0x44ace6
                    });
                  case 2:
                    if (_0x5b0093 = _0x40163a.sent, _0x55b9da = _0x5b0093.success, _0x5dc2ba = _0x5b0093.data, _0x55b9da) {
                      _0x40163a.next = 7;
                      break;
                    }
                    return _0x40163a.abrupt("return", null);
                  case 7:
                    _0xda1ecc = _0x5dc2ba;
                    try {
                      _0xda1ecc = JSON.parse(_0xca6a93(_0xda1ecc, "6FDCE02EBB43C3A8", "cDOiBC1n2QrkAY2P"));
                    } catch (_0x41398b) {
                      console.log("解析失败", _0x41398b);
                    }
                    _0x3d7045.homeInfo.normalNum = _0xda1ecc.normalNum;
                    _0x3d7045.homeInfo.goldNum = _0xda1ecc.goldNum;
                    return _0x40163a.abrupt("return", _0xda1ecc);
                  case 12:
                  case "end":
                    return _0x40163a.stop();
                }
              }
            }, _0x3c4391);
          }));
          return function (_0x530230) {
            return _0x223063.apply(this, arguments);
          };
        }();
        return _0x2aab1f;
      }())()));
      _0x3a1089._RF.pop();
    }
  };
});
System.register("chunks:///_virtual/GameTest.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], function (_0x5bea52) {
  var _0x431221;
  var _0x118187;
  var _0xa3dddb;
  var _0x6f5eef;
  var _0x34ee82;
  var _0x58f214;
  var _0x2ddba9;
  var _0x4feeaa;
  var _0x28f06f;
  return {
    setters: [function (_0x4da0d3) {
      _0x431221 = _0x4da0d3.applyDecoratedDescriptor;
      _0x118187 = _0x4da0d3.inheritsLoose;
      _0xa3dddb = _0x4da0d3.initializerDefineProperty;
      _0x6f5eef = _0x4da0d3.assertThisInitialized;
    }, function (_0x1d678e) {
      _0x34ee82 = _0x1d678e.cclegacy;
      _0x58f214 = _0x1d678e._decorator;
      _0x2ddba9 = _0x1d678e.Label;
      _0x4feeaa = _0x1d678e.Node;
      _0x28f06f = _0x1d678e.Component;
    }],
    execute: function () {
      var _0x44689c;
      var _0x4985fa;
      var _0x331c02;
      var _0x44261a;
      var _0x152d22;
      var _0x111c0e;
      var _0x54a28f;
      _0x34ee82._RF.push({}, "4e04cp4ueRP66ut5KuWBFx6", "GameTest", undefined);
      var _0x2ded40 = _0x58f214.ccclass;
      var _0x3f7468 = _0x58f214.property;
      _0x5bea52("GameTest", (_0x44689c = _0x2ded40("GameTest"), _0x4985fa = _0x3f7468(_0x2ddba9), _0x331c02 = _0x3f7468(_0x4feeaa), _0x44689c((_0x111c0e = _0x431221((_0x152d22 = function (_0x2345e4) {
        function _0x387599() {
          for (var _0x419c15, _0x2e8534 = arguments.length, _0x76a989 = new Array(_0x2e8534), _0x4110cc = 0; _0x4110cc < _0x2e8534; _0x4110cc++) {
            _0x76a989[_0x4110cc] = arguments[_0x4110cc];
          }
          _0x419c15 = _0x2345e4.call.apply(_0x2345e4, [this].concat(_0x76a989)) || this;
          _0xa3dddb(_0x419c15, "ballNum", _0x111c0e, _0x6f5eef(_0x419c15));
          _0xa3dddb(_0x419c15, "ballRoot", _0x54a28f, _0x6f5eef(_0x419c15));
          return _0x419c15;
        }
        _0x118187(_0x387599, _0x2345e4);
        var _0x1b6823 = _0x387599.prototype;
        _0x1b6823.start = function () {};
        _0x1b6823.lateUpdate = function () {
          this.ballNum.string = "球个数: " + this.ballRoot.children.length;
        };
        return _0x387599;
      }(_0x28f06f)).prototype, "ballNum", [_0x4985fa], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x54a28f = _0x431221(_0x152d22.prototype, "ballRoot", [_0x331c02], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x44261a = _0x152d22)) || _0x44261a));
      _0x34ee82._RF.pop();
    }
  };
});
System.register("chunks:///_virtual/GameUI.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./decorators.ts", "./store.ts", "./UIFast.ts", "./RankScene.ts", "./PrizeScene.ts", "./JinFuStoreScene.ts", "./ExchangePowerPanel.ts", "./RuleScene.ts", "./AppTool.ts", "./NetTime.ts", "./index.mjs_cjs=&original=.js", "./WebNet.ts", "./index.js"], function (_0x351711) {
  var _0x2aa428;
  var _0x2f12cc;
  var _0x59f2d9;
  var _0x2bbce4;
  var _0x24453b;
  var _0x2fcfa2;
  var _0x4a2562;
  var _0x24fbbb;
  var _0x249da0;
  var _0x4b0e05;
  var _0xf636e2;
  var _0x25abf5;
  var _0x2cd804;
  var _0x5244d9;
  var _0x4fda57;
  var _0x38b1ab;
  var _0x4712ba;
  var _0x4bfec1;
  var _0x555bd0;
  var _0xa7c50d;
  var _0x3e2379;
  var _0x549da0;
  var _0x5a4858;
  var _0x38c97e;
  var _0x1abcf3;
  var _0x2f937b;
  var _0x19dec5;
  var _0x47d001;
  var _0x54bb21;
  var _0x7ba128;
  var _0x2240cb;
  var _0x31091d;
  var _0x54dfc6;
  var _0x54039b;
  var _0x1522b0;
  var _0x4def4a;
  var _0x4fecb8;
  return {
    setters: [function (_0x44c000) {
      _0x2aa428 = _0x44c000.applyDecoratedDescriptor;
      _0x2f12cc = _0x44c000.inheritsLoose;
      _0x59f2d9 = _0x44c000.initializerDefineProperty;
      _0x2bbce4 = _0x44c000.assertThisInitialized;
      _0x24453b = _0x44c000.asyncToGenerator;
      _0x2fcfa2 = _0x44c000.regeneratorRuntime;
    }, function (_0x15feeb) {
      _0x4a2562 = _0x15feeb.cclegacy;
      _0x24fbbb = _0x15feeb._decorator;
      _0x249da0 = _0x15feeb.Label;
      _0x4b0e05 = _0x15feeb.Node;
      _0xf636e2 = _0x15feeb.Prefab;
      _0x25abf5 = _0x15feeb.ProgressBar;
      _0x2cd804 = _0x15feeb.SpriteFrame;
      _0x5244d9 = _0x15feeb.SpriteRenderer;
      _0x4fda57 = _0x15feeb.NodePool;
      _0x38b1ab = _0x15feeb.Button;
      _0x4712ba = _0x15feeb.Tween;
      _0x4bfec1 = _0x15feeb.tween;
      _0x555bd0 = _0x15feeb.instantiate;
      _0xa7c50d = _0x15feeb.Animation;
      _0x3e2379 = _0x15feeb.Component;
    }, function (_0x80ab0c) {
      _0x549da0 = _0x80ab0c.observer;
      _0x5a4858 = _0x80ab0c.render;
    }, function (_0x4705b8) {
      {
        _0x38c97e = _0x4705b8.default;
      }
    }, function (_0x1afde) {
      _0x1abcf3 = _0x1afde.changeScene;
      _0x2f937b = _0x1afde.showPanel;
      _0x19dec5 = _0x1afde.showToast;
    }, function (_0xa94178) {
      _0x47d001 = _0xa94178.RankScence;
    }, function (_0x1293b4) {
      _0x54bb21 = _0x1293b4.PrizeScene;
    }, function (_0x1f08a9) {
      _0x7ba128 = _0x1f08a9.JinFuStoreScene;
    }, function (_0x474e12) {
      _0x2240cb = _0x474e12.default;
    }, function (_0x49ba72) {
      _0x31091d = _0x49ba72.RuleScene;
    }, function (_0x4c5698) {
      _0x54dfc6 = _0x4c5698.miniGoUrl;
    }, function (_0x3938c0) {
      {
        _0x54039b = _0x3938c0.NetTime;
      }
    }, null, function (_0x1cae0e) {
      _0x1522b0 = _0x1cae0e.sendLog;
      _0x4def4a = _0x1cae0e.LOG_TYPE;
    }, function (_0x5b8f95) {
      _0x4fecb8 = _0x5b8f95.default;
    }],
    execute: function () {
      var _0x1af132;
      var _0x2e339a;
      var _0x1d0bd4;
      var _0x48f340;
      var _0x2b6bfb;
      var _0xdf1339;
      var _0x1e722a;
      var _0x422f24;
      var _0x173877;
      var _0x411501;
      var _0x9de8af;
      var _0x53d60f;
      var _0x514553;
      var _0x5ac41d;
      var _0x396aaa;
      var _0x1f76dc;
      var _0x354abb;
      var _0x2347c7;
      var _0x216280;
      var _0x199a00;
      var _0x43ea78;
      var _0x649afe;
      var _0x3ea9b8;
      var _0x44201d;
      var _0x6cfb6f;
      var _0x2a2f12;
      var _0x3d0d82;
      var _0x384513;
      var _0x42ff00;
      var _0x118397;
      var _0x5ed05c;
      var _0x1d391d;
      var _0x1fa03f;
      var _0x18f62a;
      var _0x1774eb;
      var _0x2bdc78;
      var _0x5660b1;
      var _0x13c6f1;
      var _0xa5ecc6;
      var _0x268fd0;
      var _0x1dd4ed;
      var _0x485ea2;
      var _0x32fa65;
      var _0x331ea5;
      var _0xc02d;
      var _0x121625;
      var _0x2003ff;
      var _0x3ac72b;
      var _0x1034e1;
      var _0x231a4b;
      var _0x55e55d;
      var _0x436578;
      var _0xad54ce;
      var _0x4a7eb8;
      var _0x453b06;
      _0x4a2562._RF.push({}, "b9ddc39fQJILrSNaZOumUGp", "GameUI", undefined);
      var _0x2dd8f0 = _0x4fecb8.reaction;
      var _0x5d677b = _0x24fbbb.ccclass;
      var _0x577482 = _0x24fbbb.property;
      _0x351711("GameUI", (_0x1af132 = _0x5d677b("GameUI"), _0x2e339a = _0x577482(_0x249da0), _0x1d0bd4 = _0x577482(_0x249da0), _0x48f340 = _0x577482(_0x4b0e05), _0x2b6bfb = _0x577482(_0x4b0e05), _0xdf1339 = _0x577482(_0x4b0e05), _0x1e722a = _0x577482(_0x4b0e05), _0x422f24 = _0x577482(_0x4b0e05), _0x173877 = _0x577482(_0x4b0e05), _0x411501 = _0x577482(_0x4b0e05), _0x9de8af = _0x577482(_0x249da0), _0x53d60f = _0x577482(_0x249da0), _0x514553 = _0x577482(_0x4b0e05), _0x5ac41d = _0x577482(_0xf636e2), _0x396aaa = _0x577482(_0xf636e2), _0x1f76dc = _0x577482(_0x25abf5), _0x354abb = _0x577482({
        type: [_0x2cd804],
        displayName: "数字切图"
      }), _0x2347c7 = _0x577482({
        type: _0x4b0e05,
        displayName: "倒计时"
      }), _0x216280 = _0x577482({
        type: _0x5244d9,
        displayName: "数字1"
      }), _0x199a00 = _0x577482({
        type: _0x5244d9,
        displayName: "数字2"
      }), _0x43ea78 = _0x577482({
        type: _0x5244d9,
        displayName: "数字3"
      }), _0x649afe = _0x577482({
        type: _0x5244d9,
        displayName: "数字4"
      }), _0x3ea9b8 = _0x577482({
        type: _0x4b0e05,
        displayName: "翻倍时间结束奖励"
      }), _0x44201d = _0x577482({
        type: _0x249da0,
        displayName: "翻倍时间福气数量"
      }), _0x6cfb6f = _0x577482({
        type: _0x249da0,
        displayName: "翻倍时间财气数量"
      }), _0x2a2f12 = _0x577482(_0x4b0e05), _0x3d0d82 = _0x577482(_0x249da0), _0x549da0(_0x384513 = _0x1af132((_0x118397 = _0x2aa428((_0x42ff00 = function (_0x1cbab6) {
        function _0x3b4d71() {
          {
            for (var _0x312343, _0x2433a3 = arguments.length, _0x3e773c = new Array(_0x2433a3), _0x303328 = 0; _0x303328 < _0x2433a3; _0x303328++) {
              _0x3e773c[_0x303328] = arguments[_0x303328];
            }
            _0x312343 = _0x1cbab6.call.apply(_0x1cbab6, [this].concat(_0x3e773c)) || this;
            _0x59f2d9(_0x312343, "creditTxt", _0x118397, _0x2bbce4(_0x312343));
            _0x59f2d9(_0x312343, "energyTxt", _0x5ed05c, _0x2bbce4(_0x312343));
            _0x59f2d9(_0x312343, "serviceBtn", _0x1d391d, _0x2bbce4(_0x312343));
            _0x59f2d9(_0x312343, "ruleBtn", _0x1fa03f, _0x2bbce4(_0x312343));
            _0x59f2d9(_0x312343, "prizeBtn", _0x18f62a, _0x2bbce4(_0x312343));
            _0x59f2d9(_0x312343, "powerBtn", _0x1774eb, _0x2bbce4(_0x312343));
            _0x59f2d9(_0x312343, "creditBtn", _0x2bdc78, _0x2bbce4(_0x312343));
            _0x59f2d9(_0x312343, "exchangeBtn", _0x5660b1, _0x2bbce4(_0x312343));
            _0x59f2d9(_0x312343, "rankBtn", _0x13c6f1, _0x2bbce4(_0x312343));
            _0x59f2d9(_0x312343, "putCreditTxt", _0xa5ecc6, _0x2bbce4(_0x312343));
            _0x59f2d9(_0x312343, "normalBallTxt", _0x268fd0, _0x2bbce4(_0x312343));
            _0x59f2d9(_0x312343, "normalBallTip", _0x1dd4ed, _0x2bbce4(_0x312343));
            _0x59f2d9(_0x312343, "normalAdd", _0x485ea2, _0x2bbce4(_0x312343));
            _0x59f2d9(_0x312343, "goldAdd", _0x32fa65, _0x2bbce4(_0x312343));
            _0x59f2d9(_0x312343, "energyProg", _0x331ea5, _0x2bbce4(_0x312343));
            _0x59f2d9(_0x312343, "countSpriteFrame", _0xc02d, _0x2bbce4(_0x312343));
            _0x59f2d9(_0x312343, "countDownNodes", _0x121625, _0x2bbce4(_0x312343));
            _0x59f2d9(_0x312343, "num1", _0x2003ff, _0x2bbce4(_0x312343));
            _0x59f2d9(_0x312343, "num2", _0x3ac72b, _0x2bbce4(_0x312343));
            _0x59f2d9(_0x312343, "num3", _0x1034e1, _0x2bbce4(_0x312343));
            _0x59f2d9(_0x312343, "num4", _0x231a4b, _0x2bbce4(_0x312343));
            _0x59f2d9(_0x312343, "doubleAward", _0x55e55d, _0x2bbce4(_0x312343));
            _0x59f2d9(_0x312343, "fuqiAward", _0x436578, _0x2bbce4(_0x312343));
            _0x59f2d9(_0x312343, "caiqiAward", _0xad54ce, _0x2bbce4(_0x312343));
            _0x59f2d9(_0x312343, "rankTip", _0x4a7eb8, _0x2bbce4(_0x312343));
            _0x59f2d9(_0x312343, "goldNum", _0x453b06, _0x2bbce4(_0x312343));
            _0x312343.redPool = new _0x4fda57();
            _0x312343.goldPool = new _0x4fda57();
            _0x312343.countDown = 0;
            _0x312343.normalCount = 0;
            _0x312343.goldCount = 0;
            _0x312343.reactionDisposer = null;
            return _0x312343;
          }
        }
        _0x2f12cc(_0x3b4d71, _0x1cbab6);
        var _0x2f913e = _0x3b4d71.prototype;
        _0x2f913e.onLoad = function () {
          this.serviceBtn.on(_0x38b1ab.EventType.CLICK, this.clickService, this);
          this.ruleBtn.on(_0x38b1ab.EventType.CLICK, this.clickRule, this);
          this.prizeBtn.on(_0x38b1ab.EventType.CLICK, this.clickPrize, this);
          this.powerBtn.on(_0x38b1ab.EventType.CLICK, this.clickPower, this);
          this.creditBtn.on(_0x38b1ab.EventType.CLICK, this.clickCredit, this);
          this.exchangeBtn.on(_0x38b1ab.EventType.CLICK, this.clickExchange, this);
          this.rankBtn.on(_0x38b1ab.EventType.CLICK, this.clickRank, this);
          _0x1522b0(_0x4def4a.EXPOSURE, 2);
          _0x1522b0(_0x4def4a.EXPOSURE, 3);
          _0x1522b0(_0x4def4a.EXPOSURE, 5);
        };
        _0x2f913e.start = function () {
          var _0x3f8fff = this;
          this.setEnergyCd();
          this.setCountDown();
          this.reactionDisposer = _0x2dd8f0(function () {
            {
              return _0x38c97e.updateId;
            }
          }, _0x24453b(_0x2fcfa2().mark(function _0x2745cf(_0x28d143) {
            return _0x2fcfa2().wrap(function (_0x2105ed) {
              for (;;) {
                switch (_0x2105ed.prev = _0x2105ed.next) {
                  case 0:
                    _0x3f8fff.setEnergyCd();
                    _0x3f8fff.setCountDown();
                  case 2:
                  case "end":
                    return _0x2105ed.stop();
                }
              }
            }, _0x2745cf);
          })));
        };
        _0x2f913e.onDestroy = function () {
          var _0x3944ed;
          null == (_0x3944ed = this.reactionDisposer) || _0x3944ed.call(this);
        };
        _0x2f913e.render = function () {
          var _0xf05915 = _0x38c97e.homeInfo || {};
          var _0x38f4bd = _0xf05915.remainCredits;
          var _0x1f01dc = _0xf05915.currentEnergy;
          var _0x571f88 = _0xf05915.normalNum;
          var _0x250189 = _0xf05915.eachLuckCredits;
          this.creditTxt.string = "积分:" + (_0x38f4bd > 999999 ? "999999+" : _0x38f4bd);
          this.energyTxt.string = "体力x " + _0x1f01dc.initEnergy;
          this.normalBallTxt.string = " × " + _0x571f88;
          this.putCreditTxt.string = _0x250189 + "积分/次";
          this.putCreditTxt.node.active = !(this.normalBallTip.active = _0x571f88 > 0);
          this.goldNum.string = "财气：" + _0x38c97e.homeInfo.goldNum;
          this.rankTip.active = _0x38c97e.homeInfo.boolRankChange;
        };
        _0x2f913e.setEnergyCd = function () {
          var _0x2dfa9b = this;
          var _0x82f6ac = (_0x38c97e.homeInfo || {}).currentEnergy;
          var _0x127972 = _0x82f6ac.initEnergy;
          var _0x4a2964 = _0x82f6ac.eachEnergyTime;
          var _0x2f0343 = _0x82f6ac.energyLimit;
          var _0x476ad8 = _0x82f6ac.fullEnergyTime;
          var _0x15668b = _0x54039b.now();
          if (this.unschedule(this.addEnergyCd), _0x4712ba.stopAllByTarget(this.energyProg), _0x15668b < _0x476ad8) {
            var _0x228e57 = (_0x476ad8 - _0x15668b) / 1000 % _0x4a2964;
            _0x4bfec1(this.energyProg).set({
              progress: (_0x4a2964 - _0x228e57) / _0x4a2964
            }).to(_0x228e57, {
              progress: 1
            }).call(function () {
              _0x2dfa9b.addEnergyCd();
              _0x2dfa9b.schedule(_0x2dfa9b.addEnergyCd, _0x4a2964, _0x2f0343 - _0x127972 - 1);
            }).start();
          }
        };
        _0x2f913e.setCountDown = function () {
          var _0x5145ce;
          console.log("%c执行了\n", "font-size: 20px", _0x38c97e.homeInfo);
          var _0x568afc = (null == (_0x5145ce = _0x38c97e.homeInfo) ? undefined : _0x5145ce.currentMultiple) || {};
          var _0x195bb6 = _0x568afc.doubleEndTime;
          var _0x4401e4 = _0x568afc.awardNormalNum;
          var _0x3c9c6b = _0x568afc.awardGoldNum;
          var _0x421535 = _0x54039b.now();
          _0x195bb6 > _0x421535 && (this.countDownNodes.active = true, this.doubleAward.active = true, this.countDown = _0x195bb6 - _0x421535, this.setNormalCount(_0x4401e4), this.setGoldCount(_0x3c9c6b));
        };
        _0x2f913e.setNormalCount = function (_0x57d29d) {
          undefined === _0x57d29d && (_0x57d29d = 0);
          this.normalCount = _0x57d29d;
          this.fuqiAward.string = "+ " + this.normalCount;
        };
        _0x2f913e.setGoldCount = function (_0x3b1d9f) {
          undefined === _0x3b1d9f && (_0x3b1d9f = 0);
          this.goldCount = _0x3b1d9f;
          this.caiqiAward.string = "+ " + this.goldCount;
        };
        _0x2f913e.addEnergyCd = function () {
          var _0x2ed980 = (_0x38c97e.homeInfo || {}).currentEnergy;
          _0x2ed980.initEnergy++;
          _0x2ed980.initEnergy % 5 == 0 && _0x38c97e.updateEnergy();
          _0x4712ba.stopAllByTarget(this.energyProg);
          _0x4bfec1(this.energyProg).set({
            progress: 0
          }).to(_0x2ed980.eachEnergyTime, {
            progress: 1
          }).start();
        };
        _0x2f913e.clickService = function () {
          _0x38c97e.checkActTime(true) && (location.href = "https://duiba.qiyukf.com/client?k=963e3892f221741d2f95971f0ebdb3b9&wp=1&robotShuntSwitch=1&robotId=5367639&gid=483323193&language=zh-cn&templateId=6583505");
        };
        _0x2f913e.clickRule = function () {
          _0x38c97e.checkActTime(true) && _0x1abcf3(_0x31091d);
        };
        _0x2f913e.clickPrize = function () {
          _0x38c97e.checkActTime(true) && _0x1abcf3(_0x54bb21);
        };
        _0x2f913e.clickPower = function () {
          _0x1522b0(_0x4def4a.CLICK, 2);
          _0x38c97e.checkActTime() && _0x2f937b(_0x2240cb);
        };
        _0x2f913e.clickCredit = function () {
          _0x38c97e.checkActTime() && _0x54dfc6("/pagesNews/user/integral");
        };
        _0x2f913e.clickExchange = function () {
          _0x1522b0(_0x4def4a.CLICK, 3);
          _0x38c97e.checkActTime(true) && _0x1abcf3(_0x7ba128);
        };
        _0x2f913e.clickRank = function () {
          if (_0x1522b0(_0x4def4a.CLICK, 5), _0x38c97e.checkActTime(true)) {
            {
              var _0x19a20e = _0x38c97e.homeInfo || {};
              var _0x2ad692 = _0x19a20e.lastPeriodSettlementTime;
              var _0x27a1d9 = _0x19a20e.boolJoinRank;
              if (_0x2ad692 < _0x54039b.now() && !_0x27a1d9) {
                console.log("排行榜已结束！");
                _0x19dec5("排行榜已结束！");
                return false;
              }
              _0x1abcf3(_0x47d001);
            }
          }
        };
        _0x2f913e.addNormalAnim = function () {
          var _0x200938 = this;
          var _0x4c0ab3 = this.redPool.get() || _0x555bd0(this.normalAdd);
          _0x4c0ab3.setPosition(-80, 80);
          this.rankBtn.addChild(_0x4c0ab3);
          var _0x352c62 = _0x4c0ab3.getComponent(_0xa7c50d);
          _0x352c62.play();
          this.setNormalCount(this.normalCount + 2);
          _0x352c62.once(_0xa7c50d.EventType.FINISHED, function () {
            _0x352c62.removeState("加球");
            _0x4c0ab3.removeFromParent();
            _0x200938.redPool.put(_0x4c0ab3);
          });
        };
        _0x2f913e.addGoldAnim = function () {
          var _0x52c26a = this;
          var _0x21a596 = this.goldPool.get() || _0x555bd0(this.goldAdd);
          _0x21a596.setPosition(50, 80);
          this.exchangeBtn.addChild(_0x21a596);
          var _0x6c1f29 = _0x21a596.getComponent(_0xa7c50d);
          _0x6c1f29.play();
          this.setGoldCount(this.goldCount + 2);
          _0x6c1f29.once(_0xa7c50d.EventType.FINISHED, function () {
            _0x6c1f29.removeState("加球");
            _0x21a596.removeFromParent();
            _0x52c26a.goldPool.put(_0x21a596);
          });
        };
        _0x2f913e.showDoubleAward = function () {
          var _0x43978d = this;
          _0x38c97e.updateIndex().then(function () {
            var _0x2d270e;
            var _0x17005d = (null == (_0x2d270e = _0x38c97e.homeInfo) ? undefined : _0x2d270e.currentMultiple) || {};
            var _0x181caa = _0x17005d.awardGoldNum;
            var _0x41ed02 = _0x17005d.awardNormalNum;
            _0x43978d.fuqiAward.string = "+" + (_0x41ed02 || 0);
            _0x43978d.caiqiAward.string = "+" + (_0x181caa || 0);
            _0x43978d.doubleAward.active = true;
            _0x43978d.doubleAward.getComponent(_0xa7c50d).play();
            _0x43978d.scheduleOnce(function () {
              _0x43978d.doubleAward.active = false;
            }, 2);
          });
        };
        _0x2f913e.update = function (_0x15f026) {
          if (this.countDown > 0) {
            this.countDown = Math.max(0, this.countDown - 1000 * _0x15f026);
            var _0x3809bd = (Math.floor(this.countDown / 1000 / 60 % 60) + "").padStart(2, "0").split("");
            var _0x583ec7 = (Math.floor(this.countDown / 1000 % 60) + "").padStart(2, "0").split("");
            this.num1.spriteFrame = this.countSpriteFrame[Number.parseInt(_0x3809bd[0])];
            this.num2.spriteFrame = this.countSpriteFrame[Number.parseInt(_0x3809bd[1])];
            this.num3.spriteFrame = this.countSpriteFrame[Number.parseInt(_0x583ec7[0])];
            this.num4.spriteFrame = this.countSpriteFrame[Number.parseInt(_0x583ec7[1])];
            this.countDown <= 0 && (this.countDownNodes.active = false, this.doubleAward.active = false);
          }
        };
        return _0x3b4d71;
      }(_0x3e2379)).prototype, "creditTxt", [_0x2e339a], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x5ed05c = _0x2aa428(_0x42ff00.prototype, "energyTxt", [_0x1d0bd4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x1d391d = _0x2aa428(_0x42ff00.prototype, "serviceBtn", [_0x48f340], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x1fa03f = _0x2aa428(_0x42ff00.prototype, "ruleBtn", [_0x2b6bfb], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x18f62a = _0x2aa428(_0x42ff00.prototype, "prizeBtn", [_0xdf1339], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x1774eb = _0x2aa428(_0x42ff00.prototype, "powerBtn", [_0x1e722a], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x2bdc78 = _0x2aa428(_0x42ff00.prototype, "creditBtn", [_0x422f24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          {
            return null;
          }
        }
      }), _0x5660b1 = _0x2aa428(_0x42ff00.prototype, "exchangeBtn", [_0x173877], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          {
            return null;
          }
        }
      }), _0x13c6f1 = _0x2aa428(_0x42ff00.prototype, "rankBtn", [_0x411501], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0xa5ecc6 = _0x2aa428(_0x42ff00.prototype, "putCreditTxt", [_0x9de8af], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x268fd0 = _0x2aa428(_0x42ff00.prototype, "normalBallTxt", [_0x53d60f], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x1dd4ed = _0x2aa428(_0x42ff00.prototype, "normalBallTip", [_0x514553], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x485ea2 = _0x2aa428(_0x42ff00.prototype, "normalAdd", [_0x5ac41d], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x32fa65 = _0x2aa428(_0x42ff00.prototype, "goldAdd", [_0x396aaa], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x331ea5 = _0x2aa428(_0x42ff00.prototype, "energyProg", [_0x1f76dc], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0xc02d = _0x2aa428(_0x42ff00.prototype, "countSpriteFrame", [_0x354abb], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _0x121625 = _0x2aa428(_0x42ff00.prototype, "countDownNodes", [_0x2347c7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          {
            return null;
          }
        }
      }), _0x2003ff = _0x2aa428(_0x42ff00.prototype, "num1", [_0x216280], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x3ac72b = _0x2aa428(_0x42ff00.prototype, "num2", [_0x199a00], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x1034e1 = _0x2aa428(_0x42ff00.prototype, "num3", [_0x43ea78], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x231a4b = _0x2aa428(_0x42ff00.prototype, "num4", [_0x649afe], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x55e55d = _0x2aa428(_0x42ff00.prototype, "doubleAward", [_0x3ea9b8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x436578 = _0x2aa428(_0x42ff00.prototype, "fuqiAward", [_0x44201d], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0xad54ce = _0x2aa428(_0x42ff00.prototype, "caiqiAward", [_0x6cfb6f], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x4a7eb8 = _0x2aa428(_0x42ff00.prototype, "rankTip", [_0x2a2f12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x453b06 = _0x2aa428(_0x42ff00.prototype, "goldNum", [_0x3d0d82], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x2aa428(_0x42ff00.prototype, "render", [_0x5a4858], Object.getOwnPropertyDescriptor(_0x42ff00.prototype, "render"), _0x42ff00.prototype), _0x384513 = _0x42ff00)) || _0x384513) || _0x384513));
      _0x4a2562._RF.pop();
    }
  };
});
System.register("chunks:///_virtual/GenBall.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./uitl.ts", "./Ball.ts", "./ExecutePreFrame.ts"], function (_0x113ace) {
  var _0x1e7f43;
  var _0xcf2a2f;
  var _0x48022f;
  var _0x4ed437;
  var _0x31a245;
  var _0x1bda1a;
  var _0x3f97b1;
  var _0x243039;
  var _0x197bc4;
  var _0x4612c7;
  var _0x14a9e4;
  var _0xe375c3;
  var _0x190cb1;
  var _0x307b54;
  var _0x189352;
  var _0x5bb26d;
  var _0x51b83e;
  var _0x13c0ba;
  var _0x1188f0;
  var _0x271e49;
  return {
    setters: [function (_0x5849d4) {
      _0x1e7f43 = _0x5849d4.applyDecoratedDescriptor;
      _0xcf2a2f = _0x5849d4.inheritsLoose;
      _0x48022f = _0x5849d4.initializerDefineProperty;
      _0x4ed437 = _0x5849d4.assertThisInitialized;
      _0x31a245 = _0x5849d4.asyncToGenerator;
      _0x1bda1a = _0x5849d4.regeneratorRuntime;
    }, function (_0xf62d75) {
      _0x3f97b1 = _0xf62d75.cclegacy;
      _0x243039 = _0xf62d75._decorator;
      _0x197bc4 = _0xf62d75.Prefab;
      _0x4612c7 = _0xf62d75.Node;
      _0x14a9e4 = _0xf62d75.lerp;
      _0xe375c3 = _0xf62d75.instantiate;
      _0x190cb1 = _0xf62d75.v3;
      _0x307b54 = _0xf62d75.RigidBody;
      _0x189352 = _0xf62d75.Component;
    }, function (_0x3fedf2) {
      _0x5bb26d = _0x3fedf2.randomV3;
    }, function (_0x2ab4fc) {
      _0x51b83e = _0x2ab4fc.Ball;
      _0x13c0ba = _0x2ab4fc.BallType;
    }, function (_0x3d5c51) {
      _0x1188f0 = _0x3d5c51.executePreFrame;
      _0x271e49 = _0x3d5c51.getItemGenerator;
    }],
    execute: function () {
      var _0x5862ec;
      var _0x15007f;
      var _0x11819a;
      var _0x3b961c;
      var _0x5a4c34;
      var _0x27d6cf;
      var _0x517cca;
      var _0xf07bd0;
      var _0x2ae282;
      _0x3f97b1._RF.push({}, "6a493m0MHtEMYHa4ShpkTcf", "GenBall", undefined);
      var _0x2a752c = _0x243039.ccclass;
      var _0x48f46c = _0x243039.property;
      _0x113ace("GenBall", (_0x5862ec = _0x2a752c("GenBall"), _0x15007f = _0x48f46c(_0x197bc4), _0x11819a = _0x48f46c(_0x197bc4), _0x3b961c = _0x48f46c(_0x4612c7), _0x5862ec((_0x517cca = _0x1e7f43((_0x27d6cf = function (_0x4861f7) {
        {
          function _0x293507() {
            for (var _0x22e293, _0xf115c4 = arguments.length, _0x20faff = new Array(_0xf115c4), _0x3e87e4 = 0; _0x3e87e4 < _0xf115c4; _0x3e87e4++) {
              _0x20faff[_0x3e87e4] = arguments[_0x3e87e4];
            }
            _0x22e293 = _0x4861f7.call.apply(_0x4861f7, [this].concat(_0x20faff)) || this;
            _0x48022f(_0x22e293, "redBall", _0x517cca, _0x4ed437(_0x22e293));
            _0x48022f(_0x22e293, "goldBall", _0xf07bd0, _0x4ed437(_0x22e293));
            _0x48022f(_0x22e293, "lid", _0x2ae282, _0x4ed437(_0x22e293));
            _0x22e293.initBall = _0x31a245(_0x1bda1a().mark(function _0x54b94b(_0x4f2719, _0x52d020) {
              var _0x55d184;
              var _0x509890;
              var _0x56d5ec;
              return _0x1bda1a().wrap(function (_0x5693ed) {
                for (;;) {
                  switch (_0x5693ed.prev = _0x5693ed.next) {
                    case 0:
                      _0x55d184 = function () {
                        var _0x547744 = _0x5bb26d(-2.1, 2.1, 5.4, 6.2, 1.9, 6.3);
                        var _0x413c7f = _0x547744.x;
                        var _0x3b1986 = _0x547744.y;
                        var _0x44da95 = _0x547744.z;
                        var _0x369f9d = _0xe375c3(_0x22e293.goldBall);
                        _0x369f9d.getComponent(_0x51b83e).reset({
                          x: _0x413c7f,
                          y: _0x3b1986,
                          z: _0x44da95
                        });
                        _0x22e293.node.addChild(_0x369f9d);
                      };
                      _0x509890 = _0x1188f0(_0x271e49(_0x4f2719, function () {
                        var _0x120090 = _0x5bb26d(-2.1, 2.1, 5.4, 6.2, 1.9, 6.3);
                        var _0x2cf948 = _0x120090.x;
                        var _0x248ed5 = _0x120090.y;
                        var _0xe6ec2d = _0x120090.z;
                        var _0x53c9b5 = _0xe375c3(_0x22e293.redBall);
                        _0x53c9b5.getComponent(_0x51b83e).reset({
                          x: _0x2cf948,
                          y: _0x248ed5,
                          z: _0xe6ec2d
                        });
                        _0x22e293.node.addChild(_0x53c9b5);
                      }), 1, _0x4ed437(_0x22e293));
                      _0x56d5ec = _0x1188f0(_0x271e49(_0x52d020, _0x55d184), 1, _0x4ed437(_0x22e293));
                      _0x5693ed.next = 6;
                      return Promise.all([_0x509890, _0x56d5ec]);
                    case 6:
                    case "end":
                      return _0x5693ed.stop();
                  }
                }
              }, _0x54b94b);
            }));
            return _0x22e293;
          }
          _0xcf2a2f(_0x293507, _0x4861f7);
          var _0x5d5132 = _0x293507.prototype;
          _0x5d5132.start = function () {};
          _0x5d5132.putRedBall = function (_0x59bcb1) {
            var _0x2f7653 = _0x14a9e4(-0.266, 0.266, Math.random());
            var _0x11c379 = _0xe375c3(this.redBall);
            _0x11c379.getComponent(_0x51b83e).reset({
              x: _0x2f7653,
              y: 8.1,
              z: -0.8,
              drawOrderNo: _0x59bcb1
            });
            this.node.addChild(_0x11c379);
            var _0x449396 = _0x190cb1(2 * Math.random() - 1, Math.random(), Math.random()).multiply3f(1, -7, 3);
            _0x11c379.getComponent(_0x307b54).applyLocalImpulse(_0x449396);
          };
          _0x5d5132.appendBall = function (_0x306d4f, _0x3b9055) {
            var _0x1c6b5d = this;
            if (!(_0x3b9055 <= 0)) {
              return new Promise(function (_0x5be009) {
                var _0x36fc2b = _0x3b9055;
                _0x1c6b5d.schedule(function () {
                  var _0x27bd17 = _0x5bb26d(-0.9, 0.9, 8.95, 9, -0.2, 0.3);
                  var _0x5aef52 = _0x27bd17.x;
                  var _0x47d6c2 = _0x27bd17.y;
                  var _0x4698c6 = _0x27bd17.z;
                  var _0x384f86 = _0xe375c3(_0x306d4f == _0x13c0ba.Red ? _0x1c6b5d.redBall : _0x1c6b5d.goldBall);
                  _0x384f86.getComponent(_0x51b83e).reset({
                    x: _0x5aef52,
                    y: _0x47d6c2,
                    z: _0x4698c6
                  });
                  _0x1c6b5d.node.addChild(_0x384f86);
                  _0x384f86.getComponent(_0x307b54).applyLocalImpulse(_0x190cb1(0, -5, 0));
                  --_0x36fc2b <= 0 && _0x5be009();
                }, 0.016666666666666666, _0x3b9055 - 1);
              });
            }
          };
          _0x5d5132.testAddRedBall = function () {
            var _0x1f1157 = _0x31a245(_0x1bda1a().mark(function _0x283333() {
              var _0x112560;
              var _0x259e32 = this;
              return _0x1bda1a().wrap(function (_0x3e6de7) {
                for (;;) {
                  switch (_0x3e6de7.prev = _0x3e6de7.next) {
                    case 0:
                      _0x112560 = function () {
                        var _0x29f47b = _0x5bb26d(-0.9, 0.9, 8.95, 9, -0.2, 0.3);
                        var _0x79853b = _0x29f47b.x;
                        var _0xc28bd4 = _0x29f47b.y;
                        var _0x33ca2e = _0x29f47b.z;
                        var _0xd29c9f = _0xe375c3(_0x259e32.redBall);
                        _0xd29c9f.getComponent(_0x51b83e).reset({
                          x: _0x79853b,
                          y: _0xc28bd4,
                          z: _0x33ca2e
                        });
                        _0x259e32.node.addChild(_0xd29c9f);
                        _0xd29c9f.getComponent(_0x307b54).applyLocalImpulse(_0x190cb1(0, -5, 0));
                      };
                      this.schedule(_0x112560, 0.016666666666666666, 2024);
                    case 2:
                    case "end":
                      return _0x3e6de7.stop();
                  }
                }
              }, _0x283333, this);
            }));
            return function () {
              return _0x1f1157.apply(this, arguments);
            };
          }();
          return _0x293507;
        }
      }(_0x189352)).prototype, "redBall", [_0x15007f], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0xf07bd0 = _0x1e7f43(_0x27d6cf.prototype, "goldBall", [_0x11819a], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x2ae282 = _0x1e7f43(_0x27d6cf.prototype, "lid", [_0x3b961c], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x5a4c34 = _0x27d6cf)) || _0x5a4c34));
      _0x3f97b1._RF.pop();
    }
  };
});
System.register("chunks:///_virtual/GetPrizePanel.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Panel.ts", "./decorators.ts", "./constants.ts", "./NetTime.ts"], function (_0x48348f) {
  var _0x2e6aa1;
  var _0x10b26a;
  var _0x41cff8;
  var _0xf3a07;
  var _0x50bc8b;
  var _0x2fcbdb;
  var _0x4ca2ea;
  var _0x2f04b3;
  var _0x361878;
  var _0x31aeff;
  var _0x4fd5c3;
  var _0x3699f7;
  var _0x82b289;
  var _0x3c2e5a;
  var _0x241ce0;
  var _0x336135;
  var _0xf2c0a0;
  return {
    setters: [function (_0x2e66e7) {
      _0x2e6aa1 = _0x2e66e7.applyDecoratedDescriptor;
      _0x10b26a = _0x2e66e7.inheritsLoose;
      _0x41cff8 = _0x2e66e7.initializerDefineProperty;
      _0xf3a07 = _0x2e66e7.assertThisInitialized;
      _0x50bc8b = _0x2e66e7.asyncToGenerator;
      _0x2fcbdb = _0x2e66e7.regeneratorRuntime;
    }, function (_0x61dff2) {
      _0x4ca2ea = _0x61dff2.cclegacy;
      _0x2f04b3 = _0x61dff2._decorator;
      _0x361878 = _0x61dff2.Node;
      _0x31aeff = _0x61dff2.Label;
      _0x4fd5c3 = _0x61dff2.Sprite;
      _0x3699f7 = _0x61dff2.SpriteFrame;
    }, function (_0x31cd8b) {
      _0x82b289 = _0x31cd8b.default;
    }, function (_0x4a6a65) {
      _0x3c2e5a = _0x4a6a65.observer;
      _0x241ce0 = _0x4a6a65.render;
    }, function (_0x261806) {
      _0x336135 = _0x261806.SpIdMap;
    }, function (_0x32333d) {
      _0xf2c0a0 = _0x32333d.NetTime;
    }],
    execute: function () {
      var _0x5cf1f4;
      var _0x35413b;
      var _0x16551d;
      var _0x4af6a4;
      var _0x125b90;
      var _0x3030ec;
      var _0x1c1f5d;
      var _0x4e5638;
      var _0x23eb8e;
      var _0x3ce7fe;
      var _0x22e557;
      var _0x5d916f;
      var _0x18a194;
      var _0x377b9d;
      var _0x246a84;
      var _0x1633f1;
      var _0x33612f;
      var _0x28d5ee;
      var _0x15f18f;
      var _0x229bb2;
      var _0x3708eb;
      var _0x48e901;
      var _0x954937;
      var _0x213955;
      var _0x47e046;
      var _0x311ffd;
      var _0x18a49b;
      var _0x5ca1da;
      _0x4ca2ea._RF.push({}, "0d5f2c66X9LkJEObuG93fBG", "GetPrizePanel", undefined);
      var _0x28e603 = _0x2f04b3.ccclass;
      var _0x53a18b = _0x2f04b3.property;
      _0x48348f("default", (_0x5cf1f4 = _0x28e603("GetPrizePanel"), _0x35413b = _0x53a18b({
        type: _0x361878,
        displayName: "主盒子"
      }), _0x16551d = _0x53a18b({
        type: _0x31aeff,
        displayName: "前面的文案"
      }), _0x4af6a4 = _0x53a18b({
        type: _0x31aeff,
        displayName: "中间的文案"
      }), _0x125b90 = _0x53a18b({
        type: _0x31aeff,
        displayName: "后面的文案"
      }), _0x3030ec = _0x53a18b({
        type: _0x31aeff,
        displayName: "奖品数量"
      }), _0x1c1f5d = _0x53a18b({
        type: _0x4fd5c3,
        displayName: "奖品图"
      }), _0x4e5638 = _0x53a18b({
        type: _0x4fd5c3,
        displayName: "标签"
      }), _0x23eb8e = _0x53a18b({
        type: _0x3699f7,
        displayName: "超级稀有"
      }), _0x3ce7fe = _0x53a18b({
        type: _0x3699f7,
        displayName: "翻倍"
      }), _0x22e557 = _0x53a18b({
        type: _0x361878,
        displayName: "翻倍奖品"
      }), _0x5d916f = _0x53a18b({
        type: _0x361878,
        displayName: "福气奖品"
      }), _0x18a194 = _0x53a18b({
        type: _0x361878,
        displayName: "财气奖品"
      }), _0x3c2e5a(_0x377b9d = _0x5cf1f4(((_0x5ca1da = function (_0x5e5bb0) {
        function _0x47aea9() {
          for (var _0x2b45e1, _0x5ae700 = arguments.length, _0x36e193 = new Array(_0x5ae700), _0x584369 = 0; _0x584369 < _0x5ae700; _0x584369++) {
            _0x36e193[_0x584369] = arguments[_0x584369];
          }
          _0x2b45e1 = _0x5e5bb0.call.apply(_0x5e5bb0, [this].concat(_0x36e193)) || this;
          _0x41cff8(_0x2b45e1, "mainBox", _0x1633f1, _0xf3a07(_0x2b45e1));
          _0x41cff8(_0x2b45e1, "label1", _0x33612f, _0xf3a07(_0x2b45e1));
          _0x41cff8(_0x2b45e1, "label2", _0x28d5ee, _0xf3a07(_0x2b45e1));
          _0x41cff8(_0x2b45e1, "label3", _0x15f18f, _0xf3a07(_0x2b45e1));
          _0x41cff8(_0x2b45e1, "count", _0x229bb2, _0xf3a07(_0x2b45e1));
          _0x41cff8(_0x2b45e1, "prizeImg", _0x3708eb, _0xf3a07(_0x2b45e1));
          _0x41cff8(_0x2b45e1, "label", _0x48e901, _0xf3a07(_0x2b45e1));
          _0x41cff8(_0x2b45e1, "superRareLabel", _0x954937, _0xf3a07(_0x2b45e1));
          _0x41cff8(_0x2b45e1, "doubleLabel", _0x213955, _0xf3a07(_0x2b45e1));
          _0x41cff8(_0x2b45e1, "doublePrize", _0x47e046, _0xf3a07(_0x2b45e1));
          _0x41cff8(_0x2b45e1, "fuqiPrize", _0x311ffd, _0xf3a07(_0x2b45e1));
          _0x41cff8(_0x2b45e1, "caiqiPrize", _0x18a49b, _0xf3a07(_0x2b45e1));
          _0x2b45e1.countdown = 0;
          return _0x2b45e1;
        }
        _0x10b26a(_0x47aea9, _0x5e5bb0);
        var _0x15b974 = _0x47aea9.prototype;
        _0x15b974.onLoad = function () {
          {
            var _0x353dfc = _0x50bc8b(_0x2fcbdb().mark(function _0x4506f3() {
              return _0x2fcbdb().wrap(function (_0x4c045e) {
                for (;;) {
                  switch (_0x4c045e.prev = _0x4c045e.next) {
                    case 0:
                      this.doublePrize.active = false;
                      this.fuqiPrize.active = false;
                      this.caiqiPrize.active = false;
                    case 3:
                    case "end":
                      return _0x4c045e.stop();
                  }
                }
              }, _0x4506f3, this);
            }));
            return function () {
              {
                return _0x353dfc.apply(this, arguments);
              }
            };
          }
        }();
        _0x15b974.start = function () {
          var _0x1b0a90 = this;
          var _0x22ab11 = this.data.callback;
          this.initUI();
          this.scheduleOnce(function () {
            _0x1b0a90.hidePanel();
            _0x22ab11 && _0x22ab11 instanceof Function && _0x22ab11();
          }, 3);
        };
        _0x15b974.render = function () {};
        _0x15b974.initUI = function () {
          var _0xae63c1 = this.data || {};
          _0xae63c1.doubleStartTime;
          var _0x2be6c0 = _0xae63c1.doubleEndTime;
          var _0x5944e3 = _0xae63c1.drawSpId;
          var _0x20ce55 = [_0x336135.sp_tag_double_1, _0x336135.sp_tag_double_2, _0x336135.sp_tag_double_3].includes(_0x5944e3);
          var _0x427bd2 = (_0x5944e3 + "").indexOf("normal") > -1;
          var _0x1d010d = [_0x336135.sp_tag_gold_25x, _0x336135.sp_tag_normal_2025x].includes(_0x5944e3);
          _0x20ce55 ? (this.countdown = _0x2be6c0 - _0xf2c0a0.now(), this.doublePrize.active = true, this.label.spriteFrame = this.doubleLabel) : _0x427bd2 ? this.fuqiPrize.active = true : this.caiqiPrize.active = true;
          this.setLabelString(_0x20ce55, _0x427bd2);
          _0x1d010d && (this.label.spriteFrame = this.superRareLabel);
        };
        _0x15b974.setLabelString = function (_0x3f3ade, _0x15d7eb) {
          var _0x22a0b6 = (this.data || {}).awardNum;
          var _0x5ec80c = _0x15d7eb ? "福气" : "财气";
          this.label1.string = _0x3f3ade ? "" : "恭喜获得";
          this.label2.string = "" + _0x22a0b6;
          this.label3.string = _0x3f3ade ? "后失效" : "个" + _0x5ec80c;
          this.count.string = _0x3f3ade ? "福气翻倍" : "x" + _0x22a0b6;
          this.count.fontSize = _0x3f3ade ? 36 : 48;
        };
        _0x15b974.setTime = function (_0x2e0e95) {
          if (!(_0x2e0e95 <= 0)) {
            var _0x36603d = (Math.floor(_0x2e0e95 / 1000 / 60 / 60) + "").padStart(2, "0");
            var _0x508b24 = (Math.floor(_0x2e0e95 / 1000 / 60 % 60) + "").padStart(2, "0");
            var _0x15c26d = (Math.floor(_0x2e0e95 / 1000 % 60) + "").padStart(2, "0");
            this.label2.string = _0x36603d + ":" + _0x508b24 + ":" + _0x15c26d;
          }
        };
        _0x15b974.update = function (_0x46e715) {
          this.countdown > 0 && (this.countdown = this.countdown - 1000 * _0x46e715, this.setTime(this.countdown));
        };
        return _0x47aea9;
      }(_0x82b289)).bundle = "GetPrizePanel", _0x5ca1da.skin = "GetPrizePanel", _0x1633f1 = _0x2e6aa1((_0x246a84 = _0x5ca1da).prototype, "mainBox", [_0x35413b], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x33612f = _0x2e6aa1(_0x246a84.prototype, "label1", [_0x16551d], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x28d5ee = _0x2e6aa1(_0x246a84.prototype, "label2", [_0x4af6a4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x15f18f = _0x2e6aa1(_0x246a84.prototype, "label3", [_0x125b90], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x229bb2 = _0x2e6aa1(_0x246a84.prototype, "count", [_0x3030ec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x3708eb = _0x2e6aa1(_0x246a84.prototype, "prizeImg", [_0x1c1f5d], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x48e901 = _0x2e6aa1(_0x246a84.prototype, "label", [_0x4e5638], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x954937 = _0x2e6aa1(_0x246a84.prototype, "superRareLabel", [_0x23eb8e], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x213955 = _0x2e6aa1(_0x246a84.prototype, "doubleLabel", [_0x3ce7fe], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x47e046 = _0x2e6aa1(_0x246a84.prototype, "doublePrize", [_0x22e557], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x311ffd = _0x2e6aa1(_0x246a84.prototype, "fuqiPrize", [_0x5d916f], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x18a49b = _0x2e6aa1(_0x246a84.prototype, "caiqiPrize", [_0x18a194], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x2e6aa1(_0x246a84.prototype, "render", [_0x241ce0], Object.getOwnPropertyDescriptor(_0x246a84.prototype, "render"), _0x246a84.prototype), _0x377b9d = _0x246a84)) || _0x377b9d) || _0x377b9d));
      _0x4ca2ea._RF.pop();
    }
  };
});
System.register("chunks:///_virtual/GuidePanel.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Panel.ts", "./decorators.ts", "./Utils.ts"], function (_0x4273f1) {
  var _0x2d44fb;
  var _0x207f7f;
  var _0x553699;
  var _0x48b61d;
  var _0x52f481;
  var _0x5ba235;
  var _0x57a4fd;
  var _0x52663f;
  var _0x549ba6;
  var _0x41cda7;
  var _0x57f9d4;
  var _0xc5cc9c;
  var _0x4c9297;
  return {
    setters: [function (_0x40e097) {
      _0x2d44fb = _0x40e097.applyDecoratedDescriptor;
      _0x207f7f = _0x40e097.inheritsLoose;
      _0x553699 = _0x40e097.initializerDefineProperty;
      _0x48b61d = _0x40e097.assertThisInitialized;
      _0x52f481 = _0x40e097.asyncToGenerator;
      _0x5ba235 = _0x40e097.regeneratorRuntime;
    }, function (_0x262cea) {
      _0x57a4fd = _0x262cea.cclegacy;
      _0x52663f = _0x262cea._decorator;
      _0x549ba6 = _0x262cea.Node;
      _0x41cda7 = _0x262cea.PageView;
    }, function (_0x413ed3) {
      {
        _0x57f9d4 = _0x413ed3.default;
      }
    }, function (_0x1e7c23) {
      _0xc5cc9c = _0x1e7c23.observer;
    }, function (_0x54f838) {
      _0x4c9297 = _0x54f838._asyncThrottle;
    }],
    execute: function () {
      {
        var _0x4033d0;
        var _0x86b4ee;
        var _0x1a7fdc;
        var _0x13cd67;
        var _0x3cea8b;
        var _0x48d4b3;
        var _0x10eba4;
        var _0x5ba4d7;
        var _0x18171a;
        var _0x3e812f;
        var _0x5236bb;
        var _0x1fbbb2;
        var _0x4698c3;
        var _0x371d35;
        var _0x564f93;
        var _0xc8cb36;
        var _0x41d3b2;
        var _0x4aa8c2;
        _0x57a4fd._RF.push({}, "df9c0G/So9J/aNOxa9pu2tO", "GuidePanel", undefined);
        var _0x37fb9a = _0x52663f.ccclass;
        var _0x5e526a = _0x52663f.property;
        _0x4273f1("default", (_0x4033d0 = _0x37fb9a("GuidePanel"), _0x86b4ee = _0x5e526a(_0x549ba6), _0x1a7fdc = _0x5e526a(_0x549ba6), _0x13cd67 = _0x5e526a(_0x549ba6), _0x3cea8b = _0x5e526a(_0x549ba6), _0x48d4b3 = _0x5e526a(_0x549ba6), _0x10eba4 = _0x5e526a(_0x549ba6), _0x5ba4d7 = _0x5e526a(_0x41cda7), _0xc5cc9c(_0x18171a = _0x4033d0(((_0x4aa8c2 = function (_0x386507) {
          function _0xb3df59() {
            for (var _0x18572e, _0x54f53e = arguments.length, _0x3db3c3 = new Array(_0x54f53e), _0x3f6180 = 0; _0x3f6180 < _0x54f53e; _0x3f6180++) {
              _0x3db3c3[_0x3f6180] = arguments[_0x3f6180];
            }
            (_0x18572e = _0x386507.call.apply(_0x386507, [this].concat(_0x3db3c3)) || this).step = 0;
            _0x553699(_0x18572e, "guide1", _0x5236bb, _0x48b61d(_0x18572e));
            _0x553699(_0x18572e, "guide2", _0x1fbbb2, _0x48b61d(_0x18572e));
            _0x553699(_0x18572e, "guide3", _0x4698c3, _0x48b61d(_0x18572e));
            _0x553699(_0x18572e, "guide4", _0x371d35, _0x48b61d(_0x18572e));
            _0x553699(_0x18572e, "guide5", _0x564f93, _0x48b61d(_0x18572e));
            _0x553699(_0x18572e, "guide6", _0xc8cb36, _0x48b61d(_0x18572e));
            _0x553699(_0x18572e, "pageView", _0x41d3b2, _0x48b61d(_0x18572e));
            _0x18572e.nextStep = _0x4c9297(function () {
              _0x18572e.pageView.scrollToPage(_0x18572e.pageView.curPageIdx + 1);
            }, 400);
            _0x18572e.closePanel = _0x4c9297(function () {
              _0x18572e.hidePanel();
            });
            return _0x18572e;
          }
          _0x207f7f(_0xb3df59, _0x386507);
          var _0xb2d357 = _0xb3df59.prototype;
          _0xb2d357.onLoad = function () {
            this.pageView.node.on("page-turning", this.callback, this);
            this.node.on(_0x549ba6.EventType.TOUCH_END, this.nextStep);
          };
          _0xb2d357.callback = function (_0x1694a6) {
            var _0x4fab2d = this;
            5 == (null == _0x1694a6 ? undefined : _0x1694a6.curPageIdx) && setTimeout(function () {
              _0x4fab2d.closePanel();
            }, 700);
          };
          _0xb2d357.start = function () {
            var _0x1dc452 = _0x52f481(_0x5ba235().mark(function _0x322292() {
              return _0x5ba235().wrap(function (_0x4dfebb) {
                {
                  for (;;) {
                    switch (_0x4dfebb.prev = _0x4dfebb.next) {
                      case 0:
                      case "end":
                        return _0x4dfebb.stop();
                    }
                  }
                }
              }, _0x322292);
            }));
            return function () {
              return _0x1dc452.apply(this, arguments);
            };
          }();
          return _0xb3df59;
        }(_0x57f9d4)).bundle = "GuidePanel", _0x4aa8c2.skin = "GuidePanel", _0x5236bb = _0x2d44fb((_0x3e812f = _0x4aa8c2).prototype, "guide1", [_0x86b4ee], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function () {
            return null;
          }
        }), _0x1fbbb2 = _0x2d44fb(_0x3e812f.prototype, "guide2", [_0x1a7fdc], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function () {
            return null;
          }
        }), _0x4698c3 = _0x2d44fb(_0x3e812f.prototype, "guide3", [_0x13cd67], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function () {
            return null;
          }
        }), _0x371d35 = _0x2d44fb(_0x3e812f.prototype, "guide4", [_0x3cea8b], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function () {
            return null;
          }
        }), _0x564f93 = _0x2d44fb(_0x3e812f.prototype, "guide5", [_0x48d4b3], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function () {
            return null;
          }
        }), _0xc8cb36 = _0x2d44fb(_0x3e812f.prototype, "guide6", [_0x10eba4], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function () {
            return null;
          }
        }), _0x41d3b2 = _0x2d44fb(_0x3e812f.prototype, "pageView", [_0x5ba4d7], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function () {
            return null;
          }
        }), _0x18171a = _0x3e812f)) || _0x18171a) || _0x18171a));
        _0x57a4fd._RF.pop();
      }
    }
  };
});
System.register("chunks:///_virtual/HardLookAtHandler.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./CinestationMath.ts", "./CameraHandler.ts", "./VCamTracked.ts"], function (_0x536a8b) {
  var _0x59343c;
  var _0x4ca0fe;
  var _0x3441cb;
  var _0x538b33;
  var _0x29836c;
  var _0x2dce3d;
  var _0x5826e5;
  var _0x5901d7;
  return {
    setters: [function (_0xd898) {
      _0x59343c = _0xd898.inheritsLoose;
    }, function (_0x332659) {
      _0x4ca0fe = _0x332659.cclegacy;
      _0x3441cb = _0x332659.Vec3;
      _0x538b33 = _0x332659.Quat;
      _0x29836c = _0x332659.isValid;
    }, function (_0x59ea09) {
      _0x2dce3d = _0x59ea09.Vec4_closeTo;
    }, function (_0x1c88c2) {
      _0x5826e5 = _0x1c88c2.CameraHandler;
    }, function (_0xa46521) {
      _0x5901d7 = _0xa46521.VCamUp;
    }],
    execute: function () {
      _0x4ca0fe._RF.push({}, "6b941On3J1Ihqyi0Yu8PlLi", "HardLookAtHandler", undefined);
      var _0x3cc693 = new _0x3441cb();
      var _0x2875a6 = new _0x538b33();
      var _0x3ec278 = new _0x3441cb();
      _0x536a8b("HardLookAtHandler", function (_0x50f42b) {
        function _0x295ed4() {
          return _0x50f42b.apply(this, arguments) || this;
        }
        _0x59343c(_0x295ed4, _0x50f42b);
        _0x295ed4.prototype.updateCamera = function (_0x5c5cec) {
          var _0x342779 = this._vcam;
          if (_0x29836c(_0x342779.lookAt)) {
            {
              _0x3441cb.add(_0x3cc693, _0x342779.lookAt.position, _0x342779.aim.trackedObjectOffset);
              _0x342779.lookAt.parent && _0x3cc693.add(_0x342779.lookAt.parent.worldPosition);
              _0x342779.lookaheadPosition.set(_0x3cc693);
              var _0xd4c3ce = _0x342779.body.tracked;
              if (_0xd4c3ce.path) {
                switch (_0xd4c3ce.cameraUp) {
                  case _0x5901d7.PATH:
                    _0xd4c3ce.path.evaluteUp(_0x3ec278, _0xd4c3ce.progress);
                    break;
                  default:
                    _0x3ec278.set(0, 1, 0);
                }
              } else {
                _0x3ec278.set(0, 1, 0);
              }
              _0x538b33.fromViewUp(_0x2875a6, _0x3441cb.subtract(_0x3cc693, _0x342779.node.worldPosition, _0x3cc693).normalize(), _0x3ec278);
              _0x2dce3d(_0x2875a6, _0x342779.node.worldRotation) || (_0x342779.node.worldRotation = _0x2875a6);
            }
          }
        };
        return _0x295ed4;
      }(_0x5826e5));
      _0x4ca0fe._RF.pop();
    }
  };
});
System.register("chunks:///_virtual/HomeScene.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Scene.ts", "./MainGame.ts", "./UIFast.ts", "./store.ts", "./decorators.ts", "./Utils.ts", "./UIMgr.ts", "./FirstSkinPanel.ts"], function (_0xd30bcc) {
  var _0x4dd862;
  var _0x5dc01c;
  var _0x54da49;
  var _0xb8e70f;
  var _0x5ea85e;
  var _0x3f844a;
  var _0x39080f;
  var _0x1dca30;
  var _0x47c2d7;
  var _0x22b9e7;
  var _0x2d063a;
  var _0x2ce1b6;
  var _0x2993d5;
  var _0x142186;
  var _0x11c653;
  var _0x1e5c3e;
  var _0x3c5cb9;
  var _0x1571bb;
  var _0x31a022;
  var _0x13211b;
  var _0xd99aa9;
  var _0x2f504a;
  return {
    setters: [function (_0x4ad230) {
      _0x4dd862 = _0x4ad230.applyDecoratedDescriptor;
      _0x5dc01c = _0x4ad230.inheritsLoose;
      _0x54da49 = _0x4ad230.initializerDefineProperty;
      _0xb8e70f = _0x4ad230.assertThisInitialized;
      _0x5ea85e = _0x4ad230.asyncToGenerator;
      _0x3f844a = _0x4ad230.regeneratorRuntime;
    }, function (_0x7c6b2c) {
      _0x39080f = _0x7c6b2c.cclegacy;
      _0x1dca30 = _0x7c6b2c._decorator;
      _0x47c2d7 = _0x7c6b2c.Node;
      _0x22b9e7 = _0x7c6b2c.Button;
    }, function (_0x57a56c) {
      _0x2d063a = _0x57a56c.default;
    }, function (_0x42614f) {
      _0x2ce1b6 = _0x42614f.MainGame;
    }, function (_0x2affb0) {
      _0x2993d5 = _0x2affb0.changeScene;
      _0x142186 = _0x2affb0.hideWaiting;
      _0x11c653 = _0x2affb0.showPanel;
      _0x1e5c3e = _0x2affb0.showWaiting;
    }, function (_0x2f15c9) {
      _0x3c5cb9 = _0x2f15c9.default;
    }, function (_0x334e37) {
      _0x1571bb = _0x334e37.observer;
      _0x31a022 = _0x334e37.render;
    }, function (_0x4a40c7) {
      _0x13211b = _0x4a40c7._asyncThrottle;
    }, function (_0x5127f2) {
      _0xd99aa9 = _0x5127f2.UIMgr;
    }, function (_0x341617) {
      _0x2f504a = _0x341617.default;
    }],
    execute: function () {
      var _0x6b95ad;
      var _0x29031a;
      var _0x4cb8dc;
      var _0x2d51b5;
      var _0x12a661;
      var _0x21f162;
      _0x39080f._RF.push({}, "b909flDaxhFV6G7UvCmThLP", "HomeScene", undefined);
      var _0x352ce2 = _0x1dca30.ccclass;
      var _0x776ee0 = _0x1dca30.property;
      _0xd30bcc("HomeScene", (_0x6b95ad = _0x352ce2("HomeScene"), _0x29031a = _0x776ee0(_0x47c2d7), _0x1571bb(_0x4cb8dc = _0x6b95ad(((_0x21f162 = function (_0xb2dacf) {
        function _0x5025bc() {
          for (var _0x4f411a, _0x3adce4 = arguments.length, _0x440ab3 = new Array(_0x3adce4), _0x3092af = 0; _0x3092af < _0x3adce4; _0x3092af++) {
            _0x440ab3[_0x3092af] = arguments[_0x3092af];
          }
          _0x4f411a = _0xb2dacf.call.apply(_0xb2dacf, [this].concat(_0x440ab3)) || this;
          _0x54da49(_0x4f411a, "startBtn", _0x12a661, _0xb8e70f(_0x4f411a));
          _0x4f411a.clickStart = _0x13211b(_0x5ea85e(_0x3f844a().mark(function _0x3dec60() {
            return _0x3f844a().wrap(function (_0x37e686) {
              {
                for (;;) {
                  switch (_0x37e686.prev = _0x37e686.next) {
                    case 0:
                      if (_0x3c5cb9.checkActTime()) {
                        _0x37e686.next = 2;
                        break;
                      }
                      return _0x37e686.abrupt("return");
                    case 2:
                      _0x2993d5(_0x2ce1b6);
                    case 3:
                    case "end":
                      return _0x37e686.stop();
                  }
                }
              }
            }, _0x3dec60);
          })));
          return _0x4f411a;
        }
        _0x5dc01c(_0x5025bc, _0xb2dacf);
        var _0x3aa19f = _0x5025bc.prototype;
        _0x3aa19f.onLoad = function () {
          this.startBtn.on(_0x22b9e7.EventType.CLICK, this.clickStart, this);
        };
        _0x3aa19f.start = function () {
          var _0x9eb2a6 = _0x5ea85e(_0x3f844a().mark(function _0x2fd8ef() {
            var _0x2f1eef;
            return _0x3f844a().wrap(function (_0x20ca7a) {
              for (;;) {
                switch (_0x20ca7a.prev = _0x20ca7a.next) {
                  case 0:
                    _0x1e5c3e();
                    _0x20ca7a.next = 3;
                    return _0x3c5cb9.updateIndex();
                  case 3:
                    _0x142186();
                    _0x2f1eef = _0x3c5cb9.homeInfo || {};
                    _0x2f1eef.firstEntryFlag && _0x11c653(_0x2f504a);
                    _0xd99aa9.ins.preloadScene(_0x2ce1b6);
                  case 7:
                  case "end":
                    return _0x20ca7a.stop();
                }
              }
            }, _0x2fd8ef);
          }));
          return function () {
            {
              return _0x9eb2a6.apply(this, arguments);
            }
          };
        }();
        _0x3aa19f.render = function () {
          (_0x3c5cb9.homeInfo || {}).nickname;
        };
        return _0x5025bc;
      }(_0x2d063a)).bundle = "HomeScene", _0x21f162.skin = "HomeScene", _0x12a661 = _0x4dd862((_0x2d51b5 = _0x21f162).prototype, "startBtn", [_0x29031a], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x4dd862(_0x2d51b5.prototype, "render", [_0x31a022], Object.getOwnPropertyDescriptor(_0x2d51b5.prototype, "render"), _0x2d51b5.prototype), _0x4cb8dc = _0x2d51b5)) || _0x4cb8dc) || _0x4cb8dc));
      _0x39080f._RF.pop();
    }
  };
});
System.register("chunks:///_virtual/HTMLRichText.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./index.mjs_cjs=&original=2.js", "./index2.js"], function (_0x42883a) {
  var _0x3fbe87;
  var _0x58966c;
  var _0x220563;
  var _0x1a8609;
  var _0x401ea2;
  var _0x2e34fb;
  var _0xd1f7bc;
  var _0x4e22de;
  var _0x48f3aa;
  var _0x40a35d;
  var _0x2a5165;
  var _0x3b2bb4;
  var _0x591812;
  var _0x271151;
  var _0x30027f;
  var _0x4a167f;
  var _0x38c4d5;
  var _0x4d53d6;
  return {
    setters: [function (_0x4a09d7) {
      _0x3fbe87 = _0x4a09d7.applyDecoratedDescriptor;
      _0x58966c = _0x4a09d7.inheritsLoose;
      _0x220563 = _0x4a09d7.initializerDefineProperty;
      _0x1a8609 = _0x4a09d7.assertThisInitialized;
      _0x401ea2 = _0x4a09d7.createClass;
      _0x2e34fb = _0x4a09d7.asyncToGenerator;
      _0xd1f7bc = _0x4a09d7.regeneratorRuntime;
    }, function (_0x44dfda) {
      _0x4e22de = _0x44dfda.cclegacy;
      _0x48f3aa = _0x44dfda._decorator;
      _0x40a35d = _0x44dfda.Sprite;
      _0x2a5165 = _0x44dfda.Color;
      _0x3b2bb4 = _0x44dfda.Texture2D;
      _0x591812 = _0x44dfda.SpriteFrame;
      _0x271151 = _0x44dfda.Component;
      _0x30027f = _0x44dfda.color;
      _0x4a167f = _0x44dfda.ImageAsset;
      _0x38c4d5 = _0x44dfda.UITransform;
    }, null, function (_0xd19f4e) {
      _0x4d53d6 = _0xd19f4e.default;
    }],
    execute: function () {
      var _0x4103c2;
      var _0x2b12b6;
      var _0x10b6c2;
      var _0x4ad643;
      var _0x3b4363;
      var _0x37873e;
      var _0x21cae6;
      var _0x1e9f8d;
      var _0x59ee61;
      _0x4e22de._RF.push({}, "e7e9bCCrdpMT7W41TJoBV6z", "HTMLRichText", undefined);
      var _0x154902 = _0x48f3aa.ccclass;
      var _0x5bebd8 = _0x48f3aa.property;
      var _0x21f831 = _0x48f3aa.requireComponent;
      _0x42883a("HTMLRichText", (_0x4103c2 = _0x154902("HTMLRichText"), _0x2b12b6 = _0x21f831(_0x40a35d), _0x10b6c2 = _0x5bebd8({
        multiline: true
      }), _0x4ad643 = _0x5bebd8(_0x2a5165), _0x4103c2(_0x3b4363 = _0x2b12b6(((_0x59ee61 = function (_0x5336aa) {
        function _0x3a67f3() {
          for (var _0xf429a7, _0xd9d216 = arguments.length, _0x3dccaf = new Array(_0xd9d216), _0x574b33 = 0; _0x574b33 < _0xd9d216; _0x574b33++) {
            _0x3dccaf[_0x574b33] = arguments[_0x574b33];
          }
          (_0xf429a7 = _0x5336aa.call.apply(_0x5336aa, [this].concat(_0x3dccaf)) || this)._html = "";
          _0x220563(_0xf429a7, "fontSize", _0x21cae6, _0x1a8609(_0xf429a7));
          _0x220563(_0xf429a7, "color", _0x1e9f8d, _0x1a8609(_0xf429a7));
          _0xf429a7.imgAssets = null;
          _0xf429a7.t2d = new _0x3b2bb4();
          _0xf429a7.sf = new _0x591812();
          return _0xf429a7;
        }
        _0x58966c(_0x3a67f3, _0x5336aa);
        var _0x1af99a = _0x3a67f3.prototype;
        _0x1af99a.start = function () {};
        _0x1af99a.setTxt = function () {
          var _0x5c3c43 = _0x2e34fb(_0xd1f7bc().mark(function _0x5afc94(_0x262e74) {
            {
              var _0xf65cec;
              var _0x2b75a7;
              var _0x112d01;
              var _0x233dd4;
              var _0x55ba42;
              return _0xd1f7bc().wrap(function (_0x4093c4) {
                for (;;) {
                  switch (_0x4093c4.prev = _0x4093c4.next) {
                    case 0:
                      if (_0x262e74) {
                        _0x4093c4.next = 3;
                        break;
                      }
                      this.node.getComponent(_0x40a35d).spriteFrame = null;
                      return _0x4093c4.abrupt("return");
                    case 3:
                      _0xf65cec = "richTxt_" + _0x3a67f3._id++;
                      _0x2b75a7 = this.node.getComponent(_0x38c4d5).width;
                      _0x112d01 = this.color.toCSS("rgba");
                      (_0x233dd4 = document.createElement("div")).innerHTML = _0x262e74;
                      _0x233dd4.id = _0xf65cec;
                      _0x233dd4.style.position = "fixed";
                      _0x233dd4.style.zIndex = "-9999";
                      _0x233dd4.style.width = _0x2b75a7 + "px";
                      _0x233dd4.style.fontSize = this.fontSize + "px";
                      _0x233dd4.style.color = _0x112d01;
                      document.body.appendChild(_0x233dd4);
                      _0x4093c4.next = 17;
                      return _0x4d53d6.toCanvas(_0x233dd4, {
                        skipFonts: true,
                        backgroundColor: "transparent"
                      }).finally(function () {
                        document.body.removeChild(_0x233dd4);
                      });
                    case 17:
                      if (_0x55ba42 = _0x4093c4.sent) {
                        {
                          _0x4093c4.next = 20;
                          break;
                        }
                      }
                      return _0x4093c4.abrupt("return");
                    case 20:
                      this.imgAssets = new _0x4a167f(_0x55ba42);
                      this.t2d.image = this.imgAssets;
                      this.sf.texture = this.t2d;
                      this.node.getComponent(_0x40a35d).spriteFrame = this.sf;
                      this.node.getComponent(_0x38c4d5).setContentSize(_0x55ba42.width, _0x55ba42.height);
                      this.node.emit(_0x3a67f3.EventType.AFTER_RENDER);
                    case 26:
                    case "end":
                      return _0x4093c4.stop();
                  }
                }
              }, _0x5afc94, this);
            }
          }));
          return function (_0x3b83e3) {
            return _0x5c3c43.apply(this, arguments);
          };
        }();
        _0x1af99a.onDestroy = function () {
          var _0x33fc01;
          null == (_0x33fc01 = this.imgAssets) || _0x33fc01.destroy();
          this.t2d.destroy();
          this.sf.destroy();
        };
        _0x401ea2(_0x3a67f3, [{
          key: "html",
          get: function () {
            return this._html;
          },
          set: function (_0x4f1652) {
            this._html = _0x4f1652;
            this.setTxt(_0x4f1652);
          }
        }]);
        return _0x3a67f3;
      }(_0x271151))._id = 0, _0x59ee61.EventType = {
        AFTER_RENDER: "AFTER_RENDER"
      }, _0x3fbe87((_0x37873e = _0x59ee61).prototype, "html", [_0x10b6c2], Object.getOwnPropertyDescriptor(_0x37873e.prototype, "html"), _0x37873e.prototype), _0x21cae6 = _0x3fbe87(_0x37873e.prototype, "fontSize", [_0x5bebd8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 20;
        }
      }), _0x1e9f8d = _0x3fbe87(_0x37873e.prototype, "color", [_0x4ad643], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          {
            return _0x30027f(0, 0, 0, 255);
          }
        }
      }), _0x3b4363 = _0x37873e)) || _0x3b4363) || _0x3b4363));
      _0x4e22de._RF.pop();
    }
  };
});
System.register("chunks:///_virtual/ImprovedNoise.ts", ["cc"], function (_0x1e18b0) {
  var _0x21f34e;
  return {
    setters: [function (_0x381971) {
      _0x21f34e = _0x381971.cclegacy;
    }],
    execute: function () {
      _0x21f34e._RF.push({}, "b09f5L1rNxA5oghg+t/NKaI", "ImprovedNoise", undefined);
      for (var _0x527139 = [151, 160, 137, 91, 90, 15, 131, 13, 201, 95, 96, 53, 194, 233, 7, 225, 140, 36, 103, 30, 69, 142, 8, 99, 37, 240, 21, 10, 23, 190, 6, 148, 247, 120, 234, 75, 0, 26, 197, 62, 94, 252, 219, 203, 117, 35, 11, 32, 57, 177, 33, 88, 237, 149, 56, 87, 174, 20, 125, 136, 171, 168, 68, 175, 74, 165, 71, 134, 139, 48, 27, 166, 77, 146, 158, 231, 83, 111, 229, 122, 60, 211, 133, 230, 220, 105, 92, 41, 55, 46, 245, 40, 244, 102, 143, 54, 65, 25, 63, 161, 1, 216, 80, 73, 209, 76, 132, 187, 208, 89, 18, 169, 200, 196, 135, 130, 116, 188, 159, 86, 164, 100, 109, 198, 173, 186, 3, 64, 52, 217, 226, 250, 124, 123, 5, 202, 38, 147, 118, 126, 255, 82, 85, 212, 207, 206, 59, 227, 47, 16, 58, 17, 182, 189, 28, 42, 223, 183, 170, 213, 119, 248, 152, 2, 44, 154, 163, 70, 221, 153, 101, 155, 167, 43, 172, 9, 129, 22, 39, 253, 19, 98, 108, 110, 79, 113, 224, 232, 178, 185, 112, 104, 218, 246, 97, 228, 251, 34, 242, 193, 238, 210, 144, 12, 191, 179, 162, 241, 81, 51, 145, 235, 249, 14, 239, 107, 49, 192, 214, 31, 181, 199, 106, 157, 184, 84, 204, 176, 115, 121, 50, 45, 127, 4, 150, 254, 138, 236, 205, 93, 222, 114, 67, 29, 24, 72, 243, 141, 128, 195, 78, 66, 215, 61, 156, 180], _0x3229f7 = 0; _0x3229f7 < 256; _0x3229f7++) {
        _0x527139[256 + _0x3229f7] = _0x527139[_0x3229f7];
      }
      function _0x33219f(_0x3b54c5) {
        return _0x3b54c5 * _0x3b54c5 * _0x3b54c5 * (_0x3b54c5 * (6 * _0x3b54c5 - 15) + 10);
      }
      function _0x381d14(_0x2117e8, _0x427799, _0x2a9a7e) {
        return _0x427799 + _0x2117e8 * (_0x2a9a7e - _0x427799);
      }
      function _0x124960(_0x294fbf, _0x592792, _0x54ed53, _0x2c1d56) {
        var _0x5aaf02 = 15 & _0x294fbf;
        var _0x3b4bb1 = _0x5aaf02 < 8 ? _0x592792 : _0x54ed53;
        var _0x549ee8 = _0x5aaf02 < 4 ? _0x54ed53 : 12 == _0x5aaf02 || 14 == _0x5aaf02 ? _0x592792 : _0x2c1d56;
        return (0 == (1 & _0x5aaf02) ? _0x3b4bb1 : -_0x3b4bb1) + (0 == (2 & _0x5aaf02) ? _0x549ee8 : -_0x549ee8);
      }
      _0x1e18b0("ImprovedNoise", function () {
        function _0x3994a4() {}
        _0x3994a4.prototype.noise = function (_0x1a0e12, _0x2ae268, _0x35b3ce) {
          var _0x2d1f07 = Math.floor(_0x1a0e12);
          var _0x384632 = Math.floor(_0x2ae268);
          var _0x444098 = Math.floor(_0x35b3ce);
          var _0x22ef29 = 255 & _0x2d1f07;
          var _0xf6fa86 = 255 & _0x384632;
          var _0x5d211d = 255 & _0x444098;
          var _0x13fa52 = (_0x1a0e12 -= _0x2d1f07) - 1;
          var _0x323fda = (_0x2ae268 -= _0x384632) - 1;
          var _0x3080b9 = (_0x35b3ce -= _0x444098) - 1;
          var _0x21e6ec = _0x33219f(_0x1a0e12);
          var _0x3e857d = _0x33219f(_0x2ae268);
          var _0x2a65f4 = _0x33219f(_0x35b3ce);
          var _0x1187fb = _0x527139[_0x22ef29] + _0xf6fa86;
          var _0x1da479 = _0x527139[_0x1187fb] + _0x5d211d;
          var _0x1eba7d = _0x527139[_0x1187fb + 1] + _0x5d211d;
          var _0x2ad953 = _0x527139[_0x22ef29 + 1] + _0xf6fa86;
          var _0xaeb9a3 = _0x527139[_0x2ad953] + _0x5d211d;
          var _0x10a17e = _0x527139[_0x2ad953 + 1] + _0x5d211d;
          return _0x381d14(_0x2a65f4, _0x381d14(_0x3e857d, _0x381d14(_0x21e6ec, _0x124960(_0x527139[_0x1da479], _0x1a0e12, _0x2ae268, _0x35b3ce), _0x124960(_0x527139[_0xaeb9a3], _0x13fa52, _0x2ae268, _0x35b3ce)), _0x381d14(_0x21e6ec, _0x124960(_0x527139[_0x1eba7d], _0x1a0e12, _0x323fda, _0x35b3ce), _0x124960(_0x527139[_0x10a17e], _0x13fa52, _0x323fda, _0x35b3ce))), _0x381d14(_0x3e857d, _0x381d14(_0x21e6ec, _0x124960(_0x527139[_0x1da479 + 1], _0x1a0e12, _0x2ae268, _0x3080b9), _0x124960(_0x527139[_0xaeb9a3 + 1], _0x13fa52, _0x2ae268, _0x3080b9)), _0x381d14(_0x21e6ec, _0x124960(_0x527139[_0x1eba7d + 1], _0x1a0e12, _0x323fda, _0x3080b9), _0x124960(_0x527139[_0x10a17e + 1], _0x13fa52, _0x323fda, _0x3080b9))));
        };
        return _0x3994a4;
      }());
      _0x21f34e._RF.pop();
    }
  };
});
System.register("chunks:///_virtual/ImpulseStage.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./CinestationData.ts", "./NoiseGenerator.ts", "./BaseStage.ts"], function (_0x312ca9) {
  var _0x59d830;
  var _0x37b9cf;
  var _0x36fa42;
  var _0x31a75c;
  var _0x667f49;
  var _0x189000;
  return {
    setters: [function (_0x481cd0) {
      _0x59d830 = _0x481cd0.inheritsLoose;
      _0x37b9cf = _0x481cd0.createForOfIteratorHelperLoose;
    }, function (_0x517558) {
      _0x36fa42 = _0x517558.cclegacy;
    }, function (_0x37e03d) {
      _0x31a75c = _0x37e03d.cinestation;
    }, function (_0x24882c) {
      _0x667f49 = _0x24882c.NoiseGenerator;
    }, function (_0x7b1dbe) {
      _0x189000 = _0x7b1dbe.BaseStage;
    }],
    execute: function () {
      _0x36fa42._RF.push({}, "f21dbKN87dMO5qpMLHdGsc/", "ImpulseStage", undefined);
      _0x312ca9("ImpulseStage", function (_0x3a3d6a) {
        function _0x1b6abe() {
          return _0x3a3d6a.apply(this, arguments) || this;
        }
        _0x59d830(_0x1b6abe, _0x3a3d6a);
        _0x1b6abe.prototype.updateStage = function (_0x29432a) {
          for (var _0xc60043, _0x3319e7 = this._vcam, _0x144c70 = _0x3319e7.impulse, _0x37eccb = _0x37b9cf(_0x31a75c.impulseSources); !(_0xc60043 = _0x37eccb()).done;) {
            var _0x55ffc7 = _0xc60043.value;
            if (_0x55ffc7.node.layer & _0x144c70.source) {
              var _0x43c794 = _0x55ffc7.generateImpulse(_0x29432a);
              _0x43c794 && _0x667f49.ApplyNoise(_0x43c794, _0x3319e7);
            }
          }
        };
        return _0x1b6abe;
      }(_0x189000));
      _0x36fa42._RF.pop();
    }
  };
});
System.register("chunks:///_virtual/index.ts", ["cc", "./yx-collection-view.ts", "./yx-flow-layout.ts"], function (_0x3cfe4c) {
  var _0x188eae;
  return {
    setters: [function (_0x30cbda) {
      _0x188eae = _0x30cbda.cclegacy;
    }, function (_0x1f470e) {
      var _0xd32d = {
        YXCollectionView: _0x1f470e.YXCollectionView,
        YXEdgeInsets: _0x1f470e.YXEdgeInsets,
        YXIndexPath: _0x1f470e.YXIndexPath,
        YXLayout: _0x1f470e.YXLayout,
        YXLayoutAttributes: _0x1f470e.YXLayoutAttributes
      };
      _0x3cfe4c(_0xd32d);
    }, function (_0x55d293) {
      _0x3cfe4c("YXFlowLayout", _0x55d293.YXFlowLayout);
    }],
    execute: function () {
      {
        _0x188eae._RF.push({}, "1e299YNYrBBRo6Zh9p5Ik3Z", "index", undefined);
        _0x188eae._RF.pop();
      }
    }
  };
});
System.register("chunks:///_virtual/InputMgr.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], function (_0x1714b9) {
  var _0x38ded7;
  var _0x1026c6;
  return {
    setters: [function (_0x522987) {
      _0x38ded7 = _0x522987.createClass;
    }, function (_0x53fd9e) {
      _0x1026c6 = _0x53fd9e.cclegacy;
    }],
    execute: function () {
      _0x1026c6._RF.push({}, "8fac4mBG8lPo5xB3wRNGThs", "InputMgr", undefined);
      _0x1714b9("InputMgr", function () {
        function _0x5962c2() {
          {
            this.STATE_NORMAL = 1;
            this.STATE_KEEP = 2;
            this._flags = {};
            this._flagsMeta = {};
          }
        }
        var _0x26eb4d = _0x5962c2.prototype;
        _0x26eb4d.setFlag = function (_0x1c7880, _0x3c7b0c, _0xd49ddf) {
          this._flags[_0x1c7880] = _0x3c7b0c ? this.STATE_KEEP : this.STATE_NORMAL;
          null != _0xd49ddf && (this._flagsMeta[_0x1c7880] = _0xd49ddf);
        };
        _0x26eb4d.removeFlag = function (_0x5e4e7a) {
          delete this._flags[_0x5e4e7a];
        };
        _0x26eb4d.hasFlag = function (_0x3d44ac) {
          return !!this._flags[_0x3d44ac];
        };
        _0x26eb4d.getMetaByFlag = function (_0x531fc9) {
          return this._flagsMeta[_0x531fc9];
        };
        _0x26eb4d.update = function () {
          for (var _0x436e39 in this._flags) this._flags[_0x436e39] != this.STATE_KEEP && (this._flags[_0x436e39] = 0);
        };
        _0x38ded7(_0x5962c2, null, [{
          key: "inst",
          get: function () {
            this._inst || (this._inst = new _0x5962c2());
            return this._inst;
          }
        }]);
        return _0x5962c2;
      }())._inst = null;
      _0x1026c6._RF.pop();
    }
  };
});
System.register("chunks:///_virtual/interface.ts", ["cc"], function () {
  var _0x580565;
  return {
    setters: [function (_0x2748be) {
      _0x580565 = _0x2748be.cclegacy;
    }],
    execute: function () {
      _0x580565._RF.push({}, "dbeb7x/ykZC14tBqxOW9gtp", "interface", undefined);
      _0x580565._RF.pop();
    }
  };
});
System.register("chunks:///_virtual/IVCam.ts", ["cc"], function () {
  var _0x4aa24f;
  return {
    setters: [function (_0x596051) {
      _0x4aa24f = _0x596051.cclegacy;
    }],
    execute: function () {
      _0x4aa24f._RF.push({}, "15037D3BZVK3LlfNfJfNhch", "IVCam", undefined);
      _0x4aa24f._RF.pop();
    }
  };
});
System.register("chunks:///_virtual/JinFuConfirmPanel.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Panel.ts", "./decorators.ts", "./Utils.ts", "./WebNet.ts", "./UIFast.ts", "./JinFuExchangeSucPanel.ts"], function (_0x220a7f) {
  var _0x7d5b6f;
  var _0x13e2d7;
  var _0x3ff4df;
  var _0x274ca1;
  var _0x54ef7a;
  var _0x13ff61;
  var _0x5b1176;
  var _0x55aafc;
  var _0x4617e9;
  var _0x166744;
  var _0x2c27a5;
  var _0x5e9479;
  var _0x207841;
  var _0x47b31f;
  var _0x3e4cae;
  var _0x38c393;
  var _0x176921;
  var _0x542a89;
  var _0x5b8003;
  var _0x563cd8;
  var _0x4e5f76;
  var _0x24cd44;
  return {
    setters: [function (_0x432a3b) {
      _0x7d5b6f = _0x432a3b.applyDecoratedDescriptor;
      _0x13e2d7 = _0x432a3b.inheritsLoose;
      _0x3ff4df = _0x432a3b.initializerDefineProperty;
      _0x274ca1 = _0x432a3b.assertThisInitialized;
      _0x54ef7a = _0x432a3b.asyncToGenerator;
      _0x13ff61 = _0x432a3b.regeneratorRuntime;
    }, function (_0x1f0941) {
      _0x5b1176 = _0x1f0941.cclegacy;
      _0x55aafc = _0x1f0941._decorator;
      _0x4617e9 = _0x1f0941.Node;
      _0x166744 = _0x1f0941.Sprite;
      _0x2c27a5 = _0x1f0941.Label;
      _0x5e9479 = _0x1f0941.Button;
    }, function (_0x32d977) {
      _0x207841 = _0x32d977.default;
    }, function (_0x2784e3) {
      _0x47b31f = _0x2784e3.observer;
    }, function (_0x2dcec2) {
      _0x3e4cae = _0x2dcec2._asyncThrottle;
      _0x38c393 = _0x2dcec2.strFormat;
    }, function (_0x1b2681) {
      _0x176921 = _0x1b2681.sendLog;
      _0x542a89 = _0x1b2681.LOG_TYPE;
      _0x5b8003 = _0x1b2681.sendWebNetWithToken;
      _0x563cd8 = _0x1b2681.WebNetName;
    }, function (_0x2761a1) {
      _0x4e5f76 = _0x2761a1.showPanel;
    }, function (_0x304232) {
      _0x24cd44 = _0x304232.default;
    }],
    execute: function () {
      var _0x2f1604;
      var _0x5e5b37;
      var _0x14fec4;
      var _0x58f67c;
      var _0x5de87a;
      var _0x5b7e6a;
      var _0x1bb2ce;
      var _0x4045ec;
      var _0x220ae0;
      var _0x4a72aa;
      var _0x56453b;
      var _0x68889d;
      var _0x17b325;
      var _0x4eb182;
      var _0x4e70b2;
      var _0x258421;
      _0x5b1176._RF.push({}, "44714xXNGVFaJIxDuUMFxXc", "JinFuConfirmPanel", undefined);
      var _0x434d51 = _0x55aafc.ccclass;
      var _0x500649 = _0x55aafc.property;
      _0x220a7f("default", (_0x2f1604 = _0x434d51("JinFuConfirmPanel"), _0x5e5b37 = _0x500649(_0x4617e9), _0x14fec4 = _0x500649(_0x4617e9), _0x58f67c = _0x500649(_0x166744), _0x5de87a = _0x500649(_0x2c27a5), _0x5b7e6a = _0x500649(_0x2c27a5), _0x1bb2ce = _0x500649(_0x2c27a5), _0x47b31f(_0x4045ec = _0x2f1604(((_0x258421 = function (_0xe04d58) {
        function _0xa7a1e() {
          for (var _0x2a745d, _0x3d252e = arguments.length, _0x49f8ed = new Array(_0x3d252e), _0x33b76b = 0; _0x33b76b < _0x3d252e; _0x33b76b++) {
            _0x49f8ed[_0x33b76b] = arguments[_0x33b76b];
          }
          _0x2a745d = _0xe04d58.call.apply(_0xe04d58, [this].concat(_0x49f8ed)) || this;
          _0x3ff4df(_0x2a745d, "closeBtn", _0x4a72aa, _0x274ca1(_0x2a745d));
          _0x3ff4df(_0x2a745d, "mainBtn", _0x56453b, _0x274ca1(_0x2a745d));
          _0x3ff4df(_0x2a745d, "goodsImg", _0x68889d, _0x274ca1(_0x2a745d));
          _0x3ff4df(_0x2a745d, "jinfuLabel", _0x17b325, _0x274ca1(_0x2a745d));
          _0x3ff4df(_0x2a745d, "GoodsLabel_top", _0x4eb182, _0x274ca1(_0x2a745d));
          _0x3ff4df(_0x2a745d, "GoodsLabel_bottom", _0x4e70b2, _0x274ca1(_0x2a745d));
          _0x2a745d.option = undefined;
          _0x2a745d.consumeSps = undefined;
          _0x2a745d.clickClose = function () {
            _0x2a745d.hidePanel();
          };
          _0x2a745d.clickExchange = _0x3e4cae(_0x54ef7a(_0x13ff61().mark(function _0x94212d() {
            var _0x1b4cb3;
            var _0x440843;
            var _0xc9588;
            var _0x233152;
            var _0x161792;
            return _0x13ff61().wrap(function (_0x6b3a33) {
              for (;;) {
                switch (_0x6b3a33.prev = _0x6b3a33.next) {
                  case 0:
                    _0x176921(_0x542a89.CLICK, 9);
                    _0x440843 = _0x2a745d.data.item;
                    _0x6b3a33.next = 4;
                    return _0x5b8003(_0x563cd8.doExchange, {
                      ruId: _0x2a745d.option.ruleId,
                      gear: null == _0x440843 ? undefined : _0x440843.gear
                    });
                  case 4:
                    if (_0xc9588 = _0x6b3a33.sent, _0x233152 = _0xc9588.success, _0x161792 = _0xc9588.data, null == (_0x1b4cb3 = _0x2a745d.data) || _0x1b4cb3.queryGoodsInfo(), _0x233152) {
                      {
                        _0x6b3a33.next = 10;
                        break;
                      }
                    }
                    return _0x6b3a33.abrupt("return");
                  case 10:
                    _0x4e5f76(_0x24cd44, _0x161792);
                    _0x2a745d.hidePanel();
                  case 12:
                  case "end":
                    return _0x6b3a33.stop();
                }
              }
            }, _0x94212d);
          })));
          return _0x2a745d;
        }
        _0x13e2d7(_0xa7a1e, _0xe04d58);
        var _0x98d9ee = _0xa7a1e.prototype;
        _0x98d9ee.onLoad = function () {};
        _0x98d9ee.start = function () {
          var _0xbadb5 = _0x54ef7a(_0x13ff61().mark(function _0x324fb1() {
            var _0x2dc9bf;
            var _0x5d4cfa;
            var _0x31c763;
            var _0x3382eb;
            var _0x5d0870;
            return _0x13ff61().wrap(function (_0x5196b1) {
              for (;;) {
                switch (_0x5196b1.prev = _0x5196b1.next) {
                  case 0:
                    _0x3382eb = this.data || {};
                    _0x5d0870 = _0x3382eb.item;
                    this.option = (null == _0x5d0870 ? undefined : _0x5d0870.options[0]) || {};
                    this.consumeSps = (null == _0x5d0870 ? undefined : _0x5d0870.consumeSps[0]) || {};
                    this.closeBtn.on(_0x5e9479.EventType.CLICK, this.clickClose);
                    this.mainBtn.on(_0x5e9479.EventType.CLICK, this.clickExchange);
                    this.goodsImg.spriteFrame = null == (_0x2dc9bf = this.option) ? undefined : _0x2dc9bf.optionImg;
                    this.jinfuLabel.string = "您确定要花费" + ((null == (_0x5d4cfa = this.consumeSps) ? undefined : _0x5d4cfa.quantity) || "0") + "财气";
                    this.GoodsLabel_top.string = "兑换" + _0x38c393(null == (_0x31c763 = this.option) ? undefined : _0x31c763.optionName, 20);
                    this.GoodsLabel_bottom.string = "";
                  case 9:
                  case "end":
                    return _0x5196b1.stop();
                }
              }
            }, _0x324fb1, this);
          }));
          return function () {
            return _0xbadb5.apply(this, arguments);
          };
        }();
        return _0xa7a1e;
      }(_0x207841)).bundle = "JinFuConfirmPanel", _0x258421.skin = "JinFuConfirmPanel", _0x4a72aa = _0x7d5b6f((_0x220ae0 = _0x258421).prototype, "closeBtn", [_0x5e5b37], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x56453b = _0x7d5b6f(_0x220ae0.prototype, "mainBtn", [_0x14fec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          {
            return null;
          }
        }
      }), _0x68889d = _0x7d5b6f(_0x220ae0.prototype, "goodsImg", [_0x58f67c], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x17b325 = _0x7d5b6f(_0x220ae0.prototype, "jinfuLabel", [_0x5de87a], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          {
            return null;
          }
        }
      }), _0x4eb182 = _0x7d5b6f(_0x220ae0.prototype, "GoodsLabel_top", [_0x5b7e6a], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x4e70b2 = _0x7d5b6f(_0x220ae0.prototype, "GoodsLabel_bottom", [_0x1bb2ce], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x4045ec = _0x220ae0)) || _0x4045ec) || _0x4045ec));
      _0x5b1176._RF.pop();
    }
  };
});
System.register("chunks:///_virtual/JinFuExchangeSucPanel.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Panel.ts", "./decorators.ts", "./Utils.ts"], function (_0x5d101d) {
  var _0x41b82e;
  var _0xaf0a60;
  var _0x59af24;
  var _0x3e989e;
  var _0x4d35e3;
  var _0x2148e7;
  var _0x23ee54;
  var _0x59d41b;
  var _0x3611cf;
  var _0x255168;
  var _0x20ee0b;
  var _0x18bb59;
  var _0x9d6b40;
  var _0x33b2b2;
  var _0x274448;
  return {
    setters: [function (_0x33abf1) {
      _0x41b82e = _0x33abf1.applyDecoratedDescriptor;
      _0xaf0a60 = _0x33abf1.inheritsLoose;
      _0x59af24 = _0x33abf1.initializerDefineProperty;
      _0x3e989e = _0x33abf1.assertThisInitialized;
      _0x4d35e3 = _0x33abf1.asyncToGenerator;
      _0x2148e7 = _0x33abf1.regeneratorRuntime;
    }, function (_0x4003b1) {
      _0x23ee54 = _0x4003b1.cclegacy;
      _0x59d41b = _0x4003b1._decorator;
      _0x3611cf = _0x4003b1.Node;
      _0x255168 = _0x4003b1.Sprite;
      _0x20ee0b = _0x4003b1.Label;
      _0x18bb59 = _0x4003b1.Button;
    }, function (_0xf5cf76) {
      _0x9d6b40 = _0xf5cf76.default;
    }, function (_0x1b79f2) {
      _0x33b2b2 = _0x1b79f2.observer;
    }, function (_0x34bf5d) {
      _0x274448 = _0x34bf5d.strFormat;
    }],
    execute: function () {
      var _0x24ed43;
      var _0x3f779b;
      var _0x50abfa;
      var _0xb8fad1;
      var _0x41f010;
      var _0x9c9db4;
      var _0x165b09;
      var _0x589742;
      var _0x2c0e15;
      var _0x290522;
      var _0x31300a;
      var _0x17fb2b;
      _0x23ee54._RF.push({}, "631f0k5yXdCqJRz1c059uX9", "JinFuExchangeSucPanel", undefined);
      var _0x2adbad = _0x59d41b.ccclass;
      var _0x575efd = _0x59d41b.property;
      _0x5d101d("default", (_0x24ed43 = _0x2adbad("JinFuExchangeSucPanel"), _0x3f779b = _0x575efd(_0x3611cf), _0x50abfa = _0x575efd(_0x3611cf), _0xb8fad1 = _0x575efd(_0x255168), _0x41f010 = _0x575efd(_0x20ee0b), _0x33b2b2(_0x9c9db4 = _0x24ed43(((_0x17fb2b = function (_0x4abbc8) {
        function _0x905235() {
          {
            for (var _0x132614, _0x450491 = arguments.length, _0x3cdefd = new Array(_0x450491), _0x13aac6 = 0; _0x13aac6 < _0x450491; _0x13aac6++) {
              _0x3cdefd[_0x13aac6] = arguments[_0x13aac6];
            }
            _0x132614 = _0x4abbc8.call.apply(_0x4abbc8, [this].concat(_0x3cdefd)) || this;
            _0x59af24(_0x132614, "closeBtn", _0x589742, _0x3e989e(_0x132614));
            _0x59af24(_0x132614, "mainBtn", _0x2c0e15, _0x3e989e(_0x132614));
            _0x59af24(_0x132614, "goodsImg", _0x290522, _0x3e989e(_0x132614));
            _0x59af24(_0x132614, "goodsName", _0x31300a, _0x3e989e(_0x132614));
            _0x132614.clickClose = function () {
              _0x132614.hidePanel();
            };
            return _0x132614;
          }
        }
        _0xaf0a60(_0x905235, _0x4abbc8);
        var _0x527eb1 = _0x905235.prototype;
        _0x527eb1.onLoad = function () {
          this.closeBtn.on(_0x18bb59.EventType.CLICK, this.clickClose);
          this.mainBtn.on(_0x18bb59.EventType.CLICK, this.clickClose);
        };
        _0x527eb1.start = function () {
          var _0x4538eb = _0x4d35e3(_0x2148e7().mark(function _0x5aa1e5() {
            var _0x43257c;
            var _0x38efe6;
            var _0x55ca06;
            return _0x2148e7().wrap(function (_0x477d0c) {
              for (;;) {
                switch (_0x477d0c.prev = _0x477d0c.next) {
                  case 0:
                    _0x43257c = this.data;
                    _0x38efe6 = _0x43257c.optionName;
                    _0x55ca06 = _0x43257c.optionImg;
                    this.goodsImg.spriteFrame = _0x55ca06;
                    this.goodsName.string = _0x274448(_0x38efe6, 20);
                  case 3:
                  case "end":
                    return _0x477d0c.stop();
                }
              }
            }, _0x5aa1e5, this);
          }));
          return function () {
            return _0x4538eb.apply(this, arguments);
          };
        }();
        return _0x905235;
      }(_0x9d6b40)).bundle = "JinFuExchangeSucPanel", _0x17fb2b.skin = "JinFuExchangeSucPanel", _0x589742 = _0x41b82e((_0x165b09 = _0x17fb2b).prototype, "closeBtn", [_0x3f779b], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x2c0e15 = _0x41b82e(_0x165b09.prototype, "mainBtn", [_0x50abfa], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x290522 = _0x41b82e(_0x165b09.prototype, "goodsImg", [_0xb8fad1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x31300a = _0x41b82e(_0x165b09.prototype, "goodsName", [_0x41f010], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          {
            return null;
          }
        }
      }), _0x9c9db4 = _0x165b09)) || _0x9c9db4) || _0x9c9db4));
      _0x23ee54._RF.pop();
    }
  };
});
System.register("chunks:///_virtual/JinFuStoreScene.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./decorators.ts", "./Scene.ts", "./UIFast.ts", "./Utils.ts", "./WebNet.ts", "./index.ts", "./MainGame.ts", "./yx-masonry-flow-layout.ts", "./JinFuConfirmPanel.ts", "./yx-collection-view.ts"], function (_0x12dff7) {
  var _0x5c0fb7;
  var _0x3a5c5d;
  var _0x32c341;
  var _0x4c3a74;
  var _0x5e5ce7;
  var _0x1025bf;
  var _0x39cbed;
  var _0x5c2e6b;
  var _0x525d10;
  var _0x2b04a4;
  var _0x24a676;
  var _0x3ecd37;
  var _0x41c590;
  var _0x4b1001;
  var _0x714ba6;
  var _0x569745;
  var _0x51805b;
  var _0x232791;
  var _0x5ab29a;
  var _0x46e86e;
  var _0x336ba;
  var _0x1f748e;
  var _0x519246;
  var _0x15c759;
  var _0x451ff2;
  var _0x547b71;
  return {
    setters: [function (_0x2bf2cf) {
      _0x5c0fb7 = _0x2bf2cf.applyDecoratedDescriptor;
      _0x3a5c5d = _0x2bf2cf.inheritsLoose;
      _0x32c341 = _0x2bf2cf.initializerDefineProperty;
      _0x4c3a74 = _0x2bf2cf.assertThisInitialized;
      _0x5e5ce7 = _0x2bf2cf.asyncToGenerator;
      _0x1025bf = _0x2bf2cf.regeneratorRuntime;
    }, function (_0x255219) {
      _0x39cbed = _0x255219.cclegacy;
      _0x5c2e6b = _0x255219._decorator;
      _0x525d10 = _0x255219.Node;
      _0x2b04a4 = _0x255219.Label;
      _0x24a676 = _0x255219.Sprite;
      _0x3ecd37 = _0x255219.Button;
      _0x41c590 = _0x255219.Size;
    }, function (_0x573e51) {
      {
        _0x4b1001 = _0x573e51.observer;
      }
    }, function (_0x2d4f5f) {
      _0x714ba6 = _0x2d4f5f.default;
    }, function (_0x3bb561) {
      _0x569745 = _0x3bb561.changeScene;
      _0x51805b = _0x3bb561.showPanel;
      _0x232791 = _0x3bb561.hideWaiting;
      _0x5ab29a = _0x3bb561.showWaiting;
    }, function (_0x409e80) {
      _0x46e86e = _0x409e80._asyncThrottle;
    }, function (_0x45b57a) {
      _0x336ba = _0x45b57a.sendWebNet;
      _0x1f748e = _0x45b57a.WebNetName;
    }, null, function (_0x32afc3) {
      _0x519246 = _0x32afc3.MainGame;
    }, function (_0x266471) {
      _0x15c759 = _0x266471.YXMasonryFlowLayout;
    }, function (_0x598d34) {
      _0x451ff2 = _0x598d34.default;
    }, function (_0x1f42f7) {
      {
        _0x547b71 = _0x1f42f7.YXCollectionView;
      }
    }],
    execute: function () {
      var _0x462f81;
      var _0x38fc08;
      var _0x54c027;
      var _0x16a2b2;
      var _0x4b8115;
      var _0x299007;
      var _0x5596c6;
      var _0x5eb17f;
      var _0x46c85e;
      var _0x6705ea;
      _0x39cbed._RF.push({}, "d07e7ieXolMoJwVO59B9I6w", "JinFuStoreScene", undefined);
      var _0x57f379 = _0x5c2e6b.ccclass;
      var _0x82119f = _0x5c2e6b.property;
      _0x12dff7("JinFuStoreScene", (_0x462f81 = _0x57f379("JinFuStoreScene"), _0x38fc08 = _0x82119f(_0x525d10), _0x54c027 = _0x82119f(_0x2b04a4), _0x16a2b2 = _0x82119f(_0x547b71), _0x4b1001(_0x4b8115 = _0x462f81(((_0x6705ea = function (_0x596708) {
        function _0x56f69e() {
          for (var _0x4bff4e, _0x44f594 = arguments.length, _0x51bd20 = new Array(_0x44f594), _0x59b19d = 0; _0x59b19d < _0x44f594; _0x59b19d++) {
            _0x51bd20[_0x59b19d] = arguments[_0x59b19d];
          }
          _0x4bff4e = _0x596708.call.apply(_0x596708, [this].concat(_0x51bd20)) || this;
          _0x32c341(_0x4bff4e, "backBtn", _0x5596c6, _0x4c3a74(_0x4bff4e));
          _0x32c341(_0x4bff4e, "jinfenNum", _0x5eb17f, _0x4c3a74(_0x4bff4e));
          _0x32c341(_0x4bff4e, "Goods_List", _0x46c85e, _0x4c3a74(_0x4bff4e));
          _0x4bff4e.GoodsInfo = {};
          _0x4bff4e.GoodsListData = [];
          _0x4bff4e.clickBackHome = _0x46e86e(_0x5e5ce7(_0x1025bf().mark(function _0x198a27() {
            return _0x1025bf().wrap(function (_0x43793f) {
              {
                for (;;) {
                  switch (_0x43793f.prev = _0x43793f.next) {
                    case 0:
                      _0x43793f.next = 2;
                      return _0x569745(_0x519246);
                    case 2:
                    case "end":
                      return _0x43793f.stop();
                  }
                }
              }
            }, _0x198a27);
          })));
          _0x4bff4e.queryGoodsInfo = _0x5e5ce7(_0x1025bf().mark(function _0x202fe8() {
            var _0x829ade;
            var _0x12cd34;
            return _0x1025bf().wrap(function (_0x9951ab) {
              for (;;) {
                switch (_0x9951ab.prev = _0x9951ab.next) {
                  case 0:
                    _0x9951ab.next = 2;
                    return _0x336ba(_0x1f748e.queryExchange);
                  case 2:
                    if (_0x829ade = _0x9951ab.sent, _0x12cd34 = _0x829ade.data, _0x829ade.success) {
                      _0x9951ab.next = 7;
                      break;
                    }
                    return _0x9951ab.abrupt("return", false);
                  case 7:
                    _0x4bff4e.GoodsInfo = _0x12cd34;
                    _0x4bff4e.GoodsListData = (null == _0x12cd34 ? undefined : _0x12cd34.conditions) || [];
                    _0x4bff4e.jinfenNum.string = (null == _0x12cd34 ? undefined : _0x12cd34.extra) || 0;
                    _0x4bff4e.Goods_List.reloadData();
                  case 11:
                  case "end":
                    return _0x9951ab.stop();
                }
              }
            }, _0x202fe8);
          }));
          _0x4bff4e.onGoodsListCellDisplay = function (_0x899c06, _0x1fecb0, _0x2c7bc7) {
            var _0x47c404 = _0x4bff4e.GoodsListData[_0x1fecb0.item];
            _0x4bff4e.onGoodsCellDisplay(_0x899c06, _0x47c404);
          };
          _0x4bff4e.onGoodsCellDisplay = function (_0x1ccf28, _0xe64460) {
            var _0x44535c;
            var _0x3f4f50;
            var _0x1295aa = (null == _0xe64460 ? undefined : _0xe64460.options[0]) || {};
            var _0x41c105 = (null == _0xe64460 ? undefined : _0xe64460.consumeSps[0]) || {};
            var _0x5e9e71 = (null == _0x1295aa ? undefined : _0x1295aa.userLimitCount) > (null == _0x1295aa ? undefined : _0x1295aa.alreadyUserCount) && (null == _0x1295aa ? undefined : _0x1295aa.optionStock);
            var _0x2c1d61 = _0x1ccf28.getChildByName("mainbtn");
            var _0x41cb1e = _0x1ccf28.getChildByName("mainbtn_gary");
            _0x1ccf28.getChildByPath("Mask/img").getComponent(_0x24a676).spriteFrame = null == _0x1295aa ? undefined : _0x1295aa.optionImg;
            _0x1ccf28.getChildByPath("Mask/red_bg/剩余").getComponent(_0x2b04a4).string = "剩余" + (null != _0x1295aa && _0x1295aa.optionStock ? (null == _0x1295aa ? undefined : _0x1295aa.optionStock) > 99999 ? "99999+" : null == _0x1295aa ? undefined : _0x1295aa.optionStock : 0) + "件";
            _0x1ccf28.getChildByPath("jinfu/jinfu_num").getComponent(_0x2b04a4).string = (null == _0x41c105 ? undefined : _0x41c105.quantity) || 0;
            _0x1ccf28.getChildByName("goodsName").getComponent(_0x2b04a4).string = null == _0x1295aa ? undefined : _0x1295aa.optionName;
            _0x2c1d61.active = _0x5e9e71 && Number(null == (_0x44535c = _0x4bff4e.GoodsInfo) ? undefined : _0x44535c.extra) >= _0x41c105.quantity;
            _0x41cb1e.active = !_0x5e9e71 || Number(null == (_0x3f4f50 = _0x4bff4e.GoodsInfo) ? undefined : _0x3f4f50.extra) < _0x41c105.quantity;
            _0x2c1d61.targetOff(_0x4c3a74(_0x4bff4e));
            _0x2c1d61.on(_0x3ecd37.EventType.CLICK, function () {
              {
                return _0x4bff4e.clickToConfirm(_0x41c105, _0xe64460);
              }
            }, _0x4c3a74(_0x4bff4e));
          };
          _0x4bff4e.clickToConfirm = _0x5e5ce7(_0x1025bf().mark(function _0x134f15(_0x25ddad, _0x502fb1) {
            return _0x1025bf().wrap(function (_0x2edb6b) {
              for (;;) {
                switch (_0x2edb6b.prev = _0x2edb6b.next) {
                  case 0:
                    console.log("兑换出来", _0x502fb1);
                    _0x51805b(_0x451ff2, {
                      queryGoodsInfo: function () {
                        _0x4bff4e.queryGoodsInfo();
                      },
                      item: _0x502fb1
                    });
                  case 2:
                  case "end":
                    return _0x2edb6b.stop();
                }
              }
            }, _0x134f15);
          }));
          return _0x4bff4e;
        }
        _0x3a5c5d(_0x56f69e, _0x596708);
        var _0x2325ad = _0x56f69e.prototype;
        _0x2325ad.onLoad = function () {
          this.backBtn.on(_0x3ecd37.EventType.CLICK, this.clickBackHome, this);
        };
        _0x2325ad.onDestroy = function () {};
        _0x2325ad.start = function () {
          {
            var _0x12d5fe = _0x5e5ce7(_0x1025bf().mark(function _0x5323d3() {
              var _0x4a5c3e;
              var _0x91a249 = this;
              return _0x1025bf().wrap(function (_0x240266) {
                for (;;) {
                  switch (_0x240266.prev = _0x240266.next) {
                    case 0:
                      this.Goods_List.numberOfItems = function () {
                        return _0x91a249.GoodsListData.length;
                      };
                      this.Goods_List.onCellDisplay = this.onGoodsListCellDisplay;
                      (_0x4a5c3e = new _0x15c759()).horizontalSpacing = 10;
                      _0x4a5c3e.verticalSpacing = 10;
                      _0x4a5c3e.divide = 2;
                      _0x4a5c3e.itemSize = new _0x41c590(342, 459);
                      this.Goods_List.layout = _0x4a5c3e;
                      this.Goods_List.reloadData();
                      _0x5ab29a(true);
                      _0x240266.next = 12;
                      return this.queryGoodsInfo();
                    case 12:
                      _0x232791();
                    case 13:
                    case "end":
                      return _0x240266.stop();
                  }
                }
              }, _0x5323d3, this);
            }));
            return function () {
              return _0x12d5fe.apply(this, arguments);
            };
          }
        }();
        _0x2325ad.update = function () {};
        return _0x56f69e;
      }(_0x714ba6)).bundle = "JinFuStoreScene", _0x6705ea.skin = "JinFuStoreScene", _0x5596c6 = _0x5c0fb7((_0x299007 = _0x6705ea).prototype, "backBtn", [_0x38fc08], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x5eb17f = _0x5c0fb7(_0x299007.prototype, "jinfenNum", [_0x54c027], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x46c85e = _0x5c0fb7(_0x299007.prototype, "Goods_List", [_0x16a2b2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x4b8115 = _0x299007)) || _0x4b8115) || _0x4b8115));
      _0x39cbed._RF.pop();
    }
  };
});
System.register("chunks:///_virtual/jsonp.ts", ["cc"], function (_0xfc6ea8) {
  var _0x30295e;
  return {
    setters: [function (_0x2eba27) {
      _0x30295e = _0x2eba27.cclegacy;
    }],
    execute: function () {
      _0xfc6ea8("jsonp", function (_0x47c963, _0x99448d) {
        var _0x4bfaaf = _0x47c963 + "?" + function (_0x53e173) {
          if (!_0x53e173) {
            return "";
          }
          var _0x1df216 = [];
          for (var _0x342251 in _0x53e173) _0x1df216.push(encodeURIComponent(_0x342251) + "=" + encodeURIComponent(_0x53e173[_0x342251]));
          _0x1df216.push("_=" + Date.now());
          return _0x1df216.join("&");
        }(_0x99448d);
        var _0x236432 = document.createElement("script");
        _0x236432.src = _0x4bfaaf;
        _0x236432.onload = function () {
          document.body.removeChild(_0x236432);
        };
        _0x236432.onerror = function () {
          document.body.removeChild(_0x236432);
        };
        document.body.appendChild(_0x236432);
      });
      _0x30295e._RF.push({}, "9047cJUKDVMUa8HnZt+Pb8t", "jsonp", undefined);
      _0x30295e._RF.pop();
    }
  };
});
System.register("chunks:///_virtual/LoaderTools.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], function (_0x5aab54) {
  var _0xc2b1cc;
  var _0x3983e0;
  var _0xb7cb2b;
  var _0x36b70f;
  var _0x45ea0b;
  var _0x34b7a3;
  return {
    setters: [function (_0x5ad493) {
      _0xc2b1cc = _0x5ad493.asyncToGenerator;
      _0x3983e0 = _0x5ad493.regeneratorRuntime;
    }, function (_0xe5d67e) {
      _0xb7cb2b = _0xe5d67e.cclegacy;
      _0x36b70f = _0xe5d67e.lerp;
      _0x45ea0b = _0xe5d67e.resources;
      _0x34b7a3 = _0xe5d67e.assetManager;
    }],
    execute: function () {
      function _0x92fa55() {
        return (_0x92fa55 = _0xc2b1cc(_0x3983e0().mark(function _0xddc3e8(_0x1fb5aa, _0x173320, _0x253065, _0x461238) {
          var _0x4bc911;
          var _0xb8031c;
          var _0x3c1bcd;
          return _0x3983e0().wrap(function (_0x4249c4) {
            for (;;) {
              switch (_0x4249c4.prev = _0x4249c4.next) {
                case 0:
                  undefined === _0x173320 && (_0x173320 = function (_0x39b55e) {});
                  undefined === _0x253065 && (_0x253065 = 0);
                  undefined === _0x461238 && (_0x461238 = 1);
                  _0x4bc911 = _0x1fb5aa.length;
                  _0xb8031c = 0;
                  _0x3c1bcd = _0x1fb5aa.map(function (_0x2e555f) {
                    return new Promise(function (_0x4179e3) {
                      _0x2e555f.bundle.load(_0x2e555f.path, function () {
                        _0xb8031c++;
                        var _0x2339d7 = _0x36b70f(_0x253065, _0x461238, _0xb8031c / _0x4bc911);
                        _0x173320(_0x2339d7);
                        _0x4179e3();
                      });
                    });
                  });
                  _0x4249c4.next = 8;
                  return Promise.all(_0x3c1bcd);
                case 8:
                case "end":
                  return _0x4249c4.stop();
              }
            }
          }, _0xddc3e8);
        }))).apply(this, arguments);
      }
      function _0x5ccf4d() {
        return (_0x5ccf4d = _0xc2b1cc(_0x3983e0().mark(function _0x4732a1(_0x2421e4, _0x48e0ab, _0x38c37c, _0x335de6) {
          var _0x2ef9ef;
          var _0xa333fc;
          var _0x3653c2;
          var _0x1b7670;
          return _0x3983e0().wrap(function (_0x39a9fe) {
            for (;;) {
              switch (_0x39a9fe.prev = _0x39a9fe.next) {
                case 0:
                  undefined === _0x48e0ab && (_0x48e0ab = function (_0x1f5083) {});
                  undefined === _0x38c37c && (_0x38c37c = 0);
                  undefined === _0x335de6 && (_0x335de6 = 1);
                  _0x2ef9ef = [];
                  _0xa333fc = [];
                  _0x3653c2 = 0;
                  _0x1b7670 = 0;
                  _0x2421e4.forEach(function (_0x1c1fb6) {
                    {
                      if ("string" == typeof _0x1c1fb6) {
                        return _0x2ef9ef.push({
                          path: _0x1c1fb6,
                          bundle: _0x45ea0b
                        });
                      }
                      switch (_0x1c1fb6.type) {
                        case "dir":
                          _0x45ea0b.getDirWithPath(_0x1c1fb6.path).forEach(function (_0xfc451c) {
                            _0x2ef9ef.push({
                              path: _0xfc451c.path,
                              bundle: _0x45ea0b
                            });
                          });
                          break;
                        case "bundle":
                          _0x3653c2++;
                          _0xa333fc.push(new Promise(function (_0x4b48b7) {
                            _0x34b7a3.loadBundle(_0x1c1fb6.path, function (_0x4248e9, _0xf48028) {
                              _0x4248e9 && console.error(1231231, _0x4248e9);
                              _0xf48028.getDirWithPath("").forEach(function (_0x5191aa) {
                                _0x2ef9ef.push({
                                  path: _0x5191aa.path,
                                  bundle: _0xf48028
                                });
                              });
                              _0x1b7670++;
                              var _0x1d98e8 = _0x36b70f(_0x38c37c, _0x335de6, _0x1b7670 / _0x3653c2);
                              _0x48e0ab(_0x1d98e8);
                              _0x4b48b7();
                            });
                          }));
                          break;
                        default:
                          _0x2ef9ef.push({
                            bundle: _0x45ea0b,
                            path: _0x1c1fb6.path
                          });
                      }
                    }
                  });
                  _0x39a9fe.next = 10;
                  return Promise.all(_0xa333fc);
                case 10:
                  return _0x39a9fe.abrupt("return", _0x2ef9ef);
                case 11:
                case "end":
                  return _0x39a9fe.stop();
              }
            }
          }, _0x4732a1);
        }))).apply(this, arguments);
      }
      _0x5aab54({
        getPreLoadList: function (_0x159efc, _0x5ab966, _0x1fbcbd, _0x506c1e) {
          return _0x5ccf4d.apply(this, arguments);
        },
        preload: function (_0x5c0840, _0x3271ed, _0x170173, _0x12f17c) {
          return _0x92fa55.apply(this, arguments);
        }
      });
      _0xb7cb2b._RF.push({}, "14469weO3FJL7IODhDKiKGF", "LoaderTools", undefined);
      _0xb7cb2b._RF.pop();
    }
  };
});
System.register("chunks:///_virtual/loadSvga.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], function (_0xa32cac) {
  var _0x5400aa;
  var _0xbef818;
  var _0x5ca178;
  var _0x5c2f95;
  var _0x20443f;
  var _0x50c214;
  var _0x1581d2;
  return {
    setters: [function (_0x275355) {
      _0x5400aa = _0x275355.asyncToGenerator;
      _0xbef818 = _0x275355.regeneratorRuntime;
    }, function (_0x150f14) {
      _0x5ca178 = _0x150f14.cclegacy;
      _0x5c2f95 = _0x150f14.assetManager;
      _0x20443f = _0x150f14.Texture2D;
      _0x50c214 = _0x150f14.ImageAsset;
      _0x1581d2 = _0x150f14.SpriteFrame;
    }],
    execute: function () {
      _0xa32cac({
        createImage: function (_0x18a421) {
          if (_0x3a2491[_0x18a421]) {
            return _0x3a2491[_0x18a421];
          }
          var _0x2dfe55 = new Image();
          _0x3a2491[_0x18a421] = _0x2dfe55;
          _0x2dfe55.src = _0x18a421;
          return _0x2dfe55;
        },
        createImageAsync: _0x166e02,
        createSpriteFrameAsync: function (_0x1e7f0a) {
          return _0x2b817d.apply(this, arguments);
        }
      });
      _0x5ca178._RF.push({}, "d0e08EVP/pFhJXdUpznXvD+", "loadSvga", undefined);
      var _0x5df779 = {};
      _0x5c2f95.downloader.register(".svga", _0x5400aa(_0xbef818().mark(function _0x445322(_0x51a9b2, _0x58d1ea, _0x46b130) {
        {
          var _0x3d5674;
          return _0xbef818().wrap(function (_0x265fd3) {
            for (;;) {
              switch (_0x265fd3.prev = _0x265fd3.next) {
                case 0:
                  _0x5df779[_0x51a9b2] || (_0x5df779[_0x51a9b2] = new Promise(_0x5400aa(_0xbef818().mark(function _0xc9af4b(_0xed998a) {
                    var _0x19b52b;
                    var _0x2c98b0;
                    return _0xbef818().wrap(function (_0x2756e6) {
                      for (;;) {
                        switch (_0x2756e6.prev = _0x2756e6.next) {
                          case 0:
                            _0x19b52b = new SVGA.Parser({
                              isDisableWebWorker: CC_EDITOR,
                              isDisableImageBitmapShim: true
                            });
                            _0x2756e6.next = 3;
                            return _0x19b52b.load(_0x51a9b2);
                          case 3:
                            _0x2c98b0 = _0x2756e6.sent;
                            _0xed998a(_0x2c98b0);
                          case 5:
                          case "end":
                            return _0x2756e6.stop();
                        }
                      }
                    }, _0xc9af4b);
                  }))));
                  _0x265fd3.next = 3;
                  return _0x5df779[_0x51a9b2];
                case 3:
                  _0x3d5674 = _0x265fd3.sent;
                  _0x46b130(null, _0x3d5674);
                case 5:
                case "end":
                  return _0x265fd3.stop();
              }
            }
          }, _0x445322);
        }
      })));
      var _0x3a2491 = _0xa32cac("ImgCache", {});
      function _0x166e02(_0x805f5a) {
        return new Promise(function (_0x2d05c8) {
          if (_0x3a2491[_0x805f5a]) {
            _0x2d05c8(_0x3a2491[_0x805f5a]);
          } else {
            var _0x23ec96 = new Image();
            _0x23ec96.onload = function () {
              _0x3a2491[_0x805f5a] = _0x23ec96;
              _0x2d05c8(_0x23ec96);
            };
            _0x23ec96.src = _0x805f5a;
          }
        });
      }
      var _0x2c7e0b = _0xa32cac("SpCache", {});
      function _0x2b817d() {
        {
          return (_0x2b817d = _0x5400aa(_0xbef818().mark(function _0x3ed3a8(_0x3b79fb) {
            var _0xa2db90;
            var _0x55ed7d;
            var _0xf672f5;
            return _0xbef818().wrap(function (_0x145789) {
              for (;;) {
                switch (_0x145789.prev = _0x145789.next) {
                  case 0:
                    if (!_0x2c7e0b[_0x3b79fb]) {
                      _0x145789.next = 2;
                      break;
                    }
                    return _0x145789.abrupt("return", _0x2c7e0b[_0x3b79fb]);
                  case 2:
                    _0x145789.next = 4;
                    return _0x166e02(_0x3b79fb);
                  case 4:
                    _0xa2db90 = _0x145789.sent;
                    (_0x55ed7d = new _0x20443f()).setWrapMode(_0x20443f.WrapMode.CLAMP_TO_EDGE, _0x20443f.WrapMode.CLAMP_TO_EDGE, _0x20443f.WrapMode.CLAMP_TO_EDGE);
                    _0x55ed7d.image = new _0x50c214(_0xa2db90);
                    (_0xf672f5 = new _0x1581d2()).texture = _0x55ed7d;
                    _0x2c7e0b[_0x3b79fb] = _0xf672f5;
                    return _0x145789.abrupt("return", _0xf672f5);
                  case 12:
                  case "end":
                    return _0x145789.stop();
                }
              }
            }, _0x3ed3a8);
          }))).apply(this, arguments);
        }
      }
      _0x5ca178._RF.pop();
    }
  };
});
System.register("chunks:///_virtual/main", ["./CirculatePageView.ts", "./HTMLRichText.ts", "./MusicBtn.ts", "./Svga.ts", "./SvgaOffScreen.ts", "./SvgaTrack.ts", "./interface.ts", "./loadSvga.ts", "./custom-grid-flow-layout.ts", "./yx-card-page-layout.ts", "./yx-carousel-layout.ts", "./yx-cover-layout.ts", "./yx-masonry-flow-layout.ts", "./yx-page-view.ts", "./yx-table-view.ts", "./index.ts", "./yx-collection-view.ts", "./yx-compact-flow-layout.ts", "./yx-flow-layout.ts", "./MEvent.ts", "./Module.ts", "./Panel.ts", "./RES.ts", "./Scene.ts", "./UIFast.ts", "./UILayer.ts", "./UIMgr.ts", "./SpriteHooks.ts", "./AppTool.ts", "./NetTime.ts", "./CravePanel.ts", "./ExchangePowerPanel.ts", "./ExchangePowerSucPanel.ts", "./FirstSkinPanel.ts", "./GetPrizePanel.ts", "./GuidePanel.ts", "./JinFuConfirmPanel.ts", "./JinFuExchangeSucPanel.ts", "./QingGuoConfirmPanel.ts", "./QingGuoExchangeSucPanel.ts", "./RankKeepPanel.ts", "./RankKeepSvgaPanel.ts", "./RankRedeceListPanel.ts", "./RankRedeceNoListPanel.ts", "./RankReduceSvgaPanel.ts", "./RankUpgradePanel.ts", "./RankUpgradeSvgaPanel.ts", "./RulePanel.ts", "./TaskFeedBackPanel.ts", "./TaskPanel.ts", "./HomeScene.ts", "./JinFuStoreScene.ts", "./Ball.ts", "./Roller.ts", "./GameTest.ts", "./GameUI.ts", "./GenBall.ts", "./MainGame.ts", "./uitl.ts", "./PrizeScene.ts", "./RankScene.ts", "./RuleScene.ts", "./CoroutineRunner.ts", "./Crypto.ts", "./ExecutePreFrame.ts", "./ImprovedNoise.ts", "./LoaderTools.ts", "./NodePool.ts", "./Utils.ts", "./WebNet.ts", "./jsonp.ts", "./webTools.ts", "./Weight.ts", "./constants.ts", "./ecaptcha.ts", "./pageVisibilityNotify.ts", "./decorators.ts", "./gameStore.ts", "./shareStore.ts", "./store.ts", "./Start.ts", "./ZipLoader.ts", "./CinestaionImpulseSource.ts", "./CinestationBlendDefinition.ts", "./CinestationBrain.ts", "./CinestationData.ts", "./CinestationEasing.ts", "./CinestationMath.ts", "./CinestationShareAssets.ts", "./CinestationSmoothPath.ts", "./Events.ts", "./Types.ts", "./Visualization.ts", "./Base.ts", "./IVCam.ts", "./VCamAim.ts", "./VCamAutoDolly.ts", "./VCamBody.ts", "./VCamComposer.ts", "./VCamFreeLook.ts", "./VCamHardLook.ts", "./VCamImpulse.ts", "./VCamLens.ts", "./VCamNoise.ts", "./VCamTracked.ts", "./CameraHandler.ts", "./ComposerHandler.ts", "./FreeLookHandler.ts", "./HardLookAtHandler.ts", "./NoiseHandler.ts", "./TrackedHandler.ts", "./NoiseGenerator.ts", "./Predictor.ts", "./AimStage.ts", "./BaseStage.ts", "./BodyStage.ts", "./ImpulseStage.ts", "./NoiseStage.ts", "./VirtualCamera.ts", "./AudioMgr.ts", "./InputMgr.ts", "./ModuleContext.ts", "./ResolutionAutoFit.ts", "./ResourceMgr.ts", "./SafeJSON.ts", "./SceneUtils.ts", "./URLUtils.ts", "./FPSCamera.ts", "./FollowCamera2D.ts", "./FreeCamera.ts", "./ThirdPersonCamera.ts", "./CharacterMovement.ts", "./CharacterMovement2D.ts", "./EasyController.ts", "./ThirdPersonCameraCtrl.ts", "./UI_Joystick.ts", "./tgx.ts"], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});
System.register("chunks:///_virtual/MainGame.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Scene.ts", "./decorators.ts", "./Ball.ts", "./GenBall.ts", "./store.ts", "./gameStore.ts", "./Utils.ts", "./GameUI.ts", "./UIFast.ts", "./TaskFeedBackPanel.ts", "./Roller.ts", "./constants.ts", "./RankUpgradeSvgaPanel.ts", "./RankKeepSvgaPanel.ts", "./RankReduceSvgaPanel.ts", "./CravePanel.ts", "./GetPrizePanel.ts", "./pageVisibilityNotify.ts", "./WebNet.ts", "./AudioMgr.ts", "./GuidePanel.ts", "./ExchangePowerPanel.ts"], function (_0x13970d) {
  var _0x6eec7f;
  var _0x35b1dc;
  var _0x474cbb;
  var _0x918c5a;
  var _0x138285;
  var _0x4e1bab;
  var _0x380035;
  var _0x36c4b0;
  var _0x1f6ce2;
  var _0x5717b2;
  var _0x30ad5d;
  var _0x1e06d2;
  var _0x5d0049;
  var _0x492555;
  var _0x541c1;
  var _0x2a259b;
  var _0x396d9b;
  var _0x14f1bc;
  var _0x3292a6;
  var _0x2d4d39;
  var _0x1833b5;
  var _0x16ae64;
  var _0x1a1ebb;
  var _0x389263;
  var _0x3b9795;
  var _0x54e8a1;
  var _0x15d669;
  var _0x2fc872;
  var _0x5bcd4e;
  var _0x1f90a5;
  var _0x569130;
  var _0x4804ab;
  var _0x54e983;
  var _0x186008;
  var _0x2f7aab;
  var _0x38ff70;
  var _0x4feea8;
  var _0x18fa2a;
  var _0x178ab5;
  var _0x6115e5;
  var _0x299516;
  var _0x2c7c71;
  var _0x28e8d1;
  var _0x1c7edb;
  var _0x92a03f;
  var _0xd58d75;
  var _0x4fb73d;
  return {
    setters: [function (_0x1dc04d) {
      {
        _0x6eec7f = _0x1dc04d.applyDecoratedDescriptor;
        _0x35b1dc = _0x1dc04d.inheritsLoose;
        _0x474cbb = _0x1dc04d.initializerDefineProperty;
        _0x918c5a = _0x1dc04d.assertThisInitialized;
        _0x138285 = _0x1dc04d.asyncToGenerator;
        _0x4e1bab = _0x1dc04d.regeneratorRuntime;
        _0x380035 = _0x1dc04d.extends;
      }
    }, function (_0x4edda8) {
      _0x36c4b0 = _0x4edda8.cclegacy;
      _0x1f6ce2 = _0x4edda8._decorator;
      _0x5717b2 = _0x4edda8.Node;
      _0x30ad5d = _0x4edda8.PlaneCollider;
      _0x1e06d2 = _0x4edda8.Collider;
      _0x5d0049 = _0x4edda8.Texture2D;
      _0x492555 = _0x4edda8.Button;
      _0x541c1 = _0x4edda8.Tween;
      _0x2a259b = _0x4edda8.tween;
      _0x396d9b = _0x4edda8.v3;
      _0x14f1bc = _0x4edda8.Color;
      _0x3292a6 = _0x4edda8.MeshRenderer;
      _0x2d4d39 = _0x4edda8.PhysicsSystem;
    }, function (_0x30dfec) {
      _0x1833b5 = _0x30dfec.default;
    }, function (_0x3d361b) {
      _0x16ae64 = _0x3d361b.observer;
      _0x1a1ebb = _0x3d361b.render;
    }, function (_0x3df16c) {
      _0x389263 = _0x3df16c.BallType;
      _0x3b9795 = _0x3df16c.Ball;
    }, function (_0x19272f) {
      _0x54e8a1 = _0x19272f.GenBall;
    }, function (_0x376e56) {
      _0x15d669 = _0x376e56.default;
    }, function (_0x9817a) {
      _0x2fc872 = _0x9817a.default;
    }, function (_0x2d8fb6) {
      _0x5bcd4e = _0x2d8fb6._asyncThrottle;
    }, function (_0x71ee1d) {
      _0x1f90a5 = _0x71ee1d.GameUI;
    }, function (_0x5ebf40) {
      _0x569130 = _0x5ebf40.showPanel;
    }, function (_0x39442b) {
      _0x4804ab = _0x39442b.default;
    }, function (_0xcf0c0d) {
      _0x54e983 = _0xcf0c0d.Roller;
    }, function (_0xb7a205) {
      _0x186008 = _0xb7a205.SpIdMap;
      _0x2f7aab = _0xb7a205.SpIdIndex;
    }, function (_0x147dc9) {
      _0x38ff70 = _0x147dc9.default;
    }, function (_0xfae6e3) {
      _0x4feea8 = _0xfae6e3.default;
    }, function (_0x3e5399) {
      _0x18fa2a = _0x3e5399.default;
    }, function (_0x5d927c) {
      _0x178ab5 = _0x5d927c.default;
    }, function (_0xe9b455) {
      _0x6115e5 = _0xe9b455.default;
    }, function (_0x3dc16f) {
      _0x299516 = _0x3dc16f.unwatchPageVisibility;
      _0x2c7c71 = _0x3dc16f.watchPageVisibility;
    }, function (_0x4e52ea) {
      _0x28e8d1 = _0x4e52ea.sendLog;
      _0x1c7edb = _0x4e52ea.LOG_TYPE;
    }, function (_0x16f356) {
      {
        _0x92a03f = _0x16f356.AudioMgr;
      }
    }, function (_0x3ec478) {
      {
        _0xd58d75 = _0x3ec478.default;
      }
    }, function (_0x21674c) {
      _0x4fb73d = _0x21674c.default;
    }],
    execute: function () {
      var _0x4446f8;
      var _0x50dbb8;
      var _0xbbd183;
      var _0x18ba9e;
      var _0x2cf98a;
      var _0x181f3f;
      var _0x505785;
      var _0x5c0756;
      var _0x1a9053;
      var _0x216b22;
      var _0x4418ff;
      var _0x59db67;
      var _0x542c4b;
      var _0x5e39b2;
      var _0x1cca77;
      var _0x25a4d3;
      var _0xba62e8;
      var _0x5a4ead;
      var _0x3aa215;
      var _0x4bdebe;
      var _0x2f6c13;
      var _0x113a16;
      var _0x258074;
      var _0x10a104;
      var _0x59606d;
      var _0x2c8c9f;
      var _0xe259b8;
      var _0x279a03;
      var _0x446157;
      var _0x2935e0;
      var _0x5843d6;
      var _0x40de58;
      var _0x1acd10;
      var _0x35141e;
      var _0x4a042e;
      var _0x41a14a;
      var _0x1157b5;
      var _0x3f5243;
      _0x36c4b0._RF.push({}, "82c44Ork3tL+o56WmoE8TcQ", "MainGame", undefined);
      var _0x5f2f63 = _0x1f6ce2.ccclass;
      var _0x7fec13 = _0x1f6ce2.property;
      _0x13970d("MainGame", (_0x4446f8 = _0x5f2f63("MainGame"), _0x50dbb8 = _0x7fec13(_0x5717b2), _0xbbd183 = _0x7fec13(_0x5717b2), _0x18ba9e = _0x7fec13(_0x54e8a1), _0x2cf98a = _0x7fec13(_0x1f90a5), _0x181f3f = _0x7fec13(_0x30ad5d), _0x505785 = _0x7fec13(_0x1e06d2), _0x5c0756 = _0x7fec13(_0x1e06d2), _0x1a9053 = _0x7fec13(_0x5717b2), _0x216b22 = _0x7fec13(_0x5717b2), _0x4418ff = _0x7fec13(_0x5717b2), _0x59db67 = _0x7fec13({
        type: _0x5717b2,
        displayName: "滚筒1"
      }), _0x542c4b = _0x7fec13({
        type: _0x5717b2,
        displayName: "滚筒2"
      }), _0x5e39b2 = _0x7fec13({
        type: _0x5717b2,
        displayName: "滚筒3"
      }), _0x1cca77 = _0x7fec13({
        type: [_0x5d0049],
        displayName: "奖品材质列表"
      }), _0x25a4d3 = _0x7fec13(_0x5717b2), _0xba62e8 = _0x7fec13(_0x5717b2), _0x5a4ead = _0x7fec13(_0x492555), _0x16ae64(_0x3aa215 = _0x4446f8(((_0x3f5243 = function (_0x24685d) {
        function _0x2d3b15() {
          for (var _0x21e8d1, _0x2d8212 = arguments.length, _0x4caccc = new Array(_0x2d8212), _0x1820fd = 0; _0x1820fd < _0x2d8212; _0x1820fd++) {
            _0x4caccc[_0x1820fd] = arguments[_0x1820fd];
          }
          _0x21e8d1 = _0x24685d.call.apply(_0x24685d, [this].concat(_0x4caccc)) || this;
          _0x474cbb(_0x21e8d1, "mask", _0x2f6c13, _0x918c5a(_0x21e8d1));
          _0x474cbb(_0x21e8d1, "putBtn", _0x113a16, _0x918c5a(_0x21e8d1));
          _0x474cbb(_0x21e8d1, "genBall", _0x258074, _0x918c5a(_0x21e8d1));
          _0x474cbb(_0x21e8d1, "gameUI", _0x10a104, _0x918c5a(_0x21e8d1));
          _0x474cbb(_0x21e8d1, "planeCollider", _0x59606d, _0x918c5a(_0x21e8d1));
          _0x474cbb(_0x21e8d1, "collectCollider", _0x2c8c9f, _0x918c5a(_0x21e8d1));
          _0x474cbb(_0x21e8d1, "drawCollider", _0xe259b8, _0x918c5a(_0x21e8d1));
          _0x474cbb(_0x21e8d1, "modelTxt1", _0x279a03, _0x918c5a(_0x21e8d1));
          _0x474cbb(_0x21e8d1, "modelTxt2", _0x446157, _0x918c5a(_0x21e8d1));
          _0x474cbb(_0x21e8d1, "deng", _0x2935e0, _0x918c5a(_0x21e8d1));
          _0x474cbb(_0x21e8d1, "cylinder1", _0x5843d6, _0x918c5a(_0x21e8d1));
          _0x474cbb(_0x21e8d1, "cylinder2", _0x40de58, _0x918c5a(_0x21e8d1));
          _0x474cbb(_0x21e8d1, "cylinder3", _0x1acd10, _0x918c5a(_0x21e8d1));
          _0x474cbb(_0x21e8d1, "prizeTexture", _0x35141e, _0x918c5a(_0x21e8d1));
          _0x474cbb(_0x21e8d1, "btnMaskNode", _0x4a042e, _0x918c5a(_0x21e8d1));
          _0x474cbb(_0x21e8d1, "btnMask", _0x41a14a, _0x918c5a(_0x21e8d1));
          _0x474cbb(_0x21e8d1, "mainButton", _0x1157b5, _0x918c5a(_0x21e8d1));
          _0x21e8d1.willDestroyBall = [];
          _0x21e8d1.willReport = {
            lossGoldNum: 0,
            lossNormalNum: 0,
            acquireGoldNum: 0,
            acquireNormalNum: 0
          };
          _0x21e8d1.willDraw = [];
          _0x21e8d1.canDraw = true;
          _0x21e8d1.textureInfo = [];
          _0x21e8d1.countDown = 30000;
          _0x21e8d1.pageVisibilityChange = function (_0x94addb) {
            _0x94addb && _0x21e8d1.updateInfo();
          };
          _0x21e8d1.report = _0x138285(_0x4e1bab().mark(function _0x4cd033() {
            var _0x5637d1;
            var _0x12befb;
            var _0x2b2182;
            var _0x58fe25;
            var _0x59b1da;
            var _0x164a39;
            var _0x12e51f;
            var _0x3416e5;
            var _0x2edd65;
            return _0x4e1bab().wrap(function (_0x3dcfaf) {
              for (;;) {
                switch (_0x3dcfaf.prev = _0x3dcfaf.next) {
                  case 0:
                    if (_0x5637d1 = _0x21e8d1.willReport, _0x12befb = _0x5637d1.lossNormalNum, _0x2b2182 = _0x5637d1.lossGoldNum, _0x58fe25 = _0x5637d1.acquireNormalNum, _0x59b1da = _0x5637d1.acquireGoldNum, _0x2b2182 + _0x12befb + _0x59b1da + _0x58fe25) {
                      _0x3dcfaf.next = 4;
                      break;
                    }
                    return _0x3dcfaf.abrupt("return");
                  case 4:
                    for (_0x164a39 in console.table(_0x21e8d1.willReport), _0x21e8d1.willReport) _0x21e8d1.willReport[_0x164a39] = 0;
                    _0x3dcfaf.next = 8;
                    return _0x2fc872.report({
                      lossGoldNum: _0x2b2182,
                      lossNormalNum: _0x12befb,
                      acquireGoldNum: _0x59b1da,
                      acquireNormalNum: _0x58fe25
                    });
                  case 8:
                    (_0x12e51f = _0x3dcfaf.sent) || (_0x21e8d1.willReport.lossNormalNum += _0x12befb, _0x21e8d1.willReport.lossGoldNum += _0x2b2182, _0x21e8d1.willReport.acquireNormalNum += _0x58fe25, _0x21e8d1.willReport.acquireGoldNum += _0x59b1da);
                    _0x12e51f.lastNormalNum;
                    _0x12e51f.lastGoldNum;
                    _0x3416e5 = _0x12e51f.currentNormalNum;
                    _0x2edd65 = _0x12e51f.currentGoldNum;
                    _0x21e8d1.checkBallNum(_0x3416e5, _0x2edd65);
                  case 12:
                  case "end":
                    return _0x3dcfaf.stop();
                }
              }
            }, _0x4cd033);
          }));
          _0x21e8d1.checkBallNum = function (_0x2ccdc8, _0x10cc94) {};
          _0x21e8d1.clickPutBtn = _0x5bcd4e(_0x138285(_0x4e1bab().mark(function _0x3c62d4() {
            {
              var _0x430e42;
              var _0x1c7b28;
              var _0x1075b5;
              var _0xf8c9;
              return _0x4e1bab().wrap(function (_0x5f1b8f) {
                for (;;) {
                  switch (_0x5f1b8f.prev = _0x5f1b8f.next) {
                    case 0:
                      if (_0x28e8d1(_0x1c7edb.CLICK, 4), _0x15d669.checkActTime()) {
                        _0x5f1b8f.next = 3;
                        break;
                      }
                      return _0x5f1b8f.abrupt("return");
                    case 3:
                      if (_0x21e8d1.btnMaskNode.active = true, _0x541c1.stopAllByTarget(_0x21e8d1.btnMask), _0x21e8d1.mainButton.interactable = false, _0x2a259b(_0x21e8d1.btnMask).set({
                        scale: _0x396d9b(1, 1, 1)
                      }).to(3, {
                        scale: _0x396d9b(0, 1, 1)
                      }).call(function () {
                        _0x21e8d1.mainButton.interactable = true;
                        _0x21e8d1.btnMaskNode.active = false;
                      }).start(), !(_0x15d669.homeInfo.currentEnergy.initEnergy <= 0)) {
                        _0x5f1b8f.next = 12;
                        break;
                      }
                      _0x569130(_0x4fb73d);
                      _0x5f1b8f.next = 11;
                      return _0x15d669.updateEnergy();
                    case 11:
                      return _0x5f1b8f.abrupt("return");
                    case 12:
                      _0x5f1b8f.next = 14;
                      return _0x2fc872.putLuck();
                    case 14:
                      if (_0x430e42 = _0x5f1b8f.sent) {
                        _0x5f1b8f.next = 17;
                        break;
                      }
                      return _0x5f1b8f.abrupt("return");
                    case 17:
                      _0x1c7b28 = _0x430e42.drawOrderNo;
                      _0x1075b5 = _0x430e42.currentPoolNormalNum;
                      _0xf8c9 = _0x430e42.currentPoolGoldNum;
                      _0x21e8d1.genBall.putRedBall(_0x1c7b28);
                      _0x21e8d1.checkBallNum(_0x1075b5, _0xf8c9);
                      _0x5f1b8f.next = 22;
                      return _0x21e8d1.updateInfo();
                    case 22:
                    case "end":
                      return _0x5f1b8f.stop();
                  }
                }
              }, _0x3c62d4);
            }
          })), 3000);
          _0x21e8d1.checkDraw = _0x138285(_0x4e1bab().mark(function _0x2873f7() {
            var _0x20edf2;
            var _0xf0e21b;
            var _0x44b23a;
            var _0x528645;
            var _0x23e5f3;
            var _0x44946a;
            var _0x14a22d;
            var _0x22ac89;
            var _0x33fe86;
            var _0x471720;
            var _0x2aeb60;
            var _0x5f1bf4;
            var _0x18284a;
            return _0x4e1bab().wrap(function (_0x33f791) {
              for (;;) {
                switch (_0x33f791.prev = _0x33f791.next) {
                  case 0:
                    if (console.log(_0x21e8d1.willDraw.length, _0x21e8d1.canDraw), _0x21e8d1.willDraw.length) {
                      _0x33f791.next = 3;
                      break;
                    }
                    return _0x33f791.abrupt("return");
                  case 3:
                    if (_0x21e8d1.canDraw) {
                      _0x33f791.next = 5;
                      break;
                    }
                    return _0x33f791.abrupt("return");
                  case 5:
                    _0x20edf2 = _0x21e8d1.willDraw.shift();
                    _0x21e8d1.canDraw = false;
                    _0x33f791.next = 9;
                    return _0x2fc872.draw(_0x20edf2.drawOrderNo);
                  case 9:
                    if (_0xf0e21b = _0x33f791.sent) {
                      {
                        _0x33f791.next = 13;
                        break;
                      }
                    }
                    _0x21e8d1.canDraw = true;
                    return _0x33f791.abrupt("return");
                  case 13:
                    _0x44b23a = _0xf0e21b.drawSpId;
                    _0x528645 = _0xf0e21b.currentPoolNormalNum;
                    _0x23e5f3 = _0xf0e21b.currentPoolGoldNum;
                    _0x44946a = _0xf0e21b.putAwardConfig;
                    _0x14a22d = _0x44946a.doubleFlag;
                    _0x44946a.doubleStartTime;
                    _0x44946a.doubleEndTime;
                    _0x44946a.continueTime;
                    _0x44946a.rate;
                    _0x22ac89 = _0x44946a.awardSpId;
                    _0x33fe86 = _0x44946a.awardNum;
                    _0x471720 = _0x22ac89.indexOf("gold") > -1 ? _0x389263.Gold : _0x389263.Red;
                    console.log("准备开始抽奖");
                    _0x2aeb60 = true;
                    _0x5f1bf4 = _0x21e8d1.deng.getComponent(_0x3292a6).material;
                    _0x541c1.stopAllByTarget(_0x21e8d1.deng);
                    _0x2a259b(_0x21e8d1.deng).repeatForever(_0x2a259b(_0x21e8d1.deng).delay(0.25).call(function () {
                      _0x2aeb60 = !_0x2aeb60;
                      _0x5f1bf4.setProperty("emissive", _0x2aeb60 ? _0x14f1bc.WHITE : _0x14f1bc.BLACK);
                    })).start();
                    _0x33f791.next = 23;
                    return _0x21e8d1.startRoll(_0x44b23a);
                  case 23:
                    _0x541c1.stopAllByTarget(_0x21e8d1.deng);
                    _0x2a259b(_0x21e8d1.deng).repeat(20, _0x2a259b(_0x21e8d1.deng).delay(0.1).call(function () {
                      {
                        _0x2aeb60 = !_0x2aeb60;
                        _0x5f1bf4.setProperty("emissive", _0x2aeb60 ? _0x14f1bc.WHITE : _0x14f1bc.BLACK);
                      }
                    })).call(function () {
                      _0x5f1bf4.setProperty("emissive", _0x14f1bc.WHITE);
                    }).start();
                    _0x33f791.next = 27;
                    return _0x21e8d1.showWinAni(_0x380035({}, _0x44946a, {
                      drawSpId: _0x44b23a
                    }));
                  case 27:
                    if (console.log("摇奖机结束"), _0x44946a && (_0x15d669.homeInfo.currentMultiple = Object.assign((null == (_0x18284a = _0x15d669.homeInfo) ? undefined : _0x18284a.currentMultiple) || {}, _0x44946a), _0x15d669.updateId++), _0x14a22d || !_0x33fe86) {
                      _0x33f791.next = 33;
                      break;
                    }
                    _0x92a03f.ins.playOneShot("audio/摇奖机奖励下落", {
                      bundleName: "common"
                    });
                    _0x33f791.next = 33;
                    return _0x21e8d1.genBall.appendBall(_0x471720, _0x33fe86);
                  case 33:
                    _0x21e8d1.checkBallNum(_0x528645, _0x23e5f3);
                    _0x21e8d1.canDraw = true;
                    _0x21e8d1.checkDraw();
                  case 36:
                  case "end":
                    return _0x33f791.stop();
                }
              }
            }, _0x2873f7);
          }));
          _0x21e8d1.cylinderSpeed1 = 40;
          _0x21e8d1.cylinderRotate1 = 0;
          return _0x21e8d1;
        }
        _0x35b1dc(_0x2d3b15, _0x24685d);
        var _0x273e58 = _0x2d3b15.prototype;
        _0x273e58.onLoad = function () {
          var _0x239ec6 = _0x138285(_0x4e1bab().mark(function _0x4252e2() {
            {
              var _0x54ee70 = this;
              return _0x4e1bab().wrap(function (_0x509a4d) {
                for (;;) {
                  switch (_0x509a4d.prev = _0x509a4d.next) {
                    case 0:
                      this.initTextureInfo();
                      _0x2d4d39.instance.enable = true;
                      _0x2d4d39.instance.gravity = _0x396d9b(0, -13, -0.5);
                      this.putBtn.on(_0x492555.EventType.CLICK, this.clickPutBtn, this);
                      this.planeCollider.on("onTriggerEnter", this.onLossStay, this);
                      this.collectCollider.on("onTriggerEnter", this.onCollectStay, this);
                      this.drawCollider.on("onTriggerEnter", this.onDrawStay, this);
                      this.btnMaskNode.active = false;
                      this.modelTxt1.active = true;
                      this.modelTxt2.active = false;
                      this.schedule(function () {
                        {
                          _0x54ee70.modelTxt1.active = !_0x54ee70.modelTxt1.active;
                          _0x54ee70.modelTxt2.active = !_0x54ee70.modelTxt2.active;
                        }
                      }, 2);
                      this.schedule(this.report, 5);
                    case 12:
                    case "end":
                      return _0x509a4d.stop();
                  }
                }
              }, _0x4252e2, this);
            }
          }));
          return function () {
            return _0x239ec6.apply(this, arguments);
          };
        }();
        _0x273e58.start = function () {
          var _0x4dfc29 = _0x138285(_0x4e1bab().mark(function _0x24bbcd() {
            var _0x5459ad;
            var _0x2ab7a7;
            var _0x592e0c;
            var _0xde7c3b;
            var _0x1ffe57;
            var _0x386ba3;
            var _0x3c57f4;
            var _0x242c85;
            return _0x4e1bab().wrap(function (_0xbaf802) {
              for (;;) {
                switch (_0xbaf802.prev = _0xbaf802.next) {
                  case 0:
                    if (_0x28e8d1(_0x1c7edb.EXPOSURE, 4), "Loading" != (null == (_0x5459ad = this.data) ? undefined : _0x5459ad.from)) {
                      _0xbaf802.next = 10;
                      break;
                    }
                    _0x592e0c = _0x15d669.homeInfo;
                    _0xde7c3b = _0x592e0c.currentPoolNormalNum;
                    _0x1ffe57 = _0x592e0c.currentPoolGoldNum;
                    this.genBall.initBall(_0xde7c3b, _0x1ffe57);
                    _0xbaf802.next = 6;
                    return this.onIndexUpdate();
                  case 6:
                    null != (_0x2ab7a7 = _0x15d669.homeInfo) && _0x2ab7a7.firstEntryFlag && _0x569130(_0xd58d75);
                    this.judgePanel();
                    _0xbaf802.next = 17;
                    break;
                  case 10:
                    _0xbaf802.next = 12;
                    return _0x15d669.updateIndex();
                  case 12:
                    _0x386ba3 = _0x15d669.homeInfo;
                    _0x3c57f4 = _0x386ba3.currentPoolNormalNum;
                    _0x242c85 = _0x386ba3.currentPoolGoldNum;
                    this.genBall.initBall(_0x3c57f4, _0x242c85);
                    _0xbaf802.next = 16;
                    return this.onIndexUpdate();
                  case 16:
                    this.judgePanel();
                  case 17:
                    _0x2c7c71(this.pageVisibilityChange);
                  case 18:
                  case "end":
                    return _0xbaf802.stop();
                }
              }
            }, _0x24bbcd, this);
          }));
          return function () {
            return _0x4dfc29.apply(this, arguments);
          };
        }();
        _0x273e58.onDestroy = function () {
          _0x299516(this.pageVisibilityChange);
        };
        _0x273e58.updateInfo = function () {
          {
            var _0x71a361 = _0x138285(_0x4e1bab().mark(function _0x159eff() {
              return _0x4e1bab().wrap(function (_0x2e7e08) {
                for (;;) {
                  switch (_0x2e7e08.prev = _0x2e7e08.next) {
                    case 0:
                      _0x2e7e08.next = 2;
                      return _0x15d669.updateIndex();
                    case 2:
                      _0x2e7e08.next = 4;
                      return this.onIndexUpdate();
                    case 4:
                    case "end":
                      return _0x2e7e08.stop();
                  }
                }
              }, _0x159eff, this);
            }));
            return function () {
              return _0x71a361.apply(this, arguments);
            };
          }
        }();
        _0x273e58.onIndexUpdate = function () {
          var _0x3388a0 = _0x138285(_0x4e1bab().mark(function _0x254647() {
            return _0x4e1bab().wrap(function (_0x5c91e0) {
              for (;;) {
                switch (_0x5c91e0.prev = _0x5c91e0.next) {
                  case 0:
                    _0x5c91e0.next = 2;
                    return this.checkTaskFeedBack();
                  case 2:
                  case "end":
                    return _0x5c91e0.stop();
                }
              }
            }, _0x254647, this);
          }));
          return function () {
            return _0x3388a0.apply(this, arguments);
          };
        }();
        _0x273e58.judgePanel = function () {
          var _0x16a257 = _0x15d669.homeInfo;
          var _0x342d20 = _0x16a257.settlementPop;
          var _0x3aa58d = _0x16a257.dividePop;
          _0x342d20 && null != _0x342d20 && _0x342d20.boolShowPop && (_0x15d669.setRankPopInfo(_0x342d20), (null == _0x342d20 ? undefined : _0x342d20.newRankMultiply) > (null == _0x342d20 ? undefined : _0x342d20.oldRankMultiply) && _0x569130(_0x38ff70), (null == _0x342d20 ? undefined : _0x342d20.newRankMultiply) == (null == _0x342d20 ? undefined : _0x342d20.oldRankMultiply) && _0x569130(_0x4feea8), (null == _0x342d20 ? undefined : _0x342d20.newRankMultiply) < (null == _0x342d20 ? undefined : _0x342d20.oldRankMultiply) && _0x569130(_0x18fa2a));
          _0x3aa58d && null != _0x3aa58d && _0x3aa58d.boolShowPop && _0x569130(_0x178ab5);
        };
        _0x273e58.checkTaskFeedBack = function () {
          var _0x3e26df = _0x138285(_0x4e1bab().mark(function _0x29e50e() {
            var _0x5361c9;
            var _0x8246e5;
            var _0x99e304;
            var _0x537f3b;
            var _0x598342 = this;
            return _0x4e1bab().wrap(function (_0x51c3fd) {
              for (;;) {
                switch (_0x51c3fd.prev = _0x51c3fd.next) {
                  case 0:
                    _0x5361c9 = _0x15d669.homeInfo.taskCompletePops;
                    _0x8246e5 = function (_0x49363f) {
                      {
                        return new Promise(function (_0xcba103) {
                          var _0xc66cfd;
                          _0x569130(_0x4804ab, _0x380035({}, _0x49363f, {
                            callback: (_0xc66cfd = _0x138285(_0x4e1bab().mark(function _0x5cfa8c() {
                              {
                                var _0x486f44;
                                return _0x4e1bab().wrap(function (_0x7b8455) {
                                  for (;;) {
                                    switch (_0x7b8455.prev = _0x7b8455.next) {
                                      case 0:
                                        _0x486f44 = _0x49363f.awardSpId.indexOf("gold") > -1 ? _0x389263.Gold : _0x389263.Red;
                                        _0x7b8455.next = 3;
                                        return _0x598342.genBall.appendBall(_0x486f44, _0x49363f.awardNum);
                                      case 3:
                                        _0xcba103();
                                      case 4:
                                      case "end":
                                        return _0x7b8455.stop();
                                    }
                                  }
                                }, _0x5cfa8c);
                              }
                            })), function () {
                              {
                                return _0xc66cfd.apply(this, arguments);
                              }
                            })
                          }));
                        });
                      }
                    };
                    _0x99e304 = 0;
                  case 3:
                    if (!(_0x99e304 < _0x5361c9.length)) {
                      {
                        _0x51c3fd.next = 10;
                        break;
                      }
                    }
                    _0x537f3b = _0x5361c9[_0x99e304];
                    _0x51c3fd.next = 7;
                    return _0x8246e5(_0x537f3b);
                  case 7:
                    _0x99e304++;
                    _0x51c3fd.next = 3;
                    break;
                  case 10:
                  case "end":
                    return _0x51c3fd.stop();
                }
              }
            }, _0x29e50e);
          }));
          return function () {
            {
              return _0x3e26df.apply(this, arguments);
            }
          };
        }();
        _0x273e58.onDrawStay = function (_0x5abcda) {
          var _0x25313b = _0x5abcda.otherCollider;
          if (_0x25313b.getGroup() == _0x2d4d39.PhysicsGroup.Ball) {
            {
              var _0x2f62f2 = _0x25313b.getComponent(_0x3b9795);
              !_0x2f62f2.collected && _0x2f62f2.drawOrderNo && (console.log("抽奖", _0x2f62f2.drawOrderNo), this.willDraw.push({
                drawOrderNo: _0x2f62f2.drawOrderNo
              }), _0x92a03f.ins.playOneShot("audio/摇奖机触发音效", {
                bundleName: "common"
              }), this.checkDraw());
            }
          }
        };
        _0x273e58.onLossStay = function (_0xa9c8f6) {
          var _0x345934 = _0xa9c8f6.otherCollider;
          if (_0x345934.getGroup() == _0x2d4d39.PhysicsGroup.Ball) {
            var _0xee5967 = _0x345934.getComponent(_0x3b9795);
            _0xee5967.collected || (_0xee5967.collected = true, this.willDestroyBall.push(_0x345934.node), _0xee5967.type == _0x389263.Red ? this.willReport.lossNormalNum++ : _0xee5967.type == _0x389263.Gold && this.willReport.lossGoldNum++);
          }
        };
        _0x273e58.onCollectStay = function (_0x5128c5) {
          var _0x550fa1 = _0x5128c5.otherCollider;
          if (_0x550fa1.getGroup() == _0x2d4d39.PhysicsGroup.Ball) {
            var _0x12c0ce = _0x550fa1.getComponent(_0x3b9795);
            _0x12c0ce.collected || (_0x12c0ce.collected = true, this.willDestroyBall.push(_0x550fa1.node), _0x92a03f.ins.playOneShot("audio/奖励积分声音效果", {
              bundleName: "common"
            }), _0x12c0ce.type == _0x389263.Red ? (this.willReport.acquireNormalNum++, this.gameUI.addNormalAnim()) : _0x12c0ce.type == _0x389263.Gold && (this.willReport.acquireGoldNum++, this.gameUI.addGoldAnim()));
          }
        };
        _0x273e58.startRoll = function () {
          var _0x3e51f6 = _0x138285(_0x4e1bab().mark(function _0x2a57cb(_0x2d4bf8) {
            var _0x13590e;
            var _0x59c216;
            var _0x50eeae = this;
            return _0x4e1bab().wrap(function (_0x44f331) {
              for (;;) {
                switch (_0x44f331.prev = _0x44f331.next) {
                  case 0:
                    _0x13590e = this.textureInfo.findIndex(function (_0x534227) {
                      return _0x534227.spId === _0x2d4bf8;
                    });
                    _0x59c216 = this.textureInfo.length;
                    [_0x186008.sp_tag_normal_2025x, _0x186008.sp_tag_gold_25x].includes(_0x2d4bf8) && (this.mask.active = true);
                    _0x44f331.next = 5;
                    return Promise.all([new Promise(function (_0x28c463) {
                      var _0x4709da = [].concat(_0x50eeae.textureInfo);
                      var _0x46228b = -1 === _0x13590e ? Math.floor(Math.random() * (_0x59c216 / 2)) : _0x13590e;
                      var _0x228561 = [_0x4709da[_0x46228b], _0x4709da[_0x59c216 - 1]];
                      _0x4709da[_0x59c216 - 1] = _0x228561[0];
                      _0x4709da[_0x46228b] = _0x228561[1];
                      _0x50eeae.cylinder1.getComponent(_0x54e983).startMove(_0x4709da, 0.5, function () {
                        _0x28c463(null);
                      });
                    }), new Promise(function (_0x533b71) {
                      var _0x5a4ade = [].concat(_0x50eeae.textureInfo);
                      var _0x46d09e = -1 === _0x13590e ? Math.floor(Math.random() * (_0x59c216 / 2) + _0x59c216 / 2) : _0x13590e;
                      var _0x1e6050 = [_0x5a4ade[_0x46d09e], _0x5a4ade[_0x59c216 - 1]];
                      _0x5a4ade[_0x59c216 - 1] = _0x1e6050[0];
                      _0x5a4ade[_0x46d09e] = _0x1e6050[1];
                      _0x50eeae.cylinder2.getComponent(_0x54e983).startMove(_0x5a4ade, 0.25, function () {
                        _0x533b71(null);
                      });
                    }), new Promise(function (_0x481c21) {
                      var _0x1c9619 = [].concat(_0x50eeae.textureInfo);
                      var _0x2316e2 = -1 === _0x13590e ? Math.floor(Math.random() * _0x59c216) : _0x13590e;
                      var _0x17ae3a = [_0x1c9619[_0x2316e2], _0x1c9619[_0x59c216 - 1]];
                      _0x1c9619[_0x59c216 - 1] = _0x17ae3a[0];
                      _0x1c9619[_0x2316e2] = _0x17ae3a[1];
                      _0x50eeae.cylinder3.getComponent(_0x54e983).startMove(_0x1c9619, 0, function () {
                        _0x481c21(null);
                      });
                    })]);
                  case 5:
                  case "end":
                    return _0x44f331.stop();
                }
              }
            }, _0x2a57cb, this);
          }));
          return function (_0x2f3cc6) {
            return _0x3e51f6.apply(this, arguments);
          };
        }();
        _0x273e58.showWinAni = function (_0x251fa0) {
          var _0x26fdfa = this;
          var _0x2c52bf = _0x251fa0.drawSpId;
          return new Promise(function (_0x5cf1d2) {
            [_0x186008.sp_tag_normal_66x, _0x186008.sp_tag_normal_100x, _0x186008.sp_tag_normal_2025x, _0x186008.sp_tag_gold_5x, _0x186008.sp_tag_gold_25x, _0x186008.sp_tag_double_2, _0x186008.sp_tag_double_3].includes(_0x2c52bf) ? _0x569130(_0x6115e5, _0x380035({}, _0x251fa0, {
              callback: function () {
                _0x26fdfa.mask.active = false;
                _0x5cf1d2(null);
              }
            })) : _0x5cf1d2(null);
          });
        };
        _0x273e58.initTextureInfo = function () {
          var _0x34012d = [].concat(this.prizeTexture);
          this.textureInfo = _0x34012d.map(function (_0x19d295, _0x570348) {
            {
              return {
                spId: _0x2f7aab[_0x570348],
                texture: _0x19d295
              };
            }
          });
        };
        _0x273e58.render = function () {
          (_0x15d669.homeInfo || {}).creditsNum;
        };
        _0x273e58.lateUpdate = function (_0x159e64) {
          this.willDestroyBall.forEach(function (_0x1b3a86) {
            _0x1b3a86.removeFromParent();
            _0x1b3a86.destroy();
          });
          this.willDestroyBall.length = 0;
        };
        _0x273e58.update = function (_0xf1c678) {};
        return _0x2d3b15;
      }(_0x1833b5)).bundle = "MainGame", _0x3f5243.skin = "MainGame", _0x2f6c13 = _0x6eec7f((_0x4bdebe = _0x3f5243).prototype, "mask", [_0x50dbb8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x113a16 = _0x6eec7f(_0x4bdebe.prototype, "putBtn", [_0xbbd183], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x258074 = _0x6eec7f(_0x4bdebe.prototype, "genBall", [_0x18ba9e], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x10a104 = _0x6eec7f(_0x4bdebe.prototype, "gameUI", [_0x2cf98a], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x59606d = _0x6eec7f(_0x4bdebe.prototype, "planeCollider", [_0x181f3f], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x2c8c9f = _0x6eec7f(_0x4bdebe.prototype, "collectCollider", [_0x505785], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0xe259b8 = _0x6eec7f(_0x4bdebe.prototype, "drawCollider", [_0x5c0756], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x279a03 = _0x6eec7f(_0x4bdebe.prototype, "modelTxt1", [_0x1a9053], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x446157 = _0x6eec7f(_0x4bdebe.prototype, "modelTxt2", [_0x216b22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x2935e0 = _0x6eec7f(_0x4bdebe.prototype, "deng", [_0x4418ff], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x5843d6 = _0x6eec7f(_0x4bdebe.prototype, "cylinder1", [_0x59db67], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x40de58 = _0x6eec7f(_0x4bdebe.prototype, "cylinder2", [_0x542c4b], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x1acd10 = _0x6eec7f(_0x4bdebe.prototype, "cylinder3", [_0x5e39b2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x35141e = _0x6eec7f(_0x4bdebe.prototype, "prizeTexture", [_0x1cca77], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _0x4a042e = _0x6eec7f(_0x4bdebe.prototype, "btnMaskNode", [_0x25a4d3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          {
            return null;
          }
        }
      }), _0x41a14a = _0x6eec7f(_0x4bdebe.prototype, "btnMask", [_0xba62e8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          {
            return null;
          }
        }
      }), _0x1157b5 = _0x6eec7f(_0x4bdebe.prototype, "mainButton", [_0x5a4ead], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x6eec7f(_0x4bdebe.prototype, "render", [_0x1a1ebb], Object.getOwnPropertyDescriptor(_0x4bdebe.prototype, "render"), _0x4bdebe.prototype), _0x3aa215 = _0x4bdebe)) || _0x3aa215) || _0x3aa215));
      _0x36c4b0._RF.pop();
    }
  };
});
System.register("chunks:///_virtual/MEvent.ts", ["cc"], function (_0x3b77fe) {
  var _0x216fa6;
  var _0xca8e52;
  return {
    setters: [function (_0x34e7f9) {
      _0x216fa6 = _0x34e7f9.cclegacy;
      _0xca8e52 = _0x34e7f9.EventTarget;
    }],
    execute: function () {
      {
        _0x216fa6._RF.push({}, "2f8eehGfWZH3IKRywItSwEl", "MEvent", undefined);
        _0x3b77fe("eventTarget", new _0xca8e52());
        _0x3b77fe("MEvent", function (_0x4ba17c) {
          _0x4ba17c.ADD_SCORE = "addScore";
          return _0x4ba17c;
        }({}));
        _0x216fa6._RF.pop();
      }
    }
  };
});
System.register("chunks:///_virtual/Module.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], function (_0x347755) {
  var _0x3271c3;
  var _0x5fbf4b;
  var _0xdc24f4;
  var _0x2b758c;
  var _0x2a9eea;
  return {
    setters: [function (_0x101861) {
      {
        _0x3271c3 = _0x101861.inheritsLoose;
      }
    }, function (_0x1b1044) {
      _0x5fbf4b = _0x1b1044.cclegacy;
      _0xdc24f4 = _0x1b1044.Node;
      _0x2b758c = _0x1b1044.Button;
      _0x2a9eea = _0x1b1044.Component;
    }],
    execute: function () {
      _0x5fbf4b._RF.push({}, "5c11djqMYZAOKA6j0lIlBeH", "Module", undefined);
      var _0x53c324 = _0x347755("default", function (_0x1c38dd) {
        function _0x924b5() {
          for (var _0x5bc2ce, _0x3170d3 = arguments.length, _0x3511d6 = new Array(_0x3170d3), _0x22a44f = 0; _0x22a44f < _0x3170d3; _0x22a44f++) {
            _0x3511d6[_0x22a44f] = arguments[_0x22a44f];
          }
          (_0x5bc2ce = _0x1c38dd.call.apply(_0x1c38dd, [this].concat(_0x3511d6)) || this).data = {};
          return _0x5bc2ce;
        }
        _0x3271c3(_0x924b5, _0x1c38dd);
        var _0x143457 = _0x924b5.prototype;
        _0x143457.btnEnable = function (_0x3138df, _0x365378) {
          _0x3138df instanceof _0xdc24f4 && (_0x3138df = _0x3138df.getComponent(_0x2b758c));
          _0x3138df && (_0x3138df.interactable = _0x365378);
        };
        _0x143457.btnDelay = function (_0x3113ee, _0x33da55) {
          {
            _0x3113ee instanceof _0xdc24f4 && (_0x3113ee = _0x3113ee.getComponent(_0x2b758c));
            _0x3113ee && this.scheduleOnce(function () {
              _0x3113ee.interactable = true;
            }, _0x33da55);
          }
        };
        return _0x924b5;
      }(_0x2a9eea));
      _0x53c324.bundle = "";
      _0x53c324.skin = "";
      _0x53c324.group = null;
      _0x5fbf4b._RF.pop();
    }
  };
});
System.register("chunks:///_virtual/ModuleContext.ts", ["cc"], function (_0x1f46a3) {
  var _0x110934;
  return {
    setters: [function (_0x24d4c9) {
      _0x110934 = _0x24d4c9.cclegacy;
    }],
    execute: function () {
      _0x110934._RF.push({}, "5575a3VV2RD746hi1OU1Xsj", "ModuleContext", undefined);
      var _0x31b481 = "__module__name__";
      var _0x4888eb = "resources";
      _0x1f46a3("ModuleContext", function () {
        function _0x7640d5() {}
        _0x7640d5.setDefaultModule = function (_0x567f18) {
          _0x4888eb = _0x567f18;
        };
        _0x7640d5.getDefaultModule = function () {
          return _0x4888eb;
        };
        _0x7640d5.attachModule = function (_0x3456bd, _0x1f1595) {
          _0x3456bd[_0x31b481] = _0x1f1595;
        };
        _0x7640d5.getClassModule = function (_0x32bec8) {
          return _0x32bec8[_0x31b481] || _0x4888eb;
        };
        _0x7640d5.attachImplClass = function (_0xc0aba, _0x11e001) {
          _0xc0aba.__impl__class__ = _0x11e001;
        };
        _0x7640d5.attachModuleAndImplClass = function (_0x5bf90c, _0x24228f, _0x2e642f) {
          _0x5bf90c[_0x31b481] = _0x24228f;
          _0x5bf90c.__impl__class__ = _0x2e642f;
        };
        _0x7640d5.getImplClass = function (_0x30553b) {
          return _0x30553b.__impl__class__ || _0x30553b;
        };
        _0x7640d5.createFromModule = function (_0x482288) {
          return new (this.getImplClass(_0x482288) || _0x482288)();
        };
        return _0x7640d5;
      }());
      _0x110934._RF.pop();
    }
  };
});
System.register("chunks:///_virtual/MusicBtn.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./AudioMgr.ts"], function (_0x2eab9c) {
  var _0x574ed7;
  var _0x3c93c3;
  var _0x403976;
  var _0x2f2128;
  var _0x5c0510;
  var _0x1d5752;
  var _0x4efe0e;
  var _0x1d1b2c;
  var _0x315ae2;
  var _0x5bc35f;
  var _0x13678c;
  var _0x1d1f5b;
  var _0x5aa3f8;
  return {
    setters: [function (_0xfd348e) {
      _0x574ed7 = _0xfd348e.applyDecoratedDescriptor;
      _0x3c93c3 = _0xfd348e.inheritsLoose;
      _0x403976 = _0xfd348e.initializerDefineProperty;
      _0x2f2128 = _0xfd348e.assertThisInitialized;
      _0x5c0510 = _0xfd348e.createClass;
      _0x1d5752 = _0xfd348e.createForOfIteratorHelperLoose;
    }, function (_0x4f0c02) {
      _0x4efe0e = _0x4f0c02.cclegacy;
      _0x1d1b2c = _0x4f0c02._decorator;
      _0x315ae2 = _0x4f0c02.Button;
      _0x5bc35f = _0x4f0c02.SpriteFrame;
      _0x13678c = _0x4f0c02.Sprite;
      _0x1d1f5b = _0x4f0c02.Component;
    }, function (_0x1a89d5) {
      _0x5aa3f8 = _0x1a89d5.AudioMgr;
    }],
    execute: function () {
      var _0x576694;
      var _0x54a272;
      var _0x2a8905;
      var _0x30b575;
      var _0x9a91c3;
      var _0x208681;
      var _0x46ff4c;
      var _0x554afd;
      var _0x1dc780;
      _0x4efe0e._RF.push({}, "aef22kOKgFL8rdRNAL10tnw", "MusicBtn", undefined);
      var _0xc4dba3 = _0x1d1b2c.ccclass;
      var _0xfa9821 = _0x1d1b2c.property;
      var _0x550679 = _0x1d1b2c.requireComponent;
      _0x2eab9c("MusicBtn", (_0x576694 = _0xc4dba3("MusicBtn"), _0x54a272 = _0x550679(_0x315ae2), _0x2a8905 = _0xfa9821(_0x5bc35f), _0x30b575 = _0xfa9821(_0x5bc35f), _0x576694(_0x9a91c3 = _0x54a272(((_0x1dc780 = function (_0x498361) {
        function _0x22560e() {
          for (var _0x329a10, _0x377553 = arguments.length, _0x172831 = new Array(_0x377553), _0x3d6b94 = 0; _0x3d6b94 < _0x377553; _0x3d6b94++) {
            _0x172831[_0x3d6b94] = arguments[_0x3d6b94];
          }
          _0x329a10 = _0x498361.call.apply(_0x498361, [this].concat(_0x172831)) || this;
          _0x403976(_0x329a10, "openSf", _0x46ff4c, _0x2f2128(_0x329a10));
          _0x403976(_0x329a10, "closeSf", _0x554afd, _0x2f2128(_0x329a10));
          _0x329a10.sp = null;
          _0x329a10._open = true;
          return _0x329a10;
        }
        _0x3c93c3(_0x22560e, _0x498361);
        _0x22560e.setMusicOpen = function (_0x4e8fc1) {
          _0x4e8fc1 ? (localStorage.setItem("MusicStatus", "true"), _0x5aa3f8.ins.resume(), _0x5aa3f8.ins.musicVolume = 1, _0x5aa3f8.ins.soundVolume = 1) : (localStorage.setItem("MusicStatus", "false"), _0x5aa3f8.ins.stop(), _0x5aa3f8.ins.musicVolume = 0, _0x5aa3f8.ins.soundVolume = 0);
        };
        var _0x2454b3 = _0x22560e.prototype;
        _0x2454b3.onLoad = function () {
          this.sp = this.getComponent(_0x13678c);
          _0x22560e.btnList.push(this);
          _0x22560e.open = _0x22560e.open;
          this.node.on(_0x315ae2.EventType.CLICK, this.clickNode, this);
        };
        _0x2454b3.onDestroy = function () {
          _0x22560e.btnList.splice(_0x22560e.btnList.indexOf(this), 1);
        };
        _0x2454b3.clickNode = function () {
          _0x22560e.open = !_0x22560e.open;
          _0x22560e.setMusicOpen(_0x22560e.open);
        };
        _0x5c0510(_0x22560e, [{
          key: "open",
          get: function () {
            return this._open;
          },
          set: function (_0x3cbdb7) {
            this._open = _0x3cbdb7;
            this.sp.spriteFrame = _0x3cbdb7 ? this.openSf : this.closeSf;
          }
        }], [{
          key: "open",
          get: function () {
            return this._open;
          },
          set: function (_0x47b94a) {
            this._open = _0x47b94a;
            for (var _0x4878ae, _0x2c0eac = _0x1d5752(this.btnList); !(_0x4878ae = _0x2c0eac()).done;) {
              _0x4878ae.value.open = _0x47b94a;
            }
          }
        }]);
        return _0x22560e;
      }(_0x1d1f5b)).btnList = [], _0x1dc780._open = true, _0x46ff4c = _0x574ed7((_0x208681 = _0x1dc780).prototype, "openSf", [_0x2a8905], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x554afd = _0x574ed7(_0x208681.prototype, "closeSf", [_0x30b575], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x9a91c3 = _0x208681)) || _0x9a91c3) || _0x9a91c3));
      _0x4efe0e._RF.pop();
    }
  };
});
System.register("chunks:///_virtual/NetTime.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], function (_0x2e1ed8) {
  var _0x167f3d;
  var _0x7a01d2;
  var _0x347084;
  var _0xa6c1e1;
  var _0x5aefae;
  return {
    setters: [function (_0x104c69) {
      _0x167f3d = _0x104c69.createClass;
    }, function (_0x4008e3) {
      _0x7a01d2 = _0x4008e3.cclegacy;
      _0x347084 = _0x4008e3.game;
      _0xa6c1e1 = _0x4008e3.director;
      _0x5aefae = _0x4008e3.Director;
    }],
    execute: function () {
      {
        _0x7a01d2._RF.push({}, "21510u0/c5FbJKzvblfhwte", "NetTime", undefined);
        var _0x409694 = _0x2e1ed8("NetTime", function () {
          function _0x1448c6() {
            this.currentTime = Date.now();
            _0xa6c1e1.on(_0x5aefae.EVENT_BEFORE_UPDATE, this.update, this);
          }
          _0x1448c6.now = function () {
            return Math.floor(_0x1448c6.ins.currentTime);
          };
          var _0x610b97 = _0x1448c6.prototype;
          _0x610b97.setTime = function (_0x103ff2) {
            this.currentTime = _0x103ff2;
          };
          _0x610b97.update = function () {
            this.currentTime += 1000 * _0x347084.deltaTime;
          };
          _0x167f3d(_0x1448c6, null, [{
            key: "ins",
            get: function () {
              this._ins || (this._ins = new _0x1448c6());
              return this._ins;
            }
          }]);
          return _0x1448c6;
        }());
        _0x409694._ins = undefined;
        _0x2e1ed8("netTime", _0x409694.ins);
        _0x7a01d2._RF.pop();
      }
    }
  };
});
System.register("chunks:///_virtual/NodePool.ts", ["cc"], function (_0x8453e9) {
  var _0x39917c;
  var _0x12d0fa;
  return {
    setters: [function (_0x1040eb) {
      _0x39917c = _0x1040eb.cclegacy;
      _0x12d0fa = _0x1040eb.instantiate;
    }],
    execute: function () {
      _0x39917c._RF.push({}, "f783a6HnbxGmaBm2+imhSVq", "NodePool", undefined);
      _0x8453e9("CusNodePool", function () {
        function _0x3d2889(_0x4e6002, _0x4a9799) {
          this._pool = [];
          this.prefab = undefined;
          this.poolHandlerComp = _0x4e6002;
          this.prefab = _0x4a9799;
        }
        var _0x190c21 = _0x3d2889.prototype;
        _0x190c21.size = function () {
          return this._pool.length;
        };
        _0x190c21.clear = function () {
          for (var _0xba5ec6 = this._pool.length, _0x3d72ab = 0; _0x3d72ab < _0xba5ec6; ++_0x3d72ab) {
            this._pool[_0x3d72ab].destroy();
          }
          this._pool.length = 0;
        };
        _0x190c21.put = function (_0x338379) {
          if (_0x338379 && -1 === this._pool.indexOf(_0x338379)) {
            _0x338379.removeFromParent();
            var _0x32f18b = this.poolHandlerComp ? _0x338379.getComponent(this.poolHandlerComp) : null;
            _0x32f18b && _0x32f18b.unuse && _0x32f18b.unuse();
            this._pool.push(_0x338379);
          }
        };
        _0x190c21.get = function () {
          for (var _0x33ebe9 = arguments.length, _0x58949c = new Array(_0x33ebe9), _0x31d9a7 = 0; _0x31d9a7 < _0x33ebe9; _0x31d9a7++) {
            _0x58949c[_0x31d9a7] = arguments[_0x31d9a7];
          }
          var _0x42a44d = Math.max(this._pool.length - 1, 0);
          var _0x32be81 = this._pool[_0x42a44d] || _0x12d0fa(this.prefab);
          this._pool.length = _0x42a44d;
          var _0x127144 = this.poolHandlerComp ? _0x32be81.getComponent(this.poolHandlerComp) : null;
          _0x127144 && _0x127144.reuse && _0x127144.reuse(arguments);
          return _0x32be81;
        };
        return _0x3d2889;
      }());
      _0x39917c._RF.pop();
    }
  };
});
System.register("chunks:///_virtual/NoiseGenerator.ts", ["cc", "./CinestationMath.ts"], function (_0xc4e2d5) {
  var _0x4caf33;
  var _0x42dd4b;
  var _0x14e349;
  var _0x142f0f;
  var _0x4c4253;
  return {
    setters: [function (_0x3209d6) {
      _0x4caf33 = _0x3209d6.cclegacy;
      _0x42dd4b = _0x3209d6.Quat;
      _0x14e349 = _0x3209d6.Vec3;
      _0x142f0f = _0x3209d6.lerp;
    }, function (_0x50cc25) {
      {
        _0x4c4253 = _0x50cc25.Perlin;
      }
    }],
    execute: function () {
      _0x4caf33._RF.push({}, "92aa29Tdz9E3rHRk99/eeeT", "NoiseGenerator", undefined);
      var _0x31fa59 = Math.cos;
      var _0x302031 = 2 * Math.PI;
      var _0x712d76 = [[[0.1, 7, 0, 0.75, 3, 0, 1.2, 1, 0], [0.15, 4, 0, 0.8, 1, 0, 1.4, 0.8, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0]], [[5.83, 0.09, 1, 9.17, 0.14, 1, 57.17, 0.15, 1], [1.8, 0.059, 1, 11.35, 0.041, 1, 54.17, 0.048, 1], [2.38, 0.017, 1, 10.52, 0.009, 1, 63.76, 0.016, 1], [3.2, 0.011, 1, 7.7, 0.009, 1, 51.51, 0.002, 1], [1.9, 0.059, 1, 9.1, 0.04, 0, 55.54, 0.05, 1], [3.33, 0.021, 1, 9.22, 0.009, 1, 58.55, 0.017, 1]], [[0.2, 15, 0, 0.9, 5, 0, 2, 2, 0], [0.25, 7, 0, 1, 3, 0, 0, 1, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0]], [[0.15, 7, 0, 0.8, 4, 0, 1.2, 1, 0], [0.1, 5, 0, 0.75, 2, 0, 1.5, 0.8, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0]], [[0.4, 10, 0, 1.44, 5, 0, 2.49, 3, 0], [0.06, 10, 0, 0.73, 3, 0, 2, 1, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0]], [[0.2, 4, 0, 0.4, 2, 0, 0.7, 1, 0], [0.15, 2, 0, 0.5, 2, 0, 0.6, 1, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0]], [[0.39, 6.19, 0, 1.75, 1.84, 0, 2, 2.3, 0], [0.15, 3, 0, 0.9, 0.5, 0, 1.4, 0.5, 0], [0.1, 1, 0, 0, 0, 0, 0, 0, 0]], [[0.15, 12, 0, 0.6, 5, 0, 1.5, 1, 0], [0.1, 5, 0, 0.45, 4, 0, 1.2, 1, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0]], [[0.5, 17.46, 0, 0.94, 12.47, 0, 1.2, 4, 0], [0.25, 5, 0, 0.5, 4, 0, 1.3, 2, 0], [0.1, 0, 0, 0.4, 1, 0, 0, 0, 0]]];
      _0xc4e2d5("NoiseProfile", function (_0x12f72b) {
        _0x12f72b[_0x12f72b.Noise_CM_4 = 0] = "Noise_CM_4";
        _0x12f72b[_0x12f72b.Shake_6D = 1] = "Shake_6D";
        _0x12f72b[_0x12f72b.Handheld_normal_extreme = 2] = "Handheld_normal_extreme";
        _0x12f72b[_0x12f72b.Handheld_normal_mild = 3] = "Handheld_normal_mild";
        _0x12f72b[_0x12f72b.Handheld_normal_strong = 4] = "Handheld_normal_strong";
        _0x12f72b[_0x12f72b.Handheld_tele_mild = 5] = "Handheld_tele_mild";
        _0x12f72b[_0x12f72b.Handheld_tele_strong = 6] = "Handheld_tele_strong";
        _0x12f72b[_0x12f72b.Handheld_wideangle_mild = 7] = "Handheld_wideangle_mild";
        _0x12f72b[_0x12f72b.Handheld_wideangle_strong = 8] = "Handheld_wideangle_strong";
        return _0x12f72b;
      }({}));
      var _0x271350 = new _0x42dd4b();
      var _0x41bc0f = new _0x14e349();
      _0xc4e2d5("NoiseGenerator", function () {
        function _0x553bcd() {
          this._time = 0;
          this._values = [0, 0, 0, 0, 0, 0];
          this._noiseOffsets = [0, 0, 0];
        }
        var _0xd391f5 = _0x553bcd.prototype;
        _0xd391f5.reset = function () {
          var _0x4e5447 = this;
          this._time = 0;
          this._noiseOffsets.forEach(function (_0x216b43, _0x58caef) {
            return _0x4e5447._noiseOffsets[_0x58caef] = _0x142f0f(-1000, 1000, Math.random());
          });
        };
        _0xd391f5.fractalNoise = function (_0x52442a, _0x39752d) {
          {
            for (this._time += _0x39752d * _0x52442a.frequncyGain, _0x2aaef2 = this._time += _0x39752d * _0x52442a.frequncyGain, _0x1cac54 = _0x712d76[_0x52442a.profile] || _0x712d76[0], _0x1d2c4a = this._values.fill(0), _0x1ccfe5 = this._noiseOffsets, _0x572e38 = 0, undefined; _0x572e38 < _0x1cac54.length; _0x572e38++) {
              var _0x2aaef2, _0x1cac54, _0x1d2c4a, _0x1ccfe5, _0x572e38;
              var _0x27112a = _0x1cac54[_0x572e38];
              _0x1d2c4a[_0x572e38] = _0x553bcd.Noise(_0x2aaef2, _0x27112a[0], _0x27112a[1], _0x27112a[2], _0x1ccfe5[0]) + _0x553bcd.Noise(_0x2aaef2, _0x27112a[3], _0x27112a[4], _0x27112a[5], _0x1ccfe5[1]) + _0x553bcd.Noise(_0x2aaef2, _0x27112a[6], _0x27112a[7], _0x27112a[8], _0x1ccfe5[2]);
              _0x1d2c4a[_0x572e38] *= _0x52442a.amplitudeGain;
            }
            return _0x1d2c4a;
          }
        };
        _0x553bcd.Noise = function (_0x1061b1, _0xac0ad, _0x2ccd7a, _0x36be00, _0x20739d) {
          undefined === _0x20739d && (_0x20739d = 0);
          return _0x36be00 ? 0.5 * _0x31fa59(_0x302031 * _0x1061b1 * _0xac0ad + _0x20739d) * _0x2ccd7a : _0x4c4253.Noise(_0x1061b1 * _0xac0ad + _0x20739d) * _0x2ccd7a;
        };
        _0x553bcd.ApplyNoise = function (_0x5e20eb, _0x203d21) {
          _0x42dd4b.fromEuler(_0x271350, _0x5e20eb[0], _0x5e20eb[1], _0x5e20eb[2]);
          _0x14e349.set(_0x41bc0f, _0x5e20eb[3], _0x5e20eb[4], _0x5e20eb[5]);
          _0x14e349.transformQuat(_0x41bc0f, _0x41bc0f, _0x203d21.node.worldRotation);
          _0x42dd4b.multiply(_0x203d21.correctRotation, _0x203d21.correctRotation, _0x271350);
          _0x14e349.add(_0x203d21.correctPosition, _0x203d21.correctPosition, _0x41bc0f);
        };
        return _0x553bcd;
      }());
      _0x4caf33._RF.pop();
    }
  };
});
System.register("chunks:///_virtual/NoiseHandler.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./NoiseGenerator.ts", "./CameraHandler.ts"], function (_0x31dced) {
  var _0x5e39f7;
  var _0x148f1d;
  var _0x568290;
  var _0x13b294;
  return {
    setters: [function (_0xb4cd4d) {
      _0x5e39f7 = _0xb4cd4d.inheritsLoose;
    }, function (_0x29ad5f) {
      _0x148f1d = _0x29ad5f.cclegacy;
    }, function (_0x2b8cce) {
      _0x568290 = _0x2b8cce.NoiseGenerator;
    }, function (_0x46c23e) {
      _0x13b294 = _0x46c23e.CameraHandler;
    }],
    execute: function () {
      _0x148f1d._RF.push({}, "0e3a0pD3pxPJZCwuB99++oU", "NoiseHandler", undefined);
      _0x31dced("NoiseHandler", function (_0xe6c329) {
        function _0x14fcfb() {
          for (var _0x2a543d, _0x3f2130 = arguments.length, _0x2737ec = new Array(_0x3f2130), _0x251627 = 0; _0x251627 < _0x3f2130; _0x251627++) {
            _0x2737ec[_0x251627] = arguments[_0x251627];
          }
          (_0x2a543d = _0xe6c329.call.apply(_0xe6c329, [this].concat(_0x2737ec)) || this)._generator = new _0x568290();
          return _0x2a543d;
        }
        _0x5e39f7(_0x14fcfb, _0xe6c329);
        var _0x372b1d = _0x14fcfb.prototype;
        _0x372b1d.onEnable = function () {
          this._generator.reset();
        };
        _0x372b1d.updateCamera = function (_0x163ad3) {
          var _0x4443f3 = this._vcam;
          var _0x128737 = this._generator.fractalNoise(_0x4443f3.noise, _0x163ad3);
          _0x568290.ApplyNoise(_0x128737, _0x4443f3);
        };
        return _0x14fcfb;
      }(_0x13b294));
      _0x148f1d._RF.pop();
    }
  };
});
System.register("chunks:///_virtual/NoiseStage.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./CameraHandler.ts", "./NoiseHandler.ts", "./BaseStage.ts"], function (_0x207a44) {
  var _0x3397b0;
  var _0x31df9c;
  var _0x2d5e48;
  var _0x385656;
  var _0x53c1e4;
  return {
    setters: [function (_0x119f37) {
      _0x3397b0 = _0x119f37.inheritsLoose;
    }, function (_0x2735d3) {
      _0x31df9c = _0x2735d3.cclegacy;
    }, function (_0x1bddea) {
      _0x2d5e48 = _0x1bddea.CameraHandler;
    }, function (_0x5b0479) {
      _0x385656 = _0x5b0479.NoiseHandler;
    }, function (_0x2f25eb) {
      _0x53c1e4 = _0x2f25eb.BaseStage;
    }],
    execute: function () {
      _0x31df9c._RF.push({}, "9e1ccSzYTVCrL6k6/zwvvky", "NoiseStage", undefined);
      _0x207a44("NoiseStage", function (_0x18ed6b) {
        {
          function _0x15b12c() {
            for (var _0x2892bb, _0x392f59 = arguments.length, _0x2440ec = new Array(_0x392f59), _0x3af151 = 0; _0x3af151 < _0x392f59; _0x3af151++) {
              _0x2440ec[_0x3af151] = arguments[_0x3af151];
            }
            (_0x2892bb = _0x18ed6b.call.apply(_0x18ed6b, [this].concat(_0x2440ec)) || this)._handlers = [new _0x2d5e48(_0x2892bb._vcam), new _0x385656(_0x2892bb._vcam)];
            return _0x2892bb;
          }
          _0x3397b0(_0x15b12c, _0x18ed6b);
          var _0x49de6e = _0x15b12c.prototype;
          _0x49de6e.onEnable = function () {
            this._handlers.forEach(function (_0x24eca7) {
              return _0x24eca7.enable = true;
            });
          };
          _0x49de6e.updateStage = function (_0x16956e) {
            var _0x3452ce = this._vcam.noise;
            var _0x3e73bf = this._handlers[_0x3452ce.type];
            _0x3e73bf && _0x3e73bf.updateCamera(_0x16956e);
          };
          return _0x15b12c;
        }
      }(_0x53c1e4));
      _0x31df9c._RF.pop();
    }
  };
});
System.register("chunks:///_virtual/pageVisibilityNotify.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], function (_0x112b5b) {
  var _0x4c6dbf;
  var _0x5ab120;
  return {
    setters: [function (_0x319c3a) {
      _0x4c6dbf = _0x319c3a.createForOfIteratorHelperLoose;
    }, function (_0xaa0dd0) {
      _0x5ab120 = _0xaa0dd0.cclegacy;
    }],
    execute: function () {
      var _0x43ea51;
      _0x112b5b({
        unwatchPageVisibility: function (_0x12a683) {
          {
            var _0x3c8b1f = _0xc1120e.indexOf(_0x12a683);
            _0x3c8b1f >= 0 && _0xc1120e.splice(_0x3c8b1f, 1);
            return {
              type: _0x3c8b1f >= 0 ? "success" : "failed"
            };
          }
        },
        watchPageVisibility: function (_0x4f7747) {
          _0xc1120e.indexOf(_0x4f7747) < 0 && _0xc1120e.push(_0x4f7747);
        }
      });
      _0x5ab120._RF.push({}, "8deeaLzDnpHY4zJCP3qd0WV", "pageVisibilityNotify", undefined);
      undefined !== document.hidden ? _0x43ea51 = "visibilitychange" : undefined !== document.msHidden ? _0x43ea51 = "msvisibilitychange" : undefined !== document.webkitHidden && (_0x43ea51 = "webkitvisibilitychange");
      document.addEventListener(_0x43ea51, function (_0x152a26) {
        !function (_0x470d7e) {
          {
            for (var _0x52db06, _0xb89736 = _0x4c6dbf(_0xc1120e); !(_0x52db06 = _0xb89736()).done;) {
              var _0x170877 = _0x52db06.value;
              _0x170877 && _0x170877(_0x470d7e);
            }
          }
        }("visible" == document.visibilityState);
      }, false);
      var _0xc1120e = [];
      _0x5ab120._RF.pop();
    }
  };
});
System.register("chunks:///_virtual/Panel.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Module.ts", "./UIFast.ts", "./Utils.ts", "./UIMgr.ts"], function (_0x5b889c) {
  var _0x47ad3a;
  var _0x1df83f;
  var _0x3388c9;
  var _0x54dc60;
  var _0x202480;
  var _0x59bf7f;
  var _0x56ecac;
  var _0x329294;
  var _0x5aa44a;
  var _0x428c50;
  return {
    setters: [function (_0x4cf114) {
      _0x47ad3a = _0x4cf114.inheritsLoose;
    }, function (_0x964c3d) {
      _0x1df83f = _0x964c3d.cclegacy;
      _0x3388c9 = _0x964c3d._decorator;
      _0x54dc60 = _0x964c3d.v3;
      _0x202480 = _0x964c3d.tween;
      _0x59bf7f = _0x964c3d.easing;
    }, function (_0x6ed169) {
      _0x56ecac = _0x6ed169.default;
    }, function (_0x265acf) {
      _0x329294 = _0x265acf.hidePanel;
    }, function (_0x3e1c79) {
      _0x5aa44a = _0x3e1c79.loadAllObject;
    }, function (_0x50a9a5) {
      {
        _0x428c50 = _0x50a9a5.UIMgr;
      }
    }],
    execute: function () {
      var _0x1fd3bb;
      _0x1df83f._RF.push({}, "301c4y/34hFJZ3gKvDQIPuO", "Panel", undefined);
      var _0x186e6e = _0x3388c9.ccclass;
      _0x3388c9.property;
      _0x5b889c("default", _0x186e6e()(_0x1fd3bb = function (_0x3f5ff2) {
        function _0x8bc1d3() {
          for (var _0x1ada8d, _0x2ac321 = arguments.length, _0x3c368e = new Array(_0x2ac321), _0x3e9f68 = 0; _0x3e9f68 < _0x2ac321; _0x3e9f68++) {
            _0x3c368e[_0x3e9f68] = arguments[_0x3e9f68];
          }
          (_0x1ada8d = _0x3f5ff2.call.apply(_0x3f5ff2, [this].concat(_0x3c368e)) || this).view = {};
          return _0x1ada8d;
        }
        _0x47ad3a(_0x8bc1d3, _0x3f5ff2);
        var _0x88af63 = _0x8bc1d3.prototype;
        _0x88af63.onLoad = function () {
          this.view = _0x5aa44a(this.node);
        };
        _0x88af63.onShow = function () {
          {
            "scrollTop" == this.data.panelType ? (this.node.setPosition(_0x54dc60(0, -812, 0)), _0x202480(this.node).to(0.188, {
              position: _0x54dc60(0, 0, 0)
            }, {
              easing: _0x59bf7f.quadInOut
            }).start()) : "topNoScale" == this.data.panelType ? this.node.setPosition(_0x54dc60(0, 0, 0)) : (this.node.setScale(_0x54dc60(0, 0, 1)), _0x202480(this.node).to(0.188, {
              scale: _0x54dc60(1, 1, 1)
            }, {
              easing: _0x59bf7f.quadInOut
            }).start());
          }
        };
        _0x88af63.hidePanel = function () {
          this.node.emit("close-panel");
          this.node.parent;
          _0x329294();
        };
        _0x88af63.hideAllPanel = function () {
          this.node.emit("close-panel");
          _0x428c50.ins.hideAllPanel();
        };
        return _0x8bc1d3;
      }(_0x56ecac)) || _0x1fd3bb);
      _0x1df83f._RF.pop();
    }
  };
});
System.register("chunks:///_virtual/Predictor.ts", ["cc", "./CinestationMath.ts"], function (_0x55ff64) {
  var _0x302206;
  var _0x416cf0;
  var _0x96c891;
  return {
    setters: [function (_0x426bcd) {
      _0x302206 = _0x426bcd.cclegacy;
      _0x416cf0 = _0x426bcd.Vec3;
    }, function (_0x146c40) {
      _0x96c891 = _0x146c40.Vec3_smoothDamp;
    }],
    execute: function () {
      _0x302206._RF.push({}, "c8d6930H0tIwYdCiSEhw5fJ", "Predictor", undefined);
      var _0x1f546e = new _0x416cf0();
      _0x55ff64("Predictor", function () {
        {
          function _0x463b1f() {
            this._prePos = null;
            this._velocity = new _0x416cf0();
            this._dampingVelocity = new _0x416cf0();
          }
          _0x463b1f.prototype.predictPosition = function (_0x28f2e6, _0x3b37c6, _0x45afbb, _0x512230, _0x2139f4) {
            null === this._prePos ? (this._prePos = new _0x416cf0(_0x3b37c6), _0x28f2e6.set(_0x3b37c6)) : (_0x416cf0.subtract(this._velocity, _0x3b37c6, this._prePos).multiplyScalar(1 / _0x2139f4), _0x96c891(this._dampingVelocity, this._dampingVelocity, this._velocity, _0x45afbb, _0x2139f4), this._prePos.set(_0x3b37c6), _0x416cf0.multiplyScalar(_0x1f546e, this._dampingVelocity, _0x512230), _0x416cf0.add(_0x28f2e6, _0x3b37c6, _0x1f546e));
            return _0x28f2e6;
          };
          return _0x463b1f;
        }
      }());
      _0x302206._RF.pop();
    }
  };
});
System.register("chunks:///_virtual/PrizeScene.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./decorators.ts", "./Scene.ts", "./UIFast.ts", "./Utils.ts", "./WebNet.ts", "./index.ts", "./MainGame.ts", "./AppTool.ts", "./yx-collection-view.ts", "./yx-flow-layout.ts"], function (_0x4b518d) {
  var _0x376ba4;
  var _0xea9b3a;
  var _0x53e935;
  var _0x34ed8e;
  var _0x37c352;
  var _0x128442;
  var _0x6752de;
  var _0x41adc6;
  var _0x216070;
  var _0xe691d3;
  var _0x25f947;
  var _0x25c195;
  var _0x1c9ab4;
  var _0x1bd546;
  var _0x25d40e;
  var _0x12ebd5;
  var _0x5343b7;
  var _0x233d09;
  var _0x17fb18;
  var _0x52fdf1;
  var _0x7d4ed;
  var _0x206db6;
  var _0x401d19;
  var _0x1075a2;
  var _0x4278da;
  var _0x4be72c;
  var _0x42d5fc;
  var _0x571b77;
  var _0x3146ea;
  return {
    setters: [function (_0x131d56) {
      _0x376ba4 = _0x131d56.applyDecoratedDescriptor;
      _0xea9b3a = _0x131d56.inheritsLoose;
      _0x53e935 = _0x131d56.initializerDefineProperty;
      _0x34ed8e = _0x131d56.assertThisInitialized;
      _0x37c352 = _0x131d56.asyncToGenerator;
      _0x128442 = _0x131d56.regeneratorRuntime;
      _0x6752de = _0x131d56.createForOfIteratorHelperLoose;
    }, function (_0x172117) {
      _0x41adc6 = _0x172117.cclegacy;
      _0x216070 = _0x172117._decorator;
      _0xe691d3 = _0x172117.Node;
      _0x25f947 = _0x172117.Label;
      _0x25c195 = _0x172117.Sprite;
      _0x1c9ab4 = _0x172117.Button;
      _0x1bd546 = _0x172117.Size;
    }, function (_0x1ef845) {
      _0x25d40e = _0x1ef845.observer;
    }, function (_0x24c998) {
      {
        _0x12ebd5 = _0x24c998.default;
      }
    }, function (_0x2df22d) {
      _0x5343b7 = _0x2df22d.changeScene;
      _0x233d09 = _0x2df22d.showToast;
      _0x17fb18 = _0x2df22d.hideWaiting;
      _0x52fdf1 = _0x2df22d.showWaiting;
    }, function (_0x532452) {
      _0x7d4ed = _0x532452._asyncThrottle;
      _0x206db6 = _0x532452.strFormat;
    }, function (_0xd432ab) {
      {
        _0x401d19 = _0xd432ab.getProjectId;
        _0x1075a2 = _0xd432ab.sendWebNet;
        _0x4278da = _0xd432ab.WebNetName;
      }
    }, null, function (_0x2cd7fd) {
      _0x4be72c = _0x2cd7fd.MainGame;
    }, function (_0x4054ab) {
      _0x42d5fc = _0x4054ab.miniGoUrl;
    }, function (_0x4663be) {
      _0x571b77 = _0x4663be.YXCollectionView;
    }, function (_0x1a4392) {
      _0x3146ea = _0x1a4392.YXFlowLayout;
    }],
    execute: function () {
      var _0xd7947e;
      var _0xa507e2;
      var _0x1adbb8;
      var _0x8b0174;
      var _0x7a9e49;
      var _0x3f10f1;
      var _0x11e4e9;
      var _0x1d3407;
      _0x41adc6._RF.push({}, "2b91bTHPmFN6rhR1iNk0wgN", "PrizeScene", undefined);
      var _0x5e5ad8 = _0x216070.ccclass;
      var _0xdaa79c = _0x216070.property;
      _0x4b518d("PrizeScene", (_0xd7947e = _0x5e5ad8("PrizeScene"), _0xa507e2 = _0xdaa79c(_0xe691d3), _0x1adbb8 = _0xdaa79c(_0x571b77), _0x25d40e(_0x8b0174 = _0xd7947e(((_0x1d3407 = function (_0x5c01f0) {
        function _0x210e7f() {
          for (var _0x4fa816, _0x30446c = arguments.length, _0x4aaa19 = new Array(_0x30446c), _0x28fb14 = 0; _0x28fb14 < _0x30446c; _0x28fb14++) {
            _0x4aaa19[_0x28fb14] = arguments[_0x28fb14];
          }
          _0x4fa816 = _0x5c01f0.call.apply(_0x5c01f0, [this].concat(_0x4aaa19)) || this;
          _0x53e935(_0x4fa816, "backBtn", _0x3f10f1, _0x34ed8e(_0x4fa816));
          _0x53e935(_0x4fa816, "Prize_List", _0x11e4e9, _0x34ed8e(_0x4fa816));
          _0x4fa816.PrizeListData = [];
          _0x4fa816.currentPrizeLevel = 0;
          _0x4fa816.clickBackHome = _0x7d4ed(_0x37c352(_0x128442().mark(function _0x7c131() {
            return _0x128442().wrap(function (_0x237eb9) {
              for (;;) {
                switch (_0x237eb9.prev = _0x237eb9.next) {
                  case 0:
                    _0x237eb9.next = 2;
                    return _0x5343b7(_0x4be72c);
                  case 2:
                  case "end":
                    return _0x237eb9.stop();
                }
              }
            }, _0x7c131);
          })));
          _0x4fa816.onPrizeListCellDisplay = function (_0x3673c6, _0x21b8bf, _0x2002b2) {
            var _0x1fcd30 = _0x4fa816.PrizeListData[_0x21b8bf.item];
            _0x4fa816.onPrizeCellDisplay(_0x3673c6, _0x1fcd30, _0x21b8bf.item);
          };
          _0x4fa816.onPrizeCellDisplay = function (_0x2aaf3a, _0x3c1c68, _0x582aaf) {
            _0x3c1c68.id;
            var _0x3844eb = _0x3c1c68.url;
            var _0x3d7ff0 = undefined === _0x3844eb ? "" : _0x3844eb;
            var _0x501b1f = _0x3c1c68.name;
            var _0x57d780 = undefined === _0x501b1f ? "" : _0x501b1f;
            var _0x49043a = _0x3c1c68.icon;
            var _0x5976f0 = undefined === _0x49043a ? "" : _0x49043a;
            var _0x7c60d2 = _0x2aaf3a.getChildByName("item_btn");
            _0x2aaf3a.getChildByName("item_name").getComponent(_0x25f947).string = _0x206db6(_0x57d780, 12);
            _0x2aaf3a.getChildByPath("img_bg/img").getComponent(_0x25c195).spriteFrame = _0x5976f0;
            _0x7c60d2.on(_0x1c9ab4.EventType.CLICK, function () {
              return _0x4fa816.clickToCheck(_0x3d7ff0, _0x3c1c68);
            });
          };
          _0x4fa816.clickToCheck = _0x37c352(_0x128442().mark(function _0x4038b2(_0x17887c, _0x2f1fc6) {
            var _0x1efa7f;
            var _0x46cb64;
            var _0x2de5de;
            var _0x31f184;
            return _0x128442().wrap(function (_0x41e971) {
              for (;;) {
                switch (_0x41e971.prev = _0x41e971.next) {
                  case 0:
                    if (console.info("奖品跳转", _0x2f1fc6), _0x1efa7f = _0x2f1fc6.prizeId, _0x46cb64 = _0x2f1fc6.id, console.info("id11111", _0x1efa7f), -1 == _0x1efa7f.indexOf("sp_red") && "sp_compose_1" != _0x1efa7f) {
                      _0x41e971.next = 6;
                      break;
                    }
                    _0x42d5fc("/pagesNews/user/userRed");
                    return _0x41e971.abrupt("return");
                  case 6:
                    if (-1 == _0x1efa7f.indexOf("sp_exclusive_coupon")) {
                      _0x41e971.next = 9;
                      break;
                    }
                    _0x42d5fc("/pagesNews/user/coupon");
                    return _0x41e971.abrupt("return");
                  case 9:
                    if ("virtual" !== _0x2f1fc6.data.extra.refType) {
                      _0x41e971.next = 18;
                      break;
                    }
                    _0x41e971.next = 12;
                    return _0x1075a2(_0x4278da.queryPrizeDetail, {
                      recordId: _0x46cb64,
                      projectId: _0x401d19()
                    });
                  case 12:
                    _0x2de5de = _0x41e971.sent;
                    _0x31f184 = _0x2de5de.data;
                    console.info(_0x31f184);
                    null != _0x31f184 && _0x31f184.orderNo ? wx.miniProgram.reLaunch({
                      url: "/pages/index/index?orderNo=" + _0x46cb64 + "&activityId=" + (null == _0x31f184 ? undefined : _0x31f184.activityId) + "&uid=" + (null == _0x31f184 ? undefined : _0x31f184.uid) + "&activityUrl=" + encodeURIComponent(location.origin + "/projectx/" + _0x401d19() + "/index.html?jumpFlag=1")
                    }) : _0x233d09("请稍后再试～");
                    _0x41e971.next = 19;
                    break;
                  case 18:
                    "virtual" !== _0x2f1fc6.data.extra.refType && (location.href = "/aaw/projectx/takePrize?projectOrderNo=" + _0x46cb64);
                  case 19:
                  case "end":
                    return _0x41e971.stop();
                }
              }
            }, _0x4038b2);
          }));
          return _0x4fa816;
        }
        _0xea9b3a(_0x210e7f, _0x5c01f0);
        var _0x189a3f = _0x210e7f.prototype;
        _0x189a3f.onLoad = function () {
          {
            this.backBtn.on(_0x1c9ab4.EventType.CLICK, this.clickBackHome, this);
          }
        };
        _0x189a3f.onDestroy = function () {};
        _0x189a3f.start = function () {
          var _0x4f3654 = _0x37c352(_0x128442().mark(function _0x3a538e() {
            var _0x519a19;
            var _0x41e661 = this;
            return _0x128442().wrap(function (_0x438859) {
              for (;;) {
                switch (_0x438859.prev = _0x438859.next) {
                  case 0:
                    this.Prize_List.numberOfItems = function () {
                      return _0x41e661.PrizeListData.length;
                    };
                    this.Prize_List.onCellDisplay = this.onPrizeListCellDisplay;
                    (_0x519a19 = new _0x3146ea()).itemSize = new _0x1bd546(719, 200);
                    this.Prize_List.layout = _0x519a19;
                    this.Prize_List.reloadData();
                    _0x52fdf1(true);
                    _0x438859.next = 9;
                    return this.updatePrizeInfo();
                  case 9:
                    _0x17fb18();
                  case 10:
                  case "end":
                    return _0x438859.stop();
                }
              }
            }, _0x3a538e, this);
          }));
          return function () {
            return _0x4f3654.apply(this, arguments);
          };
        }();
        _0x189a3f.update = function (_0xc5d432) {};
        _0x189a3f.updatePrizeInfo = function () {
          var _0x21f669 = _0x37c352(_0x128442().mark(function _0x31126f() {
            var _0x5eae6e;
            var _0x595138;
            var _0xebb28;
            var _0x3badf4;
            var _0x10024f;
            var _0x19aaf1;
            var _0x92afa7;
            var _0x4cd586;
            var _0x247b3e;
            var _0x1b95e9;
            var _0x3a1685;
            var _0x1cda71;
            var _0x12fd3e;
            var _0x4a939b;
            var _0x3bf482;
            var _0x306c68;
            var _0x23c8ed;
            return _0x128442().wrap(function (_0x2adff7) {
              for (;;) {
                switch (_0x2adff7.prev = _0x2adff7.next) {
                  case 0:
                    _0x2adff7.next = 2;
                    return _0x1075a2(_0x4278da.prizeDetail);
                  case 2:
                    if (_0x5eae6e = _0x2adff7.sent, _0x595138 = _0x5eae6e.success, _0xebb28 = _0x5eae6e.data, _0x3badf4 = undefined === _0xebb28 ? [] : _0xebb28, _0x595138) {
                      _0x2adff7.next = 8;
                      break;
                    }
                    return _0x2adff7.abrupt("return");
                  case 8:
                    _0x10024f = true;
                    _0x19aaf1 = [];
                    _0x92afa7 = _0x6752de(_0x3badf4);
                  case 11:
                    if ((_0x4cd586 = _0x92afa7()).done) {
                      _0x2adff7.next = 19;
                      break;
                    }
                    if (_0x1b95e9 = _0x4cd586.value, _0x3a1685 = _0x1b95e9.extra, _0x1cda71 = _0x3a1685.name, _0x12fd3e = _0x3a1685.icon, _0x4a939b = _0x3a1685.type, _0x3bf482 = _0x1b95e9.id, _0x306c68 = _0x1b95e9.prizeId, _0x23c8ed = _0x1b95e9.gmtCreate, !_0x10024f || 1 !== _0x4a939b || -1 != (null == (_0x247b3e = _0x1b95e9.prizeId) ? undefined : _0x247b3e.indexOf("sp_red")) || "sp_compose_1" == (null == _0x1b95e9 ? undefined : _0x1b95e9.prizeId)) {
                      _0x2adff7.next = 16;
                      break;
                    }
                    return _0x2adff7.abrupt("continue", 17);
                  case 16:
                    _0x19aaf1.push({
                      id: _0x3bf482,
                      prizeId: _0x306c68,
                      name: _0x1cda71,
                      icon: _0x12fd3e,
                      gmtCreate: _0x23c8ed,
                      data: _0x1b95e9
                    });
                  case 17:
                    _0x2adff7.next = 11;
                    break;
                  case 19:
                    this.PrizeListData = _0x19aaf1;
                    this.Prize_List.reloadData();
                  case 21:
                  case "end":
                    return _0x2adff7.stop();
                }
              }
            }, _0x31126f, this);
          }));
          return function () {
            return _0x21f669.apply(this, arguments);
          };
        }();
        return _0x210e7f;
      }(_0x12ebd5)).bundle = "PrizeScene", _0x1d3407.skin = "PrizeScene", _0x3f10f1 = _0x376ba4((_0x7a9e49 = _0x1d3407).prototype, "backBtn", [_0xa507e2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x11e4e9 = _0x376ba4(_0x7a9e49.prototype, "Prize_List", [_0x1adbb8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x8b0174 = _0x7a9e49)) || _0x8b0174) || _0x8b0174));
      _0x41adc6._RF.pop();
    }
  };
});
System.register("chunks:///_virtual/QingGuoConfirmPanel.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Panel.ts", "./store.ts", "./decorators.ts", "./Utils.ts", "./WebNet.ts", "./UIFast.ts", "./QingGuoExchangeSucPanel.ts"], function (_0xab1cd0) {
  var _0x169251;
  var _0x4ddaa7;
  var _0x4c105d;
  var _0x2d5884;
  var _0x409e53;
  var _0x22e724;
  var _0x1832e2;
  var _0x114943;
  var _0x47fba9;
  var _0x1c0c59;
  var _0x4a70a8;
  var _0x1c92b0;
  var _0xecaf3f;
  var _0x39cb98;
  var _0x2837d6;
  var _0x55e18e;
  var _0x8ec808;
  var _0x522bf6;
  var _0x5def33;
  var _0xa23b15;
  return {
    setters: [function (_0x26f383) {
      {
        _0x169251 = _0x26f383.applyDecoratedDescriptor;
        _0x4ddaa7 = _0x26f383.inheritsLoose;
        _0x4c105d = _0x26f383.initializerDefineProperty;
        _0x2d5884 = _0x26f383.assertThisInitialized;
        _0x409e53 = _0x26f383.asyncToGenerator;
        _0x22e724 = _0x26f383.regeneratorRuntime;
      }
    }, function (_0x309b84) {
      _0x1832e2 = _0x309b84.cclegacy;
      _0x114943 = _0x309b84._decorator;
      _0x47fba9 = _0x309b84.Node;
      _0x1c0c59 = _0x309b84.Sprite;
      _0x4a70a8 = _0x309b84.Label;
      _0x1c92b0 = _0x309b84.Button;
    }, function (_0x3eec4a) {
      _0xecaf3f = _0x3eec4a.default;
    }, function (_0xba0e08) {
      _0x39cb98 = _0xba0e08.default;
    }, function (_0x85d3a4) {
      _0x2837d6 = _0x85d3a4.observer;
    }, function (_0x26283c) {
      _0x55e18e = _0x26283c._asyncThrottle;
    }, function (_0x5de308) {
      _0x8ec808 = _0x5de308.sendWebNetWithToken;
      _0x522bf6 = _0x5de308.WebNetName;
    }, function (_0x5f38de) {
      _0x5def33 = _0x5f38de.showPanel;
    }, function (_0x26cb8b) {
      _0xa23b15 = _0x26cb8b.default;
    }],
    execute: function () {
      var _0x446fec;
      var _0x2e1b5c;
      var _0x3c2807;
      var _0x3f4fdf;
      var _0x4b8092;
      var _0x576899;
      var _0x5ca25f;
      var _0x2b2bf1;
      var _0x123e5b;
      var _0x102340;
      var _0x3ae670;
      var _0x3dbf79;
      var _0x24d6a5;
      var _0x4d83ee;
      var _0x196b26;
      var _0x434d88;
      _0x1832e2._RF.push({}, "7f20fsoDNdEI6VmEJBG3m4v", "QingGuoConfirmPanel", undefined);
      var _0x3929b3 = _0x114943.ccclass;
      var _0x44c188 = _0x114943.property;
      _0xab1cd0("default", (_0x446fec = _0x3929b3("QingGuoConfirmPanel"), _0x2e1b5c = _0x44c188(_0x47fba9), _0x3c2807 = _0x44c188(_0x47fba9), _0x3f4fdf = _0x44c188(_0x1c0c59), _0x4b8092 = _0x44c188(_0x4a70a8), _0x576899 = _0x44c188(_0x4a70a8), _0x5ca25f = _0x44c188(_0x4a70a8), _0x2837d6(_0x2b2bf1 = _0x446fec(((_0x434d88 = function (_0x10b9e4) {
        function _0x5a6719() {
          for (var _0x1f7a2f, _0x22b33b = arguments.length, _0xa7e4ba = new Array(_0x22b33b), _0x2050c7 = 0; _0x2050c7 < _0x22b33b; _0x2050c7++) {
            _0xa7e4ba[_0x2050c7] = arguments[_0x2050c7];
          }
          _0x1f7a2f = _0x10b9e4.call.apply(_0x10b9e4, [this].concat(_0xa7e4ba)) || this;
          _0x4c105d(_0x1f7a2f, "closeBtn", _0x102340, _0x2d5884(_0x1f7a2f));
          _0x4c105d(_0x1f7a2f, "mainBtn", _0x3ae670, _0x2d5884(_0x1f7a2f));
          _0x4c105d(_0x1f7a2f, "goodsImg", _0x3dbf79, _0x2d5884(_0x1f7a2f));
          _0x4c105d(_0x1f7a2f, "jinfuLabel", _0x24d6a5, _0x2d5884(_0x1f7a2f));
          _0x4c105d(_0x1f7a2f, "GoodsLabel_top", _0x4d83ee, _0x2d5884(_0x1f7a2f));
          _0x4c105d(_0x1f7a2f, "GoodsLabel_bottom", _0x196b26, _0x2d5884(_0x1f7a2f));
          _0x1f7a2f.queryTaskInfo = undefined;
          _0x1f7a2f.clickClose = function () {
            _0x1f7a2f.hidePanel();
          };
          _0x1f7a2f.clickExchange = _0x55e18e(_0x409e53(_0x22e724().mark(function _0x2ee310() {
            var _0x455ecd;
            var _0x7cf252;
            var _0x2eb1b1;
            return _0x22e724().wrap(function (_0x1c7f28) {
              {
                for (;;) {
                  switch (_0x1c7f28.prev = _0x1c7f28.next) {
                    case 0:
                      _0x1c7f28.next = 2;
                      return _0x8ec808(_0x522bf6.doGreenExchange);
                    case 2:
                      if (_0x455ecd = _0x1c7f28.sent, _0x7cf252 = _0x455ecd.success, _0x2eb1b1 = _0x455ecd.data, _0x7cf252) {
                        _0x1c7f28.next = 7;
                        break;
                      }
                      return _0x1c7f28.abrupt("return");
                    case 7:
                      _0x1c7f28.next = 9;
                      return _0x1f7a2f.data.queryTaskInfo();
                    case 9:
                      _0x1c7f28.next = 11;
                      return _0x39cb98.updateIndex();
                    case 11:
                      _0x5def33(_0xa23b15, {
                        queryTaskInfo: function () {
                          {
                            _0x1f7a2f.data.queryTaskInfo();
                          }
                        },
                        data: _0x2eb1b1
                      });
                      _0x1f7a2f.clickClose();
                    case 13:
                    case "end":
                      return _0x1c7f28.stop();
                  }
                }
              }
            }, _0x2ee310);
          })));
          return _0x1f7a2f;
        }
        _0x4ddaa7(_0x5a6719, _0x10b9e4);
        var _0x515fc2 = _0x5a6719.prototype;
        _0x515fc2.onLoad = function () {};
        _0x515fc2.start = function () {
          var _0x2bf7ad = _0x409e53(_0x22e724().mark(function _0x5704b4() {
            var _0x3ea700;
            var _0x23c2e0;
            var _0x2323d3;
            return _0x22e724().wrap(function (_0x1a8f79) {
              {
                for (;;) {
                  switch (_0x1a8f79.prev = _0x1a8f79.next) {
                    case 0:
                      _0x23c2e0 = this.data || {};
                      _0x2323d3 = _0x23c2e0.exchangeInfo;
                      console.log("exchangeInfo,this.data", this.data);
                      this.closeBtn.on(_0x1c92b0.EventType.CLICK, this.clickClose);
                      this.mainBtn.on(_0x1c92b0.EventType.CLICK, this.clickExchange);
                      this.jinfuLabel.string = "您确定要花费" + (null == _0x2323d3 ? undefined : _0x2323d3.needNum) + "青果";
                      this.GoodsLabel_top.string = "兑换" + (null == _0x2323d3 || null == (_0x3ea700 = _0x2323d3.awardConfigs[0]) ? undefined : _0x3ea700.awardNum) + "福气";
                      this.GoodsLabel_bottom.string = "";
                    case 7:
                    case "end":
                      return _0x1a8f79.stop();
                  }
                }
              }
            }, _0x5704b4, this);
          }));
          return function () {
            return _0x2bf7ad.apply(this, arguments);
          };
        }();
        return _0x5a6719;
      }(_0xecaf3f)).bundle = "QingGuoConfirmPanel", _0x434d88.skin = "QingGuoConfirmPanel", _0x102340 = _0x169251((_0x123e5b = _0x434d88).prototype, "closeBtn", [_0x2e1b5c], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x3ae670 = _0x169251(_0x123e5b.prototype, "mainBtn", [_0x3c2807], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          {
            return null;
          }
        }
      }), _0x3dbf79 = _0x169251(_0x123e5b.prototype, "goodsImg", [_0x3f4fdf], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x24d6a5 = _0x169251(_0x123e5b.prototype, "jinfuLabel", [_0x4b8092], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x4d83ee = _0x169251(_0x123e5b.prototype, "GoodsLabel_top", [_0x576899], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x196b26 = _0x169251(_0x123e5b.prototype, "GoodsLabel_bottom", [_0x5ca25f], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x2b2bf1 = _0x123e5b)) || _0x2b2bf1) || _0x2b2bf1));
      _0x1832e2._RF.pop();
    }
  };
});
System.register("chunks:///_virtual/QingGuoExchangeSucPanel.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Panel.ts", "./decorators.ts"], function (_0x49bcdb) {
  var _0x4cb8c8;
  var _0x1b112e;
  var _0x5576f7;
  var _0x56954b;
  var _0xe9f641;
  var _0x11526e;
  var _0x422d54;
  var _0x597985;
  var _0x8a519f;
  var _0x1db3ec;
  var _0x1d053f;
  var _0x48215b;
  var _0xf4b086;
  var _0x9ba3cc;
  return {
    setters: [function (_0x3ee4e8) {
      _0x4cb8c8 = _0x3ee4e8.applyDecoratedDescriptor;
      _0x1b112e = _0x3ee4e8.inheritsLoose;
      _0x5576f7 = _0x3ee4e8.initializerDefineProperty;
      _0x56954b = _0x3ee4e8.assertThisInitialized;
      _0xe9f641 = _0x3ee4e8.asyncToGenerator;
      _0x11526e = _0x3ee4e8.regeneratorRuntime;
    }, function (_0x2b180f) {
      _0x422d54 = _0x2b180f.cclegacy;
      _0x597985 = _0x2b180f._decorator;
      _0x8a519f = _0x2b180f.Node;
      _0x1db3ec = _0x2b180f.Sprite;
      _0x1d053f = _0x2b180f.Label;
      _0x48215b = _0x2b180f.Button;
    }, function (_0x2b62ca) {
      {
        _0xf4b086 = _0x2b62ca.default;
      }
    }, function (_0x4db40d) {
      _0x9ba3cc = _0x4db40d.observer;
    }],
    execute: function () {
      var _0x580e65;
      var _0x5a22fd;
      var _0x25eefd;
      var _0x47c9b7;
      var _0x70e93d;
      var _0x328237;
      var _0x360954;
      var _0x14693d;
      var _0x4108ea;
      var _0x1f47cf;
      var _0x1a983c;
      var _0x206f42;
      _0x422d54._RF.push({}, "4488fFHZiNJlqekL6c7yUat", "QingGuoExchangeSucPanel", undefined);
      var _0x440f16 = _0x597985.ccclass;
      var _0x32079f = _0x597985.property;
      _0x49bcdb("default", (_0x580e65 = _0x440f16("QingGuoExchangeSucPanel"), _0x5a22fd = _0x32079f(_0x8a519f), _0x25eefd = _0x32079f(_0x8a519f), _0x47c9b7 = _0x32079f(_0x1db3ec), _0x70e93d = _0x32079f(_0x1d053f), _0x9ba3cc(_0x328237 = _0x580e65(((_0x206f42 = function (_0x142434) {
        function _0x4a395b() {
          {
            for (var _0x4740ec, _0x433c70 = arguments.length, _0x2a613e = new Array(_0x433c70), _0x54331a = 0; _0x54331a < _0x433c70; _0x54331a++) {
              _0x2a613e[_0x54331a] = arguments[_0x54331a];
            }
            _0x4740ec = _0x142434.call.apply(_0x142434, [this].concat(_0x2a613e)) || this;
            _0x5576f7(_0x4740ec, "closeBtn", _0x14693d, _0x56954b(_0x4740ec));
            _0x5576f7(_0x4740ec, "mainBtn", _0x4108ea, _0x56954b(_0x4740ec));
            _0x5576f7(_0x4740ec, "goodsImg", _0x1f47cf, _0x56954b(_0x4740ec));
            _0x5576f7(_0x4740ec, "goodsName", _0x1a983c, _0x56954b(_0x4740ec));
            _0x4740ec.clickClose = function () {
              _0x4740ec.hidePanel();
            };
            return _0x4740ec;
          }
        }
        _0x1b112e(_0x4a395b, _0x142434);
        var _0x5b1b2d = _0x4a395b.prototype;
        _0x5b1b2d.onLoad = function () {
          this.closeBtn.on(_0x48215b.EventType.CLICK, this.clickClose);
          this.mainBtn.on(_0x48215b.EventType.CLICK, this.clickClose);
        };
        _0x5b1b2d.start = function () {
          var _0x129ba1 = _0xe9f641(_0x11526e().mark(function _0x125c46() {
            {
              var _0x391e9d;
              return _0x11526e().wrap(function (_0x33276f) {
                for (;;) {
                  switch (_0x33276f.prev = _0x33276f.next) {
                    case 0:
                      _0x391e9d = this.data.data.awardNum;
                      console.log("this.data", this.data);
                      this.goodsName.string = _0x391e9d + "福气";
                    case 3:
                    case "end":
                      return _0x33276f.stop();
                  }
                }
              }, _0x125c46, this);
            }
          }));
          return function () {
            return _0x129ba1.apply(this, arguments);
          };
        }();
        return _0x4a395b;
      }(_0xf4b086)).bundle = "QingGuoExchangeSucPanel", _0x206f42.skin = "QingGuoExchangeSucPanel", _0x14693d = _0x4cb8c8((_0x360954 = _0x206f42).prototype, "closeBtn", [_0x5a22fd], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x4108ea = _0x4cb8c8(_0x360954.prototype, "mainBtn", [_0x25eefd], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x1f47cf = _0x4cb8c8(_0x360954.prototype, "goodsImg", [_0x47c9b7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x1a983c = _0x4cb8c8(_0x360954.prototype, "goodsName", [_0x70e93d], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x328237 = _0x360954)) || _0x328237) || _0x328237));
      _0x422d54._RF.pop();
    }
  };
});
System.register("chunks:///_virtual/RankKeepPanel.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Panel.ts", "./store.ts", "./decorators.ts", "./Utils.ts", "./UIFast.ts", "./RankScene.ts", "./constants.ts"], function (_0x25c994) {
  var _0x2ee008;
  var _0x5ecafb;
  var _0x78918f;
  var _0x284db5;
  var _0x1b98e3;
  var _0x4282b7;
  var _0x54e430;
  var _0x2d9da3;
  var _0x16be59;
  var _0x256b9a;
  var _0x2726d3;
  var _0x57e7d5;
  var _0x3c914b;
  var _0x5ea786;
  var _0x836130;
  var _0x3f17c0;
  var _0x59c485;
  var _0x5dc32d;
  var _0x1d7c27;
  var _0x20bd77;
  var _0x1bec4d;
  var _0x59d648;
  return {
    setters: [function (_0x592da8) {
      _0x2ee008 = _0x592da8.applyDecoratedDescriptor;
      _0x5ecafb = _0x592da8.inheritsLoose;
      _0x78918f = _0x592da8.initializerDefineProperty;
      _0x284db5 = _0x592da8.assertThisInitialized;
      _0x1b98e3 = _0x592da8.asyncToGenerator;
      _0x4282b7 = _0x592da8.regeneratorRuntime;
    }, function (_0x5bdcc0) {
      _0x54e430 = _0x5bdcc0.cclegacy;
      _0x2d9da3 = _0x5bdcc0._decorator;
      _0x16be59 = _0x5bdcc0.Label;
      _0x256b9a = _0x5bdcc0.Button;
      _0x2726d3 = _0x5bdcc0.Node;
      _0x57e7d5 = _0x5bdcc0.Sprite;
      _0x3c914b = _0x5bdcc0.Color;
    }, function (_0x507317) {
      _0x5ea786 = _0x507317.default;
    }, function (_0x4681a5) {
      _0x836130 = _0x4681a5.default;
    }, function (_0x10967e) {
      _0x3f17c0 = _0x10967e.observer;
    }, function (_0x412dd4) {
      _0x59c485 = _0x412dd4._asyncThrottle;
      _0x5dc32d = _0x412dd4.strFormat;
    }, function (_0x10bd7e) {
      _0x1d7c27 = _0x10bd7e.changeScene;
    }, function (_0x24e413) {
      _0x20bd77 = _0x24e413.RankScence;
    }, function (_0x4df80f) {
      _0x1bec4d = _0x4df80f.userImg;
      _0x59d648 = _0x4df80f.userName;
    }],
    execute: function () {
      var _0x53d065;
      var _0x5be979;
      var _0x87b77c;
      var _0x29b611;
      var _0x36f6c8;
      var _0x277b74;
      var _0x3dcec7;
      var _0x1b69e7;
      var _0x2ac4d5;
      var _0x2af4ca;
      var _0x2ee402;
      var _0x1aa06d;
      var _0x46209f;
      var _0x417d57;
      var _0x32eab9;
      var _0x2e74e5;
      var _0x2a3ebd;
      var _0x90d7f8;
      var _0x5848b6;
      var _0x41959f;
      var _0x171e1a;
      var _0x1161af;
      var _0x29b06f;
      var _0x3555e1;
      _0x54e430._RF.push({}, "d5ecc4nfJJGKqTbnajaqaj+", "RankKeepPanel", undefined);
      var _0x1e2424 = _0x2d9da3.ccclass;
      var _0x4394ce = _0x2d9da3.property;
      _0x25c994("default", (_0x53d065 = _0x1e2424("RankKeepPanel"), _0x5be979 = _0x4394ce(_0x16be59), _0x87b77c = _0x4394ce(_0x16be59), _0x29b611 = _0x4394ce(_0x16be59), _0x36f6c8 = _0x4394ce(_0x16be59), _0x277b74 = _0x4394ce(_0x256b9a), _0x3dcec7 = _0x4394ce(_0x256b9a), _0x1b69e7 = _0x4394ce(_0x2726d3), _0x2ac4d5 = _0x4394ce(_0x2726d3), _0x2af4ca = _0x4394ce(_0x2726d3), _0x2ee402 = _0x4394ce(_0x16be59), _0x3f17c0(_0x1aa06d = _0x53d065(((_0x3555e1 = function (_0x2be77b) {
        function _0x3c26af() {
          for (var _0x1997a9, _0x4c7909 = arguments.length, _0xa44399 = new Array(_0x4c7909), _0x1c5c1a = 0; _0x1c5c1a < _0x4c7909; _0x1c5c1a++) {
            _0xa44399[_0x1c5c1a] = arguments[_0x1c5c1a];
          }
          _0x1997a9 = _0x2be77b.call.apply(_0x2be77b, [this].concat(_0xa44399)) || this;
          _0x78918f(_0x1997a9, "fuQiNum", _0x417d57, _0x284db5(_0x1997a9));
          _0x78918f(_0x1997a9, "fuQiText", _0x32eab9, _0x284db5(_0x1997a9));
          _0x78918f(_0x1997a9, "beiLvNum", _0x2e74e5, _0x284db5(_0x1997a9));
          _0x78918f(_0x1997a9, "beiLvText", _0x2a3ebd, _0x284db5(_0x1997a9));
          _0x78918f(_0x1997a9, "closeBtn", _0x90d7f8, _0x284db5(_0x1997a9));
          _0x78918f(_0x1997a9, "mainBtn", _0x5848b6, _0x284db5(_0x1997a9));
          _0x78918f(_0x1997a9, "rank1", _0x41959f, _0x284db5(_0x1997a9));
          _0x78918f(_0x1997a9, "rank2", _0x171e1a, _0x284db5(_0x1997a9));
          _0x78918f(_0x1997a9, "rank3", _0x1161af, _0x284db5(_0x1997a9));
          _0x78918f(_0x1997a9, "topRank", _0x29b06f, _0x284db5(_0x1997a9));
          _0x1997a9.closePanel = _0x59c485(function () {
            {
              _0x1997a9.hidePanel();
            }
          });
          _0x1997a9.clickRank = _0x59c485(function () {
            _0x1997a9.closePanel();
            _0x1d7c27(_0x20bd77);
          });
          return _0x1997a9;
        }
        _0x5ecafb(_0x3c26af, _0x2be77b);
        var _0x3b3dc4 = _0x3c26af.prototype;
        _0x3b3dc4.onLoad = function () {
          this.closeBtn.node.on(_0x256b9a.EventType.CLICK, this.closePanel, this);
          this.mainBtn.node.on(_0x256b9a.EventType.CLICK, this.clickRank, this);
        };
        _0x3b3dc4.start = function () {
          var _0x25b9c6 = _0x1b98e3(_0x4282b7().mark(function _0x4a357a() {
            var _0x24a2b3;
            var _0x17d411;
            var _0x3127d4;
            var _0x1a0800;
            var _0xc9d306 = this;
            return _0x4282b7().wrap(function (_0x1c06d2) {
              for (;;) {
                switch (_0x1c06d2.prev = _0x1c06d2.next) {
                  case 0:
                    _0x3127d4 = _0x836130.rankPopInfo.settlementPop;
                    this.fuQiNum.string = "x" + (null == _0x3127d4 ? undefined : _0x3127d4.obtainScoreNum);
                    this.fuQiText.string = (null == _0x3127d4 ? undefined : _0x3127d4.obtainScoreNum) + "枚福气";
                    this.beiLvNum.string = "x" + (null == _0x3127d4 ? undefined : _0x3127d4.newRankMultiply);
                    this.beiLvText.string = "x" + (null == _0x3127d4 ? undefined : _0x3127d4.newRankMultiply);
                    _0x1a0800 = null == _0x3127d4 || null == (_0x24a2b3 = _0x3127d4.rankList) ? undefined : _0x24a2b3.find(function (_0x5d5d89) {
                      return _0x5d5d89.boolMe;
                    });
                    this.topRank.getComponent(_0x16be59).string = null != _0x1a0800 && _0x1a0800.rankOrder ? "昨日排名：" + (null == _0x1a0800 ? undefined : _0x1a0800.rankOrder) : "";
                    null == _0x3127d4 || null == (_0x17d411 = _0x3127d4.rankList) || _0x17d411.map(function (_0x43ad97, _0x43198a) {
                      var _0x15b512 = _0xc9d306["rank" + (_0x43198a + 1)];
                      _0x15b512.active = true;
                      _0x15b512.getChildByPath("Mask/头像").getComponent(_0x57e7d5).spriteFrame = (null == _0x43ad97 ? undefined : _0x43ad97.avatar) || _0x1bec4d;
                      _0x15b512.getChildByName("nikeName").getComponent(_0x16be59).string = _0x5dc32d((null == _0x43ad97 ? undefined : _0x43ad97.nickName) || _0x59d648, 10);
                      _0x15b512.getChildByName("rankscore").getComponent(_0x16be59).string = null == _0x43ad97 ? undefined : _0x43ad97.rankScore;
                      _0x15b512.getChildByName("rank").getComponent(_0x16be59).string = (null == _0x43ad97 ? undefined : _0x43ad97.rankOrder) || "";
                      _0x15b512.getChildByName("my_bg").active = null == _0x43ad97 ? undefined : _0x43ad97.boolMe;
                      null != _0x43ad97 && _0x43ad97.boolMe && (_0x15b512.getChildByName("nikeName").getComponent(_0x16be59).color = new _0x3c914b(255, 149, 0), _0x15b512.getChildByName("rankscore").getComponent(_0x16be59).color = new _0x3c914b(255, 149, 0), _0x15b512.getChildByName("rank").getComponent(_0x16be59).color = new _0x3c914b(255, 149, 0));
                    });
                  case 8:
                  case "end":
                    return _0x1c06d2.stop();
                }
              }
            }, _0x4a357a, this);
          }));
          return function () {
            return _0x25b9c6.apply(this, arguments);
          };
        }();
        return _0x3c26af;
      }(_0x5ea786)).bundle = "RankKeepPanel", _0x3555e1.skin = "RankKeepPanel", _0x417d57 = _0x2ee008((_0x46209f = _0x3555e1).prototype, "fuQiNum", [_0x5be979], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x32eab9 = _0x2ee008(_0x46209f.prototype, "fuQiText", [_0x87b77c], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x2e74e5 = _0x2ee008(_0x46209f.prototype, "beiLvNum", [_0x29b611], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x2a3ebd = _0x2ee008(_0x46209f.prototype, "beiLvText", [_0x36f6c8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x90d7f8 = _0x2ee008(_0x46209f.prototype, "closeBtn", [_0x277b74], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x5848b6 = _0x2ee008(_0x46209f.prototype, "mainBtn", [_0x3dcec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x41959f = _0x2ee008(_0x46209f.prototype, "rank1", [_0x1b69e7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x171e1a = _0x2ee008(_0x46209f.prototype, "rank2", [_0x2ac4d5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x1161af = _0x2ee008(_0x46209f.prototype, "rank3", [_0x2af4ca], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x29b06f = _0x2ee008(_0x46209f.prototype, "topRank", [_0x2ee402], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          {
            return null;
          }
        }
      }), _0x1aa06d = _0x46209f)) || _0x1aa06d) || _0x1aa06d));
      _0x54e430._RF.pop();
    }
  };
});
System.register("chunks:///_virtual/RankKeepSvgaPanel.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Panel.ts", "./store.ts", "./decorators.ts", "./Utils.ts", "./UIFast.ts", "./RankKeepPanel.ts", "./Svga.ts"], function (_0x43084a) {
  var _0x53d0be;
  var _0x28e93;
  var _0x28303f;
  var _0x16cde8;
  var _0x48f32d;
  var _0x29b973;
  var _0x30419b;
  var _0x30e545;
  var _0x43ba30;
  var _0x6786f1;
  var _0x49c89a;
  var _0x389541;
  var _0x5b2035;
  var _0x1b0af3;
  var _0x2f191e;
  var _0x52eeb6;
  var _0x2a04b6;
  var _0x3c0185;
  var _0x575df3;
  var _0x525ce9;
  return {
    setters: [function (_0x5bb775) {
      _0x53d0be = _0x5bb775.applyDecoratedDescriptor;
      _0x28e93 = _0x5bb775.inheritsLoose;
      _0x28303f = _0x5bb775.initializerDefineProperty;
      _0x16cde8 = _0x5bb775.assertThisInitialized;
      _0x48f32d = _0x5bb775.asyncToGenerator;
      _0x29b973 = _0x5bb775.regeneratorRuntime;
    }, function (_0x1295f8) {
      _0x30419b = _0x1295f8.cclegacy;
      _0x30e545 = _0x1295f8._decorator;
      _0x43ba30 = _0x1295f8.Sprite;
      _0x6786f1 = _0x1295f8.Label;
      _0x49c89a = _0x1295f8.Node;
      _0x389541 = _0x1295f8.assetManager;
      _0x5b2035 = _0x1295f8.SpriteFrame;
    }, function (_0x2ecbcb) {
      {
        _0x1b0af3 = _0x2ecbcb.default;
      }
    }, function (_0x114481) {
      _0x2f191e = _0x114481.default;
    }, function (_0x494ba8) {
      _0x52eeb6 = _0x494ba8.observer;
    }, function (_0x9f967b) {
      _0x2a04b6 = _0x9f967b.strFormat;
    }, function (_0xfafdfb) {
      _0x3c0185 = _0xfafdfb.showPanel;
    }, function (_0x29a5ef) {
      _0x575df3 = _0x29a5ef.default;
    }, function (_0x132bf4) {
      _0x525ce9 = _0x132bf4.default;
    }],
    execute: function () {
      var _0x37149e;
      var _0x27428f;
      var _0x2f42ba;
      var _0x442463;
      var _0x52fae5;
      var _0x34679e;
      var _0x5a1c20;
      var _0x46f3cb;
      var _0x3c5d4c;
      var _0x4808e2;
      var _0x2c439d;
      var _0x2ee48e;
      _0x30419b._RF.push({}, "88a4cLQBu1IuJ8VZ8yJZquZ", "RankKeepSvgaPanel", undefined);
      var _0x255070 = _0x30e545.ccclass;
      var _0x273fb3 = _0x30e545.property;
      _0x43084a("default", (_0x37149e = _0x255070("RankKeepSvgaPanel"), _0x27428f = _0x273fb3(_0x43ba30), _0x2f42ba = _0x273fb3(_0x6786f1), _0x442463 = _0x273fb3(_0x49c89a), _0x52fae5 = _0x273fb3(_0x49c89a), _0x52eeb6(_0x34679e = _0x37149e(((_0x2ee48e = function (_0x5c9d2d) {
        function _0x126bf8() {
          for (var _0x43a0cc, _0xb37d05 = arguments.length, _0x458442 = new Array(_0xb37d05), _0x36ff17 = 0; _0x36ff17 < _0xb37d05; _0x36ff17++) {
            _0x458442[_0x36ff17] = arguments[_0x36ff17];
          }
          _0x43a0cc = _0x5c9d2d.call.apply(_0x5c9d2d, [this].concat(_0x458442)) || this;
          _0x28303f(_0x43a0cc, "bigIcon", _0x46f3cb, _0x16cde8(_0x43a0cc));
          _0x28303f(_0x43a0cc, "bigLevel", _0x3c5d4c, _0x16cde8(_0x43a0cc));
          _0x28303f(_0x43a0cc, "bigIconNode", _0x4808e2, _0x16cde8(_0x43a0cc));
          _0x28303f(_0x43a0cc, "svgaBg", _0x2c439d, _0x16cde8(_0x43a0cc));
          return _0x43a0cc;
        }
        _0x28e93(_0x126bf8, _0x5c9d2d);
        var _0x197d6c = _0x126bf8.prototype;
        _0x197d6c.onLoad = function () {
          var _0x130f39 = this;
          var _0x58b63f = _0x2f191e.rankPopInfo.settlementPop;
          console.log("settlementPop", _0x58b63f);
          _0x389541.getBundle("common").load("rankIcon/icon_" + (null == _0x58b63f ? undefined : _0x58b63f.oldRankLevel) + "/spriteFrame", _0x5b2035, function (_0x492513, _0x67db6b) {
            _0x130f39.bigIcon.spriteFrame = _0x67db6b;
          });
          this.bigLevel.string = "倍率" + _0x2a04b6(null == _0x58b63f ? undefined : _0x58b63f.oldRankMultiply);
        };
        _0x197d6c.start = function () {
          var _0x3688f7 = _0x48f32d(_0x29b973().mark(function _0x45f2e() {
            {
              var _0x47d74a = this;
              return _0x29b973().wrap(function (_0x13393e) {
                {
                  for (;;) {
                    switch (_0x13393e.prev = _0x13393e.next) {
                      case 0:
                        this.svgaBg.on(_0x525ce9.EventType.END_FRAME, function () {
                          console.log("播放结束");
                          _0x47d74a.bigIconNode.active = true;
                          _0x47d74a.scheduleOnce(function () {
                            _0x47d74a.closePanel();
                            _0x3c0185(_0x575df3);
                          }, 2);
                        });
                      case 1:
                      case "end":
                        return _0x13393e.stop();
                    }
                  }
                }
              }, _0x45f2e, this);
            }
          }));
          return function () {
            return _0x3688f7.apply(this, arguments);
          };
        }();
        _0x197d6c.closePanel = function () {
          this.hidePanel();
        };
        return _0x126bf8;
      }(_0x1b0af3)).bundle = "RankKeepSvgaPanel", _0x2ee48e.skin = "RankKeepSvgaPanel", _0x46f3cb = _0x53d0be((_0x5a1c20 = _0x2ee48e).prototype, "bigIcon", [_0x27428f], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x3c5d4c = _0x53d0be(_0x5a1c20.prototype, "bigLevel", [_0x2f42ba], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x4808e2 = _0x53d0be(_0x5a1c20.prototype, "bigIconNode", [_0x442463], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x2c439d = _0x53d0be(_0x5a1c20.prototype, "svgaBg", [_0x52fae5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x34679e = _0x5a1c20)) || _0x34679e) || _0x34679e));
      _0x30419b._RF.pop();
    }
  };
});
System.register("chunks:///_virtual/RankRedeceListPanel.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Panel.ts", "./store.ts", "./decorators.ts", "./Utils.ts", "./UIFast.ts", "./RankScene.ts", "./constants.ts"], function (_0x149d20) {
  var _0x5e9a60;
  var _0x2074ca;
  var _0x59cba3;
  var _0xdf8c4b;
  var _0x5477a5;
  var _0x6d24c4;
  var _0x32650b;
  var _0x2ea50a;
  var _0x84a00a;
  var _0x1bf0ad;
  var _0x334ff7;
  var _0x36bca4;
  var _0x211418;
  var _0x1432d2;
  var _0x15490f;
  var _0x4c3e63;
  var _0x274b41;
  var _0x5c8a61;
  var _0x1fb8a0;
  var _0x12d93b;
  var _0x34c35d;
  var _0x5ca51f;
  return {
    setters: [function (_0x30740c) {
      _0x5e9a60 = _0x30740c.applyDecoratedDescriptor;
      _0x2074ca = _0x30740c.inheritsLoose;
      _0x59cba3 = _0x30740c.initializerDefineProperty;
      _0xdf8c4b = _0x30740c.assertThisInitialized;
      _0x5477a5 = _0x30740c.asyncToGenerator;
      _0x6d24c4 = _0x30740c.regeneratorRuntime;
    }, function (_0x1b44ff) {
      _0x32650b = _0x1b44ff.cclegacy;
      _0x2ea50a = _0x1b44ff._decorator;
      _0x84a00a = _0x1b44ff.Label;
      _0x1bf0ad = _0x1b44ff.Button;
      _0x334ff7 = _0x1b44ff.Node;
      _0x36bca4 = _0x1b44ff.Sprite;
      _0x211418 = _0x1b44ff.Color;
    }, function (_0x3b1483) {
      {
        _0x1432d2 = _0x3b1483.default;
      }
    }, function (_0x425603) {
      _0x15490f = _0x425603.default;
    }, function (_0x5ba4f5) {
      _0x4c3e63 = _0x5ba4f5.observer;
    }, function (_0x15825c) {
      {
        _0x274b41 = _0x15825c._asyncThrottle;
        _0x5c8a61 = _0x15825c.strFormat;
      }
    }, function (_0x12d857) {
      _0x1fb8a0 = _0x12d857.changeScene;
    }, function (_0x22c732) {
      _0x12d93b = _0x22c732.RankScence;
    }, function (_0x307f44) {
      _0x34c35d = _0x307f44.userImg;
      _0x5ca51f = _0x307f44.userName;
    }],
    execute: function () {
      var _0x171bc0;
      var _0xde1754;
      var _0x296652;
      var _0xcecf9d;
      var _0x42c970;
      var _0xf37a81;
      var _0x42480b;
      var _0x3e01cd;
      var _0x3370a4;
      var _0x50efbb;
      var _0x53b4b2;
      var _0x2ff73d;
      var _0x105d77;
      var _0x3af8b8;
      var _0x4b9678;
      var _0x4c2e31;
      var _0x54baa7;
      var _0x18face;
      var _0x25d242;
      var _0x4cc1ab;
      var _0x127db6;
      var _0xa45130;
      var _0x4ac6b3;
      var _0x57aae1;
      _0x32650b._RF.push({}, "763a7etaMVIv6nrUy603RIR", "RankRedeceListPanel", undefined);
      var _0x568d15 = _0x2ea50a.ccclass;
      var _0x2944d8 = _0x2ea50a.property;
      _0x149d20("default", (_0x171bc0 = _0x568d15("RankRedeceListPanel"), _0xde1754 = _0x2944d8(_0x84a00a), _0x296652 = _0x2944d8(_0x84a00a), _0xcecf9d = _0x2944d8(_0x84a00a), _0x42c970 = _0x2944d8(_0x84a00a), _0xf37a81 = _0x2944d8(_0x1bf0ad), _0x42480b = _0x2944d8(_0x1bf0ad), _0x3e01cd = _0x2944d8(_0x334ff7), _0x3370a4 = _0x2944d8(_0x334ff7), _0x50efbb = _0x2944d8(_0x334ff7), _0x53b4b2 = _0x2944d8(_0x84a00a), _0x4c3e63(_0x2ff73d = _0x171bc0(((_0x57aae1 = function (_0xd35770) {
        function _0x441bd4() {
          {
            for (var _0x48a5b1, _0x1e97f4 = arguments.length, _0x182c78 = new Array(_0x1e97f4), _0x16c5f7 = 0; _0x16c5f7 < _0x1e97f4; _0x16c5f7++) {
              _0x182c78[_0x16c5f7] = arguments[_0x16c5f7];
            }
            _0x48a5b1 = _0xd35770.call.apply(_0xd35770, [this].concat(_0x182c78)) || this;
            _0x59cba3(_0x48a5b1, "fuQiNum", _0x3af8b8, _0xdf8c4b(_0x48a5b1));
            _0x59cba3(_0x48a5b1, "fuQiText", _0x4b9678, _0xdf8c4b(_0x48a5b1));
            _0x59cba3(_0x48a5b1, "beiLvNum", _0x4c2e31, _0xdf8c4b(_0x48a5b1));
            _0x59cba3(_0x48a5b1, "beiLvText", _0x54baa7, _0xdf8c4b(_0x48a5b1));
            _0x59cba3(_0x48a5b1, "closeBtn", _0x18face, _0xdf8c4b(_0x48a5b1));
            _0x59cba3(_0x48a5b1, "mainBtn", _0x25d242, _0xdf8c4b(_0x48a5b1));
            _0x59cba3(_0x48a5b1, "rank1", _0x4cc1ab, _0xdf8c4b(_0x48a5b1));
            _0x59cba3(_0x48a5b1, "rank2", _0x127db6, _0xdf8c4b(_0x48a5b1));
            _0x59cba3(_0x48a5b1, "rank3", _0xa45130, _0xdf8c4b(_0x48a5b1));
            _0x59cba3(_0x48a5b1, "topRank", _0x4ac6b3, _0xdf8c4b(_0x48a5b1));
            _0x48a5b1.closePanel = _0x274b41(function () {
              _0x48a5b1.hidePanel();
            });
            _0x48a5b1.clickRank = _0x274b41(function () {
              _0x48a5b1.closePanel();
              _0x1fb8a0(_0x12d93b);
            });
            return _0x48a5b1;
          }
        }
        _0x2074ca(_0x441bd4, _0xd35770);
        var _0x4bdcb6 = _0x441bd4.prototype;
        _0x4bdcb6.onLoad = function () {
          this.closeBtn.node.on(_0x1bf0ad.EventType.CLICK, this.closePanel, this);
          this.mainBtn.node.on(_0x1bf0ad.EventType.CLICK, this.clickRank, this);
        };
        _0x4bdcb6.start = function () {
          var _0x9ab8ec = _0x5477a5(_0x6d24c4().mark(function _0x4034f0() {
            {
              var _0x552a7f;
              var _0x35a4c4;
              var _0x5bb4e1;
              var _0x2821d8;
              var _0x359cd9 = this;
              return _0x6d24c4().wrap(function (_0x425c51) {
                for (;;) {
                  switch (_0x425c51.prev = _0x425c51.next) {
                    case 0:
                      _0x5bb4e1 = _0x15490f.rankPopInfo.settlementPop;
                      this.fuQiNum.string = "x" + (null == _0x5bb4e1 ? undefined : _0x5bb4e1.obtainScoreNum);
                      this.fuQiText.string = (null == _0x5bb4e1 ? undefined : _0x5bb4e1.obtainScoreNum) + "枚福气";
                      this.beiLvNum.string = "x" + (null == _0x5bb4e1 ? undefined : _0x5bb4e1.newRankMultiply);
                      this.beiLvText.string = "x" + (null == _0x5bb4e1 ? undefined : _0x5bb4e1.newRankMultiply);
                      _0x2821d8 = null == _0x5bb4e1 || null == (_0x552a7f = _0x5bb4e1.rankList) ? undefined : _0x552a7f.find(function (_0x26bedb) {
                        {
                          return _0x26bedb.boolMe;
                        }
                      });
                      this.topRank.getComponent(_0x84a00a).string = null != _0x2821d8 && _0x2821d8.rankOrder ? "昨日排名：" + (null == _0x2821d8 ? undefined : _0x2821d8.rankOrder) : "";
                      null == _0x5bb4e1 || null == (_0x35a4c4 = _0x5bb4e1.rankList) || _0x35a4c4.map(function (_0x24c202, _0x386c19) {
                        var _0x79df28 = _0x359cd9["rank" + (_0x386c19 + 1)];
                        _0x79df28.active = true;
                        _0x79df28.getChildByPath("Mask/头像").getComponent(_0x36bca4).spriteFrame = (null == _0x24c202 ? undefined : _0x24c202.avatar) || _0x34c35d;
                        _0x79df28.getChildByName("nikeName").getComponent(_0x84a00a).string = _0x5c8a61((null == _0x24c202 ? undefined : _0x24c202.nickName) || _0x5ca51f, 10);
                        _0x79df28.getChildByName("rankscore").getComponent(_0x84a00a).string = null == _0x24c202 ? undefined : _0x24c202.rankScore;
                        _0x79df28.getChildByName("my_bg").active = null == _0x24c202 ? undefined : _0x24c202.boolMe;
                        _0x79df28.getChildByName("rank").getComponent(_0x84a00a).string = (null == _0x24c202 ? undefined : _0x24c202.rankOrder) || "";
                        null != _0x24c202 && _0x24c202.boolMe && (_0x79df28.getChildByName("nikeName").getComponent(_0x84a00a).color = new _0x211418(255, 149, 0), _0x79df28.getChildByName("rankscore").getComponent(_0x84a00a).color = new _0x211418(255, 149, 0), _0x79df28.getChildByName("rank").getComponent(_0x84a00a).color = new _0x211418(255, 149, 0));
                      });
                    case 8:
                    case "end":
                      return _0x425c51.stop();
                  }
                }
              }, _0x4034f0, this);
            }
          }));
          return function () {
            return _0x9ab8ec.apply(this, arguments);
          };
        }();
        return _0x441bd4;
      }(_0x1432d2)).bundle = "RankRedeceListPanel", _0x57aae1.skin = "RankRedeceListPanel", _0x3af8b8 = _0x5e9a60((_0x105d77 = _0x57aae1).prototype, "fuQiNum", [_0xde1754], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x4b9678 = _0x5e9a60(_0x105d77.prototype, "fuQiText", [_0x296652], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x4c2e31 = _0x5e9a60(_0x105d77.prototype, "beiLvNum", [_0xcecf9d], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x54baa7 = _0x5e9a60(_0x105d77.prototype, "beiLvText", [_0x42c970], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x18face = _0x5e9a60(_0x105d77.prototype, "closeBtn", [_0xf37a81], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x25d242 = _0x5e9a60(_0x105d77.prototype, "mainBtn", [_0x42480b], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x4cc1ab = _0x5e9a60(_0x105d77.prototype, "rank1", [_0x3e01cd], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x127db6 = _0x5e9a60(_0x105d77.prototype, "rank2", [_0x3370a4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0xa45130 = _0x5e9a60(_0x105d77.prototype, "rank3", [_0x50efbb], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x4ac6b3 = _0x5e9a60(_0x105d77.prototype, "topRank", [_0x53b4b2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x2ff73d = _0x105d77)) || _0x2ff73d) || _0x2ff73d));
      _0x32650b._RF.pop();
    }
  };
});
System.register("chunks:///_virtual/RankRedeceNoListPanel.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Panel.ts", "./store.ts", "./decorators.ts", "./Utils.ts", "./UIFast.ts", "./RankScene.ts"], function (_0x254aa9) {
  var _0x4b6a5f;
  var _0x57a95e;
  var _0x3570c9;
  var _0x1f9e4c;
  var _0x308c94;
  var _0x402e1d;
  var _0x38d5c6;
  var _0x580e9e;
  var _0x4c847d;
  var _0x521d92;
  var _0x4ee579;
  var _0x492e71;
  var _0xed8878;
  var _0x5557bf;
  var _0x2b8328;
  var _0x3b6180;
  return {
    setters: [function (_0x264912) {
      _0x4b6a5f = _0x264912.applyDecoratedDescriptor;
      _0x57a95e = _0x264912.inheritsLoose;
      _0x3570c9 = _0x264912.initializerDefineProperty;
      _0x1f9e4c = _0x264912.assertThisInitialized;
      _0x308c94 = _0x264912.asyncToGenerator;
      _0x402e1d = _0x264912.regeneratorRuntime;
    }, function (_0x9ccf26) {
      _0x38d5c6 = _0x9ccf26.cclegacy;
      _0x580e9e = _0x9ccf26._decorator;
      _0x4c847d = _0x9ccf26.Label;
      _0x521d92 = _0x9ccf26.Button;
    }, function (_0x1ba876) {
      _0x4ee579 = _0x1ba876.default;
    }, function (_0x3ecbe8) {
      _0x492e71 = _0x3ecbe8.default;
    }, function (_0x45ddff) {
      _0xed8878 = _0x45ddff.observer;
    }, function (_0x1d7469) {
      _0x5557bf = _0x1d7469._asyncThrottle;
    }, function (_0x4e552f) {
      _0x2b8328 = _0x4e552f.changeScene;
    }, function (_0x3a5deb) {
      _0x3b6180 = _0x3a5deb.RankScence;
    }],
    execute: function () {
      var _0x122df1;
      var _0xbd2e28;
      var _0x543972;
      var _0x31db4c;
      var _0x528369;
      var _0x1abfe6;
      var _0x5f200a;
      var _0x1f61fc;
      var _0x586611;
      var _0x418147;
      var _0xa557ca;
      var _0x8a2929;
      var _0x32132f;
      var _0x17f7cd;
      var _0x15a275;
      var _0x31c581;
      _0x38d5c6._RF.push({}, "45770uhAulHxqMwYqjKpkxI", "RankRedeceNoListPanel", undefined);
      var _0x20521a = _0x580e9e.ccclass;
      var _0x17e1ad = _0x580e9e.property;
      _0x254aa9("default", (_0x122df1 = _0x20521a("RankRedeceNoListPanel"), _0xbd2e28 = _0x17e1ad(_0x4c847d), _0x543972 = _0x17e1ad(_0x4c847d), _0x31db4c = _0x17e1ad(_0x4c847d), _0x528369 = _0x17e1ad(_0x4c847d), _0x1abfe6 = _0x17e1ad(_0x521d92), _0x5f200a = _0x17e1ad(_0x521d92), _0xed8878(_0x1f61fc = _0x122df1(((_0x31c581 = function (_0x22fa6c) {
        function _0x2642bc() {
          for (var _0x4f8b59, _0x31dce8 = arguments.length, _0x182c71 = new Array(_0x31dce8), _0x522698 = 0; _0x522698 < _0x31dce8; _0x522698++) {
            _0x182c71[_0x522698] = arguments[_0x522698];
          }
          _0x4f8b59 = _0x22fa6c.call.apply(_0x22fa6c, [this].concat(_0x182c71)) || this;
          _0x3570c9(_0x4f8b59, "fuQiNum", _0x418147, _0x1f9e4c(_0x4f8b59));
          _0x3570c9(_0x4f8b59, "fuQiText", _0xa557ca, _0x1f9e4c(_0x4f8b59));
          _0x3570c9(_0x4f8b59, "beiLvNum", _0x8a2929, _0x1f9e4c(_0x4f8b59));
          _0x3570c9(_0x4f8b59, "beiLvText", _0x32132f, _0x1f9e4c(_0x4f8b59));
          _0x3570c9(_0x4f8b59, "closeBtn", _0x17f7cd, _0x1f9e4c(_0x4f8b59));
          _0x3570c9(_0x4f8b59, "mainBtn", _0x15a275, _0x1f9e4c(_0x4f8b59));
          _0x4f8b59.closePanel = _0x5557bf(function () {
            _0x4f8b59.hidePanel();
          });
          _0x4f8b59.clickRank = _0x5557bf(function () {
            _0x4f8b59.closePanel();
            _0x2b8328(_0x3b6180);
          });
          return _0x4f8b59;
        }
        _0x57a95e(_0x2642bc, _0x22fa6c);
        var _0x50a342 = _0x2642bc.prototype;
        _0x50a342.onLoad = function () {
          this.closeBtn.node.on(_0x521d92.EventType.CLICK, this.closePanel, this);
          this.mainBtn.node.on(_0x521d92.EventType.CLICK, this.clickRank, this);
        };
        _0x50a342.start = function () {
          {
            var _0x53e2d1 = _0x308c94(_0x402e1d().mark(function _0x4e3967() {
              var _0x4f6312;
              return _0x402e1d().wrap(function (_0x2007ff) {
                for (;;) {
                  switch (_0x2007ff.prev = _0x2007ff.next) {
                    case 0:
                      _0x4f6312 = _0x492e71.homeInfo.settlementPop;
                      this.fuQiNum.string = "x" + (null == _0x4f6312 ? undefined : _0x4f6312.obtainScoreNum);
                      this.fuQiText.string = (null == _0x4f6312 ? undefined : _0x4f6312.obtainScoreNum) + "枚福气";
                      this.beiLvNum.string = "x" + (null == _0x4f6312 ? undefined : _0x4f6312.newRankMultiply);
                      this.beiLvText.string = "x" + (null == _0x4f6312 ? undefined : _0x4f6312.newRankMultiply);
                    case 5:
                    case "end":
                      return _0x2007ff.stop();
                  }
                }
              }, _0x4e3967, this);
            }));
            return function () {
              {
                return _0x53e2d1.apply(this, arguments);
              }
            };
          }
        }();
        return _0x2642bc;
      }(_0x4ee579)).bundle = "RankRedeceNoListPanel", _0x31c581.skin = "RankRedeceNoListPanel", _0x418147 = _0x4b6a5f((_0x586611 = _0x31c581).prototype, "fuQiNum", [_0xbd2e28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0xa557ca = _0x4b6a5f(_0x586611.prototype, "fuQiText", [_0x543972], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x8a2929 = _0x4b6a5f(_0x586611.prototype, "beiLvNum", [_0x31db4c], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x32132f = _0x4b6a5f(_0x586611.prototype, "beiLvText", [_0x528369], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x17f7cd = _0x4b6a5f(_0x586611.prototype, "closeBtn", [_0x1abfe6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x15a275 = _0x4b6a5f(_0x586611.prototype, "mainBtn", [_0x5f200a], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x1f61fc = _0x586611)) || _0x1f61fc) || _0x1f61fc));
      _0x38d5c6._RF.pop();
    }
  };
});
System.register("chunks:///_virtual/RankReduceSvgaPanel.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Panel.ts", "./store.ts", "./decorators.ts", "./Utils.ts", "./UIFast.ts", "./RankRedeceListPanel.ts", "./RankRedeceNoListPanel.ts"], function (_0x14429e) {
  var _0x172c4e;
  var _0x46ab0a;
  var _0x3bfbab;
  var _0x1e5c30;
  var _0x30a3dc;
  var _0x4233ad;
  var _0x5edc32;
  var _0x4a7b0b;
  var _0x24b931;
  var _0x3ac875;
  var _0x363843;
  var _0x35e11b;
  var _0x5b613c;
  var _0x32a205;
  var _0x4c67cc;
  var _0x163536;
  var _0x36c2b8;
  var _0x37ca18;
  var _0x9990f3;
  return {
    setters: [function (_0x1bf7e5) {
      _0x172c4e = _0x1bf7e5.applyDecoratedDescriptor;
      _0x46ab0a = _0x1bf7e5.inheritsLoose;
      _0x3bfbab = _0x1bf7e5.initializerDefineProperty;
      _0x1e5c30 = _0x1bf7e5.assertThisInitialized;
      _0x30a3dc = _0x1bf7e5.asyncToGenerator;
      _0x4233ad = _0x1bf7e5.regeneratorRuntime;
    }, function (_0x380e8f) {
      _0x5edc32 = _0x380e8f.cclegacy;
      _0x4a7b0b = _0x380e8f._decorator;
      _0x24b931 = _0x380e8f.Sprite;
      _0x3ac875 = _0x380e8f.Label;
      _0x363843 = _0x380e8f.assetManager;
      _0x35e11b = _0x380e8f.SpriteFrame;
    }, function (_0x443919) {
      _0x5b613c = _0x443919.default;
    }, function (_0x5839cb) {
      _0x32a205 = _0x5839cb.default;
    }, function (_0x3c903e) {
      _0x4c67cc = _0x3c903e.observer;
    }, function (_0x155d9d) {
      _0x163536 = _0x155d9d.strFormat;
    }, function (_0x5d5f9f) {
      _0x36c2b8 = _0x5d5f9f.showPanel;
    }, function (_0x4d8a51) {
      _0x37ca18 = _0x4d8a51.default;
    }, function (_0x4582f1) {
      _0x9990f3 = _0x4582f1.default;
    }],
    execute: function () {
      var _0x2a3f52;
      var _0x18d76f;
      var _0x122883;
      var _0x25eaaf;
      var _0x42ece5;
      var _0x3c760c;
      var _0x5385a9;
      var _0x2fb259;
      var _0x1b78c0;
      var _0x1e80ad;
      var _0x4d604f;
      var _0x454faf;
      _0x5edc32._RF.push({}, "4355bmkhdlI1qfENv2J3JFq", "RankReduceSvgaPanel", undefined);
      var _0x336d66 = _0x4a7b0b.ccclass;
      var _0x298f49 = _0x4a7b0b.property;
      _0x14429e("default", (_0x2a3f52 = _0x336d66("RankReduceSvgaPanel"), _0x18d76f = _0x298f49(_0x24b931), _0x122883 = _0x298f49(_0x24b931), _0x25eaaf = _0x298f49(_0x3ac875), _0x42ece5 = _0x298f49(_0x3ac875), _0x4c67cc(_0x3c760c = _0x2a3f52(((_0x454faf = function (_0x33d5f3) {
        function _0x3d5bb8() {
          for (var _0x495ba9, _0x440292 = arguments.length, _0x1661af = new Array(_0x440292), _0x50ff2c = 0; _0x50ff2c < _0x440292; _0x50ff2c++) {
            _0x1661af[_0x50ff2c] = arguments[_0x50ff2c];
          }
          _0x495ba9 = _0x33d5f3.call.apply(_0x33d5f3, [this].concat(_0x1661af)) || this;
          _0x3bfbab(_0x495ba9, "bigIcon", _0x2fb259, _0x1e5c30(_0x495ba9));
          _0x3bfbab(_0x495ba9, "smallIcon", _0x1b78c0, _0x1e5c30(_0x495ba9));
          _0x3bfbab(_0x495ba9, "bigLevel", _0x1e80ad, _0x1e5c30(_0x495ba9));
          _0x3bfbab(_0x495ba9, "smallLevel", _0x4d604f, _0x1e5c30(_0x495ba9));
          return _0x495ba9;
        }
        _0x46ab0a(_0x3d5bb8, _0x33d5f3);
        var _0x15176e = _0x3d5bb8.prototype;
        _0x15176e.onLoad = function () {};
        _0x15176e.start = function () {
          var _0x2150fa = _0x30a3dc(_0x4233ad().mark(function _0x4f0826() {
            var _0x3b19c5;
            var _0x2440cd = this;
            return _0x4233ad().wrap(function (_0x30c0f0) {
              for (;;) {
                switch (_0x30c0f0.prev = _0x30c0f0.next) {
                  case 0:
                    _0x3b19c5 = _0x32a205.rankPopInfo.settlementPop;
                    console.log("settlementPop", _0x3b19c5);
                    _0x363843.getBundle("common").load("rankIcon/icon_" + (null == _0x3b19c5 ? undefined : _0x3b19c5.oldRankLevel) + "/spriteFrame", _0x35e11b, function (_0x5cc208, _0x22ec9f) {
                      _0x2440cd.bigIcon.spriteFrame = _0x22ec9f;
                    });
                    _0x363843.getBundle("common").load("rankIcon/icon_" + (null == _0x3b19c5 ? undefined : _0x3b19c5.newRankLevel) + "/spriteFrame", _0x35e11b, function (_0x2d2bd8, _0x1bfa17) {
                      _0x2440cd.smallIcon.spriteFrame = _0x1bfa17;
                    });
                    this.bigLevel.string = "倍率" + _0x163536(null == _0x3b19c5 ? undefined : _0x3b19c5.oldRankMultiply);
                    this.smallLevel.string = "倍率" + _0x163536(null == _0x3b19c5 ? undefined : _0x3b19c5.newRankMultiply);
                    this.scheduleOnce(function () {
                      var _0x5dbcca;
                      _0x2440cd.closePanel();
                      (null == _0x3b19c5 || null == (_0x5dbcca = _0x3b19c5.rankList) ? undefined : _0x5dbcca.length) > 0 ? _0x36c2b8(_0x37ca18) : _0x36c2b8(_0x9990f3);
                    }, 2);
                  case 7:
                  case "end":
                    return _0x30c0f0.stop();
                }
              }
            }, _0x4f0826, this);
          }));
          return function () {
            return _0x2150fa.apply(this, arguments);
          };
        }();
        _0x15176e.closePanel = function () {
          this.hidePanel();
        };
        return _0x3d5bb8;
      }(_0x5b613c)).bundle = "RankReduceSvgaPanel", _0x454faf.skin = "RankReduceSvgaPanel", _0x2fb259 = _0x172c4e((_0x5385a9 = _0x454faf).prototype, "bigIcon", [_0x18d76f], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x1b78c0 = _0x172c4e(_0x5385a9.prototype, "smallIcon", [_0x122883], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x1e80ad = _0x172c4e(_0x5385a9.prototype, "bigLevel", [_0x25eaaf], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x4d604f = _0x172c4e(_0x5385a9.prototype, "smallLevel", [_0x42ece5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x3c760c = _0x5385a9)) || _0x3c760c) || _0x3c760c));
      _0x5edc32._RF.pop();
    }
  };
});
System.register("chunks:///_virtual/RankScene.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./decorators.ts", "./Scene.ts", "./UIFast.ts", "./Utils.ts", "./WebNet.ts", "./index.ts", "./MainGame.ts", "./constants.ts", "./yx-collection-view.ts", "./yx-flow-layout.ts"], function (_0x12a8bf) {
  var _0x57a38d;
  var _0x3b7a68;
  var _0x1504cf;
  var _0x5310ee;
  var _0x53bd76;
  var _0x4815b3;
  var _0x327e5d;
  var _0x4f3f04;
  var _0x502e21;
  var _0x578189;
  var _0x27ee45;
  var _0x49b928;
  var _0x36b7af;
  var _0x2a106f;
  var _0x4d08be;
  var _0x41ac7f;
  var _0x4e2455;
  var _0x210b50;
  var _0x1009d1;
  var _0x405c90;
  var _0x201fb0;
  var _0x2866c4;
  var _0x1987b6;
  var _0x164b5e;
  var _0x43907b;
  var _0x227526;
  var _0x170890;
  var _0x3fa16e;
  var _0x466c58;
  var _0x311b6c;
  var _0x5e12d9;
  var _0x1f5e8c;
  return {
    setters: [function (_0x19de60) {
      _0x57a38d = _0x19de60.applyDecoratedDescriptor;
      _0x3b7a68 = _0x19de60.inheritsLoose;
      _0x1504cf = _0x19de60.initializerDefineProperty;
      _0x5310ee = _0x19de60.assertThisInitialized;
      _0x53bd76 = _0x19de60.asyncToGenerator;
      _0x4815b3 = _0x19de60.regeneratorRuntime;
    }, function (_0x253eb6) {
      _0x327e5d = _0x253eb6.cclegacy;
      _0x4f3f04 = _0x253eb6._decorator;
      _0x502e21 = _0x253eb6.Node;
      _0x578189 = _0x253eb6.Label;
      _0x27ee45 = _0x253eb6.RichText;
      _0x49b928 = _0x253eb6.Sprite;
      _0x36b7af = _0x253eb6.Color;
      _0x2a106f = _0x253eb6.assetManager;
      _0x4d08be = _0x253eb6.SpriteFrame;
      _0x41ac7f = _0x253eb6.Button;
      _0x4e2455 = _0x253eb6.Size;
    }, function (_0x29d6f0) {
      _0x210b50 = _0x29d6f0.observer;
    }, function (_0x2e472f) {
      _0x1009d1 = _0x2e472f.default;
    }, function (_0x4566fe) {
      _0x405c90 = _0x4566fe.changeScene;
      _0x201fb0 = _0x4566fe.hideWaiting;
      _0x2866c4 = _0x4566fe.showWaiting;
    }, function (_0x3573f9) {
      _0x1987b6 = _0x3573f9._asyncThrottle;
      _0x164b5e = _0x3573f9.strFormat;
      _0x43907b = _0x3573f9.dateFormatter;
    }, function (_0x2eff8e) {
      _0x227526 = _0x2eff8e.sendWebNet;
      _0x170890 = _0x2eff8e.WebNetName;
    }, null, function (_0x24e802) {
      _0x3fa16e = _0x24e802.MainGame;
    }, function (_0x4c9dca) {
      _0x466c58 = _0x4c9dca.userName;
    }, function (_0x4e7f2e) {
      _0x311b6c = _0x4e7f2e.YXCollectionView;
      _0x5e12d9 = _0x4e7f2e.YXIndexPath;
    }, function (_0x2e1a55) {
      _0x1f5e8c = _0x2e1a55.YXFlowLayout;
    }],
    execute: function () {
      var _0xa3bafa;
      var _0x75000a;
      var _0x3b0b7d;
      var _0x56f5c4;
      var _0xe7122a;
      var _0x55406d;
      var _0x3fa346;
      var _0x14a714;
      var _0x223060;
      var _0x2d165b;
      var _0x3ee169;
      var _0x30eb32;
      var _0x30b7b3;
      var _0x2e7293;
      var _0x508d12;
      var _0x49f075;
      var _0x50514b;
      var _0x5dedbd;
      var _0x31d6ad;
      var _0x40b816;
      var _0x3c9d4a;
      var _0x474cea;
      var _0x50aa2f;
      var _0x5b514f;
      var _0x51c201;
      var _0x4246d6;
      var _0x1cc4ed;
      var _0x2639c9;
      var _0x38ac94;
      var _0x1d03ea;
      var _0x51c4d2;
      var _0x2d7262;
      var _0x2b40aa;
      var _0x1bcf40;
      var _0x3a31d7;
      var _0x322c84;
      var _0x3d1c74;
      var _0x3b7ef3;
      _0x327e5d._RF.push({}, "710f3ebg+RICoPLj0YCiUoH", "RankScene", undefined);
      var _0x3195a6 = _0x4f3f04.ccclass;
      var _0x19bc69 = _0x4f3f04.property;
      _0x12a8bf("RankScence", (_0xa3bafa = _0x3195a6("RankScence"), _0x75000a = _0x19bc69(_0x502e21), _0x3b0b7d = _0x19bc69(_0x502e21), _0x56f5c4 = _0x19bc69(_0x502e21), _0xe7122a = _0x19bc69(_0x578189), _0x55406d = _0x19bc69(_0x311b6c), _0x3fa346 = _0x19bc69(_0x311b6c), _0x14a714 = _0x19bc69(_0x502e21), _0x223060 = _0x19bc69(_0x578189), _0x2d165b = _0x19bc69(_0x502e21), _0x3ee169 = _0x19bc69(_0x27ee45), _0x30eb32 = _0x19bc69(_0x578189), _0x30b7b3 = _0x19bc69(_0x578189), _0x2e7293 = _0x19bc69(_0x578189), _0x508d12 = _0x19bc69(_0x578189), _0x49f075 = _0x19bc69(_0x578189), _0x50514b = _0x19bc69(_0x49b928), _0x5dedbd = _0x19bc69(_0x578189), _0x210b50(_0x31d6ad = _0xa3bafa(((_0x3b7ef3 = function (_0x3fbc3f) {
        function _0x4f8c28() {
          for (var _0x5a3728, _0x42eab7 = arguments.length, _0x1b35ba = new Array(_0x42eab7), _0x18ef0b = 0; _0x18ef0b < _0x42eab7; _0x18ef0b++) {
            _0x1b35ba[_0x18ef0b] = arguments[_0x18ef0b];
          }
          _0x5a3728 = _0x3fbc3f.call.apply(_0x3fbc3f, [this].concat(_0x1b35ba)) || this;
          _0x1504cf(_0x5a3728, "backBtn", _0x3c9d4a, _0x5310ee(_0x5a3728));
          _0x1504cf(_0x5a3728, "title", _0x474cea, _0x5310ee(_0x5a3728));
          _0x1504cf(_0x5a3728, "titleEndDay", _0x50aa2f, _0x5310ee(_0x5a3728));
          _0x1504cf(_0x5a3728, "titleText", _0x5b514f, _0x5310ee(_0x5a3728));
          _0x1504cf(_0x5a3728, "Tab_List", _0x51c201, _0x5310ee(_0x5a3728));
          _0x1504cf(_0x5a3728, "Rank_List", _0x4246d6, _0x5310ee(_0x5a3728));
          _0x1504cf(_0x5a3728, "Rank_List_None", _0x1cc4ed, _0x5310ee(_0x5a3728));
          _0x1504cf(_0x5a3728, "nowRankMultLabel", _0x2639c9, _0x5310ee(_0x5a3728));
          _0x1504cf(_0x5a3728, "middle", _0x38ac94, _0x5310ee(_0x5a3728));
          _0x1504cf(_0x5a3728, "middleText", _0x1d03ea, _0x5310ee(_0x5a3728));
          _0x1504cf(_0x5a3728, "middleText2", _0x51c4d2, _0x5310ee(_0x5a3728));
          _0x1504cf(_0x5a3728, "middleText3", _0x2d7262, _0x5310ee(_0x5a3728));
          _0x1504cf(_0x5a3728, "hour", _0x2b40aa, _0x5310ee(_0x5a3728));
          _0x1504cf(_0x5a3728, "second", _0x1bcf40, _0x5310ee(_0x5a3728));
          _0x1504cf(_0x5a3728, "minute", _0x3a31d7, _0x5310ee(_0x5a3728));
          _0x1504cf(_0x5a3728, "multipleBg", _0x322c84, _0x5310ee(_0x5a3728));
          _0x1504cf(_0x5a3728, "multipleHint", _0x3d1c74, _0x5310ee(_0x5a3728));
          _0x5a3728.TabDate = [];
          _0x5a3728.RankListData = [];
          _0x5a3728.RankData = undefined;
          _0x5a3728.rankListLength = undefined;
          _0x5a3728.nowRankPromote = 0;
          _0x5a3728.actTime = "";
          _0x5a3728.startStemp = 0;
          _0x5a3728.endStemp = 0;
          _0x5a3728.isCountingDown = false;
          _0x5a3728.cdStatus = 0;
          _0x5a3728.nowTime = new Date();
          _0x5a3728.settlementTimeStamp = "";
          _0x5a3728.oneHourBefore = "";
          _0x5a3728.endOfDay = "";
          _0x5a3728.jieSuanHour = 0;
          _0x5a3728.jieSuanMin = 0;
          _0x5a3728.isJieSuanDay = false;
          _0x5a3728.listUnshiftItemRankLevel = 0;
          _0x5a3728.color1 = new _0x36b7af(37, 159, 34);
          _0x5a3728.color2 = new _0x36b7af(255, 149, 0);
          _0x5a3728.color3 = new _0x36b7af(249, 42, 69);
          _0x5a3728.currentRankLevel = 0;
          _0x5a3728.clickBackHome = _0x1987b6(_0x53bd76(_0x4815b3().mark(function _0x5b75e9() {
            return _0x4815b3().wrap(function (_0x40b5bb) {
              for (;;) {
                switch (_0x40b5bb.prev = _0x40b5bb.next) {
                  case 0:
                    _0x40b5bb.next = 2;
                    return _0x405c90(_0x3fa16e);
                  case 2:
                  case "end":
                    return _0x40b5bb.stop();
                }
              }
            }, _0x5b75e9);
          })));
          _0x5a3728.onTabListCellDisplay = function (_0x31bd5d, _0x254aad, _0x4d7d4a) {
            var _0x11c628 = _0x5a3728.TabDate[_0x254aad.item];
            _0x5a3728.onTabCellDisplay(_0x31bd5d, _0x11c628);
          };
          _0x5a3728.onTabCellDisplay = function (_0x5d41ac, _0x35829d) {
            var _0x58995d = _0x5d41ac.getChildByName("icon");
            var _0x10e92e = _0x5d41ac.getChildByName("icon_gary");
            if (_0x35829d) {
              var _0x579cd5 = _0x35829d.rankLevel;
              var _0x303a58 = undefined === _0x579cd5 ? 1 : _0x579cd5;
              _0x35829d.upgradeNum;
              _0x35829d.downgradeNum;
              var _0x346c03 = _0x35829d.multiple;
              var _0x7f3137 = undefined === _0x346c03 ? 0 : _0x346c03;
              var _0x27b002 = _0x303a58 <= _0x5a3728.currentRankLevel;
              _0x2a106f.getBundle("RankScene").load("png/icon_" + _0x303a58 + "/spriteFrame", _0x4d08be, function (_0x45b640, _0x30d50b) {
                _0x58995d.getComponent(_0x49b928).spriteFrame = _0x30d50b;
              });
              _0x2a106f.getBundle("RankScene").load("png/icon_gary_" + _0x303a58 + "/spriteFrame", _0x4d08be, function (_0x11fca7, _0x29fab2) {
                _0x10e92e.getComponent(_0x49b928).spriteFrame = _0x29fab2;
              });
              _0x27b002 ? (_0x58995d.active = true, _0x10e92e.active = false) : (_0x58995d.active = false, _0x10e92e.active = true);
              _0x5d41ac.___isachievement = _0x27b002;
              _0x5d41ac.getChildByName("当前").active = _0x303a58 == _0x5a3728.currentRankLevel;
              _0x5d41ac.getChildByName("level").getComponent(_0x578189).string = "Lv." + _0x303a58;
              _0x5d41ac.getChildByName("multNum").getComponent(_0x578189).string = "倍率" + _0x7f3137;
              _0x5d41ac.getChildByName("level").active = !_0x27b002;
              _0x5d41ac.getChildByName("multNum").active = _0x27b002;
            }
          };
          _0x5a3728._tt = 1;
          _0x5a3728._isShow = false;
          _0x5a3728.tabLevelSwiper = function () {
            var _0x744d3a = _0x5a3728.Tab_List.getAllCells();
            _0x5a3728._tt++;
            _0x744d3a.forEach(function (_0x34cbe7) {
              _0x5a3728._tt % 180 == 0 && (_0x5a3728._tt = 1, _0x5a3728._isShow = !_0x5a3728._isShow);
              _0x34cbe7.___isachievement ? (_0x34cbe7.getChildByName("level").active = false, _0x34cbe7.getChildByName("multNum").active = true) : (_0x34cbe7.getChildByName("level").active = !_0x5a3728._isShow, _0x34cbe7.getChildByName("multNum").active = _0x5a3728._isShow);
            });
          };
          _0x5a3728.onRankListCellDisplay = function (_0x4f33f8, _0x1385c7, _0x4f95c2) {
            var _0x48ab54 = _0x5a3728.RankListData[_0x1385c7.item];
            _0x5a3728.onRankCellDisplay(_0x4f33f8, _0x48ab54);
          };
          _0x5a3728.onRankCellDisplay = function (_0x1c2f86, _0x255f80) {
            {
              var _0x4bbb40 = _0x1c2f86.getChildByPath("item/rank");
              var _0x2b8ba4 = _0x1c2f86.getChildByPath("item/username");
              var _0x98926 = _0x1c2f86.getChildByPath("item/score");
              var _0x2ad8db = _0x255f80.nickName;
              var _0x4839e1 = undefined === _0x2ad8db ? "" : _0x2ad8db;
              var _0x60c7a5 = _0x255f80.rankScore;
              var _0x2bccda = undefined === _0x60c7a5 ? "" : _0x60c7a5;
              _0x255f80.avatar;
              var _0x5898f8 = _0x255f80.boolMe;
              var _0x3014bb = undefined !== _0x5898f8 && _0x5898f8;
              var _0x52e764 = _0x255f80.rankOrder;
              var _0x3a838e = undefined === _0x52e764 ? "" : _0x52e764;
              var _0x2957c2 = _0x255f80.upgardeItem;
              var _0x1eb7e3 = undefined !== _0x2957c2 && _0x2957c2;
              var _0x28cc03 = _0x255f80.keepItem;
              var _0x3ba0aa = undefined !== _0x28cc03 && _0x28cc03;
              var _0x5eb56e = _0x255f80.reduceItem;
              var _0x1cac17 = undefined !== _0x5eb56e && _0x5eb56e;
              var _0x5165d7 = !_0x1eb7e3 && !_0x3ba0aa && !_0x1cac17;
              _0x4bbb40.getComponent(_0x578189).string = _0x3a838e <= 3 ? "" : _0x3a838e;
              _0x2b8ba4.getComponent(_0x578189).string = _0x5165d7 ? _0x164b5e(_0x4839e1 || _0x466c58, 14) : "";
              _0x98926.getComponent(_0x578189).string = _0x5165d7 ? _0x2bccda || 0 : "";
              _0x1c2f86.getChildByPath("item/rank1").active = 1 == _0x3a838e;
              _0x1c2f86.getChildByPath("item/rank2").active = 2 == _0x3a838e;
              _0x1c2f86.getChildByPath("item/rank3").active = 3 == _0x3a838e;
              _0x1c2f86.getChildByPath("keep_hint").active = _0x3ba0aa;
              _0x1c2f86.getChildByPath("up_hint").active = _0x1eb7e3;
              _0x1c2f86.getChildByPath("reduce_hint").active = _0x1cac17;
              _0x1c2f86.getChildByPath("item/my_bg").active = _0x3014bb;
              _0x3014bb ? (_0x4bbb40.getComponent(_0x578189).color = new _0x36b7af(255, 149, 0), _0x2b8ba4.getComponent(_0x578189).color = new _0x36b7af(255, 149, 0), _0x98926.getComponent(_0x578189).color = new _0x36b7af(255, 149, 0)) : (_0x4bbb40.getComponent(_0x578189).color = new _0x36b7af(0, 0, 0), _0x2b8ba4.getComponent(_0x578189).color = new _0x36b7af(0, 0, 0), _0x98926.getComponent(_0x578189).color = new _0x36b7af(234, 13, 20));
            }
          };
          return _0x5a3728;
        }
        _0x3b7a68(_0x4f8c28, _0x3fbc3f);
        var _0xab9b61 = _0x4f8c28.prototype;
        _0xab9b61.onLoad = function () {
          this.backBtn.on(_0x41ac7f.EventType.CLICK, this.clickBackHome, this);
        };
        _0xab9b61.onDestroy = function () {
          this.isCountingDown = false;
        };
        _0xab9b61.start = function () {
          var _0x5de657 = _0x53bd76(_0x4815b3().mark(function _0x25edcb() {
            var _0x4ed987;
            var _0x49d646;
            var _0x807397 = this;
            return _0x4815b3().wrap(function (_0x3f486c) {
              for (;;) {
                switch (_0x3f486c.prev = _0x3f486c.next) {
                  case 0:
                    this.Tab_List.numberOfItems = function () {
                      return _0x807397.TabDate.length;
                    };
                    this.Tab_List.onCellDisplay = this.onTabListCellDisplay;
                    (_0x4ed987 = new _0x1f5e8c()).itemSize = new _0x4e2455(130, 160);
                    this.Tab_List.layout = _0x4ed987;
                    this.Tab_List.reloadData();
                    this.Rank_List.numberOfItems = function () {
                      return _0x807397.RankListData.length;
                    };
                    this.Rank_List.onCellDisplay = this.onRankListCellDisplay;
                    (_0x49d646 = new _0x1f5e8c()).itemSize = new _0x4e2455(667, 100);
                    this.Rank_List.layout = _0x49d646;
                    this.Rank_List.reloadData();
                    _0x2866c4(true);
                    _0x3f486c.next = 15;
                    return this.updateRankInfo();
                  case 15:
                    _0x201fb0();
                  case 16:
                  case "end":
                    return _0x3f486c.stop();
                }
              }
            }, _0x25edcb, this);
          }));
          return function () {
            return _0x5de657.apply(this, arguments);
          };
        }();
        _0xab9b61.updateRankInfo = function () {
          var _0x2d9319 = _0x53bd76(_0x4815b3().mark(function _0x27e54f() {
            var _0x49ce5b;
            var _0x3cc90d;
            var _0x378a9e;
            var _0x18fe24;
            var _0x23dfe3;
            var _0x782350;
            var _0x8efd1b;
            var _0x1e2496;
            var _0x115eae;
            var _0x1eac02;
            var _0x21f13a;
            var _0x1231a8;
            var _0x20b171;
            var _0x280d21;
            var _0x4bea85;
            var _0x496312;
            var _0x30f91f;
            var _0x465b9b;
            var _0x20be3d;
            var _0x20c8ca;
            var _0xe32b1;
            var _0x5b75bc;
            var _0xa8a855;
            var _0xb36b72;
            var _0x5aa053;
            var _0x51de26;
            var _0x49267e;
            var _0x500c64;
            var _0x22eaec = this;
            return _0x4815b3().wrap(function (_0x26a6cf) {
              for (;;) {
                switch (_0x26a6cf.prev = _0x26a6cf.next) {
                  case 0:
                    _0x26a6cf.next = 2;
                    return _0x227526(_0x170890.queryRankInfo);
                  case 2:
                    if (_0x782350 = _0x26a6cf.sent, _0x8efd1b = _0x782350.success, _0x1e2496 = _0x782350.data, _0x8efd1b) {
                      _0x26a6cf.next = 7;
                      break;
                    }
                    return _0x26a6cf.abrupt("return");
                  case 7:
                    this.RankData = _0x1e2496 || {};
                    this.currentRankLevel = _0x1e2496.currentRankLevel || 1;
                    this.TabDate = _0x1e2496.rankLevelConfigs;
                    _0x115eae = _0x1e2496.startDay;
                    _0x1eac02 = undefined === _0x115eae ? "" : _0x115eae;
                    _0x21f13a = _0x1e2496.endDay;
                    _0x1231a8 = undefined === _0x21f13a ? "" : _0x21f13a;
                    this.startStemp = this.parseDateToTimestamp(_0x1eac02) || 0;
                    this.endStemp = this.parseDateToTimestamp(_0x1231a8) || 0;
                    _0x20b171 = this.endStemp + 86400000;
                    this.settlementTimeStamp = this.parseTime(_0x1e2496.settlementTime);
                    this.endOfDay = +new Date(this.settlementTimeStamp.getFullYear(), this.settlementTimeStamp.getMonth(), this.settlementTimeStamp.getDate() + 1, 23, 59, 59, 999);
                    this.oneHourBefore = +new Date(this.settlementTimeStamp.getTime() - 3600000);
                    _0x280d21 = null == _0x1e2496 || null == (_0x49ce5b = _0x1e2496.rankLevelConfigs) ? undefined : _0x49ce5b.find(function (_0x40350e, _0x5e989c) {
                      return (null == _0x40350e ? undefined : _0x40350e.rankLevel) == _0x22eaec.currentRankLevel;
                    });
                    this.listUnshiftItemRankLevel = null == _0x280d21 ? undefined : _0x280d21.rankLevel;
                    this.nowRankPromote = 9 != (null == _0x280d21 ? undefined : _0x280d21.rankLevel) ? null == _0x280d21 ? undefined : _0x280d21.upgradeNum : (null == _0x1e2496 ? undefined : _0x1e2496.groupPeople) - (null == _0x280d21 ? undefined : _0x280d21.upgradeNum) - _0x280d21.downgradeNum;
                    this.nowRankMultLabel.string = "x" + ((null == _0x280d21 ? undefined : _0x280d21.multiple) || 0);
                    _0x2a106f.getBundle("RankScene").load("png/multipleBg" + (this.listUnshiftItemRankLevel > 3 ? this.listUnshiftItemRankLevel > 6 ? 3 : 2 : 1) + "/spriteFrame", _0x4d08be, function (_0x372e55, _0x10aa80) {
                      _0x22eaec.multipleBg.getComponent(_0x49b928).spriteFrame = _0x10aa80;
                    });
                    this.multipleHint.color = this.listUnshiftItemRankLevel > 3 ? this.listUnshiftItemRankLevel > 6 ? this.color3 : this.color2 : this.color1;
                    _0x4bea85 = _0x1e2496.rankList;
                    this.rankListLength = _0x1e2496.rankList.length;
                    console.log("listUnshiftItem", _0x280d21);
                    _0x496312 = {
                      upgardeItem: true
                    };
                    _0x30f91f = {
                      keepItem: true
                    };
                    _0x465b9b = {
                      reduceItem: true
                    };
                    null == (_0x3cc90d = _0x1e2496.rankList) || _0x3cc90d.length;
                    _0x20be3d = _0x280d21.upgradeNum;
                    _0x20c8ca = _0x280d21.downgradeNum;
                    !(this.nowTime >= this.settlementTimeStamp && this.nowTime <= this.endOfDay) && this.nowTime.getTime() < _0x20b171 && 0 != (_0x1e2496.rankList || []).length ? (_0xe32b1 = _0x1e2496.groupPeople - _0x20be3d - _0x20c8ca, _0x5b75bc = JSON.parse(JSON.stringify(_0x1e2496.rankList)), _0xa8a855 = _0x5b75bc.splice(0, _0x20be3d), _0xb36b72 = _0x5b75bc.splice(0, _0xe32b1), _0x5aa053 = _0x5b75bc.splice(0, _0x20c8ca), _0xa8a855.length && _0xa8a855.push(_0x496312), _0xb36b72.length && _0xb36b72.push(_0x30f91f), _0x5aa053.length && _0x5aa053.push(_0x465b9b), this.RankListData = [].concat(_0xa8a855, _0xb36b72, _0x5aa053)) : this.RankListData = [];
                    console.log("更新后的RankListData", this.RankListData);
                    this.Tab_List.reloadData();
                    this.Rank_List.reloadData();
                    null != (_0x51de26 = _0x4bea85.filter(function (_0x39bec4, _0x2fd3e5) {
                      return _0x39bec4.boolMe;
                    })) && _0x51de26.length && ((_0x49267e = new _0x5e12d9(0, 0)).row = _0x4bea85.indexOf(_0x51de26[0]), this.Rank_List.scrollTo(_0x49267e));
                    console.log(0 == (null == (_0x378a9e = this.RankListData) ? undefined : _0x378a9e.length) && this.nowTime.getTime() < _0x20b171, "this.RankListData?.length == 0 && this.nowTime.getTime() > endTime");
                    this.Rank_List_None.active = 0 == (null == (_0x18fe24 = this.RankListData) ? undefined : _0x18fe24.length) && this.nowTime.getTime() < _0x20b171;
                    this.Rank_List.node.active = (null == (_0x23dfe3 = this.RankListData) ? undefined : _0x23dfe3.length) > 0;
                    this.isCountingDown = !(this.nowTime.getTime() > _0x20b171);
                    this.middle.getChildByPath("middle-0").active = this.nowTime.getTime() > _0x20b171;
                    this.nowTime.getTime() > _0x20b171 ? (this.isCountingDown = false, this.middle.getChildByPath("middle-0/cd").active = false, this.middleText3.string = "恭喜你成功瓜分：" + ((null == _0x1e2496 ? undefined : _0x1e2496.myDivideCredits) || 0) + "积分", this.middleText3.color = this.listUnshiftItemRankLevel > 3 ? this.listUnshiftItemRankLevel > 6 ? this.color3 : this.color2 : this.color1) : 0 == (null == (_0x500c64 = this.RankListData) ? undefined : _0x500c64.length) && (0 == this.rankListLength && (this.isCountingDown = false, this.middle.getChildByPath("middle-0").active = true, this.middleText.getComponent(_0x27ee45).string = "每天前 <color=#fb2136>" + this.nowRankPromote + "</color> 名将" + (9 == this.listUnshiftItemRankLevel ? "保级至该等级排行榜" : "晋升下一等级排行榜")), this.middle.getChildByPath("middle-0/cd").active = false, this.middleText2.string = "获取福气值即可加入排行榜");
                    this.nowTime.getTime() < _0x20b171 && this.nowTime.getTime() > this.endStemp ? (this.actTime = "决赛到啦！今日24点开奖", this.title.active = false, this.titleEndDay.active = true, this.isJieSuanDay = true) : (this.actTime = "活动时间：" + _0x43907b(this.startStemp, "MM.dd") + " - " + _0x43907b(this.endStemp, "MM.dd"), this.title.active = true, this.titleEndDay.active = false);
                    this.titleText.string = this.actTime;
                    this.isCountingDown && this.schedule(this.cdCircle, 1);
                  case 47:
                  case "end":
                    return _0x26a6cf.stop();
                }
              }
            }, _0x27e54f, this);
          }));
          return function () {
            {
              return _0x2d9319.apply(this, arguments);
            }
          };
        }();
        _0xab9b61.update = function (_0x5348dd) {
          this.tabLevelSwiper();
        };
        _0xab9b61.parseDateToTimestamp = function (_0x2bd9d1) {
          if (null == _0x2bd9d1 || "" === _0x2bd9d1) {
            return false;
          }
          if (!/^\d{8}$/.test(_0x2bd9d1)) {
            throw new Error("Invalid date format. Expected yyyyMMdd");
          }
          var _0x31b1f0 = parseInt(_0x2bd9d1.substring(0, 4), 10);
          var _0x4c3700 = parseInt(_0x2bd9d1.substring(4, 6), 10);
          var _0x395005 = parseInt(_0x2bd9d1.substring(6, 8), 10);
          return new Date(_0x31b1f0 + "/" + _0x4c3700 + "/" + _0x395005).getTime();
        };
        _0xab9b61.parseTime = function (_0x440a86) {
          var _0x51ef6a = _0x440a86.split(":").map(Number);
          var _0xac461f = _0x51ef6a[0];
          var _0xd49cdf = _0x51ef6a[1];
          var _0x235bc6 = _0x51ef6a[2];
          var _0x3e6131 = _0x440a86.split(":");
          var _0x581a08 = _0x3e6131[0];
          var _0x45b6ef = _0x3e6131[1];
          _0x3e6131[2];
          this.jieSuanHour = _0x581a08;
          this.jieSuanMin = _0x45b6ef;
          var _0x7003a5 = this.nowTime;
          return new Date(_0x7003a5.getFullYear(), _0x7003a5.getMonth(), _0x7003a5.getDate(), _0xac461f, _0xd49cdf, _0x235bc6);
        };
        _0xab9b61.cdCircle = function () {
          var _0x56d35e = _0x53bd76(_0x4815b3().mark(function _0x3b26f1() {
            return _0x4815b3().wrap(function (_0x24fb28) {
              for (;;) {
                switch (_0x24fb28.prev = _0x24fb28.next) {
                  case 0:
                    this.isCountingDown ? this.calculateCountdown() : this.unschedule(this.cdCircle);
                  case 1:
                  case "end":
                    return _0x24fb28.stop();
                }
              }
            }, _0x3b26f1, this);
          }));
          return function () {
            return _0x56d35e.apply(this, arguments);
          };
        }();
        _0xab9b61.calculateCountdown = function () {
          var _0x570a50 = new Date();
          this.middle.getChildByPath("middle-0").active = false;
          this.middle.getChildByPath("middle-1").active = false;
          this.middle.getChildByPath("middle-2").active = false;
          this.Rank_List.node.active = false;
          this.Rank_List_None.active = false;
          _0x570a50 >= this.oneHourBefore && _0x570a50 < this.settlementTimeStamp ? (this.formatTime(this.settlementTimeStamp - _0x570a50), this.cdStatus = 1, this.middle.getChildByPath("middle-1").active = true, this.Rank_List.node.active = true) : _0x570a50 < this.settlementTimeStamp ? (this.formatTime(this.settlementTimeStamp - _0x570a50), this.middleText.getComponent(_0x27ee45).string = "每天前 <color=#fb2136>" + this.nowRankPromote + "</color> 名将" + (9 == this.listUnshiftItemRankLevel ? "保级至该等级排行榜" : "晋升下一等级排行榜"), this.cdStatus = 0, this.middle.getChildByPath("middle-0").active = true, this.Rank_List.node.active = true) : _0x570a50 >= this.settlementTimeStamp && _0x570a50 <= this.endOfDay && (this.isCountingDown = false, this.cdStatus = 2, this.Rank_List_None.active = true, this.middle.getChildByPath("middle-2").active = 2 == this.cdStatus);
          this.middle.getChildByPath("middle-2/text").getComponent(_0x578189).string = this.jieSuanHour + ":" + this.jieSuanMin + "-24:00福气不计入排行榜中";
        };
        _0xab9b61.formatTime = function (_0x45ae31) {
          var _0x1c6d94 = Math.floor(_0x45ae31 / 1000);
          var _0x5b407e = Math.floor(_0x1c6d94 / 3600);
          var _0x5cf2ef = Math.floor(_0x1c6d94 % 3600 / 60);
          var _0x531a0f = _0x1c6d94 % 60;
          0 == this.cdStatus && (this.middle.getChildByPath("middle-0/cd/时").getComponent(_0x578189).string = this.padZero(_0x5b407e), this.middle.getChildByPath("middle-0/cd/分").getComponent(_0x578189).string = this.padZero(_0x5cf2ef), this.middle.getChildByPath("middle-0/cd/秒").getComponent(_0x578189).string = this.padZero(_0x531a0f));
          1 == this.cdStatus && (this.middle.getChildByPath("middle-1/cd/时").getComponent(_0x578189).string = this.padZero(_0x5b407e), this.middle.getChildByPath("middle-1/cd/分").getComponent(_0x578189).string = this.padZero(_0x5cf2ef), this.middle.getChildByPath("middle-1/cd/秒").getComponent(_0x578189).string = this.padZero(_0x531a0f));
        };
        _0xab9b61.padZero = function (_0x3cbfbe) {
          return _0x3cbfbe < 10 ? "0" + _0x3cbfbe : _0x3cbfbe;
        };
        return _0x4f8c28;
      }(_0x1009d1)).bundle = "RankScene", _0x3b7ef3.skin = "RankScene", _0x3c9d4a = _0x57a38d((_0x40b816 = _0x3b7ef3).prototype, "backBtn", [_0x75000a], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x474cea = _0x57a38d(_0x40b816.prototype, "title", [_0x3b0b7d], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x50aa2f = _0x57a38d(_0x40b816.prototype, "titleEndDay", [_0x56f5c4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x5b514f = _0x57a38d(_0x40b816.prototype, "titleText", [_0xe7122a], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          {
            return null;
          }
        }
      }), _0x51c201 = _0x57a38d(_0x40b816.prototype, "Tab_List", [_0x55406d], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x4246d6 = _0x57a38d(_0x40b816.prototype, "Rank_List", [_0x3fa346], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x1cc4ed = _0x57a38d(_0x40b816.prototype, "Rank_List_None", [_0x14a714], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          {
            return null;
          }
        }
      }), _0x2639c9 = _0x57a38d(_0x40b816.prototype, "nowRankMultLabel", [_0x223060], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x38ac94 = _0x57a38d(_0x40b816.prototype, "middle", [_0x2d165b], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x1d03ea = _0x57a38d(_0x40b816.prototype, "middleText", [_0x3ee169], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x51c4d2 = _0x57a38d(_0x40b816.prototype, "middleText2", [_0x30eb32], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x2d7262 = _0x57a38d(_0x40b816.prototype, "middleText3", [_0x30b7b3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x2b40aa = _0x57a38d(_0x40b816.prototype, "hour", [_0x2e7293], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x1bcf40 = _0x57a38d(_0x40b816.prototype, "second", [_0x508d12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x3a31d7 = _0x57a38d(_0x40b816.prototype, "minute", [_0x49f075], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x322c84 = _0x57a38d(_0x40b816.prototype, "multipleBg", [_0x50514b], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x3d1c74 = _0x57a38d(_0x40b816.prototype, "multipleHint", [_0x5dedbd], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x31d6ad = _0x40b816)) || _0x31d6ad) || _0x31d6ad));
      _0x327e5d._RF.pop();
    }
  };
});
System.register("chunks:///_virtual/RankUpgradePanel.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Panel.ts", "./store.ts", "./decorators.ts", "./Utils.ts", "./UIFast.ts", "./RankScene.ts", "./constants.ts"], function (_0x26d9ef) {
  var _0xe96c37;
  var _0x1c6b47;
  var _0x40879a;
  var _0x1ae3f0;
  var _0x19b42f;
  var _0x2631a5;
  var _0x4d7bf8;
  var _0xad0709;
  var _0x1c47e2;
  var _0xdc7f12;
  var _0x789d8d;
  var _0x5c3097;
  var _0x550902;
  var _0x1cee9c;
  var _0x317815;
  var _0x5071c0;
  var _0x1ee84d;
  var _0x16c7e9;
  var _0x3babef;
  var _0x54c550;
  var _0x1a1f58;
  var _0x2a244c;
  return {
    setters: [function (_0x36a507) {
      _0xe96c37 = _0x36a507.applyDecoratedDescriptor;
      _0x1c6b47 = _0x36a507.inheritsLoose;
      _0x40879a = _0x36a507.initializerDefineProperty;
      _0x1ae3f0 = _0x36a507.assertThisInitialized;
      _0x19b42f = _0x36a507.asyncToGenerator;
      _0x2631a5 = _0x36a507.regeneratorRuntime;
    }, function (_0x4e24c8) {
      _0x4d7bf8 = _0x4e24c8.cclegacy;
      _0xad0709 = _0x4e24c8._decorator;
      _0x1c47e2 = _0x4e24c8.Label;
      _0xdc7f12 = _0x4e24c8.Button;
      _0x789d8d = _0x4e24c8.Node;
      _0x5c3097 = _0x4e24c8.Sprite;
      _0x550902 = _0x4e24c8.Color;
    }, function (_0xd020f8) {
      _0x1cee9c = _0xd020f8.default;
    }, function (_0x270d68) {
      _0x317815 = _0x270d68.default;
    }, function (_0x580f18) {
      _0x5071c0 = _0x580f18.observer;
    }, function (_0x3b09b4) {
      _0x1ee84d = _0x3b09b4._asyncThrottle;
      _0x16c7e9 = _0x3b09b4.strFormat;
    }, function (_0xb7b1ea) {
      _0x3babef = _0xb7b1ea.changeScene;
    }, function (_0x32f248) {
      _0x54c550 = _0x32f248.RankScence;
    }, function (_0x4e9d04) {
      _0x1a1f58 = _0x4e9d04.userImg;
      _0x2a244c = _0x4e9d04.userName;
    }],
    execute: function () {
      {
        var _0x5daba0;
        var _0x22ef6e;
        var _0x194926;
        var _0x3cb12f;
        var _0x45803c;
        var _0x14b257;
        var _0x22666f;
        var _0x36a4fd;
        var _0x3ff0de;
        var _0x3f0a9f;
        var _0x4137fc;
        var _0x5946ad;
        var _0x105f62;
        var _0x55b069;
        var _0x5f11e2;
        var _0x11edf0;
        var _0x4ce86c;
        var _0x51e37e;
        var _0x48df12;
        var _0x4a1da2;
        var _0x4bf3e1;
        var _0x394139;
        var _0x5678c9;
        var _0x1fc74b;
        _0x4d7bf8._RF.push({}, "4f365KIET9KfJ1Q8qLpjxo/", "RankUpgradePanel", undefined);
        var _0x1d0db5 = _0xad0709.ccclass;
        var _0x2e4d6d = _0xad0709.property;
        _0x26d9ef("default", (_0x5daba0 = _0x1d0db5("RankUpgradePanel"), _0x22ef6e = _0x2e4d6d(_0x1c47e2), _0x194926 = _0x2e4d6d(_0x1c47e2), _0x3cb12f = _0x2e4d6d(_0x1c47e2), _0x45803c = _0x2e4d6d(_0x1c47e2), _0x14b257 = _0x2e4d6d(_0xdc7f12), _0x22666f = _0x2e4d6d(_0xdc7f12), _0x36a4fd = _0x2e4d6d(_0x789d8d), _0x3ff0de = _0x2e4d6d(_0x789d8d), _0x3f0a9f = _0x2e4d6d(_0x789d8d), _0x4137fc = _0x2e4d6d(_0x1c47e2), _0x5071c0(_0x5946ad = _0x5daba0(((_0x1fc74b = function (_0x27e06c) {
          function _0x43d3c9() {
            for (var _0x1a3ead, _0x486471 = arguments.length, _0x1c8c10 = new Array(_0x486471), _0x5ecb4e = 0; _0x5ecb4e < _0x486471; _0x5ecb4e++) {
              _0x1c8c10[_0x5ecb4e] = arguments[_0x5ecb4e];
            }
            _0x1a3ead = _0x27e06c.call.apply(_0x27e06c, [this].concat(_0x1c8c10)) || this;
            _0x40879a(_0x1a3ead, "fuQiNum", _0x55b069, _0x1ae3f0(_0x1a3ead));
            _0x40879a(_0x1a3ead, "fuQiText", _0x5f11e2, _0x1ae3f0(_0x1a3ead));
            _0x40879a(_0x1a3ead, "beiLvNum", _0x11edf0, _0x1ae3f0(_0x1a3ead));
            _0x40879a(_0x1a3ead, "beiLvText", _0x4ce86c, _0x1ae3f0(_0x1a3ead));
            _0x40879a(_0x1a3ead, "closeBtn", _0x51e37e, _0x1ae3f0(_0x1a3ead));
            _0x40879a(_0x1a3ead, "mainBtn", _0x48df12, _0x1ae3f0(_0x1a3ead));
            _0x40879a(_0x1a3ead, "rank1", _0x4a1da2, _0x1ae3f0(_0x1a3ead));
            _0x40879a(_0x1a3ead, "rank2", _0x4bf3e1, _0x1ae3f0(_0x1a3ead));
            _0x40879a(_0x1a3ead, "rank3", _0x394139, _0x1ae3f0(_0x1a3ead));
            _0x40879a(_0x1a3ead, "topRank", _0x5678c9, _0x1ae3f0(_0x1a3ead));
            _0x1a3ead.closePanel = _0x1ee84d(function () {
              _0x1a3ead.hidePanel();
            });
            _0x1a3ead.clickRank = _0x1ee84d(function () {
              _0x1a3ead.closePanel();
              _0x3babef(_0x54c550);
            });
            return _0x1a3ead;
          }
          _0x1c6b47(_0x43d3c9, _0x27e06c);
          var _0xc8f0b8 = _0x43d3c9.prototype;
          _0xc8f0b8.onLoad = function () {
            this.closeBtn.node.on(_0xdc7f12.EventType.CLICK, this.closePanel, this);
            this.mainBtn.node.on(_0xdc7f12.EventType.CLICK, this.clickRank, this);
          };
          _0xc8f0b8.start = function () {
            var _0xef9271 = _0x19b42f(_0x2631a5().mark(function _0x42fd03() {
              {
                var _0xfba0a;
                var _0xda809b;
                var _0x46e489;
                var _0xa567c5;
                var _0x468276 = this;
                return _0x2631a5().wrap(function (_0x406d1e) {
                  for (;;) {
                    switch (_0x406d1e.prev = _0x406d1e.next) {
                      case 0:
                        _0x46e489 = _0x317815.rankPopInfo.settlementPop;
                        this.fuQiNum.string = "x" + (null == _0x46e489 ? undefined : _0x46e489.obtainScoreNum);
                        this.fuQiText.string = (null == _0x46e489 ? undefined : _0x46e489.obtainScoreNum) + "枚福气";
                        this.beiLvNum.string = "x" + (null == _0x46e489 ? undefined : _0x46e489.newRankMultiply);
                        this.beiLvText.string = "x" + (null == _0x46e489 ? undefined : _0x46e489.newRankMultiply);
                        _0xa567c5 = null == _0x46e489 || null == (_0xfba0a = _0x46e489.rankList) ? undefined : _0xfba0a.find(function (_0x3e06f8) {
                          return _0x3e06f8.boolMe;
                        });
                        this.topRank.getComponent(_0x1c47e2).string = null != _0xa567c5 && _0xa567c5.rankOrder ? "昨日排名：" + (null == _0xa567c5 ? undefined : _0xa567c5.rankOrder) : "";
                        null == _0x46e489 || null == (_0xda809b = _0x46e489.rankList) || _0xda809b.map(function (_0x374750, _0x1ce09c) {
                          var _0x1357e6 = _0x468276["rank" + (_0x1ce09c + 1)];
                          _0x1357e6.active = true;
                          _0x1357e6.getChildByPath("Mask/头像").getComponent(_0x5c3097).spriteFrame = (null == _0x374750 ? undefined : _0x374750.avatar) || _0x1a1f58;
                          _0x1357e6.getChildByName("nikeName").getComponent(_0x1c47e2).string = _0x16c7e9((null == _0x374750 ? undefined : _0x374750.nickName) || _0x2a244c, 10);
                          _0x1357e6.getChildByName("rankscore").getComponent(_0x1c47e2).string = null == _0x374750 ? undefined : _0x374750.rankScore;
                          _0x1357e6.getChildByName("my_bg").active = null == _0x374750 ? undefined : _0x374750.boolMe;
                          _0x1357e6.getChildByName("rank").getComponent(_0x1c47e2).string = (null == _0x374750 ? undefined : _0x374750.rankOrder) || "";
                          null != _0x374750 && _0x374750.boolMe && (_0x1357e6.getChildByName("nikeName").getComponent(_0x1c47e2).color = new _0x550902(255, 149, 0), _0x1357e6.getChildByName("rankscore").getComponent(_0x1c47e2).color = new _0x550902(255, 149, 0), _0x1357e6.getChildByName("rank").getComponent(_0x1c47e2).color = new _0x550902(255, 149, 0));
                        });
                      case 8:
                      case "end":
                        return _0x406d1e.stop();
                    }
                  }
                }, _0x42fd03, this);
              }
            }));
            return function () {
              return _0xef9271.apply(this, arguments);
            };
          }();
          return _0x43d3c9;
        }(_0x1cee9c)).bundle = "RankUpgradePanel", _0x1fc74b.skin = "RankUpgradePanel", _0x55b069 = _0xe96c37((_0x105f62 = _0x1fc74b).prototype, "fuQiNum", [_0x22ef6e], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function () {
            return null;
          }
        }), _0x5f11e2 = _0xe96c37(_0x105f62.prototype, "fuQiText", [_0x194926], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function () {
            {
              return null;
            }
          }
        }), _0x11edf0 = _0xe96c37(_0x105f62.prototype, "beiLvNum", [_0x3cb12f], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function () {
            return null;
          }
        }), _0x4ce86c = _0xe96c37(_0x105f62.prototype, "beiLvText", [_0x45803c], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function () {
            return null;
          }
        }), _0x51e37e = _0xe96c37(_0x105f62.prototype, "closeBtn", [_0x14b257], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function () {
            return null;
          }
        }), _0x48df12 = _0xe96c37(_0x105f62.prototype, "mainBtn", [_0x22666f], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function () {
            return null;
          }
        }), _0x4a1da2 = _0xe96c37(_0x105f62.prototype, "rank1", [_0x36a4fd], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function () {
            return null;
          }
        }), _0x4bf3e1 = _0xe96c37(_0x105f62.prototype, "rank2", [_0x3ff0de], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function () {
            return null;
          }
        }), _0x394139 = _0xe96c37(_0x105f62.prototype, "rank3", [_0x3f0a9f], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function () {
            return null;
          }
        }), _0x5678c9 = _0xe96c37(_0x105f62.prototype, "topRank", [_0x4137fc], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function () {
            return null;
          }
        }), _0x5946ad = _0x105f62)) || _0x5946ad) || _0x5946ad));
        _0x4d7bf8._RF.pop();
      }
    }
  };
});
System.register("chunks:///_virtual/RankUpgradeSvgaPanel.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Panel.ts", "./store.ts", "./decorators.ts", "./Utils.ts", "./UIFast.ts", "./RankUpgradePanel.ts", "./Svga.ts"], function (_0x49e77a) {
  var _0x552c48;
  var _0x2d367c;
  var _0x722234;
  var _0x2d5c49;
  var _0x43cd47;
  var _0x1bef74;
  var _0x510b8e;
  var _0x5483e1;
  var _0x50f002;
  var _0x35a11b;
  var _0x4d33a0;
  var _0x21ea58;
  var _0x59a986;
  var _0xbf81fa;
  var _0x110bd2;
  var _0x56461d;
  var _0x2638a2;
  var _0x47ae29;
  var _0x56e959;
  var _0x9b67d2;
  return {
    setters: [function (_0x3b124c) {
      _0x552c48 = _0x3b124c.applyDecoratedDescriptor;
      _0x2d367c = _0x3b124c.inheritsLoose;
      _0x722234 = _0x3b124c.initializerDefineProperty;
      _0x2d5c49 = _0x3b124c.assertThisInitialized;
      _0x43cd47 = _0x3b124c.asyncToGenerator;
      _0x1bef74 = _0x3b124c.regeneratorRuntime;
    }, function (_0x1aeda8) {
      _0x510b8e = _0x1aeda8.cclegacy;
      _0x5483e1 = _0x1aeda8._decorator;
      _0x50f002 = _0x1aeda8.Sprite;
      _0x35a11b = _0x1aeda8.Label;
      _0x4d33a0 = _0x1aeda8.Node;
      _0x21ea58 = _0x1aeda8.assetManager;
      _0x59a986 = _0x1aeda8.SpriteFrame;
    }, function (_0x51d68e) {
      _0xbf81fa = _0x51d68e.default;
    }, function (_0x3e15a4) {
      _0x110bd2 = _0x3e15a4.default;
    }, function (_0x56ae87) {
      {
        _0x56461d = _0x56ae87.observer;
      }
    }, function (_0x545492) {
      _0x2638a2 = _0x545492.strFormat;
    }, function (_0x45e028) {
      _0x47ae29 = _0x45e028.showPanel;
    }, function (_0x51f98a) {
      _0x56e959 = _0x51f98a.default;
    }, function (_0x4dca73) {
      _0x9b67d2 = _0x4dca73.default;
    }],
    execute: function () {
      var _0x425cb4;
      var _0x9805bf;
      var _0x10058b;
      var _0x399ce0;
      var _0x2c43f0;
      var _0x55d63d;
      var _0x3008c3;
      var _0x3a5f0e;
      var _0x15322f;
      var _0x759d46;
      var _0x532f0d;
      var _0x3055fa;
      var _0x2dd972;
      var _0x30c721;
      var _0x282cb3;
      var _0x503cd5;
      var _0x18ae59;
      var _0x4cdc2a;
      var _0x2d5b23;
      var _0x5e024c;
      _0x510b8e._RF.push({}, "7d3acQqPRlGtIl/+Lrmd+fl", "RankUpgradeSvgaPanel", undefined);
      var _0x5b7080 = _0x5483e1.ccclass;
      var _0x7f4729 = _0x5483e1.property;
      _0x49e77a("default", (_0x425cb4 = _0x5b7080("RankUpgradeSvgaPanel"), _0x9805bf = _0x7f4729(_0x50f002), _0x10058b = _0x7f4729(_0x50f002), _0x399ce0 = _0x7f4729(_0x35a11b), _0x2c43f0 = _0x7f4729(_0x35a11b), _0x55d63d = _0x7f4729(_0x4d33a0), _0x3008c3 = _0x7f4729(_0x4d33a0), _0x3a5f0e = _0x7f4729(_0x4d33a0), _0x15322f = _0x7f4729(_0x4d33a0), _0x56461d(_0x759d46 = _0x425cb4(((_0x5e024c = function (_0x16bb0d) {
        function _0x50437d() {
          for (var _0x42e369, _0x2382c5 = arguments.length, _0x99a5f0 = new Array(_0x2382c5), _0x590e99 = 0; _0x590e99 < _0x2382c5; _0x590e99++) {
            _0x99a5f0[_0x590e99] = arguments[_0x590e99];
          }
          _0x42e369 = _0x16bb0d.call.apply(_0x16bb0d, [this].concat(_0x99a5f0)) || this;
          _0x722234(_0x42e369, "bigIcon", _0x3055fa, _0x2d5c49(_0x42e369));
          _0x722234(_0x42e369, "smallIcon", _0x2dd972, _0x2d5c49(_0x42e369));
          _0x722234(_0x42e369, "bigLevel", _0x30c721, _0x2d5c49(_0x42e369));
          _0x722234(_0x42e369, "smallLevel", _0x282cb3, _0x2d5c49(_0x42e369));
          _0x722234(_0x42e369, "bigIconNode", _0x503cd5, _0x2d5c49(_0x42e369));
          _0x722234(_0x42e369, "smallIconNode", _0x18ae59, _0x2d5c49(_0x42e369));
          _0x722234(_0x42e369, "svgaBg", _0x4cdc2a, _0x2d5c49(_0x42e369));
          _0x722234(_0x42e369, "title", _0x2d5b23, _0x2d5c49(_0x42e369));
          return _0x42e369;
        }
        _0x2d367c(_0x50437d, _0x16bb0d);
        var _0x4f7fff = _0x50437d.prototype;
        _0x4f7fff.onLoad = function () {
          var _0x1298f9 = this;
          var _0x2d4bbf = _0x110bd2.rankPopInfo.settlementPop;
          console.log("settlementPop", _0x2d4bbf);
          _0x21ea58.getBundle("common").load("rankIcon/icon_" + (null == _0x2d4bbf ? undefined : _0x2d4bbf.newRankLevel) + "/spriteFrame", _0x59a986, function (_0x4d7257, _0x15b6bc) {
            _0x1298f9.bigIcon.spriteFrame = _0x15b6bc;
          });
          _0x21ea58.getBundle("common").load("rankIcon/icon_" + (null == _0x2d4bbf ? undefined : _0x2d4bbf.oldRankLevel) + "/spriteFrame", _0x59a986, function (_0x52193a, _0x47b976) {
            _0x1298f9.smallIcon.spriteFrame = _0x47b976;
          });
          this.bigLevel.string = "倍率" + _0x2638a2(null == _0x2d4bbf ? undefined : _0x2d4bbf.newRankMultiply);
          this.smallLevel.string = "倍率" + _0x2638a2(null == _0x2d4bbf ? undefined : _0x2d4bbf.oldRankMultiply);
        };
        _0x4f7fff.start = function () {
          var _0x2911aa = _0x43cd47(_0x1bef74().mark(function _0x11b47e() {
            var _0x3dc0cf = this;
            return _0x1bef74().wrap(function (_0x44f7a1) {
              for (;;) {
                switch (_0x44f7a1.prev = _0x44f7a1.next) {
                  case 0:
                    this.svgaBg.on(_0x9b67d2.EventType.END_FRAME, function () {
                      {
                        console.log("播放结束");
                        _0x3dc0cf.bigIconNode.active = true;
                        _0x3dc0cf.smallIconNode.active = true;
                        _0x3dc0cf.scheduleOnce(function () {
                          _0x3dc0cf.closePanel();
                          _0x47ae29(_0x56e959);
                        }, 2);
                      }
                    });
                  case 1:
                  case "end":
                    return _0x44f7a1.stop();
                }
              }
            }, _0x11b47e, this);
          }));
          return function () {
            {
              return _0x2911aa.apply(this, arguments);
            }
          };
        }();
        _0x4f7fff.closePanel = function () {
          this.hidePanel();
        };
        return _0x50437d;
      }(_0xbf81fa)).bundle = "RankUpgradeSvgaPanel", _0x5e024c.skin = "RankUpgradeSvgaPanel", _0x3055fa = _0x552c48((_0x532f0d = _0x5e024c).prototype, "bigIcon", [_0x9805bf], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x2dd972 = _0x552c48(_0x532f0d.prototype, "smallIcon", [_0x10058b], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          {
            return null;
          }
        }
      }), _0x30c721 = _0x552c48(_0x532f0d.prototype, "bigLevel", [_0x399ce0], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          {
            return null;
          }
        }
      }), _0x282cb3 = _0x552c48(_0x532f0d.prototype, "smallLevel", [_0x2c43f0], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x503cd5 = _0x552c48(_0x532f0d.prototype, "bigIconNode", [_0x55d63d], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x18ae59 = _0x552c48(_0x532f0d.prototype, "smallIconNode", [_0x3008c3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x4cdc2a = _0x552c48(_0x532f0d.prototype, "svgaBg", [_0x3a5f0e], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x2d5b23 = _0x552c48(_0x532f0d.prototype, "title", [_0x15322f], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x759d46 = _0x532f0d)) || _0x759d46) || _0x759d46));
      _0x510b8e._RF.pop();
    }
  };
});
System.register("chunks:///_virtual/RES.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], function (_0x40a86b) {
  var _0x14b4b8;
  var _0x32beaa;
  var _0x21fff2;
  var _0x1b8464;
  var _0x4172be;
  var _0xca25a4;
  return {
    setters: [function (_0x5b00f9) {
      _0x14b4b8 = _0x5b00f9.asyncToGenerator;
      _0x32beaa = _0x5b00f9.regeneratorRuntime;
    }, function (_0x28e810) {
      _0x21fff2 = _0x28e810.cclegacy;
      _0x1b8464 = _0x28e810.resources;
      _0x4172be = _0x28e810.assetManager;
      _0xca25a4 = _0x28e810.SpriteFrame;
    }],
    execute: function () {
      var _0x28ae98;
      _0x21fff2._RF.push({}, "1e2085dSiJH14aXVtuHH3rN", "RES", undefined);
      (function (_0x58f5a0) {
        {
          _0x58f5a0.bundles = {};
          var _0x583721 = _0x58f5a0.bundles;
          _0x58f5a0.loadBundle = function (_0x34a665) {
            var _0x556f3d = window.__remoteAssets__ || "";
            return new Promise(function (_0x5a3afe, _0x2be6ea) {
              _0x4172be.loadBundle(_0x556f3d + _0x34a665, function (_0x4eb05a, _0x5c6796) {
                {
                  null !== _0x4eb05a ? (console.log("[RES]:Load AssetsBundle Error: " + _0x34a665), _0x583721[_0x34a665] = null, _0x2be6ea(_0x4eb05a)) : (console.log("[RES]:Load AssetsBundle Success: " + _0x34a665), _0x583721[_0x34a665] = _0x5c6796, _0x5a3afe(true));
                }
              });
            });
          };
          _0x58f5a0.getRes = _0x1b8464.get.bind(_0x1b8464);
          function _0x4c84d3() {
            return (_0x4c84d3 = _0x14b4b8(_0x32beaa().mark(function _0x2e31a0(_0x100907) {
              return _0x32beaa().wrap(function (_0x5c382f) {
                for (;;) {
                  switch (_0x5c382f.prev = _0x5c382f.next) {
                    case 0:
                      _0x5c382f.next = 2;
                      return _0x28ae98.loadRemote(_0x100907);
                    case 2:
                      return _0x5c382f.abrupt("return", _0x5c382f.sent);
                    case 3:
                    case "end":
                      return _0x5c382f.stop();
                  }
                }
              }, _0x2e31a0);
            }))).apply(this, arguments);
          }
          function _0x1f8106() {
            return (_0x1f8106 = _0x14b4b8(_0x32beaa().mark(function _0x35f23f(_0x5f5148) {
              return _0x32beaa().wrap(function (_0x592852) {
                for (;;) {
                  switch (_0x592852.prev = _0x592852.next) {
                    case 0:
                      return _0x592852.abrupt("return", new Promise(function (_0x588756) {
                        _0x1b8464.load(_0x5f5148, function (_0x48208e, _0x9a37fa) {
                          _0x48208e || !_0x9a37fa ? (console.warn("资源 " + _0x5f5148 + " 加载失败:", _0x48208e), _0x588756(null)) : _0x588756(_0xca25a4.createWithImage(_0x9a37fa));
                        });
                      }));
                    case 1:
                    case "end":
                      return _0x592852.stop();
                  }
                }
              }, _0x35f23f);
            }))).apply(this, arguments);
          }
          _0x58f5a0.loadRes = function (_0x182c17, _0xeaf626) {
            return new Promise(function (_0x3c92c0) {
              _0x1b8464.load(_0x182c17, _0xeaf626, function (_0x126961, _0x681a1e) {
                _0x126961 ? (console.warn("资源 " + _0x182c17 + " 加载失败:", _0x126961), _0x3c92c0(null)) : _0x3c92c0(_0x681a1e || null);
              });
            });
          };
          _0x58f5a0.loadRemote = function (_0x223223) {
            return new Promise(function (_0x4a06b9) {
              _0x4172be.loadRemote(_0x223223, function (_0x37716b, _0x21ed45) {
                _0x37716b || !_0x21ed45 ? (console.warn("资源 " + _0x223223 + " 加载失败:", _0x37716b), _0x4a06b9(null)) : _0x4a06b9(_0x21ed45);
              });
            });
          };
          _0x58f5a0.loadRemoteImg = function (_0x25d7d3) {
            return _0x4c84d3.apply(this, arguments);
          };
          _0x58f5a0.loadLocalImg = function (_0x357e8f) {
            return _0x1f8106.apply(this, arguments);
          };
          _0x58f5a0.loadDir = function (_0x110dc6, _0x41876b) {
            undefined === _0x41876b && (_0x41876b = function () {
              return 0;
            });
            return new Promise(function (_0x1facf6) {
              _0x1b8464.loadDir(_0x110dc6, _0x41876b, function (_0x38a455, _0xd24b88) {
                _0x38a455 ? (console.warn("资源 " + _0x110dc6 + " 加载失败:", _0x38a455), _0x1facf6(false)) : _0x1facf6(true);
              });
            });
          };
        }
      })(_0x28ae98 || (_0x28ae98 = {}));
      _0x40a86b("default", _0x28ae98);
      _0x21fff2._RF.pop();
    }
  };
});
System.register("chunks:///_virtual/ResolutionAutoFit.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], function (_0x5ebe69) {
  var _0x70de6d;
  var _0x40c65a;
  var _0x56c24b;
  var _0x32bfe4;
  var _0x3fb160;
  var _0x3aeb52;
  var _0x3fc175;
  var _0x5b3982;
  return {
    setters: [function (_0xb20d31) {
      _0x70de6d = _0xb20d31.inheritsLoose;
    }, function (_0x256c4f) {
      _0x40c65a = _0x256c4f.cclegacy;
      _0x56c24b = _0x256c4f._decorator;
      _0x32bfe4 = _0x256c4f.screen;
      _0x3fb160 = _0x256c4f.view;
      _0x3aeb52 = _0x256c4f.ResolutionPolicy;
      _0x3fc175 = _0x256c4f.size;
      _0x5b3982 = _0x256c4f.Component;
    }],
    execute: function () {
      var _0x15fe9e;
      _0x40c65a._RF.push({}, "e5d8aIjX9NO3ox3KMWTDbsA", "ResolutionAutoFit", undefined);
      var _0x5277b0 = _0x56c24b.ccclass;
      _0x56c24b.property;
      _0x5ebe69("ResolutionAutoFit", _0x5277b0("tgxResolutionAutoFit")(_0x15fe9e = function (_0x2f2264) {
        {
          function _0x2c807a() {
            {
              for (var _0x1c700d, _0x67e8b6 = arguments.length, _0x3d710d = new Array(_0x67e8b6), _0x4f0385 = 0; _0x4f0385 < _0x67e8b6; _0x4f0385++) {
                _0x3d710d[_0x4f0385] = arguments[_0x4f0385];
              }
              (_0x1c700d = _0x2f2264.call.apply(_0x2f2264, [this].concat(_0x3d710d)) || this)._oldSize = _0x3fc175();
              _0x1c700d.lastCheckTime = 0;
              return _0x1c700d;
            }
          }
          _0x70de6d(_0x2c807a, _0x2f2264);
          var _0x504b0a = _0x2c807a.prototype;
          _0x504b0a.start = function () {
            this.adjustResolutionPolicy();
          };
          _0x504b0a.update = function (_0x14db10) {
            this.lastCheckTime += _0x14db10;
            this.lastCheckTime < 0.1 || (this.lastCheckTime = 0, this.adjustResolutionPolicy());
          };
          _0x504b0a.adjustResolutionPolicy = function () {
            var _0x12492a = _0x32bfe4.windowSize;
            if (!this._oldSize.equals(_0x12492a)) {
              var _0x5264bc = _0x12492a.width / _0x12492a.height;
              var _0x413981 = _0x3fb160.getDesignResolutionSize();
              _0x5264bc > _0x413981.width / _0x413981.height ? _0x3fb160.setResolutionPolicy(_0x3aeb52.FIXED_HEIGHT) : _0x3fb160.setResolutionPolicy(_0x3aeb52.FIXED_WIDTH);
              this._oldSize.set(_0x12492a);
            }
          };
          return _0x2c807a;
        }
      }(_0x5b3982)) || _0x15fe9e);
      _0x40c65a._RF.pop();
    }
  };
});
System.register("chunks:///_virtual/ResourceMgr.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], function (_0x400601) {
  var _0x310cda;
  var _0x2c70e5;
  var _0x10d7dd;
  return {
    setters: [function (_0x110881) {
      _0x310cda = _0x110881.createClass;
    }, function (_0x24181f) {
      _0x2c70e5 = _0x24181f.cclegacy;
      _0x10d7dd = _0x24181f.resources;
    }],
    execute: function () {
      _0x2c70e5._RF.push({}, "b666cLPxptFbq3Cc9VNNPIW", "ResourceMgr", undefined);
      var _0x6c2149 = function () {
        this.url = undefined;
        this.isLoading = false;
        this.callbackArr = [];
      };
      _0x400601("ResourceMgr", function () {
        function _0xd788ce() {
          this.loadingQueue = [];
        }
        _0xd788ce.prototype.loadRes = function (_0x59322b, _0x48d172, _0x2141ff) {
          var _0x35673d = this;
          var _0x140af3 = _0x10d7dd.get(_0x59322b, _0x48d172);
          if (_0x140af3) {
            _0x2141ff && setTimeout(function () {
              _0x2141ff(null, _0x140af3);
            }, 10);
          } else {
            {
              var _0x23fb12 = this.loadingQueue[_0x59322b];
              _0x23fb12 || ((_0x23fb12 = this.loadingQueue[_0x59322b] = new _0x6c2149()).url = _0x59322b);
              _0x23fb12.callbackArr.push(_0x2141ff);
              _0x23fb12.isLoading || (_0x23fb12.isLoading = true, _0x10d7dd.load(_0x59322b, _0x48d172, function (_0x4a01ee, _0x504b65) {
                for (var _0x21ee4e in delete _0x35673d.loadingQueue[_0x59322b], _0x23fb12.callbackArr) {
                  {
                    var _0x3f7a33 = _0x23fb12.callbackArr[_0x21ee4e];
                    _0x3f7a33 && _0x3f7a33(_0x4a01ee, _0x504b65);
                  }
                }
              }));
            }
          }
        };
        _0x310cda(_0xd788ce, null, [{
          key: "inst",
          get: function () {
            this._inst || (this._inst = new _0xd788ce());
            return this._inst;
          }
        }]);
        return _0xd788ce;
      }())._inst = null;
      _0x2c70e5._RF.pop();
    }
  };
});
System.register("chunks:///_virtual/Roller.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Utils.ts"], function (_0x2ad3b9) {
  var _0x532a4e;
  var _0xdaddcf;
  var _0x5f1a1e;
  var _0x3b83a2;
  var _0x5eb4e9;
  var _0x524863;
  var _0x145ae8;
  var _0xc0f253;
  var _0x38ac8f;
  return {
    setters: [function (_0x494293) {
      _0x532a4e = _0x494293.inheritsLoose;
      _0xdaddcf = _0x494293.asyncToGenerator;
      _0x5f1a1e = _0x494293.regeneratorRuntime;
    }, function (_0x297fbf) {
      _0x3b83a2 = _0x297fbf.cclegacy;
      _0x5eb4e9 = _0x297fbf._decorator;
      _0x524863 = _0x297fbf.MeshRenderer;
      _0x145ae8 = _0x297fbf.v3;
      _0xc0f253 = _0x297fbf.Component;
    }, function (_0x3931af) {
      _0x38ac8f = _0x3931af.wait;
    }],
    execute: function () {
      {
        var _0xc45ce5;
        _0x3b83a2._RF.push({}, "7f341EkPUdKCoh6AV0iRsNS", "Roller", undefined);
        var _0x1a3798 = _0x5eb4e9.ccclass;
        _0x5eb4e9.property;
        var _0x201fab = _0x2ad3b9("Status", function (_0x4d00ac) {
          _0x4d00ac[_0x4d00ac.Stop = 0] = "Stop";
          _0x4d00ac[_0x4d00ac.Start = 1] = "Start";
          _0x4d00ac[_0x4d00ac.Slow = 2] = "Slow";
          _0x4d00ac[_0x4d00ac.Fast = 3] = "Fast";
          return _0x4d00ac;
        }({}));
        _0x2ad3b9("Roller", _0x1a3798("Roller")(_0xc45ce5 = function (_0x1a6c55) {
          function _0x2a9d87() {
            for (var _0x15cb7b, _0x46d928 = arguments.length, _0x5a230a = new Array(_0x46d928), _0x29c353 = 0; _0x29c353 < _0x46d928; _0x29c353++) {
              _0x5a230a[_0x29c353] = arguments[_0x29c353];
            }
            (_0x15cb7b = _0x1a6c55.call.apply(_0x1a6c55, [this].concat(_0x5a230a)) || this).status = _0x201fab.Stop;
            _0x15cb7b.curSpeed = 0;
            _0x15cb7b.speedA = 350;
            _0x15cb7b.maxSpeed = 800;
            _0x15cb7b.minSpeed = 250;
            _0x15cb7b.fastRollTime = 1;
            _0x15cb7b.remainTime = 0;
            _0x15cb7b.waitTime = 0.5;
            _0x15cb7b.reaminWaitTime = 0;
            _0x15cb7b.index = 0;
            _0x15cb7b.targetIndex = 2;
            _0x15cb7b.rotate = 0;
            _0x15cb7b.upperDeg = -56;
            _0x15cb7b.lowerDeg = 85;
            _0x15cb7b.centerDeg = 18;
            _0x15cb7b.callback = undefined;
            _0x15cb7b.textureInfo = [];
            _0x15cb7b.textureLen = 0;
            _0x15cb7b.curMaterial = null;
            return _0x15cb7b;
          }
          _0x532a4e(_0x2a9d87, _0x1a6c55);
          var _0x1ef699 = _0x2a9d87.prototype;
          _0x1ef699.start = function () {
            var _0x3bb2d8 = this.node.getComponent(_0x524863).materials[0];
            this.curMaterial = _0x3bb2d8;
          };
          _0x1ef699.startMove = function () {
            var _0x2c3e2e = _0xdaddcf(_0x5f1a1e().mark(function _0x5e3d4e(_0x2c6cf8, _0x253cc7, _0x200428) {
              return _0x5f1a1e().wrap(function (_0x19cb2e) {
                for (;;) {
                  switch (_0x19cb2e.prev = _0x19cb2e.next) {
                    case 0:
                      this.textureInfo = _0x2c6cf8;
                      this.targetIndex = this.textureInfo.length - 1;
                      this.textureLen = _0x2c6cf8.length;
                      this.callback = _0x200428;
                      _0x19cb2e.next = 6;
                      return _0x38ac8f(_0x253cc7);
                    case 6:
                      this.changeStatus(_0x201fab.Start);
                    case 7:
                    case "end":
                      return _0x19cb2e.stop();
                  }
                }
              }, _0x5e3d4e, this);
            }));
            return function (_0x411c99, _0x2fe89f, _0x3c0bed) {
              return _0x2c3e2e.apply(this, arguments);
            };
          }();
          _0x1ef699.changeStatus = function (_0x389c9e) {
            if (_0x389c9e !== this.status) {
              switch (this.status = _0x389c9e, _0x389c9e) {
                case _0x201fab.Start:
                  this.reaminWaitTime = 0;
                  this.remainTime = 0;
                  this.curSpeed = 0;
                  break;
                case _0x201fab.Fast:
                  this.remainTime = this.fastRollTime;
                  break;
                case _0x201fab.Slow:
                  this.reaminWaitTime = this.waitTime;
                  break;
                case _0x201fab.Stop:
                  console.log("停在了", this.textureInfo[this.index].spId);
                  this.callback && this.callback(null);
              }
            }
          };
          _0x1ef699.setRotation = function (_0x2cc99e) {
            this.status !== _0x201fab.Stop && (_0x2cc99e >= this.lowerDeg && (_0x2cc99e = this.upperDeg, this.index++, this.index >= this.textureLen && (this.index = 0), this.reaminWaitTime <= 0 && this.status === _0x201fab.Slow && (this.index = this.textureLen - 1), this.curMaterial.setProperty("mainTexture", this.textureInfo[this.index].texture)), this.rotate = _0x2cc99e, this.node.setRotationFromEuler(_0x145ae8(_0x2cc99e, 0, 0)));
          };
          _0x1ef699.update = function (_0x42a618) {
            {
              switch (this.status) {
                case _0x201fab.Stop:
                  break;
                case _0x201fab.Start:
                  this.curSpeed = Math.min(this.maxSpeed, this.curSpeed + _0x42a618 * this.speedA);
                  this.curSpeed >= this.maxSpeed && this.changeStatus(_0x201fab.Fast);
                  break;
                case _0x201fab.Fast:
                  this.remainTime -= _0x42a618;
                  this.remainTime <= 0 && this.changeStatus(_0x201fab.Slow);
                  break;
                case _0x201fab.Slow:
                  this.curSpeed = Math.max(this.minSpeed, this.curSpeed - _0x42a618 * this.speedA);
                  this.reaminWaitTime -= _0x42a618;
                  this.reaminWaitTime <= 0 && this.index === this.targetIndex && Math.abs(this.rotate - this.centerDeg) < 2 && this.changeStatus(_0x201fab.Stop);
              }
              this.setRotation(this.rotate + this.curSpeed * _0x42a618);
            }
          };
          _0x1ef699.onEnable = function () {};
          _0x1ef699.onDisable = function () {};
          return _0x2a9d87;
        }(_0xc0f253)) || _0xc45ce5);
        _0x3b83a2._RF.pop();
      }
    }
  };
});
System.register("chunks:///_virtual/RulePanel.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Panel.ts", "./store.ts", "./decorators.ts"], function (_0x3248b5) {
  var _0x24b6a0;
  var _0x2ba8a7;
  var _0x2e7d6b;
  var _0x39408b;
  var _0x21cb00;
  var _0x4818fe;
  var _0xc8fdb;
  var _0x31d026;
  var _0x309553;
  var _0x136ab9;
  var _0x199d41;
  var _0x1527f3;
  var _0x265ac6;
  var _0x3b3bb3;
  var _0x4a9a4d;
  var _0x2c376d;
  return {
    setters: [function (_0x42d533) {
      {
        _0x24b6a0 = _0x42d533.applyDecoratedDescriptor;
        _0x2ba8a7 = _0x42d533.inheritsLoose;
        _0x2e7d6b = _0x42d533.initializerDefineProperty;
        _0x39408b = _0x42d533.assertThisInitialized;
        _0x21cb00 = _0x42d533.asyncToGenerator;
        _0x4818fe = _0x42d533.regeneratorRuntime;
      }
    }, function (_0x122049) {
      _0xc8fdb = _0x122049.cclegacy;
      _0x31d026 = _0x122049._decorator;
      _0x309553 = _0x122049.Node;
      _0x136ab9 = _0x122049.RichText;
      _0x199d41 = _0x122049.UITransform;
      _0x1527f3 = _0x122049.Button;
    }, function (_0xa4ccd6) {
      {
        _0x265ac6 = _0xa4ccd6.default;
      }
    }, function (_0x3ce699) {
      _0x3b3bb3 = _0x3ce699.default;
    }, function (_0x48fb50) {
      _0x4a9a4d = _0x48fb50.observer;
      _0x2c376d = _0x48fb50.render;
    }],
    execute: function () {
      var _0x23c22d;
      var _0x44f2ca;
      var _0x32c1ba;
      var _0x4422a3;
      var _0x2ef3d6;
      var _0x418e17;
      var _0x552bc7;
      var _0x36296f;
      var _0x5d36cd;
      var _0x3ee09f;
      _0xc8fdb._RF.push({}, "fbcc1s8CHlK1IBn1pSOdYjY", "RulePanel", undefined);
      var _0xb09b85 = _0x31d026.ccclass;
      var _0x4548e3 = _0x31d026.property;
      _0x3248b5("default", (_0x23c22d = _0xb09b85("RulePanel"), _0x44f2ca = _0x4548e3(_0x309553), _0x32c1ba = _0x4548e3(_0x309553), _0x4422a3 = _0x4548e3(_0x309553), _0x4a9a4d(_0x2ef3d6 = _0x23c22d(((_0x3ee09f = function (_0x461d83) {
        function _0x156b64() {
          {
            for (var _0x5415f4, _0x539592 = arguments.length, _0x354475 = new Array(_0x539592), _0xe865c8 = 0; _0xe865c8 < _0x539592; _0xe865c8++) {
              _0x354475[_0xe865c8] = arguments[_0xe865c8];
            }
            _0x5415f4 = _0x461d83.call.apply(_0x461d83, [this].concat(_0x354475)) || this;
            _0x2e7d6b(_0x5415f4, "closeBtn", _0x552bc7, _0x39408b(_0x5415f4));
            _0x2e7d6b(_0x5415f4, "ruleNode", _0x36296f, _0x39408b(_0x5415f4));
            _0x2e7d6b(_0x5415f4, "content", _0x5d36cd, _0x39408b(_0x5415f4));
            _0x5415f4.clickClose = function () {
              _0x5415f4.hidePanel();
            };
            return _0x5415f4;
          }
        }
        _0x2ba8a7(_0x156b64, _0x461d83);
        var _0xaf5741 = _0x156b64.prototype;
        _0xaf5741.onLoad = function () {
          {
            var _0x2c8c2c = _0x21cb00(_0x4818fe().mark(function _0x13c373() {
              return _0x4818fe().wrap(function (_0x5c208a) {
                for (;;) {
                  switch (_0x5c208a.prev = _0x5c208a.next) {
                    case 0:
                      _0x5c208a.next = 2;
                      return _0x3b3bb3.updateRule();
                    case 2:
                      this.closeBtn.on(_0x1527f3.EventType.CLICK, this.clickClose);
                    case 3:
                    case "end":
                      return _0x5c208a.stop();
                  }
                }
              }, _0x13c373, this);
            }));
            return function () {
              return _0x2c8c2c.apply(this, arguments);
            };
          }
        }();
        _0xaf5741.render = function () {
          this.setRuleTxt(_0x3b3bb3.ruleInfo);
        };
        _0xaf5741.setRuleTxt = function (_0x120e11) {
          var _0x206cef = this;
          var _0x4bed98 = this.ruleNode.getComponent(_0x136ab9);
          _0x4bed98.maxWidth = this.content.getComponent(_0x199d41).width;
          this.scheduleOnce(function () {
            _0x4bed98.string = _0x120e11.replace(/<p\b.*?(?:\>|\/>)/gi, "").replace(/<\/p\>/gi, "<br/>");
            _0x206cef.content.getComponent(_0x199d41).height = _0x206cef.ruleNode.getComponent(_0x199d41).height;
          }, 0.5);
        };
        return _0x156b64;
      }(_0x265ac6)).bundle = "RulePanel", _0x3ee09f.skin = "RulePanel", _0x552bc7 = _0x24b6a0((_0x418e17 = _0x3ee09f).prototype, "closeBtn", [_0x44f2ca], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x36296f = _0x24b6a0(_0x418e17.prototype, "ruleNode", [_0x32c1ba], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x5d36cd = _0x24b6a0(_0x418e17.prototype, "content", [_0x4422a3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x24b6a0(_0x418e17.prototype, "render", [_0x2c376d], Object.getOwnPropertyDescriptor(_0x418e17.prototype, "render"), _0x418e17.prototype), _0x2ef3d6 = _0x418e17)) || _0x2ef3d6) || _0x2ef3d6));
      _0xc8fdb._RF.pop();
    }
  };
});
System.register("chunks:///_virtual/RuleScene.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Scene.ts", "./UIFast.ts", "./store.ts", "./MainGame.ts", "./Utils.ts"], function (_0x3524fd) {
  var _0x1ff471;
  var _0x3991d5;
  var _0x2e1076;
  var _0x15385d;
  var _0xf8a163;
  var _0x32e62b;
  var _0x5f1bb2;
  var _0x2ade18;
  var _0x4af16c;
  var _0x20c636;
  var _0x5566bf;
  var _0x45f3d7;
  var _0x52428b;
  var _0x2dfe5a;
  var _0x4bef33;
  var _0x146d1a;
  var _0x94f1ed;
  return {
    setters: [function (_0x47b0b5) {
      {
        _0x1ff471 = _0x47b0b5.applyDecoratedDescriptor;
        _0x3991d5 = _0x47b0b5.inheritsLoose;
        _0x2e1076 = _0x47b0b5.initializerDefineProperty;
        _0x15385d = _0x47b0b5.assertThisInitialized;
        _0xf8a163 = _0x47b0b5.asyncToGenerator;
        _0x32e62b = _0x47b0b5.regeneratorRuntime;
      }
    }, function (_0x5f59ab) {
      _0x5f1bb2 = _0x5f59ab.cclegacy;
      _0x2ade18 = _0x5f59ab._decorator;
      _0x4af16c = _0x5f59ab.Node;
      _0x20c636 = _0x5f59ab.Sprite;
      _0x5566bf = _0x5f59ab.Button;
      _0x45f3d7 = _0x5f59ab.game;
    }, function (_0xd31b61) {
      _0x52428b = _0xd31b61.default;
    }, function (_0x346c5f) {
      _0x2dfe5a = _0x346c5f.changeScene;
    }, function (_0x4c4b47) {
      _0x4bef33 = _0x4c4b47.default;
    }, function (_0x41e7d8) {
      _0x146d1a = _0x41e7d8.MainGame;
    }, function (_0x213622) {
      _0x94f1ed = _0x213622._asyncThrottle;
    }],
    execute: function () {
      var _0x48762e;
      var _0x26139a;
      var _0x50fcf0;
      var _0x140334;
      var _0x2b6516;
      var _0x1cf9ac;
      var _0x557ef8;
      var _0x231772;
      var _0x8cef7e;
      var _0xaa5eb7;
      _0x5f1bb2._RF.push({}, "168512A9xVJW4AacZoSXP65", "RuleScene", undefined);
      var _0x1a71a5 = _0x2ade18.ccclass;
      var _0x10fdbf = _0x2ade18.property;
      _0x3524fd("RuleScene", (_0x48762e = _0x1a71a5("RuleScene"), _0x26139a = _0x10fdbf(_0x4af16c), _0x50fcf0 = _0x10fdbf(_0x4af16c), _0x140334 = _0x10fdbf(_0x20c636), _0x48762e(((_0xaa5eb7 = function (_0x5071a7) {
        function _0x9a6dc5() {
          {
            for (var _0x3ef203, _0x34b7f0 = arguments.length, _0x25f47a = new Array(_0x34b7f0), _0x3b4a3b = 0; _0x3b4a3b < _0x34b7f0; _0x3b4a3b++) {
              _0x25f47a[_0x3b4a3b] = arguments[_0x3b4a3b];
            }
            _0x3ef203 = _0x5071a7.call.apply(_0x5071a7, [this].concat(_0x25f47a)) || this;
            _0x2e1076(_0x3ef203, "content", _0x557ef8, _0x15385d(_0x3ef203));
            _0x2e1076(_0x3ef203, "back", _0x231772, _0x15385d(_0x3ef203));
            _0x2e1076(_0x3ef203, "sprite", _0x8cef7e, _0x15385d(_0x3ef203));
            _0x3ef203.dom = null;
            _0x3ef203.clickClose = _0x94f1ed(_0xf8a163(_0x32e62b().mark(function _0xcf93ae() {
              return _0x32e62b().wrap(function (_0x59f84e) {
                for (;;) {
                  switch (_0x59f84e.prev = _0x59f84e.next) {
                    case 0:
                      _0x59f84e.next = 2;
                      return _0x2dfe5a(_0x146d1a);
                    case 2:
                      _0x3ef203.dom && _0x3ef203.dom.remove();
                      delete window.__tempClick;
                    case 4:
                    case "end":
                      return _0x59f84e.stop();
                  }
                }
              }, _0xcf93ae);
            })));
            return _0x3ef203;
          }
        }
        _0x3991d5(_0x9a6dc5, _0x5071a7);
        var _0x284b2f = _0x9a6dc5.prototype;
        _0x284b2f.onLoad = function () {
          this.back.on(_0x5566bf.EventType.CLICK, this.clickClose, this);
        };
        _0x284b2f.start = function () {
          var _0x2d4e8a = _0xf8a163(_0x32e62b().mark(function _0x7cd0e4() {
            var _0x13131a;
            return _0x32e62b().wrap(function (_0x5cde93) {
              for (;;) {
                switch (_0x5cde93.prev = _0x5cde93.next) {
                  case 0:
                    _0x13131a = _0x4bef33.homeInfo.actRuleImage;
                    this.dom || (this.dom = document.createElement("div"));
                    window.__tempClick = this.clickClose;
                    this.dom.innerHTML = "<div style=\"\n            position: absolute;\n            left: 0;\n            top: 0;\n            width: 100%;\n            height: 100%;\n            overflow: auto;\n            background-color: white;\n        \">\n            <img\n                src=\"" + _0x13131a + "\"\n                style=\"width: 100%;\"\n            >\n        </div>\n        <div \n            onclick=\"window.__tempClick()\"\n            style=\"\n                position: absolute;\n                left: 0.24rem;\n                top: 0.24rem;\n                width: 0.61rem;\n                height: 0.61rem;\n                background-image: url('https://yun.duiba.com.cn/polaris/%E8%BF%94%E5%9B%9E.146845aed591fe4edb8521a9f4bf0359fed1179e.png');\n                background-size: 100% 100%;\n                background-repeat: no-repeat;\n             \"\n        ></div>\n        ";
                    _0x45f3d7.container.appendChild(this.dom);
                  case 5:
                  case "end":
                    return _0x5cde93.stop();
                }
              }
            }, _0x7cd0e4, this);
          }));
          return function () {
            return _0x2d4e8a.apply(this, arguments);
          };
        }();
        _0x284b2f.onDestroy = function () {};
        return _0x9a6dc5;
      }(_0x52428b)).bundle = "RuleScene", _0xaa5eb7.skin = "RuleScene", _0x557ef8 = _0x1ff471((_0x1cf9ac = _0xaa5eb7).prototype, "content", [_0x26139a], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x231772 = _0x1ff471(_0x1cf9ac.prototype, "back", [_0x50fcf0], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x8cef7e = _0x1ff471(_0x1cf9ac.prototype, "sprite", [_0x140334], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x2b6516 = _0x1cf9ac)) || _0x2b6516));
      _0x5f1bb2._RF.pop();
    }
  };
});
System.register("chunks:///_virtual/SafeJSON.ts", ["cc"], function (_0x4871ee) {
  var _0x1737fb;
  return {
    setters: [function (_0xf2f45f) {
      _0x1737fb = _0xf2f45f.cclegacy;
    }],
    execute: function () {
      _0x1737fb._RF.push({}, "2aad8l/WzBPTIhr1W6SB9Pt", "SafeJSON", undefined);
      _0x4871ee("SafeJSON", function () {
        {
          function _0x4fba52() {}
          _0x4fba52.parse = function (_0x49ce34, _0xd3e6d7) {
            try {
              return JSON.parse(_0x49ce34, _0xd3e6d7);
            } catch (_0x22d6ed) {
              console.log(_0x22d6ed);
              return null;
            }
          };
          _0x4fba52.stringify = function (_0x2ef231, _0x19839e, _0x14ca09) {
            try {
              return JSON.stringify(_0x2ef231, _0x19839e, _0x14ca09);
            } catch (_0x10e78c) {
              return "";
            }
          };
          return _0x4fba52;
        }
      }());
      _0x1737fb._RF.pop();
    }
  };
});
System.register("chunks:///_virtual/Scene.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Module.ts"], function (_0x288db3) {
  var _0x1fca6f;
  var _0x2f633c;
  var _0x1ba273;
  var _0x45542b;
  return {
    setters: [function (_0xef6d6d) {
      {
        _0x1fca6f = _0xef6d6d.inheritsLoose;
      }
    }, function (_0x5603de) {
      _0x2f633c = _0x5603de.cclegacy;
      _0x1ba273 = _0x5603de._decorator;
    }, function (_0x345cf7) {
      _0x45542b = _0x345cf7.default;
    }],
    execute: function () {
      var _0x16e605;
      _0x2f633c._RF.push({}, "61b510UK1BAArhAGfKaHO0v", "Scene", undefined);
      var _0x22329d = _0x1ba273.ccclass;
      _0x1ba273.property;
      _0x288db3("default", _0x22329d()(_0x16e605 = function (_0x50bb70) {
        function _0x1c5436() {
          return _0x50bb70.apply(this, arguments) || this;
        }
        _0x1fca6f(_0x1c5436, _0x50bb70);
        return _0x1c5436;
      }(_0x45542b)) || _0x16e605);
      _0x2f633c._RF.pop();
    }
  };
});
System.register("chunks:///_virtual/SceneUtils.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], function (_0xd9793c) {
  var _0x17b261;
  var _0x2b503b;
  var _0x43f6a8;
  var _0x5b70df;
  var _0x48b6b7;
  return {
    setters: [function (_0x3a3729) {
      _0x17b261 = _0x3a3729.asyncToGenerator;
      _0x2b503b = _0x3a3729.regeneratorRuntime;
    }, function (_0x1730f2) {
      _0x43f6a8 = _0x1730f2.cclegacy;
      _0x5b70df = _0x1730f2.director;
      _0x48b6b7 = _0x1730f2.assetManager;
    }],
    execute: function () {
      {
        _0x43f6a8._RF.push({}, "a97b9Z9/ixN3o1FLVqGpfE9", "SceneUtils", undefined);
        _0xd9793c("SceneUtil", function () {
          function _0x47a856() {}
          _0x47a856.reloadScene = function () {
            var _0xd568c3 = _0x17b261(_0x2b503b().mark(function _0x4020b0() {
              return _0x2b503b().wrap(function (_0x3cfca9) {
                for (;;) {
                  switch (_0x3cfca9.prev = _0x3cfca9.next) {
                    case 0:
                      return _0x3cfca9.abrupt("return", new Promise(function (_0x2281a8, _0x211800) {
                        _0x5b70df.loadScene(_0x5b70df.getScene().name, function () {
                          _0x2281a8(true);
                        });
                      }));
                    case 1:
                    case "end":
                      return _0x3cfca9.stop();
                  }
                }
              }, _0x4020b0);
            }));
            return function () {
              {
                return _0xd568c3.apply(this, arguments);
              }
            };
          }();
          _0x47a856.loadScene = function () {
            var _0x7f1e8 = _0x17b261(_0x2b503b().mark(function _0x5a7864(_0x5b4d42) {
              return _0x2b503b().wrap(function (_0xf8728a) {
                for (;;) {
                  switch (_0xf8728a.prev = _0xf8728a.next) {
                    case 0:
                      return _0xf8728a.abrupt("return", new Promise(function (_0x3b827c, _0xd06fca) {
                        _0x48b6b7.getBundle(_0x5b4d42.bundle) ? _0x5b70df.loadScene(_0x5b4d42.name, function () {
                          _0x3b827c(true);
                        }) : _0x48b6b7.loadBundle(_0x5b4d42.bundle, function (_0x3e285a, _0x38743b) {
                          _0x38743b && _0x5b70df.loadScene(_0x5b4d42.name, function () {
                            _0x3b827c(true);
                          });
                        });
                      }));
                    case 1:
                    case "end":
                      return _0xf8728a.stop();
                  }
                }
              }, _0x5a7864);
            }));
            return function (_0x3e192a) {
              return _0x7f1e8.apply(this, arguments);
            };
          }();
          return _0x47a856;
        }());
        _0x43f6a8._RF.pop();
      }
    }
  };
});
System.register("chunks:///_virtual/shareStore.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./index.mjs_cjs=&original=.js", "./webTools.ts", "./WebNet.ts", "./store.ts", "./UIFast.ts", "./index.js"], function (_0x43860a) {
  var _0x1ebb3c;
  var _0x493992;
  var _0x39eca3;
  var _0x353d3d;
  var _0x30d0cc;
  var _0x247fd8;
  var _0x2fce2a;
  var _0x35330b;
  var _0x4e293c;
  var _0x41d68a;
  var _0x42e148;
  var _0x59e94d;
  return {
    setters: [function (_0x2b5166) {
      _0x1ebb3c = _0x2b5166.asyncToGenerator;
      _0x493992 = _0x2b5166.regeneratorRuntime;
    }, function (_0x58cb35) {
      _0x39eca3 = _0x58cb35.cclegacy;
      _0x353d3d = _0x58cb35.assetManager;
      _0x30d0cc = _0x58cb35.Texture2D;
      _0x247fd8 = _0x58cb35.SpriteFrame;
    }, null, function (_0x1c4cd9) {
      _0x2fce2a = _0x1c4cd9.getUrlParams;
    }, function (_0x5c9ea4) {
      _0x35330b = _0x5c9ea4.sendWebNet;
      _0x4e293c = _0x5c9ea4.WebNetName;
    }, function (_0x55e393) {
      {
        _0x41d68a = _0x55e393.default;
      }
    }, function (_0x59c32) {
      _0x42e148 = _0x59c32.showShareGuide;
    }, function (_0x2fbe14) {
      _0x59e94d = _0x2fbe14.default;
    }],
    execute: function () {
      _0x39eca3._RF.push({}, "42b687AEL5C27f/88bfrjvS", "shareStore", undefined);
      var _0xedabd1 = _0x59e94d.makeAutoObservable;
      _0x43860a("default", _0xedabd1(new (function () {
        function _0xbaa3cc() {
          this.inviteInfo = {
            shareUrl: "",
            inviteCode: "",
            qrCode: ""
          };
        }
        var _0x24828f = _0xbaa3cc.prototype;
        _0x24828f.genInviteInfo = function () {
          var _0x1b8854 = _0x1ebb3c(_0x493992().mark(function _0x6de88c() {
            {
              var _0x207efb;
              var _0x49d54b;
              var _0x5f2c86;
              var _0x4cd22a;
              var _0x3d8cfe;
              var _0x4e67f0;
              var _0x287bfa;
              var _0x51c354;
              var _0x30da24 = this;
              return _0x493992().wrap(function (_0x5a4604) {
                for (;;) {
                  switch (_0x5a4604.prev = _0x5a4604.next) {
                    case 0:
                      this.inviteInfo.shareUrl = "" + location.origin + location.pathname + "?appID=" + _0x2fce2a("appID");
                      _0x5a4604.next = 3;
                      return _0x35330b(_0x4e293c.getInviteCode);
                    case 3:
                      _0x207efb = _0x5a4604.sent;
                      _0x49d54b = _0x207efb.success;
                      _0x5f2c86 = _0x207efb.data;
                      _0x49d54b || (this.inviteInfo.inviteCode = _0x5f2c86.inviteCode);
                      _0x4cd22a = _0x2fce2a("type") || "1";
                      this.inviteInfo.shareUrl = _0x41d68a.frontVariable.loginUrl + "&inviteCode=" + _0x5f2c86.inviteCode + "&type=" + _0x4cd22a;
                      null;
                      _0x3d8cfe = "package/pages/snake-fun-play/index?inviteCode=" + _0x5f2c86.inviteCode;
                      _0x5a4604.next = 13;
                      return _0x35330b(_0x4e293c.genQrCode, {
                        path: _0x3d8cfe,
                        type: _0x4cd22a,
                        envVersion: "trial"
                      });
                    case 13:
                      _0x4e67f0 = _0x5a4604.sent;
                      _0x287bfa = _0x4e67f0.success;
                      _0x51c354 = _0x4e67f0.data;
                      _0x287bfa && (this.inviteInfo.qrCode = _0x51c354.result, _0x353d3d.loadRemote(_0x51c354.result, function (_0x205215, _0x5e7cdb) {
                        if (!_0x205215) {
                          var _0x10a215 = new _0x30d0cc();
                          _0x10a215.image = _0x5e7cdb;
                          var _0x2f89df = new _0x247fd8();
                          _0x2f89df.texture = _0x10a215;
                          _0x30da24.inviteInfo.qrCode = _0x2f89df;
                        }
                      }));
                    case 17:
                    case "end":
                      return _0x5a4604.stop();
                  }
                }
              }, _0x6de88c, this);
            }
          }));
          return function () {
            return _0x1b8854.apply(this, arguments);
          };
        }();
        _0x24828f.doShare = function (_0x3901e8) {
          var _0x260658;
          undefined === _0x3901e8 && (_0x3901e8 = true);
          _0x3901e8 && _0x42e148();
          var _0x24b8c8 = (null == (_0x260658 = _0x41d68a.frontVariable) ? undefined : _0x260658.shareInfo) || {};
          var _0x16183a = {
            data: {
              title: _0x24b8c8.title,
              desc: _0x24b8c8.content,
              imgUrl: _0x24b8c8.thumbnail,
              link: location.origin + location.pathname + "?appID=" + _0x2fce2a("appID")
            }
          };
          console.log("postMessage参数", _0x16183a);
          wx.miniProgram.postMessage(_0x16183a);
        };
        return _0xbaa3cc;
      }())()));
      _0x39eca3._RF.pop();
    }
  };
});
System.register("chunks:///_virtual/SpriteHooks.ts", ["cc"], function () {
  var _0xd43ca6;
  var _0x4118eb;
  var _0x4cf6d2;
  var _0x46dd34;
  var _0x414911;
  return {
    setters: [function (_0x5a06f7) {
      _0xd43ca6 = _0x5a06f7.cclegacy;
      _0x4118eb = _0x5a06f7.Sprite;
      _0x4cf6d2 = _0x5a06f7.assetManager;
      _0x46dd34 = _0x5a06f7.Texture2D;
      _0x414911 = _0x5a06f7.SpriteFrame;
    }],
    execute: function () {
      {
        _0xd43ca6._RF.push({}, "99940olIwZKCIMGBHZZq96a", "SpriteHooks", undefined);
        var _0x796d46 = {};
        _0x4118eb.prototype._spriteFrameId = 0;
        Object.defineProperty(_0x4118eb.prototype, "spriteFrame", {
          set: function (_0x97d02d) {
            var _0x2ea87e = this;
            if (this._spriteFrame !== _0x97d02d) {
              var _0x41be8c;
              var _0x4884e6 = ++this._spriteFrameId;
              if ("string" == typeof _0x97d02d) {
                (_0x41be8c = _0x97d02d, new Promise(function (_0x1923cd, _0x12fd50) {
                  if (!_0x41be8c) {
                    _0x1923cd(null);
                    return null;
                  }
                  _0x796d46[_0x41be8c] ? _0x1923cd(_0x796d46[_0x41be8c]) : _0x4cf6d2.loadRemote(_0x41be8c, function (_0x6c3b08, _0x345135) {
                    if (!_0x6c3b08) {
                      var _0x44db09 = new _0x46dd34();
                      _0x44db09.image = _0x345135;
                      var _0x4e9905 = new _0x414911();
                      _0x4e9905.texture = _0x44db09;
                      _0x796d46[_0x41be8c] = _0x4e9905;
                      _0x1923cd(_0x4e9905);
                    }
                  });
                })).then(function (_0x3f2a1c) {
                  if (_0x4884e6 === _0x2ea87e._spriteFrameId) {
                    var _0xaf030e = _0x2ea87e._spriteFrame;
                    _0x2ea87e._spriteFrame = _0x3f2a1c;
                    _0x2ea87e.markForUpdateRenderData();
                    _0x2ea87e._applySpriteFrame(_0xaf030e);
                  }
                });
              } else {
                var _0x517a40 = this._spriteFrame;
                this._spriteFrame = _0x97d02d;
                this.markForUpdateRenderData();
                this._applySpriteFrame(_0x517a40);
              }
            }
          }
        });
        _0xd43ca6._RF.pop();
      }
    }
  };
});
System.register("chunks:///_virtual/Start.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./UIMgr.ts", "./UIFast.ts", "./MusicBtn.ts", "./ZipLoader.ts", "./store.ts", "./LoaderTools.ts", "./AudioMgr.ts", "./MainGame.ts", "./WebNet.ts", "./shareStore.ts"], function (_0x44d935) {
  var _0x58991d;
  var _0x3f5d24;
  var _0x432be0;
  var _0x8aef75;
  var _0x3a921a;
  var _0x2819b8;
  var _0x355d6b;
  var _0x3d38c4;
  var _0x373c20;
  var _0x81ec4d;
  var _0x1017f5;
  var _0x56eb88;
  var _0xa4da77;
  var _0x3a9661;
  var _0x3d0198;
  var _0x28a698;
  var _0x487b6a;
  var _0x3c2651;
  var _0x1631c7;
  var _0x3e36d1;
  var _0x391f66;
  var _0x137138;
  var _0x2bb7ce;
  var _0x526878;
  var _0x3f00ed;
  return {
    setters: [function (_0x158073) {
      _0x58991d = _0x158073.applyDecoratedDescriptor;
      _0x3f5d24 = _0x158073.inheritsLoose;
      _0x432be0 = _0x158073.initializerDefineProperty;
      _0x8aef75 = _0x158073.assertThisInitialized;
      _0x3a921a = _0x158073.asyncToGenerator;
      _0x2819b8 = _0x158073.regeneratorRuntime;
    }, function (_0x5b8f5c) {
      _0x355d6b = _0x5b8f5c.cclegacy;
      _0x3d38c4 = _0x5b8f5c._decorator;
      _0x373c20 = _0x5b8f5c.Prefab;
      _0x81ec4d = _0x5b8f5c.ProgressBar;
      _0x1017f5 = _0x5b8f5c.Label;
      _0x56eb88 = _0x5b8f5c.lerp;
      _0xa4da77 = _0x5b8f5c.Component;
    }, function (_0xc9d3b4) {
      _0x3a9661 = _0xc9d3b4.UIMgr;
    }, function (_0x85fe0) {
      _0x3d0198 = _0x85fe0.changeScene;
    }, function (_0x53c37f) {
      _0x28a698 = _0x53c37f.MusicBtn;
    }, function (_0x5b41d4) {
      _0x487b6a = _0x5b41d4.default;
    }, function (_0x214a4f) {
      _0x3c2651 = _0x214a4f.default;
    }, function (_0x11b52a) {
      _0x1631c7 = _0x11b52a.preload;
      _0x3e36d1 = _0x11b52a.getPreLoadList;
    }, function (_0x510539) {
      _0x391f66 = _0x510539.AudioMgr;
    }, function (_0x4f782e) {
      _0x137138 = _0x4f782e.MainGame;
    }, function (_0x5e5448) {
      {
        _0x2bb7ce = _0x5e5448.sendLog;
        _0x526878 = _0x5e5448.LOG_TYPE;
      }
    }, function (_0x3193d1) {
      _0x3f00ed = _0x3193d1.default;
    }],
    execute: function () {
      var _0x538bd2;
      var _0x54c259;
      var _0x4131f3;
      var _0x4db9a9;
      var _0x390f09;
      var _0x2ee02c;
      var _0x37705c;
      var _0x1d5ba0;
      var _0x113c99;
      _0x355d6b._RF.push({}, "66e163GxmdDp7kaguqDvTVl", "Start", undefined);
      var _0x37eaeb = _0x3d38c4.ccclass;
      var _0x5422de = _0x3d38c4.property;
      _0x44d935("Start", (_0x538bd2 = _0x37eaeb("Start"), _0x54c259 = _0x5422de(_0x373c20), _0x4131f3 = _0x5422de(_0x81ec4d), _0x4db9a9 = _0x5422de(_0x1017f5), _0x538bd2((_0x37705c = _0x58991d((_0x2ee02c = function (_0xf8df41) {
        function _0xa4fa0d() {
          for (var _0x400246, _0x105562 = arguments.length, _0x33372d = new Array(_0x105562), _0x1ddd97 = 0; _0x1ddd97 < _0x105562; _0x1ddd97++) {
            _0x33372d[_0x1ddd97] = arguments[_0x1ddd97];
          }
          _0x400246 = _0xf8df41.call.apply(_0xf8df41, [this].concat(_0x33372d)) || this;
          _0x432be0(_0x400246, "uiPrefab", _0x37705c, _0x8aef75(_0x400246));
          _0x432be0(_0x400246, "progressBar", _0x1d5ba0, _0x8aef75(_0x400246));
          _0x432be0(_0x400246, "progressTxt", _0x113c99, _0x8aef75(_0x400246));
          _0x400246.setProgress = function (_0x4b669a) {
            _0x400246.progressBar.progress = _0x4b669a;
            _0x400246.progressTxt.string = "加载中（" + Math.round(100 * _0x4b669a) + "%）...";
          };
          return _0x400246;
        }
        _0x3f5d24(_0xa4fa0d, _0xf8df41);
        var _0x2eea87 = _0xa4fa0d.prototype;
        _0x2eea87.onLoad = function () {
          var _0x947811 = _0x3a921a(_0x2819b8().mark(function _0x1553e6() {
            return _0x2819b8().wrap(function (_0x2f6f0a) {
              for (;;) {
                switch (_0x2f6f0a.prev = _0x2f6f0a.next) {
                  case 0:
                    _0x3a9661.ins.setup(this.uiPrefab);
                    _0x28a698.open = "false" != localStorage.getItem("MusicStatus");
                    _0x28a698.setMusicOpen(_0x28a698.open);
                    document.getElementById("GameDiv").style.overflow = "visible";
                    _0x2bb7ce(_0x526878.EXPOSURE, 1);
                    _0x2f6f0a.next = 8;
                    return _0x3c2651.updateFrontVariable();
                  case 8:
                    _0x3f00ed.doShare(false);
                  case 9:
                  case "end":
                    return _0x2f6f0a.stop();
                }
              }
            }, _0x1553e6, this);
          }));
          return function () {
            return _0x947811.apply(this, arguments);
          };
        }();
        _0x2eea87.onDestroy = function () {};
        _0x2eea87.loadZipBundle = function (_0x15d84f, _0x3fb3de) {
          var _0x306de2 = this;
          var _0x1b3c24 = window.zipBundle || [];
          var _0x46a38c = 0;
          var _0x1913c5 = _0x1b3c24.map(function (_0x26b281) {
            return _0x487b6a.ins.loadZip(window.__remoteUrl__ + "remote/" + _0x26b281).then(function () {
              _0x46a38c++;
              _0x306de2.setProgress(_0x56eb88(_0x15d84f, _0x3fb3de, _0x46a38c / _0x1b3c24.length));
            });
          });
          return Promise.all(_0x1913c5);
        };
        _0x2eea87.start = function () {
          var _0x4d6a0f = _0x3a921a(_0x2819b8().mark(function _0x33e1d2() {
            var _0x2a0ae3;
            var _0x48231d;
            return _0x2819b8().wrap(function (_0x5e913e) {
              for (;;) {
                switch (_0x5e913e.prev = _0x5e913e.next) {
                  case 0:
                    this.setProgress(0.05);
                    _0x2a0ae3 = [{
                      path: "common",
                      type: "bundle"
                    }, {
                      path: "TaskPanel",
                      type: "bundle"
                    }, {
                      path: "GuidePanel",
                      type: "bundle"
                    }, {
                      path: "MainGame",
                      type: "bundle"
                    }];
                    _0x5e913e.next = 4;
                    return _0x3e36d1(_0x2a0ae3, this.setProgress, 0.05, 0.2);
                  case 4:
                    _0x48231d = _0x5e913e.sent;
                    _0x5e913e.next = 7;
                    return _0x1631c7(_0x48231d, this.setProgress, 0.2, 1);
                  case 7:
                    _0x5e913e.next = 9;
                    return _0x3c2651.updateIndex();
                  case 9:
                    _0x5e913e.next = 11;
                    return _0x3d0198(_0x137138, {
                      from: "Loading"
                    });
                  case 11:
                    _0x391f66.ins.play("audio/秒来劲", {
                      loop: true,
                      bundleName: "common"
                    });
                  case 12:
                  case "end":
                    return _0x5e913e.stop();
                }
              }
            }, _0x33e1d2, this);
          }));
          return function () {
            return _0x4d6a0f.apply(this, arguments);
          };
        }();
        return _0xa4fa0d;
      }(_0xa4da77)).prototype, "uiPrefab", [_0x54c259], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _0x1d5ba0 = _0x58991d(_0x2ee02c.prototype, "progressBar", [_0x4131f3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _0x113c99 = _0x58991d(_0x2ee02c.prototype, "progressTxt", [_0x4db9a9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x390f09 = _0x2ee02c)) || _0x390f09));
      _0x355d6b._RF.pop();
    }
  };
});
System.register("chunks:///_virtual/store.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./index.mjs_cjs=&original=.js", "./WebNet.ts", "./UIFast.ts", "./webTools.ts", "./Crypto.ts", "./NetTime.ts", "./index.js"], function (_0x358ef5) {
  var _0x4bf143;
  var _0x3b8489;
  var _0x5984b4;
  var _0x15b975;
  var _0x9d8537;
  var _0x3c1789;
  var _0x58e739;
  var _0x355b17;
  var _0x3f8959;
  var _0x4f54d5;
  var _0x5e6b35;
  return {
    setters: [function (_0x2798e6) {
      _0x4bf143 = _0x2798e6.asyncToGenerator;
      _0x3b8489 = _0x2798e6.regeneratorRuntime;
    }, function (_0x38ae96) {
      _0x5984b4 = _0x38ae96.cclegacy;
    }, null, function (_0x19ab7a) {
      _0x15b975 = _0x19ab7a.sendWebNet;
      _0x9d8537 = _0x19ab7a.WebNetName;
      _0x3c1789 = _0x19ab7a.sendWebNetWithToken;
    }, function (_0x4b9352) {
      _0x58e739 = _0x4b9352.showToast;
    }, function (_0x347792) {
      _0x355b17 = _0x347792.getUrlParams;
    }, function (_0x52185d) {
      _0x3f8959 = _0x52185d.AESDecrypt;
    }, function (_0x310331) {
      {
        _0x4f54d5 = _0x310331.NetTime;
      }
    }, function (_0x4a0b12) {
      _0x5e6b35 = _0x4a0b12.default;
    }],
    execute: function () {
      _0x5984b4._RF.push({}, "6b358y0QTVO+7n9UotsErSq", "store", undefined);
      var _0x321d9b = _0x5e6b35.makeAutoObservable;
      _0x358ef5("default", _0x321d9b(new (function () {
        function _0xda53de() {
          var _0x2710c8 = this;
          this.frontVariable = {};
          this.homeInfo = {
            actEndTime: 0,
            actStartTime: 0,
            avatar: "",
            benefitDesc: "",
            boolJoinRank: false,
            lastPeriodSettlementTime: 0,
            continueSignDays: 0,
            creditsNum: 0,
            currentEnergy: {
              eachEnergyTime: 0,
              energyLimit: 0,
              exchangeEnergyConfigs: {
                awardNum: 0,
                creditNum: 0,
                id: 0
              },
              fullEnergyTime: 0,
              initEnergy: 0
            },
            currentMultiple: {
              awardGoldNum: 0,
              awardNormalNum: 0,
              doubleEndTime: 0,
              doubleStartTime: 0,
              rate: 0
            },
            currentPoolGoldNum: 0,
            currentPoolNormalNum: 0,
            eachLuckCredits: 0,
            firstEntryFlag: false,
            goldNum: 0,
            luckBenefitDesc: "",
            newGetSpId: "",
            newGetSpImage: "",
            newGetSpName: "",
            nickname: "",
            normalNum: 0,
            poolConfig: {
              goldNum: 0,
              normalNum: 0
            },
            rankInfos: [],
            rankPopList: [],
            remainCredits: 0,
            signPopFlag: false,
            boolRankChange: false,
            userId: "",
            actRuleImage: ""
          };
          this.updateId = 0;
          this.rankPopInfo = {
            settlementPop: {
              boolShowPop: false,
              oldRankMultiply: 0,
              newRankMultiply: 0,
              oldRankLevel: 0,
              newRankLevel: 0,
              rankList: [{
                nickName: "",
                avatar: "",
                rankScore: 0,
                boolMe: false,
                rankOrder: 0
              }],
              obtainScoreNum: 0
            }
          };
          this.ruleInfo = "";
          this.checkActTime = function (_0x143414) {
            {
              undefined === _0x143414 && (_0x143414 = false);
              var _0x494786 = _0x2710c8.homeInfo || {};
              var _0x588184 = _0x494786.actStartTime;
              var _0x29e3d8 = _0x494786.actEndTime;
              return _0x588184 > _0x4f54d5.now() ? (console.log("活动未开始"), _0x58e739("活动未开始"), false) : !(_0x29e3d8 < _0x4f54d5.now() && !_0x143414) || (console.log("活动已结束"), _0x58e739("活动已结束"), false);
            }
          };
          this.enter = false;
        }
        var _0x160128 = _0xda53de.prototype;
        _0x160128.updateFrontVariable = function () {
          var _0x44e2c3 = _0x4bf143(_0x3b8489().mark(function _0x1e8d24() {
            var _0x1c511e;
            var _0x189cfe;
            var _0x549b9c;
            return _0x3b8489().wrap(function (_0x1bf703) {
              for (;;) {
                switch (_0x1bf703.prev = _0x1bf703.next) {
                  case 0:
                    _0x1bf703.next = 2;
                    return _0x15b975(_0x9d8537.getFrontVariable);
                  case 2:
                    if (_0x1c511e = _0x1bf703.sent, _0x189cfe = _0x1c511e.success, _0x549b9c = _0x1c511e.data, _0x189cfe) {
                      _0x1bf703.next = 7;
                      break;
                    }
                    return _0x1bf703.abrupt("return");
                  case 7:
                    this.frontVariable = _0x549b9c;
                  case 8:
                  case "end":
                    return _0x1bf703.stop();
                }
              }
            }, _0x1e8d24, this);
          }));
          return function () {
            return _0x44e2c3.apply(this, arguments);
          };
        }();
        _0x160128.updateIndex = function () {
          {
            var _0x5f5aa8 = _0x4bf143(_0x3b8489().mark(function _0x46fe8e() {
              var _0x5a1d4a;
              var _0x3dc6a8;
              var _0x1f0bc6;
              var _0x2baec9;
              var _0x599f49;
              return _0x3b8489().wrap(function (_0x1778ac) {
                for (;;) {
                  switch (_0x1778ac.prev = _0x1778ac.next) {
                    case 0:
                      _0x1778ac.next = 2;
                      return _0x15b975(_0x9d8537.index);
                    case 2:
                      if (_0x5a1d4a = _0x1778ac.sent, _0x3dc6a8 = _0x5a1d4a.success, _0x1f0bc6 = _0x5a1d4a.data, _0x2baec9 = _0x5a1d4a.timeStamp, _0x3dc6a8) {
                        _0x1778ac.next = 8;
                        break;
                      }
                      return _0x1778ac.abrupt("return");
                    case 8:
                      _0x4f54d5.ins.setTime(_0x2baec9);
                      _0x599f49 = _0x1f0bc6;
                      try {
                        _0x599f49 = JSON.parse(_0x3f8959(_0x1f0bc6, "6FDCE02EBB43C3A8", "cDOiBC1n2QrkAY2P"));
                      } catch (_0x2b4bb0) {
                        console.log(_0x2b4bb0);
                      }
                      this.homeInfo = _0x599f49;
                      this.updateId++;
                    case 13:
                    case "end":
                      return _0x1778ac.stop();
                  }
                }
              }, _0x46fe8e, this);
            }));
            return function () {
              return _0x5f5aa8.apply(this, arguments);
            };
          }
        }();
        _0x160128.updateRule = function () {
          var _0x4a7cc5 = _0x4bf143(_0x3b8489().mark(function _0x5f148a() {
            var _0x2d0f7a;
            var _0x579a18;
            var _0x4db743;
            return _0x3b8489().wrap(function (_0x1502e2) {
              for (;;) {
                switch (_0x1502e2.prev = _0x1502e2.next) {
                  case 0:
                    _0x1502e2.next = 2;
                    return _0x15b975(_0x9d8537.projectRule);
                  case 2:
                    if (_0x2d0f7a = _0x1502e2.sent, _0x579a18 = _0x2d0f7a.success, _0x4db743 = _0x2d0f7a.data, _0x579a18) {
                      _0x1502e2.next = 7;
                      break;
                    }
                    return _0x1502e2.abrupt("return");
                  case 7:
                    this.ruleInfo = _0x4db743;
                  case 8:
                  case "end":
                    return _0x1502e2.stop();
                }
              }
            }, _0x5f148a, this);
          }));
          return function () {
            return _0x4a7cc5.apply(this, arguments);
          };
        }();
        _0x160128.updateEnergy = function () {
          var _0x94d0b = _0x4bf143(_0x3b8489().mark(function _0x37f625() {
            var _0x5e6fbc;
            var _0x541e36;
            var _0x1563e8;
            var _0x2ebb28;
            return _0x3b8489().wrap(function (_0x13518d) {
              for (;;) {
                switch (_0x13518d.prev = _0x13518d.next) {
                  case 0:
                    _0x13518d.next = 2;
                    return _0x15b975(_0x9d8537.energyDetail);
                  case 2:
                    if (_0x5e6fbc = _0x13518d.sent, _0x541e36 = _0x5e6fbc.success, _0x1563e8 = _0x5e6fbc.data, _0x2ebb28 = _0x5e6fbc.timeStamp, _0x4f54d5.ins.setTime(_0x2ebb28), _0x541e36) {
                      _0x13518d.next = 9;
                      break;
                    }
                    return _0x13518d.abrupt("return");
                  case 9:
                    this.homeInfo.currentEnergy = _0x1563e8.currentEnergy;
                    this.homeInfo.remainCredits = _0x1563e8.remainCredits;
                    this.updateId++;
                  case 12:
                  case "end":
                    return _0x13518d.stop();
                }
              }
            }, _0x37f625, this);
          }));
          return function () {
            return _0x94d0b.apply(this, arguments);
          };
        }();
        _0x160128.doAssist = function () {
          var _0x481007 = _0x4bf143(_0x3b8489().mark(function _0xa80222() {
            var _0x57ceee;
            var _0x462564;
            var _0x508d59;
            var _0x33d613;
            return _0x3b8489().wrap(function (_0x36d4c8) {
              for (;;) {
                switch (_0x36d4c8.prev = _0x36d4c8.next) {
                  case 0:
                    if (_0x57ceee = _0x355b17("inviteCode")) {
                      _0x36d4c8.next = 3;
                      break;
                    }
                    return _0x36d4c8.abrupt("return");
                  case 3:
                    this.enter = true;
                    _0x36d4c8.next = 6;
                    return _0x3c1789(_0x9d8537.doAssist, {
                      inviteCode: _0x57ceee
                    });
                  case 6:
                    if (_0x462564 = _0x36d4c8.sent, _0x508d59 = _0x462564.success, _0x33d613 = _0x462564.data, _0x508d59) {
                      _0x36d4c8.next = 11;
                      break;
                    }
                    return _0x36d4c8.abrupt("return");
                  case 11:
                    _0x58e739(_0x33d613.extra);
                  case 12:
                  case "end":
                    return _0x36d4c8.stop();
                }
              }
            }, _0xa80222, this);
          }));
          return function () {
            return _0x481007.apply(this, arguments);
          };
        }();
        _0x160128.setRankPopInfo = function (_0xe62108) {
          this.rankPopInfo.settlementPop = _0xe62108;
        };
        return _0xda53de;
      }())()));
      _0x5984b4._RF.pop();
    }
  };
});
System.register("chunks:///_virtual/Svga.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./SvgaTrack.ts", "./loadSvga.ts"], function (_0x318306) {
  var _0x131f83;
  var _0x5b3b44;
  var _0x508f27;
  var _0x4a38e4;
  var _0x96c365;
  var _0x520ab8;
  var _0x266135;
  var _0x2cf679;
  var _0xb2d1d7;
  var _0xb684ad;
  var _0x2052ad;
  var _0x48da8b;
  var _0x2a1018;
  var _0x14b03a;
  var _0x361374;
  var _0x1d14f9;
  var _0x6d1be9;
  var _0x2b17a3;
  var _0x9c7115;
  var _0x4ec2e2;
  return {
    setters: [function (_0x5eaa46) {
      {
        _0x131f83 = _0x5eaa46.applyDecoratedDescriptor;
        _0x5b3b44 = _0x5eaa46.inheritsLoose;
        _0x508f27 = _0x5eaa46.initializerDefineProperty;
        _0x4a38e4 = _0x5eaa46.assertThisInitialized;
        _0x96c365 = _0x5eaa46.createClass;
        _0x520ab8 = _0x5eaa46.asyncToGenerator;
        _0x266135 = _0x5eaa46.regeneratorRuntime;
      }
    }, function (_0x4873f) {
      _0x2cf679 = _0x4873f.cclegacy;
      _0xb2d1d7 = _0x4873f._decorator;
      _0xb684ad = _0x4873f.Asset;
      _0x2052ad = _0x4873f.Component;
      _0x48da8b = _0x4873f.Node;
      _0x2a1018 = _0x4873f.v3;
      _0x14b03a = _0x4873f.UITransform;
      _0x361374 = _0x4873f.Sprite;
      _0x1d14f9 = _0x4873f.Texture2D;
      _0x6d1be9 = _0x4873f.ImageAsset;
      _0x2b17a3 = _0x4873f.SpriteFrame;
    }, function (_0x23751e) {
      _0x9c7115 = _0x23751e.SvgaTrack;
    }, function (_0x2e8a62) {
      _0x4ec2e2 = _0x2e8a62.createSpriteFrameAsync;
    }],
    execute: function () {
      var _0x27c8f7;
      var _0x1c3550;
      var _0x318b6f;
      var _0x362e3f;
      var _0x17dbf5;
      var _0x1db438;
      var _0x48ca56;
      var _0x390a25;
      var _0x151f2d;
      var _0x4f0e94;
      var _0x56ebd0;
      var _0xa710b9;
      _0x2cf679._RF.push({}, "7c5ffhlHDpBpoDQ8wfKN7pu", "Svga", undefined);
      var _0x509d28 = _0xb2d1d7.ccclass;
      var _0x3e3e5d = _0xb2d1d7.property;
      var _0x3971c3 = _0xb2d1d7.menu;
      var _0x306cd8 = _0xb2d1d7.disallowMultiple;
      var _0x36a64e = _0xb2d1d7.executeInEditMode;
      var _0x1c5ede = _0xb2d1d7.playOnFocus;
      _0x318306("default", (_0x27c8f7 = _0x3971c3("自定义组件/Svga"), _0x1c3550 = _0x3e3e5d(_0xb684ad), _0x318b6f = _0x3e3e5d(_0xb684ad), _0x362e3f = _0x3e3e5d({
        tooltip: "是否自动播放"
      }), _0x17dbf5 = _0x3e3e5d({
        tooltip: "是否循环"
      }), _0x509d28(_0x1db438 = _0x36a64e(_0x1db438 = _0x306cd8(_0x1db438 = _0x1c5ede(_0x1db438 = _0x27c8f7(((_0xa710b9 = function (_0x464367) {
        {
          function _0x32b5df() {
            for (var _0x3f3316, _0x58b88a = arguments.length, _0x20ab06 = new Array(_0x58b88a), _0x5af1f4 = 0; _0x5af1f4 < _0x58b88a; _0x5af1f4++) {
              _0x20ab06[_0x5af1f4] = arguments[_0x5af1f4];
            }
            (_0x3f3316 = _0x464367.call.apply(_0x464367, [this].concat(_0x20ab06)) || this).edit_update = false;
            _0x3f3316.aniNode = null;
            _0x508f27(_0x3f3316, "_svga", _0x390a25, _0x4a38e4(_0x3f3316));
            _0x3f3316.tracks = [];
            _0x3f3316.isPlaying = false;
            _0x3f3316.vmData = null;
            _0x508f27(_0x3f3316, "autoPlay", _0x151f2d, _0x4a38e4(_0x3f3316));
            _0x508f27(_0x3f3316, "_loop", _0x4f0e94, _0x4a38e4(_0x3f3316));
            _0x3f3316._totalFrames = 0;
            _0x3f3316._frameTime = 0;
            _0x508f27(_0x3f3316, "_fps", _0x56ebd0, _0x4a38e4(_0x3f3316));
            _0x3f3316._curTime = 0;
            _0x3f3316._curFrame = 0;
            return _0x3f3316;
          }
          _0x5b3b44(_0x32b5df, _0x464367);
          var _0x2d2074 = _0x32b5df.prototype;
          _0x2d2074.onFocusInEditor = function () {
            this.edit_update = true;
            this.play(0);
          };
          _0x2d2074.onLostFocusInEditor = function () {
            this.edit_update = false;
          };
          _0x2d2074.resetInEditor = function () {
            var _0x2d4150 = _0x520ab8(_0x266135().mark(function _0xc74f0f() {
              return _0x266135().wrap(function (_0x3b16cf) {
                for (;;) {
                  switch (_0x3b16cf.prev = _0x3b16cf.next) {
                    case 0:
                      _0x3b16cf.next = 2;
                      return this._load();
                    case 2:
                      this.edit_update = true;
                      this.play(0);
                    case 4:
                    case "end":
                      return _0x3b16cf.stop();
                  }
                }
              }, _0xc74f0f, this);
            }));
            return function () {
              return _0x2d4150.apply(this, arguments);
            };
          }();
          _0x2d2074.onEnable = function () {
            CC_EDITOR && this.play(0);
          };
          _0x2d2074.onLoad = function () {
            var _0x4e6ace = _0x520ab8(_0x266135().mark(function _0x160387() {
              {
                return _0x266135().wrap(function (_0x4b0c46) {
                  for (;;) {
                    switch (_0x4b0c46.prev = _0x4b0c46.next) {
                      case 0:
                        this.aniNode = this.node.getChildByName("aniNode");
                        this.aniNode || (this.aniNode = new _0x48da8b("aniNode"), this.aniNode.layer = this.node.layer, this.aniNode.setScale(_0x2a1018(1, -1, 1)), this.node.addChild(this.aniNode));
                        _0x4b0c46.next = 4;
                        return this._load();
                      case 4:
                        (this.autoPlay || CC_EDITOR) && this.play(0);
                      case 5:
                      case "end":
                        return _0x4b0c46.stop();
                    }
                  }
                }, _0x160387, this);
              }
            }));
            return function () {
              return _0x4e6ace.apply(this, arguments);
            };
          }();
          _0x2d2074.start = function () {};
          _0x2d2074.play = function (_0x54e6ee) {
            undefined === _0x54e6ee && (_0x54e6ee = 0);
            this.curFrame = _0x54e6ee;
            this.isPlaying = true;
            return this;
          };
          _0x2d2074.stop = function (_0x28998e) {
            undefined === _0x28998e && (_0x28998e = false);
            _0x28998e && (this.curFrame = 0);
            this.isPlaying = false;
            return this;
          };
          _0x2d2074.update = function (_0x33bc37) {
            var _0x347602 = this;
            CC_EDITOR && !this.edit_update || !this.isPlaying || (this.curTime += _0x33bc37, this._curFrame > this.totalFrames && (this.node.emit(_0x32b5df.EventType.END_FRAME), this.loop ? this.curTime = (this._curFrame - this.totalFrames) * this._frameTime : this.stop(false)), this.tracks.forEach(function (_0x3d044f) {
              _0x3d044f.setValue(_0x347602._curFrame);
            }));
          };
          _0x2d2074.onDestroy = function () {
            for (var _0x569c24 = this.tracks, _0x754c86 = _0x569c24.length, _0x2b51fa = 0; _0x2b51fa < _0x754c86; _0x2b51fa++) {
              _0x569c24[_0x2b51fa].destroy();
            }
            this.tracks.length = 0;
          };
          _0x2d2074._load = function () {
            var _0x48a262 = _0x520ab8(_0x266135().mark(function _0x474dd8() {
              var _0x4db2e9;
              var _0x512464;
              var _0x1fd11a;
              var _0x2c5a5e;
              var _0x5987a6;
              var _0x55b5e8;
              var _0x2e4cce;
              var _0x2edbf3;
              var _0x4f3fd2;
              var _0x305600;
              var _0x4dd969;
              var _0x3960e4;
              var _0x128c65;
              var _0x53d81f;
              var _0x3e80f9;
              var _0x2ffefb;
              return _0x266135().wrap(function (_0x6324d8) {
                for (;;) {
                  switch (_0x6324d8.prev = _0x6324d8.next) {
                    case 0:
                      if (this.aniNode && this.svga) {
                        _0x6324d8.next = 3;
                        break;
                      }
                      console.log(!!this.aniNode, !!this.svga);
                      return _0x6324d8.abrupt("return");
                    case 3:
                      this.aniNode.removeAllChildren();
                      (_0x4db2e9 = this.svga._file).textures = {};
                      this.vmData = _0x4db2e9;
                      _0x512464 = _0x4db2e9.fps;
                      _0x1fd11a = _0x4db2e9.size;
                      _0x2c5a5e = _0x4db2e9.images;
                      _0x5987a6 = _0x4db2e9.sprites;
                      _0x55b5e8 = _0x4db2e9.frames;
                      this.fps || (this.fps = _0x512464);
                      this._totalFrames = _0x55b5e8;
                      this.getComponent(_0x14b03a).setContentSize(_0x1fd11a.width, _0x1fd11a.height);
                      this.aniNode.setPosition(-_0x1fd11a.width / 2, _0x1fd11a.height / 2);
                      _0x2e4cce = [];
                      _0x2edbf3 = _0x266135().mark(function _0x30104d(_0x2c1cef) {
                        var _0x76c869;
                        var _0x31b833;
                        var _0x4c8cb4;
                        return _0x266135().wrap(function (_0x4556ab) {
                          for (;;) {
                            switch (_0x4556ab.prev = _0x4556ab.next) {
                              case 0:
                                "string" == typeof (_0x76c869 = _0x2c5a5e[_0x2c1cef]) ? (0 !== _0x76c869.indexOf("iVBO") && 0 !== _0x76c869.indexOf("/9j/2w") || (_0x76c869 = "data:image/png;base64," + _0x76c869), _0x2e4cce.push(_0x4ec2e2(_0x76c869).then(function (_0x587828) {
                                  _0x4db2e9.textures[_0x2c1cef] = _0x587828;
                                }))) : ((_0x31b833 = new _0x1d14f9()).setWrapMode(_0x1d14f9.WrapMode.CLAMP_TO_EDGE, _0x1d14f9.WrapMode.CLAMP_TO_EDGE, _0x1d14f9.WrapMode.CLAMP_TO_EDGE), _0x31b833.image = new _0x6d1be9(_0x76c869), (_0x4c8cb4 = new _0x2b17a3()).texture = _0x31b833, _0x4db2e9.textures[_0x2c1cef] = _0x4c8cb4);
                              case 2:
                              case "end":
                                return _0x4556ab.stop();
                            }
                          }
                        }, _0x30104d);
                      });
                      _0x6324d8.t0 = _0x266135().keys(_0x2c5a5e);
                    case 15:
                      if ((_0x6324d8.t1 = _0x6324d8.t0()).done) {
                        _0x6324d8.next = 20;
                        break;
                      }
                      _0x4f3fd2 = _0x6324d8.t1.value;
                      return _0x6324d8.delegateYield(_0x2edbf3(_0x4f3fd2), "t2", 18);
                    case 18:
                      _0x6324d8.next = 15;
                      break;
                    case 20:
                      _0x6324d8.next = 22;
                      return Promise.all(_0x2e4cce);
                    case 22:
                      _0x305600 = _0x5987a6.length;
                      _0x4dd969 = 0;
                    case 24:
                      if (!(_0x4dd969 < _0x305600)) {
                        _0x6324d8.next = 40;
                        break;
                      }
                      if (_0x3960e4 = _0x5987a6[_0x4dd969], _0x128c65 = _0x3960e4.imageKey, _0x53d81f = _0x3960e4.frames, _0x128c65) {
                        _0x6324d8.next = 28;
                        break;
                      }
                      return _0x6324d8.abrupt("return");
                    case 28:
                      (_0x3e80f9 = new _0x48da8b(_0x128c65)).layer = this.node.layer;
                      _0x3e80f9.addComponent(_0x14b03a).setAnchorPoint(0, 1);
                      this.aniNode.addChild(_0x3e80f9);
                      _0x3e80f9.addComponent(_0x361374).spriteFrame = _0x4db2e9.textures[_0x128c65];
                      (_0x2ffefb = new _0x9c7115(_0x3e80f9, _0x53d81f)).resetValue();
                      this.tracks.push(_0x2ffefb);
                    case 37:
                      _0x4dd969++;
                      _0x6324d8.next = 24;
                      break;
                    case 40:
                    case "end":
                      return _0x6324d8.stop();
                  }
                }
              }, _0x474dd8, this);
            }));
            return function () {
              return _0x48a262.apply(this, arguments);
            };
          }();
          _0x96c365(_0x32b5df, [{
            key: "svga",
            get: function () {
              return this._svga;
            },
            set: function (_0x50e198) {
              var _0x4ab316 = this;
              _0x50e198 !== this._svga && (this._svga = _0x50e198, this._load().then(function () {
                {
                  _0x4ab316.play(0);
                }
              }));
            }
          }, {
            key: "loop",
            get: function () {
              return this._loop;
            },
            set: function (_0x44f31a) {
              this._loop = _0x44f31a;
              CC_EDITOR && this.play();
            }
          }, {
            key: "totalTime",
            get: function () {
              return this._totalFrames * (1 / this.fps) || 0;
            }
          }, {
            key: "totalFrames",
            get: function () {
              return this._totalFrames;
            }
          }, {
            key: "fps",
            get: function () {
              var _0x30beee;
              return this._fps || (null == (_0x30beee = this.vmData) ? undefined : _0x30beee.fps) || 0;
            },
            set: function (_0x2d9388) {
              this._fps = _0x2d9388;
              this._frameTime = 1 / _0x2d9388;
            }
          }, {
            key: "curTime",
            get: function () {
              return this._curTime;
            },
            set: function (_0x40ca36) {
              this._curTime = _0x40ca36;
              this._curFrame = _0x40ca36 * this.fps;
            }
          }, {
            key: "curFrame",
            get: function () {
              return this._curFrame;
            },
            set: function (_0x44003a) {
              this._curFrame = _0x44003a;
              this._curTime = _0x44003a / this.fps;
            }
          }]);
          return _0x32b5df;
        }
      }(_0x2052ad)).EventType = {
        END_FRAME: "SVGA_END_FRAME"
      }, _0x390a25 = _0x131f83((_0x48ca56 = _0xa710b9).prototype, "_svga", [_0x1c3550], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x131f83(_0x48ca56.prototype, "svga", [_0x318b6f], Object.getOwnPropertyDescriptor(_0x48ca56.prototype, "svga"), _0x48ca56.prototype), _0x151f2d = _0x131f83(_0x48ca56.prototype, "autoPlay", [_0x362e3f], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return true;
        }
      }), _0x4f0e94 = _0x131f83(_0x48ca56.prototype, "_loop", [_0x3e3e5d], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _0x131f83(_0x48ca56.prototype, "loop", [_0x17dbf5], Object.getOwnPropertyDescriptor(_0x48ca56.prototype, "loop"), _0x48ca56.prototype), _0x56ebd0 = _0x131f83(_0x48ca56.prototype, "_fps", [_0x3e3e5d], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _0x131f83(_0x48ca56.prototype, "fps", [_0x3e3e5d], Object.getOwnPropertyDescriptor(_0x48ca56.prototype, "fps"), _0x48ca56.prototype), _0x1db438 = _0x48ca56)) || _0x1db438) || _0x1db438) || _0x1db438) || _0x1db438) || _0x1db438));
      _0x2cf679._RF.pop();
    }
  };
});
System.register("chunks:///_virtual/SvgaOffScreen.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], function (_0x2658dd) {
  var _0x7738bf;
  var _0x1e3fd1;
  var _0x69b419;
  var _0x3d7396;
  var _0x1c8357;
  var _0xb9733a;
  var _0x4e5bb9;
  var _0x4db0b9;
  var _0x344239;
  var _0x242cad;
  var _0xe8ebae;
  var _0x38922e;
  var _0x16e03e;
  return {
    setters: [function (_0x3b035a) {
      _0x7738bf = _0x3b035a.applyDecoratedDescriptor;
      _0x1e3fd1 = _0x3b035a.inheritsLoose;
      _0x69b419 = _0x3b035a.initializerDefineProperty;
      _0x3d7396 = _0x3b035a.assertThisInitialized;
      _0x1c8357 = _0x3b035a.createClass;
      _0xb9733a = _0x3b035a.asyncToGenerator;
      _0x4e5bb9 = _0x3b035a.regeneratorRuntime;
    }, function (_0x611198) {
      _0x4db0b9 = _0x611198.cclegacy;
      _0x344239 = _0x611198._decorator;
      _0x242cad = _0x611198.Sprite;
      _0xe8ebae = _0x611198.Asset;
      _0x38922e = _0x611198.Component;
      _0x16e03e = _0x611198.SpriteFrame;
    }],
    execute: function () {
      var _0xaf6174;
      var _0x41926f;
      var _0x14483b;
      var _0x170e0e;
      var _0xe2d28;
      var _0x111889;
      var _0x225844;
      var _0x2ba504;
      var _0x54e7f7;
      var _0x36e0c2;
      var _0x20058c;
      var _0x435cf1;
      var _0x17588c;
      var _0x482417;
      var _0xa35597;
      _0x4db0b9._RF.push({}, "da2fai0MLZFna5anH+ob1ss", "SvgaOffScreen", undefined);
      var _0x182b51 = _0x344239.ccclass;
      var _0x4aa076 = _0x344239.property;
      var _0x490425 = _0x344239.requireComponent;
      var _0x37ceee = _0x344239.menu;
      var _0x317ce2 = _0x344239.disallowMultiple;
      var _0x316e11 = _0x344239.executeInEditMode;
      var _0x48fd44 = _0x344239.playOnFocus;
      var _0x24a52e = "⚠️实验组件，性能很差，不建议使用";
      _0x2658dd("default", (_0xaf6174 = _0x182b51("SvgaOffScreen"), _0x41926f = _0x490425(_0x242cad), _0x14483b = _0x37ceee("自定义组件/Svga离屏渲染器(⚠️实验)(⚠️性能很差)"), _0x170e0e = _0x4aa076({
        tooltip: _0x24a52e,
        displayName: _0x24a52e
      }), _0xe2d28 = _0x4aa076({
        tooltip: "是否自动播放"
      }), _0x111889 = _0x4aa076(_0xe8ebae), _0x225844 = _0x4aa076(_0xe8ebae), _0x2ba504 = _0x4aa076({
        tooltip: "是否循环"
      }), _0xaf6174(_0x54e7f7 = _0x316e11(_0x54e7f7 = _0x317ce2(_0x54e7f7 = _0x48fd44(_0x54e7f7 = _0x41926f(_0x54e7f7 = _0x14483b((_0x20058c = _0x7738bf((_0x36e0c2 = function (_0x5510c7) {
        function _0x5dc950() {
          for (var _0x46e407, _0x42180f = arguments.length, _0x5d2788 = new Array(_0x42180f), _0x323123 = 0; _0x323123 < _0x42180f; _0x323123++) {
            _0x5d2788[_0x323123] = arguments[_0x323123];
          }
          _0x46e407 = _0x5510c7.call.apply(_0x5510c7, [this].concat(_0x5d2788)) || this;
          _0x69b419(_0x46e407, "tips", _0x20058c, _0x3d7396(_0x46e407));
          _0x46e407.isPlaying = false;
          _0x46e407.canvas = null;
          _0x46e407.sf = undefined;
          _0x46e407.player = undefined;
          _0x46e407.edit_update = false;
          _0x69b419(_0x46e407, "autoPlay", _0x435cf1, _0x3d7396(_0x46e407));
          _0x69b419(_0x46e407, "_svga", _0x17588c, _0x3d7396(_0x46e407));
          _0x69b419(_0x46e407, "_loop", _0x482417, _0x3d7396(_0x46e407));
          _0x69b419(_0x46e407, "_fps", _0xa35597, _0x3d7396(_0x46e407));
          return _0x46e407;
        }
        _0x1e3fd1(_0x5dc950, _0x5510c7);
        var _0x3497a6 = _0x5dc950.prototype;
        _0x3497a6.onFocusInEditor = function () {
          this.edit_update = true;
          this.play(0);
        };
        _0x3497a6.onLostFocusInEditor = function () {
          this.edit_update = false;
        };
        _0x3497a6.resetInEditor = function () {
          var _0x3d64f0 = _0xb9733a(_0x4e5bb9().mark(function _0xdc60f0() {
            return _0x4e5bb9().wrap(function (_0x1db1cc) {
              for (;;) {
                switch (_0x1db1cc.prev = _0x1db1cc.next) {
                  case 0:
                    _0x1db1cc.next = 2;
                    return this.mount();
                  case 2:
                    this.edit_update = true;
                    this.play(0);
                  case 4:
                  case "end":
                    return _0x1db1cc.stop();
                }
              }
            }, _0xdc60f0, this);
          }));
          return function () {
            return _0x3d64f0.apply(this, arguments);
          };
        }();
        _0x3497a6.onEnable = function () {
          CC_EDITOR && this.play(0);
        };
        _0x3497a6.onLoad = function () {
          {
            var _0x467522 = _0xb9733a(_0x4e5bb9().mark(function _0x1b38f6() {
              return _0x4e5bb9().wrap(function (_0x1e8224) {
                for (;;) {
                  switch (_0x1e8224.prev = _0x1e8224.next) {
                    case 0:
                      console.warn("[" + this.name + "] -> " + _0x24a52e);
                      this.canvas = document.createElement("canvas");
                      this.player = new SVGA.Player({
                        container: this.canvas,
                        isUseIntersectionObserver: false,
                        isCacheFrames: false,
                        loop: this.loop ? 0 : 1
                      });
                      _0x1e8224.next = 6;
                      return this.mount();
                    case 6:
                      this.sf = _0x16e03e.createWithImage(this.canvas);
                      this.getComponent(_0x242cad).spriteFrame = this.sf;
                    case 8:
                    case "end":
                      return _0x1e8224.stop();
                  }
                }
              }, _0x1b38f6, this);
            }));
            return function () {
              return _0x467522.apply(this, arguments);
            };
          }
        }();
        _0x3497a6.start = function () {};
        _0x3497a6.mount = function () {
          var _0xbdcf1c = _0xb9733a(_0x4e5bb9().mark(function _0x419e43() {
            return _0x4e5bb9().wrap(function (_0x25ecc7) {
              for (;;) {
                switch (_0x25ecc7.prev = _0x25ecc7.next) {
                  case 0:
                    if (this.svga) {
                      _0x25ecc7.next = 2;
                      break;
                    }
                    return _0x25ecc7.abrupt("return");
                  case 2:
                    this.canvas.width = this.svga._file.size.width;
                    this.canvas.height = this.svga._file.size.height;
                    _0x25ecc7.next = 6;
                    return this.player.mount(this.svga._file);
                  case 6:
                    this.fps = this.fps;
                    this.autoPlay && this.play(0);
                  case 8:
                  case "end":
                    return _0x25ecc7.stop();
                }
              }
            }, _0x419e43, this);
          }));
          return function () {
            return _0xbdcf1c.apply(this, arguments);
          };
        }();
        _0x3497a6.update = function (_0x4b25ee) {
          var _0x44db7d;
          (null == (_0x44db7d = this.sf) ? undefined : _0x44db7d.texture).updateImage();
        };
        _0x3497a6.onDestroy = function () {
          this.player.destroy();
        };
        _0x3497a6.play = function (_0xcffe73) {
          if (undefined === _0xcffe73 && (_0xcffe73 = 0), this.player) {
            this.player.start();
            this.curFrame = _0xcffe73;
            this.isPlaying = true;
            return this;
          }
        };
        _0x3497a6.stop = function (_0x461920) {
          if (undefined === _0x461920 && (_0x461920 = false), this.player) {
            _0x461920 && (this.curFrame = 0);
            this.player.stop();
            this.isPlaying = false;
            return this;
          }
        };
        _0x1c8357(_0x5dc950, [{
          key: "svga",
          get: function () {
            return this._svga;
          },
          set: function (_0x5e08fe) {
            this._svga = _0x5e08fe;
            this.mount();
          }
        }, {
          key: "loop",
          get: function () {
            return this._loop;
          },
          set: function (_0x26a984) {
            this._loop = _0x26a984;
            this.player.config.loop = _0x26a984 ? 0 : 1;
            this.player.animator.loop = _0x26a984 ? Infinity : 1;
            CC_EDITOR && this.play();
          }
        }, {
          key: "totalTime",
          get: function () {
            var _0x1b3695;
            return (null == (_0x1b3695 = this.player.animator) ? undefined : _0x1b3695.duration) / 1000;
          }
        }, {
          key: "totalFrames",
          get: function () {
            return this.player.totalFrames;
          }
        }, {
          key: "fps",
          get: function () {
            var _0x37b38a;
            return this._fps || (null == (_0x37b38a = this.player) || null == (_0x37b38a = _0x37b38a.videoEntity) ? undefined : _0x37b38a.fps) || 0;
          },
          set: function (_0x596e87) {
            this._fps = _0x596e87;
            this.player.videoEntity && (this.player.videoEntity.fps = _0x596e87, this.player.animator.duration = this.player.videoEntity.frames * (1 / _0x596e87) * 1000);
          }
        }, {
          key: "curFrame",
          get: function () {
            return this.player.currentFrame;
          },
          set: function (_0x3d47d7) {
            {
              this.player.currentFrame = _0x3d47d7;
              this.player.animator && (this.player.animator.startValue = _0x3d47d7);
            }
          }
        }]);
        return _0x5dc950;
      }(_0x38922e)).prototype, "tips", [_0x170e0e], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return true;
        }
      }), _0x435cf1 = _0x7738bf(_0x36e0c2.prototype, "autoPlay", [_0xe2d28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return true;
        }
      }), _0x17588c = _0x7738bf(_0x36e0c2.prototype, "_svga", [_0x111889], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x7738bf(_0x36e0c2.prototype, "svga", [_0x225844], Object.getOwnPropertyDescriptor(_0x36e0c2.prototype, "svga"), _0x36e0c2.prototype), _0x482417 = _0x7738bf(_0x36e0c2.prototype, "_loop", [_0x4aa076], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _0x7738bf(_0x36e0c2.prototype, "loop", [_0x2ba504], Object.getOwnPropertyDescriptor(_0x36e0c2.prototype, "loop"), _0x36e0c2.prototype), _0xa35597 = _0x7738bf(_0x36e0c2.prototype, "_fps", [_0x4aa076], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _0x7738bf(_0x36e0c2.prototype, "fps", [_0x4aa076], Object.getOwnPropertyDescriptor(_0x36e0c2.prototype, "fps"), _0x36e0c2.prototype), _0x54e7f7 = _0x36e0c2)) || _0x54e7f7) || _0x54e7f7) || _0x54e7f7) || _0x54e7f7) || _0x54e7f7) || _0x54e7f7));
      _0x4db0b9._RF.pop();
    }
  };
});
System.register("chunks:///_virtual/SvgaTrack.ts", ["cc"], function (_0x536ccc) {
  var _0x5e8c55;
  var _0x56291f;
  var _0x39a231;
  var _0x593e79;
  var _0x5483ae;
  return {
    setters: [function (_0xe45e0c) {
      {
        _0x5e8c55 = _0xe45e0c.cclegacy;
        _0x56291f = _0xe45e0c.misc;
        _0x39a231 = _0xe45e0c.Sprite;
        _0x593e79 = _0xe45e0c.mat4;
        _0x5483ae = _0xe45e0c.color;
      }
    }],
    execute: function () {
      {
        _0x5e8c55._RF.push({}, "5eefe9b92lAU4GY+nBw9mG4", "SvgaTrack", undefined);
        _0x536ccc("SvgaTrack", function () {
          function _0x347d04(_0x3906c4, _0x49fd7d) {
            this.tempMat = _0x593e79();
            this.tempColor = _0x5483ae(255, 255, 255, 255);
            this.node = _0x3906c4;
            this.frames = _0x49fd7d;
          }
          var _0x12558d = _0x347d04.prototype;
          _0x12558d.setValue = function (_0x5676a0) {
            var _0x2bacc1 = this.node;
            var _0x364d1c = this.frames;
            var _0x57c799 = this.tempColor;
            var _0x111a1b = this.tempMat;
            var _0x15a3c1 = _0x364d1c[_0x5676a0 = Math.round(_0x56291f.clampf(_0x5676a0, 0, _0x364d1c.length - 1))];
            var _0x3ea972 = _0x15a3c1.alpha;
            var _0x17e82c = _0x15a3c1.transform;
            _0x15a3c1.maskPath;
            if (_0x3ea972 < 0.05) {
              _0x57c799.a = 0;
              _0x2bacc1.getComponent(_0x39a231).color = _0x57c799;
            } else {
              {
                _0x57c799.a = 255 * _0x3ea972;
                _0x2bacc1.getComponent(_0x39a231).color = _0x57c799;
                var _0x163185 = _0x17e82c.a;
                var _0x4a2358 = _0x17e82c.b;
                var _0x5de799 = _0x17e82c.c;
                var _0x4d82d0 = _0x17e82c.d;
                var _0x31438f = _0x17e82c.tx;
                var _0xd91aec = _0x17e82c.ty;
                _0x111a1b.m00 = _0x163185;
                _0x111a1b.m01 = _0x4a2358;
                _0x111a1b.m04 = -_0x5de799;
                _0x111a1b.m05 = -_0x4d82d0;
                _0x111a1b.m12 = _0x31438f;
                _0x111a1b.m13 = _0xd91aec;
                _0x2bacc1.matrix = _0x111a1b;
              }
            }
          };
          _0x12558d.resetValue = function () {
            this.setValue(0);
          };
          _0x12558d.destroy = function () {
            this.node = null;
          };
          return _0x347d04;
        }());
        _0x5e8c55._RF.pop();
      }
    }
  };
});
System.register("chunks:///_virtual/TaskFeedBackPanel.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Panel.ts", "./decorators.ts", "./Ball.ts"], function (_0x2545bf) {
  var _0x451bc0;
  var _0x134ac9;
  var _0x39154d;
  var _0x5dbb04;
  var _0x3334a5;
  var _0x336148;
  var _0x401e0d;
  var _0x43c367;
  var _0x2c1fb3;
  var _0x5e9103;
  var _0x3af795;
  var _0x3f5216;
  var _0x1e7781;
  var _0x4ea54d;
  var _0x16bdc1;
  var _0x22ae7a;
  return {
    setters: [function (_0x1f85e2) {
      _0x451bc0 = _0x1f85e2.applyDecoratedDescriptor;
      _0x134ac9 = _0x1f85e2.inheritsLoose;
      _0x39154d = _0x1f85e2.initializerDefineProperty;
      _0x5dbb04 = _0x1f85e2.assertThisInitialized;
      _0x3334a5 = _0x1f85e2.asyncToGenerator;
      _0x336148 = _0x1f85e2.regeneratorRuntime;
    }, function (_0x27e97a) {
      _0x401e0d = _0x27e97a.cclegacy;
      _0x43c367 = _0x27e97a._decorator;
      _0x2c1fb3 = _0x27e97a.Sprite;
      _0x5e9103 = _0x27e97a.SpriteFrame;
      _0x3af795 = _0x27e97a.Label;
      _0x3f5216 = _0x27e97a.Node;
      _0x1e7781 = _0x27e97a.Button;
    }, function (_0x3634fd) {
      _0x4ea54d = _0x3634fd.default;
    }, function (_0x4247bc) {
      _0x16bdc1 = _0x4247bc.observer;
    }, function (_0x1ac530) {
      {
        _0x22ae7a = _0x1ac530.BallType;
      }
    }],
    execute: function () {
      var _0x3e600e;
      var _0x45ef87;
      var _0x1e4d17;
      var _0x4b8d11;
      var _0xa11bae;
      var _0x2751fe;
      var _0xa4015f;
      var _0x3bd4a5;
      var _0x2d57ab;
      var _0x4a035a;
      var _0x4fb815;
      var _0x4c28f9;
      var _0x133124;
      var _0x41bf7f;
      var _0x518186;
      var _0x1ce2c2;
      var _0xe56d2d;
      var _0x362b3e;
      _0x401e0d._RF.push({}, "e005bM8qzpC7pSTe1ogSrFl", "TaskFeedBackPanel", undefined);
      var _0x35c4b1 = _0x43c367.ccclass;
      var _0xe23337 = _0x43c367.property;
      _0x2545bf("default", (_0x3e600e = _0x35c4b1("TaskFeedBackPanel"), _0x45ef87 = _0xe23337(_0x2c1fb3), _0x1e4d17 = _0xe23337(_0x5e9103), _0x4b8d11 = _0xe23337(_0x5e9103), _0xa11bae = _0xe23337(_0x3af795), _0x2751fe = _0xe23337(_0x3af795), _0xa4015f = _0xe23337(_0x3f5216), _0x3bd4a5 = _0xe23337(_0x3f5216), _0x16bdc1(_0x2d57ab = _0x3e600e(((_0x362b3e = function (_0xb58101) {
        function _0x198384() {
          for (var _0x373f60, _0x2aab3e = arguments.length, _0x50e2ed = new Array(_0x2aab3e), _0x25d8f3 = 0; _0x25d8f3 < _0x2aab3e; _0x25d8f3++) {
            _0x50e2ed[_0x25d8f3] = arguments[_0x25d8f3];
          }
          _0x373f60 = _0xb58101.call.apply(_0xb58101, [this].concat(_0x50e2ed)) || this;
          _0x39154d(_0x373f60, "ball", _0x4fb815, _0x5dbb04(_0x373f60));
          _0x39154d(_0x373f60, "normal", _0x4c28f9, _0x5dbb04(_0x373f60));
          _0x39154d(_0x373f60, "gold", _0x133124, _0x5dbb04(_0x373f60));
          _0x39154d(_0x373f60, "title", _0x41bf7f, _0x5dbb04(_0x373f60));
          _0x39154d(_0x373f60, "desc", _0x518186, _0x5dbb04(_0x373f60));
          _0x39154d(_0x373f60, "btn", _0x1ce2c2, _0x5dbb04(_0x373f60));
          _0x39154d(_0x373f60, "close", _0xe56d2d, _0x5dbb04(_0x373f60));
          return _0x373f60;
        }
        _0x134ac9(_0x198384, _0xb58101);
        var _0x2fffbf = _0x198384.prototype;
        _0x2fffbf.onLoad = function () {
          this.btn.on(_0x1e7781.EventType.CLICK, this.clickBtn, this);
          this.close.on(_0x1e7781.EventType.CLICK, this.clickClose, this);
        };
        _0x2fffbf.start = function () {
          var _0x2ed2b6 = _0x3334a5(_0x336148().mark(function _0x17e072() {
            {
              var _0x131ce5;
              var _0x31454b;
              var _0x33fccb;
              var _0x5ee26a;
              var _0x5aeafa;
              var _0x5f566f;
              var _0x17bf0d;
              return _0x336148().wrap(function (_0x4315b7) {
                for (;;) {
                  switch (_0x4315b7.prev = _0x4315b7.next) {
                    case 0:
                      _0x131ce5 = this.data;
                      _0x31454b = _0x131ce5.awardSpId;
                      _0x33fccb = _0x131ce5.awardNum;
                      _0x5ee26a = _0x131ce5.taskCode;
                      _0x5aeafa = _0x131ce5.times;
                      _0x5f566f = _0x31454b.indexOf("gold") > -1 ? _0x22ae7a.Gold : _0x22ae7a.Red;
                      this.title.string = "掉落" + (_0x5f566f == _0x22ae7a.Gold ? "财气" : "福气") + "+" + _0x33fccb;
                      _0x17bf0d = {
                        common_login: "每日登录任务",
                        common_put: "投入" + _0x5aeafa + "次福气累计任务",
                        common_scan: "每日完成扫码任务",
                        common_invite: "邀请好友助力任务"
                      }[_0x5ee26a];
                      this.desc.string = "恭喜完成" + _0x17bf0d;
                    case 5:
                    case "end":
                      return _0x4315b7.stop();
                  }
                }
              }, _0x17e072, this);
            }
          }));
          return function () {
            return _0x2ed2b6.apply(this, arguments);
          };
        }();
        _0x2fffbf.clickBtn = function () {
          this.data.taskCode;
          this.data.callback();
          this.hidePanel();
        };
        _0x2fffbf.clickClose = function () {
          this.data.taskCode;
          this.data.callback();
          this.hidePanel();
        };
        return _0x198384;
      }(_0x4ea54d)).bundle = "TaskFeedBackPanel", _0x362b3e.skin = "TaskFeedBackPanel", _0x4fb815 = _0x451bc0((_0x4a035a = _0x362b3e).prototype, "ball", [_0x45ef87], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x4c28f9 = _0x451bc0(_0x4a035a.prototype, "normal", [_0x1e4d17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x133124 = _0x451bc0(_0x4a035a.prototype, "gold", [_0x4b8d11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x41bf7f = _0x451bc0(_0x4a035a.prototype, "title", [_0xa11bae], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x518186 = _0x451bc0(_0x4a035a.prototype, "desc", [_0x2751fe], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          {
            return null;
          }
        }
      }), _0x1ce2c2 = _0x451bc0(_0x4a035a.prototype, "btn", [_0xa4015f], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0xe56d2d = _0x451bc0(_0x4a035a.prototype, "close", [_0x3bd4a5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          {
            return null;
          }
        }
      }), _0x2d57ab = _0x4a035a)) || _0x2d57ab) || _0x2d57ab));
      _0x401e0d._RF.pop();
    }
  };
});
System.register("chunks:///_virtual/TaskPanel.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./store.ts", "./decorators.ts", "./UIFast.ts", "./WebNet.ts", "./QingGuoConfirmPanel.ts"], function (_0x32870c) {
  var _0x3db543;
  var _0x1bdaad;
  var _0x21b636;
  var _0x4748dd;
  var _0x20a5e5;
  var _0x5e57f1;
  var _0x1fd69d;
  var _0x1268ff;
  var _0x52bb2a;
  var _0x4978bf;
  var _0x4eec6d;
  var _0x1d0f2d;
  var _0xd30b95;
  var _0xf21a12;
  var _0x467921;
  var _0x2e9251;
  var _0x545bfd;
  var _0x272d20;
  var _0x218aae;
  var _0x4f4fec;
  var _0x5b071e;
  var _0x5eec54;
  var _0x47dce9;
  var _0x4d57e6;
  var _0x3b1877;
  var _0x1b9861;
  var _0x2d55b9;
  return {
    setters: [function (_0x456fc7) {
      _0x3db543 = _0x456fc7.applyDecoratedDescriptor;
      _0x1bdaad = _0x456fc7.inheritsLoose;
      _0x21b636 = _0x456fc7.initializerDefineProperty;
      _0x4748dd = _0x456fc7.assertThisInitialized;
      _0x20a5e5 = _0x456fc7.asyncToGenerator;
      _0x5e57f1 = _0x456fc7.regeneratorRuntime;
    }, function (_0x5a1ee2) {
      _0x1fd69d = _0x5a1ee2.cclegacy;
      _0x1268ff = _0x5a1ee2._decorator;
      _0x52bb2a = _0x5a1ee2.ProgressBar;
      _0x4978bf = _0x5a1ee2.Node;
      _0x4eec6d = _0x5a1ee2.Tween;
      _0x1d0f2d = _0x5a1ee2.screen;
      _0xd30b95 = _0x5a1ee2.tween;
      _0xf21a12 = _0x5a1ee2.v3;
      _0x467921 = _0x5a1ee2.easing;
      _0x2e9251 = _0x5a1ee2.Component;
      _0x545bfd = _0x5a1ee2.Label;
      _0x272d20 = _0x5a1ee2.Button;
    }, function (_0x1bd31b) {
      _0x218aae = _0x1bd31b.default;
    }, function (_0x1a1dc5) {
      _0x4f4fec = _0x1a1dc5.observer;
    }, function (_0x589c98) {
      _0x5b071e = _0x589c98.showToast;
      _0x5eec54 = _0x589c98.showPanel;
    }, function (_0x2fbc08) {
      _0x47dce9 = _0x2fbc08.sendLog;
      _0x4d57e6 = _0x2fbc08.LOG_TYPE;
      _0x3b1877 = _0x2fbc08.sendWebNet;
      _0x1b9861 = _0x2fbc08.WebNetName;
    }, function (_0x1b7249) {
      {
        _0x2d55b9 = _0x1b7249.default;
      }
    }],
    execute: function () {
      {
        var _0x3feff4;
        var _0x57104b;
        var _0xf0e31a;
        var _0x31a4a8;
        var _0x493034;
        var _0x1a5f0f;
        var _0x530d9f;
        var _0x15348d;
        var _0xf34342;
        var _0x10d597;
        var _0x3b5e08;
        var _0xca0edb;
        var _0x417862;
        var _0x380971;
        var _0x1d6ae7;
        _0x1fd69d._RF.push({}, "25152ICPShOEZ7O5QAyc7PQ", "TaskPanel", undefined);
        var _0x231668 = _0x1268ff.ccclass;
        var _0x1169f8 = _0x1268ff.property;
        _0x32870c("default", (_0x3feff4 = _0x231668("TaskPanel"), _0x57104b = _0x1169f8(_0x52bb2a), _0xf0e31a = _0x1169f8(_0x4978bf), _0x31a4a8 = _0x1169f8(_0x4978bf), _0x493034 = _0x1169f8(_0x4978bf), _0x1a5f0f = _0x1169f8(_0x4978bf), _0x530d9f = _0x1169f8(_0x4978bf), _0x4f4fec(_0x15348d = _0x3feff4((_0x10d597 = _0x3db543((_0xf34342 = function (_0xf89874) {
          {
            function _0x4febe3() {
              for (var _0x3f1dcd, _0x3a58f1 = arguments.length, _0x12e87e = new Array(_0x3a58f1), _0x2822cb = 0; _0x2822cb < _0x3a58f1; _0x2822cb++) {
                _0x12e87e[_0x2822cb] = arguments[_0x2822cb];
              }
              _0x3f1dcd = _0xf89874.call.apply(_0xf89874, [this].concat(_0x12e87e)) || this;
              _0x21b636(_0x3f1dcd, "prog", _0x10d597, _0x4748dd(_0x3f1dcd));
              _0x21b636(_0x3f1dcd, "progNodeList", _0x3b5e08, _0x4748dd(_0x3f1dcd));
              _0x21b636(_0x3f1dcd, "sign_item", _0xca0edb, _0x4748dd(_0x3f1dcd));
              _0x21b636(_0x3f1dcd, "exchang_item", _0x417862, _0x4748dd(_0x3f1dcd));
              _0x21b636(_0x3f1dcd, "mask", _0x380971, _0x4748dd(_0x3f1dcd));
              _0x21b636(_0x3f1dcd, "mask2", _0x1d6ae7, _0x4748dd(_0x3f1dcd));
              _0x3f1dcd.hidePanel = function () {
                _0x4eec6d.stopAllByTarget(_0x3f1dcd.node);
                var _0x913bf4 = _0x1d0f2d.windowSize.height * (750 / _0x1d0f2d.windowSize.width);
                _0xd30b95(_0x3f1dcd.node).to(0.288, {
                  position: _0xf21a12(0, -_0x913bf4 / 2 - 500, 0)
                }, {
                  easing: _0x467921.quadInOut
                }).start();
              };
              _0x3f1dcd.clickExchange = function (_0x27caa7, _0x28e46d) {
                if (console.log(_0x28e46d, "111"), _0x47dce9(_0x4d57e6.CLICK, 6, _0x28e46d), (null == _0x27caa7 ? undefined : _0x27caa7.greenNum) < (null == _0x27caa7 ? undefined : _0x27caa7.needNum)) {
                  return _0x5b071e("青果不足");
                }
                _0x5eec54(_0x2d55b9, {
                  queryTaskInfo: function () {
                    _0x3f1dcd.queryTaskInfo();
                  },
                  exchangeInfo: _0x27caa7
                });
                _0x3f1dcd.touchMaskEnd();
              };
              _0x3f1dcd.clickSign = function (_0xc3f0ae) {
                {
                  _0x47dce9(_0x4d57e6.CLICK, 6, _0xc3f0ae);
                }
              };
              return _0x3f1dcd;
            }
            _0x1bdaad(_0x4febe3, _0xf89874);
            var _0x5299df = _0x4febe3.prototype;
            _0x5299df.onLoad = function () {
              this.mask.on(_0x4978bf.EventType.TOUCH_END, this.touchMaskEnd, this);
              this.mask2.on(_0x4978bf.EventType.TOUCH_END, this.touchMask2End, this);
              var _0x244669 = _0x1d0f2d.windowSize.height * (750 / _0x1d0f2d.windowSize.width);
              this.node.setPosition(0, -_0x244669 / 2 - 500, 0);
              this.mask.active = false;
              this.mask2.active = true;
            };
            _0x5299df.start = function () {
              var _0x589193 = _0x20a5e5(_0x5e57f1().mark(function _0x5a5b5e() {
                return _0x5e57f1().wrap(function (_0x7c08ae) {
                  for (;;) {
                    switch (_0x7c08ae.prev = _0x7c08ae.next) {
                      case 0:
                        _0x7c08ae.next = 2;
                        return this.queryTaskInfo();
                      case 2:
                      case "end":
                        return _0x7c08ae.stop();
                    }
                  }
                }, _0x5a5b5e, this);
              }));
              return function () {
                return _0x589193.apply(this, arguments);
              };
            }();
            _0x5299df.touchMaskEnd = function () {
              this.mask.active = false;
              this.mask2.active = true;
              this.hidePanel();
            };
            _0x5299df.touchMask2End = function () {
              this.mask.active = true;
              this.mask2.active = false;
              this.showPanel();
            };
            _0x5299df.queryTaskInfo = function () {
              var _0x2022c7 = _0x20a5e5(_0x5e57f1().mark(function _0x2fa099() {
                var _0x3d9654;
                var _0x1ba755;
                var _0x199dc5;
                var _0x55a6ea;
                var _0x16b6ca;
                var _0x59bb8d;
                var _0x4e3884;
                var _0x16e138;
                var _0x575790;
                var _0x3df7a4;
                var _0x3445d7;
                var _0x46fba8;
                var _0x418ac9;
                var _0x119ec5;
                var _0x2dbf6c;
                var _0x20fac4;
                var _0x101733;
                var _0x591e8e;
                var _0x277ea4;
                var _0x282348;
                var _0xd76795;
                var _0x135c0c;
                var _0x17221b;
                var _0x55780e;
                var _0x47d2b9 = this;
                return _0x5e57f1().wrap(function (_0x4ccd9f) {
                  for (;;) {
                    switch (_0x4ccd9f.prev = _0x4ccd9f.next) {
                      case 0:
                        _0x4ccd9f.next = 2;
                        return _0x3b1877(_0x1b9861.taskList);
                      case 2:
                        if (_0x20fac4 = _0x4ccd9f.sent, _0x101733 = _0x20fac4.data, _0x20fac4.success) {
                          {
                            _0x4ccd9f.next = 7;
                            break;
                          }
                        }
                        return _0x4ccd9f.abrupt("return");
                      case 7:
                        _0x591e8e = null == _0x101733 || null == (_0x3d9654 = _0x101733.item) ? undefined : _0x3d9654.find(function (_0x42cf18) {
                          return "common_put" == _0x42cf18.code;
                        });
                        _0x277ea4 = null == _0x101733 || null == (_0x1ba755 = _0x101733.item) ? undefined : _0x1ba755.find(function (_0x50faa8) {
                          return "common_login" == _0x50faa8.code;
                        });
                        _0x282348 = null == _0x101733 || null == (_0x199dc5 = _0x101733.item) ? undefined : _0x199dc5.find(function (_0x26edaa) {
                          return "common_exchange" == _0x26edaa.code;
                        });
                        _0xd76795 = JSON.parse(null == _0x591e8e ? undefined : _0x591e8e.extra);
                        _0x135c0c = JSON.parse(null == _0x277ea4 ? undefined : _0x277ea4.extra);
                        _0x17221b = JSON.parse(null == _0x282348 ? undefined : _0x282348.extra);
                        console.info(null == _0x277ea4 ? undefined : _0x277ea4.extra, "common_login?.extra");
                        console.info(_0x135c0c, "loginInfo");
                        console.info(_0x17221b, "exchangeInfo");
                        null == (_0x55780e = null == _0xd76795 ? undefined : _0xd76795.putConfigs) || _0x55780e.map(function (_0x54d6ac, _0x1b0f40) {
                          _0x47d2b9.progNodeList.getChildByPath("item" + (_0x1b0f40 + 1) + "/caiqi_num").getComponent(_0x545bfd).string = _0x54d6ac.num + "次";
                        });
                        (null == _0xd76795 ? undefined : _0xd76795.totalPutTimes) < ((null == (_0x55a6ea = _0x55780e[0]) ? undefined : _0x55a6ea.num) || 10) ? this.prog.progress = 0 : ((null == (_0x16b6ca = _0x55780e[0]) ? undefined : _0x16b6ca.num) || 10) <= (null == _0xd76795 ? undefined : _0xd76795.totalPutTimes) && (null == _0xd76795 ? undefined : _0xd76795.totalPutTimes) < ((null == (_0x59bb8d = _0x55780e[1]) ? undefined : _0x59bb8d.num) || 30) ? this.prog.progress = 0.1 : ((null == (_0x4e3884 = _0x55780e[1]) ? undefined : _0x4e3884.num) || 30) <= (null == _0xd76795 ? undefined : _0xd76795.totalPutTimes) && (null == _0xd76795 ? undefined : _0xd76795.totalPutTimes) < ((null == (_0x16e138 = _0x55780e[2]) ? undefined : _0x16e138.num) || 60) ? this.prog.progress = 0.3 : ((null == (_0x575790 = _0x55780e[2]) ? undefined : _0x575790.num) || 60) <= (null == _0xd76795 ? undefined : _0xd76795.totalPutTimes) && (null == _0xd76795 ? undefined : _0xd76795.totalPutTimes) < ((null == (_0x3df7a4 = _0x55780e[3]) ? undefined : _0x3df7a4.num) || 100) ? this.prog.progress = 0.5 : ((null == (_0x3445d7 = _0x55780e[3]) ? undefined : _0x3445d7.num) || 100) <= (null == _0xd76795 ? undefined : _0xd76795.totalPutTimes) && (null == _0xd76795 ? undefined : _0xd76795.totalPutTimes) < ((null == (_0x46fba8 = _0x55780e[4]) ? undefined : _0x46fba8.num) || 150) ? this.prog.progress = 0.75 : (null == _0xd76795 ? undefined : _0xd76795.totalPutTimes) >= (null == _0xd76795 ? undefined : _0xd76795.totalPutTimes) < ((null == (_0x418ac9 = _0x55780e[4]) ? undefined : _0x418ac9.num) || 150) && (this.prog.progress = 1);
                        this.sign_item.getChildByName("title").getComponent(_0x545bfd).string = "" + (null == _0x277ea4 ? undefined : _0x277ea4.title);
                        this.sign_item.getChildByPath("desc/num").getComponent(_0x545bfd).string = "+" + (null == _0x135c0c || null == (_0x119ec5 = _0x135c0c.awardConfigs) || null == (_0x119ec5 = _0x119ec5[0]) ? undefined : _0x119ec5.awardNum);
                        this.sign_item.getChildByName("兑换").active = 0 == (null == _0x277ea4 ? undefined : _0x277ea4.taskStatus);
                        this.sign_item.getChildByName("已完成").active = 2 == (null == _0x277ea4 ? undefined : _0x277ea4.taskStatus);
                        this.sign_item.getChildByName("兑换").targetOff(this);
                        this.sign_item.getChildByName("兑换").on(_0x272d20.EventType.CLICK, function () {
                          _0x47d2b9.clickSign(null == _0x277ea4 ? undefined : _0x277ea4.code);
                        }, this);
                        this.exchang_item.getChildByName("title").getComponent(_0x545bfd).string = "" + (null == _0x282348 ? undefined : _0x282348.title);
                        this.exchang_item.getChildByPath("desc/num").getComponent(_0x545bfd).string = "+" + (null == _0x17221b || null == (_0x2dbf6c = _0x17221b.awardConfigs) || null == (_0x2dbf6c = _0x2dbf6c[0]) ? undefined : _0x2dbf6c.awardNum);
                        this.exchang_item.getChildByName("兑换").active = 0 == (null == _0x282348 ? undefined : _0x282348.taskStatus);
                        this.exchang_item.getChildByName("已完成").active = 2 == (null == _0x282348 ? undefined : _0x282348.taskStatus);
                        this.exchang_item.getChildByName("qingGuoNum").getComponent(_0x545bfd).string = "当前青果:" + (null == _0x17221b ? undefined : _0x17221b.greenNum);
                        this.exchang_item.getChildByName("兑换").targetOff(this);
                        this.exchang_item.getChildByName("兑换").on(_0x272d20.EventType.CLICK, function () {
                          _0x47d2b9.clickExchange(_0x17221b, null == _0x282348 ? undefined : _0x282348.code);
                        }, this);
                        _0x47dce9(_0x4d57e6.EXPOSURE, 6, null == _0x277ea4 ? undefined : _0x277ea4.code);
                        _0x47dce9(_0x4d57e6.EXPOSURE, 6, null == _0x282348 ? undefined : _0x282348.code);
                      case 34:
                      case "end":
                        return _0x4ccd9f.stop();
                    }
                  }
                }, _0x2fa099, this);
              }));
              return function () {
                return _0x2022c7.apply(this, arguments);
              };
            }();
            _0x5299df.showPanel = function () {
              if (_0x218aae.checkActTime()) {
                _0x4eec6d.stopAllByTarget(this.node);
                var _0x22f2bc = _0x1d0f2d.windowSize.height * (750 / _0x1d0f2d.windowSize.width);
                _0xd30b95(this.node).to(0.288, {
                  position: _0xf21a12(0, -_0x22f2bc / 2, 0)
                }, {
                  easing: _0x467921.quadInOut
                }).start();
                this.queryTaskInfo();
              }
            };
            return _0x4febe3;
          }
        }(_0x2e9251)).prototype, "prog", [_0x57104b], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function () {
            return null;
          }
        }), _0x3b5e08 = _0x3db543(_0xf34342.prototype, "progNodeList", [_0xf0e31a], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function () {
            return null;
          }
        }), _0xca0edb = _0x3db543(_0xf34342.prototype, "sign_item", [_0x31a4a8], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function () {
            return null;
          }
        }), _0x417862 = _0x3db543(_0xf34342.prototype, "exchang_item", [_0x493034], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function () {
            return null;
          }
        }), _0x380971 = _0x3db543(_0xf34342.prototype, "mask", [_0x1a5f0f], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function () {
            return null;
          }
        }), _0x1d6ae7 = _0x3db543(_0xf34342.prototype, "mask2", [_0x530d9f], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function () {
            return null;
          }
        }), _0x15348d = _0xf34342)) || _0x15348d) || _0x15348d));
        _0x1fd69d._RF.pop();
      }
    }
  };
});
System.register("chunks:///_virtual/tgx.ts", ["cc", "./AudioMgr.ts", "./InputMgr.ts", "./ResourceMgr.ts", "./SafeJSON.ts", "./ResolutionAutoFit.ts", "./ModuleContext.ts", "./SceneUtils.ts", "./FPSCamera.ts", "./FollowCamera2D.ts", "./FreeCamera.ts", "./ThirdPersonCamera.ts", "./CharacterMovement.ts", "./CharacterMovement2D.ts", "./EasyController.ts", "./ThirdPersonCameraCtrl.ts", "./UI_Joystick.ts"], function (_0x538cb7) {
  var _0xad25fb;
  return {
    setters: [function (_0x577f61) {
      _0xad25fb = _0x577f61.cclegacy;
    }, function (_0x5dfdd3) {
      _0x538cb7("tgxAudioMgr", _0x5dfdd3.AudioMgr);
    }, function (_0x5a4ba6) {
      _0x538cb7("tgxInputMgr", _0x5a4ba6.InputMgr);
    }, function (_0x3d66f8) {
      _0x538cb7("tgxResourceMgr", _0x3d66f8.ResourceMgr);
    }, function (_0x670077) {
      _0x538cb7("tgxSafeJSON", _0x670077.SafeJSON);
    }, function (_0xefb7b0) {
      _0x538cb7("tgxResolutionAutoFit", _0xefb7b0.ResolutionAutoFit);
    }, function (_0x2281a5) {
      _0x538cb7("tgxModuleContext", _0x2281a5.ModuleContext);
    }, function (_0x431075) {
      _0x538cb7("tgxSceneUtil", _0x431075.SceneUtil);
    }, function (_0x41802d) {
      _0x538cb7("tgxFPSCamera", _0x41802d.FPSCamera);
    }, function (_0x5bd44b) {
      _0x538cb7("tgxFollowCamera2D", _0x5bd44b.FollowCamera2D);
    }, function (_0x5ee02d) {
      _0x538cb7("tgxFreeCamera", _0x5ee02d.FreeCamera);
    }, function (_0x3e22d9) {
      _0x538cb7("tgxThirdPersonCamera", _0x3e22d9.ThirdPersonCamera);
    }, function (_0x3cbe82) {
      _0x538cb7("tgxCharacterMovement", _0x3cbe82.CharacterMovement);
    }, function (_0x8370ef) {
      _0x538cb7("tgxCharacterMovement2D", _0x8370ef.CharacterMovement2D);
    }, function (_0x326794) {
      var _0x21e92f = {
        tgxEasyController: _0x326794.EasyController,
        tgxEasyControllerEvent: _0x326794.EasyControllerEvent
      };
      _0x538cb7(_0x21e92f);
    }, function (_0x5c8753) {
      _0x538cb7("tgxThirdPersonCameraCtrl", _0x5c8753.ThirdPersonCameraCtrl);
    }, function (_0x421487) {
      _0x538cb7("tgxUI_Joystick", _0x421487.UI_Joystick);
    }],
    execute: function () {
      _0xad25fb._RF.push({}, "f6affkIabhNnqd5KRuhkVzy", "tgx", undefined);
      _0xad25fb._RF.pop();
    }
  };
});
System.register("chunks:///_virtual/ThirdPersonCamera.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], function (_0x256cbd) {
  var _0x3a54a5;
  var _0x56897b;
  var _0x4c443e;
  var _0x4a169a;
  var _0x29e887;
  var _0x46f875;
  var _0x353c7e;
  var _0x4e446d;
  var _0x2ebfd2;
  var _0x123b95;
  return {
    setters: [function (_0x444278) {
      {
        _0x3a54a5 = _0x444278.applyDecoratedDescriptor;
        _0x56897b = _0x444278.inheritsLoose;
        _0x4c443e = _0x444278.initializerDefineProperty;
        _0x4a169a = _0x444278.assertThisInitialized;
      }
    }, function (_0x314525) {
      _0x29e887 = _0x314525.cclegacy;
      _0x46f875 = _0x314525._decorator;
      _0x353c7e = _0x314525.v3;
      _0x4e446d = _0x314525.Node;
      _0x2ebfd2 = _0x314525.Vec3;
      _0x123b95 = _0x314525.Component;
    }],
    execute: function () {
      var _0x15748e;
      var _0x4ab192;
      var _0x521fab;
      var _0x1d6a1a;
      var _0x37b690;
      var _0xc2f498;
      var _0x57a78a;
      var _0x315d1d;
      var _0x193387;
      var _0x128b64;
      var _0x26fc90;
      var _0x30965f;
      _0x29e887._RF.push({}, "0e5acyZ1V5MwY4MXWYmJeO2", "ThirdPersonCamera", undefined);
      var _0x39736a = _0x46f875.ccclass;
      var _0x3a0af3 = _0x46f875.property;
      var _0x4e3704 = _0x353c7e();
      var _0x1fdcb5 = _0x353c7e();
      _0x256cbd("ThirdPersonCamera", (_0x15748e = _0x39736a("tgxThirdPersonCamera"), _0x4ab192 = _0x3a0af3(_0x4e446d), _0x15748e((_0x37b690 = _0x3a54a5((_0x1d6a1a = function (_0x23fc60) {
        function _0x2df227() {
          for (var _0x41ff81, _0x34249d = arguments.length, _0x3b6060 = new Array(_0x34249d), _0x4714fa = 0; _0x4714fa < _0x34249d; _0x4714fa++) {
            _0x3b6060[_0x4714fa] = arguments[_0x4714fa];
          }
          _0x41ff81 = _0x23fc60.call.apply(_0x23fc60, [this].concat(_0x3b6060)) || this;
          _0x4c443e(_0x41ff81, "target", _0x37b690, _0x4a169a(_0x41ff81));
          _0x4c443e(_0x41ff81, "lookAtOffset", _0xc2f498, _0x4a169a(_0x41ff81));
          _0x4c443e(_0x41ff81, "zoomSensitivity", _0x57a78a, _0x4a169a(_0x41ff81));
          _0x4c443e(_0x41ff81, "lenMin", _0x315d1d, _0x4a169a(_0x41ff81));
          _0x4c443e(_0x41ff81, "lenMax", _0x193387, _0x4a169a(_0x41ff81));
          _0x4c443e(_0x41ff81, "len", _0x128b64, _0x4a169a(_0x41ff81));
          _0x4c443e(_0x41ff81, "rotateVHSeparately", _0x26fc90, _0x4a169a(_0x41ff81));
          _0x4c443e(_0x41ff81, "tweenTime", _0x30965f, _0x4a169a(_0x41ff81));
          _0x41ff81._targetLen = 0;
          _0x41ff81._targetAngles = _0x353c7e();
          return _0x41ff81;
        }
        _0x56897b(_0x2df227, _0x23fc60);
        var _0x23705c = _0x2df227.prototype;
        _0x23705c.start = function () {
          this._targetLen = this.len;
          this._targetAngles.set(this.node.eulerAngles);
        };
        _0x23705c.setLenFactor = function (_0x534dba) {
          var _0x5897f8 = (this.lenMax - this.lenMin) * _0x534dba + this.lenMin;
          this._targetLen = _0x5897f8;
        };
        _0x23705c.setTargetAngles = function (_0x3ad628, _0x321030, _0x3a5eca) {
          this._targetAngles.set(_0x3ad628, _0x321030, _0x3a5eca);
        };
        _0x23705c.lateUpdate = function (_0x298066) {
          if (this.target) {
            var _0x459f29 = Math.min(_0x298066 / this.tweenTime, 1);
            _0x4e3704.set(this.node.eulerAngles);
            _0x2ebfd2.lerp(_0x4e3704, _0x4e3704, this._targetAngles, _0x459f29);
            this.node.setRotationFromEuler(_0x4e3704);
            _0x4e3704.set(this.target.worldPosition);
            _0x4e3704.add(this.lookAtOffset);
            this.len = this.len * (1 - _0x459f29) + this._targetLen * _0x459f29;
            _0x1fdcb5.set(this.node.forward);
            _0x1fdcb5.multiplyScalar(this.len);
            _0x4e3704.subtract(_0x1fdcb5);
            this.node.setPosition(_0x4e3704);
          }
        };
        _0x23705c.onCameraRotate = function (_0x51e760, _0x1a47b1) {
          var _0x45d30d = this.node.eulerAngles;
          this.rotateVHSeparately && (Math.abs(_0x51e760) > Math.abs(_0x1a47b1) ? _0x1a47b1 = 0 : _0x51e760 = 0);
          this._targetAngles.set(_0x45d30d.x + 20 * _0x51e760, _0x45d30d.y + 20 * _0x1a47b1, _0x45d30d.z);
        };
        _0x23705c.onCameraZoom = function (_0x5ce329) {
          this._targetLen += _0x5ce329 * this.zoomSensitivity;
          this._targetLen < this.lenMin && (this._targetLen = this.lenMin);
          this._targetLen > this.lenMax && (this._targetLen = this.lenMax);
        };
        return _0x2df227;
      }(_0x123b95)).prototype, "target", [_0x4ab192], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _0xc2f498 = _0x3a54a5(_0x1d6a1a.prototype, "lookAtOffset", [_0x3a0af3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return _0x353c7e();
        }
      }), _0x57a78a = _0x3a54a5(_0x1d6a1a.prototype, "zoomSensitivity", [_0x3a0af3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1;
        }
      }), _0x315d1d = _0x3a54a5(_0x1d6a1a.prototype, "lenMin", [_0x3a0af3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          {
            return 1;
          }
        }
      }), _0x193387 = _0x3a54a5(_0x1d6a1a.prototype, "lenMax", [_0x3a0af3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 10;
        }
      }), _0x128b64 = _0x3a54a5(_0x1d6a1a.prototype, "len", [_0x3a0af3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 5;
        }
      }), _0x26fc90 = _0x3a54a5(_0x1d6a1a.prototype, "rotateVHSeparately", [_0x3a0af3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _0x30965f = _0x3a54a5(_0x1d6a1a.prototype, "tweenTime", [_0x3a0af3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0.2;
        }
      }), _0x521fab = _0x1d6a1a)) || _0x521fab));
      _0x29e887._RF.pop();
    }
  };
});
System.register("chunks:///_virtual/ThirdPersonCameraCtrl.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ThirdPersonCamera.ts", "./EasyController.ts"], function (_0x25fdfb) {
  var _0x28eb01;
  var _0x380046;
  var _0x5b879c;
  var _0xa54122;
  var _0x4e01bc;
  var _0x28215a;
  return {
    setters: [function (_0x495c67) {
      _0x28eb01 = _0x495c67.inheritsLoose;
    }, function (_0x5b5293) {
      _0x380046 = _0x5b5293.cclegacy;
      _0x5b879c = _0x5b5293._decorator;
    }, function (_0x11996a) {
      _0xa54122 = _0x11996a.ThirdPersonCamera;
    }, function (_0x3e35d2) {
      _0x4e01bc = _0x3e35d2.EasyController;
      _0x28215a = _0x3e35d2.EasyControllerEvent;
    }],
    execute: function () {
      var _0x1228f4;
      _0x380046._RF.push({}, "6ea3cEV3klIAZnz+Ay66ut+", "ThirdPersonCameraCtrl", undefined);
      var _0x2f3f54 = _0x5b879c.ccclass;
      _0x5b879c.property;
      _0x25fdfb("ThirdPersonCameraCtrl", _0x2f3f54("tgxThirdPersonCameraCtrl")(_0x1228f4 = function (_0x3269f0) {
        function _0x1754d7() {
          return _0x3269f0.apply(this, arguments) || this;
        }
        _0x28eb01(_0x1754d7, _0x3269f0);
        var _0x2e33d5 = _0x1754d7.prototype;
        _0x2e33d5.start = function () {
          _0x4e01bc.on(_0x28215a.CAMERA_ROTATE, this.onCameraRotate, this);
          _0x4e01bc.on(_0x28215a.CAMERA_ZOOM, this.onCameraZoom, this);
          this._targetLen = this.len;
          this._targetAngles.set(this.node.eulerAngles);
        };
        _0x2e33d5.onDestroy = function () {
          _0x4e01bc.off(_0x28215a.CAMERA_ROTATE, this.onCameraRotate, this);
          _0x4e01bc.off(_0x28215a.CAMERA_ZOOM, this.onCameraZoom, this);
        };
        return _0x1754d7;
      }(_0xa54122)) || _0x1228f4);
      _0x380046._RF.pop();
    }
  };
});
System.register("chunks:///_virtual/TrackedHandler.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./CinestationMath.ts", "./CameraHandler.ts"], function (_0x543dd7) {
  var _0x35c732;
  var _0xbdf66;
  var _0x830e46;
  var _0x9ccb53;
  var _0x334ebc;
  var _0x1ec5e9;
  return {
    setters: [function (_0x369fe8) {
      _0x35c732 = _0x369fe8.inheritsLoose;
    }, function (_0x34ba4d) {
      _0xbdf66 = _0x34ba4d.cclegacy;
      _0x830e46 = _0x34ba4d.Vec3;
    }, function (_0x2530ed) {
      _0x9ccb53 = _0x2530ed.quarticDamp;
      _0x334ebc = _0x2530ed.Vec3_closeTo;
    }, function (_0x190d61) {
      _0x1ec5e9 = _0x190d61.CameraHandler;
    }],
    execute: function () {
      _0xbdf66._RF.push({}, "394f8KsH69BrKYjKrRxsXm7", "TrackedHandler", undefined);
      var _0x5e88eb = new _0x830e46();
      _0x543dd7("TrackedHandler", function (_0xaf1c9b) {
        function _0x27ba41() {
          return _0xaf1c9b.apply(this, arguments) || this;
        }
        _0x35c732(_0x27ba41, _0xaf1c9b);
        _0x27ba41.prototype.updateCamera = function (_0x1b175b) {
          var _0xeeca58 = this._vcam;
          var _0x443e3c = _0xeeca58.body.tracked;
          if (_0x443e3c.path) {
            {
              if (_0x443e3c.autoDolly.enable && _0xeeca58.follow) {
                {
                  var _0x743952 = _0xeeca58.follow.worldPosition;
                  var _0x36f2c6 = _0x443e3c.path.findClosestPoint(_0x743952, _0x443e3c.progress, _0x443e3c.autoDolly.searchRadius, _0x443e3c.autoDolly.searchResolution);
                  _0x443e3c.progress = _0x9ccb53(_0x443e3c.progress, _0x36f2c6, _0x443e3c.damping, _0x1b175b);
                }
              }
              _0x443e3c.path.evaluatePosition(_0x5e88eb, _0x443e3c.progress);
            }
          }
          _0x334ebc(_0x5e88eb, _0xeeca58.node.worldPosition) || (_0xeeca58.node.worldPosition = _0x5e88eb);
        };
        return _0x27ba41;
      }(_0x1ec5e9));
      _0xbdf66._RF.pop();
    }
  };
});
System.register("chunks:///_virtual/Types.ts", ["cc"], function () {
  var _0x240e93;
  return {
    setters: [function (_0x209fb3) {
      _0x240e93 = _0x209fb3.cclegacy;
    }],
    execute: function () {
      _0x240e93._RF.push({}, "40519iR4mJJb649sETbQDxH", "Types", undefined);
      _0x240e93._RF.pop();
    }
  };
});
System.register("chunks:///_virtual/UI_Joystick.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./EasyController.ts"], function (_0x5bc492) {
  var _0x3f8c1b;
  var _0x1d03c7;
  var _0x5a83d3;
  var _0x2177ce;
  var _0xe46189;
  var _0x28fda2;
  var _0x330a08;
  var _0x36ff5a;
  var _0x21c855;
  var _0x13306f;
  var _0x377e67;
  var _0x192af4;
  return {
    setters: [function (_0x15db9d) {
      _0x3f8c1b = _0x15db9d.inheritsLoose;
      _0x1d03c7 = _0x15db9d.createClass;
    }, function (_0x5bb632) {
      _0x5a83d3 = _0x5bb632.cclegacy;
      _0x2177ce = _0x5bb632._decorator;
      _0xe46189 = _0x5bb632.KeyCode;
      _0x28fda2 = _0x5bb632.UITransform;
      _0x330a08 = _0x5bb632.Input;
      _0x36ff5a = _0x5bb632.input;
      _0x21c855 = _0x5bb632.director;
      _0x13306f = _0x5bb632.isValid;
      _0x377e67 = _0x5bb632.Component;
    }, function (_0x6c7093) {
      _0x192af4 = _0x6c7093.EasyControllerEvent;
    }],
    execute: function () {
      {
        var _0xfe0833;
        var _0x3f36e9;
        _0x5a83d3._RF.push({}, "0d3fdUMUH1Fq4G13IWj7Lf2", "UI_Joystick", undefined);
        var _0x3f1256 = _0x2177ce.ccclass;
        _0x2177ce.property;
        _0x5bc492("UI_Joystick", _0x3f1256("tgxUI_Joystick")(((_0x3f36e9 = function (_0x239d81) {
          {
            function _0x233094() {
              for (var _0x47edf9, _0x24483f = arguments.length, _0x5137a4 = new Array(_0x24483f), _0x46ecbd = 0; _0x46ecbd < _0x24483f; _0x46ecbd++) {
                _0x5137a4[_0x46ecbd] = arguments[_0x46ecbd];
              }
              (_0x47edf9 = _0x239d81.call.apply(_0x239d81, [this].concat(_0x5137a4)) || this)._ctrlRoot = null;
              _0x47edf9._ctrlPointer = null;
              _0x47edf9._checkerCamera = null;
              _0x47edf9._buttons = null;
              _0x47edf9._cameraSensitivity = 0.1;
              _0x47edf9._distanceOfTwoTouchPoint = 0;
              _0x47edf9._movementTouch = null;
              _0x47edf9._cameraTouchA = null;
              _0x47edf9._cameraTouchB = null;
              _0x47edf9._scene = null;
              _0x47edf9._key2buttonMap = {};
              _0x47edf9._keys = [];
              _0x47edf9._degree = 0;
              _0x47edf9._key2dirMap = null;
              return _0x47edf9;
            }
            _0x3f8c1b(_0x233094, _0x239d81);
            var _0x180360 = _0x233094.prototype;
            _0x180360.onLoad = function () {
              _0x233094._inst = this;
              this._key2buttonMap[_0xe46189.KEY_J] = "btn_slot_0";
              this._key2buttonMap[_0xe46189.KEY_K] = "btn_slot_1";
              this._key2buttonMap[_0xe46189.KEY_L] = "btn_slot_2";
              this._key2buttonMap[_0xe46189.KEY_U] = "btn_slot_3";
              this._key2buttonMap[_0xe46189.KEY_I] = "btn_slot_4";
              var _0x44be1e = this.node.getChildByName("checker_camera").getComponent(_0x28fda2);
              _0x44be1e.node.on(_0x330a08.EventType.TOUCH_START, this.onTouchStart_CameraCtrl, this);
              _0x44be1e.node.on(_0x330a08.EventType.TOUCH_MOVE, this.onTouchMove_CameraCtrl, this);
              _0x44be1e.node.on(_0x330a08.EventType.TOUCH_END, this.onTouchUp_CameraCtrl, this);
              _0x44be1e.node.on(_0x330a08.EventType.TOUCH_CANCEL, this.onTouchUp_CameraCtrl, this);
              var _0x4c4328 = this.node.getChildByName("checker_movement").getComponent(_0x28fda2);
              _0x4c4328.node.on(_0x330a08.EventType.TOUCH_START, this.onTouchStart_Movement, this);
              _0x4c4328.node.on(_0x330a08.EventType.TOUCH_MOVE, this.onTouchMove_Movement, this);
              _0x4c4328.node.on(_0x330a08.EventType.TOUCH_END, this.onTouchUp_Movement, this);
              _0x4c4328.node.on(_0x330a08.EventType.TOUCH_CANCEL, this.onTouchUp_Movement, this);
              this._checkerCamera = _0x44be1e;
              this._ctrlRoot = this.node.getChildByName("ctrl").getComponent(_0x28fda2);
              this._ctrlRoot.node.active = false;
              this._ctrlPointer = this._ctrlRoot.node.getChildByName("pointer");
              this._buttons = this.node.getChildByName("buttons");
              _0x36ff5a.on(_0x330a08.EventType.KEY_DOWN, this.onKeyDown, this);
              _0x36ff5a.on(_0x330a08.EventType.KEY_UP, this.onKeyUp, this);
              _0x36ff5a.on(_0x330a08.EventType.MOUSE_WHEEL, this.onMouseWheel, this);
              this._scene = _0x21c855.getScene();
            };
            _0x180360.onDestroy = function () {
              _0x36ff5a.off(_0x330a08.EventType.KEY_DOWN, this.onKeyDown, this);
              _0x36ff5a.off(_0x330a08.EventType.KEY_UP, this.onKeyUp, this);
              _0x36ff5a.off(_0x330a08.EventType.MOUSE_WHEEL, this.onMouseWheel, this);
              this._scene = null;
              _0x233094._inst = null;
            };
            _0x180360.cleanKeyMap = function () {
              this._key2buttonMap = {};
            };
            _0x180360.bindKeyToButton = function (_0x529403, _0x551e2c) {
              this._key2buttonMap[_0x529403] = _0x551e2c;
            };
            _0x180360.setButtonVisible = function (_0x126455, _0x21aec6) {
              var _0x18bed7;
              var _0x3f0942 = null == (_0x18bed7 = this._buttons) ? undefined : _0x18bed7.getChildByName(_0x126455);
              _0x3f0942 && (_0x3f0942.active = _0x21aec6);
            };
            _0x180360.getButtonByName = function (_0x3bcd8e) {
              return this._buttons.getChildByName(_0x3bcd8e);
            };
            _0x180360.onTouchStart_Movement = function (_0x361963) {
              {
                for (var _0x36c81a = _0x361963.getTouches(), _0x19799a = 0; _0x19799a < _0x36c81a.length; ++_0x19799a) {
                  var _0x9f044f = _0x36c81a[_0x19799a];
                  var _0x58bc6a = _0x9f044f.getUILocationX();
                  var _0x266cbc = _0x9f044f.getUILocationY();
                  if (!this._movementTouch) {
                    {
                      var _0x3a9cd9 = this._checkerCamera.width / 2;
                      var _0x1052e2 = this._checkerCamera.height / 2;
                      this._ctrlRoot.node.active = true;
                      this._ctrlRoot.node.setPosition(_0x58bc6a - _0x3a9cd9, _0x266cbc - _0x1052e2, 0);
                      this._ctrlPointer.setPosition(0, 0, 0);
                      this._movementTouch = _0x9f044f;
                    }
                  }
                }
              }
            };
            _0x180360.onTouchMove_Movement = function (_0x5386a1) {
              for (var _0x53fee1 = _0x5386a1.getTouches(), _0x2a56c = 0; _0x2a56c < _0x53fee1.length; ++_0x2a56c) {
                var _0xd9eb5a = _0x53fee1[_0x2a56c];
                if (this._movementTouch && _0xd9eb5a.getID() == this._movementTouch.getID()) {
                  var _0x4eadc8 = this._checkerCamera.width / 2;
                  var _0x39a89a = this._checkerCamera.height / 2;
                  var _0x49629e = _0xd9eb5a.getUILocationX();
                  var _0x1c5722 = _0xd9eb5a.getUILocationY();
                  var _0x571ca9 = this._ctrlRoot.node.position;
                  var _0x4d5eba = _0x49629e - _0x4eadc8 - _0x571ca9.x;
                  var _0xc7b8c0 = _0x1c5722 - _0x39a89a - _0x571ca9.y;
                  var _0x3da123 = Math.sqrt(_0x4d5eba * _0x4d5eba + _0xc7b8c0 * _0xc7b8c0);
                  if (_0x3da123 <= 0) {
                    return;
                  }
                  var _0x4b1cfc = _0x4d5eba / _0x3da123;
                  var _0x513a4a = _0xc7b8c0 / _0x3da123;
                  var _0x1fcd6d = this._ctrlRoot.width / 2;
                  _0x3da123 > _0x1fcd6d && (_0x3da123 = _0x1fcd6d, _0x4d5eba = _0x4b1cfc * _0x1fcd6d, _0xc7b8c0 = _0x513a4a * _0x1fcd6d);
                  this._ctrlPointer.setPosition(_0x4d5eba, _0xc7b8c0, 0);
                  var _0x480442 = Math.atan(_0x513a4a / _0x4b1cfc) / Math.PI * 180;
                  _0x480442 += _0x4b1cfc < 0 ? 180 : 360;
                  this.emitEvent(_0x192af4.MOVEMENT, _0x480442, _0x3da123 / _0x1fcd6d);
                }
              }
            };
            _0x180360.onTouchUp_Movement = function (_0x4cc746) {
              for (var _0x32aef8 = _0x4cc746.getTouches(), _0x308cba = 0; _0x308cba < _0x32aef8.length; ++_0x308cba) {
                var _0x5036cc = _0x32aef8[_0x308cba];
                this._movementTouch && _0x5036cc.getID() == this._movementTouch.getID() && (this.emitEvent(_0x192af4.MOVEMENT_STOP), this._movementTouch = null, this._ctrlRoot.node.active = false);
              }
            };
            _0x180360.getDistOfTwoTouchPoints = function () {
              var _0xb7686e = this._cameraTouchA;
              var _0x53c43b = this._cameraTouchB;
              if (!_0xb7686e || !_0x53c43b) {
                return 0;
              }
              var _0x5dbbc3 = _0xb7686e.getLocationX() - _0x53c43b.getLocationX();
              var _0x248bc5 = _0x53c43b.getLocationY() - _0x53c43b.getLocationY();
              return Math.sqrt(_0x5dbbc3 * _0x5dbbc3 + _0x248bc5 * _0x248bc5);
            };
            _0x180360.onTouchStart_CameraCtrl = function (_0xd76d3) {
              this.emitEvent(_0x192af4.SCREEN_TOUCH_START, _0xd76d3);
              var _0x198cd6 = _0xd76d3.getAllTouches();
              this._cameraTouchA = null;
              this._cameraTouchB = null;
              for (var _0x58d2bc = _0x198cd6.length - 1; _0x58d2bc >= 0; _0x58d2bc--) {
                var _0x947940 = _0x198cd6[_0x58d2bc];
                if (!this._movementTouch || _0x947940.getID() != this._movementTouch.getID()) {
                  if (null == this._cameraTouchA) {
                    this._cameraTouchA = _0x198cd6[_0x58d2bc];
                  } else {
                    if (null == this._cameraTouchB) {
                      this._cameraTouchB = _0x198cd6[_0x58d2bc];
                      break;
                    }
                  }
                }
              }
              this._distanceOfTwoTouchPoint = this.getDistOfTwoTouchPoints();
            };
            _0x180360.onTouchMove_CameraCtrl = function (_0x262c3a) {
              for (var _0x574830 = _0x262c3a.getTouches(), _0x336187 = 0; _0x336187 < _0x574830.length; ++_0x336187) {
                var _0x237cf3 = _0x574830[_0x336187];
                var _0x2ca35c = _0x237cf3.getID();
                if (this._cameraTouchA && this._cameraTouchB) {
                  console.log(_0x2ca35c, this._cameraTouchA.getID(), this._cameraTouchB.getID());
                  var _0x77124d = false;
                  if (_0x2ca35c == this._cameraTouchA.getID() && (this._cameraTouchA = _0x237cf3, _0x77124d = true), _0x2ca35c == this._cameraTouchB.getID() && (this._cameraTouchB = _0x237cf3, _0x77124d = true), _0x77124d) {
                    var _0x1c3799 = this.getDistOfTwoTouchPoints();
                    var _0x1b24ce = this._distanceOfTwoTouchPoint - _0x1c3799;
                    this.emitEvent(_0x192af4.CAMERA_ZOOM, _0x1b24ce);
                    this._distanceOfTwoTouchPoint = _0x1c3799;
                  }
                } else {
                  if (this._cameraTouchA && _0x2ca35c == this._cameraTouchA.getID()) {
                    var _0x46078e = _0x237cf3.getDelta();
                    var _0x194e4d = _0x46078e.y * this._cameraSensitivity;
                    var _0x10910c = -_0x46078e.x * this._cameraSensitivity;
                    this.emitEvent(_0x192af4.CAMERA_ROTATE, _0x194e4d, _0x10910c);
                  }
                }
              }
            };
            _0x180360.onTouchUp_CameraCtrl = function (_0x378618) {
              this.emitEvent(_0x192af4.SCREEN_TOUCH_END, _0x378618);
              for (var _0x279190 = _0x378618.getAllTouches(), _0x47687f = false, _0x50ac20 = false, _0x1713de = 0; _0x1713de < _0x279190.length; ++_0x1713de) {
                var _0x47cd72 = _0x279190[_0x1713de].getID();
                this._cameraTouchA && _0x47cd72 == this._cameraTouchA.getID() ? _0x47687f = true : this._cameraTouchB && _0x47cd72 == this._cameraTouchB.getID() && (_0x50ac20 = true);
              }
              _0x47687f || (this._cameraTouchA = null);
              _0x50ac20 || (this._cameraTouchB = null);
            };
            _0x180360.onKeyDown = function (_0x399cb8) {
              {
                var _0x2fc5ba = _0x399cb8.keyCode;
                if (_0x2fc5ba == _0xe46189.KEY_A || _0x2fc5ba == _0xe46189.KEY_S || _0x2fc5ba == _0xe46189.KEY_D || _0x2fc5ba == _0xe46189.KEY_W) {
                  -1 == this._keys.indexOf(_0x2fc5ba) && (this._keys.push(_0x2fc5ba), this.updateDirection());
                } else {
                  var _0x5b4caa = this._key2buttonMap[_0x2fc5ba];
                  _0x5b4caa && this.emitEvent(_0x192af4.BUTTON, _0x5b4caa);
                }
              }
            };
            _0x180360.onKeyUp = function (_0x6c89ab) {
              {
                var _0x176d5f = _0x6c89ab.keyCode;
                if (_0x176d5f == _0xe46189.KEY_A || _0x176d5f == _0xe46189.KEY_S || _0x176d5f == _0xe46189.KEY_D || _0x176d5f == _0xe46189.KEY_W) {
                  var _0x147a8c = this._keys.indexOf(_0x176d5f);
                  -1 != _0x147a8c && (this._keys.splice(_0x147a8c, 1), this.updateDirection());
                }
              }
            };
            _0x180360.onMouseWheel = function (_0x400863) {
              var _0x3eb852 = 0.1 * _0x400863.getScrollY();
              this.emitEvent(_0x192af4.CAMERA_ZOOM, _0x3eb852);
            };
            _0x180360.onButtonSlot = function (_0x53bdd3) {
              var _0x8e2ae8 = _0x53bdd3.target.name;
              this.emitEvent(_0x192af4.BUTTON, _0x8e2ae8);
            };
            _0x180360.updateDirection = function () {
              null == this._key2dirMap && (this._key2dirMap = {}, this._key2dirMap[0] = -1, this._key2dirMap[_0xe46189.KEY_A] = 180, this._key2dirMap[_0xe46189.KEY_D] = 0, this._key2dirMap[_0xe46189.KEY_W] = 90, this._key2dirMap[_0xe46189.KEY_S] = 270, this._key2dirMap[1000 * _0xe46189.KEY_A + _0xe46189.KEY_W] = this._key2dirMap[1000 * _0xe46189.KEY_W + _0xe46189.KEY_A] = 135, this._key2dirMap[1000 * _0xe46189.KEY_D + _0xe46189.KEY_W] = this._key2dirMap[1000 * _0xe46189.KEY_W + _0xe46189.KEY_D] = 45, this._key2dirMap[1000 * _0xe46189.KEY_A + _0xe46189.KEY_S] = this._key2dirMap[1000 * _0xe46189.KEY_S + _0xe46189.KEY_A] = 225, this._key2dirMap[1000 * _0xe46189.KEY_D + _0xe46189.KEY_S] = this._key2dirMap[1000 * _0xe46189.KEY_S + _0xe46189.KEY_D] = 315, this._key2dirMap[1000 * _0xe46189.KEY_A + _0xe46189.KEY_D] = this._key2dirMap[_0xe46189.KEY_D], this._key2dirMap[1000 * _0xe46189.KEY_D + _0xe46189.KEY_A] = this._key2dirMap[_0xe46189.KEY_A], this._key2dirMap[1000 * _0xe46189.KEY_W + _0xe46189.KEY_S] = this._key2dirMap[_0xe46189.KEY_S], this._key2dirMap[1000 * _0xe46189.KEY_S + _0xe46189.KEY_W] = this._key2dirMap[_0xe46189.KEY_W]);
              var _0x2e450f = this._keys[this._keys.length - 1] || 0;
              var _0x4c19d9 = this._keys[this._keys.length - 2] || 0;
              this._degree = this._key2dirMap[1000 * _0x4c19d9 + _0x2e450f];
              null == this._degree || this._degree < 0 ? this.emitEvent(_0x192af4.MOVEMENT_STOP) : this.emitEvent(_0x192af4.MOVEMENT, this._degree, 1);
            };
            _0x180360.emitEvent = function (_0x178fdd, _0x1bc725, _0x9f320e, _0x421e66, _0x953a10, _0x3ca839) {
              _0x13306f(this._scene) ? this._scene.emit(_0x178fdd, _0x1bc725, _0x9f320e, _0x421e66, _0x953a10, _0x3ca839) : console.log("oops!");
            };
            _0x1d03c7(_0x233094, null, [{
              key: "inst",
              get: function () {
                return this._inst;
              }
            }]);
            return _0x233094;
          }
        }(_0x377e67))._inst = null, _0xfe0833 = _0x3f36e9)) || _0xfe0833);
        _0x5a83d3._RF.pop();
      }
    }
  };
});
System.register("chunks:///_virtual/UIFast.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./UIMgr.ts"], function (_0x385fa8) {
  var _0x3bb499;
  var _0x19cf85;
  var _0x2f0409;
  var _0x4df10a;
  return {
    setters: [function (_0x90397d) {
      _0x3bb499 = _0x90397d.asyncToGenerator;
      _0x19cf85 = _0x90397d.regeneratorRuntime;
    }, function (_0x10d32a) {
      _0x2f0409 = _0x10d32a.cclegacy;
    }, function (_0x56f5e8) {
      _0x4df10a = _0x56f5e8.UIMgr;
    }],
    execute: function () {
      function _0x120387() {
        return (_0x120387 = _0x3bb499(_0x19cf85().mark(function _0x4ff4e3(_0x3a78c7, _0x414524) {
          return _0x19cf85().wrap(function (_0x4d54d6) {
            for (;;) {
              switch (_0x4d54d6.prev = _0x4d54d6.next) {
                case 0:
                  _0x4d54d6.next = 2;
                  return _0x4df10a.ins.changeScene(_0x3a78c7, _0x414524);
                case 2:
                case "end":
                  return _0x4d54d6.stop();
              }
            }
          }, _0x4ff4e3);
        }))).apply(this, arguments);
      }
      function _0x29a4d2() {
        return (_0x29a4d2 = _0x3bb499(_0x19cf85().mark(function _0x19ee25(_0x47d6ed, _0x1a6043, _0x3d736d) {
          return _0x19cf85().wrap(function (_0x31d698) {
            for (;;) {
              switch (_0x31d698.prev = _0x31d698.next) {
                case 0:
                  undefined === _0x1a6043 && (_0x1a6043 = {});
                  undefined === _0x3d736d && (_0x3d736d = true);
                  _0x31d698.next = 4;
                  return _0x4df10a.ins.showPanel(_0x47d6ed, _0x1a6043, _0x3d736d);
                case 4:
                case "end":
                  return _0x31d698.stop();
              }
            }
          }, _0x19ee25);
        }))).apply(this, arguments);
      }
      _0x385fa8({
        changeScene: function (_0x1c4000, _0xbdbafc) {
          return _0x120387.apply(this, arguments);
        },
        hideAllPanel: function () {
          _0x4df10a.ins.hideAllPanel();
        },
        hideGlobalDisable: function () {
          _0x4df10a.ins.hideGlobalDisable();
        },
        hidePanel: function () {
          _0x4df10a.ins.hidePanel();
        },
        hideShareGuide: function () {
          _0x4df10a.ins.hideShareGuide();
        },
        hideToast: function () {
          _0x4df10a.ins.hideToast();
        },
        hideWaiting: function () {
          {
            _0x4df10a.ins.hideWaiting();
          }
        },
        showGlobalDisable: function () {
          _0x4df10a.ins.showGlobalDisable();
        },
        showPanel: function (_0xe70e2a, _0x162365, _0x2263b1) {
          return _0x29a4d2.apply(this, arguments);
        },
        showShareGuide: function (_0x2afe9e) {
          undefined === _0x2afe9e && (_0x2afe9e = "");
          _0x4df10a.ins.showShareGuide(_0x2afe9e);
        },
        showToast: function (_0x2f4a4b, _0x59c57e) {
          undefined === _0x59c57e && (_0x59c57e = false);
          _0x4df10a.ins.showToast(_0x2f4a4b, _0x59c57e);
        },
        showWaiting: function (_0x349adb) {
          undefined === _0x349adb && (_0x349adb = true);
          _0x4df10a.ins.showWaiting(_0x349adb);
        }
      });
      _0x2f0409._RF.push({}, "42c74prs9lCNrLv7UFA2LTY", "UIFast", undefined);
      _0x2f0409._RF.pop();
    }
  };
});
System.register("chunks:///_virtual/UILayer.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Utils.ts"], function (_0x397f61) {
  var _0x9a7ba9;
  var _0x2817e1;
  var _0x1b949f;
  var _0x551c48;
  var _0x1b56e0;
  return {
    setters: [function (_0x523ae1) {
      _0x9a7ba9 = _0x523ae1.inheritsLoose;
    }, function (_0x187f00) {
      _0x2817e1 = _0x187f00.cclegacy;
      _0x1b949f = _0x187f00._decorator;
      _0x551c48 = _0x187f00.Component;
    }, function (_0x83aa76) {
      _0x1b56e0 = _0x83aa76.loadAllObject;
    }],
    execute: function () {
      {
        var _0x4559b5;
        _0x2817e1._RF.push({}, "a032b0Ty6NI274+xBeAzjkP", "UILayer", undefined);
        var _0x199977 = _0x1b949f.ccclass;
        _0x1b949f.property;
        _0x397f61("UILayer", _0x199977("UILayer")(_0x4559b5 = function (_0x22ba91) {
          function _0x2f4045() {
            for (var _0xe230a4, _0x4e857e = arguments.length, _0x303cbf = new Array(_0x4e857e), _0xd14859 = 0; _0xd14859 < _0x4e857e; _0xd14859++) {
              _0x303cbf[_0xd14859] = arguments[_0xd14859];
            }
            (_0xe230a4 = _0x22ba91.call.apply(_0x22ba91, [this].concat(_0x303cbf)) || this).view = {};
            return _0xe230a4;
          }
          _0x9a7ba9(_0x2f4045, _0x22ba91);
          var _0xfb9a7 = _0x2f4045.prototype;
          _0xfb9a7.onLoad = function () {
            this.view = _0x1b56e0(this.node);
          };
          _0xfb9a7.start = function () {};
          _0xfb9a7.update = function (_0x550c96) {};
          return _0x2f4045;
        }(_0x551c48)) || _0x4559b5);
        _0x2817e1._RF.pop();
      }
    }
  };
});
System.register("chunks:///_virtual/UIMgr.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./RES.ts"], function (_0x588839) {
  var _0x50f865;
  var _0x68b478;
  var _0x2e991d;
  var _0x48c67b;
  var _0x1dec65;
  var _0xb7c9d9;
  var _0x4ef1ba;
  var _0x4b8284;
  var _0x2c43f6;
  var _0x1ce086;
  var _0x3c7806;
  var _0x12a338;
  var _0x1ec9b3;
  var _0x59a2f4;
  var _0x5ccbf6;
  var _0x5c3dd0;
  var _0x720034;
  return {
    setters: [function (_0x2c5171) {
      _0x50f865 = _0x2c5171.createClass;
      _0x68b478 = _0x2c5171.asyncToGenerator;
      _0x2e991d = _0x2c5171.regeneratorRuntime;
    }, function (_0x51d714) {
      _0x48c67b = _0x51d714.cclegacy;
      _0x1dec65 = _0x51d714.UITransform;
      _0xb7c9d9 = _0x51d714.Node;
      _0x4ef1ba = _0x51d714.Widget;
      _0x4b8284 = _0x51d714.error;
      _0x2c43f6 = _0x51d714.Prefab;
      _0x1ce086 = _0x51d714.instantiate;
      _0x3c7806 = _0x51d714.director;
      _0x12a338 = _0x51d714.Button;
      _0x1ec9b3 = _0x51d714.Label;
      _0x59a2f4 = _0x51d714.UIOpacity;
      _0x5ccbf6 = _0x51d714.tween;
      _0x5c3dd0 = _0x51d714.assetManager;
    }, function (_0x5a8e19) {
      _0x720034 = _0x5a8e19.default;
    }],
    execute: function () {
      _0x48c67b._RF.push({}, "b314f3pHVtLKZvc4RyYCVGa", "UIMgr", undefined);
      _0x588839("UIMgr", function () {
        function _0x3dc5af() {
          this.uiCanvas = undefined;
          this.globalDisableTouch = null;
          this.shareGuide = null;
          this.currentScene = {
            data: undefined
          };
          this.panel = undefined;
          this.panelMask = undefined;
          this.panelStack = [];
          this.curPanel = null;
          this.toast = undefined;
          this.toastBg = undefined;
          this.toastLabel = undefined;
          this.waiting = undefined;
        }
        var _0x32ac65 = _0x3dc5af.prototype;
        _0x32ac65.createFullScreenNode = function () {
          var _0x325636 = this.uiCanvas.getComponent(_0x1dec65);
          var _0x5e6177 = new _0xb7c9d9();
          _0x5e6177.layer = this.uiCanvas.layer;
          var _0x19e837 = _0x5e6177.addComponent(_0x1dec65);
          _0x19e837.width = _0x325636.width;
          _0x19e837.height = _0x325636.height;
          var _0x135e1f = _0x5e6177.addComponent(_0x4ef1ba);
          _0x135e1f.isAlignBottom = true;
          _0x135e1f.isAlignTop = true;
          _0x135e1f.isAlignLeft = true;
          _0x135e1f.isAlignRight = true;
          _0x135e1f.left = 0;
          _0x135e1f.right = 0;
          _0x135e1f.top = 0;
          _0x135e1f.bottom = 0;
          return _0x5e6177;
        };
        _0x32ac65.setup = function (_0x35636c, _0x386847) {
          {
            if (!this.uiCanvas) {
              if (!_0x35636c) {
                throw _0x4b8284("必须是Node或Prefab");
              }
              _0x35636c instanceof _0x2c43f6 ? (this.uiCanvas = _0x1ce086(_0x35636c), _0x3c7806.getScene().addChild(this.uiCanvas)) : this.uiCanvas = _0x35636c;
              this.uiCanvas.name = "$UICanvas$";
              _0x3c7806.addPersistRootNode(this.uiCanvas);
              this.waiting = this.uiCanvas.getChildByName("Waiting");
              this.panel = this.uiCanvas.getChildByName("Panel");
              this.panelMask = this.panel.getChildByName("mask");
              this.toast = this.uiCanvas.getChildByName("Toast");
              this.toastBg = this.toast.getChildByName("bg");
              this.toastLabel = this.toastBg.getChildByName("label");
              this.shareGuide = this.uiCanvas.getChildByName("ShareGuide");
              this.hideShareGuide();
              this.shareGuide.on(_0x12a338.EventType.CLICK, this.hideShareGuide, this);
              this.waiting.active = false;
              this.toast.active = false;
              this.globalDisableTouch = this.uiCanvas.getChildByName("globalDisableTouch");
              this.globalDisableTouch.active = false;
            }
          }
        };
        _0x32ac65.showGlobalDisable = function (_0x590e38) {
          this.globalDisableTouch.active = true;
        };
        _0x32ac65.hideGlobalDisable = function () {
          this.globalDisableTouch.active = false;
        };
        _0x32ac65.showShareGuide = function (_0x1ee15b) {
          undefined === _0x1ee15b && (_0x1ee15b = "");
          this.shareGuide.active = true;
          this.shareGuide.getChildByName("label").getComponent(_0x1ec9b3).string = _0x1ee15b;
        };
        _0x32ac65.hideShareGuide = function () {
          this.shareGuide.active = false;
        };
        _0x3dc5af.changeScene = function () {
          var _0x14a392 = _0x68b478(_0x2e991d().mark(function _0x5b1577(_0x3e376a, _0x167ccb) {
            return _0x2e991d().wrap(function (_0x2fdd15) {
              for (;;) {
                switch (_0x2fdd15.prev = _0x2fdd15.next) {
                  case 0:
                    undefined === _0x167ccb && (_0x167ccb = {});
                    _0x2fdd15.next = 3;
                    return _0x3dc5af.ins.changeScene(_0x3e376a, _0x167ccb);
                  case 3:
                  case "end":
                    return _0x2fdd15.stop();
                }
              }
            }, _0x5b1577);
          }));
          return function (_0x333dcb, _0x2564df) {
            return _0x14a392.apply(this, arguments);
          };
        }();
        _0x32ac65.preloadScene = function () {
          var _0x29b2b0 = _0x68b478(_0x2e991d().mark(function _0x4b6063(_0x11b36b) {
            var _0x2e1e65;
            var _0x5e5ccd;
            var _0x213967;
            var _0x17d372;
            var _0x47b22e;
            return _0x2e991d().wrap(function (_0x52e914) {
              for (;;) {
                switch (_0x52e914.prev = _0x52e914.next) {
                  case 0:
                    _0x2e1e65 = _0x11b36b.skin;
                    _0x5e5ccd = _0x11b36b.group;
                    _0x213967 = undefined === _0x5e5ccd ? _0x2e1e65 : _0x5e5ccd;
                    _0x17d372 = _0x11b36b.bundle;
                    _0x47b22e = [];
                    _0x17d372 ? _0x5c3dd0.getBundle(_0x17d372) || _0x47b22e.push(new Promise(function (_0x5a6fcd, _0x51f295) {
                      _0x5c3dd0.loadBundle(_0x17d372, function (_0x465dfc, _0x2ab3aa) {
                        _0x465dfc ? _0x51f295(_0x465dfc) : _0x5a6fcd();
                      });
                    })) : Array.isArray(_0x213967) ? _0x213967.forEach(function (_0xfa6ab7) {
                      {
                        _0x47b22e.push(_0x720034.loadDir(_0xfa6ab7));
                      }
                    }) : _0x47b22e.push(_0x720034.loadDir(_0x213967));
                    _0x47b22e.push(new Promise(function (_0x42f1b6, _0x619f7d) {
                      _0x3c7806.preloadScene(_0x2e1e65, function () {
                        _0x42f1b6();
                      });
                    }));
                    _0x52e914.next = 6;
                    return Promise.all(_0x47b22e);
                  case 6:
                  case "end":
                    return _0x52e914.stop();
                }
              }
            }, _0x4b6063);
          }));
          return function (_0x162e37) {
            return _0x29b2b0.apply(this, arguments);
          };
        }();
        _0x32ac65.changeScene = function () {
          var _0x312f57 = _0x68b478(_0x2e991d().mark(function _0x4f5ea4(_0x764284, _0x4bd15b) {
            var _0x529b53;
            var _0x1bfef7;
            var _0xfcd1f0;
            var _0x5a1d8a;
            var _0x541bef;
            var _0xb44cbc = this;
            return _0x2e991d().wrap(function (_0x1573f9) {
              for (;;) {
                switch (_0x1573f9.prev = _0x1573f9.next) {
                  case 0:
                    undefined === _0x4bd15b && (_0x4bd15b = {});
                    _0x529b53 = _0x764284.skin;
                    _0x1bfef7 = _0x764284.group;
                    _0xfcd1f0 = undefined === _0x1bfef7 ? _0x529b53 : _0x1bfef7;
                    _0x5a1d8a = _0x764284.bundle;
                    _0x541bef = [];
                    _0x5a1d8a ? _0x5c3dd0.getBundle(_0x5a1d8a) || _0x541bef.push(new Promise(function (_0x17a4c2, _0x46fccd) {
                      _0x5c3dd0.loadBundle(_0x5a1d8a, function (_0x887ea5, _0x20aae7) {
                        _0x887ea5 ? _0x46fccd(_0x887ea5) : _0x17a4c2();
                      });
                    })) : Array.isArray(_0xfcd1f0) ? _0xfcd1f0.forEach(function (_0x1fe0ca) {
                      _0x541bef.push(_0x720034.loadDir(_0x1fe0ca));
                    }) : _0x541bef.push(_0x720034.loadDir(_0xfcd1f0));
                    this.showWaiting();
                    _0x1573f9.next = 7;
                    return Promise.all(_0x541bef);
                  case 7:
                    _0x3c7806.loadScene(_0x529b53, function (_0x147870, _0x1fddf9) {
                      var _0x4d1f17 = _0x1fddf9.getComponentInChildren(_0x764284);
                      _0x4d1f17 && (_0x4d1f17.data = _0x4bd15b);
                      _0xb44cbc.hideWaiting();
                    }, function () {});
                  case 8:
                  case "end":
                    return _0x1573f9.stop();
                }
              }
            }, _0x4f5ea4, this);
          }));
          return function (_0x316509, _0x54f741) {
            return _0x312f57.apply(this, arguments);
          };
        }();
        _0x32ac65.showPanel = function () {
          var _0x46f0db = _0x68b478(_0x2e991d().mark(function _0x9cd19b(_0x3ce948, _0x47616e, _0x443165) {
            var _0x188b6e;
            var _0x3f06b7;
            var _0x5511ff;
            var _0x4674fe;
            var _0x3b6d68;
            var _0xcd0f33;
            var _0x41cb71;
            var _0x4605cf;
            var _0x438f8b;
            return _0x2e991d().wrap(function (_0x20ee86) {
              for (;;) {
                switch (_0x20ee86.prev = _0x20ee86.next) {
                  case 0:
                    if (undefined === _0x47616e && (_0x47616e = {}), undefined === _0x443165 && (_0x443165 = true), _0x188b6e = _0x3ce948.skin, _0x3f06b7 = _0x3ce948.group, _0x5511ff = undefined === _0x3f06b7 ? _0x188b6e : _0x3f06b7, _0x4674fe = _0x3ce948.bundle, _0x3b6d68 = [], !_0x4674fe) {
                      {
                        _0x20ee86.next = 13;
                        break;
                      }
                    }
                    if (_0xcd0f33 = _0x5c3dd0.getBundle(_0x4674fe)) {
                      {
                        _0x20ee86.next = 10;
                        break;
                      }
                    }
                    _0x20ee86.next = 9;
                    return new Promise(function (_0x54b4d3, _0xcd040c) {
                      _0x5c3dd0.loadBundle(_0x4674fe, function (_0x24d13d, _0x626f85) {
                        _0x24d13d ? _0xcd040c(_0x24d13d) : _0x54b4d3(_0x626f85);
                      });
                    });
                  case 9:
                    _0xcd0f33 = _0x20ee86.sent;
                  case 10:
                    _0x3b6d68.push(new Promise(function (_0x4a3e76) {
                      _0xcd0f33.load(_0x188b6e, _0x2c43f6, function (_0x4d7af7, _0xef7e0) {
                        _0x4d7af7 ? (console.warn("资源 " + _0x188b6e + " 加载失败:", _0x4d7af7), _0x4a3e76(null)) : _0x4a3e76(_0xef7e0 || null);
                      });
                    }));
                    _0x20ee86.next = 15;
                    break;
                  case 13:
                    _0x3b6d68.push(_0x720034.loadRes(_0x188b6e + "/" + _0x188b6e, _0x2c43f6));
                    Array.isArray(_0x5511ff) ? _0x5511ff.forEach(function (_0x23bc68) {
                      _0x3b6d68.push(_0x720034.loadDir(_0x23bc68));
                    }) : _0x3b6d68.push(_0x720034.loadDir(_0x5511ff));
                  case 15:
                    this.showWaiting();
                    _0x20ee86.next = 18;
                    return Promise.all(_0x3b6d68);
                  case 18:
                    _0x41cb71 = _0x20ee86.sent;
                    this.hideWaiting();
                    this.curPanel && (this.curPanel.node.active = false, this.panelStack.push(this.curPanel));
                    this.panelMask.active = true;
                    this.panelMask.getComponent(_0x59a2f4).opacity = _0x443165 ? 216.75 : 0;
                    _0x4605cf = _0x1ce086(_0x41cb71[0]);
                    (_0x438f8b = _0x4605cf.getComponent(_0x3ce948)) || (_0x438f8b = _0x4605cf.addComponent(_0x3ce948));
                    this.panel.active = true;
                    this.panel.addChild(_0x4605cf);
                    _0x4605cf.layer = this.panel.layer;
                    _0x438f8b.data = _0x47616e;
                    _0x438f8b.onShow();
                    this.curPanel = {
                      cls: _0x3ce948,
                      data: _0x47616e,
                      showMask: _0x443165,
                      node: _0x4605cf
                    };
                    return _0x20ee86.abrupt("return", _0x438f8b);
                  case 33:
                  case "end":
                    return _0x20ee86.stop();
                }
              }
            }, _0x9cd19b, this);
          }));
          return function (_0x4e4273, _0x34be6c, _0x3eb813) {
            return _0x46f0db.apply(this, arguments);
          };
        }();
        _0x32ac65.hidePanel = function () {
          {
            if (this.curPanel) {
              var _0x377814 = this.curPanel.node;
              if (_0x377814.destroy(), this.panel.removeChild(_0x377814), this.panel.active = false, this.curPanel = null, this.curPanel = this.panelStack.pop(), this.curPanel) {
                var _0x594a51 = this.curPanel;
                var _0x300f72 = _0x594a51.node;
                var _0x200548 = _0x594a51.showMask;
                _0x300f72.active = true;
                _0x200548 && (this.panel.active = true, this.panelMask.getComponent(_0x59a2f4).opacity = 204);
              }
            }
          }
        };
        _0x32ac65.hideAllPanel = function () {
          console.log("执行了");
          for (var _0x21c95c = 0; _0x21c95c < this.panelStack.length; _0x21c95c++) {
            this.panel.removeChild(this.panelStack[_0x21c95c].node);
            this.panelStack[_0x21c95c].node.destroy();
          }
          this.panelStack = [];
          this.hidePanel();
          this.panelMask.active = false;
          this.curPanel = null;
        };
        _0x3dc5af.showToast = function (_0x1d276b, _0x74ae92) {
          undefined === _0x74ae92 && (_0x74ae92 = false);
          _0x3dc5af.ins.showToast(_0x1d276b, _0x74ae92);
        };
        _0x3dc5af.hideToast = function () {
          _0x3dc5af.ins.hideToast();
        };
        _0x32ac65.showToast = function (_0x1a9592, _0x443b5f) {
          var _0x4bf55e = this;
          undefined === _0x443b5f && (_0x443b5f = false);
          var _0x388888 = this.toast.getChildByName("mask");
          var _0x218e09 = this.toast.getComponent(_0x59a2f4);
          this.toastLabel.getComponent(_0x1ec9b3).string = _0x1a9592.toString();
          this.toast.active = true;
          _0x388888.active = _0x443b5f;
          _0x5ccbf6(_0x218e09).stop().to(0.25, {
            opacity: 255
          }).delay(1.7).to(0.25, {
            opacity: 0
          }).call(function () {
            return _0x4bf55e.hideToast();
          }).start();
        };
        _0x32ac65.hideToast = function () {
          {
            this.toast.active = false;
            _0x5ccbf6(this.toast).stop();
          }
        };
        _0x3dc5af.showWaiting = function (_0x26ed90) {
          undefined === _0x26ed90 && (_0x26ed90 = true);
          _0x3dc5af.ins.showWaiting(_0x26ed90);
        };
        _0x3dc5af.hideWaiting = function () {
          _0x3dc5af.ins.hideWaiting();
        };
        _0x32ac65.showWaiting = function (_0x5737e0) {
          undefined === _0x5737e0 && (_0x5737e0 = true);
          var _0x169d3b = this.waiting.getChildByName("waitingRot");
          var _0x1b6e79 = this.waiting.getChildByName("mask");
          this.waiting.active = true;
          _0x1b6e79.active = _0x5737e0;
          _0x5ccbf6(_0x169d3b).repeatForever(_0x5ccbf6(_0x169d3b).by(1, {
            angle: 360
          })).start();
        };
        _0x32ac65.hideWaiting = function () {
          var _0x58b48f = this.waiting.getChildByName("waitingRot");
          this.waiting.active = false;
          _0x5ccbf6(_0x58b48f).stop();
        };
        _0x50f865(_0x3dc5af, null, [{
          key: "ins",
          get: function () {
            _0x3dc5af._ins || (_0x3dc5af._ins = new _0x3dc5af());
            return _0x3dc5af._ins;
          }
        }]);
        return _0x3dc5af;
      }())._ins = null;
      _0x48c67b._RF.pop();
    }
  };
});
System.register("chunks:///_virtual/uitl.ts", ["cc"], function (_0x2796a4) {
  var _0x3f711e;
  var _0x458eae;
  return {
    setters: [function (_0x92e007) {
      _0x3f711e = _0x92e007.cclegacy;
      _0x458eae = _0x92e007.lerp;
    }],
    execute: function () {
      _0x2796a4({
        formatTime: function (_0x5453a6) {
          var _0x28e0ee = Math.floor(_0x5453a6 / 60);
          var _0x587f60 = Math.floor(_0x5453a6 % 60);
          return _0x28e0ee.toString().padStart(2, "0") + ":" + _0x587f60.toString().padStart(2, "0");
        },
        isIntersect: function (_0x45cf4b, _0x1d41f1, _0x5f4f84, _0x60340d) {
          return _0x5f4f84 > Math.abs(_0x45cf4b.x - _0x1d41f1.x) && _0x60340d > Math.abs(_0x45cf4b.y - _0x1d41f1.y);
        },
        randomV3: function (_0xdaeac2, _0x3cd34e, _0x68b465, _0x1053a0, _0x5f06d7, _0x592192) {
          var _0x1207a2 = _0x458eae(_0xdaeac2, _0x3cd34e, Math.random());
          var _0x84b2bf = _0x458eae(_0x68b465, _0x1053a0, Math.random());
          var _0xc533c6 = _0x458eae(_0x5f06d7, _0x592192, Math.random());
          return {
            x: _0x1207a2,
            y: _0x84b2bf,
            z: _0xc533c6
          };
        }
      });
      _0x3f711e._RF.push({}, "608b1eMonJEYIZYloVB6ufw", "uitl", undefined);
      _0x3f711e._RF.pop();
    }
  };
});
System.register("chunks:///_virtual/URLUtils.ts", ["cc"], function (_0x47cfda) {
  var _0x1c8b8a;
  return {
    setters: [function (_0x4b33a2) {
      _0x1c8b8a = _0x4b33a2.cclegacy;
    }],
    execute: function () {
      _0x47cfda("urlParse", function () {
        var _0x111e73;
        var _0x17a5c0;
        var _0x8239cf = {};
        if (!window.location) {
          return _0x8239cf;
        }
        for (var _0x4a6efd = window.location.href, _0x5eb04a = _0x4a6efd.indexOf("?"), _0x4db362 = (_0x4a6efd = _0x4a6efd.substring(_0x5eb04a + 1)).split("&"), _0x5b9dc2 = 0; _0x5b9dc2 < _0x4db362.length; _0x5b9dc2++) {
          (_0x5eb04a = _0x4db362[_0x5b9dc2].indexOf("=")) > 0 && (_0x111e73 = _0x4db362[_0x5b9dc2].substring(0, _0x5eb04a), _0x17a5c0 = _0x4db362[_0x5b9dc2].substr(_0x5eb04a + 1), _0x8239cf[_0x111e73] = _0x17a5c0);
        }
        return _0x8239cf;
      });
      _0x1c8b8a._RF.push({}, "bac65L5Qr9DOp7zav7JnYaI", "URLUtils", undefined);
      _0x1c8b8a._RF.pop();
    }
  };
});
System.register("chunks:///_virtual/Utils.ts", ["cc", "./Svga.ts"], function (_0x347a04) {
  var _0x5cd9b8;
  var _0x2526e3;
  var _0x224a6f;
  var _0x28ee11;
  var _0x5f32f6;
  var _0x49e023;
  var _0x5baa7d;
  var _0x5c6b12;
  return {
    setters: [function (_0x1dd4c4) {
      _0x5cd9b8 = _0x1dd4c4.cclegacy;
      _0x2526e3 = _0x1dd4c4.tween;
      _0x224a6f = _0x1dd4c4.director;
      _0x28ee11 = _0x1dd4c4.Node;
      _0x5f32f6 = _0x1dd4c4.SpriteFrame;
      _0x49e023 = _0x1dd4c4.Texture2D;
      _0x5baa7d = _0x1dd4c4.assetManager;
    }, function (_0x4230c0) {
      _0x5c6b12 = _0x4230c0.default;
    }],
    execute: function () {
      _0x347a04({
        addButtonClick: function (_0xf1c8ab, _0x5bb3e9, _0x59ab4a) {
          _0xf1c8ab.on(_0x28ee11.EventType.TOUCH_END, _0x5bb3e9, _0x59ab4a);
        },
        getQueryParamValue: function (_0x340be1, _0x362cf3) {
          var _0x376d5d = new RegExp("[?&]" + _0x362cf3 + "=([^&#]*)").exec(_0x340be1);
          if (_0x376d5d) {
            return decodeURIComponent(_0x376d5d[1] || "");
          }
          return null;
        },
        getUrlParam: function (_0xcd7c1a) {
          var _0x1e1703 = window.location.search;
          var _0x59a346 = _0x1e1703.slice(1).match(new RegExp("(^|&)" + _0xcd7c1a + "=([^&]*)(&|$)", "i"));
          return _0x1e1703.length ? _0x59a346 && _0x59a346[2] : null;
        },
        loadAllObject: function _0x604486(_0x145973, _0x5bb4f4, _0x477b23) {
          undefined === _0x5bb4f4 && (_0x5bb4f4 = {});
          undefined === _0x477b23 && (_0x477b23 = "");
          if (_0x145973.getComponent(_0x5c6b12)) {
            return;
          }
          for (var _0x20500e = _0x145973.children.length, _0x44cd73 = 0; _0x44cd73 < _0x20500e; _0x44cd73++) {
            _0x5bb4f4[_0x477b23 + _0x145973.children[_0x44cd73].name] = _0x145973.children[_0x44cd73];
            _0x604486(_0x145973.children[_0x44cd73], _0x5bb4f4, _0x477b23 + _0x145973.children[_0x44cd73].name + "/");
          }
          return _0x5bb4f4;
        },
        loadImg: function (_0x27f960, _0x3ed12c) {
          if (!_0x27f960) {
            return;
          }
          return new Promise(function (_0x494841, _0x538f6c) {
            var _0x351167 = new _0x5f32f6();
            var _0x5a19ef = new _0x49e023();
            _0x5baa7d.loadRemote(_0x27f960, {
              ext: ".png"
            }, function (_0x10b241, _0x13572f) {
              _0x10b241 && _0x538f6c(_0x10b241);
              _0x5a19ef.image = _0x13572f;
              _0x351167.texture = _0x5a19ef;
              var _0x4400d2 = _0x351167.width;
              var _0x38bb70 = _0x351167.height;
              _0x494841({
                spriteFrame: _0x351167,
                scale: _0x4400d2 > _0x38bb70 ? _0x4400d2 / _0x3ed12c : _0x38bb70 / _0x3ed12c
              });
            });
          });
        },
        parseHtml: function (_0x2887b1) {
          var _0x4c445e = document.createElement("div");
          _0x4c445e.innerHTML = _0x2887b1;
          return _0x4c445e.children[0];
        },
        prefixInteger: function (_0x5cf643, _0x35c481) {
          return (Array(_0x35c481).join("0") + _0x5cf643).slice(-_0x35c481);
        },
        randomNum: function (_0x5d494d, _0x4fc47f) {
          {
            return Math.floor(Math.random() * (_0x4fc47f - _0x5d494d)) + _0x5d494d;
          }
        },
        sleep: function (_0xc26265) {
          return new Promise(function (_0x86daf9) {
            _0x2526e3(_0x224a6f.getScene()).delay(_0xc26265).call(_0x86daf9).start();
          });
        },
        strFormat: function (_0x3ed4ca, _0x481f91) {
          undefined === _0x481f91 && (_0x481f91 = 8);
          var _0x35ccf1 = (_0x3ed4ca += "").length;
          var _0x47f43e = 0;
          var _0xbae7aa = 0;
          for (; _0x47f43e < _0x35ccf1 && _0xbae7aa <= _0x481f91;) {
            /.*[\u4e00-\u9fa5]+.*$/.test(_0x3ed4ca[_0x47f43e]) ? _0xbae7aa += 2 : _0xbae7aa += 1;
            _0x47f43e++;
          }
          return _0x3ed4ca.substring(0, _0x47f43e) + (_0xbae7aa <= _0x481f91 || _0x47f43e == _0x35ccf1 ? "" : "...");
        },
        wait: function (_0xa57e1f) {
          return new Promise(function (_0x5ba011) {
            return setTimeout(_0x5ba011, 1000 * _0xa57e1f);
          });
        }
      });
      _0x5cd9b8._RF.push({}, "27ebdQLIChPppsUOB176LF4", "Utils", undefined);
      _0x347a04("addHttps", function (_0x286283) {
        var _0x1c3fd6;
        undefined === _0x286283 && (_0x286283 = "");
        return (_0x286283 = _0x286283 || "").includes("//") ? null != (_0x1c3fd6 = _0x286283) && _0x1c3fd6.includes("http") ? _0x286283 : "https:" + _0x286283 : "";
      });
      _0x347a04("getMS", function (_0x4972ff) {
        undefined === _0x4972ff && (_0x4972ff = 0);
        var _0x4110a0 = _0x4972ff / 1000;
        return String(Math.floor(_0x4110a0 / 60)).padStart(1, "0") + "分" + String(Math.floor(_0x4110a0 % 60)).padStart(1, "0") + "秒";
      });
      _0x347a04("dateFormatter", function (_0x1cd165, _0x20781e) {
        if (undefined === _0x20781e && (_0x20781e = "yyyy/MM/dd"), !_0x1cd165) {
          return "-";
        }
        var _0x2560cb = {
          "M+": (_0x1cd165 = new Date("string" == typeof _0x1cd165 && isNaN(+_0x1cd165) ? _0x1cd165.replace(/-/g, "/") : Number(_0x1cd165))).getMonth() + 1,
          "d+": _0x1cd165.getDate(),
          "h+": _0x1cd165.getHours(),
          "m+": _0x1cd165.getMinutes(),
          "s+": _0x1cd165.getSeconds(),
          "q+": Math.floor((_0x1cd165.getMonth() + 3) / 3),
          S: _0x1cd165.getMilliseconds()
        };
        for (var _0x3e761c in /(y+)/.test(_0x20781e) && (_0x20781e = _0x20781e.replace(RegExp.$1, (_0x1cd165.getFullYear() + "").substr(4 - RegExp.$1.length))), _0x2560cb) new RegExp("(" + _0x3e761c + ")").test(_0x20781e) && (_0x20781e = _0x20781e.replace(RegExp.$1, 1 === RegExp.$1.length ? _0x2560cb[_0x3e761c] : ("00" + _0x2560cb[_0x3e761c]).substr(("" + _0x2560cb[_0x3e761c]).length)));
        return _0x20781e;
      });
      _0x347a04("getWeek", function (_0x3c4ea4) {
        var _0xf0de90 = _0x3c4ea4.getDay();
        0 == _0xf0de90 && (_0xf0de90 = 7);
        return _0xf0de90;
      });
      var _0x362949 = _0x347a04("modAndDivide", function (_0x34a1d4, _0x3ebdbc) {
        if ("number" != typeof _0x34a1d4) {
          throw new Error("Error type.");
        }
        if ("number" == typeof _0x3ebdbc) {
          return [_0x34a1d4 % _0x3ebdbc, Math.floor(_0x34a1d4 / _0x3ebdbc)];
        }
        if (Array.isArray(_0x3ebdbc)) {
          var _0x3cae76 = _0x34a1d4;
          var _0x350130 = _0x3ebdbc.map(function (_0xf9b08d) {
            var _0x4a0ada = _0x3cae76 % _0xf9b08d;
            _0x3cae76 = Math.floor(_0x3cae76 / _0xf9b08d);
            return _0x4a0ada;
          });
          0 !== _0x3cae76 && _0x350130.push(_0x3cae76);
          return _0x350130;
        }
      });
      _0x347a04("sepTime", function (_0x458dcd, _0x21f3d4) {
        var _0x236955 = _0x362949(_0x458dcd, [60, 60, 24]);
        var _0x1763aa = _0x236955[0];
        var _0x2aa692 = undefined === _0x1763aa ? 0 : _0x1763aa;
        var _0x33f3d4 = _0x236955[1];
        var _0x309aa0 = undefined === _0x33f3d4 ? 0 : _0x33f3d4;
        var _0x324651 = _0x236955[2];
        var _0x62f549 = undefined === _0x324651 ? 0 : _0x324651;
        var _0x45dcae = _0x236955[3];
        var _0x2052ea = undefined === _0x45dcae ? 0 : _0x45dcae;
        _0x21f3d4 && (_0x21f3d4.sec = _0x2aa692, _0x21f3d4.min = _0x309aa0, _0x21f3d4.hour = _0x62f549, _0x21f3d4.day = _0x2052ea);
        return {
          sec: _0x2aa692,
          min: _0x309aa0,
          hour: _0x62f549,
          day: _0x2052ea
        };
      });
      var _0x3fccda = _0x347a04("zeroizeFormatter", function (_0x4d601e, _0x37a915) {
        {
          undefined === _0x37a915 && (_0x37a915 = 2);
          return (Array(_0x37a915).join("0") + _0x4d601e).slice(("" + _0x4d601e).length > _0x37a915 ? -("" + _0x4d601e).length : -_0x37a915);
        }
      });
      _0x347a04("formatScoreDisplay", function (_0x4a6d4c, _0x3ab078, _0x1c07de) {
        undefined === _0x3ab078 && (_0x3ab078 = 1000000);
        undefined === _0x1c07de && (_0x1c07de = [10000, 10000]);
        return !_0x3ab078 || _0x4a6d4c > _0x3ab078 ? _0x32ff61(_0x4a6d4c, _0x1c07de) : _0x4a6d4c;
      });
      var _0x32ff61 = _0x347a04("formatUnitDisplay", function (_0x3401bb, _0x565d2b, _0x594f8b) {
        undefined === _0x565d2b && (_0x565d2b = [10000, 10000, 10000, 10000]);
        undefined === _0x594f8b && (_0x594f8b = ["", "万", "亿", "兆", "万兆"]);
        var _0x229170 = _0x362949(_0x3401bb, _0x565d2b);
        var _0x11bef0 = 0;
        _0x229170.forEach(function (_0x430e6a, _0x3b23f7) {
          0 !== _0x430e6a && (_0x11bef0 = _0x3b23f7);
        });
        var _0x541b76 = _0x229170[_0x11bef0];
        if (_0x11bef0 < 1) {
          return _0x541b76;
        }
        var _0x9048d0 = _0x229170[_0x11bef0 - 1];
        if (_0x9048d0 < 100) {
          return _0x2447f9(_0x541b76, "", _0x11bef0, _0x594f8b);
        }
        var _0x5b8bc8 = _0x3fccda(_0x9048d0, 4).substr(0, 2);
        return _0x2447f9(_0x541b76, _0x5b8bc8, _0x11bef0, _0x594f8b);
      });
      var _0x2447f9 = _0x347a04("formatUnit", function (_0x522632, _0x279b92, _0x10a3a4, _0x2b8475) {
        return _0x522632 + ((_0x279b92 && _0x279b92.length ? "." : "") + _0x279b92) + _0x2b8475[_0x10a3a4];
      });
      _0x347a04("moneyFormatter", function (_0x2792bd) {
        {
          isNaN(+_0x2792bd) && (_0x2792bd = 0);
          return String(_0x2792bd).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
      });
      _0x347a04("CN_NUM", ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十"]);
      _0x347a04("_asyncThrottle", function (_0x55da41, _0x132660) {
        var _0x3e4926;
        undefined === _0x132660 && (_0x132660 = 2000);
        var _0x4ae6f3 = true;
        return function () {
          var _0x434dcd = Date.now();
          if (_0x4ae6f3) {
            if (!(_0x3e4926 && _0x434dcd < _0x3e4926 + _0x132660)) {
              _0x3e4926 = _0x434dcd;
              var _0x2c1379 = _0x55da41.apply(this, arguments);
              _0x2c1379 instanceof Promise && (_0x4ae6f3 = false, _0x2c1379.then(function () {
                _0x4ae6f3 = true;
              }));
            }
          }
        };
      });
      _0x5cd9b8._RF.pop();
    }
  };
});
System.register("chunks:///_virtual/VCamAim.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./VCamComposer.ts"], function (_0x1b7eba) {
  var _0x4feea9;
  var _0x3335c3;
  var _0x5b0108;
  var _0x3a6f99;
  var _0x511738;
  var _0x26faab;
  var _0x3f7726;
  return {
    setters: [function (_0x2f97f2) {
      _0x4feea9 = _0x2f97f2.applyDecoratedDescriptor;
      _0x3335c3 = _0x2f97f2.initializerDefineProperty;
    }, function (_0x3cd31b) {
      _0x5b0108 = _0x3cd31b.cclegacy;
      _0x3a6f99 = _0x3cd31b._decorator;
      _0x511738 = _0x3cd31b.Enum;
      _0x26faab = _0x3cd31b.Vec3;
    }, function (_0x14ddfb) {
      _0x3f7726 = _0x14ddfb.VCamComposer;
    }],
    execute: function () {
      {
        var _0x49bab3;
        var _0x40ad1f;
        var _0x1eb773;
        var _0x134771;
        var _0x43759f;
        var _0x4757e5;
        var _0x275063;
        var _0x402b0b;
        var _0x42f799;
        _0x5b0108._RF.push({}, "b5ce9A29MhBxp+Y4Lc9reA0", "VCamAim", undefined);
        var _0x3b2898 = _0x3a6f99.ccclass;
        var _0xd13105 = _0x3a6f99.property;
        var _0x54812a = _0x1b7eba("AimType", function (_0x397ed8) {
          _0x397ed8[_0x397ed8.None = 0] = "None";
          _0x397ed8[_0x397ed8.Composer = 1] = "Composer";
          _0x397ed8[_0x397ed8.HardLookAt = 2] = "HardLookAt";
          return _0x397ed8;
        }({}));
        _0x1b7eba("VCamAim", (_0x49bab3 = _0x3b2898("VCamAim"), _0x40ad1f = _0xd13105({
          type: _0x511738(_0x54812a)
        }), _0x1eb773 = _0xd13105({
          tooltip: "i18n:cinestation.VCamAim.trackedObjectOffset"
        }), _0x134771 = _0xd13105({
          type: _0x3f7726,
          visible: function () {
            return this.type === _0x54812a.Composer;
          }
        }), _0x49bab3((_0x275063 = _0x4feea9((_0x4757e5 = function () {
          _0x3335c3(this, "type", _0x275063, this);
          _0x3335c3(this, "trackedObjectOffset", _0x402b0b, this);
          _0x3335c3(this, "composer", _0x42f799, this);
        }).prototype, "type", [_0x40ad1f], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function () {
            return _0x54812a.Composer;
          }
        }), _0x402b0b = _0x4feea9(_0x4757e5.prototype, "trackedObjectOffset", [_0x1eb773], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function () {
            return new _0x26faab();
          }
        }), _0x42f799 = _0x4feea9(_0x4757e5.prototype, "composer", [_0x134771], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function () {
            {
              return new _0x3f7726();
            }
          }
        }), _0x43759f = _0x4757e5)) || _0x43759f));
        _0x5b0108._RF.pop();
      }
    }
  };
});
System.register("chunks:///_virtual/VCamAutoDolly.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Events.ts"], function (_0x392c6a) {
  var _0x48d0be;
  var _0x92b5fa;
  var _0x54a583;
  var _0x212f8b;
  var _0x1a6b75;
  var _0x1774af;
  var _0x1d2e39;
  return {
    setters: [function (_0x92235a) {
      _0x48d0be = _0x92235a.applyDecoratedDescriptor;
      _0x92b5fa = _0x92235a.createClass;
      _0x54a583 = _0x92235a.initializerDefineProperty;
    }, function (_0x11c5e9) {
      _0x212f8b = _0x11c5e9.cclegacy;
      _0x1a6b75 = _0x11c5e9._decorator;
      _0x1774af = _0x11c5e9.director;
    }, function (_0x4e4935) {
      _0x1d2e39 = _0x4e4935.CinestationEvent;
    }],
    execute: function () {
      var _0x376a98;
      var _0x195677;
      var _0x3dc9b1;
      var _0x19bf3c;
      var _0x23f9a3;
      var _0x2b9bd;
      var _0x400e97;
      var _0x601e9d;
      var _0x4d2df4;
      var _0x378238;
      var _0x5901d5;
      var _0x78848;
      _0x212f8b._RF.push({}, "6faa8Kj6xFD/Y2h9t5y/JgK", "VCamAutoDolly", undefined);
      var _0x43b431 = _0x1a6b75.ccclass;
      var _0x9b4f81 = _0x1a6b75.property;
      _0x392c6a("VCamAutoDoly", (_0x376a98 = _0x43b431("VCamAutoDoly"), _0x195677 = _0x9b4f81({
        visible: false
      }), _0x3dc9b1 = _0x9b4f81({
        visible: false
      }), _0x19bf3c = _0x9b4f81({
        visible: false
      }), _0x23f9a3 = _0x9b4f81({
        tooltip: "i18n:cinestation.VCamAutoDoly.enable"
      }), _0x2b9bd = _0x9b4f81({
        tooltip: "i18n:cinestation.VCamAutoDoly.searchRadius"
      }), _0x400e97 = _0x9b4f81({
        tooltip: "i18n:cinestation.VCamAutoDoly.searchResolution"
      }), _0x376a98((_0x378238 = _0x48d0be((_0x4d2df4 = function () {
        function _0x46260d() {
          _0x54a583(this, "_enable", _0x378238, this);
          _0x54a583(this, "_searchRadius", _0x5901d5, this);
          _0x54a583(this, "_searchResolution", _0x78848, this);
        }
        _0x92b5fa(_0x46260d, [{
          key: "enable",
          get: function () {
            return this._enable;
          },
          set: function (_0x69b670) {
            this._enable !== _0x69b670 && (this._enable = _0x69b670, CC_EDITOR && _0x1774af.emit(_0x1d2e39.EDITOR_CHANGED));
          }
        }, {
          key: "searchRadius",
          get: function () {
            return this._searchRadius;
          },
          set: function (_0x3f1155) {
            this._searchRadius !== _0x3f1155 && (this._searchRadius = _0x3f1155, CC_EDITOR && _0x1774af.emit(_0x1d2e39.EDITOR_CHANGED));
          }
        }, {
          key: "searchResolution",
          get: function () {
            return this._searchResolution;
          },
          set: function (_0x20c335) {
            this._searchResolution !== _0x20c335 && (this._searchResolution = _0x20c335, CC_EDITOR && _0x1774af.emit(_0x1d2e39.EDITOR_CHANGED));
          }
        }]);
        return _0x46260d;
      }()).prototype, "_enable", [_0x195677], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return true;
        }
      }), _0x5901d5 = _0x48d0be(_0x4d2df4.prototype, "_searchRadius", [_0x3dc9b1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          {
            return 2;
          }
        }
      }), _0x78848 = _0x48d0be(_0x4d2df4.prototype, "_searchResolution", [_0x19bf3c], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 5;
        }
      }), _0x48d0be(_0x4d2df4.prototype, "enable", [_0x23f9a3], Object.getOwnPropertyDescriptor(_0x4d2df4.prototype, "enable"), _0x4d2df4.prototype), _0x48d0be(_0x4d2df4.prototype, "searchRadius", [_0x2b9bd], Object.getOwnPropertyDescriptor(_0x4d2df4.prototype, "searchRadius"), _0x4d2df4.prototype), _0x48d0be(_0x4d2df4.prototype, "searchResolution", [_0x400e97], Object.getOwnPropertyDescriptor(_0x4d2df4.prototype, "searchResolution"), _0x4d2df4.prototype), _0x601e9d = _0x4d2df4)) || _0x601e9d));
      _0x212f8b._RF.pop();
    }
  };
});
System.register("chunks:///_virtual/VCamBody.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Events.ts", "./VCamFreeLook.ts", "./VCamTracked.ts"], function (_0x1984ae) {
  var _0xec71a0;
  var _0x40c91a;
  var _0x1f3d92;
  var _0x4e6937;
  var _0x523cf5;
  var _0x429127;
  var _0xc1e8e3;
  var _0xe6c676;
  var _0x25b236;
  var _0x3878cf;
  return {
    setters: [function (_0xd45ee3) {
      _0xec71a0 = _0xd45ee3.applyDecoratedDescriptor;
      _0x40c91a = _0xd45ee3.createClass;
      _0x1f3d92 = _0xd45ee3.initializerDefineProperty;
    }, function (_0x30d911) {
      _0x4e6937 = _0x30d911.cclegacy;
      _0x523cf5 = _0x30d911._decorator;
      _0x429127 = _0x30d911.Enum;
      _0xc1e8e3 = _0x30d911.director;
    }, function (_0x1a3be2) {
      _0xe6c676 = _0x1a3be2.CinestationEvent;
    }, function (_0x500ab9) {
      _0x25b236 = _0x500ab9.VCamFreeLook;
    }, function (_0x11be31) {
      _0x3878cf = _0x11be31.VCamTracked;
    }],
    execute: function () {
      var _0x6ceb8d;
      var _0x472042;
      var _0x354fda;
      var _0x40a0f1;
      var _0x3113f3;
      var _0x63948a;
      var _0x20fca1;
      var _0x49470f;
      var _0x967c08;
      var _0x1b5504;
      _0x4e6937._RF.push({}, "98051KqNLZKB5mU2JZrUz3P", "VCamBody", undefined);
      var _0x1270d7 = _0x523cf5.ccclass;
      var _0x59c4eb = _0x523cf5.property;
      var _0x14ff92 = _0x1984ae("BodyType", function (_0x354726) {
        _0x354726[_0x354726.None = 0] = "None";
        _0x354726[_0x354726.FreeLook = 1] = "FreeLook";
        _0x354726[_0x354726.Tracked = 2] = "Tracked";
        return _0x354726;
      }({}));
      _0x1984ae("VCamBody", (_0x6ceb8d = _0x1270d7("VCamBody"), _0x472042 = _0x59c4eb({
        visible: false
      }), _0x354fda = _0x59c4eb({
        animatable: false,
        type: _0x429127(_0x14ff92)
      }), _0x40a0f1 = _0x59c4eb({
        animatable: false,
        type: _0x25b236,
        visible: function () {
          return this.type === _0x14ff92.FreeLook;
        }
      }), _0x3113f3 = _0x59c4eb({
        type: _0x3878cf,
        visible: function () {
          return this.type === _0x14ff92.Tracked;
        }
      }), _0x6ceb8d((_0x49470f = _0xec71a0((_0x20fca1 = function () {
        function _0x5277d5() {
          _0x1f3d92(this, "_type", _0x49470f, this);
          _0x1f3d92(this, "freelook", _0x967c08, this);
          _0x1f3d92(this, "tracked", _0x1b5504, this);
        }
        _0x40c91a(_0x5277d5, [{
          key: "type",
          get: function () {
            {
              return this._type;
            }
          },
          set: function (_0x3c171d) {
            this._type !== _0x3c171d && (this._type = _0x3c171d, CC_EDITOR && _0xc1e8e3.emit(_0xe6c676.EDITOR_CHANGED));
          }
        }]);
        return _0x5277d5;
      }()).prototype, "_type", [_0x472042], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return _0x14ff92.None;
        }
      }), _0xec71a0(_0x20fca1.prototype, "type", [_0x354fda], Object.getOwnPropertyDescriptor(_0x20fca1.prototype, "type"), _0x20fca1.prototype), _0x967c08 = _0xec71a0(_0x20fca1.prototype, "freelook", [_0x40a0f1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new _0x25b236();
        }
      }), _0x1b5504 = _0xec71a0(_0x20fca1.prototype, "tracked", [_0x3113f3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new _0x3878cf();
        }
      }), _0x63948a = _0x20fca1)) || _0x63948a));
      _0x4e6937._RF.pop();
    }
  };
});
System.register("chunks:///_virtual/VCamComposer.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Events.ts"], function (_0x3b46b4) {
  var _0x236efa;
  var _0x47fdb2;
  var _0x407e46;
  var _0x372f50;
  var _0x2134ba;
  var _0x14070a;
  var _0x2c8782;
  return {
    setters: [function (_0x49cb65) {
      _0x236efa = _0x49cb65.applyDecoratedDescriptor;
      _0x47fdb2 = _0x49cb65.createClass;
      _0x407e46 = _0x49cb65.initializerDefineProperty;
    }, function (_0x404423) {
      {
        _0x372f50 = _0x404423.cclegacy;
        _0x2134ba = _0x404423._decorator;
        _0x14070a = _0x404423.game;
      }
    }, function (_0x3d2a6a) {
      _0x2c8782 = _0x3d2a6a.CinestationEvent;
    }],
    execute: function () {
      {
        var _0x5babc9;
        var _0x4e7ffb;
        var _0x5830a8;
        var _0x109c1b;
        var _0x1909de;
        var _0x406421;
        var _0x2e17f0;
        var _0xe9027b;
        var _0x9b3b5;
        var _0x350343;
        var _0xe614ee;
        var _0xde921d;
        var _0x37bf98;
        var _0x37a680;
        var _0x9a9750;
        var _0x5076c0;
        var _0x458764;
        var _0x10390a;
        var _0x14cc68;
        var _0x1fc991;
        var _0x294896;
        _0x372f50._RF.push({}, "a20f4DBjy1CkIZ+lahC6hYS", "VCamComposer", undefined);
        var _0x18c2f3 = _0x2134ba.ccclass;
        var _0x4750d9 = _0x2134ba.property;
        _0x3b46b4("VCamComposer", (_0x5babc9 = _0x18c2f3("VCamComposer"), _0x4e7ffb = _0x4750d9({
          visible: false
        }), _0x5830a8 = _0x4750d9({
          visible: false
        }), _0x109c1b = _0x4750d9({
          visible: false
        }), _0x1909de = _0x4750d9({
          visible: false
        }), _0x406421 = _0x4750d9({
          tooltip: "i18n:cinestation.VCamComposer.lookaheadTime",
          range: [0, 1],
          step: 0.1,
          slide: true
        }), _0x2e17f0 = _0x4750d9({
          tooltip: "i18n:cinestation.VCamComposer.lookaheadDamping",
          range: [0.1, 2],
          step: 0.1,
          slide: true
        }), _0xe9027b = _0x4750d9({
          tooltip: "i18n:cinestation.VCamComposer.lookatDamping",
          range: [0.1, 2],
          step: 0.1,
          slide: true
        }), _0x9b3b5 = _0x4750d9({
          tooltip: "i18n:cinestation.VCamComposer.deadZoneWidth",
          range: [0, 1],
          step: 0.01,
          slide: true
        }), _0x350343 = _0x4750d9({
          tooltip: "i18n:cinestation.VCamComposer.deadZoneHeight",
          range: [0, 1],
          step: 0.01,
          slide: true
        }), _0xe614ee = _0x4750d9({
          tooltip: "i18n:cinestation.VCamComposer.softZoneWidth",
          range: [0, 1],
          step: 0.01,
          slide: true
        }), _0xde921d = _0x4750d9({
          tooltip: "i18n:cinestation.VCamComposer.softZoneHeight",
          range: [0, 1],
          step: 0.01,
          slide: true
        }), _0x5babc9((_0x9a9750 = _0x236efa((_0x37a680 = function () {
          {
            function _0x324fdb() {
              _0x407e46(this, "_deadZoneWidth", _0x9a9750, this);
              _0x407e46(this, "_deadZoneHeight", _0x5076c0, this);
              _0x407e46(this, "_softZoneWidth", _0x458764, this);
              _0x407e46(this, "_softZoneHeight", _0x10390a, this);
              _0x407e46(this, "lookaheadTime", _0x14cc68, this);
              _0x407e46(this, "lookaheadDamping", _0x1fc991, this);
              _0x407e46(this, "lookatDamping", _0x294896, this);
            }
            _0x47fdb2(_0x324fdb, [{
              key: "deadZoneWidth",
              get: function () {
                return this._deadZoneWidth;
              },
              set: function (_0x1eb52f) {
                this._deadZoneWidth !== _0x1eb52f && (this._deadZoneWidth = _0x1eb52f, CC_EDITOR && _0x14070a.emit(_0x2c8782.COMPOSER_CHANGED));
              }
            }, {
              key: "deadZoneHeight",
              get: function () {
                return this._deadZoneHeight;
              },
              set: function (_0x2c7f1f) {
                {
                  this._deadZoneHeight !== _0x2c7f1f && (this._deadZoneHeight = _0x2c7f1f, CC_EDITOR && _0x14070a.emit(_0x2c8782.COMPOSER_CHANGED));
                }
              }
            }, {
              key: "softZoneWidth",
              get: function () {
                return this._softZoneWidth;
              },
              set: function (_0x27dd19) {
                this._softZoneWidth !== _0x27dd19 && (this._softZoneWidth = _0x27dd19, CC_EDITOR && _0x14070a.emit(_0x2c8782.COMPOSER_CHANGED));
              }
            }, {
              key: "softZoneHeight",
              get: function () {
                return this._softZoneHeight;
              },
              set: function (_0x543690) {
                this._softZoneHeight !== _0x543690 && (this._softZoneHeight = _0x543690, CC_EDITOR && _0x14070a.emit(_0x2c8782.COMPOSER_CHANGED));
              }
            }]);
            return _0x324fdb;
          }
        }()).prototype, "_deadZoneWidth", [_0x4e7ffb], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function () {
            return 0.1;
          }
        }), _0x5076c0 = _0x236efa(_0x37a680.prototype, "_deadZoneHeight", [_0x5830a8], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function () {
            return 0.1;
          }
        }), _0x458764 = _0x236efa(_0x37a680.prototype, "_softZoneWidth", [_0x109c1b], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function () {
            return 0.8;
          }
        }), _0x10390a = _0x236efa(_0x37a680.prototype, "_softZoneHeight", [_0x1909de], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function () {
            return 0.8;
          }
        }), _0x14cc68 = _0x236efa(_0x37a680.prototype, "lookaheadTime", [_0x406421], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function () {
            return 0.2;
          }
        }), _0x1fc991 = _0x236efa(_0x37a680.prototype, "lookaheadDamping", [_0x2e17f0], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function () {
            return 0.5;
          }
        }), _0x294896 = _0x236efa(_0x37a680.prototype, "lookatDamping", [_0xe9027b], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function () {
            return 0.3;
          }
        }), _0x236efa(_0x37a680.prototype, "deadZoneWidth", [_0x9b3b5], Object.getOwnPropertyDescriptor(_0x37a680.prototype, "deadZoneWidth"), _0x37a680.prototype), _0x236efa(_0x37a680.prototype, "deadZoneHeight", [_0x350343], Object.getOwnPropertyDescriptor(_0x37a680.prototype, "deadZoneHeight"), _0x37a680.prototype), _0x236efa(_0x37a680.prototype, "softZoneWidth", [_0xe614ee], Object.getOwnPropertyDescriptor(_0x37a680.prototype, "softZoneWidth"), _0x37a680.prototype), _0x236efa(_0x37a680.prototype, "softZoneHeight", [_0xde921d], Object.getOwnPropertyDescriptor(_0x37a680.prototype, "softZoneHeight"), _0x37a680.prototype), _0x37bf98 = _0x37a680)) || _0x37bf98));
        _0x372f50._RF.pop();
      }
    }
  };
});
System.register("chunks:///_virtual/VCamFreeLook.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], function (_0x5eb71e) {
  var _0x2772f6;
  var _0x28fc17;
  var _0xfe4017;
  var _0x16d0b7;
  var _0x3e08ce;
  return {
    setters: [function (_0x127ffe) {
      _0x2772f6 = _0x127ffe.applyDecoratedDescriptor;
      _0x28fc17 = _0x127ffe.initializerDefineProperty;
    }, function (_0x3524f1) {
      _0xfe4017 = _0x3524f1.cclegacy;
      _0x16d0b7 = _0x3524f1._decorator;
      _0x3e08ce = _0x3524f1.Vec3;
    }],
    execute: function () {
      var _0x19f26;
      var _0x5f0e0e;
      var _0x27f3f7;
      var _0x13d2d1;
      var _0x2ebba6;
      var _0x248f4d;
      var _0x5688ce;
      var _0x513708;
      var _0x615f71;
      var _0x3ce221;
      var _0x2bd9f6;
      var _0x3028bf;
      var _0x5b5bf6;
      var _0x561dfd;
      var _0x5b1a17;
      var _0x5c4f6a;
      var _0x1c6d64;
      var _0x4b8c1b;
      var _0x44dfaa;
      var _0x56f014;
      var _0x2da853;
      var _0x485730;
      var _0x498fb2;
      var _0x23138a;
      var _0x25382a;
      var _0x1876b9;
      var _0x25b165;
      _0xfe4017._RF.push({}, "0b999naWjlKBKlbbhrzf9kj", "VCamFreeLook", undefined);
      var _0x382722 = _0x16d0b7.ccclass;
      var _0x352dde = _0x16d0b7.property;
      _0x5eb71e("VCamFreeLook", (_0x19f26 = _0x382722("VCamFreeLook"), _0x5f0e0e = _0x352dde({
        tooltip: "i18n:cinestation.VCamFreeLook.forbidX",
        animatable: false
      }), _0x27f3f7 = _0x352dde({
        tooltip: "i18n:cinestation.VCamFreeLook.forbidY",
        animatable: false
      }), _0x13d2d1 = _0x352dde({
        tooltip: "i18n:cinestation.VCamFreeLook.forbidZ",
        animatable: false
      }), _0x2ebba6 = _0x352dde({
        tooltip: "i18n:cinestation.VCamFreeLook.forbidPan",
        animatable: false
      }), _0x248f4d = _0x352dde({
        tooltip: "i18n:cinestation.VCamFreeLook.rotateSpeed",
        animatable: false,
        range: [0.1, 5],
        step: 0.1,
        slide: true
      }), _0x5688ce = _0x352dde({
        tooltip: "i18n:cinestation.VCamFreeLook.rotateSmoothing",
        animatable: false,
        range: [0.1, 5],
        step: 0.1,
        slide: true
      }), _0x513708 = _0x352dde({
        tooltip: "i18n:cinestation.VCamFreeLook.panSpeed",
        animatable: false,
        range: [0.1, 5],
        step: 0.1,
        slide: true
      }), _0x615f71 = _0x352dde({
        tooltip: "i18n:cinestation.VCamFreeLook.panSmoothing",
        animatable: false,
        range: [0.1, 5],
        step: 0.1,
        slide: true
      }), _0x3ce221 = _0x352dde({
        tooltip: "i18n:cinestation.VCamFreeLook.followOffset"
      }), _0x2bd9f6 = _0x352dde({
        tooltip: "i18n:cinestation.VCamFreeLook.followDamping",
        animatable: false,
        range: [0, 1],
        step: 0.1,
        slide: true
      }), _0x3028bf = _0x352dde({
        tooltip: "i18n:cinestation.VCamFreeLook.distanceMin"
      }), _0x5b5bf6 = _0x352dde({
        tooltip: "i18n:cinestation.VCamFreeLook.distanceMax"
      }), _0x19f26((_0x5c4f6a = _0x2772f6((_0x5b1a17 = function () {
        _0x28fc17(this, "forbidX", _0x5c4f6a, this);
        _0x28fc17(this, "forbidY", _0x1c6d64, this);
        _0x28fc17(this, "forbidZ", _0x4b8c1b, this);
        _0x28fc17(this, "forbidPan", _0x44dfaa, this);
        _0x28fc17(this, "rotateSpeed", _0x56f014, this);
        _0x28fc17(this, "rotateSmoothing", _0x2da853, this);
        _0x28fc17(this, "panSpeed", _0x485730, this);
        _0x28fc17(this, "panSmoothing", _0x498fb2, this);
        _0x28fc17(this, "followOffset", _0x23138a, this);
        _0x28fc17(this, "followDamping", _0x25382a, this);
        _0x28fc17(this, "distanceMin", _0x1876b9, this);
        _0x28fc17(this, "distanceMax", _0x25b165, this);
        this.phiMin = 0.001;
        this.phiMax = Math.PI - 0.001;
        this.thetaMin = -Infinity;
        this.thetaMax = Infinity;
        this.rotateTouchID = 0;
      }).prototype, "forbidX", [_0x5f0e0e], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          {
            return false;
          }
        }
      }), _0x1c6d64 = _0x2772f6(_0x5b1a17.prototype, "forbidY", [_0x27f3f7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _0x4b8c1b = _0x2772f6(_0x5b1a17.prototype, "forbidZ", [_0x13d2d1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _0x44dfaa = _0x2772f6(_0x5b1a17.prototype, "forbidPan", [_0x2ebba6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          {
            return false;
          }
        }
      }), _0x56f014 = _0x2772f6(_0x5b1a17.prototype, "rotateSpeed", [_0x248f4d], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1;
        }
      }), _0x2da853 = _0x2772f6(_0x5b1a17.prototype, "rotateSmoothing", [_0x5688ce], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0.5;
        }
      }), _0x485730 = _0x2772f6(_0x5b1a17.prototype, "panSpeed", [_0x513708], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1;
        }
      }), _0x498fb2 = _0x2772f6(_0x5b1a17.prototype, "panSmoothing", [_0x615f71], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0.5;
        }
      }), _0x23138a = _0x2772f6(_0x5b1a17.prototype, "followOffset", [_0x3ce221], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new _0x3e08ce(0, 0, -10);
        }
      }), _0x25382a = _0x2772f6(_0x5b1a17.prototype, "followDamping", [_0x2bd9f6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1;
        }
      }), _0x1876b9 = _0x2772f6(_0x5b1a17.prototype, "distanceMin", [_0x3028bf], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return -10000;
        }
      }), _0x25b165 = _0x2772f6(_0x5b1a17.prototype, "distanceMax", [_0x5b5bf6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 10000;
        }
      }), _0x561dfd = _0x5b1a17)) || _0x561dfd));
      _0xfe4017._RF.pop();
    }
  };
});
System.register("chunks:///_virtual/VCamHardLook.ts", ["cc"], function (_0xd8e30d) {
  var _0x4de650;
  var _0x7debb3;
  return {
    setters: [function (_0x575df2) {
      _0x4de650 = _0x575df2.cclegacy;
      _0x7debb3 = _0x575df2._decorator;
    }],
    execute: function () {
      var _0x3e8e0e;
      _0x4de650._RF.push({}, "47535R8yGBJapZG+5BzZbdz", "VCamHardLook", undefined);
      var _0x5b8151 = _0x7debb3.ccclass;
      _0x7debb3.property;
      _0xd8e30d("VCamHardLook", _0x5b8151("VCamHardLook")(_0x3e8e0e = function () {}) || _0x3e8e0e);
      _0x4de650._RF.pop();
    }
  };
});
System.register("chunks:///_virtual/VCamImpulse.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], function (_0xf95f54) {
  var _0x46b769;
  var _0x957496;
  var _0xc7a00;
  var _0x230847;
  var _0x20070e;
  var _0x1a1ada;
  return {
    setters: [function (_0xa66552) {
      _0x46b769 = _0xa66552.applyDecoratedDescriptor;
      _0x957496 = _0xa66552.initializerDefineProperty;
    }, function (_0x29e84e) {
      _0xc7a00 = _0x29e84e.cclegacy;
      _0x230847 = _0x29e84e._decorator;
      _0x20070e = _0x29e84e.Enum;
      _0x1a1ada = _0x29e84e.Layers;
    }],
    execute: function () {
      var _0x2afcdf;
      var _0x2bd0c5;
      var _0x2dfce9;
      var _0x19e517;
      var _0x1c2703;
      _0xc7a00._RF.push({}, "8f0fdpmkflDmIp1ZB3EmmMS", "VCamImpulse", undefined);
      var _0xc2d8c6 = _0x230847.ccclass;
      var _0x341844 = _0x230847.property;
      _0xf95f54("VCamImpulse", (_0x2afcdf = _0xc2d8c6("VCamImpulse"), _0x2bd0c5 = _0x341844({
        type: _0x20070e(_0x1a1ada.Enum)
      }), _0x2afcdf((_0x1c2703 = _0x46b769((_0x19e517 = function () {
        _0x957496(this, "source", _0x1c2703, this);
      }).prototype, "source", [_0x2bd0c5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return _0x1a1ada.Enum.DEFAULT;
        }
      }), _0x2dfce9 = _0x19e517)) || _0x2dfce9));
      _0xc7a00._RF.pop();
    }
  };
});
System.register("chunks:///_virtual/VCamLens.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Events.ts"], function (_0x97d0a4) {
  var _0x2d79e2;
  var _0x442a71;
  var _0x14298e;
  var _0x3e291e;
  var _0x5b6c52;
  var _0x26e892;
  var _0x957832;
  return {
    setters: [function (_0x504500) {
      _0x2d79e2 = _0x504500.applyDecoratedDescriptor;
      _0x442a71 = _0x504500.createClass;
      _0x14298e = _0x504500.initializerDefineProperty;
    }, function (_0x241c0c) {
      _0x3e291e = _0x241c0c.cclegacy;
      _0x5b6c52 = _0x241c0c._decorator;
      _0x26e892 = _0x241c0c.director;
    }, function (_0x25a5cd) {
      _0x957832 = _0x25a5cd.CinestationEvent;
    }],
    execute: function () {
      var _0x3e8c57;
      var _0x498c45;
      var _0x344373;
      var _0x5046e7;
      var _0xd62613;
      var _0x2adfdd;
      var _0x1d0a27;
      var _0x33ecbb;
      var _0x188875;
      _0x3e291e._RF.push({}, "1b0c6SIESZLp7YflAThQCmy", "VCamLens", undefined);
      var _0x5ff1e4 = _0x5b6c52.ccclass;
      var _0x2561e7 = _0x5b6c52.property;
      _0x97d0a4("VCamLens", (_0x3e8c57 = _0x5ff1e4("VCamLens"), _0x498c45 = _0x2561e7({
        visible: false
      }), _0x344373 = _0x2561e7({
        visible: false
      }), _0x5046e7 = _0x2561e7({
        visible: false
      }), _0x3e8c57((_0x1d0a27 = _0x2d79e2((_0x2adfdd = function () {
        function _0x3591c4() {
          _0x14298e(this, "_fov", _0x1d0a27, this);
          _0x14298e(this, "_near", _0x33ecbb, this);
          _0x14298e(this, "_far", _0x188875, this);
        }
        _0x442a71(_0x3591c4, [{
          key: "fov",
          get: function () {
            return this._fov;
          },
          set: function (_0x15ceee) {
            this._fov !== _0x15ceee && (this._fov = _0x15ceee, CC_EDITOR && _0x26e892.emit(_0x957832.LENS_CHANGED));
          }
        }, {
          key: "near",
          get: function () {
            {
              return this._near;
            }
          },
          set: function (_0x4b038c) {
            this._near !== _0x4b038c && (this._near = _0x4b038c, CC_EDITOR && _0x26e892.emit(_0x957832.LENS_CHANGED));
          }
        }, {
          key: "far",
          get: function () {
            return this._far;
          },
          set: function (_0xb7f309) {
            this._far !== _0xb7f309 && (this._far = _0xb7f309, CC_EDITOR && _0x26e892.emit(_0x957832.LENS_CHANGED));
          }
        }]);
        return _0x3591c4;
      }()).prototype, "_fov", [_0x498c45], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 45;
        }
      }), _0x33ecbb = _0x2d79e2(_0x2adfdd.prototype, "_near", [_0x344373], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1;
        }
      }), _0x188875 = _0x2d79e2(_0x2adfdd.prototype, "_far", [_0x5046e7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1000;
        }
      }), _0x2d79e2(_0x2adfdd.prototype, "fov", [_0x2561e7], Object.getOwnPropertyDescriptor(_0x2adfdd.prototype, "fov"), _0x2adfdd.prototype), _0x2d79e2(_0x2adfdd.prototype, "near", [_0x2561e7], Object.getOwnPropertyDescriptor(_0x2adfdd.prototype, "near"), _0x2adfdd.prototype), _0x2d79e2(_0x2adfdd.prototype, "far", [_0x2561e7], Object.getOwnPropertyDescriptor(_0x2adfdd.prototype, "far"), _0x2adfdd.prototype), _0xd62613 = _0x2adfdd)) || _0xd62613));
      _0x3e291e._RF.pop();
    }
  };
});
System.register("chunks:///_virtual/VCamNoise.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./NoiseGenerator.ts"], function (_0x332242) {
  var _0x3d6351;
  var _0x5650f7;
  var _0x568f25;
  var _0x416e45;
  var _0x1a8355;
  var _0xacf96b;
  return {
    setters: [function (_0x1a1d3f) {
      _0x3d6351 = _0x1a1d3f.applyDecoratedDescriptor;
      _0x5650f7 = _0x1a1d3f.initializerDefineProperty;
    }, function (_0x1c6411) {
      _0x568f25 = _0x1c6411.cclegacy;
      _0x416e45 = _0x1c6411._decorator;
      _0x1a8355 = _0x1c6411.Enum;
    }, function (_0x2119f9) {
      _0xacf96b = _0x2119f9.NoiseProfile;
    }],
    execute: function () {
      var _0x13936e;
      var _0x1fff8c;
      var _0x54b110;
      var _0x2e3f4f;
      var _0x3b50f1;
      var _0x20afe8;
      var _0x144929;
      var _0x358ed0;
      var _0x56bf72;
      var _0x49804b;
      var _0x20ae90;
      _0x568f25._RF.push({}, "64113KNDFdCe5TQiq+NPHCc", "VCamNoise", undefined);
      var _0x56c487 = _0x416e45.ccclass;
      var _0x102fd7 = _0x416e45.property;
      var _0x50283a = _0x332242("NoiseType", function (_0xc1100) {
        _0xc1100[_0xc1100.None = 0] = "None";
        _0xc1100[_0xc1100.Perlin = 1] = "Perlin";
        return _0xc1100;
      }({}));
      _0x332242("VCamNoise", (_0x13936e = _0x56c487("VCamNoise"), _0x1fff8c = _0x102fd7({
        type: _0x1a8355(_0x50283a)
      }), _0x54b110 = _0x102fd7({
        tooltip: "i18n:cinestation.VCamNoise.profile",
        type: _0x1a8355(_0xacf96b),
        visible: function () {
          return this.type !== _0x50283a.None;
        }
      }), _0x2e3f4f = _0x102fd7({
        tooltip: "i18n:cinestation.VCamNoise.amplitudeGain",
        visible: function () {
          return this.type !== _0x50283a.None;
        }
      }), _0x3b50f1 = _0x102fd7({
        tooltip: "i18n:cinestation.VCamNoise.frequncyGain",
        visible: function () {
          return this.type !== _0x50283a.None;
        }
      }), _0x13936e((_0x358ed0 = _0x3d6351((_0x144929 = function () {
        {
          _0x5650f7(this, "type", _0x358ed0, this);
          _0x5650f7(this, "profile", _0x56bf72, this);
          _0x5650f7(this, "amplitudeGain", _0x49804b, this);
          _0x5650f7(this, "frequncyGain", _0x20ae90, this);
        }
      }).prototype, "type", [_0x1fff8c], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return _0x50283a.None;
        }
      }), _0x56bf72 = _0x3d6351(_0x144929.prototype, "profile", [_0x54b110], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return _0xacf96b.Noise_CM_4;
        }
      }), _0x49804b = _0x3d6351(_0x144929.prototype, "amplitudeGain", [_0x2e3f4f], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1;
        }
      }), _0x20ae90 = _0x3d6351(_0x144929.prototype, "frequncyGain", [_0x3b50f1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1;
        }
      }), _0x20afe8 = _0x144929)) || _0x20afe8));
      _0x568f25._RF.pop();
    }
  };
});
System.register("chunks:///_virtual/VCamTracked.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./CinestationSmoothPath.ts", "./Events.ts", "./VCamAutoDolly.ts"], function (_0x397284) {
  var _0x1611fe;
  var _0x2196e5;
  var _0x5a272f;
  var _0x3fb45b;
  var _0x2a70e4;
  var _0x5aaded;
  var _0x4ff65e;
  var _0x336f57;
  var _0x1e458c;
  var _0x32bb55;
  return {
    setters: [function (_0x3af421) {
      _0x1611fe = _0x3af421.applyDecoratedDescriptor;
      _0x2196e5 = _0x3af421.createClass;
      _0x5a272f = _0x3af421.initializerDefineProperty;
    }, function (_0x32cd77) {
      _0x3fb45b = _0x32cd77.cclegacy;
      _0x2a70e4 = _0x32cd77._decorator;
      _0x5aaded = _0x32cd77.Enum;
      _0x4ff65e = _0x32cd77.director;
    }, function (_0x17baba) {
      _0x336f57 = _0x17baba.CinestationSmoothPath;
    }, function (_0x4de805) {
      _0x1e458c = _0x4de805.CinestationEvent;
    }, function (_0x168182) {
      _0x32bb55 = _0x168182.VCamAutoDoly;
    }],
    execute: function () {
      {
        var _0x564285;
        var _0x572151;
        var _0x3bf537;
        var _0x3e9465;
        var _0x60181d;
        var _0x24f83c;
        var _0x4fbe05;
        var _0x3b0e41;
        var _0x32a59d;
        var _0x33133f;
        var _0x89e074;
        var _0x6841f;
        var _0x5d4e76;
        var _0x4cfe27;
        _0x3fb45b._RF.push({}, "28daaTaX7tIHIg1KeO3hzdb", "VCamTracked", undefined);
        var _0x51e2df = _0x2a70e4.ccclass;
        var _0x2c50b4 = _0x2a70e4.property;
        var _0x143695 = _0x397284("VCamUp", function (_0x1c20fb) {
          _0x1c20fb[_0x1c20fb.DEFAULT = 0] = "DEFAULT";
          _0x1c20fb[_0x1c20fb.PATH = 1] = "PATH";
          return _0x1c20fb;
        }({}));
        _0x397284("VCamTracked", (_0x564285 = _0x51e2df("VCamTracked"), _0x572151 = _0x2c50b4({
          visible: false
        }), _0x3bf537 = _0x2c50b4({
          tooltip: "i18n:cinestation.VCamTracked.path",
          animatable: false,
          type: _0x336f57
        }), _0x3e9465 = _0x2c50b4({
          tooltip: "i18n:cinestation.VCamTracked.progress"
        }), _0x60181d = _0x2c50b4({
          tooltip: "i18n:cinestation.VCamTracked.damping",
          animatable: false,
          range: [0.1, 5],
          step: 0.1,
          slide: true
        }), _0x24f83c = _0x2c50b4({
          type: _0x5aaded(_0x143695),
          animatable: false
        }), _0x4fbe05 = _0x2c50b4({
          type: _0x32bb55,
          animatable: false
        }), _0x564285((_0x33133f = _0x1611fe((_0x32a59d = function () {
          function _0x29fb19() {
            _0x5a272f(this, "_progress", _0x33133f, this);
            _0x5a272f(this, "path", _0x89e074, this);
            _0x5a272f(this, "damping", _0x6841f, this);
            _0x5a272f(this, "cameraUp", _0x5d4e76, this);
            _0x5a272f(this, "autoDolly", _0x4cfe27, this);
          }
          _0x2196e5(_0x29fb19, [{
            key: "progress",
            get: function () {
              return this._progress;
            },
            set: function (_0x3e946f) {
              this._progress !== _0x3e946f && (this._progress = _0x3e946f, CC_EDITOR && _0x4ff65e.emit(_0x1e458c.EDITOR_CHANGED));
            }
          }]);
          return _0x29fb19;
        }()).prototype, "_progress", [_0x572151], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function () {
            return 0;
          }
        }), _0x89e074 = _0x1611fe(_0x32a59d.prototype, "path", [_0x3bf537], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function () {
            return null;
          }
        }), _0x1611fe(_0x32a59d.prototype, "progress", [_0x3e9465], Object.getOwnPropertyDescriptor(_0x32a59d.prototype, "progress"), _0x32a59d.prototype), _0x6841f = _0x1611fe(_0x32a59d.prototype, "damping", [_0x60181d], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function () {
            {
              return 1;
            }
          }
        }), _0x5d4e76 = _0x1611fe(_0x32a59d.prototype, "cameraUp", [_0x24f83c], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function () {
            return _0x143695.DEFAULT;
          }
        }), _0x4cfe27 = _0x1611fe(_0x32a59d.prototype, "autoDolly", [_0x4fbe05], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function () {
            {
              return new _0x32bb55();
            }
          }
        }), _0x3b0e41 = _0x32a59d)) || _0x3b0e41));
        _0x3fb45b._RF.pop();
      }
    }
  };
});
System.register("chunks:///_virtual/VirtualCamera.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./CinestationData.ts", "./Events.ts", "./Visualization.ts", "./VCamAim.ts", "./VCamBody.ts", "./VCamImpulse.ts", "./VCamLens.ts", "./VCamNoise.ts", "./AimStage.ts", "./BodyStage.ts", "./ImpulseStage.ts", "./NoiseStage.ts"], function (_0x1479c7) {
  var _0x667199;
  var _0x3fd983;
  var _0x33e2e1;
  var _0x2e0c5f;
  var _0x431154;
  var _0x3492ca;
  var _0x6e5b95;
  var _0x4b6574;
  var _0x5ddb21;
  var _0x3edffd;
  var _0x1c58f9;
  var _0x46bb59;
  var _0x40e325;
  var _0x5f0d50;
  var _0xefe455;
  var _0x327d6d;
  var _0xde5ce2;
  var _0x509521;
  var _0x5c49e9;
  var _0x4a81c;
  var _0x3c55fc;
  var _0x129589;
  var _0x39bef8;
  var _0x30643b;
  var _0x260743;
  var _0x186b31;
  var _0x555e02;
  var _0x210072;
  var _0x4318dc;
  return {
    setters: [function (_0x2c1baf) {
      _0x667199 = _0x2c1baf.applyDecoratedDescriptor;
      _0x3fd983 = _0x2c1baf.inheritsLoose;
      _0x33e2e1 = _0x2c1baf.initializerDefineProperty;
      _0x2e0c5f = _0x2c1baf.assertThisInitialized;
      _0x431154 = _0x2c1baf.createForOfIteratorHelperLoose;
      _0x3492ca = _0x2c1baf.createClass;
    }, function (_0x2faf9a) {
      _0x6e5b95 = _0x2faf9a.cclegacy;
      _0x4b6574 = _0x2faf9a._decorator;
      _0x5ddb21 = _0x2faf9a.Node;
      _0x3edffd = _0x2faf9a.Vec3;
      _0x1c58f9 = _0x2faf9a.Quat;
      _0x46bb59 = _0x2faf9a.director;
      _0x40e325 = _0x2faf9a.view;
      _0x5f0d50 = _0x2faf9a.Mat4;
      _0xefe455 = _0x2faf9a.toRadian;
      _0x327d6d = _0x2faf9a.utils;
    }, function (_0x148597) {
      _0xde5ce2 = _0x148597.cinestation;
    }, function (_0x500910) {
      _0x509521 = _0x500910.CinestationEvent;
    }, function (_0x286575) {
      _0x5c49e9 = _0x286575.Visualization;
    }, function (_0x23ef56) {
      _0x4a81c = _0x23ef56.VCamAim;
    }, function (_0x5fa761) {
      _0x3c55fc = _0x5fa761.VCamBody;
      _0x129589 = _0x5fa761.BodyType;
    }, function (_0x364cc8) {
      _0x39bef8 = _0x364cc8.VCamImpulse;
    }, function (_0x593f05) {
      {
        _0x30643b = _0x593f05.VCamLens;
      }
    }, function (_0x540940) {
      _0x260743 = _0x540940.VCamNoise;
    }, function (_0x4c716f) {
      _0x186b31 = _0x4c716f.AimStage;
    }, function (_0x4bc62e) {
      _0x555e02 = _0x4bc62e.BodyStage;
    }, function (_0x3499f7) {
      _0x210072 = _0x3499f7.ImpulseStage;
    }, function (_0x1504fd) {
      _0x4318dc = _0x1504fd.NoiseStage;
    }],
    execute: function () {
      var _0x5a47f6;
      var _0x51fe1a;
      var _0x701ae6;
      var _0x2b6ade;
      var _0x31c97b;
      var _0x4e1392;
      var _0x306f16;
      var _0x36d11a;
      var _0x19d936;
      var _0x175961;
      var _0x10a55e;
      var _0x293032;
      var _0x4a8f2b;
      var _0xb1f076;
      var _0x2b01ef;
      var _0xade823;
      var _0x1c0181;
      var _0x2ed92a;
      var _0x476bc9;
      var _0x34883e;
      var _0x303ce2;
      var _0x580a98;
      var _0x1c39de;
      _0x6e5b95._RF.push({}, "e84d7HSHCRNU4Jgu1AdeBGI", "VirtualCamera", undefined);
      var _0x5af5d8 = _0x4b6574.ccclass;
      var _0x5e8589 = _0x4b6574.property;
      var _0x32d27d = _0x4b6574.executeInEditMode;
      _0x1479c7("VirtualCamera", (_0x5a47f6 = _0x5af5d8("VirtualCamera"), _0x51fe1a = _0x5e8589({
        visible: false
      }), _0x701ae6 = _0x5e8589({
        visible: false
      }), _0x2b6ade = _0x5e8589({
        tooltip: "i18n:cinestation.VirtualCamera.debug"
      }), _0x31c97b = _0x5e8589({
        tooltip: "i18n:cinestation.VirtualCamera.priority"
      }), _0x4e1392 = _0x5e8589({
        tooltip: "i18n:cinestation.VirtualCamera.lookAt",
        type: _0x5ddb21
      }), _0x306f16 = _0x5e8589({
        tooltip: "i18n:cinestation.VirtualCamera.follow",
        type: _0x5ddb21
      }), _0x36d11a = _0x5e8589({
        type: _0x30643b
      }), _0x19d936 = _0x5e8589({
        type: _0x3c55fc
      }), _0x175961 = _0x5e8589({
        animatable: false,
        type: _0x4a81c
      }), _0x10a55e = _0x5e8589({
        animatable: false,
        type: _0x260743
      }), _0x293032 = _0x5e8589({
        animatable: false,
        type: _0x39bef8
      }), _0x5a47f6(_0x4a8f2b = _0x32d27d((_0x2b01ef = _0x667199((_0xb1f076 = function (_0x49116e) {
        function _0x3f9e93() {
          {
            for (var _0x1ec667, _0x41fc77 = arguments.length, _0x506d78 = new Array(_0x41fc77), _0x4f09cb = 0; _0x4f09cb < _0x41fc77; _0x4f09cb++) {
              _0x506d78[_0x4f09cb] = arguments[_0x4f09cb];
            }
            (_0x1ec667 = _0x49116e.call.apply(_0x49116e, [this].concat(_0x506d78)) || this)._editorChanged = true;
            _0x1ec667._composerChanged = true;
            _0x1ec667._visibleDefault = false;
            _0x33e2e1(_0x1ec667, "_lookAt", _0x2b01ef, _0x2e0c5f(_0x1ec667));
            _0x33e2e1(_0x1ec667, "_follow", _0xade823, _0x2e0c5f(_0x1ec667));
            _0x33e2e1(_0x1ec667, "debug", _0x1c0181, _0x2e0c5f(_0x1ec667));
            _0x33e2e1(_0x1ec667, "priority", _0x2ed92a, _0x2e0c5f(_0x1ec667));
            _0x33e2e1(_0x1ec667, "lens", _0x476bc9, _0x2e0c5f(_0x1ec667));
            _0x33e2e1(_0x1ec667, "body", _0x34883e, _0x2e0c5f(_0x1ec667));
            _0x33e2e1(_0x1ec667, "aim", _0x303ce2, _0x2e0c5f(_0x1ec667));
            _0x33e2e1(_0x1ec667, "noise", _0x580a98, _0x2e0c5f(_0x1ec667));
            _0x33e2e1(_0x1ec667, "impulse", _0x1c39de, _0x2e0c5f(_0x1ec667));
            _0x1ec667._stages = [new _0x555e02(_0x2e0c5f(_0x1ec667)), new _0x186b31(_0x2e0c5f(_0x1ec667)), new _0x4318dc(_0x2e0c5f(_0x1ec667)), new _0x210072(_0x2e0c5f(_0x1ec667))];
            _0x1ec667._finalPosition = new _0x3edffd();
            _0x1ec667._finalRotation = new _0x1c58f9();
            _0x1ec667._correctPosition = new _0x3edffd();
            _0x1ec667._correctRotation = new _0x1c58f9();
            _0x1ec667._lookaheadPosition = new _0x3edffd();
            return _0x1ec667;
          }
        }
        _0x3fd983(_0x3f9e93, _0x49116e);
        var _0x41c171 = _0x3f9e93.prototype;
        _0x41c171.onLoad = function () {
          {
            var _0x42f695 = this;
            CC_EDITOR && (_0x46bb59.on(_0x509521.LENS_CHANGED, function () {
              return _0x42f695._modelChanged = true;
            }), _0x46bb59.on(_0x509521.EDITOR_CHANGED, function () {
              return _0x42f695._editorChanged = true;
            }), _0x46bb59.on(_0x509521.COMPOSER_CHANGED, function () {
              return _0x42f695._composerChanged = true;
            }));
            this.node.on(_0x5ddb21.EventType.TRANSFORM_CHANGED, this._onTransformChanged, this);
          }
        };
        _0x41c171._onTransformChanged = function (_0x5333fa) {
          if (CC_EDITOR) {
            if (!this.follow) {
              return;
            }
            if (_0x5333fa & _0x5ddb21.TransformBit.POSITION) {
              switch (this.body.type) {
                case _0x129589.Tracked:
                  this._editorChanged = true;
                  break;
                case _0x129589.FreeLook:
                  _0x3edffd.subtract(this.body.freelook.followOffset, this.node.worldPosition, this.follow.worldPosition);
                  this._editorChanged = true;
              }
            }
          }
        };
        _0x41c171.onEnable = function () {
          _0x49116e.prototype.onEnable.call(this);
          _0xde5ce2.addCamera(this);
        };
        _0x41c171.onDisable = function () {
          _0x49116e.prototype.onDisable.call(this);
          _0xde5ce2.removeCamera(this);
          this.onDeActive();
        };
        _0x41c171.onActive = function () {
          this._stages.forEach(function (_0x32dd35) {
            return _0x32dd35.enable = true;
          });
        };
        _0x41c171.onDeActive = function () {
          {
            this._stages.forEach(function (_0xd51749) {
              return _0xd51749.enable = false;
            });
          }
        };
        _0x41c171.updateCamera = function (_0x3016a2) {
          if (!CC_EDITOR || this._isChangedInEditor()) {
            _0x1c58f9.identity(this._correctRotation);
            _0x3edffd.zero(this._correctPosition);
            for (var _0xb2768c, _0x42eb67 = _0x431154(this._stages); !(_0xb2768c = _0x42eb67()).done;) {
              _0xb2768c.value.updateStage(_0x3016a2);
            }
          }
        };
        _0x41c171._isChangedInEditor = function () {
          return !!this._editorChanged && (this._editorChanged = false, true);
        };
        _0x41c171._updateMesh = function (_0x96abe5) {
          for (var _0x38131f = [new _0x3edffd(-1, -1, -1), new _0x3edffd(1, -1, -1), new _0x3edffd(-1, 1, -1), new _0x3edffd(1, 1, -1), new _0x3edffd(-1, -1, 1), new _0x3edffd(1, -1, 1), new _0x3edffd(-1, 1, 1), new _0x3edffd(1, 1, 1)], _0x589536 = this.lens, _0x2c21c1 = _0x40e325.getDesignResolutionSize(), _0x3a0224 = _0x5f0d50.perspective(new _0x5f0d50(), _0xefe455(_0x589536.fov), _0x2c21c1.width / _0x2c21c1.height, _0x589536.near, _0x589536.far).invert(), _0x4397ef = 0; _0x4397ef < 8; _0x4397ef++) {
            _0x38131f[_0x4397ef].transformMat4(_0x3a0224);
          }
          for (var _0x32c008 = [], _0x2668b5 = [], _0x19b79a = 0; _0x19b79a < 8; _0x19b79a++) {
            for (var _0x289fe7 = 0; _0x289fe7 < 3; _0x289fe7++) {
              _0x3edffd.toArray(_0x32c008, _0x38131f[_0x19b79a], _0x32c008.length);
              _0x3edffd.toArray(_0x32c008, _0x38131f[_0x19b79a ^ 1 << _0x289fe7], _0x32c008.length);
              _0x2668b5.push(1, 1, 1, 1);
              _0x2668b5.push(1, 1, 1, 1);
            }
          }
          return _0x327d6d.createMesh({
            positions: _0x32c008,
            colors: _0x2668b5
          }, _0x96abe5);
        };
        _0x3492ca(_0x3f9e93, [{
          key: "active",
          get: function () {
            return _0xde5ce2.vcam === this;
          },
          set: function (_0x56b117) {
            _0x56b117 ? _0xde5ce2.activeCamera(this, 0) : this.active && _0xde5ce2.activeCamera(null, 0);
          }
        }, {
          key: "lookAt",
          get: function () {
            return this._lookAt;
          },
          set: function (_0x47c74a) {
            this._lookAt !== _0x47c74a && (this._lookAt = _0x47c74a, this._editorChanged = CC_EDITOR, this._stages.forEach(function (_0x58bc34) {
              return _0x58bc34.onLookAtChanged(_0x47c74a);
            }));
          }
        }, {
          key: "follow",
          get: function () {
            return this._follow;
          },
          set: function (_0x138f32) {
            this._follow !== _0x138f32 && (this._follow = _0x138f32, this._editorChanged = CC_EDITOR, this._stages.forEach(function (_0x7f65c9) {
              {
                return _0x7f65c9.onFollowChanged(_0x138f32);
              }
            }));
          }
        }, {
          key: "correctPosition",
          get: function () {
            return this._correctPosition;
          }
        }, {
          key: "correctRotation",
          get: function () {
            return this._correctRotation;
          }
        }, {
          key: "finalPosition",
          get: function () {
            return _0x3edffd.add(this._finalPosition, this.node.worldPosition, this._correctPosition);
          }
        }, {
          key: "finalRotation",
          get: function () {
            return _0x1c58f9.multiply(this._finalRotation, this.node.worldRotation, this._correctRotation);
          }
        }, {
          key: "lookaheadPosition",
          get: function () {
            return this._lookaheadPosition;
          }
        }]);
        return _0x3f9e93;
      }(_0x5c49e9)).prototype, "_lookAt", [_0x51fe1a], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0xade823 = _0x667199(_0xb1f076.prototype, "_follow", [_0x701ae6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x1c0181 = _0x667199(_0xb1f076.prototype, "debug", [_0x2b6ade], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _0x667199(_0xb1f076.prototype, "active", [_0x5e8589], Object.getOwnPropertyDescriptor(_0xb1f076.prototype, "active"), _0xb1f076.prototype), _0x2ed92a = _0x667199(_0xb1f076.prototype, "priority", [_0x31c97b], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 10;
        }
      }), _0x667199(_0xb1f076.prototype, "lookAt", [_0x4e1392], Object.getOwnPropertyDescriptor(_0xb1f076.prototype, "lookAt"), _0xb1f076.prototype), _0x667199(_0xb1f076.prototype, "follow", [_0x306f16], Object.getOwnPropertyDescriptor(_0xb1f076.prototype, "follow"), _0xb1f076.prototype), _0x476bc9 = _0x667199(_0xb1f076.prototype, "lens", [_0x36d11a], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new _0x30643b();
        }
      }), _0x34883e = _0x667199(_0xb1f076.prototype, "body", [_0x19d936], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new _0x3c55fc();
        }
      }), _0x303ce2 = _0x667199(_0xb1f076.prototype, "aim", [_0x175961], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new _0x4a81c();
        }
      }), _0x580a98 = _0x667199(_0xb1f076.prototype, "noise", [_0x10a55e], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new _0x260743();
        }
      }), _0x1c39de = _0x667199(_0xb1f076.prototype, "impulse", [_0x293032], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new _0x39bef8();
        }
      }), _0x4a8f2b = _0xb1f076)) || _0x4a8f2b) || _0x4a8f2b));
      _0x6e5b95._RF.pop();
    }
  };
});
System.register("chunks:///_virtual/Visualization.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./CinestationShareAssets.ts"], function (_0x1dcb9e) {
  var _0x4bb204;
  var _0xf02e0f;
  var _0x12034c;
  var _0x35173a;
  var _0x16f26f;
  var _0x2954a3;
  var _0x4daff3;
  var _0x517d1d;
  return {
    setters: [function (_0x479da0) {
      _0x4bb204 = _0x479da0.inheritsLoose;
      _0xf02e0f = _0x479da0.createClass;
    }, function (_0x4f03f9) {
      {
        _0x12034c = _0x4f03f9.cclegacy;
        _0x35173a = _0x4f03f9._decorator;
        _0x16f26f = _0x4f03f9.director;
        _0x2954a3 = _0x4f03f9.renderer;
        _0x4daff3 = _0x4f03f9.Component;
      }
    }, function (_0x263e0b) {
      {
        _0x517d1d = _0x263e0b.cinestationShareAssets;
      }
    }],
    execute: function () {
      var _0x373c6d;
      _0x12034c._RF.push({}, "33adaQlUqdEy5hcZt+9bHhU", "Visualization", undefined);
      var _0x85365c = _0x35173a.ccclass;
      _0x35173a.property;
      _0x1dcb9e("Visualization", _0x85365c("Visualization")(_0x373c6d = function (_0x294ca3) {
        function _0x26ac18() {
          for (var _0x6bf6c7, _0x2ad996 = arguments.length, _0x381a4e = new Array(_0x2ad996), _0x45a82b = 0; _0x45a82b < _0x2ad996; _0x45a82b++) {
            _0x381a4e[_0x45a82b] = arguments[_0x45a82b];
          }
          (_0x6bf6c7 = _0x294ca3.call.apply(_0x294ca3, [this].concat(_0x381a4e)) || this)._modelChanged = false;
          _0x6bf6c7._mesh = null;
          _0x6bf6c7._model = null;
          _0x6bf6c7._material = _0x517d1d.lineMaterial;
          _0x6bf6c7._visibleInRuntime = CC_EDITOR;
          _0x6bf6c7._visibleDefault = true;
          return _0x6bf6c7;
        }
        _0x4bb204(_0x26ac18, _0x294ca3);
        var _0x3b80aa = _0x26ac18.prototype;
        _0x3b80aa.onEnable = function () {
          this._visibleInRuntime && (this._createModel(), this._attachToScene());
        };
        _0x3b80aa.onDisable = function () {
          this._visibleInRuntime && this._detachFromScene();
        };
        _0x3b80aa._attachToScene = function () {
          this._model && this.node && this.node.scene && (this._model.scene && this._detachFromScene(), this._getRenderScene().addModel(this._model));
        };
        _0x3b80aa._detachFromScene = function () {
          this._model && this._model.scene && this._model.scene.removeModel(this._model);
        };
        _0x3b80aa._createModel = function () {
          this._model || (this._model = _0x16f26f.root.createModel(_0x2954a3.scene.Model), this._model.node = this._model.transform = this.node, this._model.enabled = this._visibleDefault, this._modelChanged = true);
        };
        _0x3b80aa.update = function (_0x41ac0d) {
          this._modelChanged && this._model && this._material && (this._modelChanged = false, this._mesh = this._updateMesh(this._mesh), this._mesh && this._model.initSubModel(0, this._mesh.renderingSubMeshes[0], this._material));
        };
        _0x3b80aa._updateMesh = function (_0x6814e4) {
          return _0x6814e4;
        };
        _0xf02e0f(_0x26ac18, [{
          key: "visible",
          get: function () {
            return !!this._model && this._model.enabled;
          },
          set: function (_0xe5a9fa) {
            this._model && (this._model.enabled = _0xe5a9fa);
          }
        }]);
        return _0x26ac18;
      }(_0x4daff3)) || _0x373c6d);
      _0x12034c._RF.pop();
    }
  };
});
System.register("chunks:///_virtual/WebNet.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./jsonp.ts", "./webTools.ts", "./UIFast.ts", "./index.mjs_cjs=&original=3.js"], function (_0x1a6a35) {
  var _0x8dbadc;
  var _0x10c961;
  var _0x100fdf;
  var _0xcb89a0;
  var _0xada90f;
  var _0x503a07;
  var _0x2cc516;
  return {
    setters: [function (_0x36c7a8) {
      _0x8dbadc = _0x36c7a8.asyncToGenerator;
      _0x10c961 = _0x36c7a8.regeneratorRuntime;
      _0x100fdf = _0x36c7a8.extends;
    }, function (_0x25a664) {
      _0xcb89a0 = _0x25a664.cclegacy;
    }, function (_0x4d76a6) {
      _0xada90f = _0x4d76a6.jsonp;
    }, function (_0x256f03) {
      _0x503a07 = _0x256f03.getUrlParams;
    }, function (_0x48dbb9) {
      _0x2cc516 = _0x48dbb9.showToast;
    }, null],
    execute: function () {
      _0x1a6a35({
        creditsCost: function (_0x16a715, _0xeb9ec6, _0x247198, _0x7d549b) {
          return _0x2cd71c.apply(this, arguments);
        },
        destroyWebNetData: function () {
          _0x3d619f = {};
        },
        getProjectId: _0x3a6e31,
        getPxToken: _0x169de5,
        getPxTokenSave: _0x4dd6bf,
        getWebData: function (_0x43aee7) {
          return _0x3d619f[_0x43aee7] || {};
        },
        pollingWebNet: _0x3ffd9d,
        refreshPxTokenKey: _0x46f981,
        sendLog: _0x5f3e47,
        sendWebNet: _0x3cd1bb,
        sendWebNetWithToken: function (_0x317db7, _0x2a000d, _0x45a742) {
          return new Promise(_0x8dbadc(_0x10c961().mark(function _0x36fd1d(_0x1d4d42) {
            var _0x4bffdf;
            var _0x5d0c4f;
            return _0x10c961().wrap(function (_0x28934e) {
              for (;;) {
                switch (_0x28934e.prev = _0x28934e.next) {
                  case 0:
                    _0x28934e.prev = 0;
                    _0x28934e.next = 3;
                    return _0x4dd6bf();
                  case 3:
                    if (_0x4bffdf = _0x28934e.sent) {
                      {
                        _0x28934e.next = 8;
                        break;
                      }
                    }
                    _0x2cc516("网络异常，请稍后重试");
                    _0x1d4d42({
                      success: false
                    });
                    return _0x28934e.abrupt("return");
                  case 8:
                    _0x28934e.next = 10;
                    return _0x3cd1bb(_0x317db7, _0x100fdf({
                      token: _0x4bffdf
                    }, _0x2a000d), _0x45a742);
                  case 10:
                    _0x5d0c4f = _0x28934e.sent;
                    _0x1d4d42(_0x5d0c4f);
                    _0x28934e.next = 18;
                    break;
                  case 14:
                    _0x28934e.prev = 14;
                    _0x28934e.t0 = _0x28934e.catch(0);
                    _0x2cc516("网络异常，请稍后重试");
                    _0x1d4d42({
                      success: false
                    });
                  case 18:
                  case "end":
                    return _0x28934e.stop();
                }
              }
            }, _0x36fd1d, null, [[0, 14]]);
          })));
        }
      });
      _0xcb89a0._RF.push({}, "fd5d6QQMfVO34/pv8z0z9Bp", "WebNet", undefined);
      _0x1a6a35("DEFAULF_ERROR", "网络异常，请稍后重试");
      var _0x32c5f2 = _0x1a6a35("WebNetName", function (_0x3ea80b) {
        _0x3ea80b.getFrontVariable = "coop_frontVariable.query";
        _0x3ea80b.buriedPoint = "buriedPoint";
        _0x3ea80b.index = "coin/index.do";
        _0x3ea80b.putLuck = "coin/putLuck.do";
        _0x3ea80b.energyDetail = "coin/energyDetail.do";
        _0x3ea80b.draw = "coin/draw.do";
        _0x3ea80b.reportResult = "coin/reportResult.do";
        _0x3ea80b.currentTime = "coin/current.do";
        _0x3ea80b.finalSubmit = "game/finalSubmit.do";
        _0x3ea80b.queryReviveData = "game/queryReviveData.do";
        _0x3ea80b.reviveGame = "game/reviveGame.do";
        _0x3ea80b.genQrCode = "home/generateSunCode.do";
        _0x3ea80b.queryRankInfo = "rank/index.do";
        _0x3ea80b.rankDivide = "/rank/coop_divide.do";
        _0x3ea80b.rankSettlement = "/rank/coop_settlement.do";
        _0x3ea80b.rankSubmit = "/rank/coop_submitScore.do";
        _0x3ea80b.prizeDetail = "records.query";
        _0x3ea80b.queryPrizeDetail = "/customActivity/kouweiwang/prize/queryOrderNo";
        _0x3ea80b.queryExchange = "exchange_1/listExchangeLimit.do";
        _0x3ea80b.doExchange = "exchange_1/doExchange.do";
        _0x3ea80b.doGreenExchange = "task_1/greenExchange.do";
        _0x3ea80b.powerExchange = "coin/exEnergy.do";
        _0x3ea80b.querySignInfo = "checkin_1/query.do";
        _0x3ea80b.querySignPrize = "checkin_1/queryOptions.do";
        _0x3ea80b.doSign = "checkin_1/doSign.do";
        _0x3ea80b.queryCredits = "home/queryCredits.do";
        _0x3ea80b.projectRule = "projectRule.query";
        _0x3ea80b.creditsCost = "credits/creditsCost.do";
        _0x3ea80b.queryStatus = "credits/queryStatus.do";
        _0x3ea80b.getInviteCode = "inviteAssist_1/getInviteCode.do";
        _0x3ea80b.doAssist = "inviteAssist_1/doAssist.do";
        _0x3ea80b.finishBrowseTask = "task_1/finishBrowseTask.do";
        _0x3ea80b.claimThirdTask = "task_1/claimThirdTask.do";
        _0x3ea80b.records = "records.query";
        _0x3ea80b.propPag = "exchang_1/listExchangeLimit.do";
        _0x3ea80b.propExchange = "exchang_1/doExchange.do";
        _0x3ea80b.taskList = "task_1/queryTasks.do";
        _0x3ea80b.finishTask = "task_1/doCompleted.do";
        _0x3ea80b.consumeSp = "game/consumeSp.do";
        return _0x3ea80b;
      }({}));
      var _0x554ddf = _0x1a6a35("ERR_MESSAGE", {
        100001: "登录过期啦，请重新登录哦～",
        5001033: "该局使用该道具次数已达上限",
        200303: "助力失败，您的助力次数已用完",
        200306: "助力失败，不能给自己助力哦~",
        200304: "助力失败，好友被助力次数已达上限~",
        5001041: "网络异常，请稍后再试",
        100018: "账号异常，请联系活动客服处理哦～"
      });
      var _0x3d619f = {};
      function _0x3cd1bb(_0x2c273a, _0x16ab33, _0xcc4ec7) {
        undefined === _0x16ab33 && (_0x16ab33 = {});
        undefined === _0xcc4ec7 && (_0xcc4ec7 = {});
        var _0x575e50 = _0xcc4ec7;
        var _0x2459a2 = _0x575e50.callback;
        var _0x5bd6d3 = _0x575e50.hideMsg;
        var _0x265271 = undefined !== _0x5bd6d3 && _0x5bd6d3;
        var _0x2f537e = _0x575e50.isGet;
        var _0xf7a4ae = undefined === _0x2f537e || _0x2f537e;
        var _0x49f3f5 = _0x575e50.headers;
        var _0x15c8c9 = undefined === _0x49f3f5 ? {} : _0x49f3f5;
        return new Promise(_0x8dbadc(_0x10c961().mark(function _0x5e2317(_0x25723e, _0x158fdd) {
          var _0x5a88e7;
          var _0x3f614b;
          var _0x3bfdc2;
          var _0x36d5b6;
          return _0x10c961().wrap(function (_0x2f1928) {
            for (;;) {
              switch (_0x2f1928.prev = _0x2f1928.next) {
                case 0:
                  _0x5a88e7 = function (_0x6249cb) {
                    _0x6249cb = _0x6249cb || {};
                    _0x3d619f[_0x2c273a] = _0x6249cb;
                    _0x6249cb.success = _0x6249cb.success || _0x6249cb.ok;
                    _0x6249cb.timeStamp = _0x6249cb.timeStamp || Date.now();
                    _0x6249cb.success || _0x265271 || _0x2cc516(_0x554ddf[_0x6249cb.code] || _0x6249cb.message || "网络异常，请稍后再试～");
                    _0x2459a2 && _0x2459a2(_0x6249cb.success, _0x6249cb);
                    _0x25723e(_0x6249cb);
                    console.log("\n%c[ request ]\nNAME  : " + _0x2c273a + " \nSTATE : %o \nTIME  : %o \nPARAM : %o \n%cDATA  : %o \n", _0x6249cb.success ? "color:green" : "color:red", _0x6249cb.success, _0x6249cb.timeStamp || _0x6249cb.timestamp, _0x16ab33, _0x6249cb.success ? "color:green" : "color:red", _0x6249cb);
                  };
                  _0x3f614b = function () {
                    _0x265271 || _0x2cc516("网络异常，请稍后再试～");
                    _0x2459a2 && _0x2459a2(false);
                    _0x25723e({
                      success: false
                    });
                    console.log("接口" + _0x2c273a + "：网络超时");
                    return {
                      success: false
                    };
                  };
                  _0x3bfdc2 = _0x2c273a;
                  (_0x36d5b6 = _0x16ab33 || {}).token && (_0x3bfdc2 += "?token=" + _0x36d5b6.token, delete _0x36d5b6.token);
                  _0xf7a4ae || (_0x36d5b6 = JSON.stringify(_0x36d5b6), _0x15c8c9["content-type"] = "application/json;");
                  $.ajax({
                    url: _0x3bfdc2,
                    type: _0xf7a4ae ? "GET" : "POST",
                    data: _0x36d5b6,
                    dataType: "json",
                    async: true,
                    headers: _0x15c8c9,
                    success: _0x5a88e7,
                    error: _0x3f614b
                  });
                case 8:
                case "end":
                  return _0x2f1928.stop();
              }
            }
          }, _0x5e2317);
        })));
      }
      var _0x284344;
      var _0x5c75ed = "projectx/";
      function _0x3a6e31() {
        if (_0x284344) {
          return _0x284344;
        }
        var _0x2fef8b = window.location.href;
        var _0x326200 = _0x2fef8b.split(_0x5c75ed);
        if (2 != _0x326200.length) {
          return _0x284344 = "projectId";
        }
        var _0x4c3b17 = _0x2fef8b.indexOf(_0x5c75ed) + _0x5c75ed.length;
        var _0xaf6fa = _0x326200[1].indexOf("/");
        return _0x284344 = _0x2fef8b.substr(_0x4c3b17, _0xaf6fa);
      }
      var _0x27173c = location.href.indexOf(".com.cn/projectx") >= 0;
      function _0x46f981(_0x4eba88) {
        if (_0x27173c) {
          var _0x2c04ca = document.getElementsByTagName("head")[0];
          var _0x308476 = document.createElement("script");
          _0x308476.src = "getTokenKey?_=" + Date.now();
          _0x308476.onload = function () {
            {
              _0x2c04ca.removeChild(_0x308476);
              _0x4eba88 && _0x4eba88(true);
            }
          };
          _0x308476.onerror = function () {
            _0x2c04ca.removeChild(_0x308476);
            _0x4eba88 && _0x4eba88(false);
          };
          _0x2c04ca.appendChild(_0x308476);
        } else {
          _0x4eba88 && _0x4eba88(true);
        }
      }
      function _0x4dd6bf() {
        return new Promise(function (_0x5436a5, _0x44d840) {
          _0x169de5(_0x8dbadc(_0x10c961().mark(function _0x4a2272(_0x1bebb4, _0x12858a) {
            return _0x10c961().wrap(function (_0x40d53d) {
              for (;;) {
                switch (_0x40d53d.prev = _0x40d53d.next) {
                  case 0:
                    if (!_0x12858a) {
                      {
                        _0x40d53d.next = 3;
                        break;
                      }
                    }
                    _0x5436a5(_0x12858a);
                    return _0x40d53d.abrupt("return");
                  case 3:
                    _0x40d53d.next = 5;
                    return new Promise(function (_0xa3d1e7) {
                      {
                        _0x46f981(_0xa3d1e7);
                      }
                    });
                  case 5:
                    if (_0x40d53d.sent) {
                      _0x40d53d.next = 9;
                      break;
                    }
                    _0x5436a5(null);
                    return _0x40d53d.abrupt("return");
                  case 9:
                    _0x169de5(function (_0x1a1bb2, _0x3e8f59) {
                      _0x5436a5(_0x3e8f59);
                    });
                  case 10:
                  case "end":
                    return _0x40d53d.stop();
                }
              }
            }, _0x4a2272);
          })));
        });
      }
      function _0x169de5(_0x589f03) {
        {
          if (_0x27173c) {
            if (window.ohjaiohdf) {
              var _0x106e67 = new XMLHttpRequest();
              _0x106e67.open("get", "getToken?_t=" + Date.now(), true);
              _0x106e67.onreadystatechange = function () {
                if (4 === _0x106e67.readyState && 200 === _0x106e67.status) {
                  var _0x315965 = JSON.parse(_0x106e67.response);
                  if (_0x315965.success) {
                    window.eval(_0x315965.data);
                    _0x589f03(null, window.ohjaiohdf());
                  } else {
                    var _0x11b449 = function () {
                      switch (_0x315965.code) {
                        case "100001":
                          return "need login";
                        case "100024":
                          return "state invalid";
                        default:
                          return _0x315965.code;
                      }
                    }();
                    _0x589f03(_0x11b449);
                  }
                }
              };
              _0x106e67.onerror = function () {
                _0x589f03("net error");
              };
              _0x106e67.onloadend = function () {
                404 === _0x106e67.status && _0x589f03("net error");
              };
              _0x106e67.send();
            } else {
              _0x589f03("need reload");
            }
          } else {
            _0x589f03(null, "token");
          }
        }
      }
      _0x46f981();
      var _0x27045f = _0x1a6a35("LOG_TYPE", function (_0x418fe2) {
        {
          _0x418fe2.EXPOSURE = "exposure";
          _0x418fe2.CLICK = "click";
          return _0x418fe2;
        }
      }({}));
      function _0x5f3e47(_0x1ed0e0, _0xc430a, _0x2895d0, _0x107969, _0x37860a) {
        undefined === _0x2895d0 && (_0x2895d0 = 1);
        undefined === _0x107969 && (_0x107969 = 0);
        var _0x3cc89b = _0x3a6e31();
        var _0x27f152 = _0x503a07("appID");
        _0x27f152 || console.error("appID不存在，检查链接");
        var _0x41b138 = {
          dpm: (_0x27f152 || "appID") + ".110." + _0xc430a + "." + _0x2895d0,
          dcm: "202." + (_0x3cc89b || "projectID") + "." + _0x107969 + ".0",
          appId: _0x27f152
        };
        var _0x3eb2b7 = _0x1ed0e0 == _0x27045f.EXPOSURE;
        _0xada90f(_0x3eb2b7 ? "//embedlog.duiba.com.cn/exposure/standard" : "/log/click", _0x41b138);
      }
      _0x1a6a35("sendLogList", function (_0x1f011f, _0x40ee61) {
        _0x40ee61.forEach(function (_0x12d2b8) {
          {
            "object" == typeof _0x12d2b8 ? _0x5f3e47(_0x1f011f, _0x12d2b8.area, _0x12d2b8.dpm_d, (null == _0x12d2b8 ? undefined : _0x12d2b8.dcm_c) || 0) : _0x5f3e47(_0x1f011f, _0x12d2b8);
          }
        });
      });
      function _0x2cd71c() {
        return (_0x2cd71c = _0x8dbadc(_0x10c961().mark(function _0x3bf376(_0x30ae57, _0x18214e, _0x29fb81, _0x582681) {
          {
            var _0x117228;
            var _0x147d34;
            var _0x5efe0a;
            var _0x21dc02;
            var _0xfa03c8;
            return _0x10c961().wrap(function (_0x5b01fc) {
              for (;;) {
                switch (_0x5b01fc.prev = _0x5b01fc.next) {
                  case 0:
                    _0x117228 = {
                      toPlaywayId: _0x30ae57,
                      toActionId: _0x18214e,
                      credits: _0x582681
                    };
                    _0x29fb81 && (_0x117228.desc = _0x29fb81);
                    _0x5b01fc.next = 4;
                    return _0x3cd1bb(_0x32c5f2.creditsCost, _0x117228);
                  case 4:
                    if (_0x147d34 = _0x5b01fc.sent, _0x5efe0a = _0x147d34.success, _0x21dc02 = _0x147d34.data, _0x5efe0a) {
                      _0x5b01fc.next = 9;
                      break;
                    }
                    return _0x5b01fc.abrupt("return", {
                      success: false
                    });
                  case 9:
                    _0x5b01fc.next = 11;
                    return _0x3ffd9d({
                      ticketNum: _0x21dc02
                    }, function (_0x5d62db, _0x444759) {
                      return 0 != (null == _0x444759 ? undefined : _0x444759.data);
                    });
                  case 11:
                    _0xfa03c8 = _0x5b01fc.sent;
                    return _0x5b01fc.abrupt("return", {
                      success: 1 == _0xfa03c8.data,
                      ticket: _0x21dc02,
                      pollingData: _0xfa03c8
                    });
                  case 13:
                  case "end":
                    return _0x5b01fc.stop();
                }
              }
            }, _0x3bf376);
          }
        }))).apply(this, arguments);
      }
      function _0x3ffd9d(_0x1b9837, _0x423faf, _0x197ae1, _0x3e31e7, _0x38b32f) {
        return _0x2f2477.apply(this, arguments);
      }
      function _0x2f2477() {
        {
          return (_0x2f2477 = _0x8dbadc(_0x10c961().mark(function _0x497584(_0x4829cf, _0x115421, _0x345afe, _0x179248, _0x2c85f5) {
            return _0x10c961().wrap(function (_0x1f8b3d) {
              {
                for (;;) {
                  switch (_0x1f8b3d.prev = _0x1f8b3d.next) {
                    case 0:
                      undefined === _0x179248 && (_0x179248 = 10);
                      undefined === _0x2c85f5 && (_0x2c85f5 = 200);
                      return _0x1f8b3d.abrupt("return", new Promise(_0x8dbadc(_0x10c961().mark(function _0x7ba289(_0x21428c, _0x4327b6) {
                        var _0x2f3e7c;
                        var _0x1387e4;
                        var _0x3d1656;
                        return _0x10c961().wrap(function (_0x32d2ad) {
                          for (;;) {
                            switch (_0x32d2ad.prev = _0x32d2ad.next) {
                              case 0:
                                _0x3d1656 = function () {
                                  return (_0x3d1656 = _0x8dbadc(_0x10c961().mark(function _0x508778() {
                                    {
                                      var _0x38b9e5;
                                      return _0x10c961().wrap(function (_0x138951) {
                                        for (;;) {
                                          switch (_0x138951.prev = _0x138951.next) {
                                            case 0:
                                              _0x138951.next = 2;
                                              return _0x3cd1bb(_0x32c5f2.queryStatus, _0x4829cf);
                                            case 2:
                                              if (_0x38b9e5 = _0x138951.sent, !_0x115421(_0x38b9e5.success, _0x38b9e5)) {
                                                _0x138951.next = 7;
                                                break;
                                              }
                                              _0x21428c(_0x38b9e5);
                                              _0x345afe && _0x345afe(_0x38b9e5);
                                              return _0x138951.abrupt("return");
                                            case 7:
                                              if (!(++_0x2f3e7c >= _0x179248)) {
                                                _0x138951.next = 12;
                                                break;
                                              }
                                              _0x21428c(_0x38b9e5);
                                              _0x345afe && _0x345afe(_0x38b9e5);
                                              return _0x138951.abrupt("return");
                                            case 12:
                                              setTimeout(function () {
                                                _0x1387e4();
                                              }, _0x2c85f5);
                                            case 13:
                                            case "end":
                                              return _0x138951.stop();
                                          }
                                        }
                                      }, _0x508778);
                                    }
                                  }))).apply(this, arguments);
                                };
                                _0x1387e4 = function () {
                                  return _0x3d1656.apply(this, arguments);
                                };
                                _0x2f3e7c = 0;
                                _0x32d2ad.next = 5;
                                return _0x1387e4();
                              case 5:
                              case "end":
                                return _0x32d2ad.stop();
                            }
                          }
                        }, _0x7ba289);
                      }))));
                    case 3:
                    case "end":
                      return _0x1f8b3d.stop();
                  }
                }
              }
            }, _0x497584);
          }))).apply(this, arguments);
        }
      }
      _0xcb89a0._RF.pop();
    }
  };
});
System.register("chunks:///_virtual/webTools.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], function (_0xed8c75) {
  var _0x6ce0f;
  var _0x8e80c5;
  return {
    setters: [function (_0x4ace48) {
      _0x6ce0f = _0x4ace48.createForOfIteratorHelperLoose;
    }, function (_0x5dc9d8) {
      _0x8e80c5 = _0x5dc9d8.cclegacy;
    }],
    execute: function () {
      var _0x559685;
      var _0x4c8fd1;
      var _0x320616;
      function _0x2cb615(_0x3a4b31, _0x29d6c2) {
        if (undefined === _0x29d6c2 && (_0x29d6c2 = false), _0x559685 && !_0x29d6c2) {
          return _0x559685[_0x3a4b31];
        }
        _0x559685 = {};
        var _0x496f11 = window.location.search;
        try {
          {
            _0x496f11 = top.location.search;
          }
        } catch (_0x28a52e) {}
        for (var _0x456562, _0x17e76f = _0x6ce0f(_0x496f11.replace("?", "").split("&")); !(_0x456562 = _0x17e76f()).done;) {
          var _0x1959d5 = _0x456562.value.split("=");
          _0x559685[_0x1959d5[0]] = 1 === _0x1959d5.length || decodeURIComponent(_0x1959d5[1]);
        }
        return _0x559685[_0x3a4b31];
      }
      function _0x49732d(_0x59b3cf, _0x2560ea) {
        if (undefined === _0x2560ea && (_0x2560ea = false), _0x4c8fd1 && !_0x2560ea) {
          return _0x4c8fd1[_0x59b3cf];
        }
        _0x4c8fd1 = {};
        for (var _0x375303 = document.cookie.split("; "), _0x27030a = 0; _0x27030a < _0x375303.length; _0x27030a++) {
          var _0x2e8992 = _0x375303[_0x27030a].split("=");
          _0x4c8fd1[_0x2e8992[0]] = decodeURIComponent(_0x2e8992[1]);
        }
        return _0x4c8fd1[_0x59b3cf];
      }
      function _0x19cdb4(_0x4e3898, _0x5b1666, _0x394681) {
        var _0x534382 = _0x5b1666 + "=([^&]*)";
        var _0x2de3ff = _0x5b1666 + "=" + _0x394681;
        if (_0x4e3898.match(_0x534382)) {
          {
            var _0x275457 = "/(" + _0x5b1666 + "=)([^&]*)/gi";
            _0x275457 = _0x4e3898.replace(eval(_0x275457), _0x2de3ff);
            return _0x275457;
          }
        }
        return _0x4e3898.match("[?]") ? _0x4e3898 + "&" + _0x2de3ff : _0x4e3898 + "?" + _0x2de3ff;
      }
      function _0x50a395() {
        var _0x27236a = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
        _0x27236a && setTimeout(function () {
          document.getElementsByTagName("input")[0].onblur = function () {
            _0x27236a && setTimeout(function () {
              "INPUT" != document.activeElement.tagName && "TEXTAREA" != document.activeElement.tagName && (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent) || /(Android)/i.test(navigator.userAgent), document.activeElement.scrollIntoViewIfNeeded(true));
            }, 100);
          };
        }, 50);
      }
      function _0x4192a6() {
        var _0x599faf = window.navigator.userAgent.toLowerCase();
        /iphone|ipod|ipad/i.test(navigator.appVersion) && /MicroMessenger/i.test(_0x599faf) && document.body.addEventListener("focusout", function () {
          console.log("focusout");
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
          });
        });
      }
      function _0x21e2fb(_0x327986) {
        _0x320616 || (_0x320616 = document.createElement("div"));
        _0x320616.innerHTML = _0x327986;
        document.body.appendChild(_0x320616);
        var _0x3cfb78 = _0x320616.innerText;
        document.body.removeChild(_0x320616);
        return _0x3cfb78;
      }
      _0xed8c75({
        changeURLArg: _0x19cdb4,
        getCookieParams: _0x49732d,
        getUrlParams: _0x2cb615,
        htmlToPureText: _0x21e2fb,
        inputFeildIosEnable: _0x50a395,
        inputIosAdapte: _0x4192a6
      });
      _0x8e80c5._RF.push({}, "9ef62bJ4wZCXIx3y/Tsi4Hz", "webTools", undefined);
      _0x8e80c5._RF.pop();
    }
  };
});
System.register("chunks:///_virtual/Weight.ts", ["cc"], function (_0x4b6d07) {
  var _0x54c90e;
  return {
    setters: [function (_0x2c0ad0) {
      _0x54c90e = _0x2c0ad0.cclegacy;
    }],
    execute: function () {
      _0x54c90e._RF.push({}, "fafdbNqHh1Fl6CsEClMS3MS", "Weight", undefined);
      _0x4b6d07("Weight", function () {
        function _0xb9e87a() {
          this.items = [];
          this.weights = [];
          this.totalWeight = 0;
        }
        var _0x2bcec1 = _0xb9e87a.prototype;
        _0x2bcec1.add = function (_0x280f9b, _0x1fd841) {
          var _0x129950 = this.items.indexOf(_0x280f9b);
          -1 === _0x129950 ? (_0x1fd841 = Math.max(_0x1fd841, 0), this.items.push(_0x280f9b), this.weights.push(_0x1fd841)) : (_0x1fd841 = Math.max(-this.weights[_0x129950], _0x1fd841), this.weights[_0x129950] += _0x1fd841);
          this.totalWeight += _0x1fd841;
        };
        _0x2bcec1.set = function (_0x322195, _0x3892bc) {
          var _0x2a1e5c = this.items.indexOf(_0x322195);
          -1 === _0x2a1e5c ? this.add(_0x322195, _0x3892bc) : (_0x3892bc = Math.max(-this.weights[_0x2a1e5c], _0x3892bc), this.totalWeight += _0x3892bc, this.weights[_0x2a1e5c] = _0x3892bc);
        };
        _0x2bcec1.get = function () {
          for (var _0x4eb869 = Math.random() * this.totalWeight, _0x10b695 = 0, _0x31f86d = this.items.length; _0x10b695 < _0x31f86d; ++_0x10b695) {
            if (_0x4eb869 < this.weights[_0x10b695]) {
              return this.items[_0x10b695];
            }
            _0x4eb869 -= this.weights[_0x10b695];
          }
          return null;
        };
        return _0xb9e87a;
      }());
      _0x54c90e._RF.pop();
    }
  };
});
System.register("chunks:///_virtual/yx-card-page-layout.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./index.ts", "./yx-collection-view.ts"], function (_0x20afce) {
  var _0x2df23b;
  var _0x395119;
  var _0x667c12;
  var _0x4876e0;
  var _0x4f58eb;
  var _0x2782ef;
  var _0x5ab469;
  return {
    setters: [function (_0x162f05) {
      _0x2df23b = _0x162f05.inheritsLoose;
    }, function (_0xf91102) {
      _0x395119 = _0xf91102.cclegacy;
      _0x667c12 = _0xf91102._decorator;
      _0x4876e0 = _0xf91102.math;
    }, null, function (_0x39b0cd) {
      _0x4f58eb = _0x39b0cd.YXIndexPath;
      _0x2782ef = _0x39b0cd.YXLayoutAttributes;
      _0x5ab469 = _0x39b0cd.YXLayout;
    }],
    execute: function () {
      var _0x554526;
      _0x395119._RF.push({}, "51c36a+NyxNtLM46tNAiT8t", "yx-card-page-layout", undefined);
      var _0x4a25f1 = _0x667c12.ccclass;
      _0x667c12.property;
      _0x20afce("YXCardPageLayout", _0x4a25f1("yx_card_page_layout")(_0x554526 = function (_0x224b4e) {
        {
          function _0x300dcb(_0x2de8b3) {
            var _0x5d5af6;
            (_0x5d5af6 = _0x224b4e.call(this) || this).itemSize = null;
            _0x5d5af6.maxVisibleItemCount = 4;
            _0x5d5af6.eachScale = 0.1;
            _0x5d5af6.eachSpacing = 50;
            _0x5d5af6.contentOffset = null;
            _0x5d5af6.itemSize = _0x2de8b3;
            return _0x5d5af6;
          }
          _0x2df23b(_0x300dcb, _0x224b4e);
          var _0x5942dc = _0x300dcb.prototype;
          _0x5942dc.prepare = function (_0x500567) {
            _0x500567.scrollView.horizontal = true;
            _0x500567.scrollView.vertical = false;
            var _0x36d847 = [];
            var _0x4892a2 = _0x500567.numberOfItems instanceof Function ? _0x500567.numberOfItems(0, _0x500567) : _0x500567.numberOfItems;
            _0x4892a2 = Math.min(_0x4892a2, this.maxVisibleItemCount);
            for (var _0x135abd = 0; _0x135abd < _0x4892a2; _0x135abd++) {
              var _0x44c7f9 = new _0x2782ef();
              _0x44c7f9.indexPath = new _0x4f58eb(0, _0x135abd);
              _0x44c7f9.frame = new _0x4876e0.Rect();
              _0x44c7f9.frame.size = this.itemSize;
              _0x36d847.push(_0x44c7f9);
            }
            this.attributes = _0x36d847;
            var _0x27fa6f = _0x500567.scrollView.view.contentSize.clone();
            _0x27fa6f.width = 3 * _0x27fa6f.width;
            this.contentSize = _0x27fa6f;
          };
          _0x5942dc.layoutAttributesForElementsInRect = function (_0x4bbbac, _0x23ceae) {
            var _0x478344 = _0x23ceae.scrollView.getScrollOffset();
            _0x478344.x = -_0x478344.x;
            for (var _0x547988 = (_0x478344.x - _0x23ceae.scrollView.view.width) / _0x23ceae.scrollView.view.width, _0x4f48c0 = 0; _0x4f48c0 < this.attributes.length; _0x4f48c0++) {
              {
                var _0x3d7b15 = this.attributes[_0x4f48c0];
                _0x3d7b15.zIndex = -_0x4f48c0;
                var _0x4fc6cf = _0x4f48c0 * this.eachSpacing;
                _0x3d7b15.frame.x = _0x478344.x + 0.5 * (_0x23ceae.scrollView.view.width - _0x3d7b15.frame.width);
                _0x3d7b15.frame.y = _0x478344.y + 0.5 * (_0x23ceae.scrollView.view.height - _0x3d7b15.frame.height) + _0x4fc6cf;
                _0x3d7b15.frame.y = _0x3d7b15.frame.y - this.eachSpacing * Math.abs(_0x547988);
                _0x3d7b15.frame.y = Math.max(_0x3d7b15.frame.y, _0x478344.y + 0.5 * (_0x23ceae.scrollView.view.height - _0x3d7b15.frame.height));
                0 == _0x4f48c0 && (_0x3d7b15.frame.x = _0x3d7b15.frame.x - _0x547988 * _0x23ceae.scrollView.view.width);
                var _0x6f6d45 = 1 - _0x4f48c0 * this.eachScale;
                _0x6f6d45 += this.eachScale * Math.abs(_0x547988);
                _0x6f6d45 = Math.min(_0x6f6d45, 1);
                _0x3d7b15.scale = new _0x4876e0.Vec3(_0x6f6d45, _0x6f6d45, 1);
                this.contentOffset && (_0x3d7b15.offset = this.contentOffset);
              }
            }
            return this.attributes;
          };
          _0x5942dc.initOffset = function (_0x40f469) {
            {
              var _0x3cb11e = new _0x4876e0.Vec2();
              _0x3cb11e.x = _0x40f469.scrollView.view.width;
              _0x3cb11e.y = 0;
              _0x40f469.scrollView.scrollToOffset(_0x3cb11e);
            }
          };
          _0x5942dc.targetOffset = function (_0x2369d1, _0x4c22fe, _0x2052cd) {
            var _0x14c5d5 = _0x2369d1.scrollView.getScrollOffset();
            _0x14c5d5.x = -_0x14c5d5.x;
            var _0x3b2e17 = Math.round(_0x14c5d5.x / _0x2369d1.scrollView.view.width);
            var _0x1f2469 = _0x4c22fe.x / _0x2369d1.scrollView.view.width;
            _0x2052cd && Math.abs(_0x1f2469) >= 0.2 && (_0x3b2e17 = Math.round(_0x2052cd.x / _0x2369d1.scrollView.view.width) + (_0x1f2469 > 0 ? -1 : 1));
            _0x14c5d5.x = _0x3b2e17 * _0x2369d1.scrollView.view.width;
            return {
              offset: _0x14c5d5,
              time: 0.5
            };
          };
          _0x5942dc.shouldUpdateAttributesForBoundsChange = function () {
            return true;
          };
          _0x5942dc.shouldUpdateAttributesZIndex = function () {
            return true;
          };
          return _0x300dcb;
        }
      }(_0x5ab469)) || _0x554526);
      _0x395119._RF.pop();
    }
  };
});
System.register("chunks:///_virtual/yx-carousel-layout.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./index.ts", "./yx-collection-view.ts"], function (_0xbca33c) {
  var _0x1fb6b5;
  var _0x597ac0;
  var _0x377fcf;
  var _0x5121e7;
  var _0x1ab998;
  var _0x2e5027;
  var _0x52bac1;
  var _0x56801f;
  return {
    setters: [function (_0x3506bc) {
      _0x1fb6b5 = _0x3506bc.inheritsLoose;
    }, function (_0x59bcab) {
      _0x597ac0 = _0x59bcab.cclegacy;
      _0x377fcf = _0x59bcab._decorator;
      _0x5121e7 = _0x59bcab.math;
      _0x1ab998 = _0x59bcab.misc;
    }, null, function (_0x31ec55) {
      _0x2e5027 = _0x31ec55.YXIndexPath;
      _0x52bac1 = _0x31ec55.YXLayoutAttributes;
      _0x56801f = _0x31ec55.YXLayout;
    }],
    execute: function () {
      _0x597ac0._RF.push({}, "d8470S9Op1E+7I5HJuYi3P/", "yx-carousel-layout", undefined);
      _0x377fcf.ccclass;
      _0x377fcf.property;
      var _0x2c955c = new _0x5121e7.Vec2();
      _0xbca33c("YXCarouselLayout", function (_0xfda24e) {
        function _0xf16685() {
          for (var _0x2374f8, _0x25fafc = arguments.length, _0x55fbd4 = new Array(_0x25fafc), _0x378200 = 0; _0x378200 < _0x25fafc; _0x378200++) {
            _0x55fbd4[_0x378200] = arguments[_0x378200];
          }
          (_0x2374f8 = _0xfda24e.call.apply(_0xfda24e, [this].concat(_0x55fbd4)) || this).itemSize = null;
          _0x2374f8.loop = true;
          _0x2374f8.radius = 300;
          _0x2374f8.minScale = 0.9;
          _0x2374f8.minAlpha = null;
          _0x2374f8.angleX = 20;
          return _0x2374f8;
        }
        _0x1fb6b5(_0xf16685, _0xfda24e);
        var _0x75d53e = _0xf16685.prototype;
        _0x75d53e.prepare = function (_0x1fe8b5) {
          _0x1fe8b5.scrollView.horizontal = true;
          _0x1fe8b5.scrollView.vertical = false;
          for (var _0x4362a5 = [], _0x1b723b = _0x1fe8b5.scrollView.view.contentSize.clone(), _0x1c2882 = _0x1fe8b5.numberOfItems instanceof Function ? _0x1fe8b5.numberOfItems(0, _0x1fe8b5) : _0x1fe8b5.numberOfItems, _0xb61c3a = 0; _0xb61c3a < _0x1c2882; _0xb61c3a++) {
            var _0x1c0ee8 = new _0x2e5027(0, _0xb61c3a);
            var _0x3fc4ae = new _0x52bac1();
            _0x3fc4ae.indexPath = _0x1c0ee8;
            _0x3fc4ae.frame = new _0x5121e7.Rect();
            _0x3fc4ae.frame.size = this.itemSize;
            _0x4362a5.push(_0x3fc4ae);
          }
          this.attributes = _0x4362a5;
          _0x1b723b.width = _0x1b723b.width * _0x1c2882 * (this.loop ? 3 : 1);
          this.contentSize = _0x1b723b;
        };
        _0x75d53e.layoutAttributesForElementsInRect = function (_0x5c6153, _0x9d3e77) {
          for (var _0xaee9c8 = _0x5c6153.origin, _0x415578 = _0x9d3e77.scrollView.view.contentSize.clone(), _0x1bd30c = new _0x5121e7.Vec2(0.5 * _0x415578.width, 0.5 * _0x415578.height), _0x2c2ae8 = 360 / this.attributes.length, _0xaec96a = 0; _0xaec96a < this.attributes.length; _0xaec96a++) {
            var _0x311a0c = this.attributes[_0xaec96a];
            var _0x2692ce = 360 - _0x311a0c.indexPath.item * _0x2c2ae8;
            _0x2692ce += 90;
            _0x2692ce += 1 * _0xaee9c8.x / _0x415578.width * _0x2c2ae8;
            _0x2692ce %= 360;
            var _0x584057 = _0x1ab998.degreesToRadians(_0x2692ce);
            var _0x28e68c = _0x1bd30c.x + this.radius * Math.cos(_0x584057);
            var _0x1c1e9e = 0 + this.radius * Math.sin(_0x584057);
            var _0x4c05b8 = _0x1bd30c.y + _0x1c1e9e * Math.sin(_0x1ab998.degreesToRadians(this.angleX));
            _0x2c955c.x = _0xaee9c8.x + _0x28e68c;
            _0x2c955c.y = _0x4c05b8;
            _0x311a0c.frame.center = _0x2c955c;
            _0x311a0c.zIndex = _0x1c1e9e;
            var _0x1efb01 = Math.floor(10000 * Math.sin(_0x584057)) / 10000;
            if (this.minScale) {
              var _0x4a2766 = this.minScale + (1 - this.minScale) * _0x1efb01;
              _0x311a0c.scale = new _0x5121e7.Vec3(_0x4a2766, _0x4a2766, 1);
            }
            if (this.minAlpha) {
              var _0x162d89 = this.minAlpha + (1 - this.minAlpha) * _0x1efb01;
              _0x311a0c.opacity = 255 * _0x162d89;
            }
          }
          return this.attributes;
        };
        _0x75d53e.initOffset = function (_0x38ba16) {
          var _0x1e808e = (this.loop ? 1 : 0) * _0x38ba16.scrollView.view.width * this.attributes.length;
          _0x2c955c.x = _0x1e808e;
          _0x2c955c.y = 0;
          _0x38ba16.scrollView.scrollToOffset(_0x2c955c);
        };
        _0x75d53e.shouldUpdateAttributesZIndex = function () {
          return true;
        };
        _0x75d53e.shouldUpdateAttributesOpacity = function () {
          return true;
        };
        _0x75d53e.shouldUpdateAttributesForBoundsChange = function () {
          return true;
        };
        _0x75d53e.scrollTo = function (_0x397b0a, _0x42cad3) {
          var _0x232fe9 = (0 * this.attributes.length + _0x397b0a.item) * _0x42cad3.scrollView.view.width;
          var _0x4843a1 = (1 * this.attributes.length + _0x397b0a.item) * _0x42cad3.scrollView.view.width;
          var _0x9bda1b = (2 * this.attributes.length + _0x397b0a.item) * _0x42cad3.scrollView.view.width;
          var _0x52d227 = -_0x42cad3.scrollView.getScrollOffset().x;
          var _0x19095a = [{
            flag: 0,
            value: _0x232fe9
          }, {
            flag: 1,
            value: _0x4843a1
          }, {
            flag: 2,
            value: _0x9bda1b
          }].sort(function (_0x2b8c6d, _0x2f52a4) {
            return Math.abs(_0x52d227 - _0x2b8c6d.value) - Math.abs(_0x52d227 - _0x2f52a4.value);
          }).shift().flag;
          do {
            if (0 == _0x19095a) {
              _0x2c955c.x = _0x232fe9;
              break;
            }
            if (1 == _0x19095a) {
              _0x2c955c.x = _0x4843a1;
              break;
            }
            if (2 == _0x19095a) {
              _0x2c955c.x = _0x9bda1b;
              break;
            }
          } while (0);
          _0x2c955c.y = 0;
          return _0x2c955c;
        };
        _0x75d53e.onScrollEnded = function (_0x5d58ef) {
          if (this.loop) {
            var _0x4674f0 = _0x5d58ef.scrollView.getScrollOffset();
            _0x4674f0.x = -_0x4674f0.x;
            var _0x350bf5 = _0x5d58ef.scrollView.view.width * this.attributes.length;
            var _0x22c8dc = _0x4674f0.x % _0x350bf5 + _0x350bf5;
            _0x2c955c.x = _0x22c8dc;
            _0x2c955c.y = 0;
            _0x5d58ef.scrollView.scrollToOffset(_0x2c955c);
            _0x5d58ef.markForUpdateVisibleData(true);
          }
        };
        return _0xf16685;
      }(_0x56801f));
      _0x597ac0._RF.pop();
    }
  };
});
System.register("chunks:///_virtual/yx-collection-view.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], function (_0x20d393) {
  var _0x81ac4c;
  var _0x52f98b;
  var _0x3bb72d;
  var _0x3c8f85;
  var _0x356c5b;
  var _0x2ddcd1;
  var _0x329aa0;
  var _0x44a319;
  var _0x5ab577;
  var _0x255cb8;
  var _0x5cb239;
  var _0x4127d3;
  var _0x2833db;
  var _0x2fb60f;
  var _0xff2213;
  var _0x4f309a;
  var _0x241cf6;
  var _0x3ccfdb;
  var _0x891b58;
  var _0x1e2551;
  return {
    setters: [function (_0x16435e) {
      _0x81ac4c = _0x16435e.applyDecoratedDescriptor;
      _0x52f98b = _0x16435e.initializerDefineProperty;
      _0x3bb72d = _0x16435e.inheritsLoose;
      _0x3c8f85 = _0x16435e.createClass;
      _0x356c5b = _0x16435e.assertThisInitialized;
    }, function (_0x538c49) {
      _0x2ddcd1 = _0x538c49.cclegacy;
      _0x329aa0 = _0x538c49._decorator;
      _0x44a319 = _0x538c49.math;
      _0x5ab577 = _0x538c49.Enum;
      _0x255cb8 = _0x538c49.Prefab;
      _0x5cb239 = _0x538c49.ValueType;
      _0x4127d3 = _0x538c49.NodePool;
      _0x2833db = _0x538c49.NodeEventType;
      _0x2fb60f = _0x538c49.UITransform;
      _0xff2213 = _0x538c49.UIOpacity;
      _0x4f309a = _0x538c49.ScrollView;
      _0x241cf6 = _0x538c49.Node;
      _0x3ccfdb = _0x538c49.Mask;
      _0x891b58 = _0x538c49.Component;
      _0x1e2551 = _0x538c49.instantiate;
    }],
    execute: function () {
      var _0x2de883;
      var _0x50d36e;
      var _0x17966f;
      var _0x267825;
      var _0x17731a;
      var _0x3f8480;
      var _0x29b71a;
      var _0x5c60ab;
      var _0x2c3163;
      var _0x36d475;
      var _0x357cdd;
      var _0x505b0b;
      var _0x294fb5;
      var _0x29ac42;
      var _0x43a44e;
      var _0x4c8a92;
      var _0x33a78b;
      var _0x18f011;
      var _0x20da7d;
      var _0x27e43c;
      var _0x513f8c;
      var _0x2fb425;
      var _0xcff1ba;
      var _0x203a3b;
      var _0x105e25;
      var _0x5d9513;
      var _0x1135fd;
      var _0x563d28;
      var _0x2aa1cc;
      var _0x144a66;
      var _0xc281c5;
      var _0x13da75;
      var _0xf51fb7;
      var _0xd545fa;
      var _0xef32da;
      var _0x39c132;
      _0x2ddcd1._RF.push({}, "f2c14q0UedOp7pnWIKia8C+", "yx-collection-view", undefined);
      var _0x14823c = _0x329aa0.ccclass;
      var _0x4fae91 = _0x329aa0.property;
      var _0x520b16 = _0x329aa0.executionOrder;
      var _0x3be4e2 = _0x329aa0.disallowMultiple;
      var _0x40a38f = _0x329aa0.help;
      var _0x45ff85 = new _0x44a319.Vec3();
      var _0x18d86e = new _0x44a319.Rect();
      var _0x104de7 = new _0x44a319.Rect();
      var _0x413dca = function (_0x1396b8) {
        _0x1396b8[_0x1396b8.HORIZONTAL = 0] = "HORIZONTAL";
        _0x1396b8[_0x1396b8.VERTICAL = 1] = "VERTICAL";
        return _0x1396b8;
      }(_0x413dca || {});
      _0x5ab577(_0x413dca);
      var _0x3c7e1c = function (_0x374c9c) {
        _0x374c9c[_0x374c9c.RECYCLE = 0] = "RECYCLE";
        _0x374c9c[_0x374c9c.PRELOAD = 1] = "PRELOAD";
        return _0x374c9c;
      }(_0x3c7e1c || {});
      _0x5ab577(_0x3c7e1c);
      _0x2de883 = _0x14823c("_yx_editor_register_cell_info");
      _0x50d36e = _0x4fae91({
        type: _0x255cb8,
        tooltip: "cell 节点预制体，必须配置"
      });
      _0x17966f = _0x4fae91({
        tooltip: "节点重用标识符，必须配置"
      });
      _0x267825 = _0x4fae91({
        tooltip: "节点挂载的自定义组件\n如果需要监听 NodePool 的重用/回收事件，确保你的自定义组件已经实现了 YXCollectionViewCell 接口并配置此属性为你的自定义组件名\n如果不需要，可以忽略此配置"
      });
      var _0x17a050 = _0x2de883((_0x29b71a = _0x81ac4c((_0x3f8480 = function () {
        _0x52f98b(this, "prefab", _0x29b71a, this);
        _0x52f98b(this, "identifier", _0x5c60ab, this);
        _0x52f98b(this, "comp", _0x2c3163, this);
      }).prototype, "prefab", [_0x50d36e], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x5c60ab = _0x81ac4c(_0x3f8480.prototype, "identifier", [_0x17966f], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return "cell";
        }
      }), _0x2c3163 = _0x81ac4c(_0x3f8480.prototype, "comp", [_0x267825], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return "";
        }
      }), _0x17731a = _0x3f8480)) || _0x17731a;
      _0x20d393("YXIndexPath", _0x14823c("YXIndexPath")(((_0x357cdd = function (_0x18c11d) {
        function _0xfe90ae(_0x3a10d7, _0x4220cb) {
          var _0x42f407;
          (_0x42f407 = _0x18c11d.call(this) || this).section = 0;
          _0x42f407.item = 0;
          _0x42f407.section = _0x3a10d7;
          _0x42f407.item = _0x4220cb;
          return _0x42f407;
        }
        _0x3bb72d(_0xfe90ae, _0x18c11d);
        var _0x4e8749 = _0xfe90ae.prototype;
        _0x4e8749.clone = function () {
          return new _0xfe90ae(this.section, this.item);
        };
        _0x4e8749.equals = function (_0x39529e) {
          return this.section == _0x39529e.section && this.item == _0x39529e.item;
        };
        _0x4e8749.set = function (_0x17871f) {
          {
            this.section = _0x17871f.section;
            this.item = _0x17871f.item;
          }
        };
        _0x4e8749.toString = function () {
          {
            return this.section + " - " + this.item;
          }
        };
        _0x3c8f85(_0xfe90ae, [{
          key: "row",
          get: function () {
            return this.item;
          },
          set: function (_0x802953) {
            this.item = _0x802953;
          }
        }]);
        return _0xfe90ae;
      }(_0x5cb239)).ZERO = new _0x357cdd(0, 0), _0x36d475 = _0x357cdd)) || _0x36d475);
      _0x20d393("YXEdgeInsets", _0x14823c("YXEdgeInsets")(((_0x294fb5 = function (_0x1aec21) {
        function _0x2b9c15(_0x10c9e3, _0x398b99, _0x33bceb, _0x435946) {
          {
            var _0x46a502;
            (_0x46a502 = _0x1aec21.call(this) || this).top = undefined;
            _0x46a502.left = undefined;
            _0x46a502.bottom = undefined;
            _0x46a502.right = undefined;
            _0x46a502.top = _0x10c9e3;
            _0x46a502.left = _0x398b99;
            _0x46a502.bottom = _0x33bceb;
            _0x46a502.right = _0x435946;
            return _0x46a502;
          }
        }
        _0x3bb72d(_0x2b9c15, _0x1aec21);
        var _0x5bc660 = _0x2b9c15.prototype;
        _0x5bc660.clone = function () {
          return new _0x2b9c15(this.top, this.left, this.bottom, this.right);
        };
        _0x5bc660.equals = function (_0x4991cc) {
          return this.top == _0x4991cc.top && this.left == _0x4991cc.left && this.bottom == _0x4991cc.bottom && this.right == _0x4991cc.right;
        };
        _0x5bc660.set = function (_0x3c3183) {
          this.top = _0x3c3183.top;
          this.left = _0x3c3183.left;
          this.bottom = _0x3c3183.bottom;
          this.right = _0x3c3183.right;
        };
        _0x5bc660.toString = function () {
          return "[ " + this.top + ", " + this.left + ", " + this.bottom + ", " + this.right + " ]";
        };
        return _0x2b9c15;
      }(_0x5cb239)).ZERO = new _0x294fb5(0, 0, 0, 0), _0x505b0b = _0x294fb5)) || _0x505b0b);
      var _0x3bbec1 = function (_0x302abb) {
        function _0x360965() {
          for (var _0x1c4bdf, _0x2274da = arguments.length, _0x3bde9c = new Array(_0x2274da), _0x20799a = 0; _0x20799a < _0x2274da; _0x20799a++) {
            _0x3bde9c[_0x20799a] = arguments[_0x20799a];
          }
          (_0x1c4bdf = _0x302abb.call.apply(_0x302abb, [this].concat(_0x3bde9c)) || this).identifier = "cell";
          _0x1c4bdf.attributes = undefined;
          return _0x1c4bdf;
        }
        _0x3bb72d(_0x360965, _0x302abb);
        return _0x360965;
      }(_0x891b58);
      var _0x4370f3 = function (_0x5cfee0) {
        function _0x20b9f5() {
          for (var _0x4ec9f5, _0x460161 = arguments.length, _0x3a2f84 = new Array(_0x460161), _0x208290 = 0; _0x208290 < _0x460161; _0x208290++) {
            _0x3a2f84[_0x208290] = arguments[_0x208290];
          }
          (_0x4ec9f5 = _0x5cfee0.call.apply(_0x5cfee0, [this].concat(_0x3a2f84)) || this)._yxOnStartInertiaScroll = undefined;
          return _0x4ec9f5;
        }
        _0x3bb72d(_0x20b9f5, _0x5cfee0);
        var _0xee18c5 = _0x20b9f5.prototype;
        _0xee18c5._onMouseWheel = function (_0x27d1a8, _0x40ebf8) {};
        _0xee18c5._startInertiaScroll = function (_0xc7d772) {
          _0x5cfee0.prototype._startInertiaScroll.call(this, _0xc7d772);
          this._yxOnStartInertiaScroll && this._yxOnStartInertiaScroll(_0xc7d772);
        };
        _0xee18c5._onTouchBegan = function (_0x46f44c, _0x38bb6a) {
          if (0 != this.node.getComponent(_0x457bbe).scrollEnabled) {
            var _0x2e03f0 = [_0x46f44c.target];
            _0x38bb6a && (_0x2e03f0 = _0x2e03f0.concat(_0x38bb6a));
            for (var _0x8d55f9 = 0; _0x8d55f9 < _0x2e03f0.length; _0x8d55f9++) {
              var _0x56b9f4 = _0x2e03f0[_0x8d55f9];
              _0x56b9f4._yx_scroll_target = null;
              var _0x26d4fd = _0x56b9f4.getComponent(_0x457bbe);
              if (_0x26d4fd) {
                var _0x2fd218 = _0x26d4fd.scrollView.getScrollOffset();
                _0x2fd218.x = -_0x2fd218.x;
                _0x26d4fd._scroll_offset_on_touch_start = _0x2fd218;
              }
            }
            _0x5cfee0.prototype._onTouchBegan.call(this, _0x46f44c, _0x38bb6a);
          }
        };
        _0xee18c5._onTouchMoved = function (_0x2ce32e, _0x103492) {
          if (0 != this.node.getComponent(_0x457bbe).scrollEnabled) {
            var _0xd82c5b = this._yxGetScrollTarget(_0x2ce32e, _0x103492);
            this.node === _0xd82c5b && _0x5cfee0.prototype._onTouchMoved.call(this, _0x2ce32e, _0x103492);
          }
        };
        _0xee18c5._onTouchCancelled = function (_0x5213fa, _0xe57af4) {
          _0x5cfee0.prototype._onTouchCancelled.call(this, _0x5213fa, _0xe57af4);
        };
        _0xee18c5._onTouchEnded = function (_0x23e16c, _0x31284b) {
          {
            _0x5cfee0.prototype._onTouchEnded.call(this, _0x23e16c, _0x31284b);
          }
        };
        _0xee18c5._hasNestedViewGroup = function (_0x12503f, _0x350e8e) {
          return false;
        };
        _0xee18c5._stopPropagationIfTargetIsMe = function (_0x28572a) {
          this._touchMoved ? _0x28572a.propagationStopped = true : _0x5cfee0.prototype._stopPropagationIfTargetIsMe.call(this, _0x28572a);
        };
        _0xee18c5._yxGetScrollTarget = function (_0x4007f1, _0x27db6d) {
          var _0xb02e64 = _0x4007f1.target._yx_scroll_target;
          if (_0xb02e64) {
            return _0xb02e64;
          }
          var _0x3b938d = [_0x4007f1.target];
          if (_0x27db6d && (_0x3b938d = _0x3b938d.concat(_0x27db6d)), 1 == _0x3b938d.length) {
            return _0x3b938d[0];
          }
          var _0x2ed7f0 = _0x4007f1.touch;
          var _0x4f394c = _0x2ed7f0.getLocation().subtract(_0x2ed7f0.getStartLocation());
          var _0x3851db = Math.abs(_0x4f394c.x);
          var _0x14859c = Math.abs(_0x4f394c.y);
          if (Math.abs(_0x3851db - _0x14859c) < 5) {
            return null;
          }
          for (var _0x2939f8 = null, _0xfd2d85 = 0; _0xfd2d85 < _0x3b938d.length; _0xfd2d85++) {
            {
              var _0x3edb83 = _0x3b938d[_0xfd2d85];
              var _0x3a81ec = _0x3edb83.getComponent(_0x20b9f5);
              if (_0x3a81ec) {
                var _0x27f3f3 = _0x3edb83.getComponent(_0x457bbe);
                if (_0x27f3f3 && 0 == _0x27f3f3.scrollEnabled) {
                  continue;
                }
                if (null == _0x2939f8 && (_0x2939f8 = _0x3edb83), _0x3a81ec.horizontal && _0x3a81ec.vertical) {
                  continue;
                }
                if (!_0x3a81ec.horizontal && !_0x3a81ec.vertical) {
                  continue;
                }
                if (_0x3a81ec.horizontal && _0x3851db > _0x14859c) {
                  _0x2939f8 = _0x3edb83;
                  break;
                }
                if (_0x3a81ec.vertical && _0x14859c > _0x3851db) {
                  _0x2939f8 = _0x3edb83;
                  break;
                }
              }
            }
          }
          if (_0x2939f8) {
            for (var _0x36f019 = 0; _0x36f019 < _0x3b938d.length; _0x36f019++) {
              _0x3b938d[_0x36f019]._yx_scroll_target = _0x2939f8;
            }
          }
          return _0x2939f8;
        };
        return _0x20b9f5;
      }(_0x4f309a);
      _0x20d393("YXLayoutAttributes", function () {
        this.indexPath = null;
        this.frame = null;
        this.zIndex = 0;
        this.opacity = null;
        this.scale = null;
        this.offset = null;
        this.eulerAngles = null;
      });
      _0x20d393("YXLayout", function () {
        {
          function _0x418477() {
            this.contentSize = _0x44a319.Size.ZERO;
            this.attributes = [];
          }
          var _0x3d8d93 = _0x418477.prototype;
          _0x3d8d93.initOffset = function (_0x48b703) {};
          _0x3d8d93.targetOffset = function (_0x3f0065, _0x439ecb, _0x3237c0) {
            return null;
          };
          _0x3d8d93.onScrollEnded = function (_0x286b24) {};
          _0x3d8d93.layoutAttributesForElementsInRect = function (_0x59e0ef, _0x3a678c) {
            {
              for (var _0x58d661 = [], _0x31ac2a = 0; _0x31ac2a < this.attributes.length; _0x31ac2a++) {
                var _0x928621 = this.attributes[_0x31ac2a];
                1 == _0x59e0ef.intersects(_0x928621.frame) && _0x58d661.push(_0x928621);
              }
              return _0x58d661;
            }
          };
          _0x3d8d93.layoutAttributesForItemAtIndexPath = function (_0xfaaa14, _0x88350e) {
            return this.attributes.find(function (_0x1c2ed3) {
              return _0x1c2ed3.indexPath.equals(_0xfaaa14);
            });
          };
          _0x3d8d93.scrollTo = function (_0x507274, _0x327ea4) {
            return null;
          };
          _0x3d8d93.shouldUpdateAttributesZIndex = function () {
            return false;
          };
          _0x3d8d93.shouldUpdateAttributesOpacity = function () {
            {
              return false;
            }
          };
          _0x3d8d93.shouldUpdateAttributesForBoundsChange = function () {
            return false;
          };
          return _0x418477;
        }
      }());
      var _0x457bbe = _0x20d393("YXCollectionView", (_0x29ac42 = _0x14823c("YXCollectionView"), _0x43a44e = _0x3be4e2(true), _0x4c8a92 = _0x520b16(-1), _0x33a78b = _0x40a38f("https://gitee.com/568071718/creator-collection-view-doc"), _0x18f011 = _0x4fae91({
        tooltip: "自动给挂载节点添加 mask 组件",
        visible: true
      }), _0x20da7d = _0x4fae91({
        tooltip: "允许手势滚动"
      }), _0x27e43c = _0x4fae91({
        type: _0x413dca,
        tooltip: "列表滚动方向"
      }), _0x513f8c = _0x4fae91({
        type: _0x3c7e1c,
        tooltip: "列表单元节点加载模式 (详细区别查看枚举注释)\nRECYCLE: 根据列表显示范围加载需要的节点，同类型的节点会进行复用\nPRELOAD: 会实例化所有节点，并非真正的虚拟列表，仅仅是把显示范围外的节点透明了，如果列表数据量很大仍然会卡"
      }), _0x2fb425 = _0x4fae91({
        tooltip: "预加载模式下每帧加载多少个节点",
        visible: function () {
          return this.mode == _0x3c7e1c.PRELOAD;
        }
      }), _0xcff1ba = _0x4fae91({
        tooltip: "每多少帧刷新一次可见节点，1 表示每帧都刷"
      }), _0x203a3b = _0x4fae91({
        tooltip: "滚动过程中，每多少帧回收一次不可见节点，1表示每帧都回收，0表示不在滚动过程中回收不可见节点"
      }), _0x105e25 = _0x4fae91({
        type: [_0x17a050],
        visible: true,
        displayName: "Register Cells",
        tooltip: "配置此列表内需要用到的 cell 节点类型"
      }), _0x29ac42(_0x5d9513 = _0x43a44e(_0x5d9513 = _0x4c8a92(_0x5d9513 = _0x33a78b(((_0x39c132 = function (_0x284ae9) {
        function _0x2f9d84() {
          for (var _0x22bf70, _0x1b5a38 = arguments.length, _0xb50224 = new Array(_0x1b5a38), _0x120dfd = 0; _0x120dfd < _0x1b5a38; _0x120dfd++) {
            _0xb50224[_0x120dfd] = arguments[_0x120dfd];
          }
          _0x22bf70 = _0x284ae9.call.apply(_0x284ae9, [this].concat(_0xb50224)) || this;
          _0x52f98b(_0x22bf70, "mask", _0x563d28, _0x356c5b(_0x22bf70));
          _0x52f98b(_0x22bf70, "scrollEnabled", _0x2aa1cc, _0x356c5b(_0x22bf70));
          _0x52f98b(_0x22bf70, "scrollDirection", _0x144a66, _0x356c5b(_0x22bf70));
          _0x52f98b(_0x22bf70, "mode", _0xc281c5, _0x356c5b(_0x22bf70));
          _0x52f98b(_0x22bf70, "preloadNodesLimitPerFrame", _0x13da75, _0x356c5b(_0x22bf70));
          _0x22bf70.preloadProgress = null;
          _0x52f98b(_0x22bf70, "frameInterval", _0xf51fb7, _0x356c5b(_0x22bf70));
          _0x52f98b(_0x22bf70, "recycleInterval", _0xd545fa, _0x356c5b(_0x22bf70));
          _0x52f98b(_0x22bf70, "registerCellForEditor", _0xef32da, _0x356c5b(_0x22bf70));
          _0x22bf70.pools = new Map();
          _0x22bf70.makers = new Map();
          _0x22bf70.numberOfSections = 1;
          _0x22bf70.numberOfItems = 0;
          _0x22bf70.cellForItemAt = function (_0x152c99, _0x33accf) {
            return _0x33accf.dequeueReusableCell("cell");
          };
          _0x22bf70.onCellDisplay = null;
          _0x22bf70.onCellEndDisplay = null;
          _0x22bf70.onTouchItemAt = null;
          _0x22bf70.layout = null;
          _0x22bf70.visibleNodesMap = new Map();
          _0x22bf70.preloadNodesMap = new Map();
          _0x22bf70._late_reload_data = false;
          _0x22bf70.reloadDataCounter = 0;
          _0x22bf70._frameIdx = 0;
          _0x22bf70._late_update_visible_data = false;
          _0x22bf70._late_recycle_invisible_node = false;
          _0x22bf70.preloadIdx = null;
          _0x22bf70._scroll_offset_on_touch_start = null;
          return _0x22bf70;
        }
        _0x3bb72d(_0x2f9d84, _0x284ae9);
        var _0x9b6967 = _0x2f9d84.prototype;
        _0x9b6967.register = function (_0x505d70, _0x5a01b4, _0x4ac2da) {
          undefined === _0x4ac2da && (_0x4ac2da = null);
          var _0x4c37be = new _0x4127d3(_0x4ac2da);
          this.pools.set(_0x505d70, _0x4c37be);
          this.makers.set(_0x505d70, _0x5a01b4);
        };
        _0x9b6967.dequeueReusableCell = function (_0xe94bbb) {
          var _0x40d0f9 = this.pools.get(_0xe94bbb);
          if (null == _0x40d0f9) {
            throw new Error("YXCollectionView: 未注册标识符为 `" + _0xe94bbb + "` 的 cell，请先调用 YXCollectionView 的 register() 方法注册 cell 节点");
          }
          var _0x5347ea = null;
          (null == _0x5347ea && (_0x5347ea = _0x40d0f9.get()), null == _0x5347ea) && (((_0x5347ea = this.makers.get(_0xe94bbb)()).getComponent(_0x3bbec1) || _0x5347ea.addComponent(_0x3bbec1)).identifier = _0xe94bbb, _0x5347ea.on(_0x2833db.TOUCH_END, this.onTouchItem, this));
          return _0x5347ea;
        };
        _0x9b6967.onTouchItem = function (_0x77a3ee) {
          if (this.onTouchItemAt) {
            var _0x505286 = _0x77a3ee.target.getComponent(_0x3bbec1);
            this.onTouchItemAt(_0x505286.attributes.indexPath, this);
          }
        };
        _0x9b6967.getVisibleNode = function (_0x344088) {
          return this.visibleNodesMap.get(_0x344088.toString());
        };
        _0x9b6967.getVisibleCell = function (_0x2c23fd) {
          var _0x45e0e2 = this.getVisibleNode(_0x2c23fd);
          return null == _0x45e0e2 ? null : _0x45e0e2.getComponent(_0x3bbec1);
        };
        _0x9b6967.getAllCells = function () {
          return this.visibleNodesMap;
        };
        _0x9b6967.getCellComp = function (_0x365b05) {
          return null == _0x365b05 ? null : _0x365b05.getComponent(_0x3bbec1);
        };
        _0x9b6967.reloadData = function () {
          {
            this.node.activeInHierarchy && this.node.parent ? this._reloadData() : this._late_reload_data = true;
          }
        };
        _0x9b6967.update_reloadDataIfNeeds = function (_0x2d1879) {
          0 != this._late_reload_data && this._reloadData();
        };
        _0x9b6967._reloadData = function () {
          {
            var _0x247ed6 = this;
            if (this._late_reload_data = false, null == this.layout) {
              throw new Error("YXCollectionView: 参数错误，请正确配置 layout 以确定布局方案");
            }
            this.scrollView.stopAutoScroll();
            this.pools.forEach(function (_0x4a77fc) {
              _0x4a77fc.clear();
            });
            this.mode == _0x3c7e1c.RECYCLE && (this.visibleNodesMap.forEach(function (_0x124519, _0x3a7ac0) {
              var _0x4ed253 = _0x124519.getComponent(_0x3bbec1);
              _0x247ed6.pools.get(_0x4ed253.identifier).put(_0x124519);
              _0x247ed6.visibleNodesMap.delete(_0x3a7ac0);
              _0x247ed6.onCellEndDisplay && _0x247ed6.onCellEndDisplay(_0x4ed253.node, _0x4ed253.attributes.indexPath, _0x247ed6);
            }), this.visibleNodesMap.clear());
            this.mode == _0x3c7e1c.PRELOAD && (this.visibleNodesMap.forEach(function (_0x2e51c3, _0x368b8c) {
              _0x2e51c3 && (_0x2e51c3.removeFromParent(), _0x2e51c3.destroy());
            }), this.visibleNodesMap.clear(), this.preloadNodesMap.forEach(function (_0x987971, _0x266f05) {
              _0x987971 && (_0x987971.removeFromParent(), _0x987971.destroy());
            }), this.preloadNodesMap.clear(), this.preloadIdx = 0);
            var _0x3c75e1 = this.scrollView.getScrollOffset();
            if (_0x3c75e1.x = -_0x3c75e1.x, this.layout.prepare(this), (this.scrollView.content.getComponent(_0x2fb60f) || this.scrollView.content.addComponent(_0x2fb60f)).contentSize = this.layout.contentSize, this.reloadDataCounter <= 0) {
              this.layout.initOffset(this);
            } else {
              var _0x595d95 = this.scrollView.getMaxScrollOffset();
              _0x44a319.Vec2.min(_0x3c75e1, _0x3c75e1, _0x595d95);
              this.scrollView.scrollToOffset(_0x3c75e1);
            }
            this.markForUpdateVisibleData(true);
            this.reloadDataCounter++;
          }
        };
        _0x9b6967.reloadVisibleCells = function (_0x154afa) {
          undefined === _0x154afa && (_0x154afa = null);
          null == _0x154afa && (_0x154afa = this.visibleRect);
          var _0x170528 = this.layout.layoutAttributesForElementsInRect(_0x154afa, this);
          var _0x5095ac = this.layout.shouldUpdateAttributesZIndex();
          _0x5095ac && (null != _0x170528 && _0x170528 != this.layout.attributes || (_0x170528 = this.layout.attributes.slice()), _0x170528.sort(function (_0x16afa1, _0x2e5b45) {
            return _0x16afa1.zIndex - _0x2e5b45.zIndex;
          }));
          for (var _0x2e993f = 0; _0x2e993f < _0x170528.length; _0x2e993f++) {
            var _0x4e8211;
            var _0x6fb97f = _0x170528[_0x2e993f];
            var _0x1bf583 = null;
            if (null == _0x1bf583 && (_0x1bf583 = this.preloadNodesMap.get(_0x6fb97f.indexPath.toString())), null == _0x1bf583 && (_0x1bf583 = this.getVisibleNode(_0x6fb97f.indexPath)), null == _0x1bf583) {
              _0x1bf583 = null == (_0x4e8211 = this.cellForItemAt) ? undefined : _0x4e8211.call(this, _0x6fb97f.indexPath, this);
            }
            if (null == _0x1bf583) {
              throw new Error("需要实现 cellForItemAt 方法并确保正确的返回了节点");
            }
            var _0x723525 = this.restoreCellNodeIfNeeds(_0x1bf583);
            this.applyLayoutAttributes(_0x1bf583, _0x6fb97f);
            _0x5095ac && _0x1bf583.setSiblingIndex(-1);
            this.visibleNodesMap.set(_0x6fb97f.indexPath.toString(), _0x1bf583);
            1 == _0x723525 && this.onCellDisplay && this.onCellDisplay(_0x1bf583, _0x6fb97f.indexPath, this);
          }
          _0x170528 = [];
        };
        _0x9b6967.restoreCellNodeIfNeeds = function (_0x425257) {
          var _0x4091c1 = 0;
          _0x425257.parent != this.scrollView.content && (_0x425257.parent = this.scrollView.content, _0x4091c1 = 1);
          var _0x3e1e95 = _0x425257.getComponent(_0xff2213);
          this.mode == _0x3c7e1c.PRELOAD && null == _0x3e1e95 && (_0x3e1e95 = _0x425257.addComponent(_0xff2213));
          _0x3e1e95 && 255 !== _0x3e1e95.opacity && (_0x3e1e95.opacity = 255, _0x4091c1 = 1);
          return _0x4091c1;
        };
        _0x9b6967.recycleInvisibleNodes = function (_0x49ed3c) {
          var _0x334987 = this;
          undefined === _0x49ed3c && (_0x49ed3c = null);
          null == _0x49ed3c && (_0x49ed3c = this.visibleRect);
          var _0x483b4a = _0x104de7;
          var _0x425530 = this.scrollView.content.getComponent(_0x2fb60f).contentSize;
          this.visibleNodesMap.forEach(function (_0x557db3, _0x10b815) {
            var _0x435ef2 = _0x557db3.getComponent(_0x3bbec1);
            var _0xe103a5 = _0x557db3.getComponent(_0x2fb60f).getBoundingBox();
            _0x483b4a.size = _0xe103a5.size;
            _0x483b4a.x = 0.5 * (_0x425530.width - _0x483b4a.width) + _0x557db3.position.x;
            _0x483b4a.y = 0.5 * (_0x425530.height - _0x483b4a.height) - _0x557db3.position.y;
            0 == _0x49ed3c.intersects(_0x483b4a) && (_0x334987.mode == _0x3c7e1c.PRELOAD ? (_0x557db3.getComponent(_0xff2213).opacity = 0, _0x334987.preloadNodesMap.set(_0x435ef2.attributes.indexPath.toString(), _0x557db3)) : _0x334987.pools.get(_0x435ef2.identifier).put(_0x557db3), _0x334987.visibleNodesMap.delete(_0x10b815), _0x334987.onCellEndDisplay && _0x334987.onCellEndDisplay(_0x435ef2.node, _0x435ef2.attributes.indexPath, _0x334987));
          });
        };
        _0x9b6967.applyLayoutAttributes = function (_0x1739cb, _0x3309bd) {
          (_0x1739cb.getComponent(_0x3bbec1).attributes = _0x3309bd, (_0x1739cb.getComponent(_0x2fb60f) || _0x1739cb.addComponent(_0x2fb60f)).setContentSize(_0x3309bd.frame.size), _0x45ff85.x = 0.5 * -(this.layout.contentSize.width - _0x3309bd.frame.width) + _0x3309bd.frame.x, _0x45ff85.y = 0.5 * +(this.layout.contentSize.height - _0x3309bd.frame.height) - _0x3309bd.frame.y, _0x45ff85.z = _0x1739cb.position.z, _0x3309bd.offset && _0x44a319.Vec3.add(_0x45ff85, _0x45ff85, _0x3309bd.offset), _0x1739cb.position = _0x45ff85, _0x3309bd.scale && (_0x1739cb.scale = _0x3309bd.scale), _0x3309bd.eulerAngles && (_0x1739cb.eulerAngles = _0x3309bd.eulerAngles), this.layout.shouldUpdateAttributesOpacity() && _0x3309bd.opacity) && ((_0x1739cb.getComponent(_0xff2213) || _0x1739cb.addComponent(_0xff2213)).opacity = _0x3309bd.opacity);
        };
        _0x9b6967.scrollTo = function (_0x1a57bd, _0x554411, _0x14744c) {
          undefined === _0x554411 && (_0x554411 = 0);
          undefined === _0x14744c && (_0x14744c = true);
          var _0x486558;
          var _0x1a3a97 = this.layout.scrollTo(_0x1a57bd, this);
          null == _0x1a3a97 && (_0x1a3a97 = null == (_0x486558 = this.layout.layoutAttributesForItemAtIndexPath(_0x1a57bd, this)) ? undefined : _0x486558.frame.origin);
          _0x1a3a97 && (this.scrollView.stopAutoScroll(), this.scrollView.scrollToOffset(_0x1a3a97, _0x554411, _0x14744c), this.markForUpdateVisibleData());
        };
        _0x9b6967.onLoad = function () {
          for (var _0x1d15b0 = this, _0x1041f2 = function () {
              var _0x317398 = _0x1d15b0.registerCellForEditor[_0x5577af];
              _0x1d15b0.register(_0x317398.identifier, function () {
                return _0x1e2551(_0x317398.prefab);
              }, _0x317398.comp);
            }, _0x5577af = 0; _0x5577af < this.registerCellForEditor.length; _0x5577af++) {
            _0x1041f2();
          }
          this.node.on(_0x4f309a.EventType.SCROLL_BEGAN, this.onScrollBegan, this);
          this.node.on(_0x4f309a.EventType.SCROLLING, this.onScrolling, this);
          this.node.on(_0x4f309a.EventType.TOUCH_UP, this.onScrollTouchUp, this);
          this.node.on(_0x4f309a.EventType.SCROLL_ENDED, this.onScrollEnded, this);
          this._scrollView._yxOnStartInertiaScroll = this.onStartInertiaScroll.bind(this);
        };
        _0x9b6967.onDestroy = function () {
          this.node.off(_0x4f309a.EventType.SCROLL_BEGAN, this.onScrollBegan, this);
          this.node.off(_0x4f309a.EventType.SCROLLING, this.onScrolling, this);
          this.node.off(_0x4f309a.EventType.TOUCH_UP, this.onScrollTouchUp, this);
          this.node.off(_0x4f309a.EventType.SCROLL_ENDED, this.onScrollEnded, this);
          this.visibleNodesMap.forEach(function (_0x4cae2e, _0x55e21d) {
            _0x4cae2e && (_0x4cae2e.removeFromParent(), _0x4cae2e.destroy());
          });
          this.visibleNodesMap.clear();
          this.visibleNodesMap = null;
          this.preloadNodesMap.forEach(function (_0x57ab22, _0x17bb70) {
            _0x57ab22 && (_0x57ab22.removeFromParent(), _0x57ab22.destroy());
          });
          this.preloadNodesMap.clear();
          this.preloadNodesMap = null;
          this.pools.forEach(function (_0x1534c4) {
            _0x1534c4.clear();
          });
          this.pools.clear();
          this.pools = null;
          this.makers.clear();
          this.makers = null;
          this.layout && (this.layout.attributes = []);
        };
        _0x9b6967.update = function (_0x5d423d) {
          this._frameIdx++;
          this.update_reloadVisibleCellsIfNeeds(_0x5d423d);
          this.update_recycleInvisibleNodesIfNeeds(_0x5d423d);
          this.update_reloadDataIfNeeds(_0x5d423d);
          this.update_preloadNodeIfNeeds(_0x5d423d);
        };
        _0x9b6967.markForUpdateVisibleData = function (_0x22c140) {
          if (undefined === _0x22c140 && (_0x22c140 = false), _0x22c140) {
            var _0x344545 = this.visibleRect;
            this.reloadVisibleCells(_0x344545);
            return void this.recycleInvisibleNodes(_0x344545);
          }
          this._late_update_visible_data = true;
          this._late_recycle_invisible_node = true;
        };
        _0x9b6967.update_reloadVisibleCellsIfNeeds = function (_0x3a9c8a) {
          (this.frameInterval <= 1 || this._frameIdx % this.frameInterval == 0) && this._late_update_visible_data && (this._late_update_visible_data = false, this.reloadVisibleCells());
        };
        _0x9b6967.update_recycleInvisibleNodesIfNeeds = function (_0x1ee862) {
          this.recycleInterval >= 1 && this._frameIdx % this.recycleInterval == 0 && this._late_recycle_invisible_node && (this._late_recycle_invisible_node = false, this.recycleInvisibleNodes());
        };
        _0x9b6967.update_preloadNodeIfNeeds = function (_0xf807a3) {
          if (this.mode === _0x3c7e1c.PRELOAD && null != this.preloadIdx && !(this.preloadIdx >= this.layout.attributes.length || this.preloadNodesLimitPerFrame <= 0)) {
            for (var _0x56b7fa = 0, _0x490ab2 = false; !_0x490ab2 && _0x56b7fa < this.preloadNodesLimitPerFrame;) {
              var _0x408aa7 = this.layout.attributes[this.preloadIdx];
              var _0x39ca9a = _0x408aa7.indexPath.toString();
              var _0x4b5e65 = null;
              null == _0x4b5e65 && (_0x4b5e65 = this.getVisibleNode(_0x408aa7.indexPath));
              null == _0x4b5e65 && (_0x4b5e65 = this.preloadNodesMap.get(_0x39ca9a));
              null == _0x4b5e65 && (_0x4b5e65 = this.cellForItemAt(_0x408aa7.indexPath, this), this.restoreCellNodeIfNeeds(_0x4b5e65), this.applyLayoutAttributes(_0x4b5e65, _0x408aa7), this.visibleNodesMap.set(_0x39ca9a, _0x4b5e65), this._late_recycle_invisible_node = true);
              this.preloadNodesMap.set(_0x39ca9a, _0x4b5e65);
              this.preloadIdx++;
              _0x56b7fa++;
              this.preloadProgress && this.preloadProgress(this.preloadIdx, this.layout.attributes.length);
              _0x490ab2 = this.preloadIdx >= this.layout.attributes.length;
            }
          }
        };
        _0x9b6967.onScrollBegan = function () {};
        _0x9b6967.onScrolling = function () {
          this.markForUpdateVisibleData(this.layout.shouldUpdateAttributesForBoundsChange());
          this._late_recycle_invisible_node = true;
        };
        _0x9b6967.onScrollTouchUp = function () {
          {
            this.recycleInvisibleNodes();
          }
        };
        _0x9b6967.onScrollEnded = function () {
          this.markForUpdateVisibleData();
          this.recycleInvisibleNodes();
          this.layout.onScrollEnded(this);
        };
        _0x9b6967.onStartInertiaScroll = function (_0xeb4663) {
          var _0x3ef9c3 = this.layout.targetOffset(this, _0xeb4663, this._scroll_offset_on_touch_start);
          _0x3ef9c3 && (this.scrollView.scrollToOffset(_0x3ef9c3.offset, _0x3ef9c3.time), this.markForUpdateVisibleData());
        };
        _0x9b6967.getVisibleNodeIndexPath = function (_0x74c9ea) {
          {
            var _0x2b7ade = this.getCellComp(_0x74c9ea);
            return _0x2b7ade ? _0x2b7ade.attributes.indexPath : null;
          }
        };
        _0x3c8f85(_0x2f9d84, [{
          key: "scrollView",
          get: function () {
            var _0x6feb0f = this.node.getComponent(_0x4370f3);
            if (null == _0x6feb0f && (_0x6feb0f = this.node.addComponent(_0x4370f3)), null == _0x6feb0f.content) {
              var _0x57ee88 = new _0x241cf6("com.yx.scroll.content");
              _0x57ee88.parent = _0x6feb0f.node;
              _0x57ee88.layer = _0x57ee88.parent.layer;
              (_0x57ee88.getComponent(_0x2fb60f) || _0x57ee88.addComponent(_0x2fb60f)).contentSize = this.node.getComponent(_0x2fb60f).contentSize;
              _0x6feb0f.content = _0x57ee88;
            }
            if (this.mask) {
              var _0x1d8f03 = _0x6feb0f.node.getComponent(_0x3ccfdb);
              null == _0x1d8f03 && ((_0x1d8f03 = _0x6feb0f.node.addComponent(_0x3ccfdb)).type = _0x3ccfdb.Type.GRAPHICS_RECT);
            }
            return _0x6feb0f;
          }
        }, {
          key: "_scrollView",
          get: function () {
            return this.scrollView;
          }
        }, {
          key: "visibleRect",
          get: function () {
            var _0x16a855 = _0x18d86e;
            _0x16a855.origin = this.scrollView.getScrollOffset();
            _0x16a855.x = -_0x16a855.x;
            _0x16a855.size = this.scrollView.view.contentSize;
            return _0x16a855;
          }
        }, {
          key: "visibleNodes",
          get: function () {
            var _0x2c736e = [];
            this.visibleNodesMap.forEach(function (_0x211c4d) {
              {
                _0x2c736e.push(_0x211c4d);
              }
            });
            return _0x2c736e;
          }
        }, {
          key: "visibleCells",
          get: function () {
            var _0x5acc9b = [];
            this.visibleNodesMap.forEach(function (_0x22578b) {
              _0x5acc9b.push(_0x22578b.getComponent(_0x3bbec1));
            });
            return _0x5acc9b;
          }
        }, {
          key: "visibleIndexPaths",
          get: function () {
            var _0x2feb66 = [];
            this.visibleNodesMap.forEach(function (_0x5b6c4d) {
              var _0x3b3828 = _0x5b6c4d.getComponent(_0x3bbec1);
              _0x2feb66.push(_0x3b3828.attributes.indexPath.clone());
            });
            return _0x2feb66;
          }
        }]);
        return _0x2f9d84;
      }(_0x891b58)).ScrollDirection = _0x413dca, _0x39c132.Mode = _0x3c7e1c, _0x563d28 = _0x81ac4c((_0x1135fd = _0x39c132).prototype, "mask", [_0x18f011], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          {
            return true;
          }
        }
      }), _0x2aa1cc = _0x81ac4c(_0x1135fd.prototype, "scrollEnabled", [_0x20da7d], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return true;
        }
      }), _0x144a66 = _0x81ac4c(_0x1135fd.prototype, "scrollDirection", [_0x27e43c], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return _0x457bbe.ScrollDirection.VERTICAL;
        }
      }), _0xc281c5 = _0x81ac4c(_0x1135fd.prototype, "mode", [_0x513f8c], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return _0x457bbe.Mode.RECYCLE;
        }
      }), _0x13da75 = _0x81ac4c(_0x1135fd.prototype, "preloadNodesLimitPerFrame", [_0x2fb425], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 2;
        }
      }), _0xf51fb7 = _0x81ac4c(_0x1135fd.prototype, "frameInterval", [_0xcff1ba], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1;
        }
      }), _0xd545fa = _0x81ac4c(_0x1135fd.prototype, "recycleInterval", [_0x203a3b], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1;
        }
      }), _0xef32da = _0x81ac4c(_0x1135fd.prototype, "registerCellForEditor", [_0x105e25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _0x5d9513 = _0x1135fd)) || _0x5d9513) || _0x5d9513) || _0x5d9513) || _0x5d9513));
      _0x2ddcd1._RF.pop();
    }
  };
});
System.register("chunks:///_virtual/yx-compact-flow-layout.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./yx-collection-view.ts"], function (_0xc009ab) {
  var _0x4411fd;
  var _0x59011e;
  var _0x53c436;
  var _0x13962c;
  var _0x594e92;
  var _0x1e2529;
  var _0x26cc1b;
  var _0x5c3bfe;
  var _0x2c9c46;
  var _0x5aa9d7;
  return {
    setters: [function (_0x3988ab) {
      _0x4411fd = _0x3988ab.inheritsLoose;
    }, function (_0xa2c537) {
      _0x59011e = _0xa2c537.cclegacy;
      _0x53c436 = _0xa2c537._decorator;
      _0x13962c = _0xa2c537.math;
      _0x594e92 = _0xa2c537.UITransform;
    }, function (_0x2fc8b3) {
      {
        _0x1e2529 = _0x2fc8b3.YXCollectionView;
        _0x26cc1b = _0x2fc8b3.YXIndexPath;
        _0x5c3bfe = _0x2fc8b3.YXLayout;
        _0x2c9c46 = _0x2fc8b3.YXEdgeInsets;
        _0x5aa9d7 = _0x2fc8b3.YXLayoutAttributes;
      }
    }],
    execute: function () {
      _0x59011e._RF.push({}, "9f598kyvW9K147nsHPTaJu3", "yx-compact-flow-layout", undefined);
      _0x53c436.ccclass;
      _0x53c436.property;
      var _0x2100dc = new _0x13962c.Rect();
      _0xc009ab("YXCompactFlowLayout", function (_0x48451f) {
        function _0x3ca078() {
          for (var _0x1ff5a3, _0x179bd3 = arguments.length, _0x1d35de = new Array(_0x179bd3), _0x5d0ea9 = 0; _0x5d0ea9 < _0x179bd3; _0x5d0ea9++) {
            _0x1d35de[_0x5d0ea9] = arguments[_0x5d0ea9];
          }
          (_0x1ff5a3 = _0x48451f.call.apply(_0x48451f, [this].concat(_0x1d35de)) || this).pagingEnabled = false;
          _0x1ff5a3.extraVisibleCount = 0;
          _0x1ff5a3.itemSize = new _0x13962c.Size(100, 100);
          _0x1ff5a3.verticalSpacing = 0;
          _0x1ff5a3.horizontalSpacing = 0;
          _0x1ff5a3.sectionInset = _0x2c9c46.ZERO;
          return _0x1ff5a3;
        }
        _0x4411fd(_0x3ca078, _0x48451f);
        var _0x1e995d = _0x3ca078.prototype;
        _0x1e995d.getItemSize = function () {
          if (this.itemSize instanceof Function == 0) {
            return this.itemSize;
          }
          throw new Error("YXFlowLayout: 动态配置的布局参数不支持直接获取，请检查自己的布局逻辑并谨慎的通过动态配置自己获取，注意避免死循环");
        };
        _0x1e995d.getVerticalSpacing = function () {
          if (this.verticalSpacing instanceof Function == 0) {
            return this.verticalSpacing;
          }
          throw new Error("YXFlowLayout: 动态配置的布局参数不支持直接获取，请检查自己的布局逻辑并谨慎的通过动态配置自己获取，注意避免死循环");
        };
        _0x1e995d.getHorizontalSpacing = function () {
          if (this.horizontalSpacing instanceof Function == 0) {
            return this.horizontalSpacing;
          }
          throw new Error("YXFlowLayout: 动态配置的布局参数不支持直接获取，请检查自己的布局逻辑并谨慎的通过动态配置自己获取，注意避免死循环");
        };
        _0x1e995d.getSectionInset = function () {
          if (this.sectionInset instanceof Function == 0) {
            return this.sectionInset;
          }
          throw new Error("YXFlowLayout: 动态配置的布局参数不支持直接获取，请检查自己的布局逻辑并谨慎的通过动态配置自己获取，注意避免死循环");
        };
        _0x1e995d.prepare = function (_0x43b26c) {
          _0x43b26c.scrollDirection != _0x1e2529.ScrollDirection.HORIZONTAL ? _0x43b26c.scrollDirection != _0x1e2529.ScrollDirection.VERTICAL || this._vertical(_0x43b26c) : this._horizontal(_0x43b26c);
        };
        _0x1e995d.initOffset = function (_0x4f04ee) {
          _0x4f04ee.scrollDirection != _0x1e2529.ScrollDirection.HORIZONTAL ? _0x4f04ee.scrollDirection != _0x1e2529.ScrollDirection.VERTICAL || _0x4f04ee.scrollView.scrollToTop(0) : _0x4f04ee.scrollView.scrollToLeft(0);
        };
        _0x1e995d.targetOffset = function (_0x3a780f, _0x281aed, _0x3f73de) {
          if (0 == this.pagingEnabled) {
            return null;
          }
          var _0x5bcdb1 = _0x3a780f.scrollView.getScrollOffset();
          _0x5bcdb1.x = -_0x5bcdb1.x;
          if (_0x3a780f.scrollDirection == _0x1e2529.ScrollDirection.HORIZONTAL) {
            var _0xf391e = Math.round(_0x5bcdb1.x / _0x3a780f.scrollView.view.width);
            var _0x28fa9c = _0x281aed.x / _0x3a780f.scrollView.view.width;
            _0x3f73de && Math.abs(_0x28fa9c) >= 0.2 && (_0xf391e = Math.round(_0x3f73de.x / _0x3a780f.scrollView.view.width) + (_0x28fa9c > 0 ? -1 : 1));
            _0x5bcdb1.x = _0xf391e * _0x3a780f.scrollView.view.width;
          }
          if (_0x3a780f.scrollDirection == _0x1e2529.ScrollDirection.VERTICAL) {
            {
              var _0xa12540 = Math.round(_0x5bcdb1.y / _0x3a780f.scrollView.view.height);
              var _0x59f35a = _0x281aed.y / _0x3a780f.scrollView.view.height;
              _0x3f73de && Math.abs(_0x59f35a) >= 0.2 && (_0xa12540 = Math.round(_0x3f73de.y / _0x3a780f.scrollView.view.height) + (_0x59f35a > 0 ? 1 : -1));
              _0x5bcdb1.y = _0xa12540 * _0x3a780f.scrollView.view.height;
            }
          }
          return {
            offset: _0x5bcdb1,
            time: 0.25
          };
        };
        _0x1e995d.layoutAttributesForElementsInRect = function (_0x321ba5, _0x295567) {
          if (this.extraVisibleCount < 0) {
            return _0x48451f.prototype.layoutAttributesForElementsInRect.call(this, _0x321ba5, _0x295567);
          }
          for (var _0x211133 = -1, _0x448522 = 0, _0x349357 = this.attributes.length - 1; _0x448522 <= _0x349357 && _0x349357 >= 0;) {
            var _0x2f4988 = _0x448522 + (_0x349357 - _0x448522) / 2;
            _0x2f4988 = Math.floor(_0x2f4988);
            var _0x2d5dc7 = this.attributes[_0x2f4988];
            if (_0x321ba5.intersects(_0x2d5dc7.frame)) {
              {
                _0x211133 = _0x2f4988;
                break;
              }
            }
            _0x321ba5.yMax < _0x2d5dc7.frame.yMin || _0x321ba5.xMax < _0x2d5dc7.frame.xMin ? _0x349357 = _0x2f4988 - 1 : _0x448522 = _0x2f4988 + 1;
          }
          if (_0x211133 < 0) {
            return _0x48451f.prototype.layoutAttributesForElementsInRect.call(this, _0x321ba5, _0x295567);
          }
          var _0x69e7b4 = [];
          _0x69e7b4.push(this.attributes[_0x211133]);
          for (var _0x5a3c1a = _0x211133; _0x5a3c1a > 0;) {
            var _0x5e58f1 = _0x5a3c1a - 1;
            var _0x3c28c8 = this.attributes[_0x5e58f1];
            if (0 == _0x321ba5.intersects(_0x3c28c8.frame)) {
              break;
            }
            _0x69e7b4.push(_0x3c28c8);
            _0x5a3c1a = _0x5e58f1;
          }
          for (var _0x51a8cc = this.extraVisibleCount; _0x51a8cc > 0;) {
            var _0x2e169a = _0x5a3c1a - 1;
            if (_0x2e169a < 0) {
              break;
            }
            var _0x1d8cb1 = this.attributes[_0x2e169a];
            _0x321ba5.intersects(_0x1d8cb1.frame) && _0x69e7b4.push(_0x1d8cb1);
            _0x5a3c1a = _0x2e169a;
            _0x51a8cc--;
          }
          for (var _0x1bc02e = _0x211133; _0x1bc02e < this.attributes.length - 1;) {
            var _0x980ea1 = _0x1bc02e + 1;
            var _0x1bb289 = this.attributes[_0x980ea1];
            if (0 == _0x321ba5.intersects(_0x1bb289.frame)) {
              break;
            }
            _0x69e7b4.push(_0x1bb289);
            _0x1bc02e = _0x980ea1;
          }
          for (var _0x591c21 = this.extraVisibleCount; _0x591c21 > 0;) {
            var _0x34226a = _0x1bc02e + 1;
            if (_0x34226a >= this.attributes.length) {
              break;
            }
            var _0x46d651 = this.attributes[_0x34226a];
            _0x321ba5.intersects(_0x46d651.frame) && _0x69e7b4.push(_0x46d651);
            _0x1bc02e = _0x34226a;
            _0x591c21--;
          }
          return _0x69e7b4;
        };
        _0x1e995d.layoutAttributesForItemAtIndexPath = function (_0x26ea02, _0x1d3365) {
          for (var _0x5e71f8 = 0, _0x6e9214 = this.attributes.length - 1; _0x5e71f8 <= _0x6e9214 && _0x6e9214 >= 0;) {
            var _0x2ebad4 = _0x5e71f8 + (_0x6e9214 - _0x5e71f8) / 2;
            _0x2ebad4 = Math.floor(_0x2ebad4);
            var _0x5803f0 = this.attributes[_0x2ebad4];
            if (_0x5803f0.indexPath.equals(_0x26ea02)) {
              return _0x5803f0;
            }
            _0x5803f0.indexPath.section < _0x26ea02.section || _0x5803f0.indexPath.section == _0x26ea02.section && _0x5803f0.indexPath.item < _0x26ea02.item ? _0x5e71f8 = _0x2ebad4 + 1 : _0x6e9214 = _0x2ebad4 - 1;
          }
          return _0x48451f.prototype.layoutAttributesForItemAtIndexPath.call(this, _0x26ea02, _0x1d3365);
        };
        _0x1e995d._horizontal = function (_0xb0ea1b) {
          _0xb0ea1b.scrollView.horizontal = true;
          _0xb0ea1b.scrollView.vertical = false;
          for (var _0x418076 = _0xb0ea1b.node.getComponent(_0x594e92).contentSize.clone(), _0x8c9876 = [], _0x27c118 = _0xb0ea1b.numberOfSections instanceof Function ? _0xb0ea1b.numberOfSections(_0xb0ea1b) : _0xb0ea1b.numberOfSections, _0x2e16e0 = 0, _0x22f53c = 0; _0x22f53c < _0x27c118; _0x22f53c++) {
            var _0x10c144 = _0xb0ea1b.numberOfItems instanceof Function ? _0xb0ea1b.numberOfItems(_0x22f53c, _0xb0ea1b) : _0xb0ea1b.numberOfItems;
            var _0x1addbd = this.verticalSpacing instanceof Function ? this.verticalSpacing(_0x22f53c, this, _0xb0ea1b) : this.verticalSpacing;
            var _0x88070a = this.horizontalSpacing instanceof Function ? this.horizontalSpacing(_0x22f53c, this, _0xb0ea1b) : this.horizontalSpacing;
            var _0x53619a = this.sectionInset instanceof Function ? this.sectionInset(_0x22f53c, this, _0xb0ea1b) : this.sectionInset;
            _0x2e16e0 += _0x53619a.left;
            var _0x273b5d = new _0x11873e();
            _0x273b5d.verticalSpacing = _0x1addbd;
            _0x273b5d.horizontalSpacing = _0x88070a;
            _0x273b5d.sectionInset = _0x53619a;
            _0x273b5d.offset = _0x2e16e0;
            _0x273b5d.attrs = [];
            _0x273b5d.containerWidth = 0;
            _0x273b5d.containerHeight = _0x418076.height;
            for (var _0x390082 = 0; _0x390082 < _0x10c144; _0x390082++) {
              var _0x50e9dc = new _0x26cc1b(_0x22f53c, _0x390082);
              var _0x83fae2 = this.itemSize instanceof Function ? this.itemSize(_0x50e9dc, this, _0xb0ea1b) : this.itemSize;
              var _0x5d5406 = _0x273b5d.layout_horizontal_item(_0x50e9dc, _0x83fae2);
              null == _0x5d5406 && (_0x273b5d.offset = _0x273b5d.offset + _0x273b5d.containerWidth + _0x88070a, _0x273b5d.containerWidth = 0, _0x273b5d.attrs = [], _0x5d5406 = _0x273b5d.layout_horizontal_item(_0x50e9dc, _0x83fae2));
              _0x5d5406 && _0x8c9876.push(_0x5d5406);
              _0x2e16e0 = Math.max(_0x2e16e0, _0x273b5d.offset + _0x273b5d.containerWidth);
            }
            _0x2e16e0 += _0x53619a.right;
          }
          this.attributes = _0x8c9876;
          _0x418076.width = Math.max(_0x418076.width, _0x2e16e0);
          this.contentSize = _0x418076;
        };
        _0x1e995d._vertical = function (_0x13df8e) {
          _0x13df8e.scrollView.horizontal = false;
          _0x13df8e.scrollView.vertical = true;
          for (var _0x31ba43 = _0x13df8e.node.getComponent(_0x594e92).contentSize.clone(), _0x5045dd = [], _0x57fd90 = _0x13df8e.numberOfSections instanceof Function ? _0x13df8e.numberOfSections(_0x13df8e) : _0x13df8e.numberOfSections, _0x4b1af2 = 0, _0xf4a119 = 0; _0xf4a119 < _0x57fd90; _0xf4a119++) {
            var _0x1bb0b0 = _0x13df8e.numberOfItems instanceof Function ? _0x13df8e.numberOfItems(_0xf4a119, _0x13df8e) : _0x13df8e.numberOfItems;
            var _0x121512 = this.verticalSpacing instanceof Function ? this.verticalSpacing(_0xf4a119, this, _0x13df8e) : this.verticalSpacing;
            var _0x3daf70 = this.horizontalSpacing instanceof Function ? this.horizontalSpacing(_0xf4a119, this, _0x13df8e) : this.horizontalSpacing;
            var _0x5a7687 = this.sectionInset instanceof Function ? this.sectionInset(_0xf4a119, this, _0x13df8e) : this.sectionInset;
            _0x4b1af2 += _0x5a7687.top;
            var _0x41496d = new _0x11873e();
            _0x41496d.verticalSpacing = _0x121512;
            _0x41496d.horizontalSpacing = _0x3daf70;
            _0x41496d.sectionInset = _0x5a7687;
            _0x41496d.offset = _0x4b1af2;
            _0x41496d.attrs = [];
            _0x41496d.containerWidth = _0x31ba43.width;
            _0x41496d.containerHeight = 0;
            for (var _0x326369 = 0; _0x326369 < _0x1bb0b0; _0x326369++) {
              {
                var _0x483d2d = new _0x26cc1b(_0xf4a119, _0x326369);
                var _0x15f733 = this.itemSize instanceof Function ? this.itemSize(_0x483d2d, this, _0x13df8e) : this.itemSize;
                var _0x2bfc23 = _0x41496d.layout_vertical_item(_0x483d2d, _0x15f733);
                null == _0x2bfc23 && (_0x41496d.offset = _0x41496d.offset + _0x41496d.containerHeight + _0x121512, _0x41496d.containerHeight = 0, _0x41496d.attrs = [], _0x2bfc23 = _0x41496d.layout_vertical_item(_0x483d2d, _0x15f733));
                _0x2bfc23 && _0x5045dd.push(_0x2bfc23);
                _0x4b1af2 = Math.max(_0x4b1af2, _0x41496d.offset + _0x41496d.containerHeight);
              }
            }
            _0x4b1af2 += _0x5a7687.bottom;
          }
          this.attributes = _0x5045dd;
          _0x31ba43.height = Math.max(_0x31ba43.height, _0x4b1af2);
          this.contentSize = _0x31ba43;
        };
        return _0x3ca078;
      }(_0x5c3bfe));
      var _0x11873e = function () {
        function _0x4b7a8d() {
          this.offset = undefined;
          this.verticalSpacing = undefined;
          this.horizontalSpacing = undefined;
          this.sectionInset = undefined;
          this.containerWidth = undefined;
          this.containerHeight = undefined;
          this.attrs = [];
        }
        var _0x3b79df = _0x4b7a8d.prototype;
        _0x3b79df.intersects = function (_0x59206) {
          for (var _0x1a05ed = 0; _0x1a05ed < this.attrs.length; _0x1a05ed++) {
            var _0x6638a6 = this.attrs[_0x1a05ed];
            if (_0x13962c.Rect.intersection(_0x2100dc, _0x6638a6.frame, _0x59206), _0x2100dc.width > 0 && _0x2100dc.height > 0) {
              return true;
            }
          }
          return false;
        };
        _0x3b79df.layout_vertical_item = function (_0x50306c, _0x4028a6) {
          if (this.attrs.length <= 0) {
            var _0x2d1889 = new _0x5aa9d7();
            _0x2d1889.indexPath = _0x50306c;
            _0x2d1889.frame = new _0x13962c.Rect(this.sectionInset.left, this.offset, _0x4028a6.width, _0x4028a6.height);
            this.attrs.push(_0x2d1889);
            this.containerHeight = Math.max(this.containerHeight, _0x2d1889.frame.height);
            return _0x2d1889;
          }
          var _0x34dbea = new _0x13962c.Rect();
          _0x34dbea.size = _0x4028a6;
          for (var _0xb6c4a = 0; _0xb6c4a < this.attrs.length; _0xb6c4a++) {
            var _0x4d035f = this.attrs[_0xb6c4a];
            if (_0x34dbea.x = _0x4d035f.frame.xMax + this.horizontalSpacing, _0x34dbea.y = _0x4d035f.frame.y, _0x34dbea.xMax <= this.containerWidth - this.sectionInset.right && 0 == this.intersects(_0x34dbea)) {
              var _0xc0291c = new _0x5aa9d7();
              _0xc0291c.indexPath = _0x50306c;
              _0xc0291c.frame = _0x34dbea;
              this.attrs.push(_0xc0291c);
              this.containerHeight = Math.max(this.containerHeight, _0xc0291c.frame.yMax - this.offset);
              return _0xc0291c;
            }
          }
          for (var _0x7f0c8b = 0; _0x7f0c8b < this.attrs.length; _0x7f0c8b++) {
            var _0x3c2df9 = this.attrs[_0x7f0c8b];
            _0x34dbea.x = _0x3c2df9.frame.x;
            _0x34dbea.y = _0x3c2df9.frame.yMax + this.verticalSpacing;
            var _0x5cc3bc = _0x34dbea.xMax <= this.containerWidth - this.sectionInset.right;
            var _0x36c7d3 = _0x34dbea.yMax <= this.offset + this.containerHeight;
            if (_0x5cc3bc && _0x36c7d3 && 0 == this.intersects(_0x34dbea)) {
              var _0x120d3c = new _0x5aa9d7();
              _0x120d3c.indexPath = _0x50306c;
              _0x120d3c.frame = _0x34dbea;
              this.attrs.push(_0x120d3c);
              this.containerHeight = Math.max(this.containerHeight, _0x120d3c.frame.height);
              return _0x120d3c;
            }
          }
          return null;
        };
        _0x3b79df.layout_horizontal_item = function (_0x4dacc9, _0x150118) {
          {
            if (this.attrs.length <= 0) {
              var _0x5586c8 = new _0x5aa9d7();
              _0x5586c8.indexPath = _0x4dacc9;
              _0x5586c8.frame = new _0x13962c.Rect(this.offset, this.sectionInset.top, _0x150118.width, _0x150118.height);
              this.attrs.push(_0x5586c8);
              this.containerWidth = Math.max(this.containerWidth, _0x5586c8.frame.width);
              return _0x5586c8;
            }
            var _0x3475fa = new _0x13962c.Rect();
            _0x3475fa.size = _0x150118;
            for (var _0x284157 = 0; _0x284157 < this.attrs.length; _0x284157++) {
              var _0x53a2c8 = this.attrs[_0x284157];
              if (_0x3475fa.x = _0x53a2c8.frame.x, _0x3475fa.y = _0x53a2c8.frame.yMax + this.verticalSpacing, _0x3475fa.yMax <= this.containerHeight - this.sectionInset.bottom && 0 == this.intersects(_0x3475fa)) {
                var _0x2326b3 = new _0x5aa9d7();
                _0x2326b3.indexPath = _0x4dacc9;
                _0x2326b3.frame = _0x3475fa;
                this.attrs.push(_0x2326b3);
                this.containerWidth = Math.max(this.containerWidth, _0x2326b3.frame.xMax - this.offset);
                return _0x2326b3;
              }
            }
            for (var _0x3c988b = 0; _0x3c988b < this.attrs.length; _0x3c988b++) {
              var _0x52bd65 = this.attrs[_0x3c988b];
              _0x3475fa.x = _0x52bd65.frame.xMax + this.horizontalSpacing;
              _0x3475fa.y = _0x52bd65.frame.y;
              var _0x124cfe = _0x3475fa.xMax <= this.offset + this.containerWidth;
              var _0x817707 = _0x3475fa.yMax <= this.containerHeight - this.sectionInset.bottom;
              if (_0x124cfe && _0x817707 && 0 == this.intersects(_0x3475fa)) {
                {
                  var _0x18bc40 = new _0x5aa9d7();
                  _0x18bc40.indexPath = _0x4dacc9;
                  _0x18bc40.frame = _0x3475fa;
                  this.attrs.push(_0x18bc40);
                  this.containerWidth = Math.max(this.containerWidth, _0x18bc40.frame.width);
                  return _0x18bc40;
                }
              }
            }
            return null;
          }
        };
        return _0x4b7a8d;
      }();
      _0x59011e._RF.pop();
    }
  };
});
System.register("chunks:///_virtual/yx-cover-layout.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./index.ts", "./yx-collection-view.ts", "./yx-flow-layout.ts"], function (_0x51cb7c) {
  var _0x45c5f6;
  var _0x1e9e43;
  var _0x55e1de;
  var _0x497235;
  var _0x48c4f1;
  var _0x4eab28;
  var _0x3ccb37;
  return {
    setters: [function (_0x2ef584) {
      _0x45c5f6 = _0x2ef584.inheritsLoose;
    }, function (_0x53c14b) {
      _0x1e9e43 = _0x53c14b.cclegacy;
      _0x55e1de = _0x53c14b._decorator;
      _0x497235 = _0x53c14b.math;
    }, null, function (_0x3e176b) {
      _0x48c4f1 = _0x3e176b.YXEdgeInsets;
      _0x4eab28 = _0x3e176b.YXCollectionView;
    }, function (_0x77bbe2) {
      _0x3ccb37 = _0x77bbe2.YXFlowLayout;
    }],
    execute: function () {
      _0x1e9e43._RF.push({}, "ad37dvhcAhMyJOa2rW7s4sI", "yx-cover-layout", undefined);
      _0x55e1de.ccclass;
      _0x55e1de.property;
      _0x51cb7c("YXCoverLayout", function (_0x158502) {
        _0x45c5f6(_0x9bf99a, _0x158502);
        var _0x446ce9 = _0x9bf99a.prototype;
        function _0x9bf99a(_0x19c5f9) {
          var _0x18170c;
          (_0x18170c = _0x158502.call(this) || this).sectionInset = undefined;
          _0x18170c.itemSize = null;
          _0x18170c.scaleValue = 0.8;
          _0x18170c.angleX = 0;
          _0x18170c.angleY = 0;
          _0x18170c.angleZ = 0;
          _0x18170c.itemSize = _0x19c5f9;
          return _0x18170c;
        }
        _0x446ce9.getSectionInset = function () {
          return this.sectionInset;
        };
        _0x446ce9.getItemSize = function () {
          return this.itemSize;
        };
        _0x446ce9.prepare = function (_0x4c899a) {
          var _0x5aacd5 = 0.5 * (_0x4c899a.scrollView.view.width - this.itemSize.width);
          var _0x5b1591 = 0.5 * (_0x4c899a.scrollView.view.height - this.itemSize.height);
          this.sectionInset = new _0x48c4f1(_0x5b1591, _0x5aacd5, _0x5b1591, _0x5aacd5);
          _0x158502.prototype.prepare.call(this, _0x4c899a);
        };
        _0x446ce9.targetOffset = function (_0x503caa, _0x1fd87a, _0x191170) {
          if (0 == this.pagingEnabled) {
            return null;
          }
          var _0x1e0908 = _0x503caa.scrollView.getScrollOffset();
          _0x1e0908.x = -_0x1e0908.x;
          var _0x20c226 = new _0x497235.Rect();
          _0x20c226.origin = _0x503caa.scrollView.getScrollOffset();
          _0x20c226.x = -_0x20c226.x;
          _0x20c226.size = _0x503caa.scrollView.view.contentSize;
          var _0x3354f0 = this.layoutAttributesForElementsInRect(_0x20c226, _0x503caa);
          var _0x3ac720 = null;
          if (_0x503caa.scrollDirection == _0x4eab28.ScrollDirection.HORIZONTAL) {
            var _0x1a34db = _0x1e0908.x + 0.5 * _0x503caa.scrollView.view.width;
            _0x3354f0.forEach(function (_0x56557b) {
              var _0x55f4e8 = Math.abs(_0x56557b.frame.center.x - _0x1a34db);
              var _0x2ff25b = _0x3ac720 ? Math.abs(_0x3ac720.frame.center.x - _0x1a34db) : null;
              (null == _0x2ff25b || _0x55f4e8 < _0x2ff25b) && (_0x3ac720 = _0x56557b);
            });
            _0x1e0908.x = _0x3ac720.frame.center.x - 0.5 * _0x503caa.scrollView.view.width;
          }
          if (_0x503caa.scrollDirection == _0x4eab28.ScrollDirection.VERTICAL) {
            var _0x41348c = _0x1e0908.y + 0.5 * _0x503caa.scrollView.view.height;
            _0x3354f0.forEach(function (_0x2b10ae) {
              var _0x25ed1f = Math.abs(_0x2b10ae.frame.center.y - _0x41348c);
              var _0x4c7425 = _0x3ac720 ? Math.abs(_0x3ac720.frame.center.y - _0x41348c) : null;
              (null == _0x4c7425 || _0x25ed1f < _0x4c7425) && (_0x3ac720 = _0x2b10ae);
            });
            _0x1e0908.y = _0x3ac720.frame.center.y - 0.5 * _0x503caa.scrollView.view.height;
          }
          return {
            offset: _0x1e0908,
            time: 0.5
          };
        };
        _0x446ce9.scrollTo = function (_0x5b7f84, _0x1c1df9) {
          var _0x3930c5 = this.layoutAttributesForItemAtIndexPath(_0x5b7f84, _0x1c1df9);
          if (_0x3930c5) {
            var _0x328910 = _0x3930c5.frame.origin;
            _0x1c1df9.scrollDirection == _0x4eab28.ScrollDirection.HORIZONTAL && (_0x328910.x = _0x328910.x - 0.5 * (_0x1c1df9.scrollView.view.width - _0x3930c5.frame.width));
            _0x1c1df9.scrollDirection == _0x4eab28.ScrollDirection.VERTICAL && (_0x328910.y = _0x328910.y - 0.5 * (_0x1c1df9.scrollView.view.height - _0x3930c5.frame.height));
            return _0x328910;
          }
          return null;
        };
        _0x446ce9.layoutAttributesForElementsInRect = function (_0x1dddef, _0x233592) {
          var _0xcb2654 = this;
          var _0x57dde8 = _0x158502.prototype.layoutAttributesForElementsInRect.call(this, _0x1dddef, _0x233592);
          var _0x19e1c6 = _0x233592.scrollView.getScrollOffset();
          _0x19e1c6.x = -_0x19e1c6.x;
          var _0x3e118d = this.scaleValue;
          if (_0x233592.scrollDirection == _0x4eab28.ScrollDirection.HORIZONTAL) {
            var _0x5b53de = _0x19e1c6.x + 0.5 * _0x233592.scrollView.view.width;
            _0x57dde8.forEach(function (_0x2a1fbb) {
              var _0x133d66 = _0x2a1fbb.frame.center.x - _0x5b53de;
              var _0x16794b = Math.abs(_0x133d66);
              var _0x1fb0c7 = _0x16794b / _0xcb2654.itemSize.width;
              _0x1fb0c7 = Math.min(1, _0x1fb0c7);
              var _0x4c3db3 = 1 - (1 - _0x3e118d) * _0x1fb0c7;
              _0x2a1fbb.scale = new _0x497235.Vec3(_0x4c3db3, _0x4c3db3, 1);
              _0x2a1fbb.zIndex = -_0x16794b;
              var _0x1839f6 = new _0x497235.Vec3();
              _0x1839f6.x = _0x1fb0c7 * _0xcb2654.angleX * (_0x133d66 > 0 ? -1 : 1);
              _0x1839f6.y = _0x1fb0c7 * _0xcb2654.angleY * (_0x133d66 > 0 ? -1 : 1);
              _0x1839f6.z = _0x1fb0c7 * _0xcb2654.angleZ * (_0x133d66 > 0 ? -1 : 1);
              _0x2a1fbb.eulerAngles = _0x1839f6;
            });
          }
          if (_0x233592.scrollDirection == _0x4eab28.ScrollDirection.VERTICAL) {
            var _0x3ff498 = _0x19e1c6.y + 0.5 * _0x233592.scrollView.view.height;
            _0x57dde8.forEach(function (_0x4dc957) {
              var _0x21993b = _0x4dc957.frame.center.y - _0x3ff498;
              var _0x185b78 = Math.abs(_0x21993b) / _0xcb2654.itemSize.height;
              _0x185b78 = Math.min(1, _0x185b78);
              var _0x1320c3 = 1 - (1 - _0x3e118d) * _0x185b78;
              _0x4dc957.scale = new _0x497235.Vec3(_0x1320c3, _0x1320c3, 1);
              _0x4dc957.zIndex = 1 - _0x185b78;
              var _0x1e3fcc = new _0x497235.Vec3();
              _0x1e3fcc.x = _0x185b78 * _0xcb2654.angleX * (_0x21993b > 0 ? -1 : 1);
              _0x1e3fcc.y = _0x185b78 * _0xcb2654.angleY * (_0x21993b > 0 ? -1 : 1);
              _0x1e3fcc.z = _0x185b78 * _0xcb2654.angleZ * (_0x21993b > 0 ? -1 : 1);
              _0x4dc957.eulerAngles = _0x1e3fcc;
            });
          }
          return _0x57dde8;
        };
        _0x446ce9.shouldUpdateAttributesZIndex = function () {
          return true;
        };
        _0x446ce9.shouldUpdateAttributesForBoundsChange = function () {
          return true;
        };
        return _0x9bf99a;
      }(_0x3ccb37));
      _0x1e9e43._RF.pop();
    }
  };
});
System.register("chunks:///_virtual/yx-flow-layout.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./yx-collection-view.ts"], function (_0x4017a5) {
  var _0x5ac4a0;
  var _0x56231c;
  var _0x4418e7;
  var _0x330e46;
  var _0x54994a;
  var _0x1eb319;
  var _0x5a08ea;
  var _0x368632;
  var _0x4338b7;
  var _0x34e969;
  return {
    setters: [function (_0x1386ff) {
      _0x5ac4a0 = _0x1386ff.inheritsLoose;
    }, function (_0xe71631) {
      _0x56231c = _0xe71631.cclegacy;
      _0x4418e7 = _0xe71631._decorator;
      _0x330e46 = _0xe71631.math;
      _0x54994a = _0xe71631.UITransform;
    }, function (_0x11a8af) {
      {
        _0x1eb319 = _0x11a8af.YXCollectionView;
        _0x5a08ea = _0x11a8af.YXIndexPath;
        _0x368632 = _0x11a8af.YXLayout;
        _0x4338b7 = _0x11a8af.YXEdgeInsets;
        _0x34e969 = _0x11a8af.YXLayoutAttributes;
      }
    }],
    execute: function () {
      _0x56231c._RF.push({}, "6aefbGH/rxJFpOp8GLjvdH1", "yx-flow-layout", undefined);
      _0x4418e7.ccclass;
      _0x4418e7.property;
      var _0x2fa6a7 = new _0x330e46.Rect();
      var _0x2ef575 = function (_0x4f2e84) {
        _0x4f2e84[_0x4f2e84.CENTER = 0] = "CENTER";
        _0x4f2e84[_0x4f2e84.FORWARD = 1] = "FORWARD";
        _0x4f2e84[_0x4f2e84.BACKWARD = 2] = "BACKWARD";
        return _0x4f2e84;
      }(_0x2ef575 || {});
      var _0x1e1062 = function (_0x2837d2) {
        _0x2837d2[_0x2837d2.CENTER = 0] = "CENTER";
        _0x2837d2[_0x2837d2.SIDE = 1] = "SIDE";
        _0x2837d2[_0x2837d2.LEFT = 2] = "LEFT";
        _0x2837d2[_0x2837d2.RIGHT = 3] = "RIGHT";
        _0x2837d2[_0x2837d2.TOP = 4] = "TOP";
        _0x2837d2[_0x2837d2.BOTTOM = 5] = "BOTTOM";
        return _0x2837d2;
      }(_0x1e1062 || {});
      var _0x162044 = function (_0x5e6ec6) {
        {
          _0x5e6ec6[_0x5e6ec6.NONE = 0] = "NONE";
          _0x5e6ec6[_0x5e6ec6.HORIZONTAL = 1] = "HORIZONTAL";
          _0x5e6ec6[_0x5e6ec6.VERTICAL = 2] = "VERTICAL";
          return _0x5e6ec6;
        }
      }(_0x162044 || {});
      var _0xa41fd2 = _0x4017a5("YXFlowLayout", function (_0x37d704) {
        function _0x448d45() {
          for (var _0x2730dd, _0x164257 = arguments.length, _0x2abfb3 = new Array(_0x164257), _0x35bce2 = 0; _0x35bce2 < _0x164257; _0x35bce2++) {
            _0x2abfb3[_0x35bce2] = arguments[_0x35bce2];
          }
          (_0x2730dd = _0x37d704.call.apply(_0x37d704, [this].concat(_0x2abfb3)) || this).pagingEnabled = false;
          _0x2730dd.extraVisibleCount = 0;
          _0x2730dd.alignment = _0x448d45.Alignment.CENTER;
          _0x2730dd.priority = _0x448d45.Priority.SIDE;
          _0x2730dd.reverse = _0x448d45.Reverse.NONE;
          _0x2730dd.itemSize = new _0x330e46.Size(100, 100);
          _0x2730dd.verticalSpacing = 0;
          _0x2730dd.horizontalSpacing = 0;
          _0x2730dd.sectionInset = _0x4338b7.ZERO;
          return _0x2730dd;
        }
        _0x5ac4a0(_0x448d45, _0x37d704);
        var _0x566fc4 = _0x448d45.prototype;
        _0x566fc4.getItemSize = function () {
          if (this.itemSize instanceof Function == 0) {
            return this.itemSize;
          }
          throw new Error("YXFlowLayout: 动态配置的布局参数不支持直接获取，请检查自己的布局逻辑并谨慎的通过动态配置自己获取，注意避免死循环");
        };
        _0x566fc4.getVerticalSpacing = function () {
          if (this.verticalSpacing instanceof Function == 0) {
            return this.verticalSpacing;
          }
          throw new Error("YXFlowLayout: 动态配置的布局参数不支持直接获取，请检查自己的布局逻辑并谨慎的通过动态配置自己获取，注意避免死循环");
        };
        _0x566fc4.getHorizontalSpacing = function () {
          if (this.horizontalSpacing instanceof Function == 0) {
            return this.horizontalSpacing;
          }
          throw new Error("YXFlowLayout: 动态配置的布局参数不支持直接获取，请检查自己的布局逻辑并谨慎的通过动态配置自己获取，注意避免死循环");
        };
        _0x566fc4.getSectionInset = function () {
          if (this.sectionInset instanceof Function == 0) {
            return this.sectionInset;
          }
          throw new Error("YXFlowLayout: 动态配置的布局参数不支持直接获取，请检查自己的布局逻辑并谨慎的通过动态配置自己获取，注意避免死循环");
        };
        _0x566fc4.prepare = function (_0x310954) {
          _0x310954.scrollDirection != _0x1eb319.ScrollDirection.HORIZONTAL ? _0x310954.scrollDirection != _0x1eb319.ScrollDirection.VERTICAL || this._vertical(_0x310954) : this._horizontal(_0x310954);
        };
        _0x566fc4.initOffset = function (_0x220e45) {
          _0x220e45.scrollDirection != _0x1eb319.ScrollDirection.HORIZONTAL ? _0x220e45.scrollDirection != _0x1eb319.ScrollDirection.VERTICAL || _0x220e45.scrollView.scrollToTop(0) : _0x220e45.scrollView.scrollToLeft(0);
        };
        _0x566fc4.targetOffset = function (_0x4570fd, _0x71b967, _0x289126) {
          if (0 == this.pagingEnabled) {
            return null;
          }
          var _0x1c8fba = _0x4570fd.scrollView.getScrollOffset();
          _0x1c8fba.x = -_0x1c8fba.x;
          if (_0x4570fd.scrollDirection == _0x1eb319.ScrollDirection.HORIZONTAL) {
            {
              var _0x4fbdbe = Math.round(_0x1c8fba.x / _0x4570fd.scrollView.view.width);
              var _0x5d4f32 = _0x71b967.x / _0x4570fd.scrollView.view.width;
              _0x289126 && Math.abs(_0x5d4f32) >= 0.2 && (_0x4fbdbe = Math.round(_0x289126.x / _0x4570fd.scrollView.view.width) + (_0x5d4f32 > 0 ? -1 : 1));
              _0x1c8fba.x = _0x4fbdbe * _0x4570fd.scrollView.view.width;
            }
          }
          if (_0x4570fd.scrollDirection == _0x1eb319.ScrollDirection.VERTICAL) {
            var _0x5ed37d = Math.round(_0x1c8fba.y / _0x4570fd.scrollView.view.height);
            var _0x224615 = _0x71b967.y / _0x4570fd.scrollView.view.height;
            _0x289126 && Math.abs(_0x224615) >= 0.2 && (_0x5ed37d = Math.round(_0x289126.y / _0x4570fd.scrollView.view.height) + (_0x224615 > 0 ? 1 : -1));
            _0x1c8fba.y = _0x5ed37d * _0x4570fd.scrollView.view.height;
          }
          return {
            offset: _0x1c8fba,
            time: 0.25
          };
        };
        _0x566fc4.layoutAttributesForElementsInRect = function (_0x367009, _0x217515) {
          {
            if (this.extraVisibleCount < 0) {
              return _0x37d704.prototype.layoutAttributesForElementsInRect.call(this, _0x367009, _0x217515);
            }
            for (var _0x3a68d9 = -1, _0x1e0029 = 0, _0x153746 = this.attributes.length - 1; _0x1e0029 <= _0x153746 && _0x153746 >= 0;) {
              {
                var _0x123c3a = _0x1e0029 + (_0x153746 - _0x1e0029) / 2;
                _0x123c3a = Math.floor(_0x123c3a);
                var _0x1a4882 = this.attributes[_0x123c3a];
                if (_0x367009.intersects(_0x1a4882.frame)) {
                  _0x3a68d9 = _0x123c3a;
                  break;
                }
                _0x367009.yMax < _0x1a4882.frame.yMin || _0x367009.xMax < _0x1a4882.frame.xMin ? _0x153746 = _0x123c3a - 1 : _0x1e0029 = _0x123c3a + 1;
              }
            }
            if (_0x3a68d9 < 0) {
              return _0x37d704.prototype.layoutAttributesForElementsInRect.call(this, _0x367009, _0x217515);
            }
            var _0x539d51 = [];
            _0x539d51.push(this.attributes[_0x3a68d9]);
            for (var _0x3ff7d0 = _0x3a68d9; _0x3ff7d0 > 0;) {
              var _0x5f95bf = _0x3ff7d0 - 1;
              var _0x209edd = this.attributes[_0x5f95bf];
              if (0 == _0x367009.intersects(_0x209edd.frame)) {
                break;
              }
              _0x539d51.push(_0x209edd);
              _0x3ff7d0 = _0x5f95bf;
            }
            for (var _0x282372 = this.extraVisibleCount; _0x282372 > 0;) {
              var _0x5acf23 = _0x3ff7d0 - 1;
              if (_0x5acf23 < 0) {
                break;
              }
              var _0x25e0dc = this.attributes[_0x5acf23];
              _0x367009.intersects(_0x25e0dc.frame) && _0x539d51.push(_0x25e0dc);
              _0x3ff7d0 = _0x5acf23;
              _0x282372--;
            }
            for (var _0x5273c4 = _0x3a68d9; _0x5273c4 < this.attributes.length - 1;) {
              var _0x4d5a44 = _0x5273c4 + 1;
              var _0x3ca553 = this.attributes[_0x4d5a44];
              if (0 == _0x367009.intersects(_0x3ca553.frame)) {
                break;
              }
              _0x539d51.push(_0x3ca553);
              _0x5273c4 = _0x4d5a44;
            }
            for (var _0x18efa2 = this.extraVisibleCount; _0x18efa2 > 0;) {
              var _0x2325ee = _0x5273c4 + 1;
              if (_0x2325ee >= this.attributes.length) {
                break;
              }
              var _0x4aaccb = this.attributes[_0x2325ee];
              _0x367009.intersects(_0x4aaccb.frame) && _0x539d51.push(_0x4aaccb);
              _0x5273c4 = _0x2325ee;
              _0x18efa2--;
            }
            return _0x539d51;
          }
        };
        _0x566fc4.layoutAttributesForItemAtIndexPath = function (_0x5eff0b, _0x2a4a18) {
          for (var _0x2d789d = 0, _0x832fec = this.attributes.length - 1; _0x2d789d <= _0x832fec && _0x832fec >= 0;) {
            var _0x6db2f6 = _0x2d789d + (_0x832fec - _0x2d789d) / 2;
            _0x6db2f6 = Math.floor(_0x6db2f6);
            var _0x530ef6 = this.attributes[_0x6db2f6];
            if (_0x530ef6.indexPath.equals(_0x5eff0b)) {
              return _0x530ef6;
            }
            _0x530ef6.indexPath.section < _0x5eff0b.section || _0x530ef6.indexPath.section == _0x5eff0b.section && _0x530ef6.indexPath.item < _0x5eff0b.item ? _0x2d789d = _0x6db2f6 + 1 : _0x832fec = _0x6db2f6 - 1;
          }
          return _0x37d704.prototype.layoutAttributesForItemAtIndexPath.call(this, _0x5eff0b, _0x2a4a18);
        };
        _0x566fc4._horizontal = function (_0x43e24e) {
          _0x43e24e.scrollView.horizontal = true;
          _0x43e24e.scrollView.vertical = false;
          for (var _0x24b30b = _0x43e24e.node.getComponent(_0x54994a).contentSize.clone(), _0x438daa = [], _0x4aacdc = _0x43e24e.numberOfSections instanceof Function ? _0x43e24e.numberOfSections(_0x43e24e) : _0x43e24e.numberOfSections, _0x1d3bcc = 0, _0x33164b = 0; _0x33164b < _0x4aacdc; _0x33164b++) {
            var _0x11714c = _0x43e24e.numberOfItems instanceof Function ? _0x43e24e.numberOfItems(_0x33164b, _0x43e24e) : _0x43e24e.numberOfItems;
            var _0x1244a9 = this.verticalSpacing instanceof Function ? this.verticalSpacing(_0x33164b, this, _0x43e24e) : this.verticalSpacing;
            var _0x32a7c7 = this.horizontalSpacing instanceof Function ? this.horizontalSpacing(_0x33164b, this, _0x43e24e) : this.horizontalSpacing;
            var _0x54f4d0 = this.sectionInset instanceof Function ? this.sectionInset(_0x33164b, this, _0x43e24e) : this.sectionInset;
            _0x1d3bcc += _0x54f4d0.left;
            var _0x587348 = new _0x5231d7();
            _0x587348.verticalSpacing = _0x1244a9;
            _0x587348.horizontalSpacing = _0x32a7c7;
            _0x587348.sectionInset = _0x54f4d0;
            _0x587348.offset = _0x1d3bcc;
            _0x587348.attrs = [];
            _0x587348.containerWidth = 0;
            _0x587348.containerHeight = _0x24b30b.height;
            _0x587348.alignment = this.alignment;
            _0x587348.priority = this.priority;
            _0x587348.reverse = this.reverse;
            for (var _0x2d0591 = 0; _0x2d0591 < _0x11714c; _0x2d0591++) {
              var _0x4c475f = new _0x5a08ea(_0x33164b, _0x2d0591);
              var _0xb337f8 = this.itemSize instanceof Function ? this.itemSize(_0x4c475f, this, _0x43e24e) : this.itemSize;
              var _0x5bce13 = _0x587348.layout_horizontal_item(_0x4c475f, _0xb337f8);
              null == _0x5bce13 && (_0x587348.layout_horizontal_complet(), _0x587348.offset = _0x587348.offset + _0x587348.containerWidth + _0x32a7c7, _0x587348.containerWidth = 0, _0x587348.attrs = [], _0x5bce13 = _0x587348.layout_horizontal_item(_0x4c475f, _0xb337f8));
              _0x5bce13 && _0x438daa.push(_0x5bce13);
              _0x1d3bcc = Math.max(_0x1d3bcc, _0x587348.offset + _0x587348.containerWidth);
            }
            _0x587348.layout_horizontal_complet();
            _0x1d3bcc += _0x54f4d0.right;
          }
          this._reverse_horizontal(_0x438daa, _0x1d3bcc);
          this.attributes = _0x438daa;
          _0x24b30b.width = Math.max(_0x24b30b.width, _0x1d3bcc);
          this.contentSize = _0x24b30b;
        };
        _0x566fc4._reverse_horizontal = function (_0xf512c2, _0x1a3238) {
          if (this.reverse & _0x162044.HORIZONTAL) {
            for (var _0x50a804 = 0; _0x50a804 < _0xf512c2.length; _0x50a804++) {
              {
                var _0x3b3b11 = _0xf512c2[_0x50a804];
                _0x3b3b11.frame.x = _0x1a3238 - _0x3b3b11.frame.x - _0x3b3b11.frame.width;
              }
            }
          }
        };
        _0x566fc4._vertical = function (_0x368495) {
          _0x368495.scrollView.horizontal = false;
          _0x368495.scrollView.vertical = true;
          for (var _0x1cc11e = _0x368495.node.getComponent(_0x54994a).contentSize.clone(), _0x4f2b2e = [], _0x3feb79 = _0x368495.numberOfSections instanceof Function ? _0x368495.numberOfSections(_0x368495) : _0x368495.numberOfSections, _0x29ecca = 0, _0x20b84a = 0; _0x20b84a < _0x3feb79; _0x20b84a++) {
            var _0x30f764 = _0x368495.numberOfItems instanceof Function ? _0x368495.numberOfItems(_0x20b84a, _0x368495) : _0x368495.numberOfItems;
            var _0xb4419e = this.verticalSpacing instanceof Function ? this.verticalSpacing(_0x20b84a, this, _0x368495) : this.verticalSpacing;
            var _0xa10e9e = this.horizontalSpacing instanceof Function ? this.horizontalSpacing(_0x20b84a, this, _0x368495) : this.horizontalSpacing;
            var _0x56b000 = this.sectionInset instanceof Function ? this.sectionInset(_0x20b84a, this, _0x368495) : this.sectionInset;
            _0x29ecca += _0x56b000.top;
            var _0x554ea1 = new _0x5231d7();
            _0x554ea1.verticalSpacing = _0xb4419e;
            _0x554ea1.horizontalSpacing = _0xa10e9e;
            _0x554ea1.sectionInset = _0x56b000;
            _0x554ea1.offset = _0x29ecca;
            _0x554ea1.attrs = [];
            _0x554ea1.containerWidth = _0x1cc11e.width;
            _0x554ea1.containerHeight = 0;
            _0x554ea1.alignment = this.alignment;
            _0x554ea1.priority = this.priority;
            _0x554ea1.reverse = this.reverse;
            for (var _0x5cd521 = 0; _0x5cd521 < _0x30f764; _0x5cd521++) {
              var _0x3ca41d = new _0x5a08ea(_0x20b84a, _0x5cd521);
              var _0x570aa2 = this.itemSize instanceof Function ? this.itemSize(_0x3ca41d, this, _0x368495) : this.itemSize;
              var _0x45ca89 = _0x554ea1.layout_vertical_item(_0x3ca41d, _0x570aa2);
              null == _0x45ca89 && (_0x554ea1.layout_vertical_complet(), _0x554ea1.offset = _0x554ea1.offset + _0x554ea1.containerHeight + _0xb4419e, _0x554ea1.containerHeight = 0, _0x554ea1.attrs = [], _0x45ca89 = _0x554ea1.layout_vertical_item(_0x3ca41d, _0x570aa2));
              _0x45ca89 && _0x4f2b2e.push(_0x45ca89);
              _0x29ecca = Math.max(_0x29ecca, _0x554ea1.offset + _0x554ea1.containerHeight);
            }
            _0x554ea1.layout_vertical_complet();
            _0x29ecca += _0x56b000.bottom;
          }
          this._reverse_vertical(_0x4f2b2e, _0x29ecca);
          this.attributes = _0x4f2b2e;
          _0x1cc11e.height = Math.max(_0x1cc11e.height, _0x29ecca);
          this.contentSize = _0x1cc11e;
        };
        _0x566fc4._reverse_vertical = function (_0x6686d3, _0x1fc7d4) {
          if (this.reverse & _0x162044.VERTICAL) {
            for (var _0x3bc7d5 = 0; _0x3bc7d5 < _0x6686d3.length; _0x3bc7d5++) {
              var _0x233eca = _0x6686d3[_0x3bc7d5];
              _0x233eca.frame.y = _0x1fc7d4 - _0x233eca.frame.y - _0x233eca.frame.height;
            }
          }
        };
        return _0x448d45;
      }(_0x368632));
      _0xa41fd2.Alignment = _0x2ef575;
      _0xa41fd2.Priority = _0x1e1062;
      _0xa41fd2.Reverse = _0x162044;
      var _0x5231d7 = function () {
        function _0xa586c0() {
          this.offset = undefined;
          this.verticalSpacing = undefined;
          this.horizontalSpacing = undefined;
          this.sectionInset = undefined;
          this.alignment = undefined;
          this.priority = undefined;
          this.reverse = undefined;
          this.containerWidth = undefined;
          this.containerHeight = undefined;
          this.attrs = [];
        }
        var _0x4e55ed = _0xa586c0.prototype;
        _0x4e55ed.intersects = function (_0x7754f7) {
          for (var _0x49e8eb = 0; _0x49e8eb < this.attrs.length; _0x49e8eb++) {
            {
              var _0x22de44 = this.attrs[_0x49e8eb];
              if (_0x330e46.Rect.intersection(_0x2fa6a7, _0x22de44.frame, _0x7754f7), _0x2fa6a7.width > 0 && _0x2fa6a7.height > 0) {
                return true;
              }
            }
          }
          return false;
        };
        _0x4e55ed.layout_vertical_item = function (_0x4f71f6, _0x2714ef) {
          if (this.attrs.length <= 0) {
            var _0x4d4989 = new _0x34e969();
            _0x4d4989.indexPath = _0x4f71f6;
            _0x4d4989.frame = new _0x330e46.Rect(this.sectionInset.left, this.offset, _0x2714ef.width, _0x2714ef.height);
            this.attrs.push(_0x4d4989);
            this.containerHeight = Math.max(this.containerHeight, _0x4d4989.frame.height);
            return _0x4d4989;
          }
          var _0x2debb6 = new _0x330e46.Rect();
          _0x2debb6.size = _0x2714ef;
          for (var _0x3210ca = 0; _0x3210ca < this.attrs.length; _0x3210ca++) {
            {
              var _0x2b4eac = this.attrs[_0x3210ca];
              if (_0x2debb6.x = _0x2b4eac.frame.xMax + this.horizontalSpacing, _0x2debb6.y = _0x2b4eac.frame.y, _0x2debb6.xMax <= this.containerWidth - this.sectionInset.right && 0 == this.intersects(_0x2debb6)) {
                var _0x45f8b1 = new _0x34e969();
                _0x45f8b1.indexPath = _0x4f71f6;
                _0x45f8b1.frame = _0x2debb6;
                this.attrs.push(_0x45f8b1);
                this.containerHeight = Math.max(this.containerHeight, _0x45f8b1.frame.yMax - this.offset);
                return _0x45f8b1;
              }
            }
          }
          return null;
        };
        _0x4e55ed.layout_vertical_complet = function () {
          if (this.reverse & _0x162044.HORIZONTAL && (this.attrs = this.attrs.reverse()), this.alignment == _0x2ef575.CENTER) {
            for (var _0x5361cf = 0; _0x5361cf < this.attrs.length; _0x5361cf++) {
              var _0x84d50a = this.attrs[_0x5361cf];
              _0x84d50a.frame.y = this.offset + 0.5 * (this.containerHeight - _0x84d50a.frame.height);
            }
          }
          if (this.alignment == _0x2ef575.BACKWARD) {
            for (var _0x31b6c1 = 0; _0x31b6c1 < this.attrs.length; _0x31b6c1++) {
              var _0x1c0738 = this.attrs[_0x31b6c1];
              _0x1c0738.frame.y = this.offset + (this.containerHeight - _0x1c0738.frame.height);
            }
          }
          var _0x3facfe = this.priority;
          if (_0x3facfe == _0x1e1062.SIDE && 1 == this.attrs.length && (_0x3facfe = _0x1e1062.CENTER), _0x3facfe == _0x1e1062.TOP || _0x3facfe == _0x1e1062.BOTTOM) {
            throw new Error("flow layout priority 配置错误: 不支持的优先级配置");
          }
          if (_0x3facfe == _0x1e1062.CENTER) {
            for (var _0xeadee5 = 0, _0x635a75 = 0; _0x635a75 < this.attrs.length; _0x635a75++) {
              _0xeadee5 += this.attrs[_0x635a75].frame.width;
            }
            _0xeadee5 += (this.attrs.length - 1) * this.horizontalSpacing;
            for (var _0x58590b = 0.5 * (this.containerWidth - _0xeadee5), _0x4448f1 = 0; _0x4448f1 < this.attrs.length; _0x4448f1++) {
              var _0x5e9503 = this.attrs[_0x4448f1];
              _0x5e9503.frame.x = _0x58590b;
              _0x58590b = _0x5e9503.frame.xMax + this.horizontalSpacing;
            }
          }
          if (_0x3facfe == _0x1e1062.LEFT && this.reverse & _0x162044.HORIZONTAL) {
            for (var _0x10ea54 = this.sectionInset.left, _0x6ad9e1 = 0; _0x6ad9e1 < this.attrs.length; _0x6ad9e1++) {
              var _0x5994c5 = this.attrs[_0x6ad9e1];
              _0x5994c5.frame.x = _0x10ea54;
              _0x10ea54 = _0x5994c5.frame.xMax + this.horizontalSpacing;
            }
          }
          if (_0x3facfe == _0x1e1062.RIGHT) {
            {
              for (var _0x562dcf = 0, _0x285150 = 0; _0x285150 < this.attrs.length; _0x285150++) {
                _0x562dcf += this.attrs[_0x285150].frame.width;
              }
              _0x562dcf += (this.attrs.length - 1) * this.horizontalSpacing;
              for (var _0x1e914f = this.containerWidth - _0x562dcf - this.sectionInset.right, _0x544816 = 0; _0x544816 < this.attrs.length; _0x544816++) {
                var _0x343449 = this.attrs[_0x544816];
                _0x343449.frame.x = _0x1e914f;
                _0x1e914f = _0x343449.frame.xMax + this.horizontalSpacing;
              }
            }
          }
          if (_0x3facfe == _0x1e1062.SIDE) {
            for (var _0x539ada = 0, _0x23c7ad = 0; _0x23c7ad < this.attrs.length; _0x23c7ad++) {
              _0x539ada += this.attrs[_0x23c7ad].frame.width;
            }
            for (var _0x5b5559 = (this.containerWidth - this.sectionInset.left - this.sectionInset.right - _0x539ada) / (this.attrs.length - 1), _0x696380 = this.sectionInset.left, _0x21a277 = 0; _0x21a277 < this.attrs.length; _0x21a277++) {
              var _0x1b424e = this.attrs[_0x21a277];
              _0x1b424e.frame.x = _0x696380;
              _0x696380 = _0x1b424e.frame.xMax + _0x5b5559;
            }
          }
        };
        _0x4e55ed.layout_horizontal_item = function (_0x35b58b, _0x32351b) {
          if (this.attrs.length <= 0) {
            var _0x19b0be = new _0x34e969();
            _0x19b0be.indexPath = _0x35b58b;
            _0x19b0be.frame = new _0x330e46.Rect(this.offset, this.sectionInset.top, _0x32351b.width, _0x32351b.height);
            this.attrs.push(_0x19b0be);
            this.containerWidth = Math.max(this.containerWidth, _0x19b0be.frame.width);
            return _0x19b0be;
          }
          var _0x3f8a4e = new _0x330e46.Rect();
          _0x3f8a4e.size = _0x32351b;
          for (var _0x1389c6 = 0; _0x1389c6 < this.attrs.length; _0x1389c6++) {
            var _0x3d154b = this.attrs[_0x1389c6];
            if (_0x3f8a4e.x = _0x3d154b.frame.x, _0x3f8a4e.y = _0x3d154b.frame.yMax + this.verticalSpacing, _0x3f8a4e.yMax <= this.containerHeight - this.sectionInset.bottom && 0 == this.intersects(_0x3f8a4e)) {
              var _0x49451e = new _0x34e969();
              _0x49451e.indexPath = _0x35b58b;
              _0x49451e.frame = _0x3f8a4e;
              this.attrs.push(_0x49451e);
              this.containerWidth = Math.max(this.containerWidth, _0x49451e.frame.xMax - this.offset);
              return _0x49451e;
            }
          }
          return null;
        };
        _0x4e55ed.layout_horizontal_complet = function () {
          if (this.reverse & _0x162044.VERTICAL && (this.attrs = this.attrs.reverse()), this.alignment == _0x2ef575.CENTER) {
            for (var _0x1ac3b3 = 0; _0x1ac3b3 < this.attrs.length; _0x1ac3b3++) {
              var _0x707695 = this.attrs[_0x1ac3b3];
              _0x707695.frame.x = this.offset + 0.5 * (this.containerWidth - _0x707695.frame.width);
            }
          }
          if (this.alignment == _0x2ef575.BACKWARD) {
            for (var _0x3b260a = 0; _0x3b260a < this.attrs.length; _0x3b260a++) {
              var _0x2d9894 = this.attrs[_0x3b260a];
              _0x2d9894.frame.x = this.offset + (this.containerWidth - _0x2d9894.frame.width);
            }
          }
          var _0x2af13e = this.priority;
          if (_0x2af13e == _0x1e1062.SIDE && 1 == this.attrs.length && (_0x2af13e = _0x1e1062.CENTER), _0x2af13e == _0x1e1062.LEFT || _0x2af13e == _0x1e1062.RIGHT) {
            throw new Error("flow layout priority 配置错误: 不支持的优先级配置");
          }
          if (_0x2af13e == _0x1e1062.CENTER) {
            for (var _0x1f91fb = 0, _0x246c8d = 0; _0x246c8d < this.attrs.length; _0x246c8d++) {
              _0x1f91fb += this.attrs[_0x246c8d].frame.height;
            }
            _0x1f91fb += (this.attrs.length - 1) * this.verticalSpacing;
            for (var _0x269939 = 0.5 * (this.containerHeight - _0x1f91fb), _0x2ea2de = 0; _0x2ea2de < this.attrs.length; _0x2ea2de++) {
              {
                var _0x28bf51 = this.attrs[_0x2ea2de];
                _0x28bf51.frame.y = _0x269939;
                _0x269939 = _0x28bf51.frame.yMax + this.verticalSpacing;
              }
            }
          }
          if (_0x2af13e == _0x1e1062.TOP && this.reverse & _0x162044.VERTICAL) {
            for (var _0x2215c8 = this.sectionInset.top, _0x3e0713 = 0; _0x3e0713 < this.attrs.length; _0x3e0713++) {
              var _0x5d3a5b = this.attrs[_0x3e0713];
              _0x5d3a5b.frame.y = _0x2215c8;
              _0x2215c8 = _0x5d3a5b.frame.yMax + this.verticalSpacing;
            }
          }
          if (_0x2af13e == _0x1e1062.BOTTOM) {
            {
              for (var _0x407b68 = 0, _0x5559ab = 0; _0x5559ab < this.attrs.length; _0x5559ab++) {
                {
                  _0x407b68 += this.attrs[_0x5559ab].frame.height;
                }
              }
              _0x407b68 += (this.attrs.length - 1) * this.verticalSpacing;
              for (var _0x3c97ff = this.containerHeight - _0x407b68 - this.sectionInset.bottom, _0x5688b7 = 0; _0x5688b7 < this.attrs.length; _0x5688b7++) {
                var _0x4a0412 = this.attrs[_0x5688b7];
                _0x4a0412.frame.y = _0x3c97ff;
                _0x3c97ff = _0x4a0412.frame.yMax + this.verticalSpacing;
              }
            }
          }
          if (_0x2af13e == _0x1e1062.SIDE) {
            {
              for (var _0x76a3e2 = 0, _0x136dbc = 0; _0x136dbc < this.attrs.length; _0x136dbc++) {
                _0x76a3e2 += this.attrs[_0x136dbc].frame.height;
              }
              for (var _0x2be4bf = (this.containerHeight - this.sectionInset.top - this.sectionInset.bottom - _0x76a3e2) / (this.attrs.length - 1), _0xe81296 = this.sectionInset.top, _0x1ad472 = 0; _0x1ad472 < this.attrs.length; _0x1ad472++) {
                var _0x4d9380 = this.attrs[_0x1ad472];
                _0x4d9380.frame.y = _0xe81296;
                _0xe81296 = _0x4d9380.frame.yMax + _0x2be4bf;
              }
            }
          }
        };
        return _0xa586c0;
      }();
      _0x56231c._RF.pop();
    }
  };
});
System.register("chunks:///_virtual/yx-masonry-flow-layout.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./index.ts", "./yx-collection-view.ts", "./yx-flow-layout.ts"], function (_0x36caa4) {
  var _0x54f52f;
  var _0x300dbe;
  var _0x3a3d06;
  var _0x52719e;
  var _0x5c1cc3;
  var _0x508e54;
  var _0x4ba859;
  var _0x559e84;
  var _0x16abcd;
  return {
    setters: [function (_0x3912d8) {
      _0x54f52f = _0x3912d8.inheritsLoose;
    }, function (_0x22aa50) {
      _0x300dbe = _0x22aa50.cclegacy;
      _0x3a3d06 = _0x22aa50._decorator;
      _0x52719e = _0x22aa50.UITransform;
      _0x5c1cc3 = _0x22aa50.math;
    }, null, function (_0x19f965) {
      _0x508e54 = _0x19f965.YXCollectionView;
      _0x4ba859 = _0x19f965.YXIndexPath;
      _0x559e84 = _0x19f965.YXLayoutAttributes;
    }, function (_0x572904) {
      _0x16abcd = _0x572904.YXFlowLayout;
    }],
    execute: function () {
      _0x300dbe._RF.push({}, "2b51dRMeF9LFoLitCy5wKXY", "yx-masonry-flow-layout", undefined);
      _0x3a3d06.ccclass;
      _0x3a3d06.property;
      _0x36caa4("YXMasonryFlowLayout", function (_0x551347) {
        function _0x4e05c1() {
          for (var _0x6460c2, _0x149a77 = arguments.length, _0x480569 = new Array(_0x149a77), _0x3b227c = 0; _0x3b227c < _0x149a77; _0x3b227c++) {
            _0x480569[_0x3b227c] = arguments[_0x3b227c];
          }
          (_0x6460c2 = _0x551347.call.apply(_0x551347, [this].concat(_0x480569)) || this).divide = 1;
          _0x6460c2.extraVisibleCount = 10;
          _0x6460c2.itemSize = new _0x5c1cc3.Size(100, 100);
          return _0x6460c2;
        }
        _0x54f52f(_0x4e05c1, _0x551347);
        var _0x2e5184 = _0x4e05c1.prototype;
        _0x2e5184.prepare = function (_0x5ede12) {
          _0x5ede12.scrollDirection != _0x508e54.ScrollDirection.HORIZONTAL ? _0x5ede12.scrollDirection != _0x508e54.ScrollDirection.VERTICAL || this._masonry_vertical(_0x5ede12) : this._masonry_horizontal(_0x5ede12);
        };
        _0x2e5184._masonry_horizontal = function (_0x2a77c4) {
          _0x2a77c4.scrollView.horizontal = true;
          _0x2a77c4.scrollView.vertical = false;
          for (var _0x119d08 = _0x2a77c4.node.getComponent(_0x52719e).contentSize.clone(), _0x2c4fa5 = [], _0x5806dd = _0x2a77c4.numberOfSections instanceof Function ? _0x2a77c4.numberOfSections(_0x2a77c4) : _0x2a77c4.numberOfSections, _0x9f268a = 0, _0x27acbe = 0; _0x27acbe < _0x5806dd; _0x27acbe++) {
            var _0x5983cb = _0x2a77c4.numberOfItems instanceof Function ? _0x2a77c4.numberOfItems(_0x27acbe, _0x2a77c4) : _0x2a77c4.numberOfItems;
            var _0xec2d0d = this.verticalSpacing instanceof Function ? this.verticalSpacing(_0x27acbe, this, _0x2a77c4) : this.verticalSpacing;
            var _0x3bad2c = this.horizontalSpacing instanceof Function ? this.horizontalSpacing(_0x27acbe, this, _0x2a77c4) : this.horizontalSpacing;
            var _0x436ab9 = this.sectionInset instanceof Function ? this.sectionInset(_0x27acbe, this, _0x2a77c4) : this.sectionInset;
            var _0x1ce6af = this.divide instanceof Function ? this.divide(_0x27acbe, this, _0x2a77c4) : this.divide;
            var _0x310fb7 = (_0x119d08.height - _0x436ab9.top - _0x436ab9.bottom - (_0x1ce6af - 1) * _0xec2d0d) / _0x1ce6af;
            _0x9f268a += _0x436ab9.left;
            for (var _0x184631 = {}, _0x1d64c6 = 0; _0x1d64c6 < _0x1ce6af; _0x1d64c6++) {
              _0x184631["" + _0x1d64c6] = _0x9f268a;
            }
            for (var _0x5b70c9 = 0; _0x5b70c9 < _0x5983cb; _0x5b70c9++) {
              var _0x60ee64 = new _0x4ba859(_0x27acbe, _0x5b70c9);
              var _0x443e92 = this.itemSize instanceof Function ? this.itemSize(_0x60ee64, this, _0x2a77c4) : this.itemSize;
              _0x443e92.height = _0x310fb7;
              for (var _0x4d5085 = null, _0x504ec0 = null, _0x146015 = null, _0xf49c23 = 0; _0xf49c23 < _0x1ce6af; _0xf49c23++) {
                var _0xeaa395 = _0x184631["" + _0xf49c23];
                (null == _0x4d5085 || _0xeaa395 < _0x4d5085) && (_0x146015 = _0xf49c23, _0x4d5085 = _0xeaa395, _0x504ec0 = _0x436ab9.top + (_0x310fb7 + _0xec2d0d) * _0xf49c23);
              }
              var _0x3643de = new _0x559e84();
              _0x3643de.indexPath = _0x60ee64;
              _0x3643de.frame = new _0x5c1cc3.Rect(_0x4d5085 + _0x3bad2c, _0x504ec0, _0x443e92.width, _0x443e92.height);
              _0x2c4fa5.push(_0x3643de);
              _0x184631["" + _0x146015] = _0x3643de.frame.xMax;
              _0x9f268a = Math.max(_0x9f268a, _0x3643de.frame.xMax);
            }
            _0x9f268a += _0x436ab9.right;
          }
          this.attributes = _0x2c4fa5;
          _0x119d08.width = Math.max(_0x119d08.width, _0x9f268a);
          this.contentSize = _0x119d08;
        };
        _0x2e5184._masonry_vertical = function (_0x7af7b5) {
          _0x7af7b5.scrollView.horizontal = false;
          _0x7af7b5.scrollView.vertical = true;
          for (var _0x5bb0bd = _0x7af7b5.node.getComponent(_0x52719e).contentSize.clone(), _0x3b4f9b = [], _0x364479 = _0x7af7b5.numberOfSections instanceof Function ? _0x7af7b5.numberOfSections(_0x7af7b5) : _0x7af7b5.numberOfSections, _0x4d374c = 0, _0x4f08fd = 0; _0x4f08fd < _0x364479; _0x4f08fd++) {
            var _0x778b58 = _0x7af7b5.numberOfItems instanceof Function ? _0x7af7b5.numberOfItems(_0x4f08fd, _0x7af7b5) : _0x7af7b5.numberOfItems;
            var _0x4fd8e9 = this.verticalSpacing instanceof Function ? this.verticalSpacing(_0x4f08fd, this, _0x7af7b5) : this.verticalSpacing;
            var _0xc5e8a2 = this.horizontalSpacing instanceof Function ? this.horizontalSpacing(_0x4f08fd, this, _0x7af7b5) : this.horizontalSpacing;
            var _0x586c43 = this.sectionInset instanceof Function ? this.sectionInset(_0x4f08fd, this, _0x7af7b5) : this.sectionInset;
            var _0x372115 = this.divide instanceof Function ? this.divide(_0x4f08fd, this, _0x7af7b5) : this.divide;
            var _0x32fe26 = (_0x5bb0bd.width - _0x586c43.left - _0x586c43.right - (_0x372115 - 1) * _0xc5e8a2) / _0x372115;
            _0x4d374c += _0x586c43.top;
            for (var _0x533d1e = {}, _0x5998cf = 0; _0x5998cf < _0x372115; _0x5998cf++) {
              _0x533d1e["" + _0x5998cf] = _0x4d374c;
            }
            for (var _0x2046c4 = 0; _0x2046c4 < _0x778b58; _0x2046c4++) {
              var _0x405c75 = new _0x4ba859(_0x4f08fd, _0x2046c4);
              var _0x46e577 = this.itemSize instanceof Function ? this.itemSize(_0x405c75, this, _0x7af7b5) : this.itemSize;
              _0x46e577.width = _0x32fe26;
              for (var _0x18f22d = null, _0x597900 = null, _0x10b889 = null, _0x591b78 = 0; _0x591b78 < _0x372115; _0x591b78++) {
                var _0x187408 = _0x533d1e["" + _0x591b78];
                (null == _0x597900 || _0x187408 < _0x597900) && (_0x10b889 = _0x591b78, _0x597900 = _0x187408, _0x18f22d = _0x586c43.left + (_0x32fe26 + _0xc5e8a2) * _0x591b78);
              }
              var _0x53be86 = new _0x559e84();
              _0x53be86.indexPath = _0x405c75;
              _0x53be86.frame = new _0x5c1cc3.Rect(_0x18f22d, _0x597900 + _0x4fd8e9, _0x46e577.width, _0x46e577.height);
              _0x3b4f9b.push(_0x53be86);
              _0x533d1e["" + _0x10b889] = _0x53be86.frame.yMax;
              _0x4d374c = Math.max(_0x4d374c, _0x53be86.frame.yMax);
            }
            _0x4d374c += _0x586c43.bottom;
          }
          this.attributes = _0x3b4f9b;
          _0x5bb0bd.height = Math.max(_0x5bb0bd.height, _0x4d374c);
          this.contentSize = _0x5bb0bd;
        };
        return _0x4e05c1;
      }(_0x16abcd));
      _0x300dbe._RF.pop();
    }
  };
});
System.register("chunks:///_virtual/yx-page-view.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./index.ts", "./yx-collection-view.ts", "./yx-flow-layout.ts"], function (_0x10d200) {
  var _0x1318a6;
  var _0x5ac8d3;
  var _0x15997c;
  var _0x41a75b;
  var _0x115750;
  var _0xd3d072;
  var _0x172ce2;
  var _0x262496;
  var _0x34364c;
  var _0x318000;
  var _0x9bf11;
  var _0x290f0a;
  var _0x5dab22;
  return {
    setters: [function (_0x106d6b) {
      _0x1318a6 = _0x106d6b.applyDecoratedDescriptor;
      _0x5ac8d3 = _0x106d6b.inheritsLoose;
      _0x15997c = _0x106d6b.initializerDefineProperty;
      _0x41a75b = _0x106d6b.assertThisInitialized;
      _0x115750 = _0x106d6b.createClass;
    }, function (_0x22268f) {
      _0xd3d072 = _0x22268f.cclegacy;
      _0x172ce2 = _0x22268f._decorator;
      _0x262496 = _0x22268f.Node;
      _0x34364c = _0x22268f.ScrollView;
      _0x318000 = _0x22268f.Component;
    }, null, function (_0x2febe4) {
      _0x9bf11 = _0x2febe4.YXCollectionView;
      _0x290f0a = _0x2febe4.YXIndexPath;
    }, function (_0x578290) {
      _0x5dab22 = _0x578290.YXFlowLayout;
    }],
    execute: function () {
      var _0x824c8b;
      var _0x4ff795;
      var _0x10a459;
      var _0xdceb82;
      var _0x11e86e;
      var _0x4892b6;
      var _0xd2cb6e;
      var _0x3413fd;
      _0xd3d072._RF.push({}, "96dd56aO5BGmZczD/xUC+Z/", "yx-page-view", undefined);
      var _0xcffd11 = _0x172ce2.ccclass;
      var _0x7646b7 = _0x172ce2.property;
      _0x10d200("YXPageView", (_0x824c8b = _0xcffd11("YXPageView"), _0x4ff795 = _0x7646b7({
        tooltip: "滚动方向",
        type: _0x9bf11.ScrollDirection,
        visible: true
      }), _0x10a459 = _0x7646b7({
        tooltip: "是否允许手势滚动",
        visible: true
      }), _0x824c8b(((_0x3413fd = function (_0x428fb6) {
        function _0x41179e() {
          for (var _0x19d427, _0x322b5c = arguments.length, _0x3b8e23 = new Array(_0x322b5c), _0x2043cd = 0; _0x2043cd < _0x322b5c; _0x2043cd++) {
            _0x3b8e23[_0x2043cd] = arguments[_0x2043cd];
          }
          (_0x19d427 = _0x428fb6.call.apply(_0x428fb6, [this].concat(_0x3b8e23)) || this).collectionView = null;
          _0x15997c(_0x19d427, "_scrollDirection", _0x4892b6, _0x41a75b(_0x19d427));
          _0x15997c(_0x19d427, "_scrollEnabled", _0xd2cb6e, _0x41a75b(_0x19d427));
          _0x19d427.pages = [];
          _0x19d427._late_update_pages = false;
          _0x19d427.currentPageForOnScrolling = null;
          _0x19d427.currentPageForOnScrollEnded = null;
          return _0x19d427;
        }
        _0x5ac8d3(_0x41179e, _0x428fb6);
        var _0x38a612 = _0x41179e.prototype;
        _0x38a612.getPages = function () {
          return this.pages;
        };
        _0x38a612.addPage = function (_0x13ae09) {
          this.pages.push(_0x13ae09);
          this._late_update_pages = true;
        };
        _0x38a612.getCurrentPageIndex = function () {
          if (this.collectionView.scrollDirection == _0x9bf11.ScrollDirection.HORIZONTAL) {
            var _0x3f2a8d = this.collectionView.scrollView.getScrollOffset();
            _0x3f2a8d.x = -_0x3f2a8d.x;
            return Math.round(_0x3f2a8d.x / this.collectionView.scrollView.view.width);
          }
          if (this.collectionView.scrollDirection == _0x9bf11.ScrollDirection.VERTICAL) {
            var _0x3d622e = this.collectionView.scrollView.getScrollOffset();
            return Math.round(_0x3d622e.y / this.collectionView.scrollView.view.height);
          }
          return null;
        };
        _0x38a612.setCurrentPageIndex = function (_0x8f70ec, _0x4f7846) {
          {
            undefined === _0x4f7846 && (_0x4f7846 = 0);
            var _0x402514 = new _0x290f0a(0, _0x8f70ec);
            this.collectionView.scrollTo(_0x402514, _0x4f7846);
          }
        };
        _0x38a612.insertPage = function (_0x51a3f6, _0x2533b8) {
          this.pages.splice(_0x2533b8, 0, _0x51a3f6);
          this._late_update_pages = true;
        };
        _0x38a612.removePage = function (_0x1abdbb) {
          for (var _0x5138e9 = 0; _0x5138e9 < this.pages.length; _0x5138e9++) {
            if (_0x1abdbb === this.pages[_0x5138e9]) {
              return void this.removePageAtIndex(_0x5138e9);
            }
          }
        };
        _0x38a612.removePageAtIndex = function (_0xff9a7f) {
          {
            this.pages.splice(_0xff9a7f, 1);
            this._late_update_pages = true;
          }
        };
        _0x38a612.removeAllPages = function () {
          this.pages = [];
          this._late_update_pages = true;
        };
        _0x38a612.markForUpdatePages = function () {
          this.collectionView.reloadData();
          this.onScrolling();
          this.onScrollEnded();
        };
        _0x38a612.onLoad = function () {
          var _0x5c8faa = this;
          this.collectionView = this.node.getComponent(_0x9bf11) || this.node.addComponent(_0x9bf11);
          this.collectionView.recycleInterval = 0;
          this.collectionView.scrollEnabled = this._scrollEnabled;
          this.collectionView.scrollDirection = this._scrollDirection;
          this.collectionView.numberOfItems = function () {
            return _0x5c8faa.pages.length;
          };
          this.collectionView.register("cell", function () {
            {
              var _0x44ce1e = new _0x262496("yx-page");
              _0x44ce1e.layer = _0x5c8faa.collectionView.node.layer;
              return _0x44ce1e;
            }
          });
          this.collectionView.onCellDisplay = function (_0x1223d2, _0x56ed19, _0xbc93f3) {
            _0x1223d2.removeAllChildren();
            _0x5c8faa.pages[_0x56ed19.item].parent = _0x1223d2;
          };
          var _0x5dbade = new _0x5dab22();
          _0x5dbade.pagingEnabled = true;
          _0x5dbade.itemSize = function () {
            return _0x5c8faa.collectionView.scrollView.view.contentSize;
          };
          this.collectionView.layout = _0x5dbade;
          this.collectionView.node.on(_0x34364c.EventType.SCROLLING, function () {
            _0x5c8faa.onScrolling();
          });
          this.collectionView.node.on(_0x34364c.EventType.SCROLL_ENDED, function () {
            _0x5c8faa.onScrollEnded();
          });
        };
        _0x38a612.onDestroy = function () {
          this.pages = [];
        };
        _0x38a612.update = function (_0x5a2e10) {
          this._late_update_pages && (this._late_update_pages = false, this.collectionView.reloadData(), this.onScrolling(), this.onScrollEnded());
        };
        _0x38a612.onScrolling = function () {
          var _0x4cb957 = this.getCurrentPageIndex();
          this.currentPageForOnScrolling != _0x4cb957 && (this.currentPageForOnScrolling = _0x4cb957, this.node.emit(_0x41179e.PAGE_CHANGE_EVENT1, this.currentPageForOnScrolling));
        };
        _0x38a612.onScrollEnded = function () {
          var _0x3959fa = this.getCurrentPageIndex();
          this.currentPageForOnScrollEnded != _0x3959fa && (this.currentPageForOnScrollEnded = _0x3959fa, this.node.emit(_0x41179e.PAGE_CHANGE_EVENT2, this.currentPageForOnScrollEnded));
        };
        _0x115750(_0x41179e, [{
          key: "scrollDirection",
          get: function () {
            return this.collectionView.scrollDirection;
          },
          set: function (_0x3f0a59) {
            this.collectionView.scrollDirection = _0x3f0a59;
            this.collectionView.reloadData();
          }
        }, {
          key: "scrollEnabled",
          get: function () {
            return this.collectionView.scrollEnabled;
          },
          set: function (_0x57cda1) {
            this.collectionView.scrollEnabled = _0x57cda1;
          }
        }]);
        return _0x41179e;
      }(_0x318000)).PAGE_CHANGE_EVENT1 = "YXPageView.PAGE_CHANGE_EVENT1", _0x3413fd.PAGE_CHANGE_EVENT2 = "YXPageView.PAGE_CHANGE_EVENT2", _0x4892b6 = _0x1318a6((_0x11e86e = _0x3413fd).prototype, "_scrollDirection", [_0x4ff795], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return _0x9bf11.ScrollDirection.HORIZONTAL;
        }
      }), _0xd2cb6e = _0x1318a6(_0x11e86e.prototype, "_scrollEnabled", [_0x10a459], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return true;
        }
      }), _0xdceb82 = _0x11e86e)) || _0xdceb82));
      _0xd3d072._RF.pop();
    }
  };
});
System.register("chunks:///_virtual/yx-table-view.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./index.ts", "./yx-collection-view.ts", "./yx-flow-layout.ts"], function (_0xbd9f70) {
  var _0x5787e8;
  var _0xf2c76f;
  var _0x13b457;
  var _0x4de829;
  var _0x4b1c52;
  var _0x4ae435;
  var _0x3d1ed6;
  var _0x494bea;
  var _0x1e3de9;
  var _0x4a16bc;
  var _0x910a5c;
  var _0x2acd41;
  var _0x55afa0;
  var _0x363503;
  var _0x4dc367;
  var _0x592c89;
  return {
    setters: [function (_0x499af9) {
      _0x5787e8 = _0x499af9.applyDecoratedDescriptor;
      _0xf2c76f = _0x499af9.inheritsLoose;
      _0x13b457 = _0x499af9.initializerDefineProperty;
      _0x4de829 = _0x499af9.assertThisInitialized;
    }, function (_0x5bf94e) {
      _0x4b1c52 = _0x5bf94e.cclegacy;
      _0x4ae435 = _0x5bf94e._decorator;
      _0x3d1ed6 = _0x5bf94e.Enum;
      _0x494bea = _0x5bf94e.Prefab;
      _0x1e3de9 = _0x5bf94e.instantiate;
      _0x4a16bc = _0x5bf94e.UITransform;
      _0x910a5c = _0x5bf94e.Component;
      _0x2acd41 = _0x5bf94e.math;
    }, null, function (_0x15c6b7) {
      _0x55afa0 = _0x15c6b7.YXIndexPath;
      _0x363503 = _0x15c6b7.YXCollectionView;
      _0x4dc367 = _0x15c6b7.YXEdgeInsets;
    }, function (_0x1d7dd7) {
      _0x592c89 = _0x1d7dd7.YXFlowLayout;
    }],
    execute: function () {
      var _0x4797d9;
      var _0x888b9b;
      var _0x6efafb;
      var _0x4bada1;
      var _0x18bee5;
      var _0x6b7d99;
      var _0x2de7e4;
      var _0x45f660;
      var _0x164b61;
      var _0x3153bd;
      var _0xe98cc;
      var _0x48beb8;
      var _0x3f8854;
      var _0x21bfe0;
      var _0x1f04ec;
      var _0x142d3b;
      var _0x292c79;
      var _0xd8ea62;
      _0x4b1c52._RF.push({}, "4fddd4eyllKcJchIPJqXAF+", "yx-table-view", undefined);
      var _0x1a9454 = _0x4ae435.ccclass;
      var _0x5e508a = _0x4ae435.property;
      var _0x2330c8 = function (_0x59b47a) {
        {
          _0x59b47a[_0x59b47a.LEFT = 0] = "LEFT";
          _0x59b47a[_0x59b47a.CENTER = 1] = "CENTER";
          _0x59b47a[_0x59b47a.RIGHT = 2] = "RIGHT";
          return _0x59b47a;
        }
      }(_0x2330c8 || {});
      _0x3d1ed6(_0x2330c8);
      var _0x3a4928 = function (_0x3a903e) {
        _0x3a903e[_0x3a903e.USE_PREFAB_SIZE = 0] = "USE_PREFAB_SIZE";
        _0x3a903e[_0x3a903e.CUSTOM = 1] = "CUSTOM";
        return _0x3a903e;
      }(_0x3a4928 || {});
      _0x3d1ed6(_0x3a4928);
      _0xbd9f70("YXTableView", (_0x4797d9 = _0x1a9454("YXTableView"), _0x888b9b = _0x5e508a({
        tooltip: "cell 节点预制体",
        type: _0x494bea,
        visible: true
      }), _0x6efafb = _0x5e508a({
        tooltip: "如何配置 cell 节点大小\nUSE_PREFAB_SIZE: 自动读取预制体大小\nCUSTOM: 自定义节点大小",
        type: _0x3a4928,
        visible: true
      }), _0x4bada1 = _0x5e508a({
        tooltip: "cell 节点大小",
        visible: function () {
          return this.itemSizeMode == _0x3a4928.CUSTOM;
        }
      }), _0x18bee5 = _0x5e508a({
        tooltip: "cell 节点对齐方式",
        type: _0x2330c8,
        visible: true
      }), _0x6b7d99 = _0x5e508a({
        tooltip: "cell 节点之间间距",
        visible: true
      }), _0x2de7e4 = _0x5e508a({
        tooltip: "顶部最大偏移距离",
        visible: true
      }), _0x45f660 = _0x5e508a({
        tooltip: "底部最大偏移距离",
        visible: true
      }), _0x4797d9(((_0xd8ea62 = function (_0x568b7e) {
        function _0x59d895() {
          for (var _0xf1e75e, _0x39fc1e = arguments.length, _0x26b865 = new Array(_0x39fc1e), _0x19c64a = 0; _0x19c64a < _0x39fc1e; _0x19c64a++) {
            _0x26b865[_0x19c64a] = arguments[_0x19c64a];
          }
          _0xf1e75e = _0x568b7e.call.apply(_0x568b7e, [this].concat(_0x26b865)) || this;
          _0x13b457(_0xf1e75e, "cellPrefab", _0xe98cc, _0x4de829(_0xf1e75e));
          _0x13b457(_0xf1e75e, "itemSizeMode", _0x48beb8, _0x4de829(_0xf1e75e));
          _0x13b457(_0xf1e75e, "itemSize", _0x3f8854, _0x4de829(_0xf1e75e));
          _0x13b457(_0xf1e75e, "alignment", _0x21bfe0, _0x4de829(_0xf1e75e));
          _0x13b457(_0xf1e75e, "spacing", _0x1f04ec, _0x4de829(_0xf1e75e));
          _0x13b457(_0xf1e75e, "top", _0x142d3b, _0x4de829(_0xf1e75e));
          _0x13b457(_0xf1e75e, "bottom", _0x292c79, _0x4de829(_0xf1e75e));
          _0xf1e75e.collectionView = null;
          _0xf1e75e.data = null;
          _0xf1e75e.updateCellCall = null;
          return _0xf1e75e;
        }
        _0xf2c76f(_0x59d895, _0x568b7e);
        var _0x4fbd3e = _0x59d895.prototype;
        _0x4fbd3e.setData = function (_0x3c34ad) {
          this.data = _0x3c34ad;
          this.reloadCollectionViewIfNeeds();
        };
        _0x4fbd3e.onCellDisplay = function (_0x2a018d) {
          this.updateCellCall = _0x2a018d;
          this.reloadCollectionViewIfNeeds();
        };
        _0x4fbd3e.scrollTo = function (_0x28c9ed) {
          var _0x397f5d = new _0x55afa0(0, _0x28c9ed);
          this.collectionView.scrollTo(_0x397f5d);
        };
        _0x4fbd3e.onLoad = function () {
          var _0x2a2e5d = this;
          this.collectionView = this.node.getComponent(_0x363503) || this.node.addComponent(_0x363503);
          this.collectionView.register("cell", function () {
            return _0x1e3de9(_0x2a2e5d.cellPrefab);
          });
          this.collectionView.scrollDirection = _0x363503.ScrollDirection.VERTICAL;
          this.collectionView.numberOfItems = function () {
            return _0x2a2e5d.data.length;
          };
          this.collectionView.onCellDisplay = function (_0x1dd352, _0x482787, _0x3e4c1f) {
            _0x2a2e5d.updateCellCall && _0x2a2e5d.updateCellCall(_0x1dd352, _0x2a2e5d.data[_0x482787.item], _0x482787.item);
          };
          var _0x122f1f = new _0x592c89();
          var _0x52bb17 = this.itemSize;
          this.itemSizeMode == _0x3a4928.USE_PREFAB_SIZE && (_0x52bb17 = _0x1e3de9(this.cellPrefab).getComponent(_0x4a16bc).contentSize);
          _0x122f1f.itemSize = _0x52bb17;
          var _0x50741d = 0;
          this.alignment == _0x59d895.Alignment.LEFT && (_0x50741d = 0);
          this.alignment == _0x59d895.Alignment.CENTER && (_0x50741d = 0.5 * (this.collectionView.scrollView.view.width - _0x52bb17.width));
          this.alignment == _0x59d895.Alignment.RIGHT && (_0x50741d = 1 * (this.collectionView.scrollView.view.width - _0x52bb17.width));
          _0x122f1f.sectionInset = new _0x4dc367(this.top, _0x50741d, this.bottom, 0);
          _0x122f1f.verticalSpacing = this.spacing;
          this.collectionView.layout = _0x122f1f;
        };
        _0x4fbd3e.onDestroy = function () {
          this.data = [];
        };
        _0x4fbd3e.reloadCollectionViewIfNeeds = function () {
          null != this.data && this.collectionView.reloadData();
        };
        return _0x59d895;
      }(_0x910a5c)).Alignment = _0x2330c8, _0xe98cc = _0x5787e8((_0x3153bd = _0xd8ea62).prototype, "cellPrefab", [_0x888b9b], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x48beb8 = _0x5787e8(_0x3153bd.prototype, "itemSizeMode", [_0x6efafb], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return _0x3a4928.CUSTOM;
        }
      }), _0x3f8854 = _0x5787e8(_0x3153bd.prototype, "itemSize", [_0x4bada1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new _0x2acd41.Size(100, 100);
        }
      }), _0x21bfe0 = _0x5787e8(_0x3153bd.prototype, "alignment", [_0x18bee5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return _0x2330c8.CENTER;
        }
      }), _0x1f04ec = _0x5787e8(_0x3153bd.prototype, "spacing", [_0x6b7d99], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _0x142d3b = _0x5787e8(_0x3153bd.prototype, "top", [_0x2de7e4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _0x292c79 = _0x5787e8(_0x3153bd.prototype, "bottom", [_0x45f660], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _0x164b61 = _0x3153bd)) || _0x164b61));
      _0x4b1c52._RF.pop();
    }
  };
});
System.register("chunks:///_virtual/ZipLoader.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], function (_0x37c50a) {
  var _0x380b5e;
  var _0x481370;
  var _0x5af09d;
  var _0x537e8a;
  var _0x264fdb;
  return {
    setters: [function (_0x1a82e8) {
      _0x380b5e = _0x1a82e8.asyncToGenerator;
      _0x481370 = _0x1a82e8.regeneratorRuntime;
      _0x5af09d = _0x1a82e8.createClass;
    }, function (_0x5c48e0) {
      _0x537e8a = _0x5c48e0.cclegacy;
      _0x264fdb = _0x5c48e0.assetManager;
    }],
    execute: function () {
      {
        _0x537e8a._RF.push({}, "f5002qVgdxARJRUKlJrR0aC", "ZipLoader", undefined);
        var _0x5ae17f = new Map();
        var _0x488147 = new Map();
        var _0x31b1d7 = _0x264fdb.loadBundle.bind(_0x264fdb);
        _0x264fdb.loadBundle = function (_0x3d3d0b) {
          for (var _0x2e09e1 = arguments.length, _0x16f3eb = new Array(_0x2e09e1 > 1 ? _0x2e09e1 - 1 : 0), _0x21947d = 1; _0x21947d < _0x2e09e1; _0x21947d++) {
            _0x16f3eb[_0x21947d - 1] = arguments[_0x21947d];
          }
          var _0x51f336 = window.zipBundle || [];
          _0x51f336.indexOf(_0x3d3d0b) > -1 ? _0x2fd4b3.ins.loadZip(window.__remoteUrl__ + "remote/" + _0x3d3d0b).then(function () {
            _0x31b1d7.apply(undefined, [_0x3d3d0b].concat(_0x16f3eb));
          }) : _0x31b1d7.apply(undefined, [_0x3d3d0b].concat(_0x16f3eb));
        };
        var _0x2fd4b3 = _0x37c50a("default", function () {
          function _0x3b46ac() {
            this.init();
          }
          var _0x3c026a = _0x3b46ac.prototype;
          _0x3c026a.downloadZip = function (_0x5a61a7) {
            return new Promise(function (_0x25da72) {
              _0x264fdb.downloader.downloadFile(_0x5a61a7 + ".zip", {
                xhrResponseType: "arraybuffer"
              }, null, function (_0x578680, _0x179bae) {
                _0x25da72(_0x179bae);
              });
            });
          };
          _0x3c026a.loadZip = function () {
            var _0x5dead2 = _0x380b5e(_0x481370().mark(function _0x4b2fa7(_0x503fbc) {
              var _0x455956;
              var _0x5cc59b;
              return _0x481370().wrap(function (_0x2f8651) {
                for (;;) {
                  switch (_0x2f8651.prev = _0x2f8651.next) {
                    case 0:
                      _0x455956 = window.JSZip();
                      _0x2f8651.next = 3;
                      return this.downloadZip(_0x503fbc);
                    case 3:
                      _0x5cc59b = _0x2f8651.sent;
                      _0x2f8651.next = 6;
                      return _0x455956.loadAsync(_0x5cc59b);
                    case 6:
                      _0x2f8651.sent.forEach(function (_0x14ec09, _0x5aa3cb) {
                        {
                          _0x5aa3cb.dir || _0x5ae17f.set(_0x503fbc + "/" + _0x14ec09, _0x5aa3cb);
                        }
                      });
                    case 8:
                    case "end":
                      return _0x2f8651.stop();
                  }
                }
              }, _0x4b2fa7, this);
            }));
            return function (_0x8cc3cd) {
              return _0x5dead2.apply(this, arguments);
            };
          }();
          _0x3c026a.init = function () {
            var _0x3c1ac3 = Object.getOwnPropertyDescriptor(XMLHttpRequest.prototype, "response");
            Object.defineProperty(XMLHttpRequest.prototype, "response", {
              get: function () {
                if (this.zipCacheUrl) {
                  var _0xddecb9 = _0x488147.get(this.zipCacheUrl);
                  return "json" === this.responseType ? JSON.parse(_0xddecb9) : _0xddecb9;
                }
                return _0x3c1ac3.get.call(this);
              },
              set: function (_0x56ffb2) {},
              configurable: true
            });
            var _0x2caca2 = XMLHttpRequest.prototype.open;
            XMLHttpRequest.prototype.open = function (_0x1e1ba1, _0x217ab2, _0x2ea1f5, _0x49b1bb, _0x3be7e5) {
              _0x5ae17f.has(_0x217ab2) && (this.zipCacheUrl = _0x217ab2);
              return _0x2caca2.apply(this, arguments);
            };
            var _0x5d8dd5 = XMLHttpRequest.prototype.send;
            XMLHttpRequest.prototype.send = _0x380b5e(_0x481370().mark(function _0x27ab68(_0x443658) {
              var _0x5ed949;
              var _0x382146;
              var _0x5c1e99;
              var _0x3158b4 = arguments;
              return _0x481370().wrap(function (_0x5c7aff) {
                for (;;) {
                  switch (_0x5c7aff.prev = _0x5c7aff.next) {
                    case 0:
                      if (!this.zipCacheUrl) {
                        _0x5c7aff.next = 16;
                        break;
                      }
                      if (_0x488147.has(this.zipCacheUrl)) {
                        _0x5c7aff.next = 14;
                        break;
                      }
                      if (_0x5ed949 = _0x5ae17f.get(this.zipCacheUrl), "json" !== this.responseType) {
                        _0x5c7aff.next = 10;
                        break;
                      }
                      _0x5c7aff.next = 6;
                      return _0x5ed949.async("text");
                    case 6:
                      _0x382146 = _0x5c7aff.sent;
                      _0x488147.set(this.zipCacheUrl, _0x382146);
                      _0x5c7aff.next = 14;
                      break;
                    case 10:
                      _0x5c7aff.next = 12;
                      return _0x5ed949.async(this.responseType);
                    case 12:
                      _0x5c1e99 = _0x5c7aff.sent;
                      _0x488147.set(this.zipCacheUrl, _0x5c1e99);
                    case 14:
                      this.onload();
                      return _0x5c7aff.abrupt("return");
                    case 16:
                      return _0x5c7aff.abrupt("return", _0x5d8dd5.apply(this, _0x3158b4));
                    case 17:
                    case "end":
                      return _0x5c7aff.stop();
                  }
                }
              }, _0x27ab68, this);
            }));
          };
          _0x5af09d(_0x3b46ac, null, [{
            key: "ins",
            get: function () {
              this._ins || (this._ins = new _0x3b46ac());
              return this._ins;
            }
          }]);
          return _0x3b46ac;
        }());
        _0x2fd4b3._ins = undefined;
        _0x537e8a._RF.pop();
      }
    }
  };
});
(function (_0x886bd4) {
  _0x886bd4("virtual:///prerequisite-imports/main", "chunks:///_virtual/main");
})(function (_0xce3b00, _0x5663b4) {
  System.register(_0xce3b00, [_0x5663b4], function (_0x5f09d3, _0x113e8b) {
    return {
      setters: [function (_0x12ec72) {
        var _0xff4879 = {};
        for (var _0x4aa985 in _0x12ec72) {
          if (_0x4aa985 !== "default" && _0x4aa985 !== "__esModule") {
            _0xff4879[_0x4aa985] = _0x12ec72[_0x4aa985];
          }
        }
        _0x5f09d3(_0xff4879);
      }],
      execute: function () {}
    };
  });
});