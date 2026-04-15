//Wed Apr 15 2026 00:53:11 GMT+0000 (Coordinated Universal Time)
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
$.isNode() && !fs.existsSync(file) && ($.log("🔔 外挂ck文件不存在，开始创建模版>>>"), fs.writeFileSync("./david_cookies.js", "//独立CK文件，主要用来处理多账号大数据量CK,注意JRTTAPP外边不用加引号，依葫芦画瓢。\n//今日头条(三个账号)\nlet JRTTAPP = [{},{},{}]\n//番茄小说(一个账号)\nlet FQXSAPP = [{}]\n//抖音极速版(两个账号)\nlet DYJSBAPP = [{},{}]\n    \nlet APPS = {\n    JRTT: JRTTAPP,\n    FQXS: FQXSAPP,\n    DYJSB: DYJSBAPP\n}\n\nmodule.exports = APPS", _0x38e564 => {}));
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
      let _0x13584d = false;
      const _0x20ae9e = apiHost.split("&");
      const _0x1ff835 = _0x20ae9e.length;
      for (let _0x32c1be = 0; _0x32c1be < _0x1ff835; _0x32c1be++) {
        {
          if ($.isNode()) {
            {
              _0x13584d = await checkAddress("" + _0x20ae9e[_0x32c1be], 2500);
            }
          } else {
            if ($.isSurge() || $.isLoon()) {
              _0x13584d = await httpClientRequest("" + _0x20ae9e[_0x32c1be], 2500);
            } else {
              {
                _0x13584d = await fetchRequest("" + _0x20ae9e[_0x32c1be], 2500);
              }
            }
          }
          if (_0x13584d == true) {
            {
              apiHost = _0x20ae9e[_0x32c1be];
              $.log("📢 接口" + (_0x32c1be + 1) + "[" + _0x20ae9e[_0x32c1be] + "]服务器接口正常! 🎉");
              break;
            }
          }
          if (_0x32c1be == _0x1ff835 - 1 && _0x13584d == false) {
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
          let _0x40dac1 = new Date(vipDate).getTime();
          let _0x41f480 = new Date().getTime();
          if (_0x41f480 > _0x40dac1) {
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
        $.log("🔔 此脚本采用付费模式。🔒");
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
              let _0x320675 = new Date(vipDate).getTime();
              let _0x8858ad = new Date().getTime();
              if (_0x8858ad > _0x320675) {
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
      multiAccount > 1 && $.log("🔔 尊敬的会员，您好！你使用的是付费多用户授权账号，一次可以运行" + numbers * multiAccount + "个账号。");
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
      vipDate != "" && $.log("📢 你的会员有效期到： " + vipDate);
      $.log("📢 一共发现了" + dxxwapp.length + "个账号");
      if ($.isNode()) {
        {
          if (!fs.existsSync(dxxw_ck_file)) {
            {
              dxxw_cks = {};
            }
          } else {
            {
              dxxw_cks = JSON.parse(fs.readFileSync(dxxw_ck_file, "utf8"));
            }
          }
        }
      }
      let _0x19d380 = [];
      let _0x50cda6 = dxxwapp.length;
      let _0x452684 = 0;
      $.isNode() && process.env.DXXW_THREAD_COUNT ? _0x452684 = parseInt(process.env.DXXW_THREAD_COUNT) : _0x452684 = _0x50cda6;
      let _0x4af4a3 = dxxwapp.length;
      if (_0x452684 >= _0x50cda6) {
        {
          _0x452684 = _0x50cda6;
          _0x4af4a3 = 1;
          $.log("📢 你设置的线程数是" + _0x452684 + "，账号个数是" + _0x50cda6 + "，" + _0x4af4a3 + "次可全部跑完。");
          for (let _0x8adcf = 0; _0x8adcf < dxxwapp.length; _0x8adcf++) {
            {
              _0x19d380.push(runMultiTasks(_0x8adcf));
              dxxwlogs[_0x8adcf] = "";
              if ($.isNode()) {
                {
                  channels_status[_0x8adcf] = 0;
                  await init_ws(_0x8adcf);
                }
              } else {
                {
                  channels_status[_0x8adcf] = 1;
                }
              }
            }
          }
          await Promise.allSettled(_0x19d380).then(_0x449980 => {
            {
              if ($.isNode() && saveFile) {
                {
                  $.log("[温馨提醒]: 即将本地化token，这样可以有效降低登录次数");
                  fs.writeFileSync(dxxw_ck_file, JSON.stringify(dxxw_cks, null, 2));
                }
              }
              $.log("日志整理功能如下：");
              $.log("---------------日志整理开始--------------");
              for (let _0x241887 = 0; _0x241887 < dxxwapp.length; _0x241887++) {
                $.log(dxxwlogs[_0x241887]);
                sendlogs += dxxwlogs[_0x241887];
              }
              $.log("---------------日志整理结束--------------");
              sendMsg(sendlogs);
            }
          });
        }
      } else {
        {
          _0x4af4a3 = Math.ceil(_0x50cda6 / _0x452684);
          $.log("📢 你设置的线程数是" + _0x452684 + "，账号个数是" + _0x50cda6 + "，计算后分" + _0x4af4a3 + "次执行，一次可执行" + _0x452684 + "个账号，最后一次如果不够" + _0x452684 + "个账号，剩多少个账号就跑几个账号。");
          for (let _0x4c9fe3 = 0; _0x4c9fe3 < _0x4af4a3; _0x4c9fe3++) {
            {
              for (let _0x3a2f76 = _0x4c9fe3 * _0x452684; _0x3a2f76 < _0x452684 * (_0x4c9fe3 + 1) && _0x3a2f76 < _0x50cda6; _0x3a2f76++) {
                _0x19d380.push(runMultiTasks(_0x3a2f76));
                dxxwlogs[_0x3a2f76] = "";
                channels_status[_0x3a2f76] = 0;
                await init_ws(_0x3a2f76);
              }
              await Promise.allSettled(_0x19d380).then(_0x1d0c35 => {
                {
                  _0x19d380 = [];
                  if (_0x4c9fe3 == _0x4af4a3 - 1) {
                    {
                      if ($.isNode() && saveFile) {
                        {
                          $.log("[温馨提醒]: 即将本地化token，这样可以有效降低登录次数");
                          fs.writeFileSync(dxxw_ck_file, JSON.stringify(dxxw_cks, null, 2));
                        }
                      }
                      $.log("日志整理功能如下：");
                      $.log("---------------日志整理开始--------------");
                      for (let _0x41be9a = 0; _0x41be9a < dxxwapp.length; _0x41be9a++) {
                        {
                          $.log(dxxwlogs[_0x41be9a]);
                          sendlogs += dxxwlogs[_0x41be9a];
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
})().catch(_0x65ddd => $.logErr(_0x65ddd)).finally(() => $.done());
async function runMultiTasks(_0x55c3a9) {
  return new Promise((_0x3abb85, _0x8136ac) => {
    {
      $.log("[账号" + (_0x55c3a9 + 1 < 10 ? "0" + (_0x55c3a9 + 1) : _0x55c3a9 + 1) + "]: 开始执行 working......");
      runSubTask(_0x3abb85, _0x55c3a9);
    }
  });
}
async function init_ws(_0x5f04f6) {
  if ($.isNode()) {
    {
      if (reconectCounts[_0x5f04f6] > 0) {
        {
          $.log("[账号" + (_0x5f04f6 + 1 < 10 ? "0" + (_0x5f04f6 + 1) : _0x5f04f6 + 1) + "]: 尝试重新连接服务器>>>>>>");
        }
      }
      wss[_0x5f04f6] = new WebSocket(apiHost.replace("http", "ws") + "/ws");
      wss[_0x5f04f6].on("open", function _0x104c69() {
        {
          $.log("[账号" + (_0x5f04f6 + 1 < 10 ? "0" + (_0x5f04f6 + 1) : _0x5f04f6 + 1) + "]: 签名通道已连接");
        }
      });
      wss[_0x5f04f6].on("close", function _0x29adf7() {
        {
          $.log("[账号" + (_0x5f04f6 + 1 < 10 ? "0" + (_0x5f04f6 + 1) : _0x5f04f6 + 1) + "]: 签名通道已关闭，原因是任务已处理完成");
        }
      });
      wss[_0x5f04f6].on("error", function _0x254bb1() {
        {
          $.log("[账号" + (_0x5f04f6 + 1 < 10 ? "0" + (_0x5f04f6 + 1) : _0x5f04f6 + 1) + "]: 签名通道已关闭，原因是出现错误");
          channels_status[_0x5f04f6] = 1;
          reconectCounts[_0x5f04f6]++;
          reconectCounts[_0x5f04f6] <= 3 && init_ws(_0x5f04f6);
        }
      });
    }
  }
}
async function runSubTask(_0x24df68, _0x17f3ee) {
  if ($.isNode()) {
    {
      await $.wait(3000, 5000);
    }
  }
  await login(_0x17f3ee);
  await userInfo(_0x17f3ee);
  await getScore(_0x17f3ee);
  await autoLoginRedirectUrl(_0x17f3ee);
  await dailySignInfo(_0x17f3ee);
  if ($.isNode()) {
    {
      await wss[_0x17f3ee].close();
    }
  }
  await runComplete(appName, userId);
  _0x24df68();
}
async function getCk() {
  if ($request.url.match(/\/passport\/UnionLogin/)) {
    {
      const _0x9b294e = $request.body;
      let _0x316fbe = dxxwuserck - 1;
      if (dxxwapp[_0x316fbe]) {
        dxxwapp[_0x316fbe].token_body = _0x9b294e;
      } else {
        {
          const _0x2ea2f5 = {
            token_body: _0x9b294e
          };
          dxxwapp[_0x316fbe] = _0x2ea2f5;
        }
      }
      $.setdata(JSON.stringify(dxxwapp, null, 2), "dxxwapp");
      $.msg($.name, "快音账号" + (_0x316fbe + 1) + "Token获取成功！🎉");
    }
  }
}
async function login(_0x3188fa) {
  const _0x17b228 = "https://pubmod.hntv.tv/mobile/uaa-app/oauth/token";
  const _0x354109 = new Base64();
  let _0x14f718 = _0x354109.encode("em" + encodeURIComponent(_0x354109.encode(dxxwapp[_0x3188fa].password)));
  let _0x30fd33 = "grant_type=password&username=%7B%22principal%22%3A%22" + dxxwapp[_0x3188fa].mobile + "%22%2C%22authenticationType%22%3A%22mobile%22%7D&password=" + _0x14f718;
  await getReqObject(_0x17b228, _0x30fd33, _0x3188fa);
  await httpRequest("post", requestObjects[_0x3188fa], printCaller());
  let _0x32a602 = httpResult;
  if (_0x32a602 != null) {
    {
      dxxwapp[_0x3188fa].accessToken = _0x32a602.access_token;
      dxxwapp[_0x3188fa].refreshToken = _0x32a602.refresh_token;
    }
  } else {
    {
      $.log("[账号" + (_0x3188fa + 1 < 10 ? "0" + (_0x3188fa + 1) : _0x3188fa + 1) + "]: 登录=> 登录失败");
      dxxwlogs[_0x3188fa] += "[账号" + (_0x3188fa + 1 < 10 ? "0" + (_0x3188fa + 1) : _0x3188fa + 1) + "]: 登录=> 登录失败\n";
    }
  }
}
async function userInfo(_0x3015b7) {
  const _0x55f2d0 = "https://dxnum.hntv.tv/dxnum/app/getUserInfo";
  let _0x13878e = "";
  await getReqObject(_0x55f2d0, _0x13878e, _0x3015b7);
  await httpRequest("get", requestObjects[_0x3015b7], printCaller());
  let _0x50a89a = httpResult;
  if (_0x50a89a != null && _0x50a89a.code == 0) {
    {
      $.log("[账号" + (_0x3015b7 + 1 < 10 ? "0" + (_0x3015b7 + 1) : _0x3015b7 + 1) + "]: 用户名=> " + _0x50a89a.result[0].nickname);
      dxxwlogs[_0x3015b7] += "[账号" + (_0x3015b7 + 1 < 10 ? "0" + (_0x3015b7 + 1) : _0x3015b7 + 1) + "]: 用户名=> " + _0x50a89a.result[0].nickname + "\n";
      $.log("[账号" + (_0x3015b7 + 1 < 10 ? "0" + (_0x3015b7 + 1) : _0x3015b7 + 1) + "]: 手机号=> " + _0x50a89a.result[0].mobile);
      dxxwlogs[_0x3015b7] += "[账号" + (_0x3015b7 + 1 < 10 ? "0" + (_0x3015b7 + 1) : _0x3015b7 + 1) + "]: 手机号=> " + _0x50a89a.result[0].mobile + "\n";
    }
  } else {
    {
      $.log("[账号" + (_0x3015b7 + 1 < 10 ? "0" + (_0x3015b7 + 1) : _0x3015b7 + 1) + "]: 用户信息=> " + _0x50a89a?.["msg"]);
      dxxwlogs[_0x3015b7] += "[账号" + (_0x3015b7 + 1 < 10 ? "0" + (_0x3015b7 + 1) : _0x3015b7 + 1) + "]: 用户信息=> " + _0x50a89a?.["msg"] + "\n";
      await login(_0x3015b7);
    }
  }
}
async function getScore(_0xc1b68d) {
  const _0x3d1af3 = "https://integration.hntv.tv/integration/user/integration/info/";
  let _0x1d6eb8 = "";
  await getReqObject(_0x3d1af3, _0x1d6eb8, _0xc1b68d);
  requestObjects[_0xc1b68d].headers["User-Agent"] = "Mozilla/5.0 (Linux; Android 8.1.0; Pixel Build/OPM4.171019.021.P1; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/121.0.6167.164 Mobile Safari/537.36 dxpayua";
  await httpRequest("get", requestObjects[_0xc1b68d], printCaller());
  let _0x54ac20 = httpResult;
  if (_0x54ac20 != null && _0x54ac20.code == 0) {
    {
      $.log("[账号" + (_0xc1b68d + 1 < 10 ? "0" + (_0xc1b68d + 1) : _0xc1b68d + 1) + "]: 积分=> " + _0x54ac20.result.haveScore);
    }
  }
}
async function autoLoginRedirectUrl(_0x1b63b7) {
  const _0x16013f = "https://integration.hntv.tv/integration/p/duiba/autoLoginUrl?dbredirect=https:%2F%2F90580-activity.dexfu.cn%2Fsign%2Fcomponent%2Fpage%3FsignOperatingId%3D327411516979156";
  let _0x394036 = "";
  await getReqObject(_0x16013f, _0x394036, _0x1b63b7);
  requestObjects[_0x1b63b7].headers["User-Agent"] = "Mozilla/5.0 (Linux; Android 8.1.0; Pixel Build/OPM4.171019.021.P1; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/121.0.6167.164 Mobile Safari/537.36 dxpayua";
  await httpRequest("get", requestObjects[_0x1b63b7], printCaller());
  let _0x371729 = httpResult;
  if (_0x371729 != null && _0x371729.code == 0) {
    {
      let _0x241451 = _0x371729.result;
      await autoLogin(_0x1b63b7, _0x241451);
    }
  } else {
    {
      $.log("[账号" + (_0x1b63b7 + 1 < 10 ? "0" + (_0x1b63b7 + 1) : _0x1b63b7 + 1) + "]: 活动跳转=> " + _0x371729.msg);
      dxxwlogs[_0x1b63b7] += "[账号" + (_0x1b63b7 + 1 < 10 ? "0" + (_0x1b63b7 + 1) : _0x1b63b7 + 1) + "]: 活动跳转=> " + _0x371729.msg + "\n";
    }
  }
}
async function autoLogin(_0x150414, _0x2d9dd0) {
  requestObjects[_0x150414] = duibaRequestOption(_0x150414, _0x2d9dd0, "");
  await httpRequest("get", requestObjects[_0x150414], printCaller());
  let _0x9707cf = httpResult;
  if (_0x9707cf != null) {
    {
      let _0x2c5c7d = [];
      for (let _0x1b13c8 = 0; _0x1b13c8 < _0x9707cf.length; _0x1b13c8++) {
        {
          if (_0x1b13c8 < 7) {
            {
              let _0x2522d0 = _0x9707cf[_0x1b13c8].split(";")[0];
              _0x2c5c7d.push(_0x2522d0);
            }
          }
        }
      }
      let _0x663c = _0x2c5c7d.join(";");
      dxxwapp[_0x150414].duiba_cookie = _0x663c;
    }
  } else {
    $.log("[账号" + (_0x150414 + 1 < 10 ? "0" + (_0x150414 + 1) : _0x150414 + 1) + "]: 活动跳转=> " + _0x9707cf.desc);
    dxxwlogs[_0x150414] += "[账号" + (_0x150414 + 1 < 10 ? "0" + (_0x150414 + 1) : _0x150414 + 1) + "]: 活动跳转=> " + _0x9707cf.desc + "\n";
  }
}
async function dailySignInfo(_0x4a46c5) {
  requestObjects[_0x4a46c5] = duibaRequestOption(_0x4a46c5, "/sign/component/index?signOperatingId=327411516979156&preview=false&", "");
  await httpRequest("get", requestObjects[_0x4a46c5], printCaller());
  let _0x2aa862 = httpResult;
  if (_0x2aa862 != null && _0x2aa862.success == true) {
    {
      if (_0x2aa862.data.signResult == false) {
        {
          await signKeyGet_new(_0x4a46c5);
        }
      }
      _0x2aa862.data.times > 0 && (await signLotteryKeyGet(_0x4a46c5), await $.wait(helpUtils.randomNum(3000, 5000)));
    }
  } else {
    {
      $.log("[账号" + (_0x4a46c5 + 1 < 10 ? "0" + (_0x4a46c5 + 1) : _0x4a46c5 + 1) + "]: 签到信息=> " + _0x2aa862.desc);
      dxxwlogs[_0x4a46c5] += "[账号" + (_0x4a46c5 + 1 < 10 ? "0" + (_0x4a46c5 + 1) : _0x4a46c5 + 1) + "]: 签到信息=> " + _0x2aa862.desc + "\n";
    }
  }
}
async function signKeyGet_new(_0x4d9d37) {
  requestObjects[_0x4d9d37] = duibaRequestOption(_0x4d9d37, "/sign/component/page?signOperatingId=327411516979156", "");
  requestObjects[_0x4d9d37].headers.Accept = "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7";
  await httpRequest("get", requestObjects[_0x4d9d37], printCaller());
  let _0xe054a6 = httpResult;
  if (_0xe054a6 != null) {
    {
      let _0x7b02a8 = /<script type="text\/javascript">\s*\/\*\s*\*\s*获取token\s*\*\/\s*[\s\S]*?<\/script>/.exec(_0xe054a6)[0];
      let _0x4fcba7 = _0x7b02a8.replace("<script type=\"text/javascript\">", "");
      _0x4fcba7 = _0x4fcba7.replace("</script>", "");
      eval(_0x4fcba7);
      let _0x574941 = /var\s+key\s+=\s+'([^']+)';/.exec(getDuibaToken.toString())[1];
      await getSignToken_new(_0x4d9d37, _0x574941);
    }
  } else {
    $.log("[账号" + (_0x4d9d37 + 1 < 10 ? "0" + (_0x4d9d37 + 1) : _0x4d9d37 + 1) + "]: 获取key=> " + _0xe054a6.desc);
    dxxwlogs[_0x4d9d37] += "[账号" + (_0x4d9d37 + 1 < 10 ? "0" + (_0x4d9d37 + 1) : _0x4d9d37 + 1) + "]: 获取key=> " + _0xe054a6.desc + "\n";
  }
}
async function getSignToken_new(_0xca3225, _0x537185) {
  let _0x276e69 = helpUtils.ts13();
  requestObjects[_0xca3225] = duibaRequestOption(_0xca3225, "/chw/ctoken/getToken", "timestamp=" + _0x276e69, "https://90580-activity.dexfu.cn/sign/component/page?signOperatingId=327411516979156");
  requestObjects[_0xca3225].headers["Content-Type"] = "application/x-www-form-urlencoded";
  await httpRequest("post", requestObjects[_0xca3225], printCaller());
  let _0x33406b = httpResult;
  if (_0x33406b != null && _0x33406b.success == true) {
    {
      eval(_0x33406b.token);
      let _0x39e52b = window[_0x537185];
      await doSign(_0xca3225, _0x39e52b);
    }
  } else {
    {
      $.log("[账号" + (_0xca3225 + 1 < 10 ? "0" + (_0xca3225 + 1) : _0xca3225 + 1) + "]: 获取token=> 失败");
      dxxwlogs[_0xca3225] += "[账号" + (_0xca3225 + 1 < 10 ? "0" + (_0xca3225 + 1) : _0xca3225 + 1) + "]: 获取token=> 失败\n";
    }
  }
}
async function signLotteryKeyGet(_0x5a8d9e) {
  requestObjects[_0x5a8d9e] = duibaRequestOption(_0x5a8d9e, "/sign/component/page?signOperatingId=327411516979156", "");
  requestObjects[_0x5a8d9e].headers.Accept = "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7";
  await httpRequest("get", requestObjects[_0x5a8d9e], printCaller());
  let _0x2adf2f = httpResult;
  if (_0x2adf2f != null) {
    {
      let _0xc30417 = /<script type="text\/javascript">\s*\/\*\s*\*\s*获取token\s*\*\/\s*[\s\S]*?<\/script>/.exec(_0x2adf2f)[0];
      let _0x378eea = _0xc30417.replace("<script type=\"text/javascript\">", "");
      _0x378eea = _0x378eea.replace("</script>", "");
      eval(_0x378eea);
      let _0xe1d01d = /var\s+key\s+=\s+'([^']+)';/.exec(getDuibaToken.toString())[1];
      await getSignLotteryToken(_0x5a8d9e, _0xe1d01d);
    }
  } else {
    $.log("[账号" + (_0x5a8d9e + 1 < 10 ? "0" + (_0x5a8d9e + 1) : _0x5a8d9e + 1) + "]: 获取key=> " + _0x2adf2f.desc);
    dxxwlogs[_0x5a8d9e] += "[账号" + (_0x5a8d9e + 1 < 10 ? "0" + (_0x5a8d9e + 1) : _0x5a8d9e + 1) + "]: 获取key=> " + _0x2adf2f.desc + "\n";
  }
}
async function getSignLotteryToken(_0x497b0f, _0x11677b) {
  let _0x35d04b = helpUtils.ts13();
  requestObjects[_0x497b0f] = duibaRequestOption(_0x497b0f, "/chw/ctoken/getToken", "timestamp=" + _0x35d04b, "https://90580-activity.dexfu.cn/sign/component/page?signOperatingId=327411516979156");
  requestObjects[_0x497b0f].headers["Content-Type"] = "application/x-www-form-urlencoded";
  await httpRequest("post", requestObjects[_0x497b0f], printCaller());
  let _0x5c495b = httpResult;
  if (_0x5c495b != null && _0x5c495b.success == true) {
    {
      eval(_0x5c495b.token);
      let _0x28afe1 = window[_0x11677b];
      await doLottery(_0x497b0f, _0x28afe1);
    }
  } else {
    $.log("[账号" + (_0x497b0f + 1 < 10 ? "0" + (_0x497b0f + 1) : _0x497b0f + 1) + "]: 获取token=> 失败");
    dxxwlogs[_0x497b0f] += "[账号" + (_0x497b0f + 1 < 10 ? "0" + (_0x497b0f + 1) : _0x497b0f + 1) + "]: 获取token=> 失败\n";
  }
}
async function doLottery(_0x23b045, _0x1cbfe2) {
  requestObjects[_0x23b045] = duibaRequestOption(_0x23b045, "/sign/component/doJoin?", "signOperatingId=327411516979156&token=" + _0x1cbfe2);
  requestObjects[_0x23b045].headers["Content-Type"] = "application/x-www-form-urlencoded";
  await httpRequest("post", requestObjects[_0x23b045], printCaller());
  let _0x40a190 = httpResult;
  if (_0x40a190 != null && _0x40a190.success == true) {
    {
      let _0x27a4fd = _0x40a190.data.orderNum;
      await getSignLotteryStatus(_0x23b045, _0x27a4fd);
    }
  } else {
    {
      $.log("[账号" + (_0x23b045 + 1 < 10 ? "0" + (_0x23b045 + 1) : _0x23b045 + 1) + "]: 签到结果=> " + _0x40a190.desc);
      dxxwlogs[_0x23b045] += "[账号" + (_0x23b045 + 1 < 10 ? "0" + (_0x23b045 + 1) : _0x23b045 + 1) + "]: 签到结果=> " + _0x40a190.desc + "\n";
    }
  }
}
async function getSignLotteryStatus(_0x15f332, _0x2bf30b) {
  requestObjects[_0x15f332] = duibaRequestOption(_0x15f332, "/plugin/getOrderStatus?orderId=" + _0x2bf30b + "&", "");
  await httpRequest("get", requestObjects[_0x15f332], printCaller());
  let _0x134c5b = httpResult;
  _0x134c5b != null && _0x134c5b.success == true ? ($.log("[账号" + (_0x15f332 + 1 < 10 ? "0" + (_0x15f332 + 1) : _0x15f332 + 1) + "]: 转盘结果=> " + JSON.stringify(_0x134c5b.lottery)), _0x134c5b.lottery.type != "thanks" && (await wxPush(_0x15f332, dxxwapp[_0x15f332].mobile + "-中奖提醒(" + _0x134c5b.lottery.type + ")", MSG_UID))) : ($.log("[账号" + (_0x15f332 + 1 < 10 ? "0" + (_0x15f332 + 1) : _0x15f332 + 1) + "]: 转盘结果=> 失败"), dxxwlogs[_0x15f332] += "[账号" + (_0x15f332 + 1 < 10 ? "0" + (_0x15f332 + 1) : _0x15f332 + 1) + "]: 转盘结果=> 失败\n");
}
async function doSign(_0xb125fb, _0x526154) {
  requestObjects[_0xb125fb] = duibaRequestOption(_0xb125fb, "/sign/component/doSign?", "signOperatingId=327411516979156&token=" + _0x526154);
  requestObjects[_0xb125fb].headers["Content-Type"] = "application/x-www-form-urlencoded";
  await httpRequest("post", requestObjects[_0xb125fb], printCaller());
  let _0xc6b4f8 = httpResult;
  if (_0xc6b4f8 != null && _0xc6b4f8.success == true) {
    $.log("[账号" + (_0xb125fb + 1 < 10 ? "0" + (_0xb125fb + 1) : _0xb125fb + 1) + "]: 签到结果=> 成功获得" + _0xc6b4f8.data.signResult / 20 + "积分");
    dxxwlogs[_0xb125fb] += "[账号" + (_0xb125fb + 1 < 10 ? "0" + (_0xb125fb + 1) : _0xb125fb + 1) + "]: 签到结果=> 成功获得" + _0xc6b4f8.data.signResult / 20 + "积分\n";
  } else {
    {
      $.log("[账号" + (_0xb125fb + 1 < 10 ? "0" + (_0xb125fb + 1) : _0xb125fb + 1) + "]: 签到结果=> " + _0xc6b4f8.desc);
      dxxwlogs[_0xb125fb] += "[账号" + (_0xb125fb + 1 < 10 ? "0" + (_0xb125fb + 1) : _0xb125fb + 1) + "]: 签到结果=> " + _0xc6b4f8.desc + "\n";
    }
  }
}
function duibaRequestOption(_0x5cd35c, _0xf14b17, _0x13e4fa, _0x1418e4) {
  let _0x443707 = helpUtils.ts13();
  let _0x3b3142 = _0xf14b17.indexOf("duiba.com") != -1 ? _0xf14b17 : !_0xf14b17.endsWith("?") && !_0xf14b17.endsWith("&") ? "https://90580-activity.dexfu.cn" + _0xf14b17 : "https://90580-activity.dexfu.cn" + _0xf14b17 + "_=" + _0x443707;
  let _0xb24e11 = {
    Host: "90580-activity.dexfu.cn",
    "Content-Type": "application/json",
    "User-Agent": "Mozilla/5.0 (Linux; Android 12; 22081212C Build/SKQ1.220303.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/126.0.6478.186 Mobile Safari/537.36 dxpayua"
  };
  let _0x53ec9b = {
    url: _0x3b3142,
    headers: _0xb24e11
  };
  if (_0x13e4fa != "") {
    {
      _0x53ec9b.body = _0x13e4fa;
    }
  }
  if (dxxwapp[_0x5cd35c].duiba_cookie) {
    {
      _0x53ec9b.headers.Cookie = dxxwapp[_0x5cd35c].duiba_cookie;
    }
  }
  _0x1418e4 && (_0x53ec9b.headers.Referer = _0x1418e4);
  return _0x53ec9b;
}
function getScriptAuth(_0x4c9bed, _0x36d880, _0x5efebb) {
  return new Promise((_0x101e1b, _0x2fac7f) => {
    {
      const _0x37c6f5 = apiHost + "/script/permissions/lastest";
      const _0x1d03f0 = {
        appName: _0x4c9bed,
        userId: _0x36d880,
        activityCode: _0x5efebb,
        version: version
      };
      const _0x3101c5 = {
        "Content-Type": "application/json",
        accept: "application/json"
      };
      const _0x3d53fb = {
        url: _0x37c6f5,
        headers: _0x3101c5,
        body: JSON.stringify(_0x1d03f0)
      };
      $.post(_0x3d53fb, async (_0x5f5b94, _0x12a847, _0x5dc504) => {
        {
          if (_0x5dc504 && _0x5dc504 != null && _0x5dc504.replace(/\"/g, "").length > 50) {
            {
              const _0x5ea4bd = _0x5dc504.replace(/\"/g, "").slice(34);
              helpUtils = await loadUtils(flushCash);
              CryptoJS = helpUtils.createCryptoJS();
              result = JSON.parse(CryptoJS.enc.Base64.parse(_0x5ea4bd).toString(CryptoJS.enc.Utf8));
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
              } catch (_0x476a09) {
                {
                  $.log(_0x476a09);
                }
              }
            }
          } else {
            {
              $.log("请求服务器接口出现错误，请检查网络连接情况");
            }
          }
          _0x101e1b();
        }
      });
    }
  });
}
function runComplete(_0xe84dd0, _0x4e9777) {
  return new Promise((_0x2c227a, _0x33cf91) => {
    {
      const _0x46dd4f = apiHost + "/script/run/add";
      const _0x2db9b5 = {
        appName: _0xe84dd0,
        userId: _0x4e9777,
        activityCode: activeCode,
        version: version
      };
      const _0x5072e0 = {
        "Content-Type": "application/json",
        accept: "application/json"
      };
      const _0xf77ab9 = {
        url: _0x46dd4f,
        headers: _0x5072e0,
        body: JSON.stringify(_0x2db9b5)
      };
      $.post(_0xf77ab9, async (_0x274270, _0x3e06d4, _0x2326c8) => {
        _0x2c227a();
      });
    }
  });
}
function loadToken(_0x1d86b6) {
  let _0x29fd7d = dxxwapp[_0x1d86b6].mobile;
  dxxw_item = dxxw_cks["" + _0x29fd7d];
  if (dxxw_item) {
    dxxwapp[_0x1d86b6].refreshToken = dxxw_item.refreshToken;
    dxxwapp[_0x1d86b6].accessToken = dxxw_item.accessToken;
    return true;
  } else {
    {
      return false;
    }
  }
}
function saveToken(_0x308a10) {
  dxxw_cks[dxxwapp[_0x308a10].mobile] = {
    refreshToken: dxxwapp[_0x308a10].refreshToken,
    accessToken: dxxwapp[_0x308a10].accessToken,
    ts: ts13()
  };
}
async function loadUtils(_0x6f8b46) {
  let _0x213713 = $.getdata("Utils_Code") || "";
  if (!_0x6f8b46 && _0x213713 && Object.keys(_0x213713).length) {
    {
      $.log("📢 缓存中存在JS-Utils");
      eval(_0x213713);
      return creatUtils();
    }
  }
  $.log("📢 开始初始化JS-Utils");
  return new Promise(async _0x334cc7 => {
    {
      $.getScript("http://script.david2024.top/scripts/tools/JS-Utils.js").then(_0x3c3a9a => {
        {
          $.setdata(_0x3c3a9a, "Utils_Code");
          eval(_0x3c3a9a);
          $.log("📢 JS-Utils加载成功");
          _0x334cc7(creatUtils());
        }
      });
    }
  });
}
function checkAddress(_0x35ae92, _0x557f51) {
  return new Promise((_0x43bd8d, _0x5bf70b) => {
    {
      const _0x2c719d = setTimeout(() => {
        _0x43bd8d(false);
      }, _0x557f51);
      const _0x29b7de = http.get(_0x35ae92, _0x40bff5 => {
        clearTimeout(_0x2c719d);
        _0x40bff5.statusCode === 404 ? _0x43bd8d(true) : _0x43bd8d(false);
      });
      _0x29b7de.on("error", _0x3d5713 => {
        {
          clearTimeout(_0x2c719d);
          _0x43bd8d(false);
        }
      });
      _0x29b7de.on("timeout", () => {
        {
          _0x29b7de.abort();
          _0x5bf70b(new Error("请求超时"));
        }
      });
    }
  });
}
async function fetchRequest(_0x1bf3db, _0x35c501 = 3000) {
  return new Promise((_0x2f60f1, _0x19f115) => {
    {
      const _0x1f99ad = {
        url: _0x1bf3db + "/docs"
      };
      setTimeout(() => {
        {
          _0x2f60f1(false);
        }
      }, _0x35c501);
      $.get(_0x1f99ad, async (_0xc97f6b, _0x1ce315, _0x5ee40e) => {
        {
          if (_0x1ce315.status == 401) {
            {
              _0x2f60f1(true);
            }
          } else {
            {
              _0x2f60f1(false);
            }
          }
        }
      });
    }
  });
}
async function httpClientRequest(_0x51d162, _0x54ce36 = 3000) {
  return new Promise((_0x120473, _0x6f314c) => {
    {
      const _0x407f73 = {
        url: _0x51d162 + "/"
      };
      setTimeout(() => {
        {
          _0x120473(false);
        }
      }, _0x54ce36);
      $httpClient.get(_0x407f73, async (_0x5ae9b9, _0x2b2a95, _0x1ab99b) => {
        {
          if (_0x1ab99b == "{\"detail\":\"Not Found\"}") {
            {
              _0x120473(true);
            }
          } else {
            _0x120473(false);
          }
        }
      });
    }
  });
}
function redisGet(_0x1f5782, _0x4504fc, _0x39a5b6) {
  return new Promise((_0x307d85, _0x2d648a) => {
    {
      const _0x140f4e = apiHost + "/redis/hash/get/" + _0x4504fc + "/" + _0x39a5b6;
      const _0x35b30c = {
        "Content-Type": "application/json",
        accept: "application/json"
      };
      const _0x20c322 = {
        url: _0x140f4e,
        headers: _0x35b30c
      };
      $.get(_0x20c322, async (_0x18465a, _0x214848, _0x8d8dea) => {
        {
          const _0xf0de04 = _0x8d8dea.replace(/\"/g, "");
          answerTexts[_0x1f5782] = _0xf0de04;
          _0x307d85();
          return _0xf0de04;
        }
      });
    }
  });
}
function redisSet(_0x167075, _0x5792a8, _0x58a9b6) {
  return new Promise((_0x505f4f, _0x3c252e) => {
    {
      const _0xe61a82 = apiHost + "/redis/hash/set";
      const _0x94dd78 = {
        key: _0x167075,
        hashKey: _0x5792a8,
        hashValue: _0x58a9b6
      };
      const _0x3c9748 = {
        "Content-Type": "application/json",
        accept: "application/json"
      };
      const _0x120db0 = {
        url: _0xe61a82,
        headers: _0x3c9748,
        body: JSON.stringify(_0x94dd78)
      };
      $.post(_0x120db0, async (_0x5bedb4, _0xbcc7e5, _0x357098) => {
        {
          const _0x4598cf = _0x357098.replace(/\"/g, "");
          _0x505f4f();
        }
      });
    }
  });
}
function redisPop(_0x19a570) {
  return new Promise((_0x4b0f98, _0x109ef4) => {
    {
      const _0xb26a74 = apiHost + "/redis/set/pop/" + _0x19a570;
      const _0x50f2b9 = {
        "Content-Type": "application/json",
        accept: "application/json"
      };
      const _0x2670f7 = {
        url: _0xb26a74,
        headers: _0x50f2b9
      };
      $.get(_0x2670f7, async (_0x1f85b6, _0x583642, _0x33ebf3) => {
        {
          const _0x3ade41 = _0x33ebf3.replace(/\"/g, "");
          popCookie = _0x3ade41;
          _0x4b0f98();
        }
      });
    }
  });
}
async function getReqObject(_0x5689ce, _0x27c98b, _0x530c89) {
  let _0x324b8b = "Mozilla/5.0 (Linux; Android 12; 22081212C Build/SKQ1.220303.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/126.0.6478.186 Mobile Safari/537.36 dxpayua";
  if (dxxwapp[_0x530c89].ua && dxxwapp[_0x530c89].ua != "") {
    {
      _0x324b8b = dxxwapp[_0x530c89].ua;
    }
  }
  let _0x56b3aa = getHostname(_0x5689ce);
  const _0x34a820 = {
    "Content-Type": "application/x-www-form-urlencoded",
    "User-Agent": _0x324b8b,
    Host: _0x56b3aa
  };
  let _0x3d120e = {
    url: _0x5689ce,
    headers: _0x34a820
  };
  _0x56b3aa != "pubmod.hntv.tv" && (_0x3d120e.headers.Authorization = "Bearer " + dxxwapp[_0x530c89].accessToken);
  if (_0x27c98b) {
    {
      _0x3d120e.body = _0x27c98b;
    }
  }
  requestObjects[_0x530c89] = _0x3d120e;
  return _0x3d120e;
}
function getReqObject_(_0x3ea4b7, _0x516013, _0x27358a) {
  let _0x4ebcd3 = "Mozilla/5.0 (iPhone; CPU iPhone OS 16_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.31(0x18001f34) NetType/WIFI Language/zh_CN";
  if (dxxwapp[_0x27358a].ua && dxxwapp[_0x27358a].ua != "") {
    {
      _0x4ebcd3 = dxxwapp[_0x27358a].ua;
    }
  }
  let _0x4ec503 = getHostname(_0x3ea4b7);
  const _0x3ea045 = {
    "Content-Type": "application/x-www-form-urlencoded",
    "User-Agent": _0x4ebcd3,
    Authorization: dxxwapp[_0x27358a].auth,
    Host: _0x4ec503
  };
  let _0x1bc384 = {
    url: _0x3ea4b7,
    headers: _0x3ea045
  };
  if (_0x516013) {
    {
      _0x1bc384.body = _0x516013;
    }
  }
  requestObjects[_0x27358a] = _0x1bc384;
  return _0x1bc384;
}
async function httpRequest(_0x20049a, _0x1b7510, _0x548a32) {
  httpResult = null;
  return new Promise(_0x2e79f3 => {
    {
      $[_0x20049a](_0x1b7510, async (_0x487962, _0x555705, _0x333e7c) => {
        {
          try {
            {
              if (_0x1b7510.url.includes("cn/autoLogin/autologin")) {
                {
                  httpResult = _0x555705.headers["set-cookie"];
                  return;
                }
              } else {
                if (_0x1b7510.url.includes("/hdtool/index") || _0x1b7510.url.includes("/visual-editor/skins") || _0x1b7510.url.includes("/sign/component/page?") || _0x1b7510.url.includes("/activity/takePrizeNew") || _0x1b7510.url.includes("/superSurprise/index")) {
                  {
                    httpResult = _0x333e7c;
                    return;
                  }
                }
              }
              if (_0x487962) {
                {
                  $.log(_0x548a32 + ": " + _0x20049a + "请求失败");
                  $.log(JSON.stringify(_0x487962));
                  $.logErr(_0x487962);
                }
              } else {
                {
                  if (safeGet(_0x333e7c)) {
                    {
                      httpResult = JSON.parse(_0x333e7c);
                    }
                  } else {
                    {
                      const _0x17dec6 = new URL(_0x1b7510.url);
                      $.log(_0x17dec6.pathname + "发起" + _0x20049a + "请求时，出现错误，请处理");
                    }
                  }
                }
              }
            }
          } catch (_0x32db48) {
            {
              $.logErr(_0x32db48, _0x555705);
            }
          } finally {
            _0x2e79f3(httpResult);
          }
        }
      });
    }
  });
}
async function selectChannel(_0x126131, _0x3fd4c2) {
  if (channels_status[_0x126131] == 0) {
    await getSign_(_0x126131, _0x3fd4c2);
  } else {
    {
      await getSign(_0x126131, _0x3fd4c2);
    }
  }
}
function getSign_(_0x5b39fd, _0x870fd8) {
  return new Promise((_0x3cd206, _0x40f053) => {
    {
      function _0x15cc7e(_0x48baf0) {
        {
          let _0x5b4953 = _0x48baf0.toString("utf8");
          requestSigns[_0x5b39fd] = _0x5b4953;
          wss[_0x5b39fd].removeListener("message", _0x15cc7e);
          _0x3cd206(_0x5b4953);
        }
      }
      wss[_0x5b39fd].on("message", _0x15cc7e);
      if (wss[_0x5b39fd].readyState === 1) {
        {
          const _0x8a5480 = {
            method: appName,
            params: {}
          };
          _0x8a5480.params.content = _0x870fd8;
          _0x8a5480.params.appName = appName;
          _0x8a5480.params.uuid = userId;
          wss[_0x5b39fd].send(JSON.stringify(_0x8a5480), _0x219b2a => {
            {
              if (_0x219b2a) {
                {
                  _0x40f053(_0x219b2a);
                }
              }
            }
          });
        }
      } else {
        {
          _0x3cd206(getSign(_0x5b39fd, _0x870fd8));
          wss[_0x5b39fd].removeListener("message", _0x15cc7e);
        }
      }
    }
  });
}
function getSign(_0x1bdf1a, _0x1799d3) {
  return new Promise((_0x2f9f4c, _0x5e89b4) => {
    {
      const _0x323683 = apiHost + "/sign/dxxw";
      const _0x3cc9ec = {
        content: _0x1799d3,
        appName: appName,
        uuid: userId
      };
      const _0x4a40dd = {
        "Content-Type": "application/json",
        accept: "application/json"
      };
      const _0x4080e9 = {
        url: _0x323683,
        headers: _0x4a40dd,
        body: JSON.stringify(_0x3cc9ec)
      };
      $.post(_0x4080e9, async (_0x5305fe, _0x2ff756, _0x43cd0d) => {
        {
          const _0x2f1e6e = _0x43cd0d.replace(/\"/g, "");
          requestSigns[_0x1bdf1a] = _0x2f1e6e;
          _0x2f9f4c();
        }
      });
    }
  });
}
function getAnswer(_0x3c1897, _0x5ebb5b) {
  return new Promise((_0x512f7b, _0x306b6b) => {
    {
      const _0x1917cd = apiHost + "/chat/deepseek";
      const _0x568792 = {
        keywords: _0x5ebb5b,
        uuid: userId
      };
      const _0xb25bdc = {
        "Content-Type": "application/json",
        accept: "application/json"
      };
      const _0xc8b2ae = {
        url: _0x1917cd,
        headers: _0xb25bdc,
        body: JSON.stringify(_0x568792)
      };
      $.post(_0xc8b2ae, async (_0x515c6f, _0x1ef85c, _0xeca092) => {
        {
          const _0x3c0c92 = _0xeca092.replace(/\"/g, "");
          requestSigns[_0x3c1897] = _0x3c0c92;
          _0x512f7b();
        }
      });
    }
  });
}
function sortUrlParams(_0x51b84a, _0x28ce77, _0x5ebcc7) {
  const _0x1c03c2 = url2obj(_0x51b84a);
  _0x28ce77.forEach(_0x1561d4 => {
    delete _0x1c03c2[_0x1561d4];
  });
  Object.assign(_0x1c03c2, _0x5ebcc7);
  const _0x1838e9 = Object.keys(_0x1c03c2).sort();
  const _0x50f139 = _0x1838e9.map(_0x3b2ce8 => _0x3b2ce8 + "=" + _0x1c03c2[_0x3b2ce8]).join("&");
  return _0x50f139;
}
function url2obj(_0x58aa51) {
  _0x58aa51 = _0x58aa51.replace(/\"/g, "");
  var _0x261ace;
  var _0x79c15 = {};
  var _0x360a41 = _0x58aa51.slice(_0x58aa51.indexOf("?") + 1).split("&");
  for (var _0x89ed18 = 0; _0x89ed18 < _0x360a41.length; _0x89ed18++) {
    _0x261ace = _0x360a41[_0x89ed18].split("=");
    _0x79c15[_0x261ace[0]] = _0x261ace[1];
  }
  return _0x79c15;
}
function convertStringToJson(_0x166f42) {
  const _0x674091 = _0x166f42.replace(/[{} ]/g, "");
  const _0x37d027 = _0x674091.split(",");
  const _0x4d37d1 = {};
  _0x37d027.forEach(_0x6aee8 => {
    {
      const [_0x3f98fc, _0x138fc5] = _0x6aee8.split("=");
      _0x4d37d1[_0x3f98fc] = _0x138fc5;
    }
  });
  return _0x4d37d1;
}
function getHostname(_0x2fecd1) {
  let _0x2aef60 = _0x2fecd1.substr(_0x2fecd1.indexOf("//") + 2);
  let _0x12d239 = _0x2aef60.substr(0, _0x2aef60.indexOf("/"));
  let _0x388a02 = "";
  let _0x1815a0 = _0x12d239.indexOf(":");
  if (_0x1815a0 > 0) {
    {
      _0x388a02 = _0x12d239.substr(0, _0x1815a0);
    }
  } else {
    {
      _0x388a02 = _0x12d239;
    }
  }
  return _0x388a02;
}
function calculateTimeDifference(_0x16d0b3, _0x1c398e) {
  var _0x36cc6a = new Date(_0x16d0b3);
  var _0x43684d = new Date(_0x1c398e);
  var _0x46b2b9 = _0x43684d - _0x36cc6a;
  var _0x1f4611 = Math.floor(_0x46b2b9 / 1000);
  return _0x1f4611;
}
function cutString(_0x3d6b99, _0x2c625e) {
  if (_0x3d6b99.length * 2 <= _0x2c625e) {
    {
      return _0x3d6b99;
    }
  }
  var _0x22c4b6 = 0;
  var _0x1c0018 = "";
  for (var _0x2cc1c1 = 0; _0x2cc1c1 < _0x3d6b99.length; _0x2cc1c1++) {
    {
      _0x1c0018 = _0x1c0018 + _0x3d6b99.charAt(_0x2cc1c1);
      if (_0x3d6b99.charCodeAt(_0x2cc1c1) > 128) {
        {
          _0x22c4b6 = _0x22c4b6 + 2;
          if (_0x22c4b6 >= _0x2c625e) {
            {
              return _0x1c0018.substring(0, _0x1c0018.length - 1) + "...";
            }
          }
        }
      } else {
        {
          _0x22c4b6 = _0x22c4b6 + 1;
          if (_0x22c4b6 >= _0x2c625e) {
            {
              return _0x1c0018.substring(0, _0x1c0018.length - 2) + "...";
            }
          }
        }
      }
    }
  }
  return _0x1c0018;
}
function printCaller() {
  return new Error().stack.split("\n")[3].split("@")[0];
}
function safeGet(_0x5e859b) {
  try {
    {
      if (typeof JSON.parse(_0x5e859b) == "object") {
        {
          return true;
        }
      }
    }
  } catch (_0x5147ae) {
    {
      console.log(_0x5147ae);
      console.log("服务器访问数据为空，请检查自身设备网络情况");
      return false;
    }
  }
}
function jsonToUrl(_0x5e2dbb) {
  var _0x539f9a = Object.keys(_0x5e2dbb).map(function (_0x474358) {
    {
      return encodeURIComponent(_0x474358) + "=" + encodeURIComponent(_0x5e2dbb[_0x474358]);
    }
  }).join("&");
  return _0x539f9a;
}
function compileStr(_0x5ba300) {
  var _0x4d8eb0 = String.fromCharCode(_0x5ba300.charCodeAt(0) + _0x5ba300.length);
  for (var _0x29d8f9 = 1; _0x29d8f9 < _0x5ba300.length; _0x29d8f9++) {
    {
      _0x4d8eb0 += String.fromCharCode(_0x5ba300.charCodeAt(_0x29d8f9) + _0x5ba300.charCodeAt(_0x29d8f9 - 1));
    }
  }
  return escape(_0x4d8eb0);
}
function uncompileStr(_0xc8c45c) {
  _0xc8c45c = unescape(_0xc8c45c);
  var _0x22b793 = String.fromCharCode(_0xc8c45c.charCodeAt(0) - _0xc8c45c.length);
  for (var _0x1442b5 = 1; _0x1442b5 < _0xc8c45c.length; _0x1442b5++) {
    _0x22b793 += String.fromCharCode(_0xc8c45c.charCodeAt(_0x1442b5) - _0x22b793.charCodeAt(_0x1442b5 - 1));
  }
  return _0x22b793;
}
function randomNum(_0x1c4722, _0x2a475a) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * _0x1c4722 + 1);
      break;
    case 2:
      return parseInt(Math.random() * (_0x2a475a - _0x1c4722 + 1) + _0x1c4722);
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
  function _0xe5633() {
    {
      return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
    }
  }
  return _0xe5633() + _0xe5633() + "-" + _0xe5633() + "-" + _0xe5633() + "-" + _0xe5633() + "-" + _0xe5633() + _0xe5633() + _0xe5633();
}
function phone_num(_0x464a51) {
  if (_0x464a51.length == 11) {
    {
      let _0xca4e17 = _0x464a51.replace(/(\d{3})\d{4}(\d{4})/, "$1****$2");
      return _0xca4e17;
    }
  } else {
    return _0x464a51;
  }
}
function txt_api(_0x443daf) {
  return new Promise((_0x1cfeb8, _0x330cc7) => {
    {
      const _0x4d5ae0 = "https://v1.hitokoto.cn/?c=e";
      const _0x25cd88 = {
        accept: "application/json"
      };
      const _0x1eced6 = {
        url: _0x4d5ae0,
        headers: _0x25cd88
      };
      $.get(_0x1eced6, async (_0xf5c685, _0x36a807, _0xf0cf42) => {
        {
          let _0x2ff852 = JSON.parse(_0xf0cf42);
          let _0x39040e = _0x2ff852.hitokoto;
          contents[_0x443daf] = _0x39040e + " " + _0x39040e;
          _0x1cfeb8();
        }
      });
    }
  });
}
function getTime_8() {
  return new Promise((_0x2004a3, _0x41f014) => {
    {
      const _0x3c7b57 = "http://api.m.taobao.com/rest/api3.do?api=mtop.common.getTimestamp";
      const _0x591d99 = {
        url: _0x3c7b57
      };
      $.get(_0x591d99, async (_0x51ff53, _0x25ba05, _0x2c8e39) => {
        _0x2004a3(_0x2c8e39);
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
async function sendMsg(_0x18b987) {
  if (hour == 9 || hour == 12 || hour == 18) {
    {
      if (tz == 1) {
        {
          if ($.isNode()) {
            await notify.sendNotify($.name, _0x18b987);
          } else {
            {
              $.msg($.name, "", _0x18b987);
            }
          }
        }
      } else {
        {
          $.log(_0x18b987);
        }
      }
    }
  }
}
async function wxPush(_0x4bfe83, _0x5058c7, _0x805510) {
  return new Promise((_0x2284e8, _0x25e135) => {
    {
      const _0x426985 = "https://wxpusher.zjiecode.com/api/send/message";
      const _0x1a771c = {
        appToken: "AT_6BZsE2IyJuVLPp3mcOkKvpoF245GR9xn",
        content: _0x5058c7,
        summary: "大象新闻抽奖通知",
        contentType: 1,
        uids: [_0x805510],
        verifyPay: false
      };
      const _0x2c9125 = {
        "Content-Type": "application/json"
      };
      const _0x52ac5e = {
        url: _0x426985,
        headers: _0x2c9125,
        body: JSON.stringify(_0x1a771c)
      };
      $.post(_0x52ac5e, async (_0xaf23fc, _0x383cfa, _0x6b8ae5) => {
        _0x2284e8();
      });
    }
  });
}
function randomString(_0xa07dd4, _0x19690b) {
  _0x19690b = _0x19690b || "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let _0x187800 = "";
  for (let _0x211526 = 0; _0x211526 < _0xa07dd4; _0x211526++) {
    {
      let _0x37fdeb = Math.floor(Math.random() * _0x19690b.length);
      _0x187800 += _0x19690b.substring(_0x37fdeb, _0x37fdeb + 1);
    }
  }
  return _0x187800;
}
async function wxPush(_0x12569d, _0x41c447, _0x558d2b) {
  return new Promise((_0x51a772, _0x4c46da) => {
    {
      const _0x387c60 = "https://wxpusher.zjiecode.com/api/send/message";
      const _0xafdfe9 = {
        appToken: "AT_c4P8PtQEcyg9C3ICLSBbziDJZnkMC9aH",
        content: _0x41c447,
        summary: "快手答题余额通知",
        contentType: 1,
        uids: [_0x558d2b],
        verifyPay: false
      };
      const _0x55ec82 = {
        "Content-Type": "application/json"
      };
      const _0x1f8f49 = {
        url: _0x387c60,
        headers: _0x55ec82,
        body: JSON.stringify(_0xafdfe9)
      };
      $.post(_0x1f8f49, async (_0x502804, _0x239b93, _0x691e83) => {
        _0x51a772();
      });
    }
  });
}
function MD5_Encrypt(_0x77a8de) {
  function _0x45b0bd(_0x3d6cf4, _0x1c7afe) {
    {
      return _0x3d6cf4 << _0x1c7afe | _0x3d6cf4 >>> 32 - _0x1c7afe;
    }
  }
  function _0x39b638(_0x3eeade, _0x2ae383) {
    {
      var _0x23d315;
      var _0x86d8d9;
      var _0x4ca1ef;
      var _0x73a5cb;
      var _0x3f4479;
      _0x4ca1ef = 2147483648 & _0x3eeade;
      _0x73a5cb = 2147483648 & _0x2ae383;
      _0x23d315 = 1073741824 & _0x3eeade;
      _0x86d8d9 = 1073741824 & _0x2ae383;
      _0x3f4479 = (1073741823 & _0x3eeade) + (1073741823 & _0x2ae383);
      return _0x23d315 & _0x86d8d9 ? 2147483648 ^ _0x3f4479 ^ _0x4ca1ef ^ _0x73a5cb : _0x23d315 | _0x86d8d9 ? 1073741824 & _0x3f4479 ? 3221225472 ^ _0x3f4479 ^ _0x4ca1ef ^ _0x73a5cb : 1073741824 ^ _0x3f4479 ^ _0x4ca1ef ^ _0x73a5cb : _0x3f4479 ^ _0x4ca1ef ^ _0x73a5cb;
    }
  }
  function _0x259eff(_0x24039a, _0x49f24e, _0x392a62) {
    {
      return _0x24039a & _0x49f24e | ~_0x24039a & _0x392a62;
    }
  }
  function _0x5ea5ad(_0x2ed230, _0x22b5f1, _0x7edb70) {
    {
      return _0x2ed230 & _0x7edb70 | _0x22b5f1 & ~_0x7edb70;
    }
  }
  function _0x19560a(_0x1f1132, _0x2b8539, _0x58fd31) {
    {
      return _0x1f1132 ^ _0x2b8539 ^ _0x58fd31;
    }
  }
  function _0x2c10e2(_0x47b821, _0x3422bf, _0x3a5858) {
    {
      return _0x3422bf ^ (_0x47b821 | ~_0x3a5858);
    }
  }
  function _0x3123e7(_0x309194, _0x5ce397, _0x2d6ab6, _0x257e24, _0x41c08c, _0x33c74a, _0x324900) {
    {
      _0x309194 = _0x39b638(_0x309194, _0x39b638(_0x39b638(_0x259eff(_0x5ce397, _0x2d6ab6, _0x257e24), _0x41c08c), _0x324900));
      return _0x39b638(_0x45b0bd(_0x309194, _0x33c74a), _0x5ce397);
    }
  }
  function _0xd247da(_0x4a0605, _0x4c0a0a, _0x13a348, _0x2c15eb, _0x31c5b7, _0xb68759, _0xc1111e) {
    {
      _0x4a0605 = _0x39b638(_0x4a0605, _0x39b638(_0x39b638(_0x5ea5ad(_0x4c0a0a, _0x13a348, _0x2c15eb), _0x31c5b7), _0xc1111e));
      return _0x39b638(_0x45b0bd(_0x4a0605, _0xb68759), _0x4c0a0a);
    }
  }
  function _0x46ee16(_0x142a6a, _0x8afac4, _0x1d391e, _0x2409b7, _0x148e92, _0x5c6d7d, _0x3fd104) {
    _0x142a6a = _0x39b638(_0x142a6a, _0x39b638(_0x39b638(_0x19560a(_0x8afac4, _0x1d391e, _0x2409b7), _0x148e92), _0x3fd104));
    return _0x39b638(_0x45b0bd(_0x142a6a, _0x5c6d7d), _0x8afac4);
  }
  function _0x254e41(_0x54c2ed, _0x54e5ce, _0x2f212c, _0x4d3b44, _0x2d48df, _0x8158c5, _0x253515) {
    _0x54c2ed = _0x39b638(_0x54c2ed, _0x39b638(_0x39b638(_0x2c10e2(_0x54e5ce, _0x2f212c, _0x4d3b44), _0x2d48df), _0x253515));
    return _0x39b638(_0x45b0bd(_0x54c2ed, _0x8158c5), _0x54e5ce);
  }
  function _0x4bd9d2(_0x21a1cf) {
    {
      for (var _0x502510, _0x240b9d = _0x21a1cf.length, _0x2e7803 = _0x240b9d + 8, _0x7a71dc = (_0x2e7803 - _0x2e7803 % 64) / 64, _0x5e5efe = 16 * (_0x7a71dc + 1), _0x533a24 = new Array(_0x5e5efe - 1), _0x5d07c1 = 0, _0x35b0c6 = 0; _0x240b9d > _0x35b0c6;) {
        _0x502510 = (_0x35b0c6 - _0x35b0c6 % 4) / 4;
        _0x5d07c1 = _0x35b0c6 % 4 * 8;
        _0x533a24[_0x502510] = _0x533a24[_0x502510] | _0x21a1cf.charCodeAt(_0x35b0c6) << _0x5d07c1;
        _0x35b0c6++;
      }
      _0x502510 = (_0x35b0c6 - _0x35b0c6 % 4) / 4;
      _0x5d07c1 = _0x35b0c6 % 4 * 8;
      _0x533a24[_0x502510] = _0x533a24[_0x502510] | 128 << _0x5d07c1;
      _0x533a24[_0x5e5efe - 2] = _0x240b9d << 3;
      _0x533a24[_0x5e5efe - 1] = _0x240b9d >>> 29;
      return _0x533a24;
    }
  }
  function _0x4beb5c(_0x4cd411) {
    {
      var _0x1adc7a;
      var _0x2d9ccc;
      var _0x36faa0 = "";
      var _0x52a16b = "";
      for (_0x2d9ccc = 0; 3 >= _0x2d9ccc; _0x2d9ccc++) {
        _0x1adc7a = _0x4cd411 >>> 8 * _0x2d9ccc & 255;
        _0x52a16b = "0" + _0x1adc7a.toString(16);
        _0x36faa0 += _0x52a16b.substr(_0x52a16b.length - 2, 2);
      }
      return _0x36faa0;
    }
  }
  function _0x20752a(_0x2dbccb) {
    {
      _0x2dbccb = _0x2dbccb.replace(/\r\n/g, "\n");
      for (var _0x4872b0 = "", _0x8c951 = 0; _0x8c951 < _0x2dbccb.length; _0x8c951++) {
        {
          var _0x38709d = _0x2dbccb.charCodeAt(_0x8c951);
          128 > _0x38709d ? _0x4872b0 += String.fromCharCode(_0x38709d) : _0x38709d > 127 && 2048 > _0x38709d ? (_0x4872b0 += String.fromCharCode(_0x38709d >> 6 | 192), _0x4872b0 += String.fromCharCode(63 & _0x38709d | 128)) : (_0x4872b0 += String.fromCharCode(_0x38709d >> 12 | 224), _0x4872b0 += String.fromCharCode(_0x38709d >> 6 & 63 | 128), _0x4872b0 += String.fromCharCode(63 & _0x38709d | 128));
        }
      }
      return _0x4872b0;
    }
  }
  var _0x1f6297;
  var _0x3d5161;
  var _0xb32431;
  var _0x152ab7;
  var _0x231145;
  var _0x58deb9;
  var _0x43d879;
  var _0xa9d639;
  var _0x366b28;
  var _0x3889ed = [];
  var _0x32d065 = 7;
  var _0x2df6d4 = 12;
  var _0x200ec5 = 17;
  var _0x14b99d = 22;
  var _0x1356d8 = 5;
  var _0x87443e = 9;
  var _0x2fb44d = 14;
  var _0x22c8db = 20;
  var _0x1e894f = 4;
  var _0x12e478 = 11;
  var _0x403dd4 = 16;
  var _0x56d82b = 23;
  var _0x50af79 = 6;
  var _0x2bba41 = 10;
  var _0x16bc78 = 15;
  var _0x53ace5 = 21;
  for (_0x77a8de = _0x20752a(_0x77a8de), _0x3889ed = _0x4bd9d2(_0x77a8de), _0x58deb9 = 1732584193, _0x43d879 = 4023233417, _0xa9d639 = 2562383102, _0x366b28 = 271733878, _0x1f6297 = 0; _0x1f6297 < _0x3889ed.length; _0x1f6297 += 16) {
    _0x3d5161 = _0x58deb9;
    _0xb32431 = _0x43d879;
    _0x152ab7 = _0xa9d639;
    _0x231145 = _0x366b28;
    _0x58deb9 = _0x3123e7(_0x58deb9, _0x43d879, _0xa9d639, _0x366b28, _0x3889ed[_0x1f6297 + 0], _0x32d065, 3614090360);
    _0x366b28 = _0x3123e7(_0x366b28, _0x58deb9, _0x43d879, _0xa9d639, _0x3889ed[_0x1f6297 + 1], _0x2df6d4, 3905402710);
    _0xa9d639 = _0x3123e7(_0xa9d639, _0x366b28, _0x58deb9, _0x43d879, _0x3889ed[_0x1f6297 + 2], _0x200ec5, 606105819);
    _0x43d879 = _0x3123e7(_0x43d879, _0xa9d639, _0x366b28, _0x58deb9, _0x3889ed[_0x1f6297 + 3], _0x14b99d, 3250441966);
    _0x58deb9 = _0x3123e7(_0x58deb9, _0x43d879, _0xa9d639, _0x366b28, _0x3889ed[_0x1f6297 + 4], _0x32d065, 4118548399);
    _0x366b28 = _0x3123e7(_0x366b28, _0x58deb9, _0x43d879, _0xa9d639, _0x3889ed[_0x1f6297 + 5], _0x2df6d4, 1200080426);
    _0xa9d639 = _0x3123e7(_0xa9d639, _0x366b28, _0x58deb9, _0x43d879, _0x3889ed[_0x1f6297 + 6], _0x200ec5, 2821735955);
    _0x43d879 = _0x3123e7(_0x43d879, _0xa9d639, _0x366b28, _0x58deb9, _0x3889ed[_0x1f6297 + 7], _0x14b99d, 4249261313);
    _0x58deb9 = _0x3123e7(_0x58deb9, _0x43d879, _0xa9d639, _0x366b28, _0x3889ed[_0x1f6297 + 8], _0x32d065, 1770035416);
    _0x366b28 = _0x3123e7(_0x366b28, _0x58deb9, _0x43d879, _0xa9d639, _0x3889ed[_0x1f6297 + 9], _0x2df6d4, 2336552879);
    _0xa9d639 = _0x3123e7(_0xa9d639, _0x366b28, _0x58deb9, _0x43d879, _0x3889ed[_0x1f6297 + 10], _0x200ec5, 4294925233);
    _0x43d879 = _0x3123e7(_0x43d879, _0xa9d639, _0x366b28, _0x58deb9, _0x3889ed[_0x1f6297 + 11], _0x14b99d, 2304563134);
    _0x58deb9 = _0x3123e7(_0x58deb9, _0x43d879, _0xa9d639, _0x366b28, _0x3889ed[_0x1f6297 + 12], _0x32d065, 1804603682);
    _0x366b28 = _0x3123e7(_0x366b28, _0x58deb9, _0x43d879, _0xa9d639, _0x3889ed[_0x1f6297 + 13], _0x2df6d4, 4254626195);
    _0xa9d639 = _0x3123e7(_0xa9d639, _0x366b28, _0x58deb9, _0x43d879, _0x3889ed[_0x1f6297 + 14], _0x200ec5, 2792965006);
    _0x43d879 = _0x3123e7(_0x43d879, _0xa9d639, _0x366b28, _0x58deb9, _0x3889ed[_0x1f6297 + 15], _0x14b99d, 1236535329);
    _0x58deb9 = _0xd247da(_0x58deb9, _0x43d879, _0xa9d639, _0x366b28, _0x3889ed[_0x1f6297 + 1], _0x1356d8, 4129170786);
    _0x366b28 = _0xd247da(_0x366b28, _0x58deb9, _0x43d879, _0xa9d639, _0x3889ed[_0x1f6297 + 6], _0x87443e, 3225465664);
    _0xa9d639 = _0xd247da(_0xa9d639, _0x366b28, _0x58deb9, _0x43d879, _0x3889ed[_0x1f6297 + 11], _0x2fb44d, 643717713);
    _0x43d879 = _0xd247da(_0x43d879, _0xa9d639, _0x366b28, _0x58deb9, _0x3889ed[_0x1f6297 + 0], _0x22c8db, 3921069994);
    _0x58deb9 = _0xd247da(_0x58deb9, _0x43d879, _0xa9d639, _0x366b28, _0x3889ed[_0x1f6297 + 5], _0x1356d8, 3593408605);
    _0x366b28 = _0xd247da(_0x366b28, _0x58deb9, _0x43d879, _0xa9d639, _0x3889ed[_0x1f6297 + 10], _0x87443e, 38016083);
    _0xa9d639 = _0xd247da(_0xa9d639, _0x366b28, _0x58deb9, _0x43d879, _0x3889ed[_0x1f6297 + 15], _0x2fb44d, 3634488961);
    _0x43d879 = _0xd247da(_0x43d879, _0xa9d639, _0x366b28, _0x58deb9, _0x3889ed[_0x1f6297 + 4], _0x22c8db, 3889429448);
    _0x58deb9 = _0xd247da(_0x58deb9, _0x43d879, _0xa9d639, _0x366b28, _0x3889ed[_0x1f6297 + 9], _0x1356d8, 568446438);
    _0x366b28 = _0xd247da(_0x366b28, _0x58deb9, _0x43d879, _0xa9d639, _0x3889ed[_0x1f6297 + 14], _0x87443e, 3275163606);
    _0xa9d639 = _0xd247da(_0xa9d639, _0x366b28, _0x58deb9, _0x43d879, _0x3889ed[_0x1f6297 + 3], _0x2fb44d, 4107603335);
    _0x43d879 = _0xd247da(_0x43d879, _0xa9d639, _0x366b28, _0x58deb9, _0x3889ed[_0x1f6297 + 8], _0x22c8db, 1163531501);
    _0x58deb9 = _0xd247da(_0x58deb9, _0x43d879, _0xa9d639, _0x366b28, _0x3889ed[_0x1f6297 + 13], _0x1356d8, 2850285829);
    _0x366b28 = _0xd247da(_0x366b28, _0x58deb9, _0x43d879, _0xa9d639, _0x3889ed[_0x1f6297 + 2], _0x87443e, 4243563512);
    _0xa9d639 = _0xd247da(_0xa9d639, _0x366b28, _0x58deb9, _0x43d879, _0x3889ed[_0x1f6297 + 7], _0x2fb44d, 1735328473);
    _0x43d879 = _0xd247da(_0x43d879, _0xa9d639, _0x366b28, _0x58deb9, _0x3889ed[_0x1f6297 + 12], _0x22c8db, 2368359562);
    _0x58deb9 = _0x46ee16(_0x58deb9, _0x43d879, _0xa9d639, _0x366b28, _0x3889ed[_0x1f6297 + 5], _0x1e894f, 4294588738);
    _0x366b28 = _0x46ee16(_0x366b28, _0x58deb9, _0x43d879, _0xa9d639, _0x3889ed[_0x1f6297 + 8], _0x12e478, 2272392833);
    _0xa9d639 = _0x46ee16(_0xa9d639, _0x366b28, _0x58deb9, _0x43d879, _0x3889ed[_0x1f6297 + 11], _0x403dd4, 1839030562);
    _0x43d879 = _0x46ee16(_0x43d879, _0xa9d639, _0x366b28, _0x58deb9, _0x3889ed[_0x1f6297 + 14], _0x56d82b, 4259657740);
    _0x58deb9 = _0x46ee16(_0x58deb9, _0x43d879, _0xa9d639, _0x366b28, _0x3889ed[_0x1f6297 + 1], _0x1e894f, 2763975236);
    _0x366b28 = _0x46ee16(_0x366b28, _0x58deb9, _0x43d879, _0xa9d639, _0x3889ed[_0x1f6297 + 4], _0x12e478, 1272893353);
    _0xa9d639 = _0x46ee16(_0xa9d639, _0x366b28, _0x58deb9, _0x43d879, _0x3889ed[_0x1f6297 + 7], _0x403dd4, 4139469664);
    _0x43d879 = _0x46ee16(_0x43d879, _0xa9d639, _0x366b28, _0x58deb9, _0x3889ed[_0x1f6297 + 10], _0x56d82b, 3200236656);
    _0x58deb9 = _0x46ee16(_0x58deb9, _0x43d879, _0xa9d639, _0x366b28, _0x3889ed[_0x1f6297 + 13], _0x1e894f, 681279174);
    _0x366b28 = _0x46ee16(_0x366b28, _0x58deb9, _0x43d879, _0xa9d639, _0x3889ed[_0x1f6297 + 0], _0x12e478, 3936430074);
    _0xa9d639 = _0x46ee16(_0xa9d639, _0x366b28, _0x58deb9, _0x43d879, _0x3889ed[_0x1f6297 + 3], _0x403dd4, 3572445317);
    _0x43d879 = _0x46ee16(_0x43d879, _0xa9d639, _0x366b28, _0x58deb9, _0x3889ed[_0x1f6297 + 6], _0x56d82b, 76029189);
    _0x58deb9 = _0x46ee16(_0x58deb9, _0x43d879, _0xa9d639, _0x366b28, _0x3889ed[_0x1f6297 + 9], _0x1e894f, 3654602809);
    _0x366b28 = _0x46ee16(_0x366b28, _0x58deb9, _0x43d879, _0xa9d639, _0x3889ed[_0x1f6297 + 12], _0x12e478, 3873151461);
    _0xa9d639 = _0x46ee16(_0xa9d639, _0x366b28, _0x58deb9, _0x43d879, _0x3889ed[_0x1f6297 + 15], _0x403dd4, 530742520);
    _0x43d879 = _0x46ee16(_0x43d879, _0xa9d639, _0x366b28, _0x58deb9, _0x3889ed[_0x1f6297 + 2], _0x56d82b, 3299628645);
    _0x58deb9 = _0x254e41(_0x58deb9, _0x43d879, _0xa9d639, _0x366b28, _0x3889ed[_0x1f6297 + 0], _0x50af79, 4096336452);
    _0x366b28 = _0x254e41(_0x366b28, _0x58deb9, _0x43d879, _0xa9d639, _0x3889ed[_0x1f6297 + 7], _0x2bba41, 1126891415);
    _0xa9d639 = _0x254e41(_0xa9d639, _0x366b28, _0x58deb9, _0x43d879, _0x3889ed[_0x1f6297 + 14], _0x16bc78, 2878612391);
    _0x43d879 = _0x254e41(_0x43d879, _0xa9d639, _0x366b28, _0x58deb9, _0x3889ed[_0x1f6297 + 5], _0x53ace5, 4237533241);
    _0x58deb9 = _0x254e41(_0x58deb9, _0x43d879, _0xa9d639, _0x366b28, _0x3889ed[_0x1f6297 + 12], _0x50af79, 1700485571);
    _0x366b28 = _0x254e41(_0x366b28, _0x58deb9, _0x43d879, _0xa9d639, _0x3889ed[_0x1f6297 + 3], _0x2bba41, 2399980690);
    _0xa9d639 = _0x254e41(_0xa9d639, _0x366b28, _0x58deb9, _0x43d879, _0x3889ed[_0x1f6297 + 10], _0x16bc78, 4293915773);
    _0x43d879 = _0x254e41(_0x43d879, _0xa9d639, _0x366b28, _0x58deb9, _0x3889ed[_0x1f6297 + 1], _0x53ace5, 2240044497);
    _0x58deb9 = _0x254e41(_0x58deb9, _0x43d879, _0xa9d639, _0x366b28, _0x3889ed[_0x1f6297 + 8], _0x50af79, 1873313359);
    _0x366b28 = _0x254e41(_0x366b28, _0x58deb9, _0x43d879, _0xa9d639, _0x3889ed[_0x1f6297 + 15], _0x2bba41, 4264355552);
    _0xa9d639 = _0x254e41(_0xa9d639, _0x366b28, _0x58deb9, _0x43d879, _0x3889ed[_0x1f6297 + 6], _0x16bc78, 2734768916);
    _0x43d879 = _0x254e41(_0x43d879, _0xa9d639, _0x366b28, _0x58deb9, _0x3889ed[_0x1f6297 + 13], _0x53ace5, 1309151649);
    _0x58deb9 = _0x254e41(_0x58deb9, _0x43d879, _0xa9d639, _0x366b28, _0x3889ed[_0x1f6297 + 4], _0x50af79, 4149444226);
    _0x366b28 = _0x254e41(_0x366b28, _0x58deb9, _0x43d879, _0xa9d639, _0x3889ed[_0x1f6297 + 11], _0x2bba41, 3174756917);
    _0xa9d639 = _0x254e41(_0xa9d639, _0x366b28, _0x58deb9, _0x43d879, _0x3889ed[_0x1f6297 + 2], _0x16bc78, 718787259);
    _0x43d879 = _0x254e41(_0x43d879, _0xa9d639, _0x366b28, _0x58deb9, _0x3889ed[_0x1f6297 + 9], _0x53ace5, 3951481745);
    _0x58deb9 = _0x39b638(_0x58deb9, _0x3d5161);
    _0x43d879 = _0x39b638(_0x43d879, _0xb32431);
    _0xa9d639 = _0x39b638(_0xa9d639, _0x152ab7);
    _0x366b28 = _0x39b638(_0x366b28, _0x231145);
  }
  var _0x352252 = _0x4beb5c(_0x58deb9) + _0x4beb5c(_0x43d879) + _0x4beb5c(_0xa9d639) + _0x4beb5c(_0x366b28);
  return _0x352252.toLowerCase();
}
function SHA256(_0x46a996) {
  var _0x5b7447 = 8;
  var _0x58b4a2 = 0;
  function _0x729d74(_0x30b4ea, _0xa4046f) {
    {
      var _0x243764 = (_0x30b4ea & 65535) + (_0xa4046f & 65535);
      var _0x5745c0 = (_0x30b4ea >> 16) + (_0xa4046f >> 16) + (_0x243764 >> 16);
      return _0x5745c0 << 16 | _0x243764 & 65535;
    }
  }
  function _0x125016(_0x214280, _0xe9d450) {
    {
      return _0x214280 >>> _0xe9d450 | _0x214280 << 32 - _0xe9d450;
    }
  }
  function _0x451ce2(_0x92aec4, _0x23f00d) {
    return _0x92aec4 >>> _0x23f00d;
  }
  function _0x1434af(_0x470d9c, _0x2fa3e5, _0x2fbc8c) {
    return _0x470d9c & _0x2fa3e5 ^ ~_0x470d9c & _0x2fbc8c;
  }
  function _0x1dd731(_0x11d36a, _0x3074f7, _0x60948d) {
    {
      return _0x11d36a & _0x3074f7 ^ _0x11d36a & _0x60948d ^ _0x3074f7 & _0x60948d;
    }
  }
  function _0xe47ff3(_0xb48e4a) {
    {
      return _0x125016(_0xb48e4a, 2) ^ _0x125016(_0xb48e4a, 13) ^ _0x125016(_0xb48e4a, 22);
    }
  }
  function _0x259b89(_0xf4fc7) {
    return _0x125016(_0xf4fc7, 6) ^ _0x125016(_0xf4fc7, 11) ^ _0x125016(_0xf4fc7, 25);
  }
  function _0x3a4529(_0x57310c) {
    {
      return _0x125016(_0x57310c, 7) ^ _0x125016(_0x57310c, 18) ^ _0x451ce2(_0x57310c, 3);
    }
  }
  function _0x2fc432(_0xdd1fce) {
    {
      return _0x125016(_0xdd1fce, 17) ^ _0x125016(_0xdd1fce, 19) ^ _0x451ce2(_0xdd1fce, 10);
    }
  }
  function _0x16e3b6(_0x50a1b0, _0x7277e9) {
    {
      var _0x1fb4e3 = new Array(1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298);
      var _0x30efbd = new Array(1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225);
      var _0x11e306 = new Array(64);
      var _0xec686f;
      var _0x13f073;
      var _0x1d8173;
      var _0x18e785;
      var _0x5a9212;
      var _0x4082f0;
      var _0x377e82;
      var _0x5b688b;
      var _0x3841a8;
      var _0x1e26ad;
      var _0x3b2a16;
      var _0x433888;
      _0x50a1b0[_0x7277e9 >> 5] |= 128 << 24 - _0x7277e9 % 32;
      _0x50a1b0[(_0x7277e9 + 64 >> 9 << 4) + 15] = _0x7277e9;
      for (var _0x3841a8 = 0; _0x3841a8 < _0x50a1b0.length; _0x3841a8 += 16) {
        {
          _0xec686f = _0x30efbd[0];
          _0x13f073 = _0x30efbd[1];
          _0x1d8173 = _0x30efbd[2];
          _0x18e785 = _0x30efbd[3];
          _0x5a9212 = _0x30efbd[4];
          _0x4082f0 = _0x30efbd[5];
          _0x377e82 = _0x30efbd[6];
          _0x5b688b = _0x30efbd[7];
          for (var _0x1e26ad = 0; _0x1e26ad < 64; _0x1e26ad++) {
            {
              if (_0x1e26ad < 16) {
                _0x11e306[_0x1e26ad] = _0x50a1b0[_0x1e26ad + _0x3841a8];
              } else {
                _0x11e306[_0x1e26ad] = _0x729d74(_0x729d74(_0x729d74(_0x2fc432(_0x11e306[_0x1e26ad - 2]), _0x11e306[_0x1e26ad - 7]), _0x3a4529(_0x11e306[_0x1e26ad - 15])), _0x11e306[_0x1e26ad - 16]);
              }
              _0x3b2a16 = _0x729d74(_0x729d74(_0x729d74(_0x729d74(_0x5b688b, _0x259b89(_0x5a9212)), _0x1434af(_0x5a9212, _0x4082f0, _0x377e82)), _0x1fb4e3[_0x1e26ad]), _0x11e306[_0x1e26ad]);
              _0x433888 = _0x729d74(_0xe47ff3(_0xec686f), _0x1dd731(_0xec686f, _0x13f073, _0x1d8173));
              _0x5b688b = _0x377e82;
              _0x377e82 = _0x4082f0;
              _0x4082f0 = _0x5a9212;
              _0x5a9212 = _0x729d74(_0x18e785, _0x3b2a16);
              _0x18e785 = _0x1d8173;
              _0x1d8173 = _0x13f073;
              _0x13f073 = _0xec686f;
              _0xec686f = _0x729d74(_0x3b2a16, _0x433888);
            }
          }
          _0x30efbd[0] = _0x729d74(_0xec686f, _0x30efbd[0]);
          _0x30efbd[1] = _0x729d74(_0x13f073, _0x30efbd[1]);
          _0x30efbd[2] = _0x729d74(_0x1d8173, _0x30efbd[2]);
          _0x30efbd[3] = _0x729d74(_0x18e785, _0x30efbd[3]);
          _0x30efbd[4] = _0x729d74(_0x5a9212, _0x30efbd[4]);
          _0x30efbd[5] = _0x729d74(_0x4082f0, _0x30efbd[5]);
          _0x30efbd[6] = _0x729d74(_0x377e82, _0x30efbd[6]);
          _0x30efbd[7] = _0x729d74(_0x5b688b, _0x30efbd[7]);
        }
      }
      return _0x30efbd;
    }
  }
  function _0x2552eb(_0x433c6c) {
    {
      var _0x3e10b7 = Array();
      var _0x2a5686 = (1 << _0x5b7447) - 1;
      for (var _0x33500a = 0; _0x33500a < _0x433c6c.length * _0x5b7447; _0x33500a += _0x5b7447) {
        {
          _0x3e10b7[_0x33500a >> 5] |= (_0x433c6c.charCodeAt(_0x33500a / _0x5b7447) & _0x2a5686) << 24 - _0x33500a % 32;
        }
      }
      return _0x3e10b7;
    }
  }
  function _0x1a2574(_0x483811) {
    {
      _0x483811 = _0x483811.replace(/\r\n/g, "\n");
      var _0x868c48 = "";
      for (var _0x4641ea = 0; _0x4641ea < _0x483811.length; _0x4641ea++) {
        {
          var _0x236f9c = _0x483811.charCodeAt(_0x4641ea);
          if (_0x236f9c < 128) {
            _0x868c48 += String.fromCharCode(_0x236f9c);
          } else {
            if (_0x236f9c > 127 && _0x236f9c < 2048) {
              {
                _0x868c48 += String.fromCharCode(_0x236f9c >> 6 | 192);
                _0x868c48 += String.fromCharCode(_0x236f9c & 63 | 128);
              }
            } else {
              {
                _0x868c48 += String.fromCharCode(_0x236f9c >> 12 | 224);
                _0x868c48 += String.fromCharCode(_0x236f9c >> 6 & 63 | 128);
                _0x868c48 += String.fromCharCode(_0x236f9c & 63 | 128);
              }
            }
          }
        }
      }
      return _0x868c48;
    }
  }
  function _0x235195(_0x52b51c) {
    {
      var _0x1c2bf9 = _0x58b4a2 ? "0123456789ABCDEF" : "0123456789abcdef";
      var _0x39ae0a = "";
      for (var _0x44f1fd = 0; _0x44f1fd < _0x52b51c.length * 4; _0x44f1fd++) {
        _0x39ae0a += _0x1c2bf9.charAt(_0x52b51c[_0x44f1fd >> 2] >> (3 - _0x44f1fd % 4) * 8 + 4 & 15) + _0x1c2bf9.charAt(_0x52b51c[_0x44f1fd >> 2] >> (3 - _0x44f1fd % 4) * 8 & 15);
      }
      return _0x39ae0a;
    }
  }
  _0x46a996 = _0x1a2574(_0x46a996);
  return _0x235195(_0x16e3b6(_0x2552eb(_0x46a996), _0x46a996.length * _0x5b7447));
}
function SHA1(_0x5c4f1d) {
  function _0x5685c3(_0x126847, _0x4a7d86) {
    {
      var _0x32e054 = _0x126847 << _0x4a7d86 | _0x126847 >>> 32 - _0x4a7d86;
      return _0x32e054;
    }
  }
  function _0x4f7839(_0x18e07a) {
    {
      var _0x36c246 = "";
      var _0x20f950;
      var _0xe9c624;
      var _0xd9cef8;
      for (_0x20f950 = 0; _0x20f950 <= 6; _0x20f950 += 2) {
        {
          _0xe9c624 = _0x18e07a >>> _0x20f950 * 4 + 4 & 15;
          _0xd9cef8 = _0x18e07a >>> _0x20f950 * 4 & 15;
          _0x36c246 += _0xe9c624.toString(16) + _0xd9cef8.toString(16);
        }
      }
      return _0x36c246;
    }
  }
  function _0x25f94b(_0x2f4925) {
    {
      var _0x2905a7 = "";
      var _0x214942;
      var _0x1c25d1;
      for (_0x214942 = 7; _0x214942 >= 0; _0x214942--) {
        {
          _0x1c25d1 = _0x2f4925 >>> _0x214942 * 4 & 15;
          _0x2905a7 += _0x1c25d1.toString(16);
        }
      }
      return _0x2905a7;
    }
  }
  function _0x506b07(_0x3d6a41) {
    {
      _0x3d6a41 = _0x3d6a41.replace(/\r\n/g, "\n");
      var _0x3d2f25 = "";
      for (var _0x2bb541 = 0; _0x2bb541 < _0x3d6a41.length; _0x2bb541++) {
        {
          var _0x377f8e = _0x3d6a41.charCodeAt(_0x2bb541);
          if (_0x377f8e < 128) {
            {
              _0x3d2f25 += String.fromCharCode(_0x377f8e);
            }
          } else {
            if (_0x377f8e > 127 && _0x377f8e < 2048) {
              _0x3d2f25 += String.fromCharCode(_0x377f8e >> 6 | 192);
              _0x3d2f25 += String.fromCharCode(_0x377f8e & 63 | 128);
            } else {
              {
                _0x3d2f25 += String.fromCharCode(_0x377f8e >> 12 | 224);
                _0x3d2f25 += String.fromCharCode(_0x377f8e >> 6 & 63 | 128);
                _0x3d2f25 += String.fromCharCode(_0x377f8e & 63 | 128);
              }
            }
          }
        }
      }
      return _0x3d2f25;
    }
  }
  var _0x5af88b;
  var _0x5a9c29;
  var _0x18d6cc;
  var _0x52b82a = new Array(80);
  var _0x3ae983 = 1732584193;
  var _0xaa579c = 4023233417;
  var _0x45b60c = 2562383102;
  var _0x3a7a1b = 271733878;
  var _0xa7a729 = 3285377520;
  var _0x2357e6;
  var _0x183814;
  var _0x37d7c2;
  var _0x551ec2;
  var _0x2e64cc;
  var _0x5e38be;
  _0x5c4f1d = _0x506b07(_0x5c4f1d);
  var _0x43010c = _0x5c4f1d.length;
  var _0x18f4e6 = new Array();
  for (_0x5a9c29 = 0; _0x5a9c29 < _0x43010c - 3; _0x5a9c29 += 4) {
    {
      _0x18d6cc = _0x5c4f1d.charCodeAt(_0x5a9c29) << 24 | _0x5c4f1d.charCodeAt(_0x5a9c29 + 1 < 10 ? "0" + (_0x5a9c29 + 1) : _0x5a9c29 + 1) << 16 | _0x5c4f1d.charCodeAt(_0x5a9c29 + 2) << 8 | _0x5c4f1d.charCodeAt(_0x5a9c29 + 3);
      _0x18f4e6.push(_0x18d6cc);
    }
  }
  switch (_0x43010c % 4) {
    case 0:
      _0x5a9c29 = 2147483648;
      break;
    case 1:
      _0x5a9c29 = _0x5c4f1d.charCodeAt(_0x43010c - 1) << 24 | 8388608;
      break;
    case 2:
      _0x5a9c29 = _0x5c4f1d.charCodeAt(_0x43010c - 2) << 24 | _0x5c4f1d.charCodeAt(_0x43010c - 1) << 16 | 32768;
      break;
    case 3:
      _0x5a9c29 = _0x5c4f1d.charCodeAt(_0x43010c - 3) << 24 | _0x5c4f1d.charCodeAt(_0x43010c - 2) << 16 | _0x5c4f1d.charCodeAt(_0x43010c - 1) << 8 | 128;
      break;
  }
  _0x18f4e6.push(_0x5a9c29);
  while (_0x18f4e6.length % 16 != 14) {
    _0x18f4e6.push(0);
  }
  _0x18f4e6.push(_0x43010c >>> 29);
  _0x18f4e6.push(_0x43010c << 3 & 4294967295);
  for (_0x5af88b = 0; _0x5af88b < _0x18f4e6.length; _0x5af88b += 16) {
    {
      for (_0x5a9c29 = 0; _0x5a9c29 < 16; _0x5a9c29++) {
        _0x52b82a[_0x5a9c29] = _0x18f4e6[_0x5af88b + _0x5a9c29];
      }
      for (_0x5a9c29 = 16; _0x5a9c29 <= 79; _0x5a9c29++) {
        _0x52b82a[_0x5a9c29] = _0x5685c3(_0x52b82a[_0x5a9c29 - 3] ^ _0x52b82a[_0x5a9c29 - 8] ^ _0x52b82a[_0x5a9c29 - 14] ^ _0x52b82a[_0x5a9c29 - 16], 1);
      }
      _0x2357e6 = _0x3ae983;
      _0x183814 = _0xaa579c;
      _0x37d7c2 = _0x45b60c;
      _0x551ec2 = _0x3a7a1b;
      _0x2e64cc = _0xa7a729;
      for (_0x5a9c29 = 0; _0x5a9c29 <= 19; _0x5a9c29++) {
        {
          _0x5e38be = _0x5685c3(_0x2357e6, 5) + (_0x183814 & _0x37d7c2 | ~_0x183814 & _0x551ec2) + _0x2e64cc + _0x52b82a[_0x5a9c29] + 1518500249 & 4294967295;
          _0x2e64cc = _0x551ec2;
          _0x551ec2 = _0x37d7c2;
          _0x37d7c2 = _0x5685c3(_0x183814, 30);
          _0x183814 = _0x2357e6;
          _0x2357e6 = _0x5e38be;
        }
      }
      for (_0x5a9c29 = 20; _0x5a9c29 <= 39; _0x5a9c29++) {
        {
          _0x5e38be = _0x5685c3(_0x2357e6, 5) + (_0x183814 ^ _0x37d7c2 ^ _0x551ec2) + _0x2e64cc + _0x52b82a[_0x5a9c29] + 1859775393 & 4294967295;
          _0x2e64cc = _0x551ec2;
          _0x551ec2 = _0x37d7c2;
          _0x37d7c2 = _0x5685c3(_0x183814, 30);
          _0x183814 = _0x2357e6;
          _0x2357e6 = _0x5e38be;
        }
      }
      for (_0x5a9c29 = 40; _0x5a9c29 <= 59; _0x5a9c29++) {
        {
          _0x5e38be = _0x5685c3(_0x2357e6, 5) + (_0x183814 & _0x37d7c2 | _0x183814 & _0x551ec2 | _0x37d7c2 & _0x551ec2) + _0x2e64cc + _0x52b82a[_0x5a9c29] + 2400959708 & 4294967295;
          _0x2e64cc = _0x551ec2;
          _0x551ec2 = _0x37d7c2;
          _0x37d7c2 = _0x5685c3(_0x183814, 30);
          _0x183814 = _0x2357e6;
          _0x2357e6 = _0x5e38be;
        }
      }
      for (_0x5a9c29 = 60; _0x5a9c29 <= 79; _0x5a9c29++) {
        {
          _0x5e38be = _0x5685c3(_0x2357e6, 5) + (_0x183814 ^ _0x37d7c2 ^ _0x551ec2) + _0x2e64cc + _0x52b82a[_0x5a9c29] + 3395469782 & 4294967295;
          _0x2e64cc = _0x551ec2;
          _0x551ec2 = _0x37d7c2;
          _0x37d7c2 = _0x5685c3(_0x183814, 30);
          _0x183814 = _0x2357e6;
          _0x2357e6 = _0x5e38be;
        }
      }
      _0x3ae983 = _0x3ae983 + _0x2357e6 & 4294967295;
      _0xaa579c = _0xaa579c + _0x183814 & 4294967295;
      _0x45b60c = _0x45b60c + _0x37d7c2 & 4294967295;
      _0x3a7a1b = _0x3a7a1b + _0x551ec2 & 4294967295;
      _0xa7a729 = _0xa7a729 + _0x2e64cc & 4294967295;
    }
  }
  var _0x5e38be = _0x25f94b(_0x3ae983) + _0x25f94b(_0xaa579c) + _0x25f94b(_0x45b60c) + _0x25f94b(_0x3a7a1b) + _0x25f94b(_0xa7a729);
  return _0x5e38be.toLowerCase();
}
function Base64() {
  var _0x19343d = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  this.encode = function (_0x10f744) {
    {
      var _0x521e4e = "";
      var _0x4c472a;
      var _0x3d650b;
      var _0x993d22;
      var _0x3adb4f;
      var _0x1fcfe9;
      var _0x252bac;
      var _0x539726;
      var _0x45ab8d = 0;
      _0x10f744 = utf8Encode(_0x10f744);
      while (_0x45ab8d < _0x10f744.length) {
        {
          _0x4c472a = _0x10f744.charCodeAt(_0x45ab8d++);
          _0x3d650b = _0x10f744.charCodeAt(_0x45ab8d++);
          _0x993d22 = _0x10f744.charCodeAt(_0x45ab8d++);
          _0x3adb4f = _0x4c472a >> 2;
          _0x1fcfe9 = (_0x4c472a & 3) << 4 | _0x3d650b >> 4;
          _0x252bac = (_0x3d650b & 15) << 2 | _0x993d22 >> 6;
          _0x539726 = _0x993d22 & 63;
          if (isNaN(_0x3d650b)) {
            {
              _0x252bac = _0x539726 = 64;
            }
          } else {
            if (isNaN(_0x993d22)) {
              {
                _0x539726 = 64;
              }
            }
          }
          _0x521e4e = _0x521e4e + _0x19343d.charAt(_0x3adb4f) + _0x19343d.charAt(_0x1fcfe9) + _0x19343d.charAt(_0x252bac) + _0x19343d.charAt(_0x539726);
        }
      }
      return _0x521e4e;
    }
  };
  this.decode = function (_0x4bb53b) {
    {
      var _0x1bdb9b = "";
      var _0x19bdc6;
      var _0x27a515;
      var _0x216739;
      var _0x493c0d;
      var _0x579b93;
      var _0x34e0cb;
      var _0x19d99b;
      var _0x46dbd0 = 0;
      _0x4bb53b = _0x4bb53b.replace(/[^A-Za-z0-9\+\/\=]/g, "");
      while (_0x46dbd0 < _0x4bb53b.length) {
        {
          _0x493c0d = _0x19343d.indexOf(_0x4bb53b.charAt(_0x46dbd0++));
          _0x579b93 = _0x19343d.indexOf(_0x4bb53b.charAt(_0x46dbd0++));
          _0x34e0cb = _0x19343d.indexOf(_0x4bb53b.charAt(_0x46dbd0++));
          _0x19d99b = _0x19343d.indexOf(_0x4bb53b.charAt(_0x46dbd0++));
          _0x19bdc6 = _0x493c0d << 2 | _0x579b93 >> 4;
          _0x27a515 = (_0x579b93 & 15) << 4 | _0x34e0cb >> 2;
          _0x216739 = (_0x34e0cb & 3) << 6 | _0x19d99b;
          _0x1bdb9b = _0x1bdb9b + String.fromCharCode(_0x19bdc6);
          _0x34e0cb !== 64 && (_0x1bdb9b = _0x1bdb9b + String.fromCharCode(_0x27a515));
          if (_0x19d99b !== 64) {
            {
              _0x1bdb9b = _0x1bdb9b + String.fromCharCode(_0x216739);
            }
          }
        }
      }
      _0x1bdb9b = utf8Decode(_0x1bdb9b);
      return _0x1bdb9b;
    }
  };
  utf8Encode = function (_0x407740) {
    {
      _0x407740 = _0x407740.replace(/\r\n/g, "\n");
      var _0x316286 = "";
      for (var _0x165f68 = 0; _0x165f68 < _0x407740.length; _0x165f68++) {
        {
          var _0x217780 = _0x407740.charCodeAt(_0x165f68);
          if (_0x217780 < 128) {
            {
              _0x316286 += String.fromCharCode(_0x217780);
            }
          } else {
            _0x217780 > 127 && _0x217780 < 2048 ? (_0x316286 += String.fromCharCode(_0x217780 >> 6 | 192), _0x316286 += String.fromCharCode(_0x217780 & 63 | 128)) : (_0x316286 += String.fromCharCode(_0x217780 >> 12 | 224), _0x316286 += String.fromCharCode(_0x217780 >> 6 & 63 | 128), _0x316286 += String.fromCharCode(_0x217780 & 63 | 128));
          }
        }
      }
      return _0x316286;
    }
  };
  utf8Decode = function (_0x21c40c) {
    {
      var _0x484273 = "";
      var _0x30979b = 0;
      var _0x2cb800 = 0;
      var _0x2635fd = 0;
      var _0x3c20a8 = 0;
      while (_0x30979b < _0x21c40c.length) {
        {
          _0x2cb800 = _0x21c40c.charCodeAt(_0x30979b);
          if (_0x2cb800 < 128) {
            {
              _0x484273 += String.fromCharCode(_0x2cb800);
              _0x30979b++;
            }
          } else {
            if (_0x2cb800 > 191 && _0x2cb800 < 224) {
              {
                _0x2635fd = _0x21c40c.charCodeAt(_0x30979b + 1 < 10 ? "0" + (_0x30979b + 1) : _0x30979b + 1);
                _0x484273 += String.fromCharCode((_0x2cb800 & 31) << 6 | _0x2635fd & 63);
                _0x30979b += 2;
              }
            } else {
              {
                _0x2635fd = _0x21c40c.charCodeAt(_0x30979b + 1 < 10 ? "0" + (_0x30979b + 1) : _0x30979b + 1);
                _0x3c20a8 = _0x21c40c.charCodeAt(_0x30979b + 2);
                _0x484273 += String.fromCharCode((_0x2cb800 & 15) << 12 | (_0x2635fd & 63) << 6 | _0x3c20a8 & 63);
                _0x30979b += 3;
              }
            }
          }
        }
      }
      return _0x484273;
    }
  };
}
function Env(_0x36c0d9, _0x425d6e) {
  class _0x235108 {
    constructor(_0x5e3816) {
      this.env = _0x5e3816;
    }
    send(_0x37c993, _0x407ebf = "GET") {
      {
        _0x37c993 = typeof _0x37c993 === "string" ? {
          url: _0x37c993
        } : _0x37c993;
        let _0xa6d5c2 = this.get;
        if (_0x407ebf === "POST") {
          {
            _0xa6d5c2 = this.post;
          }
        }
        return new Promise((_0x2fa03c, _0x51ef20) => {
          _0xa6d5c2.call(this, _0x37c993, (_0x234321, _0x5c8322, _0x52dcda) => {
            {
              if (_0x234321) {
                _0x51ef20(_0x234321);
              } else {
                _0x2fa03c(_0x5c8322);
              }
            }
          });
        });
      }
    }
    get(_0x5d08fc) {
      {
        return this.send.call(this.env, _0x5d08fc);
      }
    }
    post(_0x4bed53) {
      {
        return this.send.call(this.env, _0x4bed53, "POST");
      }
    }
  }
  return new class {
    constructor(_0x1cefef, _0x2898f8) {
      {
        this.name = _0x1cefef;
        this.http = new _0x235108(this);
        this.data = null;
        this.dataFile = "box.dat";
        this.logs = [];
        this.isMute = false;
        this.isNeedRewrite = false;
        this.logSeparator = "\n";
        this.startTime = new Date().getTime();
        Object.assign(this, _0x2898f8);
        const _0x12499e = "\n       ***********          *****      ***       **** ******  ***********  \n       *************       ******      ***      ****  ****    ************ \n      ****      ****     ***  ***      ***     ***    ***    ***      **** \n      ***       ****    ***  ****      ***    ***    ****   ****       *** \n     ****       ***    ***    ***      ***   ***     ***    ***       **** \n     ***       ***    ****   ****      ***  ***     ****   ****       ***  \n    ***      ****    ************      *** ***      ***    ***      ****   \n   ****   ******   ****      ****      ******      ****   ****   ******    \n   **********     ****       ****      *****     ******  ***********";
        this.isNode() && this.log(_0x12499e);
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
    toObj(_0x1c6630, _0x26b840 = null) {
      {
        try {
          {
            return JSON.parse(_0x1c6630);
          }
        } catch {
          return _0x26b840;
        }
      }
    }
    toStr(_0x517ecd, _0x5a1f1f = null) {
      {
        try {
          {
            return JSON.stringify(_0x517ecd);
          }
        } catch {
          return _0x5a1f1f;
        }
      }
    }
    getjson(_0x4d3b28, _0x47b27c) {
      {
        let _0x1adf5a = _0x47b27c;
        const _0x1b0d18 = this.getdata(_0x4d3b28);
        if (_0x1b0d18) {
          {
            try {
              {
                _0x1adf5a = JSON.parse(this.getdata(_0x4d3b28));
              }
            } catch {}
          }
        }
        return _0x1adf5a;
      }
    }
    setjson(_0x9bc196, _0x4af795) {
      {
        try {
          {
            return this.setdata(JSON.stringify(_0x9bc196), _0x4af795);
          }
        } catch {
          {
            return false;
          }
        }
      }
    }
    getScript(_0x5bca4c) {
      {
        return new Promise(_0x36a653 => {
          {
            const _0x24ee23 = {
              url: _0x5bca4c
            };
            this.get(_0x24ee23, (_0x154d00, _0x179b56, _0x1ecff8) => _0x36a653(_0x1ecff8));
          }
        });
      }
    }
    runScript(_0x2f0176, _0x26de85) {
      {
        return new Promise(_0x56571f => {
          {
            let _0x188960 = this.getdata("@chavy_boxjs_userCfgs.httpapi");
            _0x188960 = _0x188960 ? _0x188960.replace(/\n/g, "").trim() : _0x188960;
            let _0x20e545 = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
            _0x20e545 = _0x20e545 ? _0x20e545 * 1 : 20;
            _0x20e545 = _0x26de85 && _0x26de85.timeout ? _0x26de85.timeout : _0x20e545;
            const [_0x554967, _0x44f0d4] = _0x188960.split("@");
            const _0x4f524a = {
              script_text: _0x2f0176,
              mock_type: "cron",
              timeout: _0x20e545
            };
            const _0x37c041 = {
              "X-Key": _0x554967,
              Accept: "*/*"
            };
            const _0x102efb = {
              url: "http: //" + _0x44f0d4 + "/v1/scripting/evaluate",
              body: _0x4f524a,
              headers: _0x37c041
            };
            this.post(_0x102efb, (_0x4664e6, _0x23a4ab, _0x46002b) => _0x56571f(_0x46002b));
          }
        }).catch(_0x16c3d5 => this.logErr(_0x16c3d5));
      }
    }
    loaddata() {
      {
        if (this.isNode()) {
          {
            this.fs = this.fs ? this.fs : require("fs");
            this.path = this.path ? this.path : require("path");
            const _0x5366cc = this.path.resolve(this.dataFile);
            const _0x2a48ac = this.path.resolve(process.cwd(), this.dataFile);
            const _0x4a5d96 = this.fs.existsSync(_0x5366cc);
            const _0x195cae = !_0x4a5d96 && this.fs.existsSync(_0x2a48ac);
            if (_0x4a5d96 || _0x195cae) {
              {
                const _0x32fc5a = _0x4a5d96 ? _0x5366cc : _0x2a48ac;
                try {
                  {
                    return JSON.parse(this.fs.readFileSync(_0x32fc5a));
                  }
                } catch (_0x28e768) {
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
            const _0x402aa5 = this.path.resolve(this.dataFile);
            const _0x3d8624 = this.path.resolve(process.cwd(), this.dataFile);
            const _0x5b820f = this.fs.existsSync(_0x402aa5);
            const _0x388dc7 = !_0x5b820f && this.fs.existsSync(_0x3d8624);
            const _0x1c438e = JSON.stringify(this.data);
            if (_0x5b820f) {
              this.fs.writeFileSync(_0x402aa5, _0x1c438e);
            } else {
              if (_0x388dc7) {
                {
                  this.fs.writeFileSync(_0x3d8624, _0x1c438e);
                }
              } else {
                this.fs.writeFileSync(_0x402aa5, _0x1c438e);
              }
            }
          }
        }
      }
    }
    lodash_get(_0x208f47, _0x267c9d, _0x3fefc3 = undefined) {
      {
        const _0x36e773 = _0x267c9d.replace(/[(d+)]/g, ".$1").split(".");
        let _0x2fe92e = _0x208f47;
        for (const _0x5f5239 of _0x36e773) {
          {
            _0x2fe92e = Object(_0x2fe92e)[_0x5f5239];
            if (_0x2fe92e === undefined) {
              {
                return _0x3fefc3;
              }
            }
          }
        }
        return _0x2fe92e;
      }
    }
    lodash_set(_0x363514, _0x4adcc6, _0x5286b4) {
      {
        if (Object(_0x363514) !== _0x363514) {
          return _0x363514;
        }
        if (!Array.isArray(_0x4adcc6)) {
          _0x4adcc6 = _0x4adcc6.toString().match(/[^.[]]+/g) || [];
        }
        _0x4adcc6.slice(0, -1).reduce((_0x4d9dd5, _0x3ff84b, _0x2ee6ab) => Object(_0x4d9dd5[_0x3ff84b]) === _0x4d9dd5[_0x3ff84b] ? _0x4d9dd5[_0x3ff84b] : _0x4d9dd5[_0x3ff84b] = Math.abs(_0x4adcc6[_0x2ee6ab + 1 < 10 ? "0" + (_0x2ee6ab + 1) : _0x2ee6ab + 1]) >> 0 === +_0x4adcc6[_0x2ee6ab + 1 < 10 ? "0" + (_0x2ee6ab + 1) : _0x2ee6ab + 1] ? [] : {}, _0x363514)[_0x4adcc6[_0x4adcc6.length - 1]] = _0x5286b4;
        return _0x363514;
      }
    }
    getdata(_0xbe8458) {
      {
        let _0x1a001f = this.getval(_0xbe8458);
        if (/^@/.test(_0xbe8458)) {
          {
            const [, _0x3d5492, _0x4c8bfd] = /^@(.*?).(.*?)$/.exec(_0xbe8458);
            const _0x2e00a8 = _0x3d5492 ? this.getval(_0x3d5492) : "";
            if (_0x2e00a8) {
              {
                try {
                  {
                    const _0x37d3e2 = JSON.parse(_0x2e00a8);
                    _0x1a001f = _0x37d3e2 ? this.lodash_get(_0x37d3e2, _0x4c8bfd, "") : _0x1a001f;
                  }
                } catch (_0x28a3e6) {
                  _0x1a001f = "";
                }
              }
            }
          }
        }
        return _0x1a001f;
      }
    }
    setdata(_0x3f91fd, _0x48e8e5) {
      {
        let _0x2c13b1 = false;
        if (/^@/.test(_0x48e8e5)) {
          {
            const [, _0xd4eac2, _0x5522e0] = /^@(.*?).(.*?)$/.exec(_0x48e8e5);
            const _0x37eb14 = this.getval(_0xd4eac2);
            const _0x43331a = _0xd4eac2 ? _0x37eb14 === "null" ? null : _0x37eb14 || "{}" : "{}";
            try {
              {
                const _0x486c50 = JSON.parse(_0x43331a);
                this.lodash_set(_0x486c50, _0x5522e0, _0x3f91fd);
                _0x2c13b1 = this.setval(JSON.stringify(_0x486c50), _0xd4eac2);
              }
            } catch (_0x2ce5b4) {
              {
                const _0x2a9b01 = {};
                this.lodash_set(_0x2a9b01, _0x5522e0, _0x3f91fd);
                _0x2c13b1 = this.setval(JSON.stringify(_0x2a9b01), _0xd4eac2);
              }
            }
          }
        } else {
          _0x2c13b1 = this.setval(_0x3f91fd, _0x48e8e5);
        }
        return _0x2c13b1;
      }
    }
    getval(_0x3dadbc) {
      {
        if (this.isSurge() || this.isLoon()) {
          {
            return $persistentStore.read(_0x3dadbc);
          }
        } else {
          if (this.isQuanX()) {
            {
              return $prefs.valueForKey(_0x3dadbc);
            }
          } else {
            if (this.isNode()) {
              this.data = this.loaddata();
              return this.data[_0x3dadbc];
            } else {
              {
                return this.data && this.data[_0x3dadbc] || null;
              }
            }
          }
        }
      }
    }
    setval(_0x40bdb7, _0x270870) {
      {
        if (this.isSurge() || this.isLoon()) {
          return $persistentStore.write(_0x40bdb7, _0x270870);
        } else {
          if (this.isQuanX()) {
            {
              return $prefs.setValueForKey(_0x40bdb7, _0x270870);
            }
          } else {
            if (this.isNode()) {
              this.data = this.loaddata();
              this.data[_0x270870] = _0x40bdb7;
              this.writedata();
              return true;
            } else {
              {
                return this.data && this.data[_0x270870] || null;
              }
            }
          }
        }
      }
    }
    initGotEnv(_0x3ac697) {
      {
        this.got = this.got ? this.got : require("got");
        this.cktough = this.cktough ? this.cktough : require("tough-cookie");
        this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
        if (_0x3ac697) {
          {
            _0x3ac697.headers = _0x3ac697.headers ? _0x3ac697.headers : {};
            if (undefined === _0x3ac697.headers.Cookie && undefined === _0x3ac697.cookieJar) {
              {
                _0x3ac697.cookieJar = this.ckjar;
              }
            }
          }
        }
      }
    }
    get(_0x85ca6e, _0x35287b = () => {}) {
      {
        if (_0x85ca6e.headers) {
          {
            delete _0x85ca6e.headers["Content-Type"];
            delete _0x85ca6e.headers["Content-Length"];
          }
        }
        if (this.isSurge() || this.isLoon()) {
          {
            if (this.isSurge() && this.isNeedRewrite) {
              {
                _0x85ca6e.headers = _0x85ca6e.headers || {};
                const _0x25d0f1 = {
                  "X-Surge-Skip-Scripting": false
                };
                Object.assign(_0x85ca6e.headers, _0x25d0f1);
              }
            }
            $httpClient.get(_0x85ca6e, (_0x49c1aa, _0x4b4296, _0x25c4ba) => {
              {
                if (!_0x49c1aa && _0x4b4296) {
                  {
                    _0x4b4296.body = _0x25c4ba;
                    _0x4b4296.statusCode = _0x4b4296.status;
                  }
                }
                _0x35287b(_0x49c1aa, _0x4b4296, _0x25c4ba);
              }
            });
          }
        } else {
          if (this.isQuanX()) {
            {
              if (this.isNeedRewrite) {
                {
                  _0x85ca6e.opts = _0x85ca6e.opts || {};
                  const _0x4b66c8 = {
                    hints: false
                  };
                  Object.assign(_0x85ca6e.opts, _0x4b66c8);
                }
              }
              $task.fetch(_0x85ca6e).then(_0x267645 => {
                {
                  const {
                    statusCode: _0x187fc1,
                    statusCode: _0x2b2c99,
                    headers: _0xcdcffe,
                    body: _0x2eece2
                  } = _0x267645;
                  const _0x130086 = {
                    status: _0x187fc1,
                    statusCode: _0x2b2c99,
                    headers: _0xcdcffe,
                    body: _0x2eece2
                  };
                  _0x35287b(null, _0x130086, _0x2eece2);
                }
              }, _0x596f2e => _0x35287b(_0x596f2e));
            }
          } else {
            this.isNode() && (this.initGotEnv(_0x85ca6e), this.got(_0x85ca6e).on("redirect", (_0x4bf969, _0x74cf1c) => {
              this.ckjar.setCookieSync(_0x4bf969.headers["set-cookie"].map(Cookie.parse).toString());
            }).then(_0x3bb62a => {
              {
                const {
                  statusCode: _0x49f725,
                  statusCode: _0x4d3cac,
                  headers: _0x127148,
                  body: _0x3e22a7
                } = _0x3bb62a;
                const _0x3de7fc = {
                  status: _0x49f725,
                  statusCode: _0x4d3cac,
                  headers: _0x127148,
                  body: _0x3e22a7
                };
                _0x35287b(null, _0x3de7fc, _0x3e22a7);
              }
            }, _0x1aa268 => {
              {
                const {
                  message: _0xb2a1ce,
                  response: _0x3f72d8
                } = _0x1aa268;
                _0x35287b(_0xb2a1ce, _0x3f72d8, _0x3f72d8 && _0x3f72d8.body);
              }
            }));
          }
        }
      }
    }
    post(_0x14fdae, _0x1e1855 = () => {}) {
      {
        const _0x29f062 = _0x14fdae.method ? _0x14fdae.method.toLocaleLowerCase() : "post";
        if (_0x14fdae.body && _0x14fdae.headers && !_0x14fdae.headers["Content-Type"]) {
          {
            _0x14fdae.headers["Content-Type"] = "application/x-www-form-urlencoded";
          }
        }
        if (_0x14fdae.headers) {
          delete _0x14fdae.headers["Content-Length"];
        }
        if (this.isSurge() || this.isLoon()) {
          {
            if (this.isSurge() && this.isNeedRewrite) {
              {
                _0x14fdae.headers = _0x14fdae.headers || {};
                const _0x203f5d = {
                  "X-Surge-Skip-Scripting": false
                };
                Object.assign(_0x14fdae.headers, _0x203f5d);
              }
            }
            $httpClient[_0x29f062](_0x14fdae, (_0x1e21d0, _0x9f03d4, _0x4d740c) => {
              {
                if (!_0x1e21d0 && _0x9f03d4) {
                  {
                    _0x9f03d4.body = _0x4d740c;
                    _0x9f03d4.statusCode = _0x9f03d4.status;
                  }
                }
                _0x1e1855(_0x1e21d0, _0x9f03d4, _0x4d740c);
              }
            });
          }
        } else {
          if (this.isQuanX()) {
            {
              _0x14fdae.method = _0x29f062;
              if (this.isNeedRewrite) {
                {
                  _0x14fdae.opts = _0x14fdae.opts || {};
                  const _0x18c7ac = {
                    hints: false
                  };
                  Object.assign(_0x14fdae.opts, _0x18c7ac);
                }
              }
              $task.fetch(_0x14fdae).then(_0x55ee04 => {
                {
                  const {
                    statusCode: _0xb7bf77,
                    statusCode: _0x56e0b4,
                    headers: _0x21a884,
                    body: _0x479a33
                  } = _0x55ee04;
                  const _0x1b2cf1 = {
                    status: _0xb7bf77,
                    statusCode: _0x56e0b4,
                    headers: _0x21a884,
                    body: _0x479a33
                  };
                  _0x1e1855(null, _0x1b2cf1, _0x479a33);
                }
              }, _0x50e923 => _0x1e1855(_0x50e923));
            }
          } else {
            if (this.isNode()) {
              {
                this.initGotEnv(_0x14fdae);
                const {
                  url: _0x5e9b03,
                  ..._0x12f816
                } = _0x14fdae;
                this.got[_0x29f062](_0x5e9b03, _0x12f816).then(_0x55a6fb => {
                  {
                    const {
                      statusCode: _0x49827d,
                      statusCode: _0x2d3e56,
                      headers: _0x2ec0ab,
                      body: _0x8f14fe
                    } = _0x55a6fb;
                    const _0x1b4a51 = {
                      status: _0x49827d,
                      statusCode: _0x2d3e56,
                      headers: _0x2ec0ab,
                      body: _0x8f14fe
                    };
                    _0x1e1855(null, _0x1b4a51, _0x8f14fe);
                  }
                }, _0x4211c4 => {
                  {
                    const {
                      message: _0x56df45,
                      response: _0xf626eb
                    } = _0x4211c4;
                    _0x1e1855(_0x56df45, _0xf626eb, _0xf626eb && _0xf626eb.body);
                  }
                });
              }
            }
          }
        }
      }
    }
    put(_0x1da7ce, _0x5e7791 = () => {}) {
      {
        const _0x2fed73 = _0x1da7ce.method ? _0x1da7ce.method.toLocaleLowerCase() : "put";
        _0x1da7ce.body && _0x1da7ce.headers && !_0x1da7ce.headers["Content-Type"] && (_0x1da7ce.headers["Content-Type"] = "application/x-www-form-urlencoded");
        if (_0x1da7ce.headers) {
          delete _0x1da7ce.headers["Content-Length"];
        }
        if (this.isSurge() || this.isLoon()) {
          {
            if (this.isSurge() && this.isNeedRewrite) {
              {
                _0x1da7ce.headers = _0x1da7ce.headers || {};
                const _0x23e79e = {
                  "X-Surge-Skip-Scripting": false
                };
                Object.assign(_0x1da7ce.headers, _0x23e79e);
              }
            }
            $httpClient[_0x2fed73](_0x1da7ce, (_0x17cf23, _0x551958, _0x5a0d46) => {
              {
                !_0x17cf23 && _0x551958 && (_0x551958.body = _0x5a0d46, _0x551958.statusCode = _0x551958.status);
                _0x5e7791(_0x17cf23, _0x551958, _0x5a0d46);
              }
            });
          }
        } else {
          if (this.isQuanX()) {
            {
              _0x1da7ce.method = _0x2fed73;
              if (this.isNeedRewrite) {
                {
                  _0x1da7ce.opts = _0x1da7ce.opts || {};
                  const _0x222731 = {
                    hints: false
                  };
                  Object.assign(_0x1da7ce.opts, _0x222731);
                }
              }
              $task.fetch(_0x1da7ce).then(_0x75b4ed => {
                {
                  const {
                    statusCode: _0x26012e,
                    statusCode: _0x5b6547,
                    headers: _0x3425f6,
                    body: _0x427706
                  } = _0x75b4ed;
                  const _0x4e97e5 = {
                    status: _0x26012e,
                    statusCode: _0x5b6547,
                    headers: _0x3425f6,
                    body: _0x427706
                  };
                  _0x5e7791(null, _0x4e97e5, _0x427706);
                }
              }, _0x356798 => _0x5e7791(_0x356798));
            }
          } else {
            if (this.isNode()) {
              {
                this.initGotEnv(_0x1da7ce);
                const {
                  url: _0x5bb838,
                  ..._0x326382
                } = _0x1da7ce;
                this.got[_0x2fed73](_0x5bb838, _0x326382).then(_0x4dbc7e => {
                  {
                    const {
                      statusCode: _0x3a3e92,
                      statusCode: _0x4876a0,
                      headers: _0x50198b,
                      body: _0x3e2637
                    } = _0x4dbc7e;
                    const _0x215a52 = {
                      status: _0x3a3e92,
                      statusCode: _0x4876a0,
                      headers: _0x50198b,
                      body: _0x3e2637
                    };
                    _0x5e7791(null, _0x215a52, _0x3e2637);
                  }
                }, _0x383246 => {
                  {
                    const {
                      message: _0x35a3ef,
                      response: _0x2184c5
                    } = _0x383246;
                    _0x5e7791(_0x35a3ef, _0x2184c5, _0x2184c5 && _0x2184c5.body);
                  }
                });
              }
            }
          }
        }
      }
    }
    time(_0x59c622, _0x31760f = null) {
      {
        const _0x17057d = _0x31760f ? new Date(_0x31760f) : new Date();
        let _0x2c6ba7 = {
          "M+": _0x17057d.getMonth() + 1,
          "d+": _0x17057d.getDate(),
          "H+": _0x17057d.getHours(),
          "m+": _0x17057d.getMinutes(),
          "s+": _0x17057d.getSeconds(),
          "q+": Math.floor((_0x17057d.getMonth() + 3) / 3),
          S: _0x17057d.getMilliseconds()
        };
        if (/(y+)/.test(_0x59c622)) {
          _0x59c622 = _0x59c622.replace(RegExp.$1, (_0x17057d.getFullYear() + "").substr(4 - RegExp.$1.length));
        }
        for (let _0x4c69a2 in _0x2c6ba7) if (new RegExp("(" + _0x4c69a2 + ")").test(_0x59c622)) {
          _0x59c622 = _0x59c622.replace(RegExp.$1, RegExp.$1.length == 1 ? _0x2c6ba7[_0x4c69a2] : ("00" + _0x2c6ba7[_0x4c69a2]).substr(("" + _0x2c6ba7[_0x4c69a2]).length));
        }
        return _0x59c622;
      }
    }
    msg(_0x5c7ebc = _0x36c0d9, _0x3cf079 = "", _0x4719e8 = "", _0x949b09) {
      const _0x248544 = _0x30e694 => {
        {
          if (!_0x30e694) {
            return _0x30e694;
          }
          if (typeof _0x30e694 === "string") {
            {
              if (this.isLoon()) {
                return _0x30e694;
              } else {
                if (this.isQuanX()) {
                  return {
                    "open-url": _0x30e694
                  };
                } else {
                  if (this.isSurge()) {
                    return {
                      url: _0x30e694
                    };
                  } else {
                    return undefined;
                  }
                }
              }
            }
          } else {
            if (typeof _0x30e694 === "object") {
              {
                if (this.isLoon()) {
                  {
                    let _0x5ec0d7 = _0x30e694.openUrl || _0x30e694.url || _0x30e694["open-url"];
                    let _0x5c3249 = _0x30e694.mediaUrl || _0x30e694["media-url"];
                    const _0xbfaf0b = {
                      openUrl: _0x5ec0d7,
                      mediaUrl: _0x5c3249
                    };
                    return _0xbfaf0b;
                  }
                } else {
                  if (this.isQuanX()) {
                    {
                      let _0x40a535 = _0x30e694["open-url"] || _0x30e694.url || _0x30e694.openUrl;
                      let _0x4ce1c0 = _0x30e694["media-url"] || _0x30e694.mediaUrl;
                      const _0x303231 = {
                        "open-url": _0x40a535,
                        "media-url": _0x4ce1c0
                      };
                      return _0x303231;
                    }
                  } else {
                    if (this.isSurge()) {
                      {
                        let _0x303929 = _0x30e694.url || _0x30e694.openUrl || _0x30e694["open-url"];
                        const _0x3b9d71 = {
                          url: _0x303929
                        };
                        return _0x3b9d71;
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
            $notification.post(_0x5c7ebc, _0x3cf079, _0x4719e8, _0x248544(_0x949b09));
          } else {
            if (this.isQuanX()) {
              {
                $notify(_0x5c7ebc, _0x3cf079, _0x4719e8, _0x248544(_0x949b09));
              }
            }
          }
        }
      }
      if (!this.isMuteLog) {
        {
          let _0x3e456e = ["", "==============📣系统通知📣=============="];
          _0x3e456e.push(_0x5c7ebc);
          _0x3cf079 ? _0x3e456e.push(_0x3cf079) : "";
          _0x4719e8 ? _0x3e456e.push(_0x4719e8) : "";
          console.log(_0x3e456e.join("\n"));
          this.logs = this.logs.concat(_0x3e456e);
        }
      }
    }
    log(..._0x57c124) {
      _0x57c124.length > 0 && (this.logs = [...this.logs, ..._0x57c124]);
      console.log(_0x57c124.join(this.logSeparator));
    }
    logErr(_0x4e1e34, _0xbe886b) {
      const _0x12d8e4 = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      !_0x12d8e4 ? this.log("", "❗️" + this.name + ", 错误!", _0x4e1e34) : this.log("", "❗️" + this.name + ", 错误!", _0x4e1e34.stack);
    }
    wait(_0x5676d8) {
      return new Promise(_0x15935a => setTimeout(_0x15935a, _0x5676d8));
    }
    done(_0x2fb653 = {}) {
      const _0x216dcf = new Date().getTime();
      const _0x2c77c4 = (_0x216dcf - this.startTime) / 1000;
      this.log("", "🔔" + this.name + ", 结束!🕛" + _0x2c77c4 + "秒");
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(_0x2fb653);
    }
  }(_0x36c0d9, _0x425d6e);
}