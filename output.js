//Mon Nov 23 2026 12:49:55 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const $ = new Env("悦临平");
const version = "V1.1.1";
const appName = "ylpapp";
let ylpapp = $.getjson(appName, []);
const fs = $.isNode() ? require("fs") : "";
const WebSocket = $.isNode() ? require("ws") : "";
const file = "david_cookies.js";
$.isNode() && !fs.existsSync(file) && ($.log("🔔 外挂ck文件不存在，开始创建模版>>>"), fs.writeFileSync("./david_cookies.js", "//独立CK文件，主要用来处理多账号大数据量CK\nlet YLP = []\nlet HMJCAPP = []\n\nlet APPS = {\n    YLP: YLP,\n    HMJC: HMJCAPP\n}\n\nmodule.exports = APPS", _0x72401d => {}));
const http = $.isNode() ? require("http") : "";
const axios = $.isNode() ? require("axios") : "";
const notify = $.isNode() ? require("./sendNotify") : "";
let COOKIES = "";
if ($.isNode()) {
  try {
    COOKIES = require("./david_cookies");
  } catch (_0x330edd) {
    $.log("⚠️ 读取 david_cookies.js 异常: " + _0x330edd.message);
  }
}
let userId = $.getdata("tguserid") || "1306405908";
let activeCode = $.getdata("ylpactivecode");
let ylpuserck = $.getval("ylpuserck") || 1;
let apiHost = $.getval("apiHost") || "http://47.115.222.131:4080&http://106.15.104.124:8080";
$.getval("apiHosts") && (apiHost = $.getval("apiHosts"));
let flushCash = $.getval("cleanCache") || false;
const debug = 0;
let tz = $.getval("tz") || "1";
let helpUtils = undefined;
let CryptoJS = $.isNode() ? require("crypto-js") : undefined;
var hour = "";
var minute = "";
let sendlogs = "";
let ylplogs = [];
let channels_status = [];
let reconectCounts = [];
let wss = [];
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
const APP_ID = "linping";
const APP_KEY = "a7407a55e2dd17af4175af577b3bf018";
const T_ID = "59";
const T_ID_IN = "59";
const API_BASE = "https://ya.iyunxh.com/api";
const SIGNIN_ACT_ID = "10609040";
const LOTTERY_ACT_ID = process.env.YLP_LOTTERY_ID || "94431030429015ffb69508";
const WITHDRAW_ACT_ID = "13109567";
const TARGET_STAY_TIME = 10800;
const watchCount = parseInt(process.env.YLP_WATCH_COUNT || "180", 10);
const autoWithdraw = process.env.YLP_AUTO_WITHDRAW !== "0" && process.env.YLP_AUTO_WITHDRAW !== "false";
const autoLottery = process.env.YLP_AUTO_LOTTERY !== "0" && process.env.YLP_AUTO_LOTTERY !== "false";
const DEFAULT_PROXYCAT_PANEL = "";
let proxyCatContext = null;
let activeProxyAgent = null;
let currentEgressIp = "";
async function switchProxyCat() {
  if (!proxyCatContext || !proxyCatContext.baseUrl) {
    return false;
  }
  try {
    {
      const _0x40d4e1 = require("axios");
      const _0x24bf7f = {
        timeout: 6000
      };
      const _0xab5e66 = await _0x40d4e1.get(proxyCatContext.baseUrl + "/api/switch_proxy?token=" + encodeURIComponent(proxyCatContext.token), _0x24bf7f);
      if (_0xab5e66.data && _0xab5e66.data.status === "success") {
        {
          $.log("🔄 [代理管理] ProxyCat 节点切换成功: " + (_0xab5e66.data.current_proxy || ""));
          return true;
        }
      } else {
        {
          $.log("⚠️ [代理管理] ProxyCat 切换失败: " + (_0xab5e66.data ? _0xab5e66.data.message : "未知"));
          return false;
        }
      }
    }
  } catch (_0xed8b9a) {
    {
      $.log("⚠️ [代理管理] 调用 switch_proxy 失败: " + _0xed8b9a.message);
      return false;
    }
  }
}
async function resolveProxyCat(_0x2522d4) {
  try {
    {
      const _0x688b00 = new URL(_0x2522d4);
      const _0x12b8ca = _0x688b00.searchParams.get("token") || process.env.PROXYCAT_TOKEN || "honmashironeko";
      const _0x1191b0 = _0x688b00.protocol + "//" + _0x688b00.host;
      const _0x4dcaa5 = _0x688b00.hostname;
      const _0x21a152 = require("axios");
      $.log("📢 [代理管理] 正在连接 ProxyCat 控制面板: " + _0x1191b0 + "...");
      const _0x2514d7 = {
        timeout: 4000
      };
      const _0x28bbc2 = await _0x21a152.get(_0x1191b0 + "/api/status?token=" + encodeURIComponent(_0x12b8ca), _0x2514d7);
      const _0x2e6b76 = _0x28bbc2.data;
      if (!_0x2e6b76 || _0x2e6b76.service_status !== "running") {
        {
          $.log("⚠️ [代理管理] ProxyCat 服务未正常运行或无响应");
          return null;
        }
      }
      const _0x3e3208 = _0x2e6b76.port || 1080;
      const _0x4ccca0 = _0x2e6b76.current_proxy || "未知";
      const _0x4329b1 = Math.round(_0x2e6b76.time_left || 0);
      const _0xd63826 = Math.round((_0x2e6b76.interval || 1800) / 60);
      $.log("📢 [代理管理] ProxyCat 服务运行中 (上游缓存节点: " + _0x4ccca0 + ", 缓存周期: " + _0xd63826 + "分钟, 本期剩余: " + _0x4329b1 + "s)");
      if (_0x2e6b76.config && parseInt(_0x2e6b76.config.interval) < 86400) {
        {
          try {
            {
              const _0x146e4e = {
                timeout: 3000
              };
              await _0x21a152.post(_0x1191b0 + "/api/config?token=" + encodeURIComponent(_0x12b8ca), {
                ..._0x2e6b76.config,
                interval: "86400"
              }, _0x146e4e);
              $.log("🛡️ [代理管理] 已将 ProxyCat 切换间隔设为 86400 秒 (纯按需刷新模式，禁止后台盲目轮询消耗额度)");
            }
          } catch (_0x2e4c9) {}
        }
      }
      const _0x1fb981 = [];
      if (_0x2e6b76.auth_required) {
        {
          try {
            {
              const _0x41bc4a = {
                timeout: 4000
              };
              const _0x209b12 = await _0x21a152.get(_0x1191b0 + "/api/users?token=" + encodeURIComponent(_0x12b8ca), _0x41bc4a);
              const _0x31279e = _0x209b12.data.users || {};
              for (const [_0x36c4b1, _0x1acb98] of Object.entries(_0x31279e)) {
                _0x1fb981.push(encodeURIComponent(_0x36c4b1) + ":" + encodeURIComponent(_0x1acb98) + "@");
              }
            }
          } catch (_0x1b27f4) {
            {
              $.log("⚠️ [代理管理] 获取 ProxyCat 用户凭据异常: " + _0x1b27f4.message);
            }
          }
        }
      }
      if (_0x1fb981.length === 0) {
        {
          _0x1fb981.push("");
        }
      }
      async function _0x2f3e81() {
        {
          const _0x158d61 = [];
          for (const _0x33de50 of _0x1fb981) {
            {
              const _0x129803 = "http://" + _0x33de50 + _0x4dcaa5 + ":" + _0x3e3208;
              const _0x2a3d19 = buildProxyAgent(_0x129803);
              const _0x38b221 = await testProxyEgress(_0x2a3d19, 3500);
              if (_0x38b221) {
                {
                  const _0x54abe6 = {
                    proto: "HTTP",
                    agent: _0x2a3d19,
                    egress: _0x38b221,
                    delay: _0x38b221.delay || 9999,
                    proxyUrl: _0x129803
                  };
                  _0x158d61.push(_0x54abe6);
                }
              }
              const _0x357433 = "socks5h://" + _0x33de50 + _0x4dcaa5 + ":" + _0x3e3208;
              const _0x288d67 = buildProxyAgent(_0x357433);
              const _0x3795e0 = await testProxyEgress(_0x288d67, 3500);
              if (_0x3795e0) {
                {
                  const _0x3917c6 = {
                    proto: "SOCKS5",
                    agent: _0x288d67,
                    egress: _0x3795e0,
                    delay: _0x3795e0.delay || 9999,
                    proxyUrl: _0x357433
                  };
                  _0x158d61.push(_0x3917c6);
                }
              }
              if (_0x158d61.length > 0) {
                break;
              }
            }
          }
          return _0x158d61;
        }
      }
      $.log("📢 [代理管理] 正在检测 ProxyCat 代理连通性 (自动判别 HTTP / SOCKS 协议)...");
      let _0x28cd29 = await _0x2f3e81();
      if (_0x28cd29.length === 0) {
        {
          $.log("⚠️ [代理管理] ProxyCat 当前缓存代理 (" + _0x4ccca0 + ") 连通失败，尝试请求面板刷新新节点...");
          try {
            {
              const _0x52192d = {
                timeout: 6000
              };
              const _0x29ff89 = await _0x21a152.get(_0x1191b0 + "/api/switch_proxy?token=" + encodeURIComponent(_0x12b8ca), _0x52192d);
              if (_0x29ff89.data && _0x29ff89.data.status === "success") {
                {
                  const _0x3268c4 = _0x29ff89.data.current_proxy || "";
                  $.log("🔄 [代理管理] ProxyCat 节点已切换为: " + _0x3268c4 + "，等待上游代理通道就绪...");
                  for (let _0x230ced = 1; _0x230ced <= 3; _0x230ced++) {
                    {
                      await new Promise(_0x23916a => setTimeout(_0x23916a, _0x230ced === 1 ? 2500 : 2000));
                      _0x28cd29 = await _0x2f3e81();
                      if (_0x28cd29.length > 0) {
                        {
                          break;
                        }
                      }
                      if (_0x230ced < 3) {
                        {
                          $.log("⏳ [代理管理] 上游代理 (" + _0x3268c4 + ") 通道正在建立中，进行第 " + _0x230ced + " 次重测...");
                        }
                      }
                    }
                  }
                }
              }
            }
          } catch (_0x1895a3) {
            $.log("⚠️ [代理管理] ProxyCat 切换失败: " + _0x1895a3.message);
          }
        }
      }
      if (_0x28cd29.length > 0) {
        {
          _0x28cd29.sort((_0x462188, _0x215462) => _0x462188.delay - _0x215462.delay);
          const _0x4d56c2 = _0x28cd29[0];
          const _0x42dc5c = _0x28cd29.map(_0x3aee1f => _0x3aee1f.proto + "[" + _0x3aee1f.delay + "ms 可用]").join(", ");
          $.log("✅ [代理管理] ProxyCat 协议连通探测完成: " + _0x42dc5c + " -> 优选【" + _0x4d56c2.proto + "】协议 (延迟: " + _0x4d56c2.delay + "ms)");
          const _0x29b23 = {
            agent: _0x4d56c2.agent,
            egress: _0x4d56c2.egress,
            proxyUrl: _0x4d56c2.proxyUrl,
            proto: _0x4d56c2.proto,
            currentProxy: _0x4ccca0,
            baseUrl: _0x1191b0,
            token: _0x12b8ca
          };
          return _0x29b23;
        }
      } else {
        {
          $.log("⚠️ [代理管理] ProxyCat 的 HTTP 与 SOCKS 协议均无法连通网络。");
          return null;
        }
      }
    }
  } catch (_0x3847ff) {
    {
      $.log("⚠️ [代理管理] 解析 ProxyCat 面板异常: " + _0x3847ff.message);
      return null;
    }
  }
}
function buildProxyAgent(_0x290f42) {
  if (!_0x290f42) {
    return null;
  }
  try {
    {
      let _0x3188de = _0x290f42;
      if (_0x3188de.startsWith("socks5://")) {
        {
          _0x3188de = "socks5h://" + _0x3188de.slice("socks5://".length);
        }
      } else {
        _0x3188de.startsWith("socks://") && (_0x3188de = "socks5h://" + _0x3188de.slice("socks://".length));
      }
      if (_0x3188de.startsWith("socks")) {
        {
          const {
            SocksProxyAgent: _0x18e5a6
          } = require("socks-proxy-agent");
          const _0x239128 = new _0x18e5a6(_0x3188de);
          return {
            http: _0x239128,
            https: _0x239128,
            agent: {
              http: _0x239128,
              https: _0x239128
            },
            url: _0x3188de,
            proto: _0x3188de.startsWith("socks4") ? "SOCKS4" : "SOCKS5"
          };
        }
      } else {
        {
          const {
            HttpProxyAgent: _0x5fb897
          } = require("hpagent");
          const {
            HttpsProxyAgent: _0x56bf4f
          } = require("https-proxy-agent");
          const _0xeddbc0 = {
            proxy: _0x3188de
          };
          const _0x5bab79 = new _0x5fb897(_0xeddbc0);
          const _0x3c7aca = new _0x56bf4f(_0x3188de);
          const _0x5ca5c7 = {
            http: _0x5bab79,
            https: _0x3c7aca,
            agent: {},
            url: _0x3188de,
            proto: "HTTP"
          };
          _0x5ca5c7.agent.http = _0x5bab79;
          _0x5ca5c7.agent.https = _0x3c7aca;
          return _0x5ca5c7;
        }
      }
    }
  } catch (_0x96ecf3) {
    {
      $.log("⚠️ [代理管理] 构建代理 Agent 失败: " + _0x96ecf3.message);
      return null;
    }
  }
}
async function fetchJuliangProxy(_0x39d568) {
  try {
    {
      $.log("📢 [代理管理] 正在请求巨量 IP 接口获取代理...");
      const _0x1df4e2 = require("axios");
      const _0x2fe5b7 = {
        timeout: 6000
      };
      const _0x505a4d = await _0x1df4e2.get(_0x39d568, _0x2fe5b7);
      const _0xa12129 = (_0x505a4d.data || "").toString().trim();
      const _0x414d5d = _0xa12129.match(/(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}:\d{2,5})/);
      if (_0x414d5d) {
        $.log("📢 [代理管理] 巨量 IP 提取成功 => " + _0x414d5d[1]);
        return _0x414d5d[1];
      } else {
        {
          $.log("⚠️ [代理管理] 巨量 IP 接口返回非 IP 数据: " + _0xa12129.substring(0, 100));
        }
      }
    }
  } catch (_0xcb89f5) {
    {
      $.log("⚠️ [代理管理] 请求巨量 IP 接口异常: " + _0xcb89f5.message);
    }
  }
  return null;
}
async function testProxyEgress(_0x4b05b8, _0x2bd331 = 4000) {
  if (!_0x4b05b8) {
    return null;
  }
  let _0x23c45b;
  try {
    {
      const _0x48d072 = (async () => {
        {
          try {
            {
              const _0x37b80e = Date.now();
              const _0x17cbd2 = {
                httpAgent: _0x4b05b8.http || _0x4b05b8,
                httpsAgent: _0x4b05b8.https || _0x4b05b8,
                timeout: _0x2bd331,
                proxy: false
              };
              const _0x37c59f = await axios.get("https://myip.ipip.net", _0x17cbd2);
              const _0x3ce919 = (_0x37c59f.data || "").toString().trim();
              const _0x1dd0f9 = _0x3ce919.match(/当前 IP：([^\s]+)\s+来自于：([^\r\n]+)/);
              if (_0x1dd0f9) {
                {
                  return {
                    ip: _0x1dd0f9[1] + " (" + _0x1dd0f9[2] + ")",
                    delay: Date.now() - _0x37b80e
                  };
                }
              } else {
                if (_0x3ce919) {
                  {
                    return {
                      ip: _0x3ce919,
                      delay: Date.now() - _0x37b80e
                    };
                  }
                }
              }
            }
          } catch (_0x51b1ab) {}
          try {
            {
              const _0x3fca90 = Date.now();
              const _0x3ff028 = {
                httpAgent: _0x4b05b8.http || _0x4b05b8,
                httpsAgent: _0x4b05b8.https || _0x4b05b8,
                timeout: _0x2bd331,
                proxy: false
              };
              const _0x1efa6b = await axios.get("https://api.ipify.org?format=json", _0x3ff028);
              return _0x1efa6b.data?.["ip"] ? {
                ip: _0x1efa6b.data.ip,
                delay: Date.now() - _0x3fca90
              } : null;
            }
          } catch (_0x312f81) {}
          try {
            {
              const _0x411d89 = Date.now();
              const _0x2b4726 = {
                httpAgent: _0x4b05b8.http || _0x4b05b8,
                httpsAgent: _0x4b05b8.https || _0x4b05b8,
                timeout: _0x2bd331,
                proxy: false
              };
              const _0x1705a2 = await axios.get("http://myip.ipip.net", _0x2b4726);
              const _0x41930f = (_0x1705a2.data || "").toString().trim();
              const _0x3713a6 = _0x41930f.match(/当前 IP：([^\s]+)\s+来自于：([^\r\n]+)/);
              if (_0x3713a6) {
                {
                  return {
                    ip: _0x3713a6[1] + " (" + _0x3713a6[2] + ")",
                    delay: Date.now() - _0x411d89
                  };
                }
              } else {
                if (_0x41930f) {
                  return {
                    ip: _0x41930f,
                    delay: Date.now() - _0x411d89
                  };
                }
              }
            }
          } catch (_0x457ee8) {}
          return null;
        }
      })();
      const _0x4a72c6 = new Promise(_0x3695a0 => {
        _0x23c45b = setTimeout(() => _0x3695a0(null), _0x2bd331 + 500);
      });
      return await Promise.race([_0x48d072, _0x4a72c6]);
    }
  } catch (_0x5e7cc2) {
    return null;
  } finally {
    {
      if (_0x23c45b) {
        clearTimeout(_0x23c45b);
      }
    }
  }
}
async function initProxy() {
  if (!$.isNode()) {
    return;
  }
  let _0x356bea = process.env.YLP_PROXY || process.env.PROXY_URL || COOKIES && (COOKIES.PROXY || COOKIES.YLP_PROXY) || $.getdata("ylp_proxy");
  const _0x389d18 = Boolean(_0x356bea) || process.env.USE_PROXY === "true" || process.env.USE_PROXY === "1" || process.env.USE_PROXYCAT === "true" || process.env.USE_PROXYCAT === "1" || typeof COOKIES !== "undefined" && (COOKIES.USE_PROXY === true || COOKIES.USE_PROXYCAT === true);
  if (!_0x389d18) {
    {
      $.log("📢 [代理管理] 未开启代理开关 (未配置 USE_PROXYCAT=true 或 USE_PROXY=true)，默认采用【直连模式】运行。");
      activeProxyAgent = null;
      $.proxyAgent = null;
      return;
    }
  }
  let _0x233c72 = process.env.JULIANG_API_URL || process.env.PROXY_API_URL || process.env.YLP_PROXY_API || COOKIES && (COOKIES.JULIANG_API_URL || COOKIES.PROXY_API_URL) || "";
  let _0x4a7340 = process.env.PROXYCAT_URL || process.env.YLP_PROXYCAT || COOKIES && (COOKIES.PROXYCAT_URL || COOKIES.YLP_PROXYCAT) || $.getdata("proxycat_url") || "";
  const _0x2162b5 = process.env.USE_PROXYCAT === "true" || process.env.USE_PROXYCAT === "1" || COOKIES && (COOKIES.USE_PROXYCAT === true || COOKIES.USE_PROXYCAT === "true");
  if (!_0x4a7340 && _0x2162b5) {
    {
      _0x4a7340 = DEFAULT_PROXYCAT_PANEL;
    }
  }
  let _0x38ec3a = null;
  let _0x42834b = null;
  let _0x19d4ad = "";
  if (_0x356bea) {
    {
      let _0xde639f = buildProxyAgent(_0x356bea);
      if (_0xde639f) {
        {
          $.log("📢 [代理管理] 正在测试专属静态代理连通性 (" + _0x356bea + ")...");
          const _0x50008b = await testProxyEgress(_0xde639f);
          if (_0x50008b) {
            _0x38ec3a = _0xde639f;
            _0x42834b = _0x50008b.ip || _0x50008b;
            _0x19d4ad = _0x356bea;
            $.log("🎉 [代理管理] 专属代理连接成功! 出口 IP: " + _0x42834b + " (延迟: " + (_0x50008b.delay || "") + "ms)");
          } else {
            {
              $.log("⚠️ [代理管理] 专属代理 (" + _0x356bea + ") 连通性测试未通过，尝试备用代理...");
            }
          }
        }
      }
    }
  }
  if (!_0x38ec3a && _0x4a7340) {
    {
      $.log("📢 [代理管理] 正在接入 ProxyCat 服务 (支持 30 分钟长效缓存)...");
      const _0x351bdd = await resolveProxyCat(_0x4a7340);
      if (_0x351bdd) {
        {
          proxyCatContext = _0x351bdd;
          _0x38ec3a = _0x351bdd.agent;
          _0x42834b = _0x351bdd.egress.ip || _0x351bdd.egress;
          _0x19d4ad = _0x351bdd.proxyUrl;
          $.log("🎉 [代理管理] ProxyCat 代理就绪! 协议: " + _0x351bdd.proto + ", 出口 IP: " + _0x42834b);
        }
      } else {
        {
          $.log("⚠️ [代理管理] ProxyCat 未能提供可用代理，尝试其他代理方式...");
        }
      }
    }
  }
  if (!_0x38ec3a && _0x233c72) {
    {
      const _0x32ce5e = await fetchJuliangProxy(_0x233c72);
      if (_0x32ce5e) {
        {
          $.log("📢 [代理管理] 正在测试巨量直连代理连通性 (" + _0x32ce5e + ")...");
          let _0x2a01ac = buildProxyAgent("http://" + _0x32ce5e);
          let _0x2649ba = await testProxyEgress(_0x2a01ac);
          let _0x17312c = "HTTP";
          if (!_0x2649ba) {
            {
              $.log("📢 [代理管理] HTTP 协议未响应，切换 SOCKS5 协议重试...");
              _0x2a01ac = buildProxyAgent("socks5h://" + _0x32ce5e);
              _0x2649ba = await testProxyEgress(_0x2a01ac);
              _0x17312c = "SOCKS5";
            }
          }
          if (_0x2649ba) {
            {
              _0x19d4ad = _0x17312c === "HTTP" ? "http://" + _0x32ce5e : "socks5h://" + _0x32ce5e;
              _0x38ec3a = _0x2a01ac;
              _0x42834b = _0x2649ba.ip || _0x2649ba;
              $.log("🎉 [代理管理] 巨量代理连接成功! 协议: " + _0x17312c + ", 出口 IP: " + _0x42834b + " (延迟: " + (_0x2649ba.delay || "") + "ms)");
            }
          } else {
            {
              $.log("⚠️ [代理管理] 巨量代理 (" + _0x32ce5e + ") 连通性测试未通过。");
            }
          }
        }
      }
    }
  }
  if (_0x42834b && _0x38ec3a) {
    {
      currentEgressIp = _0x42834b;
      activeProxyAgent = _0x38ec3a;
      setupTaskProxyInterceptor(_0x38ec3a);
      $.proxyAgent = _0x38ec3a;
      $.log("🚀 [代理管理] 任务代理已生效! 线路: " + _0x19d4ad + " -> 出口 IP: " + _0x42834b + " (仅接管悦临平任务请求，签名与内部接口保持直连)");
    }
  } else {
    $.log("⚠️ [代理管理] 当前未配置或未连通有效代理，默认采用【直连模式】运行。");
    activeProxyAgent = null;
    $.proxyAgent = null;
  }
}
function isTaskUrl(_0x3818bb) {
  if (!_0x3818bb) {
    return false;
  }
  return /iyunxh\.com|tmuyun\.com/i.test(_0x3818bb);
}
function setupTaskProxyInterceptor(_0x482695) {
  const _0x808b29 = require("axios");
  delete _0x808b29.defaults.httpAgent;
  delete _0x808b29.defaults.httpsAgent;
  _0x808b29.defaults.proxy = false;
  if (!_0x808b29._taskProxyIntercepted) {
    {
      _0x808b29.interceptors.request.use(_0x174f3e => {
        {
          activeProxyAgent && isTaskUrl(_0x174f3e.url) ? (_0x174f3e.httpAgent = activeProxyAgent.http, _0x174f3e.httpsAgent = activeProxyAgent.https, _0x174f3e.proxy = false) : (_0x174f3e.httpAgent = undefined, _0x174f3e.httpsAgent = undefined);
          return _0x174f3e;
        }
      });
      _0x808b29._taskProxyIntercepted = true;
    }
  }
}
if ($.isNode()) {
  if (process.env.YLPAPP) {
    try {
      ylpapp = JSON.parse(process.env.YLPAPP);
    } catch (_0x2b8454) {
      $.logErr(_0x2b8454, "解析环境变量 YLPAPP 失败");
    }
  } else {
    if (process.env.YLP_TOKEN || process.env.YLP_COOKIE) {
      const rawTokens = (process.env.YLP_TOKEN || process.env.YLP_COOKIE).split(/[&\n]/).filter(Boolean);
      ylpapp = rawTokens.map(_0x5339be => {
        if (_0x5339be.startsWith("{")) {
          {
            try {
              {
                return JSON.parse(_0x5339be);
              }
            } catch (_0x1e2e8a) {}
          }
        }
        return {
          accessToken: _0x5339be.trim()
        };
      });
    } else {
      if (COOKIES.YLP) {
        ylpapp = COOKIES.YLP;
      } else {
        COOKIES.YLp && (ylpapp = COOKIES.YLp);
      }
    }
  }
  userId = process.env.TGUSERID || userId;
  activeCode = process.env.YLPACTIVECODE || activeCode;
  process.env.APIHOST && (apiHost = process.env.APIHOST);
  process.env.APIHOSTS && (apiHost = process.env.APIHOSTS);
  process.env.CLEANCACHE && (flushCash = JSON.parse(process.env.CLEANCACHE));
  hour = new Date().getHours();
  minute = new Date().getMinutes();
  $.log("🔔 当前环境: Node, 当前时间：" + hour + "点" + minute + "分");
} else {
  hour = new Date().getHours();
  minute = new Date().getMinutes();
  $.log("🔔 当前环境: 手机代理, 当前时间：" + hour + "点" + minute + "分");
}
!(async () => {
  setupLogger();
  if (typeof $request !== "undefined") {
    {
      await getCk();
    }
  } else {
    {
      await initProxy();
      if (!ylpapp || ylpapp.length === 0) {
        {
          $.log("📢 很抱歉，😭 没有找到账号信息！你确定配置账号信息了吗？");
          return;
        }
      }
      $.log("📢 开始检测服务器接口状态>>>");
      let _0x382acb = false;
      const _0x232065 = apiHost.split("&");
      const _0x18c462 = _0x232065.length;
      for (let _0xf1cb81 = 0; _0xf1cb81 < _0x18c462; _0xf1cb81++) {
        {
          if ($.isNode()) {
            _0x382acb = await checkAddress("" + _0x232065[_0xf1cb81], 2500);
          } else {
            $.isSurge() || $.isLoon() ? _0x382acb = await httpClientRequest("" + _0x232065[_0xf1cb81], 2500) : _0x382acb = await fetchRequest("" + _0x232065[_0xf1cb81], 2500);
          }
          if (_0x382acb == true) {
            {
              apiHost = _0x232065[_0xf1cb81];
              $.log("📢 接口" + (_0xf1cb81 + 1) + "[" + _0x232065[_0xf1cb81] + "]服务器接口正常! 🎉");
              break;
            }
          }
          if (_0xf1cb81 == _0x18c462 - 1 && _0x382acb == false) {
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
          let _0x2c0402 = new Date(vipDate).getTime();
          let _0x5001ab = new Date().getTime();
          if (_0x5001ab > _0x2c0402) {
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
      isCharge == true ? $.log("🔔 此脚本采用付费模式。🔒") : $.log("🔔 此脚本采用免费模式。🔓");
      if (vipDate != "") {
        {
          if (isCharge == true) {
            {
              let _0xe9cd36 = new Date(vipDate).getTime();
              let _0x50db44 = new Date().getTime();
              if (_0x50db44 > _0xe9cd36) {
                {
                  $.log("❗️ 抱歉，VIP到期了，请及时付费。");
                  return;
                }
              } else {
                {
                  $.log("🔔 尊敬的会员：您好，你是VIP用户！🔐");
                }
              }
            }
          }
        }
      } else {
        {
          if (isCharge == true) {
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
      if (ylpapp.length > numbers * multiAccount) {
        {
          $.log("❗️ 当前用户一次最多运行" + numbers * multiAccount + "个账号，需要增加账号请查看置顶说明。");
          return;
        }
      }
      if (ylpapp.length == 0) {
        {
          $.log("先抓取账号ck，再运行脚本吧！");
          return;
        }
      }
      if (runedCounts + ylpapp.length > runTotalCounts) {
        {
          $.log("📢 一共发现了" + ylpapp.length + "个账号");
          $.log("❗️ 当前用户运行次数剩余" + (runTotalCounts - runedCounts) + "次，还可以运行" + (runTotalCounts - runedCounts) + "个账号，还需要" + (ylpapp.length - (runTotalCounts - runedCounts)) + "次，可以通过赞赏后增加运行次数！");
          return;
        }
      }
      if (vipDate != "") {
        {
          $.log("📢 你的会员有效期到： " + vipDate);
        }
      }
      helpUtils = await loadUtils(flushCash);
      if (helpUtils && helpUtils.createCryptoJS) {
        {
          CryptoJS = helpUtils.createCryptoJS();
        }
      }
      $.log("📢 一共发现了 " + ylpapp.length + " 个账号");
      let _0x8d3e3d = [];
      let _0x1e51e3 = ylpapp.length;
      let _0xdf6c3b = 0;
      if ($.isNode() && process.env.YLP_THREAD_COUNT) {
        {
          _0xdf6c3b = parseInt(process.env.YLP_THREAD_COUNT);
        }
      } else {
        {
          _0xdf6c3b = _0x1e51e3;
        }
      }
      let _0x3f6fd6 = ylpapp.length;
      if (_0xdf6c3b >= _0x1e51e3) {
        {
          _0xdf6c3b = _0x1e51e3;
          _0x3f6fd6 = 1;
          $.log("📢 你设置的线程数是" + _0xdf6c3b + "，账号个数是" + _0x1e51e3 + "，" + _0x3f6fd6 + "次可全部跑完。");
          for (let _0x41cfee = 0; _0x41cfee < ylpapp.length; _0x41cfee++) {
            {
              _0x8d3e3d.push(runMultiTasks(_0x41cfee));
              ylplogs[_0x41cfee] = "";
              if ($.isNode()) {
                {
                  channels_status[_0x41cfee] = 0;
                  await init_ws(_0x41cfee);
                }
              } else {
                {
                  channels_status[_0x41cfee] = 1;
                }
              }
            }
          }
          await Promise.allSettled(_0x8d3e3d).then(_0x14c7b3 => {
            {
              $.log("\n日志整理功能如下：");
              $.log("---------------日志整理开始--------------");
              for (let _0x15aa87 = 0; _0x15aa87 < ylpapp.length; _0x15aa87++) {
                {
                  ylplogs[_0x15aa87] && ($.log(ylplogs[_0x15aa87].trim()), sendlogs += ylplogs[_0x15aa87] + "\n");
                }
              }
              $.log("---------------日志整理结束--------------");
              sendMsg(sendlogs);
            }
          });
        }
      } else {
        {
          _0x3f6fd6 = Math.ceil(_0x1e51e3 / _0xdf6c3b);
          $.log("📢 你设置的线程数是" + _0xdf6c3b + "，账号个数是" + _0x1e51e3 + "，计算后分" + _0x3f6fd6 + "次执行，一次可执行" + _0xdf6c3b + "个账号。");
          for (let _0x29d9bc = 0; _0x29d9bc < _0x3f6fd6; _0x29d9bc++) {
            {
              for (let _0x563a94 = _0x29d9bc * _0xdf6c3b; _0x563a94 < _0xdf6c3b * (_0x29d9bc + 1) && _0x563a94 < _0x1e51e3; _0x563a94++) {
                _0x8d3e3d.push(runMultiTasks(_0x563a94));
                ylplogs[_0x563a94] = "";
                channels_status[_0x563a94] = 0;
                await init_ws(_0x563a94);
              }
              await Promise.allSettled(_0x8d3e3d).then(_0x4677f9 => {
                {
                  _0x8d3e3d = [];
                  if (_0x29d9bc === _0x3f6fd6 - 1) {
                    {
                      $.log("\n日志整理功能如下：");
                      $.log("---------------日志整理开始--------------");
                      for (let _0x4d4b28 = 0; _0x4d4b28 < ylpapp.length; _0x4d4b28++) {
                        {
                          ylplogs[_0x4d4b28] && ($.log(ylplogs[_0x4d4b28].trim()), sendlogs += ylplogs[_0x4d4b28] + "\n");
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
})().catch(_0x418911 => $.logErr(_0x418911)).finally(() => $.done());
async function runMultiTasks(_0x5d8e4e) {
  return new Promise(_0x3e967a => {
    {
      $.log("[账号" + (_0x5d8e4e + 1 < 10 ? "0" + (_0x5d8e4e + 1) : _0x5d8e4e + 1) + "]: 开始执行 working......");
      runSubTask(_0x3e967a, _0x5d8e4e);
    }
  });
}
async function runSubTask(_0xa17025, _0x399504) {
  if ($.isNode()) {
    {
      await $.wait(1000);
    }
  }
  const _0xc76394 = ylpapp[_0x399504];
  try {
    {
      await ensureAuthDt(_0xc76394, _0x399504);
      const _0x3d8020 = await getUserInfo(_0xc76394, _0x399504);
      if (_0x3d8020) {
        {
          const _0xd2a545 = new Date(Date.now() + (new Date().getTimezoneOffset() + 480) * 60000);
          const _0x244d1b = _0xd2a545.getHours();
          const _0x422021 = _0x244d1b === 0 || hour === 0 || process.env.YLP_MIDNIGHT === "1" || process.env.YLP_MIDNIGHT === "true";
          _0x422021 ? ($.log("[账号" + (_0x399504 + 1 < 10 ? "0" + (_0x399504 + 1) : _0x399504 + 1) + "]: 🌙 当前为 0 点整点时段，跳过日常挂机与转盘任务，直接启动金币自动提现！"), await handleWithdraw(_0xc76394, _0x399504)) : (await handleFission(_0xc76394, _0x399504), await handleWatchAndSignin(_0xc76394, _0x399504), await handleLottery(_0xc76394, _0x399504), isMainAccount(_0xc76394) && (await handleMainFissionRefresh(_0xc76394, _0x399504)), await handleWithdraw(_0xc76394, _0x399504));
        }
      }
    }
  } catch (_0x465798) {
    {
      $.log("[账号" + (_0x399504 + 1 < 10 ? "0" + (_0x399504 + 1) : _0x399504 + 1) + "]: 运行过程中发生异常 - " + (_0x465798.message || _0x465798));
    }
  } finally {
    {
      if ($.isNode() && wss[_0x399504]) {
        {
          try {
            {
              await wss[_0x399504].close();
            }
          } catch (_0x109a59) {}
        }
      }
      await runComplete(appName, userId);
      _0xa17025();
    }
  }
}
function getAASkey(_0x4e9658) {
  let _0x1e9006 = [];
  let _0x232935 = [];
  for (let _0x1ac07f = 0; _0x1ac07f < _0x4e9658.length; _0x1ac07f++) {
    {
      _0x1ac07f % 2 === 0 ? _0x1e9006.push(_0x4e9658[_0x1ac07f]) : _0x232935.push(_0x4e9658[_0x1ac07f]);
    }
  }
  return CryptoJS.MD5(_0x1e9006.join("") + _0x232935.join("")).toString();
}
function generateSignature(_0x39775a, _0x4f2935, _0xc98252, _0x2dfda7) {
  const _0x58e137 = getAASkey(_0x4f2935);
  return CryptoJS.MD5(_0x39775a + _0xc98252 + _0x2dfda7 + _0x58e137).toString();
}
function randomString(_0x399f68 = 32) {
  const _0x2f5a8f = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let _0x2fcf9b = "";
  for (let _0x4e76b9 = 0; _0x4e76b9 < _0x399f68; _0x4e76b9++) {
    {
      _0x2fcf9b += _0x2f5a8f.charAt(Math.floor(Math.random() * _0x2f5a8f.length));
    }
  }
  return _0x2fcf9b;
}
async function ensureAuthDt(_0x2ead0c, _0x1bdcf1 = 0) {
  if (_0x2ead0c.authDt && _0x2ead0c.authDt.length === 36) {
    _0x2ead0c.deviceToken = _0x2ead0c.authDt;
    return _0x2ead0c.authDt;
  }
  const _0x261c54 = Date.now().toString() + Math.floor(1000000 + Math.random() * 9000000).toString();
  const _0x105951 = _0x2ead0c.ua || "Mozilla/5.0 (iPhone; CPU iPhone OS 18_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;;xsb;xsb_linpin;1.1.5;Appstore;native_app;7.13.0";
  const _0x102585 = {
    "Access-User-Id": "0",
    "Access-T-Id": T_ID,
    "Access-Wxclient-Type": "wx_app",
    "Access-T-Id-In": T_ID_IN,
    "Access-Api-Dt": _0x261c54,
    Referer: "https://linping.y-h5.iyunxh.com/",
    "User-Agent": _0x105951,
    "Content-Type": "application/json;charset=utf-8"
  };
  try {
    {
      const _0x5b3997 = require("axios");
      const _0xf3a5e9 = {
        headers: _0x102585,
        timeout: 5000
      };
      const _0x1b3b63 = await _0x5b3997.get(API_BASE + "/aosbase/_auth_dt", _0xf3a5e9);
      if (_0x1b3b63.data && (_0x1b3b63.data.code == 0 || _0x1b3b63.data.code === "0") && _0x1b3b63.data.data) {
        {
          _0x2ead0c.authDt = _0x1b3b63.data.data.substring(32, 68);
          _0x2ead0c.deviceToken = _0x2ead0c.authDt;
          return _0x2ead0c.authDt;
        }
      }
    }
  } catch (_0x20bb21) {
    $.log("[账号" + (_0x1bdcf1 + 1 < 10 ? "0" + (_0x1bdcf1 + 1) : _0x1bdcf1 + 1) + "]: 认证 dtoken 异常: " + _0x20bb21.message);
  }
  _0x2ead0c.authDt = _0x261c54;
  _0x2ead0c.deviceToken = _0x261c54;
  return _0x261c54;
}
async function getReqObject(_0x527c27, _0x3eaaf2 = null, _0x3cd018 = 0, _0x1c5627 = null) {
  _0x1c5627 = _0x1c5627 || (ylpapp && ylpapp[_0x3cd018] ? ylpapp[_0x3cd018] : {});
  if (!_0x1c5627.authDt || _0x1c5627.authDt.length !== 36) {
    {
      await ensureAuthDt(_0x1c5627, _0x3cd018);
    }
  }
  const _0x19fa82 = Date.now().toString();
  const _0x108728 = randomString(32);
  const _0x524402 = generateSignature(APP_ID, APP_KEY, _0x108728, _0x19fa82);
  let _0x5d00d7 = _0x1c5627.userId || _0x1c5627.accountId || "";
  if (!_0x5d00d7 && _0x1c5627.accessToken) {
    {
      try {
        {
          const _0x11af41 = _0x1c5627.accessToken.substring(32);
          const _0x37cd8c = Buffer.from(_0x11af41, "base64").toString("utf-8");
          const _0x518244 = _0x37cd8c.match(/data\[user_id\]=(\d+)/);
          if (_0x518244) {
            _0x5d00d7 = _0x518244[1];
          }
        }
      } catch (_0x3d3c5f) {}
    }
  }
  const _0x5bc7d2 = _0x1c5627.authDt || _0x1c5627.deviceId || "0922" + randomString(32).toLowerCase();
  _0x1c5627.deviceToken = _0x5bc7d2;
  let _0x227413 = _0x1c5627.ua || "Mozilla/5.0 (iPhone; CPU iPhone OS 18_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;;xsb;xsb_linpin;1.1.5;Appstore;native_app;7.13.0";
  const _0x56acce = {
    Host: "ya.iyunxh.com",
    "Content-Type": "application/json",
    "Access-T-Id": T_ID,
    "Access-T-Id-In": T_ID_IN,
    "Access-Api-Dt": _0x5bc7d2,
    "Access-Api-Signature": APP_ID + ";" + _0x108728 + ";" + _0x19fa82 + ";" + _0x524402,
    "Access-Wxclient-Type": "wx_app",
    "Access-Token": _0x1c5627.accessToken || "",
    "Access-Api-Unique-Token": "1",
    "Access-User-Id": _0x5d00d7,
    "User-Agent": _0x227413,
    Origin: "https://linping.y-h5.iyunxh.com",
    Referer: "https://linping.y-h5.iyunxh.com/"
  };
  let _0x14fcc4 = {
    url: _0x527c27,
    headers: _0x56acce
  };
  _0x3eaaf2 && (_0x14fcc4.body = typeof _0x3eaaf2 === "object" ? JSON.stringify(_0x3eaaf2) : _0x3eaaf2);
  requestObjects[_0x3cd018] = _0x14fcc4;
  return _0x14fcc4;
}
async function httpRequest(_0x196780, _0x10c1b5, _0x5dd621) {
  httpResult = null;
  if (activeProxyAgent && isTaskUrl(_0x10c1b5.url)) {
    {
      _0x10c1b5.agent = activeProxyAgent.agent && activeProxyAgent.agent.http ? activeProxyAgent.agent : {
        http: activeProxyAgent.http || activeProxyAgent,
        https: activeProxyAgent.https || activeProxyAgent
      };
    }
  }
  return new Promise(_0x43b427 => {
    $[_0x196780.toLowerCase()](_0x10c1b5, async (_0x1b1539, _0x392ce5, _0x961b81) => {
      {
        try {
          {
            if (_0x1b1539) {
              $.log(_0x5dd621 + ": " + _0x196780 + "请求失败");
              $.logErr(_0x1b1539);
            } else {
              {
                if (safeGet(_0x961b81)) {
                  {
                    httpResult = JSON.parse(_0x961b81);
                    debug == 1 && $.log(httpResult);
                  }
                } else {
                  {
                    const _0x3f4153 = _0x10c1b5.url || "";
                    let _0x3a3e3f = _0x3f4153;
                    try {
                      _0x3a3e3f = new URL(_0x3f4153).pathname;
                    } catch (_0x2f5673) {}
                  }
                }
              }
            }
          }
        } catch (_0x37d9f5) {
          $.logErr(_0x37d9f5, _0x392ce5);
        } finally {
          _0x43b427(httpResult);
        }
      }
    });
  });
}
const RSA_PUB_KEY = "-----BEGIN PUBLIC KEY-----\nMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQD6XO7e9YeAOs+cFqwa7ETJ+WXi\nzPqQeXv68i5vqw9pFREsrqiBTRcg7wB0RIp3rJkDpaeVJLsZqYm5TW7FWx/iOiXF\nc+zCPvaKZric2dXCw27EvlH5rq+zwIPDAJHGAfnn1nmQH7wR3PCatEIb8pz5GFlT\nHMlluw4ZYmnOwg+thwIDAQAB\n-----END PUBLIC KEY-----";
const API_SALT = "FR*r!isE5W";
function rsaEncryptPassword(_0x36a94f) {
  const _0x4b1060 = require("crypto");
  const _0xb70386 = _0x4b1060.publicEncrypt({
    key: RSA_PUB_KEY,
    padding: _0x4b1060.constants.RSA_PKCS1_PADDING
  }, Buffer.from(_0x36a94f));
  return _0xb70386.toString("base64");
}
function getPassportSignature(_0xc8bde9, _0x2ec6f7, _0xbd9c9a, _0x46e7de, _0x11d4c0) {
  const _0x2e7f66 = require("crypto");
  _0x46e7de = _0x46e7de || "";
  const _0x2cd34d = _0xc8bde9.toLowerCase() + "%%" + _0x2ec6f7 + "%%" + _0xbd9c9a + "%%" + _0x46e7de;
  const _0x43bfd5 = _0x2e7f66.createHmac("sha256", _0x11d4c0);
  _0x43bfd5.update(_0x2cd34d);
  return _0x43bfd5.digest("hex");
}
function getApiSignature(_0x5aac24, _0x2a5e68, _0x414782, _0x38d05d, _0x2b33ee) {
  const _0x21b2af = require("crypto");
  _0x2a5e68 = _0x2a5e68 || "";
  const _0x5a4cd8 = _0x5aac24 + "&&" + _0x2a5e68 + "&&" + _0x414782 + "&&" + _0x38d05d + "&&" + API_SALT + "&&" + _0x2b33ee;
  return _0x21b2af.createHash("sha256").update(_0x5a4cd8).digest("hex");
}
async function loginWithPassword(_0x20bce2, _0x1e8025) {
  const _0x22c14b = _0x20bce2.phone || _0x20bce2.mobile || _0x20bce2.phoneNumber;
  const _0x4fcbad = _0x20bce2.password;
  if (!_0x22c14b || !_0x4fcbad) {
    return false;
  }
  $.log("[账号" + (_0x1e8025 + 1 < 10 ? "0" + (_0x1e8025 + 1) : _0x1e8025 + 1) + "]: 🔑 正在通过手机号密码登录: " + _0x22c14b + "...");
  const _0x4abf92 = require("crypto");
  const _0x545859 = require("axios");
  const _0x370be8 = "10001";
  const _0xf7590d = "45";
  const _0x23d5e1 = _0x4abf92.randomUUID().toUpperCase();
  const _0x224c85 = "1.1.5;0632F784-7B8E-4E79-9B46-BAC1DDA96017-1103101952;iPhone18,3;IOS;27.0;Appstore;7.13.0";
  try {
    {
      const _0x2c004d = {
        "X-REQUEST-ID": _0x23d5e1,
        "User-Agent": _0x224c85
      };
      const _0x4e4be2 = {
        headers: _0x2c004d
      };
      const _0x291420 = await _0x545859.get("https://passport.tmuyun.com/web/init?client_id=" + _0x370be8, _0x4e4be2);
      const _0x7342c2 = _0x291420.data?.["data"]?.["client"]?.["signature_key"];
      if (!_0x7342c2) {
        throw new Error("获取 signKey 失败");
      }
      const _0x8f33b = rsaEncryptPassword(_0x4fcbad);
      const _0x2f57f7 = encodeURIComponent(_0x8f33b);
      const _0x49ac83 = "/web/oauth/credential_auth?client_id=" + _0x370be8 + "&password=" + _0x2f57f7 + "&phone_number=" + _0x22c14b;
      const _0x1cbcb1 = getPassportSignature("post", _0x49ac83, _0x23d5e1, "", _0x7342c2);
      const _0x11b253 = "client_id=" + _0x370be8 + "&password=" + _0x2f57f7 + "&phone_number=" + _0x22c14b;
      const _0x1c70e2 = await _0x545859.post("https://passport.tmuyun.com/web/oauth/credential_auth", _0x11b253, {
        headers: {
          "X-SIGNATURE": _0x1cbcb1,
          "X-REQUEST-ID": _0x23d5e1,
          "User-Agent": _0x224c85,
          "Content-Type": "application/x-www-form-urlencoded"
        }
      });
      if (_0x1c70e2.data?.["code"] !== 0) {
        {
          throw new Error("credential_auth 验证失败: " + (_0x1c70e2.data?.["message"] || JSON.stringify(_0x1c70e2.data)));
        }
      }
      const _0x53c343 = _0x1c70e2.data.data.authorization_code.code;
      $.log("[账号" + (_0x1e8025 + 1 < 10 ? "0" + (_0x1e8025 + 1) : _0x1e8025 + 1) + "]: 密码校验通过，成功获取授权码!");
      const _0x4e99ab = _0x4abf92.randomUUID().toUpperCase();
      const _0x5b3688 = Date.now().toString();
      const _0x1e1941 = _0x20bce2.sessionId || "6aaf62ff1792950002b64c85";
      const _0x5dc3e0 = getApiSignature("/api/zbtxz/login", _0x1e1941, _0x4e99ab, _0x5b3688, _0xf7590d);
      const _0x428c5b = await _0x545859.post("https://vapp.tmuyun.com/api/zbtxz/login", "code=" + _0x53c343, {
        headers: {
          "X-SIGNATURE": _0x5dc3e0,
          "X-REQUEST-ID": _0x4e99ab,
          "X-TIMESTAMP": _0x5b3688,
          "X-TENANT-ID": _0xf7590d,
          "X-SESSION-ID": _0x1e1941,
          "User-Agent": _0x224c85,
          "Content-Type": "application/x-www-form-urlencoded"
        }
      });
      if (_0x428c5b.data?.["code"] !== 0) {
        {
          throw new Error("vApp 登录失败: " + JSON.stringify(_0x428c5b.data));
        }
      }
      const _0x2b6474 = _0x428c5b.data.data.session;
      const _0x2b80dd = _0x428c5b.data.data.account;
      _0x20bce2.sessionId = _0x2b6474.id;
      _0x20bce2.accountId = _0x2b80dd.id;
      _0x20bce2.userId = _0x2b80dd.id;
      _0x20bce2.name = _0x2b80dd.nick_name || "读友_" + _0x2b80dd.id;
      _0x20bce2.refCode = _0x2b80dd.ref_code || "";
      _0x20bce2.refUserCode = _0x2b80dd.ref_user_code || "";
      const _0x39d410 = Math.floor(Date.now() / 1000).toString();
      const _0x2bfa5d = Math.random().toString(36).substring(2, 8);
      const _0x1dc9e9 = {
        app_user_token: _0x2b6474.id,
        appid: APP_ID,
        noncestr: _0x2bfa5d,
        phone: _0x22c14b,
        portrait_url: _0x2b80dd.image_url || "",
        timestamp: _0x39d410,
        user_id: _0x2b80dd.id,
        user_name: _0x20bce2.name,
        wx_openid: "",
        wx_unionid: ""
      };
      const _0x55b015 = Object.keys(_0x1dc9e9).sort();
      const _0x55c06e = _0x55b015.map(_0x1f04ac => _0x1f04ac + "=" + encodeURIComponent(_0x1dc9e9[_0x1f04ac]));
      const _0xe81b6b = _0x55c06e.join("&") + ("&appkey=" + APP_KEY);
      _0x1dc9e9.signature = _0x4abf92.createHash("md5").update(_0xe81b6b).digest("hex");
      const _0x4dfc4b = {
        "Content-Type": "application/json",
        "Access-T-Id": T_ID,
        "Access-T-Id-In": T_ID_IN,
        "Access-Api-Unique-Token": "1",
        "Access-Wxclient-Type": "wx_app"
      };
      const _0x5e4c0d = {
        headers: _0x4dfc4b
      };
      const _0x2efc62 = await _0x545859.post(API_BASE + "/aosbase/_auth_appuserinit", _0x1dc9e9, _0x5e4c0d);
      if (_0x2efc62.data?.["code"] === "0" || _0x2efc62.data?.["code"] === 0) {
        _0x20bce2.accessToken = _0x2efc62.data.data.access_token;
        $.log("[账号" + (_0x1e8025 + 1 < 10 ? "0" + (_0x1e8025 + 1) : _0x1e8025 + 1) + "]: 🎉 换取新 Access-Token 成功!");
        return true;
      } else {
        {
          throw new Error("_auth_appuserinit 失败: " + JSON.stringify(_0x2efc62.data));
        }
      }
    }
  } catch (_0x38914c) {
    {
      $.log("[账号" + (_0x1e8025 + 1 < 10 ? "0" + (_0x1e8025 + 1) : _0x1e8025 + 1) + "]: 密码登录异常: " + _0x38914c.message);
      return false;
    }
  }
}
async function getUserInfo(_0x25ac0f, _0x1973e3) {
  !_0x25ac0f.accessToken && (_0x25ac0f.phone || _0x25ac0f.mobile) && _0x25ac0f.password && (await loginWithPassword(_0x25ac0f, _0x1973e3));
  const _0x5ed6cf = API_BASE + "/aosbase/user_info_i";
  let _0x1af18c = await getReqObject(_0x5ed6cf, null, _0x1973e3, _0x25ac0f);
  let _0x24ed29 = await httpRequest("get", _0x1af18c, printCaller());
  if ((!_0x24ed29 || _0x24ed29.code !== "0") && (_0x25ac0f.phone || _0x25ac0f.mobile) && _0x25ac0f.password) {
    {
      $.log("[账号" + (_0x1973e3 + 1 < 10 ? "0" + (_0x1973e3 + 1) : _0x1973e3 + 1) + "]: Token 可能失效，尝试通过手机密码重新登录刷新...");
      const _0x3ef7e3 = await loginWithPassword(_0x25ac0f, _0x1973e3);
      if (_0x3ef7e3) {
        {
          _0x1af18c = await getReqObject(_0x5ed6cf, null, _0x1973e3, _0x25ac0f);
          _0x24ed29 = await httpRequest("get", _0x1af18c, printCaller());
        }
      }
    }
  }
  if (_0x24ed29 && _0x24ed29.code === "0") {
    {
      const _0x26923b = _0x24ed29.data;
      _0x25ac0f.name = _0x26923b.name || "读友_" + _0x26923b.id;
      _0x25ac0f.gold = _0x26923b.gold || 0;
      _0x25ac0f.integral = _0x26923b.integral || 0;
      $.log("[账号" + (_0x1973e3 + 1 < 10 ? "0" + (_0x1973e3 + 1) : _0x1973e3 + 1) + "]: [" + _0x25ac0f.name + "] 登录有效! 当前金币: " + _0x25ac0f.gold + ", 积分: " + _0x25ac0f.integral);
      return _0x26923b;
    }
  } else {
    {
      $.log("[账号" + (_0x1973e3 + 1 < 10 ? "0" + (_0x1973e3 + 1) : _0x1973e3 + 1) + "]: 获取用户信息失败: " + (_0x24ed29 ? _0x24ed29.msg : "网络异常"));
      return null;
    }
  }
}
async function sendWatchPing(_0x9cac22, _0xe3322d) {
  const _0x4a33be = API_BASE + "/aosbase/watch_ping";
  const _0x46639f = await getReqObject(_0x4a33be, {}, _0xe3322d, _0x9cac22);
  const _0xbbdac1 = await httpRequest("post", _0x46639f, printCaller());
  if (_0xbbdac1 && _0xbbdac1.code === "0") {
    {
      return _0xbbdac1.data;
    }
  }
  return null;
}
async function submitSignin(_0x1cd49c, _0x58139c) {
  const _0x1c664f = API_BASE + "/aossignin/ac_sub";
  const _0xae17f6 = {
    id: SIGNIN_ACT_ID,
    afs_tokenid: "",
    collect_info: "",
    longitude: 0,
    latitude: 0
  };
  const _0x115dff = await getReqObject(_0x1c664f, _0xae17f6, _0x58139c, _0x1cd49c);
  const _0x273489 = await httpRequest("post", _0x115dff, printCaller());
  if (_0x273489) {
    {
      if (_0x273489.code === "0") {
        {
          const _0x2f719a = _0x273489.data && _0x273489.data.title ? _0x273489.data.title : "金币奖励";
          $.log("[账号" + (_0x58139c + 1 < 10 ? "0" + (_0x58139c + 1) : _0x58139c + 1) + "]: [签到] 🎉 签到成功！获得: " + _0x2f719a);
          return true;
        }
      } else {
        {
          $.log("[账号" + (_0x58139c + 1 < 10 ? "0" + (_0x58139c + 1) : _0x58139c + 1) + "]: [签到] 签到失败: " + _0x273489.msg);
        }
      }
    }
  }
  return false;
}
async function handleWatchAndSignin(_0x5c7072, _0x54d027) {
  $.log("[账号" + (_0x54d027 + 1 < 10 ? "0" + (_0x54d027 + 1) : _0x54d027 + 1) + "]: --- 开始检测【闭眼赚金币】挂机与签到 ---");
  let _0x27c1b8 = await sendWatchPing(_0x5c7072, _0x54d027);
  let _0x777ab3 = _0x27c1b8 ? _0x27c1b8.total_duration : 0;
  $.log("[账号" + (_0x54d027 + 1 < 10 ? "0" + (_0x54d027 + 1) : _0x54d027 + 1) + "]: 当前今日已累计挂机: " + _0x777ab3 + " 秒 / " + TARGET_STAY_TIME + " 秒 (" + (_0x777ab3 / TARGET_STAY_TIME * 100).toFixed(1) + "%)");
  if (_0x777ab3 >= TARGET_STAY_TIME) {
    {
      $.log("[账号" + (_0x54d027 + 1 < 10 ? "0" + (_0x54d027 + 1) : _0x54d027 + 1) + "]: 累计时长已满足 10800 秒，尝试直接签到...");
      await submitSignin(_0x5c7072, _0x54d027);
      return;
    }
  }
  if (watchCount > 0) {
    {
      $.log("[账号" + (_0x54d027 + 1 < 10 ? "0" + (_0x54d027 + 1) : _0x54d027 + 1) + "]: 开始挂机打卡，计划发送 " + watchCount + " 次心跳 (约 " + (watchCount * 10 / 60).toFixed(1) + " 分钟)...");
      for (let _0x88f33c = 1; _0x88f33c <= watchCount; _0x88f33c++) {
        {
          await $.wait(10000);
          _0x27c1b8 = await sendWatchPing(_0x5c7072, _0x54d027);
          if (_0x27c1b8) {
            {
              _0x777ab3 = _0x27c1b8.total_duration;
              (_0x88f33c % 5 === 0 || _0x88f33c === watchCount || _0x777ab3 >= TARGET_STAY_TIME) && $.log("[账号" + (_0x54d027 + 1 < 10 ? "0" + (_0x54d027 + 1) : _0x54d027 + 1) + "]: 心跳挂机[" + _0x88f33c + "/" + watchCount + "] => 本次连续: " + _0x27c1b8.continuous_duration + "s, 今日累计: " + _0x777ab3 + "/" + TARGET_STAY_TIME + "s (" + (_0x777ab3 / TARGET_STAY_TIME * 100).toFixed(1) + "%)");
              if (_0x777ab3 >= TARGET_STAY_TIME) {
                {
                  $.log("[账号" + (_0x54d027 + 1 < 10 ? "0" + (_0x54d027 + 1) : _0x54d027 + 1) + "]: 🎉 挂机累计时长已达标，立即执行签到！");
                  await $.wait(1000);
                  await submitSignin(_0x5c7072, _0x54d027);
                  return;
                }
              }
            }
          } else {
            {
              $.log("[账号" + (_0x54d027 + 1 < 10 ? "0" + (_0x54d027 + 1) : _0x54d027 + 1) + "]: 心跳发送异常");
            }
          }
        }
      }
    }
  } else {
    {
      $.log("[账号" + (_0x54d027 + 1 < 10 ? "0" + (_0x54d027 + 1) : _0x54d027 + 1) + "]: YLP_WATCH_COUNT 设置为 0，跳过自动心跳挂机");
    }
  }
  const _0x10ff8e = Math.max(0, TARGET_STAY_TIME - _0x777ab3);
  $.log("[账号" + (_0x54d027 + 1 < 10 ? "0" + (_0x54d027 + 1) : _0x54d027 + 1) + "]: [挂机] 今日已累计: " + _0x777ab3 + "s, 距签到还需: " + _0x10ff8e + "s");
}
async function handleInvite(_0x24a028, _0x52cb97) {
  const _0x46f73d = "[账号" + (_0x52cb97 + 1 < 10 ? "0" + (_0x52cb97 + 1) : _0x52cb97 + 1) + "]";
  let _0x526289 = (process.env.YLP_INVICODE || $.getval("ylpinvicode") || "").trim();
  if (!_0x526289 || _0x526289.includes("-") || _0x526289.length > 8) {
    {
      return;
    }
  }
  if (_0x24a028.refUserCode && _0x24a028.refUserCode.trim() !== "") {
    {
      return;
    }
  }
  if (_0x24a028.refCode && _0x24a028.refCode.toUpperCase() === _0x526289.toUpperCase()) {
    {
      return;
    }
  }
  if (!_0x24a028.sessionId || !_0x24a028.accountId) {
    {
      return;
    }
  }
  const _0x2e53b6 = require("crypto");
  const _0x626c4c = require("axios");
  const _0x453ede = "45";
  const _0x367562 = _0x2e53b6.randomUUID().toUpperCase();
  const _0x245d95 = Date.now().toString();
  const _0x57fea4 = "/api/account/update_ref_code";
  const _0x555b21 = getApiSignature(_0x57fea4, _0x24a028.sessionId, _0x367562, _0x245d95, _0x453ede);
  const _0x1f59bb = _0x24a028.ua || "1.1.5;0632F784-7B8E-4E79-9B46-BAC1DDA96017-1103101952;iPhone18,3;IOS;27.0;Appstore;7.13.0";
  try {
    {
      const _0x30d676 = await _0x626c4c.post("https://vapp.tmuyun.com" + _0x57fea4, "ref_code=" + encodeURIComponent(_0x526289), {
        headers: {
          Host: "vapp.tmuyun.com",
          "X-TIMESTAMP": _0x245d95,
          "X-SESSION-ID": _0x24a028.sessionId,
          "X-ACCOUNT-ID": _0x24a028.accountId,
          "X-TENANT-ID": _0x453ede,
          "X-REQUEST-ID": _0x367562,
          "X-SIGNATURE": _0x555b21,
          "User-Agent": _0x1f59bb,
          "Content-Type": "application/x-www-form-urlencoded"
        },
        timeout: 10000
      });
      if (_0x30d676.data?.["code"] === 0) {
        {
          const _0x4d586a = _0x30d676.data.data || {};
          _0x24a028.refUserCode = _0x4d586a.ref_user_code || _0x526289;
          $.log(_0x46f73d + ": 🎉 成功绑定邀请码: [" + _0x526289 + "]");
        }
      } else {
        {
          if (_0x30d676.data?.["message"] && (_0x30d676.data.message.includes("已") || _0x30d676.data.code === 50012)) {
            {
              _0x24a028.refUserCode = _0x526289;
            }
          }
        }
      }
    }
  } catch (_0x589309) {
    {
      $.log(_0x46f73d + ": [邀请] ❌ 填写邀请码请求异常: " + (_0x589309.response?.["data"]?.["message"] || _0x589309.message));
    }
  }
}
const MAIN_PHONE = process.env.YLP_MAIN_PHONE || "18472313502";
function isMainAccount(_0x4111fd) {
  const _0x235975 = (_0x4111fd.phone || _0x4111fd.mobile || _0x4111fd.phoneNumber || "").toString().trim();
  return _0x235975 === MAIN_PHONE;
}
async function getFissionCode(_0x57b045, _0x390b01, _0x347edd = LOTTERY_ACT_ID, _0x36e863 = false) {
  if (!_0x36e863 && _0x57b045.fissionCode) {
    return _0x57b045.fissionCode;
  }
  const _0x448eb3 = API_BASE + "/aoslottery/ac_fissiontaskcreate";
  const _0x210f0b = {
    id: _0x347edd
  };
  const _0x28becf = await getReqObject(_0x448eb3, _0x210f0b, _0x390b01, _0x57b045);
  const _0x6667d3 = await httpRequest("post", _0x28becf, printCaller());
  if (_0x6667d3 && (_0x6667d3.code === 0 || _0x6667d3.code === "0") && _0x6667d3.data) {
    {
      _0x57b045.fissionCode = _0x6667d3.data;
      return _0x57b045.fissionCode;
    }
  }
  return null;
}
async function getFissionProgress(_0x3557f6, _0x2595a8, _0x585a6b, _0x35883c = LOTTERY_ACT_ID) {
  if (!_0x585a6b) {
    return null;
  }
  const _0x227cf0 = _0x585a6b.split("-")[0] || "40602";
  const _0x4e506f = API_BASE + "/aosfission/gettaskprogress?module_id=" + _0x227cf0 + "&content_id=" + _0x35883c + "&code=" + encodeURIComponent(_0x585a6b);
  const _0x1c7184 = await getReqObject(_0x4e506f, null, _0x2595a8, _0x3557f6);
  const _0x5625ae = await httpRequest("get", _0x1c7184, printCaller());
  if (_0x5625ae && (_0x5625ae.code === 0 || _0x5625ae.code === "0") && _0x5625ae.data) {
    {
      return _0x5625ae.data;
    }
  }
  return null;
}
async function takeFissionHelp(_0x52aa9f, _0x28159c, _0x1ce206) {
  if (!_0x1ce206) {
    return;
  }
  if (_0x52aa9f.fissionCode && _0x52aa9f.fissionCode === _0x1ce206) {
    {
      return;
    }
  }
  const _0x3f2e8b = API_BASE + "/aosfission/task_take";
  const _0xcb4464 = {
    code: _0x1ce206
  };
  const _0x2f3abd = await getReqObject(_0x3f2e8b, _0xcb4464, _0x28159c, _0x52aa9f);
  await httpRequest("post", _0x2f3abd, printCaller());
}
async function handleFission(_0xb38f15, _0x44938a) {
  const _0xb848c3 = "[账号" + (_0x44938a + 1 < 10 ? "0" + (_0x44938a + 1) : _0x44938a + 1) + "]";
  const _0x49030e = await getFissionCode(_0xb38f15, _0x44938a, LOTTERY_ACT_ID);
  if (isMainAccount(_0xb38f15)) {
    {
      if (_0x49030e) {
        {
          const _0x4121cf = await getFissionProgress(_0xb38f15, _0x44938a, _0x49030e, LOTTERY_ACT_ID);
          const _0x25e461 = _0x4121cf && _0x4121cf.user_list ? _0x4121cf.user_list : [];
          const _0x2eafc3 = _0x4121cf && (_0x4121cf.state === 1 || _0x25e461.length >= 3);
          if (_0x2eafc3) {
            {
              _0xb38f15.fissionFinished = true;
              $.log(_0xb848c3 + ": 🎁 主号助力已满3次（" + _0x25e461.length + "/3），将在大转盘抽奖完成后自动刷新助力码并写入 Redis");
            }
          } else {
            {
              _0xb38f15.fissionFinished = false;
              $.log(_0xb848c3 + ": 📊 主号当前助力进度: " + _0x25e461.length + "/3 人已助力");
              const _0x30095b = await redisGet("app_invicate_code", "ylpapp");
              if (_0x30095b !== _0x49030e) {
                {
                  await redisSet("app_invicate_code", "ylpapp", _0x49030e);
                  invicode = _0x49030e;
                  $.log(_0xb848c3 + ": 📌 已同步主号助力码至 Redis: [" + _0x49030e + "]");
                }
              }
            }
          }
        }
      }
    }
  } else {
    {
      let _0x4d4b25 = (process.env.YLP_FISSION_CODE || (await redisGet("app_invicate_code", "ylpapp")) || invicode || "").trim();
      if (_0x4d4b25 && _0x4d4b25 !== _0x49030e) {
        {
          await takeFissionHelp(_0xb38f15, _0x44938a, _0x4d4b25);
        }
      }
    }
  }
}
async function handleMainFissionRefresh(_0x54c351, _0x12f400) {
  if (!isMainAccount(_0x54c351)) {
    return;
  }
  const _0x5ee7a5 = "[账号" + (_0x12f400 + 1 < 10 ? "0" + (_0x12f400 + 1) : _0x12f400 + 1) + "]";
  let _0x41086e = _0x54c351.fissionFinished;
  if (!_0x41086e && _0x54c351.fissionCode) {
    {
      const _0x51ce98 = await getFissionProgress(_0x54c351, _0x12f400, _0x54c351.fissionCode, LOTTERY_ACT_ID);
      if (_0x51ce98 && (_0x51ce98.state === 1 || _0x51ce98.user_list && _0x51ce98.user_list.length >= 3)) {
        {
          _0x41086e = true;
        }
      }
    }
  }
  if (_0x41086e) {
    {
      const _0x24b994 = _0x54c351.fissionCode;
      delete _0x54c351.fissionCode;
      const _0x419c31 = await getFissionCode(_0x54c351, _0x12f400, LOTTERY_ACT_ID, true);
      if (_0x419c31 && _0x419c31 !== _0x24b994) {
        {
          _0x54c351.fissionCode = _0x419c31;
          _0x54c351.fissionFinished = false;
          invicode = _0x419c31;
          await redisSet("app_invicate_code", "ylpapp", _0x419c31);
          $.log(_0x5ee7a5 + ": 🔄 主号已完成3次助力且抽奖完毕，已自动重新获取助力码 [" + _0x419c31 + "] 并写入 Redis (app_invicate_code ylpapp)!");
        }
      } else {
        if (_0x419c31) {
          {
            _0x54c351.fissionCode = _0x419c31;
            await redisSet("app_invicate_code", "ylpapp", _0x419c31);
            $.log(_0x5ee7a5 + ": ℹ️ 主号当前助力码为 [" + _0x419c31 + "]，已同步至 Redis");
          }
        }
      }
    }
  }
}
async function handleLottery(_0x3e786d, _0x9bcdba) {
  if (!autoLottery) {
    return;
  }
  const _0x21615d = "[账号" + (_0x9bcdba + 1 < 10 ? "0" + (_0x9bcdba + 1) : _0x9bcdba + 1) + "]";
  await ensureAuthDt(_0x3e786d, _0x9bcdba);
  const _0x498d77 = {
    id: process.env.YLP_LOTTERY_ID || "94431030429015ffb69508",
    name: "悦转越有大转盘"
  };
  const _0x306622 = {
    id: "a13b10304057b469561308",
    name: "闭眼赚金币大转盘"
  };
  const _0x474455 = [_0x498d77, _0x306622];
  for (const _0x473833 of _0x474455) {
    {
      $.log(_0x21615d + ": --- 开始检测【" + _0x473833.name + "】 ---");
      const _0x1cbb3c = API_BASE + "/aoslottery/ac_lottery_times?id=" + _0x473833.id;
      const _0x5822e5 = await getReqObject(_0x1cbb3c, null, _0x9bcdba, _0x3e786d);
      const _0x4616c6 = await httpRequest("get", _0x5822e5, printCaller());
      if (!_0x4616c6 || _0x4616c6.code != 0 && _0x4616c6.code !== "0") {
        {
          $.log(_0x21615d + ": [抽奖] 获取转盘信息失败: " + (_0x4616c6 ? _0x4616c6.msg : "网络异常"));
          continue;
        }
      }
      const _0x3b809e = _0x4616c6.data || {};
      const _0x39f901 = _0x958c59 => {
        {
          if (_0x958c59 !== undefined && _0x958c59 !== null && _0x958c59 !== "") {
            {
              let _0x186802 = parseInt(_0x958c59, 10);
              return isNaN(_0x186802) ? -1 : _0x186802;
            }
          }
          return -1;
        }
      };
      let _0x49c268 = _0x39f901(_0x3b809e.day_remain);
      let _0x535bdd = _0x39f901(_0x3b809e.all_remain);
      let _0x188b2c = _0x39f901(_0x3b809e.show_remain);
      let _0x36dd3b = _0x39f901(_0x3b809e.remain_times || _0x3b809e.times || _0x3b809e.free_times || _0x3b809e.user_times);
      let _0x39fcf6 = 0;
      if (_0x49c268 >= 0 && _0x535bdd >= 0) {
        {
          _0x39fcf6 = Math.min(_0x49c268, _0x535bdd);
        }
      } else {
        if (_0x49c268 >= 0) {
          {
            _0x39fcf6 = _0x49c268;
          }
        } else {
          if (_0x535bdd >= 0) {
            {
              _0x39fcf6 = _0x535bdd;
            }
          } else {
            if (_0x188b2c >= 0) {
              {
                _0x39fcf6 = _0x188b2c;
              }
            } else {
              _0x36dd3b >= 0 && (_0x39fcf6 = _0x36dd3b);
            }
          }
        }
      }
      if (_0x39fcf6 === 0 && _0x188b2c > 0) {
        {
          _0x39fcf6 = _0x188b2c;
        }
      }
      $.log(_0x21615d + ": [抽奖] 当前剩余抽奖次数: " + _0x39fcf6 + " (日剩余: " + (_0x3b809e.day_remain === "" ? "无限制" : _0x3b809e.day_remain ?? 0) + ", 总剩余: " + (_0x3b809e.all_remain ?? 0) + ", 展示剩余: " + (_0x3b809e.show_remain ?? 0) + ")");
      if (_0x39fcf6 <= 0) {
        continue;
      }
      let _0x36431e = _0x3e786d.afsToken || _0x3e786d.afs_tokenid || "";
      let _0x484764 = 1;
      while (_0x39fcf6 > 0) {
        {
          $.log(_0x21615d + ": [抽奖] 正在执行第 " + _0x484764 + " 次抽奖...");
          if (!_0x36431e) {
            {
              $.log(_0x21615d + ": [抽奖] 正在过滑块获取抽奖安全凭据 (afs_tokenid)...");
              _0x36431e = await getAfsTokenWithSlider(_0x3e786d, _0x9bcdba, WITHDRAW_ACT_ID);
              if (!_0x36431e) {
                {
                  $.log(_0x21615d + ": [抽奖] 获取滑块凭据失败，放弃本次抽奖");
                  break;
                }
              }
            }
          }
          const _0x3cf3f2 = {
            id: _0x473833.id,
            verif_uuid: "",
            verif_code: "",
            afs_tokenid: _0x36431e,
            collect_info: "",
            longitude: 0,
            latitude: 0,
            device_token: _0x3e786d.authDt || _0x3e786d.deviceToken
          };
          const _0x3af38a = await getReqObject(API_BASE + "/aoslottery/ac_sub", _0x3cf3f2, _0x9bcdba, _0x3e786d);
          const _0x44d6a4 = await httpRequest("post", _0x3af38a, printCaller());
          if (_0x44d6a4) {
            {
              if (_0x44d6a4.code == 0 || _0x44d6a4.code === "0") {
                {
                  const _0x4b6be9 = _0x44d6a4.data && _0x44d6a4.data.title ? _0x44d6a4.data.title : "未知奖品";
                  $.log(_0x21615d + ": [抽奖] 🎉 恭喜中奖: " + _0x4b6be9);
                  _0x36431e = "";
                }
              } else {
                if (_0x44d6a4.code == 1007 && (_0x44d6a4.msg === "etl" || _0x44d6a4.msg === "谢谢参与")) {
                  $.log(_0x21615d + ": [抽奖] 谢谢参与~");
                  _0x36431e = "";
                } else {
                  if (_0x44d6a4.msg === "none times" || _0x44d6a4.msg === "o a times" || _0x44d6a4.msg && _0x44d6a4.msg.includes("times")) {
                    {
                      $.log(_0x21615d + ": [抽奖] 抽奖机会已用完");
                      break;
                    }
                  } else {
                    if (_0x44d6a4.code == 4001 || _0x44d6a4.msg && _0x44d6a4.msg.includes("验证码")) {
                      {
                        $.log(_0x21615d + ": [抽奖] 滑块凭据已过期或失效，重新获取...");
                        _0x36431e = "";
                        continue;
                      }
                    } else {
                      {
                        $.log(_0x21615d + ": [抽奖] 抽奖提示: " + (_0x44d6a4.msg || "网络异常"));
                        break;
                      }
                    }
                  }
                }
              }
            }
          } else {
            {
              $.log(_0x21615d + ": [抽奖] 请求失败");
              break;
            }
          }
          _0x484764++;
          _0x39fcf6--;
          await $.wait(2000);
        }
      }
    }
  }
}
const CAPTCHA_AES_KEY = "7Pf0cfZPHy1L7PS2PfCfP8r2BGi461LG";
const CAPTCHA_AES_IV = "8RsVKSCH8mQ4l7cu";
function captchaAesEncrypt(_0x4d5d4b) {
  const _0x2822b9 = require("crypto");
  const _0x35675f = _0x2822b9.createCipheriv("aes-256-cbc", Buffer.from(CAPTCHA_AES_KEY), Buffer.from(CAPTCHA_AES_IV));
  let _0x3039f1 = _0x35675f.update(_0x4d5d4b, "utf8", "base64");
  _0x3039f1 += _0x35675f.final("base64");
  return _0x3039f1;
}
function generateSlideTrack(_0x5b3db2) {
  const _0x2a0b5e = [];
  const _0x2449c0 = 14 + Math.floor(Math.random() * 4);
  for (let _0x585840 = 1; _0x585840 < _0x2449c0; _0x585840++) {
    {
      const _0x32ed77 = _0x585840 / _0x2449c0;
      const _0xe89ff = 1 - Math.pow(1 - _0x32ed77, 3);
      const _0x44493a = (Math.random() - 0.5) * 1;
      const _0x2aa025 = Math.max(1, Math.min(_0x5b3db2, Math.round((_0x5b3db2 * _0xe89ff + _0x44493a) * 10) / 10));
      const _0x530da0 = {
        x: _0x2aa025,
        y: 0,
        time: 100
      };
      _0x2a0b5e.push(_0x530da0);
    }
  }
  const _0x59a527 = {
    x: _0x5b3db2,
    y: 0,
    time: 100
  };
  _0x2a0b5e.push(_0x59a527);
  return _0x2a0b5e;
}
async function calcSliderGap(_0x434243, _0x524a35, _0x3babfb = 0) {
  const _0x198059 = "[账号" + (_0x3babfb + 1 < 10 ? "0" + (_0x3babfb + 1) : _0x3babfb + 1) + "]";
  const _0x102925 = _0x524a35 + "@" + _0x434243;
  await selectChannel(_0x3babfb, _0x102925);
  let _0x3c6a5f = requestSigns[_0x3babfb];
  if (!_0x3c6a5f) {
    {
      $.log(_0x198059 + ": [滑块验证] selectChannel 未返回缺口数据");
      return null;
    }
  }
  let _0x50cf97 = null;
  let _0x96753 = 680;
  try {
    {
      const _0x17a311 = typeof _0x3c6a5f === "string" ? JSON.parse(_0x3c6a5f) : _0x3c6a5f;
      if (typeof _0x17a311 === "number") {
        _0x50cf97 = _0x17a311;
      } else {
        if (_0x17a311 && typeof _0x17a311 === "object") {
          {
            _0x50cf97 = _0x17a311.ui_x ?? _0x17a311.x ?? _0x17a311.result ?? _0x17a311.target;
            if (_0x17a311.width) {
              _0x96753 = _0x17a311.width;
            }
          }
        }
      }
    }
  } catch (_0x347dd2) {
    {
      const _0x2020f2 = String(_0x3c6a5f).match(/([\d.]+)/);
      if (_0x2020f2) {
        _0x50cf97 = parseFloat(_0x2020f2[1]);
      }
    }
  }
  if (_0x50cf97 === null || isNaN(_0x50cf97)) {
    {
      $.log(_0x198059 + ": [滑块验证] 解析缺口数据失败: " + _0x3c6a5f);
      return null;
    }
  }
  let _0x556974 = _0x50cf97 > 330 ? Math.round(_0x50cf97 * (330 / _0x96753) * 10) / 10 : Math.round(_0x50cf97 * 10) / 10;
  $.log(_0x198059 + ": [滑块验证] selectChannel 获取缺口成功: " + _0x556974 + "px");
  return _0x556974;
}
async function getAfsTokenWithSlider(_0x4b9098, _0x31cfe7, _0x1921ad) {
  const _0x3cc484 = "[账号" + (_0x31cfe7 + 1 < 10 ? "0" + (_0x31cfe7 + 1) : _0x31cfe7 + 1) + "]";
  const _0x391695 = "https://linping.y-h5.iyunxh.com/module-withdrawal/home/cashout?id=" + _0x1921ad;
  for (let _0x5ca782 = 1; _0x5ca782 <= 3; _0x5ca782++) {
    {
      try {
        {
          $.log(_0x3cc484 + ": [滑块验证] 正在获取滑块图片 (第" + _0x5ca782 + "次尝试)...");
          const _0x43eeb1 = randomString(10);
          const _0x11650e = Math.floor(Date.now() / 1000);
          const _0x287341 = {
            once: _0x43eeb1,
            referer: _0x391695,
            timestamp: _0x11650e,
            type: "1"
          };
          const _0x1c65f2 = encodeURIComponent(captchaAesEncrypt(JSON.stringify(_0x287341)));
          const _0x49a0b7 = API_BASE + "/basemodule/_captcha_get?once=" + _0x43eeb1 + "&referer=" + encodeURIComponent(_0x391695) + "&timestamp=" + _0x11650e + "&type=1&signature=" + _0x1c65f2;
          const _0x140d88 = await getReqObject(_0x49a0b7, null, _0x31cfe7, _0x4b9098);
          const _0x365ed8 = await httpRequest("get", _0x140d88, printCaller());
          if (!_0x365ed8 || _0x365ed8.code !== "0" || !_0x365ed8.data) {
            {
              $.log(_0x3cc484 + ": [滑块验证] 获取滑块图片失败: " + (_0x365ed8 ? _0x365ed8.msg : "网络异常"));
              await $.wait(1000);
              continue;
            }
          }
          const {
            background: _0x3d3204,
            block: _0x40b971,
            token: _0x5633bf
          } = _0x365ed8.data;
          $.log(_0x3cc484 + ": [滑块验证] 获取滑块成功，正在计算拼图缺口位置...");
          const _0x3990be = await calcSliderGap(_0x3d3204, _0x40b971, _0x31cfe7);
          if (!_0x3990be || _0x3990be <= 0) {
            {
              $.log(_0x3cc484 + ": [滑块验证] 缺口识别失败，重试中...");
              await $.wait(1000);
              continue;
            }
          }
          $.log(_0x3cc484 + ": [滑块验证] 识别到滑动目标距离: " + _0x3990be + "px，生成拟人滑动轨迹并提交...");
          const _0x154e7d = generateSlideTrack(_0x3990be);
          const _0x4510ce = {
            x: _0x3990be,
            width: 330,
            track: _0x154e7d
          };
          const _0xcad688 = captchaAesEncrypt(JSON.stringify(_0x4510ce));
          const _0x55ab28 = {
            token: _0x5633bf,
            data: _0xcad688,
            referer: _0x391695,
            type: "1"
          };
          const _0x429f6b = await getReqObject(API_BASE + "/basemodule/_captcha_check", _0x55ab28, _0x31cfe7, _0x4b9098);
          const _0x5a6dac = await httpRequest("post", _0x429f6b, printCaller());
          if (!_0x5a6dac || _0x5a6dac.code !== "0" || !_0x5a6dac.data || !_0x5a6dac.data.result) {
            {
              $.log(_0x3cc484 + ": [滑块验证] 校验未通过，准备重试...");
              await $.wait(1500);
              continue;
            }
          }
          const _0x37adf8 = _0x5a6dac.data.token;
          $.log(_0x3cc484 + ": [滑块验证] 🎉 滑块校验成功！正在换取提现凭证 (afs_tokenid)...");
          const _0x1abba = {
            validate: _0x37adf8,
            verif_type: 3,
            afs_uuid: "",
            source: "yundian"
          };
          const _0x3fa1b2 = await getReqObject(API_BASE + "/aosbasemodule/intelverifcode_check", _0x1abba, _0x31cfe7, _0x4b9098);
          const _0x285bb3 = await httpRequest("post", _0x3fa1b2, printCaller());
          if (_0x285bb3 && _0x285bb3.code === "0" && _0x285bb3.data && _0x285bb3.data.tokenid) {
            {
              const _0x24d015 = _0x285bb3.data.tokenid;
              $.log(_0x3cc484 + ": [滑块验证] 🏆 成功获取提现凭证 afs_tokenid: " + _0x24d015);
              return _0x24d015;
            }
          } else {
            {
              $.log(_0x3cc484 + ": [滑块验证] 换取提现凭证失败: " + (_0x285bb3 ? _0x285bb3.msg : "未知错误"));
            }
          }
        }
      } catch (_0xd3b246) {
        {
          $.log(_0x3cc484 + ": [滑块验证] 流程异常: " + _0xd3b246.message);
        }
      }
      await $.wait(1500);
    }
  }
  return null;
}
async function handleWithdraw(_0x3afad, _0x2a73ed) {
  if (!autoWithdraw) {
    return;
  }
  const _0xf25751 = "[账号" + (_0x2a73ed + 1 < 10 ? "0" + (_0x2a73ed + 1) : _0x2a73ed + 1) + "]";
  $.log(_0xf25751 + ": --- 开始检测【金币提现】 ---");
  const _0x1b8a91 = await getUserInfo(_0x3afad, _0x2a73ed);
  const _0x4cf3a2 = _0x1b8a91 ? _0x1b8a91.gold : 0;
  $.log(_0xf25751 + ": [提现] 当前金币余额: " + _0x4cf3a2 + " (汇率: 30金币 = 1元)");
  if (_0x4cf3a2 < 30) {
    {
      $.log(_0xf25751 + ": [提现] 金币不足 30，暂不满足最低提现门槛(1元)");
      return;
    }
  }
  const _0x22ab59 = API_BASE + "/static_3/aosbasemodule/_withdrawal_package_show/" + WITHDRAW_ACT_ID + ".json";
  const _0x15d8e6 = await getReqObject(_0x22ab59, null, _0x2a73ed, _0x3afad);
  const _0x78e888 = await httpRequest("get", _0x15d8e6, printCaller());
  if (!_0x78e888 || _0x78e888.code !== "0") {
    {
      $.log(_0xf25751 + ": [提现] 获取提现套餐失败");
      return;
    }
  }
  const _0x383084 = _0x78e888.data || [];
  let _0x54b3f5 = null;
  _0x4cf3a2 >= 150 && (_0x54b3f5 = _0x383084.find(_0x482b51 => _0x482b51.price === "5.00" && _0x482b51.stock_num > 0));
  !_0x54b3f5 && _0x4cf3a2 >= 30 && (_0x54b3f5 = _0x383084.find(_0x4c8b2f => _0x4c8b2f.price === "1.00" && _0x4c8b2f.stock_num > 0));
  if (!_0x54b3f5) {
    {
      $.log(_0xf25751 + ": [提现] 未找到合适或库存充足的提现套餐");
      return;
    }
  }
  $.log(_0xf25751 + ": [提现] 匹配到提现套餐: " + _0x54b3f5.title + " (ID: " + _0x54b3f5.id + ", 剩余库存: " + _0x54b3f5.stock_num + ")");
  let _0x1b2a2f = _0x3afad.afsToken || _0x3afad.afs_tokenid || process.env.YLP_AFS_TOKEN || "";
  !_0x1b2a2f && (_0x1b2a2f = await getAfsTokenWithSlider(_0x3afad, _0x2a73ed, WITHDRAW_ACT_ID));
  if (!_0x1b2a2f) {
    {
      $.log(_0xf25751 + ": [提现] ⚠️ 未能获取到滑块验证凭证，跳过本次提现");
      return;
    }
  }
  $.log(_0xf25751 + ": [提现] 正在提交提现申请...");
  const _0x17d16c = {
    activity_id: WITHDRAW_ACT_ID,
    package_id: _0x54b3f5.id,
    client_type: "wx_official",
    price: "",
    afs_tokenid: _0x1b2a2f
  };
  const _0x546112 = await getReqObject(API_BASE + "/aosbasemodule/withdrawal_sub", _0x17d16c, _0x2a73ed, _0x3afad);
  const _0x56507f = await httpRequest("post", _0x546112, printCaller());
  if (_0x56507f) {
    {
      if (_0x56507f.code === "0") {
        {
          $.log(_0xf25751 + ": [提现] 🎉 提现成功！申请提现: " + _0x54b3f5.title + "，请注意微信零钱到账！");
        }
      } else {
        if (_0x56507f.msg === "VERIFCODE_FAILD" || _0x56507f.code === "1003") {
          {
            $.log(_0xf25751 + ": [提现] ⚠️ 凭证失效或需要重新验证 (VERIFCODE_FAILD)，重新尝试滑块破解...");
            const _0x4eff80 = await getAfsTokenWithSlider(_0x3afad, _0x2a73ed, WITHDRAW_ACT_ID);
            if (_0x4eff80) {
              {
                _0x17d16c.afs_tokenid = _0x4eff80;
                const _0x1295e3 = await getReqObject(API_BASE + "/aosbasemodule/withdrawal_sub", _0x17d16c, _0x2a73ed, _0x3afad);
                const _0x404911 = await httpRequest("post", _0x1295e3, printCaller());
                if (_0x404911 && _0x404911.code === "0") {
                  {
                    $.log(_0xf25751 + ": [提现] 🎉 重试提现成功！申请提现: " + _0x54b3f5.title + "，请注意微信零钱到账！");
                  }
                } else {
                  {
                    $.log(_0xf25751 + ": [提现] 重试提现失败: " + (_0x404911 ? _0x404911.msg : "未知错误"));
                  }
                }
              }
            }
          }
        } else {
          {
            $.log(_0xf25751 + ": [提现] 提现申请返回: [" + _0x56507f.code + "] " + _0x56507f.msg);
          }
        }
      }
    }
  } else {
    {
      $.log(_0xf25751 + ": [提现] 提现请求异常");
    }
  }
}
function getScriptAuth(_0x51d4f8, _0x2b1b1d, _0x20069) {
  return new Promise(_0x34da7f => {
    {
      const _0x2c9384 = apiHost + "/script/permissions/lastest";
      const _0x5d1efc = {
        appName: _0x51d4f8,
        userId: _0x2b1b1d,
        activityCode: _0x20069,
        version: version
      };
      const _0x3efd5a = {
        "Content-Type": "application/json",
        accept: "application/json"
      };
      const _0x10c7eb = {
        url: _0x2c9384,
        headers: _0x3efd5a,
        body: JSON.stringify(_0x5d1efc)
      };
      $.post(_0x10c7eb, async (_0x2c19fd, _0x502957, _0x2bee0f) => {
        {
          if (_0x2bee0f && _0x2bee0f != null && _0x2bee0f.replace(/\"/g, "").length > 50) {
            {
              const _0x2178e2 = _0x2bee0f.replace(/\"/g, "").slice(34);
              helpUtils = await loadUtils(flushCash);
              CryptoJS = helpUtils.createCryptoJS();
              let _0x102fb7 = JSON.parse(CryptoJS.enc.Base64.parse(_0x2178e2).toString(CryptoJS.enc.Utf8));
              try {
                {
                  newest_version = _0x102fb7.version;
                  userAuth = _0x102fb7.userAuth;
                  scriptAuth = _0x102fb7.scriptAuth;
                  runAuth = _0x102fb7.runAuth;
                  systemNotify = _0x102fb7.notify;
                  vipAuth = _0x102fb7.vipAuth;
                  isCharge = _0x102fb7.isCharge;
                  multiAccount = _0x102fb7.runAcounts;
                  buyCount = _0x102fb7.buyCount;
                  runedCounts = _0x102fb7.runedCounts;
                  runTotalCounts = _0x102fb7.runTotalCounts;
                  userRank = _0x102fb7.userRank;
                  invicode = _0x102fb7.invicate;
                  numbers = _0x102fb7.accountNumbers;
                  vipDate = _0x102fb7.vipDate;
                }
              } catch (_0x2337e8) {
                {
                  $.log(_0x2337e8);
                }
              }
            }
          } else {
            $.log("请求服务器接口出现错误，请检查网络连接情况");
          }
          _0x34da7f();
        }
      });
    }
  });
}
function runComplete(_0x45b79b, _0x14234d) {
  return new Promise(_0x137dc4 => {
    {
      const _0x2bd1f9 = apiHost + "/script/run/add";
      const _0x2bcdd7 = {
        appName: _0x45b79b,
        userId: _0x14234d,
        activityCode: activeCode,
        version: version
      };
      const _0x216bfd = {
        "Content-Type": "application/json",
        accept: "application/json"
      };
      const _0x4dcd17 = {
        url: _0x2bd1f9,
        headers: _0x216bfd,
        body: JSON.stringify(_0x2bcdd7)
      };
      $.post(_0x4dcd17, async (_0x49be33, _0x1c1ac2, _0x308fd9) => {
        _0x137dc4();
      });
    }
  });
}
async function loadUtils(_0x3171d9) {
  let _0x32343b = $.getdata("Utils_Code") || "";
  if (!_0x3171d9 && _0x32343b && Object.keys(_0x32343b).length) {
    $.log("📢 缓存中存在JS-Utils");
    eval(_0x32343b);
    return creatUtils();
  }
  $.log("📢 开始初始化JS-Utils");
  return new Promise(async _0x1b5f04 => {
    $.getScript("http://script.david2026.top/scripts/tools/JS-Utils.js").then(_0x1142a7 => {
      $.setdata(_0x1142a7, "Utils_Code");
      eval(_0x1142a7);
      $.log("📢 JS-Utils加载成功");
      _0x1b5f04(creatUtils());
    });
  });
}
function checkAddress(_0x4b5e17, _0x23c9f5) {
  return new Promise(_0x3eae90 => {
    {
      const _0x11f134 = setTimeout(() => {
        {
          _0x3eae90(false);
        }
      }, _0x23c9f5);
      const _0x1b7ccc = http.get(_0x4b5e17, _0xefc9e5 => {
        clearTimeout(_0x11f134);
        _0xefc9e5.statusCode === 404 ? _0x3eae90(true) : _0x3eae90(false);
      });
      _0x1b7ccc.on("error", () => {
        clearTimeout(_0x11f134);
        _0x3eae90(false);
      });
      _0x1b7ccc.on("timeout", () => {
        _0x1b7ccc.abort();
        _0x3eae90(false);
      });
    }
  });
}
async function fetchRequest(_0x1d5eea, _0x506e90 = 3000) {
  return new Promise(_0x47c923 => {
    {
      const _0x5b98e2 = {
        url: _0x1d5eea + "/docs"
      };
      setTimeout(() => {
        _0x47c923(false);
      }, _0x506e90);
      $.get(_0x5b98e2, async (_0x419a7f, _0x405ba3) => {
        {
          if (_0x405ba3 && _0x405ba3.status == 401) {
            {
              _0x47c923(true);
            }
          } else {
            {
              _0x47c923(false);
            }
          }
        }
      });
    }
  });
}
async function httpClientRequest(_0x2817d6, _0x1b7628 = 3000) {
  return new Promise(_0x1ca18e => {
    {
      const _0x2db763 = {
        url: _0x2817d6 + "/"
      };
      setTimeout(() => {
        _0x1ca18e(false);
      }, _0x1b7628);
      $httpClient.get(_0x2db763, async (_0x29a801, _0xd9980d, _0x1d744f) => {
        {
          if (_0x1d744f == "{\"detail\":\"Not Found\"}") {
            {
              _0x1ca18e(true);
            }
          } else {
            {
              _0x1ca18e(false);
            }
          }
        }
      });
    }
  });
}
async function init_ws(_0x45456c) {
  if ($.isNode()) {
    {
      if (reconectCounts[_0x45456c] > 0) {
        {
          $.log("[账号" + (_0x45456c + 1 < 10 ? "0" + (_0x45456c + 1) : _0x45456c + 1) + "]: 尝试重新连接服务器>>>>>>");
        }
      }
      wss[_0x45456c] = new WebSocket(apiHost.replace("http", "ws") + "/ws");
      wss[_0x45456c].on("open", function _0x4611dd() {
        $.log("[账号" + (_0x45456c + 1 < 10 ? "0" + (_0x45456c + 1) : _0x45456c + 1) + "]: 签名通道已连接");
      });
      wss[_0x45456c].on("close", function _0x21572b() {
        {
          $.log("[账号" + (_0x45456c + 1 < 10 ? "0" + (_0x45456c + 1) : _0x45456c + 1) + "]: 签名通道已关闭，原因是任务已处理完成");
        }
      });
      wss[_0x45456c].on("error", function _0x4f0d87() {
        {
          $.log("[账号" + (_0x45456c + 1 < 10 ? "0" + (_0x45456c + 1) : _0x45456c + 1) + "]: 签名通道已关闭，原因是出现错误");
          channels_status[_0x45456c] = 1;
          reconectCounts[_0x45456c] = (reconectCounts[_0x45456c] || 0) + 1;
          if (reconectCounts[_0x45456c] <= 3) {
            {
              init_ws(_0x45456c);
            }
          }
        }
      });
    }
  }
}
async function getCk() {
  if ($request.url.match(/\/aosbase\/user_info_i/) || $request.url.match(/\/aosbase\/_auth_appuserinit/)) {
    {
      const _0x51aba8 = $request.headers;
      const _0x1a426d = _0x51aba8["Access-Token"] || _0x51aba8["access-token"];
      const _0x39ee03 = _0x51aba8["Access-User-Id"] || _0x51aba8["access-user-id"];
      const _0x58bc5d = _0x51aba8["Access-Api-Dt"] || _0x51aba8["access-api-dt"];
      let _0x1b6166 = ylpuserck - 1;
      if (_0x1a426d) {
        {
          if (ylpapp[_0x1b6166]) {
            {
              ylpapp[_0x1b6166].accessToken = _0x1a426d;
              if (_0x39ee03) {
                ylpapp[_0x1b6166].userId = _0x39ee03;
              }
              if (_0x58bc5d) {
                ylpapp[_0x1b6166].authDt = _0x58bc5d;
              }
            }
          } else {
            {
              const _0x107fa3 = {
                accessToken: _0x1a426d,
                userId: _0x39ee03,
                authDt: _0x58bc5d
              };
              ylpapp[_0x1b6166] = _0x107fa3;
            }
          }
          $.setdata(JSON.stringify(ylpapp, null, 2), "ylpapp");
          $.msg($.name, "悦临平账号" + (_0x1b6166 + 1) + " Token获取成功！🎉");
        }
      }
    }
  }
}
function setupLogger() {
  $.originalLog = $.log.bind($);
  $.log = (..._0x327d40) => {
    {
      let _0x52198f = _0x327d40.join("\n");
      let _0x476886 = _0x52198f.match(/^(\s*)\[账号\s*(\d+)\s*\]:\s*(.*)/s);
      if (!_0x476886) {
        return $.originalLog(_0x52198f);
      }
      let [, _0x380f1e, _0x12854, _0x492926] = _0x476886;
      let _0x50c9ff = _0x12854.padStart(2, "0");
      $.originalLog(_0x380f1e + "[账号" + _0x50c9ff + "]: " + _0x492926);
      if (typeof ylplogs !== "undefined") {
        {
          let _0x5e40ac = parseInt(_0x12854) - 1;
          ylplogs[_0x5e40ac] = (ylplogs[_0x5e40ac] || "") + ("[账号" + _0x50c9ff + "]: " + _0x492926 + "\n");
        }
      }
    }
  };
}
function printCaller() {
  try {
    return new Error().stack.split("\n")[2].split("@")[0].trim();
  } catch (_0x511ab8) {
    {
      return "Caller";
    }
  }
}
function safeGet(_0x460a70) {
  try {
    {
      if (_0x460a70 && typeof JSON.parse(_0x460a70) === "object") {
        {
          return true;
        }
      }
    }
  } catch (_0xc3eefd) {
    {
      return false;
    }
  }
  return false;
}
async function sendMsg(_0x26fdd3) {
  if (!_0x26fdd3) {
    return;
  }
  if (tz == 1) {
    {
      $.isNode() && notify ? await notify.sendNotify($.name, _0x26fdd3) : $.msg($.name, "", _0x26fdd3);
    }
  } else {
    $.log(_0x26fdd3);
  }
}
function redisSet(_0x5b7124, _0xf2a600, _0x574305) {
  return new Promise(_0x4bc968 => {
    {
      const _0x1794bd = apiHost + "/redis/hash/set";
      const _0x4d2b01 = {
        key: _0x5b7124,
        hashKey: _0xf2a600,
        hashValue: _0x574305
      };
      const _0x3f6db5 = {
        "Content-Type": "application/json",
        accept: "application/json"
      };
      const _0x2859ed = {
        url: _0x1794bd,
        headers: _0x3f6db5,
        body: JSON.stringify(_0x4d2b01)
      };
      $.post(_0x2859ed, async (_0x5c5fe4, _0x210517, _0x34955e) => {
        {
          if (_0x5c5fe4) {
            {
              try {
                {
                  const _0x363b09 = require("axios");
                  const _0x1d58a6 = {
                    timeout: 3000
                  };
                  await _0x363b09.post(_0x1794bd, _0x4d2b01, _0x1d58a6);
                }
              } catch (_0x2cde70) {}
            }
          }
          const _0x21cd84 = _0x34955e ? _0x34955e.replace(/\"/g, "") : "";
          _0x4bc968(_0x21cd84);
        }
      });
    }
  });
}
function redisGet(_0x3c5f7d, _0x512eb3) {
  return new Promise(_0x3a685e => {
    {
      const _0x224ca3 = apiHost + "/redis/hash/get/" + _0x3c5f7d + "/" + _0x512eb3;
      const _0x52ca94 = {
        accept: "application/json"
      };
      const _0xf93ea3 = {
        url: _0x224ca3,
        headers: _0x52ca94
      };
      $.get(_0xf93ea3, async (_0x427cd3, _0x3c6782, _0x280d06) => {
        {
          if (_0x427cd3 || !_0x280d06) {
            {
              try {
                {
                  const _0x1d73bb = require("axios");
                  const _0x3f1ce3 = {
                    timeout: 3000
                  };
                  const _0x2c100e = await _0x1d73bb.get(_0x224ca3, _0x3f1ce3);
                  const _0x127ec3 = (_0x2c100e.data ? _0x2c100e.data.toString().replace(/\"/g, "") : "").trim();
                  _0x3a685e(_0x127ec3);
                }
              } catch (_0xc69877) {
                {
                  _0x3a685e("");
                }
              }
            }
          } else {
            {
              try {
                {
                  let _0x40dd42 = typeof _0x280d06 === "string" ? _0x280d06.replace(/\"/g, "").trim() : (_0x280d06 || "").toString().trim();
                  _0x3a685e(_0x40dd42);
                }
              } catch (_0x39bff8) {
                _0x3a685e("");
              }
            }
          }
        }
      });
    }
  });
}
async function selectChannel(_0x201498, _0x41598f) {
  if (channels_status[_0x201498] == 0) {
    {
      await getSign_(_0x201498, _0x41598f);
    }
  } else {
    await getSign(_0x201498, _0x41598f);
  }
}
function getSign_(_0x28d86a, _0x745087) {
  return new Promise((_0x24471a, _0x34bac5) => {
    {
      function _0x31f5e4(_0x3cfc02) {
        {
          let _0x1e9b9e = _0x3cfc02.toString("utf8");
          requestSigns[_0x28d86a] = _0x1e9b9e;
          wss[_0x28d86a].removeListener("message", _0x31f5e4);
          _0x24471a(_0x1e9b9e);
        }
      }
      wss[_0x28d86a].on("message", _0x31f5e4);
      if (wss[_0x28d86a].readyState === 1) {
        {
          const _0x3beef6 = {
            method: appName,
            params: {}
          };
          _0x3beef6.params.content = _0x745087;
          _0x3beef6.params.appName = appName;
          _0x3beef6.params.uuid = userId;
          _0x3beef6.params.activationCode = activeCode;
          wss[_0x28d86a].send(JSON.stringify(_0x3beef6), _0x4d7013 => {
            {
              if (_0x4d7013) {
                {
                  _0x34bac5(_0x4d7013);
                }
              }
            }
          });
        }
      } else {
        {
          _0x24471a(getSign(_0x28d86a, _0x745087));
          wss[_0x28d86a].removeListener("message", _0x31f5e4);
        }
      }
    }
  });
}
function getSign(_0x36da87, _0x121192) {
  return new Promise((_0xff01df, _0x349dca) => {
    {
      const _0x33ed70 = apiHost + "/sign/ylp";
      const _0x11db28 = {
        content: _0x121192,
        appName: appName,
        uuid: userId,
        activationCode: activeCode
      };
      const _0x2d80f6 = {
        "Content-Type": "application/json",
        accept: "application/json"
      };
      const _0xcc8220 = {
        url: _0x33ed70,
        headers: _0x2d80f6,
        body: JSON.stringify(_0x11db28)
      };
      $.post(_0xcc8220, async (_0x508e1d, _0x418ab3, _0x39e968) => {
        {
          const _0x1f0003 = _0x39e968.replace(/\"/g, "");
          requestSigns[_0x36da87] = _0x1f0003;
          _0xff01df();
        }
      });
    }
  });
}
function Env(_0x3edf22, _0x638dc0) {
  class _0x3aea0c {
    constructor(_0x549454) {
      {
        this.env = _0x549454;
      }
    }
    send(_0x222529, _0x48be36 = "GET") {
      _0x222529 = "string" == typeof _0x222529 ? {
        url: _0x222529
      } : _0x222529;
      let _0x6ae83b = this.get;
      "POST" === _0x48be36 && (_0x6ae83b = this.post);
      return new Promise((_0x7c1968, _0x21b54a) => {
        _0x6ae83b.call(this, _0x222529, (_0x4d63b7, _0x1587c6, _0x12ab91) => {
          _0x4d63b7 ? _0x21b54a(_0x4d63b7) : _0x7c1968(_0x1587c6);
        });
      });
    }
    get(_0x474ad5) {
      return this.send.call(this.env, _0x474ad5);
    }
    post(_0x2f3aab) {
      return this.send.call(this.env, _0x2f3aab, "POST");
    }
  }
  return new class {
    constructor(_0x2af893, _0x5c4554) {
      const _0x50d6f3 = {
        debug: 0,
        info: 1,
        warn: 2,
        error: 3
      };
      const _0x31f23c = {
        debug: "[DEBUG] ",
        info: "[INFO] ",
        warn: "[WARN] ",
        error: "[ERROR] "
      };
      this.logLevels = _0x50d6f3;
      this.logLevelPrefixs = _0x31f23c;
      this.logLevel = "info";
      this.name = _0x2af893;
      this.http = new _0x3aea0c(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = false;
      this.isNeedRewrite = false;
      this.logSeparator = "\n";
      this.encoding = "utf-8";
      this.startTime = new Date().getTime();
      Object.assign(this, _0x5c4554);
      this.log("", "🔔 " + this.name + ", 开始!");
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
    toObj(_0x275b01, _0x348f74 = null) {
      try {
        return JSON.parse(_0x275b01);
      } catch {
        return _0x348f74;
      }
    }
    toStr(_0x445019, _0x2aa73c = null, ..._0x8674db) {
      try {
        return JSON.stringify(_0x445019, ..._0x8674db);
      } catch {
        return _0x2aa73c;
      }
    }
    getjson(_0x208459, _0x1759bd) {
      let _0x2a7401 = _0x1759bd;
      if (this.getdata(_0x208459)) {
        try {
          _0x2a7401 = JSON.parse(this.getdata(_0x208459));
        } catch {}
      }
      return _0x2a7401;
    }
    setjson(_0x514809, _0x3369f3) {
      try {
        return this.setdata(JSON.stringify(_0x514809), _0x3369f3);
      } catch {
        return false;
      }
    }
    getScript(_0x22e0f8) {
      return new Promise(_0x3b12b3 => {
        const _0x554476 = {
          url: _0x22e0f8
        };
        this.get(_0x554476, (_0x33a529, _0x1bbe97, _0x5b5d58) => _0x3b12b3(_0x5b5d58));
      });
    }
    runScript(_0x3c0646, _0x262f10) {
      return new Promise(_0x205766 => {
        let _0x3beaea = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        _0x3beaea = _0x3beaea ? _0x3beaea.replace(/\n/g, "").trim() : _0x3beaea;
        let _0x37b616 = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        _0x37b616 = _0x37b616 ? 1 * _0x37b616 : 20;
        _0x37b616 = _0x262f10 && _0x262f10.timeout ? _0x262f10.timeout : _0x37b616;
        const _0x580148 = {
          script_text: _0x3c0646,
          mock_type: "cron",
          timeout: _0x37b616
        };
        const [_0x274a0d, _0x582199] = _0x3beaea.split("@");
        const _0x1d677b = {
          url: "http://" + _0x582199 + "/v1/scripting/evaluate",
          body: _0x580148,
          headers: {
            "X-Key": _0x274a0d,
            Accept: "*/*"
          },
          timeout: _0x37b616
        };
        this.post(_0x1d677b, (_0x3636e6, _0xb2811f, _0x450d8f) => _0x205766(_0x450d8f));
      }).catch(_0x1829f7 => this.logErr(_0x1829f7));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x1e8a88 = this.path.resolve(this.dataFile);
        const _0x21779f = this.path.resolve(process.cwd(), this.dataFile);
        const _0x428423 = this.fs.existsSync(_0x1e8a88);
        const _0x236ffa = !_0x428423 && this.fs.existsSync(_0x21779f);
        if (!_0x428423 && !_0x236ffa) {
          return {};
        }
        {
          const _0x355972 = _0x428423 ? _0x1e8a88 : _0x21779f;
          try {
            return JSON.parse(this.fs.readFileSync(_0x355972));
          } catch (_0x2e87ab) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x58a25b = this.path.resolve(this.dataFile);
        const _0x1b5b93 = this.path.resolve(process.cwd(), this.dataFile);
        const _0x186c46 = this.fs.existsSync(_0x58a25b);
        const _0x157b06 = !_0x186c46 && this.fs.existsSync(_0x1b5b93);
        const _0x16a2cd = JSON.stringify(this.data);
        _0x186c46 ? this.fs.writeFileSync(_0x58a25b, _0x16a2cd) : _0x157b06 ? this.fs.writeFileSync(_0x1b5b93, _0x16a2cd) : this.fs.writeFileSync(_0x58a25b, _0x16a2cd);
      }
    }
    lodash_get(_0x36910d, _0x2d99ce, _0x1508cc) {
      const _0x5c29e5 = _0x2d99ce.replace(/\[(\d+)\]/g, ".$1").split(".");
      let _0x3410db = _0x36910d;
      for (const _0x3f243d of _0x5c29e5) if (_0x3410db = Object(_0x3410db)[_0x3f243d], undefined === _0x3410db) {
        return _0x1508cc;
      }
      return _0x3410db;
    }
    lodash_set(_0xb6ae6d, _0x568c0e, _0x4b1905) {
      Object(_0xb6ae6d) !== _0xb6ae6d || (Array.isArray(_0x568c0e) || (_0x568c0e = _0x568c0e.toString().match(/[^.[\]]+/g) || []), _0x568c0e.slice(0, -1).reduce((_0x1550d5, _0x34a6a7, _0x4a292c) => Object(_0x1550d5[_0x34a6a7]) === _0x1550d5[_0x34a6a7] ? _0x1550d5[_0x34a6a7] : _0x1550d5[_0x34a6a7] = Math.abs(_0x568c0e[_0x4a292c + 1]) >> 0 == +_0x568c0e[_0x4a292c + 1] ? [] : {}, _0xb6ae6d)[_0x568c0e[_0x568c0e.length - 1]] = _0x4b1905);
      return _0xb6ae6d;
    }
    getdata(_0x7bd001) {
      let _0x2dda32 = this.getval(_0x7bd001);
      if (/^@/.test(_0x7bd001)) {
        const [, _0x625e58, _0x40fcf5] = /^@(.*?)\.(.*?)$/.exec(_0x7bd001);
        const _0x4fa768 = _0x625e58 ? this.getval(_0x625e58) : "";
        if (_0x4fa768) {
          try {
            const _0xbad94a = JSON.parse(_0x4fa768);
            _0x2dda32 = _0xbad94a ? this.lodash_get(_0xbad94a, _0x40fcf5, "") : _0x2dda32;
          } catch (_0x1b43ef) {
            _0x2dda32 = "";
          }
        }
      }
      return _0x2dda32;
    }
    setdata(_0x2ff7ce, _0x2270ab) {
      let _0x53fc27 = false;
      if (/^@/.test(_0x2270ab)) {
        const [, _0xc3eb2a, _0x561f57] = /^@(.*?)\.(.*?)$/.exec(_0x2270ab);
        const _0x26edd6 = this.getval(_0xc3eb2a);
        const _0x144a6a = _0xc3eb2a ? "null" === _0x26edd6 ? null : _0x26edd6 || "{}" : "{}";
        try {
          const _0x256957 = JSON.parse(_0x144a6a);
          this.lodash_set(_0x256957, _0x561f57, _0x2ff7ce);
          _0x53fc27 = this.setval(JSON.stringify(_0x256957), _0xc3eb2a);
        } catch (_0x3f3a9c) {
          const _0x552557 = {};
          this.lodash_set(_0x552557, _0x561f57, _0x2ff7ce);
          _0x53fc27 = this.setval(JSON.stringify(_0x552557), _0xc3eb2a);
        }
      } else {
        _0x53fc27 = this.setval(_0x2ff7ce, _0x2270ab);
      }
      return _0x53fc27;
    }
    getval(_0x500890) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.read(_0x500890);
        case "Quantumult X":
          return $prefs.valueForKey(_0x500890);
        case "Node.js":
          this.data = this.loaddata();
          return this.data[_0x500890];
        default:
          return this.data && this.data[_0x500890] || null;
      }
    }
    setval(_0x40e7c5, _0xd35ace) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.write(_0x40e7c5, _0xd35ace);
        case "Quantumult X":
          return $prefs.setValueForKey(_0x40e7c5, _0xd35ace);
        case "Node.js":
          this.data = this.loaddata();
          this.data[_0xd35ace] = _0x40e7c5;
          this.writedata();
          return true;
        default:
          return this.data && this.data[_0xd35ace] || null;
      }
    }
    initGotEnv(_0x27c7e7) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      _0x27c7e7 && (_0x27c7e7.headers = _0x27c7e7.headers ? _0x27c7e7.headers : {}, _0x27c7e7 && (_0x27c7e7.headers = _0x27c7e7.headers ? _0x27c7e7.headers : {}, undefined === _0x27c7e7.headers.cookie && undefined === _0x27c7e7.headers.Cookie && undefined === _0x27c7e7.cookieJar && (_0x27c7e7.cookieJar = this.ckjar)));
      this.proxyAgent && _0x27c7e7 && !_0x27c7e7.agent && typeof isTaskUrl === "function" && isTaskUrl(_0x27c7e7.url) && (_0x27c7e7.agent = this.proxyAgent.agent || this.proxyAgent);
    }
    get(_0x5942c4, _0x2a214a = () => {}) {
      switch (_0x5942c4.headers && (delete _0x5942c4.headers["Content-Type"], delete _0x5942c4.headers["Content-Length"], delete _0x5942c4.headers["content-type"], delete _0x5942c4.headers["content-length"]), _0x5942c4.params && (_0x5942c4.url += "?" + this.queryStr(_0x5942c4.params)), undefined === _0x5942c4.followRedirect || _0x5942c4.followRedirect || ((this.isSurge() || this.isLoon()) && (_0x5942c4["auto-redirect"] = false), this.isQuanX() && (_0x5942c4.opts ? _0x5942c4.opts.redirection = false : _0x5942c4.opts = {
        redirection: false
      })), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          const _0x1b00e3 = {
            "X-Surge-Skip-Scripting": false
          };
          this.isSurge() && this.isNeedRewrite && (_0x5942c4.headers = _0x5942c4.headers || {}, Object.assign(_0x5942c4.headers, _0x1b00e3));
          $httpClient.get(_0x5942c4, (_0x156cdf, _0x93a374, _0x59ace8) => {
            !_0x156cdf && _0x93a374 && (_0x93a374.body = _0x59ace8, _0x93a374.statusCode = _0x93a374.status ? _0x93a374.status : _0x93a374.statusCode, _0x93a374.status = _0x93a374.statusCode);
            _0x2a214a(_0x156cdf, _0x93a374, _0x59ace8);
          });
          break;
        case "Quantumult X":
          const _0x4d1e96 = {
            hints: false
          };
          this.isNeedRewrite && (_0x5942c4.opts = _0x5942c4.opts || {}, Object.assign(_0x5942c4.opts, _0x4d1e96));
          $task.fetch(_0x5942c4).then(_0xbb0d8f => {
            const {
              statusCode: _0xe5b26b,
              statusCode: _0x42584f,
              headers: _0x4d92ef,
              body: _0x3e6b19,
              bodyBytes: _0x525deb
            } = _0xbb0d8f;
            const _0xeca7c8 = {
              status: _0xe5b26b,
              statusCode: _0x42584f,
              headers: _0x4d92ef,
              body: _0x3e6b19,
              bodyBytes: _0x525deb
            };
            _0x2a214a(null, _0xeca7c8, _0x3e6b19, _0x525deb);
          }, _0x1daee6 => _0x2a214a(_0x1daee6 && _0x1daee6.error || "UndefinedError"));
          break;
        case "Node.js":
          let _0x339b2c = require("iconv-lite");
          this.initGotEnv(_0x5942c4);
          this.got(_0x5942c4).on("redirect", (_0x3d81b5, _0x2eeed6) => {
            try {
              if (_0x3d81b5.headers["set-cookie"]) {
                const _0x4e4d26 = _0x3d81b5.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                _0x4e4d26 && this.ckjar.setCookieSync(_0x4e4d26, null);
                _0x2eeed6.cookieJar = this.ckjar;
              }
            } catch (_0x30ecf4) {
              this.logErr(_0x30ecf4);
            }
          }).then(_0x504a5a => {
            const {
              statusCode: _0x143d43,
              statusCode: _0x14c6fe,
              headers: _0xeacfac,
              rawBody: _0xb0bbee
            } = _0x504a5a;
            const _0x2d2f81 = _0x339b2c.decode(_0xb0bbee, this.encoding);
            const _0x558219 = {
              status: _0x143d43,
              statusCode: _0x14c6fe,
              headers: _0xeacfac,
              rawBody: _0xb0bbee,
              body: _0x2d2f81
            };
            _0x2a214a(null, _0x558219, _0x2d2f81);
          }, _0x16092e => {
            const {
              message: _0x122437,
              response: _0x4f5861
            } = _0x16092e;
            _0x2a214a(_0x122437, _0x4f5861, _0x4f5861 && _0x339b2c.decode(_0x4f5861.rawBody, this.encoding));
          });
          break;
      }
    }
    post(_0x4951ca, _0x4b78cf = () => {}) {
      const _0x282676 = _0x4951ca.method ? _0x4951ca.method.toLocaleLowerCase() : "post";
      switch (_0x4951ca.body && _0x4951ca.headers && !_0x4951ca.headers["Content-Type"] && !_0x4951ca.headers["content-type"] && (_0x4951ca.headers["content-type"] = "application/x-www-form-urlencoded"), _0x4951ca.headers && (delete _0x4951ca.headers["Content-Length"], delete _0x4951ca.headers["content-length"]), undefined === _0x4951ca.followRedirect || _0x4951ca.followRedirect || ((this.isSurge() || this.isLoon()) && (_0x4951ca["auto-redirect"] = false), this.isQuanX() && (_0x4951ca.opts ? _0x4951ca.opts.redirection = false : _0x4951ca.opts = {
        redirection: false
      })), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          const _0x54644d = {
            "X-Surge-Skip-Scripting": false
          };
          this.isSurge() && this.isNeedRewrite && (_0x4951ca.headers = _0x4951ca.headers || {}, Object.assign(_0x4951ca.headers, _0x54644d));
          $httpClient[_0x282676](_0x4951ca, (_0xf45f28, _0x485cb8, _0xb3d695) => {
            !_0xf45f28 && _0x485cb8 && (_0x485cb8.body = _0xb3d695, _0x485cb8.statusCode = _0x485cb8.status ? _0x485cb8.status : _0x485cb8.statusCode, _0x485cb8.status = _0x485cb8.statusCode);
            _0x4b78cf(_0xf45f28, _0x485cb8, _0xb3d695);
          });
          break;
        case "Quantumult X":
          const _0x143f8e = {
            hints: false
          };
          _0x4951ca.method = _0x282676;
          this.isNeedRewrite && (_0x4951ca.opts = _0x4951ca.opts || {}, Object.assign(_0x4951ca.opts, _0x143f8e));
          $task.fetch(_0x4951ca).then(_0x4e5585 => {
            const {
              statusCode: _0x81eabc,
              statusCode: _0x42428b,
              headers: _0x53a506,
              body: _0x565cd3,
              bodyBytes: _0x2cfc12
            } = _0x4e5585;
            const _0x5c8c26 = {
              status: _0x81eabc,
              statusCode: _0x42428b,
              headers: _0x53a506,
              body: _0x565cd3,
              bodyBytes: _0x2cfc12
            };
            _0x4b78cf(null, _0x5c8c26, _0x565cd3, _0x2cfc12);
          }, _0x2eb2f6 => _0x4b78cf(_0x2eb2f6 && _0x2eb2f6.error || "UndefinedError"));
          break;
        case "Node.js":
          let _0x5af46f = require("iconv-lite");
          this.initGotEnv(_0x4951ca);
          const {
            url: _0x515fbd,
            ..._0x322753
          } = _0x4951ca;
          this.got[_0x282676](_0x515fbd, _0x322753).then(_0x46867e => {
            const {
              statusCode: _0x196d76,
              statusCode: _0x3cce8e,
              headers: _0x505339,
              rawBody: _0x1cb7d9
            } = _0x46867e;
            const _0x25b1f4 = _0x5af46f.decode(_0x1cb7d9, this.encoding);
            const _0x1e9f6a = {
              status: _0x196d76,
              statusCode: _0x3cce8e,
              headers: _0x505339,
              rawBody: _0x1cb7d9,
              body: _0x25b1f4
            };
            _0x4b78cf(null, _0x1e9f6a, _0x25b1f4);
          }, _0x4e31b8 => {
            const {
              message: _0x5ae6dc,
              response: _0x53c88c
            } = _0x4e31b8;
            _0x4b78cf(_0x5ae6dc, _0x53c88c, _0x53c88c && _0x5af46f.decode(_0x53c88c.rawBody, this.encoding));
          });
          break;
      }
    }
    time(_0x49049f, _0x2dfcf6 = null) {
      const _0x437a93 = _0x2dfcf6 ? new Date(_0x2dfcf6) : new Date();
      let _0x1ac719 = {
        "M+": _0x437a93.getMonth() + 1,
        "d+": _0x437a93.getDate(),
        "H+": _0x437a93.getHours(),
        "m+": _0x437a93.getMinutes(),
        "s+": _0x437a93.getSeconds(),
        "q+": Math.floor((_0x437a93.getMonth() + 3) / 3),
        S: _0x437a93.getMilliseconds()
      };
      /(y+)/.test(_0x49049f) && (_0x49049f = _0x49049f.replace(RegExp.$1, (_0x437a93.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x4c703d in _0x1ac719) new RegExp("(" + _0x4c703d + ")").test(_0x49049f) && (_0x49049f = _0x49049f.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x1ac719[_0x4c703d] : ("00" + _0x1ac719[_0x4c703d]).substr(("" + _0x1ac719[_0x4c703d]).length)));
      return _0x49049f;
    }
    queryStr(_0x5f45a5) {
      let _0x4e0fec = "";
      for (const _0x4f27cd in _0x5f45a5) {
        let _0x180df1 = _0x5f45a5[_0x4f27cd];
        null != _0x180df1 && "" !== _0x180df1 && ("object" == typeof _0x180df1 && (_0x180df1 = JSON.stringify(_0x180df1)), _0x4e0fec += _0x4f27cd + "=" + _0x180df1 + "&");
      }
      _0x4e0fec = _0x4e0fec.substring(0, _0x4e0fec.length - 1);
      return _0x4e0fec;
    }
    msg(_0x460eb9 = _0x3edf22, _0x18ed91 = "", _0x80cd61 = "", _0x336c68 = {}) {
      const _0x30b26f = _0x5c6cbc => {
        const {
          $open: _0x4105c1,
          $copy: _0x335397,
          $media: _0x6a8984,
          $mediaMime: _0x3f095b
        } = _0x5c6cbc;
        switch (typeof _0x5c6cbc) {
          case undefined:
            return _0x5c6cbc;
          case "string":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              default:
                const _0xb5e084 = {
                  url: _0x5c6cbc
                };
                return _0xb5e084;
              case "Loon":
              case "Shadowrocket":
                return _0x5c6cbc;
              case "Quantumult X":
                const _0x299e1c = {
                  "open-url": _0x5c6cbc
                };
                return _0x299e1c;
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
                  const _0x1af0f3 = {};
                  let _0x5def3e = _0x5c6cbc.openUrl || _0x5c6cbc.url || _0x5c6cbc["open-url"] || _0x4105c1;
                  _0x5def3e && Object.assign(_0x1af0f3, {
                    action: "open-url",
                    url: _0x5def3e
                  });
                  let _0x113853 = _0x5c6cbc["update-pasteboard"] || _0x5c6cbc.updatePasteboard || _0x335397;
                  if (_0x113853 && Object.assign(_0x1af0f3, {
                    action: "clipboard",
                    text: _0x113853
                  }), _0x6a8984) {
                    let _0x20781a;
                    let _0x1f596f;
                    let _0x486ead;
                    if (_0x6a8984.startsWith("http")) {
                      _0x20781a = _0x6a8984;
                    } else {
                      if (_0x6a8984.startsWith("data:")) {
                        const [_0x5318d6] = _0x6a8984.split(";");
                        const [, _0x215a41] = _0x6a8984.split(",");
                        _0x1f596f = _0x215a41;
                        _0x486ead = _0x5318d6.replace("data:", "");
                      } else {
                        _0x1f596f = _0x6a8984;
                        _0x486ead = (_0x3a6229 => {
                          const _0x5b185a = {
                            JVBERi0: "application/pdf",
                            R0lGODdh: "image/gif",
                            R0lGODlh: "image/gif",
                            iVBORw0KGgo: "image/png",
                            "/9j/": "image/jpg"
                          };
                          for (var _0x4b4af9 in _0x5b185a) if (0 === _0x3a6229.indexOf(_0x4b4af9)) {
                            return _0x5b185a[_0x4b4af9];
                          }
                          return null;
                        })(_0x6a8984);
                      }
                    }
                    Object.assign(_0x1af0f3, {
                      "media-url": _0x20781a,
                      "media-base64": _0x1f596f,
                      "media-base64-mime": _0x3f095b ?? _0x486ead
                    });
                  }
                  const _0x4e43e1 = {
                    "auto-dismiss": _0x5c6cbc["auto-dismiss"],
                    sound: _0x5c6cbc.sound
                  };
                  Object.assign(_0x1af0f3, _0x4e43e1);
                  return _0x1af0f3;
                }
              case "Loon":
                {
                  const _0x45629e = {};
                  let _0x59be80 = _0x5c6cbc.openUrl || _0x5c6cbc.url || _0x5c6cbc["open-url"] || _0x4105c1;
                  _0x59be80 && Object.assign(_0x45629e, {
                    openUrl: _0x59be80
                  });
                  let _0x3cd89d = _0x5c6cbc.mediaUrl || _0x5c6cbc["media-url"];
                  _0x6a8984?.["startsWith"]("http") && (_0x3cd89d = _0x6a8984);
                  _0x3cd89d && Object.assign(_0x45629e, {
                    mediaUrl: _0x3cd89d
                  });
                  console.log(JSON.stringify(_0x45629e));
                  return _0x45629e;
                }
              case "Quantumult X":
                {
                  const _0x1237a6 = {};
                  let _0x2f6c34 = _0x5c6cbc["open-url"] || _0x5c6cbc.url || _0x5c6cbc.openUrl || _0x4105c1;
                  _0x2f6c34 && Object.assign(_0x1237a6, {
                    "open-url": _0x2f6c34
                  });
                  let _0x5403c9 = _0x5c6cbc["media-url"] || _0x5c6cbc.mediaUrl;
                  _0x6a8984?.["startsWith"]("http") && (_0x5403c9 = _0x6a8984);
                  _0x5403c9 && Object.assign(_0x1237a6, {
                    "media-url": _0x5403c9
                  });
                  let _0x44fb32 = _0x5c6cbc["update-pasteboard"] || _0x5c6cbc.updatePasteboard || _0x335397;
                  _0x44fb32 && Object.assign(_0x1237a6, {
                    "update-pasteboard": _0x44fb32
                  });
                  console.log(JSON.stringify(_0x1237a6));
                  return _0x1237a6;
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
            $notification.post(_0x460eb9, _0x18ed91, _0x80cd61, _0x30b26f(_0x336c68));
            break;
          case "Quantumult X":
            $notify(_0x460eb9, _0x18ed91, _0x80cd61, _0x30b26f(_0x336c68));
            break;
          case "Node.js":
            break;
        }
      }
      if (!this.isMuteLog) {
        let _0x85803c = ["", "==============📣系统通知📣=============="];
        _0x85803c.push(_0x460eb9);
        _0x18ed91 && _0x85803c.push(_0x18ed91);
        _0x80cd61 && _0x85803c.push(_0x80cd61);
        console.log(_0x85803c.join("\n"));
        this.logs = this.logs.concat(_0x85803c);
      }
    }
    debug(..._0x2473a2) {
      this.logLevels[this.logLevel] <= this.logLevels.debug && (_0x2473a2.length > 0 && (this.logs = [...this.logs, ..._0x2473a2]), console.log("" + this.logLevelPrefixs.debug + _0x2473a2.map(_0x5d115d => _0x5d115d ?? String(_0x5d115d)).join(this.logSeparator)));
    }
    info(..._0x3de669) {
      this.logLevels[this.logLevel] <= this.logLevels.info && (_0x3de669.length > 0 && (this.logs = [...this.logs, ..._0x3de669]), console.log("" + this.logLevelPrefixs.info + _0x3de669.map(_0x240a1d => _0x240a1d ?? String(_0x240a1d)).join(this.logSeparator)));
    }
    warn(..._0x2a7771) {
      this.logLevels[this.logLevel] <= this.logLevels.warn && (_0x2a7771.length > 0 && (this.logs = [...this.logs, ..._0x2a7771]), console.log("" + this.logLevelPrefixs.warn + _0x2a7771.map(_0x1d288e => _0x1d288e ?? String(_0x1d288e)).join(this.logSeparator)));
    }
    error(..._0x3d1c3d) {
      this.logLevels[this.logLevel] <= this.logLevels.error && (_0x3d1c3d.length > 0 && (this.logs = [...this.logs, ..._0x3d1c3d]), console.log("" + this.logLevelPrefixs.error + _0x3d1c3d.map(_0xfae3e4 => _0xfae3e4 ?? String(_0xfae3e4)).join(this.logSeparator)));
    }
    log(..._0x23532c) {
      _0x23532c.length > 0 && (this.logs = [...this.logs, ..._0x23532c]);
      console.log(_0x23532c.map(_0x5d4af0 => _0x5d4af0 ?? String(_0x5d4af0)).join(this.logSeparator));
    }
    logErr(_0x1f7a04, _0x498ce1) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          this.log("", "❗️" + this.name + ", 错误!", _0x498ce1, _0x1f7a04);
          break;
        case "Node.js":
          this.log("", "❗️" + this.name + ", 错误!", _0x498ce1, undefined !== _0x1f7a04.message ? _0x1f7a04.message : _0x1f7a04, _0x1f7a04.stack);
          break;
      }
    }
    wait(_0x4b3812) {
      return new Promise(_0x592dc7 => setTimeout(_0x592dc7, _0x4b3812));
    }
    done(_0x45a8eb = {}) {
      const _0x2ddb29 = (new Date().getTime() - this.startTime) / 1000;
      switch (this.log("", "🔔" + this.name + ", 结束! 🕛 " + _0x2ddb29 + " 秒"), this.log(), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          $done(_0x45a8eb);
          break;
        case "Node.js":
          process.exit(0);
      }
    }
  }(_0x3edf22, _0x638dc0);
}