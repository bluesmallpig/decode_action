//Sat Jan 18 2025 03:26:16 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("新江北");
const notify = $.isNode() ? require("../sendNotify") : "";
(() => {
  function b(a4) {
    {
      b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (a6) {
        {
          return typeof a6;
        }
      } : function (a6) {
        {
          return a6 && "function" == typeof Symbol && a6.constructor === Symbol && a6 !== Symbol.prototype ? "symbol" : typeof a6;
        }
      };
      return b(a4);
    }
  }
  function c(a4, a5) {
    {
      var a7 = "undefined" != typeof Symbol && a4[Symbol.iterator] || a4["@@iterator"];
      if (!a7) {
        {
          if (Array.isArray(a4) || (a7 = d(a4)) || a5 && a4 && "number" == typeof a4.length) {
            {
              a7 && (a4 = a7);
              var a8 = 0;
              var a9 = function () {};
              return {
                s: a9,
                n: function () {
                  {
                    var ag = {
                      done: true
                    };
                    return a8 >= a4.length ? ag : {
                      done: false,
                      value: a4[a8++]
                    };
                  }
                },
                e: function (ag) {
                  {
                    throw ag;
                  }
                },
                f: a9
              };
            }
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
      }
      var aa;
      var ab = true;
      var ac = false;
      return {
        s: function () {
          {
            a7 = a7.call(a4);
          }
        },
        n: function () {
          {
            var ai = a7.next();
            ab = ai.done;
            return ai;
          }
        },
        e: function (ag) {
          ac = true;
          aa = ag;
        },
        f: function () {
          {
            try {
              {
                ab || null == a7.return || a7.return();
              }
            } finally {
              {
                if (ac) {
                  throw aa;
                }
              }
            }
          }
        }
      };
    }
  }
  function d(a4, a5) {
    {
      if (a4) {
        {
          if ("string" == typeof a4) {
            return f(a4, a5);
          }
          var a7 = {}.toString.call(a4).slice(8, -1);
          "Object" === a7 && a4.constructor && (a7 = a4.constructor.name);
          return "Map" === a7 || "Set" === a7 ? Array.from(a4) : "Arguments" === a7 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a7) ? f(a4, a5) : undefined;
        }
      }
    }
  }
  function f(a4, a5) {
    {
      (null == a5 || a5 > a4.length) && (a5 = a4.length);
      for (var a7 = 0, a8 = Array(a5); a7 < a5; a7++) {
        a8[a7] = a4[a7];
      }
      return a8;
    }
  }
  function g() {
    "use strict";

    var a4 = {
      CPpMl: "next",
      WrOqp: function (aB, aC) {
        return aB(aC);
      },
      hnClJ: function (aB, aC) {
        return aB === aC;
      },
      urdZI: function (aB, aC) {
        return aB(aC);
      },
      tnnSv: "try statement without catch or finally",
      miiRV: function (aB, aC) {
        return aB(aC);
      },
      BluUk: function (aB, aC) {
        return aB !== aC;
      },
      KNHVh: "QEkfw",
      pSxYJ: "throw",
      osCFX: function (aB, aC) {
        return aB | aC;
      },
      DxQrQ: function (aB, aC) {
        return aB * aC;
      },
      ytQHm: function (aB, aC) {
        return aB | aC;
      },
      QdLtu: function (aB, aC) {
        return aB & aC;
      },
      oCSbH: function (aB, aC, aD, aE) {
        return aB(aC, aD, aE);
      },
      dQuDl: function (aB, aC) {
        return aB === aC;
      },
      GqGvW: "ifLhI",
      uhApr: function (aB, aC) {
        return aB === aC;
      },
      duPYL: "Xdvys",
      DQOyj: "nAfZz",
      BkUlO: function (aB, aC) {
        return aB === aC;
      },
      YKmod: "continue",
      bzakV: "return",
      yCcTa: "end",
      kDbPZ: "string",
      ekEQZ: function (aB, aC, aD) {
        return aB(aC, aD);
      },
      VLTtv: "Object",
      KrWAp: "Set",
      fOsaV: function (aB, aC) {
        return aB === aC;
      },
      zqgac: "ohFTj",
      DUCzr: function (aB, aC, aD, aE) {
        return aB(aC, aD, aE);
      },
      LUyRF: "LfLFb",
      vjECS: function (aB) {
        return aB();
      },
      yMUoT: "FAkoU",
      rqrLJ: "oOijx",
      KNVcF: function (aB) {
        return aB();
      },
      KEFVz: function (aB, aC) {
        return aB === aC;
      },
      iJHqn: "iucDN",
      UNeHx: function (aB, aC) {
        return aB(aC);
      },
      VpgKN: function (aB, aC) {
        return aB == aC;
      },
      JSwVh: function (aB) {
        return aB();
      },
      Gwhwj: "IYtep",
      VPgIT: function (aB, aC) {
        return aB < aC;
      },
      mPYzM: "dCvuk",
      PICCP: "bVYLa",
      RTlUw: "sVfYE",
      dWInU: function (aB, aC, aD, aE) {
        return aB(aC, aD, aE);
      },
      DvwHB: "HGmnR",
      IDaJi: "__await",
      SchDf: function (aB, aC, aD, aE) {
        return aB(aC, aD, aE);
      },
      TChZz: function (aB, aC) {
        return aB in aC;
      },
      BUaXz: "SGIWG",
      ToSPz: function (aB, aC, aD, aE) {
        return aB(aC, aD, aE);
      },
      hsoty: function (aB, aC) {
        return aB > aC;
      },
      ftUzh: function (aB, aC) {
        return aB(aC);
      },
      XzSXM: function (aB, aC) {
        return aB < aC;
      },
      sIAXH: "✅ Utils加载成功, 请继续",
      uviwv: function (aB, aC) {
        return aB * aC;
      },
      gyNNU: function (aB, aC) {
        return aB === aC;
      },
      tdTXm: "TpmHx",
      hwUsB: function (aB, aC) {
        return aB(aC);
      },
      OXaSh: "Generator is already running",
      XhMSQ: "gptHm",
      CoiZK: "OSPHt",
      awgQx: "lUyxY",
      GZEqA: "KEHvC",
      Tngiv: function (aB, aC) {
        return aB === aC;
      },
      dnjwq: "mXVxg",
      kvrrG: "zRYJl",
      nnLuQ: function (aB, aC) {
        return aB === aC;
      },
      MdSPj: function (aB, aC) {
        return aB === aC;
      },
      izAmX: function (aB, aC) {
        return aB === aC;
      },
      Wjzpa: "normal",
      iZjJe: function (aB, aC) {
        return aB !== aC;
      },
      aCFwZ: "HbaNI",
      LpCph: "bURGm",
      BoWrg: function (aB, aC) {
        return aB === aC;
      },
      NSNFN: function (aB, aC) {
        return aB === aC;
      },
      yYcIl: function (aB, aC) {
        return aB !== aC;
      },
      thJSc: "taZiH",
      sJuDM: function (aB, aC, aD, aE, aF) {
        return aB(aC, aD, aE, aF);
      },
      uLduo: function (aB, aC) {
        return aB === aC;
      },
      TntzK: "oGEQS",
      TuEtJ: "illegal catch attempt",
      fLouV: function (aB, aC) {
        return aB & aC;
      },
      UUExU: "RcBUr",
      kmWLH: function (aB, aC) {
        return aB === aC;
      },
      hbMrW: "BZZHM",
      AAhau: "DXEVw",
      pmdWo: "function",
      GrLXK: function (aB, aC) {
        return aB !== aC;
      },
      kSbHS: "XsZEb",
      bmHpe: function (aB, aC) {
        return aB(aC);
      },
      iYuLX: function (aB, aC) {
        return aB(aC);
      },
      sPqRs: function (aB, aC) {
        return aB === aC;
      },
      COOPO: "dCcWv",
      fCvPE: "bMAZZ",
      goLNF: function (aB, aC) {
        return aB == aC;
      },
      QDdXa: function (aB, aC) {
        return aB == aC;
      },
      oVozl: function (aB, aC) {
        return aB === aC;
      },
      lAbOc: "Map",
      DeteG: "Arguments",
      lCdPU: "EMbfv",
      wnEdO: "mHKfC",
      uWRnp: function (aB, aC) {
        return aB === aC;
      },
      URFdx: function (aB, aC) {
        return aB instanceof aC;
      },
      tMpWS: function (aB, aC) {
        return aB === aC;
      },
      dcGBU: function (aB, aC) {
        return aB !== aC;
      },
      hyMqj: "lCbhc",
      kXGny: "ZBOMp",
      aukkW: function (aB, aC) {
        return aB < aC;
      },
      zSqyY: "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQD6XO7e9YeAOs+cFqwa7ETJ+WXizPqQeXv68i5vqw9pFREsrqiBTRcg7wB0RIp3rJkDpaeVJLsZqYm5TW7FWx/iOiXFc+zCPvaKZric2dXCw27EvlH5rq+zwIPDAJHGAfnn1nmQH7wR3PCatEIb8pz5GFlTHMlluw4ZYmnOwg+thwIDAQAB",
      gQBZw: function (aB) {
        return aB();
      },
      RLfJA: "client_id=",
      NFJkO: "&phone_number=",
      UmnbF: function (aB, aC) {
        return aB in aC;
      },
      kPLZw: "uSUgV",
      fgpVR: "PFAZJ",
      bnIog: function (aB, aC) {
        return aB >= aC;
      },
      RNGyp: "xDZxz",
      qTGPY: function (aB, aC) {
        return aB === aC;
      },
      vPNYA: "root",
      DMWHs: function (aB, aC) {
        return aB === aC;
      },
      YBdEH: "ETqOh",
      tSHof: "catchLoc",
      LKfdF: "finallyLoc",
      qXijU: function (aB, aC) {
        return aB && aC;
      },
      OaLlN: "yIhae",
      bPQhI: "AxuLj",
      Hmtme: function (aB, aC) {
        return aB < aC;
      },
      LONok: function (aB, aC, aD) {
        return aB(aC, aD);
      },
      ANLxE: function (aB, aC) {
        return aB === aC;
      },
      AtdvL: "IvPxM",
      Fgiaq: function (aB, aC) {
        return aB === aC;
      },
      rsJCQ: function (aB, aC) {
        return aB(aC);
      },
      WdDdF: "xoliG",
      gesyv: "NwXEB",
      nCagv: function (aB, aC) {
        return aB === aC;
      },
      vdgJc: function (aB, aC) {
        return aB === aC;
      },
      KauHc: "break",
      jnuNk: function (aB, aC) {
        return aB === aC;
      },
      tiEpf: function (aB, aC) {
        return aB === aC;
      },
      clVJG: function (aB, aC) {
        return aB !== aC;
      },
      GNcBM: "lWRQR",
      PSUkh: function (aB, aC) {
        return aB - aC;
      },
      xUwkQ: function (aB, aC) {
        return aB >= aC;
      },
      wRmoQ: function (aB, aC) {
        return aB !== aC;
      },
      ZllTd: function (aB, aC) {
        return aB === aC;
      },
      LpBWY: function (aB, aC) {
        return aB === aC;
      },
      yweuf: function (aB, aC) {
        return aB !== aC;
      },
      pJMHT: "SDUGa",
      VqUAe: "HXNvF",
      EtakS: function (aB, aC) {
        return aB === aC;
      }
    };
    g = function () {
      {
        return a6;
      }
    };
    var a5;
    var a6 = {};
    var a7 = Object.prototype;
    var a8 = a7.hasOwnProperty;
    var a9 = Object.defineProperty || function (aB, aC, aD) {
      {
        aB[aC] = aD.value;
      }
    };
    var aa = "function" == typeof Symbol ? Symbol : {};
    var ab = aa.iterator || "@@iterator";
    var ac = aa.asyncIterator || "@@asyncIterator";
    var ad = aa.toStringTag || "@@toStringTag";
    function ae(aB, aC, aD) {
      {
        var aF = {
          value: aD,
          enumerable: true,
          configurable: true,
          writable: true
        };
        Object.defineProperty(aB, aC, aF);
        return aB[aC];
      }
    }
    try {
      {
        ae({}, "");
      }
    } catch (aC) {
      {
        ae = function (aE, aF, aG) {
          {
            return aE[aF] = aG;
          }
        };
      }
    }
    function af(aE, aF, aG, aH) {
      {
        var aI = aF && aF.prototype instanceof am ? aF : am;
        var aJ = Object.create(aI.prototype);
        var aK = new az(aH || []);
        a9(aJ, "_invoke", {
          value: av(aE, aG, aK)
        });
        return aJ;
      }
    }
    function ag(aE, aF, aG) {
      {
        try {
          {
            return {
              type: "normal",
              arg: aE.call(aF, aG)
            };
          }
        } catch (aL) {
          {
            var aI = {
              type: "throw",
              arg: aL
            };
            return aI;
          }
        }
      }
    }
    a6.wrap = af;
    var ah = "suspendedStart";
    var ai = "suspendedYield";
    var aj = "executing";
    var ak = "completed";
    var al = {};
    function am() {}
    function an() {}
    function ao() {}
    var ap = {};
    ae(ap, ab, function () {
      {
        return this;
      }
    });
    var aq = Object.getPrototypeOf;
    var ar = aq && aq(aq(aA([])));
    ar && ar !== a7 && a8.call(ar, ab) && (ap = ar);
    ao.prototype = am.prototype = Object.create(ap);
    var as = ao.prototype;
    function at(aE) {
      {
        ["next", "throw", "return"].forEach(function (aI) {
          {
            ae(aE, aI, function (aK) {
              {
                return this._invoke(aI, aK);
              }
            });
          }
        });
      }
    }
    function au(aE, aF) {
      {
        function aI(aJ, aK, aL, aM) {
          {
            var aO = ag(aE[aJ], aE, aK);
            if ("throw" !== aO.type) {
              {
                var aP = aO.arg;
                var aQ = aP.value;
                return aQ && "object" == b(aQ) && a8.call(aQ, "__await") ? aF.resolve(aQ.__await).then(function (aS) {
                  aI("next", aS, aL, aM);
                }, function (aS) {
                  {
                    aI("throw", aS, aL, aM);
                  }
                }) : aF.resolve(aQ).then(function (aS) {
                  {
                    aP.value = aS;
                    aL(aP);
                  }
                }, function (aS) {
                  {
                    return aI("throw", aS, aL, aM);
                  }
                });
              }
            }
            aM(aO.arg);
          }
        }
        var aH;
        a9(this, "_invoke", {
          value: function (aJ, aK) {
            {
              function aM() {
                {
                  return new aF(function (aP, aQ) {
                    {
                      aI(aJ, aK, aP, aQ);
                    }
                  });
                }
              }
              return aH = aH ? aH.then(aM, aM) : aM();
            }
          }
        });
      }
    }
    function av(aE, aF, aG) {
      {
        var aI = ah;
        return function (aJ, aK) {
          {
            if (aI === aj) {
              throw Error("Generator is already running");
            }
            if (aI === ak) {
              {
                if ("throw" === aJ) {
                  throw aK;
                }
                var aM = {
                  value: a5,
                  done: true
                };
                return aM;
              }
            }
            for (aG.method = aJ, aG.arg = aK;;) {
              {
                var aN = aG.delegate;
                if (aN) {
                  {
                    var aO = aw(aN, aG);
                    if (aO) {
                      {
                        if (aO === al) {
                          continue;
                        }
                        return aO;
                      }
                    }
                  }
                }
                if ("next" === aG.method) {
                  aG.sent = aG._sent = aG.arg;
                } else {
                  if ("throw" === aG.method) {
                    if (aI === ah) {
                      throw aI = ak, aG.arg;
                    }
                    aG.dispatchException(aG.arg);
                  } else {
                    "return" === aG.method && aG.abrupt("return", aG.arg);
                  }
                }
                aI = aj;
                var aP = ag(aE, aF, aG);
                if ("normal" === aP.type) {
                  {
                    if (aI = aG.done ? ak : ai, aP.arg === al) {
                      continue;
                    }
                    var aQ = {
                      value: aP.arg,
                      done: aG.done
                    };
                    return aQ;
                  }
                }
                "throw" === aP.type && (aI = ak, aG.method = "throw", aG.arg = aP.arg);
              }
            }
          }
        };
      }
    }
    function aw(aE, aF) {
      {
        var aK = aF.method;
        var aL = aE.iterator[aK];
        if (aL === a5) {
          aF.delegate = null;
          "throw" === aK && aE.iterator.return && (aF.method = "return", aF.arg = a5, aw(aE, aF), "throw" === aF.method) || "return" !== aK && (aF.method = "throw", aF.arg = new TypeError("The iterator does not provide a '" + aK + "' method"));
          return al;
        }
        var aJ = ag(aL, aE.iterator, aF.arg);
        if ("throw" === aJ.type) {
          aF.method = "throw";
          aF.arg = aJ.arg;
          aF.delegate = null;
          return al;
        }
        var aM = aJ.arg;
        return aM ? aM.done ? (aF[aE.resultName] = aM.value, aF.next = aE.nextLoc, "return" !== aF.method && (aF.method = "next", aF.arg = a5), aF.delegate = null, al) : aM : (aF.method = "throw", aF.arg = new TypeError("iterator result is not an object"), aF.delegate = null, al);
      }
    }
    function ax(aE) {
      {
        var aG = {
          tryLoc: aE[0]
        };
        1 in aE && (aG.catchLoc = aE[1]);
        2 in aE && (aG.finallyLoc = aE[2], aG.afterLoc = aE[3]);
        this.tryEntries.push(aG);
      }
    }
    function ay(aE) {
      {
        var aF = aE.completion || {};
        aF.type = "normal";
        delete aF.arg;
        aE.completion = aF;
      }
    }
    function az(aE) {
      {
        var aF = {
          tryLoc: "root"
        };
        this.tryEntries = [aF];
        aE.forEach(ax, this);
        this.reset(true);
      }
    }
    function aA(aE) {
      {
        if (aE || "" === aE) {
          {
            var aG = aE[ab];
            if (aG) {
              return aG.call(aE);
            }
            if ("function" == typeof aE.next) {
              return aE;
            }
            if (!isNaN(aE.length)) {
              {
                var aH = -1;
                var aI = function aL() {
                  {
                    for (; ++aH < aE.length;) {
                      if (a8.call(aE, aH)) {
                        aL.value = aE[aH];
                        aL.done = false;
                        return aL;
                      }
                    }
                    aL.value = a5;
                    aL.done = true;
                    return aL;
                  }
                };
                return aI.next = aI;
              }
            }
          }
        }
        throw new TypeError(b(aE) + " is not iterable");
      }
    }
    an.prototype = ao;
    a9(as, "constructor", {
      value: ao,
      configurable: true
    });
    a9(ao, "constructor", {
      value: an,
      configurable: true
    });
    an.displayName = ae(ao, ad, "GeneratorFunction");
    a6.isGeneratorFunction = function (aE) {
      {
        var aF = "function" == typeof aE && aE.constructor;
        return !!aF && (aF === an || "GeneratorFunction" === (aF.displayName || aF.name));
      }
    };
    a6.mark = function (aE) {
      {
        Object.setPrototypeOf ? Object.setPrototypeOf(aE, ao) : (aE.__proto__ = ao, ae(aE, ad, "GeneratorFunction"));
        aE.prototype = Object.create(as);
        return aE;
      }
    };
    a6.awrap = function (aE) {
      {
        var aF = {
          __await: aE
        };
        return aF;
      }
    };
    at(au.prototype);
    ae(au.prototype, ac, function () {
      return this;
    });
    a6.AsyncIterator = au;
    a6.async = function (aE, aF, aG, aH, aI) {
      {
        undefined === aI && (aI = Promise);
        var aJ = new au(af(aE, aF, aG, aH), aI);
        return a6.isGeneratorFunction(aF) ? aJ : aJ.next().then(function (aK) {
          {
            return aK.done ? aK.value : aJ.next();
          }
        });
      }
    };
    at(as);
    ae(as, ad, "Generator");
    ae(as, ab, function () {
      {
        return this;
      }
    });
    ae(as, "toString", function () {
      {
        return "[object Generator]";
      }
    });
    a6.keys = function (aE) {
      {
        var aG = Object(aE);
        var aH = [];
        for (var aI in aG) aH.push(aI);
        aH.reverse();
        return function aJ() {
          {
            for (; aH.length;) {
              {
                var aK = aH.pop();
                if (aK in aG) {
                  aJ.value = aK;
                  aJ.done = false;
                  return aJ;
                }
              }
            }
            aJ.done = true;
            return aJ;
          }
        };
      }
    };
    a6.values = aA;
    az.prototype = {
      constructor: az,
      reset: function (aE) {
        {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = a5, this.done = false, this.delegate = null, this.method = "next", this.arg = a5, this.tryEntries.forEach(ay), !aE) {
            for (var aF in this) "t" === aF.charAt(0) && a8.call(this, aF) && !isNaN(+aF.slice(1)) && (this[aF] = a5);
          }
        }
      },
      stop: function () {
        {
          this.done = true;
          var aE = this.tryEntries[0].completion;
          if ("throw" === aE.type) {
            throw aE.arg;
          }
          return this.rval;
        }
      },
      dispatchException: function (aE) {
        {
          if (this.done) {
            throw aE;
          }
          var aG = this;
          function aM(aN, aO) {
            aJ.type = "throw";
            aJ.arg = aE;
            aG.next = aN;
            aO && (aG.method = "next", aG.arg = a5);
            return !!aO;
          }
          for (var aH = this.tryEntries.length - 1; aH >= 0; --aH) {
            {
              var aI = this.tryEntries[aH];
              var aJ = aI.completion;
              if ("root" === aI.tryLoc) {
                return aM("end");
              }
              if (aI.tryLoc <= this.prev) {
                {
                  var aK = a8.call(aI, "catchLoc");
                  var aL = a8.call(aI, "finallyLoc");
                  if (aK && aL) {
                    {
                      if (this.prev < aI.catchLoc) {
                        return aM(aI.catchLoc, true);
                      }
                      if (this.prev < aI.finallyLoc) {
                        return aM(aI.finallyLoc);
                      }
                    }
                  } else {
                    if (aK) {
                      {
                        if (this.prev < aI.catchLoc) {
                          return aM(aI.catchLoc, true);
                        }
                      }
                    } else {
                      {
                        if (!aL) {
                          throw Error("try statement without catch or finally");
                        }
                        if (this.prev < aI.finallyLoc) {
                          return aM(aI.finallyLoc);
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      },
      abrupt: function (aE, aF) {
        {
          for (var aH = this.tryEntries.length - 1; aH >= 0; --aH) {
            {
              var aI = this.tryEntries[aH];
              if (aI.tryLoc <= this.prev && a8.call(aI, "finallyLoc") && this.prev < aI.finallyLoc) {
                {
                  var aJ = aI;
                  break;
                }
              }
            }
          }
          aJ && ("break" === aE || "continue" === aE) && aJ.tryLoc <= aF && aF <= aJ.finallyLoc && (aJ = null);
          var aK = aJ ? aJ.completion : {};
          aK.type = aE;
          aK.arg = aF;
          return aJ ? (this.method = "next", this.next = aJ.finallyLoc, al) : this.complete(aK);
        }
      },
      complete: function (aE, aF) {
        {
          if ("throw" === aE.type) {
            throw aE.arg;
          }
          "break" === aE.type || "continue" === aE.type ? this.next = aE.arg : "return" === aE.type ? (this.rval = this.arg = aE.arg, this.method = "return", this.next = "end") : "normal" === aE.type && aF && (this.next = aF);
          return al;
        }
      },
      finish: function (aE) {
        {
          for (var aF = this.tryEntries.length - 1; aF >= 0; --aF) {
            {
              var aG = this.tryEntries[aF];
              if (aG.finallyLoc === aE) {
                this.complete(aG.completion, aG.afterLoc);
                ay(aG);
                return al;
              }
            }
          }
        }
      },
      catch: function (aE) {
        {
          for (var aF = this.tryEntries.length - 1; aF >= 0; --aF) {
            {
              var aG = this.tryEntries[aF];
              if (aG.tryLoc === aE) {
                {
                  var aH = aG.completion;
                  if ("throw" === aH.type) {
                    {
                      var aI = aH.arg;
                      ay(aG);
                    }
                  }
                  return aI;
                }
              }
            }
          }
          throw Error("illegal catch attempt");
        }
      },
      delegateYield: function (aE, aF, aG) {
        {
          this.delegate = {
            iterator: aA(aE),
            resultName: aF,
            nextLoc: aG
          };
          "next" === this.method && (this.arg = a5);
          return al;
        }
      }
    };
    return a6;
  }
  function h(a4, a5, a6, a7, a8, a9, aa) {
    {
      try {
        {
          var ac = a4[a9](aa);
          var ad = ac.value;
        }
      } catch (ag) {
        {
          return void a6(ag);
        }
      }
      ac.done ? a5(ad) : Promise.resolve(ad).then(a7, a8);
    }
  }
  function i(a4) {
    return function () {
      var a6 = this;
      var a7 = arguments;
      return new Promise(function (a8, a9) {
        var aa = a4.apply(a6, a7);
        function ab(ad) {
          {
            h(aa, a8, a9, ab, ac, "next", ad);
          }
        }
        function ac(ad) {
          {
            h(aa, a8, a9, ab, ac, "throw", ad);
          }
        }
        ab(undefined);
      });
    };
  }
  var j = ($.isNode() ? process.env.XinJiangBei : $.getdata("XinJiangBei")) || "";
  var k = ($.isNode() ? process.env.GHPROXYURL : $.getdata("GHPROXYURL")) || "https://ghfast.top";
  var l = undefined;
  window = {};
  var m = "";
  var n = "";
  var o = "";
  var p = "";
  var q = "";
  var r = "";
  var s = "";
  var t = "";
  var u = "";
  var v = "";
  var w = "";
  var x = "";
  var y = "";
  var z = "102";
  var A = "10050";
  var B = "FR*r!isE5W";
  function C() {
    {
      return D.apply(this, arguments);
    }
  }
  function D() {
    D = i(g().mark(function a5() {
      {
        var a7;
        var a8;
        var a9;
        var aa;
        var ab;
        var ac;
        var ad;
        var ae;
        var af;
        var ag;
        var ah;
        var ai;
        var aj;
        var ak;
        var al;
        var am;
        var an;
        var ao;
        var ap;
        var aq;
        var ar;
        var as;
        var at;
        var au;
        var av;
        var aw;
        var ax;
        var ay;
        var az;
        var aA;
        var aB;
        var aC;
        var aD;
        var aE;
        var aF;
        var aG;
        var aH;
        var aI;
        var aJ;
        var aK;
        var aL;
        var aM;
        var aN;
        var aO;
        var aP;
        var aQ;
        var aR;
        var aS;
        var aT;
        var aU;
        var aV;
        var aW;
        var aX;
        var aY;
        var aZ;
        var b0;
        var b1;
        return g().wrap(function b3(b4) {
          {
            for (;;) {
              switch (b4.prev = b4.next) {
                case 0:
                  if (console.log("作者：@xzxxn777\n频道：https://t.me/xzxxn777\n群组：https://t.me/xzxxn7777\n自用机场推荐：https://xn--diqv0fut7b.com\n"), j) {
                    {
                      b4.next = 6;
                      break;
                    }
                  }
                  console.log("先去boxjs填写账号密码");
                  b4.next = 5;
                  return a2("先去boxjs填写账号密码");
                case 5:
                  return b4.abrupt("return");
                case 6:
                  b4.next = 8;
                  return a0();
                case 8:
                  l = b4.sent;
                  a7 = j.split(" ");
                  a8 = c(a7);
                  b4.prev = 11;
                  a8.s();
                case 13:
                  if ((a9 = a8.n()).done) {
                    {
                      b4.next = 236;
                      break;
                    }
                  }
                  aa = a9.value;
                  console.log("随机生成UA");
                  ab = Y();
                  u = ab.ua;
                  v = ab.commonUa;
                  w = ab.uuid;
                  console.log(u);
                  console.log(v);
                  q = aa.split("&")[0];
                  r = aa.split("&")[1];
                  s = aa.split("&")[2];
                  t = aa.split("&")[3] || q;
                  console.log("用户：".concat(q, "开始任务"));
                  console.log("获取sessionId");
                  b4.next = 30;
                  return K("/api/account/init");
                case 30:
                  ac = b4.sent;
                  o = ac.data.session.id;
                  console.log(o);
                  console.log("获取signature_key");
                  b4.next = 36;
                  return E("/web/init?client_id=".concat(A));
                case 36:
                  ad = b4.sent;
                  m = ad.data.client.signature_key;
                  console.log(m);
                  console.log("获取code");
                  b4.next = 42;
                  return G("/web/oauth/credential_auth");
                case 42:
                  if (ae = b4.sent, ae.data) {
                    {
                      b4.next = 46;
                      break;
                    }
                  }
                  console.log(ae.message);
                  return b4.abrupt("continue", 234);
                case 46:
                  af = ae.data.authorization_code.code;
                  console.log(af);
                  console.log("登录");
                  b4.next = 51;
                  return K("/api/zbtxz/login", "check_token=&code=".concat(af, "&token=&type=-1&union_id="));
                case 51:
                  if (ag = b4.sent, console.log("登录成功"), p = ag.data.session.account_id, o = ag.data.session.id, console.log("————————————"), y) {
                    {
                      b4.next = 64;
                      break;
                    }
                  }
                  console.log("获取id");
                  b4.next = 60;
                  return I("/api/buoy/list");
                case 60:
                  ah = b4.sent;
                  ai = /hdtool%2Findex%3Fid%3D(\d+)/;
                  aj = JSON.stringify(ah).match(ai);
                  aj && (y = aj[1]);
                case 64:
                  if (!y) {
                    {
                      b4.next = 144;
                      break;
                    }
                  }
                  console.log("阅读登录");
                  b4.next = 68;
                  return M("/customActivity/zjtm/autoLogin?_=".concat(Date.now(), "&sessionId=").concat(o, "&accountId=").concat(p, "&redirectUrl=https://92261.activity-14.m.duiba.com.cn/hdtool/index?id=").concat(y, "&dbnewopen"));
                case 68:
                  ak = b4.sent;
                  al = ak.data;
                  x = "";
                  b4.next = 73;
                  return Q(al);
                case 73:
                  x = b4.sent;
                  console.log("获取抽奖key");
                  b4.next = 77;
                  return O("https://92261.activity-14.m.duiba.com.cn/hdtool/index?id=".concat(y, "&dbnewopen&from=login&spm=92261.1.1.1"));
                case 77:
                  am = b4.sent;
                  b4.next = 80;
                  return S("/hdtool/ajaxElement?_=".concat(Date.now()), "hdType=dev&hdToolId=&preview=false&actId=".concat(y, "&adslotId="));
                case 80:
                  an = b4.sent;
                  console.log("拥有".concat(an.element.freeLimit, "次抽奖"));
                  ao = 0;
                case 83:
                  if (!(ao < an.element.freeLimit)) {
                    {
                      b4.next = 142;
                      break;
                    }
                  }
                  b4.next = 86;
                  return S("/hdtool/ctoken/getTokenNew", "timestamp=".concat(Date.now(), "&activityId=").concat(y, "&activityType=hdtool&consumerId=4134698352"));
                case 86:
                  ap = b4.sent;
                  eval(ap.token);
                  aq = window[am];
                  b4.next = 91;
                  return S("/hdtool/dy/doJoin?dpm=92261.3.1.0&activityId=".concat(y, "&_=").concat(Date.now()), "actId=".concat(y, "&oaId=").concat(y, "&activityType=hdtool&consumerId=4134698352&token=").concat(aq));
                case 91:
                  if (ar = b4.sent, !ar.success) {
                    {
                      b4.next = 138;
                      break;
                    }
                  }
                  if (ar.orderId) {
                    {
                      b4.next = 96;
                      break;
                    }
                  }
                  console.log(ar.message);
                  return b4.abrupt("break", 142);
                case 96:
                  as = ar.orderId;
                  at = 0;
                case 98:
                  if (0 != at) {
                    {
                      b4.next = 136;
                      break;
                    }
                  }
                  b4.next = 101;
                  return S("/hdtool/getOrderStatus?_=".concat(Date.now()), "orderId=".concat(as, "&adslotId="));
                case 101:
                  if (au = b4.sent, at = au.result, 0 != at) {
                    {
                      b4.next = 107;
                      break;
                    }
                  }
                  console.log(au.message);
                  b4.next = 134;
                  break;
                case 107:
                  if ("thanks" == au.lottery.type && console.log("谢谢参与"), "alipay" != au.lottery.type) {
                    {
                      b4.next = 134;
                      break;
                    }
                  }
                  for (console.log("抽奖获得支付宝红包：".concat(au.lottery.title)), av = au.lottery.link, aw = av.split("?")[1], ax = {}, ay = aw.split("&"), az = 0, aA = ay.length; az < aA; az++) {
                    aB = ay[az].split("=");
                    ax[aB[0]] = aB[1];
                  }
                  if (aC = ax.recordId, !s || !t) {
                    {
                      b4.next = 133;
                      break;
                    }
                  }
                  console.log("获取兑换key");
                  b4.next = 120;
                  return O("https://92261.activity-14.m.duiba.com.cn/activity/takePrizeNew?recordId=".concat(aC, "&dbnewopen"));
                case 120:
                  am = b4.sent;
                  b4.next = 123;
                  return S("/ctoken/getToken.do");
                case 123:
                  aD = b4.sent;
                  eval(aD.token);
                  aE = window[am];
                  b4.next = 128;
                  return S("/activity/doTakePrize", "alipay=".concat(t, "&realname=").concat(encodeURI(s), "&recordId=").concat(aC, "&token=").concat(aE));
                case 128:
                  aF = b4.sent;
                  console.log(aF.message);
                  n += "用户：".concat(q, " 抽奖获得：").concat(au.lottery.title, " 领取结果：").concat(aF.message, "\n");
                  b4.next = 134;
                  break;
                case 133:
                  console.log("请设置支付宝姓名和账号");
                case 134:
                  b4.next = 98;
                  break;
                case 136:
                  b4.next = 139;
                  break;
                case 138:
                  console.log(ar.message);
                case 139:
                  ao++;
                  b4.next = 83;
                  break;
                case 142:
                  b4.next = 145;
                  break;
                case 144:
                  console.log("获取id失败");
                case 145:
                  console.log("————————————");
                  console.log("开始签到");
                  b4.next = 149;
                  return I("/api/user_mumber/sign");
                case 149:
                  aG = b4.sent;
                  console.log("签到获得：".concat(aG.data.signIntegral, "积分"));
                  console.log("————————————");
                  console.log("开始任务");
                  aH = true;
                  aI = true;
                  aJ = true;
                  b4.next = 158;
                  return I("/api/user_center/task?type=1&current=1&size=20");
                case 158:
                  aK = b4.sent;
                  aL = c(aK.data.list);
                  b4.prev = 160;
                  aL.s();
                case 162:
                  if ((aM = aL.n()).done) {
                    {
                      b4.next = 184;
                      break;
                    }
                  }
                  if (aN = aM.value, console.log("任务：".concat(aN.name)), 1 != aN.completed) {
                    {
                      b4.next = 168;
                      break;
                    }
                  }
                  console.log("任务已完成");
                  return b4.abrupt("continue", 182);
                case 168:
                  if (console.log("任务进度：".concat(aN.finish_times, "/").concat(aN.frequency)), "使用本地服务" != aN.name) {
                    {
                      b4.next = 179;
                      break;
                    }
                  }
                  aO = aN.finish_times;
                case 171:
                  if (!(aO < aN.frequency)) {
                    {
                      b4.next = 179;
                      break;
                    }
                  }
                  b4.next = 174;
                  return K("/api/user_mumber/doTask", "memberType=6&member_type=6");
                case 174:
                  aP = b4.sent;
                  console.log("任务完成获得：".concat(aP.data.score_notify.integral, "积分"));
                case 176:
                  aO++;
                  b4.next = 171;
                  break;
                case 179:
                  "新闻资讯阅读" == aN.name && (aH = false);
                  "新闻资讯点赞" == aN.name && (aI = false);
                  "分享资讯给好友" == aN.name && (aJ = false);
                case 182:
                  b4.next = 162;
                  break;
                case 184:
                  b4.next = 189;
                  break;
                case 186:
                  b4.prev = 186;
                  b4.t0 = b4.catch(160);
                  aL.e(b4.t0);
                case 189:
                  b4.prev = 189;
                  aL.f();
                  return b4.finish(189);
                case 192:
                  if (aH && aI && aJ) {
                    {
                      b4.next = 227;
                      break;
                    }
                  }
                  b4.next = 195;
                  return I("/api/article/channel_list?channel_id=65e80c4779f6be5b358ba671&isDiFangHao=false&is_new=true&list_count=0&size=30");
                case 195:
                  aQ = b4.sent;
                  aR = c(aQ.data.article_list);
                  b4.prev = 197;
                  aR.s();
                case 199:
                  if ((aS = aR.n()).done) {
                    {
                      b4.next = 219;
                      break;
                    }
                  }
                  if (aT = aS.value, aU = aT.id, aH) {
                    {
                      b4.next = 207;
                      break;
                    }
                  }
                  b4.next = 205;
                  return I("/api/article/read_time?channel_article_id=".concat(aU, "&is_end=true&read_time=3051"));
                case 205:
                  aV = b4.sent;
                  aV.data ? console.log("阅读获得：".concat(null === (aW = aV.data) || undefined === aW || null === (aW = aW.score_notify) || undefined === aW ? undefined : aW.integral, "积分")) : console.log("文章已经阅读过了");
                case 207:
                  if (aI) {
                    {
                      b4.next = 212;
                      break;
                    }
                  }
                  b4.next = 210;
                  return K("/api/favorite/like", "action=true&id=".concat(aU));
                case 210:
                  aX = b4.sent;
                  aX.data ? console.log("点赞获得：".concat(null === (aY = aX.data) || undefined === aY || null === (aY = aY.score_notify) || undefined === aY ? undefined : aY.integral, "积分")) : console.log("文章已经点赞过了");
                case 212:
                  if (aJ) {
                    {
                      b4.next = 217;
                      break;
                    }
                  }
                  b4.next = 215;
                  return K("/api/user_mumber/doTask", "memberType=3&member_type=3&target_id==".concat(aU));
                case 215:
                  aZ = b4.sent;
                  aZ.data.score_notify ? console.log("分享获得：".concat(null === (b0 = aZ.data) || undefined === b0 || null === (b0 = b0.score_notify) || undefined === b0 ? undefined : b0.integral, "积分")) : console.log("文章已经分享过了");
                case 217:
                  b4.next = 199;
                  break;
                case 219:
                  b4.next = 224;
                  break;
                case 221:
                  b4.prev = 221;
                  b4.t1 = b4.catch(197);
                  aR.e(b4.t1);
                case 224:
                  b4.prev = 224;
                  aR.f();
                  return b4.finish(224);
                case 227:
                  console.log("————————————");
                  console.log("查询积分");
                  b4.next = 231;
                  return I("/api/user_mumber/account_detail");
                case 231:
                  b1 = b4.sent;
                  console.log("拥有积分：".concat(b1.data.rst.total_integral, "\n"));
                  n += "用户：".concat(q, " 积分：").concat(b1.data.rst.total_integral, "\n");
                case 234:
                  b4.next = 13;
                  break;
                case 236:
                  b4.next = 241;
                  break;
                case 238:
                  b4.prev = 238;
                  b4.t2 = b4.catch(11);
                  a8.e(b4.t2);
                case 241:
                  b4.prev = 241;
                  a8.f();
                  return b4.finish(241);
                case 244:
                  if (!n) {
                    {
                      b4.next = 247;
                      break;
                    }
                  }
                  b4.next = 247;
                  return a2(n);
                case 247:
                case "end":
                  return b4.stop();
              }
            }
          }
        }, a5, null, [[11, 238, 241, 244], [160, 186, 189, 192], [197, 221, 224, 227]]);
      }
    }));
    return D.apply(this, arguments);
  }
  function E(a4) {
    {
      return F.apply(this, arguments);
    }
  }
  function F() {
    F = i(g().mark(function a4(a5) {
      return g().wrap(function (a8) {
        for (;;) {
          switch (a8.prev = a8.next) {
            case 0:
              return a8.abrupt("return", new Promise(function (aa) {
                var ab = {
                  url: "https://passport.tmuyun.com".concat(a5),
                  headers: {
                    Connection: "Keep-Alive",
                    "Cache-Control": "no-cache",
                    "X-REQUEST-ID": W(),
                    "Accept-Encoding": "gzip",
                    "user-agent": u
                  }
                };
                $.get(ab, function () {
                  var ad = i(g().mark(function ae(af, ag, ah) {
                    return g().wrap(function (ai) {
                      for (;;) {
                        switch (ai.prev = ai.next) {
                          case 0:
                            try {
                              af ? (console.log("".concat(JSON.stringify(af))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : aa(JSON.parse(ah));
                            } catch (aj) {
                              $.logErr(aj, ag);
                            } finally {
                              aa();
                            }
                          case 1:
                          case "end":
                            return ai.stop();
                        }
                      }
                    }, ae);
                  }));
                  return function (af, ag, ah) {
                    return ad.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return a8.stop();
          }
        }
      }, a4);
    }));
    return F.apply(this, arguments);
  }
  function G(a4) {
    return H.apply(this, arguments);
  }
  function H() {
    H = i(g().mark(function a5(a6) {
      var a7;
      return g().wrap(function (a8) {
        for (;;) {
          switch (a8.prev = a8.next) {
            case 0:
              a7 = U();
              return a8.abrupt("return", new Promise(function (aa) {
                var ab = {
                  Connection: "Keep-Alive",
                  "X-REQUEST-ID": a7.uuid,
                  "X-SIGNATURE": a7.signature,
                  "Cache-Control": "no-cache",
                  "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                  "Accept-Encoding": "gzip",
                  "user-agent": u
                };
                var ac = {
                  url: "https://passport.tmuyun.com".concat(a6),
                  headers: ab,
                  body: a7.body
                };
                $.post(ac, function () {
                  var ad = i(g().mark(function ae(af, ag, ah) {
                    return g().wrap(function (ai) {
                      for (;;) {
                        switch (ai.prev = ai.next) {
                          case 0:
                            try {
                              af ? (console.log("".concat(JSON.stringify(af))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : aa(JSON.parse(ah));
                            } catch (aj) {
                              $.logErr(aj, ag);
                            } finally {
                              aa();
                            }
                          case 1:
                          case "end":
                            return ai.stop();
                        }
                      }
                    }, ae);
                  }));
                  return function (af, ag, ah) {
                    return ad.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return a8.stop();
          }
        }
      }, a5);
    }));
    return H.apply(this, arguments);
  }
  function I(a4) {
    return J.apply(this, arguments);
  }
  function J() {
    J = i(g().mark(function a5(a6) {
      var a8;
      return g().wrap(function (a9) {
        for (;;) {
          switch (a9.prev = a9.next) {
            case 0:
              a8 = V(a6);
              return a9.abrupt("return", new Promise(function (ab) {
                var ad = {
                  url: "https://vapp.tmuyun.com".concat(a6),
                  headers: {
                    Connection: "Keep-Alive",
                    "X-TIMESTAMP": a8.time,
                    "X-SESSION-ID": o,
                    "X-REQUEST-ID": a8.uuid,
                    "X-SIGNATURE": a8.signature,
                    "X-TENANT-ID": z,
                    "X-ACCOUNT-ID": p,
                    "Cache-Control": "no-cache",
                    "Accept-Encoding": "gzip",
                    "user-agent": v
                  }
                };
                $.get(ad, function () {
                  var ae = i(g().mark(function af(ag, ah, ai) {
                    return g().wrap(function (ak) {
                      for (;;) {
                        switch (ak.prev = ak.next) {
                          case 0:
                            if (ak.prev = 0, !ag) {
                              ak.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ag)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            ak.next = 9;
                            break;
                          case 6:
                            ak.next = 8;
                            return $.wait(2000);
                          case 8:
                            ab(JSON.parse(ai));
                          case 9:
                            ak.next = 14;
                            break;
                          case 11:
                            ak.prev = 11;
                            ak.t0 = ak.catch(0);
                            $.logErr(ak.t0, ah);
                          case 14:
                            ak.prev = 14;
                            ab();
                            return ak.finish(14);
                          case 17:
                          case "end":
                            return ak.stop();
                        }
                      }
                    }, af, null, [[0, 11, 14, 17]]);
                  }));
                  return function (ag, ah, ai) {
                    return ae.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return a9.stop();
          }
        }
      }, a5);
    }));
    return J.apply(this, arguments);
  }
  function K(a4, a5) {
    return L.apply(this, arguments);
  }
  function L() {
    L = i(g().mark(function a5(a6, a7) {
      var aa;
      return g().wrap(function (ab) {
        for (;;) {
          switch (ab.prev = ab.next) {
            case 0:
              aa = V(a6);
              return ab.abrupt("return", new Promise(function (ad) {
                var ae = {
                  url: "https://vapp.tmuyun.com".concat(a6),
                  headers: {
                    Connection: "Keep-Alive",
                    "X-TIMESTAMP": aa.time,
                    "X-SESSION-ID": o,
                    "X-REQUEST-ID": aa.uuid,
                    "X-SIGNATURE": aa.signature,
                    "X-TENANT-ID": z,
                    "X-ACCOUNT-ID": p,
                    "Cache-Control": "no-cache",
                    "Accept-Encoding": "gzip",
                    "user-agent": v
                  },
                  body: a7
                };
                $.post(ae, function () {
                  var ag = i(g().mark(function ah(ai, aj, ak) {
                    return g().wrap(function (al) {
                      for (;;) {
                        switch (al.prev = al.next) {
                          case 0:
                            if (al.prev = 0, !ai) {
                              al.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ai)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            al.next = 9;
                            break;
                          case 6:
                            al.next = 8;
                            return $.wait(2000);
                          case 8:
                            ad(JSON.parse(ak));
                          case 9:
                            al.next = 14;
                            break;
                          case 11:
                            al.prev = 11;
                            al.t0 = al.catch(0);
                            $.logErr(al.t0, aj);
                          case 14:
                            al.prev = 14;
                            ad();
                            return al.finish(14);
                          case 17:
                          case "end":
                            return al.stop();
                        }
                      }
                    }, ah, null, [[0, 11, 14, 17]]);
                  }));
                  return function (ai, aj, ak) {
                    return ag.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return ab.stop();
          }
        }
      }, a5);
    }));
    return L.apply(this, arguments);
  }
  function M(a4) {
    return N.apply(this, arguments);
  }
  function N() {
    N = i(g().mark(function a5(a6) {
      return g().wrap(function (a8) {
        for (;;) {
          switch (a8.prev = a8.next) {
            case 0:
              return a8.abrupt("return", new Promise(function (aa) {
                var ac = {
                  url: "https://92261.activity-42.m.duiba.com.cn".concat(a6),
                  headers: {
                    accept: "*/*",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_xinjiangbei;xsb_xinjiangbei;1.7.0;native_app;6.9.0",
                    "x-requested-with": "io.pailian.jiangbei",
                    "sec-fetch-site": "same-site",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-dest": "empty",
                    "accept-encoding": "gzip, deflate",
                    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
                  }
                };
                $.get(ac, function () {
                  var ad = i(g().mark(function ae(af, ag, ah) {
                    return g().wrap(function (aj) {
                      for (;;) {
                        switch (aj.prev = aj.next) {
                          case 0:
                            if (aj.prev = 0, !af) {
                              aj.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(af)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            aj.next = 9;
                            break;
                          case 6:
                            aj.next = 8;
                            return $.wait(2000);
                          case 8:
                            aa(JSON.parse(ah));
                          case 9:
                            aj.next = 14;
                            break;
                          case 11:
                            aj.prev = 11;
                            aj.t0 = aj.catch(0);
                            $.logErr(aj.t0, ag);
                          case 14:
                            aj.prev = 14;
                            aa();
                            return aj.finish(14);
                          case 17:
                          case "end":
                            return aj.stop();
                        }
                      }
                    }, ae, null, [[0, 11, 14, 17]]);
                  }));
                  return function (af, ag, ah) {
                    return ad.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return a8.stop();
          }
        }
      }, a5);
    }));
    return N.apply(this, arguments);
  }
  function O(a4) {
    return P.apply(this, arguments);
  }
  function P() {
    P = i(g().mark(function a4(a5) {
      return g().wrap(function a7(a8) {
        for (;;) {
          switch (a8.prev = a8.next) {
            case 0:
              return a8.abrupt("return", new Promise(function (a9) {
                var ab = {
                  accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                  "upgrade-insecure-requests": "1",
                  "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_xinjiangbei;xsb_xinjiangbei;1.7.0;native_app;6.9.0",
                  "x-requested-with": "io.pailian.jiangbei",
                  "sec-fetch-site": "same-site",
                  "sec-fetch-mode": "navigate",
                  "sec-fetch-user": "?1",
                  "sec-fetch-dest": "document",
                  referer: "https://92261.activity-42.m.duiba.com.cn/",
                  "accept-encoding": "gzip, deflate",
                  "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                  cookie: x
                };
                var ad = {
                  url: a5,
                  headers: ab
                };
                $.get(ad, function () {
                  var ae = i(g().mark(function af(ag, ah, ai) {
                    var ak;
                    var al;
                    return g().wrap(function am(an) {
                      for (;;) {
                        switch (an.prev = an.next) {
                          case 0:
                            if (an.prev = 0, !ag) {
                              an.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ag)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            an.next = 13;
                            break;
                          case 6:
                            an.next = 8;
                            return $.wait(2000);
                          case 8:
                            ak = /<script type\b[^>]*>\s*var([\s\S]*?)<\/script>/.exec(ai)[1];
                            eval(ak);
                            al = /var\s+key\s+=\s+'([^']+)';/.exec(getDuibaToken.toString())[1];
                            console.log(al);
                            a9(al);
                          case 13:
                            an.next = 18;
                            break;
                          case 15:
                            an.prev = 15;
                            an.t0 = an.catch(0);
                            $.logErr(an.t0, ah);
                          case 18:
                            an.prev = 18;
                            a9();
                            return an.finish(18);
                          case 21:
                          case "end":
                            return an.stop();
                        }
                      }
                    }, af, null, [[0, 15, 18, 21]]);
                  }));
                  return function (ag, ah, ai) {
                    return ae.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return a8.stop();
          }
        }
      }, a4);
    }));
    return P.apply(this, arguments);
  }
  function Q(a4) {
    return R.apply(this, arguments);
  }
  function R() {
    R = i(g().mark(function a5(a6) {
      return g().wrap(function (a9) {
        for (;;) {
          switch (a9.prev = a9.next) {
            case 0:
              return a9.abrupt("return", new Promise(function (ab) {
                var ad = {
                  accept: "*/*",
                  "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_xinjiangbei;xsb_xinjiangbei;1.7.0;native_app;6.9.0",
                  "x-requested-with": "io.pailian.jiangbei",
                  "sec-fetch-site": "same-site",
                  "sec-fetch-mode": "cors",
                  "sec-fetch-dest": "empty",
                  "accept-encoding": "gzip, deflate",
                  "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
                };
                var ae = {
                  url: "https:".concat(a6),
                  headers: ad,
                  followRedirect: false
                };
                $.get(ae, function () {
                  var af = i(g().mark(function ag(ah, ai, aj) {
                    var al;
                    var am;
                    return g().wrap(function (an) {
                      for (;;) {
                        switch (an.prev = an.next) {
                          case 0:
                            if (an.prev = 0, !ah) {
                              an.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ah)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            an.next = 10;
                            break;
                          case 6:
                            an.next = 8;
                            return $.wait(2000);
                          case 8:
                            if ($.isNode()) {
                              for (al = ai.headers["set-cookie"] || ai.headers["Set-Cookie"], am = 0; am < al.length; am++) {
                                x += al[am].split(";")[0] + ";";
                              }
                            } else {
                              x = ai.headers["set-cookie"] || ai.headers["Set-Cookie"];
                              x = Z(x);
                            }
                            ab(x);
                          case 10:
                            an.next = 15;
                            break;
                          case 12:
                            an.prev = 12;
                            an.t0 = an.catch(0);
                            $.logErr(an.t0, ai);
                          case 15:
                            an.prev = 15;
                            ab();
                            return an.finish(15);
                          case 18:
                          case "end":
                            return an.stop();
                        }
                      }
                    }, ag, null, [[0, 12, 15, 18]]);
                  }));
                  return function (ah, ai, aj) {
                    return af.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return a9.stop();
          }
        }
      }, a5);
    }));
    return R.apply(this, arguments);
  }
  function S(a4, a5) {
    return T.apply(this, arguments);
  }
  function T() {
    T = i(g().mark(function a4(a5, a6) {
      return g().wrap(function (a8) {
        for (;;) {
          switch (a8.prev = a8.next) {
            case 0:
              return a8.abrupt("return", new Promise(function (aa) {
                var ab = {
                  url: "https://92261.activity-14.m.duiba.com.cn".concat(a5),
                  headers: {
                    accept: "application/json",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_xinjiangbei;xsb_xinjiangbei;1.7.0;native_app;6.9.0",
                    "x-requested-with": "XMLHttpRequest",
                    "content-type": "application/x-www-form-urlencoded",
                    origin: "https://92261.activity-14.m.duiba.com.cn",
                    cookie: x,
                    "sec-fetch-site": "same-origin",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-dest": "empty",
                    referer: "https://92261.activity-14.m.duiba.com.cn/hdtool/index?id=".concat(y, "&dbnewopen&from=login&spm=92261.1.1.1"),
                    "accept-encoding": "gzip, deflate",
                    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
                  },
                  body: a6
                };
                $.post(ab, function () {
                  var ad = i(g().mark(function ae(af, ag, ah) {
                    return g().wrap(function (ai) {
                      for (;;) {
                        switch (ai.prev = ai.next) {
                          case 0:
                            if (ai.prev = 0, !af) {
                              ai.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(af)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            ai.next = 9;
                            break;
                          case 6:
                            ai.next = 8;
                            return $.wait(2000);
                          case 8:
                            aa(JSON.parse(ah));
                          case 9:
                            ai.next = 14;
                            break;
                          case 11:
                            ai.prev = 11;
                            ai.t0 = ai.catch(0);
                            $.logErr(ai.t0, ag);
                          case 14:
                            ai.prev = 14;
                            aa();
                            return ai.finish(14);
                          case 17:
                          case "end":
                            return ai.stop();
                        }
                      }
                    }, ae, null, [[0, 11, 14, 17]]);
                  }));
                  return function (af, ag, ah) {
                    return ad.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return a8.stop();
          }
        }
      }, a4);
    }));
    return T.apply(this, arguments);
  }
  function U() {
    var a9 = new (l.loadJSEncrypt())();
    a9.setPublicKey("MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQD6XO7e9YeAOs+cFqwa7ETJ+WXizPqQeXv68i5vqw9pFREsrqiBTRcg7wB0RIp3rJkDpaeVJLsZqYm5TW7FWx/iOiXFc+zCPvaKZric2dXCw27EvlH5rq+zwIPDAJHGAfnn1nmQH7wR3PCatEIb8pz5GFlTHMlluw4ZYmnOwg+thwIDAQAB");
    r = a9.encrypt(r);
    var a6 = W();
    var a7 = "client_id=".concat(A, "&password=").concat(r, "&phone_number=").concat(q);
    var a8 = "post%%/web/oauth/credential_auth?".concat(a7, "%%").concat(a6, "%%");
    a7 = "client_id=".concat(A, "&password=").concat(encodeURIComponent(r), "&phone_number=").concat(q);
    CryptoJS = l.createCryptoJS();
    var ab = CryptoJS.HmacSHA256(a8, m);
    var ac = CryptoJS.enc.Hex.stringify(ab);
    var aa = {
      uuid: a6,
      signature: ac,
      body: a7
    };
    return aa;
  }
  function V(a4) {
    var a5 = W();
    var a6 = Date.now();
    a4.indexOf("?") > 0 && (a4 = a4.substring(0, a4.indexOf("?")));
    CryptoJS = l.createCryptoJS();
    var a7 = CryptoJS.SHA256("".concat(a4, "&&").concat(o, "&&").concat(a5, "&&").concat(a6, "&&").concat(B, "&&").concat(z)).toString();
    var a8 = {
      uuid: a5,
      time: a6,
      signature: a7
    };
    return a8;
  }
  function W() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (a4) {
      var a5 = 16 * Math.random() | 0;
      var a6 = "x" === a4 ? a5 : 3 & a5 | 8;
      return a6.toString(16);
    });
  }
  function X(a4) {
    return a4[Math.floor(Math.random() * a4.length)];
  }
  function Y() {
    var a4 = "1.7.0";
    var a5 = W();
    var a6 = X(["M1903F2A", "M2001J2E", "M2001J2C", "M2001J1E", "M2001J1C", "M2002J9E", "M2011K2C", "M2102K1C", "M2101K9C", "2107119DC", "2201123C", "2112123AC", "2201122C", "2211133C", "2210132C", "2304FPN6DC", "23127PN0CC", "24031PN0DC", "23090RA98C", "2312DRA50C", "2312CRAD3C", "2312DRAABC", "22101316UCP", "22101316C"]);
    var a7 = "Xiaomi " + a6;
    var a8 = "Android";
    var a9 = "".concat(a8.toUpperCase(), ";").concat("11", ";").concat(A, ";").concat(a4, ";1.0;null;").concat(a6);
    var aa = "".concat(a4, ";").concat(a5, ";").concat(a7, ";").concat(a8, ";").concat("11", ";").concat("6.9.0");
    var ab = {
      ua: a9,
      commonUa: aa,
      uuid: a5
    };
    return ab;
  }
  function Z(a4) {
    var a5 = a4.split(", ");
    var a6 = a5.map(function (a7) {
      var a8 = a7.split(";")[0];
      return a8.trim();
    });
    return a6.join(";");
  }
  function a0() {
    return a1.apply(this, arguments);
  }
  function a1() {
    a1 = i(g().mark(function a5() {
      var a7;
      return g().wrap(function a8(a9) {
        for (;;) {
          switch (a9.prev = a9.next) {
            case 0:
              if (a7 = $.getdata("Utils_Code") || "", !a7 || !Object.keys(a7).length) {
                a9.next = 5;
                break;
              }
              console.log("✅ ".concat($.name, ": 缓存中存在Utils代码, 跳过下载"));
              eval(a7);
              return a9.abrupt("return", creatUtils());
            case 5:
              console.log("🚀 ".concat($.name, ": 开始下载Utils代码"));
              return a9.abrupt("return", new Promise(function () {
                var ab = i(g().mark(function ac(ad) {
                  return g().wrap(function ag(ah) {
                    for (;;) {
                      switch (ah.prev = ah.next) {
                        case 0:
                          $.getScript("".concat(k, "/https://raw.githubusercontent.com/xzxxn777/Surge/main/Utils/Utils.js")).then(function (aj) {
                            $.setdata(aj, "Utils_Code");
                            eval(aj);
                            console.log("✅ Utils加载成功, 请继续");
                            ad(creatUtils());
                          });
                        case 1:
                        case "end":
                          return ah.stop();
                      }
                    }
                  }, ac);
                }));
                return function (ad) {
                  return ab.apply(this, arguments);
                };
              }()));
            case 7:
            case "end":
              return a9.stop();
          }
        }
      }, a5);
    }));
    return a1.apply(this, arguments);
  }
  function a2(a4) {
    return a3.apply(this, arguments);
  }
  function a3() {
    a3 = i(g().mark(function a4(a5) {
      return g().wrap(function (a6) {
        for (;;) {
          switch (a6.prev = a6.next) {
            case 0:
              if (!$.isNode()) {
                a6.next = 5;
                break;
              }
              a6.next = 3;
              return notify.sendNotify($.name, a5);
            case 3:
              a6.next = 6;
              break;
            case 5:
              $.msg($.name, "", a5);
            case 6:
            case "end":
              return a6.stop();
          }
        }
      }, a4);
    }));
    return a3.apply(this, arguments);
  }
  i(g().mark(function a4() {
    return g().wrap(function (a5) {
      for (;;) {
        switch (a5.prev = a5.next) {
          case 0:
            a5.next = 2;
            return C();
          case 2:
          case "end":
            return a5.stop();
        }
      }
    }, a4);
  }))().catch(function (a5) {
    $.log(a5);
  }).finally(function () {
    $.done({});
  });
})();
function Env(t, e) {
  class s {
    constructor(t) {
      this.env = t;
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      "POST" === e && (s = this.post);
      return new Promise((e, i) => {
        s.call(this, t, (t, s, o) => {
          t ? i(t) : e(s);
        });
      });
    }
    get(t) {
      return this.send.call(this.env, t);
    }
    post(t) {
      return this.send.call(this.env, t, "POST");
    }
  }
  return new class {
    constructor(t, e) {
      this.logLevels = {
        debug: 0,
        info: 1,
        warn: 2,
        error: 3
      };
      this.logLevelPrefixs = {
        debug: "[DEBUG] ",
        info: "[INFO] ",
        warn: "[WARN] ",
        error: "[ERROR] "
      };
      this.logLevel = "info";
      this.name = t;
      this.http = new s(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = false;
      this.isNeedRewrite = false;
      this.logSeparator = "\n";
      this.encoding = "utf-8";
      this.startTime = new Date().getTime();
      Object.assign(this, e);
      this.log("", `🔔${this.name}, 开始!`);
    }
    getEnv() {
      return "undefined" != typeof $environment && $environment["surge-version"] ? "Surge" : "undefined" != typeof $environment && $environment["stash-version"] ? "Stash" : "undefined" != typeof module && module.exports ? "Node.js" : "undefined" != typeof $task ? "Quantumult X" : "undefined" != typeof $loon ? "Loon" : "undefined" != typeof $rocket ? "Shadowrocket" : undefined;
    }
    isNode() {
      return "Node.js" === this.getEnv();
    }
    isQuanX() {
      return "Quantumult X" === this.getEnv();
    }
    isSurge() {
      return "Surge" === this.getEnv();
    }
    isLoon() {
      return "Loon" === this.getEnv();
    }
    isShadowrocket() {
      return "Shadowrocket" === this.getEnv();
    }
    isStash() {
      return "Stash" === this.getEnv();
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t);
      } catch {
        return e;
      }
    }
    toStr(t, e = null, ...s) {
      try {
        return JSON.stringify(t, ...s);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      if (this.getdata(t)) {
        try {
          s = JSON.parse(this.getdata(t));
        } catch {}
      }
      return s;
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e);
      } catch {
        return false;
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, i) => e(i));
      });
    }
    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let o = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        o = o ? 1 * o : 20;
        o = e && e.timeout ? e.timeout : o;
        const [r, a] = i.split("@");
        const n = {
          url: `http://${a}/v1/scripting/evaluate`,
          body: {
            script_text: t,
            mock_type: "cron",
            timeout: o
          },
          headers: {
            "X-Key": r,
            Accept: "*/*"
          },
          timeout: o
        };
        this.post(n, (t, e, i) => s(i));
      }).catch(t => this.logErr(t));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile);
        const e = this.path.resolve(process.cwd(), this.dataFile);
        const s = this.fs.existsSync(t);
        const i = !s && this.fs.existsSync(e);
        if (!s && !i) {
          return {};
        }
        {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i));
          } catch (t) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile);
        const e = this.path.resolve(process.cwd(), this.dataFile);
        const s = this.fs.existsSync(t);
        const i = !s && this.fs.existsSync(e);
        const o = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, o) : i ? this.fs.writeFileSync(e, o) : this.fs.writeFileSync(t, o);
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let o = t;
      for (const t of i) if (o = Object(o)[t], undefined === o) {
        return s;
      }
      return o;
    }
    lodash_set(t, e, s) {
      Object(t) !== t || (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s);
      return t;
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t);
        const o = s ? this.getval(s) : "";
        if (o) {
          try {
            const t = JSON.parse(o);
            e = t ? this.lodash_get(t, i, "") : e;
          } catch (t) {
            e = "";
          }
        }
      }
      return e;
    }
    setdata(t, e) {
      let s = false;
      if (/^@/.test(e)) {
        const [, i, o] = /^@(.*?)\.(.*?)$/.exec(e);
        const r = this.getval(i);
        const a = i ? "null" === r ? null : r || "{}" : "{}";
        try {
          const e = JSON.parse(a);
          this.lodash_set(e, o, t);
          s = this.setval(JSON.stringify(e), i);
        } catch (e) {
          const r = {};
          this.lodash_set(r, o, t);
          s = this.setval(JSON.stringify(r), i);
        }
      } else {
        s = this.setval(t, e);
      }
      return s;
    }
    getval(t) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.read(t);
        case "Quantumult X":
          return $prefs.valueForKey(t);
        case "Node.js":
          this.data = this.loaddata();
          return this.data[t];
        default:
          return this.data && this.data[t] || null;
      }
    }
    setval(t, e) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.write(t, e);
        case "Quantumult X":
          return $prefs.setValueForKey(t, e);
        case "Node.js":
          this.data = this.loaddata();
          this.data[e] = t;
          this.writedata();
          return true;
        default:
          return this.data && this.data[e] || null;
      }
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      t && (t.headers = t.headers ? t.headers : {}, t && (t.headers = t.headers ? t.headers : {}, undefined === t.headers.cookie && undefined === t.headers.Cookie && undefined === t.cookieJar && (t.cookieJar = this.ckjar)));
    }
    get(t, e = () => {}) {
      switch (t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"], delete t.headers["content-type"], delete t.headers["content-length"]), t.params && (t.url += "?" + this.queryStr(t.params)), undefined === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = false), this.isQuanX() && (t.opts ? t.opts.redirection = false : t.opts = {
        redirection: false
      })), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
            "X-Surge-Skip-Scripting": false
          }));
          $httpClient.get(t, (t, s, i) => {
            !t && s && (s.body = i, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode);
            e(t, s, i);
          });
          break;
        case "Quantumult X":
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: false
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            } = t;
            e(null, {
              status: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            }, r, a);
          }, t => e(t && t.error || "UndefinedError"));
          break;
        case "Node.js":
          let s = require("iconv-lite");
          this.initGotEnv(t);
          this.got(t).on("redirect", (t, e) => {
            try {
              if (t.headers["set-cookie"]) {
                const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                s && this.ckjar.setCookieSync(s, null);
                e.cookieJar = this.ckjar;
              }
            } catch (t) {
              this.logErr(t);
            }
          }).then(t => {
            const {
              statusCode: i,
              statusCode: o,
              headers: r,
              rawBody: a
            } = t;
            const n = s.decode(a, this.encoding);
            e(null, {
              status: i,
              statusCode: o,
              headers: r,
              rawBody: a,
              body: n
            }, n);
          }, t => {
            const {
              message: i,
              response: o
            } = t;
            e(i, o, o && s.decode(o.rawBody, this.encoding));
          });
          break;
      }
    }
    post(t, e = () => {}) {
      const s = t.method ? t.method.toLocaleLowerCase() : "post";
      switch (t.body && t.headers && !t.headers["Content-Type"] && !t.headers["content-type"] && (t.headers["content-type"] = "application/x-www-form-urlencoded"), t.headers && (delete t.headers["Content-Length"], delete t.headers["content-length"]), undefined === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = false), this.isQuanX() && (t.opts ? t.opts.redirection = false : t.opts = {
        redirection: false
      })), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
            "X-Surge-Skip-Scripting": false
          }));
          $httpClient[s](t, (t, s, i) => {
            !t && s && (s.body = i, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode);
            e(t, s, i);
          });
          break;
        case "Quantumult X":
          t.method = s;
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: false
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            } = t;
            e(null, {
              status: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            }, r, a);
          }, t => e(t && t.error || "UndefinedError"));
          break;
        case "Node.js":
          let i = require("iconv-lite");
          this.initGotEnv(t);
          const {
            url: o,
            ...r
          } = t;
          this.got[s](o, r).then(t => {
            const {
              statusCode: s,
              statusCode: o,
              headers: r,
              rawBody: a
            } = t;
            const n = i.decode(a, this.encoding);
            e(null, {
              status: s,
              statusCode: o,
              headers: r,
              rawBody: a,
              body: n
            }, n);
          }, t => {
            const {
              message: s,
              response: o
            } = t;
            e(s, o, o && i.decode(o.rawBody, this.encoding));
          });
          break;
      }
    }
    time(t, e = null) {
      const s = e ? new Date(e) : new Date();
      let i = {
        "M+": s.getMonth() + 1,
        "d+": s.getDate(),
        "H+": s.getHours(),
        "m+": s.getMinutes(),
        "s+": s.getSeconds(),
        "q+": Math.floor((s.getMonth() + 3) / 3),
        S: s.getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
      return t;
    }
    queryStr(t) {
      let e = "";
      for (const s in t) {
        let i = t[s];
        null != i && "" !== i && ("object" == typeof i && (i = JSON.stringify(i)), e += `${s}=${i}&`);
      }
      e = e.substring(0, e.length - 1);
      return e;
    }
    msg(e = t, s = "", i = "", o = {}) {
      const r = t => {
        const {
          $open: e,
          $copy: s,
          $media: i,
          $mediaMime: o
        } = t;
        switch (typeof t) {
          case undefined:
            return t;
          case "string":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              default:
                return {
                  url: t
                };
              case "Loon":
              case "Shadowrocket":
                return t;
              case "Quantumult X":
                return {
                  "open-url": t
                };
              case "Node.js":
                return;
            }
          case "object":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              case "Shadowrocket":
              default:
                {
                  const r = {};
                  let a = t.openUrl || t.url || t["open-url"] || e;
                  a && Object.assign(r, {
                    action: "open-url",
                    url: a
                  });
                  let n = t["update-pasteboard"] || t.updatePasteboard || s;
                  if (n && Object.assign(r, {
                    action: "clipboard",
                    text: n
                  }), i) {
                    let t;
                    let e;
                    let s;
                    if (i.startsWith("http")) {
                      t = i;
                    } else {
                      if (i.startsWith("data:")) {
                        const [t] = i.split(";");
                        const [, o] = i.split(",");
                        e = o;
                        s = t.replace("data:", "");
                      } else {
                        e = i;
                        s = (t => {
                          const e = {
                            JVBERi0: "application/pdf",
                            R0lGODdh: "image/gif",
                            R0lGODlh: "image/gif",
                            iVBORw0KGgo: "image/png",
                            "/9j/": "image/jpg"
                          };
                          for (var s in e) if (0 === t.indexOf(s)) {
                            return e[s];
                          }
                          return null;
                        })(i);
                      }
                    }
                    Object.assign(r, {
                      "media-url": t,
                      "media-base64": e,
                      "media-base64-mime": o ?? s
                    });
                  }
                  Object.assign(r, {
                    "auto-dismiss": t["auto-dismiss"],
                    sound: t.sound
                  });
                  return r;
                }
              case "Loon":
                {
                  const s = {};
                  let o = t.openUrl || t.url || t["open-url"] || e;
                  o && Object.assign(s, {
                    openUrl: o
                  });
                  let r = t.mediaUrl || t["media-url"];
                  i?.startsWith("http") && (r = i);
                  r && Object.assign(s, {
                    mediaUrl: r
                  });
                  console.log(JSON.stringify(s));
                  return s;
                }
              case "Quantumult X":
                {
                  const o = {};
                  let r = t["open-url"] || t.url || t.openUrl || e;
                  r && Object.assign(o, {
                    "open-url": r
                  });
                  let a = t["media-url"] || t.mediaUrl;
                  i?.startsWith("http") && (a = i);
                  a && Object.assign(o, {
                    "media-url": a
                  });
                  let n = t["update-pasteboard"] || t.updatePasteboard || s;
                  n && Object.assign(o, {
                    "update-pasteboard": n
                  });
                  console.log(JSON.stringify(o));
                  return o;
                }
              case "Node.js":
                return;
            }
          default:
            return;
        }
      };
      if (!this.isMute) {
        switch (this.getEnv()) {
          case "Surge":
          case "Loon":
          case "Stash":
          case "Shadowrocket":
          default:
            $notification.post(e, s, i, r(o));
            break;
          case "Quantumult X":
            $notify(e, s, i, r(o));
            break;
          case "Node.js":
            break;
        }
      }
      if (!this.isMuteLog) {
        let t = ["", "==============📣系统通知📣=============="];
        t.push(e);
        s && t.push(s);
        i && t.push(i);
        console.log(t.join("\n"));
        this.logs = this.logs.concat(t);
      }
    }
    debug(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.debug && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.debug}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    info(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.info && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.info}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    warn(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.warn && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.warn}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    error(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.error && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.error}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]);
      console.log(t.map(t => t ?? String(t)).join(this.logSeparator));
    }
    logErr(t, e) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          this.log("", `❗️${this.name}, 错误!`, e, t);
          break;
        case "Node.js":
          this.log("", `❗️${this.name}, 错误!`, e, undefined !== t.message ? t.message : t, t.stack);
          break;
      }
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = (new Date().getTime() - this.startTime) / 1000;
      switch (this.log("", `🔔${this.name}, 结束! 🕛 ${e} 秒`), this.log(), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          $done(t);
          break;
        case "Node.js":
          process.exit(1);
      }
    }
  }(t, e);
}