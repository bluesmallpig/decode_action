//Wed Apr 15 2026 00:38:36 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const $ = new Env("大象新闻");
const version = "V1.0.0";
const appName = "dxxwapp";
let dxxwapp = $.getjson(appName, []);
const fs = $.isNode() ? require("fs") : "";
const WebSocket = $.isNode() ? require("ws") : "";
const NodeRSA = $.isNode() ? require("node-rsa") : "";
const file = "david_cookies.js";
$.isNode() && !fs.existsSync(file) && ($.log("🔔 外挂ck文件不存在，开始创建模版>>>"), fs.writeFileSync("./david_cookies.js", "//独立CK文件，主要用来处理多账号大数据量CK,注意JRTTAPP外边不用加引号，依葫芦画瓢。\n//今日头条(三个账号)\nlet JRTTAPP = [{},{},{}]\n//番茄小说(一个账号)\nlet FQXSAPP = [{}]\n//抖音极速版(两个账号)\nlet DYJSBAPP = [{},{}]\n    \nlet APPS = {\n    JRTT: JRTTAPP,\n    FQXS: FQXSAPP,\n    DYJSB: DYJSBAPP\n}\n\nmodule.exports = APPS", _0x123050 => {}));
const http = $.isNode() ? require("http") : "";
const notify = $.isNode() ? require("./sendNotify") : "";
const COOKIES = $.isNode() ? require("./david_cookies") : "";
let userId = $.getdata("tguserid") || 1;
let activeCode = $.getdata("dxxwactivecode") || 0;
let dxxwuserck = $.getval("dxxwuserck") || 1;
let apiHost = $.getval("apiHost") || "http://106.15.104.124:8080";
$.getval("apiHosts") && (apiHost = $.getval("apiHosts"));
let flushCash = $.getval("cleanCache") || false;
const debug = 0;
let tz = $.getval("tz") || "1";
let ts = Math.round(new Date().getTime() / 1000).toString();
window = {};
let helpUtils = undefined;
let CryptoJS = undefined;
let rsaEncrypt = undefined;
let saveFile = false;
let dxxw_ck_file = "dxxw_cookies.json";
var hour = "";
var minute = "";
let sendlogs = "";
let dxxwlogs = [];
let additional_Params = {};
let wss = [];
let channels_status = [];
let reconectCounts = [];
let requestObjects = [];
let requestSigns = [];
let answerTexts = [];
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
$.isNode() ? (process.env.DXXWAPP ? dxxwapp = JSON.parse(process.env.DXXWAPP) : dxxwapp = COOKIES.DXXW, userId = process.env.TGUSERID, activeCode = process.env.DXXWACTIVECODE, process.env.APIHOST && (apiHost = process.env.APIHOST), process.env.APIHOSTS && (apiHost = process.env.APIHOSTS), process.env.CLEANCACHE && (flushCash = JSON.parse(process.env.CLEANCACHE)), hour = new Date(new Date().getTime()).getHours(), minute = new Date(new Date().getTime()).getMinutes(), $.log("🔔 当前环境: Node, 当前时间：" + hour + "点")) : (hour = new Date().getHours(), minute = new Date().getMinutes(), $.log("🔔 当前环境: 手机代理, 当前时间：" + hour + "点"));
!(async () => {
  if (typeof $request !== "undefined") {
    await getCk();
  } else {
    if (!dxxwapp) {
      $.log("📢 很抱歉，😭 没有找到账号信息！你确定配置账号信息了吗？");
      return;
    }
    $.log("📢 开始检测服务器接口状态>>>");
    let _0x4e4b6e = false;
    const _0x3e5a5e = apiHost.split("&");
    const _0x180846 = _0x3e5a5e.length;
    for (let _0x245ca9 = 0; _0x245ca9 < _0x180846; _0x245ca9++) {
      if ($.isNode()) {
        _0x4e4b6e = await checkAddress("" + _0x3e5a5e[_0x245ca9], 2500);
      } else {
        $.isSurge() || $.isLoon() ? _0x4e4b6e = await httpClientRequest("" + _0x3e5a5e[_0x245ca9], 2500) : _0x4e4b6e = await fetchRequest("" + _0x3e5a5e[_0x245ca9], 2500);
      }
      if (_0x4e4b6e == true) {
        apiHost = _0x3e5a5e[_0x245ca9];
        $.log("📢 接口" + (_0x245ca9 + 1) + "[" + _0x3e5a5e[_0x245ca9] + "]服务器接口正常! 🎉");
        break;
      }
      if (_0x245ca9 == _0x180846 - 1 && _0x4e4b6e == false) {
        $.log("📢 抱歉，所有接口都不可用, 请前往交流群置顶获取最新的接口地址! 😭");
        $.msg($.name, "所有接口都不可用, 请尽快前往交流群置顶获取最新的接口地址!");
        return;
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
      let _0x326c42 = new Date(vipDate).getTime();
      let _0x1a8f28 = new Date().getTime();
      if (_0x1a8f28 > _0x326c42) {
        $.log("❗️ 抱歉，VIP到期了，请及时付费。");
        return;
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
      $.log("❗️ 抱歉, 用户不合法，请先私聊机器人加入交流区。 https://t.me/DavidLoveBot");
      return;
    }
    if (userAuth != true) {
      $.log("❗️ 抱歉，你没有权限运行此脚本, 请关注电报机器人: https://t.me/DavidLoveBot");
      return;
    }
    isCharge == true ? $.log("🔔 此脚本采用付费模式。🔒") : $.log("🔔 此脚本采用免费模式。🔓");
    if (vipDate != "") {
      if (isCharge == true) {
        $.log("🔔 尊敬的会员：您好，你是付费用户！🔐");
        let _0x3ed718 = new Date(vipDate).getTime();
        let _0x295f6b = new Date().getTime();
        if (_0x295f6b > _0x3ed718) {
          $.log("❗️ 抱歉，VIP到期了，请及时付费。");
          return;
        }
      }
    } else {
      if (vipAuth != true) {
        $.log("❗️ 抱歉，你不是付费用户, 你没有权限运行此脚本, 需要使用请查看使用说明。");
        return;
      } else {
        $.log("🔔 尊敬的会员：您好，你是付费用户！🔐");
      }
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
      $.log("先抓取账号ck，再运行脚本吧！");
      return;
    }
    if (runedCounts + dxxwapp.length > runTotalCounts) {
      $.log("📢 一共发现了" + dxxwapp.length + "个账号");
      $.log("❗️ 当前用户运行次数剩余" + (runTotalCounts - runedCounts) + "次，还可以运行" + (runTotalCounts - runedCounts) + "个账号，还需要" + (dxxwapp.length - (runTotalCounts - runedCounts)) + "次，可以通过赞赏后增加运行次数！");
      return;
    }
    vipDate != "" && $.log("📢 你的会员有效期到： " + vipDate);
    $.log("📢 一共发现了" + dxxwapp.length + "个账号");
    $.isNode() && (!fs.existsSync(dxxw_ck_file) ? dxxw_cks = {} : dxxw_cks = JSON.parse(fs.readFileSync(dxxw_ck_file, "utf8")));
    let _0x17f37e = [];
    let _0x4d7820 = dxxwapp.length;
    let _0x23fcee = 0;
    $.isNode() && process.env.DXXW_THREAD_COUNT ? _0x23fcee = parseInt(process.env.DXXW_THREAD_COUNT) : _0x23fcee = _0x4d7820;
    let _0x57f5cd = dxxwapp.length;
    if (_0x23fcee >= _0x4d7820) {
      _0x23fcee = _0x4d7820;
      _0x57f5cd = 1;
      $.log("📢 你设置的线程数是" + _0x23fcee + "，账号个数是" + _0x4d7820 + "，" + _0x57f5cd + "次可全部跑完。");
      for (let _0x2603e2 = 0; _0x2603e2 < dxxwapp.length; _0x2603e2++) {
        _0x17f37e.push(runMultiTasks(_0x2603e2));
        dxxwlogs[_0x2603e2] = "";
        $.isNode() ? (channels_status[_0x2603e2] = 0, await init_ws(_0x2603e2)) : channels_status[_0x2603e2] = 1;
      }
      await Promise.allSettled(_0x17f37e).then(_0x1a4f63 => {
        $.isNode() && saveFile && ($.log("[温馨提醒]: 即将本地化token，这样可以有效降低登录次数"), fs.writeFileSync(dxxw_ck_file, JSON.stringify(dxxw_cks, null, 2)));
        $.log("日志整理功能如下：");
        $.log("---------------日志整理开始--------------");
        for (let _0x35a730 = 0; _0x35a730 < dxxwapp.length; _0x35a730++) {
          $.log(dxxwlogs[_0x35a730]);
          sendlogs += dxxwlogs[_0x35a730];
        }
        $.log("---------------日志整理结束--------------");
        sendMsg(sendlogs);
      });
    } else {
      _0x57f5cd = Math.ceil(_0x4d7820 / _0x23fcee);
      $.log("📢 你设置的线程数是" + _0x23fcee + "，账号个数是" + _0x4d7820 + "，计算后分" + _0x57f5cd + "次执行，一次可执行" + _0x23fcee + "个账号，最后一次如果不够" + _0x23fcee + "个账号，剩多少个账号就跑几个账号。");
      for (let _0x4ba3e8 = 0; _0x4ba3e8 < _0x57f5cd; _0x4ba3e8++) {
        for (let _0x494b18 = _0x4ba3e8 * _0x23fcee; _0x494b18 < _0x23fcee * (_0x4ba3e8 + 1) && _0x494b18 < _0x4d7820; _0x494b18++) {
          _0x17f37e.push(runMultiTasks(_0x494b18));
          dxxwlogs[_0x494b18] = "";
          channels_status[_0x494b18] = 0;
          await init_ws(_0x494b18);
        }
        await Promise.allSettled(_0x17f37e).then(_0x231902 => {
          _0x17f37e = [];
          if (_0x4ba3e8 == _0x57f5cd - 1) {
            $.isNode() && saveFile && ($.log("[温馨提醒]: 即将本地化token，这样可以有效降低登录次数"), fs.writeFileSync(dxxw_ck_file, JSON.stringify(dxxw_cks, null, 2)));
            $.log("日志整理功能如下：");
            $.log("---------------日志整理开始--------------");
            for (let _0x129f50 = 0; _0x129f50 < dxxwapp.length; _0x129f50++) {
              $.log(dxxwlogs[_0x129f50]);
              sendlogs += dxxwlogs[_0x129f50];
            }
            $.log("---------------日志整理结束--------------");
            sendMsg(sendlogs);
          }
        });
      }
    }
  }
})().catch(_0x23277a => $.logErr(_0x23277a)).finally(() => $.done());
async function runMultiTasks(_0x185eb9) {
  return new Promise((_0x463428, _0x36f460) => {
    $.log("[账号" + (_0x185eb9 + 1 < 10 ? "0" + (_0x185eb9 + 1) : _0x185eb9 + 1) + "]: 开始执行 working......");
    runSubTask(_0x463428, _0x185eb9);
  });
}
async function init_ws(_0x39ec04) {
  $.isNode() && (reconectCounts[_0x39ec04] > 0 && $.log("[账号" + (_0x39ec04 + 1 < 10 ? "0" + (_0x39ec04 + 1) : _0x39ec04 + 1) + "]: 尝试重新连接服务器>>>>>>"), wss[_0x39ec04] = new WebSocket(apiHost.replace("http", "ws") + "/ws"), wss[_0x39ec04].on("open", function _0x3762a1() {
    $.log("[账号" + (_0x39ec04 + 1 < 10 ? "0" + (_0x39ec04 + 1) : _0x39ec04 + 1) + "]: 签名通道已连接");
  }), wss[_0x39ec04].on("close", function _0x2c541c() {
    $.log("[账号" + (_0x39ec04 + 1 < 10 ? "0" + (_0x39ec04 + 1) : _0x39ec04 + 1) + "]: 签名通道已关闭，原因是任务已处理完成");
  }), wss[_0x39ec04].on("error", function _0x2d1326() {
    $.log("[账号" + (_0x39ec04 + 1 < 10 ? "0" + (_0x39ec04 + 1) : _0x39ec04 + 1) + "]: 签名通道已关闭，原因是出现错误");
    channels_status[_0x39ec04] = 1;
    reconectCounts[_0x39ec04]++;
    reconectCounts[_0x39ec04] <= 3 && init_ws(_0x39ec04);
  }));
}
async function runSubTask(_0x560a1c, _0x5648a6) {
  $.isNode() && (await $.wait(3000, 5000));
  await login(_0x5648a6);
  await userInfo(_0x5648a6);
  await getScore(_0x5648a6);
  await autoLoginRedirectUrl(_0x5648a6);
  await dailySignInfo(_0x5648a6);
  $.isNode() && (await wss[_0x5648a6].close());
  await runComplete(appName, userId);
  _0x560a1c();
}
async function getCk() {
  if ($request.url.match(/\/passport\/UnionLogin/)) {
    const _0x568a7e = $request.body;
    let _0x3955c8 = dxxwuserck - 1;
    dxxwapp[_0x3955c8] ? dxxwapp[_0x3955c8].token_body = _0x568a7e : dxxwapp[_0x3955c8] = {
      token_body: _0x568a7e
    };
    $.setdata(JSON.stringify(dxxwapp, null, 2), "dxxwapp");
    $.msg($.name, "快音账号" + (_0x3955c8 + 1) + "Token获取成功！🎉");
  }
}
async function login(_0x2d8df3) {
  const _0x4c3052 = "https://pubmod.hntv.tv/mobile/uaa-app/oauth/token";
  const _0x54e17f = new Base64();
  let _0x5d833d = _0x54e17f.encode("em" + encodeURIComponent(_0x54e17f.encode(dxxwapp[_0x2d8df3].password)));
  let _0x1b5b6f = "grant_type=password&username=%7B%22principal%22%3A%22" + dxxwapp[_0x2d8df3].mobile + "%22%2C%22authenticationType%22%3A%22mobile%22%7D&password=" + _0x5d833d;
  await getReqObject(_0x4c3052, _0x1b5b6f, _0x2d8df3);
  await httpRequest("post", requestObjects[_0x2d8df3], printCaller());
  let _0x32c8cc = httpResult;
  _0x32c8cc != null ? (dxxwapp[_0x2d8df3].accessToken = _0x32c8cc.access_token, dxxwapp[_0x2d8df3].refreshToken = _0x32c8cc.refresh_token) : ($.log("[账号" + (_0x2d8df3 + 1 < 10 ? "0" + (_0x2d8df3 + 1) : _0x2d8df3 + 1) + "]: 登录=> 登录失败"), dxxwlogs[_0x2d8df3] += "[账号" + (_0x2d8df3 + 1 < 10 ? "0" + (_0x2d8df3 + 1) : _0x2d8df3 + 1) + "]: 登录=> 登录失败\n");
}
async function userInfo(_0x32eaad) {
  const _0x1ffa30 = "https://dxnum.hntv.tv/dxnum/app/getUserInfo";
  let _0x1e3957 = "";
  await getReqObject(_0x1ffa30, _0x1e3957, _0x32eaad);
  await httpRequest("get", requestObjects[_0x32eaad], printCaller());
  let _0x591f45 = httpResult;
  _0x591f45 != null && _0x591f45.code == 0 ? ($.log("[账号" + (_0x32eaad + 1 < 10 ? "0" + (_0x32eaad + 1) : _0x32eaad + 1) + "]: 用户名=> " + _0x591f45.result[0].nickname), dxxwlogs[_0x32eaad] += "[账号" + (_0x32eaad + 1 < 10 ? "0" + (_0x32eaad + 1) : _0x32eaad + 1) + "]: 用户名=> " + _0x591f45.result[0].nickname + "\n", $.log("[账号" + (_0x32eaad + 1 < 10 ? "0" + (_0x32eaad + 1) : _0x32eaad + 1) + "]: 手机号=> " + _0x591f45.result[0].mobile), dxxwlogs[_0x32eaad] += "[账号" + (_0x32eaad + 1 < 10 ? "0" + (_0x32eaad + 1) : _0x32eaad + 1) + "]: 手机号=> " + _0x591f45.result[0].mobile + "\n") : ($.log("[账号" + (_0x32eaad + 1 < 10 ? "0" + (_0x32eaad + 1) : _0x32eaad + 1) + "]: 用户信息=> " + _0x591f45?.["msg"]), dxxwlogs[_0x32eaad] += "[账号" + (_0x32eaad + 1 < 10 ? "0" + (_0x32eaad + 1) : _0x32eaad + 1) + "]: 用户信息=> " + _0x591f45?.["msg"] + "\n", await login(_0x32eaad));
}
async function getScore(_0x1b1b5a) {
  const _0x4ff52d = "https://integration.hntv.tv/integration/user/integration/info/";
  let _0x57aacd = "";
  await getReqObject(_0x4ff52d, _0x57aacd, _0x1b1b5a);
  requestObjects[_0x1b1b5a].headers["User-Agent"] = "Mozilla/5.0 (Linux; Android 8.1.0; Pixel Build/OPM4.171019.021.P1; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/121.0.6167.164 Mobile Safari/537.36 dxpayua";
  await httpRequest("get", requestObjects[_0x1b1b5a], printCaller());
  let _0x70042 = httpResult;
  _0x70042 != null && _0x70042.code == 0 && $.log("[账号" + (_0x1b1b5a + 1 < 10 ? "0" + (_0x1b1b5a + 1) : _0x1b1b5a + 1) + "]: 积分=> " + _0x70042.result.haveScore);
}
async function autoLoginRedirectUrl(_0x18cb3d) {
  const _0x5c9d0b = "https://integration.hntv.tv/integration/p/duiba/autoLoginUrl?dbredirect=https:%2F%2F90580-activity.dexfu.cn%2Fsign%2Fcomponent%2Fpage%3FsignOperatingId%3D327411516979156";
  let _0x226b46 = "";
  await getReqObject(_0x5c9d0b, _0x226b46, _0x18cb3d);
  requestObjects[_0x18cb3d].headers["User-Agent"] = "Mozilla/5.0 (Linux; Android 8.1.0; Pixel Build/OPM4.171019.021.P1; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/121.0.6167.164 Mobile Safari/537.36 dxpayua";
  await httpRequest("get", requestObjects[_0x18cb3d], printCaller());
  let _0x392aa5 = httpResult;
  if (_0x392aa5 != null && _0x392aa5.code == 0) {
    let _0xbb0230 = _0x392aa5.result;
    await autoLogin(_0x18cb3d, _0xbb0230);
  } else {
    $.log("[账号" + (_0x18cb3d + 1 < 10 ? "0" + (_0x18cb3d + 1) : _0x18cb3d + 1) + "]: 活动跳转=> " + _0x392aa5.msg);
    dxxwlogs[_0x18cb3d] += "[账号" + (_0x18cb3d + 1 < 10 ? "0" + (_0x18cb3d + 1) : _0x18cb3d + 1) + "]: 活动跳转=> " + _0x392aa5.msg + "\n";
  }
}
async function autoLogin(_0x32745a, _0x3ff930) {
  requestObjects[_0x32745a] = duibaRequestOption(_0x32745a, _0x3ff930, "");
  await httpRequest("get", requestObjects[_0x32745a], printCaller());
  let _0xf6acdb = httpResult;
  if (_0xf6acdb != null) {
    let _0x322167 = [];
    for (let _0x2be3f0 = 0; _0x2be3f0 < _0xf6acdb.length; _0x2be3f0++) {
      if (_0x2be3f0 < 7) {
        let _0x4429c9 = _0xf6acdb[_0x2be3f0].split(";")[0];
        _0x322167.push(_0x4429c9);
      }
    }
    let _0x539081 = _0x322167.join(";");
    dxxwapp[_0x32745a].duiba_cookie = _0x539081;
  } else {
    $.log("[账号" + (_0x32745a + 1 < 10 ? "0" + (_0x32745a + 1) : _0x32745a + 1) + "]: 活动跳转=> " + _0xf6acdb.desc);
    dxxwlogs[_0x32745a] += "[账号" + (_0x32745a + 1 < 10 ? "0" + (_0x32745a + 1) : _0x32745a + 1) + "]: 活动跳转=> " + _0xf6acdb.desc + "\n";
  }
}
async function dailySignInfo(_0x3b0009) {
  requestObjects[_0x3b0009] = duibaRequestOption(_0x3b0009, "/sign/component/index?signOperatingId=327411516979156&preview=false&", "");
  await httpRequest("get", requestObjects[_0x3b0009], printCaller());
  let _0x20eb5f = httpResult;
  _0x20eb5f != null && _0x20eb5f.success == true ? (_0x20eb5f.data.signResult == false && (await signKeyGet_new(_0x3b0009)), _0x20eb5f.data.times > 0 && (await signLotteryKeyGet(_0x3b0009), await $.wait(helpUtils.randomNum(3000, 5000)))) : ($.log("[账号" + (_0x3b0009 + 1 < 10 ? "0" + (_0x3b0009 + 1) : _0x3b0009 + 1) + "]: 签到信息=> " + _0x20eb5f.desc), dxxwlogs[_0x3b0009] += "[账号" + (_0x3b0009 + 1 < 10 ? "0" + (_0x3b0009 + 1) : _0x3b0009 + 1) + "]: 签到信息=> " + _0x20eb5f.desc + "\n");
}
async function signKeyGet_new(_0x2ce99d) {
  requestObjects[_0x2ce99d] = duibaRequestOption(_0x2ce99d, "/sign/component/page?signOperatingId=327411516979156", "");
  requestObjects[_0x2ce99d].headers.Accept = "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7";
  await httpRequest("get", requestObjects[_0x2ce99d], printCaller());
  let _0x562c65 = httpResult;
  if (_0x562c65 != null) {
    let _0x30f9f3 = /<script type="text\/javascript">\s*\/\*\s*\*\s*获取token\s*\*\/\s*[\s\S]*?<\/script>/.exec(_0x562c65)[0];
    let _0x141c1f = _0x30f9f3.replace("<script type=\"text/javascript\">", "");
    _0x141c1f = _0x141c1f.replace("</script>", "");
    eval(_0x141c1f);
    let _0xa9102a = /var\s+key\s+=\s+'([^']+)';/.exec(getDuibaToken.toString())[1];
    await getSignToken_new(_0x2ce99d, _0xa9102a);
  } else {
    $.log("[账号" + (_0x2ce99d + 1 < 10 ? "0" + (_0x2ce99d + 1) : _0x2ce99d + 1) + "]: 获取key=> " + _0x562c65.desc);
    dxxwlogs[_0x2ce99d] += "[账号" + (_0x2ce99d + 1 < 10 ? "0" + (_0x2ce99d + 1) : _0x2ce99d + 1) + "]: 获取key=> " + _0x562c65.desc + "\n";
  }
}
async function getSignToken_new(_0x936259, _0x589c3b) {
  let _0x5aeb83 = helpUtils.ts13();
  requestObjects[_0x936259] = duibaRequestOption(_0x936259, "/chw/ctoken/getToken", "timestamp=" + _0x5aeb83, "https://90580-activity.dexfu.cn/sign/component/page?signOperatingId=327411516979156");
  requestObjects[_0x936259].headers["Content-Type"] = "application/x-www-form-urlencoded";
  await httpRequest("post", requestObjects[_0x936259], printCaller());
  let _0x9b50f = httpResult;
  if (_0x9b50f != null && _0x9b50f.success == true) {
    eval(_0x9b50f.token);
    let _0x42a345 = window[_0x589c3b];
    await doSign(_0x936259, _0x42a345);
  } else {
    $.log("[账号" + (_0x936259 + 1 < 10 ? "0" + (_0x936259 + 1) : _0x936259 + 1) + "]: 获取token=> 失败");
    dxxwlogs[_0x936259] += "[账号" + (_0x936259 + 1 < 10 ? "0" + (_0x936259 + 1) : _0x936259 + 1) + "]: 获取token=> 失败\n";
  }
}
async function signLotteryKeyGet(_0x116b3e) {
  requestObjects[_0x116b3e] = duibaRequestOption(_0x116b3e, "/sign/component/page?signOperatingId=327411516979156", "");
  requestObjects[_0x116b3e].headers.Accept = "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7";
  await httpRequest("get", requestObjects[_0x116b3e], printCaller());
  let _0x2bef97 = httpResult;
  if (_0x2bef97 != null) {
    let _0x3aa749 = /<script type="text\/javascript">\s*\/\*\s*\*\s*获取token\s*\*\/\s*[\s\S]*?<\/script>/.exec(_0x2bef97)[0];
    let _0x74a927 = _0x3aa749.replace("<script type=\"text/javascript\">", "");
    _0x74a927 = _0x74a927.replace("</script>", "");
    eval(_0x74a927);
    let _0x335a53 = /var\s+key\s+=\s+'([^']+)';/.exec(getDuibaToken.toString())[1];
    await getSignLotteryToken(_0x116b3e, _0x335a53);
  } else {
    $.log("[账号" + (_0x116b3e + 1 < 10 ? "0" + (_0x116b3e + 1) : _0x116b3e + 1) + "]: 获取key=> " + _0x2bef97.desc);
    dxxwlogs[_0x116b3e] += "[账号" + (_0x116b3e + 1 < 10 ? "0" + (_0x116b3e + 1) : _0x116b3e + 1) + "]: 获取key=> " + _0x2bef97.desc + "\n";
  }
}
async function getSignLotteryToken(_0x216339, _0x56f858) {
  let _0x33be3d = helpUtils.ts13();
  requestObjects[_0x216339] = duibaRequestOption(_0x216339, "/chw/ctoken/getToken", "timestamp=" + _0x33be3d, "https://90580-activity.dexfu.cn/sign/component/page?signOperatingId=327411516979156");
  requestObjects[_0x216339].headers["Content-Type"] = "application/x-www-form-urlencoded";
  await httpRequest("post", requestObjects[_0x216339], printCaller());
  let _0x142107 = httpResult;
  if (_0x142107 != null && _0x142107.success == true) {
    eval(_0x142107.token);
    let _0x3ddadd = window[_0x56f858];
    await doLottery(_0x216339, _0x3ddadd);
  } else {
    $.log("[账号" + (_0x216339 + 1 < 10 ? "0" + (_0x216339 + 1) : _0x216339 + 1) + "]: 获取token=> 失败");
    dxxwlogs[_0x216339] += "[账号" + (_0x216339 + 1 < 10 ? "0" + (_0x216339 + 1) : _0x216339 + 1) + "]: 获取token=> 失败\n";
  }
}
async function doLottery(_0x5a4886, _0x31c4e7) {
  requestObjects[_0x5a4886] = duibaRequestOption(_0x5a4886, "/sign/component/doJoin?", "signOperatingId=327411516979156&token=" + _0x31c4e7);
  requestObjects[_0x5a4886].headers["Content-Type"] = "application/x-www-form-urlencoded";
  await httpRequest("post", requestObjects[_0x5a4886], printCaller());
  let _0x58bc24 = httpResult;
  if (_0x58bc24 != null && _0x58bc24.success == true) {
    let _0x550d87 = _0x58bc24.data.orderNum;
    await getSignLotteryStatus(_0x5a4886, _0x550d87);
  } else {
    $.log("[账号" + (_0x5a4886 + 1 < 10 ? "0" + (_0x5a4886 + 1) : _0x5a4886 + 1) + "]: 签到结果=> " + _0x58bc24.desc);
    dxxwlogs[_0x5a4886] += "[账号" + (_0x5a4886 + 1 < 10 ? "0" + (_0x5a4886 + 1) : _0x5a4886 + 1) + "]: 签到结果=> " + _0x58bc24.desc + "\n";
  }
}
async function getSignLotteryStatus(_0x52e1a7, _0x12bf76) {
  requestObjects[_0x52e1a7] = duibaRequestOption(_0x52e1a7, "/plugin/getOrderStatus?orderId=" + _0x12bf76 + "&", "");
  await httpRequest("get", requestObjects[_0x52e1a7], printCaller());
  let _0x5a6ed3 = httpResult;
  _0x5a6ed3 != null && _0x5a6ed3.success == true ? ($.log("[账号" + (_0x52e1a7 + 1 < 10 ? "0" + (_0x52e1a7 + 1) : _0x52e1a7 + 1) + "]: 转盘结果=> " + JSON.stringify(_0x5a6ed3.lottery)), _0x5a6ed3.lottery.type != "thanks" && (await wxPush(_0x52e1a7, dxxwapp[_0x52e1a7].mobile + "-中奖提醒(" + _0x5a6ed3.lottery.type + ")", MSG_UID))) : ($.log("[账号" + (_0x52e1a7 + 1 < 10 ? "0" + (_0x52e1a7 + 1) : _0x52e1a7 + 1) + "]: 转盘结果=> 失败"), dxxwlogs[_0x52e1a7] += "[账号" + (_0x52e1a7 + 1 < 10 ? "0" + (_0x52e1a7 + 1) : _0x52e1a7 + 1) + "]: 转盘结果=> 失败\n");
}
async function doSign(_0x691c9, _0x5eb7bf) {
  requestObjects[_0x691c9] = duibaRequestOption(_0x691c9, "/sign/component/doSign?", "signOperatingId=327411516979156&token=" + _0x5eb7bf);
  requestObjects[_0x691c9].headers["Content-Type"] = "application/x-www-form-urlencoded";
  await httpRequest("post", requestObjects[_0x691c9], printCaller());
  let _0x55470a = httpResult;
  _0x55470a != null && _0x55470a.success == true ? ($.log("[账号" + (_0x691c9 + 1 < 10 ? "0" + (_0x691c9 + 1) : _0x691c9 + 1) + "]: 签到结果=> 成功获得" + _0x55470a.data.signResult / 20 + "积分"), dxxwlogs[_0x691c9] += "[账号" + (_0x691c9 + 1 < 10 ? "0" + (_0x691c9 + 1) : _0x691c9 + 1) + "]: 签到结果=> 成功获得" + _0x55470a.data.signResult / 20 + "积分\n") : ($.log("[账号" + (_0x691c9 + 1 < 10 ? "0" + (_0x691c9 + 1) : _0x691c9 + 1) + "]: 签到结果=> " + _0x55470a.desc), dxxwlogs[_0x691c9] += "[账号" + (_0x691c9 + 1 < 10 ? "0" + (_0x691c9 + 1) : _0x691c9 + 1) + "]: 签到结果=> " + _0x55470a.desc + "\n");
}
function duibaRequestOption(_0x1da36b, _0x5d06a9, _0x24cc26, _0x37a605) {
  let _0x68cb8 = helpUtils.ts13();
  let _0x5a4b46 = _0x5d06a9.indexOf("duiba.com") != -1 ? _0x5d06a9 : !_0x5d06a9.endsWith("?") && !_0x5d06a9.endsWith("&") ? "https://90580-activity.dexfu.cn" + _0x5d06a9 : "https://90580-activity.dexfu.cn" + _0x5d06a9 + "_=" + _0x68cb8;
  let _0x530640 = {
    Host: "90580-activity.dexfu.cn",
    "Content-Type": "application/json",
    "User-Agent": "Mozilla/5.0 (Linux; Android 12; 22081212C Build/SKQ1.220303.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/126.0.6478.186 Mobile Safari/537.36 dxpayua"
  };
  let _0x4960ee = {
    url: _0x5a4b46,
    headers: _0x530640
  };
  _0x24cc26 != "" && (_0x4960ee.body = _0x24cc26);
  dxxwapp[_0x1da36b].duiba_cookie && (_0x4960ee.headers.Cookie = dxxwapp[_0x1da36b].duiba_cookie);
  _0x37a605 && (_0x4960ee.headers.Referer = _0x37a605);
  return _0x4960ee;
}
function getScriptAuth(_0x29525e, _0x36d6d4, _0x18e390) {
  return new Promise((_0x2aa0f7, _0x3034a1) => {
    const _0x31f5b8 = apiHost + "/script/permissions/lastest";
    const _0x1fb05e = {
      appName: _0x29525e,
      userId: _0x36d6d4,
      activityCode: _0x18e390,
      version: version
    };
    const _0x3c5e17 = {
      url: _0x31f5b8,
      headers: {
        "Content-Type": "application/json",
        accept: "application/json"
      },
      body: JSON.stringify(_0x1fb05e)
    };
    $.post(_0x3c5e17, async (_0x417087, _0x33d6b9, _0x2979bf) => {
      if (_0x2979bf && _0x2979bf != null && _0x2979bf.replace(/\"/g, "").length > 50) {
        const _0x1c56e4 = _0x2979bf.replace(/\"/g, "").slice(34);
        helpUtils = await loadUtils(flushCash);
        CryptoJS = helpUtils.createCryptoJS();
        result = JSON.parse(CryptoJS.enc.Base64.parse(_0x1c56e4).toString(CryptoJS.enc.Utf8));
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
        } catch (_0x255f4a) {
          $.log(_0x255f4a);
        }
      } else {
        $.log("请求服务器接口出现错误，请检查网络连接情况");
      }
      _0x2aa0f7();
    });
  });
}
function runComplete(_0x340acd, _0x2dbccf) {
  return new Promise((_0x41a14b, _0x187f6d) => {
    const _0x2f2773 = apiHost + "/script/run/add";
    const _0x5024a1 = {
      appName: _0x340acd,
      userId: _0x2dbccf,
      activityCode: activeCode,
      version: version
    };
    const _0x39ff23 = {
      url: _0x2f2773,
      headers: {
        "Content-Type": "application/json",
        accept: "application/json"
      },
      body: JSON.stringify(_0x5024a1)
    };
    $.post(_0x39ff23, async (_0x44f828, _0x447101, _0x5e27a0) => {
      _0x41a14b();
    });
  });
}
function loadToken(_0x316f13) {
  let _0x26152c = dxxwapp[_0x316f13].mobile;
  dxxw_item = dxxw_cks["" + _0x26152c];
  return dxxw_item ? (dxxwapp[_0x316f13].refreshToken = dxxw_item.refreshToken, dxxwapp[_0x316f13].accessToken = dxxw_item.accessToken, true) : false;
}
function saveToken(_0x3c1e45) {
  dxxw_cks[dxxwapp[_0x3c1e45].mobile] = {
    refreshToken: dxxwapp[_0x3c1e45].refreshToken,
    accessToken: dxxwapp[_0x3c1e45].accessToken,
    ts: ts13()
  };
}
async function loadUtils(_0x1954ac) {
  let _0x2ee0cb = $.getdata("Utils_Code") || "";
  if (!_0x1954ac && _0x2ee0cb && Object.keys(_0x2ee0cb).length) {
    $.log("📢 缓存中存在JS-Utils");
    eval(_0x2ee0cb);
    return creatUtils();
  }
  $.log("📢 开始初始化JS-Utils");
  return new Promise(async _0x85abc8 => {
    $.getScript("http://script.david2024.top/scripts/tools/JS-Utils.js").then(_0x380f25 => {
      $.setdata(_0x380f25, "Utils_Code");
      eval(_0x380f25);
      $.log("📢 JS-Utils加载成功");
      _0x85abc8(creatUtils());
    });
  });
}
function checkAddress(_0x2dfd62, _0x2e4d5d) {
  return new Promise((_0x1aeef3, _0x19a7b5) => {
    const _0xc33387 = setTimeout(() => {
      _0x1aeef3(false);
    }, _0x2e4d5d);
    const _0x35cc22 = http.get(_0x2dfd62, _0x37be87 => {
      clearTimeout(_0xc33387);
      _0x37be87.statusCode === 404 ? _0x1aeef3(true) : _0x1aeef3(false);
    });
    _0x35cc22.on("error", _0x297181 => {
      clearTimeout(_0xc33387);
      _0x1aeef3(false);
    });
    _0x35cc22.on("timeout", () => {
      _0x35cc22.abort();
      _0x19a7b5(new Error("请求超时"));
    });
  });
}
async function fetchRequest(_0x44156f, _0x3fca3e = 3000) {
  return new Promise((_0x3e621c, _0x51a2c4) => {
    const _0x23baf8 = {
      url: _0x44156f + "/docs"
    };
    setTimeout(() => {
      _0x3e621c(false);
    }, _0x3fca3e);
    $.get(_0x23baf8, async (_0x3d0801, _0x3badbb, _0x277273) => {
      _0x3badbb.status == 401 ? _0x3e621c(true) : _0x3e621c(false);
    });
  });
}
async function httpClientRequest(_0x1022a2, _0x48e57b = 3000) {
  return new Promise((_0x260909, _0x200669) => {
    const _0x1d293d = {
      url: _0x1022a2 + "/"
    };
    setTimeout(() => {
      _0x260909(false);
    }, _0x48e57b);
    $httpClient.get(_0x1d293d, async (_0x256a12, _0x332a87, _0x2a1a39) => {
      _0x2a1a39 == "{\"detail\":\"Not Found\"}" ? _0x260909(true) : _0x260909(false);
    });
  });
}
function redisGet(_0x4427b5, _0x5d270b, _0x355d73) {
  return new Promise((_0x25fb35, _0x50df03) => {
    const _0x360eea = apiHost + "/redis/hash/get/" + _0x5d270b + "/" + _0x355d73;
    const _0x3c5472 = {
      url: _0x360eea,
      headers: {
        "Content-Type": "application/json",
        accept: "application/json"
      }
    };
    $.get(_0x3c5472, async (_0x4ae13f, _0x330d79, _0x5d1fee) => {
      const _0x42c0af = _0x5d1fee.replace(/\"/g, "");
      answerTexts[_0x4427b5] = _0x42c0af;
      _0x25fb35();
      return _0x42c0af;
    });
  });
}
function redisSet(_0x191ad2, _0x27e1ee, _0x2ecbaa) {
  return new Promise((_0x4f9aa9, _0x1638d3) => {
    const _0x14dbec = apiHost + "/redis/hash/set";
    const _0x303313 = {
      key: _0x191ad2,
      hashKey: _0x27e1ee,
      hashValue: _0x2ecbaa
    };
    const _0x8786d4 = {
      url: _0x14dbec,
      headers: {
        "Content-Type": "application/json",
        accept: "application/json"
      },
      body: JSON.stringify(_0x303313)
    };
    $.post(_0x8786d4, async (_0x187f9e, _0x4e7b6a, _0x559e9e) => {
      const _0xbf7a56 = _0x559e9e.replace(/\"/g, "");
      _0x4f9aa9();
    });
  });
}
function redisPop(_0x4c29ed) {
  return new Promise((_0x527585, _0x48b0b2) => {
    const _0x547db1 = apiHost + "/redis/set/pop/" + _0x4c29ed;
    const _0x2e4457 = {
      url: _0x547db1,
      headers: {
        "Content-Type": "application/json",
        accept: "application/json"
      }
    };
    $.get(_0x2e4457, async (_0x15405c, _0x539a74, _0x47d04c) => {
      const _0x531595 = _0x47d04c.replace(/\"/g, "");
      popCookie = _0x531595;
      _0x527585();
    });
  });
}
async function getReqObject(_0x4ea4a4, _0x182e7e, _0x4a4afa) {
  let _0x5b2528 = "Mozilla/5.0 (Linux; Android 12; 22081212C Build/SKQ1.220303.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/126.0.6478.186 Mobile Safari/537.36 dxpayua";
  dxxwapp[_0x4a4afa].ua && dxxwapp[_0x4a4afa].ua != "" && (_0x5b2528 = dxxwapp[_0x4a4afa].ua);
  let _0x2138ca = getHostname(_0x4ea4a4);
  let _0x10ee11 = {
    url: _0x4ea4a4,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "User-Agent": _0x5b2528,
      Host: _0x2138ca
    }
  };
  _0x2138ca != "pubmod.hntv.tv" && (_0x10ee11.headers.Authorization = "Bearer " + dxxwapp[_0x4a4afa].accessToken);
  _0x182e7e && (_0x10ee11.body = _0x182e7e);
  requestObjects[_0x4a4afa] = _0x10ee11;
  return _0x10ee11;
}
function getReqObject_(_0x355e0b, _0x1d9fc0, _0x2ac303) {
  let _0x4f69d9 = "Mozilla/5.0 (iPhone; CPU iPhone OS 16_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.31(0x18001f34) NetType/WIFI Language/zh_CN";
  dxxwapp[_0x2ac303].ua && dxxwapp[_0x2ac303].ua != "" && (_0x4f69d9 = dxxwapp[_0x2ac303].ua);
  let _0x4b2082 = getHostname(_0x355e0b);
  let _0x426002 = {
    url: _0x355e0b,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "User-Agent": _0x4f69d9,
      Authorization: dxxwapp[_0x2ac303].auth,
      Host: _0x4b2082
    }
  };
  _0x1d9fc0 && (_0x426002.body = _0x1d9fc0);
  requestObjects[_0x2ac303] = _0x426002;
  return _0x426002;
}
async function httpRequest(_0x284bb4, _0x3c7770, _0x3d4953) {
  httpResult = null;
  return new Promise(_0x3557ad => {
    $[_0x284bb4](_0x3c7770, async (_0x5d3aa9, _0x2e66a9, _0x438942) => {
      try {
        if (_0x3c7770.url.includes("cn/autoLogin/autologin")) {
          httpResult = _0x2e66a9.headers["set-cookie"];
          return;
        } else {
          if (_0x3c7770.url.includes("/hdtool/index") || _0x3c7770.url.includes("/visual-editor/skins") || _0x3c7770.url.includes("/sign/component/page?") || _0x3c7770.url.includes("/activity/takePrizeNew") || _0x3c7770.url.includes("/superSurprise/index")) {
            httpResult = _0x438942;
            return;
          }
        }
        if (_0x5d3aa9) {
          $.log(_0x3d4953 + ": " + _0x284bb4 + "请求失败");
          $.log(JSON.stringify(_0x5d3aa9));
          $.logErr(_0x5d3aa9);
        } else {
          if (safeGet(_0x438942)) {
            httpResult = JSON.parse(_0x438942);
            debug == 1 && $.log(httpResult);
          } else {
            const _0x557a36 = new URL(_0x3c7770.url);
            $.log(_0x557a36.pathname + "发起" + _0x284bb4 + "请求时，出现错误，请处理");
          }
        }
      } catch (_0x404856) {
        $.logErr(_0x404856, _0x2e66a9);
      } finally {
        _0x3557ad(httpResult);
      }
    });
  });
}
async function selectChannel(_0x15fa70, _0x5aabda) {
  channels_status[_0x15fa70] == 0 ? await getSign_(_0x15fa70, _0x5aabda) : await getSign(_0x15fa70, _0x5aabda);
}
function getSign_(_0x420dc1, _0x3fd807) {
  return new Promise((_0x384f42, _0x322580) => {
    function _0x2b3dfb(_0x7eb765) {
      let _0x17025f = _0x7eb765.toString("utf8");
      requestSigns[_0x420dc1] = _0x17025f;
      wss[_0x420dc1].removeListener("message", _0x2b3dfb);
      _0x384f42(_0x17025f);
    }
    wss[_0x420dc1].on("message", _0x2b3dfb);
    wss[_0x420dc1].readyState === 1 ? wss[_0x420dc1].send(JSON.stringify({
      method: appName,
      params: {
        content: _0x3fd807,
        appName: appName,
        uuid: userId
      }
    }), _0x111ebf => {
      _0x111ebf && _0x322580(_0x111ebf);
    }) : (_0x384f42(getSign(_0x420dc1, _0x3fd807)), wss[_0x420dc1].removeListener("message", _0x2b3dfb));
  });
}
function getSign(_0x4ad153, _0xce3245) {
  return new Promise((_0x43c92a, _0x341b25) => {
    const _0x499c6b = apiHost + "/sign/dxxw";
    const _0x469563 = {
      content: _0xce3245,
      appName: appName,
      uuid: userId
    };
    const _0x344ece = {
      url: _0x499c6b,
      headers: {
        "Content-Type": "application/json",
        accept: "application/json"
      },
      body: JSON.stringify(_0x469563)
    };
    $.post(_0x344ece, async (_0x467c25, _0x2837b9, _0x31c138) => {
      const _0x1d732b = _0x31c138.replace(/\"/g, "");
      requestSigns[_0x4ad153] = _0x1d732b;
      _0x43c92a();
    });
  });
}
function getAnswer(_0xe64951, _0x13ae01) {
  return new Promise((_0x3ce848, _0x5502cb) => {
    const _0x206132 = apiHost + "/chat/deepseek";
    const _0x33b24a = {
      keywords: _0x13ae01,
      uuid: userId
    };
    const _0x1e5244 = {
      url: _0x206132,
      headers: {
        "Content-Type": "application/json",
        accept: "application/json"
      },
      body: JSON.stringify(_0x33b24a)
    };
    $.post(_0x1e5244, async (_0x2d0448, _0x137b43, _0x5c1edd) => {
      const _0x53a08b = _0x5c1edd.replace(/\"/g, "");
      requestSigns[_0xe64951] = _0x53a08b;
      _0x3ce848();
    });
  });
}
function sortUrlParams(_0x9b9bfe, _0xa5d2e7, _0xbac7) {
  const _0x5d5da3 = url2obj(_0x9b9bfe);
  _0xa5d2e7.forEach(_0x961f72 => {
    delete _0x5d5da3[_0x961f72];
  });
  Object.assign(_0x5d5da3, _0xbac7);
  const _0x1e7336 = Object.keys(_0x5d5da3).sort();
  const _0x581bf7 = _0x1e7336.map(_0x4e819c => _0x4e819c + "=" + _0x5d5da3[_0x4e819c]).join("&");
  return _0x581bf7;
}
function url2obj(_0x113474) {
  _0x113474 = _0x113474.replace(/\"/g, "");
  var _0x513cea;
  var _0x17adf6 = {};
  var _0x34a3eb = _0x113474.slice(_0x113474.indexOf("?") + 1).split("&");
  for (var _0x39288d = 0; _0x39288d < _0x34a3eb.length; _0x39288d++) {
    _0x513cea = _0x34a3eb[_0x39288d].split("=");
    _0x17adf6[_0x513cea[0]] = _0x513cea[1];
  }
  return _0x17adf6;
}
function convertStringToJson(_0x45a1b9) {
  const _0x38a903 = _0x45a1b9.replace(/[{} ]/g, "");
  const _0x3523ec = _0x38a903.split(",");
  const _0x38fc72 = {};
  _0x3523ec.forEach(_0x1a2355 => {
    const [_0x1e73d2, _0x1f8220] = _0x1a2355.split("=");
    _0x38fc72[_0x1e73d2] = _0x1f8220;
  });
  return _0x38fc72;
}
function getHostname(_0x429553) {
  let _0x4b53e9 = _0x429553.substr(_0x429553.indexOf("//") + 2);
  let _0x29936e = _0x4b53e9.substr(0, _0x4b53e9.indexOf("/"));
  let _0x250f2c = "";
  let _0x37478c = _0x29936e.indexOf(":");
  _0x37478c > 0 ? _0x250f2c = _0x29936e.substr(0, _0x37478c) : _0x250f2c = _0x29936e;
  return _0x250f2c;
}
function calculateTimeDifference(_0x3e47ca, _0x279023) {
  var _0x26c98c = new Date(_0x3e47ca);
  var _0x3fd3ba = new Date(_0x279023);
  var _0x594bb4 = _0x3fd3ba - _0x26c98c;
  var _0x1505c8 = Math.floor(_0x594bb4 / 1000);
  return _0x1505c8;
}
function cutString(_0x18bec3, _0x176845) {
  if (_0x18bec3.length * 2 <= _0x176845) {
    return _0x18bec3;
  }
  var _0x313ab4 = 0;
  var _0x332cfa = "";
  for (var _0x5d2170 = 0; _0x5d2170 < _0x18bec3.length; _0x5d2170++) {
    _0x332cfa = _0x332cfa + _0x18bec3.charAt(_0x5d2170);
    if (_0x18bec3.charCodeAt(_0x5d2170) > 128) {
      _0x313ab4 = _0x313ab4 + 2;
      if (_0x313ab4 >= _0x176845) {
        return _0x332cfa.substring(0, _0x332cfa.length - 1) + "...";
      }
    } else {
      _0x313ab4 = _0x313ab4 + 1;
      if (_0x313ab4 >= _0x176845) {
        return _0x332cfa.substring(0, _0x332cfa.length - 2) + "...";
      }
    }
  }
  return _0x332cfa;
}
function printCaller() {
  return new Error().stack.split("\n")[3].split("@")[0];
}
function safeGet(_0x4b740a) {
  try {
    if (typeof JSON.parse(_0x4b740a) == "object") {
      return true;
    }
  } catch (_0x1e1ece) {
    console.log(_0x1e1ece);
    console.log("服务器访问数据为空，请检查自身设备网络情况");
    return false;
  }
}
function jsonToUrl(_0x5d1439) {
  var _0x17b2b4 = Object.keys(_0x5d1439).map(function (_0x4909eb) {
    return encodeURIComponent(_0x4909eb) + "=" + encodeURIComponent(_0x5d1439[_0x4909eb]);
  }).join("&");
  return _0x17b2b4;
}
function compileStr(_0x514f11) {
  var _0x40cb6e = String.fromCharCode(_0x514f11.charCodeAt(0) + _0x514f11.length);
  for (var _0x10908d = 1; _0x10908d < _0x514f11.length; _0x10908d++) {
    _0x40cb6e += String.fromCharCode(_0x514f11.charCodeAt(_0x10908d) + _0x514f11.charCodeAt(_0x10908d - 1));
  }
  return escape(_0x40cb6e);
}
function uncompileStr(_0x4a48d7) {
  _0x4a48d7 = unescape(_0x4a48d7);
  var _0x9dbdcd = String.fromCharCode(_0x4a48d7.charCodeAt(0) - _0x4a48d7.length);
  for (var _0x7df4fe = 1; _0x7df4fe < _0x4a48d7.length; _0x7df4fe++) {
    _0x9dbdcd += String.fromCharCode(_0x4a48d7.charCodeAt(_0x7df4fe) - _0x9dbdcd.charCodeAt(_0x7df4fe - 1));
  }
  return _0x9dbdcd;
}
function randomNum(_0x4daf32, _0x3328cf) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * _0x4daf32 + 1);
      break;
    case 2:
      return parseInt(Math.random() * (_0x3328cf - _0x4daf32 + 1) + _0x4daf32);
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
  function _0x7609ef() {
    return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
  }
  return _0x7609ef() + _0x7609ef() + "-" + _0x7609ef() + "-" + _0x7609ef() + "-" + _0x7609ef() + "-" + _0x7609ef() + _0x7609ef() + _0x7609ef();
}
function phone_num(_0x14e426) {
  if (_0x14e426.length == 11) {
    let _0x2849d6 = _0x14e426.replace(/(\d{3})\d{4}(\d{4})/, "$1****$2");
    return _0x2849d6;
  } else {
    return _0x14e426;
  }
}
function txt_api(_0x597f0e) {
  return new Promise((_0x59664c, _0xb3d09b) => {
    const _0x543c79 = "https://v1.hitokoto.cn/?c=e";
    const _0x47ee54 = {
      url: _0x543c79,
      headers: {
        accept: "application/json"
      }
    };
    $.get(_0x47ee54, async (_0x52172c, _0x235a83, _0x59a280) => {
      let _0x53cd3f = JSON.parse(_0x59a280);
      let _0x3e7711 = _0x53cd3f.hitokoto;
      contents[_0x597f0e] = _0x3e7711 + " " + _0x3e7711;
      _0x59664c();
    });
  });
}
function getTime_8() {
  return new Promise((_0x548ce4, _0x23fc81) => {
    const _0x5042ea = "http://api.m.taobao.com/rest/api3.do?api=mtop.common.getTimestamp";
    const _0x3a88da = {
      url: _0x5042ea
    };
    $.get(_0x3a88da, async (_0x1cd00f, _0x4ce26a, _0x191ad4) => {
      _0x548ce4(_0x191ad4);
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
async function sendMsg(_0x4621ff) {
  (hour == 9 || hour == 12 || hour == 18) && (tz == 1 ? $.isNode() ? await notify.sendNotify($.name, _0x4621ff) : $.msg($.name, "", _0x4621ff) : $.log(_0x4621ff));
}
async function wxPush(_0x5a08fc, _0x4ac3f0, _0x229ac6) {
  return new Promise((_0x2234d1, _0x39ea56) => {
    const _0x10529b = "https://wxpusher.zjiecode.com/api/send/message";
    const _0x29344f = {
      appToken: "AT_6BZsE2IyJuVLPp3mcOkKvpoF245GR9xn",
      content: _0x4ac3f0,
      summary: "大象新闻抽奖通知",
      contentType: 1,
      uids: [_0x229ac6],
      verifyPay: false
    };
    const _0x2afb25 = {
      url: _0x10529b,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(_0x29344f)
    };
    $.post(_0x2afb25, async (_0x28aafa, _0x56dc4a, _0x33c4d7) => {
      _0x2234d1();
    });
  });
}
function randomString(_0x3cfce6, _0x4dc2c4) {
  _0x4dc2c4 = _0x4dc2c4 || "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let _0x161caf = "";
  for (let _0x337f87 = 0; _0x337f87 < _0x3cfce6; _0x337f87++) {
    let _0x12bced = Math.floor(Math.random() * _0x4dc2c4.length);
    _0x161caf += _0x4dc2c4.substring(_0x12bced, _0x12bced + 1);
  }
  return _0x161caf;
}
async function wxPush(_0x5500fe, _0x625c65, _0xc4179e) {
  return new Promise((_0x5ca4c0, _0x5d7878) => {
    const _0x544f12 = "https://wxpusher.zjiecode.com/api/send/message";
    const _0x4f41c7 = {
      appToken: "AT_c4P8PtQEcyg9C3ICLSBbziDJZnkMC9aH",
      content: _0x625c65,
      summary: "快手答题余额通知",
      contentType: 1,
      uids: [_0xc4179e],
      verifyPay: false
    };
    const _0x30f66f = {
      url: _0x544f12,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(_0x4f41c7)
    };
    $.post(_0x30f66f, async (_0x2f436d, _0x1c95a6, _0x2d1814) => {
      _0x5ca4c0();
    });
  });
}
function MD5_Encrypt(_0x5e777a) {
  function _0x3c0d27(_0x4ececa, _0x50c7c6) {
    return _0x4ececa << _0x50c7c6 | _0x4ececa >>> 32 - _0x50c7c6;
  }
  function _0x3d4120(_0x3e9723, _0x4e1f49) {
    var _0x2a1e5;
    var _0x2ae6f1;
    var _0xac7811;
    var _0x17046d;
    var _0x381de1;
    _0xac7811 = 2147483648 & _0x3e9723;
    _0x17046d = 2147483648 & _0x4e1f49;
    _0x2a1e5 = 1073741824 & _0x3e9723;
    _0x2ae6f1 = 1073741824 & _0x4e1f49;
    _0x381de1 = (1073741823 & _0x3e9723) + (1073741823 & _0x4e1f49);
    return _0x2a1e5 & _0x2ae6f1 ? 2147483648 ^ _0x381de1 ^ _0xac7811 ^ _0x17046d : _0x2a1e5 | _0x2ae6f1 ? 1073741824 & _0x381de1 ? 3221225472 ^ _0x381de1 ^ _0xac7811 ^ _0x17046d : 1073741824 ^ _0x381de1 ^ _0xac7811 ^ _0x17046d : _0x381de1 ^ _0xac7811 ^ _0x17046d;
  }
  function _0x1eef53(_0x4ce5b, _0x1eb677, _0x4a9e1d) {
    return _0x4ce5b & _0x1eb677 | ~_0x4ce5b & _0x4a9e1d;
  }
  function _0x37e46a(_0x52b739, _0x237bc0, _0x419736) {
    return _0x52b739 & _0x419736 | _0x237bc0 & ~_0x419736;
  }
  function _0x276f6b(_0x464e71, _0x4b893b, _0x264122) {
    return _0x464e71 ^ _0x4b893b ^ _0x264122;
  }
  function _0x41f330(_0x595c62, _0x531b03, _0x2707d6) {
    return _0x531b03 ^ (_0x595c62 | ~_0x2707d6);
  }
  function _0x34c836(_0x432e8d, _0x140c1d, _0x1bdda5, _0x503e38, _0xfd7783, _0x24fd96, _0x59cfcd) {
    _0x432e8d = _0x3d4120(_0x432e8d, _0x3d4120(_0x3d4120(_0x1eef53(_0x140c1d, _0x1bdda5, _0x503e38), _0xfd7783), _0x59cfcd));
    return _0x3d4120(_0x3c0d27(_0x432e8d, _0x24fd96), _0x140c1d);
  }
  function _0xe5f966(_0x4c1e43, _0x3783ee, _0x2e363d, _0x15e563, _0x195437, _0xb5135, _0x1881a0) {
    _0x4c1e43 = _0x3d4120(_0x4c1e43, _0x3d4120(_0x3d4120(_0x37e46a(_0x3783ee, _0x2e363d, _0x15e563), _0x195437), _0x1881a0));
    return _0x3d4120(_0x3c0d27(_0x4c1e43, _0xb5135), _0x3783ee);
  }
  function _0x225dee(_0x4baf79, _0x2354f5, _0x2760f3, _0x2dfa7e, _0x2f0cd7, _0x1a36e2, _0xe00907) {
    _0x4baf79 = _0x3d4120(_0x4baf79, _0x3d4120(_0x3d4120(_0x276f6b(_0x2354f5, _0x2760f3, _0x2dfa7e), _0x2f0cd7), _0xe00907));
    return _0x3d4120(_0x3c0d27(_0x4baf79, _0x1a36e2), _0x2354f5);
  }
  function _0x4f848e(_0x520803, _0x4edff8, _0x29f3fa, _0xefad5f, _0x34dbb9, _0x37b2f2, _0x59eb12) {
    _0x520803 = _0x3d4120(_0x520803, _0x3d4120(_0x3d4120(_0x41f330(_0x4edff8, _0x29f3fa, _0xefad5f), _0x34dbb9), _0x59eb12));
    return _0x3d4120(_0x3c0d27(_0x520803, _0x37b2f2), _0x4edff8);
  }
  function _0x390f2b(_0x499f02) {
    for (var _0x1c380d, _0x1f5baa = _0x499f02.length, _0xe6d175 = _0x1f5baa + 8, _0x5d5588 = (_0xe6d175 - _0xe6d175 % 64) / 64, _0x1a8f9c = 16 * (_0x5d5588 + 1), _0x133081 = new Array(_0x1a8f9c - 1), _0x59a232 = 0, _0xcdea90 = 0; _0x1f5baa > _0xcdea90;) {
      _0x1c380d = (_0xcdea90 - _0xcdea90 % 4) / 4;
      _0x59a232 = _0xcdea90 % 4 * 8;
      _0x133081[_0x1c380d] = _0x133081[_0x1c380d] | _0x499f02.charCodeAt(_0xcdea90) << _0x59a232;
      _0xcdea90++;
    }
    _0x1c380d = (_0xcdea90 - _0xcdea90 % 4) / 4;
    _0x59a232 = _0xcdea90 % 4 * 8;
    _0x133081[_0x1c380d] = _0x133081[_0x1c380d] | 128 << _0x59a232;
    _0x133081[_0x1a8f9c - 2] = _0x1f5baa << 3;
    _0x133081[_0x1a8f9c - 1] = _0x1f5baa >>> 29;
    return _0x133081;
  }
  function _0x499140(_0x266fda) {
    var _0x460c4f;
    var _0x3980da;
    var _0x1e7b57 = "";
    var _0x3d94d1 = "";
    for (_0x3980da = 0; 3 >= _0x3980da; _0x3980da++) {
      _0x460c4f = _0x266fda >>> 8 * _0x3980da & 255;
      _0x3d94d1 = "0" + _0x460c4f.toString(16);
      _0x1e7b57 += _0x3d94d1.substr(_0x3d94d1.length - 2, 2);
    }
    return _0x1e7b57;
  }
  function _0x5c1f25(_0x377ab7) {
    _0x377ab7 = _0x377ab7.replace(/\r\n/g, "\n");
    for (var _0x165b27 = "", _0x4cd9ea = 0; _0x4cd9ea < _0x377ab7.length; _0x4cd9ea++) {
      var _0x2739bf = _0x377ab7.charCodeAt(_0x4cd9ea);
      128 > _0x2739bf ? _0x165b27 += String.fromCharCode(_0x2739bf) : _0x2739bf > 127 && 2048 > _0x2739bf ? (_0x165b27 += String.fromCharCode(_0x2739bf >> 6 | 192), _0x165b27 += String.fromCharCode(63 & _0x2739bf | 128)) : (_0x165b27 += String.fromCharCode(_0x2739bf >> 12 | 224), _0x165b27 += String.fromCharCode(_0x2739bf >> 6 & 63 | 128), _0x165b27 += String.fromCharCode(63 & _0x2739bf | 128));
    }
    return _0x165b27;
  }
  var _0x5083c5;
  var _0x1fdc8a;
  var _0x43e9b0;
  var _0x526a8c;
  var _0x1b7197;
  var _0xb23ba9;
  var _0x59905a;
  var _0x220e9b;
  var _0x620335;
  var _0x59c206 = [];
  var _0x10c1d3 = 7;
  var _0x440ffe = 12;
  var _0x22982f = 17;
  var _0x3334e6 = 22;
  var _0x4f403b = 5;
  var _0x403612 = 9;
  var _0x18b053 = 14;
  var _0x53f09b = 20;
  var _0x1c1bf8 = 4;
  var _0xad6534 = 11;
  var _0x3e5026 = 16;
  var _0x623def = 23;
  var _0x374d1e = 6;
  var _0x4046f0 = 10;
  var _0x1d7f5a = 15;
  var _0x98b7a = 21;
  for (_0x5e777a = _0x5c1f25(_0x5e777a), _0x59c206 = _0x390f2b(_0x5e777a), _0xb23ba9 = 1732584193, _0x59905a = 4023233417, _0x220e9b = 2562383102, _0x620335 = 271733878, _0x5083c5 = 0; _0x5083c5 < _0x59c206.length; _0x5083c5 += 16) {
    _0x1fdc8a = _0xb23ba9;
    _0x43e9b0 = _0x59905a;
    _0x526a8c = _0x220e9b;
    _0x1b7197 = _0x620335;
    _0xb23ba9 = _0x34c836(_0xb23ba9, _0x59905a, _0x220e9b, _0x620335, _0x59c206[_0x5083c5 + 0], _0x10c1d3, 3614090360);
    _0x620335 = _0x34c836(_0x620335, _0xb23ba9, _0x59905a, _0x220e9b, _0x59c206[_0x5083c5 + 1], _0x440ffe, 3905402710);
    _0x220e9b = _0x34c836(_0x220e9b, _0x620335, _0xb23ba9, _0x59905a, _0x59c206[_0x5083c5 + 2], _0x22982f, 606105819);
    _0x59905a = _0x34c836(_0x59905a, _0x220e9b, _0x620335, _0xb23ba9, _0x59c206[_0x5083c5 + 3], _0x3334e6, 3250441966);
    _0xb23ba9 = _0x34c836(_0xb23ba9, _0x59905a, _0x220e9b, _0x620335, _0x59c206[_0x5083c5 + 4], _0x10c1d3, 4118548399);
    _0x620335 = _0x34c836(_0x620335, _0xb23ba9, _0x59905a, _0x220e9b, _0x59c206[_0x5083c5 + 5], _0x440ffe, 1200080426);
    _0x220e9b = _0x34c836(_0x220e9b, _0x620335, _0xb23ba9, _0x59905a, _0x59c206[_0x5083c5 + 6], _0x22982f, 2821735955);
    _0x59905a = _0x34c836(_0x59905a, _0x220e9b, _0x620335, _0xb23ba9, _0x59c206[_0x5083c5 + 7], _0x3334e6, 4249261313);
    _0xb23ba9 = _0x34c836(_0xb23ba9, _0x59905a, _0x220e9b, _0x620335, _0x59c206[_0x5083c5 + 8], _0x10c1d3, 1770035416);
    _0x620335 = _0x34c836(_0x620335, _0xb23ba9, _0x59905a, _0x220e9b, _0x59c206[_0x5083c5 + 9], _0x440ffe, 2336552879);
    _0x220e9b = _0x34c836(_0x220e9b, _0x620335, _0xb23ba9, _0x59905a, _0x59c206[_0x5083c5 + 10], _0x22982f, 4294925233);
    _0x59905a = _0x34c836(_0x59905a, _0x220e9b, _0x620335, _0xb23ba9, _0x59c206[_0x5083c5 + 11], _0x3334e6, 2304563134);
    _0xb23ba9 = _0x34c836(_0xb23ba9, _0x59905a, _0x220e9b, _0x620335, _0x59c206[_0x5083c5 + 12], _0x10c1d3, 1804603682);
    _0x620335 = _0x34c836(_0x620335, _0xb23ba9, _0x59905a, _0x220e9b, _0x59c206[_0x5083c5 + 13], _0x440ffe, 4254626195);
    _0x220e9b = _0x34c836(_0x220e9b, _0x620335, _0xb23ba9, _0x59905a, _0x59c206[_0x5083c5 + 14], _0x22982f, 2792965006);
    _0x59905a = _0x34c836(_0x59905a, _0x220e9b, _0x620335, _0xb23ba9, _0x59c206[_0x5083c5 + 15], _0x3334e6, 1236535329);
    _0xb23ba9 = _0xe5f966(_0xb23ba9, _0x59905a, _0x220e9b, _0x620335, _0x59c206[_0x5083c5 + 1], _0x4f403b, 4129170786);
    _0x620335 = _0xe5f966(_0x620335, _0xb23ba9, _0x59905a, _0x220e9b, _0x59c206[_0x5083c5 + 6], _0x403612, 3225465664);
    _0x220e9b = _0xe5f966(_0x220e9b, _0x620335, _0xb23ba9, _0x59905a, _0x59c206[_0x5083c5 + 11], _0x18b053, 643717713);
    _0x59905a = _0xe5f966(_0x59905a, _0x220e9b, _0x620335, _0xb23ba9, _0x59c206[_0x5083c5 + 0], _0x53f09b, 3921069994);
    _0xb23ba9 = _0xe5f966(_0xb23ba9, _0x59905a, _0x220e9b, _0x620335, _0x59c206[_0x5083c5 + 5], _0x4f403b, 3593408605);
    _0x620335 = _0xe5f966(_0x620335, _0xb23ba9, _0x59905a, _0x220e9b, _0x59c206[_0x5083c5 + 10], _0x403612, 38016083);
    _0x220e9b = _0xe5f966(_0x220e9b, _0x620335, _0xb23ba9, _0x59905a, _0x59c206[_0x5083c5 + 15], _0x18b053, 3634488961);
    _0x59905a = _0xe5f966(_0x59905a, _0x220e9b, _0x620335, _0xb23ba9, _0x59c206[_0x5083c5 + 4], _0x53f09b, 3889429448);
    _0xb23ba9 = _0xe5f966(_0xb23ba9, _0x59905a, _0x220e9b, _0x620335, _0x59c206[_0x5083c5 + 9], _0x4f403b, 568446438);
    _0x620335 = _0xe5f966(_0x620335, _0xb23ba9, _0x59905a, _0x220e9b, _0x59c206[_0x5083c5 + 14], _0x403612, 3275163606);
    _0x220e9b = _0xe5f966(_0x220e9b, _0x620335, _0xb23ba9, _0x59905a, _0x59c206[_0x5083c5 + 3], _0x18b053, 4107603335);
    _0x59905a = _0xe5f966(_0x59905a, _0x220e9b, _0x620335, _0xb23ba9, _0x59c206[_0x5083c5 + 8], _0x53f09b, 1163531501);
    _0xb23ba9 = _0xe5f966(_0xb23ba9, _0x59905a, _0x220e9b, _0x620335, _0x59c206[_0x5083c5 + 13], _0x4f403b, 2850285829);
    _0x620335 = _0xe5f966(_0x620335, _0xb23ba9, _0x59905a, _0x220e9b, _0x59c206[_0x5083c5 + 2], _0x403612, 4243563512);
    _0x220e9b = _0xe5f966(_0x220e9b, _0x620335, _0xb23ba9, _0x59905a, _0x59c206[_0x5083c5 + 7], _0x18b053, 1735328473);
    _0x59905a = _0xe5f966(_0x59905a, _0x220e9b, _0x620335, _0xb23ba9, _0x59c206[_0x5083c5 + 12], _0x53f09b, 2368359562);
    _0xb23ba9 = _0x225dee(_0xb23ba9, _0x59905a, _0x220e9b, _0x620335, _0x59c206[_0x5083c5 + 5], _0x1c1bf8, 4294588738);
    _0x620335 = _0x225dee(_0x620335, _0xb23ba9, _0x59905a, _0x220e9b, _0x59c206[_0x5083c5 + 8], _0xad6534, 2272392833);
    _0x220e9b = _0x225dee(_0x220e9b, _0x620335, _0xb23ba9, _0x59905a, _0x59c206[_0x5083c5 + 11], _0x3e5026, 1839030562);
    _0x59905a = _0x225dee(_0x59905a, _0x220e9b, _0x620335, _0xb23ba9, _0x59c206[_0x5083c5 + 14], _0x623def, 4259657740);
    _0xb23ba9 = _0x225dee(_0xb23ba9, _0x59905a, _0x220e9b, _0x620335, _0x59c206[_0x5083c5 + 1], _0x1c1bf8, 2763975236);
    _0x620335 = _0x225dee(_0x620335, _0xb23ba9, _0x59905a, _0x220e9b, _0x59c206[_0x5083c5 + 4], _0xad6534, 1272893353);
    _0x220e9b = _0x225dee(_0x220e9b, _0x620335, _0xb23ba9, _0x59905a, _0x59c206[_0x5083c5 + 7], _0x3e5026, 4139469664);
    _0x59905a = _0x225dee(_0x59905a, _0x220e9b, _0x620335, _0xb23ba9, _0x59c206[_0x5083c5 + 10], _0x623def, 3200236656);
    _0xb23ba9 = _0x225dee(_0xb23ba9, _0x59905a, _0x220e9b, _0x620335, _0x59c206[_0x5083c5 + 13], _0x1c1bf8, 681279174);
    _0x620335 = _0x225dee(_0x620335, _0xb23ba9, _0x59905a, _0x220e9b, _0x59c206[_0x5083c5 + 0], _0xad6534, 3936430074);
    _0x220e9b = _0x225dee(_0x220e9b, _0x620335, _0xb23ba9, _0x59905a, _0x59c206[_0x5083c5 + 3], _0x3e5026, 3572445317);
    _0x59905a = _0x225dee(_0x59905a, _0x220e9b, _0x620335, _0xb23ba9, _0x59c206[_0x5083c5 + 6], _0x623def, 76029189);
    _0xb23ba9 = _0x225dee(_0xb23ba9, _0x59905a, _0x220e9b, _0x620335, _0x59c206[_0x5083c5 + 9], _0x1c1bf8, 3654602809);
    _0x620335 = _0x225dee(_0x620335, _0xb23ba9, _0x59905a, _0x220e9b, _0x59c206[_0x5083c5 + 12], _0xad6534, 3873151461);
    _0x220e9b = _0x225dee(_0x220e9b, _0x620335, _0xb23ba9, _0x59905a, _0x59c206[_0x5083c5 + 15], _0x3e5026, 530742520);
    _0x59905a = _0x225dee(_0x59905a, _0x220e9b, _0x620335, _0xb23ba9, _0x59c206[_0x5083c5 + 2], _0x623def, 3299628645);
    _0xb23ba9 = _0x4f848e(_0xb23ba9, _0x59905a, _0x220e9b, _0x620335, _0x59c206[_0x5083c5 + 0], _0x374d1e, 4096336452);
    _0x620335 = _0x4f848e(_0x620335, _0xb23ba9, _0x59905a, _0x220e9b, _0x59c206[_0x5083c5 + 7], _0x4046f0, 1126891415);
    _0x220e9b = _0x4f848e(_0x220e9b, _0x620335, _0xb23ba9, _0x59905a, _0x59c206[_0x5083c5 + 14], _0x1d7f5a, 2878612391);
    _0x59905a = _0x4f848e(_0x59905a, _0x220e9b, _0x620335, _0xb23ba9, _0x59c206[_0x5083c5 + 5], _0x98b7a, 4237533241);
    _0xb23ba9 = _0x4f848e(_0xb23ba9, _0x59905a, _0x220e9b, _0x620335, _0x59c206[_0x5083c5 + 12], _0x374d1e, 1700485571);
    _0x620335 = _0x4f848e(_0x620335, _0xb23ba9, _0x59905a, _0x220e9b, _0x59c206[_0x5083c5 + 3], _0x4046f0, 2399980690);
    _0x220e9b = _0x4f848e(_0x220e9b, _0x620335, _0xb23ba9, _0x59905a, _0x59c206[_0x5083c5 + 10], _0x1d7f5a, 4293915773);
    _0x59905a = _0x4f848e(_0x59905a, _0x220e9b, _0x620335, _0xb23ba9, _0x59c206[_0x5083c5 + 1], _0x98b7a, 2240044497);
    _0xb23ba9 = _0x4f848e(_0xb23ba9, _0x59905a, _0x220e9b, _0x620335, _0x59c206[_0x5083c5 + 8], _0x374d1e, 1873313359);
    _0x620335 = _0x4f848e(_0x620335, _0xb23ba9, _0x59905a, _0x220e9b, _0x59c206[_0x5083c5 + 15], _0x4046f0, 4264355552);
    _0x220e9b = _0x4f848e(_0x220e9b, _0x620335, _0xb23ba9, _0x59905a, _0x59c206[_0x5083c5 + 6], _0x1d7f5a, 2734768916);
    _0x59905a = _0x4f848e(_0x59905a, _0x220e9b, _0x620335, _0xb23ba9, _0x59c206[_0x5083c5 + 13], _0x98b7a, 1309151649);
    _0xb23ba9 = _0x4f848e(_0xb23ba9, _0x59905a, _0x220e9b, _0x620335, _0x59c206[_0x5083c5 + 4], _0x374d1e, 4149444226);
    _0x620335 = _0x4f848e(_0x620335, _0xb23ba9, _0x59905a, _0x220e9b, _0x59c206[_0x5083c5 + 11], _0x4046f0, 3174756917);
    _0x220e9b = _0x4f848e(_0x220e9b, _0x620335, _0xb23ba9, _0x59905a, _0x59c206[_0x5083c5 + 2], _0x1d7f5a, 718787259);
    _0x59905a = _0x4f848e(_0x59905a, _0x220e9b, _0x620335, _0xb23ba9, _0x59c206[_0x5083c5 + 9], _0x98b7a, 3951481745);
    _0xb23ba9 = _0x3d4120(_0xb23ba9, _0x1fdc8a);
    _0x59905a = _0x3d4120(_0x59905a, _0x43e9b0);
    _0x220e9b = _0x3d4120(_0x220e9b, _0x526a8c);
    _0x620335 = _0x3d4120(_0x620335, _0x1b7197);
  }
  var _0x38bdfe = _0x499140(_0xb23ba9) + _0x499140(_0x59905a) + _0x499140(_0x220e9b) + _0x499140(_0x620335);
  return _0x38bdfe.toLowerCase();
}
function SHA256(_0x188f7c) {
  var _0x57eec1 = 8;
  var _0x25363f = 0;
  function _0x419219(_0x37dbe5, _0x148d63) {
    var _0x2d5e0c = (_0x37dbe5 & 65535) + (_0x148d63 & 65535);
    var _0x1e3168 = (_0x37dbe5 >> 16) + (_0x148d63 >> 16) + (_0x2d5e0c >> 16);
    return _0x1e3168 << 16 | _0x2d5e0c & 65535;
  }
  function _0x52795c(_0x22df23, _0x48a53b) {
    return _0x22df23 >>> _0x48a53b | _0x22df23 << 32 - _0x48a53b;
  }
  function _0x266f46(_0x309c94, _0x26ff9d) {
    return _0x309c94 >>> _0x26ff9d;
  }
  function _0x863825(_0xb02f7, _0x1f3a05, _0x48cfb2) {
    return _0xb02f7 & _0x1f3a05 ^ ~_0xb02f7 & _0x48cfb2;
  }
  function _0x53584f(_0x77e309, _0x9e5c8e, _0x5b4c23) {
    return _0x77e309 & _0x9e5c8e ^ _0x77e309 & _0x5b4c23 ^ _0x9e5c8e & _0x5b4c23;
  }
  function _0x4b670d(_0x9d6589) {
    return _0x52795c(_0x9d6589, 2) ^ _0x52795c(_0x9d6589, 13) ^ _0x52795c(_0x9d6589, 22);
  }
  function _0x5bfddf(_0x52ddca) {
    return _0x52795c(_0x52ddca, 6) ^ _0x52795c(_0x52ddca, 11) ^ _0x52795c(_0x52ddca, 25);
  }
  function _0xfc886e(_0xb3fac1) {
    return _0x52795c(_0xb3fac1, 7) ^ _0x52795c(_0xb3fac1, 18) ^ _0x266f46(_0xb3fac1, 3);
  }
  function _0x4c606d(_0x1265e5) {
    return _0x52795c(_0x1265e5, 17) ^ _0x52795c(_0x1265e5, 19) ^ _0x266f46(_0x1265e5, 10);
  }
  function _0x55afbf(_0x26706f, _0x47f2e9) {
    var _0x17ed88 = new Array(1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298);
    var _0x1c80da = new Array(1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225);
    var _0x44798c = new Array(64);
    var _0x49275d;
    var _0x5d58c7;
    var _0x4ebae4;
    var _0x58cc3b;
    var _0x190f53;
    var _0x1cfa28;
    var _0x554d0a;
    var _0x54bedc;
    var _0x1c5268;
    var _0x5c520b;
    var _0x51731e;
    var _0x4c8071;
    _0x26706f[_0x47f2e9 >> 5] |= 128 << 24 - _0x47f2e9 % 32;
    _0x26706f[(_0x47f2e9 + 64 >> 9 << 4) + 15] = _0x47f2e9;
    for (var _0x1c5268 = 0; _0x1c5268 < _0x26706f.length; _0x1c5268 += 16) {
      _0x49275d = _0x1c80da[0];
      _0x5d58c7 = _0x1c80da[1];
      _0x4ebae4 = _0x1c80da[2];
      _0x58cc3b = _0x1c80da[3];
      _0x190f53 = _0x1c80da[4];
      _0x1cfa28 = _0x1c80da[5];
      _0x554d0a = _0x1c80da[6];
      _0x54bedc = _0x1c80da[7];
      for (var _0x5c520b = 0; _0x5c520b < 64; _0x5c520b++) {
        if (_0x5c520b < 16) {
          _0x44798c[_0x5c520b] = _0x26706f[_0x5c520b + _0x1c5268];
        } else {
          _0x44798c[_0x5c520b] = _0x419219(_0x419219(_0x419219(_0x4c606d(_0x44798c[_0x5c520b - 2]), _0x44798c[_0x5c520b - 7]), _0xfc886e(_0x44798c[_0x5c520b - 15])), _0x44798c[_0x5c520b - 16]);
        }
        _0x51731e = _0x419219(_0x419219(_0x419219(_0x419219(_0x54bedc, _0x5bfddf(_0x190f53)), _0x863825(_0x190f53, _0x1cfa28, _0x554d0a)), _0x17ed88[_0x5c520b]), _0x44798c[_0x5c520b]);
        _0x4c8071 = _0x419219(_0x4b670d(_0x49275d), _0x53584f(_0x49275d, _0x5d58c7, _0x4ebae4));
        _0x54bedc = _0x554d0a;
        _0x554d0a = _0x1cfa28;
        _0x1cfa28 = _0x190f53;
        _0x190f53 = _0x419219(_0x58cc3b, _0x51731e);
        _0x58cc3b = _0x4ebae4;
        _0x4ebae4 = _0x5d58c7;
        _0x5d58c7 = _0x49275d;
        _0x49275d = _0x419219(_0x51731e, _0x4c8071);
      }
      _0x1c80da[0] = _0x419219(_0x49275d, _0x1c80da[0]);
      _0x1c80da[1] = _0x419219(_0x5d58c7, _0x1c80da[1]);
      _0x1c80da[2] = _0x419219(_0x4ebae4, _0x1c80da[2]);
      _0x1c80da[3] = _0x419219(_0x58cc3b, _0x1c80da[3]);
      _0x1c80da[4] = _0x419219(_0x190f53, _0x1c80da[4]);
      _0x1c80da[5] = _0x419219(_0x1cfa28, _0x1c80da[5]);
      _0x1c80da[6] = _0x419219(_0x554d0a, _0x1c80da[6]);
      _0x1c80da[7] = _0x419219(_0x54bedc, _0x1c80da[7]);
    }
    return _0x1c80da;
  }
  function _0xc4e254(_0x5d502b) {
    var _0x14a974 = Array();
    var _0x323565 = (1 << _0x57eec1) - 1;
    for (var _0xd6eb26 = 0; _0xd6eb26 < _0x5d502b.length * _0x57eec1; _0xd6eb26 += _0x57eec1) {
      _0x14a974[_0xd6eb26 >> 5] |= (_0x5d502b.charCodeAt(_0xd6eb26 / _0x57eec1) & _0x323565) << 24 - _0xd6eb26 % 32;
    }
    return _0x14a974;
  }
  function _0x2da068(_0x4a0e06) {
    _0x4a0e06 = _0x4a0e06.replace(/\r\n/g, "\n");
    var _0x33f643 = "";
    for (var _0x3e3691 = 0; _0x3e3691 < _0x4a0e06.length; _0x3e3691++) {
      var _0x3767e0 = _0x4a0e06.charCodeAt(_0x3e3691);
      if (_0x3767e0 < 128) {
        _0x33f643 += String.fromCharCode(_0x3767e0);
      } else {
        _0x3767e0 > 127 && _0x3767e0 < 2048 ? (_0x33f643 += String.fromCharCode(_0x3767e0 >> 6 | 192), _0x33f643 += String.fromCharCode(_0x3767e0 & 63 | 128)) : (_0x33f643 += String.fromCharCode(_0x3767e0 >> 12 | 224), _0x33f643 += String.fromCharCode(_0x3767e0 >> 6 & 63 | 128), _0x33f643 += String.fromCharCode(_0x3767e0 & 63 | 128));
      }
    }
    return _0x33f643;
  }
  function _0x111994(_0x1dc592) {
    var _0x3d8ac0 = _0x25363f ? "0123456789ABCDEF" : "0123456789abcdef";
    var _0x2dde06 = "";
    for (var _0x4fa529 = 0; _0x4fa529 < _0x1dc592.length * 4; _0x4fa529++) {
      _0x2dde06 += _0x3d8ac0.charAt(_0x1dc592[_0x4fa529 >> 2] >> (3 - _0x4fa529 % 4) * 8 + 4 & 15) + _0x3d8ac0.charAt(_0x1dc592[_0x4fa529 >> 2] >> (3 - _0x4fa529 % 4) * 8 & 15);
    }
    return _0x2dde06;
  }
  _0x188f7c = _0x2da068(_0x188f7c);
  return _0x111994(_0x55afbf(_0xc4e254(_0x188f7c), _0x188f7c.length * _0x57eec1));
}
function SHA1(_0x3c6ec8) {
  function _0x5da582(_0x4f92ca, _0x5d6a56) {
    var _0x54dd7f = _0x4f92ca << _0x5d6a56 | _0x4f92ca >>> 32 - _0x5d6a56;
    return _0x54dd7f;
  }
  function _0xac6e74(_0x523b55) {
    var _0xe8a9e4 = "";
    var _0x4a0f14;
    var _0x3f1371;
    var _0x3fd125;
    for (_0x4a0f14 = 0; _0x4a0f14 <= 6; _0x4a0f14 += 2) {
      _0x3f1371 = _0x523b55 >>> _0x4a0f14 * 4 + 4 & 15;
      _0x3fd125 = _0x523b55 >>> _0x4a0f14 * 4 & 15;
      _0xe8a9e4 += _0x3f1371.toString(16) + _0x3fd125.toString(16);
    }
    return _0xe8a9e4;
  }
  function _0x203ec8(_0x32aaff) {
    var _0x5eb5d8 = "";
    var _0x2c81d4;
    var _0x5039dd;
    for (_0x2c81d4 = 7; _0x2c81d4 >= 0; _0x2c81d4--) {
      _0x5039dd = _0x32aaff >>> _0x2c81d4 * 4 & 15;
      _0x5eb5d8 += _0x5039dd.toString(16);
    }
    return _0x5eb5d8;
  }
  function _0x5c8671(_0x5a5c88) {
    _0x5a5c88 = _0x5a5c88.replace(/\r\n/g, "\n");
    var _0x300cec = "";
    for (var _0x24798b = 0; _0x24798b < _0x5a5c88.length; _0x24798b++) {
      var _0x1db06a = _0x5a5c88.charCodeAt(_0x24798b);
      if (_0x1db06a < 128) {
        _0x300cec += String.fromCharCode(_0x1db06a);
      } else {
        _0x1db06a > 127 && _0x1db06a < 2048 ? (_0x300cec += String.fromCharCode(_0x1db06a >> 6 | 192), _0x300cec += String.fromCharCode(_0x1db06a & 63 | 128)) : (_0x300cec += String.fromCharCode(_0x1db06a >> 12 | 224), _0x300cec += String.fromCharCode(_0x1db06a >> 6 & 63 | 128), _0x300cec += String.fromCharCode(_0x1db06a & 63 | 128));
      }
    }
    return _0x300cec;
  }
  var _0x39ccf1;
  var _0x4c0368;
  var _0x1182bb;
  var _0xe48ea6 = new Array(80);
  var _0x3cc6ae = 1732584193;
  var _0x14c224 = 4023233417;
  var _0x560083 = 2562383102;
  var _0x5e9435 = 271733878;
  var _0x2ec8fa = 3285377520;
  var _0x12a22f;
  var _0x2358b7;
  var _0x5ae320;
  var _0x5dd126;
  var _0x23031f;
  var _0x582166;
  _0x3c6ec8 = _0x5c8671(_0x3c6ec8);
  var _0x3b9d18 = _0x3c6ec8.length;
  var _0x4f11e7 = new Array();
  for (_0x4c0368 = 0; _0x4c0368 < _0x3b9d18 - 3; _0x4c0368 += 4) {
    _0x1182bb = _0x3c6ec8.charCodeAt(_0x4c0368) << 24 | _0x3c6ec8.charCodeAt(_0x4c0368 + 1 < 10 ? "0" + (_0x4c0368 + 1) : _0x4c0368 + 1) << 16 | _0x3c6ec8.charCodeAt(_0x4c0368 + 2) << 8 | _0x3c6ec8.charCodeAt(_0x4c0368 + 3);
    _0x4f11e7.push(_0x1182bb);
  }
  switch (_0x3b9d18 % 4) {
    case 0:
      _0x4c0368 = 2147483648;
      break;
    case 1:
      _0x4c0368 = _0x3c6ec8.charCodeAt(_0x3b9d18 - 1) << 24 | 8388608;
      break;
    case 2:
      _0x4c0368 = _0x3c6ec8.charCodeAt(_0x3b9d18 - 2) << 24 | _0x3c6ec8.charCodeAt(_0x3b9d18 - 1) << 16 | 32768;
      break;
    case 3:
      _0x4c0368 = _0x3c6ec8.charCodeAt(_0x3b9d18 - 3) << 24 | _0x3c6ec8.charCodeAt(_0x3b9d18 - 2) << 16 | _0x3c6ec8.charCodeAt(_0x3b9d18 - 1) << 8 | 128;
      break;
  }
  _0x4f11e7.push(_0x4c0368);
  while (_0x4f11e7.length % 16 != 14) {
    _0x4f11e7.push(0);
  }
  _0x4f11e7.push(_0x3b9d18 >>> 29);
  _0x4f11e7.push(_0x3b9d18 << 3 & 4294967295);
  for (_0x39ccf1 = 0; _0x39ccf1 < _0x4f11e7.length; _0x39ccf1 += 16) {
    for (_0x4c0368 = 0; _0x4c0368 < 16; _0x4c0368++) {
      _0xe48ea6[_0x4c0368] = _0x4f11e7[_0x39ccf1 + _0x4c0368];
    }
    for (_0x4c0368 = 16; _0x4c0368 <= 79; _0x4c0368++) {
      _0xe48ea6[_0x4c0368] = _0x5da582(_0xe48ea6[_0x4c0368 - 3] ^ _0xe48ea6[_0x4c0368 - 8] ^ _0xe48ea6[_0x4c0368 - 14] ^ _0xe48ea6[_0x4c0368 - 16], 1);
    }
    _0x12a22f = _0x3cc6ae;
    _0x2358b7 = _0x14c224;
    _0x5ae320 = _0x560083;
    _0x5dd126 = _0x5e9435;
    _0x23031f = _0x2ec8fa;
    for (_0x4c0368 = 0; _0x4c0368 <= 19; _0x4c0368++) {
      _0x582166 = _0x5da582(_0x12a22f, 5) + (_0x2358b7 & _0x5ae320 | ~_0x2358b7 & _0x5dd126) + _0x23031f + _0xe48ea6[_0x4c0368] + 1518500249 & 4294967295;
      _0x23031f = _0x5dd126;
      _0x5dd126 = _0x5ae320;
      _0x5ae320 = _0x5da582(_0x2358b7, 30);
      _0x2358b7 = _0x12a22f;
      _0x12a22f = _0x582166;
    }
    for (_0x4c0368 = 20; _0x4c0368 <= 39; _0x4c0368++) {
      _0x582166 = _0x5da582(_0x12a22f, 5) + (_0x2358b7 ^ _0x5ae320 ^ _0x5dd126) + _0x23031f + _0xe48ea6[_0x4c0368] + 1859775393 & 4294967295;
      _0x23031f = _0x5dd126;
      _0x5dd126 = _0x5ae320;
      _0x5ae320 = _0x5da582(_0x2358b7, 30);
      _0x2358b7 = _0x12a22f;
      _0x12a22f = _0x582166;
    }
    for (_0x4c0368 = 40; _0x4c0368 <= 59; _0x4c0368++) {
      _0x582166 = _0x5da582(_0x12a22f, 5) + (_0x2358b7 & _0x5ae320 | _0x2358b7 & _0x5dd126 | _0x5ae320 & _0x5dd126) + _0x23031f + _0xe48ea6[_0x4c0368] + 2400959708 & 4294967295;
      _0x23031f = _0x5dd126;
      _0x5dd126 = _0x5ae320;
      _0x5ae320 = _0x5da582(_0x2358b7, 30);
      _0x2358b7 = _0x12a22f;
      _0x12a22f = _0x582166;
    }
    for (_0x4c0368 = 60; _0x4c0368 <= 79; _0x4c0368++) {
      _0x582166 = _0x5da582(_0x12a22f, 5) + (_0x2358b7 ^ _0x5ae320 ^ _0x5dd126) + _0x23031f + _0xe48ea6[_0x4c0368] + 3395469782 & 4294967295;
      _0x23031f = _0x5dd126;
      _0x5dd126 = _0x5ae320;
      _0x5ae320 = _0x5da582(_0x2358b7, 30);
      _0x2358b7 = _0x12a22f;
      _0x12a22f = _0x582166;
    }
    _0x3cc6ae = _0x3cc6ae + _0x12a22f & 4294967295;
    _0x14c224 = _0x14c224 + _0x2358b7 & 4294967295;
    _0x560083 = _0x560083 + _0x5ae320 & 4294967295;
    _0x5e9435 = _0x5e9435 + _0x5dd126 & 4294967295;
    _0x2ec8fa = _0x2ec8fa + _0x23031f & 4294967295;
  }
  var _0x582166 = _0x203ec8(_0x3cc6ae) + _0x203ec8(_0x14c224) + _0x203ec8(_0x560083) + _0x203ec8(_0x5e9435) + _0x203ec8(_0x2ec8fa);
  return _0x582166.toLowerCase();
}
function Base64() {
  var _0x738feb = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  this.encode = function (_0x456ed4) {
    var _0x10d004 = "";
    var _0x56c69f;
    var _0x174be9;
    var _0x526f5a;
    var _0x45f27c;
    var _0x421ad8;
    var _0x30a0a7;
    var _0x326578;
    var _0x448a4e = 0;
    _0x456ed4 = utf8Encode(_0x456ed4);
    while (_0x448a4e < _0x456ed4.length) {
      _0x56c69f = _0x456ed4.charCodeAt(_0x448a4e++);
      _0x174be9 = _0x456ed4.charCodeAt(_0x448a4e++);
      _0x526f5a = _0x456ed4.charCodeAt(_0x448a4e++);
      _0x45f27c = _0x56c69f >> 2;
      _0x421ad8 = (_0x56c69f & 3) << 4 | _0x174be9 >> 4;
      _0x30a0a7 = (_0x174be9 & 15) << 2 | _0x526f5a >> 6;
      _0x326578 = _0x526f5a & 63;
      if (isNaN(_0x174be9)) {
        _0x30a0a7 = _0x326578 = 64;
      } else {
        isNaN(_0x526f5a) && (_0x326578 = 64);
      }
      _0x10d004 = _0x10d004 + _0x738feb.charAt(_0x45f27c) + _0x738feb.charAt(_0x421ad8) + _0x738feb.charAt(_0x30a0a7) + _0x738feb.charAt(_0x326578);
    }
    return _0x10d004;
  };
  this.decode = function (_0x49de49) {
    var _0x3400a6 = "";
    var _0x225b9f;
    var _0x19a5fe;
    var _0x216fc4;
    var _0x5440e1;
    var _0x3fd673;
    var _0x56a3b0;
    var _0x10994c;
    var _0x329e2c = 0;
    _0x49de49 = _0x49de49.replace(/[^A-Za-z0-9\+\/\=]/g, "");
    while (_0x329e2c < _0x49de49.length) {
      _0x5440e1 = _0x738feb.indexOf(_0x49de49.charAt(_0x329e2c++));
      _0x3fd673 = _0x738feb.indexOf(_0x49de49.charAt(_0x329e2c++));
      _0x56a3b0 = _0x738feb.indexOf(_0x49de49.charAt(_0x329e2c++));
      _0x10994c = _0x738feb.indexOf(_0x49de49.charAt(_0x329e2c++));
      _0x225b9f = _0x5440e1 << 2 | _0x3fd673 >> 4;
      _0x19a5fe = (_0x3fd673 & 15) << 4 | _0x56a3b0 >> 2;
      _0x216fc4 = (_0x56a3b0 & 3) << 6 | _0x10994c;
      _0x3400a6 = _0x3400a6 + String.fromCharCode(_0x225b9f);
      _0x56a3b0 !== 64 && (_0x3400a6 = _0x3400a6 + String.fromCharCode(_0x19a5fe));
      _0x10994c !== 64 && (_0x3400a6 = _0x3400a6 + String.fromCharCode(_0x216fc4));
    }
    _0x3400a6 = utf8Decode(_0x3400a6);
    return _0x3400a6;
  };
  utf8Encode = function (_0x514188) {
    _0x514188 = _0x514188.replace(/\r\n/g, "\n");
    var _0x305dc8 = "";
    for (var _0x1d04bc = 0; _0x1d04bc < _0x514188.length; _0x1d04bc++) {
      var _0xc381e6 = _0x514188.charCodeAt(_0x1d04bc);
      if (_0xc381e6 < 128) {
        _0x305dc8 += String.fromCharCode(_0xc381e6);
      } else {
        _0xc381e6 > 127 && _0xc381e6 < 2048 ? (_0x305dc8 += String.fromCharCode(_0xc381e6 >> 6 | 192), _0x305dc8 += String.fromCharCode(_0xc381e6 & 63 | 128)) : (_0x305dc8 += String.fromCharCode(_0xc381e6 >> 12 | 224), _0x305dc8 += String.fromCharCode(_0xc381e6 >> 6 & 63 | 128), _0x305dc8 += String.fromCharCode(_0xc381e6 & 63 | 128));
      }
    }
    return _0x305dc8;
  };
  utf8Decode = function (_0x3ba797) {
    var _0x18c26e = "";
    var _0x13d1b3 = 0;
    var _0x1851a8 = 0;
    var _0x16e72c = 0;
    var _0x4557d3 = 0;
    while (_0x13d1b3 < _0x3ba797.length) {
      _0x1851a8 = _0x3ba797.charCodeAt(_0x13d1b3);
      if (_0x1851a8 < 128) {
        _0x18c26e += String.fromCharCode(_0x1851a8);
        _0x13d1b3++;
      } else {
        _0x1851a8 > 191 && _0x1851a8 < 224 ? (_0x16e72c = _0x3ba797.charCodeAt(_0x13d1b3 + 1 < 10 ? "0" + (_0x13d1b3 + 1) : _0x13d1b3 + 1), _0x18c26e += String.fromCharCode((_0x1851a8 & 31) << 6 | _0x16e72c & 63), _0x13d1b3 += 2) : (_0x16e72c = _0x3ba797.charCodeAt(_0x13d1b3 + 1 < 10 ? "0" + (_0x13d1b3 + 1) : _0x13d1b3 + 1), _0x4557d3 = _0x3ba797.charCodeAt(_0x13d1b3 + 2), _0x18c26e += String.fromCharCode((_0x1851a8 & 15) << 12 | (_0x16e72c & 63) << 6 | _0x4557d3 & 63), _0x13d1b3 += 3);
      }
    }
    return _0x18c26e;
  };
}
function Env(_0x38f044, _0xd8ff5e) {
  class _0x323e54 {
    constructor(_0x386423) {
      this.env = _0x386423;
    }
    send(_0x235327, _0x1a5904 = "GET") {
      _0x235327 = typeof _0x235327 === "string" ? {
        url: _0x235327
      } : _0x235327;
      let _0x2dc4ea = this.get;
      _0x1a5904 === "POST" && (_0x2dc4ea = this.post);
      return new Promise((_0x51476d, _0x5f3b86) => {
        _0x2dc4ea.call(this, _0x235327, (_0x265656, _0x28f1b0, _0x52ea2f) => {
          if (_0x265656) {
            _0x5f3b86(_0x265656);
          } else {
            _0x51476d(_0x28f1b0);
          }
        });
      });
    }
    get(_0x31fdd4) {
      return this.send.call(this.env, _0x31fdd4);
    }
    post(_0x5526d5) {
      return this.send.call(this.env, _0x5526d5, "POST");
    }
  }
  return new class {
    constructor(_0x480e4f, _0x4bbe2c) {
      this.name = _0x480e4f;
      this.http = new _0x323e54(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = false;
      this.isNeedRewrite = false;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, _0x4bbe2c);
      const _0x5533d7 = "\n       ***********          *****      ***       **** ******  ***********  \n       *************       ******      ***      ****  ****    ************ \n      ****      ****     ***  ***      ***     ***    ***    ***      **** \n      ***       ****    ***  ****      ***    ***    ****   ****       *** \n     ****       ***    ***    ***      ***   ***     ***    ***       **** \n     ***       ***    ****   ****      ***  ***     ****   ****       ***  \n    ***      ****    ************      *** ***      ***    ***      ****   \n   ****   ******   ****      ****      ******      ****   ****   ******    \n   **********     ****       ****      *****     ******  ***********";
      this.isNode() && this.log(_0x5533d7);
      this.log("", "🔔 " + this.name + ", 开始!");
    }
    isNode() {
      return "undefined" !== typeof module && !!module.exports;
    }
    isQuanX() {
      return "undefined" !== typeof $task;
    }
    isSurge() {
      return "undefined" !== typeof $httpClient && "undefined" === typeof $loon;
    }
    isLoon() {
      return "undefined" !== typeof $loon;
    }
    isShadowrocket() {
      return "undefined" !== typeof $rocket;
    }
    toObj(_0x3a0769, _0x2eca4a = null) {
      try {
        return JSON.parse(_0x3a0769);
      } catch {
        return _0x2eca4a;
      }
    }
    toStr(_0x39f9d1, _0x4faa19 = null) {
      try {
        return JSON.stringify(_0x39f9d1);
      } catch {
        return _0x4faa19;
      }
    }
    getjson(_0x11c221, _0x353e10) {
      let _0x209f3d = _0x353e10;
      const _0x408461 = this.getdata(_0x11c221);
      if (_0x408461) {
        try {
          _0x209f3d = JSON.parse(this.getdata(_0x11c221));
        } catch {}
      }
      return _0x209f3d;
    }
    setjson(_0x2252f5, _0x483b51) {
      try {
        return this.setdata(JSON.stringify(_0x2252f5), _0x483b51);
      } catch {
        return false;
      }
    }
    getScript(_0x5007b3) {
      return new Promise(_0x31fe20 => {
        this.get({
          url: _0x5007b3
        }, (_0x512a9d, _0x5b8705, _0x256275) => _0x31fe20(_0x256275));
      });
    }
    runScript(_0x40c8fb, _0x2519b8) {
      return new Promise(_0x48644e => {
        let _0xc3e087 = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        _0xc3e087 = _0xc3e087 ? _0xc3e087.replace(/\n/g, "").trim() : _0xc3e087;
        let _0x31f553 = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        _0x31f553 = _0x31f553 ? _0x31f553 * 1 : 20;
        _0x31f553 = _0x2519b8 && _0x2519b8.timeout ? _0x2519b8.timeout : _0x31f553;
        const [_0x4c4361, _0x2f10e8] = _0xc3e087.split("@");
        const _0x33c5fc = {
          url: "http: //" + _0x2f10e8 + "/v1/scripting/evaluate",
          body: {
            script_text: _0x40c8fb,
            mock_type: "cron",
            timeout: _0x31f553
          },
          headers: {
            "X-Key": _0x4c4361,
            Accept: "*/*"
          }
        };
        this.post(_0x33c5fc, (_0x392b97, _0x59a834, _0x14b684) => _0x48644e(_0x14b684));
      }).catch(_0x40a2ac => this.logErr(_0x40a2ac));
    }
    loaddata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x25def6 = this.path.resolve(this.dataFile);
        const _0x2a3e0a = this.path.resolve(process.cwd(), this.dataFile);
        const _0x2250fc = this.fs.existsSync(_0x25def6);
        const _0x492b60 = !_0x2250fc && this.fs.existsSync(_0x2a3e0a);
        if (_0x2250fc || _0x492b60) {
          const _0x27e349 = _0x2250fc ? _0x25def6 : _0x2a3e0a;
          try {
            return JSON.parse(this.fs.readFileSync(_0x27e349));
          } catch (_0x207a14) {
            return {};
          }
        } else {
          return {};
        }
      } else {
        return {};
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x325293 = this.path.resolve(this.dataFile);
        const _0x161fab = this.path.resolve(process.cwd(), this.dataFile);
        const _0x503f2c = this.fs.existsSync(_0x325293);
        const _0x4e8e18 = !_0x503f2c && this.fs.existsSync(_0x161fab);
        const _0x44a028 = JSON.stringify(this.data);
        if (_0x503f2c) {
          this.fs.writeFileSync(_0x325293, _0x44a028);
        } else {
          _0x4e8e18 ? this.fs.writeFileSync(_0x161fab, _0x44a028) : this.fs.writeFileSync(_0x325293, _0x44a028);
        }
      }
    }
    lodash_get(_0x4c794d, _0xfc8168, _0xa776eb = undefined) {
      const _0xe1fa16 = _0xfc8168.replace(/[(d+)]/g, ".$1").split(".");
      let _0x1038aa = _0x4c794d;
      for (const _0x513b06 of _0xe1fa16) {
        _0x1038aa = Object(_0x1038aa)[_0x513b06];
        if (_0x1038aa === undefined) {
          return _0xa776eb;
        }
      }
      return _0x1038aa;
    }
    lodash_set(_0x8f64ce, _0x51ae93, _0x14791f) {
      if (Object(_0x8f64ce) !== _0x8f64ce) {
        return _0x8f64ce;
      }
      if (!Array.isArray(_0x51ae93)) {
        _0x51ae93 = _0x51ae93.toString().match(/[^.[]]+/g) || [];
      }
      _0x51ae93.slice(0, -1).reduce((_0x1678a8, _0x271f1b, _0xfdc39d) => Object(_0x1678a8[_0x271f1b]) === _0x1678a8[_0x271f1b] ? _0x1678a8[_0x271f1b] : _0x1678a8[_0x271f1b] = Math.abs(_0x51ae93[_0xfdc39d + 1 < 10 ? "0" + (_0xfdc39d + 1) : _0xfdc39d + 1]) >> 0 === +_0x51ae93[_0xfdc39d + 1 < 10 ? "0" + (_0xfdc39d + 1) : _0xfdc39d + 1] ? [] : {}, _0x8f64ce)[_0x51ae93[_0x51ae93.length - 1]] = _0x14791f;
      return _0x8f64ce;
    }
    getdata(_0x556f57) {
      let _0x184c33 = this.getval(_0x556f57);
      if (/^@/.test(_0x556f57)) {
        const [, _0x3ddbca, _0x12cca4] = /^@(.*?).(.*?)$/.exec(_0x556f57);
        const _0x58fed9 = _0x3ddbca ? this.getval(_0x3ddbca) : "";
        if (_0x58fed9) {
          try {
            const _0x38ea9c = JSON.parse(_0x58fed9);
            _0x184c33 = _0x38ea9c ? this.lodash_get(_0x38ea9c, _0x12cca4, "") : _0x184c33;
          } catch (_0x624cb6) {
            _0x184c33 = "";
          }
        }
      }
      return _0x184c33;
    }
    setdata(_0x413e09, _0x19fbba) {
      let _0x4e6347 = false;
      if (/^@/.test(_0x19fbba)) {
        const [, _0x472488, _0x4009bc] = /^@(.*?).(.*?)$/.exec(_0x19fbba);
        const _0x403321 = this.getval(_0x472488);
        const _0x563470 = _0x472488 ? _0x403321 === "null" ? null : _0x403321 || "{}" : "{}";
        try {
          const _0x13ec52 = JSON.parse(_0x563470);
          this.lodash_set(_0x13ec52, _0x4009bc, _0x413e09);
          _0x4e6347 = this.setval(JSON.stringify(_0x13ec52), _0x472488);
        } catch (_0x32b741) {
          const _0x21d48f = {};
          this.lodash_set(_0x21d48f, _0x4009bc, _0x413e09);
          _0x4e6347 = this.setval(JSON.stringify(_0x21d48f), _0x472488);
        }
      } else {
        _0x4e6347 = this.setval(_0x413e09, _0x19fbba);
      }
      return _0x4e6347;
    }
    getval(_0x1b23aa) {
      if (this.isSurge() || this.isLoon()) {
        return $persistentStore.read(_0x1b23aa);
      } else {
        if (this.isQuanX()) {
          return $prefs.valueForKey(_0x1b23aa);
        } else {
          return this.isNode() ? (this.data = this.loaddata(), this.data[_0x1b23aa]) : this.data && this.data[_0x1b23aa] || null;
        }
      }
    }
    setval(_0x101981, _0x49ed3b) {
      if (this.isSurge() || this.isLoon()) {
        return $persistentStore.write(_0x101981, _0x49ed3b);
      } else {
        if (this.isQuanX()) {
          return $prefs.setValueForKey(_0x101981, _0x49ed3b);
        } else {
          return this.isNode() ? (this.data = this.loaddata(), this.data[_0x49ed3b] = _0x101981, this.writedata(), true) : this.data && this.data[_0x49ed3b] || null;
        }
      }
    }
    initGotEnv(_0x12495f) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      _0x12495f && (_0x12495f.headers = _0x12495f.headers ? _0x12495f.headers : {}, undefined === _0x12495f.headers.Cookie && undefined === _0x12495f.cookieJar && (_0x12495f.cookieJar = this.ckjar));
    }
    get(_0x1e46b2, _0x1e021d = () => {}) {
      _0x1e46b2.headers && (delete _0x1e46b2.headers["Content-Type"], delete _0x1e46b2.headers["Content-Length"]);
      if (this.isSurge() || this.isLoon()) {
        this.isSurge() && this.isNeedRewrite && (_0x1e46b2.headers = _0x1e46b2.headers || {}, Object.assign(_0x1e46b2.headers, {
          "X-Surge-Skip-Scripting": false
        }));
        $httpClient.get(_0x1e46b2, (_0x149a24, _0x21b7b0, _0x76087f) => {
          !_0x149a24 && _0x21b7b0 && (_0x21b7b0.body = _0x76087f, _0x21b7b0.statusCode = _0x21b7b0.status);
          _0x1e021d(_0x149a24, _0x21b7b0, _0x76087f);
        });
      } else {
        if (this.isQuanX()) {
          this.isNeedRewrite && (_0x1e46b2.opts = _0x1e46b2.opts || {}, Object.assign(_0x1e46b2.opts, {
            hints: false
          }));
          $task.fetch(_0x1e46b2).then(_0x34139c => {
            const {
              statusCode: _0x4a1850,
              statusCode: _0x30bc80,
              headers: _0x3504ea,
              body: _0x4e8434
            } = _0x34139c;
            _0x1e021d(null, {
              status: _0x4a1850,
              statusCode: _0x30bc80,
              headers: _0x3504ea,
              body: _0x4e8434
            }, _0x4e8434);
          }, _0x550089 => _0x1e021d(_0x550089));
        } else {
          this.isNode() && (this.initGotEnv(_0x1e46b2), this.got(_0x1e46b2).on("redirect", (_0x34f5ac, _0x2ae89d) => {
            this.ckjar.setCookieSync(_0x34f5ac.headers["set-cookie"].map(Cookie.parse).toString());
          }).then(_0x2cecd3 => {
            const {
              statusCode: _0x23fcc3,
              statusCode: _0x586e1b,
              headers: _0x89ef36,
              body: _0x53a8a4
            } = _0x2cecd3;
            _0x1e021d(null, {
              status: _0x23fcc3,
              statusCode: _0x586e1b,
              headers: _0x89ef36,
              body: _0x53a8a4
            }, _0x53a8a4);
          }, _0x1a3dcf => {
            const {
              message: _0x2a2516,
              response: _0x1ddef8
            } = _0x1a3dcf;
            _0x1e021d(_0x2a2516, _0x1ddef8, _0x1ddef8 && _0x1ddef8.body);
          }));
        }
      }
    }
    post(_0x15d8e2, _0x44ef2c = () => {}) {
      const _0x121c3f = _0x15d8e2.method ? _0x15d8e2.method.toLocaleLowerCase() : "post";
      _0x15d8e2.body && _0x15d8e2.headers && !_0x15d8e2.headers["Content-Type"] && (_0x15d8e2.headers["Content-Type"] = "application/x-www-form-urlencoded");
      if (_0x15d8e2.headers) {
        delete _0x15d8e2.headers["Content-Length"];
      }
      if (this.isSurge() || this.isLoon()) {
        this.isSurge() && this.isNeedRewrite && (_0x15d8e2.headers = _0x15d8e2.headers || {}, Object.assign(_0x15d8e2.headers, {
          "X-Surge-Skip-Scripting": false
        }));
        $httpClient[_0x121c3f](_0x15d8e2, (_0x565c44, _0x18ed9a, _0xd586b3) => {
          !_0x565c44 && _0x18ed9a && (_0x18ed9a.body = _0xd586b3, _0x18ed9a.statusCode = _0x18ed9a.status);
          _0x44ef2c(_0x565c44, _0x18ed9a, _0xd586b3);
        });
      } else {
        if (this.isQuanX()) {
          _0x15d8e2.method = _0x121c3f;
          this.isNeedRewrite && (_0x15d8e2.opts = _0x15d8e2.opts || {}, Object.assign(_0x15d8e2.opts, {
            hints: false
          }));
          $task.fetch(_0x15d8e2).then(_0x1a1c73 => {
            const {
              statusCode: _0x11d60e,
              statusCode: _0x324859,
              headers: _0x15b0f4,
              body: _0x3812f4
            } = _0x1a1c73;
            _0x44ef2c(null, {
              status: _0x11d60e,
              statusCode: _0x324859,
              headers: _0x15b0f4,
              body: _0x3812f4
            }, _0x3812f4);
          }, _0x53b58c => _0x44ef2c(_0x53b58c));
        } else {
          if (this.isNode()) {
            this.initGotEnv(_0x15d8e2);
            const {
              url: _0x333f8b,
              ..._0x1967e7
            } = _0x15d8e2;
            this.got[_0x121c3f](_0x333f8b, _0x1967e7).then(_0x3ae655 => {
              const {
                statusCode: _0x5678c8,
                statusCode: _0xc55575,
                headers: _0x2fee7e,
                body: _0xb274e4
              } = _0x3ae655;
              _0x44ef2c(null, {
                status: _0x5678c8,
                statusCode: _0xc55575,
                headers: _0x2fee7e,
                body: _0xb274e4
              }, _0xb274e4);
            }, _0x5000a8 => {
              const {
                message: _0x4fa315,
                response: _0x2d5e1d
              } = _0x5000a8;
              _0x44ef2c(_0x4fa315, _0x2d5e1d, _0x2d5e1d && _0x2d5e1d.body);
            });
          }
        }
      }
    }
    put(_0x55f7f0, _0x1420c7 = () => {}) {
      const _0x5f3c3d = _0x55f7f0.method ? _0x55f7f0.method.toLocaleLowerCase() : "put";
      _0x55f7f0.body && _0x55f7f0.headers && !_0x55f7f0.headers["Content-Type"] && (_0x55f7f0.headers["Content-Type"] = "application/x-www-form-urlencoded");
      if (_0x55f7f0.headers) {
        delete _0x55f7f0.headers["Content-Length"];
      }
      if (this.isSurge() || this.isLoon()) {
        this.isSurge() && this.isNeedRewrite && (_0x55f7f0.headers = _0x55f7f0.headers || {}, Object.assign(_0x55f7f0.headers, {
          "X-Surge-Skip-Scripting": false
        }));
        $httpClient[_0x5f3c3d](_0x55f7f0, (_0x504392, _0x5202e3, _0x51d157) => {
          !_0x504392 && _0x5202e3 && (_0x5202e3.body = _0x51d157, _0x5202e3.statusCode = _0x5202e3.status);
          _0x1420c7(_0x504392, _0x5202e3, _0x51d157);
        });
      } else {
        if (this.isQuanX()) {
          _0x55f7f0.method = _0x5f3c3d;
          this.isNeedRewrite && (_0x55f7f0.opts = _0x55f7f0.opts || {}, Object.assign(_0x55f7f0.opts, {
            hints: false
          }));
          $task.fetch(_0x55f7f0).then(_0x2140c9 => {
            const {
              statusCode: _0x58a72e,
              statusCode: _0x489f05,
              headers: _0x45312d,
              body: _0x416aae
            } = _0x2140c9;
            _0x1420c7(null, {
              status: _0x58a72e,
              statusCode: _0x489f05,
              headers: _0x45312d,
              body: _0x416aae
            }, _0x416aae);
          }, _0x5cbd9e => _0x1420c7(_0x5cbd9e));
        } else {
          if (this.isNode()) {
            this.initGotEnv(_0x55f7f0);
            const {
              url: _0x4f2a4c,
              ..._0x39c0a3
            } = _0x55f7f0;
            this.got[_0x5f3c3d](_0x4f2a4c, _0x39c0a3).then(_0x38efde => {
              const {
                statusCode: _0x2438b0,
                statusCode: _0x24722a,
                headers: _0x488ca1,
                body: _0x1a720c
              } = _0x38efde;
              _0x1420c7(null, {
                status: _0x2438b0,
                statusCode: _0x24722a,
                headers: _0x488ca1,
                body: _0x1a720c
              }, _0x1a720c);
            }, _0x1fbebc => {
              const {
                message: _0x27f76b,
                response: _0x5733ca
              } = _0x1fbebc;
              _0x1420c7(_0x27f76b, _0x5733ca, _0x5733ca && _0x5733ca.body);
            });
          }
        }
      }
    }
    time(_0x57088e, _0x3969b3 = null) {
      const _0x145b77 = _0x3969b3 ? new Date(_0x3969b3) : new Date();
      let _0x8fc2a0 = {
        "M+": _0x145b77.getMonth() + 1,
        "d+": _0x145b77.getDate(),
        "H+": _0x145b77.getHours(),
        "m+": _0x145b77.getMinutes(),
        "s+": _0x145b77.getSeconds(),
        "q+": Math.floor((_0x145b77.getMonth() + 3) / 3),
        S: _0x145b77.getMilliseconds()
      };
      if (/(y+)/.test(_0x57088e)) {
        _0x57088e = _0x57088e.replace(RegExp.$1, (_0x145b77.getFullYear() + "").substr(4 - RegExp.$1.length));
      }
      for (let _0x3ca93b in _0x8fc2a0) if (new RegExp("(" + _0x3ca93b + ")").test(_0x57088e)) {
        _0x57088e = _0x57088e.replace(RegExp.$1, RegExp.$1.length == 1 ? _0x8fc2a0[_0x3ca93b] : ("00" + _0x8fc2a0[_0x3ca93b]).substr(("" + _0x8fc2a0[_0x3ca93b]).length));
      }
      return _0x57088e;
    }
    msg(_0x4fe9ab = _0x38f044, _0x127610 = "", _0x433a9f = "", _0x5d119f) {
      const _0x32ccaf = _0x184cff => {
        if (!_0x184cff) {
          return _0x184cff;
        }
        if (typeof _0x184cff === "string") {
          if (this.isLoon()) {
            return _0x184cff;
          } else {
            if (this.isQuanX()) {
              return {
                "open-url": _0x184cff
              };
            } else {
              if (this.isSurge()) {
                return {
                  url: _0x184cff
                };
              } else {
                return undefined;
              }
            }
          }
        } else {
          if (typeof _0x184cff === "object") {
            if (this.isLoon()) {
              let _0x37b75a = _0x184cff.openUrl || _0x184cff.url || _0x184cff["open-url"];
              let _0x119207 = _0x184cff.mediaUrl || _0x184cff["media-url"];
              return {
                openUrl: _0x37b75a,
                mediaUrl: _0x119207
              };
            } else {
              if (this.isQuanX()) {
                let _0x370cea = _0x184cff["open-url"] || _0x184cff.url || _0x184cff.openUrl;
                let _0x96239d = _0x184cff["media-url"] || _0x184cff.mediaUrl;
                return {
                  "open-url": _0x370cea,
                  "media-url": _0x96239d
                };
              } else {
                if (this.isSurge()) {
                  let _0xab0e0b = _0x184cff.url || _0x184cff.openUrl || _0x184cff["open-url"];
                  return {
                    url: _0xab0e0b
                  };
                }
              }
            }
          } else {
            return undefined;
          }
        }
      };
      if (!this.isMute) {
        if (this.isSurge() || this.isLoon()) {
          $notification.post(_0x4fe9ab, _0x127610, _0x433a9f, _0x32ccaf(_0x5d119f));
        } else {
          this.isQuanX() && $notify(_0x4fe9ab, _0x127610, _0x433a9f, _0x32ccaf(_0x5d119f));
        }
      }
      if (!this.isMuteLog) {
        let _0x2c7bc3 = ["", "==============📣系统通知📣=============="];
        _0x2c7bc3.push(_0x4fe9ab);
        _0x127610 ? _0x2c7bc3.push(_0x127610) : "";
        _0x433a9f ? _0x2c7bc3.push(_0x433a9f) : "";
        console.log(_0x2c7bc3.join("\n"));
        this.logs = this.logs.concat(_0x2c7bc3);
      }
    }
    log(..._0x4a4ac2) {
      _0x4a4ac2.length > 0 && (this.logs = [...this.logs, ..._0x4a4ac2]);
      console.log(_0x4a4ac2.join(this.logSeparator));
    }
    logErr(_0x456be7, _0x2e1d38) {
      const _0x3f202e = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      !_0x3f202e ? this.log("", "❗️" + this.name + ", 错误!", _0x456be7) : this.log("", "❗️" + this.name + ", 错误!", _0x456be7.stack);
    }
    wait(_0x13f381) {
      return new Promise(_0x5697e0 => setTimeout(_0x5697e0, _0x13f381));
    }
    done(_0x54c894 = {}) {
      const _0x4a0887 = new Date().getTime();
      const _0x2d12a7 = (_0x4a0887 - this.startTime) / 1000;
      this.log("", "🔔" + this.name + ", 结束!🕛" + _0x2d12a7 + "秒");
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(_0x54c894);
    }
  }(_0x38f044, _0xd8ff5e);
}