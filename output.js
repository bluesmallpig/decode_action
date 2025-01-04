//Sat Jan 04 2025 10:25:47 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const david_F = function () {
  let F = true;
  return function (Q, t) {
    const H = F ? function () {
      {
        if (t) {
          {
            const q = t.apply(Q, arguments);
            t = null;
            return q;
          }
        }
      }
    } : function () {};
    F = false;
    return H;
  };
}();
(function () {
  david_F(this, function () {
    const Q = new RegExp("function *\\( *\\)");
    const t = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i");
    const f = david_m("init");
    !Q.test(f + "chain") || !t.test(f + "input") ? f("0") : david_m();
  })();
})();
const $ = new Env("喜马拉雅极速版");
const version = "V1.0.3";
const appName = "xmlyjsbapp";
let xmlyjsbapp = $.getjson(appName, []);
const fs = $.isNode() ? require("fs") : "";
const WebSocket = $.isNode() ? require("ws") : "";
const file = "david_cookies.js";
$.isNode() && !fs.existsSync(file) && ($.log("🔔 外挂ck文件不存在，开始创建模版>>>"), fs.writeFileSync("./david_cookies.js", "//独立CK文件，主要用来处理多账号大数据量CK,注意JRTTAPP外边不用加引号，依葫芦画瓢。\n//今日头条(三个账号)\nlet JRTTAPP = [{},{},{}]\n//番茄小说(一个账号)\nlet FQXSAPP = [{}]\n//抖音极速版(两个账号)\nlet DYJSBAPP = [{},{}]\n    \nlet APPS = {\n    JRTT: JRTTAPP,\n    FQXS: FQXSAPP,\n    DYJSB: DYJSBAPP\n}\n\nmodule.exports = APPS", m => {}));
const http = $.isNode() ? require("http") : "";
const notify = $.isNode() ? require("./sendNotify") : "";
const COOKIES = $.isNode() ? require("./david_cookies") : "";
let userId = $.getdata("tguserid") || 1;
let activeCode = $.getdata("xmlyjsbactivecode") || 0;
let xmlyjsbuserck = $.getval("xmlyjsbuserck") || 1;
let apiHost = $.getval("apiHost") || "http://106.15.104.124:8080";
$.getval("apiHosts") && (apiHost = $.getval("apiHosts"));
let flushCash = $.getval("cleanCache") || false;
const debug = 0;
let tz = $.getval("tz") || "1";
let helpUtils = undefined;
let CryptoJS = undefined;
let saveFile = false;
let xmlyjsb_ck_file = "xmlyjsb_cookies.json";
var hour = "";
var minute = "";
let sendlogs = "";
let xmlyjsblogs = [];
let additional_Params = {};
let wss = [];
let channels_status = [];
let reconectCounts = [];
let requestObjects = [];
let requestSigns = [];
let httpResult = "";
let userAuth = "";
let scriptAuth = "";
let newest_version = "";
let runAuth = "";
let systemNotify = "";
let vipAuth = "";
let isCharge = "";
let multiAccount = 1;
let buyCount = 1;
let runTotalCounts = 1;
let runedCounts = 1;
let userRank = "";
let invicode = "";
let numbers = 3;
let vipDate = "";
if ($.isNode()) {
  process.env.XMLYJSBAPP ? xmlyjsbapp = JSON.parse(process.env.XMLYJSBAPP) : xmlyjsbapp = COOKIES.XMLYJSB;
  userId = process.env.TGUSERID;
  activeCode = process.env.XMLYJSBACTIVECODE;
  process.env.APIHOST && (apiHost = process.env.APIHOST);
  process.env.APIHOSTS && (apiHost = process.env.APIHOSTS);
  process.env.CLEANCACHE && (flushCash = JSON.parse(process.env.CLEANCACHE));
  hour = new Date(new Date().getTime()).getHours();
  minute = new Date(new Date().getTime()).getMinutes();
  $.log("🔔 当前环境: Node, 当前时间：" + hour + "点");
} else {
  hour = new Date().getHours();
  minute = new Date().getMinutes();
  $.log("🔔 当前环境: 手机代理, 当前时间：" + hour + "点");
}
!(async () => {
  if (typeof $request !== "undefined") {
    await getCk();
  } else {
    if (!xmlyjsbapp) {
      $.log("📢 很抱歉，😭 没有找到账号信息！你确定配置账号信息了吗？");
      return;
    }
    $.log("📢 开始检测服务器接口状态>>>");
    let F = false;
    const Q = apiHost.split("&");
    const t = Q.length;
    for (let L = 0; L < t; L++) {
      {
        if ($.isNode()) {
          F = await checkAddress("" + Q[L], 2500);
        } else {
          if ($.isSurge() || $.isLoon()) {
            {
              F = await httpClientRequest("" + Q[L], 2500);
            }
          } else {
            F = await fetchRequest("" + Q[L], 2500);
          }
        }
        if (F == true) {
          {
            apiHost = Q[L];
            $.log("📢 接口" + (L + 1) + "[" + Q[L] + "]服务器接口正常! 🎉");
            break;
          }
        }
        if (L == t - 1 && F == false) {
          $.log("📢 抱歉，所有接口都不可用, 请前往交流群置顶获取最新的接口地址! 😭");
          $.msg($.name, "所有接口都不可用, 请尽快前往交流群置顶获取最新的接口地址!");
          return;
        }
      }
    }
    if (!activeCode || !userId || userId == 1 || activeCode == 0 || activeCode.length != 32) {
      $.log("❗️ 抱歉，你没有权限运行此脚本, 请关注电报机器人: https://t.me/DavidLoveBot");
      return;
    }
    await getScriptAuth(appName, userId, activeCode);
    $.log("📢 " + systemNotify);
    $.log("🔔 当前脚本版本号: " + version + "，最新版本号: " + newest_version);
    if (vipDate != "") {
      {
        let g = new Date(vipDate).getTime();
        let D = new Date().getTime();
        if (D > g) {
          {
            $.log("❗️ 抱歉，VIP到期了，请及时付费。");
            return;
          }
        }
      }
    }
    if (version < newest_version) {
      $.log("❗️ 当前脚本版本号低于服务器版本，请更新脚本吧！");
      sendMsg("🔔 当前脚本版本号低于服务器版本，请更新脚本吧！");
      return;
    }
    if (scriptAuth != true) {
      $.log("❗️ 抱歉, 此脚本已停用。");
      return;
    }
    if (userRank != true) {
      {
        $.log("❗️ 抱歉, 用户不合法，请先私聊机器人加入交流区。 https://t.me/DavidLoveBot");
        return;
      }
    }
    if (userAuth != true) {
      {
        $.log("❗️ 抱歉，你没有权限运行此脚本, 请关注电报机器人: https://t.me/DavidLoveBot");
        return;
      }
    }
    isCharge == true ? $.log("🔔 此脚本采用付费模式。🔒") : $.log("🔔 此脚本采用免费模式。🔓");
    if (vipDate != "") {
      {
        if (isCharge == true) {
          let p = new Date(vipDate).getTime();
          let Y = new Date().getTime();
          if (Y > p) {
            $.log("❗️ 抱歉，VIP到期了，请及时付费。");
            return;
          } else {
            $.log("🔔 尊敬的会员：您好，你是VIP用户！🔐");
          }
        }
      }
    } else {
      if (isCharge == true) {
        {
          if (vipAuth != true) {
            $.log("❗️ 抱歉，你不是付费用户, 你没有权限运行此脚本, 需要使用请查看使用说明。");
            return;
          } else {
            $.log("🔔 尊敬的会员：您好，你是付费用户！🔐");
          }
        }
      }
    }
    multiAccount > 1 && $.log("🔔 尊敬的会员，您好！你使用的是付费多用户授权账号，一次可以运行" + numbers * multiAccount + "个账号。");
    buyCount > 1 && $.log("🔔 尊敬的会员，您好！你使用的是付费多用户授权账号，一共可以运行" + runTotalCounts + "次, 已经运行了" + runedCounts + "次。");
    if (runAuth != true) {
      $.log("❗️ 抱歉,  该用户今天可能已经达到最大运行次数，明天再试吧！");
      return;
    }
    if (xmlyjsbapp.length > numbers * multiAccount) {
      $.log("❗️ 当前用户一次最多运行" + numbers * multiAccount + "个账号，需要增加账号请查看置顶说明。");
      return;
    }
    if (xmlyjsbapp.length == 0) {
      $.log("先抓取账号ck，再运行脚本吧！");
      return;
    }
    if (runedCounts + xmlyjsbapp.length > runTotalCounts) {
      $.log("📢 一共发现了" + xmlyjsbapp.length + "个账号");
      $.log("❗️ 当前用户运行次数剩余" + (runTotalCounts - runedCounts) + "次，还可以运行" + (runTotalCounts - runedCounts) + "个账号，还需要" + (xmlyjsbapp.length - (runTotalCounts - runedCounts)) + "次，可以通过赞赏后增加运行次数！");
      return;
    }
    vipDate != "" && $.log("📢 你的会员有效期到： " + vipDate);
    helpUtils = await loadUtils(flushCash);
    CryptoJS = helpUtils.createCryptoJS();
    $.log("📢 一共发现了" + xmlyjsbapp.length + "个账号");
    $.isNode() && (!fs.existsSync(xmlyjsb_ck_file) ? xmlyjsb_cks = {} : xmlyjsb_cks = JSON.parse(fs.readFileSync(xmlyjsb_ck_file, "utf8")));
    let f = [];
    let H = xmlyjsbapp.length;
    let q = 0;
    $.isNode() && process.env.XMLYJSB_THREAD_COUNT ? q = parseInt(process.env.XMLYJSB_THREAD_COUNT) : q = H;
    let U = xmlyjsbapp.length;
    if (q >= H) {
      {
        q = H;
        U = 1;
        $.log("📢 你设置的线程数是" + q + "，账号个数是" + H + "，" + U + "次可全部跑完。");
        for (let S = 0; S < xmlyjsbapp.length; S++) {
          f.push(runMultiTasks(S));
          xmlyjsblogs[S] = "";
          $.isNode() ? (channels_status[S] = 0, await init_ws(S)) : channels_status[S] = 1;
        }
        await Promise.allSettled(f).then(s => {
          if ($.isNode() && saveFile) {
            {
              $.log("[温馨提醒]: 即将本地化token，这样可以有效降低登录次数");
              fs.writeFileSync(xmlyjsb_ck_file, JSON.stringify(xmlyjsb_cks, null, 2));
            }
          }
          $.log("日志整理功能如下：");
          $.log("---------------日志整理开始--------------");
          for (let T = 0; T < xmlyjsbapp.length; T++) {
            $.log(xmlyjsblogs[T]);
            sendlogs += xmlyjsblogs[T];
          }
          $.log("---------------日志整理结束--------------");
          sendMsg(sendlogs);
        });
      }
    } else {
      U = Math.ceil(H / q);
      $.log("📢 你设置的线程数是" + q + "，账号个数是" + H + "，计算后分" + U + "次执行，一次可执行" + q + "个账号，最后一次如果不够" + q + "个账号，剩多少个账号就跑几个账号。");
      for (let u = 0; u < U; u++) {
        for (let T = u * q; T < q * (u + 1) && T < H; T++) {
          f.push(runMultiTasks(T));
          xmlyjsblogs[T] = "";
          channels_status[T] = 1;
          await init_ws(T);
        }
        await Promise.allSettled(f).then(B => {
          f = [];
          if (u == U - 1) {
            $.isNode() && saveFile && ($.log("[温馨提醒]: 即将本地化token，这样可以有效降低登录次数"), fs.writeFileSync(xmlyjsb_ck_file, JSON.stringify(xmlyjsb_cks, null, 2)));
            $.log("日志整理功能如下：");
            $.log("---------------日志整理开始--------------");
            for (let d = 0; d < xmlyjsbapp.length; d++) {
              $.log(xmlyjsblogs[d]);
              sendlogs += xmlyjsblogs[d];
            }
            $.log("---------------日志整理结束--------------");
            sendMsg(sendlogs);
          }
        });
      }
    }
  }
})().catch(m => $.logErr(m)).finally(() => $.done());
async function runMultiTasks(m) {
  const F = {
    yfcJV: "HCuOb",
    XCeHZ: "dRFir",
    aQRey: function (Q, t) {
      return Q < t;
    },
    YmVZB: function (Q, t) {
      return Q + t;
    },
    jhZIZ: function (Q, t) {
      return Q + t;
    },
    oHDfe: function (Q, t) {
      return Q + t;
    },
    RdhlJ: function (Q, t, f) {
      return Q(t, f);
    }
  };
  return new Promise((Q, t) => {
    $.log("[账号" + (m + 1 < 10 ? "0" + (m + 1) : m + 1) + "]: 开始执行 working......");
    runSubTask(Q, m);
  });
}
async function init_ws(m) {
  if ($.isNode()) {
    if (reconectCounts[m] > 0) {
      {
        $.log("[账号" + (m + 1 < 10 ? "0" + (m + 1) : m + 1) + "]: 尝试重新连接服务器>>>>>>");
      }
    }
    wss[m] = new WebSocket(apiHost.replace("http", "ws") + "/ws");
    wss[m].on("open", function t() {
      {
        $.log("[账号" + (m + 1 < 10 ? "0" + (m + 1) : m + 1) + "]: 签名通道已连接");
      }
    });
    wss[m].on("close", function f() {
      $.log("[账号" + (m + 1 < 10 ? "0" + (m + 1) : m + 1) + "]: 签名通道已关闭，原因是任务已处理完成");
    });
    wss[m].on("error", function H() {
      $.log("[账号" + (m + 1 < 10 ? "0" + (m + 1) : m + 1) + "]: 签名通道已关闭，原因是出现错误");
      channels_status[m] = 1;
      reconectCounts[m]++;
      reconectCounts[m] <= 3 && init_ws(m);
    });
  }
}
async function runSubTask(m, F) {
  $.isNode() && (await $.wait(3000, 5000));
  await userInfo(F);
  await account(F);
  hour > 5 && (await cashPageInfo(F));
  if (minute < 10) {
    {
      await addListenTime(F, 375 * (hour + 1) + helpUtils.randomNum(3, 60));
    }
  }
  await listenInfo(F);
  await signInfo(F);
  await drinkInfo(F);
  await topicInfo(F);
  await redPacketInfo(F);
  await doTasks(F);
  $.isNode() && (await wss[F].close());
  await runComplete(appName, userId);
  m();
}
async function getCk() {
  if ($request.url.match(/\/task\/record/)) {
    const f = $request.headers.Cookie;
    let H = xmlyjsbuserck - 1;
    if (xmlyjsbapp[H]) {
      {
        xmlyjsbapp[H].cookie = f;
      }
    } else {
      {
        const U = {
          cookie: f
        };
        xmlyjsbapp[H] = U;
      }
    }
    $.setdata(JSON.stringify(xmlyjsbapp, null, 2), "xmlyjsbapp");
    $.msg($.name, "喜马拉雅极速版账号" + (H + 1) + "Cookie获取成功！🎉");
  }
}
async function userInfo(m) {
  const Q = "https://passport.ximalaya.com/web/login/user";
  let t = "";
  await getReqObject(Q, t, m);
  await httpRequest("get", requestObjects[m], printCaller());
  let f = httpResult;
  if (f != null && f.ret == 0) {
    {
      $.log("[账号" + (m + 1 < 10 ? "0" + (m + 1) : m + 1) + "]: 用户名=> " + f.nickname);
      xmlyjsblogs[m] += "[账号" + (m + 1 < 10 ? "0" + (m + 1) : m + 1) + "]: 用户名=> " + f.nickname + "\n";
      $.log("[账号" + (m + 1 < 10 ? "0" + (m + 1) : m + 1) + "]: 手机号=> " + f.mobile);
      xmlyjsblogs[m] += "[账号" + (m + 1 < 10 ? "0" + (m + 1) : m + 1) + "]: 手机号=> " + f.mobile + "\n";
      xmlyjsbapp[m].uid = f.uid;
    }
  } else {
    $.log("[账号" + (m + 1 < 10 ? "0" + (m + 1) : m + 1) + "]: 用户名信息=> " + f.msg);
    xmlyjsblogs[m] += "[账号" + (m + 1 < 10 ? "0" + (m + 1) : m + 1) + "]: 用户名信息=> " + f.msg + "\n";
  }
}
async function account(m) {
  const F = {
    AhspR: function (H, q) {
      return H(q);
    },
    sukCa: function (H, q) {
      return H + q;
    },
    AvHgj: function (H) {
      return H();
    },
    dnUoz: function (H, q, U, L) {
      return H(q, U, L);
    },
    xhjQb: function (H, q, U, L) {
      return H(q, U, L);
    },
    VlqVR: "get",
    JqkIm: function (H) {
      return H();
    },
    SXSPd: function (H, q) {
      return H === q;
    },
    tMNVQ: "ekEtE",
    TOCXC: function (H, q) {
      return H + q;
    },
    qwVqK: function (H, q) {
      return H < q;
    },
    amYbr: function (H, q) {
      return H + q;
    },
    FrVrv: function (H, q) {
      return H < q;
    },
    zNKyV: function (H, q) {
      return H + q;
    },
    wOSDV: function (H, q) {
      return H / q;
    },
    UAAjG: function (H, q) {
      return H + q;
    },
    TbJTc: function (H, q) {
      return H !== q;
    },
    QYTrK: "IuFHb",
    meDFz: function (H, q) {
      return H + q;
    },
    uObIK: function (H, q) {
      return H + q;
    },
    dQqhv: function (H, q) {
      return H < q;
    },
    TUpcP: function (H, q) {
      return H + q;
    }
  };
  const Q = "https://m.ximalaya.com/speed/web-earn/account/coin";
  let t = "";
  await getReqObject(Q, t, m);
  await httpRequest("get", requestObjects[m], printCaller());
  let f = httpResult;
  if (f != null) {
    $.log("[账号" + (m + 1 < 10 ? "0" + (m + 1) : m + 1) + "]: 金币=> " + f.total);
    xmlyjsblogs[m] += "[账号" + (m + 1 < 10 ? "0" + (m + 1) : m + 1) + "]: 金币=> " + f.total + "\n";
    $.log("[账号" + (m + 1 < 10 ? "0" + (m + 1) : m + 1) + "]: 余额=> " + (f.total / 10000).toFixed(2) + "元");
    xmlyjsblogs[m] += "[账号" + (m + 1 < 10 ? "0" + (m + 1) : m + 1) + "]: 余额=> " + (f.total / 10000).toFixed(2) + "元 \n";
  } else {
    {
      $.log("[账号" + (m + 1 < 10 ? "0" + (m + 1) : m + 1) + "]: 账户信息=> " + f.msg);
      xmlyjsblogs[m] += "[账号" + (m + 1 < 10 ? "0" + (m + 1) : m + 1) + "]: 账户信息=> " + f.msg + "\n";
    }
  }
}
async function refreshToken(m) {
  const Q = "https://passport.ximalaya.com/user-http-app/v1/token/refresh";
  let t = "";
  await getReqObject(Q, t, m);
  requestObjects[m].headers["Content-Type"] = "application/x-www-form-urlencoded";
  await httpRequest("post", requestObjects[m], printCaller());
  let f = httpResult;
  f != null && f.ret == 0 ? f.newToken != null && $.log("[账号" + (m + 1 < 10 ? "0" + (m + 1) : m + 1) + "]: 刷新token=> " + f.data.newToken) : ($.log("[账号" + (m + 1 < 10 ? "0" + (m + 1) : m + 1) + "]: 刷新token=> " + f.msg), xmlyjsblogs[m] += "[账号" + (m + 1 < 10 ? "0" + (m + 1) : m + 1) + "]: 刷新token=> " + f.msg + "\n");
}
async function addListenTime(m, F) {
  const Q = {
    IWyFj: function (L, w, l, v) {
      return L(w, l, v);
    },
    flImR: "Content-Type",
    wvknr: "application/x-www-form-urlencoded",
    cHWMe: "post",
    bFufg: function (L, w) {
      return L != w;
    },
    GWFtw: function (L, w) {
      return L === w;
    },
    uADgF: "qrOtN",
    AiZvR: function (L, w) {
      return L < w;
    },
    sfQAc: function (L, w) {
      return L + w;
    },
    BLBNV: function (L, w) {
      return L + w;
    },
    DClRq: function (L, w) {
      return L + w;
    },
    xJyOt: function (L, w) {
      return L + w;
    },
    AozZx: function (L, w) {
      return L < w;
    },
    tbfuN: function (L, w) {
      return L + w;
    },
    USrZX: function (L, w) {
      return L + w;
    },
    mjrvS: function (L, w) {
      return L + w;
    },
    dDRhw: function (L, w) {
      return L + w;
    }
  };
  const t = "https://mobwsa.ximalaya.com/pizza-category/ball/saveListenTime";
  let f = helpUtils.ts13();
  let H = CryptoJS.MD5("currenttimemillis=" + f + "&listentime=" + F + "&uid=" + xmlyjsbapp[m].uid + "&q35435432sadks2i3546p2ndkcaqiwurhqfebt4kn").toString();
  let q = "activtyId=listenAward&currentTimeMillis=" + f + "&listenTime=" + F + "&nativeListenTime=" + F + "&signature=" + H + "&uid=" + xmlyjsbapp[m].uid;
  await getReqObject(t, q, m);
  requestObjects[m].headers["Content-Type"] = "application/x-www-form-urlencoded";
  await httpRequest("post", requestObjects[m], printCaller());
  let U = httpResult;
  if (U != null) {
    {
      $.log("[账号" + (m + 1 < 10 ? "0" + (m + 1) : m + 1) + "]: " + title + "=> " + U.coin + "金币");
      xmlyjsblogs[m] += "[账号" + (m + 1 < 10 ? "0" + (m + 1) : m + 1) + "]: " + title + "=> " + U.coin + "金币\n";
    }
  } else {
    $.log("[账号" + (m + 1 < 10 ? "0" + (m + 1) : m + 1) + "]: " + title + "=> " + U.msg);
    xmlyjsblogs[m] += "[账号" + (m + 1 < 10 ? "0" + (m + 1) : m + 1) + "]: " + title + "=> " + U.msg + "\n";
  }
}
async function doTasks(F) {
  const t = "https://m.ximalaya.com/speed/web-earn/task/record?taskLabels=1,2";
  let f = "";
  await getReqObject(t, f, F);
  await httpRequest("get", requestObjects[F], printCaller());
  let H = httpResult;
  if (H != null) {
    let q = H.taskList;
    for (let U = 0; U < q.length; U++) {
      {
        let L = q[U];
        if (L.taskId == 65) {
          {
            let w = L.step - L.process;
            for (let l = 0; l < w; l++) {
              let v = await getToken(F);
              await $.wait(helpUtils.randomNum(10000, 15000));
              await getScore(F, v, 2, L.title + "(" + (L.process + l + 1) + "/" + L.step + ")");
            }
          }
        }
      }
    }
  } else {
    $.log("[账号" + (F + 1 < 10 ? "0" + (F + 1) : F + 1) + "]: 任务中心=> " + H.msg);
    xmlyjsblogs[F] += "[账号" + (F + 1 < 10 ? "0" + (F + 1) : F + 1) + "]: 任务中心=> " + H.msg + "\n";
  }
}
async function signInfo(m) {
  const Q = "https://m.ximalaya.com/speed/web-earn/check-in/record?time=" + helpUtils.ts13();
  let t = "";
  await getReqObject(Q, t, m);
  await httpRequest("get", requestObjects[m], printCaller());
  let f = httpResult;
  if (f != null) {
    let H = f.receivedToday;
    if (H == null || H == false) {
      {
        let q = f.checkInDetails[f.thatDay - 1];
        await signIn(m, q.checkInAward);
      }
    }
  } else {
    $.log("[账号" + (m + 1 < 10 ? "0" + (m + 1) : m + 1) + "]: 签到记录=> " + f.msg);
    xmlyjsblogs[m] += "[账号" + (m + 1 < 10 ? "0" + (m + 1) : m + 1) + "]: 签到记录=> " + f.msg + "\n";
  }
}
async function signIn(m, F) {
  const t = "https://m.ximalaya.com/speed/web-earn/check-in/check";
  let f = helpUtils.createDayjs();
  let H = f().format("YYYYMMDD");
  await selectChannel(m, "date=" + H + "&uid=" + xmlyjsbapp[m].uid);
  let q = requestSigns[m];
  let U = "{\"checkData\":\"" + q + "\",\"makeUp\":false}";
  await getReqObject(t, U, m);
  await httpRequest("post", requestObjects[m], printCaller());
  let L = httpResult;
  if (L != null) {
    {
      $.log("[账号" + (m + 1 < 10 ? "0" + (m + 1) : m + 1) + "]: 签到=> 签到成功，获得" + F + "金币");
      xmlyjsblogs[m] += "[账号" + (m + 1 < 10 ? "0" + (m + 1) : m + 1) + "]: 签到=> 签到成功，获得" + F + "金币\n";
      let l = await getToken(m);
      await $.wait(helpUtils.randomNum(10000, 15000));
      await getScore(m, l, 1, "每日签到看广告奖励");
    }
  } else {
    $.log("[账号" + (m + 1 < 10 ? "0" + (m + 1) : m + 1) + "]: 签到=> " + L.msg);
    xmlyjsblogs[m] += "[账号" + (m + 1 < 10 ? "0" + (m + 1) : m + 1) + "]: 签到=> " + L.msg + "\n";
  }
}
async function getToken(m) {
  const Q = "https://m.ximalaya.com/speed/web-earn/ad/token";
  let t = "";
  await getReqObject(Q, t, m);
  await httpRequest("get", requestObjects[m], printCaller());
  let f = httpResult;
  if (f != null) {
    return f.id;
  } else {
    $.log("[账号" + (m + 1 < 10 ? "0" + (m + 1) : m + 1) + "]: 获取广告token=> " + f.msg);
    xmlyjsblogs[m] += "[账号" + (m + 1 < 10 ? "0" + (m + 1) : m + 1) + "]: 获取广告token=> " + f.msg + "\n";
  }
}
async function getScore(m, F, Q, t) {
  const H = "https://m.ximalaya.com/speed/web-earn/ad/score";
  let q = CryptoJS.MD5("businesstype=" + Q + "&token=" + F + "&uid=" + xmlyjsbapp[m].uid + "&q35435432sadks2i3546p2ndkcaqiwurhqfebt4kn").toString();
  let U = "{\"sign\":\"" + q + "\",\"businessType\":" + Q + "}";
  await getReqObject(H, U, m);
  await httpRequest("post", requestObjects[m], printCaller());
  let L = httpResult;
  L != null ? ($.log("[账号" + (m + 1 < 10 ? "0" + (m + 1) : m + 1) + "]: " + t + "=> " + L.coin + "金币"), xmlyjsblogs[m] += "[账号" + (m + 1 < 10 ? "0" + (m + 1) : m + 1) + "]: " + t + "=> " + L.coin + "金币\n") : ($.log("[账号" + (m + 1 < 10 ? "0" + (m + 1) : m + 1) + "]: " + t + "=> " + L.msg), xmlyjsblogs[m] += "[账号" + (m + 1 < 10 ? "0" + (m + 1) : m + 1) + "]: " + t + "=> " + L.msg + "\n");
}
async function redPacketInfo(m) {
  const F = {
    tUZKO: function (H, q) {
      return H(q);
    },
    tiRuo: function (H, q, U, L) {
      return H(q, U, L);
    },
    ucLRY: function (H, q, U, L) {
      return H(q, U, L);
    },
    eCWtu: function (H, q) {
      return H != q;
    },
    tcBtc: function (H, q) {
      return H !== q;
    },
    yxOgb: "NVSTn",
    YiCdE: "DQsNn",
    EaxiD: function (H, q) {
      return H == q;
    },
    bQemX: function (H, q) {
      return H === q;
    },
    mcdtg: "HEpCD",
    FylVF: function (H, q) {
      return H < q;
    },
    KBxWf: function (H, q) {
      return H + q;
    },
    xfcBx: function (H, q) {
      return H + q;
    },
    ysWlr: function (H, q) {
      return H < q;
    }
  };
  const Q = "https://m.ximalaya.com/speed/web-earn/redPacket/config";
  let t = "";
  await getReqObject(Q, t, m);
  await httpRequest("get", requestObjects[m], printCaller());
  let f = httpResult;
  if (f != null && f.code == 0) {
    {
      if (f.data.waitTime == 0) {
        {
          let H = f.data.stageId;
          await receiveRedPacketReward(m, 1, H);
          await $.wait(helpUtils.randomNum(10000, 15000));
          await receiveRedPacketReward(m, 2, H);
        }
      }
    }
  } else {
    $.log("[账号" + (m + 1 < 10 ? "0" + (m + 1) : m + 1) + "]: 宝箱信息=> " + f.msg);
    xmlyjsblogs[m] += "[账号" + (m + 1 < 10 ? "0" + (m + 1) : m + 1) + "]: 宝箱信息=> " + f.msg + "\n";
  }
}
async function receiveRedPacketReward(F, Q, t) {
  const H = "https://m.ximalaya.com/speed/web-earn/redPacket/receive/v2";
  let q = helpUtils.ts13();
  await selectChannel(F, "stageId=" + t + "&receiveType=" + Q + "&timestamp=" + q + "&uid=" + xmlyjsbapp[F].uid);
  let U = requestSigns[F];
  let w = {
    receiveType: Q,
    signature: U,
    timestamp: q,
    stageId: t
  };
  await getReqObject(H, JSON.stringify(w), F);
  await httpRequest("post", requestObjects[F], printCaller());
  let l = httpResult;
  l != null && l.code == 0 ? Q == 1 ? ($.log("[账号" + (F + 1 < 10 ? "0" + (F + 1) : F + 1) + "]: 打开宝箱=> 获得" + l.data.score + "金币"), xmlyjsblogs[F] += "[账号" + (F + 1 < 10 ? "0" + (F + 1) : F + 1) + "]: 打开宝箱=> 获得" + l.data.score + "金币\n") : ($.log("[账号" + (F + 1 < 10 ? "0" + (F + 1) : F + 1) + "]: 开宝箱看广告得双倍奖励=> 获得" + l.data.score + "金币"), xmlyjsblogs[F] += "[账号" + (F + 1 < 10 ? "0" + (F + 1) : F + 1) + "]: 开宝箱看广告得双倍奖励=> 获得" + l.data.score + "金币\n") : ($.log("[账号" + (F + 1 < 10 ? "0" + (F + 1) : F + 1) + "]: 宝箱奖励=> " + l.msg), xmlyjsblogs[F] += "[账号" + (F + 1 < 10 ? "0" + (F + 1) : F + 1) + "]: 宝箱奖励=> " + l.msg + "\n");
}
async function topicInfo(m) {
  const Q = "https://m.ximalaya.com/speed/web-earn/topic/user";
  let t = "";
  await getReqObject(Q, t, m);
  await httpRequest("get", requestObjects[m], printCaller());
  let f = httpResult;
  if (f != null && f.code == 0) {
    f.data.stamina > 0 && (await startQuestion(m));
  } else {
    {
      $.log("[账号" + (m + 1 < 10 ? "0" + (m + 1) : m + 1) + "]: 宝箱信息=> " + f.msg);
      xmlyjsblogs[m] += "[账号" + (m + 1 < 10 ? "0" + (m + 1) : m + 1) + "]: 宝箱信息=> " + f.msg + "\n";
    }
  }
}
async function startQuestion(m) {
  const Q = "https://m.ximalaya.com/speed/web-earn/topic/start";
  let t = "";
  await getReqObject(Q, t, m);
  await httpRequest("get", requestObjects[m], printCaller());
  let f = httpResult;
  if (f != null && f.code == 0) {
    {
      let q = f.data.paperId;
      let U = f.data.topics.length;
      let L = f.data.topics[U - 1].topicId;
      await $.wait(helpUtils.randomNum(10000, 15000));
      await receiveQuestionReward(m, 1, q, L, U);
      await $.wait(helpUtils.randomNum(10000, 15000));
      await receiveQuestionReward(m, 2, q, L, U);
    }
  } else {
    $.log("[账号" + (m + 1 < 10 ? "0" + (m + 1) : m + 1) + "]: 宝箱信息=> " + f.msg);
    xmlyjsblogs[m] += "[账号" + (m + 1 < 10 ? "0" + (m + 1) : m + 1) + "]: 宝箱信息=> " + f.msg + "\n";
  }
}
async function receiveQuestionReward(F, Q, t, f, H) {
  const U = "https://m.ximalaya.com/speed/web-earn/topic/reward/v2";
  let L = helpUtils.ts13();
  await selectChannel(F, "lastTopicId=" + f + "&numOfAnswers=" + H + "&receiveType=" + Q + "&timestamp=" + L + "&uid=" + xmlyjsbapp[F].uid);
  let w = requestSigns[F];
  let v = {
    numOfAnswers: H,
    paperId: t,
    signature: w,
    timestamp: L,
    receiveType: Q,
    lastTopicId: f
  };
  await getReqObject(U, JSON.stringify(v), F);
  await httpRequest("post", requestObjects[F], printCaller());
  let C = httpResult;
  C != null && C.code == 0 ? Q == 1 ? ($.log("[账号" + (F + 1 < 10 ? "0" + (F + 1) : F + 1) + "]: 答题成功=> 获得" + C.data.reward + "金币"), xmlyjsblogs[F] += "[账号" + (F + 1 < 10 ? "0" + (F + 1) : F + 1) + "]: 答题成功=> " + C.data.reward + "金币\n") : ($.log("[账号" + (F + 1 < 10 ? "0" + (F + 1) : F + 1) + "]: 答题成功看广告=> 翻了" + C.data.multiple + "倍，获得" + C.data.reward + "金币"), xmlyjsblogs[F] += "[账号" + (F + 1 < 10 ? "0" + (F + 1) : F + 1) + "]: 答题成功看广告=> 翻了" + C.data.multiple + "倍，获得" + C.data.reward + "金币\n") : ($.log("[账号" + (F + 1 < 10 ? "0" + (F + 1) : F + 1) + "]: 答题奖励=> " + C.msg), xmlyjsblogs[F] += "[账号" + (F + 1 < 10 ? "0" + (F + 1) : F + 1) + "]: 答题奖励=> " + C.msg + "\n");
}
async function drinkInfo(m) {
  const Q = "https://m.ximalaya.com/speed/web-earn/drink/detail?timestamp=" + helpUtils.ts13();
  let t = "";
  await getReqObject(Q, t, m);
  await httpRequest("get", requestObjects[m], printCaller());
  let f = httpResult;
  if (f != null && f.code == 0) {
    let H = f.data.drinks;
    for (let q = 0; q < H.length; q++) {
      let U = H[q];
      if (U.receiveStatus == 2) {
        await receiveDrinkReward(m, U, 1);
        await $.wait(helpUtils.randomNum(10000, 15000));
        await receiveDrinkReward(m, U, 2);
      } else {
        U.receiveStatus == 4 && (await $.wait(helpUtils.randomNum(10000, 15000)), await receiveDrinkReward(m, U, 3));
      }
    }
  } else {
    $.log("[账号" + (m + 1 < 10 ? "0" + (m + 1) : m + 1) + "]: 每日喝水信息=> " + f.msg);
    xmlyjsblogs[m] += "[账号" + (m + 1 < 10 ? "0" + (m + 1) : m + 1) + "]: 每日喝水信息=> " + f.msg + "\n";
  }
}
async function receiveDrinkReward(F, Q, t) {
  const H = "https://m.ximalaya.com/speed/web-earn/drink/receive/v2";
  let q = helpUtils.ts13();
  await selectChannel(F, "stageId=" + Q.stageId + "&isDouble=" + t + "&timestamp=" + q + "&uid=" + xmlyjsbapp[F].uid);
  let U = requestSigns[F];
  let w = {
    isDouble: t,
    timestamp: q,
    signature: U,
    stageId: Q.stageId
  };
  await getReqObject(H, JSON.stringify(w), F);
  await httpRequest("post", requestObjects[F], printCaller());
  let l = httpResult;
  if (l != null && l.code == 0) {
    if (t == 1) {
      $.log("[账号" + (F + 1 < 10 ? "0" + (F + 1) : F + 1) + "]: " + Q.title + "(" + Q.description + ")=> 获得" + l.data.score + "金币");
      xmlyjsblogs[F] += "[账号" + (F + 1 < 10 ? "0" + (F + 1) : F + 1) + "]: " + Q.title + "(" + Q.description + ")=> " + l.data.score + "金币\n";
    } else {
      t == 2 ? ($.log("[账号" + (F + 1 < 10 ? "0" + (F + 1) : F + 1) + "]: " + Q.title + "_看广告=> 获得" + l.data.score + "金币"), xmlyjsblogs[F] += "[账号" + (F + 1 < 10 ? "0" + (F + 1) : F + 1) + "]: " + Q.title + "_看广告=> 获得" + l.data.score + "金币\n") : ($.log("[账号" + (F + 1 < 10 ? "0" + (F + 1) : F + 1) + "]: " + Q.title + "_(补)=> 获得" + l.data.score + "金币"), xmlyjsblogs[F] += "[账号" + (F + 1 < 10 ? "0" + (F + 1) : F + 1) + "]: " + Q.title + "_(补)=> 获得" + l.data.score + "金币\n");
    }
  } else {
    $.log("[账号" + (F + 1 < 10 ? "0" + (F + 1) : F + 1) + "]: " + Q.title + "=> " + l.msg);
    xmlyjsblogs[F] += "[账号" + (F + 1 < 10 ? "0" + (F + 1) : F + 1) + "]: " + Q.title + "=> " + l.msg + "\n";
  }
}
async function listenInfo(F) {
  const t = "https://m.ximalaya.com/speed/web-earn/listen/b/coin/config?ts=" + helpUtils.ts13();
  let f = "";
  await getReqObject(t, f, F);
  await httpRequest("get", requestObjects[F], printCaller());
  let H = httpResult;
  if (H != null && H.code == 0) {
    {
      let U = H.data.coinList;
      let L = H.data.positionList;
      let l = {
        videoAdType: 1,
        positionId: 0,
        positionName: "",
        coinSceneId: 0
      };
      let v = L.find(g => g.positionName == "sub_listentime_double_video");
      let C = L.find(g => g.positionName == "sub_listentime_video");
      let o = 375 * (hour + 1);
      for (let g = 0; g < U.length; g++) {
        let D = U[g];
        if (D.coinStatus == 1 && o >= D.listenTime) {
          if (g == U.length - 1) {
            await receiveListenReward(F, D, H.data.priodId, C);
            await $.wait(helpUtils.randomNum(10000, 15000));
            await receiveListenReward(F, D, H.data.priodId, v);
            await $.wait(helpUtils.randomNum(5000, 10000));
          } else {
            {
              await receiveListenReward(F, D, H.data.priodId, l);
              await $.wait(helpUtils.randomNum(10000, 15000));
              await receiveListenReward(F, D, H.data.priodId, v);
              await $.wait(helpUtils.randomNum(5000, 10000));
            }
          }
        } else {
          D.coinStatus == 3 && D.hasDouble == false && (await receiveListenReward(F, D, H.data.priodId, v));
        }
      }
    }
  } else {
    $.log("[账号" + (F + 1 < 10 ? "0" + (F + 1) : F + 1) + "]: 听书奖励信息=> " + H.msg);
    xmlyjsblogs[F] += "[账号" + (F + 1 < 10 ? "0" + (F + 1) : F + 1) + "]: 听书奖励信息=> " + H.msg + "\n";
  }
}
async function receiveListenReward(F, Q, t, f) {
  const q = "https://m.ximalaya.com/speed/web-earn/listen/b/award";
  let U = helpUtils.ts13();
  let L = "priodId=" + t + "&stageId=" + Q.stageId + "&listenTime=" + Q.listenTime + "&coinSceneId=" + f.coinSceneId + "&positionId=" + f.positionId + "&positionName=" + f.positionName + "&timestamp=" + U + "&randomDouble=" + f.videoAdType;
  await selectChannel(F, L);
  let w = requestSigns[F];
  let v = {
    stageId: Q.stageId,
    positionName: f.positionName,
    randomDouble: f.videoAdType,
    priodId: t,
    signature: w,
    positionId: f.positionId,
    coinSceneId: f.coinSceneId,
    timestamp: U,
    listenTime: Q.listenTime
  };
  await getReqObject(q, JSON.stringify(v), F);
  await httpRequest("post", requestObjects[F], printCaller());
  let C = httpResult;
  if (C != null && C.code == 0) {
    if (f.videoAdType == 1) {
      $.log("[账号" + (F + 1 < 10 ? "0" + (F + 1) : F + 1) + "]: " + Q.title + "(" + Q.comment + ")=> 获得" + C.data.coinNum + "金币");
      xmlyjsblogs[F] += "[账号" + (F + 1 < 10 ? "0" + (F + 1) : F + 1) + "]: " + Q.title + "(" + Q.comment + ")=> " + C.data.coinNum + "金币\n";
    } else {
      f.videoAdType == 2 && ($.log("[账号" + (F + 1 < 10 ? "0" + (F + 1) : F + 1) + "]: " + Q.title + "_看广告=> 获得" + C.data.coinNum + "金币"), xmlyjsblogs[F] += "[账号" + (F + 1 < 10 ? "0" + (F + 1) : F + 1) + "]: " + Q.title + "_看广告=> 获得" + C.data.coinNum + "金币\n");
    }
  } else {
    $.log("[账号" + (F + 1 < 10 ? "0" + (F + 1) : F + 1) + "]: " + Q.title + "=> " + C.msg);
    xmlyjsblogs[F] += "[账号" + (F + 1 < 10 ? "0" + (F + 1) : F + 1) + "]: " + Q.title + "=> " + C.msg + "\n";
  }
}
async function receiveYesterdayReward(F, Q) {
  let f = helpUtils.ts13();
  const H = "https://m.ximalaya.com/speed/web-earn/account/showAward/receive?ts=" + f;
  await selectChannel(F, "stageId=" + Q + "&timestamp=" + f + "&uid=" + xmlyjsbapp[F].uid);
  let q = requestSigns[F];
  let L = {
    stageId: Q,
    signature: q,
    timestamp: f
  };
  await getReqObject(H, JSON.stringify(L), F);
  await httpRequest("post", requestObjects[F], printCaller());
  let w = httpResult;
  w != null && w.ret == 0 ? ($.log("[账号" + (F + 1 < 10 ? "0" + (F + 1) : F + 1) + "]: 昨日盈利奖励=> " + w.data.extraAward + "金币"), xmlyjsblogs[F] += "[账号" + (F + 1 < 10 ? "0" + (F + 1) : F + 1) + "]: 昨日盈利奖励=> " + w.data.extraAward + "金币\n") : ($.log("[账号" + (F + 1 < 10 ? "0" + (F + 1) : F + 1) + "]: 昨日盈利奖励=> " + w.msg), xmlyjsblogs[F] += "[账号" + (F + 1 < 10 ? "0" + (F + 1) : F + 1) + "]: 昨日盈利奖励=> " + w.msg + "\n");
}
async function thirdAccountInfo(m) {
  const F = {
    RkaHO: function (q, U) {
      return q < U;
    },
    ULTkw: function (q, U) {
      return q + U;
    },
    zdQXK: function (q, U) {
      return q + U;
    },
    AgMVQ: function (q, U, L, w) {
      return q(U, L, w);
    },
    yVAyt: function (q, U, L, w) {
      return q(U, L, w);
    },
    PlIbI: "get",
    THjoO: function (q) {
      return q();
    },
    ToXVo: function (q, U) {
      return q != U;
    },
    enLFC: function (q, U) {
      return q == U;
    },
    sxMdY: function (q, U) {
      return q === U;
    },
    QsTfX: "dLbtX",
    PqKiT: function (q, U) {
      return q === U;
    },
    WLOQT: "nVoEO",
    wFmoP: function (q, U) {
      return q + U;
    }
  };
  const Q = "https://m.ximalaya.com/speed/web-earn/account/third-pay-account/3";
  let t = "";
  let f = null;
  await getReqObject(Q, t, m);
  await httpRequest("get", requestObjects[m], printCaller());
  let H = httpResult;
  if (H != null && H.code == 0) {
    let q = H.data;
    if (q.length > 0) {
      {
        f = q[0];
      }
    }
    return f;
  } else {
    $.log("[账号" + (m + 1 < 10 ? "0" + (m + 1) : m + 1) + "]: 账户信息=> " + H.msg);
    qjxslogs[m] += "[账号" + (m + 1 < 10 ? "0" + (m + 1) : m + 1) + "]: 账户信息=> " + H.msg + "\n";
  }
}
async function withdraw(m, F) {
  const t = "https://m.ximalaya.com/speed/web-earn/account/take-out";
  let f = await thirdAccountInfo(m);
  if (f == null) {
    $.log("[账号" + (m + 1 < 10 ? "0" + (m + 1) : m + 1) + "]: 账户信息=> 请绑定支付宝，再尝试提现");
    qjxslogs[m] += "[账号" + (m + 1 < 10 ? "0" + (m + 1) : m + 1) + "]: 账户信息=> 请绑定支付宝，再尝试提现\n";
    return;
  }
  let H = helpUtils.ts13();
  let q = "accountType=" + f.accountType + "&accountNumber=" + f.accountNumber + "&amount=" + F + "&timestamp=" + H + "&uid=" + xmlyjsbapp[m].uid;
  let U = encrypt(q);
  let L = {
    signature: U,
    timestamp: parseInt(H),
    name: f.name,
    accountType: f.accountType,
    accountNumber: f.accountNumber,
    amount: F,
    takeOutType: 2
  };
  await getReqObject(t, JSON.stringify(L), m);
  await httpRequest("post", requestObjects[m], printCaller());
  let w = httpResult;
  w != null && w.code == 0 ? ($.log("[账号" + (m + 1 < 10 ? "0" + (m + 1) : m + 1) + "]: 提现=> 成功提现" + F + "元"), qjxslogs[m] += "[账号" + (m + 1 < 10 ? "0" + (m + 1) : m + 1) + "]: 提现=> 成功提现" + F + "元\n") : ($.log("[账号" + (m + 1 < 10 ? "0" + (m + 1) : m + 1) + "]: 提现结果=> " + w.msg), qjxslogs[m] += "[账号" + (m + 1 < 10 ? "0" + (m + 1) : m + 1) + "]: 提现结果=> " + w.msg + "\n");
}
async function cashPageInfo(m) {
  const Q = "https://m.ximalaya.com/growth-ssr-speed-welfare-center/page/withdraw?_full_with_transparent_bar=1";
  let t = "";
  await getReqObject(Q, t, m);
  await httpRequest("get", requestObjects[m], printCaller());
  let f = httpResult;
  if (f != null) {
    const H = helpUtils.createCheerio();
    const q = H.load(f);
    let U = JSON.parse(q("#__NEXT_DATA__").text());
    let L = U.props.pageProps.config.continuousDays;
    let w = U.props.pageProps.coin.total;
    let l = U.props.pageProps.config.alipayTakeOutInfo.activityTakeOutInfo.activityList;
    let v = undefined;
    let C = l.find(g => g.amount == 20);
    let o = l.find(g => g.amount == 50);
    if (o && o.takeOutTimes > 0 && o.leastContinuousDays <= L && w >= 500000) {
      {
        await withdraw(m, 50);
      }
    } else {
      if (C && C.takeOutTimes > 0 && C.leastContinuousDays <= L && w >= 200000) {
        await withdraw(m, 20);
      }
    }
  } else {
    {
      $.log("[账号" + (m + 1 < 10 ? "0" + (m + 1) : m + 1) + "]: 提现页面信息=> " + f.msg);
      qjxslogs[m] += "[账号" + (m + 1 < 10 ? "0" + (m + 1) : m + 1) + "]: 提现页面信息=> " + f.msg + "\n";
    }
  }
}
function encrypt(m, F) {
  let t = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCii08L3DUTt+5D+TVn/q9WtPSPjp3MfIZ+NDE/U6SxMCf4rROgHuEb154XuEZJMIEa61oyHGAB1QyuBwjnhO48YRsSbe5LAuLFElZVLATJudAmbTYzXQaZyVMeplngwuIuduVa85rLXMnJpmb4cAvQZesKPeEtIHF98r48yKiIfwIDAQAB";
  F && (t = "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAmT0BmIzShjzigjWWODzl8JKlqKnyLAujWTMBp3qxZn74i4WryJtPZMCreMke14MLjur3Cor6XGwwAXvoA5/iewJnQi6s75ftDqCqOZ8LIfx3ZoZJN7Q0jnxKJ8DRfm2tqVIrkcyv3y5LwTAWZEL8eRpbP4VHHFvBm7c/75zuDlXPBRAoz+8uTgFCOIrEQOpLACX0cJ1LnusvQtjGj8qXKc/PIcJNHh5BV4t04XiX21999R2DjdTDus2g7vv5OMnFzRBROa+p+FQUTPuhGo0fwNvnxb1+BZB4Lcdq0rcDQEVErj9MsLyptu/Vx2+hey40uPcJ4eaSjSfcVHfMUHmh3QIDAQAB");
  const f = new (helpUtils.loadJSEncrypt())();
  f.setPublicKey(t);
  const H = (q, U) => {
    const L = {
      xMIJp: function (w, l) {
        return w(l);
      }
    };
    {
      const l = 117;
      if (U.length < l) {
        {
          return q.encrypt(U);
        }
      }
      const v = [];
      const C = Math.ceil(U.length / l);
      for (let g = 0; g < C; g++) {
        v.push(U.substring(g * l, (g + 1) * l));
      }
      return v.map(D => q.encrypt(D)).join("");
    }
  };
  return H(f, m);
}
function getScriptAuth(m, F, Q) {
  return new Promise((f, H) => {
    const q = {
      MIPAB: "Utils_Code",
      vQoOG: function (U, L) {
        return U(L);
      },
      sUHzc: function (U) {
        return U();
      },
      GYsNZ: function (U, L, w) {
        return U(L, w);
      },
      UJwzn: "message"
    };
    {
      const L = apiHost + "/script/permissions/lastest";
      const l = {
        appName: m,
        userId: F,
        activityCode: Q,
        version: version
      };
      const v = {
        "Content-Type": "application/json",
        accept: "application/json"
      };
      const C = {
        url: L,
        headers: v,
        body: JSON.stringify(l)
      };
      $.post(C, async (o, g, D) => {
        {
          if (D && D != null && D.replace(/\"/g, "").length > 50) {
            const O = D.replace(/\"/g, "").slice(34);
            helpUtils = await loadUtils(flushCash);
            CryptoJS = helpUtils.createCryptoJS();
            result = JSON.parse(CryptoJS.enc.Base64.parse(O).toString(CryptoJS.enc.Utf8));
            try {
              newest_version = result.version;
              userAuth = result.userAuth;
              scriptAuth = result.scriptAuth;
              runAuth = result.runAuth;
              systemNotify = result.notify;
              vipAuth = result.vipAuth;
              isCharge = result.isCharge;
              multiAccount = result.runAcounts;
              buyCount = result.buyCount;
              runedCounts = result.runedCounts;
              runTotalCounts = result.runTotalCounts;
              userRank = result.userRank;
              invicode = result.invicate;
              numbers = result.accountNumbers;
              vipDate = result.vipDate;
            } catch (z) {
              {
                $.log(z);
              }
            }
          } else {
            $.log("请求服务器接口出现错误，请检查网络连接情况");
          }
          f();
        }
      });
    }
  });
}
function runComplete(m, F) {
  return new Promise((t, f) => {
    const H = apiHost + "/script/run/add";
    const U = {
      appName: m,
      userId: F,
      activityCode: activeCode,
      version: version
    };
    const L = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const w = {
      url: H,
      headers: L,
      body: JSON.stringify(U)
    };
    $.post(w, async (l, v, C) => {
      t();
    });
  });
}
function loadToken(m) {
  let F = xmlyjsbapp[m].mobile;
  xmlyjsb_item = xmlyjsb_cks["" + F];
  return xmlyjsb_item ? (xmlyjsbapp[m].refreshToken = xmlyjsb_item.refreshToken, xmlyjsbapp[m].accessToken = xmlyjsb_item.accessToken, true) : false;
}
function saveToken(m) {
  xmlyjsb_cks[xmlyjsbapp[m].mobile] = {
    refreshToken: xmlyjsbapp[m].refreshToken,
    accessToken: xmlyjsbapp[m].accessToken,
    ts: ts13()
  };
}
async function loadUtils(m) {
  const F = {
    NdnMD: function (t, f) {
      return t(f);
    },
    FfUQb: "Quantumult X",
    Ilhoc: "Utils_Code",
    CqUMe: function (t, f) {
      return t(f);
    },
    Zzsly: function (t) {
      return t();
    },
    bZcFr: "phrit",
    jRgXP: "http://script.david2024.top/scripts/tools/JS-Utils.js",
    ORXvm: function (t, f) {
      return t && f;
    },
    RmkPt: function (t, f) {
      return t !== f;
    },
    VaOrK: "nNwId"
  };
  let Q = $.getdata("Utils_Code") || "";
  if (!m && Q && Object.keys(Q).length) {
    {
      $.log("📢 缓存中存在JS-Utils");
      eval(Q);
      return creatUtils();
    }
  }
  $.log("📢 开始初始化JS-Utils");
  return new Promise(async f => {
    {
      $.getScript("http://script.david2024.top/scripts/tools/JS-Utils.js").then(U => {
        $.setdata(U, "Utils_Code");
        eval(U);
        $.log("📢 JS-Utils加载成功");
        f(creatUtils());
      });
    }
  });
}
function checkAddress(m, F) {
  return new Promise((t, f) => {
    const H = {
      RQjjE: function (L, w) {
        return L <= w;
      },
      JPJYz: function (L, w) {
        return L > w;
      },
      wOeOI: function (L, w) {
        return L !== w;
      },
      dTRIB: "IRUnV",
      zlnUz: "pluGG",
      OLHGd: function (L, w) {
        return L(w);
      }
    };
    const q = setTimeout(() => {
      t(false);
    }, F);
    const U = http.get(m, L => {
      clearTimeout(q);
      if (L.statusCode === 404) {
        t(true);
      } else {
        {
          t(false);
        }
      }
    });
    U.on("error", L => {
      {
        clearTimeout(q);
        t(false);
      }
    });
    U.on("timeout", () => {
      U.abort();
      f(new Error("请求超时"));
    });
  });
}
async function fetchRequest(m, F = 3000) {
  return new Promise((t, f) => {
    const H = {
      zsNWj: "tHaCF",
      vUMFn: function (L, w) {
        return L == w;
      }
    };
    const U = {
      url: m + "/docs"
    };
    setTimeout(() => {
      t(false);
    }, F);
    $.get(U, async (L, w, l) => {
      w.status == 401 ? t(true) : t(false);
    });
  });
}
async function httpClientRequest(m, F = 3000) {
  const Q = {
    scxrS: "object",
    arKYO: function (t, f) {
      return t == f;
    },
    FSJhM: "{\"detail\":\"Not Found\"}",
    VTesV: "IeOIL",
    oFkZc: function (t, f) {
      return t(f);
    },
    ZAGjH: function (t, f) {
      return t(f);
    },
    pIciJ: function (t, f) {
      return t !== f;
    },
    iLnsU: "LzjBE",
    xvkzu: function (t, f) {
      return t + f;
    },
    cPWxf: function (t, f, H) {
      return t(f, H);
    }
  };
  return new Promise((t, f) => {
    const H = {
      jhnLt: function (q, U) {
        return q(U);
      },
      YczNV: function (q, U) {
        return q(U);
      },
      VoLOc: "请求超时"
    };
    {
      const U = {
        url: m + "/"
      };
      setTimeout(() => {
        t(false);
      }, F);
      $httpClient.get(U, async (L, w, l) => {
        l == "{\"detail\":\"Not Found\"}" ? t(true) : t(false);
      });
    }
  });
}
async function redisGet(m, F, Q) {
  return new Promise((f, H) => {
    const U = apiHost + "/redis/hash/get/" + F + "/" + Q;
    const L = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const l = {
      url: U,
      headers: L
    };
    $.get(l, async (v, C, o) => {
      const g = o.replace(/\"/g, "");
      answerTexts[m] = g;
      f();
    });
  });
}
function redisSet(F, Q, t) {
  return new Promise((q, U) => {
    {
      const w = apiHost + "/redis/hash/set";
      const v = {
        key: F,
        hashKey: Q,
        hashValue: t
      };
      const C = {
        "Content-Type": "application/json",
        accept: "application/json"
      };
      const o = {
        url: w,
        headers: C,
        body: JSON.stringify(v)
      };
      $.post(o, async (g, D, Z) => {
        {
          const a = Z.replace(/\"/g, "");
          q();
        }
      });
    }
  });
}
function redisPop(m) {
  return new Promise((Q, t) => {
    {
      const q = apiHost + "/redis/set/pop/" + m;
      const U = {
        "Content-Type": "application/json",
        accept: "application/json"
      };
      const w = {
        url: q,
        headers: U
      };
      $.get(w, async (l, v, C) => {
        const o = C.replace(/\"/g, "");
        popCookie = o;
        Q();
      });
    }
  });
}
async function getReqObject(Q, t, f) {
  let q = "ting_v3.0.31_c5(CFNetwork, iOS 16.6.1, iPhone10,2) ;xmly(lite)/3.0.31/ios_1";
  xmlyjsbapp[f].ua && xmlyjsbapp[f].ua != "" && (q = xmlyjsbapp[f].ua);
  let U = getHostname(Q);
  const L = {
    "Content-Type": "application/json",
    "User-Agent": q,
    Cookie: xmlyjsbapp[f].cookie,
    Host: U
  };
  let l = {
    url: Q,
    headers: L
  };
  t && (l.body = t);
  requestObjects[f] = l;
  return l;
}
function getReqObject_(Q, t, f) {
  const H = {
    pZVAU: "Mozilla/5.0 (iPhone; CPU iPhone OS 16_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.31(0x18001f34) NetType/WIFI Language/zh_CN",
    YdERu: function (v, C) {
      return v != C;
    },
    tRHZr: function (v, C) {
      return v(C);
    },
    FiWAT: "kQcKv"
  };
  let q = "Mozilla/5.0 (iPhone; CPU iPhone OS 16_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.31(0x18001f34) NetType/WIFI Language/zh_CN";
  xmlyjsbapp[f].ua && xmlyjsbapp[f].ua != "" && (q = xmlyjsbapp[f].ua);
  let U = getHostname(Q);
  const L = {
    "Content-Type": "application/x-www-form-urlencoded",
    "User-Agent": q,
    Authorization: xmlyjsbapp[f].auth,
    Host: U
  };
  let l = {
    url: Q,
    headers: L
  };
  t && (l.body = t);
  requestObjects[f] = l;
  return l;
}
async function httpRequest(m, F, Q) {
  const t = {
    egFSo: "page/withdraw",
    zcwWH: function (f, H) {
      return f !== H;
    },
    VTZyl: "uDOVO",
    KItJK: function (f, H) {
      return f(H);
    },
    sQkPd: function (f, H) {
      return f == H;
    },
    KVMFf: "uJEax",
    mCgHt: "ejDVn",
    VFRQW: "DjhDN",
    MbFsw: function (f, H) {
      return f(H);
    },
    MfBgl: "path"
  };
  httpResult = null;
  return new Promise(f => {
    const H = {
      lWKdO: function (q, U) {
        return q(U);
      },
      kHRQy: "path"
    };
    $[m](F, async (q, U, L) => {
      try {
        if (q) {
          $.log(Q + ": " + m + "请求失败");
          $.log(JSON.stringify(q));
          $.logErr(q);
        } else {
          const w = new URL(F.url);
          if (w.pathname.indexOf("page/withdraw") != -1) {
            httpResult = L;
          } else {
            if (safeGet(L)) {
              httpResult = JSON.parse(L);
              debug == 1 && $.log(httpResult);
            } else {
              {
                const v = new URL(F.url);
                $.log(v.pathname + "发起" + m + "请求时，出现错误，请处理");
              }
            }
          }
        }
      } catch (o) {
        $.logErr(o, U);
      } finally {
        {
          f(httpResult);
        }
      }
    });
  });
}
async function selectChannel(m, F) {
  if (channels_status[m] == 0) {
    {
      await getSign_(m, F);
    }
  } else {
    await getSign(m, F);
  }
}
function getSign_(m, F) {
  return new Promise((t, f) => {
    function q(U) {
      let L = U.toString("utf8");
      requestSigns[m] = L;
      wss[m].removeListener("message", q);
      t(L);
    }
    wss[m].on("message", q);
    if (wss[m].readyState === 1) {
      const U = {
        method: appName,
        params: {}
      };
      U.params.content = F;
      U.params.appName = appName;
      U.params.uuid = userId;
      wss[m].send(JSON.stringify(U), L => {
        L && f(L);
      });
    } else {
      {
        t(getSign(m, F));
        wss[m].removeListener("message", q);
      }
    }
  });
}
function getSign(m, F) {
  return new Promise((t, f) => {
    const q = apiHost + "/sign/xmly";
    const L = {
      content: F,
      appName: appName,
      uuid: userId
    };
    const w = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const l = {
      url: q,
      headers: w,
      body: JSON.stringify(L)
    };
    $.post(l, async (v, C, o) => {
      {
        const g = o.replace(/\"/g, "");
        requestSigns[m] = g;
        t();
      }
    });
  });
}
function sortUrlParams(m, F, Q) {
  const t = url2obj(m);
  F.forEach(q => {
    delete t[q];
  });
  Object.assign(t, Q);
  const f = Object.keys(t).sort();
  const H = f.map(q => q + "=" + t[q]).join("&");
  return H;
}
function url2obj(F) {
  F = F.replace(/\"/g, "");
  var L;
  var w = {};
  var U = F.slice(F.indexOf("?") + 1).split("&");
  for (var q = 0; q < U.length; q++) {
    L = U[q].split("=");
    w[L[0]] = L[1];
  }
  return w;
}
function convertStringToJson(F) {
  const f = F.replace(/[{} ]/g, "");
  const H = f.split(",");
  const q = {};
  H.forEach(U => {
    {
      const [l, v] = U.split("=");
      q[l] = v;
    }
  });
  return q;
}
function getHostname(F) {
  const t = {
    qXngn: function (L, w) {
      return L > w;
    },
    aQaZo: function (L, w) {
      return L + w;
    },
    hYNDW: function (L, w) {
      return L !== w;
    },
    KXkJt: "gXfsQ",
    cgvvQ: "ymLtX"
  };
  let f = F.substr(F.indexOf("//") + 2);
  let H = f.substr(0, f.indexOf("/"));
  let q = "";
  let U = H.indexOf(":");
  if (U > 0) {
    {
      q = H.substr(0, U);
    }
  } else {
    {
      q = H;
    }
  }
  return q;
}
function calculateTimeDifference(F, Q) {
  var L = new Date(F);
  var U = new Date(Q);
  var l = U - L;
  var w = Math.floor(l / 1000);
  return w;
}
function cutString(m, F) {
  if (m.length * 2 <= F) {
    return m;
  }
  var t = 0;
  var f = "";
  for (var H = 0; H < m.length; H++) {
    f = f + m.charAt(H);
    if (m.charCodeAt(H) > 128) {
      t = t + 2;
      if (t >= F) {
        {
          return f.substring(0, f.length - 1) + "...";
        }
      }
    } else {
      t = t + 1;
      if (t >= F) {
        {
          return f.substring(0, f.length - 2) + "...";
        }
      }
    }
  }
  return f;
}
function printCaller() {
  return new Error().stack.split("\n")[3].split("@")[0];
}
function safeGet(F) {
  try {
    if (typeof JSON.parse(F) == "object") {
      return true;
    }
  } catch (f) {
    console.log(f);
    console.log("服务器访问数据为空，请检查自身设备网络情况");
    return false;
  }
}
function jsonToUrl(m) {
  var Q = Object.keys(m).map(function (t) {
    return encodeURIComponent(t) + "=" + encodeURIComponent(m[t]);
  }).join("&");
  return Q;
}
function compileStr(m) {
  var Q = String.fromCharCode(m.charCodeAt(0) + m.length);
  for (var t = 1; t < m.length; t++) {
    {
      Q += String.fromCharCode(m.charCodeAt(t) + m.charCodeAt(t - 1));
    }
  }
  return escape(Q);
}
function uncompileStr(m) {
  m = unescape(m);
  var Q = String.fromCharCode(m.charCodeAt(0) - m.length);
  for (var t = 1; t < m.length; t++) {
    Q += String.fromCharCode(m.charCodeAt(t) - Q.charCodeAt(t - 1));
  }
  return Q;
}
function randomMac() {
  return "XX:XX:XX:XX:XX:XX".replace(/X/g, function () {
    {
      return "0123456789ABCDEF".charAt(Math.floor(Math.random() * 16));
    }
  });
}
function txt_api(m) {
  return new Promise((Q, t) => {
    {
      const q = "https://v1.hitokoto.cn/?c=e";
      const U = {
        accept: "application/json"
      };
      const w = {
        url: q,
        headers: U
      };
      $.get(w, async (l, v, C) => {
        let o = JSON.parse(C);
        let g = o.hitokoto;
        contents[m] = g + " " + g;
        Q();
      });
    }
  });
}
function getTime_8() {
  return new Promise((F, Q) => {
    {
      const f = "http://api.m.taobao.com/rest/api3.do?api=mtop.common.getTimestamp";
      const q = {
        url: f
      };
      $.get(q, async (U, L, w) => {
        {
          F(w);
        }
      });
    }
  });
}
function message() {
  tz == 1 && $.msg($.name, "", $.message);
}
async function sendMsg(F) {
  const t = {
    GmmNU: function (f, H) {
      return f < H;
    },
    FqLgN: function (f, H) {
      return f + H;
    },
    rGaeh: function (f, H) {
      return f + H;
    },
    DzBIS: function (f, H) {
      return f < H;
    },
    YxfIO: "0123456789ABCDEF",
    SgHZw: function (f, H) {
      return f * H;
    },
    sFXYF: function (f, H) {
      return f == H;
    },
    dnmQS: function (f, H) {
      return f == H;
    },
    uqOQb: "AjRUl",
    iRGCh: function (f, H) {
      return f == H;
    },
    oRfVb: function (f, H) {
      return f === H;
    },
    cVPTx: "EhoeD",
    SXpow: "Bvyxc",
    yIiGQ: function (f, H) {
      return f !== H;
    },
    KxqfM: "OaqXo",
    eBgGh: function (f, H) {
      return f === H;
    },
    FNpro: "wilbQ",
    fUXlx: "prgFf"
  };
  if (hour == 9 || hour == 12 || hour == 18) {
    {
      if (tz == 1) {
        {
          if ($.isNode()) {
            await notify.sendNotify($.name, F);
          } else {
            {
              $.msg($.name, "", F);
            }
          }
        }
      } else {
        {
          $.log(F);
        }
      }
    }
  }
}
async function wxPush(m, F, Q) {
  return new Promise((f, H) => {
    {
      const q = "https://wxpusher.zjiecode.com/api/send/message";
      const L = {
        appToken: "AT_6BZsE2IyJuVLPp3mcOkKvpoF245GR9xn",
        content: F,
        summary: "快手答题余额通知",
        contentType: 1,
        uids: [Q],
        verifyPay: false
      };
      const w = {
        "Content-Type": "application/json"
      };
      const l = {
        url: q,
        headers: w,
        body: JSON.stringify(L)
      };
      $.post(l, async (v, C, o) => {
        f();
      });
    }
  });
}
function Env(m, F) {
  const Q = {
    aJuRr: function (H, q) {
      return H(q);
    },
    kxzIG: function (H, q) {
      return H === q;
    },
    rhOvm: "UJAZd",
    KJlRk: function (H, q) {
      return H == q;
    },
    nnten: "string",
    XMJTB: function (H, q) {
      return H === q;
    },
    JjfDI: "Quantumult X",
    JOYdm: "TuIJZ",
    yLipz: "DXklP",
    ARdGY: "[INFO] ",
    kLKNt: "[WARN] ",
    aaYyf: "[ERROR] ",
    SkZCv: "info",
    aNphO: function (H, q) {
      return H !== q;
    },
    LcOgM: function (H, q) {
      return H != q;
    },
    MQkBw: "undefined",
    CYzqX: "surge-version",
    pSuXz: "Surge",
    bLYwj: "Stash",
    mEneO: function (H, q) {
      return H != q;
    },
    AUugW: "Node.js",
    wDHja: "Loon",
    TQwxD: "Shadowrocket",
    JATXA: function (H, q) {
      return H > q;
    },
    KwpeX: "LQgOs",
    ypObI: function (H, q) {
      return H != q;
    },
    Lodxg: function (H, q) {
      return H == q;
    },
    hEySS: function (H, q) {
      return H === q;
    },
    YqIsd: "KEtDB",
    iqxFQ: function (H, q) {
      return H !== q;
    },
    ZZird: "rCwhW",
    hLLrV: function (H, q) {
      return H === q;
    },
    YhMso: function (H, q) {
      return H < q;
    },
    PdSBi: function (H, q) {
      return H + q;
    },
    xxCvu: function (H, q) {
      return H === q;
    },
    EDgTx: "wNurg",
    eadPD: "hfgRR",
    DbRZA: "IpJNj",
    qxSkv: function (H, q) {
      return H(q);
    },
    jDoKF: function (H, q) {
      return H === q;
    },
    pKLae: "hvhXo",
    sbFKP: "OnWNI",
    RRxPL: "zqHeA",
    fOCxm: "@chavy_boxjs_userCfgs.httpapi",
    hGMxJ: "@chavy_boxjs_userCfgs.httpapi_timeout",
    DzQHs: function (H, q) {
      return H * q;
    },
    yIhfS: "*/*",
    lyNev: "ldowU",
    tviEv: function (H, q) {
      return H + q;
    },
    tJBwG: function (H, q) {
      return H + q;
    },
    tZtfr: function (H, q) {
      return H + q;
    },
    rGlSZ: function (H, q) {
      return H < q;
    },
    zARrS: function (H, q) {
      return H + q;
    },
    rrrMW: function (H, q) {
      return H + q;
    },
    XwtAL: "UKUSb",
    bqgEi: function (H, q) {
      return H !== q;
    },
    hEqiH: "hbisQ",
    Nugyq: function (H, q) {
      return H(q);
    },
    xXBMB: "path",
    NxGja: function (H, q) {
      return H && q;
    },
    CsKcc: function (H, q) {
      return H === q;
    },
    MQcwz: "YcWfg",
    eiyHd: function (H, q) {
      return H(q);
    },
    NWpGw: function (H, q) {
      return H(q);
    },
    VJKhH: "ynYgK",
    GfkkU: ".$1",
    sQbjx: function (H, q) {
      return H(q);
    },
    LJPQo: function (H, q) {
      return H - q;
    },
    OVMeN: function (H, q) {
      return H <= q;
    },
    vzDLE: function (H, q) {
      return H === q;
    },
    sAZFm: "SzXMd",
    UHuOw: "kEEJN",
    nfkec: "null",
    aqkvx: function (H, q) {
      return H || q;
    },
    IaGpC: function (H, q) {
      return H == q;
    },
    vhnDe: function (H, q) {
      return H === q;
    },
    yAzyb: "EaaPm",
    UWJIv: "tough-cookie",
    pccut: function (H, q) {
      return H === q;
    },
    AvfUJ: function (H, q, U, L, w) {
      return H(q, U, L, w);
    },
    WrBkB: "iCZmZ",
    YsUKc: "YMXXs",
    Tnksn: "cPXXN",
    xkOCy: "set-cookie",
    QKFdX: function (H, q, U, L) {
      return H(q, U, L);
    },
    CaesS: function (H) {
      return H();
    },
    hyQJM: "application/json",
    EtVpL: "hDFlP",
    PJQTA: "OfXon",
    NYkBZ: function (H, q) {
      return H < q;
    },
    caGSl: function (H, q) {
      return H + q;
    },
    yrReu: function (H, q) {
      return H < q;
    },
    nxIfS: function (H, q) {
      return H === q;
    },
    jEKHL: "qPaWX",
    wSJUu: "jGqwK",
    tZCGC: "Content-Type",
    gLfHy: "Content-Length",
    mFaRL: "content-length",
    VsBsB: function (H, q) {
      return H === q;
    },
    Vglcs: "auto-redirect",
    vuyvj: function (H, q) {
      return H(q);
    },
    ghTPt: "iconv-lite",
    LDvFG: "emepz",
    GfGCr: function (H, q) {
      return H && q;
    },
    fAGsl: function (H, q) {
      return H === q;
    },
    CfgOY: "LOIjb",
    eGfBY: function (H, q, U, L) {
      return H(q, U, L);
    },
    aiFvn: "QJaMZ",
    bSyvT: "post",
    jyokR: "content-type",
    jqlJw: "application/x-www-form-urlencoded",
    Gfeoa: function (H, q) {
      return H(q);
    },
    gLdBv: function (H, q) {
      return H / q;
    },
    hFfpk: function (H, q) {
      return H + q;
    },
    obxEk: function (H, q) {
      return H + q;
    },
    bovYp: function (H, q) {
      return H + q;
    },
    Dwozt: function (H, q) {
      return H + q;
    },
    bGKyf: function (H, q) {
      return H !== q;
    },
    nwgDN: "JPSNZ",
    PJMbG: function (H, q) {
      return H != q;
    },
    YrPXd: function (H, q) {
      return H == q;
    },
    zhmJE: "object",
    EnJgE: function (H, q) {
      return H != q;
    },
    VvCpc: function (H, q) {
      return H(q);
    },
    wLCXm: "bTnwr",
    IPrVW: "open-url",
    vHXav: "update-pasteboard",
    jIOzL: "clipboard",
    OQAOg: "http",
    ufWWP: "data:",
    EZFKM: function (H, q) {
      return H ?? q;
    },
    sDeUF: function (H, q) {
      return H !== q;
    },
    uwerU: "LwFGC",
    GulYA: "media-url",
    OSUwk: "caOCA",
    QmtNP: "image/png",
    fLsZY: "image/jpg",
    PwsHR: function (H, q) {
      return H(q);
    },
    FvPnY: "==============📣系统通知📣==============",
    VqErq: function (H, q) {
      return H > q;
    },
    IHyuh: function (H, q) {
      return H !== q;
    },
    jvCYo: "mGMiy",
    byaUg: function (H, q) {
      return H !== q;
    },
    bGUCs: "iBbWC"
  };
  class f {
    constructor(H) {
      this.env = H;
    }
    send(H, q = "GET") {
      {
        H = "string" == typeof H ? {
          url: H
        } : H;
        let L = this.get;
        "POST" === q && (L = this.post);
        return new Promise((w, l) => {
          L.call(this, H, (C, g, D) => {
            C ? l(C) : w(g);
          });
        });
      }
    }
    get(H) {
      return this.send.call(this.env, H);
    }
    post(H) {
      return this.send.call(this.env, H, "POST");
    }
  }
  return new class {
    constructor(H, q) {
      const U = {
        debug: 0,
        info: 1,
        warn: 2,
        error: 3
      };
      const L = {
        debug: "[DEBUG] ",
        info: "[INFO] ",
        warn: "[WARN] ",
        error: "[ERROR] "
      };
      this.logLevels = U;
      this.logLevelPrefixs = L;
      this.logLevel = "info";
      this.name = H;
      this.http = new f(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = false;
      this.isNeedRewrite = false;
      this.logSeparator = "\n";
      this.encoding = "utf-8";
      this.startTime = new Date().getTime();
      Object.assign(this, q);
      this.log("", "🔔 " + this.name + ", 开始!");
    }
    getEnv() {
      const q = {
        lQzpe: "@chavy_boxjs_userCfgs.httpapi_timeout",
        XJbxK: "cron",
        zSXJr: "*/*"
      };
      {
        return "undefined" != typeof $environment && $environment["surge-version"] ? "Surge" : "undefined" != typeof $environment && $environment["stash-version"] ? "Stash" : "undefined" != typeof module && module.exports ? "Node.js" : "undefined" != typeof $task ? "Quantumult X" : "undefined" != typeof $loon ? "Loon" : "undefined" != typeof $rocket ? "Shadowrocket" : undefined;
      }
    }
    isNode() {
      const H = {
        JsXIU: function (q, U) {
          return q > U;
        }
      };
      {
        return "Node.js" === this.getEnv();
      }
    }
    isQuanX() {
      return "Quantumult X" === this.getEnv();
    }
    isSurge() {
      return "Surge" === this.getEnv();
    }
    isLoon() {
      const H = {
        lYQAz: function (q, U) {
          return q != U;
        },
        zLnCA: function (q, U) {
          return q == U;
        },
        hULuq: "object"
      };
      return "Loon" === this.getEnv();
    }
    isShadowrocket() {
      {
        return "Shadowrocket" === this.getEnv();
      }
    }
    isStash() {
      {
        return "Stash" === this.getEnv();
      }
    }
    toObj(H, q = null) {
      try {
        return JSON.parse(H);
      } catch {
        return q;
      }
    }
    toStr(H, q = null, ...U) {
      {
        try {
          {
            return JSON.stringify(H, ...U);
          }
        } catch {
          return q;
        }
      }
    }
    getjson(H, q) {
      let U = q;
      if (this.getdata(H)) {
        try {
          U = JSON.parse(this.getdata(H));
        } catch {}
      }
      return U;
    }
    setjson(H, q) {
      try {
        return this.setdata(JSON.stringify(H), q);
      } catch {
        return false;
      }
    }
    getScript(H) {
      return new Promise(q => {
        {
          const U = {
            url: H
          };
          this.get(U, (L, w, l) => q(l));
        }
      });
    }
    runScript(H, q) {
      {
        return new Promise(L => {
          let w = this.getdata("@chavy_boxjs_userCfgs.httpapi");
          w = w ? w.replace(/\n/g, "").trim() : w;
          let l = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
          l = l ? 1 * l : 20;
          l = q && q.timeout ? q.timeout : l;
          const v = {
            script_text: H,
            mock_type: "cron",
            timeout: l
          };
          const [C, g] = w.split("@");
          const D = {
            url: "http://" + g + "/v1/scripting/evaluate",
            body: v,
            headers: {
              "X-Key": C,
              Accept: "*/*"
            },
            timeout: l
          };
          this.post(D, (Z, O, E) => L(E));
        }).catch(L => this.logErr(L));
      }
    }
    loaddata() {
      const q = {
        evgNn: function (U, L) {
          return U <= L;
        },
        JUWWL: function (U, L) {
          return U > L;
        }
      };
      {
        if (!this.isNode()) {
          return {};
        }
        {
          {
            this.fs = this.fs ? this.fs : require("fs");
            this.path = this.path ? this.path : require("path");
            const L = this.path.resolve(this.dataFile);
            const w = this.path.resolve(process.cwd(), this.dataFile);
            const l = this.fs.existsSync(L);
            const v = !l && this.fs.existsSync(w);
            if (!l && !v) {
              return {};
            }
            {
              const C = l ? L : w;
              try {
                return JSON.parse(this.fs.readFileSync(C));
              } catch (o) {
                return {};
              }
            }
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        {
          this.fs = this.fs ? this.fs : require("fs");
          this.path = this.path ? this.path : require("path");
          const H = this.path.resolve(this.dataFile);
          const q = this.path.resolve(process.cwd(), this.dataFile);
          const U = this.fs.existsSync(H);
          const L = !U && this.fs.existsSync(q);
          const w = JSON.stringify(this.data);
          U ? this.fs.writeFileSync(H, w) : L ? this.fs.writeFileSync(q, w) : this.fs.writeFileSync(H, w);
        }
      }
    }
    lodash_get(H, q, U) {
      {
        const L = q.replace(/\[(\d+)\]/g, ".$1").split(".");
        let w = H;
        for (const l of L) if (w = Object(w)[l], undefined === w) {
          return U;
        }
        return w;
      }
    }
    lodash_set(H, q, U) {
      Object(H) !== H || (Array.isArray(q) || (q = q.toString().match(/[^.[\]]+/g) || []), q.slice(0, -1).reduce((L, w, l) => Object(L[w]) === L[w] ? L[w] : L[w] = Math.abs(q[l + 1]) >> 0 == +q[l + 1] ? [] : {}, H)[q[q.length - 1]] = U);
      return H;
    }
    getdata(H) {
      const q = {
        sUZpj: function (L, w) {
          return L <= w;
        }
      };
      let U = this.getval(H);
      if (/^@/.test(H)) {
        const [, L, w] = /^@(.*?)\.(.*?)$/.exec(H);
        const l = L ? this.getval(L) : "";
        if (l) {
          try {
            const v = JSON.parse(l);
            U = v ? this.lodash_get(v, w, "") : U;
          } catch (C) {
            U = "";
          }
        }
      }
      return U;
    }
    setdata(H, q) {
      {
        let w = false;
        if (/^@/.test(q)) {
          const [, l, v] = /^@(.*?)\.(.*?)$/.exec(q);
          const C = this.getval(l);
          const g = l ? "null" === C ? null : C || "{}" : "{}";
          try {
            const D = JSON.parse(g);
            this.lodash_set(D, v, H);
            w = this.setval(JSON.stringify(D), l);
          } catch (Z) {
            const O = {};
            this.lodash_set(O, v, H);
            w = this.setval(JSON.stringify(O), l);
          }
        } else {
          w = this.setval(H, q);
        }
        return w;
      }
    }
    getval(H) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.read(H);
        case "Quantumult X":
          return $prefs.valueForKey(H);
        case "Node.js":
          this.data = this.loaddata();
          return this.data[H];
        default:
          return this.data && this.data[H] || null;
      }
    }
    setval(H, q) {
      {
        switch (this.getEnv()) {
          case "Surge":
          case "Loon":
          case "Stash":
          case "Shadowrocket":
            return $persistentStore.write(H, q);
          case "Quantumult X":
            return $prefs.setValueForKey(H, q);
          case "Node.js":
            this.data = this.loaddata();
            this.data[q] = H;
            this.writedata();
            return true;
          default:
            return this.data && this.data[q] || null;
        }
      }
    }
    initGotEnv(H) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      H && (H.headers = H.headers ? H.headers : {}, H && (H.headers = H.headers ? H.headers : {}, undefined === H.headers.cookie && undefined === H.headers.Cookie && undefined === H.cookieJar && (H.cookieJar = this.ckjar)));
    }
    get(H, q = () => {}) {
      {
        const w = {
          redirection: false
        };
        switch (H.headers && (delete H.headers["Content-Type"], delete H.headers["Content-Length"], delete H.headers["content-type"], delete H.headers["content-length"]), H.params && (H.url += "?" + this.queryStr(H.params)), undefined === H.followRedirect || H.followRedirect || ((this.isSurge() || this.isLoon()) && (H["auto-redirect"] = false), this.isQuanX() && (H.opts ? H.opts.redirection = false : H.opts = w)), this.getEnv()) {
          case "Surge":
          case "Loon":
          case "Stash":
          case "Shadowrocket":
          default:
            const l = {
              "X-Surge-Skip-Scripting": false
            };
            this.isSurge() && this.isNeedRewrite && (H.headers = H.headers || {}, Object.assign(H.headers, l));
            $httpClient.get(H, (o, g, D) => {
              {
                !o && g && (g.body = D, g.statusCode = g.status ? g.status : g.statusCode, g.status = g.statusCode);
                q(o, g, D);
              }
            });
            break;
          case "Quantumult X":
            const v = {
              hints: false
            };
            this.isNeedRewrite && (H.opts = H.opts || {}, Object.assign(H.opts, v));
            $task.fetch(H).then(g => {
              const {
                statusCode: D,
                statusCode: Z,
                headers: O,
                body: E,
                bodyBytes: z
              } = g;
              const M = {
                status: D,
                statusCode: Z,
                headers: O,
                body: E,
                bodyBytes: z
              };
              q(null, M, E, z);
            }, o => q(o && o.error || "UndefinedError"));
            break;
          case "Node.js":
            let C = require("iconv-lite");
            this.initGotEnv(H);
            this.got(H).on("redirect", (o, g) => {
              {
                try {
                  {
                    if (o.headers["set-cookie"]) {
                      const Z = o.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                      Z && this.ckjar.setCookieSync(Z, null);
                      g.cookieJar = this.ckjar;
                    }
                  }
                } catch (O) {
                  this.logErr(O);
                }
              }
            }).then(g => {
              const {
                statusCode: D,
                statusCode: Z,
                headers: O,
                rawBody: E
              } = g;
              const z = C.decode(E, this.encoding);
              const M = {
                status: D,
                statusCode: Z,
                headers: O,
                rawBody: E,
                body: z
              };
              q(null, M, z);
            }, g => {
              {
                const {
                  message: Z,
                  response: O
                } = g;
                q(Z, O, O && C.decode(O.rawBody, this.encoding));
              }
            });
            break;
        }
      }
    }
    post(H, q = () => {}) {
      const L = H.method ? H.method.toLocaleLowerCase() : "post";
      const w = {
        redirection: false
      };
      switch (H.body && H.headers && !H.headers["Content-Type"] && !H.headers["content-type"] && (H.headers["content-type"] = "application/x-www-form-urlencoded"), H.headers && (delete H.headers["Content-Length"], delete H.headers["content-length"]), undefined === H.followRedirect || H.followRedirect || ((this.isSurge() || this.isLoon()) && (H["auto-redirect"] = false), this.isQuanX() && (H.opts ? H.opts.redirection = false : H.opts = w)), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          const l = {
            "X-Surge-Skip-Scripting": false
          };
          this.isSurge() && this.isNeedRewrite && (H.headers = H.headers || {}, Object.assign(H.headers, l));
          $httpClient[L](H, (Z, O, E) => {
            !Z && O && (O.body = E, O.statusCode = O.status ? O.status : O.statusCode, O.status = O.statusCode);
            q(Z, O, E);
          });
          break;
        case "Quantumult X":
          const v = {
            hints: false
          };
          H.method = L;
          this.isNeedRewrite && (H.opts = H.opts || {}, Object.assign(H.opts, v));
          $task.fetch(H).then(Z => {
            {
              const {
                statusCode: E,
                statusCode: z,
                headers: M,
                body: k,
                bodyBytes: p
              } = Z;
              const Y = {
                status: E,
                statusCode: z,
                headers: M,
                body: k,
                bodyBytes: p
              };
              q(null, Y, k, p);
            }
          }, Z => q(Z && Z.error || "UndefinedError"));
          break;
        case "Node.js":
          let C = require("iconv-lite");
          this.initGotEnv(H);
          const {
            url: g,
            ...D
          } = H;
          this.got[L](g, D).then(Z => {
            const {
              statusCode: O,
              statusCode: E,
              headers: z,
              rawBody: M
            } = Z;
            const k = C.decode(M, this.encoding);
            const p = {
              status: O,
              statusCode: E,
              headers: z,
              rawBody: M,
              body: k
            };
            q(null, p, k);
          }, Z => {
            {
              const {
                message: E,
                response: a
              } = Z;
              q(E, a, a && C.decode(a.rawBody, this.encoding));
            }
          });
          break;
      }
    }
    time(H, q = null) {
      const U = q ? new Date(q) : new Date();
      let L = {
        "M+": U.getMonth() + 1,
        "d+": U.getDate(),
        "H+": U.getHours(),
        "m+": U.getMinutes(),
        "s+": U.getSeconds(),
        "q+": Math.floor((U.getMonth() + 3) / 3),
        S: U.getMilliseconds()
      };
      /(y+)/.test(H) && (H = H.replace(RegExp.$1, (U.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let w in L) new RegExp("(" + w + ")").test(H) && (H = H.replace(RegExp.$1, 1 == RegExp.$1.length ? L[w] : ("00" + L[w]).substr(("" + L[w]).length)));
      return H;
    }
    queryStr(H) {
      let U = "";
      for (const L in H) {
        {
          let l = H[L];
          null != l && "" !== l && ("object" == typeof l && (l = JSON.stringify(l)), U += L + "=" + l + "&");
        }
      }
      U = U.substring(0, U.length - 1);
      return U;
    }
    msg(H = m, q = "", U = "", L = {}) {
      const w = {
        GgTWE: "image/gif",
        Uivcu: "image/png",
        LGNby: "image/jpg",
        iRMUm: function (v, C) {
          return v === C;
        }
      };
      const l = v => {
        const C = {
          LCwKc: "application/json",
          JYubS: function (E, z) {
            return E != z;
          },
          jrHNU: function (E, z) {
            return E(z);
          },
          Egbyx: "application/x-www-form-urlencoded"
        };
        const {
          $open: g,
          $copy: D,
          $media: Z,
          $mediaMime: O
        } = v;
        switch (typeof v) {
          case undefined:
            return v;
          case "string":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              default:
                const E = {
                  url: v
                };
                return E;
              case "Loon":
              case "Shadowrocket":
                return v;
              case "Quantumult X":
                const z = {
                  "open-url": v
                };
                return z;
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
                  {
                    const k = {};
                    let p = v.openUrl || v.url || v["open-url"] || g;
                    p && Object.assign(k, {
                      action: "open-url",
                      url: p
                    });
                    let Y = v["update-pasteboard"] || v.updatePasteboard || D;
                    if (Y && Object.assign(k, {
                      action: "clipboard",
                      text: Y
                    }), Z) {
                      let J;
                      let S;
                      let u;
                      if (Z.startsWith("http")) {
                        J = Z;
                      } else {
                        if (Z.startsWith("data:")) {
                          const [T] = Z.split(";");
                          const [, B] = Z.split(",");
                          S = B;
                          u = T.replace("data:", "");
                        } else {
                          {
                            S = Z;
                            u = (d => {
                              const j = {
                                JVBERi0: "application/pdf",
                                R0lGODdh: "image/gif",
                                R0lGODlh: "image/gif",
                                iVBORw0KGgo: "image/png",
                                "/9j/": "image/jpg"
                              };
                              for (var y in j) if (0 === d.indexOf(y)) {
                                return j[y];
                              }
                              return null;
                            })(Z);
                          }
                        }
                      }
                      Object.assign(k, {
                        "media-url": J,
                        "media-base64": S,
                        "media-base64-mime": O ?? u
                      });
                    }
                    const W = {
                      "auto-dismiss": v["auto-dismiss"],
                      sound: v.sound
                    };
                    Object.assign(k, W);
                    return k;
                  }
                }
              case "Loon":
                {
                  {
                    const j = {};
                    let y = v.openUrl || v.url || v["open-url"] || g;
                    y && Object.assign(j, {
                      openUrl: y
                    });
                    let A = v.mediaUrl || v["media-url"];
                    Z?.["startsWith"]("http") && (A = Z);
                    A && Object.assign(j, {
                      mediaUrl: A
                    });
                    console.log(JSON.stringify(j));
                    return j;
                  }
                }
              case "Quantumult X":
                {
                  {
                    const c = {};
                    let X = v["open-url"] || v.url || v.openUrl || g;
                    X && Object.assign(c, {
                      "open-url": X
                    });
                    let P = v["media-url"] || v.mediaUrl;
                    Z?.["startsWith"]("http") && (P = Z);
                    P && Object.assign(c, {
                      "media-url": P
                    });
                    let x = v["update-pasteboard"] || v.updatePasteboard || D;
                    x && Object.assign(c, {
                      "update-pasteboard": x
                    });
                    console.log(JSON.stringify(c));
                    return c;
                  }
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
            $notification.post(H, q, U, l(L));
            break;
          case "Quantumult X":
            $notify(H, q, U, l(L));
            break;
          case "Node.js":
            break;
        }
      }
      if (!this.isMuteLog) {
        let v = ["", "==============📣系统通知📣=============="];
        v.push(H);
        q && v.push(q);
        U && v.push(U);
        console.log(v.join("\n"));
        this.logs = this.logs.concat(v);
      }
    }
    debug(...H) {
      this.logLevels[this.logLevel] <= this.logLevels.debug && (H.length > 0 && (this.logs = [...this.logs, ...H]), console.log("" + this.logLevelPrefixs.debug + H.map(q => q ?? String(q)).join(this.logSeparator)));
    }
    info(...H) {
      this.logLevels[this.logLevel] <= this.logLevels.info && (H.length > 0 && (this.logs = [...this.logs, ...H]), console.log("" + this.logLevelPrefixs.info + H.map(q => q ?? String(q)).join(this.logSeparator)));
    }
    warn(...H) {
      this.logLevels[this.logLevel] <= this.logLevels.warn && (H.length > 0 && (this.logs = [...this.logs, ...H]), console.log("" + this.logLevelPrefixs.warn + H.map(q => q ?? String(q)).join(this.logSeparator)));
    }
    error(...H) {
      this.logLevels[this.logLevel] <= this.logLevels.error && (H.length > 0 && (this.logs = [...this.logs, ...H]), console.log("" + this.logLevelPrefixs.error + H.map(q => q ?? String(q)).join(this.logSeparator)));
    }
    log(...H) {
      H.length > 0 && (this.logs = [...this.logs, ...H]);
      console.log(H.map(q => q ?? String(q)).join(this.logSeparator));
    }
    logErr(H, q) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          this.log("", "❗️" + this.name + ", 错误!", q, H);
          break;
        case "Node.js":
          this.log("", "❗️" + this.name + ", 错误!", q, undefined !== H.message ? H.message : H, H.stack);
          break;
      }
    }
    wait(H) {
      {
        return new Promise(U => setTimeout(U, H));
      }
    }
    done(H = {}) {
      {
        const U = (new Date().getTime() - this.startTime) / 1000;
        switch (this.log("", "🔔" + this.name + ", 结束! 🕛 " + U + " 秒"), this.log(), this.getEnv()) {
          case "Surge":
          case "Loon":
          case "Stash":
          case "Shadowrocket":
          case "Quantumult X":
          default:
            $done(H);
            break;
          case "Node.js":
            process.exit(1);
        }
      }
    }
  }(m, F);
}
function david_m(m) {
  const F = {
    aBfap: function (t, f) {
      return t(f);
    },
    wMNlt: function (t, f) {
      return t - f;
    },
    MsJyQ: function (t, f) {
      return t === f;
    },
    rUjIX: function (t, f) {
      return t !== f;
    },
    JcgNC: "lTibv",
    mEJTm: "DpUOA",
    EOuBp: function (t, f) {
      return t === f;
    },
    MOAOT: "string",
    yiWiQ: "rjBbF",
    hBdQq: "cgRBO",
    TyoIP: "counter",
    mHxeL: function (t, f) {
      return t !== f;
    },
    lojDG: function (t, f) {
      return t + f;
    },
    FycFE: function (t, f) {
      return t / f;
    },
    vnNlU: "length",
    dwlam: function (t, f) {
      return t % f;
    },
    zYaHt: "UBEgx",
    rgFdx: "debu",
    mNTMC: "gger",
    TzZqo: "action",
    cjtFH: "stateObject",
    zwuHA: function (t, f) {
      return t(f);
    }
  };
  function Q(t) {
    {
      if (typeof t === "string") {
        {
          return function (H) {}.constructor("while (true) {}").apply("counter");
        }
      } else {
        if (("" + t / t).length !== 1 || t % 20 === 0) {
          {
            (function () {
              {
                return true;
              }
            }).constructor("debugger").call("action");
          }
        } else {
          (function () {
            return false;
          }).constructor("debugger").apply("stateObject");
        }
      }
      Q(++t);
    }
  }
  try {
    if (m) {
      return Q;
    } else {
      Q(0);
    }
  } catch (t) {}
}