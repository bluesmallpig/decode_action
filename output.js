//Wed Apr 15 2026 00:55:55 GMT+0000 (Coordinated Universal Time)
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
$.isNode() && !fs.existsSync(file) && ($.log("🔔 外挂ck文件不存在，开始创建模版>>>"), fs.writeFileSync("./david_cookies.js", "//独立CK文件，主要用来处理多账号大数据量CK,注意JRTTAPP外边不用加引号，依葫芦画瓢。\n//今日头条(三个账号)\nlet JRTTAPP = [{},{},{}]\n//番茄小说(一个账号)\nlet FQXSAPP = [{}]\n//抖音极速版(两个账号)\nlet DYJSBAPP = [{},{}]\n    \nlet APPS = {\n    JRTT: JRTTAPP,\n    FQXS: FQXSAPP,\n    DYJSB: DYJSBAPP\n}\n\nmodule.exports = APPS", _0x75531c => {}));
const http = $.isNode() ? require("http") : "";
const notify = $.isNode() ? require("./sendNotify") : "";
const COOKIES = $.isNode() ? require("./david_cookies") : "";
let userId = $.getdata("tguserid") || 1;
let activeCode = $.getdata("dxxwactivecode") || 0;
let dxxwuserck = $.getval("dxxwuserck") || 1;
let apiHost = $.getval("apiHost") || "http://106.15.104.124:8080";
$.getval("apiHosts") && (apiHost = $.getval("apiHosts"));
let flushCash = $.getval("cleanCache") || false;
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
} else {
  hour = new Date().getHours();
  minute = new Date().getMinutes();
  $.log("🔔 当前环境: 手机代理, 当前时间：" + hour + "点");
}
!(async () => {
  if (typeof $request !== "undefined") {
    {
      await getCk();
    }
  } else {
    {
      if (!dxxwapp) {
        {
          $.log("📢 很抱歉，😭 没有找到账号信息！你确定配置账号信息了吗？");
          return;
        }
      }
      $.log("📢 开始检测服务器接口状态>>>");
      let _0x2ab934 = false;
      const _0x359334 = apiHost.split("&");
      const _0x3acc68 = _0x359334.length;
      for (let _0x3d87b2 = 0; _0x3d87b2 < _0x3acc68; _0x3d87b2++) {
        {
          if ($.isNode()) {
            _0x2ab934 = await checkAddress("" + _0x359334[_0x3d87b2], 2500);
          } else {
            if ($.isSurge() || $.isLoon()) {
              _0x2ab934 = await httpClientRequest("" + _0x359334[_0x3d87b2], 2500);
            } else {
              {
                _0x2ab934 = await fetchRequest("" + _0x359334[_0x3d87b2], 2500);
              }
            }
          }
          if (_0x2ab934 == true) {
            {
              apiHost = _0x359334[_0x3d87b2];
              $.log("📢 接口" + (_0x3d87b2 + 1) + "[" + _0x359334[_0x3d87b2] + "]服务器接口正常! 🎉");
              break;
            }
          }
          if (_0x3d87b2 == _0x3acc68 - 1 && _0x2ab934 == false) {
            {
              $.log("📢 抱歉，所有接口都不可用, 请前往交流群置顶获取最新的接口地址! 😭");
              $.msg($.name, "所有接口都不可用, 请尽快前往交流群置顶获取最新的接口地址!");
              return;
            }
          }
        }
      }
      if (!activeCode || !userId || userId == 1 || activeCode == 0 || activeCode.length != 32) {
        {
          $.log("❗️ 抱歉，你没有权限运行此脚本, 请关注电报机器人: https://t.me/DavidLoveBot");
          return;
        }
      }
      await getScriptAuth(appName, userId, activeCode);
      $.log("📢 " + systemNotify);
      $.log("🔔 当前脚本版本号: " + version + "，最新版本号: " + newest_version);
      if (vipDate != "") {
        {
          let _0x14ff04 = new Date(vipDate).getTime();
          let _0x50ab61 = new Date().getTime();
          if (_0x50ab61 > _0x14ff04) {
            {
              $.log("❗️ 抱歉，VIP到期了，请及时付费。");
              return;
            }
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
      if (isCharge == true) {
        {
          $.log("🔔 此脚本采用付费模式。🔒");
        }
      } else {
        {
          $.log("🔔 此脚本采用免费模式。🔓");
        }
      }
      if (vipDate != "") {
        {
          if (isCharge == true) {
            {
              $.log("🔔 尊敬的会员：您好，你是付费用户！🔐");
              let _0x3b7575 = new Date(vipDate).getTime();
              let _0x4a990b = new Date().getTime();
              if (_0x4a990b > _0x3b7575) {
                {
                  $.log("❗️ 抱歉，VIP到期了，请及时付费。");
                  return;
                }
              }
            }
          }
        }
      } else {
        {
          if (vipAuth != true) {
            {
              $.log("❗️ 抱歉，你不是付费用户, 你没有权限运行此脚本, 需要使用请查看使用说明。");
              return;
            }
          } else {
            {
              $.log("🔔 尊敬的会员：您好，你是付费用户！🔐");
            }
          }
        }
      }
      if (multiAccount > 1) {
        {
          $.log("🔔 尊敬的会员，您好！你使用的是付费多用户授权账号，一次可以运行" + numbers * multiAccount + "个账号。");
        }
      }
      if (buyCount > 1) {
        {
          $.log("🔔 尊敬的会员，您好！你使用的是付费多用户授权账号，一共可以运行" + runTotalCounts + "次, 已经运行了" + runedCounts + "次。");
        }
      }
      if (runAuth != true) {
        {
          $.log("❗️ 抱歉,  该用户今天可能已经达到最大运行次数，明天再试吧！");
          return;
        }
      }
      if (dxxwapp.length > numbers * multiAccount) {
        {
          $.log("❗️ 当前用户一次最多运行" + numbers * multiAccount + "个账号，需要增加账号请查看置顶说明。");
          return;
        }
      }
      if (dxxwapp.length == 0) {
        {
          $.log("先抓取账号ck，再运行脚本吧！");
          return;
        }
      }
      if (runedCounts + dxxwapp.length > runTotalCounts) {
        {
          $.log("📢 一共发现了" + dxxwapp.length + "个账号");
          $.log("❗️ 当前用户运行次数剩余" + (runTotalCounts - runedCounts) + "次，还可以运行" + (runTotalCounts - runedCounts) + "个账号，还需要" + (dxxwapp.length - (runTotalCounts - runedCounts)) + "次，可以通过赞赏后增加运行次数！");
          return;
        }
      }
      if (vipDate != "") {
        {
          $.log("📢 你的会员有效期到： " + vipDate);
        }
      }
      $.log("📢 一共发现了" + dxxwapp.length + "个账号");
      if ($.isNode()) {
        {
          if (!fs.existsSync(dxxw_ck_file)) {
            {
              dxxw_cks = {};
            }
          } else {
            dxxw_cks = JSON.parse(fs.readFileSync(dxxw_ck_file, "utf8"));
          }
        }
      }
      let _0xfe768a = [];
      let _0x29a934 = dxxwapp.length;
      let _0x4fff6a = 0;
      if ($.isNode() && process.env.DXXW_THREAD_COUNT) {
        _0x4fff6a = parseInt(process.env.DXXW_THREAD_COUNT);
      } else {
        {
          _0x4fff6a = _0x29a934;
        }
      }
      let _0xb29362 = dxxwapp.length;
      if (_0x4fff6a >= _0x29a934) {
        {
          _0x4fff6a = _0x29a934;
          _0xb29362 = 1;
          $.log("📢 你设置的线程数是" + _0x4fff6a + "，账号个数是" + _0x29a934 + "，" + _0xb29362 + "次可全部跑完。");
          for (let _0x1852cc = 0; _0x1852cc < dxxwapp.length; _0x1852cc++) {
            {
              _0xfe768a.push(runMultiTasks(_0x1852cc));
              dxxwlogs[_0x1852cc] = "";
              if ($.isNode()) {
                {
                  channels_status[_0x1852cc] = 0;
                  await init_ws(_0x1852cc);
                }
              } else {
                {
                  channels_status[_0x1852cc] = 1;
                }
              }
            }
          }
          await Promise.allSettled(_0xfe768a).then(_0x2ee5b5 => {
            {
              if ($.isNode() && saveFile) {
                {
                  $.log("[温馨提醒]: 即将本地化token，这样可以有效降低登录次数");
                  fs.writeFileSync(dxxw_ck_file, JSON.stringify(dxxw_cks, null, 2));
                }
              }
              $.log("日志整理功能如下：");
              $.log("---------------日志整理开始--------------");
              for (let _0xf3e39c = 0; _0xf3e39c < dxxwapp.length; _0xf3e39c++) {
                {
                  $.log(dxxwlogs[_0xf3e39c]);
                  sendlogs += dxxwlogs[_0xf3e39c];
                }
              }
              $.log("---------------日志整理结束--------------");
              sendMsg(sendlogs);
            }
          });
        }
      } else {
        {
          _0xb29362 = Math.ceil(_0x29a934 / _0x4fff6a);
          $.log("📢 你设置的线程数是" + _0x4fff6a + "，账号个数是" + _0x29a934 + "，计算后分" + _0xb29362 + "次执行，一次可执行" + _0x4fff6a + "个账号，最后一次如果不够" + _0x4fff6a + "个账号，剩多少个账号就跑几个账号。");
          for (let _0x51de8c = 0; _0x51de8c < _0xb29362; _0x51de8c++) {
            {
              for (let _0x3135a3 = _0x51de8c * _0x4fff6a; _0x3135a3 < _0x4fff6a * (_0x51de8c + 1) && _0x3135a3 < _0x29a934; _0x3135a3++) {
                _0xfe768a.push(runMultiTasks(_0x3135a3));
                dxxwlogs[_0x3135a3] = "";
                channels_status[_0x3135a3] = 0;
                await init_ws(_0x3135a3);
              }
              await Promise.allSettled(_0xfe768a).then(_0x2085d0 => {
                {
                  _0xfe768a = [];
                  if (_0x51de8c == _0xb29362 - 1) {
                    {
                      if ($.isNode() && saveFile) {
                        {
                          $.log("[温馨提醒]: 即将本地化token，这样可以有效降低登录次数");
                          fs.writeFileSync(dxxw_ck_file, JSON.stringify(dxxw_cks, null, 2));
                        }
                      }
                      $.log("日志整理功能如下：");
                      $.log("---------------日志整理开始--------------");
                      for (let _0x163754 = 0; _0x163754 < dxxwapp.length; _0x163754++) {
                        {
                          $.log(dxxwlogs[_0x163754]);
                          sendlogs += dxxwlogs[_0x163754];
                        }
                      }
                      $.log("---------------日志整理结束--------------");
                      sendMsg(sendlogs);
                    }
                  }
                }
              });
            }
          }
        }
      }
    }
  }
})().catch(_0x21d1fd => $.logErr(_0x21d1fd)).finally(() => $.done());
async function runMultiTasks(_0x31bddc) {
  return new Promise((_0x43e113, _0x2ea6bb) => {
    {
      $.log("[账号" + (_0x31bddc + 1 < 10 ? "0" + (_0x31bddc + 1) : _0x31bddc + 1) + "]: 开始执行 working......");
      runSubTask(_0x43e113, _0x31bddc);
    }
  });
}
async function init_ws(_0x6457d) {
  if ($.isNode()) {
    {
      if (reconectCounts[_0x6457d] > 0) {
        {
          $.log("[账号" + (_0x6457d + 1 < 10 ? "0" + (_0x6457d + 1) : _0x6457d + 1) + "]: 尝试重新连接服务器>>>>>>");
        }
      }
      wss[_0x6457d] = new WebSocket(apiHost.replace("http", "ws") + "/ws");
      wss[_0x6457d].on("open", function _0x5935f7() {
        {
          $.log("[账号" + (_0x6457d + 1 < 10 ? "0" + (_0x6457d + 1) : _0x6457d + 1) + "]: 签名通道已连接");
        }
      });
      wss[_0x6457d].on("close", function _0x592606() {
        $.log("[账号" + (_0x6457d + 1 < 10 ? "0" + (_0x6457d + 1) : _0x6457d + 1) + "]: 签名通道已关闭，原因是任务已处理完成");
      });
      wss[_0x6457d].on("error", function _0x3626ee() {
        {
          $.log("[账号" + (_0x6457d + 1 < 10 ? "0" + (_0x6457d + 1) : _0x6457d + 1) + "]: 签名通道已关闭，原因是出现错误");
          channels_status[_0x6457d] = 1;
          reconectCounts[_0x6457d]++;
          reconectCounts[_0x6457d] <= 3 && init_ws(_0x6457d);
        }
      });
    }
  }
}
async function runSubTask(_0x5f49e7, _0x1cff01) {
  if ($.isNode()) {
    {
      await $.wait(3000, 5000);
    }
  }
  await login(_0x1cff01);
  await userInfo(_0x1cff01);
  await getScore(_0x1cff01);
  await autoLoginRedirectUrl(_0x1cff01);
  await dailySignInfo(_0x1cff01);
  if ($.isNode()) {
    {
      await wss[_0x1cff01].close();
    }
  }
  await runComplete(appName, userId);
  _0x5f49e7();
}
async function getCk() {
  if ($request.url.match(/\/passport\/UnionLogin/)) {
    {
      const _0x122e9a = $request.body;
      let _0xa80557 = dxxwuserck - 1;
      if (dxxwapp[_0xa80557]) {
        dxxwapp[_0xa80557].token_body = _0x122e9a;
      } else {
        {
          const _0x315b27 = {
            token_body: _0x122e9a
          };
          dxxwapp[_0xa80557] = _0x315b27;
        }
      }
      $.setdata(JSON.stringify(dxxwapp, null, 2), "dxxwapp");
      $.msg($.name, "快音账号" + (_0xa80557 + 1) + "Token获取成功！🎉");
    }
  }
}
async function login(_0x475e94) {
  const _0x4d084c = "https://pubmod.hntv.tv/mobile/uaa-app/oauth/token";
  const _0x21c813 = new Base64();
  let _0x205e94 = _0x21c813.encode("em" + encodeURIComponent(_0x21c813.encode(dxxwapp[_0x475e94].password)));
  let _0xcb3387 = "grant_type=password&username=%7B%22principal%22%3A%22" + dxxwapp[_0x475e94].mobile + "%22%2C%22authenticationType%22%3A%22mobile%22%7D&password=" + _0x205e94;
  await getReqObject(_0x4d084c, _0xcb3387, _0x475e94);
  await httpRequest("post", requestObjects[_0x475e94], printCaller());
  let _0x391e07 = httpResult;
  if (_0x391e07 != null) {
    dxxwapp[_0x475e94].accessToken = _0x391e07.access_token;
    dxxwapp[_0x475e94].refreshToken = _0x391e07.refresh_token;
  } else {
    {
      $.log("[账号" + (_0x475e94 + 1 < 10 ? "0" + (_0x475e94 + 1) : _0x475e94 + 1) + "]: 登录=> 登录失败");
      dxxwlogs[_0x475e94] += "[账号" + (_0x475e94 + 1 < 10 ? "0" + (_0x475e94 + 1) : _0x475e94 + 1) + "]: 登录=> 登录失败\n";
    }
  }
}
async function userInfo(_0x1f7ac3) {
  const _0x3302e0 = "https://dxnum.hntv.tv/dxnum/app/getUserInfo";
  let _0x4a000d = "";
  await getReqObject(_0x3302e0, _0x4a000d, _0x1f7ac3);
  await httpRequest("get", requestObjects[_0x1f7ac3], printCaller());
  let _0x5b8eb7 = httpResult;
  if (_0x5b8eb7 != null && _0x5b8eb7.code == 0) {
    {
      $.log("[账号" + (_0x1f7ac3 + 1 < 10 ? "0" + (_0x1f7ac3 + 1) : _0x1f7ac3 + 1) + "]: 用户名=> " + _0x5b8eb7.result[0].nickname);
      dxxwlogs[_0x1f7ac3] += "[账号" + (_0x1f7ac3 + 1 < 10 ? "0" + (_0x1f7ac3 + 1) : _0x1f7ac3 + 1) + "]: 用户名=> " + _0x5b8eb7.result[0].nickname + "\n";
      $.log("[账号" + (_0x1f7ac3 + 1 < 10 ? "0" + (_0x1f7ac3 + 1) : _0x1f7ac3 + 1) + "]: 手机号=> " + _0x5b8eb7.result[0].mobile);
      dxxwlogs[_0x1f7ac3] += "[账号" + (_0x1f7ac3 + 1 < 10 ? "0" + (_0x1f7ac3 + 1) : _0x1f7ac3 + 1) + "]: 手机号=> " + _0x5b8eb7.result[0].mobile + "\n";
    }
  } else {
    $.log("[账号" + (_0x1f7ac3 + 1 < 10 ? "0" + (_0x1f7ac3 + 1) : _0x1f7ac3 + 1) + "]: 用户信息=> " + _0x5b8eb7?.["msg"]);
    dxxwlogs[_0x1f7ac3] += "[账号" + (_0x1f7ac3 + 1 < 10 ? "0" + (_0x1f7ac3 + 1) : _0x1f7ac3 + 1) + "]: 用户信息=> " + _0x5b8eb7?.["msg"] + "\n";
    await login(_0x1f7ac3);
  }
}
async function getScore(_0x59945b) {
  const _0x1600ba = "https://integration.hntv.tv/integration/user/integration/info/";
  let _0x335355 = "";
  await getReqObject(_0x1600ba, _0x335355, _0x59945b);
  requestObjects[_0x59945b].headers["User-Agent"] = "Mozilla/5.0 (Linux; Android 8.1.0; Pixel Build/OPM4.171019.021.P1; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/121.0.6167.164 Mobile Safari/537.36 dxpayua";
  await httpRequest("get", requestObjects[_0x59945b], printCaller());
  let _0x47465b = httpResult;
  if (_0x47465b != null && _0x47465b.code == 0) {
    {
      $.log("[账号" + (_0x59945b + 1 < 10 ? "0" + (_0x59945b + 1) : _0x59945b + 1) + "]: 积分=> " + _0x47465b.result.haveScore);
    }
  }
}
async function autoLoginRedirectUrl(_0x4cb7a3) {
  const _0x15058e = "https://integration.hntv.tv/integration/p/duiba/autoLoginUrl?dbredirect=https:%2F%2F90580-activity.dexfu.cn%2Fsign%2Fcomponent%2Fpage%3FsignOperatingId%3D327411516979156";
  let _0x3c12e3 = "";
  await getReqObject(_0x15058e, _0x3c12e3, _0x4cb7a3);
  requestObjects[_0x4cb7a3].headers["User-Agent"] = "Mozilla/5.0 (Linux; Android 8.1.0; Pixel Build/OPM4.171019.021.P1; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/121.0.6167.164 Mobile Safari/537.36 dxpayua";
  await httpRequest("get", requestObjects[_0x4cb7a3], printCaller());
  let _0x3b090b = httpResult;
  if (_0x3b090b != null && _0x3b090b.code == 0) {
    {
      let _0x205626 = _0x3b090b.result;
      await autoLogin(_0x4cb7a3, _0x205626);
    }
  } else {
    {
      $.log("[账号" + (_0x4cb7a3 + 1 < 10 ? "0" + (_0x4cb7a3 + 1) : _0x4cb7a3 + 1) + "]: 活动跳转=> " + _0x3b090b.msg);
      dxxwlogs[_0x4cb7a3] += "[账号" + (_0x4cb7a3 + 1 < 10 ? "0" + (_0x4cb7a3 + 1) : _0x4cb7a3 + 1) + "]: 活动跳转=> " + _0x3b090b.msg + "\n";
    }
  }
}
async function autoLogin(_0x6d5c37, _0xc90a3d) {
  requestObjects[_0x6d5c37] = duibaRequestOption(_0x6d5c37, _0xc90a3d, "");
  await httpRequest("get", requestObjects[_0x6d5c37], printCaller());
  let _0x5abfcb = httpResult;
  if (_0x5abfcb != null) {
    {
      let _0x337da5 = [];
      for (let _0x5e737b = 0; _0x5e737b < _0x5abfcb.length; _0x5e737b++) {
        {
          if (_0x5e737b < 7) {
            {
              let _0x40e912 = _0x5abfcb[_0x5e737b].split(";")[0];
              _0x337da5.push(_0x40e912);
            }
          }
        }
      }
      let _0x547c62 = _0x337da5.join(";");
      dxxwapp[_0x6d5c37].duiba_cookie = _0x547c62;
    }
  } else {
    $.log("[账号" + (_0x6d5c37 + 1 < 10 ? "0" + (_0x6d5c37 + 1) : _0x6d5c37 + 1) + "]: 活动跳转=> " + _0x5abfcb.desc);
    dxxwlogs[_0x6d5c37] += "[账号" + (_0x6d5c37 + 1 < 10 ? "0" + (_0x6d5c37 + 1) : _0x6d5c37 + 1) + "]: 活动跳转=> " + _0x5abfcb.desc + "\n";
  }
}
async function dailySignInfo(_0x46e5e9) {
  requestObjects[_0x46e5e9] = duibaRequestOption(_0x46e5e9, "/sign/component/index?signOperatingId=327411516979156&preview=false&", "");
  await httpRequest("get", requestObjects[_0x46e5e9], printCaller());
  let _0x16bd63 = httpResult;
  if (_0x16bd63 != null && _0x16bd63.success == true) {
    {
      if (_0x16bd63.data.signResult == false) {
        {
          await signKeyGet_new(_0x46e5e9);
        }
      }
      if (_0x16bd63.data.times > 0) {
        {
          await signLotteryKeyGet(_0x46e5e9);
          await $.wait(helpUtils.randomNum(3000, 5000));
        }
      }
    }
  } else {
    $.log("[账号" + (_0x46e5e9 + 1 < 10 ? "0" + (_0x46e5e9 + 1) : _0x46e5e9 + 1) + "]: 签到信息=> " + _0x16bd63.desc);
    dxxwlogs[_0x46e5e9] += "[账号" + (_0x46e5e9 + 1 < 10 ? "0" + (_0x46e5e9 + 1) : _0x46e5e9 + 1) + "]: 签到信息=> " + _0x16bd63.desc + "\n";
  }
}
async function signKeyGet_new(_0x389173) {
  requestObjects[_0x389173] = duibaRequestOption(_0x389173, "/sign/component/page?signOperatingId=327411516979156", "");
  requestObjects[_0x389173].headers.Accept = "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7";
  await httpRequest("get", requestObjects[_0x389173], printCaller());
  let _0x41f8f8 = httpResult;
  if (_0x41f8f8 != null) {
    {
      let _0x16c74f = /<script type="text\/javascript">\s*\/\*\s*\*\s*获取token\s*\*\/\s*[\s\S]*?<\/script>/.exec(_0x41f8f8)[0];
      let _0x43b3aa = _0x16c74f.replace("<script type=\"text/javascript\">", "");
      _0x43b3aa = _0x43b3aa.replace("</script>", "");
      eval(_0x43b3aa);
      let _0x54018b = /var\s+key\s+=\s+'([^']+)';/.exec(getDuibaToken.toString())[1];
      await getSignToken_new(_0x389173, _0x54018b);
    }
  } else {
    $.log("[账号" + (_0x389173 + 1 < 10 ? "0" + (_0x389173 + 1) : _0x389173 + 1) + "]: 获取key=> " + _0x41f8f8.desc);
    dxxwlogs[_0x389173] += "[账号" + (_0x389173 + 1 < 10 ? "0" + (_0x389173 + 1) : _0x389173 + 1) + "]: 获取key=> " + _0x41f8f8.desc + "\n";
  }
}
async function getSignToken_new(_0x4d820e, _0x341cd6) {
  let _0x12ae1a = helpUtils.ts13();
  requestObjects[_0x4d820e] = duibaRequestOption(_0x4d820e, "/chw/ctoken/getToken", "timestamp=" + _0x12ae1a, "https://90580-activity.dexfu.cn/sign/component/page?signOperatingId=327411516979156");
  requestObjects[_0x4d820e].headers["Content-Type"] = "application/x-www-form-urlencoded";
  await httpRequest("post", requestObjects[_0x4d820e], printCaller());
  let _0x12fa53 = httpResult;
  if (_0x12fa53 != null && _0x12fa53.success == true) {
    {
      eval(_0x12fa53.token);
      let _0x2cab64 = window[_0x341cd6];
      await doSign(_0x4d820e, _0x2cab64);
    }
  } else {
    {
      $.log("[账号" + (_0x4d820e + 1 < 10 ? "0" + (_0x4d820e + 1) : _0x4d820e + 1) + "]: 获取token=> 失败");
      dxxwlogs[_0x4d820e] += "[账号" + (_0x4d820e + 1 < 10 ? "0" + (_0x4d820e + 1) : _0x4d820e + 1) + "]: 获取token=> 失败\n";
    }
  }
}
async function signLotteryKeyGet(_0x532e6a) {
  requestObjects[_0x532e6a] = duibaRequestOption(_0x532e6a, "/sign/component/page?signOperatingId=327411516979156", "");
  requestObjects[_0x532e6a].headers.Accept = "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7";
  await httpRequest("get", requestObjects[_0x532e6a], printCaller());
  let _0xc5ca12 = httpResult;
  if (_0xc5ca12 != null) {
    {
      let _0x373454 = /<script type="text\/javascript">\s*\/\*\s*\*\s*获取token\s*\*\/\s*[\s\S]*?<\/script>/.exec(_0xc5ca12)[0];
      let _0x3467c0 = _0x373454.replace("<script type=\"text/javascript\">", "");
      _0x3467c0 = _0x3467c0.replace("</script>", "");
      eval(_0x3467c0);
      let _0x39676b = /var\s+key\s+=\s+'([^']+)';/.exec(getDuibaToken.toString())[1];
      await getSignLotteryToken(_0x532e6a, _0x39676b);
    }
  } else {
    $.log("[账号" + (_0x532e6a + 1 < 10 ? "0" + (_0x532e6a + 1) : _0x532e6a + 1) + "]: 获取key=> " + _0xc5ca12.desc);
    dxxwlogs[_0x532e6a] += "[账号" + (_0x532e6a + 1 < 10 ? "0" + (_0x532e6a + 1) : _0x532e6a + 1) + "]: 获取key=> " + _0xc5ca12.desc + "\n";
  }
}
async function getSignLotteryToken(_0x544f33, _0x3d7820) {
  let _0x1e8fea = helpUtils.ts13();
  requestObjects[_0x544f33] = duibaRequestOption(_0x544f33, "/chw/ctoken/getToken", "timestamp=" + _0x1e8fea, "https://90580-activity.dexfu.cn/sign/component/page?signOperatingId=327411516979156");
  requestObjects[_0x544f33].headers["Content-Type"] = "application/x-www-form-urlencoded";
  await httpRequest("post", requestObjects[_0x544f33], printCaller());
  let _0x509975 = httpResult;
  if (_0x509975 != null && _0x509975.success == true) {
    {
      eval(_0x509975.token);
      let _0x14413b = window[_0x3d7820];
      await doLottery(_0x544f33, _0x14413b);
    }
  } else {
    {
      $.log("[账号" + (_0x544f33 + 1 < 10 ? "0" + (_0x544f33 + 1) : _0x544f33 + 1) + "]: 获取token=> 失败");
      dxxwlogs[_0x544f33] += "[账号" + (_0x544f33 + 1 < 10 ? "0" + (_0x544f33 + 1) : _0x544f33 + 1) + "]: 获取token=> 失败\n";
    }
  }
}
async function doLottery(_0x2bd9e4, _0x5401cf) {
  requestObjects[_0x2bd9e4] = duibaRequestOption(_0x2bd9e4, "/sign/component/doJoin?", "signOperatingId=327411516979156&token=" + _0x5401cf);
  requestObjects[_0x2bd9e4].headers["Content-Type"] = "application/x-www-form-urlencoded";
  await httpRequest("post", requestObjects[_0x2bd9e4], printCaller());
  let _0x45f184 = httpResult;
  if (_0x45f184 != null && _0x45f184.success == true) {
    {
      let _0x2c041a = _0x45f184.data.orderNum;
      await getSignLotteryStatus(_0x2bd9e4, _0x2c041a);
    }
  } else {
    {
      $.log("[账号" + (_0x2bd9e4 + 1 < 10 ? "0" + (_0x2bd9e4 + 1) : _0x2bd9e4 + 1) + "]: 签到结果=> " + _0x45f184.desc);
      dxxwlogs[_0x2bd9e4] += "[账号" + (_0x2bd9e4 + 1 < 10 ? "0" + (_0x2bd9e4 + 1) : _0x2bd9e4 + 1) + "]: 签到结果=> " + _0x45f184.desc + "\n";
    }
  }
}
async function getSignLotteryStatus(_0x458f32, _0x14e39b) {
  requestObjects[_0x458f32] = duibaRequestOption(_0x458f32, "/plugin/getOrderStatus?orderId=" + _0x14e39b + "&", "");
  await httpRequest("get", requestObjects[_0x458f32], printCaller());
  let _0x5a9f26 = httpResult;
  if (_0x5a9f26 != null && _0x5a9f26.success == true) {
    {
      $.log("[账号" + (_0x458f32 + 1 < 10 ? "0" + (_0x458f32 + 1) : _0x458f32 + 1) + "]: 转盘结果=> " + JSON.stringify(_0x5a9f26.lottery));
      if (_0x5a9f26.lottery.type != "thanks") {
        {
          await wxPush(_0x458f32, dxxwapp[_0x458f32].mobile + "-中奖提醒(" + _0x5a9f26.lottery.type + ")", MSG_UID);
        }
      }
    }
  } else {
    $.log("[账号" + (_0x458f32 + 1 < 10 ? "0" + (_0x458f32 + 1) : _0x458f32 + 1) + "]: 转盘结果=> 失败");
    dxxwlogs[_0x458f32] += "[账号" + (_0x458f32 + 1 < 10 ? "0" + (_0x458f32 + 1) : _0x458f32 + 1) + "]: 转盘结果=> 失败\n";
  }
}
async function doSign(_0x5b6263, _0x2fcb23) {
  requestObjects[_0x5b6263] = duibaRequestOption(_0x5b6263, "/sign/component/doSign?", "signOperatingId=327411516979156&token=" + _0x2fcb23);
  requestObjects[_0x5b6263].headers["Content-Type"] = "application/x-www-form-urlencoded";
  await httpRequest("post", requestObjects[_0x5b6263], printCaller());
  let _0x33b64d = httpResult;
  if (_0x33b64d != null && _0x33b64d.success == true) {
    {
      $.log("[账号" + (_0x5b6263 + 1 < 10 ? "0" + (_0x5b6263 + 1) : _0x5b6263 + 1) + "]: 签到结果=> 成功获得" + _0x33b64d.data.signResult / 20 + "积分");
      dxxwlogs[_0x5b6263] += "[账号" + (_0x5b6263 + 1 < 10 ? "0" + (_0x5b6263 + 1) : _0x5b6263 + 1) + "]: 签到结果=> 成功获得" + _0x33b64d.data.signResult / 20 + "积分\n";
    }
  } else {
    {
      $.log("[账号" + (_0x5b6263 + 1 < 10 ? "0" + (_0x5b6263 + 1) : _0x5b6263 + 1) + "]: 签到结果=> " + _0x33b64d.desc);
      dxxwlogs[_0x5b6263] += "[账号" + (_0x5b6263 + 1 < 10 ? "0" + (_0x5b6263 + 1) : _0x5b6263 + 1) + "]: 签到结果=> " + _0x33b64d.desc + "\n";
    }
  }
}
function duibaRequestOption(_0x4d594d, _0x11b53b, _0x31c240, _0x8e0bb2) {
  let _0x53651e = helpUtils.ts13();
  let _0x547516 = _0x11b53b.indexOf("duiba.com") != -1 ? _0x11b53b : !_0x11b53b.endsWith("?") && !_0x11b53b.endsWith("&") ? "https://90580-activity.dexfu.cn" + _0x11b53b : "https://90580-activity.dexfu.cn" + _0x11b53b + "_=" + _0x53651e;
  let _0x3ee8ae = {
    Host: "90580-activity.dexfu.cn",
    "Content-Type": "application/json",
    "User-Agent": "Mozilla/5.0 (Linux; Android 12; 22081212C Build/SKQ1.220303.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/126.0.6478.186 Mobile Safari/537.36 dxpayua"
  };
  let _0x1bb741 = {
    url: _0x547516,
    headers: _0x3ee8ae
  };
  if (_0x31c240 != "") {
    {
      _0x1bb741.body = _0x31c240;
    }
  }
  dxxwapp[_0x4d594d].duiba_cookie && (_0x1bb741.headers.Cookie = dxxwapp[_0x4d594d].duiba_cookie);
  if (_0x8e0bb2) {
    {
      _0x1bb741.headers.Referer = _0x8e0bb2;
    }
  }
  return _0x1bb741;
}
function getScriptAuth(_0x68a2b6, _0x29c6f, _0x459290) {
  return new Promise((_0x5604b3, _0x2c2fb6) => {
    {
      const _0x9fdda4 = apiHost + "/script/permissions/lastest";
      const _0x546875 = {
        appName: _0x68a2b6,
        userId: _0x29c6f,
        activityCode: _0x459290,
        version: version
      };
      const _0x59f2fc = {
        "Content-Type": "application/json",
        accept: "application/json"
      };
      const _0x1d09c3 = {
        url: _0x9fdda4,
        headers: _0x59f2fc,
        body: JSON.stringify(_0x546875)
      };
      $.post(_0x1d09c3, async (_0x33a650, _0x478b58, _0x3f49cd) => {
        {
          if (_0x3f49cd && _0x3f49cd != null && _0x3f49cd.replace(/\"/g, "").length > 50) {
            {
              const _0x32e193 = _0x3f49cd.replace(/\"/g, "").slice(34);
              helpUtils = await loadUtils(flushCash);
              CryptoJS = helpUtils.createCryptoJS();
              result = JSON.parse(CryptoJS.enc.Base64.parse(_0x32e193).toString(CryptoJS.enc.Utf8));
              try {
                {
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
                }
              } catch (_0x7cb60c) {
                {
                  $.log(_0x7cb60c);
                }
              }
            }
          } else {
            {
              $.log("请求服务器接口出现错误，请检查网络连接情况");
            }
          }
          _0x5604b3();
        }
      });
    }
  });
}
function runComplete(_0x440609, _0x41b50c) {
  return new Promise((_0x23951b, _0x1d014d) => {
    {
      const _0x50fe46 = apiHost + "/script/run/add";
      const _0x785a1e = {
        appName: _0x440609,
        userId: _0x41b50c,
        activityCode: activeCode,
        version: version
      };
      const _0x5f4f68 = {
        "Content-Type": "application/json",
        accept: "application/json"
      };
      const _0x512668 = {
        url: _0x50fe46,
        headers: _0x5f4f68,
        body: JSON.stringify(_0x785a1e)
      };
      $.post(_0x512668, async (_0x5baf9f, _0x3dab88, _0x52dc63) => {
        {
          _0x23951b();
        }
      });
    }
  });
}
function loadToken(_0x5a2b77) {
  let _0x47134c = dxxwapp[_0x5a2b77].mobile;
  dxxw_item = dxxw_cks["" + _0x47134c];
  if (dxxw_item) {
    {
      dxxwapp[_0x5a2b77].refreshToken = dxxw_item.refreshToken;
      dxxwapp[_0x5a2b77].accessToken = dxxw_item.accessToken;
      return true;
    }
  } else {
    {
      return false;
    }
  }
}
function saveToken(_0x42d39f) {
  dxxw_cks[dxxwapp[_0x42d39f].mobile] = {
    refreshToken: dxxwapp[_0x42d39f].refreshToken,
    accessToken: dxxwapp[_0x42d39f].accessToken,
    ts: ts13()
  };
}
async function loadUtils(_0x95858f) {
  let _0x1fa546 = $.getdata("Utils_Code") || "";
  if (!_0x95858f && _0x1fa546 && Object.keys(_0x1fa546).length) {
    {
      $.log("📢 缓存中存在JS-Utils");
      eval(_0x1fa546);
      return creatUtils();
    }
  }
  $.log("📢 开始初始化JS-Utils");
  return new Promise(async _0x5d7408 => {
    $.getScript("http://script.david2024.top/scripts/tools/JS-Utils.js").then(_0x2b8853 => {
      {
        $.setdata(_0x2b8853, "Utils_Code");
        eval(_0x2b8853);
        $.log("📢 JS-Utils加载成功");
        _0x5d7408(creatUtils());
      }
    });
  });
}
function checkAddress(_0x59ba32, _0x332a56) {
  return new Promise((_0x1a606d, _0x14c892) => {
    {
      const _0x10831d = setTimeout(() => {
        {
          _0x1a606d(false);
        }
      }, _0x332a56);
      const _0x495f63 = http.get(_0x59ba32, _0x3f2e12 => {
        {
          clearTimeout(_0x10831d);
          if (_0x3f2e12.statusCode === 404) {
            _0x1a606d(true);
          } else {
            {
              _0x1a606d(false);
            }
          }
        }
      });
      _0x495f63.on("error", _0x3a8f3c => {
        {
          clearTimeout(_0x10831d);
          _0x1a606d(false);
        }
      });
      _0x495f63.on("timeout", () => {
        {
          _0x495f63.abort();
          _0x14c892(new Error("请求超时"));
        }
      });
    }
  });
}
async function fetchRequest(_0x52a811, _0x3b31c4 = 3000) {
  return new Promise((_0x13f5a8, _0x3aaaa3) => {
    {
      const _0x505f22 = {
        url: _0x52a811 + "/docs"
      };
      setTimeout(() => {
        _0x13f5a8(false);
      }, _0x3b31c4);
      $.get(_0x505f22, async (_0x535da3, _0x2145bb, _0x258586) => {
        {
          if (_0x2145bb.status == 401) {
            {
              _0x13f5a8(true);
            }
          } else {
            {
              _0x13f5a8(false);
            }
          }
        }
      });
    }
  });
}
async function httpClientRequest(_0x56f1e0, _0x5e969e = 3000) {
  return new Promise((_0xa91530, _0x5b691d) => {
    {
      const _0x5ccfc7 = {
        url: _0x56f1e0 + "/"
      };
      setTimeout(() => {
        _0xa91530(false);
      }, _0x5e969e);
      $httpClient.get(_0x5ccfc7, async (_0xb05347, _0xc9a53, _0x192dc3) => {
        {
          if (_0x192dc3 == "{\"detail\":\"Not Found\"}") {
            {
              _0xa91530(true);
            }
          } else {
            _0xa91530(false);
          }
        }
      });
    }
  });
}
function redisGet(_0x4eeb38, _0x322d45, _0x3def63) {
  return new Promise((_0x1ac1f4, _0x111a5f) => {
    {
      const _0x4d516f = apiHost + "/redis/hash/get/" + _0x322d45 + "/" + _0x3def63;
      const _0x53af7c = {
        "Content-Type": "application/json",
        accept: "application/json"
      };
      const _0x1a1e0f = {
        url: _0x4d516f,
        headers: _0x53af7c
      };
      $.get(_0x1a1e0f, async (_0x47977b, _0x678102, _0x123bac) => {
        {
          const _0x28a97d = _0x123bac.replace(/\"/g, "");
          answerTexts[_0x4eeb38] = _0x28a97d;
          _0x1ac1f4();
          return _0x28a97d;
        }
      });
    }
  });
}
function redisSet(_0x14ade9, _0x18573e, _0x1a661d) {
  return new Promise((_0x20504c, _0x3f6680) => {
    {
      const _0x4a80c5 = apiHost + "/redis/hash/set";
      const _0x459e5e = {
        key: _0x14ade9,
        hashKey: _0x18573e,
        hashValue: _0x1a661d
      };
      const _0x30dc46 = {
        "Content-Type": "application/json",
        accept: "application/json"
      };
      const _0x190407 = {
        url: _0x4a80c5,
        headers: _0x30dc46,
        body: JSON.stringify(_0x459e5e)
      };
      $.post(_0x190407, async (_0x8253a1, _0x5d751b, _0x1aaf1d) => {
        {
          const _0x438455 = _0x1aaf1d.replace(/\"/g, "");
          _0x20504c();
        }
      });
    }
  });
}
function redisPop(_0x326b94) {
  return new Promise((_0xe78fac, _0x4c4da3) => {
    {
      const _0x16b9a6 = apiHost + "/redis/set/pop/" + _0x326b94;
      const _0x5a248d = {
        "Content-Type": "application/json",
        accept: "application/json"
      };
      const _0x1d29c7 = {
        url: _0x16b9a6,
        headers: _0x5a248d
      };
      $.get(_0x1d29c7, async (_0x5b06f6, _0x462c54, _0x1fb978) => {
        {
          const _0x3b8fe9 = _0x1fb978.replace(/\"/g, "");
          popCookie = _0x3b8fe9;
          _0xe78fac();
        }
      });
    }
  });
}
async function getReqObject(_0x4f02ee, _0xbed426, _0x562d29) {
  let _0x3f9287 = "Mozilla/5.0 (Linux; Android 12; 22081212C Build/SKQ1.220303.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/126.0.6478.186 Mobile Safari/537.36 dxpayua";
  if (dxxwapp[_0x562d29].ua && dxxwapp[_0x562d29].ua != "") {
    {
      _0x3f9287 = dxxwapp[_0x562d29].ua;
    }
  }
  let _0x3b0e97 = getHostname(_0x4f02ee);
  const _0x22346f = {
    "Content-Type": "application/x-www-form-urlencoded",
    "User-Agent": _0x3f9287,
    Host: _0x3b0e97
  };
  let _0x287207 = {
    url: _0x4f02ee,
    headers: _0x22346f
  };
  _0x3b0e97 != "pubmod.hntv.tv" && (_0x287207.headers.Authorization = "Bearer " + dxxwapp[_0x562d29].accessToken);
  if (_0xbed426) {
    {
      _0x287207.body = _0xbed426;
    }
  }
  requestObjects[_0x562d29] = _0x287207;
  return _0x287207;
}
function getReqObject_(_0x17a04f, _0x54820d, _0x55447d) {
  let _0x6159e1 = "Mozilla/5.0 (iPhone; CPU iPhone OS 16_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.31(0x18001f34) NetType/WIFI Language/zh_CN";
  if (dxxwapp[_0x55447d].ua && dxxwapp[_0x55447d].ua != "") {
    {
      _0x6159e1 = dxxwapp[_0x55447d].ua;
    }
  }
  let _0x1eb280 = getHostname(_0x17a04f);
  const _0x556b78 = {
    "Content-Type": "application/x-www-form-urlencoded",
    "User-Agent": _0x6159e1,
    Authorization: dxxwapp[_0x55447d].auth,
    Host: _0x1eb280
  };
  let _0x56f705 = {
    url: _0x17a04f,
    headers: _0x556b78
  };
  _0x54820d && (_0x56f705.body = _0x54820d);
  requestObjects[_0x55447d] = _0x56f705;
  return _0x56f705;
}
async function httpRequest(_0x580fab, _0x5a7581, _0x4bd8f4) {
  httpResult = null;
  return new Promise(_0x460449 => {
    {
      $[_0x580fab](_0x5a7581, async (_0x4fd899, _0x128ea7, _0x1d09f1) => {
        {
          try {
            {
              if (_0x5a7581.url.includes("cn/autoLogin/autologin")) {
                {
                  httpResult = _0x128ea7.headers["set-cookie"];
                  return;
                }
              } else {
                if (_0x5a7581.url.includes("/hdtool/index") || _0x5a7581.url.includes("/visual-editor/skins") || _0x5a7581.url.includes("/sign/component/page?") || _0x5a7581.url.includes("/activity/takePrizeNew") || _0x5a7581.url.includes("/superSurprise/index")) {
                  {
                    httpResult = _0x1d09f1;
                    return;
                  }
                }
              }
              if (_0x4fd899) {
                $.log(_0x4bd8f4 + ": " + _0x580fab + "请求失败");
                $.log(JSON.stringify(_0x4fd899));
                $.logErr(_0x4fd899);
              } else {
                {
                  if (safeGet(_0x1d09f1)) {
                    {
                      httpResult = JSON.parse(_0x1d09f1);
                    }
                  } else {
                    {
                      const _0x47e121 = new URL(_0x5a7581.url);
                      $.log(_0x47e121.pathname + "发起" + _0x580fab + "请求时，出现错误，请处理");
                    }
                  }
                }
              }
            }
          } catch (_0x455244) {
            $.logErr(_0x455244, _0x128ea7);
          } finally {
            _0x460449(httpResult);
          }
        }
      });
    }
  });
}
async function selectChannel(_0x1d1781, _0x11d399) {
  if (channels_status[_0x1d1781] == 0) {
    {
      await getSign_(_0x1d1781, _0x11d399);
    }
  } else {
    {
      await getSign(_0x1d1781, _0x11d399);
    }
  }
}
function getSign_(_0x3984f7, _0x208941) {
  return new Promise((_0x1ddf3c, _0xc596f3) => {
    {
      function _0x5e0586(_0x27c232) {
        {
          let _0x5cdfea = _0x27c232.toString("utf8");
          requestSigns[_0x3984f7] = _0x5cdfea;
          wss[_0x3984f7].removeListener("message", _0x5e0586);
          _0x1ddf3c(_0x5cdfea);
        }
      }
      wss[_0x3984f7].on("message", _0x5e0586);
      if (wss[_0x3984f7].readyState === 1) {
        {
          const _0x395659 = {
            method: appName,
            params: {}
          };
          _0x395659.params.content = _0x208941;
          _0x395659.params.appName = appName;
          _0x395659.params.uuid = userId;
          wss[_0x3984f7].send(JSON.stringify(_0x395659), _0x4c4510 => {
            {
              if (_0x4c4510) {
                {
                  _0xc596f3(_0x4c4510);
                }
              }
            }
          });
        }
      } else {
        {
          _0x1ddf3c(getSign(_0x3984f7, _0x208941));
          wss[_0x3984f7].removeListener("message", _0x5e0586);
        }
      }
    }
  });
}
function getSign(_0x200574, _0x159629) {
  return new Promise((_0x33284d, _0x788886) => {
    {
      const _0x47e274 = apiHost + "/sign/dxxw";
      const _0x5aefff = {
        content: _0x159629,
        appName: appName,
        uuid: userId
      };
      const _0x3d5e40 = {
        "Content-Type": "application/json",
        accept: "application/json"
      };
      const _0xea5c50 = {
        url: _0x47e274,
        headers: _0x3d5e40,
        body: JSON.stringify(_0x5aefff)
      };
      $.post(_0xea5c50, async (_0x3cac97, _0x245730, _0x37604b) => {
        {
          const _0x4ef63e = _0x37604b.replace(/\"/g, "");
          requestSigns[_0x200574] = _0x4ef63e;
          _0x33284d();
        }
      });
    }
  });
}
function getAnswer(_0x184354, _0x1db4a5) {
  return new Promise((_0x4b7582, _0x5bbe68) => {
    {
      const _0x3b2244 = apiHost + "/chat/deepseek";
      const _0x5435b6 = {
        keywords: _0x1db4a5,
        uuid: userId
      };
      const _0x5d9b22 = {
        "Content-Type": "application/json",
        accept: "application/json"
      };
      const _0x81e9f9 = {
        url: _0x3b2244,
        headers: _0x5d9b22,
        body: JSON.stringify(_0x5435b6)
      };
      $.post(_0x81e9f9, async (_0x5ae562, _0xfbe525, _0x28fb81) => {
        {
          const _0x56a695 = _0x28fb81.replace(/\"/g, "");
          requestSigns[_0x184354] = _0x56a695;
          _0x4b7582();
        }
      });
    }
  });
}
function sortUrlParams(_0x3ca96f, _0xbfc2f2, _0x1f5c29) {
  const _0x5c4c48 = url2obj(_0x3ca96f);
  _0xbfc2f2.forEach(_0x5788b5 => {
    {
      delete _0x5c4c48[_0x5788b5];
    }
  });
  Object.assign(_0x5c4c48, _0x1f5c29);
  const _0x9ceac0 = Object.keys(_0x5c4c48).sort();
  const _0x66bc7e = _0x9ceac0.map(_0x4f9f04 => _0x4f9f04 + "=" + _0x5c4c48[_0x4f9f04]).join("&");
  return _0x66bc7e;
}
function url2obj(_0x147475) {
  _0x147475 = _0x147475.replace(/\"/g, "");
  var _0x2bcb9c;
  var _0x2bbf83 = {};
  var _0xc5bf6e = _0x147475.slice(_0x147475.indexOf("?") + 1).split("&");
  for (var _0x3e10bc = 0; _0x3e10bc < _0xc5bf6e.length; _0x3e10bc++) {
    _0x2bcb9c = _0xc5bf6e[_0x3e10bc].split("=");
    _0x2bbf83[_0x2bcb9c[0]] = _0x2bcb9c[1];
  }
  return _0x2bbf83;
}
function convertStringToJson(_0x513697) {
  const _0xe8cdb7 = _0x513697.replace(/[{} ]/g, "");
  const _0x373638 = _0xe8cdb7.split(",");
  const _0x44466c = {};
  _0x373638.forEach(_0xc6cc8d => {
    {
      const [_0x307d12, _0x3eba45] = _0xc6cc8d.split("=");
      _0x44466c[_0x307d12] = _0x3eba45;
    }
  });
  return _0x44466c;
}
function getHostname(_0x417292) {
  let _0x266f36 = _0x417292.substr(_0x417292.indexOf("//") + 2);
  let _0x4926ef = _0x266f36.substr(0, _0x266f36.indexOf("/"));
  let _0x4f067b = "";
  let _0x4fad00 = _0x4926ef.indexOf(":");
  if (_0x4fad00 > 0) {
    {
      _0x4f067b = _0x4926ef.substr(0, _0x4fad00);
    }
  } else {
    {
      _0x4f067b = _0x4926ef;
    }
  }
  return _0x4f067b;
}
function calculateTimeDifference(_0xad2934, _0x19665e) {
  var _0x1a6b3a = new Date(_0xad2934);
  var _0x211678 = new Date(_0x19665e);
  var _0x247318 = _0x211678 - _0x1a6b3a;
  var _0x50058b = Math.floor(_0x247318 / 1000);
  return _0x50058b;
}
function cutString(_0x3c66ca, _0x8c5025) {
  if (_0x3c66ca.length * 2 <= _0x8c5025) {
    {
      return _0x3c66ca;
    }
  }
  var _0x26fe1b = 0;
  var _0xa91bb8 = "";
  for (var _0xcc55e6 = 0; _0xcc55e6 < _0x3c66ca.length; _0xcc55e6++) {
    {
      _0xa91bb8 = _0xa91bb8 + _0x3c66ca.charAt(_0xcc55e6);
      if (_0x3c66ca.charCodeAt(_0xcc55e6) > 128) {
        {
          _0x26fe1b = _0x26fe1b + 2;
          if (_0x26fe1b >= _0x8c5025) {
            return _0xa91bb8.substring(0, _0xa91bb8.length - 1) + "...";
          }
        }
      } else {
        {
          _0x26fe1b = _0x26fe1b + 1;
          if (_0x26fe1b >= _0x8c5025) {
            {
              return _0xa91bb8.substring(0, _0xa91bb8.length - 2) + "...";
            }
          }
        }
      }
    }
  }
  return _0xa91bb8;
}
function printCaller() {
  return new Error().stack.split("\n")[3].split("@")[0];
}
function safeGet(_0x25ea55) {
  try {
    {
      if (typeof JSON.parse(_0x25ea55) == "object") {
        {
          return true;
        }
      }
    }
  } catch (_0x19a011) {
    {
      console.log(_0x19a011);
      console.log("服务器访问数据为空，请检查自身设备网络情况");
      return false;
    }
  }
}
function jsonToUrl(_0x4dbdc9) {
  var _0x14367c = Object.keys(_0x4dbdc9).map(function (_0x333745) {
    return encodeURIComponent(_0x333745) + "=" + encodeURIComponent(_0x4dbdc9[_0x333745]);
  }).join("&");
  return _0x14367c;
}
function compileStr(_0x3d7694) {
  var _0x389535 = String.fromCharCode(_0x3d7694.charCodeAt(0) + _0x3d7694.length);
  for (var _0x3d4801 = 1; _0x3d4801 < _0x3d7694.length; _0x3d4801++) {
    {
      _0x389535 += String.fromCharCode(_0x3d7694.charCodeAt(_0x3d4801) + _0x3d7694.charCodeAt(_0x3d4801 - 1));
    }
  }
  return escape(_0x389535);
}
function uncompileStr(_0x29c962) {
  _0x29c962 = unescape(_0x29c962);
  var _0x577772 = String.fromCharCode(_0x29c962.charCodeAt(0) - _0x29c962.length);
  for (var _0x42110f = 1; _0x42110f < _0x29c962.length; _0x42110f++) {
    {
      _0x577772 += String.fromCharCode(_0x29c962.charCodeAt(_0x42110f) - _0x577772.charCodeAt(_0x42110f - 1));
    }
  }
  return _0x577772;
}
function randomNum(_0xf70c00, _0x21ca85) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * _0xf70c00 + 1);
      break;
    case 2:
      return parseInt(Math.random() * (_0x21ca85 - _0xf70c00 + 1) + _0xf70c00);
      break;
    default:
      return 0;
      break;
  }
}
function randomMac() {
  return "XX:XX:XX:XX:XX:XX".replace(/X/g, function () {
    {
      return "0123456789ABCDEF".charAt(Math.floor(Math.random() * 16));
    }
  });
}
function guid() {
  function _0x1e23a0() {
    return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
  }
  return _0x1e23a0() + _0x1e23a0() + "-" + _0x1e23a0() + "-" + _0x1e23a0() + "-" + _0x1e23a0() + "-" + _0x1e23a0() + _0x1e23a0() + _0x1e23a0();
}
function phone_num(_0xae0fbe) {
  if (_0xae0fbe.length == 11) {
    {
      let _0x887836 = _0xae0fbe.replace(/(\d{3})\d{4}(\d{4})/, "$1****$2");
      return _0x887836;
    }
  } else {
    {
      return _0xae0fbe;
    }
  }
}
function txt_api(_0xa91fc7) {
  return new Promise((_0x3a63a1, _0x3ddbdb) => {
    {
      const _0x143bcc = "https://v1.hitokoto.cn/?c=e";
      const _0x3488bd = {
        accept: "application/json"
      };
      const _0x18d9e4 = {
        url: _0x143bcc,
        headers: _0x3488bd
      };
      $.get(_0x18d9e4, async (_0x1b825a, _0x532701, _0xaba70) => {
        {
          let _0x55c5ba = JSON.parse(_0xaba70);
          let _0x415d72 = _0x55c5ba.hitokoto;
          contents[_0xa91fc7] = _0x415d72 + " " + _0x415d72;
          _0x3a63a1();
        }
      });
    }
  });
}
function getTime_8() {
  return new Promise((_0x4f2416, _0x2ffeed) => {
    {
      const _0x397511 = "http://api.m.taobao.com/rest/api3.do?api=mtop.common.getTimestamp";
      const _0x15be3d = {
        url: _0x397511
      };
      $.get(_0x15be3d, async (_0x5f10c0, _0x30b405, _0x435968) => {
        {
          _0x4f2416(_0x435968);
        }
      });
    }
  });
}
function ts13() {
  return Math.round(new Date().getTime()).toString();
}
function ts10() {
  return Math.round(new Date().getTime() / 1000).toString();
}
function message() {
  if (tz == 1) {
    {
      $.msg($.name, "", $.message);
    }
  }
}
async function sendMsg(_0x103443) {
  if (hour == 9 || hour == 12 || hour == 18) {
    {
      if (tz == 1) {
        {
          if ($.isNode()) {
            await notify.sendNotify($.name, _0x103443);
          } else {
            {
              $.msg($.name, "", _0x103443);
            }
          }
        }
      } else {
        {
          $.log(_0x103443);
        }
      }
    }
  }
}
async function wxPush(_0x398c7a, _0x47fcbf, _0x5a01c3) {
  return new Promise((_0x3491a5, _0x3b3b68) => {
    {
      const _0x2c8798 = "https://wxpusher.zjiecode.com/api/send/message";
      const _0x39aebf = {
        appToken: "AT_6BZsE2IyJuVLPp3mcOkKvpoF245GR9xn",
        content: _0x47fcbf,
        summary: "大象新闻抽奖通知",
        contentType: 1,
        uids: [_0x5a01c3],
        verifyPay: false
      };
      const _0x868d3f = {
        "Content-Type": "application/json"
      };
      const _0x41b540 = {
        url: _0x2c8798,
        headers: _0x868d3f,
        body: JSON.stringify(_0x39aebf)
      };
      $.post(_0x41b540, async (_0x1a5a80, _0x1b1e54, _0x4afe81) => {
        _0x3491a5();
      });
    }
  });
}
function randomString(_0x329de1, _0x5e57cf) {
  _0x5e57cf = _0x5e57cf || "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let _0xcb57a1 = "";
  for (let _0x169bc7 = 0; _0x169bc7 < _0x329de1; _0x169bc7++) {
    {
      let _0x3f460a = Math.floor(Math.random() * _0x5e57cf.length);
      _0xcb57a1 += _0x5e57cf.substring(_0x3f460a, _0x3f460a + 1);
    }
  }
  return _0xcb57a1;
}
async function wxPush(_0x437157, _0xe670e8, _0x2b0543) {
  return new Promise((_0x382c74, _0x5687b6) => {
    {
      const _0x261616 = "https://wxpusher.zjiecode.com/api/send/message";
      const _0x2f56e5 = {
        appToken: "AT_c4P8PtQEcyg9C3ICLSBbziDJZnkMC9aH",
        content: _0xe670e8,
        summary: "快手答题余额通知",
        contentType: 1,
        uids: [_0x2b0543],
        verifyPay: false
      };
      const _0x3af431 = {
        "Content-Type": "application/json"
      };
      const _0x21b090 = {
        url: _0x261616,
        headers: _0x3af431,
        body: JSON.stringify(_0x2f56e5)
      };
      $.post(_0x21b090, async (_0x4cd7b9, _0x5d599a, _0xb1203d) => {
        {
          _0x382c74();
        }
      });
    }
  });
}
function MD5_Encrypt(_0x3502f2) {
  function _0x364f4d(_0x1ccc7f, _0x120265) {
    {
      return _0x1ccc7f << _0x120265 | _0x1ccc7f >>> 32 - _0x120265;
    }
  }
  function _0x3d0618(_0x52a867, _0x41a047) {
    {
      var _0xbd4072;
      var _0x2a1fb0;
      var _0x2ddc4e;
      var _0x33402d;
      var _0x18c598;
      _0x2ddc4e = 2147483648 & _0x52a867;
      _0x33402d = 2147483648 & _0x41a047;
      _0xbd4072 = 1073741824 & _0x52a867;
      _0x2a1fb0 = 1073741824 & _0x41a047;
      _0x18c598 = (1073741823 & _0x52a867) + (1073741823 & _0x41a047);
      return _0xbd4072 & _0x2a1fb0 ? 2147483648 ^ _0x18c598 ^ _0x2ddc4e ^ _0x33402d : _0xbd4072 | _0x2a1fb0 ? 1073741824 & _0x18c598 ? 3221225472 ^ _0x18c598 ^ _0x2ddc4e ^ _0x33402d : 1073741824 ^ _0x18c598 ^ _0x2ddc4e ^ _0x33402d : _0x18c598 ^ _0x2ddc4e ^ _0x33402d;
    }
  }
  function _0x56528e(_0x268765, _0xc8ff0, _0x2f2cdd) {
    return _0x268765 & _0xc8ff0 | ~_0x268765 & _0x2f2cdd;
  }
  function _0x193e2f(_0x3998e6, _0x1fca69, _0x1a8b91) {
    return _0x3998e6 & _0x1a8b91 | _0x1fca69 & ~_0x1a8b91;
  }
  function _0x256a08(_0x2ad57c, _0x575ee9, _0x4b7996) {
    {
      return _0x2ad57c ^ _0x575ee9 ^ _0x4b7996;
    }
  }
  function _0x574f49(_0x49bfba, _0x227b17, _0x3da074) {
    {
      return _0x227b17 ^ (_0x49bfba | ~_0x3da074);
    }
  }
  function _0x211a94(_0x3cdbbd, _0x3362ea, _0x23a2de, _0x319751, _0x2b2463, _0xe8fdd4, _0x6e1203) {
    {
      _0x3cdbbd = _0x3d0618(_0x3cdbbd, _0x3d0618(_0x3d0618(_0x56528e(_0x3362ea, _0x23a2de, _0x319751), _0x2b2463), _0x6e1203));
      return _0x3d0618(_0x364f4d(_0x3cdbbd, _0xe8fdd4), _0x3362ea);
    }
  }
  function _0x4e7b7c(_0x3fe53c, _0x165242, _0x58f89b, _0x24f7b1, _0xba8a98, _0x3455d3, _0x561faa) {
    {
      _0x3fe53c = _0x3d0618(_0x3fe53c, _0x3d0618(_0x3d0618(_0x193e2f(_0x165242, _0x58f89b, _0x24f7b1), _0xba8a98), _0x561faa));
      return _0x3d0618(_0x364f4d(_0x3fe53c, _0x3455d3), _0x165242);
    }
  }
  function _0x39afa8(_0x2310a3, _0x34aeba, _0x58eb83, _0x568900, _0xbbd516, _0x26a80b, _0x527b6e) {
    {
      _0x2310a3 = _0x3d0618(_0x2310a3, _0x3d0618(_0x3d0618(_0x256a08(_0x34aeba, _0x58eb83, _0x568900), _0xbbd516), _0x527b6e));
      return _0x3d0618(_0x364f4d(_0x2310a3, _0x26a80b), _0x34aeba);
    }
  }
  function _0x2b637a(_0x5615a4, _0x1a3f66, _0x1111f8, _0x41717a, _0x3b5219, _0xbd0b92, _0x34842e) {
    {
      _0x5615a4 = _0x3d0618(_0x5615a4, _0x3d0618(_0x3d0618(_0x574f49(_0x1a3f66, _0x1111f8, _0x41717a), _0x3b5219), _0x34842e));
      return _0x3d0618(_0x364f4d(_0x5615a4, _0xbd0b92), _0x1a3f66);
    }
  }
  function _0x2857e9(_0x35446b) {
    {
      for (var _0x52fde7, _0x510a8c = _0x35446b.length, _0x5eaa8f = _0x510a8c + 8, _0x4c488a = (_0x5eaa8f - _0x5eaa8f % 64) / 64, _0x5ed160 = 16 * (_0x4c488a + 1), _0x52e22b = new Array(_0x5ed160 - 1), _0x50d5c0 = 0, _0xb5a49f = 0; _0x510a8c > _0xb5a49f;) {
        _0x52fde7 = (_0xb5a49f - _0xb5a49f % 4) / 4;
        _0x50d5c0 = _0xb5a49f % 4 * 8;
        _0x52e22b[_0x52fde7] = _0x52e22b[_0x52fde7] | _0x35446b.charCodeAt(_0xb5a49f) << _0x50d5c0;
        _0xb5a49f++;
      }
      _0x52fde7 = (_0xb5a49f - _0xb5a49f % 4) / 4;
      _0x50d5c0 = _0xb5a49f % 4 * 8;
      _0x52e22b[_0x52fde7] = _0x52e22b[_0x52fde7] | 128 << _0x50d5c0;
      _0x52e22b[_0x5ed160 - 2] = _0x510a8c << 3;
      _0x52e22b[_0x5ed160 - 1] = _0x510a8c >>> 29;
      return _0x52e22b;
    }
  }
  function _0x119b34(_0x59df97) {
    {
      var _0x2205d2;
      var _0x55e2a8;
      var _0x5c799a = "";
      var _0x276340 = "";
      for (_0x55e2a8 = 0; 3 >= _0x55e2a8; _0x55e2a8++) {
        _0x2205d2 = _0x59df97 >>> 8 * _0x55e2a8 & 255;
        _0x276340 = "0" + _0x2205d2.toString(16);
        _0x5c799a += _0x276340.substr(_0x276340.length - 2, 2);
      }
      return _0x5c799a;
    }
  }
  function _0x5e997e(_0x5319bd) {
    {
      _0x5319bd = _0x5319bd.replace(/\r\n/g, "\n");
      for (var _0x21406f = "", _0x3568ae = 0; _0x3568ae < _0x5319bd.length; _0x3568ae++) {
        {
          var _0x262c7f = _0x5319bd.charCodeAt(_0x3568ae);
          128 > _0x262c7f ? _0x21406f += String.fromCharCode(_0x262c7f) : _0x262c7f > 127 && 2048 > _0x262c7f ? (_0x21406f += String.fromCharCode(_0x262c7f >> 6 | 192), _0x21406f += String.fromCharCode(63 & _0x262c7f | 128)) : (_0x21406f += String.fromCharCode(_0x262c7f >> 12 | 224), _0x21406f += String.fromCharCode(_0x262c7f >> 6 & 63 | 128), _0x21406f += String.fromCharCode(63 & _0x262c7f | 128));
        }
      }
      return _0x21406f;
    }
  }
  var _0x59a81f;
  var _0x2502c0;
  var _0x456c2e;
  var _0xf3fe8b;
  var _0x303b05;
  var _0x2f99d7;
  var _0x57c644;
  var _0x134608;
  var _0x4d4588;
  var _0x3b50dc = [];
  var _0x349d6c = 7;
  var _0x36d784 = 12;
  var _0x36f838 = 17;
  var _0x1d91bf = 22;
  var _0x427a29 = 5;
  var _0x3acf65 = 9;
  var _0x58c0f3 = 14;
  var _0x14e03d = 20;
  var _0xd02fbc = 4;
  var _0xede4e = 11;
  var _0x4448b9 = 16;
  var _0x2d978a = 23;
  var _0x59ad6e = 6;
  var _0xa680ab = 10;
  var _0xefff24 = 15;
  var _0x5602ab = 21;
  for (_0x3502f2 = _0x5e997e(_0x3502f2), _0x3b50dc = _0x2857e9(_0x3502f2), _0x2f99d7 = 1732584193, _0x57c644 = 4023233417, _0x134608 = 2562383102, _0x4d4588 = 271733878, _0x59a81f = 0; _0x59a81f < _0x3b50dc.length; _0x59a81f += 16) {
    _0x2502c0 = _0x2f99d7;
    _0x456c2e = _0x57c644;
    _0xf3fe8b = _0x134608;
    _0x303b05 = _0x4d4588;
    _0x2f99d7 = _0x211a94(_0x2f99d7, _0x57c644, _0x134608, _0x4d4588, _0x3b50dc[_0x59a81f + 0], _0x349d6c, 3614090360);
    _0x4d4588 = _0x211a94(_0x4d4588, _0x2f99d7, _0x57c644, _0x134608, _0x3b50dc[_0x59a81f + 1], _0x36d784, 3905402710);
    _0x134608 = _0x211a94(_0x134608, _0x4d4588, _0x2f99d7, _0x57c644, _0x3b50dc[_0x59a81f + 2], _0x36f838, 606105819);
    _0x57c644 = _0x211a94(_0x57c644, _0x134608, _0x4d4588, _0x2f99d7, _0x3b50dc[_0x59a81f + 3], _0x1d91bf, 3250441966);
    _0x2f99d7 = _0x211a94(_0x2f99d7, _0x57c644, _0x134608, _0x4d4588, _0x3b50dc[_0x59a81f + 4], _0x349d6c, 4118548399);
    _0x4d4588 = _0x211a94(_0x4d4588, _0x2f99d7, _0x57c644, _0x134608, _0x3b50dc[_0x59a81f + 5], _0x36d784, 1200080426);
    _0x134608 = _0x211a94(_0x134608, _0x4d4588, _0x2f99d7, _0x57c644, _0x3b50dc[_0x59a81f + 6], _0x36f838, 2821735955);
    _0x57c644 = _0x211a94(_0x57c644, _0x134608, _0x4d4588, _0x2f99d7, _0x3b50dc[_0x59a81f + 7], _0x1d91bf, 4249261313);
    _0x2f99d7 = _0x211a94(_0x2f99d7, _0x57c644, _0x134608, _0x4d4588, _0x3b50dc[_0x59a81f + 8], _0x349d6c, 1770035416);
    _0x4d4588 = _0x211a94(_0x4d4588, _0x2f99d7, _0x57c644, _0x134608, _0x3b50dc[_0x59a81f + 9], _0x36d784, 2336552879);
    _0x134608 = _0x211a94(_0x134608, _0x4d4588, _0x2f99d7, _0x57c644, _0x3b50dc[_0x59a81f + 10], _0x36f838, 4294925233);
    _0x57c644 = _0x211a94(_0x57c644, _0x134608, _0x4d4588, _0x2f99d7, _0x3b50dc[_0x59a81f + 11], _0x1d91bf, 2304563134);
    _0x2f99d7 = _0x211a94(_0x2f99d7, _0x57c644, _0x134608, _0x4d4588, _0x3b50dc[_0x59a81f + 12], _0x349d6c, 1804603682);
    _0x4d4588 = _0x211a94(_0x4d4588, _0x2f99d7, _0x57c644, _0x134608, _0x3b50dc[_0x59a81f + 13], _0x36d784, 4254626195);
    _0x134608 = _0x211a94(_0x134608, _0x4d4588, _0x2f99d7, _0x57c644, _0x3b50dc[_0x59a81f + 14], _0x36f838, 2792965006);
    _0x57c644 = _0x211a94(_0x57c644, _0x134608, _0x4d4588, _0x2f99d7, _0x3b50dc[_0x59a81f + 15], _0x1d91bf, 1236535329);
    _0x2f99d7 = _0x4e7b7c(_0x2f99d7, _0x57c644, _0x134608, _0x4d4588, _0x3b50dc[_0x59a81f + 1], _0x427a29, 4129170786);
    _0x4d4588 = _0x4e7b7c(_0x4d4588, _0x2f99d7, _0x57c644, _0x134608, _0x3b50dc[_0x59a81f + 6], _0x3acf65, 3225465664);
    _0x134608 = _0x4e7b7c(_0x134608, _0x4d4588, _0x2f99d7, _0x57c644, _0x3b50dc[_0x59a81f + 11], _0x58c0f3, 643717713);
    _0x57c644 = _0x4e7b7c(_0x57c644, _0x134608, _0x4d4588, _0x2f99d7, _0x3b50dc[_0x59a81f + 0], _0x14e03d, 3921069994);
    _0x2f99d7 = _0x4e7b7c(_0x2f99d7, _0x57c644, _0x134608, _0x4d4588, _0x3b50dc[_0x59a81f + 5], _0x427a29, 3593408605);
    _0x4d4588 = _0x4e7b7c(_0x4d4588, _0x2f99d7, _0x57c644, _0x134608, _0x3b50dc[_0x59a81f + 10], _0x3acf65, 38016083);
    _0x134608 = _0x4e7b7c(_0x134608, _0x4d4588, _0x2f99d7, _0x57c644, _0x3b50dc[_0x59a81f + 15], _0x58c0f3, 3634488961);
    _0x57c644 = _0x4e7b7c(_0x57c644, _0x134608, _0x4d4588, _0x2f99d7, _0x3b50dc[_0x59a81f + 4], _0x14e03d, 3889429448);
    _0x2f99d7 = _0x4e7b7c(_0x2f99d7, _0x57c644, _0x134608, _0x4d4588, _0x3b50dc[_0x59a81f + 9], _0x427a29, 568446438);
    _0x4d4588 = _0x4e7b7c(_0x4d4588, _0x2f99d7, _0x57c644, _0x134608, _0x3b50dc[_0x59a81f + 14], _0x3acf65, 3275163606);
    _0x134608 = _0x4e7b7c(_0x134608, _0x4d4588, _0x2f99d7, _0x57c644, _0x3b50dc[_0x59a81f + 3], _0x58c0f3, 4107603335);
    _0x57c644 = _0x4e7b7c(_0x57c644, _0x134608, _0x4d4588, _0x2f99d7, _0x3b50dc[_0x59a81f + 8], _0x14e03d, 1163531501);
    _0x2f99d7 = _0x4e7b7c(_0x2f99d7, _0x57c644, _0x134608, _0x4d4588, _0x3b50dc[_0x59a81f + 13], _0x427a29, 2850285829);
    _0x4d4588 = _0x4e7b7c(_0x4d4588, _0x2f99d7, _0x57c644, _0x134608, _0x3b50dc[_0x59a81f + 2], _0x3acf65, 4243563512);
    _0x134608 = _0x4e7b7c(_0x134608, _0x4d4588, _0x2f99d7, _0x57c644, _0x3b50dc[_0x59a81f + 7], _0x58c0f3, 1735328473);
    _0x57c644 = _0x4e7b7c(_0x57c644, _0x134608, _0x4d4588, _0x2f99d7, _0x3b50dc[_0x59a81f + 12], _0x14e03d, 2368359562);
    _0x2f99d7 = _0x39afa8(_0x2f99d7, _0x57c644, _0x134608, _0x4d4588, _0x3b50dc[_0x59a81f + 5], _0xd02fbc, 4294588738);
    _0x4d4588 = _0x39afa8(_0x4d4588, _0x2f99d7, _0x57c644, _0x134608, _0x3b50dc[_0x59a81f + 8], _0xede4e, 2272392833);
    _0x134608 = _0x39afa8(_0x134608, _0x4d4588, _0x2f99d7, _0x57c644, _0x3b50dc[_0x59a81f + 11], _0x4448b9, 1839030562);
    _0x57c644 = _0x39afa8(_0x57c644, _0x134608, _0x4d4588, _0x2f99d7, _0x3b50dc[_0x59a81f + 14], _0x2d978a, 4259657740);
    _0x2f99d7 = _0x39afa8(_0x2f99d7, _0x57c644, _0x134608, _0x4d4588, _0x3b50dc[_0x59a81f + 1], _0xd02fbc, 2763975236);
    _0x4d4588 = _0x39afa8(_0x4d4588, _0x2f99d7, _0x57c644, _0x134608, _0x3b50dc[_0x59a81f + 4], _0xede4e, 1272893353);
    _0x134608 = _0x39afa8(_0x134608, _0x4d4588, _0x2f99d7, _0x57c644, _0x3b50dc[_0x59a81f + 7], _0x4448b9, 4139469664);
    _0x57c644 = _0x39afa8(_0x57c644, _0x134608, _0x4d4588, _0x2f99d7, _0x3b50dc[_0x59a81f + 10], _0x2d978a, 3200236656);
    _0x2f99d7 = _0x39afa8(_0x2f99d7, _0x57c644, _0x134608, _0x4d4588, _0x3b50dc[_0x59a81f + 13], _0xd02fbc, 681279174);
    _0x4d4588 = _0x39afa8(_0x4d4588, _0x2f99d7, _0x57c644, _0x134608, _0x3b50dc[_0x59a81f + 0], _0xede4e, 3936430074);
    _0x134608 = _0x39afa8(_0x134608, _0x4d4588, _0x2f99d7, _0x57c644, _0x3b50dc[_0x59a81f + 3], _0x4448b9, 3572445317);
    _0x57c644 = _0x39afa8(_0x57c644, _0x134608, _0x4d4588, _0x2f99d7, _0x3b50dc[_0x59a81f + 6], _0x2d978a, 76029189);
    _0x2f99d7 = _0x39afa8(_0x2f99d7, _0x57c644, _0x134608, _0x4d4588, _0x3b50dc[_0x59a81f + 9], _0xd02fbc, 3654602809);
    _0x4d4588 = _0x39afa8(_0x4d4588, _0x2f99d7, _0x57c644, _0x134608, _0x3b50dc[_0x59a81f + 12], _0xede4e, 3873151461);
    _0x134608 = _0x39afa8(_0x134608, _0x4d4588, _0x2f99d7, _0x57c644, _0x3b50dc[_0x59a81f + 15], _0x4448b9, 530742520);
    _0x57c644 = _0x39afa8(_0x57c644, _0x134608, _0x4d4588, _0x2f99d7, _0x3b50dc[_0x59a81f + 2], _0x2d978a, 3299628645);
    _0x2f99d7 = _0x2b637a(_0x2f99d7, _0x57c644, _0x134608, _0x4d4588, _0x3b50dc[_0x59a81f + 0], _0x59ad6e, 4096336452);
    _0x4d4588 = _0x2b637a(_0x4d4588, _0x2f99d7, _0x57c644, _0x134608, _0x3b50dc[_0x59a81f + 7], _0xa680ab, 1126891415);
    _0x134608 = _0x2b637a(_0x134608, _0x4d4588, _0x2f99d7, _0x57c644, _0x3b50dc[_0x59a81f + 14], _0xefff24, 2878612391);
    _0x57c644 = _0x2b637a(_0x57c644, _0x134608, _0x4d4588, _0x2f99d7, _0x3b50dc[_0x59a81f + 5], _0x5602ab, 4237533241);
    _0x2f99d7 = _0x2b637a(_0x2f99d7, _0x57c644, _0x134608, _0x4d4588, _0x3b50dc[_0x59a81f + 12], _0x59ad6e, 1700485571);
    _0x4d4588 = _0x2b637a(_0x4d4588, _0x2f99d7, _0x57c644, _0x134608, _0x3b50dc[_0x59a81f + 3], _0xa680ab, 2399980690);
    _0x134608 = _0x2b637a(_0x134608, _0x4d4588, _0x2f99d7, _0x57c644, _0x3b50dc[_0x59a81f + 10], _0xefff24, 4293915773);
    _0x57c644 = _0x2b637a(_0x57c644, _0x134608, _0x4d4588, _0x2f99d7, _0x3b50dc[_0x59a81f + 1], _0x5602ab, 2240044497);
    _0x2f99d7 = _0x2b637a(_0x2f99d7, _0x57c644, _0x134608, _0x4d4588, _0x3b50dc[_0x59a81f + 8], _0x59ad6e, 1873313359);
    _0x4d4588 = _0x2b637a(_0x4d4588, _0x2f99d7, _0x57c644, _0x134608, _0x3b50dc[_0x59a81f + 15], _0xa680ab, 4264355552);
    _0x134608 = _0x2b637a(_0x134608, _0x4d4588, _0x2f99d7, _0x57c644, _0x3b50dc[_0x59a81f + 6], _0xefff24, 2734768916);
    _0x57c644 = _0x2b637a(_0x57c644, _0x134608, _0x4d4588, _0x2f99d7, _0x3b50dc[_0x59a81f + 13], _0x5602ab, 1309151649);
    _0x2f99d7 = _0x2b637a(_0x2f99d7, _0x57c644, _0x134608, _0x4d4588, _0x3b50dc[_0x59a81f + 4], _0x59ad6e, 4149444226);
    _0x4d4588 = _0x2b637a(_0x4d4588, _0x2f99d7, _0x57c644, _0x134608, _0x3b50dc[_0x59a81f + 11], _0xa680ab, 3174756917);
    _0x134608 = _0x2b637a(_0x134608, _0x4d4588, _0x2f99d7, _0x57c644, _0x3b50dc[_0x59a81f + 2], _0xefff24, 718787259);
    _0x57c644 = _0x2b637a(_0x57c644, _0x134608, _0x4d4588, _0x2f99d7, _0x3b50dc[_0x59a81f + 9], _0x5602ab, 3951481745);
    _0x2f99d7 = _0x3d0618(_0x2f99d7, _0x2502c0);
    _0x57c644 = _0x3d0618(_0x57c644, _0x456c2e);
    _0x134608 = _0x3d0618(_0x134608, _0xf3fe8b);
    _0x4d4588 = _0x3d0618(_0x4d4588, _0x303b05);
  }
  var _0x44eb18 = _0x119b34(_0x2f99d7) + _0x119b34(_0x57c644) + _0x119b34(_0x134608) + _0x119b34(_0x4d4588);
  return _0x44eb18.toLowerCase();
}
function SHA256(_0x3710f6) {
  var _0x30422e = 8;
  var _0x42f4bf = 0;
  function _0x3c1ab2(_0x5920c4, _0x5de186) {
    {
      var _0x31fdc8 = (_0x5920c4 & 65535) + (_0x5de186 & 65535);
      var _0x32f00e = (_0x5920c4 >> 16) + (_0x5de186 >> 16) + (_0x31fdc8 >> 16);
      return _0x32f00e << 16 | _0x31fdc8 & 65535;
    }
  }
  function _0x5822bc(_0x18a429, _0x21f2d6) {
    {
      return _0x18a429 >>> _0x21f2d6 | _0x18a429 << 32 - _0x21f2d6;
    }
  }
  function _0x3f7ffc(_0xceb94e, _0x5e2958) {
    return _0xceb94e >>> _0x5e2958;
  }
  function _0x150e73(_0x300214, _0x21ebe9, _0x2ebb59) {
    {
      return _0x300214 & _0x21ebe9 ^ ~_0x300214 & _0x2ebb59;
    }
  }
  function _0x1f2e1d(_0xc05c6c, _0xe3cf11, _0xd13b3e) {
    return _0xc05c6c & _0xe3cf11 ^ _0xc05c6c & _0xd13b3e ^ _0xe3cf11 & _0xd13b3e;
  }
  function _0x1bf14c(_0x22744a) {
    {
      return _0x5822bc(_0x22744a, 2) ^ _0x5822bc(_0x22744a, 13) ^ _0x5822bc(_0x22744a, 22);
    }
  }
  function _0x174656(_0x1872a0) {
    {
      return _0x5822bc(_0x1872a0, 6) ^ _0x5822bc(_0x1872a0, 11) ^ _0x5822bc(_0x1872a0, 25);
    }
  }
  function _0x497d02(_0x274882) {
    {
      return _0x5822bc(_0x274882, 7) ^ _0x5822bc(_0x274882, 18) ^ _0x3f7ffc(_0x274882, 3);
    }
  }
  function _0x1179bd(_0x20ec9b) {
    {
      return _0x5822bc(_0x20ec9b, 17) ^ _0x5822bc(_0x20ec9b, 19) ^ _0x3f7ffc(_0x20ec9b, 10);
    }
  }
  function _0x1e5021(_0x1bc387, _0x5e89f6) {
    {
      var _0x2e74b6 = new Array(1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298);
      var _0x2710bf = new Array(1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225);
      var _0x44d776 = new Array(64);
      var _0x5bd727;
      var _0x3e66a4;
      var _0xc29df8;
      var _0x3c84f8;
      var _0x160519;
      var _0x2962a7;
      var _0x18b158;
      var _0x38ba0d;
      var _0x487e8d;
      var _0x12bd72;
      var _0x329053;
      var _0x68f241;
      _0x1bc387[_0x5e89f6 >> 5] |= 128 << 24 - _0x5e89f6 % 32;
      _0x1bc387[(_0x5e89f6 + 64 >> 9 << 4) + 15] = _0x5e89f6;
      for (var _0x487e8d = 0; _0x487e8d < _0x1bc387.length; _0x487e8d += 16) {
        {
          _0x5bd727 = _0x2710bf[0];
          _0x3e66a4 = _0x2710bf[1];
          _0xc29df8 = _0x2710bf[2];
          _0x3c84f8 = _0x2710bf[3];
          _0x160519 = _0x2710bf[4];
          _0x2962a7 = _0x2710bf[5];
          _0x18b158 = _0x2710bf[6];
          _0x38ba0d = _0x2710bf[7];
          for (var _0x12bd72 = 0; _0x12bd72 < 64; _0x12bd72++) {
            {
              if (_0x12bd72 < 16) {
                _0x44d776[_0x12bd72] = _0x1bc387[_0x12bd72 + _0x487e8d];
              } else {
                _0x44d776[_0x12bd72] = _0x3c1ab2(_0x3c1ab2(_0x3c1ab2(_0x1179bd(_0x44d776[_0x12bd72 - 2]), _0x44d776[_0x12bd72 - 7]), _0x497d02(_0x44d776[_0x12bd72 - 15])), _0x44d776[_0x12bd72 - 16]);
              }
              _0x329053 = _0x3c1ab2(_0x3c1ab2(_0x3c1ab2(_0x3c1ab2(_0x38ba0d, _0x174656(_0x160519)), _0x150e73(_0x160519, _0x2962a7, _0x18b158)), _0x2e74b6[_0x12bd72]), _0x44d776[_0x12bd72]);
              _0x68f241 = _0x3c1ab2(_0x1bf14c(_0x5bd727), _0x1f2e1d(_0x5bd727, _0x3e66a4, _0xc29df8));
              _0x38ba0d = _0x18b158;
              _0x18b158 = _0x2962a7;
              _0x2962a7 = _0x160519;
              _0x160519 = _0x3c1ab2(_0x3c84f8, _0x329053);
              _0x3c84f8 = _0xc29df8;
              _0xc29df8 = _0x3e66a4;
              _0x3e66a4 = _0x5bd727;
              _0x5bd727 = _0x3c1ab2(_0x329053, _0x68f241);
            }
          }
          _0x2710bf[0] = _0x3c1ab2(_0x5bd727, _0x2710bf[0]);
          _0x2710bf[1] = _0x3c1ab2(_0x3e66a4, _0x2710bf[1]);
          _0x2710bf[2] = _0x3c1ab2(_0xc29df8, _0x2710bf[2]);
          _0x2710bf[3] = _0x3c1ab2(_0x3c84f8, _0x2710bf[3]);
          _0x2710bf[4] = _0x3c1ab2(_0x160519, _0x2710bf[4]);
          _0x2710bf[5] = _0x3c1ab2(_0x2962a7, _0x2710bf[5]);
          _0x2710bf[6] = _0x3c1ab2(_0x18b158, _0x2710bf[6]);
          _0x2710bf[7] = _0x3c1ab2(_0x38ba0d, _0x2710bf[7]);
        }
      }
      return _0x2710bf;
    }
  }
  function _0x12509f(_0xa5fbf5) {
    {
      var _0x901766 = Array();
      var _0x1c694e = (1 << _0x30422e) - 1;
      for (var _0x5976fa = 0; _0x5976fa < _0xa5fbf5.length * _0x30422e; _0x5976fa += _0x30422e) {
        {
          _0x901766[_0x5976fa >> 5] |= (_0xa5fbf5.charCodeAt(_0x5976fa / _0x30422e) & _0x1c694e) << 24 - _0x5976fa % 32;
        }
      }
      return _0x901766;
    }
  }
  function _0x1832aa(_0x52e051) {
    {
      _0x52e051 = _0x52e051.replace(/\r\n/g, "\n");
      var _0x585279 = "";
      for (var _0x69967d = 0; _0x69967d < _0x52e051.length; _0x69967d++) {
        {
          var _0x344901 = _0x52e051.charCodeAt(_0x69967d);
          if (_0x344901 < 128) {
            {
              _0x585279 += String.fromCharCode(_0x344901);
            }
          } else {
            _0x344901 > 127 && _0x344901 < 2048 ? (_0x585279 += String.fromCharCode(_0x344901 >> 6 | 192), _0x585279 += String.fromCharCode(_0x344901 & 63 | 128)) : (_0x585279 += String.fromCharCode(_0x344901 >> 12 | 224), _0x585279 += String.fromCharCode(_0x344901 >> 6 & 63 | 128), _0x585279 += String.fromCharCode(_0x344901 & 63 | 128));
          }
        }
      }
      return _0x585279;
    }
  }
  function _0x2edb91(_0x195090) {
    {
      var _0x20f3ce = _0x42f4bf ? "0123456789ABCDEF" : "0123456789abcdef";
      var _0x4cb1fc = "";
      for (var _0x4c2e8a = 0; _0x4c2e8a < _0x195090.length * 4; _0x4c2e8a++) {
        _0x4cb1fc += _0x20f3ce.charAt(_0x195090[_0x4c2e8a >> 2] >> (3 - _0x4c2e8a % 4) * 8 + 4 & 15) + _0x20f3ce.charAt(_0x195090[_0x4c2e8a >> 2] >> (3 - _0x4c2e8a % 4) * 8 & 15);
      }
      return _0x4cb1fc;
    }
  }
  _0x3710f6 = _0x1832aa(_0x3710f6);
  return _0x2edb91(_0x1e5021(_0x12509f(_0x3710f6), _0x3710f6.length * _0x30422e));
}
function SHA1(_0x1706e0) {
  function _0x487e7d(_0x10c904, _0x29302c) {
    {
      var _0x591711 = _0x10c904 << _0x29302c | _0x10c904 >>> 32 - _0x29302c;
      return _0x591711;
    }
  }
  function _0x2e8362(_0x43fd44) {
    {
      var _0xf170f = "";
      var _0x2dd7c7;
      var _0xc7f8c6;
      var _0x5bdf1a;
      for (_0x2dd7c7 = 0; _0x2dd7c7 <= 6; _0x2dd7c7 += 2) {
        _0xc7f8c6 = _0x43fd44 >>> _0x2dd7c7 * 4 + 4 & 15;
        _0x5bdf1a = _0x43fd44 >>> _0x2dd7c7 * 4 & 15;
        _0xf170f += _0xc7f8c6.toString(16) + _0x5bdf1a.toString(16);
      }
      return _0xf170f;
    }
  }
  function _0x2194b8(_0x32c51c) {
    {
      var _0x41fcb4 = "";
      var _0x590ad9;
      var _0x388cfe;
      for (_0x590ad9 = 7; _0x590ad9 >= 0; _0x590ad9--) {
        {
          _0x388cfe = _0x32c51c >>> _0x590ad9 * 4 & 15;
          _0x41fcb4 += _0x388cfe.toString(16);
        }
      }
      return _0x41fcb4;
    }
  }
  function _0xbe3ac4(_0x4ca4ae) {
    {
      _0x4ca4ae = _0x4ca4ae.replace(/\r\n/g, "\n");
      var _0x59e15a = "";
      for (var _0x2f3669 = 0; _0x2f3669 < _0x4ca4ae.length; _0x2f3669++) {
        {
          var _0x2162eb = _0x4ca4ae.charCodeAt(_0x2f3669);
          if (_0x2162eb < 128) {
            {
              _0x59e15a += String.fromCharCode(_0x2162eb);
            }
          } else {
            if (_0x2162eb > 127 && _0x2162eb < 2048) {
              _0x59e15a += String.fromCharCode(_0x2162eb >> 6 | 192);
              _0x59e15a += String.fromCharCode(_0x2162eb & 63 | 128);
            } else {
              {
                _0x59e15a += String.fromCharCode(_0x2162eb >> 12 | 224);
                _0x59e15a += String.fromCharCode(_0x2162eb >> 6 & 63 | 128);
                _0x59e15a += String.fromCharCode(_0x2162eb & 63 | 128);
              }
            }
          }
        }
      }
      return _0x59e15a;
    }
  }
  var _0x4eb526;
  var _0x24ff83;
  var _0x2fd451;
  var _0x3406b8 = new Array(80);
  var _0x64aeb9 = 1732584193;
  var _0x24c50b = 4023233417;
  var _0x4ed302 = 2562383102;
  var _0x39877e = 271733878;
  var _0x3d01ba = 3285377520;
  var _0x3e322b;
  var _0x1d35ab;
  var _0x40af85;
  var _0xc48c21;
  var _0x515f43;
  var _0x42d512;
  _0x1706e0 = _0xbe3ac4(_0x1706e0);
  var _0x5d0d83 = _0x1706e0.length;
  var _0x572034 = new Array();
  for (_0x24ff83 = 0; _0x24ff83 < _0x5d0d83 - 3; _0x24ff83 += 4) {
    {
      _0x2fd451 = _0x1706e0.charCodeAt(_0x24ff83) << 24 | _0x1706e0.charCodeAt(_0x24ff83 + 1 < 10 ? "0" + (_0x24ff83 + 1) : _0x24ff83 + 1) << 16 | _0x1706e0.charCodeAt(_0x24ff83 + 2) << 8 | _0x1706e0.charCodeAt(_0x24ff83 + 3);
      _0x572034.push(_0x2fd451);
    }
  }
  switch (_0x5d0d83 % 4) {
    case 0:
      _0x24ff83 = 2147483648;
      break;
    case 1:
      _0x24ff83 = _0x1706e0.charCodeAt(_0x5d0d83 - 1) << 24 | 8388608;
      break;
    case 2:
      _0x24ff83 = _0x1706e0.charCodeAt(_0x5d0d83 - 2) << 24 | _0x1706e0.charCodeAt(_0x5d0d83 - 1) << 16 | 32768;
      break;
    case 3:
      _0x24ff83 = _0x1706e0.charCodeAt(_0x5d0d83 - 3) << 24 | _0x1706e0.charCodeAt(_0x5d0d83 - 2) << 16 | _0x1706e0.charCodeAt(_0x5d0d83 - 1) << 8 | 128;
      break;
  }
  _0x572034.push(_0x24ff83);
  while (_0x572034.length % 16 != 14) {
    _0x572034.push(0);
  }
  _0x572034.push(_0x5d0d83 >>> 29);
  _0x572034.push(_0x5d0d83 << 3 & 4294967295);
  for (_0x4eb526 = 0; _0x4eb526 < _0x572034.length; _0x4eb526 += 16) {
    {
      for (_0x24ff83 = 0; _0x24ff83 < 16; _0x24ff83++) {
        _0x3406b8[_0x24ff83] = _0x572034[_0x4eb526 + _0x24ff83];
      }
      for (_0x24ff83 = 16; _0x24ff83 <= 79; _0x24ff83++) {
        _0x3406b8[_0x24ff83] = _0x487e7d(_0x3406b8[_0x24ff83 - 3] ^ _0x3406b8[_0x24ff83 - 8] ^ _0x3406b8[_0x24ff83 - 14] ^ _0x3406b8[_0x24ff83 - 16], 1);
      }
      _0x3e322b = _0x64aeb9;
      _0x1d35ab = _0x24c50b;
      _0x40af85 = _0x4ed302;
      _0xc48c21 = _0x39877e;
      _0x515f43 = _0x3d01ba;
      for (_0x24ff83 = 0; _0x24ff83 <= 19; _0x24ff83++) {
        {
          _0x42d512 = _0x487e7d(_0x3e322b, 5) + (_0x1d35ab & _0x40af85 | ~_0x1d35ab & _0xc48c21) + _0x515f43 + _0x3406b8[_0x24ff83] + 1518500249 & 4294967295;
          _0x515f43 = _0xc48c21;
          _0xc48c21 = _0x40af85;
          _0x40af85 = _0x487e7d(_0x1d35ab, 30);
          _0x1d35ab = _0x3e322b;
          _0x3e322b = _0x42d512;
        }
      }
      for (_0x24ff83 = 20; _0x24ff83 <= 39; _0x24ff83++) {
        {
          _0x42d512 = _0x487e7d(_0x3e322b, 5) + (_0x1d35ab ^ _0x40af85 ^ _0xc48c21) + _0x515f43 + _0x3406b8[_0x24ff83] + 1859775393 & 4294967295;
          _0x515f43 = _0xc48c21;
          _0xc48c21 = _0x40af85;
          _0x40af85 = _0x487e7d(_0x1d35ab, 30);
          _0x1d35ab = _0x3e322b;
          _0x3e322b = _0x42d512;
        }
      }
      for (_0x24ff83 = 40; _0x24ff83 <= 59; _0x24ff83++) {
        {
          _0x42d512 = _0x487e7d(_0x3e322b, 5) + (_0x1d35ab & _0x40af85 | _0x1d35ab & _0xc48c21 | _0x40af85 & _0xc48c21) + _0x515f43 + _0x3406b8[_0x24ff83] + 2400959708 & 4294967295;
          _0x515f43 = _0xc48c21;
          _0xc48c21 = _0x40af85;
          _0x40af85 = _0x487e7d(_0x1d35ab, 30);
          _0x1d35ab = _0x3e322b;
          _0x3e322b = _0x42d512;
        }
      }
      for (_0x24ff83 = 60; _0x24ff83 <= 79; _0x24ff83++) {
        {
          _0x42d512 = _0x487e7d(_0x3e322b, 5) + (_0x1d35ab ^ _0x40af85 ^ _0xc48c21) + _0x515f43 + _0x3406b8[_0x24ff83] + 3395469782 & 4294967295;
          _0x515f43 = _0xc48c21;
          _0xc48c21 = _0x40af85;
          _0x40af85 = _0x487e7d(_0x1d35ab, 30);
          _0x1d35ab = _0x3e322b;
          _0x3e322b = _0x42d512;
        }
      }
      _0x64aeb9 = _0x64aeb9 + _0x3e322b & 4294967295;
      _0x24c50b = _0x24c50b + _0x1d35ab & 4294967295;
      _0x4ed302 = _0x4ed302 + _0x40af85 & 4294967295;
      _0x39877e = _0x39877e + _0xc48c21 & 4294967295;
      _0x3d01ba = _0x3d01ba + _0x515f43 & 4294967295;
    }
  }
  var _0x42d512 = _0x2194b8(_0x64aeb9) + _0x2194b8(_0x24c50b) + _0x2194b8(_0x4ed302) + _0x2194b8(_0x39877e) + _0x2194b8(_0x3d01ba);
  return _0x42d512.toLowerCase();
}
function Base64() {
  var _0x2c528a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  this.encode = function (_0x445e3e) {
    {
      var _0x374893 = "";
      var _0x5c8c3d;
      var _0x591d7e;
      var _0x2d4866;
      var _0x6259e4;
      var _0x354a32;
      var _0xb7f267;
      var _0x4e47be;
      var _0x50e890 = 0;
      _0x445e3e = utf8Encode(_0x445e3e);
      while (_0x50e890 < _0x445e3e.length) {
        {
          _0x5c8c3d = _0x445e3e.charCodeAt(_0x50e890++);
          _0x591d7e = _0x445e3e.charCodeAt(_0x50e890++);
          _0x2d4866 = _0x445e3e.charCodeAt(_0x50e890++);
          _0x6259e4 = _0x5c8c3d >> 2;
          _0x354a32 = (_0x5c8c3d & 3) << 4 | _0x591d7e >> 4;
          _0xb7f267 = (_0x591d7e & 15) << 2 | _0x2d4866 >> 6;
          _0x4e47be = _0x2d4866 & 63;
          if (isNaN(_0x591d7e)) {
            _0xb7f267 = _0x4e47be = 64;
          } else {
            if (isNaN(_0x2d4866)) {
              {
                _0x4e47be = 64;
              }
            }
          }
          _0x374893 = _0x374893 + _0x2c528a.charAt(_0x6259e4) + _0x2c528a.charAt(_0x354a32) + _0x2c528a.charAt(_0xb7f267) + _0x2c528a.charAt(_0x4e47be);
        }
      }
      return _0x374893;
    }
  };
  this.decode = function (_0x429ece) {
    {
      var _0x1b51b8 = "";
      var _0x4889af;
      var _0x248ae7;
      var _0x26bb55;
      var _0x467616;
      var _0x44d3fa;
      var _0xf75937;
      var _0x4673ba;
      var _0x119904 = 0;
      _0x429ece = _0x429ece.replace(/[^A-Za-z0-9\+\/\=]/g, "");
      while (_0x119904 < _0x429ece.length) {
        {
          _0x467616 = _0x2c528a.indexOf(_0x429ece.charAt(_0x119904++));
          _0x44d3fa = _0x2c528a.indexOf(_0x429ece.charAt(_0x119904++));
          _0xf75937 = _0x2c528a.indexOf(_0x429ece.charAt(_0x119904++));
          _0x4673ba = _0x2c528a.indexOf(_0x429ece.charAt(_0x119904++));
          _0x4889af = _0x467616 << 2 | _0x44d3fa >> 4;
          _0x248ae7 = (_0x44d3fa & 15) << 4 | _0xf75937 >> 2;
          _0x26bb55 = (_0xf75937 & 3) << 6 | _0x4673ba;
          _0x1b51b8 = _0x1b51b8 + String.fromCharCode(_0x4889af);
          if (_0xf75937 !== 64) {
            {
              _0x1b51b8 = _0x1b51b8 + String.fromCharCode(_0x248ae7);
            }
          }
          _0x4673ba !== 64 && (_0x1b51b8 = _0x1b51b8 + String.fromCharCode(_0x26bb55));
        }
      }
      _0x1b51b8 = utf8Decode(_0x1b51b8);
      return _0x1b51b8;
    }
  };
  utf8Encode = function (_0x48890b) {
    {
      _0x48890b = _0x48890b.replace(/\r\n/g, "\n");
      var _0x53ceaf = "";
      for (var _0x2ad01b = 0; _0x2ad01b < _0x48890b.length; _0x2ad01b++) {
        {
          var _0x1e6663 = _0x48890b.charCodeAt(_0x2ad01b);
          if (_0x1e6663 < 128) {
            {
              _0x53ceaf += String.fromCharCode(_0x1e6663);
            }
          } else {
            if (_0x1e6663 > 127 && _0x1e6663 < 2048) {
              {
                _0x53ceaf += String.fromCharCode(_0x1e6663 >> 6 | 192);
                _0x53ceaf += String.fromCharCode(_0x1e6663 & 63 | 128);
              }
            } else {
              _0x53ceaf += String.fromCharCode(_0x1e6663 >> 12 | 224);
              _0x53ceaf += String.fromCharCode(_0x1e6663 >> 6 & 63 | 128);
              _0x53ceaf += String.fromCharCode(_0x1e6663 & 63 | 128);
            }
          }
        }
      }
      return _0x53ceaf;
    }
  };
  utf8Decode = function (_0x5bfcf5) {
    {
      var _0x3e102c = "";
      var _0x385368 = 0;
      var _0x5c4944 = 0;
      var _0x5c897a = 0;
      var _0xfcdb1e = 0;
      while (_0x385368 < _0x5bfcf5.length) {
        {
          _0x5c4944 = _0x5bfcf5.charCodeAt(_0x385368);
          if (_0x5c4944 < 128) {
            _0x3e102c += String.fromCharCode(_0x5c4944);
            _0x385368++;
          } else {
            if (_0x5c4944 > 191 && _0x5c4944 < 224) {
              _0x5c897a = _0x5bfcf5.charCodeAt(_0x385368 + 1 < 10 ? "0" + (_0x385368 + 1) : _0x385368 + 1);
              _0x3e102c += String.fromCharCode((_0x5c4944 & 31) << 6 | _0x5c897a & 63);
              _0x385368 += 2;
            } else {
              {
                _0x5c897a = _0x5bfcf5.charCodeAt(_0x385368 + 1 < 10 ? "0" + (_0x385368 + 1) : _0x385368 + 1);
                _0xfcdb1e = _0x5bfcf5.charCodeAt(_0x385368 + 2);
                _0x3e102c += String.fromCharCode((_0x5c4944 & 15) << 12 | (_0x5c897a & 63) << 6 | _0xfcdb1e & 63);
                _0x385368 += 3;
              }
            }
          }
        }
      }
      return _0x3e102c;
    }
  };
}
function Env(_0x580f7d, _0x4eca00) {
  class _0x1e6e58 {
    constructor(_0x3a4430) {
      {
        this.env = _0x3a4430;
      }
    }
    send(_0x418a62, _0x55e79c = "GET") {
      {
        _0x418a62 = typeof _0x418a62 === "string" ? {
          url: _0x418a62
        } : _0x418a62;
        let _0x177126 = this.get;
        _0x55e79c === "POST" && (_0x177126 = this.post);
        return new Promise((_0x22da51, _0xd17ef1) => {
          _0x177126.call(this, _0x418a62, (_0x1b71a6, _0x275e56, _0x42dc92) => {
            {
              if (_0x1b71a6) {
                _0xd17ef1(_0x1b71a6);
              } else {
                _0x22da51(_0x275e56);
              }
            }
          });
        });
      }
    }
    get(_0x5f5b11) {
      {
        return this.send.call(this.env, _0x5f5b11);
      }
    }
    post(_0x2491c0) {
      return this.send.call(this.env, _0x2491c0, "POST");
    }
  }
  return new class {
    constructor(_0x3c5152, _0x4d04ce) {
      {
        this.name = _0x3c5152;
        this.http = new _0x1e6e58(this);
        this.data = null;
        this.dataFile = "box.dat";
        this.logs = [];
        this.isMute = false;
        this.isNeedRewrite = false;
        this.logSeparator = "\n";
        this.startTime = new Date().getTime();
        Object.assign(this, _0x4d04ce);
        const _0x10f0a8 = "\n       ***********          *****      ***       **** ******  ***********  \n       *************       ******      ***      ****  ****    ************ \n      ****      ****     ***  ***      ***     ***    ***    ***      **** \n      ***       ****    ***  ****      ***    ***    ****   ****       *** \n     ****       ***    ***    ***      ***   ***     ***    ***       **** \n     ***       ***    ****   ****      ***  ***     ****   ****       ***  \n    ***      ****    ************      *** ***      ***    ***      ****   \n   ****   ******   ****      ****      ******      ****   ****   ******    \n   **********     ****       ****      *****     ******  ***********";
        if (this.isNode()) {
          {
            this.log(_0x10f0a8);
          }
        }
        this.log("", "🔔 " + this.name + ", 开始!");
      }
    }
    isNode() {
      {
        return "undefined" !== typeof module && !!module.exports;
      }
    }
    isQuanX() {
      {
        return "undefined" !== typeof $task;
      }
    }
    isSurge() {
      {
        return "undefined" !== typeof $httpClient && "undefined" === typeof $loon;
      }
    }
    isLoon() {
      {
        return "undefined" !== typeof $loon;
      }
    }
    isShadowrocket() {
      {
        return "undefined" !== typeof $rocket;
      }
    }
    toObj(_0x481e70, _0x601fb9 = null) {
      {
        try {
          {
            return JSON.parse(_0x481e70);
          }
        } catch {
          return _0x601fb9;
        }
      }
    }
    toStr(_0x37abbc, _0x379e6d = null) {
      {
        try {
          {
            return JSON.stringify(_0x37abbc);
          }
        } catch {
          return _0x379e6d;
        }
      }
    }
    getjson(_0x21c65b, _0x2d3592) {
      {
        let _0x5a6ccb = _0x2d3592;
        const _0x4d7773 = this.getdata(_0x21c65b);
        if (_0x4d7773) {
          {
            try {
              {
                _0x5a6ccb = JSON.parse(this.getdata(_0x21c65b));
              }
            } catch {}
          }
        }
        return _0x5a6ccb;
      }
    }
    setjson(_0x1c5903, _0x36e05e) {
      {
        try {
          {
            return this.setdata(JSON.stringify(_0x1c5903), _0x36e05e);
          }
        } catch {
          return false;
        }
      }
    }
    getScript(_0x41ff9f) {
      {
        return new Promise(_0x4256d7 => {
          {
            const _0x88c169 = {
              url: _0x41ff9f
            };
            this.get(_0x88c169, (_0x4bba36, _0x497821, _0x40fa05) => _0x4256d7(_0x40fa05));
          }
        });
      }
    }
    runScript(_0x31dc7e, _0x52a290) {
      {
        return new Promise(_0x3d7c45 => {
          {
            let _0x62243e = this.getdata("@chavy_boxjs_userCfgs.httpapi");
            _0x62243e = _0x62243e ? _0x62243e.replace(/\n/g, "").trim() : _0x62243e;
            let _0x4a41c8 = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
            _0x4a41c8 = _0x4a41c8 ? _0x4a41c8 * 1 : 20;
            _0x4a41c8 = _0x52a290 && _0x52a290.timeout ? _0x52a290.timeout : _0x4a41c8;
            const [_0xbe0638, _0x3f6a57] = _0x62243e.split("@");
            const _0x210da1 = {
              script_text: _0x31dc7e,
              mock_type: "cron",
              timeout: _0x4a41c8
            };
            const _0x38dff6 = {
              "X-Key": _0xbe0638,
              Accept: "*/*"
            };
            const _0x7e15bb = {
              url: "http: //" + _0x3f6a57 + "/v1/scripting/evaluate",
              body: _0x210da1,
              headers: _0x38dff6
            };
            this.post(_0x7e15bb, (_0x2a5231, _0x1ff7ad, _0x37d0d8) => _0x3d7c45(_0x37d0d8));
          }
        }).catch(_0x3140ad => this.logErr(_0x3140ad));
      }
    }
    loaddata() {
      {
        if (this.isNode()) {
          {
            this.fs = this.fs ? this.fs : require("fs");
            this.path = this.path ? this.path : require("path");
            const _0x1790a1 = this.path.resolve(this.dataFile);
            const _0x4ce014 = this.path.resolve(process.cwd(), this.dataFile);
            const _0x96295f = this.fs.existsSync(_0x1790a1);
            const _0x48c791 = !_0x96295f && this.fs.existsSync(_0x4ce014);
            if (_0x96295f || _0x48c791) {
              {
                const _0x1e6a54 = _0x96295f ? _0x1790a1 : _0x4ce014;
                try {
                  {
                    return JSON.parse(this.fs.readFileSync(_0x1e6a54));
                  }
                } catch (_0x55525a) {
                  {
                    return {};
                  }
                }
              }
            } else {
              return {};
            }
          }
        } else {
          return {};
        }
      }
    }
    writedata() {
      {
        if (this.isNode()) {
          {
            this.fs = this.fs ? this.fs : require("fs");
            this.path = this.path ? this.path : require("path");
            const _0x17616e = this.path.resolve(this.dataFile);
            const _0x2ca86d = this.path.resolve(process.cwd(), this.dataFile);
            const _0x4f38de = this.fs.existsSync(_0x17616e);
            const _0x140ccb = !_0x4f38de && this.fs.existsSync(_0x2ca86d);
            const _0x73f272 = JSON.stringify(this.data);
            if (_0x4f38de) {
              this.fs.writeFileSync(_0x17616e, _0x73f272);
            } else {
              if (_0x140ccb) {
                {
                  this.fs.writeFileSync(_0x2ca86d, _0x73f272);
                }
              } else {
                {
                  this.fs.writeFileSync(_0x17616e, _0x73f272);
                }
              }
            }
          }
        }
      }
    }
    lodash_get(_0x55d3ac, _0xe473a2, _0x3ec28d = undefined) {
      {
        const _0x305e3c = _0xe473a2.replace(/[(d+)]/g, ".$1").split(".");
        let _0xb21e4e = _0x55d3ac;
        for (const _0x62079c of _0x305e3c) {
          {
            _0xb21e4e = Object(_0xb21e4e)[_0x62079c];
            if (_0xb21e4e === undefined) {
              {
                return _0x3ec28d;
              }
            }
          }
        }
        return _0xb21e4e;
      }
    }
    lodash_set(_0x5285fa, _0x36f32b, _0x597d02) {
      {
        if (Object(_0x5285fa) !== _0x5285fa) {
          return _0x5285fa;
        }
        if (!Array.isArray(_0x36f32b)) {
          _0x36f32b = _0x36f32b.toString().match(/[^.[]]+/g) || [];
        }
        _0x36f32b.slice(0, -1).reduce((_0x1ca9ad, _0x18b67c, _0x1695ea) => Object(_0x1ca9ad[_0x18b67c]) === _0x1ca9ad[_0x18b67c] ? _0x1ca9ad[_0x18b67c] : _0x1ca9ad[_0x18b67c] = Math.abs(_0x36f32b[_0x1695ea + 1 < 10 ? "0" + (_0x1695ea + 1) : _0x1695ea + 1]) >> 0 === +_0x36f32b[_0x1695ea + 1 < 10 ? "0" + (_0x1695ea + 1) : _0x1695ea + 1] ? [] : {}, _0x5285fa)[_0x36f32b[_0x36f32b.length - 1]] = _0x597d02;
        return _0x5285fa;
      }
    }
    getdata(_0x19b0d4) {
      {
        let _0x5902a2 = this.getval(_0x19b0d4);
        if (/^@/.test(_0x19b0d4)) {
          {
            const [, _0x2f469b, _0x320231] = /^@(.*?).(.*?)$/.exec(_0x19b0d4);
            const _0x2c993b = _0x2f469b ? this.getval(_0x2f469b) : "";
            if (_0x2c993b) {
              {
                try {
                  {
                    const _0x8f65b1 = JSON.parse(_0x2c993b);
                    _0x5902a2 = _0x8f65b1 ? this.lodash_get(_0x8f65b1, _0x320231, "") : _0x5902a2;
                  }
                } catch (_0x12877c) {
                  {
                    _0x5902a2 = "";
                  }
                }
              }
            }
          }
        }
        return _0x5902a2;
      }
    }
    setdata(_0x443b72, _0x2d7ab8) {
      {
        let _0x1efb0c = false;
        if (/^@/.test(_0x2d7ab8)) {
          {
            const [, _0x34b221, _0x1d2580] = /^@(.*?).(.*?)$/.exec(_0x2d7ab8);
            const _0x307f53 = this.getval(_0x34b221);
            const _0x3ec80a = _0x34b221 ? _0x307f53 === "null" ? null : _0x307f53 || "{}" : "{}";
            try {
              {
                const _0x1ca91f = JSON.parse(_0x3ec80a);
                this.lodash_set(_0x1ca91f, _0x1d2580, _0x443b72);
                _0x1efb0c = this.setval(JSON.stringify(_0x1ca91f), _0x34b221);
              }
            } catch (_0x360465) {
              {
                const _0x3a18f9 = {};
                this.lodash_set(_0x3a18f9, _0x1d2580, _0x443b72);
                _0x1efb0c = this.setval(JSON.stringify(_0x3a18f9), _0x34b221);
              }
            }
          }
        } else {
          _0x1efb0c = this.setval(_0x443b72, _0x2d7ab8);
        }
        return _0x1efb0c;
      }
    }
    getval(_0x35193a) {
      {
        if (this.isSurge() || this.isLoon()) {
          return $persistentStore.read(_0x35193a);
        } else {
          if (this.isQuanX()) {
            {
              return $prefs.valueForKey(_0x35193a);
            }
          } else {
            if (this.isNode()) {
              {
                this.data = this.loaddata();
                return this.data[_0x35193a];
              }
            } else {
              {
                return this.data && this.data[_0x35193a] || null;
              }
            }
          }
        }
      }
    }
    setval(_0x3dfc37, _0x58e62a) {
      {
        if (this.isSurge() || this.isLoon()) {
          {
            return $persistentStore.write(_0x3dfc37, _0x58e62a);
          }
        } else {
          if (this.isQuanX()) {
            return $prefs.setValueForKey(_0x3dfc37, _0x58e62a);
          } else {
            if (this.isNode()) {
              {
                this.data = this.loaddata();
                this.data[_0x58e62a] = _0x3dfc37;
                this.writedata();
                return true;
              }
            } else {
              return this.data && this.data[_0x58e62a] || null;
            }
          }
        }
      }
    }
    initGotEnv(_0x10fa43) {
      {
        this.got = this.got ? this.got : require("got");
        this.cktough = this.cktough ? this.cktough : require("tough-cookie");
        this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
        if (_0x10fa43) {
          {
            _0x10fa43.headers = _0x10fa43.headers ? _0x10fa43.headers : {};
            undefined === _0x10fa43.headers.Cookie && undefined === _0x10fa43.cookieJar && (_0x10fa43.cookieJar = this.ckjar);
          }
        }
      }
    }
    get(_0x1c9695, _0x37ba8a = () => {}) {
      {
        if (_0x1c9695.headers) {
          {
            delete _0x1c9695.headers["Content-Type"];
            delete _0x1c9695.headers["Content-Length"];
          }
        }
        if (this.isSurge() || this.isLoon()) {
          {
            if (this.isSurge() && this.isNeedRewrite) {
              {
                _0x1c9695.headers = _0x1c9695.headers || {};
                const _0x57a15c = {
                  "X-Surge-Skip-Scripting": false
                };
                Object.assign(_0x1c9695.headers, _0x57a15c);
              }
            }
            $httpClient.get(_0x1c9695, (_0x4e464c, _0x5254a3, _0x2b29fa) => {
              {
                if (!_0x4e464c && _0x5254a3) {
                  {
                    _0x5254a3.body = _0x2b29fa;
                    _0x5254a3.statusCode = _0x5254a3.status;
                  }
                }
                _0x37ba8a(_0x4e464c, _0x5254a3, _0x2b29fa);
              }
            });
          }
        } else {
          if (this.isQuanX()) {
            {
              if (this.isNeedRewrite) {
                {
                  _0x1c9695.opts = _0x1c9695.opts || {};
                  const _0x4d43cf = {
                    hints: false
                  };
                  Object.assign(_0x1c9695.opts, _0x4d43cf);
                }
              }
              $task.fetch(_0x1c9695).then(_0x384c45 => {
                {
                  const {
                    statusCode: _0x58be7e,
                    statusCode: _0x363249,
                    headers: _0x28236c,
                    body: _0x1c1cf1
                  } = _0x384c45;
                  const _0x5855df = {
                    status: _0x58be7e,
                    statusCode: _0x363249,
                    headers: _0x28236c,
                    body: _0x1c1cf1
                  };
                  _0x37ba8a(null, _0x5855df, _0x1c1cf1);
                }
              }, _0x422f75 => _0x37ba8a(_0x422f75));
            }
          } else {
            if (this.isNode()) {
              {
                this.initGotEnv(_0x1c9695);
                this.got(_0x1c9695).on("redirect", (_0x5883a2, _0x387a73) => {
                  {
                    this.ckjar.setCookieSync(_0x5883a2.headers["set-cookie"].map(Cookie.parse).toString());
                  }
                }).then(_0x11dc12 => {
                  {
                    const {
                      statusCode: _0x46e374,
                      statusCode: _0x52b46d,
                      headers: _0x233d8f,
                      body: _0x1e2126
                    } = _0x11dc12;
                    const _0x2eaad3 = {
                      status: _0x46e374,
                      statusCode: _0x52b46d,
                      headers: _0x233d8f,
                      body: _0x1e2126
                    };
                    _0x37ba8a(null, _0x2eaad3, _0x1e2126);
                  }
                }, _0x53cbdf => {
                  {
                    const {
                      message: _0x1d2f85,
                      response: _0x62e9cf
                    } = _0x53cbdf;
                    _0x37ba8a(_0x1d2f85, _0x62e9cf, _0x62e9cf && _0x62e9cf.body);
                  }
                });
              }
            }
          }
        }
      }
    }
    post(_0x5ca0ee, _0x3e8ce3 = () => {}) {
      {
        const _0xe87e98 = _0x5ca0ee.method ? _0x5ca0ee.method.toLocaleLowerCase() : "post";
        _0x5ca0ee.body && _0x5ca0ee.headers && !_0x5ca0ee.headers["Content-Type"] && (_0x5ca0ee.headers["Content-Type"] = "application/x-www-form-urlencoded");
        if (_0x5ca0ee.headers) {
          delete _0x5ca0ee.headers["Content-Length"];
        }
        if (this.isSurge() || this.isLoon()) {
          {
            if (this.isSurge() && this.isNeedRewrite) {
              {
                _0x5ca0ee.headers = _0x5ca0ee.headers || {};
                const _0x441532 = {
                  "X-Surge-Skip-Scripting": false
                };
                Object.assign(_0x5ca0ee.headers, _0x441532);
              }
            }
            $httpClient[_0xe87e98](_0x5ca0ee, (_0x91fb64, _0x46d2d2, _0x28f2b7) => {
              !_0x91fb64 && _0x46d2d2 && (_0x46d2d2.body = _0x28f2b7, _0x46d2d2.statusCode = _0x46d2d2.status);
              _0x3e8ce3(_0x91fb64, _0x46d2d2, _0x28f2b7);
            });
          }
        } else {
          if (this.isQuanX()) {
            {
              _0x5ca0ee.method = _0xe87e98;
              if (this.isNeedRewrite) {
                {
                  _0x5ca0ee.opts = _0x5ca0ee.opts || {};
                  const _0x2e3e04 = {
                    hints: false
                  };
                  Object.assign(_0x5ca0ee.opts, _0x2e3e04);
                }
              }
              $task.fetch(_0x5ca0ee).then(_0x5b5efa => {
                {
                  const {
                    statusCode: _0x25e6a2,
                    statusCode: _0x5ccd9c,
                    headers: _0xb29168,
                    body: _0x43f015
                  } = _0x5b5efa;
                  const _0x50c124 = {
                    status: _0x25e6a2,
                    statusCode: _0x5ccd9c,
                    headers: _0xb29168,
                    body: _0x43f015
                  };
                  _0x3e8ce3(null, _0x50c124, _0x43f015);
                }
              }, _0x35825a => _0x3e8ce3(_0x35825a));
            }
          } else {
            if (this.isNode()) {
              {
                this.initGotEnv(_0x5ca0ee);
                const {
                  url: _0x144db7,
                  ..._0x154db4
                } = _0x5ca0ee;
                this.got[_0xe87e98](_0x144db7, _0x154db4).then(_0x546cfe => {
                  {
                    const {
                      statusCode: _0x1b7c86,
                      statusCode: _0x4ce81b,
                      headers: _0x23049f,
                      body: _0x2fbf75
                    } = _0x546cfe;
                    const _0x63af53 = {
                      status: _0x1b7c86,
                      statusCode: _0x4ce81b,
                      headers: _0x23049f,
                      body: _0x2fbf75
                    };
                    _0x3e8ce3(null, _0x63af53, _0x2fbf75);
                  }
                }, _0x3a9065 => {
                  {
                    const {
                      message: _0x3fa7b4,
                      response: _0x5ed199
                    } = _0x3a9065;
                    _0x3e8ce3(_0x3fa7b4, _0x5ed199, _0x5ed199 && _0x5ed199.body);
                  }
                });
              }
            }
          }
        }
      }
    }
    put(_0x3c3461, _0xa0d2ff = () => {}) {
      {
        const _0x37888c = _0x3c3461.method ? _0x3c3461.method.toLocaleLowerCase() : "put";
        if (_0x3c3461.body && _0x3c3461.headers && !_0x3c3461.headers["Content-Type"]) {
          {
            _0x3c3461.headers["Content-Type"] = "application/x-www-form-urlencoded";
          }
        }
        if (_0x3c3461.headers) {
          delete _0x3c3461.headers["Content-Length"];
        }
        if (this.isSurge() || this.isLoon()) {
          {
            if (this.isSurge() && this.isNeedRewrite) {
              {
                _0x3c3461.headers = _0x3c3461.headers || {};
                const _0x529ea0 = {
                  "X-Surge-Skip-Scripting": false
                };
                Object.assign(_0x3c3461.headers, _0x529ea0);
              }
            }
            $httpClient[_0x37888c](_0x3c3461, (_0x11a75f, _0x1cee2c, _0x1992ce) => {
              {
                !_0x11a75f && _0x1cee2c && (_0x1cee2c.body = _0x1992ce, _0x1cee2c.statusCode = _0x1cee2c.status);
                _0xa0d2ff(_0x11a75f, _0x1cee2c, _0x1992ce);
              }
            });
          }
        } else {
          if (this.isQuanX()) {
            {
              _0x3c3461.method = _0x37888c;
              if (this.isNeedRewrite) {
                {
                  _0x3c3461.opts = _0x3c3461.opts || {};
                  const _0x47a866 = {
                    hints: false
                  };
                  Object.assign(_0x3c3461.opts, _0x47a866);
                }
              }
              $task.fetch(_0x3c3461).then(_0x4207eb => {
                {
                  const {
                    statusCode: _0x4e039e,
                    statusCode: _0x17cb39,
                    headers: _0x5b0910,
                    body: _0x1c44f0
                  } = _0x4207eb;
                  const _0x59e5a0 = {
                    status: _0x4e039e,
                    statusCode: _0x17cb39,
                    headers: _0x5b0910,
                    body: _0x1c44f0
                  };
                  _0xa0d2ff(null, _0x59e5a0, _0x1c44f0);
                }
              }, _0x40a403 => _0xa0d2ff(_0x40a403));
            }
          } else {
            if (this.isNode()) {
              {
                this.initGotEnv(_0x3c3461);
                const {
                  url: _0x489c56,
                  ..._0x130789
                } = _0x3c3461;
                this.got[_0x37888c](_0x489c56, _0x130789).then(_0x4c3943 => {
                  {
                    const {
                      statusCode: _0x320154,
                      statusCode: _0x535e76,
                      headers: _0x29b346,
                      body: _0x5bc96c
                    } = _0x4c3943;
                    const _0x322be6 = {
                      status: _0x320154,
                      statusCode: _0x535e76,
                      headers: _0x29b346,
                      body: _0x5bc96c
                    };
                    _0xa0d2ff(null, _0x322be6, _0x5bc96c);
                  }
                }, _0x3d6187 => {
                  {
                    const {
                      message: _0x2375cb,
                      response: _0x2d4c46
                    } = _0x3d6187;
                    _0xa0d2ff(_0x2375cb, _0x2d4c46, _0x2d4c46 && _0x2d4c46.body);
                  }
                });
              }
            }
          }
        }
      }
    }
    time(_0x2d8a29, _0x6314b8 = null) {
      {
        const _0x5775cf = _0x6314b8 ? new Date(_0x6314b8) : new Date();
        let _0x2082fb = {
          "M+": _0x5775cf.getMonth() + 1,
          "d+": _0x5775cf.getDate(),
          "H+": _0x5775cf.getHours(),
          "m+": _0x5775cf.getMinutes(),
          "s+": _0x5775cf.getSeconds(),
          "q+": Math.floor((_0x5775cf.getMonth() + 3) / 3),
          S: _0x5775cf.getMilliseconds()
        };
        if (/(y+)/.test(_0x2d8a29)) {
          _0x2d8a29 = _0x2d8a29.replace(RegExp.$1, (_0x5775cf.getFullYear() + "").substr(4 - RegExp.$1.length));
        }
        for (let _0x1e5302 in _0x2082fb) if (new RegExp("(" + _0x1e5302 + ")").test(_0x2d8a29)) {
          _0x2d8a29 = _0x2d8a29.replace(RegExp.$1, RegExp.$1.length == 1 ? _0x2082fb[_0x1e5302] : ("00" + _0x2082fb[_0x1e5302]).substr(("" + _0x2082fb[_0x1e5302]).length));
        }
        return _0x2d8a29;
      }
    }
    msg(_0x1d85db = _0x580f7d, _0x19c585 = "", _0x8c1f9 = "", _0x35b9a8) {
      {
        const _0x10a16c = _0x40caf3 => {
          {
            if (!_0x40caf3) {
              return _0x40caf3;
            }
            if (typeof _0x40caf3 === "string") {
              {
                if (this.isLoon()) {
                  return _0x40caf3;
                } else {
                  if (this.isQuanX()) {
                    return {
                      "open-url": _0x40caf3
                    };
                  } else {
                    if (this.isSurge()) {
                      return {
                        url: _0x40caf3
                      };
                    } else {
                      return undefined;
                    }
                  }
                }
              }
            } else {
              if (typeof _0x40caf3 === "object") {
                {
                  if (this.isLoon()) {
                    {
                      let _0x4192c8 = _0x40caf3.openUrl || _0x40caf3.url || _0x40caf3["open-url"];
                      let _0x3f7e69 = _0x40caf3.mediaUrl || _0x40caf3["media-url"];
                      const _0x2c9d2e = {
                        openUrl: _0x4192c8,
                        mediaUrl: _0x3f7e69
                      };
                      return _0x2c9d2e;
                    }
                  } else {
                    if (this.isQuanX()) {
                      {
                        let _0x3ff739 = _0x40caf3["open-url"] || _0x40caf3.url || _0x40caf3.openUrl;
                        let _0x4b20a6 = _0x40caf3["media-url"] || _0x40caf3.mediaUrl;
                        const _0x1e179c = {
                          "open-url": _0x3ff739,
                          "media-url": _0x4b20a6
                        };
                        return _0x1e179c;
                      }
                    } else {
                      if (this.isSurge()) {
                        {
                          let _0x23afb6 = _0x40caf3.url || _0x40caf3.openUrl || _0x40caf3["open-url"];
                          const _0x56bb9c = {
                            url: _0x23afb6
                          };
                          return _0x56bb9c;
                        }
                      }
                    }
                  }
                }
              } else {
                return undefined;
              }
            }
          }
        };
        if (!this.isMute) {
          {
            if (this.isSurge() || this.isLoon()) {
              $notification.post(_0x1d85db, _0x19c585, _0x8c1f9, _0x10a16c(_0x35b9a8));
            } else {
              if (this.isQuanX()) {
                {
                  $notify(_0x1d85db, _0x19c585, _0x8c1f9, _0x10a16c(_0x35b9a8));
                }
              }
            }
          }
        }
        if (!this.isMuteLog) {
          {
            let _0x40c8ed = ["", "==============📣系统通知📣=============="];
            _0x40c8ed.push(_0x1d85db);
            _0x19c585 ? _0x40c8ed.push(_0x19c585) : "";
            _0x8c1f9 ? _0x40c8ed.push(_0x8c1f9) : "";
            console.log(_0x40c8ed.join("\n"));
            this.logs = this.logs.concat(_0x40c8ed);
          }
        }
      }
    }
    log(..._0x3e4a8e) {
      _0x3e4a8e.length > 0 && (this.logs = [...this.logs, ..._0x3e4a8e]);
      console.log(_0x3e4a8e.join(this.logSeparator));
    }
    logErr(_0x438589, _0x1c5db6) {
      const _0x491ea9 = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      !_0x491ea9 ? this.log("", "❗️" + this.name + ", 错误!", _0x438589) : this.log("", "❗️" + this.name + ", 错误!", _0x438589.stack);
    }
    wait(_0x29f50b) {
      return new Promise(_0x385bcc => setTimeout(_0x385bcc, _0x29f50b));
    }
    done(_0x307d7d = {}) {
      const _0xd13e3b = new Date().getTime();
      const _0xc09752 = (_0xd13e3b - this.startTime) / 1000;
      this.log("", "🔔" + this.name + ", 结束!🕛" + _0xc09752 + "秒");
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(_0x307d7d);
    }
  }(_0x580f7d, _0x4eca00);
}