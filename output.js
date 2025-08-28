//Thu Aug 28 2025 10:19:59 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const _0x552c93 = require("crypto"),
  _0x128994 = require("zlib"),
  {
    setTimeout: _0x473663
  } = require("timers/promises"),
  {
    execSync: _0x1bde61
  } = require("child_process"),
  _0x57d3e4 = require("fs"),
  _0x2f86c8 = require("path"),
  {
    createRequire: _0x433c0f
  } = require("module"),
  _0x292656 = _0x2f86c8.join(__dirname, ".xf_modules");
!_0x57d3e4.existsSync(_0x292656) && _0x57d3e4.mkdirSync(_0x292656, {
  "recursive": true
});
const _0x53e368 = _0x2f86c8.join(_0x292656, "package.json");
!_0x57d3e4.existsSync(_0x53e368) && _0x57d3e4.writeFileSync(_0x53e368, "{\"name\":\"xf-local-modules\",\"private\":true}");
const _0x4036dc = _0x433c0f(_0x53e368);
let _0x15d73c, _0x56177c, _0x35b193, _0x1a00cb;
function _0x1dec3f(_0x4836b8, _0x22e470 = "") {
  try {
    const _0x1bab79 = _0x22e470 ? _0x4836b8 + "@" + _0x22e470 : _0x4836b8;
    console.log("📦 正在安装 " + _0x1bab79 + " (隔离目录)");
    const _0x47fe73 = "npm install --legacy-peer-deps --no-audit --no-fund --save --prefix \"" + _0x292656 + "\" " + _0x1bab79 + " --registry=https://registry.npmmirror.com";
    _0x1bde61(_0x47fe73, {
      "stdio": "inherit"
    });
    console.log("✅ " + _0x1bab79 + " 安装成功");
    return true;
  } catch (_0x1934e5) {
    console.log("❌ " + _0x4836b8 + " 安装失败: " + _0x1934e5.message);
    return false;
  }
}
function _0x5a7ca3(_0x1f934d, _0x5804b9 = true, _0x1fd44a = "") {
  try {
    {
      const _0x34d006 = _0x4036dc(_0x1f934d);
      return _0x34d006.default || _0x34d006;
    }
  } catch (_0x33b45f) {
    {
      if (_0x33b45f.code === "ERR_MODULE_NOT_FOUND" || _0x33b45f.code === "MODULE_NOT_FOUND") {
        if (_0x5804b9) {
          console.log("⚠️ 检测到 " + _0x1f934d + " 未安装 (本地)");
          if (_0x1dec3f(_0x1f934d, _0x1fd44a)) {
            try {
              const _0x31f19c = _0x4036dc(_0x1f934d);
              return _0x31f19c.default || _0x31f19c;
            } catch (_0x41391f) {
              console.log("❌ " + _0x1f934d + " 加载失败: " + _0x41391f.message);
              return null;
            }
          }
        }
      } else {
        if (_0x33b45f.code === "ERR_REQUIRE_ESM") return console.log("⚠️ 检测到 " + _0x1f934d + " 模块为ESM版本，可能不兼容"), null;else {
          console.log("❌ " + _0x1f934d + " 加载失败: " + _0x33b45f.message);
        }
      }
      return null;
    }
  }
}
try {
  _0x1a00cb = _0x5a7ca3("p-limit", true, "6.1.0");
} catch (_0x5ae094) {
  console.log("⚠️ p-limit模块加载失败，将使用顺序执行模式");
  _0x1a00cb = null;
}
try {
  _0x15d73c = _0x5a7ca3("axios", true, "^1.6.0");
} catch (_0x173977) {
  console.log("⚠️ axios模块加载失败");
  _0x15d73c = null;
}
try {
  const _0x41f5e6 = _0x5a7ca3("socks-proxy-agent", true, "^7.0.0");
  _0x41f5e6 ? (_0x35b193 = _0x41f5e6.SocksProxyAgent, _0x56177c = _0x41f5e6.SocksProxyAgent || _0x41f5e6.default || _0x41f5e6) : (_0x35b193 = null, _0x56177c = null);
} catch (_0x30d184) {
  console.log("⚠️ socks-proxy-agent模块加载失败，代理功能将不可用");
  _0x35b193 = null;
  _0x56177c = null;
}
const _0x36f5bb = "喜番",
  _0x20c682 = "2.0.0",
  _0x248231 = "xifan",
  _0x689540 = true,
  _0x16b59a = false;
function _0x42c039() {
  const _0x46ae56 = new Date(),
    _0x350d9f = _0x1bc8dc => String(_0x1bc8dc).padStart(2, "0");
  return _0x350d9f(_0x46ae56.getHours()) + ":" + _0x350d9f(_0x46ae56.getMinutes()) + ":" + _0x350d9f(_0x46ae56.getSeconds());
}
const _0x253e3c = String(process.env.LOG_STYLE || "classic").toLowerCase();
function _0x39f05c(_0x110909, _0x518328, _0x2be2e1) {
  const _0xa43d3f = "[90m" + _0x42c039() + "[0m",
    _0x28ddb0 = "[36m" + _0x518328 + "[0m";
  if (_0x253e3c === "emoji") {
    if (_0x110909 === "info") return console.log("ℹ️ " + _0xa43d3f + " [" + _0x518328 + "] " + _0x2be2e1);
    if (_0x110909 === "warn") return console.log("⚠️ " + _0xa43d3f + " [" + _0x518328 + "] " + _0x2be2e1);
    if (_0x110909 === "error") return console.log("❌ " + _0xa43d3f + " [" + _0x518328 + "] " + _0x2be2e1);
  }
  let _0x66b52e = "INFO",
    _0x3e4014 = "[32m";
  _0x110909 === "warn" && (_0x66b52e = "WARN", _0x3e4014 = "[33m");
  _0x110909 === "error" && (_0x66b52e = "ERROR", _0x3e4014 = "[31m");
  console.log(_0xa43d3f + " " + _0x3e4014 + "[" + _0x66b52e + "]" + "[0m" + " " + _0x28ddb0 + " - " + _0x2be2e1);
}
function _0x876a3e(_0x1ac342, _0x2823be) {
  _0x39f05c("info", _0x1ac342, _0x2823be);
}
function _0x2a7769(_0x2402c5, _0x425686) {
  _0x39f05c("warn", _0x2402c5, _0x425686);
}
function _0x362ef8(_0x1f80ca, _0x199fc5) {
  _0x39f05c("error", _0x1f80ca, _0x199fc5);
}
async function _0x1f47ce(_0xf3184d) {
  try {
    {
      const _0xe29af7 = String(process.env.heihao || "").trim() === "1";
      if (_0xe29af7) return;
      return await _0x473663(_0xf3184d);
    }
  } catch {
    return await _0x473663(_0xf3184d);
  }
}
async function _0x38e8c3({
  queueId: _0x52029d,
  httpClient: _0x464f11,
  baseUrl: _0x14d53a,
  headers: _0x12058a,
  maxWaitMs = 20000,
  pollIntervalMs = 3000
}) {
  const _0x152e81 = Date.now();
  let _0xf89bc7 = 0;
  while (Date.now() - _0x152e81 <= maxWaitMs) {
    {
      _0xf89bc7++;
      const _0xbeccf8 = Date.now() - _0x152e81,
        _0x343f8e = maxWaitMs - _0xbeccf8;
      try {
        {
          const _0x5efa3c = _0x14d53a + "?queue_id=" + encodeURIComponent(_0x52029d),
            _0x2ca9d2 = await _0x464f11.get(_0x5efa3c, {
              "headers": _0x12058a,
              "timeout": 20000
            });
          if (_0x2ca9d2.status === 200) {
            const _0x3ee06c = _0x2ca9d2.data,
              _0x431687 = _0x3ee06c?.["success"],
              _0x5ae09b = _0x3ee06c?.["data"]?.["message"] || _0x3ee06c?.["message"],
              _0x138db6 = _0x3ee06c?.["status"];
            if (_0x5ae09b && _0x431687 && (_0x138db6 === "processed" || _0x138db6 === "completed")) return _0x5ae09b;
            if (_0x138db6 === "queued" && _0x431687) {
              const _0x2cd456 = _0x3ee06c?.["estimated_wait_time"],
                _0x3de985 = _0x3ee06c?.["queue_length"];
              let _0x400b54 = Number(_0x3ee06c?.["retry_after_ms"]);
              !_0x400b54 && _0x2cd456 && (_0x400b54 = Math.min(Math.max(Number(_0x2cd456) * 1000, 2000), 30000));
              const _0x4b6b56 = _0x400b54 || Math.max(pollIntervalMs, 2000),
                _0x1c37f5 = Math.min(_0x4b6b56, Math.max(0, maxWaitMs - (Date.now() - _0x152e81)));
              _0x1c37f5 > 0 && (console.log("⏸️ 等待 " + _0x1c37f5 + "ms 后继续轮询..."), await _0x1f47ce(_0x1c37f5));
              continue;
            }
            if (_0x431687 === false) {
              const _0xfe92c9 = _0x3ee06c?.["message"] || "队列处理失败";
              _0x362ef8("签名", _0xfe92c9);
              return null;
            }
          }
        }
      } catch (_0x7cfcf8) {
        {
          const _0x165bce = _0x7cfcf8?.["response"]?.["status"],
            _0x3d1bec = _0x7cfcf8?.["response"]?.["data"];
          if (_0x165bce === 429) {
            {
              const _0x492560 = Number(_0x3d1bec?.["retry_after_ms"]) || pollIntervalMs;
              console.log("⚠️ 轮询频率限制，等待 " + _0x492560 + "ms 后重试...");
              await _0x1f47ce(_0x492560);
            }
          } else {
            if (_0x165bce === 400 && _0x3d1bec) {
              try {
                const _0x5b5cc7 = typeof _0x3d1bec === "string" ? JSON.parse(_0x3d1bec) : _0x3d1bec,
                  _0x2df229 = "队列查询失败: " + _0x5b5cc7.message;
                console.log("❌ " + _0x2df229);
                _0x362ef8("签名", _0x2df229);
              } catch {
                const _0x23ae12 = "队列查询失败: HTTP " + _0x165bce;
                console.log("❌ " + _0x23ae12);
                _0x362ef8("签名", _0x23ae12);
              }
              return null;
            } else {
              console.log("⚠️ 轮询异常，等待 " + pollIntervalMs + "ms 后重试: " + (_0x7cfcf8.message || "未知错误"));
              await _0x1f47ce(pollIntervalMs);
            }
          }
        }
      }
    }
  }
  const _0x14fb6f = Date.now() - _0x152e81;
  console.log("⏰ 队列 " + _0x52029d + " 轮询超时，总耗时: " + _0x14fb6f + "ms，最大等待时间: " + maxWaitMs + "ms");
  _0x362ef8("签名", "队列处理超时");
  return null;
}
async function _0x583566(_0x29fde5, _0x168c71, _0x5ef136, _0x5c2957 = {}) {
  if (!_0x29fde5.queued || !_0x29fde5.queue_id) return console.log("⚠️ 无效的队列信息，无法处理异步签名"), null;
  console.log("🔄 开始处理异步签名请求，队列ID: " + _0x29fde5.queue_id);
  const _0x479b1 = _0x5c2957.maxWaitMs || 60000,
    _0x341416 = _0x5c2957.pollIntervalMs || 3000;
  return await _0x38e8c3({
    "queueId": _0x29fde5.queue_id,
    "httpClient": _0x168c71,
    "baseUrl": _0x5ef136,
    "headers": {
      "X-Card-Key": process.env.xfkm || ""
    },
    "maxWaitMs": _0x479b1,
    "pollIntervalMs": _0x341416
  });
}
function _0x25dbf5() {
  const _0x26d5af = process.version,
    _0x46a0ee = parseInt(_0x26d5af.slice(1).split(".")[0]);
  if (_0x46a0ee < 16) {
    throw new Error("Node.js版本过低，当前版本: " + _0x26d5af + "，需要16.0.0或更高版本");
  }
  console.log("📋 Node.js版本: " + _0x26d5af);
  const _0x33e9c0 = [{
      "name": "crypto",
      "module": _0x552c93,
      "required": true
    }, {
      "name": "zlib",
      "module": _0x128994,
      "required": true
    }, {
      "name": "timers/promises",
      "module": {
        "setTimeout": _0x1f47ce
      },
      "required": true
    }],
    _0x58083a = [{
      "name": "axios",
      "module": _0x15d73c,
      "required": true,
      "fallback": null
    }, {
      "name": "socks-proxy-agent",
      "module": _0x56177c,
      "required": false,
      "fallback": null
    }, {
      "name": "p-limit",
      "module": _0x1a00cb,
      "required": false,
      "fallback": "顺序执行模式"
    }];
  console.log("🔍 检查核心模块...");
  for (const {
    name: _0x46e27a,
    module: _0x23e48d,
    required: _0x37c07a
  } of _0x33e9c0) {
    {
      if (!_0x23e48d) {
        {
          if (_0x37c07a) throw new Error("核心模块 [" + _0x46e27a + "] 加载失败，这是系统必需模块");else console.log("⚠️ 核心模块 [" + _0x46e27a + "] 不可用");
        }
      } else console.log("✅ 核心模块 [" + _0x46e27a + "] 正常");
    }
  }
  console.log("🔍 检查外部依赖模块...");
  for (const {
    name: _0x1b3ab2,
    module: _0x2bc88b,
    required: _0x33af09,
    fallback: _0x43b61a
  } of _0x58083a) {
    if (!_0x2bc88b) {
      if (_0x33af09) throw new Error("必需模块 [" + _0x1b3ab2 + "] 加载失败，请检查是否正确安装");else console.log("⚠️ 可选模块 [" + _0x1b3ab2 + "] 不可用，将使用" + _0x43b61a);
    } else console.log("✅ 外部模块 [" + _0x1b3ab2 + "] 正常");
  }
  if (typeof _0x552c93.createCipheriv !== "function") throw new Error("crypto模块功能异常，无法创建加密器");
  if (typeof _0x128994.gzipSync !== "function") throw new Error("zlib模块功能异常，无法进行gzip压缩");
  if (_0x15d73c && typeof _0x15d73c.create !== "function") {
    {
      if (typeof _0x15d73c === "function") {} else throw new Error("axios模块功能异常，无法创建HTTP客户端");
    }
  }
  _0x56177c && typeof _0x56177c !== "function" && console.log("⚠️ socks-proxy-agent模块功能异常，代理功能将不可用");
  _0x1a00cb && typeof _0x1a00cb !== "function" && console.log("⚠️ p-limit模块功能异常，将使用顺序执行模式");
}
function _0x555705(_0x522919) {
  const _0x588c48 = _0x522919;
  let _0x59e709 = _0x522919.trim();
  const _0x235815 = [],
    _0x4f6335 = [];
  if (!_0x59e709.includes("@")) return _0x235815.push("缺少必要的分隔符 @"), {
    "isValid": false,
    "fixed": null,
    "errors": _0x235815,
    "warnings": _0x4f6335
  };
  const _0x3d6acb = _0x59e709.split("@");
  if (_0x3d6acb.length < 5) return _0x235815.push("账号信息不完整，需要至少5个部分，当前只有" + _0x3d6acb.length + "个部分"), {
    "isValid": false,
    "fixed": null,
    "errors": _0x235815,
    "warnings": _0x4f6335
  };
  _0x3d6acb.length > 6 && _0x4f6335.push("账号信息包含过多部分(" + _0x3d6acb.length + "个)，可能包含多余信息");
  const [_0x12332c, _0x1574c3, _0xecb66a, _0x45963b, _0x124dc0, _0x3be24a] = _0x3d6acb;
  if (!_0x12332c || _0x12332c.trim().length === 0) {
    _0x235815.push("第1部分(备注名)不能为空");
  } else _0x12332c.length > 50 && _0x4f6335.push("第1部分(备注名)过长，建议不超过50字符");
  if (!_0x1574c3 || _0x1574c3.trim().length === 0) _0x235815.push("第2部分(Cookie)不能为空");else {
    if (!_0x1574c3.includes("userId=")) _0x235815.push("第2部分(Cookie)缺少userId信息");else _0x1574c3.length < 20 && _0x4f6335.push("第2部分(Cookie)长度异常，可能不完整");
  }
  if (!_0xecb66a || _0xecb66a.trim().length === 0) _0x235815.push("第3部分(message)不能为空");else _0xecb66a.length < 10 && _0x4f6335.push("第3部分(message)长度异常，可能不完整");
  if (!_0x45963b || _0x45963b.trim().length === 0) {
    _0x235815.push("第4部分(SystemUa)不能为空");
  } else _0x45963b.length < 10 && _0x4f6335.push("第4部分(SystemUa)长度异常，可能不完整");
  if (!_0x124dc0 || _0x124dc0.trim().length === 0) {
    _0x235815.push("第5部分(BrowserUa)不能为空");
  } else {
    if (_0x124dc0.length < 10) {
      _0x4f6335.push("第5部分(BrowserUa)长度异常，可能不完整");
    }
  }
  _0x3be24a && _0x3be24a.trim().length > 0 && !_0x3be24a.includes("|") && !_0x3be24a.includes("#") && _0x4f6335.push("第6部分(代理信息)格式可能不正确，应使用 | 或 # 分隔");
  let _0x5381e1 = false;
  if (_0x235815.length === 0) {
    {
      const _0x47c760 = _0x3d6acb.map(_0x2c77ba => _0x2c77ba.trim()),
        _0x867c36 = _0x47c760.join("@");
      _0x867c36 !== _0x588c48 && (_0x59e709 = _0x867c36, _0x5381e1 = true, _0x4f6335.push("已自动清理各部分的前后空格"));
    }
  }
  return {
    "isValid": _0x235815.length === 0,
    "fixed": _0x5381e1 ? _0x59e709 : null,
    "errors": _0x235815,
    "warnings": _0x4f6335
  };
}
function _0x450c59() {
  const _0x1772a4 = [{
    "name": "xifan",
    "value": process.env.xifan,
    "description": "账号配置信息"
  }, {
    "name": "xfkm",
    "value": process.env.xfkm,
    "description": "卡密验证信息"
  }];
  for (const {
    name: _0x4aaf58,
    value: _0x365e9c,
    description: _0x3c4168
  } of _0x1772a4) {
    {
      if (!_0x365e9c || !_0x365e9c.trim()) throw new Error("环境变量 [" + _0x4aaf58 + "] 未设置或为空，" + _0x3c4168 + "缺失");
    }
  }
  const _0xdf0f6e = process.env.xifan,
    _0x37f522 = _0x555705(_0xdf0f6e);
  if (!_0x37f522.isValid) {
    console.log("❌ xifan环境变量格式错误:");
    _0x37f522.errors.forEach(_0x46c6f2 => {
      console.log("   - " + _0x46c6f2);
    });
    if (_0x37f522.fixed) {
      console.log("💡 已自动修复格式，修复后的格式:");
      console.log("   " + _0x37f522.fixed);
      console.log("💡 请更新环境变量为修复后的格式");
    }
    throw new Error("环境变量 [xifan] 格式错误，共" + _0x37f522.errors.length + "个错误");
  }
  if (_0x37f522.warnings.length > 0) {
    console.log("⚠️ xifan环境变量格式警告:");
    _0x37f522.warnings.forEach(_0x1c90fc => {
      console.log("   - " + _0x1c90fc);
    });
  }
  _0x37f522.fixed && (console.log("✅ xifan环境变量格式已自动修复"), console.log("   原始格式: " + _0xdf0f6e), console.log("   修复格式: " + _0x37f522.fixed));
  const _0x1700a3 = process.env.xfkm;
  if (_0x1700a3.length < 5) {
    throw new Error("环境变量 [xfkm] 长度异常，卡密信息可能不完整");
  }
  if (_0x1700a3.includes(" ") || _0x1700a3.includes("\n") || _0x1700a3.includes("\t")) {
    throw new Error("环境变量 [xfkm] 包含无效字符，请检查是否有多余的空格或换行符");
  }
  if (!/^[a-zA-Z0-9_-]+$/.test(_0x1700a3)) {
    console.log("⚠️ xfkm环境变量包含特殊字符，可能影响使用");
  }
}
function _0x25ebc5() {
  return new Promise((_0x33db17, _0x124c97) => {
    {
      if (!_0x15d73c) {
        {
          _0x124c97(new Error("axios模块不可用，无法进行网络连接测试"));
          return;
        }
      }
      const _0x46edff = setTimeout(() => {
        _0x124c97(new Error("网络连接测试超时，请检查网络状态"));
      }, 10000);
      _0x15d73c.get("http://www.baidu.com", {
        "timeout": 5000
      }).then(() => {
        clearTimeout(_0x46edff);
        _0x33db17(true);
      }).catch(_0x18033f => {
        clearTimeout(_0x46edff);
        if (_0x18033f.code === "ECONNREFUSED") _0x124c97(new Error("网络连接被拒绝，请检查防火墙设置"));else {
          if (_0x18033f.code === "ENOTFOUND") {
            _0x124c97(new Error("DNS解析失败，请检查网络配置"));
          } else _0x18033f.code === "ETIMEDOUT" ? _0x124c97(new Error("网络连接超时，请检查网络速度")) : _0x124c97(new Error("网络连接异常: " + _0x18033f.message));
        }
      });
    }
  });
}
function _0x53c0e8() {
  const _0x446c28 = require("os"),
    _0x564ccf = _0x446c28.totalmem(),
    _0x26782b = _0x446c28.freemem(),
    _0x21686f = ((_0x564ccf - _0x26782b) / _0x564ccf * 100).toFixed(1);
  if (_0x26782b < 104857600) throw new Error("系统内存不足，可用内存: " + (_0x26782b / 1024 / 1024).toFixed(1) + "MB，建议至少保留100MB可用内存");
  if (_0x21686f > 95) throw new Error("系统内存使用率过高: " + _0x21686f + "%，建议释放一些内存后重试");
  const _0x34c8b6 = _0x446c28.platform();
  if (_0x34c8b6 !== "win32" && _0x34c8b6 !== "linux" && _0x34c8b6 !== "darwin") throw new Error("不支持的操作系统平台: " + _0x34c8b6 + "，仅支持Windows、Linux和macOS");
  const _0x3e1eec = _0x446c28.cpus();
  if (_0x3e1eec.length < 1) {
    throw new Error("无法获取CPU信息，系统可能异常");
  }
}
async function _0x409baf() {
  console.log("🔍 开始系统环境检查...\n");
  try {
    {
      console.log("📦 检查依赖模块...");
      _0x25dbf5();
      console.log("✅ 依赖模块检查通过\n");
      console.log("🌍 检查环境变量...");
      _0x450c59();
      console.log("✅ 环境变量检查通过\n");
      console.log("💾 检查系统资源...");
      _0x53c0e8();
      console.log("✅ 系统资源检查通过\n");
      console.log("🌐 检查网络连接...");
      await _0x25ebc5();
      console.log("✅ 网络连接检查通过\n");
      console.log("🎉 所有系统检查完成，环境正常！\n");
      return true;
    }
  } catch (_0x4f5a30) {
    {
      console.log("❌ 系统检查失败: " + _0x4f5a30.message + "\n");
      console.log("📊 当前模块状态:");
      console.log("   - axios: " + (_0x15d73c ? "✅ 可用" : "❌ 不可用"));
      console.log("   - socks-proxy-agent: " + (_0x56177c ? "✅ 可用" : "❌ 不可用"));
      console.log("   - p-limit: " + (_0x1a00cb ? "✅ 可用" : "❌ 不可用"));
      if (_0x4f5a30.message.includes("依赖模块")) console.log("💡 解决方案：程序已尝试自动安装依赖包，如果仍有问题请手动运行 npm install\n");else {
        if (_0x4f5a30.message.includes("环境变量")) {
          console.log("💡 解决方案：请在青龙面板中正确设置环境变量\n");
        } else {
          if (_0x4f5a30.message.includes("网络连接")) {
            console.log("💡 解决方案：请检查网络连接和防火墙设置\n");
          } else {
            if (_0x4f5a30.message.includes("签名服务器")) console.log("💡 解决方案：请检查签名服务器状态或联系管理员\n");else {
              if (_0x4f5a30.message.includes("系统资源")) {
                console.log("💡 解决方案：请释放系统资源或重启系统\n");
              } else {
                if (_0x4f5a30.message.includes("Node.js版本")) {
                  console.log("💡 解决方案：请升级Node.js到16.0.0或更高版本\n");
                } else {
                  if (_0x4f5a30.message.includes("axios模块不可用")) console.log("💡 解决方案：程序已尝试自动安装axios模块，如果仍有问题请手动运行 npm install axios\n");else _0x4f5a30.message.includes("HTTP客户端创建失败") && console.log("💡 解决方案：程序已尝试自动安装依赖，如果仍有问题请检查网络连接或手动安装\n");
                }
              }
            }
          }
        }
      }
      console.log("💡 请根据以上错误信息进行相应修复后重新运行\n");
      return false;
    }
  }
}
function _0x1311f4(_0x2e1fbd, _0x1c17fe = 5, _0xed01ed = 5) {
  if (!_0x2e1fbd || _0x2e1fbd.length <= _0x1c17fe + _0xed01ed) return _0x2e1fbd || "";
  return "" + _0x2e1fbd.slice(0, _0x1c17fe) + "*".repeat(Math.max(0, _0x2e1fbd.length - _0x1c17fe - _0xed01ed)) + _0x2e1fbd.slice(-_0xed01ed);
}
function _0x383e3e(_0x30deef) {
  return _0x128994.gzipSync(_0x30deef).toString("base64");
}
function _0x3854b2(_0x17b369) {
  return _0x128994.gunzipSync(_0x17b369).toString("base64");
}
function _0x5e2abd(_0x5bf450) {
  const _0x94145 = Buffer.from("GWL8jXHLnzp63QDH", "utf8"),
    _0x84d119 = Buffer.from(_0x5bf450, "base64"),
    _0x2ed212 = _0x552c93.createCipheriv("aes-128-ecb", _0x94145, null);
  _0x2ed212.setAutoPadding(true);
  const _0x5146ee = Buffer.concat([_0x2ed212.update(_0x84d119), _0x2ed212.final()]);
  return _0x5146ee.toString("base64");
}
function _0x5308e8(_0x51dc22) {
  const _0x4eeb95 = Buffer.from("GWL8jXHLnzp63QDH", "utf8"),
    _0x1a3b87 = Buffer.from(_0x51dc22, "base64"),
    _0x36a4ec = _0x552c93.createDecipheriv("aes-128-ecb", _0x4eeb95, null);
  _0x36a4ec.setAutoPadding(true);
  const _0x38be6b = Buffer.concat([_0x36a4ec.update(_0x1a3b87), _0x36a4ec.final()]),
    _0x4b1238 = Buffer.from(_0x38be6b).toString("base64"),
    _0x1293be = Buffer.from(_0x4b1238, "base64"),
    _0x3948dd = _0x3854b2(_0x1293be),
    _0x5cb746 = Buffer.from(_0x3948dd, "base64");
  return _0x5cb746.toString("utf8");
}
function _0xf733c7(_0x2a2bd5) {
  const _0x11d2a0 = JSON.parse(_0x5308e8(_0x2a2bd5));
  _0x11d2a0.timestamp = String(Math.round(Date.now()));
  const _0x4fa242 = JSON.stringify(_0x11d2a0),
    _0x16fe33 = _0x383e3e(Buffer.from(_0x4fa242, "utf8"));
  return _0x5e2abd(_0x16fe33);
}
function _0x4de20d(_0x35cd2e, _0x3ca854) {
  const _0x5e88bf = JSON.parse(_0x5308e8(_0x35cd2e)),
    _0x1cbee3 = String(Math.round(Date.now()));
  if ("inspireHomeParam" in _0x5e88bf) delete _0x5e88bf.inspireHomeParam;
  _0x5e88bf.timestamp = _0x1cbee3;
  _0x5e88bf.inspireEventReportParam = _0x3ca854;
  const _0x4893f6 = JSON.stringify(_0x5e88bf),
    _0x17d464 = _0x383e3e(Buffer.from(_0x4893f6, "utf8"));
  return _0x5e2abd(_0x17d464);
}
function _0x226e82(_0xf12e9c, _0x15baf3, _0x5aa996, _0x4a5d8b) {
  const _0x13b37c = JSON.parse(_0x5308e8(_0xf12e9c)),
    _0x480184 = String(Math.round(Date.now()));
  if ("inspireHomeParam" in _0x13b37c) delete _0x13b37c.inspireHomeParam;
  _0x13b37c.timestamp = _0x480184;
  _0x13b37c.inspireTaskReportParam = {
    "neoInfos": [{
      "extParam": {
        "taskType": 1,
        "llsId": "0",
        "taskToken": _0x5aa996
      },
      "idempotentId": _0x4a5d8b
    }],
    "continuousTimes": 0,
    "taskId": _0x15baf3
  };
  const _0x6b7a5d = JSON.stringify(_0x13b37c),
    _0x8d639c = _0x383e3e(Buffer.from(_0x6b7a5d, "utf8"));
  return _0x5e2abd(_0x8d639c);
}
function _0x502a5c(_0x3d0a82, _0xb59ad2) {
  const _0x40db32 = JSON.parse(_0x5308e8(_0x3d0a82)),
    _0x5cebcc = String(Math.round(Date.now()));
  _0x40db32.sensorEventInfoList = [{
    "sensorType": 1,
    "timestamp": _0x5cebcc,
    "values": [-0.6101697683334351 + _0x1ac2a5(0, 5), -0.8641080856323242 + _0x1ac2a5(0, 5), 10.127023696899414 + _0x1ac2a5(0, 5)]
  }, {
    "sensorType": 4,
    "timestamp": _0x5cebcc,
    "values": [0.0007635590736754239 + _0x1ac2a5(0, 5), 0.0009162708884105086 + _0x1ac2a5(0, 5), -0.00007635590736754239 + _0x1ac2a5(0, 5)]
  }, {
    "sensorType": 9,
    "timestamp": _0x5cebcc,
    "values": [-0.5920952558517456 + _0x1ac2a5(0, 5), -0.829244077205658 + _0x1ac2a5(0, 5), 9.753571510314941 + _0x1ac2a5(0, 5)]
  }];
  _0x40db32.timestamp = _0x5cebcc;
  _0x40db32.impInfo = [{
    "posId": _0xb59ad2,
    "entryScene": _0xb59ad2,
    "adNum": 1,
    "adStyle": 2,
    "screenOrientation": 1
  }];
  const _0x133082 = JSON.stringify(_0x40db32),
    _0x35a869 = _0x383e3e(Buffer.from(_0x133082, "utf8"));
  return _0x5e2abd(_0x35a869);
}
function _0x4b8753(_0x2d2625, _0x2a6f2b, _0x5bc1b9, _0x2e7221, _0x28c55f, _0x25990b, _0x254cc1, _0x5f5456, _0x292228, _0x3978f1 = 0) {
  const _0x45d9b3 = JSON.parse(_0x5308e8(_0x2d2625)),
    _0x18801e = String(Math.round(Date.now()));
  _0x45d9b3.sensorEventInfoList = [{
    "sensorType": 1,
    "timestamp": _0x18801e,
    "values": [-0.6101697683334351 + _0x1ac2a5(0, 5), -0.8641080856323242 + _0x1ac2a5(0, 5), 10.127023696899414 + _0x1ac2a5(0, 5)]
  }, {
    "sensorType": 4,
    "timestamp": _0x18801e,
    "values": [0.0007635590736754239 + _0x1ac2a5(0, 5), 0.0009162708884105086 + _0x1ac2a5(0, 5), -0.00007635590736754239 + _0x1ac2a5(0, 5)]
  }, {
    "sensorType": 9,
    "timestamp": _0x18801e,
    "values": [-0.5920952558517456 + _0x1ac2a5(0, 5), -0.829244077205658 + _0x1ac2a5(0, 5), 9.753571510314941 + _0x1ac2a5(0, 5)]
  }];
  _0x45d9b3.timestamp = _0x18801e;
  _0x45d9b3.inspireTaskReportParam = {
    "posId": _0x2a6f2b,
    "ecpm": _0x5bc1b9,
    "neoInfos": [{
      "extParam": {
        "taskType": 1,
        "llsId": _0x2e7221,
        "creativeId": _0x28c55f,
        "taskToken": _0x25990b
      },
      "idempotentId": _0x254cc1
    }],
    "taskSessionId": _0x5f5456,
    "continuousTimes": _0x3978f1,
    "taskId": _0x292228
  };
  const _0x1997b2 = JSON.stringify(_0x45d9b3),
    _0x37ce42 = _0x383e3e(Buffer.from(_0x1997b2, "utf8"));
  return _0x5e2abd(_0x37ce42);
}
function _0x1ac2a5(_0x1c3914, _0x654b7e) {
  return Math.floor(Math.random() * (_0x654b7e - _0x1c3914 + 1)) + _0x1c3914;
}
function _0x494deb(_0x1f5b86) {
  const _0x362c66 = (_0x4a8bb3 = {}) => {
    if (!_0x15d73c) return null;
    if (typeof _0x15d73c.create === "function") {
      return _0x15d73c.create(_0x4a8bb3);
    }
    return _0x15d73c;
  };
  if (!_0x1f5b86) return _0x362c66();
  if (!_0x56177c) {
    console.log("⚠️ 代理功能不可用，将使用直连模式");
    return _0x362c66();
  }
  try {
    const _0x22026d = new _0x35b193(_0x1f5b86);
    return _0x362c66({
      "httpAgent": _0x22026d,
      "httpsAgent": _0x22026d
    });
  } catch (_0x2ef74b) {
    console.log("⚠️ 代理创建失败，将使用直连模式");
    return _0x362c66();
  }
}
async function _0x564c1f(_0x412a6b, _0xeb1f8c, _0x1c101b, _0x54c8b1) {
  let _0x13603c = 0;
  const _0x4b7fe2 = _0x54c8b1 || {},
    _0x4d5682 = _0x4b7fe2.async === true,
    _0x4f0548 = typeof _0x4b7fe2.maxWaitMs === "number" ? _0x4b7fe2.maxWaitMs : 60000,
    _0xe8e2b1 = typeof _0x4b7fe2.pollIntervalMs === "number" ? _0x4b7fe2.pollIntervalMs : 3000,
    _0x5404cc = Date.now();
  while (_0x13603c <= 8 && (_0x4d5682 || Date.now() - _0x5404cc <= _0x4f0548)) {
    {
      try {
        {
          const [_0x543297, _0x431197 = ""] = _0x412a6b.split("&&", 2),
            _0x3eeb2e = "https://tube.e.kuaishou.com" + _0x543297,
            _0x25f9b7 = "http://154.12.60.33:2424/proxy.php",
            _0x1b73c5 = await _0xeb1f8c.post(_0x25f9b7, JSON.stringify({
              "req_str": _0x543297 + "&&" + _0x431197
            }), {
              "headers": {
                "Content-Type": "application/json",
                "X-Card-Key": process.env.xfkm || "",
                "X-Target-Alias": "xf_sig3"
              },
              "timeout": 30000
            });
          if (_0x1b73c5.status === 200) {
            const _0xa22721 = _0x1b73c5.data,
              _0x40319f = _0xa22721?.["success"],
              _0x5bb993 = _0xa22721?.["data"]?.["message"] || _0xa22721?.["message"],
              _0x2c8473 = _0xa22721?.["status"];
            if (_0x5bb993 && _0x40319f && (_0x2c8473 === "processed" || _0x2c8473 === "completed")) return console.log("✅ 直接获得签名结果，无需轮询"), _0x5bb993;
            if ((_0x2c8473 === "queued" || _0xa22721?.["queue_id"]) && _0x40319f) {
              {
                const _0xcfded3 = _0xa22721?.["queue_id"];
                if (_0x4d5682) return console.log("⚠️ 异步模式：返回队列信息，上层函数需要自行处理"), {
                  "queued": true,
                  "queue_id": _0xcfded3,
                  "estimated_wait_time": _0xa22721?.["estimated_wait_time"],
                  "queue_length": _0xa22721?.["queue_length"],
                  "effective_rate_limit": _0xa22721?.["effective_rate_limit"]
                };
                if (_0xa22721?.["estimated_wait_time"] && Number(_0xa22721?.["estimated_wait_time"]) > 0) {
                  const _0x2e4f08 = Math.min(Math.max(Number(_0xa22721?.["estimated_wait_time"]) * 1000, 2000), 30000);
                  await _0x1f47ce(_0x2e4f08);
                }
                const _0x539650 = await _0x38e8c3({
                  "queueId": _0xcfded3,
                  "httpClient": _0xeb1f8c,
                  "baseUrl": _0x25f9b7,
                  "headers": {
                    "X-Card-Key": process.env.xfkm || ""
                  },
                  "maxWaitMs": Math.max(0, _0x4f0548 - (Date.now() - _0x5404cc)),
                  "pollIntervalMs": _0xe8e2b1
                });
                if (_0x539650) return _0x539650;
                let _0x4cc1ab = Number(_0xa22721?.["retry_after_ms"]);
                !_0x4cc1ab && _0xa22721?.["estimated_wait_time"] && (_0x4cc1ab = Math.min(Math.max(Number(_0xa22721?.["estimated_wait_time"]) * 1000, 2000), 30000));
                const _0x5d7b77 = _0x4cc1ab || Math.max(_0xe8e2b1, 2000),
                  _0x537bf7 = Math.min(Math.max(0, _0x5d7b77), Math.max(0, _0x4f0548 - (Date.now() - _0x5404cc)));
                _0x537bf7 > 0 && (await _0x1f47ce(_0x537bf7));
                _0x13603c += 1;
                continue;
              }
            }
            if (_0x40319f === false) return _0x362ef8("签名", _0xa22721?.["message"]), null;
          }
        }
      } catch (_0x10687a) {
        const _0x436bd0 = _0x10687a?.["response"]?.["status"],
          _0x3ed2a7 = _0x10687a?.["response"]?.["data"];
        if (_0x436bd0 === 400 && _0x3ed2a7) try {
          const _0x546f34 = typeof _0x3ed2a7 === "string" ? JSON.parse(_0x3ed2a7) : _0x3ed2a7;
          _0x362ef8("签名", "Sig3验证失败: " + _0x546f34.message);
        } catch {
          _0x362ef8("签名", "Sig3验证失败: HTTP " + _0x436bd0 + " - " + (typeof _0x3ed2a7 === "string" ? _0x3ed2a7 : JSON.stringify(_0x3ed2a7)));
        } else {
          if (_0x436bd0 === 429) {
            let _0x434fa1 = Number(_0x3ed2a7?.["retry_after_ms"]);
            !_0x434fa1 && (_0x434fa1 = 3000);
            const _0x39c243 = _0x4f0548 - (Date.now() - _0x5404cc);
            if (!_0x4d5682 && _0x39c243 <= 0) break;
            const _0xa0b401 = Math.min(_0x434fa1, _0x4d5682 ? _0x434fa1 : Math.max(0, _0x39c243));
            console.log("⚠️ 频率限制 (429)，服务器建议等待: " + _0x434fa1 + "ms，实际等待: " + _0xa0b401 + "ms");
            await _0x1f47ce(_0xa0b401);
          } else _0x362ef8("签名", _0x436bd0 ? "网络错误" : "网络错误"), await _0x1f47ce(3000);
        }
      }
      _0x13603c += 1;
    }
  }
  _0x362ef8("签名", "签名失败");
  return null;
}
async function _0x185693(_0x3670d9, _0x21619d, _0x7d2d74, _0x129a3c) {
  let _0x1620c1 = 0;
  const _0xab0d96 = _0x129a3c || {},
    _0x962f20 = _0xab0d96.async === true,
    _0x51b259 = typeof _0xab0d96.maxWaitMs === "number" ? _0xab0d96.maxWaitMs : 60000,
    _0x1e5a80 = typeof _0xab0d96.pollIntervalMs === "number" ? _0xab0d96.pollIntervalMs : 3000,
    _0x12c6f7 = Date.now();
  while (_0x1620c1 <= 8 && (_0x962f20 || Date.now() - _0x12c6f7 <= _0x51b259)) {
    {
      try {
        {
          const [_0x100b3c, _0x371e1d = ""] = _0x3670d9.split("&&", 2),
            _0x576a08 = "https://tube.e.kuaishou.com" + _0x100b3c,
            _0x4f11d1 = "http://154.12.60.33:2424/proxy.php",
            _0x55d868 = await _0x21619d.post(_0x4f11d1, JSON.stringify({
              "req_str": _0x100b3c + "&&" + _0x371e1d
            }), {
              "headers": {
                "Content-Type": "application/json",
                "X-Card-Key": process.env.xfkm || "",
                "X-Target-Alias": "xf_sig1"
              },
              "timeout": 30000
            });
          if (_0x55d868.status === 200) {
            const _0x1b9b71 = _0x55d868.data,
              _0x4791ba = _0x1b9b71?.["success"],
              _0x12b1fe = _0x1b9b71?.["data"]?.["message"] || _0x1b9b71?.["message"],
              _0x4d8c31 = _0x1b9b71?.["status"];
            if (_0x12b1fe && _0x4791ba && (_0x4d8c31 === "processed" || _0x4d8c31 === "completed")) return console.log("✅ 直接获得签名结果，无需轮询"), _0x12b1fe;
            if ((_0x4d8c31 === "queued" || _0x1b9b71?.["queue_id"]) && _0x4791ba) {
              {
                const _0xf86ca7 = _0x1b9b71?.["queue_id"];
                if (_0x962f20) return console.log("⚠️ 异步模式：返回队列信息，上层函数需要自行处理"), {
                  "queued": true,
                  "queue_id": _0xf86ca7,
                  "estimated_wait_time": _0x1b9b71?.["estimated_wait_time"],
                  "queue_length": _0x1b9b71?.["queue_length"],
                  "effective_rate_limit": _0x1b9b71?.["effective_rate_limit"]
                };
                if (_0x1b9b71?.["estimated_wait_time"] && Number(_0x1b9b71?.["estimated_wait_time"]) > 0) {
                  {
                    const _0x6a884a = Math.min(Math.max(Number(_0x1b9b71?.["estimated_wait_time"]) * 1000, 2000), 30000);
                    await _0x1f47ce(_0x6a884a);
                  }
                }
                const _0x4ca565 = await _0x38e8c3({
                  "queueId": _0xf86ca7,
                  "httpClient": _0x21619d,
                  "baseUrl": _0x4f11d1,
                  "headers": {
                    "X-Card-Key": process.env.xfkm || ""
                  },
                  "maxWaitMs": Math.max(0, _0x51b259 - (Date.now() - _0x12c6f7)),
                  "pollIntervalMs": _0x1e5a80
                });
                if (_0x4ca565) return _0x4ca565;
                let _0x5226d8 = Number(_0x1b9b71?.["retry_after_ms"]);
                !_0x5226d8 && _0x1b9b71?.["estimated_wait_time"] && (_0x5226d8 = Math.min(Math.max(Number(_0x1b9b71?.["estimated_wait_time"]) * 1000, 2000), 30000));
                const _0x219e74 = _0x5226d8 || Math.max(_0x1e5a80, 2000),
                  _0x52522a = Math.min(Math.max(0, _0x219e74), Math.max(0, _0x51b259 - (Date.now() - _0x12c6f7)));
                _0x52522a > 0 && (await _0x1f47ce(_0x52522a));
                _0x1620c1 += 1;
                continue;
              }
            }
            if (_0x4791ba === false) return _0x362ef8("签名", _0x1b9b71?.["message"]), null;
          }
        }
      } catch (_0x4a1592) {
        {
          const _0x431d53 = _0x4a1592?.["response"]?.["status"],
            _0x30a399 = _0x4a1592?.["response"]?.["data"];
          if (_0x431d53 === 400 && _0x30a399) {
            try {
              {
                const _0x28cd51 = typeof _0x30a399 === "string" ? JSON.parse(_0x30a399) : _0x30a399;
                _0x362ef8("签名", "Sig1验证失败: " + _0x28cd51.message);
              }
            } catch {
              _0x362ef8("签名", "Sig1验证失败: HTTP " + _0x431d53 + " - " + (typeof _0x30a399 === "string" ? _0x30a399 : JSON.stringify(_0x30a399)));
            }
          } else {
            if (_0x431d53 === 429) {
              {
                let _0xb0bc0a = Number(_0x30a399?.["retry_after_ms"]);
                !_0xb0bc0a && (_0xb0bc0a = 3000);
                const _0x1cd3c0 = _0x51b259 - (Date.now() - _0x12c6f7);
                if (!_0x962f20 && _0x1cd3c0 <= 0) break;
                const _0x5d51e4 = Math.min(_0xb0bc0a, _0x962f20 ? _0xb0bc0a : Math.max(0, _0x1cd3c0));
                console.log("⚠️ 频率限制 (429)，服务器建议等待: " + _0xb0bc0a + "ms，实际等待: " + _0x5d51e4 + "ms");
                await _0x1f47ce(_0x5d51e4);
              }
            } else _0x362ef8("签名", _0x431d53 ? "获取Sig1失败重试" : "获取Sig1失败重试"), await _0x1f47ce(3000);
          }
        }
      }
      _0x1620c1 += 1;
    }
  }
  _0x362ef8("签名", "签名失败");
  return null;
}
class _0x33a232 {
  constructor(_0x4bc69) {
    const _0x482f8d = _0x4bc69.split("@");
    this.remarkName = _0x482f8d[0];
    this.cookie = _0x482f8d[1];
    this.message = _0x482f8d[2];
    this.systemUa = _0x482f8d[3];
    this.browserUa = _0x482f8d[4];
    if (_0x482f8d.length === 6) {
      {
        const _0x453ae0 = _0x482f8d[5];
        let _0x33a3a, _0x3fc1df, _0xac9b27, _0x456edd;
        try {
          {
            if (_0x453ae0.includes("|")) {
              {
                const _0x5a029e = _0x453ae0.split("|");
                [_0x33a3a, _0x3fc1df, _0xac9b27, _0x456edd] = [_0x5a029e[0], _0x5a029e[1], _0x5a029e[2], _0x5a029e[3]];
              }
            } else {
              if (_0x453ae0.includes("#")) {
                const _0x1eb9be = _0x453ae0.split("#");
                [_0x33a3a, _0x3fc1df, _0xac9b27, _0x456edd] = [_0x1eb9be[0], _0x1eb9be[1], _0x1eb9be[2], _0x1eb9be[3]];
              } else _0x362ef8(this.remarkName, "SOCKS5 代理格式不正确，请按要求填写");
            }
            this.proxyUrl = "socks5h://" + _0xac9b27 + ":" + _0x456edd + "@" + _0x33a3a + ":" + _0x3fc1df;
            _0x876a3e(this.remarkName, "代理: " + _0x1311f4(_0x33a3a));
            this.http = _0x494deb(this.proxyUrl);
          }
        } catch (_0x56f2bc) {
          _0x362ef8(this.remarkName, "SOCKS5 代理解析失败，请检查格式");
          this.http = _0x15d73c ? _0x15d73c.create() : null;
        }
      }
    } else {
      this.proxyUrl = null;
      this.http = _0x15d73c ? _0x15d73c.create() : null;
      _0x876a3e(this.remarkName, "未配置代理。多账号请确保一号一代理。");
    }
    this.userAgent = this.systemUa + "-ksad-android-3.3.55.2";
    const _0x46d852 = /userId=([^;]+)/.exec(this.cookie || "");
    if (_0x46d852) this.userId = _0x46d852[1];else throw new Error("请检查Cookie格式");
    if (!this.http) throw new Error("HTTP客户端创建失败，请检查axios模块是否正确安装");
    this.adLoopCount = 0;
    this.boxAdLoopCount = 0;
    this.maxGold = parseInt(process.env.MAXgol || "1500000", 10);
    this.stopFlag = false;
  }
  ["log"](_0x475288, _0x31835c = "info") {
    if (_0x31835c === "info") _0x876a3e(this.remarkName, _0x475288);else {
      if (_0x31835c === "error") _0x362ef8(this.remarkName, _0x475288);else _0x31835c === "warning" ? _0x2a7769(this.remarkName, _0x475288) : _0x876a3e(this.remarkName, _0x475288);
    }
  }
  async ["checkSock5"]() {
    if (!this.proxyUrl) return {
      "available": true
    };
    try {
      const _0x2ac7fe = Date.now();
      await this.http.get("http://www.baidu.com", {
        "timeout": 10000
      });
      const _0x5705f0 = (Date.now() - _0x2ac7fe) / 1000;
      return {
        "available": true,
        "response_time": Number(_0x5705f0.toFixed(2)),
        "error": null
      };
    } catch (_0x3e79ef) {
      return {
        "available": false,
        "response_time": null,
        "error": String(_0x3e79ef)
      };
    }
  }
  async ["User_info"](_0xf57573 = true) {
    const _0x2bf747 = "https://tube.e.kuaishou.com/rest/e/tube/inspire/home",
      _0x1e118d = {
        "version": "3.3.55.2",
        "appVersion": "2.7.2.2",
        "appId": "1091400011",
        "message": _0xf733c7(this.message)
      };
    let _0x40be3a = JSON.stringify(_0x1e118d);
    _0x40be3a = _0x40be3a.replaceAll("/", "\\/");
    const _0x3d45c7 = await _0x564c1f("/rest/e/tube/inspire/home&&" + _0x40be3a, this.http, this.userId);
    if (!_0x3d45c7) return this.log("签名获取失败或超时，稍后重试", "warning"), false;
    const _0x42388c = {
      "User-Agent": this.userAgent,
      "Connection": "Keep-Alive",
      "Accept-Encoding": "gzip",
      "Ks-Sig3": _0x3d45c7,
      "Ks-Encoding": "2",
      "BrowserUa": this.browserUa,
      "SystemUa": this.systemUa,
      "Ks-PkgId": "com.kwai.theater1c48a12657a227fa339710301806365b",
      "Content-Type": "application/json; charset=utf-8",
      "Cookie": this.cookie
    };
    try {
      const _0x19dd40 = await this.http.post(_0x2bf747, _0x40be3a, {
          "headers": _0x42388c
        }),
        _0x33a334 = _0x19dd40.data;
      if (_0x33a334?.["result"] === 1) {
        const _0x13a05d = JSON.parse(_0x5308e8(_0x33a334.data)),
          _0x52655a = _0x13a05d.accountInfoV2?.["coinAccount"]?.["amount"],
          _0x4a8820 = _0x13a05d.accountInfoV2?.["cashAccount"]?.["amountDisplay"];
        if (Number(_0x52655a || 0) >= this.maxGold) return this.log("金币达到阈值(" + this.maxGold + ")，停止执行", "warning"), this.stopFlag = true, false;
        _0xf57573 && this.log("余额: 金币=" + _0x52655a + " (≈" + Number(_0x52655a || 0) / 30000 + ") | 现金=" + _0x4a8820);
        const _0x28ca5d = _0x13a05d.watchTubeTaskInfo?.["tasks"] || [];
        this.watchTubeTask = _0x28ca5d[0];
        !_0x13a05d.dailyTaskInfo && this.log("Cookie 失效，请重新抓取");
        const _0x55147c = _0x13a05d.dailyTaskInfo?.["tasks"] || [];
        for (const _0x38b225 of _0x55147c) {
          if (_0x38b225.id === 6002) {
            if (_0xf57573) await this.SignIn(_0x38b225);
          }
          _0x38b225.id === 6005 && (this.adData = _0x38b225);
        }
        return true;
      }
      this.log("用户信息获取失败: " + JSON.stringify(_0x33a334));
      return false;
    } catch (_0x57abd5) {
      this.log("用户信息获取异常: " + _0x57abd5.message);
      return false;
    }
  }
  async ["Treasure_Box"]() {
    const _0x4c868b = "https://tube.e.kuaishou.com/rest/e/tube/inspire/treasureBox",
      _0x1daa8f = _0xf733c7(this.message);
    let _0xef4073 = JSON.stringify({
      "version": "3.3.55.2",
      "appVersion": "2.7.2.2",
      "appId": "1091400011",
      "message": _0x1daa8f
    });
    _0xef4073 = _0xef4073.replaceAll("/", "\\/");
    const _0x2c7ce5 = await _0x564c1f("/rest/e/tube/inspire/treasureBox&&" + _0xef4073, this.http, this.userId);
    if (!_0x2c7ce5) {
      this.log("宝箱签名获取失败或超时，稍后重试", "warning");
      return;
    }
    const _0x2d85de = {
      "User-Agent": this.userAgent,
      "Connection": "Keep-Alive",
      "Accept-Encoding": "gzip",
      "Ks-Sig3": _0x2c7ce5,
      "Ks-Encoding": "2",
      "BrowserUa": this.browserUa,
      "SystemUa": this.systemUa,
      "Ks-PkgId": "com.kwai.theater1c48a12657a227fa339710301806365b",
      "Content-Type": "application/json; charset=utf-8",
      "Cookie": this.cookie
    };
    try {
      {
        const _0x476513 = await this.http.post(_0x4c868b, _0xef4073, {
            "headers": _0x2d85de
          }),
          _0x53c904 = _0x476513.data;
        if (_0x53c904?.["result"] === 1) {
          const _0x2d3fe9 = JSON.parse(_0x5308e8(_0x53c904.data));
          this.BoxAdInfo = _0x2d3fe9?.["popupInfo"]?.["buttonInfo"]?.["linkUrl"];
          const _0x2af50a = _0x2d3fe9.id,
            _0x4a4c49 = _0x2d3fe9.taskToken,
            _0x5400c1 = _0x2d3fe9?.["popupInfo"]?.["stages"] || [];
          let _0x4625d1 = "";
          for (const _0xb3cf2d of _0x5400c1) {
            if (_0xb3cf2d.status === 13) {
              _0x4625d1 = _0xb3cf2d.stageIndex;
              break;
            } else {
              if (_0xb3cf2d.status === 10) {
                {
                  const _0x1f8f04 = Math.floor((_0xb3cf2d.countdown || 0) / 1000 / 60),
                    _0x4201dd = _0xb3cf2d.subtitle;
                  this.log("宝箱" + _0x4201dd + "，预计剩余 " + _0x1f8f04 + " 分钟");
                }
              }
            }
          }
          if (_0x4625d1 !== "") {
            const _0x433978 = await this.Task_Report(_0x2af50a, _0x4a4c49, _0x4625d1);
            _0x433978?.["taskFinished"] && this.log("宝箱开启成功，本次获得 " + _0x433978.amount + " 金币");
          }
        } else this.log("宝箱信息拉取失败: " + JSON.stringify(_0x53c904));
      }
    } catch (_0x591932) {
      this.log("宝箱任务异常: " + _0x591932.message);
    }
  }
  async ["Event_Report"](_0x136318) {
    const _0x18f072 = "https://tube.e.kuaishou.com/rest/e/tube/inspire/event/report",
      _0x447359 = _0x4de20d(this.message, _0x136318);
    let _0x30d1b3 = JSON.stringify({
      "version": "3.3.55.2",
      "appVersion": "2.7.2.2",
      "appId": "1091400011",
      "message": _0x447359
    });
    _0x30d1b3 = _0x30d1b3.replaceAll("/", "\\/");
    const _0x2633df = {
      "User-Agent": this.userAgent,
      "Connection": "Keep-Alive",
      "Accept-Encoding": "gzip",
      "Ks-Sig3": await _0x564c1f("/rest/e/tube/inspire/event/report&&" + _0x30d1b3, this.http, this.userId),
      "Ks-Encoding": "2",
      "BrowserUa": this.browserUa,
      "SystemUa": this.systemUa,
      "Ks-PkgId": "com.kwai.theater1c48a12657a227fa339710301806365b",
      "Content-Type": "application/json; charset=utf-8",
      "Cookie": this.cookie
    };
    try {
      const _0x1e01be = await this.http.post(_0x18f072, _0x30d1b3, {
        "headers": _0x2633df
      });
      return _0x1e01be.data;
    } catch (_0x59a807) {
      this.log("事件上报异常: " + _0x59a807.message);
      return {};
    }
  }
  async ["Task_Report"](_0x2af252, _0x4de196, _0x1e31cb) {
    const _0x1f6fa2 = "https://tube.e.kuaishou.com/rest/e/tube/inspire/task/report",
      _0x114b0e = _0x226e82(this.message, _0x2af252, _0x4de196, _0x1e31cb);
    let _0x11efec = JSON.stringify({
      "version": "3.3.55.2",
      "appVersion": "2.7.2.2",
      "appId": "1091400011",
      "message": _0x114b0e
    });
    _0x11efec = _0x11efec.replaceAll("/", "\\/");
    const _0x5b2fa6 = {
      "User-Agent": this.userAgent,
      "Connection": "Keep-Alive",
      "Accept-Encoding": "gzip",
      "Ks-Sig3": await _0x564c1f("/rest/e/tube/inspire/task/report&&" + _0x11efec, this.http, this.userId),
      "Ks-Encoding": "2",
      "BrowserUa": this.browserUa,
      "SystemUa": this.systemUa,
      "Ks-PkgId": "com.kwai.theater1c48a12657a227fa339710301806365b",
      "Content-Type": "application/json; charset=utf-8",
      "Cookie": this.cookie
    };
    try {
      {
        const _0x2a6454 = await this.http.post(_0x1f6fa2, _0x11efec, {
            "headers": _0x5b2fa6
          }),
          _0x3d12d1 = _0x2a6454.data;
        if (_0x3d12d1?.["result"] === 1) return JSON.parse(_0x5308e8(_0x3d12d1.data));
        this.log("任务上报未通过");
        return null;
      }
    } catch (_0xb82c28) {
      this.log("任务上报异常: " + _0xb82c28.message);
      return null;
    }
  }
  async ["SignIn"](_0x2a1cdb) {
    const _0x310fcc = _0x2a1cdb.popupInfo,
      _0x418007 = _0x310fcc.taskId,
      _0x42ea66 = _0x310fcc.taskToken,
      _0x36b189 = _0x310fcc.stages || [];
    let _0x1c0d34 = null;
    for (const _0x176090 of _0x36b189) {
      {
        if (_0x176090.title === "今天") {
          {
            _0x1c0d34 = _0x176090;
            break;
          }
        }
      }
    }
    if (!_0x1c0d34) {
      this.log("今日已签到");
      return;
    }
    const _0x439f32 = _0x1c0d34.stageIndex;
    if (_0x1c0d34.status === 10) {
      this.log("进行签到");
      const _0x16942d = await this.Task_Report(_0x418007, _0x42ea66, _0x439f32);
      _0x16942d?.["statusCode"] === 1003 && this.log(_0x16942d.errorMessage);
    }
  }
  async ["GetAd"](_0x9d587b) {
    const _0x17759e = "https://open.e.kuaishou.com/rest/e/v3/open/univ",
      _0x124a38 = _0x502a5c(this.message, _0x9d587b);
    let _0x1e27a9 = JSON.stringify({
      "version": "3.3.55.2",
      "appVersion": "2.7.2.2",
      "appId": "1091400011",
      "message": _0x124a38
    });
    _0x1e27a9 = _0x1e27a9.replaceAll("/", "\\/");
    const _0x319a80 = {
      "User-Agent": this.userAgent,
      "Connection": "Keep-Alive",
      "Accept-Encoding": "gzip",
      "Ks-Sig1": await (async () => {
        const _0x149a53 = await _0x185693("/rest/e/v3/open/univ&&" + _0x1e27a9, this.http, this.userId);
        if (!_0x149a53) throw new Error("Sig1签名获取失败");
        return _0x149a53;
      })(),
      "Ks-Encoding": "2",
      "BrowserUa": this.browserUa,
      "SystemUa": this.systemUa,
      "Ks-PkgId": "com.kwai.theater1c48a12657a227fa339710301806365b",
      "Content-Type": "application/json; charset=utf-8",
      "Cookie": this.cookie
    };
    try {
      const _0x586228 = await this.http.post(_0x17759e, _0x1e27a9, {
          "headers": _0x319a80
        }),
        _0x4292d9 = _0x586228.data;
      if (_0x4292d9?.["result"] === 1) {
        const _0x84a5ec = JSON.parse(_0x5308e8(_0x4292d9.impAdInfo));
        return _0x84a5ec;
      }
      return [];
    } catch (_0x2d0722) {
      this.log("获取广告信息异常: " + _0x2d0722.message);
      return [];
    }
  }
  async ["Upload_Video_Time"]() {
    const _0x36da4a = Date.now(),
      _0x14329e = {
        "eventType": "WATCH_TUBE",
        "eventTime": _0x36da4a,
        "data": "{\"tubeId\":\"3412489\",\"episodeNumber\":1,\"photoId\":\"77298100\",\"watchTime\":30}"
      },
      _0x1bd17c = await this.Event_Report(_0x14329e);
    _0x1bd17c?.["result"] === 1 && this.log("时长上报完成");
  }
  async ["watchTube"]() {
    const _0x533f9f = this.watchTubeTask?.["taskStatus"];
    if (_0x533f9f === 13) {
      {
        const _0xe4c8d4 = await this.Task_Report(this.watchTubeTask.id, this.watchTubeTask.extParam.taskToken, this.watchTubeTask.process);
        _0xe4c8d4?.["taskFinished"] && this.log("任务完成，领取 " + _0xe4c8d4.amount + " 金币");
      }
    } else {
      if (_0x533f9f === 10) {
        this.log(this.watchTubeTask?.["subtitle"] || "继续观看以解锁奖励");
        await this.Upload_Video_Time();
      }
    }
  }
  async ["WatchAD"]() {
    if (!this.adData) {
      this.log("今日广告任务已完成");
      return false;
    }
    const _0x5c572d = this.adData.extParam.taskToken,
      _0x40c618 = this.adData.id;
    let _0x21ac3a = this.adData?.["buttonInfo"]?.["linkUrl"];
    if (!_0x21ac3a) return this.log("广告链接为空，跳过本次广告任务"), false;
    while (_0x21ac3a.length % 4 !== 0) {
      _0x21ac3a += "=";
    }
    let _0x344f26, _0x1a1353, _0x28a485, _0xfb4e2d, _0x33138a, _0x579216;
    try {
      {
        const _0x5df14a = JSON.parse(Buffer.from(_0x21ac3a, "base64").toString("utf8"));
        _0x344f26 = _0x5df14a.posId;
        _0x1a1353 = await this.GetAd(_0x344f26);
      }
    } catch (_0x45cea4) {
      {
        this.log("解析广告链接或获取广告信息失败: " + _0x45cea4.message);
        const _0x249861 = Date.now();
        _0x28a485 = 148407627585 + _0x1ac2a5(0, 1000000);
        _0xfb4e2d = _0x1ac2a5(400, 50400);
        _0x33138a = "2008597857549383489_" + _0x28a485 + "_" + _0x249861;
        _0x579216 = _0x33138a.split("_");
      }
    }
    if (_0x1a1353 && _0x1a1353.length >= 1) {
      {
        const _0x530587 = _0x1a1353[0];
        _0x28a485 = _0x530587.adInfo?.[0]?.["adBaseInfo"]?.["creativeId"];
        _0xfb4e2d = _0x530587.adInfo?.[0]?.["adBaseInfo"]?.["ecpm"];
        try {
          const _0x49ed40 = JSON.parse(_0x530587.adInfo?.[0]?.["adConversionInfo"]?.["callbackUrlInfo"] || "{}");
          _0x33138a = _0x49ed40.transId;
        } catch (_0x267142) {
          this.log("解析广告回调信息失败: " + _0x267142.message + "，使用默认值");
          const _0xa8fc48 = Date.now();
          _0x28a485 = _0x28a485 || 148407627585 + _0x1ac2a5(0, 1000000);
          _0xfb4e2d = _0xfb4e2d || _0x1ac2a5(400, 50400);
          _0x33138a = "2008597857549383489_" + _0x28a485 + "_" + _0xa8fc48;
        }
        _0x579216 = String(_0x33138a || "").split("_");
      }
    }
    if (!_0x579216 || _0x579216.length < 3) {
      const _0x57f3bd = Date.now();
      _0x28a485 = _0x28a485 || 148407627585 + _0x1ac2a5(0, 1000000);
      _0xfb4e2d = _0xfb4e2d || _0x1ac2a5(400, 50400);
      _0x33138a = "2008597857549383489_" + _0x28a485 + "_" + _0x57f3bd;
      _0x579216 = _0x33138a.split("_");
      this.log("使用默认广告参数，确保程序正常运行");
    }
    !_0x344f26 && (_0x344f26 = "default_pos_id", this.log("使用默认广告位ID，确保程序正常运行"));
    const _0x24d701 = _0x4b8753(this.message, _0x344f26, _0xfb4e2d, _0x579216[0], _0x28a485, _0x5c572d, _0x579216[0] + "_" + _0x579216[1], _0x579216[2], _0x40c618);
    await _0x1f47ce(_0x1ac2a5(16, 32) * 1000);
    const _0x9fcd47 = "https://tube.e.kuaishou.com/rest/e/tube/inspire/task/report";
    let _0x4f0524 = JSON.stringify({
      "version": "3.3.55.2",
      "appVersion": "2.7.2.2",
      "appId": "1091400011",
      "message": _0x24d701
    });
    _0x4f0524 = _0x4f0524.replaceAll("/", "\\/");
    const _0x529106 = {
      "User-Agent": this.userAgent,
      "Connection": "Keep-Alive",
      "Accept-Encoding": "gzip",
      "Ks-Sig3": await _0x564c1f("/rest/e/tube/inspire/task/report&&" + _0x4f0524, this.http, this.userId),
      "Ks-Encoding": "2",
      "BrowserUa": this.browserUa,
      "SystemUa": this.systemUa,
      "Ks-PkgId": "com.kwai.theater1c48a12657a227fa339710301806365b",
      "Content-Type": "application/json; charset=utf-8",
      "Cookie": this.cookie
    };
    try {
      const _0x2f016c = await this.http.post(_0x9fcd47, _0x4f0524, {
          "headers": _0x529106
        }),
        _0x32fe82 = _0x2f016c.data;
      if (_0x32fe82?.["result"] === 1) {
        {
          const _0xd62766 = JSON.parse(_0x5308e8(_0x32fe82.data));
          if (_0xd62766?.["taskFinished"]) {
            {
              this.log("广告完成，获得 " + _0xd62766.amount + " 金币");
              if (_0xd62766.amount === 50) {
                this.log("此号疑似黑号");
                return false;
              }
              if (_0xd62766.amount < 100) {
                this.log("此号疑似半黑 尝试手动看视频提高下金币量吧");
              }
              if (_0xd62766.popUp && _0xd62766.popUp.id === "continuousWatchAdPopup") {
                {
                  const _0x5539d9 = _0xd62766.popUp.data,
                    _0x369ad6 = _0x5539d9?.["buttonInfo"]?.["linkUrl"] || "";
                  let _0x2551ce = _0x369ad6;
                  while (_0x2551ce.length % 4 !== 0) {
                    _0x2551ce += "=";
                  }
                  try {
                    {
                      const _0x1337a1 = JSON.parse(Buffer.from(_0x2551ce, "base64").toString("utf8")),
                        _0x31bea0 = _0x1337a1.extParams,
                        _0x2e5fba = _0x1337a1.posId,
                        _0x203f51 = _0x1337a1.businessId;
                      await _0x1f47ce(_0x1ac2a5(2, 6) * 1000);
                      this.adLoopCount = 0;
                      await this.MoreWatchAD(_0x31bea0, _0x2e5fba, _0x203f51);
                    }
                  } catch (_0x20a9f0) {
                    this.log("解析嵌套广告链接失败: " + _0x20a9f0.message);
                  }
                }
              }
            }
          } else {
            this.log("广告上报失败（A）");
            return false;
          }
        }
      } else return this.log("广告上报失败（B）"), false;
    } catch (_0x4ba2b3) {
      this.log("观看广告任务异常: " + _0x4ba2b3.message);
      return false;
    }
    return true;
  }
  async ["MoreWatchAD"](_0x1fc29a, _0x49d932, _0x224414) {
    this.adLoopCount += 1;
    const _0x205248 = await this.GetAd(_0x49d932);
    let _0xad3562, _0xd98bcf, _0x49f898, _0x45cdf2;
    if (_0x205248 && _0x205248.length >= 1) {
      {
        const _0x165e70 = _0x205248[0];
        _0xad3562 = _0x165e70.adInfo?.[0]?.["adBaseInfo"]?.["creativeId"];
        _0xd98bcf = _0x165e70.adInfo?.[0]?.["adBaseInfo"]?.["ecpm"];
        try {
          const _0x45d698 = JSON.parse(_0x165e70.adInfo?.[0]?.["adConversionInfo"]?.["callbackUrlInfo"] || "{}");
          _0x49f898 = _0x45d698.transId;
        } catch (_0x3fdcc4) {
          {
            this.log("解析嵌套广告回调信息失败: " + _0x3fdcc4.message + "，使用默认值");
            const _0x364a61 = Date.now();
            _0xad3562 = _0xad3562 || 148407627585 + _0x1ac2a5(0, 1000000);
            _0xd98bcf = _0xd98bcf || _0x1ac2a5(400, 50400);
            _0x49f898 = "2008597857549383489_" + _0xad3562 + "_" + _0x364a61;
          }
        }
        _0x45cdf2 = String(_0x49f898 || "").split("_");
      }
    } else {
      const _0x1fe82c = Date.now();
      _0xad3562 = 148407627585 + _0x1ac2a5(0, 1000000);
      _0xd98bcf = _0x1ac2a5(400, 50400);
      _0x49f898 = "2008597857549383489_" + _0xad3562 + "_" + _0x1fe82c;
      _0x45cdf2 = _0x49f898.split("_");
    }
    const _0x64f028 = _0x4b8753(this.message, _0x49d932, _0xd98bcf, _0x45cdf2[0], _0xad3562, _0x1fc29a, _0x45cdf2[0] + "_" + _0x45cdf2[1], _0x45cdf2[2], _0x224414, this.adLoopCount);
    await _0x1f47ce(_0x1ac2a5(18, 30) * 1000);
    const _0x236a22 = "https://tube.e.kuaishou.com/rest/e/tube/inspire/task/report";
    let _0x57517c = JSON.stringify({
      "version": "3.3.55.2",
      "appVersion": "2.7.2.2",
      "appId": "1091400011",
      "message": _0x64f028
    });
    _0x57517c = _0x57517c.replaceAll("/", "\\/");
    const _0x3ee83f = {
      "User-Agent": this.userAgent,
      "Connection": "Keep-Alive",
      "Accept-Encoding": "gzip",
      "Ks-Sig3": await _0x564c1f("/rest/e/tube/inspire/task/report&&" + _0x57517c, this.http, this.userId),
      "Ks-Encoding": "2",
      "BrowserUa": this.browserUa,
      "SystemUa": this.systemUa,
      "Ks-PkgId": "com.kwai.theater1c48a12657a227fa339710301806365b",
      "Content-Type": "application/json; charset=utf-8",
      "Cookie": this.cookie
    };
    try {
      const _0x269034 = await this.http.post(_0x236a22, _0x57517c, {
          "headers": _0x3ee83f
        }),
        _0x147286 = _0x269034.data;
      if (_0x147286?.["result"] === 1) {
        {
          const _0x465c72 = JSON.parse(_0x5308e8(_0x147286.data));
          if (_0x465c72?.["taskFinished"]) {
            {
              if (_0x465c72.amount === 50) return this.log("此号疑似黑号"), false;
              _0x465c72.amount < 100 && this.log("此号疑似半黑 尝试手动看视频提高下金币量吧");
              this.log("嵌套广告第 " + this.adLoopCount + " 次完成，获得 " + _0x465c72.amount + " 金币");
              if (_0x465c72.popUp && _0x465c72.popUp.id === "continuousWatchAdPopup") {
                const _0x498811 = _0x465c72.popUp.data,
                  _0x1f13be = _0x498811?.["buttonInfo"]?.["linkUrl"] || "";
                let _0x3803bc = _0x1f13be;
                while (_0x3803bc.length % 4 !== 0) {
                  _0x3803bc += "=";
                }
                try {
                  {
                    const _0xabeb50 = JSON.parse(Buffer.from(_0x3803bc, "base64").toString("utf8")),
                      _0x3d6f7e = _0xabeb50.extParams,
                      _0x2be658 = _0xabeb50.posId,
                      _0x2c336c = _0xabeb50.businessId;
                    await _0x1f47ce(_0x1ac2a5(2, 6) * 1000);
                    await this.MoreWatchAD(_0x3d6f7e, _0x2be658, _0x2c336c);
                  }
                } catch (_0x14623e) {
                  this.log("解析嵌套广告链接失败: " + _0x14623e.message);
                }
              } else this.log("嵌套广告累计次数：" + this.adLoopCount), this.adLoopCount = 0;
            }
          } else this.log("广告上报失败（A）");
        }
      } else this.log("广告上报失败（B）");
    } catch (_0x35a3a0) {
      this.log("嵌套观看广告任务异常: " + _0x35a3a0.message);
    }
    return true;
  }
  async ["BoxAd"]() {
    this.boxAdLoopCount = 0;
    let _0x10702d = this.BoxAdInfo || "";
    if (!_0x10702d || _0x10702d.trim() === "") {
      {
        this.log("宝箱广告信息为空，跳过宝箱广告任务");
        return;
      }
    }
    try {
      {
        while (_0x10702d.length % 4 !== 0) {
          _0x10702d += "=";
        }
        const _0x647b19 = JSON.parse(Buffer.from(_0x10702d, "base64").toString("utf8"));
        if (!_0x647b19 || !_0x647b19.businessId || !_0x647b19.extParams || !_0x647b19.posId) {
          {
            this.log("宝箱广告数据结构无效，跳过宝箱广告任务");
            return;
          }
        }
        const _0x1d9b7d = _0x647b19.businessId,
          _0x25b11c = _0x647b19.extParams,
          _0x5d36dc = _0x647b19.posId;
        await this.WatchBoxAd(_0x25b11c, _0x5d36dc, _0x1d9b7d);
      }
    } catch (_0x12f08a) {
      this.log("宝箱广告数据解析失败: " + _0x12f08a.message + "，跳过宝箱广告任务");
      return;
    }
  }
  async ["WatchBoxAd"](_0x49e3f7, _0x181b69, _0x5b22d0) {
    this.boxAdLoopCount += 1;
    if (!(await this.User_info(false))) {
      this.log("账号金币已达上限，停止执行");
      return false;
    }
    const _0x2993ae = await this.GetAd(_0x181b69);
    let _0x5df541, _0x35a151, _0x393792, _0x3a3608;
    if (_0x2993ae && _0x2993ae.length >= 1) {
      const _0x400707 = _0x2993ae[0];
      _0x5df541 = _0x400707.adInfo?.[0]?.["adBaseInfo"]?.["creativeId"];
      _0x35a151 = _0x400707.adInfo?.[0]?.["adBaseInfo"]?.["ecpm"];
      try {
        const _0x2b2571 = JSON.parse(_0x400707.adInfo?.[0]?.["adConversionInfo"]?.["callbackUrlInfo"] || "{}");
        _0x393792 = _0x2b2571.transId;
        _0x3a3608 = String(_0x393792 || "").split("_");
      } catch (_0x5724c6) {
        {
          this.log("解析宝箱广告回调信息失败: " + _0x5724c6.message + "，使用默认值");
          const _0x420060 = Date.now();
          _0x5df541 = _0x5df541 || 148407627585 + _0x1ac2a5(0, 1000000);
          _0x35a151 = _0x35a151 || _0x1ac2a5(400, 50400);
          _0x393792 = "2008597857549383489_" + _0x5df541 + "_" + _0x420060;
          _0x3a3608 = _0x393792.split("_");
        }
      }
    } else {
      const _0x48eefc = Date.now();
      _0x5df541 = 148407627585 + _0x1ac2a5(0, 1000000);
      _0x35a151 = _0x1ac2a5(400, 50400);
      _0x393792 = "2008597857549383489_" + _0x5df541 + "_" + _0x48eefc;
      _0x3a3608 = _0x393792.split("_");
    }
    const _0x48975a = _0x4b8753(this.message, _0x181b69, _0x35a151, _0x3a3608[0], _0x5df541, _0x49e3f7, _0x3a3608[0] + "_" + _0x3a3608[1], _0x3a3608[2], _0x5b22d0, this.boxAdLoopCount);
    await _0x1f47ce(_0x1ac2a5(18, 30) * 1000);
    const _0x3e7cd5 = "https://tube.e.kuaishou.com/rest/e/tube/inspire/task/report";
    let _0x45fbac = JSON.stringify({
      "version": "3.3.55.2",
      "appVersion": "2.7.2.2",
      "appId": "1091400011",
      "message": _0x48975a
    });
    _0x45fbac = _0x45fbac.replaceAll("/", "\\/");
    const _0x3be016 = {
      "User-Agent": this.userAgent,
      "Connection": "Keep-Alive",
      "Accept-Encoding": "gzip",
      "Ks-Sig3": await _0x564c1f("/rest/e/tube/inspire/task/report&&" + _0x45fbac, this.http, this.userId),
      "Ks-Encoding": "2",
      "BrowserUa": this.browserUa,
      "SystemUa": this.systemUa,
      "Ks-PkgId": "com.kwai.theater1c48a12657a227fa339710301806365b",
      "Content-Type": "application/json; charset=utf-8",
      "Cookie": this.cookie
    };
    try {
      {
        const _0x811ec5 = await this.http.post(_0x3e7cd5, _0x45fbac, {
            "headers": _0x3be016
          }),
          _0x1c8695 = _0x811ec5.data;
        if (_0x1c8695?.["result"] === 1) {
          let _0x156b95;
          try {
            _0x156b95 = JSON.parse(_0x5308e8(_0x1c8695.data));
          } catch (_0x377a89) {
            this.log("广告响应解析失败: " + _0x377a89.message);
            return false;
          }
          if (_0x156b95?.["taskFinished"]) {
            if (_0x156b95.amount === 50) {
              this.log("此号疑似黑号");
              return false;
            }
            _0x156b95.amount < 100 && this.log("此号疑似半黑 尝试手动看视频提高下金币量吧");
            this.log("宝箱广告第 " + this.boxAdLoopCount + " 次完成，获得 " + _0x156b95.amount + " 金币");
            if (_0x156b95.popUp && _0x156b95.popUp.id === "continuousWatchAdPopup") {
              const _0x334e0f = _0x156b95.popUp.data,
                _0x7a2468 = _0x334e0f?.["buttonInfo"]?.["linkUrl"] || "";
              if (_0x7a2468 && _0x7a2468.trim() !== "") {
                let _0x540ff5 = _0x7a2468;
                while (_0x540ff5.length % 4 !== 0) {
                  _0x540ff5 += "=";
                }
                try {
                  const _0xbfb63a = JSON.parse(Buffer.from(_0x540ff5, "base64").toString("utf8"));
                  if (_0xbfb63a && _0xbfb63a.extParams && _0xbfb63a.posId && _0xbfb63a.businessId) {
                    {
                      const _0x5e8cac = _0xbfb63a.extParams,
                        _0xc68b34 = _0xbfb63a.posId,
                        _0x180ccb = _0xbfb63a.businessId;
                      await _0x1f47ce(_0x1ac2a5(2, 6) * 1000);
                      const _0x2718f2 = await this.WatchBoxAd(_0x5e8cac, _0xc68b34, _0x180ccb);
                      if (!_0x2718f2) return false;
                    }
                  } else this.log("嵌套广告数据结构无效，停止嵌套广告");
                } catch (_0x395037) {
                  this.log("嵌套广告数据解析失败: " + _0x395037.message + "，停止嵌套广告");
                }
              } else this.log("嵌套广告链接为空，停止嵌套广告");
            } else this.log("本次共执行[" + this.boxAdLoopCount + "]次宝箱广告"), this.boxAdLoopCount = 0;
          } else this.log("广告上报失败（A）");
        } else this.log("广告上报失败（B）");
      }
    } catch (_0x2206fc) {
      this.log("观看宝箱广告任务异常: " + _0x2206fc.message);
      return false;
    }
    return true;
  }
  async ["main"]() {
    await this.User_info();
    await this.Treasure_Box();
    await _0x1f47ce(_0x1ac2a5(3, 6) * 1000);
    let _0x41ee35 = 0;
    while (!this.stopFlag) {
      {
        const _0x585f0e = await this.User_info(false);
        if (!_0x585f0e) {
          if (this.stopFlag) break;
          _0x41ee35 += 1;
          if (_0x41ee35 >= 5) {
            this.log("连续失败过多，暂时停止该账号的广告任务", "warning");
            break;
          }
          await _0x1f47ce(_0x1ac2a5(10, 20) * 1000);
          continue;
        }
        _0x41ee35 = 0;
        const _0x5e1678 = await this.WatchAD();
        if (!_0x5e1678) break;
        await _0x1f47ce(_0x1ac2a5(15, 40) * 1000);
      }
    }
    await this.BoxAd();
    await this.watchTube();
  }
}
async function _0x305265() {
  const _0x508854 = await _0x409baf();
  if (!_0x508854) {
    console.log("❌ 系统环境检查未通过，程序终止运行");
    return;
  }
  const _0x50f6f6 = process.env[_0x248231];
  if (!_0x50f6f6) {
    {
      console.warn("请先设置环境变量[" + _0x248231 + "]");
      return;
    }
  }
  const _0x378aa5 = process.env.xfkm;
  if (!_0x378aa5 || !_0x378aa5.trim()) {
    console.error("未检测到环境变量[xfkm]，请先在青龙面板设置 xfkm 后再运行。");
    return;
  }
  if (_0x689540) {
    if (_0x15d73c) try {
      const _0x34f32e = await _0x15d73c.get("http://154.12.60.33:2424/release/xf/200gg.php", {
        "timeout": 10000
      });
      let _0xe4e2ab = _0x34f32e?.["data"] ?? "";
      Buffer.isBuffer(_0xe4e2ab) && (_0xe4e2ab = _0xe4e2ab.toString("utf8"));
      _0xe4e2ab = String(_0xe4e2ab).trim();
      _0xe4e2ab && _0xe4e2ab !== "0" && console.log(_0xe4e2ab + "\n");
    } catch (_0x35d0ed) {} else console.log("⚠️ axios模块不可用，无法获取公告信息");
  }
  if (_0x16b59a) {
    const _0x152ab3 = _0x1ac2a5(10, 60);
    console.log("已启用随机延时：" + _0x152ab3 + " 秒");
    await _0x1f47ce(_0x152ab3 * 1000);
  }
  const _0x32ac4a = _0xb8a900(_0x50f6f6);
  console.log("账号数量：" + _0x32ac4a.length);
  console.log("▶ 开始运行：" + _0x36f5bb + " " + _0x20c682);
  const _0x114398 = Date.now(),
    _0x301aa3 = parseInt(process.env.maxth || "1", 10);
  if (_0x1a00cb) {
    {
      const _0x3e5e1d = _0x1a00cb(Math.max(1, _0x301aa3));
      await Promise.all(_0x32ac4a.map((_0x4baf37, _0x1c4b86) => _0x3e5e1d(async () => {
        try {
          const _0x2c084d = new _0x33a232(_0x4baf37),
            _0xc67509 = await _0x2c084d.checkSock5();
          !_0xc67509.available ? _0x2c084d.log("代理不可用 错误信息: [" + _0xc67509.error + "]", "error") : _0xc67509.response_time != null && _0x2c084d.log("代理可用 响应时间: [" + _0xc67509.response_time + "秒]");
          await _0x2c084d.main();
        } catch (_0x126db7) {
          console.error("账号" + (_0x1c4b86 + 1) + "执行错误:", _0x126db7);
        }
      })));
    }
  } else {
    console.log("⚠️ 并发控制不可用，将使用顺序执行模式");
    console.log("💡 如需并发执行，请降级p-limit版本：npm install p-limit@6.1.0");
    for (let _0x2491dd = 0; _0x2491dd < _0x32ac4a.length; _0x2491dd++) {
      try {
        const _0xcc76f3 = new _0x33a232(_0x32ac4a[_0x2491dd]),
          _0x30e828 = await _0xcc76f3.checkSock5();
        if (!_0x30e828.available) _0xcc76f3.log("代理不可用 错误信息: [" + _0x30e828.error + "]", "error");else {
          _0x30e828.response_time != null && _0xcc76f3.log("代理可用 响应时间: [" + _0x30e828.response_time + "秒]");
        }
        await _0xcc76f3.main();
      } catch (_0x4e25ac) {
        console.error("账号" + (_0x2491dd + 1) + "执行错误:", _0x4e25ac);
      }
    }
  }
  const _0xb3376a = Date.now(),
    _0x296647 = (_0xb3376a - _0x114398) / 1000;
  console.log("\n■ 运行结束：" + _0x36f5bb);
  console.log("⏱ 总耗时：" + _0x296647.toFixed(2) + " 秒");
}
function _0xb8a900(_0x7c1f2c) {
  if (_0x7c1f2c.includes("\n")) return _0x7c1f2c.split("\n").filter(Boolean);
  if (_0x7c1f2c.includes("&")) {
    return _0x7c1f2c.split("&").filter(Boolean);
  }
  return [_0x7c1f2c];
}
require.main === module && _0x305265().catch(_0x383f3f => {
  console.error(_0x383f3f);
  process.exit(1);
});