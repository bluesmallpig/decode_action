//Wed Apr 15 2026 00:58:34 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const $ = new Env("大象新闻"),
  version = "V1.0.0",
  appName = "dxxwapp";
let dxxwapp = $.getjson(appName, []);
const fs = $.isNode() ? require("fs") : "",
  WebSocket = $.isNode() ? require("ws") : "",
  NodeRSA = $.isNode() ? require("node-rsa") : "",
  file = "david_cookies.js";
$.isNode() && !fs.existsSync(file) && ($.log("🔔 外挂ck文件不存在，开始创建模版>>>"), fs.writeFileSync("./david_cookies.js", "//独立CK文件，主要用来处理多账号大数据量CK,注意JRTTAPP外边不用加引号，依葫芦画瓢。\n//今日头条(三个账号)\nlet JRTTAPP = [{},{},{}]\n//番茄小说(一个账号)\nlet FQXSAPP = [{}]\n//抖音极速版(两个账号)\nlet DYJSBAPP = [{},{}]\n    \nlet APPS = {\n    JRTT: JRTTAPP,\n    FQXS: FQXSAPP,\n    DYJSB: DYJSBAPP\n}\n\nmodule.exports = APPS", _0x1da84d => {}));
const http = $.isNode() ? require("http") : "",
  notify = $.isNode() ? require("./sendNotify") : "",
  COOKIES = $.isNode() ? require("./david_cookies") : "";
let userId = $.getdata("tguserid") || 1,
  activeCode = $.getdata("dxxwactivecode") || 0,
  dxxwuserck = $.getval("dxxwuserck") || 1,
  apiHost = $.getval("apiHost") || "http://106.15.104.124:8080";
$.getval("apiHosts") && (apiHost = $.getval("apiHosts"));
let flushCash = $.getval("cleanCache") || false;
const debug = 0;
let tz = $.getval("tz") || "1",
  ts = Math.round(new Date().getTime() / 1000).toString();
window = {};
let helpUtils = undefined,
  CryptoJS = undefined,
  rsaEncrypt = undefined,
  saveFile = false,
  dxxw_ck_file = "dxxw_cookies.json";
var hour = "",
  minute = "";
let sendlogs = "",
  dxxwlogs = [],
  excluded_params = [],
  additional_Params = {},
  wss = [],
  channels_status = [],
  reconectCounts = [],
  requestObjects = [],
  requestSigns = [],
  answerTexts = [],
  httpResult = "",
  userAuth = "",
  scriptAuth = "",
  newest_version = "",
  runAuth = "",
  systemNotify = "",
  vipAuth = "",
  isCharge = "",
  multiAccount = 1,
  buyCount = 1,
  runTotalCounts = 1,
  runedCounts = 1,
  userRank = "",
  invicode = "",
  numbers = 3,
  vipDate = "";
if ($.isNode()) {
  process.env.DXXWAPP ? dxxwapp = JSON.parse(process.env.DXXWAPP) : dxxwapp = COOKIES.DXXW;
  userId = process.env.TGUSERID;
  activeCode = process.env.DXXWACTIVECODE;
  process.env.APIHOST && (apiHost = process.env.APIHOST);
  process.env.APIHOSTS && (apiHost = process.env.APIHOSTS);
  process.env.CLEANCACHE && (flushCash = JSON.parse(process.env.CLEANCACHE));
  hour = new Date(new Date().getTime()).getHours();
  minute = new Date(new Date().getTime()).getMinutes();
  $.log("🔔 当前环境: Node, 当前时间：" + hour + "点");
} else hour = new Date().getHours(), minute = new Date().getMinutes(), $.log("🔔 当前环境: 手机代理, 当前时间：" + hour + "点");
!(async () => {
  if (typeof $request !== "undefined") await getCk();else {
    if (!dxxwapp) {
      {
        $.log("📢 很抱歉，😭 没有找到账号信息！你确定配置账号信息了吗？");
        return;
      }
    }
    $.log("📢 开始检测服务器接口状态>>>");
    let _0x12b625 = false;
    const _0x358ae7 = apiHost.split("&"),
      _0x18f188 = _0x358ae7.length;
    for (let _0x2e25ff = 0; _0x2e25ff < _0x18f188; _0x2e25ff++) {
      {
        if ($.isNode()) {
          _0x12b625 = await checkAddress("" + _0x358ae7[_0x2e25ff], 2500);
        } else {
          if ($.isSurge() || $.isLoon()) {
            _0x12b625 = await httpClientRequest("" + _0x358ae7[_0x2e25ff], 2500);
          } else {
            _0x12b625 = await fetchRequest("" + _0x358ae7[_0x2e25ff], 2500);
          }
        }
        if (_0x12b625 == true) {
          {
            apiHost = _0x358ae7[_0x2e25ff];
            $.log("📢 接口" + (_0x2e25ff + 1) + "[" + _0x358ae7[_0x2e25ff] + "]服务器接口正常! 🎉");
            break;
          }
        } else {}
        if (_0x2e25ff == _0x18f188 - 1 && _0x12b625 == false) {
          {
            $.log("📢 抱歉，所有接口都不可用, 请前往交流群置顶获取最新的接口地址! 😭");
            $.msg($.name, "所有接口都不可用, 请尽快前往交流群置顶获取最新的接口地址!");
            return;
          }
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
        let _0x467606 = new Date(vipDate).getTime(),
          _0x592ba2 = new Date().getTime();
        if (_0x592ba2 > _0x467606) {
          $.log("❗️ 抱歉，VIP到期了，请及时付费。");
          return;
        }
      }
    }
    if (version < newest_version) {
      {
        $.log("❗️ 当前脚本版本号低于服务器版本，请更新脚本吧！");
        sendMsg("🔔 当前脚本版本号低于服务器版本，请更新脚本吧！");
        return;
      }
    }
    if (scriptAuth != true) {
      {
        $.log("❗️ 抱歉, 此脚本已停用。");
        return;
      }
    }
    if (userRank != true) {
      $.log("❗️ 抱歉, 用户不合法，请先私聊机器人加入交流区。 https://t.me/DavidLoveBot");
      return;
    }
    if (userAuth != true) {
      {
        $.log("❗️ 抱歉，你没有权限运行此脚本, 请关注电报机器人: https://t.me/DavidLoveBot");
        return;
      }
    }
    if (isCharge == true) {
      $.log("🔔 此脚本采用付费模式。🔒");
    } else {
      $.log("🔔 此脚本采用免费模式。🔓");
    }
    if (vipDate != "") {
      {
        if (isCharge == true) {
          {
            $.log("🔔 尊敬的会员：您好，你是付费用户！🔐");
            let _0x154a8a = new Date(vipDate).getTime(),
              _0x4c0c23 = new Date().getTime();
            if (_0x4c0c23 > _0x154a8a) {
              {
                $.log("❗️ 抱歉，VIP到期了，请及时付费。");
                return;
              }
            }
          }
        }
      }
    } else {
      if (vipAuth != true) {
        $.log("❗️ 抱歉，你不是付费用户, 你没有权限运行此脚本, 需要使用请查看使用说明。");
        return;
      } else $.log("🔔 尊敬的会员：您好，你是付费用户！🔐");
    }
    multiAccount > 1 && $.log("🔔 尊敬的会员，您好！你使用的是付费多用户授权账号，一次可以运行" + numbers * multiAccount + "个账号。");
    buyCount > 1 && $.log("🔔 尊敬的会员，您好！你使用的是付费多用户授权账号，一共可以运行" + runTotalCounts + "次, 已经运行了" + runedCounts + "次。");
    if (runAuth != true) {
      $.log("❗️ 抱歉,  该用户今天可能已经达到最大运行次数，明天再试吧！");
      return;
    }
    if (dxxwapp.length > numbers * multiAccount) {
      $.log("❗️ 当前用户一次最多运行" + numbers * multiAccount + "个账号，需要增加账号请查看置顶说明。");
      return;
    }
    if (dxxwapp.length == 0) {
      {
        $.log("先抓取账号ck，再运行脚本吧！");
        return;
      }
    }
    if (runedCounts + dxxwapp.length > runTotalCounts) {
      $.log("📢 一共发现了" + dxxwapp.length + "个账号");
      $.log("❗️ 当前用户运行次数剩余" + (runTotalCounts - runedCounts) + "次，还可以运行" + (runTotalCounts - runedCounts) + "个账号，还需要" + (dxxwapp.length - (runTotalCounts - runedCounts)) + "次，可以通过赞赏后增加运行次数！");
      return;
    }
    vipDate != "" && $.log("📢 你的会员有效期到： " + vipDate);
    $.log("📢 一共发现了" + dxxwapp.length + "个账号");
    $.isNode() && (!fs.existsSync(dxxw_ck_file) ? dxxw_cks = {} : dxxw_cks = JSON.parse(fs.readFileSync(dxxw_ck_file, "utf8")));
    let _0x3c3d8 = [],
      _0x361d08 = dxxwapp.length,
      _0x1e01af = 0;
    $.isNode() && process.env.DXXW_THREAD_COUNT ? _0x1e01af = parseInt(process.env.DXXW_THREAD_COUNT) : _0x1e01af = _0x361d08;
    let _0x2a64cb = dxxwapp.length;
    if (_0x1e01af >= _0x361d08) {
      _0x1e01af = _0x361d08;
      _0x2a64cb = 1;
      $.log("📢 你设置的线程数是" + _0x1e01af + "，账号个数是" + _0x361d08 + "，" + _0x2a64cb + "次可全部跑完。");
      for (let _0x446a31 = 0; _0x446a31 < dxxwapp.length; _0x446a31++) {
        _0x3c3d8.push(runMultiTasks(_0x446a31));
        dxxwlogs[_0x446a31] = "";
        $.isNode() ? (channels_status[_0x446a31] = 0, await init_ws(_0x446a31)) : channels_status[_0x446a31] = 1;
      }
      await Promise.allSettled(_0x3c3d8).then(_0x5bb86b => {
        $.isNode() && saveFile && ($.log("[温馨提醒]: 即将本地化token，这样可以有效降低登录次数"), fs.writeFileSync(dxxw_ck_file, JSON.stringify(dxxw_cks, null, 2)));
        $.log("日志整理功能如下：");
        $.log("---------------日志整理开始--------------");
        for (let _0x20b8bc = 0; _0x20b8bc < dxxwapp.length; _0x20b8bc++) {
          $.log(dxxwlogs[_0x20b8bc]);
          sendlogs += dxxwlogs[_0x20b8bc];
        }
        $.log("---------------日志整理结束--------------");
        sendMsg(sendlogs);
      });
    } else {
      {
        _0x2a64cb = Math.ceil(_0x361d08 / _0x1e01af);
        $.log("📢 你设置的线程数是" + _0x1e01af + "，账号个数是" + _0x361d08 + "，计算后分" + _0x2a64cb + "次执行，一次可执行" + _0x1e01af + "个账号，最后一次如果不够" + _0x1e01af + "个账号，剩多少个账号就跑几个账号。");
        for (let _0x2131d4 = 0; _0x2131d4 < _0x2a64cb; _0x2131d4++) {
          {
            for (let _0x26df9c = _0x2131d4 * _0x1e01af; _0x26df9c < _0x1e01af * (_0x2131d4 + 1) && _0x26df9c < _0x361d08; _0x26df9c++) {
              _0x3c3d8.push(runMultiTasks(_0x26df9c));
              dxxwlogs[_0x26df9c] = "";
              channels_status[_0x26df9c] = 0;
              await init_ws(_0x26df9c);
            }
            await Promise.allSettled(_0x3c3d8).then(_0x5e8dfe => {
              _0x3c3d8 = [];
              if (_0x2131d4 == _0x2a64cb - 1) {
                {
                  if ($.isNode() && saveFile) {
                    $.log("[温馨提醒]: 即将本地化token，这样可以有效降低登录次数");
                    fs.writeFileSync(dxxw_ck_file, JSON.stringify(dxxw_cks, null, 2));
                  }
                  $.log("日志整理功能如下：");
                  $.log("---------------日志整理开始--------------");
                  for (let _0x229d02 = 0; _0x229d02 < dxxwapp.length; _0x229d02++) {
                    $.log(dxxwlogs[_0x229d02]);
                    sendlogs += dxxwlogs[_0x229d02];
                  }
                  $.log("---------------日志整理结束--------------");
                  sendMsg(sendlogs);
                }
              }
            });
          }
        }
      }
    }
  }
})().catch(_0x1352c5 => $.logErr(_0x1352c5)).finally(() => $.done());
async function runMultiTasks(_0x5897d1) {
  return new Promise((_0x2d5b1b, _0x5cf44e) => {
    $.log("[账号" + (_0x5897d1 + 1 < 10 ? "0" + (_0x5897d1 + 1) : _0x5897d1 + 1) + "]: 开始执行 working......");
    runSubTask(_0x2d5b1b, _0x5897d1);
  });
}
async function init_ws(_0x5e34e3) {
  if ($.isNode()) {
    reconectCounts[_0x5e34e3] > 0 && $.log("[账号" + (_0x5e34e3 + 1 < 10 ? "0" + (_0x5e34e3 + 1) : _0x5e34e3 + 1) + "]: 尝试重新连接服务器>>>>>>");
    wss[_0x5e34e3] = new WebSocket(apiHost.replace("http", "ws") + "/ws");
    wss[_0x5e34e3].on("open", function _0x10b2b2() {
      $.log("[账号" + (_0x5e34e3 + 1 < 10 ? "0" + (_0x5e34e3 + 1) : _0x5e34e3 + 1) + "]: 签名通道已连接");
    });
    wss[_0x5e34e3].on("close", function _0x1a7422() {
      $.log("[账号" + (_0x5e34e3 + 1 < 10 ? "0" + (_0x5e34e3 + 1) : _0x5e34e3 + 1) + "]: 签名通道已关闭，原因是任务已处理完成");
    });
    wss[_0x5e34e3].on("error", function _0x5415d0() {
      $.log("[账号" + (_0x5e34e3 + 1 < 10 ? "0" + (_0x5e34e3 + 1) : _0x5e34e3 + 1) + "]: 签名通道已关闭，原因是出现错误");
      channels_status[_0x5e34e3] = 1;
      reconectCounts[_0x5e34e3]++;
      reconectCounts[_0x5e34e3] <= 3 && init_ws(_0x5e34e3);
    });
  }
}
async function runSubTask(_0x314ef4, _0x47f961) {
  $.isNode() && (await $.wait(3000, 5000));
  await login(_0x47f961);
  await userInfo(_0x47f961);
  await getScore(_0x47f961);
  await autoLoginRedirectUrl(_0x47f961);
  await dailySignInfo(_0x47f961);
  $.isNode() && (await wss[_0x47f961].close());
  await runComplete(appName, userId);
  _0x314ef4();
}
async function getCk() {
  if ($request.url.match(/\/passport\/UnionLogin/)) {
    const _0x2a8f84 = $request.body;
    let _0x23be15 = dxxwuserck - 1;
    dxxwapp[_0x23be15] ? dxxwapp[_0x23be15].token_body = _0x2a8f84 : dxxwapp[_0x23be15] = {
      "token_body": _0x2a8f84
    };
    $.setdata(JSON.stringify(dxxwapp, null, 2), "dxxwapp");
    $.msg($.name, "快音账号" + (_0x23be15 + 1) + "Token获取成功！🎉");
  }
}
async function login(_0x405772) {
  const _0x436bfe = "https://pubmod.hntv.tv/mobile/uaa-app/oauth/token",
    _0x14b130 = new Base64();
  let _0x4536f5 = _0x14b130.encode("em" + encodeURIComponent(_0x14b130.encode(dxxwapp[_0x405772].password))),
    _0x55fe7b = "grant_type=password&username=%7B%22principal%22%3A%22" + dxxwapp[_0x405772].mobile + "%22%2C%22authenticationType%22%3A%22mobile%22%7D&password=" + _0x4536f5;
  await getReqObject(_0x436bfe, _0x55fe7b, _0x405772);
  await httpRequest("post", requestObjects[_0x405772], printCaller());
  let _0x667710 = httpResult;
  _0x667710 != null ? (dxxwapp[_0x405772].accessToken = _0x667710.access_token, dxxwapp[_0x405772].refreshToken = _0x667710.refresh_token) : ($.log("[账号" + (_0x405772 + 1 < 10 ? "0" + (_0x405772 + 1) : _0x405772 + 1) + "]: 登录=> 登录失败"), dxxwlogs[_0x405772] += "[账号" + (_0x405772 + 1 < 10 ? "0" + (_0x405772 + 1) : _0x405772 + 1) + "]: 登录=> 登录失败\n");
}
async function userInfo(_0x33eb35) {
  const _0x48864c = "https://dxnum.hntv.tv/dxnum/app/getUserInfo";
  let _0x86c3e4 = "";
  await getReqObject(_0x48864c, _0x86c3e4, _0x33eb35);
  await httpRequest("get", requestObjects[_0x33eb35], printCaller());
  let _0x34b961 = httpResult;
  if (_0x34b961 != null && _0x34b961.code == 0) $.log("[账号" + (_0x33eb35 + 1 < 10 ? "0" + (_0x33eb35 + 1) : _0x33eb35 + 1) + "]: 用户名=> " + _0x34b961.result[0].nickname), dxxwlogs[_0x33eb35] += "[账号" + (_0x33eb35 + 1 < 10 ? "0" + (_0x33eb35 + 1) : _0x33eb35 + 1) + "]: 用户名=> " + _0x34b961.result[0].nickname + "\n", $.log("[账号" + (_0x33eb35 + 1 < 10 ? "0" + (_0x33eb35 + 1) : _0x33eb35 + 1) + "]: 手机号=> " + _0x34b961.result[0].mobile), dxxwlogs[_0x33eb35] += "[账号" + (_0x33eb35 + 1 < 10 ? "0" + (_0x33eb35 + 1) : _0x33eb35 + 1) + "]: 手机号=> " + _0x34b961.result[0].mobile + "\n";else {
    $.log("[账号" + (_0x33eb35 + 1 < 10 ? "0" + (_0x33eb35 + 1) : _0x33eb35 + 1) + "]: 用户信息=> " + _0x34b961?.["msg"]);
    dxxwlogs[_0x33eb35] += "[账号" + (_0x33eb35 + 1 < 10 ? "0" + (_0x33eb35 + 1) : _0x33eb35 + 1) + "]: 用户信息=> " + _0x34b961?.["msg"] + "\n";
    await login(_0x33eb35);
  }
}
async function getScore(_0x494f3c) {
  const _0x5ad974 = "https://integration.hntv.tv/integration/user/integration/info/";
  let _0x93d458 = "";
  await getReqObject(_0x5ad974, _0x93d458, _0x494f3c);
  requestObjects[_0x494f3c].headers["User-Agent"] = "Mozilla/5.0 (Linux; Android 8.1.0; Pixel Build/OPM4.171019.021.P1; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/121.0.6167.164 Mobile Safari/537.36 dxpayua";
  await httpRequest("get", requestObjects[_0x494f3c], printCaller());
  let _0x1b9e3e = httpResult;
  _0x1b9e3e != null && _0x1b9e3e.code == 0 && $.log("[账号" + (_0x494f3c + 1 < 10 ? "0" + (_0x494f3c + 1) : _0x494f3c + 1) + "]: 积分=> " + _0x1b9e3e.result.haveScore);
}
async function autoLoginRedirectUrl(_0x1bb80a) {
  const _0x5521ba = "https://integration.hntv.tv/integration/p/duiba/autoLoginUrl?dbredirect=https:%2F%2F90580-activity.dexfu.cn%2Fsign%2Fcomponent%2Fpage%3FsignOperatingId%3D327411516979156";
  let _0x5cce3d = "";
  await getReqObject(_0x5521ba, _0x5cce3d, _0x1bb80a);
  requestObjects[_0x1bb80a].headers["User-Agent"] = "Mozilla/5.0 (Linux; Android 8.1.0; Pixel Build/OPM4.171019.021.P1; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/121.0.6167.164 Mobile Safari/537.36 dxpayua";
  await httpRequest("get", requestObjects[_0x1bb80a], printCaller());
  let _0xa68d41 = httpResult;
  if (_0xa68d41 != null && _0xa68d41.code == 0) {
    let _0x242827 = _0xa68d41.result;
    await autoLogin(_0x1bb80a, _0x242827);
  } else $.log("[账号" + (_0x1bb80a + 1 < 10 ? "0" + (_0x1bb80a + 1) : _0x1bb80a + 1) + "]: 活动跳转=> " + _0xa68d41.msg), dxxwlogs[_0x1bb80a] += "[账号" + (_0x1bb80a + 1 < 10 ? "0" + (_0x1bb80a + 1) : _0x1bb80a + 1) + "]: 活动跳转=> " + _0xa68d41.msg + "\n";
}
async function autoLogin(_0x38dbaf, _0xb903e1) {
  requestObjects[_0x38dbaf] = duibaRequestOption(_0x38dbaf, _0xb903e1, "");
  await httpRequest("get", requestObjects[_0x38dbaf], printCaller());
  let _0x4e2d9b = httpResult;
  if (_0x4e2d9b != null) {
    let _0x483860 = [];
    for (let _0x2c239f = 0; _0x2c239f < _0x4e2d9b.length; _0x2c239f++) {
      if (_0x2c239f < 7) {
        let _0x46cc35 = _0x4e2d9b[_0x2c239f].split(";")[0];
        _0x483860.push(_0x46cc35);
      }
    }
    let _0x475e4c = _0x483860.join(";");
    dxxwapp[_0x38dbaf].duiba_cookie = _0x475e4c;
  } else $.log("[账号" + (_0x38dbaf + 1 < 10 ? "0" + (_0x38dbaf + 1) : _0x38dbaf + 1) + "]: 活动跳转=> " + _0x4e2d9b.desc), dxxwlogs[_0x38dbaf] += "[账号" + (_0x38dbaf + 1 < 10 ? "0" + (_0x38dbaf + 1) : _0x38dbaf + 1) + "]: 活动跳转=> " + _0x4e2d9b.desc + "\n";
}
async function dailySignInfo(_0x304528) {
  requestObjects[_0x304528] = duibaRequestOption(_0x304528, "/sign/component/index?signOperatingId=327411516979156&preview=false&", "");
  await httpRequest("get", requestObjects[_0x304528], printCaller());
  let _0x24e30d = httpResult;
  if (_0x24e30d != null && _0x24e30d.success == true) _0x24e30d.data.signResult == false && (await signKeyGet_new(_0x304528)), _0x24e30d.data.times > 0 && (await signLotteryKeyGet(_0x304528), await $.wait(helpUtils.randomNum(3000, 5000)));else {
    $.log("[账号" + (_0x304528 + 1 < 10 ? "0" + (_0x304528 + 1) : _0x304528 + 1) + "]: 签到信息=> " + _0x24e30d.desc);
    dxxwlogs[_0x304528] += "[账号" + (_0x304528 + 1 < 10 ? "0" + (_0x304528 + 1) : _0x304528 + 1) + "]: 签到信息=> " + _0x24e30d.desc + "\n";
  }
}
async function signKeyGet_new(_0x3b345a) {
  requestObjects[_0x3b345a] = duibaRequestOption(_0x3b345a, "/sign/component/page?signOperatingId=327411516979156", "");
  requestObjects[_0x3b345a].headers.Accept = "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7";
  await httpRequest("get", requestObjects[_0x3b345a], printCaller());
  let _0x4fb7ea = httpResult;
  if (_0x4fb7ea != null) {
    let _0x50a117 = /<script type="text\/javascript">\s*\/\*\s*\*\s*获取token\s*\*\/\s*[\s\S]*?<\/script>/.exec(_0x4fb7ea)[0],
      _0x4be503 = _0x50a117.replace("<script type=\"text/javascript\">", "");
    _0x4be503 = _0x4be503.replace("</script>", "");
    eval(_0x4be503);
    let _0x4d9355 = /var\s+key\s+=\s+'([^']+)';/.exec(getDuibaToken.toString())[1];
    await getSignToken_new(_0x3b345a, _0x4d9355);
  } else $.log("[账号" + (_0x3b345a + 1 < 10 ? "0" + (_0x3b345a + 1) : _0x3b345a + 1) + "]: 获取key=> " + _0x4fb7ea.desc), dxxwlogs[_0x3b345a] += "[账号" + (_0x3b345a + 1 < 10 ? "0" + (_0x3b345a + 1) : _0x3b345a + 1) + "]: 获取key=> " + _0x4fb7ea.desc + "\n";
}
async function getSignToken_new(_0x26e75e, _0x51fe15) {
  let _0x52bc9b = helpUtils.ts13();
  requestObjects[_0x26e75e] = duibaRequestOption(_0x26e75e, "/chw/ctoken/getToken", "timestamp=" + _0x52bc9b, "https://90580-activity.dexfu.cn/sign/component/page?signOperatingId=327411516979156");
  requestObjects[_0x26e75e].headers["Content-Type"] = "application/x-www-form-urlencoded";
  await httpRequest("post", requestObjects[_0x26e75e], printCaller());
  let _0x462a68 = httpResult;
  if (_0x462a68 != null && _0x462a68.success == true) {
    eval(_0x462a68.token);
    let _0x4d0a23 = window[_0x51fe15];
    await doSign(_0x26e75e, _0x4d0a23);
  } else {
    $.log("[账号" + (_0x26e75e + 1 < 10 ? "0" + (_0x26e75e + 1) : _0x26e75e + 1) + "]: 获取token=> 失败");
    dxxwlogs[_0x26e75e] += "[账号" + (_0x26e75e + 1 < 10 ? "0" + (_0x26e75e + 1) : _0x26e75e + 1) + "]: 获取token=> 失败\n";
  }
}
async function signLotteryKeyGet(_0x5c8b18) {
  requestObjects[_0x5c8b18] = duibaRequestOption(_0x5c8b18, "/sign/component/page?signOperatingId=327411516979156", "");
  requestObjects[_0x5c8b18].headers.Accept = "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7";
  await httpRequest("get", requestObjects[_0x5c8b18], printCaller());
  let _0x356297 = httpResult;
  if (_0x356297 != null) {
    {
      let _0x108d03 = /<script type="text\/javascript">\s*\/\*\s*\*\s*获取token\s*\*\/\s*[\s\S]*?<\/script>/.exec(_0x356297)[0],
        _0x1f7752 = _0x108d03.replace("<script type=\"text/javascript\">", "");
      _0x1f7752 = _0x1f7752.replace("</script>", "");
      eval(_0x1f7752);
      let _0x3cecd7 = /var\s+key\s+=\s+'([^']+)';/.exec(getDuibaToken.toString())[1];
      await getSignLotteryToken(_0x5c8b18, _0x3cecd7);
    }
  } else {
    $.log("[账号" + (_0x5c8b18 + 1 < 10 ? "0" + (_0x5c8b18 + 1) : _0x5c8b18 + 1) + "]: 获取key=> " + _0x356297.desc);
    dxxwlogs[_0x5c8b18] += "[账号" + (_0x5c8b18 + 1 < 10 ? "0" + (_0x5c8b18 + 1) : _0x5c8b18 + 1) + "]: 获取key=> " + _0x356297.desc + "\n";
  }
}
async function getSignLotteryToken(_0x580935, _0xe6cd5e) {
  let _0x5ad952 = helpUtils.ts13();
  requestObjects[_0x580935] = duibaRequestOption(_0x580935, "/chw/ctoken/getToken", "timestamp=" + _0x5ad952, "https://90580-activity.dexfu.cn/sign/component/page?signOperatingId=327411516979156");
  requestObjects[_0x580935].headers["Content-Type"] = "application/x-www-form-urlencoded";
  await httpRequest("post", requestObjects[_0x580935], printCaller());
  let _0x3e9f40 = httpResult;
  if (_0x3e9f40 != null && _0x3e9f40.success == true) {
    eval(_0x3e9f40.token);
    let _0x5c09be = window[_0xe6cd5e];
    await doLottery(_0x580935, _0x5c09be);
  } else $.log("[账号" + (_0x580935 + 1 < 10 ? "0" + (_0x580935 + 1) : _0x580935 + 1) + "]: 获取token=> 失败"), dxxwlogs[_0x580935] += "[账号" + (_0x580935 + 1 < 10 ? "0" + (_0x580935 + 1) : _0x580935 + 1) + "]: 获取token=> 失败\n";
}
async function doLottery(_0x24841f, _0x4cee99) {
  requestObjects[_0x24841f] = duibaRequestOption(_0x24841f, "/sign/component/doJoin?", "signOperatingId=327411516979156&token=" + _0x4cee99);
  requestObjects[_0x24841f].headers["Content-Type"] = "application/x-www-form-urlencoded";
  await httpRequest("post", requestObjects[_0x24841f], printCaller());
  let _0x1d2441 = httpResult;
  if (_0x1d2441 != null && _0x1d2441.success == true) {
    {
      let _0x898c17 = _0x1d2441.data.orderNum;
      await getSignLotteryStatus(_0x24841f, _0x898c17);
    }
  } else $.log("[账号" + (_0x24841f + 1 < 10 ? "0" + (_0x24841f + 1) : _0x24841f + 1) + "]: 签到结果=> " + _0x1d2441.desc), dxxwlogs[_0x24841f] += "[账号" + (_0x24841f + 1 < 10 ? "0" + (_0x24841f + 1) : _0x24841f + 1) + "]: 签到结果=> " + _0x1d2441.desc + "\n";
}
async function getSignLotteryStatus(_0x572619, _0x237d87) {
  requestObjects[_0x572619] = duibaRequestOption(_0x572619, "/plugin/getOrderStatus?orderId=" + _0x237d87 + "&", "");
  await httpRequest("get", requestObjects[_0x572619], printCaller());
  let _0xaf9155 = httpResult;
  _0xaf9155 != null && _0xaf9155.success == true ? ($.log("[账号" + (_0x572619 + 1 < 10 ? "0" + (_0x572619 + 1) : _0x572619 + 1) + "]: 转盘结果=> " + JSON.stringify(_0xaf9155.lottery)), _0xaf9155.lottery.type != "thanks" && (await wxPush(_0x572619, dxxwapp[_0x572619].mobile + "-中奖提醒(" + _0xaf9155.lottery.type + ")", MSG_UID))) : ($.log("[账号" + (_0x572619 + 1 < 10 ? "0" + (_0x572619 + 1) : _0x572619 + 1) + "]: 转盘结果=> 失败"), dxxwlogs[_0x572619] += "[账号" + (_0x572619 + 1 < 10 ? "0" + (_0x572619 + 1) : _0x572619 + 1) + "]: 转盘结果=> 失败\n");
}
async function doSign(_0x48be6a, _0x3272c9) {
  requestObjects[_0x48be6a] = duibaRequestOption(_0x48be6a, "/sign/component/doSign?", "signOperatingId=327411516979156&token=" + _0x3272c9);
  requestObjects[_0x48be6a].headers["Content-Type"] = "application/x-www-form-urlencoded";
  await httpRequest("post", requestObjects[_0x48be6a], printCaller());
  let _0x2c1245 = httpResult;
  if (_0x2c1245 != null && _0x2c1245.success == true) {
    $.log("[账号" + (_0x48be6a + 1 < 10 ? "0" + (_0x48be6a + 1) : _0x48be6a + 1) + "]: 签到结果=> 成功获得" + _0x2c1245.data.signResult / 20 + "积分");
    dxxwlogs[_0x48be6a] += "[账号" + (_0x48be6a + 1 < 10 ? "0" + (_0x48be6a + 1) : _0x48be6a + 1) + "]: 签到结果=> 成功获得" + _0x2c1245.data.signResult / 20 + "积分\n";
  } else $.log("[账号" + (_0x48be6a + 1 < 10 ? "0" + (_0x48be6a + 1) : _0x48be6a + 1) + "]: 签到结果=> " + _0x2c1245.desc), dxxwlogs[_0x48be6a] += "[账号" + (_0x48be6a + 1 < 10 ? "0" + (_0x48be6a + 1) : _0x48be6a + 1) + "]: 签到结果=> " + _0x2c1245.desc + "\n";
}
function duibaRequestOption(_0x104d67, _0x5d6f34, _0x57d01d, _0x13017d) {
  let _0x2fe6d4 = helpUtils.ts13(),
    _0x211d87 = _0x5d6f34.indexOf("duiba.com") != -1 ? _0x5d6f34 : !_0x5d6f34.endsWith("?") && !_0x5d6f34.endsWith("&") ? "https://90580-activity.dexfu.cn" + _0x5d6f34 : "https://90580-activity.dexfu.cn" + _0x5d6f34 + "_=" + _0x2fe6d4,
    _0x385d91 = {
      "Host": "90580-activity.dexfu.cn",
      "Content-Type": "application/json",
      "User-Agent": "Mozilla/5.0 (Linux; Android 12; 22081212C Build/SKQ1.220303.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/126.0.6478.186 Mobile Safari/537.36 dxpayua"
    },
    _0x3f26f1 = {
      "url": _0x211d87,
      "headers": _0x385d91
    };
  _0x57d01d != "" && (_0x3f26f1.body = _0x57d01d);
  dxxwapp[_0x104d67].duiba_cookie && (_0x3f26f1.headers.Cookie = dxxwapp[_0x104d67].duiba_cookie);
  if (_0x13017d) {
    _0x3f26f1.headers.Referer = _0x13017d;
  }
  return _0x3f26f1;
}
function getScriptAuth(_0x4d62d3, _0x4307d8, _0x7d74d5) {
  return new Promise((_0x1aecec, _0x52510d) => {
    const _0x3a02b0 = apiHost + "/script/permissions/lastest",
      _0x520911 = {
        "appName": _0x4d62d3,
        "userId": _0x4307d8,
        "activityCode": _0x7d74d5,
        "version": version
      },
      _0x240012 = {
        "url": _0x3a02b0,
        "headers": {
          "Content-Type": "application/json",
          "accept": "application/json"
        },
        "body": JSON.stringify(_0x520911)
      };
    $.post(_0x240012, async (_0xa7b7c6, _0x157162, _0xd815fa) => {
      if (_0xd815fa && _0xd815fa != null && _0xd815fa.replace(/\"/g, "").length > 50) {
        const _0x1e568a = _0xd815fa.replace(/\"/g, "").slice(34);
        helpUtils = await loadUtils(flushCash);
        CryptoJS = helpUtils.createCryptoJS();
        result = JSON.parse(CryptoJS.enc.Base64.parse(_0x1e568a).toString(CryptoJS.enc.Utf8));
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
        } catch (_0x5afdcc) {
          $.log(_0x5afdcc);
        }
      } else $.log("请求服务器接口出现错误，请检查网络连接情况");
      _0x1aecec();
    });
  });
}
function runComplete(_0x15d22c, _0xdaacf3) {
  return new Promise((_0x572271, _0x48702d) => {
    const _0x18415e = apiHost + "/script/run/add",
      _0x369ad9 = {
        "appName": _0x15d22c,
        "userId": _0xdaacf3,
        "activityCode": activeCode,
        "version": version
      },
      _0x1ee445 = {
        "url": _0x18415e,
        "headers": {
          "Content-Type": "application/json",
          "accept": "application/json"
        },
        "body": JSON.stringify(_0x369ad9)
      };
    $.post(_0x1ee445, async (_0x31bbd9, _0x41a08e, _0x25e497) => {
      _0x572271();
    });
  });
}
function loadToken(_0x4d8263) {
  let _0x322058 = dxxwapp[_0x4d8263].mobile;
  dxxw_item = dxxw_cks["" + _0x322058];
  if (dxxw_item) {
    dxxwapp[_0x4d8263].refreshToken = dxxw_item.refreshToken;
    dxxwapp[_0x4d8263].accessToken = dxxw_item.accessToken;
    return true;
  } else return false;
}
function saveToken(_0x566be5) {
  dxxw_cks[dxxwapp[_0x566be5].mobile] = {
    "refreshToken": dxxwapp[_0x566be5].refreshToken,
    "accessToken": dxxwapp[_0x566be5].accessToken,
    "ts": ts13()
  };
}
async function loadUtils(_0x59db9b) {
  let _0x5cc14f = $.getdata("Utils_Code") || "";
  if (!_0x59db9b && _0x5cc14f && Object.keys(_0x5cc14f).length) return $.log("📢 缓存中存在JS-Utils"), eval(_0x5cc14f), creatUtils();
  $.log("📢 开始初始化JS-Utils");
  return new Promise(async _0x3a4f8c => {
    $.getScript("http://script.david2024.top/scripts/tools/JS-Utils.js").then(_0x4504a5 => {
      $.setdata(_0x4504a5, "Utils_Code");
      eval(_0x4504a5);
      $.log("📢 JS-Utils加载成功");
      _0x3a4f8c(creatUtils());
    });
  });
}
function checkAddress(_0x31eadc, _0x539c80) {
  return new Promise((_0x3f4280, _0x508108) => {
    const _0x12c64b = setTimeout(() => {
        _0x3f4280(false);
      }, _0x539c80),
      _0x2a0cdd = http.get(_0x31eadc, _0x42b00b => {
        clearTimeout(_0x12c64b);
        _0x42b00b.statusCode === 404 ? _0x3f4280(true) : _0x3f4280(false);
      });
    _0x2a0cdd.on("error", _0x4368a4 => {
      clearTimeout(_0x12c64b);
      _0x3f4280(false);
    });
    _0x2a0cdd.on("timeout", () => {
      _0x2a0cdd.abort();
      _0x508108(new Error("请求超时"));
    });
  });
}
async function fetchRequest(_0xfad793, _0x41b671 = 3000) {
  return new Promise((_0x6ddea7, _0x4b5ad4) => {
    {
      const _0xd4af25 = {
        "url": _0xfad793 + "/docs"
      };
      setTimeout(() => {
        _0x6ddea7(false);
      }, _0x41b671);
      $.get(_0xd4af25, async (_0x517035, _0x380f83, _0x232502) => {
        _0x380f83.status == 401 ? _0x6ddea7(true) : _0x6ddea7(false);
      });
    }
  });
}
async function httpClientRequest(_0x369c75, _0x1f2e35 = 3000) {
  return new Promise((_0xf5aa46, _0x1847d9) => {
    {
      const _0x54ede9 = {
        "url": _0x369c75 + "/"
      };
      setTimeout(() => {
        _0xf5aa46(false);
      }, _0x1f2e35);
      $httpClient.get(_0x54ede9, async (_0x49f740, _0x46f117, _0x5a89e9) => {
        _0x5a89e9 == "{\"detail\":\"Not Found\"}" ? _0xf5aa46(true) : _0xf5aa46(false);
      });
    }
  });
}
function redisGet(_0x560b0e, _0x25e176, _0x46c1b1) {
  return new Promise((_0x1ca56d, _0x5e5522) => {
    const _0x507d84 = apiHost + "/redis/hash/get/" + _0x25e176 + "/" + _0x46c1b1,
      _0x4b690e = {
        "url": _0x507d84,
        "headers": {
          "Content-Type": "application/json",
          "accept": "application/json"
        }
      };
    $.get(_0x4b690e, async (_0x170855, _0x5119f0, _0x429566) => {
      const _0x2b2110 = _0x429566.replace(/\"/g, "");
      answerTexts[_0x560b0e] = _0x2b2110;
      _0x1ca56d();
      return _0x2b2110;
    });
  });
}
function redisSet(_0xa42d4b, _0x309692, _0x49f923) {
  return new Promise((_0x1ba6e7, _0xbe2dd7) => {
    const _0x3ccd5f = apiHost + "/redis/hash/set",
      _0xe00319 = {
        "key": _0xa42d4b,
        "hashKey": _0x309692,
        "hashValue": _0x49f923
      },
      _0x4e7974 = {
        "url": _0x3ccd5f,
        "headers": {
          "Content-Type": "application/json",
          "accept": "application/json"
        },
        "body": JSON.stringify(_0xe00319)
      };
    $.post(_0x4e7974, async (_0x2c9ae1, _0x352d1d, _0x35a3cf) => {
      {
        const _0xdd8ad7 = _0x35a3cf.replace(/\"/g, "");
        _0x1ba6e7();
      }
    });
  });
}
function redisPop(_0x2db5da) {
  return new Promise((_0x18a785, _0x42122b) => {
    {
      const _0x2f5681 = apiHost + "/redis/set/pop/" + _0x2db5da,
        _0x2c4729 = {
          "url": _0x2f5681,
          "headers": {
            "Content-Type": "application/json",
            "accept": "application/json"
          }
        };
      $.get(_0x2c4729, async (_0x1df01c, _0x5eaf51, _0x341bae) => {
        {
          const _0x3cee15 = _0x341bae.replace(/\"/g, "");
          popCookie = _0x3cee15;
          _0x18a785();
        }
      });
    }
  });
}
async function getReqObject(_0x211ad8, _0x1057e0, _0x287695) {
  let _0x2586b3 = "Mozilla/5.0 (Linux; Android 12; 22081212C Build/SKQ1.220303.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/126.0.6478.186 Mobile Safari/537.36 dxpayua";
  dxxwapp[_0x287695].ua && dxxwapp[_0x287695].ua != "" && (_0x2586b3 = dxxwapp[_0x287695].ua);
  let _0x65b114 = getHostname(_0x211ad8),
    _0x2c1778 = {
      "url": _0x211ad8,
      "headers": {
        "Content-Type": "application/x-www-form-urlencoded",
        "User-Agent": _0x2586b3,
        "Host": _0x65b114
      }
    };
  _0x65b114 != "pubmod.hntv.tv" && (_0x2c1778.headers.Authorization = "Bearer " + dxxwapp[_0x287695].accessToken);
  _0x1057e0 && (_0x2c1778.body = _0x1057e0);
  requestObjects[_0x287695] = _0x2c1778;
  return _0x2c1778;
}
function getReqObject_(_0x5e4b84, _0x5087fe, _0x4472a3) {
  let _0x38a2de = "Mozilla/5.0 (iPhone; CPU iPhone OS 16_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.31(0x18001f34) NetType/WIFI Language/zh_CN";
  dxxwapp[_0x4472a3].ua && dxxwapp[_0x4472a3].ua != "" && (_0x38a2de = dxxwapp[_0x4472a3].ua);
  let _0x550520 = getHostname(_0x5e4b84),
    _0x4742b7 = {
      "url": _0x5e4b84,
      "headers": {
        "Content-Type": "application/x-www-form-urlencoded",
        "User-Agent": _0x38a2de,
        "Authorization": dxxwapp[_0x4472a3].auth,
        "Host": _0x550520
      }
    };
  _0x5087fe && (_0x4742b7.body = _0x5087fe);
  requestObjects[_0x4472a3] = _0x4742b7;
  return _0x4742b7;
}
async function httpRequest(_0x58de3f, _0x5e12af, _0x1a15b3) {
  httpResult = null;
  return new Promise(_0x44fc90 => {
    $[_0x58de3f](_0x5e12af, async (_0x54deb2, _0x24d8f0, _0x2bf79b) => {
      try {
        if (_0x5e12af.url.includes("cn/autoLogin/autologin")) {
          {
            httpResult = _0x24d8f0.headers["set-cookie"];
            return;
          }
        } else {
          if (_0x5e12af.url.includes("/hdtool/index") || _0x5e12af.url.includes("/visual-editor/skins") || _0x5e12af.url.includes("/sign/component/page?") || _0x5e12af.url.includes("/activity/takePrizeNew") || _0x5e12af.url.includes("/superSurprise/index")) {
            httpResult = _0x2bf79b;
            return;
          }
        }
        if (_0x54deb2) $.log(_0x1a15b3 + ": " + _0x58de3f + "请求失败"), $.log(JSON.stringify(_0x54deb2)), $.logErr(_0x54deb2);else {
          if (safeGet(_0x2bf79b)) httpResult = JSON.parse(_0x2bf79b), debug == 1 && $.log(httpResult);else {
            const _0xedf73c = new URL(_0x5e12af.url);
            $.log(_0xedf73c.pathname + "发起" + _0x58de3f + "请求时，出现错误，请处理");
          }
        }
      } catch (_0x219292) {
        $.logErr(_0x219292, _0x24d8f0);
      } finally {
        _0x44fc90(httpResult);
      }
    });
  });
}
async function selectChannel(_0xdd3f8d, _0x2b6bcc) {
  if (channels_status[_0xdd3f8d] == 0) await getSign_(_0xdd3f8d, _0x2b6bcc);else {
    await getSign(_0xdd3f8d, _0x2b6bcc);
  }
}
function getSign_(_0xc3004d, _0x5814bb) {
  return new Promise((_0x40bb76, _0x3baf67) => {
    {
      function _0xefe6d3(_0x4cde50) {
        {
          let _0x1b2696 = _0x4cde50.toString("utf8");
          requestSigns[_0xc3004d] = _0x1b2696;
          wss[_0xc3004d].removeListener("message", _0xefe6d3);
          _0x40bb76(_0x1b2696);
        }
      }
      wss[_0xc3004d].on("message", _0xefe6d3);
      wss[_0xc3004d].readyState === 1 ? wss[_0xc3004d].send(JSON.stringify({
        "method": appName,
        "params": {
          "content": _0x5814bb,
          "appName": appName,
          "uuid": userId
        }
      }), _0x38597c => {
        _0x38597c && _0x3baf67(_0x38597c);
      }) : (_0x40bb76(getSign(_0xc3004d, _0x5814bb)), wss[_0xc3004d].removeListener("message", _0xefe6d3));
    }
  });
}
function getSign(_0x1946f9, _0x2a031b) {
  return new Promise((_0x5b62f0, _0x5b4fad) => {
    const _0x4e970f = apiHost + "/sign/dxxw",
      _0x4f20e1 = {
        "content": _0x2a031b,
        "appName": appName,
        "uuid": userId
      },
      _0x1b436a = {
        "url": _0x4e970f,
        "headers": {
          "Content-Type": "application/json",
          "accept": "application/json"
        },
        "body": JSON.stringify(_0x4f20e1)
      };
    $.post(_0x1b436a, async (_0x21934a, _0x9008b8, _0x4c753f) => {
      {
        const _0x4f1154 = _0x4c753f.replace(/\"/g, "");
        requestSigns[_0x1946f9] = _0x4f1154;
        _0x5b62f0();
      }
    });
  });
}
function getAnswer(_0x471052, _0x1ee450) {
  return new Promise((_0x1cd13d, _0x56cccd) => {
    const _0xc2f6c1 = apiHost + "/chat/deepseek",
      _0x2b33f1 = {
        "keywords": _0x1ee450,
        "uuid": userId
      },
      _0x1c0492 = {
        "url": _0xc2f6c1,
        "headers": {
          "Content-Type": "application/json",
          "accept": "application/json"
        },
        "body": JSON.stringify(_0x2b33f1)
      };
    $.post(_0x1c0492, async (_0x2b5bec, _0x3ce352, _0x2064d4) => {
      {
        const _0x33a873 = _0x2064d4.replace(/\"/g, "");
        requestSigns[_0x471052] = _0x33a873;
        _0x1cd13d();
      }
    });
  });
}
function sortUrlParams(_0x25408c, _0x50f385, _0xb2a6aa) {
  const _0x555fa5 = url2obj(_0x25408c);
  _0x50f385.forEach(_0x405032 => {
    delete _0x555fa5[_0x405032];
  });
  Object.assign(_0x555fa5, _0xb2a6aa);
  const _0x3b364d = Object.keys(_0x555fa5).sort(),
    _0x280225 = _0x3b364d.map(_0xc28a28 => _0xc28a28 + "=" + _0x555fa5[_0xc28a28]).join("&");
  return _0x280225;
}
function url2obj(_0x54d754) {
  _0x54d754 = _0x54d754.replace(/\"/g, "");
  var _0x3e2fc7;
  var _0x1a1f64 = {};
  var _0x23cf35 = _0x54d754.slice(_0x54d754.indexOf("?") + 1).split("&");
  for (var _0x39064b = 0; _0x39064b < _0x23cf35.length; _0x39064b++) {
    _0x3e2fc7 = _0x23cf35[_0x39064b].split("=");
    _0x1a1f64[_0x3e2fc7[0]] = _0x3e2fc7[1];
  }
  return _0x1a1f64;
}
function convertStringToJson(_0x2a5219) {
  const _0x17b5e1 = _0x2a5219.replace(/[{} ]/g, ""),
    _0x43c8eb = _0x17b5e1.split(","),
    _0xf03930 = {};
  _0x43c8eb.forEach(_0x4600f8 => {
    const [_0xac2de1, _0xd797e9] = _0x4600f8.split("=");
    _0xf03930[_0xac2de1] = _0xd797e9;
  });
  return _0xf03930;
}
function getHostname(_0x25d944) {
  let _0x2f423e = _0x25d944.substr(_0x25d944.indexOf("//") + 2),
    _0x1a7613 = _0x2f423e.substr(0, _0x2f423e.indexOf("/")),
    _0x381120 = "",
    _0x488539 = _0x1a7613.indexOf(":");
  _0x488539 > 0 ? _0x381120 = _0x1a7613.substr(0, _0x488539) : _0x381120 = _0x1a7613;
  return _0x381120;
}
function calculateTimeDifference(_0x2dfba9, _0x44e834) {
  var _0x3145c4 = new Date(_0x2dfba9);
  var _0x45e952 = new Date(_0x44e834);
  var _0x27c8ad = _0x45e952 - _0x3145c4;
  var _0x39fa95 = Math.floor(_0x27c8ad / 1000);
  return _0x39fa95;
}
function cutString(_0x3c226a, _0x3c1367) {
  if (_0x3c226a.length * 2 <= _0x3c1367) return _0x3c226a;
  var _0x37d3c5 = 0,
    _0x57607e = "";
  for (var _0x1a3a89 = 0; _0x1a3a89 < _0x3c226a.length; _0x1a3a89++) {
    {
      _0x57607e = _0x57607e + _0x3c226a.charAt(_0x1a3a89);
      if (_0x3c226a.charCodeAt(_0x1a3a89) > 128) {
        {
          _0x37d3c5 = _0x37d3c5 + 2;
          if (_0x37d3c5 >= _0x3c1367) return _0x57607e.substring(0, _0x57607e.length - 1) + "...";
        }
      } else {
        _0x37d3c5 = _0x37d3c5 + 1;
        if (_0x37d3c5 >= _0x3c1367) return _0x57607e.substring(0, _0x57607e.length - 2) + "...";
      }
    }
  }
  return _0x57607e;
}
function printCaller() {
  return new Error().stack.split("\n")[3].split("@")[0];
}
function safeGet(_0x74e6bd) {
  try {
    {
      if (typeof JSON.parse(_0x74e6bd) == "object") return true;
    }
  } catch (_0xa422e9) {
    console.log(_0xa422e9);
    console.log("服务器访问数据为空，请检查自身设备网络情况");
    return false;
  }
}
function jsonToUrl(_0x14b5b6) {
  var _0x228487 = Object.keys(_0x14b5b6).map(function (_0x187265) {
    return encodeURIComponent(_0x187265) + "=" + encodeURIComponent(_0x14b5b6[_0x187265]);
  }).join("&");
  return _0x228487;
}
function compileStr(_0x340b13) {
  var _0x50a491 = String.fromCharCode(_0x340b13.charCodeAt(0) + _0x340b13.length);
  for (var _0x3d7082 = 1; _0x3d7082 < _0x340b13.length; _0x3d7082++) {
    _0x50a491 += String.fromCharCode(_0x340b13.charCodeAt(_0x3d7082) + _0x340b13.charCodeAt(_0x3d7082 - 1));
  }
  return escape(_0x50a491);
}
function uncompileStr(_0x547cc6) {
  _0x547cc6 = unescape(_0x547cc6);
  var _0x441e49 = String.fromCharCode(_0x547cc6.charCodeAt(0) - _0x547cc6.length);
  for (var _0x194aaa = 1; _0x194aaa < _0x547cc6.length; _0x194aaa++) {
    _0x441e49 += String.fromCharCode(_0x547cc6.charCodeAt(_0x194aaa) - _0x441e49.charCodeAt(_0x194aaa - 1));
  }
  return _0x441e49;
}
function randomNum(_0x4a5e14, _0x23b2a4) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * _0x4a5e14 + 1);
      break;
    case 2:
      return parseInt(Math.random() * (_0x23b2a4 - _0x4a5e14 + 1) + _0x4a5e14);
      break;
    default:
      return 0;
      break;
  }
}
function randomMac() {
  return "XX:XX:XX:XX:XX:XX".replace(/X/g, function () {
    return "0123456789ABCDEF".charAt(Math.floor(Math.random() * 16));
  });
}
function guid() {
  function _0x52c600() {
    return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
  }
  return _0x52c600() + _0x52c600() + "-" + _0x52c600() + "-" + _0x52c600() + "-" + _0x52c600() + "-" + _0x52c600() + _0x52c600() + _0x52c600();
}
function phone_num(_0xf71f2c) {
  if (_0xf71f2c.length == 11) {
    let _0x28ffe5 = _0xf71f2c.replace(/(\d{3})\d{4}(\d{4})/, "$1****$2");
    return _0x28ffe5;
  } else {
    return _0xf71f2c;
  }
}
function txt_api(_0x2d86b3) {
  return new Promise((_0x4db2b6, _0x5d1141) => {
    const _0x435539 = "https://v1.hitokoto.cn/?c=e",
      _0x21256d = {
        "url": _0x435539,
        "headers": {
          "accept": "application/json"
        }
      };
    $.get(_0x21256d, async (_0x20c904, _0x8c7187, _0x2a71a5) => {
      {
        let _0x470c82 = JSON.parse(_0x2a71a5),
          _0x73bac9 = _0x470c82.hitokoto;
        contents[_0x2d86b3] = _0x73bac9 + " " + _0x73bac9;
        _0x4db2b6();
      }
    });
  });
}
function getTime_8() {
  return new Promise((_0x4b7e28, _0x2e03e8) => {
    const _0x475837 = "http://api.m.taobao.com/rest/api3.do?api=mtop.common.getTimestamp",
      _0x29499e = {
        "url": _0x475837
      };
    $.get(_0x29499e, async (_0x53faf0, _0xbda2b0, _0x297310) => {
      _0x4b7e28(_0x297310);
    });
  });
}
function ts13() {
  return Math.round(new Date().getTime()).toString();
}
function ts10() {
  return Math.round(new Date().getTime() / 1000).toString();
}
function message() {
  tz == 1 && $.msg($.name, "", $.message);
}
async function sendMsg(_0xccade7) {
  (hour == 9 || hour == 12 || hour == 18) && (tz == 1 ? $.isNode() ? await notify.sendNotify($.name, _0xccade7) : $.msg($.name, "", _0xccade7) : $.log(_0xccade7));
}
async function wxPush(_0x580bb4, _0x2109b1, _0xd1b0f) {
  return new Promise((_0x484d66, _0x222efc) => {
    const _0x46c46f = "https://wxpusher.zjiecode.com/api/send/message",
      _0x112222 = {
        "appToken": "AT_6BZsE2IyJuVLPp3mcOkKvpoF245GR9xn",
        "content": _0x2109b1,
        "summary": "大象新闻抽奖通知",
        "contentType": 1,
        "uids": [_0xd1b0f],
        "verifyPay": false
      },
      _0x3b17fb = {
        "url": _0x46c46f,
        "headers": {
          "Content-Type": "application/json"
        },
        "body": JSON.stringify(_0x112222)
      };
    $.post(_0x3b17fb, async (_0x5ba6e0, _0x251f27, _0x296a52) => {
      _0x484d66();
    });
  });
}
function randomString(_0x1b69ae, _0x3ea04e) {
  _0x3ea04e = _0x3ea04e || "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let _0x3cc1fd = "";
  for (let _0x40dffc = 0; _0x40dffc < _0x1b69ae; _0x40dffc++) {
    let _0x4b9b2a = Math.floor(Math.random() * _0x3ea04e.length);
    _0x3cc1fd += _0x3ea04e.substring(_0x4b9b2a, _0x4b9b2a + 1);
  }
  return _0x3cc1fd;
}
async function wxPush(_0x5dc083, _0x5a7e3d, _0x528ebc) {
  return new Promise((_0x2cf6a6, _0x47c05e) => {
    const _0xff3133 = "https://wxpusher.zjiecode.com/api/send/message",
      _0x1fc6c6 = {
        "appToken": "AT_c4P8PtQEcyg9C3ICLSBbziDJZnkMC9aH",
        "content": _0x5a7e3d,
        "summary": "快手答题余额通知",
        "contentType": 1,
        "uids": [_0x528ebc],
        "verifyPay": false
      },
      _0x1886e4 = {
        "url": _0xff3133,
        "headers": {
          "Content-Type": "application/json"
        },
        "body": JSON.stringify(_0x1fc6c6)
      };
    $.post(_0x1886e4, async (_0x48fc2e, _0x3d7526, _0x1d0563) => {
      _0x2cf6a6();
    });
  });
}
function MD5_Encrypt(_0x2fe1d3) {
  function _0x59e32d(_0x131775, _0xf84505) {
    return _0x131775 << _0xf84505 | _0x131775 >>> 32 - _0xf84505;
  }
  function _0x4c5800(_0x43ee1b, _0x253017) {
    var _0x985573, _0x6e2002, _0x4304ae, _0x592fa9, _0x2c1b76;
    _0x4304ae = 2147483648 & _0x43ee1b;
    _0x592fa9 = 2147483648 & _0x253017;
    _0x985573 = 1073741824 & _0x43ee1b;
    _0x6e2002 = 1073741824 & _0x253017;
    _0x2c1b76 = (1073741823 & _0x43ee1b) + (1073741823 & _0x253017);
    return _0x985573 & _0x6e2002 ? 2147483648 ^ _0x2c1b76 ^ _0x4304ae ^ _0x592fa9 : _0x985573 | _0x6e2002 ? 1073741824 & _0x2c1b76 ? 3221225472 ^ _0x2c1b76 ^ _0x4304ae ^ _0x592fa9 : 1073741824 ^ _0x2c1b76 ^ _0x4304ae ^ _0x592fa9 : _0x2c1b76 ^ _0x4304ae ^ _0x592fa9;
  }
  function _0x1a9d98(_0x5dea3f, _0x493e25, _0x501400) {
    return _0x5dea3f & _0x493e25 | ~_0x5dea3f & _0x501400;
  }
  function _0x339f49(_0x34904a, _0x18fab5, _0x58cf9e) {
    return _0x34904a & _0x58cf9e | _0x18fab5 & ~_0x58cf9e;
  }
  function _0x1d662e(_0x42d205, _0x40080f, _0x285cb9) {
    return _0x42d205 ^ _0x40080f ^ _0x285cb9;
  }
  function _0x3420f5(_0x46958d, _0x328477, _0x3d5ca3) {
    return _0x328477 ^ (_0x46958d | ~_0x3d5ca3);
  }
  function _0xf43c73(_0x3a2b04, _0x2fcd36, _0x367865, _0x1d6f4e, _0x424361, _0x470071, _0x3cbb87) {
    _0x3a2b04 = _0x4c5800(_0x3a2b04, _0x4c5800(_0x4c5800(_0x1a9d98(_0x2fcd36, _0x367865, _0x1d6f4e), _0x424361), _0x3cbb87));
    return _0x4c5800(_0x59e32d(_0x3a2b04, _0x470071), _0x2fcd36);
  }
  function _0x92d42a(_0x356723, _0x1da75e, _0x199381, _0x5d1db9, _0x48cbff, _0xe4772e, _0x255f9d) {
    _0x356723 = _0x4c5800(_0x356723, _0x4c5800(_0x4c5800(_0x339f49(_0x1da75e, _0x199381, _0x5d1db9), _0x48cbff), _0x255f9d));
    return _0x4c5800(_0x59e32d(_0x356723, _0xe4772e), _0x1da75e);
  }
  function _0x2fe325(_0x477965, _0x11a237, _0x1ca36c, _0x51a36c, _0x180f84, _0xc5619d, _0x55cf69) {
    _0x477965 = _0x4c5800(_0x477965, _0x4c5800(_0x4c5800(_0x1d662e(_0x11a237, _0x1ca36c, _0x51a36c), _0x180f84), _0x55cf69));
    return _0x4c5800(_0x59e32d(_0x477965, _0xc5619d), _0x11a237);
  }
  function _0x41aff4(_0xe8f8e1, _0xe11d74, _0x5c155b, _0x2616ef, _0x5a2584, _0x1845d9, _0x348248) {
    _0xe8f8e1 = _0x4c5800(_0xe8f8e1, _0x4c5800(_0x4c5800(_0x3420f5(_0xe11d74, _0x5c155b, _0x2616ef), _0x5a2584), _0x348248));
    return _0x4c5800(_0x59e32d(_0xe8f8e1, _0x1845d9), _0xe11d74);
  }
  function _0x5a136d(_0x586dfd) {
    for (var _0x418e8e, _0x31cb63 = _0x586dfd.length, _0x19bf56 = _0x31cb63 + 8, _0x2f7a52 = (_0x19bf56 - _0x19bf56 % 64) / 64, _0x37b933 = 16 * (_0x2f7a52 + 1), _0x4deb5f = new Array(_0x37b933 - 1), _0x4c36c2 = 0, _0x56375f = 0; _0x31cb63 > _0x56375f;) _0x418e8e = (_0x56375f - _0x56375f % 4) / 4, _0x4c36c2 = _0x56375f % 4 * 8, _0x4deb5f[_0x418e8e] = _0x4deb5f[_0x418e8e] | _0x586dfd.charCodeAt(_0x56375f) << _0x4c36c2, _0x56375f++;
    _0x418e8e = (_0x56375f - _0x56375f % 4) / 4;
    _0x4c36c2 = _0x56375f % 4 * 8;
    _0x4deb5f[_0x418e8e] = _0x4deb5f[_0x418e8e] | 128 << _0x4c36c2;
    _0x4deb5f[_0x37b933 - 2] = _0x31cb63 << 3;
    _0x4deb5f[_0x37b933 - 1] = _0x31cb63 >>> 29;
    return _0x4deb5f;
  }
  function _0x33f864(_0x17bf1d) {
    var _0x48c5d7,
      _0x4721da,
      _0x1329fc = "",
      _0x13fed8 = "";
    for (_0x4721da = 0; 3 >= _0x4721da; _0x4721da++) _0x48c5d7 = _0x17bf1d >>> 8 * _0x4721da & 255, _0x13fed8 = "0" + _0x48c5d7.toString(16), _0x1329fc += _0x13fed8.substr(_0x13fed8.length - 2, 2);
    return _0x1329fc;
  }
  function _0x85da10(_0x58b389) {
    {
      _0x58b389 = _0x58b389.replace(/\r\n/g, "\n");
      for (var _0x4797f7 = "", _0x49d051 = 0; _0x49d051 < _0x58b389.length; _0x49d051++) {
        var _0x38fd30 = _0x58b389.charCodeAt(_0x49d051);
        128 > _0x38fd30 ? _0x4797f7 += String.fromCharCode(_0x38fd30) : _0x38fd30 > 127 && 2048 > _0x38fd30 ? (_0x4797f7 += String.fromCharCode(_0x38fd30 >> 6 | 192), _0x4797f7 += String.fromCharCode(63 & _0x38fd30 | 128)) : (_0x4797f7 += String.fromCharCode(_0x38fd30 >> 12 | 224), _0x4797f7 += String.fromCharCode(_0x38fd30 >> 6 & 63 | 128), _0x4797f7 += String.fromCharCode(63 & _0x38fd30 | 128));
      }
      return _0x4797f7;
    }
  }
  var _0x56cff5,
    _0x40c689,
    _0x3843aa,
    _0x1029d2,
    _0x19db93,
    _0x1a8aac,
    _0x44bad1,
    _0x1b4627,
    _0x469ccb,
    _0x2be602 = [],
    _0x2ae22e = 7,
    _0x13a60e = 12,
    _0x1739bd = 17,
    _0x2dfc3d = 22,
    _0x4a88a9 = 5,
    _0x29eddb = 9,
    _0xc8f351 = 14,
    _0x596062 = 20,
    _0x3b47e7 = 4,
    _0x78acf9 = 11,
    _0x2cc0c5 = 16,
    _0x594c59 = 23,
    _0x20b445 = 6,
    _0x1e0b5b = 10,
    _0x277ea3 = 15,
    _0x16a0b5 = 21;
  for (_0x2fe1d3 = _0x85da10(_0x2fe1d3), _0x2be602 = _0x5a136d(_0x2fe1d3), _0x1a8aac = 1732584193, _0x44bad1 = 4023233417, _0x1b4627 = 2562383102, _0x469ccb = 271733878, _0x56cff5 = 0; _0x56cff5 < _0x2be602.length; _0x56cff5 += 16) _0x40c689 = _0x1a8aac, _0x3843aa = _0x44bad1, _0x1029d2 = _0x1b4627, _0x19db93 = _0x469ccb, _0x1a8aac = _0xf43c73(_0x1a8aac, _0x44bad1, _0x1b4627, _0x469ccb, _0x2be602[_0x56cff5 + 0], _0x2ae22e, 3614090360), _0x469ccb = _0xf43c73(_0x469ccb, _0x1a8aac, _0x44bad1, _0x1b4627, _0x2be602[_0x56cff5 + 1], _0x13a60e, 3905402710), _0x1b4627 = _0xf43c73(_0x1b4627, _0x469ccb, _0x1a8aac, _0x44bad1, _0x2be602[_0x56cff5 + 2], _0x1739bd, 606105819), _0x44bad1 = _0xf43c73(_0x44bad1, _0x1b4627, _0x469ccb, _0x1a8aac, _0x2be602[_0x56cff5 + 3], _0x2dfc3d, 3250441966), _0x1a8aac = _0xf43c73(_0x1a8aac, _0x44bad1, _0x1b4627, _0x469ccb, _0x2be602[_0x56cff5 + 4], _0x2ae22e, 4118548399), _0x469ccb = _0xf43c73(_0x469ccb, _0x1a8aac, _0x44bad1, _0x1b4627, _0x2be602[_0x56cff5 + 5], _0x13a60e, 1200080426), _0x1b4627 = _0xf43c73(_0x1b4627, _0x469ccb, _0x1a8aac, _0x44bad1, _0x2be602[_0x56cff5 + 6], _0x1739bd, 2821735955), _0x44bad1 = _0xf43c73(_0x44bad1, _0x1b4627, _0x469ccb, _0x1a8aac, _0x2be602[_0x56cff5 + 7], _0x2dfc3d, 4249261313), _0x1a8aac = _0xf43c73(_0x1a8aac, _0x44bad1, _0x1b4627, _0x469ccb, _0x2be602[_0x56cff5 + 8], _0x2ae22e, 1770035416), _0x469ccb = _0xf43c73(_0x469ccb, _0x1a8aac, _0x44bad1, _0x1b4627, _0x2be602[_0x56cff5 + 9], _0x13a60e, 2336552879), _0x1b4627 = _0xf43c73(_0x1b4627, _0x469ccb, _0x1a8aac, _0x44bad1, _0x2be602[_0x56cff5 + 10], _0x1739bd, 4294925233), _0x44bad1 = _0xf43c73(_0x44bad1, _0x1b4627, _0x469ccb, _0x1a8aac, _0x2be602[_0x56cff5 + 11], _0x2dfc3d, 2304563134), _0x1a8aac = _0xf43c73(_0x1a8aac, _0x44bad1, _0x1b4627, _0x469ccb, _0x2be602[_0x56cff5 + 12], _0x2ae22e, 1804603682), _0x469ccb = _0xf43c73(_0x469ccb, _0x1a8aac, _0x44bad1, _0x1b4627, _0x2be602[_0x56cff5 + 13], _0x13a60e, 4254626195), _0x1b4627 = _0xf43c73(_0x1b4627, _0x469ccb, _0x1a8aac, _0x44bad1, _0x2be602[_0x56cff5 + 14], _0x1739bd, 2792965006), _0x44bad1 = _0xf43c73(_0x44bad1, _0x1b4627, _0x469ccb, _0x1a8aac, _0x2be602[_0x56cff5 + 15], _0x2dfc3d, 1236535329), _0x1a8aac = _0x92d42a(_0x1a8aac, _0x44bad1, _0x1b4627, _0x469ccb, _0x2be602[_0x56cff5 + 1], _0x4a88a9, 4129170786), _0x469ccb = _0x92d42a(_0x469ccb, _0x1a8aac, _0x44bad1, _0x1b4627, _0x2be602[_0x56cff5 + 6], _0x29eddb, 3225465664), _0x1b4627 = _0x92d42a(_0x1b4627, _0x469ccb, _0x1a8aac, _0x44bad1, _0x2be602[_0x56cff5 + 11], _0xc8f351, 643717713), _0x44bad1 = _0x92d42a(_0x44bad1, _0x1b4627, _0x469ccb, _0x1a8aac, _0x2be602[_0x56cff5 + 0], _0x596062, 3921069994), _0x1a8aac = _0x92d42a(_0x1a8aac, _0x44bad1, _0x1b4627, _0x469ccb, _0x2be602[_0x56cff5 + 5], _0x4a88a9, 3593408605), _0x469ccb = _0x92d42a(_0x469ccb, _0x1a8aac, _0x44bad1, _0x1b4627, _0x2be602[_0x56cff5 + 10], _0x29eddb, 38016083), _0x1b4627 = _0x92d42a(_0x1b4627, _0x469ccb, _0x1a8aac, _0x44bad1, _0x2be602[_0x56cff5 + 15], _0xc8f351, 3634488961), _0x44bad1 = _0x92d42a(_0x44bad1, _0x1b4627, _0x469ccb, _0x1a8aac, _0x2be602[_0x56cff5 + 4], _0x596062, 3889429448), _0x1a8aac = _0x92d42a(_0x1a8aac, _0x44bad1, _0x1b4627, _0x469ccb, _0x2be602[_0x56cff5 + 9], _0x4a88a9, 568446438), _0x469ccb = _0x92d42a(_0x469ccb, _0x1a8aac, _0x44bad1, _0x1b4627, _0x2be602[_0x56cff5 + 14], _0x29eddb, 3275163606), _0x1b4627 = _0x92d42a(_0x1b4627, _0x469ccb, _0x1a8aac, _0x44bad1, _0x2be602[_0x56cff5 + 3], _0xc8f351, 4107603335), _0x44bad1 = _0x92d42a(_0x44bad1, _0x1b4627, _0x469ccb, _0x1a8aac, _0x2be602[_0x56cff5 + 8], _0x596062, 1163531501), _0x1a8aac = _0x92d42a(_0x1a8aac, _0x44bad1, _0x1b4627, _0x469ccb, _0x2be602[_0x56cff5 + 13], _0x4a88a9, 2850285829), _0x469ccb = _0x92d42a(_0x469ccb, _0x1a8aac, _0x44bad1, _0x1b4627, _0x2be602[_0x56cff5 + 2], _0x29eddb, 4243563512), _0x1b4627 = _0x92d42a(_0x1b4627, _0x469ccb, _0x1a8aac, _0x44bad1, _0x2be602[_0x56cff5 + 7], _0xc8f351, 1735328473), _0x44bad1 = _0x92d42a(_0x44bad1, _0x1b4627, _0x469ccb, _0x1a8aac, _0x2be602[_0x56cff5 + 12], _0x596062, 2368359562), _0x1a8aac = _0x2fe325(_0x1a8aac, _0x44bad1, _0x1b4627, _0x469ccb, _0x2be602[_0x56cff5 + 5], _0x3b47e7, 4294588738), _0x469ccb = _0x2fe325(_0x469ccb, _0x1a8aac, _0x44bad1, _0x1b4627, _0x2be602[_0x56cff5 + 8], _0x78acf9, 2272392833), _0x1b4627 = _0x2fe325(_0x1b4627, _0x469ccb, _0x1a8aac, _0x44bad1, _0x2be602[_0x56cff5 + 11], _0x2cc0c5, 1839030562), _0x44bad1 = _0x2fe325(_0x44bad1, _0x1b4627, _0x469ccb, _0x1a8aac, _0x2be602[_0x56cff5 + 14], _0x594c59, 4259657740), _0x1a8aac = _0x2fe325(_0x1a8aac, _0x44bad1, _0x1b4627, _0x469ccb, _0x2be602[_0x56cff5 + 1], _0x3b47e7, 2763975236), _0x469ccb = _0x2fe325(_0x469ccb, _0x1a8aac, _0x44bad1, _0x1b4627, _0x2be602[_0x56cff5 + 4], _0x78acf9, 1272893353), _0x1b4627 = _0x2fe325(_0x1b4627, _0x469ccb, _0x1a8aac, _0x44bad1, _0x2be602[_0x56cff5 + 7], _0x2cc0c5, 4139469664), _0x44bad1 = _0x2fe325(_0x44bad1, _0x1b4627, _0x469ccb, _0x1a8aac, _0x2be602[_0x56cff5 + 10], _0x594c59, 3200236656), _0x1a8aac = _0x2fe325(_0x1a8aac, _0x44bad1, _0x1b4627, _0x469ccb, _0x2be602[_0x56cff5 + 13], _0x3b47e7, 681279174), _0x469ccb = _0x2fe325(_0x469ccb, _0x1a8aac, _0x44bad1, _0x1b4627, _0x2be602[_0x56cff5 + 0], _0x78acf9, 3936430074), _0x1b4627 = _0x2fe325(_0x1b4627, _0x469ccb, _0x1a8aac, _0x44bad1, _0x2be602[_0x56cff5 + 3], _0x2cc0c5, 3572445317), _0x44bad1 = _0x2fe325(_0x44bad1, _0x1b4627, _0x469ccb, _0x1a8aac, _0x2be602[_0x56cff5 + 6], _0x594c59, 76029189), _0x1a8aac = _0x2fe325(_0x1a8aac, _0x44bad1, _0x1b4627, _0x469ccb, _0x2be602[_0x56cff5 + 9], _0x3b47e7, 3654602809), _0x469ccb = _0x2fe325(_0x469ccb, _0x1a8aac, _0x44bad1, _0x1b4627, _0x2be602[_0x56cff5 + 12], _0x78acf9, 3873151461), _0x1b4627 = _0x2fe325(_0x1b4627, _0x469ccb, _0x1a8aac, _0x44bad1, _0x2be602[_0x56cff5 + 15], _0x2cc0c5, 530742520), _0x44bad1 = _0x2fe325(_0x44bad1, _0x1b4627, _0x469ccb, _0x1a8aac, _0x2be602[_0x56cff5 + 2], _0x594c59, 3299628645), _0x1a8aac = _0x41aff4(_0x1a8aac, _0x44bad1, _0x1b4627, _0x469ccb, _0x2be602[_0x56cff5 + 0], _0x20b445, 4096336452), _0x469ccb = _0x41aff4(_0x469ccb, _0x1a8aac, _0x44bad1, _0x1b4627, _0x2be602[_0x56cff5 + 7], _0x1e0b5b, 1126891415), _0x1b4627 = _0x41aff4(_0x1b4627, _0x469ccb, _0x1a8aac, _0x44bad1, _0x2be602[_0x56cff5 + 14], _0x277ea3, 2878612391), _0x44bad1 = _0x41aff4(_0x44bad1, _0x1b4627, _0x469ccb, _0x1a8aac, _0x2be602[_0x56cff5 + 5], _0x16a0b5, 4237533241), _0x1a8aac = _0x41aff4(_0x1a8aac, _0x44bad1, _0x1b4627, _0x469ccb, _0x2be602[_0x56cff5 + 12], _0x20b445, 1700485571), _0x469ccb = _0x41aff4(_0x469ccb, _0x1a8aac, _0x44bad1, _0x1b4627, _0x2be602[_0x56cff5 + 3], _0x1e0b5b, 2399980690), _0x1b4627 = _0x41aff4(_0x1b4627, _0x469ccb, _0x1a8aac, _0x44bad1, _0x2be602[_0x56cff5 + 10], _0x277ea3, 4293915773), _0x44bad1 = _0x41aff4(_0x44bad1, _0x1b4627, _0x469ccb, _0x1a8aac, _0x2be602[_0x56cff5 + 1], _0x16a0b5, 2240044497), _0x1a8aac = _0x41aff4(_0x1a8aac, _0x44bad1, _0x1b4627, _0x469ccb, _0x2be602[_0x56cff5 + 8], _0x20b445, 1873313359), _0x469ccb = _0x41aff4(_0x469ccb, _0x1a8aac, _0x44bad1, _0x1b4627, _0x2be602[_0x56cff5 + 15], _0x1e0b5b, 4264355552), _0x1b4627 = _0x41aff4(_0x1b4627, _0x469ccb, _0x1a8aac, _0x44bad1, _0x2be602[_0x56cff5 + 6], _0x277ea3, 2734768916), _0x44bad1 = _0x41aff4(_0x44bad1, _0x1b4627, _0x469ccb, _0x1a8aac, _0x2be602[_0x56cff5 + 13], _0x16a0b5, 1309151649), _0x1a8aac = _0x41aff4(_0x1a8aac, _0x44bad1, _0x1b4627, _0x469ccb, _0x2be602[_0x56cff5 + 4], _0x20b445, 4149444226), _0x469ccb = _0x41aff4(_0x469ccb, _0x1a8aac, _0x44bad1, _0x1b4627, _0x2be602[_0x56cff5 + 11], _0x1e0b5b, 3174756917), _0x1b4627 = _0x41aff4(_0x1b4627, _0x469ccb, _0x1a8aac, _0x44bad1, _0x2be602[_0x56cff5 + 2], _0x277ea3, 718787259), _0x44bad1 = _0x41aff4(_0x44bad1, _0x1b4627, _0x469ccb, _0x1a8aac, _0x2be602[_0x56cff5 + 9], _0x16a0b5, 3951481745), _0x1a8aac = _0x4c5800(_0x1a8aac, _0x40c689), _0x44bad1 = _0x4c5800(_0x44bad1, _0x3843aa), _0x1b4627 = _0x4c5800(_0x1b4627, _0x1029d2), _0x469ccb = _0x4c5800(_0x469ccb, _0x19db93);
  var _0x3e4d17 = _0x33f864(_0x1a8aac) + _0x33f864(_0x44bad1) + _0x33f864(_0x1b4627) + _0x33f864(_0x469ccb);
  return _0x3e4d17.toLowerCase();
}
function SHA256(_0x1288c6) {
  var _0x33be05 = 8,
    _0x3b54e3 = 0;
  function _0x41ef5a(_0x2b1b48, _0xea6bb) {
    {
      var _0x12889e = (_0x2b1b48 & 65535) + (_0xea6bb & 65535),
        _0x2d6040 = (_0x2b1b48 >> 16) + (_0xea6bb >> 16) + (_0x12889e >> 16);
      return _0x2d6040 << 16 | _0x12889e & 65535;
    }
  }
  function _0x3da92f(_0x3605e2, _0x4275ca) {
    return _0x3605e2 >>> _0x4275ca | _0x3605e2 << 32 - _0x4275ca;
  }
  function _0x1f8cc0(_0x47873a, _0x3e7947) {
    return _0x47873a >>> _0x3e7947;
  }
  function _0x6fca9b(_0x448a6b, _0x5d07c7, _0x212843) {
    return _0x448a6b & _0x5d07c7 ^ ~_0x448a6b & _0x212843;
  }
  function _0x3a9921(_0xa74b83, _0x1df54e, _0x269b5e) {
    return _0xa74b83 & _0x1df54e ^ _0xa74b83 & _0x269b5e ^ _0x1df54e & _0x269b5e;
  }
  function _0x13f740(_0x3a7f0) {
    return _0x3da92f(_0x3a7f0, 2) ^ _0x3da92f(_0x3a7f0, 13) ^ _0x3da92f(_0x3a7f0, 22);
  }
  function _0x48f879(_0x129693) {
    return _0x3da92f(_0x129693, 6) ^ _0x3da92f(_0x129693, 11) ^ _0x3da92f(_0x129693, 25);
  }
  function _0x2e9abe(_0x4b6c62) {
    return _0x3da92f(_0x4b6c62, 7) ^ _0x3da92f(_0x4b6c62, 18) ^ _0x1f8cc0(_0x4b6c62, 3);
  }
  function _0x114b5c(_0x3a7749) {
    return _0x3da92f(_0x3a7749, 17) ^ _0x3da92f(_0x3a7749, 19) ^ _0x1f8cc0(_0x3a7749, 10);
  }
  function _0x23aa57(_0x374396, _0x30ab6f) {
    var _0x275bb5 = new Array(1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298),
      _0xdb0512 = new Array(1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225),
      _0x4a57ca = new Array(64),
      _0x58f049,
      _0x5543d7,
      _0x5d5c96,
      _0x460eae,
      _0x118d30,
      _0x36d7b1,
      _0x161e8c,
      _0x42b3f6,
      _0x27f6e8,
      _0x4a402b,
      _0x401654,
      _0x28d5e3;
    _0x374396[_0x30ab6f >> 5] |= 128 << 24 - _0x30ab6f % 32;
    _0x374396[(_0x30ab6f + 64 >> 9 << 4) + 15] = _0x30ab6f;
    for (var _0x27f6e8 = 0; _0x27f6e8 < _0x374396.length; _0x27f6e8 += 16) {
      _0x58f049 = _0xdb0512[0];
      _0x5543d7 = _0xdb0512[1];
      _0x5d5c96 = _0xdb0512[2];
      _0x460eae = _0xdb0512[3];
      _0x118d30 = _0xdb0512[4];
      _0x36d7b1 = _0xdb0512[5];
      _0x161e8c = _0xdb0512[6];
      _0x42b3f6 = _0xdb0512[7];
      for (var _0x4a402b = 0; _0x4a402b < 64; _0x4a402b++) {
        {
          if (_0x4a402b < 16) _0x4a57ca[_0x4a402b] = _0x374396[_0x4a402b + _0x27f6e8];else _0x4a57ca[_0x4a402b] = _0x41ef5a(_0x41ef5a(_0x41ef5a(_0x114b5c(_0x4a57ca[_0x4a402b - 2]), _0x4a57ca[_0x4a402b - 7]), _0x2e9abe(_0x4a57ca[_0x4a402b - 15])), _0x4a57ca[_0x4a402b - 16]);
          _0x401654 = _0x41ef5a(_0x41ef5a(_0x41ef5a(_0x41ef5a(_0x42b3f6, _0x48f879(_0x118d30)), _0x6fca9b(_0x118d30, _0x36d7b1, _0x161e8c)), _0x275bb5[_0x4a402b]), _0x4a57ca[_0x4a402b]);
          _0x28d5e3 = _0x41ef5a(_0x13f740(_0x58f049), _0x3a9921(_0x58f049, _0x5543d7, _0x5d5c96));
          _0x42b3f6 = _0x161e8c;
          _0x161e8c = _0x36d7b1;
          _0x36d7b1 = _0x118d30;
          _0x118d30 = _0x41ef5a(_0x460eae, _0x401654);
          _0x460eae = _0x5d5c96;
          _0x5d5c96 = _0x5543d7;
          _0x5543d7 = _0x58f049;
          _0x58f049 = _0x41ef5a(_0x401654, _0x28d5e3);
        }
      }
      _0xdb0512[0] = _0x41ef5a(_0x58f049, _0xdb0512[0]);
      _0xdb0512[1] = _0x41ef5a(_0x5543d7, _0xdb0512[1]);
      _0xdb0512[2] = _0x41ef5a(_0x5d5c96, _0xdb0512[2]);
      _0xdb0512[3] = _0x41ef5a(_0x460eae, _0xdb0512[3]);
      _0xdb0512[4] = _0x41ef5a(_0x118d30, _0xdb0512[4]);
      _0xdb0512[5] = _0x41ef5a(_0x36d7b1, _0xdb0512[5]);
      _0xdb0512[6] = _0x41ef5a(_0x161e8c, _0xdb0512[6]);
      _0xdb0512[7] = _0x41ef5a(_0x42b3f6, _0xdb0512[7]);
    }
    return _0xdb0512;
  }
  function _0x1088ed(_0x4eb3a9) {
    {
      var _0x23a544 = Array(),
        _0x5544a1 = (1 << _0x33be05) - 1;
      for (var _0x15de8c = 0; _0x15de8c < _0x4eb3a9.length * _0x33be05; _0x15de8c += _0x33be05) {
        _0x23a544[_0x15de8c >> 5] |= (_0x4eb3a9.charCodeAt(_0x15de8c / _0x33be05) & _0x5544a1) << 24 - _0x15de8c % 32;
      }
      return _0x23a544;
    }
  }
  function _0x4953f8(_0x1a4256) {
    {
      _0x1a4256 = _0x1a4256.replace(/\r\n/g, "\n");
      var _0x58f278 = "";
      for (var _0xd14c53 = 0; _0xd14c53 < _0x1a4256.length; _0xd14c53++) {
        var _0x1ccebf = _0x1a4256.charCodeAt(_0xd14c53);
        if (_0x1ccebf < 128) _0x58f278 += String.fromCharCode(_0x1ccebf);else {
          if (_0x1ccebf > 127 && _0x1ccebf < 2048) {
            _0x58f278 += String.fromCharCode(_0x1ccebf >> 6 | 192);
            _0x58f278 += String.fromCharCode(_0x1ccebf & 63 | 128);
          } else _0x58f278 += String.fromCharCode(_0x1ccebf >> 12 | 224), _0x58f278 += String.fromCharCode(_0x1ccebf >> 6 & 63 | 128), _0x58f278 += String.fromCharCode(_0x1ccebf & 63 | 128);
        }
      }
      return _0x58f278;
    }
  }
  function _0x102f5b(_0x5b5bca) {
    var _0x240b44 = _0x3b54e3 ? "0123456789ABCDEF" : "0123456789abcdef",
      _0x2d65f8 = "";
    for (var _0x3c9bd3 = 0; _0x3c9bd3 < _0x5b5bca.length * 4; _0x3c9bd3++) {
      _0x2d65f8 += _0x240b44.charAt(_0x5b5bca[_0x3c9bd3 >> 2] >> (3 - _0x3c9bd3 % 4) * 8 + 4 & 15) + _0x240b44.charAt(_0x5b5bca[_0x3c9bd3 >> 2] >> (3 - _0x3c9bd3 % 4) * 8 & 15);
    }
    return _0x2d65f8;
  }
  _0x1288c6 = _0x4953f8(_0x1288c6);
  return _0x102f5b(_0x23aa57(_0x1088ed(_0x1288c6), _0x1288c6.length * _0x33be05));
}
function SHA1(_0x2c8c84) {
  function _0x2c54cd(_0x16887f, _0x497603) {
    var _0x38b0f5 = _0x16887f << _0x497603 | _0x16887f >>> 32 - _0x497603;
    return _0x38b0f5;
  }
  function _0x434108(_0x18f2ee) {
    {
      var _0xf06b75 = "";
      var _0x1bf492;
      var _0x367236;
      var _0x528b5a;
      for (_0x1bf492 = 0; _0x1bf492 <= 6; _0x1bf492 += 2) {
        _0x367236 = _0x18f2ee >>> _0x1bf492 * 4 + 4 & 15;
        _0x528b5a = _0x18f2ee >>> _0x1bf492 * 4 & 15;
        _0xf06b75 += _0x367236.toString(16) + _0x528b5a.toString(16);
      }
      return _0xf06b75;
    }
  }
  function _0x13c68f(_0x1d34d0) {
    var _0xda5276 = "";
    var _0x2f14e2;
    var _0x230bc7;
    for (_0x2f14e2 = 7; _0x2f14e2 >= 0; _0x2f14e2--) {
      _0x230bc7 = _0x1d34d0 >>> _0x2f14e2 * 4 & 15;
      _0xda5276 += _0x230bc7.toString(16);
    }
    return _0xda5276;
  }
  function _0x150eb1(_0x4af4c0) {
    {
      _0x4af4c0 = _0x4af4c0.replace(/\r\n/g, "\n");
      var _0x504aaa = "";
      for (var _0x300e11 = 0; _0x300e11 < _0x4af4c0.length; _0x300e11++) {
        var _0x5e6c0d = _0x4af4c0.charCodeAt(_0x300e11);
        if (_0x5e6c0d < 128) _0x504aaa += String.fromCharCode(_0x5e6c0d);else _0x5e6c0d > 127 && _0x5e6c0d < 2048 ? (_0x504aaa += String.fromCharCode(_0x5e6c0d >> 6 | 192), _0x504aaa += String.fromCharCode(_0x5e6c0d & 63 | 128)) : (_0x504aaa += String.fromCharCode(_0x5e6c0d >> 12 | 224), _0x504aaa += String.fromCharCode(_0x5e6c0d >> 6 & 63 | 128), _0x504aaa += String.fromCharCode(_0x5e6c0d & 63 | 128));
      }
      return _0x504aaa;
    }
  }
  var _0x239737,
    _0x3d8a52,
    _0x20844e,
    _0x52d389 = new Array(80),
    _0x2645de = 1732584193,
    _0x653d74 = 4023233417,
    _0x259f47 = 2562383102,
    _0x13aab5 = 271733878,
    _0x5ef954 = 3285377520,
    _0x55cc60,
    _0x2b97ce,
    _0x2e6f22,
    _0x2d9d21,
    _0x45f2d9,
    _0x48b614;
  _0x2c8c84 = _0x150eb1(_0x2c8c84);
  var _0x3fe626 = _0x2c8c84.length,
    _0x3ceb4f = new Array();
  for (_0x3d8a52 = 0; _0x3d8a52 < _0x3fe626 - 3; _0x3d8a52 += 4) {
    _0x20844e = _0x2c8c84.charCodeAt(_0x3d8a52) << 24 | _0x2c8c84.charCodeAt(_0x3d8a52 + 1 < 10 ? "0" + (_0x3d8a52 + 1) : _0x3d8a52 + 1) << 16 | _0x2c8c84.charCodeAt(_0x3d8a52 + 2) << 8 | _0x2c8c84.charCodeAt(_0x3d8a52 + 3);
    _0x3ceb4f.push(_0x20844e);
  }
  switch (_0x3fe626 % 4) {
    case 0:
      _0x3d8a52 = 2147483648;
      break;
    case 1:
      _0x3d8a52 = _0x2c8c84.charCodeAt(_0x3fe626 - 1) << 24 | 8388608;
      break;
    case 2:
      _0x3d8a52 = _0x2c8c84.charCodeAt(_0x3fe626 - 2) << 24 | _0x2c8c84.charCodeAt(_0x3fe626 - 1) << 16 | 32768;
      break;
    case 3:
      _0x3d8a52 = _0x2c8c84.charCodeAt(_0x3fe626 - 3) << 24 | _0x2c8c84.charCodeAt(_0x3fe626 - 2) << 16 | _0x2c8c84.charCodeAt(_0x3fe626 - 1) << 8 | 128;
      break;
  }
  _0x3ceb4f.push(_0x3d8a52);
  while (_0x3ceb4f.length % 16 != 14) _0x3ceb4f.push(0);
  _0x3ceb4f.push(_0x3fe626 >>> 29);
  _0x3ceb4f.push(_0x3fe626 << 3 & 4294967295);
  for (_0x239737 = 0; _0x239737 < _0x3ceb4f.length; _0x239737 += 16) {
    {
      for (_0x3d8a52 = 0; _0x3d8a52 < 16; _0x3d8a52++) _0x52d389[_0x3d8a52] = _0x3ceb4f[_0x239737 + _0x3d8a52];
      for (_0x3d8a52 = 16; _0x3d8a52 <= 79; _0x3d8a52++) _0x52d389[_0x3d8a52] = _0x2c54cd(_0x52d389[_0x3d8a52 - 3] ^ _0x52d389[_0x3d8a52 - 8] ^ _0x52d389[_0x3d8a52 - 14] ^ _0x52d389[_0x3d8a52 - 16], 1);
      _0x55cc60 = _0x2645de;
      _0x2b97ce = _0x653d74;
      _0x2e6f22 = _0x259f47;
      _0x2d9d21 = _0x13aab5;
      _0x45f2d9 = _0x5ef954;
      for (_0x3d8a52 = 0; _0x3d8a52 <= 19; _0x3d8a52++) {
        {
          _0x48b614 = _0x2c54cd(_0x55cc60, 5) + (_0x2b97ce & _0x2e6f22 | ~_0x2b97ce & _0x2d9d21) + _0x45f2d9 + _0x52d389[_0x3d8a52] + 1518500249 & 4294967295;
          _0x45f2d9 = _0x2d9d21;
          _0x2d9d21 = _0x2e6f22;
          _0x2e6f22 = _0x2c54cd(_0x2b97ce, 30);
          _0x2b97ce = _0x55cc60;
          _0x55cc60 = _0x48b614;
        }
      }
      for (_0x3d8a52 = 20; _0x3d8a52 <= 39; _0x3d8a52++) {
        {
          _0x48b614 = _0x2c54cd(_0x55cc60, 5) + (_0x2b97ce ^ _0x2e6f22 ^ _0x2d9d21) + _0x45f2d9 + _0x52d389[_0x3d8a52] + 1859775393 & 4294967295;
          _0x45f2d9 = _0x2d9d21;
          _0x2d9d21 = _0x2e6f22;
          _0x2e6f22 = _0x2c54cd(_0x2b97ce, 30);
          _0x2b97ce = _0x55cc60;
          _0x55cc60 = _0x48b614;
        }
      }
      for (_0x3d8a52 = 40; _0x3d8a52 <= 59; _0x3d8a52++) {
        _0x48b614 = _0x2c54cd(_0x55cc60, 5) + (_0x2b97ce & _0x2e6f22 | _0x2b97ce & _0x2d9d21 | _0x2e6f22 & _0x2d9d21) + _0x45f2d9 + _0x52d389[_0x3d8a52] + 2400959708 & 4294967295;
        _0x45f2d9 = _0x2d9d21;
        _0x2d9d21 = _0x2e6f22;
        _0x2e6f22 = _0x2c54cd(_0x2b97ce, 30);
        _0x2b97ce = _0x55cc60;
        _0x55cc60 = _0x48b614;
      }
      for (_0x3d8a52 = 60; _0x3d8a52 <= 79; _0x3d8a52++) {
        _0x48b614 = _0x2c54cd(_0x55cc60, 5) + (_0x2b97ce ^ _0x2e6f22 ^ _0x2d9d21) + _0x45f2d9 + _0x52d389[_0x3d8a52] + 3395469782 & 4294967295;
        _0x45f2d9 = _0x2d9d21;
        _0x2d9d21 = _0x2e6f22;
        _0x2e6f22 = _0x2c54cd(_0x2b97ce, 30);
        _0x2b97ce = _0x55cc60;
        _0x55cc60 = _0x48b614;
      }
      _0x2645de = _0x2645de + _0x55cc60 & 4294967295;
      _0x653d74 = _0x653d74 + _0x2b97ce & 4294967295;
      _0x259f47 = _0x259f47 + _0x2e6f22 & 4294967295;
      _0x13aab5 = _0x13aab5 + _0x2d9d21 & 4294967295;
      _0x5ef954 = _0x5ef954 + _0x45f2d9 & 4294967295;
    }
  }
  var _0x48b614 = _0x13c68f(_0x2645de) + _0x13c68f(_0x653d74) + _0x13c68f(_0x259f47) + _0x13c68f(_0x13aab5) + _0x13c68f(_0x5ef954);
  return _0x48b614.toLowerCase();
}
function Base64() {
  var _0x1fdd77 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  this.encode = function (_0x1fc697) {
    var _0x4dbce9 = "";
    var _0x461b6e, _0x1f0321, _0x42bb7f, _0x243c0d, _0x5b8b6b, _0x2a24d7, _0x5ae93d;
    var _0x5b17b1 = 0;
    _0x1fc697 = utf8Encode(_0x1fc697);
    while (_0x5b17b1 < _0x1fc697.length) {
      _0x461b6e = _0x1fc697.charCodeAt(_0x5b17b1++);
      _0x1f0321 = _0x1fc697.charCodeAt(_0x5b17b1++);
      _0x42bb7f = _0x1fc697.charCodeAt(_0x5b17b1++);
      _0x243c0d = _0x461b6e >> 2;
      _0x5b8b6b = (_0x461b6e & 3) << 4 | _0x1f0321 >> 4;
      _0x2a24d7 = (_0x1f0321 & 15) << 2 | _0x42bb7f >> 6;
      _0x5ae93d = _0x42bb7f & 63;
      if (isNaN(_0x1f0321)) _0x2a24d7 = _0x5ae93d = 64;else isNaN(_0x42bb7f) && (_0x5ae93d = 64);
      _0x4dbce9 = _0x4dbce9 + _0x1fdd77.charAt(_0x243c0d) + _0x1fdd77.charAt(_0x5b8b6b) + _0x1fdd77.charAt(_0x2a24d7) + _0x1fdd77.charAt(_0x5ae93d);
    }
    return _0x4dbce9;
  };
  this.decode = function (_0x24f041) {
    {
      var _0x17658d = "",
        _0x48ed6d,
        _0x2c741c,
        _0x1f4883,
        _0x2ba496,
        _0x1b4d4e,
        _0x17f1ff,
        _0xbd422d,
        _0x454ce4 = 0;
      _0x24f041 = _0x24f041.replace(/[^A-Za-z0-9\+\/\=]/g, "");
      while (_0x454ce4 < _0x24f041.length) {
        _0x2ba496 = _0x1fdd77.indexOf(_0x24f041.charAt(_0x454ce4++));
        _0x1b4d4e = _0x1fdd77.indexOf(_0x24f041.charAt(_0x454ce4++));
        _0x17f1ff = _0x1fdd77.indexOf(_0x24f041.charAt(_0x454ce4++));
        _0xbd422d = _0x1fdd77.indexOf(_0x24f041.charAt(_0x454ce4++));
        _0x48ed6d = _0x2ba496 << 2 | _0x1b4d4e >> 4;
        _0x2c741c = (_0x1b4d4e & 15) << 4 | _0x17f1ff >> 2;
        _0x1f4883 = (_0x17f1ff & 3) << 6 | _0xbd422d;
        _0x17658d = _0x17658d + String.fromCharCode(_0x48ed6d);
        _0x17f1ff !== 64 && (_0x17658d = _0x17658d + String.fromCharCode(_0x2c741c));
        _0xbd422d !== 64 && (_0x17658d = _0x17658d + String.fromCharCode(_0x1f4883));
      }
      _0x17658d = utf8Decode(_0x17658d);
      return _0x17658d;
    }
  };
  utf8Encode = function (_0x3b787d) {
    {
      _0x3b787d = _0x3b787d.replace(/\r\n/g, "\n");
      var _0x3791cd = "";
      for (var _0x373dd7 = 0; _0x373dd7 < _0x3b787d.length; _0x373dd7++) {
        var _0x49aa71 = _0x3b787d.charCodeAt(_0x373dd7);
        if (_0x49aa71 < 128) _0x3791cd += String.fromCharCode(_0x49aa71);else _0x49aa71 > 127 && _0x49aa71 < 2048 ? (_0x3791cd += String.fromCharCode(_0x49aa71 >> 6 | 192), _0x3791cd += String.fromCharCode(_0x49aa71 & 63 | 128)) : (_0x3791cd += String.fromCharCode(_0x49aa71 >> 12 | 224), _0x3791cd += String.fromCharCode(_0x49aa71 >> 6 & 63 | 128), _0x3791cd += String.fromCharCode(_0x49aa71 & 63 | 128));
      }
      return _0x3791cd;
    }
  };
  utf8Decode = function (_0x219b15) {
    var _0x4e53d4 = "",
      _0x227cd0 = 0,
      _0x14868b = 0,
      _0x2ce027 = 0,
      _0x1b9d24 = 0;
    while (_0x227cd0 < _0x219b15.length) {
      {
        _0x14868b = _0x219b15.charCodeAt(_0x227cd0);
        if (_0x14868b < 128) {
          _0x4e53d4 += String.fromCharCode(_0x14868b);
          _0x227cd0++;
        } else _0x14868b > 191 && _0x14868b < 224 ? (_0x2ce027 = _0x219b15.charCodeAt(_0x227cd0 + 1 < 10 ? "0" + (_0x227cd0 + 1) : _0x227cd0 + 1), _0x4e53d4 += String.fromCharCode((_0x14868b & 31) << 6 | _0x2ce027 & 63), _0x227cd0 += 2) : (_0x2ce027 = _0x219b15.charCodeAt(_0x227cd0 + 1 < 10 ? "0" + (_0x227cd0 + 1) : _0x227cd0 + 1), _0x1b9d24 = _0x219b15.charCodeAt(_0x227cd0 + 2), _0x4e53d4 += String.fromCharCode((_0x14868b & 15) << 12 | (_0x2ce027 & 63) << 6 | _0x1b9d24 & 63), _0x227cd0 += 3);
      }
    }
    return _0x4e53d4;
  };
}
function Env(_0x582cca, _0x31cce4) {
  class _0xf1ff9a {
    constructor(_0x3ade8f) {
      this.env = _0x3ade8f;
    }
    ["send"](_0x367878, _0x20542d = "GET") {
      _0x367878 = typeof _0x367878 === "string" ? {
        "url": _0x367878
      } : _0x367878;
      let _0x2c0b2f = this.get;
      if (_0x20542d === "POST") {
        _0x2c0b2f = this.post;
      }
      return new Promise((_0x42101c, _0xb0ae3d) => {
        _0x2c0b2f.call(this, _0x367878, (_0x229cd5, _0x403214, _0x5168d3) => {
          if (_0x229cd5) _0xb0ae3d(_0x229cd5);else _0x42101c(_0x403214);
        });
      });
    }
    ["get"](_0x5e8290) {
      return this.send.call(this.env, _0x5e8290);
    }
    ["post"](_0x2379ed) {
      return this.send.call(this.env, _0x2379ed, "POST");
    }
  }
  return new class {
    constructor(_0x477f03, _0x45c04e) {
      {
        this.name = _0x477f03;
        this.http = new _0xf1ff9a(this);
        this.data = null;
        this.dataFile = "box.dat";
        this.logs = [];
        this.isMute = false;
        this.isNeedRewrite = false;
        this.logSeparator = "\n";
        this.startTime = new Date().getTime();
        Object.assign(this, _0x45c04e);
        const _0x3b9b54 = "\n       ***********          *****      ***       **** ******  ***********  \n       *************       ******      ***      ****  ****    ************ \n      ****      ****     ***  ***      ***     ***    ***    ***      **** \n      ***       ****    ***  ****      ***    ***    ****   ****       *** \n     ****       ***    ***    ***      ***   ***     ***    ***       **** \n     ***       ***    ****   ****      ***  ***     ****   ****       ***  \n    ***      ****    ************      *** ***      ***    ***      ****   \n   ****   ******   ****      ****      ******      ****   ****   ******    \n   **********     ****       ****      *****     ******  ***********";
        if (this.isNode()) {
          this.log(_0x3b9b54);
        }
        this.log("", "🔔 " + this.name + ", 开始!");
      }
    }
    ["isNode"]() {
      return "undefined" !== typeof module && !!module.exports;
    }
    ["isQuanX"]() {
      return "undefined" !== typeof $task;
    }
    ["isSurge"]() {
      return "undefined" !== typeof $httpClient && "undefined" === typeof $loon;
    }
    ["isLoon"]() {
      return "undefined" !== typeof $loon;
    }
    ["isShadowrocket"]() {
      return "undefined" !== typeof $rocket;
    }
    ["toObj"](_0x4a67b7, _0x3fa115 = null) {
      try {
        return JSON.parse(_0x4a67b7);
      } catch {
        return _0x3fa115;
      }
    }
    ["toStr"](_0x38e376, _0x1f7753 = null) {
      try {
        return JSON.stringify(_0x38e376);
      } catch {
        return _0x1f7753;
      }
    }
    ["getjson"](_0x31ea82, _0x2c38c3) {
      let _0x2724d4 = _0x2c38c3;
      const _0x1aae40 = this.getdata(_0x31ea82);
      if (_0x1aae40) {
        try {
          _0x2724d4 = JSON.parse(this.getdata(_0x31ea82));
        } catch {}
      }
      return _0x2724d4;
    }
    ["setjson"](_0x59e561, _0x2cabdc) {
      try {
        return this.setdata(JSON.stringify(_0x59e561), _0x2cabdc);
      } catch {
        return false;
      }
    }
    ["getScript"](_0x28c91d) {
      return new Promise(_0x228f64 => {
        this.get({
          "url": _0x28c91d
        }, (_0x38357c, _0x1a633b, _0x5b91c0) => _0x228f64(_0x5b91c0));
      });
    }
    ["runScript"](_0x53f14a, _0x17a192) {
      return new Promise(_0x294007 => {
        let _0x5c0db7 = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        _0x5c0db7 = _0x5c0db7 ? _0x5c0db7.replace(/\n/g, "").trim() : _0x5c0db7;
        let _0x4a9a9f = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        _0x4a9a9f = _0x4a9a9f ? _0x4a9a9f * 1 : 20;
        _0x4a9a9f = _0x17a192 && _0x17a192.timeout ? _0x17a192.timeout : _0x4a9a9f;
        const [_0x3136f0, _0x4016fd] = _0x5c0db7.split("@"),
          _0x12ac8a = {
            "url": "http: //" + _0x4016fd + "/v1/scripting/evaluate",
            "body": {
              "script_text": _0x53f14a,
              "mock_type": "cron",
              "timeout": _0x4a9a9f
            },
            "headers": {
              "X-Key": _0x3136f0,
              "Accept": "*/*"
            }
          };
        this.post(_0x12ac8a, (_0x585f77, _0x4441df, _0x399311) => _0x294007(_0x399311));
      }).catch(_0x3725ef => this.logErr(_0x3725ef));
    }
    ["loaddata"]() {
      {
        if (this.isNode()) {
          {
            this.fs = this.fs ? this.fs : require("fs");
            this.path = this.path ? this.path : require("path");
            const _0xf163d2 = this.path.resolve(this.dataFile),
              _0x4b1fe1 = this.path.resolve(process.cwd(), this.dataFile),
              _0x505bdb = this.fs.existsSync(_0xf163d2),
              _0x2472dc = !_0x505bdb && this.fs.existsSync(_0x4b1fe1);
            if (_0x505bdb || _0x2472dc) {
              const _0x5bb94a = _0x505bdb ? _0xf163d2 : _0x4b1fe1;
              try {
                return JSON.parse(this.fs.readFileSync(_0x5bb94a));
              } catch (_0x14fe97) {
                return {};
              }
            } else return {};
          }
        } else return {};
      }
    }
    ["writedata"]() {
      if (this.isNode()) {
        {
          this.fs = this.fs ? this.fs : require("fs");
          this.path = this.path ? this.path : require("path");
          const _0x53d4ea = this.path.resolve(this.dataFile),
            _0x451d66 = this.path.resolve(process.cwd(), this.dataFile),
            _0x57e929 = this.fs.existsSync(_0x53d4ea),
            _0x180cb8 = !_0x57e929 && this.fs.existsSync(_0x451d66),
            _0x291b6c = JSON.stringify(this.data);
          if (_0x57e929) {
            this.fs.writeFileSync(_0x53d4ea, _0x291b6c);
          } else {
            if (_0x180cb8) {
              this.fs.writeFileSync(_0x451d66, _0x291b6c);
            } else this.fs.writeFileSync(_0x53d4ea, _0x291b6c);
          }
        }
      }
    }
    ["lodash_get"](_0x5e5eb9, _0x28cc5c, _0x7c6f29 = undefined) {
      const _0x63c3b2 = _0x28cc5c.replace(/[(d+)]/g, ".$1").split(".");
      let _0x26cb83 = _0x5e5eb9;
      for (const _0x154e45 of _0x63c3b2) {
        {
          _0x26cb83 = Object(_0x26cb83)[_0x154e45];
          if (_0x26cb83 === undefined) return _0x7c6f29;
        }
      }
      return _0x26cb83;
    }
    ["lodash_set"](_0xcea094, _0x57a6c9, _0xdba9c8) {
      if (Object(_0xcea094) !== _0xcea094) return _0xcea094;
      if (!Array.isArray(_0x57a6c9)) _0x57a6c9 = _0x57a6c9.toString().match(/[^.[]]+/g) || [];
      _0x57a6c9.slice(0, -1).reduce((_0x22edb2, _0x1ffd91, _0x4b4a23) => Object(_0x22edb2[_0x1ffd91]) === _0x22edb2[_0x1ffd91] ? _0x22edb2[_0x1ffd91] : _0x22edb2[_0x1ffd91] = Math.abs(_0x57a6c9[_0x4b4a23 + 1 < 10 ? "0" + (_0x4b4a23 + 1) : _0x4b4a23 + 1]) >> 0 === +_0x57a6c9[_0x4b4a23 + 1 < 10 ? "0" + (_0x4b4a23 + 1) : _0x4b4a23 + 1] ? [] : {}, _0xcea094)[_0x57a6c9[_0x57a6c9.length - 1]] = _0xdba9c8;
      return _0xcea094;
    }
    ["getdata"](_0x48d66a) {
      {
        let _0x425dac = this.getval(_0x48d66a);
        if (/^@/.test(_0x48d66a)) {
          const [, _0xcaa921, _0x2e33a9] = /^@(.*?).(.*?)$/.exec(_0x48d66a),
            _0x47f19a = _0xcaa921 ? this.getval(_0xcaa921) : "";
          if (_0x47f19a) try {
            {
              const _0x282ac0 = JSON.parse(_0x47f19a);
              _0x425dac = _0x282ac0 ? this.lodash_get(_0x282ac0, _0x2e33a9, "") : _0x425dac;
            }
          } catch (_0x68f9ca) {
            _0x425dac = "";
          }
        }
        return _0x425dac;
      }
    }
    ["setdata"](_0x1ee2cb, _0x417627) {
      {
        let _0x4b379d = false;
        if (/^@/.test(_0x417627)) {
          const [, _0x361375, _0x24ea29] = /^@(.*?).(.*?)$/.exec(_0x417627),
            _0x39ef7e = this.getval(_0x361375),
            _0x294226 = _0x361375 ? _0x39ef7e === "null" ? null : _0x39ef7e || "{}" : "{}";
          try {
            {
              const _0x2d70e7 = JSON.parse(_0x294226);
              this.lodash_set(_0x2d70e7, _0x24ea29, _0x1ee2cb);
              _0x4b379d = this.setval(JSON.stringify(_0x2d70e7), _0x361375);
            }
          } catch (_0x41d0b8) {
            {
              const _0x3807ac = {};
              this.lodash_set(_0x3807ac, _0x24ea29, _0x1ee2cb);
              _0x4b379d = this.setval(JSON.stringify(_0x3807ac), _0x361375);
            }
          }
        } else {
          _0x4b379d = this.setval(_0x1ee2cb, _0x417627);
        }
        return _0x4b379d;
      }
    }
    ["getval"](_0x3fe176) {
      {
        if (this.isSurge() || this.isLoon()) {
          return $persistentStore.read(_0x3fe176);
        } else {
          if (this.isQuanX()) {
            return $prefs.valueForKey(_0x3fe176);
          } else {
            if (this.isNode()) return this.data = this.loaddata(), this.data[_0x3fe176];else {
              return this.data && this.data[_0x3fe176] || null;
            }
          }
        }
      }
    }
    ["setval"](_0x1bd9ac, _0x199c39) {
      if (this.isSurge() || this.isLoon()) {
        return $persistentStore.write(_0x1bd9ac, _0x199c39);
      } else {
        if (this.isQuanX()) return $prefs.setValueForKey(_0x1bd9ac, _0x199c39);else return this.isNode() ? (this.data = this.loaddata(), this.data[_0x199c39] = _0x1bd9ac, this.writedata(), true) : this.data && this.data[_0x199c39] || null;
      }
    }
    ["initGotEnv"](_0x5ba037) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      _0x5ba037 && (_0x5ba037.headers = _0x5ba037.headers ? _0x5ba037.headers : {}, undefined === _0x5ba037.headers.Cookie && undefined === _0x5ba037.cookieJar && (_0x5ba037.cookieJar = this.ckjar));
    }
    ["get"](_0x100523, _0x1bdf52 = () => {}) {
      _0x100523.headers && (delete _0x100523.headers["Content-Type"], delete _0x100523.headers["Content-Length"]);
      if (this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (_0x100523.headers = _0x100523.headers || {}, Object.assign(_0x100523.headers, {
        "X-Surge-Skip-Scripting": false
      })), $httpClient.get(_0x100523, (_0x366d6d, _0x377f0c, _0x3e5e83) => {
        !_0x366d6d && _0x377f0c && (_0x377f0c.body = _0x3e5e83, _0x377f0c.statusCode = _0x377f0c.status);
        _0x1bdf52(_0x366d6d, _0x377f0c, _0x3e5e83);
      });else {
        if (this.isQuanX()) {
          if (this.isNeedRewrite) {
            _0x100523.opts = _0x100523.opts || {};
            Object.assign(_0x100523.opts, {
              "hints": false
            });
          }
          $task.fetch(_0x100523).then(_0x50e808 => {
            const {
              statusCode: _0x4c1237,
              statusCode: _0x1ab8b8,
              headers: _0x11730b,
              body: _0x1406a1
            } = _0x50e808;
            _0x1bdf52(null, {
              "status": _0x4c1237,
              "statusCode": _0x1ab8b8,
              "headers": _0x11730b,
              "body": _0x1406a1
            }, _0x1406a1);
          }, _0x375f93 => _0x1bdf52(_0x375f93));
        } else {
          if (this.isNode()) {
            this.initGotEnv(_0x100523);
            this.got(_0x100523).on("redirect", (_0x2cf06d, _0x5e11e0) => {
              this.ckjar.setCookieSync(_0x2cf06d.headers["set-cookie"].map(Cookie.parse).toString());
            }).then(_0x4c5f45 => {
              const {
                statusCode: _0x390ad4,
                statusCode: _0x12bb67,
                headers: _0x70af36,
                body: _0x245bd0
              } = _0x4c5f45;
              _0x1bdf52(null, {
                "status": _0x390ad4,
                "statusCode": _0x12bb67,
                "headers": _0x70af36,
                "body": _0x245bd0
              }, _0x245bd0);
            }, _0x1d5dc8 => {
              const {
                message: _0x38b860,
                response: _0x162dbc
              } = _0x1d5dc8;
              _0x1bdf52(_0x38b860, _0x162dbc, _0x162dbc && _0x162dbc.body);
            });
          }
        }
      }
    }
    ["post"](_0x47d340, _0x551c2e = () => {}) {
      {
        const _0x4deb0a = _0x47d340.method ? _0x47d340.method.toLocaleLowerCase() : "post";
        _0x47d340.body && _0x47d340.headers && !_0x47d340.headers["Content-Type"] && (_0x47d340.headers["Content-Type"] = "application/x-www-form-urlencoded");
        if (_0x47d340.headers) delete _0x47d340.headers["Content-Length"];
        if (this.isSurge() || this.isLoon()) {
          {
            if (this.isSurge() && this.isNeedRewrite) {
              _0x47d340.headers = _0x47d340.headers || {};
              Object.assign(_0x47d340.headers, {
                "X-Surge-Skip-Scripting": false
              });
            }
            $httpClient[_0x4deb0a](_0x47d340, (_0x58bdf7, _0x40cbe8, _0x3602b4) => {
              !_0x58bdf7 && _0x40cbe8 && (_0x40cbe8.body = _0x3602b4, _0x40cbe8.statusCode = _0x40cbe8.status);
              _0x551c2e(_0x58bdf7, _0x40cbe8, _0x3602b4);
            });
          }
        } else {
          if (this.isQuanX()) _0x47d340.method = _0x4deb0a, this.isNeedRewrite && (_0x47d340.opts = _0x47d340.opts || {}, Object.assign(_0x47d340.opts, {
            "hints": false
          })), $task.fetch(_0x47d340).then(_0x2bb265 => {
            {
              const {
                statusCode: _0x380636,
                statusCode: _0x3de8cb,
                headers: _0x33f551,
                body: _0x12742c
              } = _0x2bb265;
              _0x551c2e(null, {
                "status": _0x380636,
                "statusCode": _0x3de8cb,
                "headers": _0x33f551,
                "body": _0x12742c
              }, _0x12742c);
            }
          }, _0x464ca2 => _0x551c2e(_0x464ca2));else {
            if (this.isNode()) {
              this.initGotEnv(_0x47d340);
              const {
                url: _0x5a0c10,
                ..._0x1bdbf9
              } = _0x47d340;
              this.got[_0x4deb0a](_0x5a0c10, _0x1bdbf9).then(_0x53ea6e => {
                const {
                  statusCode: _0x508217,
                  statusCode: _0x36469e,
                  headers: _0x1dba3b,
                  body: _0x47438e
                } = _0x53ea6e;
                _0x551c2e(null, {
                  "status": _0x508217,
                  "statusCode": _0x36469e,
                  "headers": _0x1dba3b,
                  "body": _0x47438e
                }, _0x47438e);
              }, _0x50c0bc => {
                const {
                  message: _0x119655,
                  response: _0x44f1d1
                } = _0x50c0bc;
                _0x551c2e(_0x119655, _0x44f1d1, _0x44f1d1 && _0x44f1d1.body);
              });
            }
          }
        }
      }
    }
    ["put"](_0x22e11b, _0x3d7d68 = () => {}) {
      const _0x4dc33a = _0x22e11b.method ? _0x22e11b.method.toLocaleLowerCase() : "put";
      if (_0x22e11b.body && _0x22e11b.headers && !_0x22e11b.headers["Content-Type"]) {
        _0x22e11b.headers["Content-Type"] = "application/x-www-form-urlencoded";
      }
      if (_0x22e11b.headers) delete _0x22e11b.headers["Content-Length"];
      if (this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (_0x22e11b.headers = _0x22e11b.headers || {}, Object.assign(_0x22e11b.headers, {
        "X-Surge-Skip-Scripting": false
      })), $httpClient[_0x4dc33a](_0x22e11b, (_0x34162b, _0x1b7d32, _0x3825dd) => {
        !_0x34162b && _0x1b7d32 && (_0x1b7d32.body = _0x3825dd, _0x1b7d32.statusCode = _0x1b7d32.status);
        _0x3d7d68(_0x34162b, _0x1b7d32, _0x3825dd);
      });else {
        if (this.isQuanX()) _0x22e11b.method = _0x4dc33a, this.isNeedRewrite && (_0x22e11b.opts = _0x22e11b.opts || {}, Object.assign(_0x22e11b.opts, {
          "hints": false
        })), $task.fetch(_0x22e11b).then(_0xcd7537 => {
          const {
            statusCode: _0x288b60,
            statusCode: _0x147e21,
            headers: _0x5171a3,
            body: _0x1c20b1
          } = _0xcd7537;
          _0x3d7d68(null, {
            "status": _0x288b60,
            "statusCode": _0x147e21,
            "headers": _0x5171a3,
            "body": _0x1c20b1
          }, _0x1c20b1);
        }, _0x5a76c5 => _0x3d7d68(_0x5a76c5));else {
          if (this.isNode()) {
            this.initGotEnv(_0x22e11b);
            const {
              url: _0x332ef5,
              ..._0x516998
            } = _0x22e11b;
            this.got[_0x4dc33a](_0x332ef5, _0x516998).then(_0x546df0 => {
              {
                const {
                  statusCode: _0x5bfecf,
                  statusCode: _0x537c92,
                  headers: _0x2405aa,
                  body: _0x1a5bb3
                } = _0x546df0;
                _0x3d7d68(null, {
                  "status": _0x5bfecf,
                  "statusCode": _0x537c92,
                  "headers": _0x2405aa,
                  "body": _0x1a5bb3
                }, _0x1a5bb3);
              }
            }, _0x807f36 => {
              {
                const {
                  message: _0x615ca9,
                  response: _0x13eaf8
                } = _0x807f36;
                _0x3d7d68(_0x615ca9, _0x13eaf8, _0x13eaf8 && _0x13eaf8.body);
              }
            });
          }
        }
      }
    }
    ["time"](_0xedfc03, _0x47b161 = null) {
      {
        const _0x3648f6 = _0x47b161 ? new Date(_0x47b161) : new Date();
        let _0x54b475 = {
          "M+": _0x3648f6.getMonth() + 1,
          "d+": _0x3648f6.getDate(),
          "H+": _0x3648f6.getHours(),
          "m+": _0x3648f6.getMinutes(),
          "s+": _0x3648f6.getSeconds(),
          "q+": Math.floor((_0x3648f6.getMonth() + 3) / 3),
          "S": _0x3648f6.getMilliseconds()
        };
        if (/(y+)/.test(_0xedfc03)) _0xedfc03 = _0xedfc03.replace(RegExp.$1, (_0x3648f6.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (let _0x16e71b in _0x54b475) if (new RegExp("(" + _0x16e71b + ")").test(_0xedfc03)) _0xedfc03 = _0xedfc03.replace(RegExp.$1, RegExp.$1.length == 1 ? _0x54b475[_0x16e71b] : ("00" + _0x54b475[_0x16e71b]).substr(("" + _0x54b475[_0x16e71b]).length));
        return _0xedfc03;
      }
    }
    ["msg"](_0x39e66d = _0x582cca, _0x2baee9 = "", _0x4b8f5c = "", _0x3a7b27) {
      const _0x2a89e0 = _0x1262bd => {
        {
          if (!_0x1262bd) return _0x1262bd;
          if (typeof _0x1262bd === "string") {
            {
              if (this.isLoon()) return _0x1262bd;else {
                if (this.isQuanX()) return {
                  "open-url": _0x1262bd
                };else {
                  if (this.isSurge()) return {
                    "url": _0x1262bd
                  };else return undefined;
                }
              }
            }
          } else {
            if (typeof _0x1262bd === "object") {
              if (this.isLoon()) {
                let _0x1e3362 = _0x1262bd.openUrl || _0x1262bd.url || _0x1262bd["open-url"],
                  _0x482053 = _0x1262bd.mediaUrl || _0x1262bd["media-url"];
                return {
                  "openUrl": _0x1e3362,
                  "mediaUrl": _0x482053
                };
              } else {
                if (this.isQuanX()) {
                  let _0x4e2ba7 = _0x1262bd["open-url"] || _0x1262bd.url || _0x1262bd.openUrl,
                    _0x2bbcee = _0x1262bd["media-url"] || _0x1262bd.mediaUrl;
                  return {
                    "open-url": _0x4e2ba7,
                    "media-url": _0x2bbcee
                  };
                } else {
                  if (this.isSurge()) {
                    let _0x564898 = _0x1262bd.url || _0x1262bd.openUrl || _0x1262bd["open-url"];
                    return {
                      "url": _0x564898
                    };
                  }
                }
              }
            } else return undefined;
          }
        }
      };
      if (!this.isMute) {
        if (this.isSurge() || this.isLoon()) $notification.post(_0x39e66d, _0x2baee9, _0x4b8f5c, _0x2a89e0(_0x3a7b27));else this.isQuanX() && $notify(_0x39e66d, _0x2baee9, _0x4b8f5c, _0x2a89e0(_0x3a7b27));
      }
      if (!this.isMuteLog) {
        let _0x320d12 = ["", "==============📣系统通知📣=============="];
        _0x320d12.push(_0x39e66d);
        _0x2baee9 ? _0x320d12.push(_0x2baee9) : "";
        _0x4b8f5c ? _0x320d12.push(_0x4b8f5c) : "";
        console.log(_0x320d12.join("\n"));
        this.logs = this.logs.concat(_0x320d12);
      }
    }
    ["log"](..._0x18ab96) {
      _0x18ab96.length > 0 && (this.logs = [...this.logs, ..._0x18ab96]);
      console.log(_0x18ab96.join(this.logSeparator));
    }
    ["logErr"](_0x416098, _0x37ed4f) {
      const _0x2b41d6 = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      !_0x2b41d6 ? this.log("", "❗️" + this.name + ", 错误!", _0x416098) : this.log("", "❗️" + this.name + ", 错误!", _0x416098.stack);
    }
    ["wait"](_0x5291d8) {
      return new Promise(_0x5df9cb => setTimeout(_0x5df9cb, _0x5291d8));
    }
    ["done"](_0x5ecf78 = {}) {
      {
        const _0x46be78 = new Date().getTime(),
          _0xc57826 = (_0x46be78 - this.startTime) / 1000;
        this.log("", "🔔" + this.name + ", 结束!🕛" + _0xc57826 + "秒");
        this.log();
        (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(_0x5ecf78);
      }
    }
  }(_0x582cca, _0x31cce4);
}