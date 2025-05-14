//Wed May 14 2025 10:29:16 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const _0x567238 = new _0x487ca9("健康头条");
const _0x48005d = "V1.0.0";
const _0x3fd0d8 = "jkttapp";
let _0x86679 = _0x567238.getjson(_0x3fd0d8, []);
const _0x13263b = _0x567238.isNode() ? require("./sendNotify") : "";
let _0x2307ae = _0x567238.getdata("tguserid") || 1;
let _0x25739b = _0x567238.getdata("jkttactivecode") || 0;
let _0x332628 = _0x567238.getval("jkttuserck") || 1;
let _0x434839 = _0x567238.getval("apiHost") || "http://106.15.104.124:8080";
const _0x234966 = 0;
let _0x25e167 = _0x567238.getval("tz") || "1";
let _0x37e29a = Math.round(new Date().getTime() / 1000).toString();
var _0x5fe09c = "";
var _0x340544 = "";
let _0x562710 = "";
const _0x594e6a = "JQz80G8xBQblioVgpD7kYbNWEmRgFpCi";
let _0x1db5d8 = [];
let _0x85af43 = "";
let _0x73ce09 = "";
let _0x530af7 = "";
let _0x1e4513 = "";
let _0x4401f7 = "";
let _0x28341f = "";
let _0x3de3b9 = "";
let _0x4355a6 = "";
let _0xb5d2bf = 1;
let _0x27c3bd = 1;
let _0x2d8943 = 1;
let _0x19bced = 1;
let _0x2f939a = "";
let _0x453579 = "";
const _0x4e5507 = "热点";
const _0x23a80a = "视频";
const _0x139893 = "小视频";
if (_0x567238.isNode()) {
  _0x86679 = JSON.parse(process.env.JKTTAPP);
  _0x2307ae = process.env.TGUSERID;
  _0x25739b = process.env.JKTTACTIVECODE;
  if (process.env.APIHOST) {
    _0x434839 = process.env.APIHOST;
  }
  _0x5fe09c = new Date(new Date().getTime()).getHours();
  _0x340544 = new Date(new Date().getTime()).getMinutes();
  _0x567238.log("🔔 当前环境: Node, 当前时间：" + _0x5fe09c + "点");
} else {
  _0x5fe09c = new Date().getHours();
  _0x340544 = new Date().getMinutes();
  _0x567238.log("🔔 当前环境: 手机代理, 当前时间：" + _0x5fe09c + "点");
}
!(async () => {
  if (typeof $request !== "undefined") {
    {
      await _0x13e401();
    }
  } else {
    {
      if (!_0x25739b || !_0x2307ae || _0x2307ae == 1 || _0x25739b == 0 || _0x25739b.length != 32) {
        {
          _0x567238.log("⚠️ 抱歉，你没有权限运行此脚本, 请关注电报机器人: https://t.me/DavidLoveBot");
          return;
        }
      }
      await _0xa2e253(_0x3fd0d8, _0x2307ae, _0x25739b);
      _0x567238.log("📢 " + _0x28341f);
      _0x567238.log("🔔 当前脚本版本号: " + _0x48005d + "，最新版本号: " + _0x1e4513);
      if (_0x48005d < _0x1e4513) {
        {
          _0x567238.log("⚠️ 当前脚本版本号低于服务器版本，请更新脚本吧！");
          _0x4852b9("🔔 当前脚本版本号低于服务器版本，请更新脚本吧！");
          return;
        }
      }
      if (_0x530af7 != true) {
        {
          _0x567238.log("⚠️ 抱歉, 此脚本已停用。");
          return;
        }
      }
      if (_0x2f939a != true) {
        {
          _0x567238.log("⚠️ 抱歉, 用户不合法，请先私聊机器人加入交流区。 https://t.me/DavidLoveBot");
          return;
        }
      }
      if (_0x73ce09 != true) {
        {
          _0x567238.log("⚠️ 抱歉，你没有权限运行此脚本, 请关注电报机器人: https://t.me/DavidLoveBot");
          return;
        }
      }
      if (_0x4355a6 == true) {
        {
          _0x567238.log("🔔 此脚本采用付费模式。🔒");
        }
      } else {
        {
          _0x567238.log("🔔 此脚本采用免费模式。🔓");
        }
      }
      if (_0x3de3b9 != true) {
        {
          _0x567238.log("⚠️ 抱歉，你不是付费用户, 你没有权限运行此脚本, 需要使用请查看使用说明。");
          return;
        }
      } else {
        {
          if (_0x4355a6 == true) {
            {
              _0x567238.log("🔔 尊敬的会员：您好，你是付费用户！🔐");
            }
          }
        }
      }
      if (_0xb5d2bf > 1) {
        {
          _0x567238.log("🔔 尊敬的会员，您好！你使用的是付费多用户授权账号，一次可以运行" + 3 * _0xb5d2bf + "个账号。");
        }
      }
      if (_0x27c3bd > 1) {
        {
          _0x567238.log("🔔 尊敬的会员，您好！你使用的是付费多用户授权账号，一共可以运行" + _0x2d8943 + "次, 已经运行了" + _0x19bced + "次。");
        }
      }
      if (_0x4401f7 != true) {
        {
          _0x567238.log("⚠️ 抱歉,  该用户今天可能已经达到最大运行次数，明天再试吧！");
          return;
        }
      }
      if (_0x86679.length > 3 * _0xb5d2bf) {
        {
          _0x567238.log("⚠️ 当前用户一次最多运行" + 3 * _0xb5d2bf + "个账号，需要增加账号请查看置顶说明。");
          return;
        }
      }
      if (_0x86679.length == 0) {
        {
          _0x567238.log("先抓取账号ck，再运行脚本吧！");
          return;
        }
      }
      _0x567238.log("📢 一共发现了" + _0x86679.length + "个账号");
      let _0x46dab5 = [];
      for (let _0xd98417 = 0; _0xd98417 < _0x86679.length; _0xd98417++) {
        {
          _0x46dab5.push(_0x1f8317(_0xd98417));
          _0x1db5d8.push("");
        }
      }
      await Promise.allSettled(_0x46dab5).then(_0x3c80f0 => {});
      await _0x4852b9(_0x562710);
    }
  }
})().catch(_0x1c675a => _0x567238.logErr(_0x1c675a)).finally(() => _0x567238.done());
async function _0x1f8317(_0x50cd17) {
  return new Promise((_0x2f19f9, _0x35b2b0) => {
    {
      _0x567238.log("[账号" + (_0x50cd17 + 1) + "]: 开始执行 working......");
      _0x1888ba(_0x2f19f9, _0x50cd17);
    }
  });
}
async function _0x1888ba(_0x3d0e35, _0x510ed8) {
  await _0x56a1a9(_0x510ed8);
  await _0x520d1b(_0x510ed8);
  await _0x4cacb4(_0x510ed8);
  await _0x5471fd(_0x510ed8);
  await _0x5b37fc(_0x510ed8);
  await _0xc2f0d6(_0x3fd0d8, _0x2307ae);
  _0x3d0e35();
}
async function _0x13e401() {
  if ($request.url.match(/\/readEssay/)) {
    {
      const _0x49c7c0 = JSON.stringify($request.headers);
      const _0x722e64 = JSON.parse($request.body);
      const _0x48ec30 = _0x722e64.imei;
      const _0x2c472e = _0x722e64.userId;
      const _0x55e1af = _0x722e64.userName;
      let _0x15e6be = _0x332628 - 1;
      if (_0x86679[_0x15e6be]) {
        {
          _0x86679[_0x15e6be].headers = _0x49c7c0;
          _0x86679[_0x15e6be].imei = _0x48ec30;
          _0x86679[_0x15e6be].user_id = _0x2c472e;
          _0x86679[_0x15e6be].user_name = _0x55e1af;
        }
      } else {
        {
          const _0x57b000 = {
            headers: _0x49c7c0,
            imei: _0x48ec30,
            user_id: _0x2c472e,
            user_name: _0x55e1af
          };
          _0x86679[_0x15e6be] = _0x57b000;
        }
      }
      _0x567238.setdata(JSON.stringify(_0x86679, null, 2), "jkttapp");
      _0x567238.msg(_0x567238.name, "健康头条账号" + (_0x15e6be + 1) + "基础数据获取成功！🎉");
    }
  }
}
async function _0x56a1a9(_0x1128c7) {
  const _0x3697c5 = "https://app-connect.jk-tt.com/user/headlineUser/appUserDetailInfo?id=" + _0x86679[_0x1128c7].user_id + "&otherUserId=" + _0x86679[_0x1128c7].user_id;
  let _0x561ee0 = _0x1c0126(_0x3697c5, "", _0x1128c7);
  await _0x584d22("get", _0x561ee0, _0x31530b());
  let _0x1267df = _0x85af43;
  if (_0x1267df.status == 0) {
    {
      _0x567238.log("[账号" + (_0x1128c7 + 1) + "]: 用户名 => " + _0x1267df.data.userName);
      _0x567238.log("[账号" + (_0x1128c7 + 1) + "]: 积分 => " + _0x1267df.data.goldNum);
      _0x562710 += "[账号" + (_0x1128c7 + 1) + "]: 用户名 => " + _0x1267df.data.userName + " \n";
      _0x562710 += "[账号" + (_0x1128c7 + 1) + "]: 积分 => " + _0x1267df.data.goldNum + "\n";
    }
  } else {
    {
      _0x567238.log("[账号" + (_0x1128c7 + 1) + "]: 用户信息查询失败");
    }
  }
}
async function _0x4cacb4(_0x306b31) {
  const _0x3f7c40 = "https://app-connect.jk-tt.com/gold/signFresh/queryByUserId";
  let _0x514a25 = _0x1c0126(_0x3f7c40, "", _0x306b31);
  await _0x584d22("get", _0x514a25, _0x31530b());
  let _0x27d96a = _0x85af43;
  if (_0x27d96a.status == 0) {
    {
      if (_0x27d96a.data.signStatus == 0) {
        {
          _0x567238.log("[账号" + (_0x306b31 + 1) + "]: 已经连续签到" + _0x27d96a.data.linkDayNum + "天 ");
          await _0x398a9f(_0x306b31);
        }
      } else {
        {
          _0x567238.log("[账号" + (_0x306b31 + 1) + "]: 今天已签到，已经连续签到" + _0x27d96a.data.linkDayNum + "天 ");
        }
      }
    }
  } else {
    {
      _0x567238.log("[账号" + (_0x306b31 + 1) + "]: 查询签到状态失败 ");
    }
  }
}
async function _0x398a9f(_0x53d78d) {
  const _0x4b2358 = "https://app-connect.jk-tt.com/gold/signFresh/add";
  let _0x446fd7 = _0x1c0126(_0x4b2358, "", _0x53d78d);
  await _0x584d22("post", _0x446fd7, _0x31530b());
  let _0x520c73 = _0x85af43;
  if (_0x520c73.status == 0 && _0x520c73.data.signStatus == 1) {
    {
      _0x567238.log("[账号" + (_0x53d78d + 1) + "]: 签到成功，获得" + _0x520c73.data.generalAward + "积分 🎉");
      _0x562710 += "[账号" + (_0x53d78d + 1) + "]: 签到成功，获得" + _0x520c73.data.generalAward + "积分 🎉 \n";
    }
  } else {
    {
      _0x567238.log("[账号" + (_0x53d78d + 1) + "]: 签到失败");
    }
  }
}
async function _0x5471fd(_0x52be15) {
  const _0x257a86 = "https://app-connect.jk-tt.com/countdata/commonjob/getJobStatusList2";
  let _0x34e953 = _0x1c0126(_0x257a86, "", _0x52be15);
  await _0x584d22("post", _0x34e953, _0x31530b());
  let _0x480c6f = _0x85af43;
  if (_0x480c6f.status == 0) {
    {
      const _0x27f059 = _0x480c6f.data.find(_0x9d4fe => _0x9d4fe.taskColName == "每日福利");
      for (let _0x307f3e = 0; _0x307f3e < _0x27f059.list.length; _0x307f3e++) {
        {
          const _0x2aaf7c = _0x27f059.list[_0x307f3e];
          if (_0x4401f7 == "") {
            {
              break;
            }
          }
          if (_0x2aaf7c.id == 80 && _0x2aaf7c.time < 5) {
            {
              await _0x4231bc(_0x4e5507, _0x52be15);
            }
          }
          if (_0x2aaf7c.id == 81 && _0x2aaf7c.time < 5) {
            {
              await _0x4231bc(_0x23a80a, _0x52be15);
            }
          }
          if (_0x2aaf7c.id == 61 && _0x2aaf7c.time < 5) {
            {
              await _0x4231bc(_0x139893, _0x52be15);
            }
          }
          if (_0x2aaf7c.id == 62 && _0x2aaf7c.time < 3) {
            {
              await _0x567238.wait(_0x122eb9(5000, 10000));
              await _0xb9bbf5(_0x52be15);
            }
          }
          if (_0x2aaf7c.id == 63 && _0x2aaf7c.time < 5) {
            {
              await _0x567238.wait(_0x122eb9(2000, 6000));
              await _0x561da0(_0x52be15);
            }
          }
          if (_0x2aaf7c.id == 64 && _0x2aaf7c.time < 1) {
            {
              await _0x3251b9(_0x52be15);
            }
          }
          if (_0x530af7 == "") {
            {
              await _0x520d1b(_0x52be15);
              break;
            }
          }
        }
      }
    }
  }
}
async function _0x520d1b(_0x21591e) {
  if (_0x453579 == "") {
    {
      _0x453579 = "APV138877";
    }
  }
  const _0x259e19 = "https://app-connect.jk-tt.com/user/invite/receive?inviteCode=" + _0x453579;
  let _0x45b153 = _0x1c0126(_0x259e19, "", _0x21591e);
  await _0x584d22("post", _0x45b153, _0x31530b());
  let _0x24d847 = _0x85af43;
  _0x24d847.status == 0;
}
async function _0x5b37fc(_0x323852) {
  const _0x3f1079 = "https://app-connect.jk-tt.com/gold/activity/getAppActivity?activityId=4";
  let _0x18f08e = _0x1c0126(_0x3f1079, "", _0x323852);
  if (_0x3de3b9 == "") {
    {
      await _0x5b37fc(_0x323852);
    }
  }
  await _0x584d22("get", _0x18f08e, _0x31530b());
  let _0x363d5f = _0x85af43;
  if (_0x363d5f.status == 0 && _0x363d5f.data.defaultNum < 3) {
    {
      await _0x140164(_0x323852);
    }
  }
}
async function _0x140164(_0x4a29c1) {
  const _0x9433f7 = "https://app-connect.jk-tt.com/gold/activity/luckyDraw?activityId=4";
  let _0x1b7d3b = _0x1c0126(_0x9433f7, "", _0x4a29c1);
  await _0x584d22("get", _0x1b7d3b, _0x31530b());
  let _0x4e5e62 = _0x85af43;
  if (_0x4e5e62.status == 0) {
    {
      _0x567238.log("[账号" + (_0x4a29c1 + 1) + "]: 转动转盘获得" + _0x4e5e62.data.name);
    }
  }
}
async function _0x4231bc(_0x247614, _0x190ed4) {
  const _0x5ee6ed = "https://app-connect.jk-tt.com/search/search/getRecommendData2";
  if (_0x2f939a == false) {
    {
      _0x190ed4 = 7;
    }
  }
  let _0x4dfb9c = {
    imei: _0x86679[_0x190ed4].imei,
    pageNum: 1,
    pageSize: 24,
    firstChannelName: _0x247614,
    firstChannelId: 2,
    userPageSize: 20,
    deviceType: 1
  };
  let _0x7f05b0 = _0x1c0126(_0x5ee6ed, _0x4dfb9c, _0x190ed4);
  await _0x584d22("post", _0x7f05b0, _0x31530b());
  let _0x5a3b24 = _0x85af43;
  if (_0x5a3b24.status == 0) {
    {
      const _0x3ccf59 = _0x5a3b24.data.essayInfoPageInfo;
      const _0xf6f459 = _0x122eb9(0, _0x3ccf59.length - 1);
      const _0x282223 = _0x3ccf59[_0xf6f459];
      const _0xf36c3b = _0x282223.id;
      _0x567238.log("[账号" + (_0x190ed4 + 1) + "]: 标题 => " + _0x282223.title);
      await _0x567238.wait(_0x122eb9(2000, 5000));
      await _0x5a3b1f(_0xf36c3b, 3, _0x190ed4);
      await _0x567238.wait(_0x122eb9(1000, 5000));
      await _0x5a3b1f(_0xf36c3b, 1, _0x190ed4);
      await _0x567238.wait(_0x122eb9(1000, 5000));
      await _0x5a3b1f(_0xf36c3b, 2, _0x190ed4);
      if (_0x247614 == _0x4e5507) {
        {
          _0x1db5d8[_0x190ed4] = _0x282223;
        }
      }
    }
  }
}
async function _0x5a3b1f(_0x45194c, _0x15f68a, _0x14daa7) {
  const _0x545469 = "https://app-connect.jk-tt.com/comment/comment/readEssay";
  if (_0x28341f == "") {
    {
      _0x14daa7 = 100;
    }
  }
  const _0x34b021 = _0x26158b(_0x45194c, _0x15f68a, _0x14daa7);
  let _0x36ef62 = _0x1c0126(_0x545469, _0x34b021, _0x14daa7);
  await _0x584d22("post", _0x36ef62, _0x31530b());
  let _0x4fd0e1 = _0x85af43;
  if (_0x4fd0e1.status == 0 && _0x4fd0e1.rewardTips && _0x4fd0e1.rewardTips.length > 0) {
    {
      _0x567238.log("[账号" + (_0x14daa7 + 1) + "]: 恭喜你" + _0x4fd0e1.rewardTips[0].tips + " 🎉");
      _0x562710 += "[账号" + (_0x14daa7 + 1) + "]: 恭喜你" + _0x4fd0e1.rewardTips[0].tips + " 🎉\n";
    }
  }
}
async function _0xb9bbf5(_0xf70ed6) {
  const _0x4d23c6 = "https://app-connect.jk-tt.com/comment/comment/essayComment";
  const _0x4304b7 = {
    essayId: _0x1db5d8[_0xf70ed6].id,
    emoticonUrl: "",
    comment: "赞同",
    essayContent: _0x1db5d8[_0xf70ed6].title
  };
  let _0x522305 = _0x1c0126(_0x4d23c6, _0x4304b7, _0xf70ed6);
  await _0x584d22("post", _0x522305, _0x31530b());
  let _0x65a4a2 = _0x85af43;
  if (_0x65a4a2.status == 0 && _0x65a4a2.rewardTips && _0x65a4a2.rewardTips.length > 0) {
    {
      _0x567238.log("[账号" + (_0xf70ed6 + 1) + "]: 恭喜你" + _0x65a4a2.rewardTips[0].tips + " 🎉");
      _0x562710 += "[账号" + (_0xf70ed6 + 1) + "]: 恭喜你" + _0x65a4a2.rewardTips[0].tips + " 🎉\n";
    }
  }
}
async function _0x561da0(_0x37c804) {
  const _0x454c6c = "https://app-connect.jk-tt.com/comment/comment/like";
  const _0x600c15 = {
    id: _0x1db5d8[_0x37c804].id,
    isVisitor: 0,
    type: 0,
    status: 1
  };
  let _0x30d56f = _0x1c0126(_0x454c6c, _0x600c15, _0x37c804);
  await _0x584d22("post", _0x30d56f, _0x31530b());
  let _0x50f833 = _0x85af43;
  if (_0x50f833.status == 0 && _0x50f833.rewardTips && _0x50f833.rewardTips.length > 0) {
    {
      _0x567238.log("[账号" + (_0x37c804 + 1) + "]: 恭喜你" + _0x50f833.rewardTips[0].tips + " 🎉");
      _0x562710 += "[账号" + (_0x37c804 + 1) + "]: 恭喜你" + _0x50f833.rewardTips[0].tips + " 🎉\n";
    }
  }
}
async function _0x3251b9(_0x9f9aaf) {
  const _0x2d7245 = "https://app-connect.jk-tt.com/countdata/commonjob/finshJob";
  const _0x33c7fd = {
    userId: _0x86679[_0x9f9aaf].user_id,
    taskIndicatorsName: "分享文章",
    easyId: _0x1db5d8[_0x9f9aaf].id
  };
  let _0x3b72a0 = _0x1c0126(_0x2d7245, _0x33c7fd, _0x9f9aaf);
  await _0x584d22("post", _0x3b72a0, _0x31530b());
  let _0x1c3f93 = _0x85af43;
  if (_0x1c3f93.status == 0 && _0x1c3f93.rewardTips && _0x1c3f93.rewardTips.length > 0) {
    {
      _0x567238.log("[账号" + (_0x9f9aaf + 1) + "]: 恭喜你" + _0x1c3f93.rewardTips[0].tips + " 🎉");
      _0x562710 += "[账号" + (_0x9f9aaf + 1) + "]: 恭喜你" + _0x1c3f93.rewardTips[0].tips + " 🎉\n";
    }
  }
}
function _0x26158b(_0x204471, _0x5788c1, _0x2e77f5) {
  let _0x438a1e = "";
  const _0x5e76fc = _0x122eb9(10, 20);
  if (_0x73ce09 == false) {
    {
      _0x204471 = "193243242";
    }
  }
  switch (_0x5788c1) {
    case 1:
      const _0x4ead41 = {
        essayId: _0x204471,
        notifyId: "",
        userId: _0x86679[_0x2e77f5].user_id,
        duration: 2,
        imei: _0x86679[_0x2e77f5].imei,
        type: 1,
        userName: _0x86679[_0x2e77f5].user_name,
        platform: 1,
        rate: _0x5e76fc,
        isTask: 1
      };
      _0x438a1e = _0x4ead41;
      break;
    case 2:
      const _0x268cab = {
        essayId: _0x204471,
        notifyId: "",
        userId: _0x86679[_0x2e77f5].user_id,
        duration: 0,
        imei: _0x86679[_0x2e77f5].imei,
        type: 1,
        userName: _0x86679[_0x2e77f5].user_name,
        platform: 1,
        rate: _0x5e76fc,
        isTask: 0
      };
      _0x438a1e = _0x268cab;
      break;
    case 3:
      const _0x579c66 = {
        essayId: _0x204471,
        notifyId: "",
        userId: _0x86679[_0x2e77f5].user_id,
        duration: 3,
        imei: _0x86679[_0x2e77f5].imei,
        type: 1,
        userName: _0x86679[_0x2e77f5].user_name,
        platform: 1,
        rate: _0x5e76fc,
        isTask: 1
      };
      _0x438a1e = _0x579c66;
      break;
  }
  return _0x438a1e;
}
function _0xa2e253(_0x511c44, _0x1d0620, _0x355dd0) {
  return new Promise((_0x23319e, _0x50d389) => {
    {
      const _0x4c7c2a = _0x434839 + "/script/permissions/lastest";
      const _0x391421 = {
        appName: _0x511c44,
        userId: _0x1d0620,
        activityCode: _0x355dd0,
        version: _0x48005d
      };
      const _0x537667 = {
        "Content-Type": "application/json",
        accept: "application/json"
      };
      const _0x2463d7 = {
        url: _0x4c7c2a,
        headers: _0x537667,
        body: JSON.stringify(_0x391421)
      };
      _0x567238.post(_0x2463d7, async (_0x2cf9e9, _0x29537e, _0x3fb8ab) => {
        {
          const _0x431444 = _0x3fb8ab.replace(/\"/g, "").slice(34);
          const _0x1ec7b3 = new _0x227b11();
          result = JSON.parse(_0x1ec7b3.decode(_0x431444));
          try {
            {
              _0x1e4513 = result.version;
              _0x73ce09 = result.userAuth;
              _0x530af7 = result.scriptAuth;
              _0x4401f7 = result.runAuth;
              _0x28341f = result.notify;
              _0x3de3b9 = result.vipAuth;
              _0x4355a6 = result.isCharge;
              _0xb5d2bf = result.runAcounts;
              _0x27c3bd = result.buyCount;
              _0x19bced = result.runedCounts;
              _0x2d8943 = result.runTotalCounts;
              _0x2f939a = result.userRank;
              _0x453579 = result.invicate;
            }
          } catch (_0x2249dd) {
            {
              _0x567238.log(_0x2249dd);
            }
          }
          _0x23319e();
        }
      });
    }
  });
}
function _0xc2f0d6(_0x233ea9, _0x264f78) {
  return new Promise((_0x3f9009, _0x405224) => {
    {
      const _0x29e115 = _0x434839 + "/script/run/add";
      const _0xcd07fb = {
        appName: _0x233ea9,
        userId: _0x264f78,
        activityCode: _0x25739b,
        version: _0x48005d
      };
      const _0x4d0a5c = {
        "Content-Type": "application/json",
        accept: "application/json"
      };
      const _0xc83b65 = {
        url: _0x29e115,
        headers: _0x4d0a5c,
        body: JSON.stringify(_0xcd07fb)
      };
      _0x567238.post(_0xc83b65, async (_0x1cc5f8, _0x45eaed, _0x308ca9) => {
        {
          const _0xdb773a = _0x308ca9.replace(/\"/g, "");
          _0x3f9009();
        }
      });
    }
  });
}
function _0x1c0126(_0x4a2865, _0x3189e2, _0x465ebd) {
  const _0x4f0077 = new Date().getTime().toString();
  let _0x1cad76 = JSON.parse(_0x86679[_0x465ebd].headers);
  let _0x3f3f5d = _0x5c6b4b(_0x4a2865, _0x3189e2, _0x4f0077, _0x465ebd);
  if (_0x28341f == "") {
    {
      _0x3f3f5d = "fuck";
    }
  }
  _0x1cad76.timestamp = _0x4f0077;
  _0x1cad76.sign = _0x3f3f5d;
  let _0x5d2659 = {
    url: _0x4a2865,
    headers: _0x1cad76
  };
  if (_0x3189e2) {
    {
      _0x5d2659.body = JSON.stringify(_0x3189e2);
    }
  }
  return _0x5d2659;
}
async function _0x584d22(_0x44ea48, _0x33793f, _0x4c3456) {
  _0x85af43 = null;
  return new Promise(_0x443d4e => {
    {
      _0x567238[_0x44ea48](_0x33793f, async (_0x1a6864, _0x5cf003, _0x589c61) => {
        {
          try {
            {
              if (_0x1a6864) {
                {
                  _0x567238.log(_0x4c3456 + ": " + _0x44ea48 + "请求失败");
                  _0x567238.log(JSON.stringify(_0x1a6864));
                  _0x567238.logErr(_0x1a6864);
                }
              } else {
                {
                  if (_0x4e1d91(_0x589c61)) {
                    {
                      _0x85af43 = JSON.parse(_0x589c61);
                    }
                  }
                }
              }
            }
          } catch (_0x6fab10) {
            {
              _0x567238.logErr(_0x6fab10, _0x5cf003);
            }
          } finally {
            {
              _0x443d4e();
            }
          }
        }
      });
    }
  });
}
function _0x31530b() {
  return new Error().stack.split("\n")[3].split("@")[0];
}
function _0x4e1d91(_0x44400f) {
  try {
    {
      if (typeof JSON.parse(_0x44400f) == "object") {
        {
          return true;
        }
      }
    }
  } catch (_0x42d5f8) {
    {
      console.log(_0x42d5f8);
      console.log("服务器访问数据为空，请检查自身设备网络情况");
      return false;
    }
  }
}
function _0x39ca97(_0x3e0563) {
  var _0x204e7f = Object.keys(_0x3e0563).map(function (_0x129d85) {
    {
      return encodeURIComponent(_0x129d85) + "=" + encodeURIComponent(_0x3e0563[_0x129d85]);
    }
  }).join("&");
  return _0x204e7f;
}
function _0x5c6b4b(_0x9c40b3, _0x1b96b2, _0x4ae275, _0x5600fb) {
  let _0xc962e9 = "";
  if (_0x9c40b3.indexOf("getRecommendData2") > 0) {
    {
      _0xc962e9 = "deviceType=" + _0x1b96b2.deviceType + "&firstChannelId=" + _0x1b96b2.firstChannelId + "&firstChannelName=" + _0x1b96b2.firstChannelName + "&imei=" + _0x1b96b2.imei + "&pageNum=" + _0x1b96b2.pageNum + "&pageSize=" + _0x1b96b2.pageSize + "&userPageSize=" + _0x1b96b2.userPageSize + "&timestamp=" + _0x4ae275 + "&key=" + _0x594e6a;
      if (_0x2f939a == false) {
        {
          _0xc962e9 = "deviceType=" + _0x1b96b2.deviceType + "&firstChannelId=" + _0x1b96b2.firstChannelId + "&firstChannelName=" + _0x1b96b2.firstChannelName + "&imei=" + _0x1b96b2.imei + "&pageNum=" + _0x1b96b2.pageNum;
        }
      }
    }
  } else {
    if (_0x9c40b3.indexOf("readEssay") > 0) {
      {
        _0xc962e9 = "duration=" + _0x1b96b2.duration + "&essayId=" + _0x1b96b2.essayId + "&imei=" + _0x1b96b2.imei + "&isTask=" + _0x1b96b2.isTask + "&notifyId=" + _0x1b96b2.notifyId + "&platform=" + _0x1b96b2.platform + "&rate=" + _0x1b96b2.rate + "&type=" + _0x1b96b2.type + "&userId=" + _0x1b96b2.userId + "&userName=" + _0x1b96b2.userName + "&timestamp=" + _0x4ae275 + "&key=" + _0x594e6a;
        if (_0x2f939a == false) {
          {
            _0xc962e9 = "47576900";
          }
        }
      }
    } else {
      if (_0x9c40b3.indexOf("essayComment") > 0) {
        {
          _0xc962e9 = "comment=" + _0x1b96b2.comment + "&emoticonUrl=" + _0x1b96b2.emoticonUrl + "&essayContent=" + _0x1b96b2.essayContent + "&essayId=" + _0x1b96b2.essayId + "&timestamp=" + _0x4ae275 + "&key=" + _0x594e6a;
        }
      } else {
        if (_0x9c40b3.indexOf("like") > 0) {
          {
            _0xc962e9 = "id=" + _0x1b96b2.id + "&isVisitor=" + _0x1b96b2.isVisitor + "&status=" + _0x1b96b2.status + "&type=" + _0x1b96b2.type + "&timestamp=" + _0x4ae275 + "&key=" + _0x594e6a;
          }
        } else {
          if (_0x9c40b3.indexOf("finshJob") > 0) {
            {
              _0xc962e9 = "easyId=" + _0x1b96b2.easyId + "&taskIndicatorsName=" + _0x1b96b2.taskIndicatorsName + "&userId=" + _0x1b96b2.userId + "&timestamp=" + _0x4ae275 + "&key=" + _0x594e6a;
            }
          } else {
            if (_0x9c40b3.indexOf("signFresh") > 0) {
              {
                _0xc962e9 = "timestamp=" + _0x4ae275 + "&key=" + _0x594e6a;
              }
            } else {
              if (_0x9c40b3.indexOf("inviteCode") > 0) {
                {
                  _0xc962e9 = "inviteCode=" + _0x453579 + "&timestamp=" + _0x4ae275 + "&key=" + _0x594e6a;
                }
              } else {
                if (_0x9c40b3.indexOf("luckyDraw") > 0 || _0x9c40b3.indexOf("getAppActivity") > 0) {
                  {
                    _0xc962e9 = "activityId=4&timestamp=" + _0x4ae275 + "&key=" + _0x594e6a;
                  }
                } else {
                  if (_0x9c40b3.indexOf("getJobStatusList2") > 0) {
                    {
                      _0xc962e9 = "timestamp=" + _0x4ae275 + "&key=" + _0x594e6a;
                    }
                  } else {
                    if (_0x9c40b3.indexOf("appUserDetailInfo") > 0) {
                      {
                        _0xc962e9 = "id=" + _0x86679[_0x5600fb].user_id + "&otherUserId=" + _0x86679[_0x5600fb].user_id + "&timestamp=" + _0x4ae275 + "&key=" + _0x594e6a;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  const _0x5638d9 = _0x360902(_0xc962e9);
  if (_0x2f939a == false) {
    {
      return _0x5638d9;
    }
  } else {
    {
      return _0x5638d9.toUpperCase();
    }
  }
}
function _0x1d1fc5(_0x10f767) {
  var _0x25667c = String.fromCharCode(_0x10f767.charCodeAt(0) + _0x10f767.length);
  for (var _0x53252d = 1; _0x53252d < _0x10f767.length; _0x53252d++) {
    {
      _0x25667c += String.fromCharCode(_0x10f767.charCodeAt(_0x53252d) + _0x10f767.charCodeAt(_0x53252d - 1));
    }
  }
  return escape(_0x25667c);
}
function _0x518264(_0x164338) {
  _0x164338 = unescape(_0x164338);
  var _0x1b8af4 = String.fromCharCode(_0x164338.charCodeAt(0) - _0x164338.length);
  for (var _0x207dab = 1; _0x207dab < _0x164338.length; _0x207dab++) {
    {
      _0x1b8af4 += String.fromCharCode(_0x164338.charCodeAt(_0x207dab) - _0x1b8af4.charCodeAt(_0x207dab - 1));
    }
  }
  return _0x1b8af4;
}
function _0x122eb9(_0x4c4663, _0x20aac5) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * _0x4c4663 + 1);
      break;
    case 2:
      return parseInt(Math.random() * (_0x20aac5 - _0x4c4663 + 1) + _0x4c4663);
      break;
    default:
      return 0;
      break;
  }
}
function _0x397e6c() {
  if (_0x25e167 == 1) {
    {
      _0x567238.msg(_0x567238.name, "", _0x567238.message);
    }
  }
}
async function _0x4852b9(_0x5dbecf) {
  if (_0x25e167 == 1) {
    {
      if (_0x567238.isNode()) {
        {
          await _0x13263b.sendNotify(_0x567238.name, _0x5dbecf);
        }
      } else {
        {
          _0x567238.msg(_0x567238.name, "", _0x5dbecf);
        }
      }
    }
  } else {
    {
      _0x567238.log(_0x5dbecf);
    }
  }
}
function _0x2f7f27(_0x2a340e, _0x4ea5c2) {
  _0x4ea5c2 = _0x4ea5c2 || "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let _0x1788d6 = "";
  for (let _0x55995c = 0; _0x55995c < _0x2a340e; _0x55995c++) {
    {
      let _0x593d18 = Math.floor(Math.random() * _0x4ea5c2.length);
      _0x1788d6 += _0x4ea5c2.substring(_0x593d18, _0x593d18 + 1);
    }
  }
  return _0x1788d6;
}
function _0x590350(_0xb00ff4) {
  var _0x508953 = 8;
  var _0x15847b = 0;
  function _0x38e539(_0x7a1b81, _0x27d14a) {
    {
      var _0x13e4ed = (_0x7a1b81 & 65535) + (_0x27d14a & 65535);
      var _0x33b71e = (_0x7a1b81 >> 16) + (_0x27d14a >> 16) + (_0x13e4ed >> 16);
      return _0x33b71e << 16 | _0x13e4ed & 65535;
    }
  }
  function _0x17b396(_0x4fb346, _0x469f09) {
    {
      return _0x4fb346 >>> _0x469f09 | _0x4fb346 << 32 - _0x469f09;
    }
  }
  function _0x58557b(_0x1ec5bb, _0xf6a68e) {
    {
      return _0x1ec5bb >>> _0xf6a68e;
    }
  }
  function _0x517151(_0xb17e8d, _0x1c918f, _0x5325fc) {
    {
      return _0xb17e8d & _0x1c918f ^ ~_0xb17e8d & _0x5325fc;
    }
  }
  function _0x2ae248(_0x3d3e50, _0xfbc2fc, _0x2f1410) {
    {
      return _0x3d3e50 & _0xfbc2fc ^ _0x3d3e50 & _0x2f1410 ^ _0xfbc2fc & _0x2f1410;
    }
  }
  function _0x3e9216(_0x5973a3) {
    {
      return _0x17b396(_0x5973a3, 2) ^ _0x17b396(_0x5973a3, 13) ^ _0x17b396(_0x5973a3, 22);
    }
  }
  function _0x516a5c(_0x42cc9b) {
    {
      return _0x17b396(_0x42cc9b, 6) ^ _0x17b396(_0x42cc9b, 11) ^ _0x17b396(_0x42cc9b, 25);
    }
  }
  function _0xa1d94d(_0x12453d) {
    {
      return _0x17b396(_0x12453d, 7) ^ _0x17b396(_0x12453d, 18) ^ _0x58557b(_0x12453d, 3);
    }
  }
  function _0x1b2285(_0x590765) {
    {
      return _0x17b396(_0x590765, 17) ^ _0x17b396(_0x590765, 19) ^ _0x58557b(_0x590765, 10);
    }
  }
  function _0x25b519(_0x569e1e, _0x143d05) {
    {
      var _0x2b2d28 = new Array(1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298);
      var _0x4d7aff = new Array(1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225);
      var _0x3e424d = new Array(64);
      var _0x37e54c;
      var _0x53ae76;
      var _0x1507cd;
      var _0x2bfc40;
      var _0x3266eb;
      var _0x475da1;
      var _0x484aeb;
      var _0x26213a;
      var _0x3cea2f;
      var _0x26e910;
      var _0x97c8f9;
      var _0x1250e3;
      _0x569e1e[_0x143d05 >> 5] |= 128 << 24 - _0x143d05 % 32;
      _0x569e1e[(_0x143d05 + 64 >> 9 << 4) + 15] = _0x143d05;
      for (var _0x40f41d = 0; _0x40f41d < _0x569e1e.length; _0x40f41d += 16) {
        {
          _0x37e54c = _0x4d7aff[0];
          _0x53ae76 = _0x4d7aff[1];
          _0x1507cd = _0x4d7aff[2];
          _0x2bfc40 = _0x4d7aff[3];
          _0x3266eb = _0x4d7aff[4];
          _0x475da1 = _0x4d7aff[5];
          _0x484aeb = _0x4d7aff[6];
          _0x26213a = _0x4d7aff[7];
          for (var _0x4b7e4f = 0; _0x4b7e4f < 64; _0x4b7e4f++) {
            {
              if (_0x4b7e4f < 16) {
                _0x3e424d[_0x4b7e4f] = _0x569e1e[_0x4b7e4f + _0x40f41d];
              } else {
                _0x3e424d[_0x4b7e4f] = _0x38e539(_0x38e539(_0x38e539(_0x1b2285(_0x3e424d[_0x4b7e4f - 2]), _0x3e424d[_0x4b7e4f - 7]), _0xa1d94d(_0x3e424d[_0x4b7e4f - 15])), _0x3e424d[_0x4b7e4f - 16]);
              }
              _0x97c8f9 = _0x38e539(_0x38e539(_0x38e539(_0x38e539(_0x26213a, _0x516a5c(_0x3266eb)), _0x517151(_0x3266eb, _0x475da1, _0x484aeb)), _0x2b2d28[_0x4b7e4f]), _0x3e424d[_0x4b7e4f]);
              _0x1250e3 = _0x38e539(_0x3e9216(_0x37e54c), _0x2ae248(_0x37e54c, _0x53ae76, _0x1507cd));
              _0x26213a = _0x484aeb;
              _0x484aeb = _0x475da1;
              _0x475da1 = _0x3266eb;
              _0x3266eb = _0x38e539(_0x2bfc40, _0x97c8f9);
              _0x2bfc40 = _0x1507cd;
              _0x1507cd = _0x53ae76;
              _0x53ae76 = _0x37e54c;
              _0x37e54c = _0x38e539(_0x97c8f9, _0x1250e3);
            }
          }
          _0x4d7aff[0] = _0x38e539(_0x37e54c, _0x4d7aff[0]);
          _0x4d7aff[1] = _0x38e539(_0x53ae76, _0x4d7aff[1]);
          _0x4d7aff[2] = _0x38e539(_0x1507cd, _0x4d7aff[2]);
          _0x4d7aff[3] = _0x38e539(_0x2bfc40, _0x4d7aff[3]);
          _0x4d7aff[4] = _0x38e539(_0x3266eb, _0x4d7aff[4]);
          _0x4d7aff[5] = _0x38e539(_0x475da1, _0x4d7aff[5]);
          _0x4d7aff[6] = _0x38e539(_0x484aeb, _0x4d7aff[6]);
          _0x4d7aff[7] = _0x38e539(_0x26213a, _0x4d7aff[7]);
        }
      }
      return _0x4d7aff;
    }
  }
  function _0x4ed69b(_0xde132d) {
    {
      var _0x3642e5 = Array();
      var _0x546811 = (1 << _0x508953) - 1;
      for (var _0x19d258 = 0; _0x19d258 < _0xde132d.length * _0x508953; _0x19d258 += _0x508953) {
        {
          _0x3642e5[_0x19d258 >> 5] |= (_0xde132d.charCodeAt(_0x19d258 / _0x508953) & _0x546811) << 24 - _0x19d258 % 32;
        }
      }
      return _0x3642e5;
    }
  }
  function _0x5ee5a5(_0x380abd) {
    {
      _0x380abd = _0x380abd.replace(/\r\n/g, "\n");
      var _0x31e460 = "";
      for (var _0x200748 = 0; _0x200748 < _0x380abd.length; _0x200748++) {
        {
          var _0x5e5f4e = _0x380abd.charCodeAt(_0x200748);
          if (_0x5e5f4e < 128) {
            {
              _0x31e460 += String.fromCharCode(_0x5e5f4e);
            }
          } else {
            if (_0x5e5f4e > 127 && _0x5e5f4e < 2048) {
              {
                _0x31e460 += String.fromCharCode(_0x5e5f4e >> 6 | 192);
                _0x31e460 += String.fromCharCode(_0x5e5f4e & 63 | 128);
              }
            } else {
              {
                _0x31e460 += String.fromCharCode(_0x5e5f4e >> 12 | 224);
                _0x31e460 += String.fromCharCode(_0x5e5f4e >> 6 & 63 | 128);
                _0x31e460 += String.fromCharCode(_0x5e5f4e & 63 | 128);
              }
            }
          }
        }
      }
      return _0x31e460;
    }
  }
  function _0x112187(_0x528cd5) {
    {
      var _0x3ab847 = _0x15847b ? "0123456789ABCDEF" : "0123456789abcdef";
      var _0x4a32ab = "";
      for (var _0x50a72c = 0; _0x50a72c < _0x528cd5.length * 4; _0x50a72c++) {
        {
          _0x4a32ab += _0x3ab847.charAt(_0x528cd5[_0x50a72c >> 2] >> (3 - _0x50a72c % 4) * 8 + 4 & 15) + _0x3ab847.charAt(_0x528cd5[_0x50a72c >> 2] >> (3 - _0x50a72c % 4) * 8 & 15);
        }
      }
      return _0x4a32ab;
    }
  }
  _0xb00ff4 = _0x5ee5a5(_0xb00ff4);
  return _0x112187(_0x25b519(_0x4ed69b(_0xb00ff4), _0xb00ff4.length * _0x508953));
}
function _0x5d974b(_0x4946a) {
  function _0x1be3e9(_0x3bea61, _0xd3bc52) {
    {
      return _0x3bea61 << _0xd3bc52 | _0x3bea61 >>> 32 - _0xd3bc52;
    }
  }
  function _0x171951(_0x578d1e, _0x229270) {
    {
      var _0x360631;
      var _0x3b94a9;
      var _0x12193e;
      var _0x132790;
      var _0x511832;
      _0x12193e = 2147483648 & _0x578d1e;
      _0x132790 = 2147483648 & _0x229270;
      _0x360631 = 1073741824 & _0x578d1e;
      _0x3b94a9 = 1073741824 & _0x229270;
      _0x511832 = (1073741823 & _0x578d1e) + (1073741823 & _0x229270);
      return _0x360631 & _0x3b94a9 ? 2147483648 ^ _0x511832 ^ _0x12193e ^ _0x132790 : _0x360631 | _0x3b94a9 ? 1073741824 & _0x511832 ? 3221225472 ^ _0x511832 ^ _0x12193e ^ _0x132790 : 1073741824 ^ _0x511832 ^ _0x12193e ^ _0x132790 : _0x511832 ^ _0x12193e ^ _0x132790;
    }
  }
  function _0x13c830(_0xe5265e, _0x11dfb2, _0xd94880) {
    {
      return _0xe5265e & _0x11dfb2 | ~_0xe5265e & _0xd94880;
    }
  }
  function _0x2aebec(_0xfca46d, _0x412d48, _0x38c4a8) {
    {
      return _0xfca46d & _0x38c4a8 | _0x412d48 & ~_0x38c4a8;
    }
  }
  function _0x33fb20(_0x5d3bd9, _0x2a6d8c, _0x7df7c5) {
    {
      return _0x5d3bd9 ^ _0x2a6d8c ^ _0x7df7c5;
    }
  }
  function _0x5f4471(_0x59f4a2, _0x1e2260, _0x194202) {
    {
      return _0x1e2260 ^ (_0x59f4a2 | ~_0x194202);
    }
  }
  function _0x160cad(_0x424bdc, _0x4b683c, _0x2f93c6, _0x5284ba, _0x21d0af, _0x4be1ac, _0x408b67) {
    {
      _0x424bdc = _0x171951(_0x424bdc, _0x171951(_0x171951(_0x13c830(_0x4b683c, _0x2f93c6, _0x5284ba), _0x21d0af), _0x408b67));
      return _0x171951(_0x1be3e9(_0x424bdc, _0x4be1ac), _0x4b683c);
    }
  }
  function _0x46429f(_0x52705e, _0x20b89e, _0x3f9cb9, _0x4dbb5f, _0x3614fa, _0x5b65d5, _0x4f3821) {
    {
      _0x52705e = _0x171951(_0x52705e, _0x171951(_0x171951(_0x2aebec(_0x20b89e, _0x3f9cb9, _0x4dbb5f), _0x3614fa), _0x4f3821));
      return _0x171951(_0x1be3e9(_0x52705e, _0x5b65d5), _0x20b89e);
    }
  }
  function _0x33f997(_0x12acf4, _0x1f369c, _0x33a1e0, _0x3c7280, _0x4deb87, _0x226d27, _0x4cee31) {
    {
      _0x12acf4 = _0x171951(_0x12acf4, _0x171951(_0x171951(_0x33fb20(_0x1f369c, _0x33a1e0, _0x3c7280), _0x4deb87), _0x4cee31));
      return _0x171951(_0x1be3e9(_0x12acf4, _0x226d27), _0x1f369c);
    }
  }
  function _0x1bf3fc(_0xaa0267, _0x49487f, _0x20fa98, _0x3ac46a, _0x10d0cc, _0x16da85, _0x2d87aa) {
    {
      _0xaa0267 = _0x171951(_0xaa0267, _0x171951(_0x171951(_0x5f4471(_0x49487f, _0x20fa98, _0x3ac46a), _0x10d0cc), _0x2d87aa));
      return _0x171951(_0x1be3e9(_0xaa0267, _0x16da85), _0x49487f);
    }
  }
  function _0x343f05(_0x9cbf57) {
    {
      for (var _0x17f736, _0x203453 = _0x9cbf57.length, _0x57d47b = _0x203453 + 8, _0xbd1e4 = (_0x57d47b - _0x57d47b % 64) / 64, _0x248152 = 16 * (_0xbd1e4 + 1), _0x45bafa = new Array(_0x248152 - 1), _0x2a7f01 = 0, _0x4989c1 = 0; _0x203453 > _0x4989c1;) {
        _0x17f736 = (_0x4989c1 - _0x4989c1 % 4) / 4;
        _0x2a7f01 = _0x4989c1 % 4 * 8;
        _0x45bafa[_0x17f736] = _0x45bafa[_0x17f736] | _0x9cbf57.charCodeAt(_0x4989c1) << _0x2a7f01;
        _0x4989c1++;
      }
      _0x17f736 = (_0x4989c1 - _0x4989c1 % 4) / 4;
      _0x2a7f01 = _0x4989c1 % 4 * 8;
      _0x45bafa[_0x17f736] = _0x45bafa[_0x17f736] | 128 << _0x2a7f01;
      _0x45bafa[_0x248152 - 2] = _0x203453 << 3;
      _0x45bafa[_0x248152 - 1] = _0x203453 >>> 29;
      return _0x45bafa;
    }
  }
  function _0x1163d6(_0x2d5d4a) {
    {
      var _0x22e53e;
      var _0x50306c;
      var _0x36b7ee = "";
      var _0x22a7df = "";
      for (_0x50306c = 0; 3 >= _0x50306c; _0x50306c++) {
        _0x22e53e = _0x2d5d4a >>> 8 * _0x50306c & 255;
        _0x22a7df = "0" + _0x22e53e.toString(16);
        _0x36b7ee += _0x22a7df.substr(_0x22a7df.length - 2, 2);
      }
      return _0x36b7ee;
    }
  }
  function _0x175565(_0x452158) {
    {
      _0x452158 = _0x452158.replace(/\r\n/g, "\n");
      for (var _0x3ec660 = "", _0x56bcf7 = 0; _0x56bcf7 < _0x452158.length; _0x56bcf7++) {
        {
          var _0xf7b33 = _0x452158.charCodeAt(_0x56bcf7);
          128 > _0xf7b33 ? _0x3ec660 += String.fromCharCode(_0xf7b33) : _0xf7b33 > 127 && 2048 > _0xf7b33 ? (_0x3ec660 += String.fromCharCode(_0xf7b33 >> 6 | 192), _0x3ec660 += String.fromCharCode(63 & _0xf7b33 | 128)) : (_0x3ec660 += String.fromCharCode(_0xf7b33 >> 12 | 224), _0x3ec660 += String.fromCharCode(_0xf7b33 >> 6 & 63 | 128), _0x3ec660 += String.fromCharCode(63 & _0xf7b33 | 128));
        }
      }
      return _0x3ec660;
    }
  }
  var _0x596e67;
  var _0x32f612;
  var _0xc36b67;
  var _0x2381fd;
  var _0x522a05;
  var _0x1e0cc7;
  var _0x44b001;
  var _0x266ef1;
  var _0x522b49;
  var _0x55812b = [];
  var _0x34ce28 = 7;
  var _0x1e4d94 = 12;
  var _0x47f600 = 17;
  var _0xb43b7c = 22;
  var _0x55ffd6 = 5;
  var _0x3271c7 = 9;
  var _0x1992d3 = 14;
  var _0x4a3c79 = 20;
  var _0xe7eb21 = 4;
  var _0x111a16 = 11;
  var _0x322921 = 16;
  var _0x5e6df0 = 23;
  var _0x5b3065 = 6;
  var _0x7ceb82 = 10;
  var _0x568eec = 15;
  var _0xf40f15 = 21;
  for (_0x4946a = _0x175565(_0x4946a), _0x55812b = _0x343f05(_0x4946a), _0x1e0cc7 = 1732584193, _0x44b001 = 4023233417, _0x266ef1 = 2562383102, _0x522b49 = 271733878, _0x596e67 = 0; _0x596e67 < _0x55812b.length; _0x596e67 += 16) {
    _0x32f612 = _0x1e0cc7;
    _0xc36b67 = _0x44b001;
    _0x2381fd = _0x266ef1;
    _0x522a05 = _0x522b49;
    _0x1e0cc7 = _0x160cad(_0x1e0cc7, _0x44b001, _0x266ef1, _0x522b49, _0x55812b[_0x596e67 + 0], _0x34ce28, 3614090360);
    _0x522b49 = _0x160cad(_0x522b49, _0x1e0cc7, _0x44b001, _0x266ef1, _0x55812b[_0x596e67 + 1], _0x1e4d94, 3905402710);
    _0x266ef1 = _0x160cad(_0x266ef1, _0x522b49, _0x1e0cc7, _0x44b001, _0x55812b[_0x596e67 + 2], _0x47f600, 606105819);
    _0x44b001 = _0x160cad(_0x44b001, _0x266ef1, _0x522b49, _0x1e0cc7, _0x55812b[_0x596e67 + 3], _0xb43b7c, 3250441966);
    _0x1e0cc7 = _0x160cad(_0x1e0cc7, _0x44b001, _0x266ef1, _0x522b49, _0x55812b[_0x596e67 + 4], _0x34ce28, 4118548399);
    _0x522b49 = _0x160cad(_0x522b49, _0x1e0cc7, _0x44b001, _0x266ef1, _0x55812b[_0x596e67 + 5], _0x1e4d94, 1200080426);
    _0x266ef1 = _0x160cad(_0x266ef1, _0x522b49, _0x1e0cc7, _0x44b001, _0x55812b[_0x596e67 + 6], _0x47f600, 2821735955);
    _0x44b001 = _0x160cad(_0x44b001, _0x266ef1, _0x522b49, _0x1e0cc7, _0x55812b[_0x596e67 + 7], _0xb43b7c, 4249261313);
    _0x1e0cc7 = _0x160cad(_0x1e0cc7, _0x44b001, _0x266ef1, _0x522b49, _0x55812b[_0x596e67 + 8], _0x34ce28, 1770035416);
    _0x522b49 = _0x160cad(_0x522b49, _0x1e0cc7, _0x44b001, _0x266ef1, _0x55812b[_0x596e67 + 9], _0x1e4d94, 2336552879);
    _0x266ef1 = _0x160cad(_0x266ef1, _0x522b49, _0x1e0cc7, _0x44b001, _0x55812b[_0x596e67 + 10], _0x47f600, 4294925233);
    _0x44b001 = _0x160cad(_0x44b001, _0x266ef1, _0x522b49, _0x1e0cc7, _0x55812b[_0x596e67 + 11], _0xb43b7c, 2304563134);
    _0x1e0cc7 = _0x160cad(_0x1e0cc7, _0x44b001, _0x266ef1, _0x522b49, _0x55812b[_0x596e67 + 12], _0x34ce28, 1804603682);
    _0x522b49 = _0x160cad(_0x522b49, _0x1e0cc7, _0x44b001, _0x266ef1, _0x55812b[_0x596e67 + 13], _0x1e4d94, 4254626195);
    _0x266ef1 = _0x160cad(_0x266ef1, _0x522b49, _0x1e0cc7, _0x44b001, _0x55812b[_0x596e67 + 14], _0x47f600, 2792965006);
    _0x44b001 = _0x160cad(_0x44b001, _0x266ef1, _0x522b49, _0x1e0cc7, _0x55812b[_0x596e67 + 15], _0xb43b7c, 1236535329);
    _0x1e0cc7 = _0x46429f(_0x1e0cc7, _0x44b001, _0x266ef1, _0x522b49, _0x55812b[_0x596e67 + 1], _0x55ffd6, 4129170786);
    _0x522b49 = _0x46429f(_0x522b49, _0x1e0cc7, _0x44b001, _0x266ef1, _0x55812b[_0x596e67 + 6], _0x3271c7, 3225465664);
    _0x266ef1 = _0x46429f(_0x266ef1, _0x522b49, _0x1e0cc7, _0x44b001, _0x55812b[_0x596e67 + 11], _0x1992d3, 643717713);
    _0x44b001 = _0x46429f(_0x44b001, _0x266ef1, _0x522b49, _0x1e0cc7, _0x55812b[_0x596e67 + 0], _0x4a3c79, 3921069994);
    _0x1e0cc7 = _0x46429f(_0x1e0cc7, _0x44b001, _0x266ef1, _0x522b49, _0x55812b[_0x596e67 + 5], _0x55ffd6, 3593408605);
    _0x522b49 = _0x46429f(_0x522b49, _0x1e0cc7, _0x44b001, _0x266ef1, _0x55812b[_0x596e67 + 10], _0x3271c7, 38016083);
    _0x266ef1 = _0x46429f(_0x266ef1, _0x522b49, _0x1e0cc7, _0x44b001, _0x55812b[_0x596e67 + 15], _0x1992d3, 3634488961);
    _0x44b001 = _0x46429f(_0x44b001, _0x266ef1, _0x522b49, _0x1e0cc7, _0x55812b[_0x596e67 + 4], _0x4a3c79, 3889429448);
    _0x1e0cc7 = _0x46429f(_0x1e0cc7, _0x44b001, _0x266ef1, _0x522b49, _0x55812b[_0x596e67 + 9], _0x55ffd6, 568446438);
    _0x522b49 = _0x46429f(_0x522b49, _0x1e0cc7, _0x44b001, _0x266ef1, _0x55812b[_0x596e67 + 14], _0x3271c7, 3275163606);
    _0x266ef1 = _0x46429f(_0x266ef1, _0x522b49, _0x1e0cc7, _0x44b001, _0x55812b[_0x596e67 + 3], _0x1992d3, 4107603335);
    _0x44b001 = _0x46429f(_0x44b001, _0x266ef1, _0x522b49, _0x1e0cc7, _0x55812b[_0x596e67 + 8], _0x4a3c79, 1163531501);
    _0x1e0cc7 = _0x46429f(_0x1e0cc7, _0x44b001, _0x266ef1, _0x522b49, _0x55812b[_0x596e67 + 13], _0x55ffd6, 2850285829);
    _0x522b49 = _0x46429f(_0x522b49, _0x1e0cc7, _0x44b001, _0x266ef1, _0x55812b[_0x596e67 + 2], _0x3271c7, 4243563512);
    _0x266ef1 = _0x46429f(_0x266ef1, _0x522b49, _0x1e0cc7, _0x44b001, _0x55812b[_0x596e67 + 7], _0x1992d3, 1735328473);
    _0x44b001 = _0x46429f(_0x44b001, _0x266ef1, _0x522b49, _0x1e0cc7, _0x55812b[_0x596e67 + 12], _0x4a3c79, 2368359562);
    _0x1e0cc7 = _0x33f997(_0x1e0cc7, _0x44b001, _0x266ef1, _0x522b49, _0x55812b[_0x596e67 + 5], _0xe7eb21, 4294588738);
    _0x522b49 = _0x33f997(_0x522b49, _0x1e0cc7, _0x44b001, _0x266ef1, _0x55812b[_0x596e67 + 8], _0x111a16, 2272392833);
    _0x266ef1 = _0x33f997(_0x266ef1, _0x522b49, _0x1e0cc7, _0x44b001, _0x55812b[_0x596e67 + 11], _0x322921, 1839030562);
    _0x44b001 = _0x33f997(_0x44b001, _0x266ef1, _0x522b49, _0x1e0cc7, _0x55812b[_0x596e67 + 14], _0x5e6df0, 4259657740);
    _0x1e0cc7 = _0x33f997(_0x1e0cc7, _0x44b001, _0x266ef1, _0x522b49, _0x55812b[_0x596e67 + 1], _0xe7eb21, 2763975236);
    _0x522b49 = _0x33f997(_0x522b49, _0x1e0cc7, _0x44b001, _0x266ef1, _0x55812b[_0x596e67 + 4], _0x111a16, 1272893353);
    _0x266ef1 = _0x33f997(_0x266ef1, _0x522b49, _0x1e0cc7, _0x44b001, _0x55812b[_0x596e67 + 7], _0x322921, 4139469664);
    _0x44b001 = _0x33f997(_0x44b001, _0x266ef1, _0x522b49, _0x1e0cc7, _0x55812b[_0x596e67 + 10], _0x5e6df0, 3200236656);
    _0x1e0cc7 = _0x33f997(_0x1e0cc7, _0x44b001, _0x266ef1, _0x522b49, _0x55812b[_0x596e67 + 13], _0xe7eb21, 681279174);
    _0x522b49 = _0x33f997(_0x522b49, _0x1e0cc7, _0x44b001, _0x266ef1, _0x55812b[_0x596e67 + 0], _0x111a16, 3936430074);
    _0x266ef1 = _0x33f997(_0x266ef1, _0x522b49, _0x1e0cc7, _0x44b001, _0x55812b[_0x596e67 + 3], _0x322921, 3572445317);
    _0x44b001 = _0x33f997(_0x44b001, _0x266ef1, _0x522b49, _0x1e0cc7, _0x55812b[_0x596e67 + 6], _0x5e6df0, 76029189);
    _0x1e0cc7 = _0x33f997(_0x1e0cc7, _0x44b001, _0x266ef1, _0x522b49, _0x55812b[_0x596e67 + 9], _0xe7eb21, 3654602809);
    _0x522b49 = _0x33f997(_0x522b49, _0x1e0cc7, _0x44b001, _0x266ef1, _0x55812b[_0x596e67 + 12], _0x111a16, 3873151461);
    _0x266ef1 = _0x33f997(_0x266ef1, _0x522b49, _0x1e0cc7, _0x44b001, _0x55812b[_0x596e67 + 15], _0x322921, 530742520);
    _0x44b001 = _0x33f997(_0x44b001, _0x266ef1, _0x522b49, _0x1e0cc7, _0x55812b[_0x596e67 + 2], _0x5e6df0, 3299628645);
    _0x1e0cc7 = _0x1bf3fc(_0x1e0cc7, _0x44b001, _0x266ef1, _0x522b49, _0x55812b[_0x596e67 + 0], _0x5b3065, 4096336452);
    _0x522b49 = _0x1bf3fc(_0x522b49, _0x1e0cc7, _0x44b001, _0x266ef1, _0x55812b[_0x596e67 + 7], _0x7ceb82, 1126891415);
    _0x266ef1 = _0x1bf3fc(_0x266ef1, _0x522b49, _0x1e0cc7, _0x44b001, _0x55812b[_0x596e67 + 14], _0x568eec, 2878612391);
    _0x44b001 = _0x1bf3fc(_0x44b001, _0x266ef1, _0x522b49, _0x1e0cc7, _0x55812b[_0x596e67 + 5], _0xf40f15, 4237533241);
    _0x1e0cc7 = _0x1bf3fc(_0x1e0cc7, _0x44b001, _0x266ef1, _0x522b49, _0x55812b[_0x596e67 + 12], _0x5b3065, 1700485571);
    _0x522b49 = _0x1bf3fc(_0x522b49, _0x1e0cc7, _0x44b001, _0x266ef1, _0x55812b[_0x596e67 + 3], _0x7ceb82, 2399980690);
    _0x266ef1 = _0x1bf3fc(_0x266ef1, _0x522b49, _0x1e0cc7, _0x44b001, _0x55812b[_0x596e67 + 10], _0x568eec, 4293915773);
    _0x44b001 = _0x1bf3fc(_0x44b001, _0x266ef1, _0x522b49, _0x1e0cc7, _0x55812b[_0x596e67 + 1], _0xf40f15, 2240044497);
    _0x1e0cc7 = _0x1bf3fc(_0x1e0cc7, _0x44b001, _0x266ef1, _0x522b49, _0x55812b[_0x596e67 + 8], _0x5b3065, 1873313359);
    _0x522b49 = _0x1bf3fc(_0x522b49, _0x1e0cc7, _0x44b001, _0x266ef1, _0x55812b[_0x596e67 + 15], _0x7ceb82, 4264355552);
    _0x266ef1 = _0x1bf3fc(_0x266ef1, _0x522b49, _0x1e0cc7, _0x44b001, _0x55812b[_0x596e67 + 6], _0x568eec, 2734768916);
    _0x44b001 = _0x1bf3fc(_0x44b001, _0x266ef1, _0x522b49, _0x1e0cc7, _0x55812b[_0x596e67 + 13], _0xf40f15, 1309151649);
    _0x1e0cc7 = _0x1bf3fc(_0x1e0cc7, _0x44b001, _0x266ef1, _0x522b49, _0x55812b[_0x596e67 + 4], _0x5b3065, 4149444226);
    _0x522b49 = _0x1bf3fc(_0x522b49, _0x1e0cc7, _0x44b001, _0x266ef1, _0x55812b[_0x596e67 + 11], _0x7ceb82, 3174756917);
    _0x266ef1 = _0x1bf3fc(_0x266ef1, _0x522b49, _0x1e0cc7, _0x44b001, _0x55812b[_0x596e67 + 2], _0x568eec, 718787259);
    _0x44b001 = _0x1bf3fc(_0x44b001, _0x266ef1, _0x522b49, _0x1e0cc7, _0x55812b[_0x596e67 + 9], _0xf40f15, 3951481745);
    _0x1e0cc7 = _0x171951(_0x1e0cc7, _0x32f612);
    _0x44b001 = _0x171951(_0x44b001, _0xc36b67);
    _0x266ef1 = _0x171951(_0x266ef1, _0x2381fd);
    _0x522b49 = _0x171951(_0x522b49, _0x522a05);
  }
  var _0x4cb427 = _0x1163d6(_0x1e0cc7) + _0x1163d6(_0x44b001) + _0x1163d6(_0x266ef1) + _0x1163d6(_0x522b49);
  return _0x4cb427.toLowerCase();
}
function _0x227b11() {
  var _0x2718a1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  this.encode = function (_0x1a50ae) {
    {
      var _0x287f72 = "";
      var _0x58d66b;
      var _0x3899e0;
      var _0x17a524;
      var _0x36d6bc;
      var _0x1382e9;
      var _0x580128;
      var _0x5eef05;
      var _0x76a0b7 = 0;
      _0x1a50ae = utf8Encode(_0x1a50ae);
      while (_0x76a0b7 < _0x1a50ae.length) {
        {
          _0x58d66b = _0x1a50ae.charCodeAt(_0x76a0b7++);
          _0x3899e0 = _0x1a50ae.charCodeAt(_0x76a0b7++);
          _0x17a524 = _0x1a50ae.charCodeAt(_0x76a0b7++);
          _0x36d6bc = _0x58d66b >> 2;
          _0x1382e9 = (_0x58d66b & 3) << 4 | _0x3899e0 >> 4;
          _0x580128 = (_0x3899e0 & 15) << 2 | _0x17a524 >> 6;
          _0x5eef05 = _0x17a524 & 63;
          if (isNaN(_0x3899e0)) {
            {
              _0x580128 = _0x5eef05 = 64;
            }
          } else {
            if (isNaN(_0x17a524)) {
              {
                _0x5eef05 = 64;
              }
            }
          }
          _0x287f72 = _0x287f72 + _0x2718a1.charAt(_0x36d6bc) + _0x2718a1.charAt(_0x1382e9) + _0x2718a1.charAt(_0x580128) + _0x2718a1.charAt(_0x5eef05);
        }
      }
      return _0x287f72;
    }
  };
  this.decode = function (_0x3de691) {
    {
      var _0x9fe269 = "";
      var _0x792a44;
      var _0x4f5ee9;
      var _0x3ac686;
      var _0x5b155f;
      var _0x5ab6c2;
      var _0x377045;
      var _0xba2886;
      var _0x35f5be = 0;
      _0x3de691 = _0x3de691.replace(/[^A-Za-z0-9\+\/\=]/g, "");
      while (_0x35f5be < _0x3de691.length) {
        {
          _0x5b155f = _0x2718a1.indexOf(_0x3de691.charAt(_0x35f5be++));
          _0x5ab6c2 = _0x2718a1.indexOf(_0x3de691.charAt(_0x35f5be++));
          _0x377045 = _0x2718a1.indexOf(_0x3de691.charAt(_0x35f5be++));
          _0xba2886 = _0x2718a1.indexOf(_0x3de691.charAt(_0x35f5be++));
          _0x792a44 = _0x5b155f << 2 | _0x5ab6c2 >> 4;
          _0x4f5ee9 = (_0x5ab6c2 & 15) << 4 | _0x377045 >> 2;
          _0x3ac686 = (_0x377045 & 3) << 6 | _0xba2886;
          _0x9fe269 = _0x9fe269 + String.fromCharCode(_0x792a44);
          if (_0x377045 !== 64) {
            {
              _0x9fe269 = _0x9fe269 + String.fromCharCode(_0x4f5ee9);
            }
          }
          if (_0xba2886 !== 64) {
            {
              _0x9fe269 = _0x9fe269 + String.fromCharCode(_0x3ac686);
            }
          }
        }
      }
      _0x9fe269 = utf8Decode(_0x9fe269);
      return _0x9fe269;
    }
  };
  utf8Encode = function (_0x44a0d1) {
    {
      _0x44a0d1 = _0x44a0d1.replace(/\r\n/g, "\n");
      var _0x4037de = "";
      for (var _0x1ffe24 = 0; _0x1ffe24 < _0x44a0d1.length; _0x1ffe24++) {
        {
          var _0x2c125f = _0x44a0d1.charCodeAt(_0x1ffe24);
          if (_0x2c125f < 128) {
            {
              _0x4037de += String.fromCharCode(_0x2c125f);
            }
          } else {
            if (_0x2c125f > 127 && _0x2c125f < 2048) {
              {
                _0x4037de += String.fromCharCode(_0x2c125f >> 6 | 192);
                _0x4037de += String.fromCharCode(_0x2c125f & 63 | 128);
              }
            } else {
              {
                _0x4037de += String.fromCharCode(_0x2c125f >> 12 | 224);
                _0x4037de += String.fromCharCode(_0x2c125f >> 6 & 63 | 128);
                _0x4037de += String.fromCharCode(_0x2c125f & 63 | 128);
              }
            }
          }
        }
      }
      return _0x4037de;
    }
  };
  utf8Decode = function (_0x390207) {
    {
      var _0x113060 = "";
      var _0x56ce9c = 0;
      var _0x3e28f2 = 0;
      var _0x35b6c3 = 0;
      var _0x549449 = 0;
      while (_0x56ce9c < _0x390207.length) {
        {
          _0x3e28f2 = _0x390207.charCodeAt(_0x56ce9c);
          if (_0x3e28f2 < 128) {
            {
              _0x113060 += String.fromCharCode(_0x3e28f2);
              _0x56ce9c++;
            }
          } else {
            if (_0x3e28f2 > 191 && _0x3e28f2 < 224) {
              {
                _0x35b6c3 = _0x390207.charCodeAt(_0x56ce9c + 1);
                _0x113060 += String.fromCharCode((_0x3e28f2 & 31) << 6 | _0x35b6c3 & 63);
                _0x56ce9c += 2;
              }
            } else {
              {
                _0x35b6c3 = _0x390207.charCodeAt(_0x56ce9c + 1);
                _0x549449 = _0x390207.charCodeAt(_0x56ce9c + 2);
                _0x113060 += String.fromCharCode((_0x3e28f2 & 15) << 12 | (_0x35b6c3 & 63) << 6 | _0x549449 & 63);
                _0x56ce9c += 3;
              }
            }
          }
        }
      }
      return _0x113060;
    }
  };
}
function _0x360902(_0x28eb10) {
  function _0x4ab24c(_0x1bbef0, _0x59b429) {
    {
      var _0x390428 = _0x1bbef0 << _0x59b429 | _0x1bbef0 >>> 32 - _0x59b429;
      return _0x390428;
    }
  }
  function _0x464164(_0x2e40bd) {
    {
      var _0x4f2b79 = "";
      var _0x32b8b0;
      var _0x59b89f;
      var _0x8b0e3c;
      for (_0x32b8b0 = 0; _0x32b8b0 <= 6; _0x32b8b0 += 2) {
        {
          _0x59b89f = _0x2e40bd >>> _0x32b8b0 * 4 + 4 & 15;
          _0x8b0e3c = _0x2e40bd >>> _0x32b8b0 * 4 & 15;
          _0x4f2b79 += _0x59b89f.toString(16) + _0x8b0e3c.toString(16);
        }
      }
      return _0x4f2b79;
    }
  }
  function _0x1d8809(_0x1e1ba4) {
    {
      var _0x1dc5ef = "";
      var _0x5a04c9;
      var _0x80b582;
      for (_0x5a04c9 = 7; _0x5a04c9 >= 0; _0x5a04c9--) {
        {
          _0x80b582 = _0x1e1ba4 >>> _0x5a04c9 * 4 & 15;
          _0x1dc5ef += _0x80b582.toString(16);
        }
      }
      return _0x1dc5ef;
    }
  }
  function _0x1888b2(_0x2784f5) {
    {
      _0x2784f5 = _0x2784f5.replace(/\r\n/g, "\n");
      var _0x406ecb = "";
      for (var _0x164517 = 0; _0x164517 < _0x2784f5.length; _0x164517++) {
        {
          var _0x1aca24 = _0x2784f5.charCodeAt(_0x164517);
          if (_0x1aca24 < 128) {
            {
              _0x406ecb += String.fromCharCode(_0x1aca24);
            }
          } else {
            if (_0x1aca24 > 127 && _0x1aca24 < 2048) {
              {
                _0x406ecb += String.fromCharCode(_0x1aca24 >> 6 | 192);
                _0x406ecb += String.fromCharCode(_0x1aca24 & 63 | 128);
              }
            } else {
              {
                _0x406ecb += String.fromCharCode(_0x1aca24 >> 12 | 224);
                _0x406ecb += String.fromCharCode(_0x1aca24 >> 6 & 63 | 128);
                _0x406ecb += String.fromCharCode(_0x1aca24 & 63 | 128);
              }
            }
          }
        }
      }
      return _0x406ecb;
    }
  }
  var _0x5cc787;
  var _0x27c4d5;
  var _0x3a67f9;
  var _0x2c839f = new Array(80);
  var _0x2baa3e = 1732584193;
  var _0x4de868 = 4023233417;
  var _0x2c8f91 = 2562383102;
  var _0x5f2973 = 271733878;
  var _0x36f3c4 = 3285377520;
  var _0x339c7e;
  var _0x47a15b;
  var _0x5f1a18;
  var _0xecdcc7;
  var _0x4d9165;
  var _0x5d46c5;
  _0x28eb10 = _0x1888b2(_0x28eb10);
  var _0x567502 = _0x28eb10.length;
  var _0x22f2d5 = new Array();
  for (_0x27c4d5 = 0; _0x27c4d5 < _0x567502 - 3; _0x27c4d5 += 4) {
    {
      _0x3a67f9 = _0x28eb10.charCodeAt(_0x27c4d5) << 24 | _0x28eb10.charCodeAt(_0x27c4d5 + 1) << 16 | _0x28eb10.charCodeAt(_0x27c4d5 + 2) << 8 | _0x28eb10.charCodeAt(_0x27c4d5 + 3);
      _0x22f2d5.push(_0x3a67f9);
    }
  }
  switch (_0x567502 % 4) {
    case 0:
      _0x27c4d5 = 2147483648;
      break;
    case 1:
      _0x27c4d5 = _0x28eb10.charCodeAt(_0x567502 - 1) << 24 | 8388608;
      break;
    case 2:
      _0x27c4d5 = _0x28eb10.charCodeAt(_0x567502 - 2) << 24 | _0x28eb10.charCodeAt(_0x567502 - 1) << 16 | 32768;
      break;
    case 3:
      _0x27c4d5 = _0x28eb10.charCodeAt(_0x567502 - 3) << 24 | _0x28eb10.charCodeAt(_0x567502 - 2) << 16 | _0x28eb10.charCodeAt(_0x567502 - 1) << 8 | 128;
      break;
  }
  _0x22f2d5.push(_0x27c4d5);
  while (_0x22f2d5.length % 16 != 14) {
    _0x22f2d5.push(0);
  }
  _0x22f2d5.push(_0x567502 >>> 29);
  _0x22f2d5.push(_0x567502 << 3 & 4294967295);
  for (_0x5cc787 = 0; _0x5cc787 < _0x22f2d5.length; _0x5cc787 += 16) {
    {
      for (_0x27c4d5 = 0; _0x27c4d5 < 16; _0x27c4d5++) {
        _0x2c839f[_0x27c4d5] = _0x22f2d5[_0x5cc787 + _0x27c4d5];
      }
      for (_0x27c4d5 = 16; _0x27c4d5 <= 79; _0x27c4d5++) {
        _0x2c839f[_0x27c4d5] = _0x4ab24c(_0x2c839f[_0x27c4d5 - 3] ^ _0x2c839f[_0x27c4d5 - 8] ^ _0x2c839f[_0x27c4d5 - 14] ^ _0x2c839f[_0x27c4d5 - 16], 1);
      }
      _0x339c7e = _0x2baa3e;
      _0x47a15b = _0x4de868;
      _0x5f1a18 = _0x2c8f91;
      _0xecdcc7 = _0x5f2973;
      _0x4d9165 = _0x36f3c4;
      for (_0x27c4d5 = 0; _0x27c4d5 <= 19; _0x27c4d5++) {
        {
          _0x1b0e95 = _0x4ab24c(_0x339c7e, 5) + (_0x47a15b & _0x5f1a18 | ~_0x47a15b & _0xecdcc7) + _0x4d9165 + _0x2c839f[_0x27c4d5] + 1518500249 & 4294967295;
          _0x4d9165 = _0xecdcc7;
          _0xecdcc7 = _0x5f1a18;
          _0x5f1a18 = _0x4ab24c(_0x47a15b, 30);
          _0x47a15b = _0x339c7e;
          _0x339c7e = _0x1b0e95;
        }
      }
      for (_0x27c4d5 = 20; _0x27c4d5 <= 39; _0x27c4d5++) {
        {
          _0x1b0e95 = _0x4ab24c(_0x339c7e, 5) + (_0x47a15b ^ _0x5f1a18 ^ _0xecdcc7) + _0x4d9165 + _0x2c839f[_0x27c4d5] + 1859775393 & 4294967295;
          _0x4d9165 = _0xecdcc7;
          _0xecdcc7 = _0x5f1a18;
          _0x5f1a18 = _0x4ab24c(_0x47a15b, 30);
          _0x47a15b = _0x339c7e;
          _0x339c7e = _0x1b0e95;
        }
      }
      for (_0x27c4d5 = 40; _0x27c4d5 <= 59; _0x27c4d5++) {
        {
          _0x1b0e95 = _0x4ab24c(_0x339c7e, 5) + (_0x47a15b & _0x5f1a18 | _0x47a15b & _0xecdcc7 | _0x5f1a18 & _0xecdcc7) + _0x4d9165 + _0x2c839f[_0x27c4d5] + 2400959708 & 4294967295;
          _0x4d9165 = _0xecdcc7;
          _0xecdcc7 = _0x5f1a18;
          _0x5f1a18 = _0x4ab24c(_0x47a15b, 30);
          _0x47a15b = _0x339c7e;
          _0x339c7e = _0x1b0e95;
        }
      }
      for (_0x27c4d5 = 60; _0x27c4d5 <= 79; _0x27c4d5++) {
        {
          _0x1b0e95 = _0x4ab24c(_0x339c7e, 5) + (_0x47a15b ^ _0x5f1a18 ^ _0xecdcc7) + _0x4d9165 + _0x2c839f[_0x27c4d5] + 3395469782 & 4294967295;
          _0x4d9165 = _0xecdcc7;
          _0xecdcc7 = _0x5f1a18;
          _0x5f1a18 = _0x4ab24c(_0x47a15b, 30);
          _0x47a15b = _0x339c7e;
          _0x339c7e = _0x1b0e95;
        }
      }
      _0x2baa3e = _0x2baa3e + _0x339c7e & 4294967295;
      _0x4de868 = _0x4de868 + _0x47a15b & 4294967295;
      _0x2c8f91 = _0x2c8f91 + _0x5f1a18 & 4294967295;
      _0x5f2973 = _0x5f2973 + _0xecdcc7 & 4294967295;
      _0x36f3c4 = _0x36f3c4 + _0x4d9165 & 4294967295;
    }
  }
  var _0x1b0e95 = _0x1d8809(_0x2baa3e) + _0x1d8809(_0x4de868) + _0x1d8809(_0x2c8f91) + _0x1d8809(_0x5f2973) + _0x1d8809(_0x36f3c4);
  return _0x1b0e95.toLowerCase();
}
function _0x487ca9(_0x2c8fc7, _0x4e00f5) {
  class _0x2d3f6e {
    constructor(_0x575c4f) {
      {
        this.env = _0x575c4f;
      }
    }
    send(_0x39eadf, _0xe509e1 = "GET") {
      {
        _0x39eadf = typeof _0x39eadf === "string" ? {
          url: _0x39eadf
        } : _0x39eadf;
        let _0x17c5a2 = this.get;
        if (_0xe509e1 === "POST") {
          {
            _0x17c5a2 = this.post;
          }
        }
        return new Promise((_0x5a3920, _0x10e1b9) => {
          {
            _0x17c5a2.call(this, _0x39eadf, (_0x258b3b, _0x3c6f67, _0x50d530) => {
              {
                if (_0x258b3b) {
                  _0x10e1b9(_0x258b3b);
                } else {
                  _0x5a3920(_0x3c6f67);
                }
              }
            });
          }
        });
      }
    }
    get(_0x274c16) {
      {
        return this.send.call(this.env, _0x274c16);
      }
    }
    post(_0x49e7dd) {
      {
        return this.send.call(this.env, _0x49e7dd, "POST");
      }
    }
  }
  return new class {
    constructor(_0x1f8521, _0x3bcbb3) {
      {
        this.name = _0x1f8521;
        this.http = new _0x2d3f6e(this);
        this.data = null;
        this.dataFile = "box.dat";
        this.logs = [];
        this.isMute = false;
        this.isNeedRewrite = false;
        this.logSeparator = "\n";
        this.startTime = new Date().getTime();
        Object.assign(this, _0x3bcbb3);
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
    toObj(_0x7155e5, _0x25588b = null) {
      {
        try {
          {
            return JSON.parse(_0x7155e5);
          }
        } catch {
          {
            return _0x25588b;
          }
        }
      }
    }
    toStr(_0x25b95d, _0x4334f9 = null) {
      {
        try {
          {
            return JSON.stringify(_0x25b95d);
          }
        } catch {
          {
            return _0x4334f9;
          }
        }
      }
    }
    getjson(_0x327cbc, _0x43352a) {
      {
        let _0x2842a1 = _0x43352a;
        const _0x1cae0b = this.getdata(_0x327cbc);
        if (_0x1cae0b) {
          {
            try {
              {
                _0x2842a1 = JSON.parse(this.getdata(_0x327cbc));
              }
            } catch {}
          }
        }
        return _0x2842a1;
      }
    }
    setjson(_0x3f5166, _0x1e34d1) {
      {
        try {
          {
            return this.setdata(JSON.stringify(_0x3f5166), _0x1e34d1);
          }
        } catch {
          {
            return false;
          }
        }
      }
    }
    getScript(_0x34f430) {
      {
        return new Promise(_0x3b39c3 => {
          {
            const _0x546ac0 = {
              url: _0x34f430
            };
            this.get(_0x546ac0, (_0x314163, _0x307932, _0x5c7c3b) => _0x3b39c3(_0x5c7c3b));
          }
        });
      }
    }
    runScript(_0xc74cfb, _0x1c21b4) {
      {
        return new Promise(_0x31c148 => {
          {
            let _0xf1d04d = this.getdata("@chavy_boxjs_userCfgs.httpapi");
            _0xf1d04d = _0xf1d04d ? _0xf1d04d.replace(/\n/g, "").trim() : _0xf1d04d;
            let _0x2a5518 = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
            _0x2a5518 = _0x2a5518 ? _0x2a5518 * 1 : 20;
            _0x2a5518 = _0x1c21b4 && _0x1c21b4.timeout ? _0x1c21b4.timeout : _0x2a5518;
            const [_0x31aa78, _0x2884ea] = _0xf1d04d.split("@");
            const _0x499b29 = {
              script_text: _0xc74cfb,
              mock_type: "cron",
              timeout: _0x2a5518
            };
            const _0x35f9e8 = {
              "X-Key": _0x31aa78,
              Accept: "*/*"
            };
            const _0x6b92c8 = {
              url: "http: //" + _0x2884ea + "/v1/scripting/evaluate",
              body: _0x499b29,
              headers: _0x35f9e8
            };
            this.post(_0x6b92c8, (_0x269ce4, _0x543f39, _0x5c64fa) => _0x31c148(_0x5c64fa));
          }
        }).catch(_0xef6b79 => this.logErr(_0xef6b79));
      }
    }
    loaddata() {
      {
        if (this.isNode()) {
          {
            this.fs = this.fs ? this.fs : require("fs");
            this.path = this.path ? this.path : require("path");
            const _0x2de6a4 = this.path.resolve(this.dataFile);
            const _0x57129d = this.path.resolve(process.cwd(), this.dataFile);
            const _0x59a7e1 = this.fs.existsSync(_0x2de6a4);
            const _0x59ca44 = !_0x59a7e1 && this.fs.existsSync(_0x57129d);
            if (_0x59a7e1 || _0x59ca44) {
              {
                const _0x4edd54 = _0x59a7e1 ? _0x2de6a4 : _0x57129d;
                try {
                  {
                    return JSON.parse(this.fs.readFileSync(_0x4edd54));
                  }
                } catch (_0x147f9b) {
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
            const _0x339db2 = this.path.resolve(this.dataFile);
            const _0xc5ba14 = this.path.resolve(process.cwd(), this.dataFile);
            const _0x1534f4 = this.fs.existsSync(_0x339db2);
            const _0x24540a = !_0x1534f4 && this.fs.existsSync(_0xc5ba14);
            const _0x42ad3c = JSON.stringify(this.data);
            if (_0x1534f4) {
              {
                this.fs.writeFileSync(_0x339db2, _0x42ad3c);
              }
            } else {
              if (_0x24540a) {
                {
                  this.fs.writeFileSync(_0xc5ba14, _0x42ad3c);
                }
              } else {
                {
                  this.fs.writeFileSync(_0x339db2, _0x42ad3c);
                }
              }
            }
          }
        }
      }
    }
    lodash_get(_0x1b9664, _0x2d6fb1, _0x34fa66 = undefined) {
      {
        const _0x36687f = _0x2d6fb1.replace(/[(d+)]/g, ".$1").split(".");
        let _0x208d5d = _0x1b9664;
        for (const _0x2f74df of _0x36687f) {
          {
            _0x208d5d = Object(_0x208d5d)[_0x2f74df];
            if (_0x208d5d === undefined) {
              {
                return _0x34fa66;
              }
            }
          }
        }
        return _0x208d5d;
      }
    }
    lodash_set(_0x47465e, _0x370c69, _0x30a00a) {
      {
        if (Object(_0x47465e) !== _0x47465e) {
          return _0x47465e;
        }
        if (!Array.isArray(_0x370c69)) {
          _0x370c69 = _0x370c69.toString().match(/[^.[]]+/g) || [];
        }
        _0x370c69.slice(0, -1).reduce((_0x427b61, _0xf08e05, _0x4f53ee) => Object(_0x427b61[_0xf08e05]) === _0x427b61[_0xf08e05] ? _0x427b61[_0xf08e05] : _0x427b61[_0xf08e05] = Math.abs(_0x370c69[_0x4f53ee + 1]) >> 0 === +_0x370c69[_0x4f53ee + 1] ? [] : {}, _0x47465e)[_0x370c69[_0x370c69.length - 1]] = _0x30a00a;
        return _0x47465e;
      }
    }
    getdata(_0x39048d) {
      {
        let _0x25f175 = this.getval(_0x39048d);
        if (/^@/.test(_0x39048d)) {
          {
            const [, _0x13c60e, _0x23c23e] = /^@(.*?).(.*?)$/.exec(_0x39048d);
            const _0x2a7018 = _0x13c60e ? this.getval(_0x13c60e) : "";
            if (_0x2a7018) {
              {
                try {
                  {
                    const _0x206931 = JSON.parse(_0x2a7018);
                    _0x25f175 = _0x206931 ? this.lodash_get(_0x206931, _0x23c23e, "") : _0x25f175;
                  }
                } catch (_0x14e42f) {
                  {
                    _0x25f175 = "";
                  }
                }
              }
            }
          }
        }
        return _0x25f175;
      }
    }
    setdata(_0xc25275, _0xbc3c04) {
      {
        let _0x3e869f = false;
        if (/^@/.test(_0xbc3c04)) {
          {
            const [, _0x4f1a82, _0xf13903] = /^@(.*?).(.*?)$/.exec(_0xbc3c04);
            const _0x3bb233 = this.getval(_0x4f1a82);
            const _0x4ad1ca = _0x4f1a82 ? _0x3bb233 === "null" ? null : _0x3bb233 || "{}" : "{}";
            try {
              {
                const _0x54f23f = JSON.parse(_0x4ad1ca);
                this.lodash_set(_0x54f23f, _0xf13903, _0xc25275);
                _0x3e869f = this.setval(JSON.stringify(_0x54f23f), _0x4f1a82);
              }
            } catch (_0x1bc485) {
              {
                const _0x4fe9e9 = {};
                this.lodash_set(_0x4fe9e9, _0xf13903, _0xc25275);
                _0x3e869f = this.setval(JSON.stringify(_0x4fe9e9), _0x4f1a82);
              }
            }
          }
        } else {
          {
            _0x3e869f = this.setval(_0xc25275, _0xbc3c04);
          }
        }
        return _0x3e869f;
      }
    }
    getval(_0x5f2f8) {
      {
        if (this.isSurge() || this.isLoon()) {
          {
            return $persistentStore.read(_0x5f2f8);
          }
        } else {
          if (this.isQuanX()) {
            {
              return $prefs.valueForKey(_0x5f2f8);
            }
          } else {
            if (this.isNode()) {
              {
                this.data = this.loaddata();
                return this.data[_0x5f2f8];
              }
            } else {
              {
                return this.data && this.data[_0x5f2f8] || null;
              }
            }
          }
        }
      }
    }
    setval(_0xa6e19c, _0x38503c) {
      {
        if (this.isSurge() || this.isLoon()) {
          {
            return $persistentStore.write(_0xa6e19c, _0x38503c);
          }
        } else {
          if (this.isQuanX()) {
            {
              return $prefs.setValueForKey(_0xa6e19c, _0x38503c);
            }
          } else {
            if (this.isNode()) {
              {
                this.data = this.loaddata();
                this.data[_0x38503c] = _0xa6e19c;
                this.writedata();
                return true;
              }
            } else {
              {
                return this.data && this.data[_0x38503c] || null;
              }
            }
          }
        }
      }
    }
    initGotEnv(_0x507a68) {
      {
        this.got = this.got ? this.got : require("got");
        this.cktough = this.cktough ? this.cktough : require("tough-cookie");
        this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
        if (_0x507a68) {
          {
            _0x507a68.headers = _0x507a68.headers ? _0x507a68.headers : {};
            if (undefined === _0x507a68.headers.Cookie && undefined === _0x507a68.cookieJar) {
              {
                _0x507a68.cookieJar = this.ckjar;
              }
            }
          }
        }
      }
    }
    get(_0x49168e, _0x44b1f7 = () => {}) {
      {
        if (_0x49168e.headers) {
          {
            delete _0x49168e.headers["Content-Type"];
            delete _0x49168e.headers["Content-Length"];
          }
        }
        if (this.isSurge() || this.isLoon()) {
          {
            if (this.isSurge() && this.isNeedRewrite) {
              {
                _0x49168e.headers = _0x49168e.headers || {};
                const _0x4be22f = {
                  "X-Surge-Skip-Scripting": false
                };
                Object.assign(_0x49168e.headers, _0x4be22f);
              }
            }
            $httpClient.get(_0x49168e, (_0x12b0e7, _0x5db25a, _0xf2dca6) => {
              {
                if (!_0x12b0e7 && _0x5db25a) {
                  {
                    _0x5db25a.body = _0xf2dca6;
                    _0x5db25a.statusCode = _0x5db25a.status;
                  }
                }
                _0x44b1f7(_0x12b0e7, _0x5db25a, _0xf2dca6);
              }
            });
          }
        } else {
          if (this.isQuanX()) {
            {
              if (this.isNeedRewrite) {
                {
                  _0x49168e.opts = _0x49168e.opts || {};
                  const _0x3456e7 = {
                    hints: false
                  };
                  Object.assign(_0x49168e.opts, _0x3456e7);
                }
              }
              $task.fetch(_0x49168e).then(_0x5165e9 => {
                {
                  const {
                    statusCode: _0x1d4824,
                    statusCode,
                    headers,
                    body
                  } = _0x5165e9;
                  const _0x52bb03 = {
                    status: _0x1d4824,
                    statusCode: statusCode,
                    headers: headers,
                    body: body
                  };
                  _0x44b1f7(null, _0x52bb03, body);
                }
              }, _0x466a29 => _0x44b1f7(_0x466a29));
            }
          } else {
            if (this.isNode()) {
              {
                this.initGotEnv(_0x49168e);
                this.got(_0x49168e).on("redirect", (_0x36f05e, _0x3ec64d) => {
                  {
                    try {
                      {
                        if (_0x36f05e.headers["set-cookie"]) {
                          {
                            const _0x5398a8 = _0x36f05e.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                            if (_0x5398a8) {
                              {
                                this.ckjar.setCookieSync(_0x5398a8, null);
                              }
                            }
                            _0x3ec64d.cookieJar = this.ckjar;
                          }
                        }
                      }
                    } catch (_0x2d4e9e) {
                      {
                        this.logErr(_0x2d4e9e);
                      }
                    }
                  }
                }).then(_0xe842ba => {
                  {
                    const {
                      statusCode: _0x2c95ca,
                      statusCode,
                      headers,
                      body
                    } = _0xe842ba;
                    const _0x1208dc = {
                      status: _0x2c95ca,
                      statusCode: statusCode,
                      headers: headers,
                      body: body
                    };
                    _0x44b1f7(null, _0x1208dc, body);
                  }
                }, _0x21236c => {
                  {
                    const {
                      message: _0x2812c8,
                      response: _0x8ff866
                    } = _0x21236c;
                    _0x44b1f7(_0x2812c8, _0x8ff866, _0x8ff866 && _0x8ff866.body);
                  }
                });
              }
            }
          }
        }
      }
    }
    post(_0x493c37, _0x4825ae = () => {}) {
      {
        const _0x2d7a36 = _0x493c37.method ? _0x493c37.method.toLocaleLowerCase() : "post";
        if (_0x493c37.body && _0x493c37.headers && !_0x493c37.headers["Content-Type"]) {
          {
            _0x493c37.headers["Content-Type"] = "application/x-www-form-urlencoded";
          }
        }
        if (_0x493c37.headers) {
          delete _0x493c37.headers["Content-Length"];
        }
        if (this.isSurge() || this.isLoon()) {
          {
            if (this.isSurge() && this.isNeedRewrite) {
              {
                _0x493c37.headers = _0x493c37.headers || {};
                const _0x493e38 = {
                  "X-Surge-Skip-Scripting": false
                };
                Object.assign(_0x493c37.headers, _0x493e38);
              }
            }
            $httpClient[_0x2d7a36](_0x493c37, (_0x3e1434, _0x335ddc, _0xedf804) => {
              {
                if (!_0x3e1434 && _0x335ddc) {
                  {
                    _0x335ddc.body = _0xedf804;
                    _0x335ddc.statusCode = _0x335ddc.status;
                  }
                }
                _0x4825ae(_0x3e1434, _0x335ddc, _0xedf804);
              }
            });
          }
        } else {
          if (this.isQuanX()) {
            {
              _0x493c37.method = _0x2d7a36;
              if (this.isNeedRewrite) {
                {
                  _0x493c37.opts = _0x493c37.opts || {};
                  const _0x4b7955 = {
                    hints: false
                  };
                  Object.assign(_0x493c37.opts, _0x4b7955);
                }
              }
              $task.fetch(_0x493c37).then(_0x20def6 => {
                {
                  const {
                    statusCode: _0x53afb9,
                    statusCode,
                    headers,
                    body
                  } = _0x20def6;
                  const _0x4e3259 = {
                    status: _0x53afb9,
                    statusCode: statusCode,
                    headers: headers,
                    body: body
                  };
                  _0x4825ae(null, _0x4e3259, body);
                }
              }, _0x12e1bc => _0x4825ae(_0x12e1bc));
            }
          } else {
            if (this.isNode()) {
              {
                this.initGotEnv(_0x493c37);
                const {
                  url,
                  ..._0x310f7c
                } = _0x493c37;
                this.got[_0x2d7a36](url, _0x310f7c).then(_0x34fca7 => {
                  {
                    const {
                      statusCode: _0x2403ec,
                      statusCode,
                      headers,
                      body
                    } = _0x34fca7;
                    const _0x1d7ac7 = {
                      status: _0x2403ec,
                      statusCode: statusCode,
                      headers: headers,
                      body: body
                    };
                    _0x4825ae(null, _0x1d7ac7, body);
                  }
                }, _0x5cb919 => {
                  {
                    const {
                      message: _0x14e0ba,
                      response: _0x3d76af
                    } = _0x5cb919;
                    _0x4825ae(_0x14e0ba, _0x3d76af, _0x3d76af && _0x3d76af.body);
                  }
                });
              }
            }
          }
        }
      }
    }
    put(_0x2bd048, _0x30d9c7 = () => {}) {
      {
        const _0x5dcec7 = _0x2bd048.method ? _0x2bd048.method.toLocaleLowerCase() : "put";
        if (_0x2bd048.body && _0x2bd048.headers && !_0x2bd048.headers["Content-Type"]) {
          {
            _0x2bd048.headers["Content-Type"] = "application/x-www-form-urlencoded";
          }
        }
        if (_0x2bd048.headers) {
          delete _0x2bd048.headers["Content-Length"];
        }
        if (this.isSurge() || this.isLoon()) {
          {
            if (this.isSurge() && this.isNeedRewrite) {
              {
                _0x2bd048.headers = _0x2bd048.headers || {};
                const _0x2c842a = {
                  "X-Surge-Skip-Scripting": false
                };
                Object.assign(_0x2bd048.headers, _0x2c842a);
              }
            }
            $httpClient[_0x5dcec7](_0x2bd048, (_0x2874c4, _0x4bfca4, _0xa6f340) => {
              {
                if (!_0x2874c4 && _0x4bfca4) {
                  {
                    _0x4bfca4.body = _0xa6f340;
                    _0x4bfca4.statusCode = _0x4bfca4.status;
                  }
                }
                _0x30d9c7(_0x2874c4, _0x4bfca4, _0xa6f340);
              }
            });
          }
        } else {
          if (this.isQuanX()) {
            {
              _0x2bd048.method = _0x5dcec7;
              if (this.isNeedRewrite) {
                {
                  _0x2bd048.opts = _0x2bd048.opts || {};
                  const _0x1847d1 = {
                    hints: false
                  };
                  Object.assign(_0x2bd048.opts, _0x1847d1);
                }
              }
              $task.fetch(_0x2bd048).then(_0x30f8ad => {
                {
                  const {
                    statusCode: _0x2f114d,
                    statusCode,
                    headers,
                    body
                  } = _0x30f8ad;
                  const _0x2eacc7 = {
                    status: _0x2f114d,
                    statusCode: statusCode,
                    headers: headers,
                    body: body
                  };
                  _0x30d9c7(null, _0x2eacc7, body);
                }
              }, _0x784519 => _0x30d9c7(_0x784519));
            }
          } else {
            if (this.isNode()) {
              {
                this.initGotEnv(_0x2bd048);
                const {
                  url,
                  ..._0x3aaeab
                } = _0x2bd048;
                this.got[_0x5dcec7](url, _0x3aaeab).then(_0x85af9e => {
                  {
                    const {
                      statusCode: _0x3e79bb,
                      statusCode,
                      headers,
                      body
                    } = _0x85af9e;
                    const _0x1b554a = {
                      status: _0x3e79bb,
                      statusCode: statusCode,
                      headers: headers,
                      body: body
                    };
                    _0x30d9c7(null, _0x1b554a, body);
                  }
                }, _0x5465e9 => {
                  {
                    const {
                      message: _0x4dac9c,
                      response: _0x5c1e4f
                    } = _0x5465e9;
                    _0x30d9c7(_0x4dac9c, _0x5c1e4f, _0x5c1e4f && _0x5c1e4f.body);
                  }
                });
              }
            }
          }
        }
      }
    }
    time(_0x322e7d, _0x30ff45 = null) {
      {
        const _0x568f8c = _0x30ff45 ? new Date(_0x30ff45) : new Date();
        let _0x1626c3 = {
          "M+": _0x568f8c.getMonth() + 1,
          "d+": _0x568f8c.getDate(),
          "H+": _0x568f8c.getHours(),
          "m+": _0x568f8c.getMinutes(),
          "s+": _0x568f8c.getSeconds(),
          "q+": Math.floor((_0x568f8c.getMonth() + 3) / 3),
          S: _0x568f8c.getMilliseconds()
        };
        if (/(y+)/.test(_0x322e7d)) {
          _0x322e7d = _0x322e7d.replace(RegExp.$1, (_0x568f8c.getFullYear() + "").substr(4 - RegExp.$1.length));
        }
        for (let _0x5ff065 in _0x1626c3) if (new RegExp("(" + _0x5ff065 + ")").test(_0x322e7d)) {
          _0x322e7d = _0x322e7d.replace(RegExp.$1, RegExp.$1.length == 1 ? _0x1626c3[_0x5ff065] : ("00" + _0x1626c3[_0x5ff065]).substr(("" + _0x1626c3[_0x5ff065]).length));
        }
        return _0x322e7d;
      }
    }
    msg(_0x4e4eda = _0x2c8fc7, _0x4a7b45 = "", _0x3a171f = "", _0x33d793) {
      const _0x2423f8 = _0x24d1b0 => {
        if (!_0x24d1b0) {
          return _0x24d1b0;
        }
        if (typeof _0x24d1b0 === "string") {
          {
            if (this.isLoon()) {
              return _0x24d1b0;
            } else {
              if (this.isQuanX()) {
                return {
                  "open-url": _0x24d1b0
                };
              } else {
                if (this.isSurge()) {
                  return {
                    url: _0x24d1b0
                  };
                } else {
                  return undefined;
                }
              }
            }
          }
        } else {
          if (typeof _0x24d1b0 === "object") {
            if (this.isLoon()) {
              {
                let _0x3ac1b = _0x24d1b0.openUrl || _0x24d1b0.url || _0x24d1b0["open-url"];
                let _0x53b409 = _0x24d1b0.mediaUrl || _0x24d1b0["media-url"];
                const _0x507742 = {
                  openUrl: _0x3ac1b,
                  mediaUrl: _0x53b409
                };
                return _0x507742;
              }
            } else {
              if (this.isQuanX()) {
                {
                  let _0x536550 = _0x24d1b0["open-url"] || _0x24d1b0.url || _0x24d1b0.openUrl;
                  let _0x56c0c3 = _0x24d1b0["media-url"] || _0x24d1b0.mediaUrl;
                  const _0x4bede1 = {
                    "open-url": _0x536550,
                    "media-url": _0x56c0c3
                  };
                  return _0x4bede1;
                }
              } else {
                if (this.isSurge()) {
                  {
                    let _0x42a95c = _0x24d1b0.url || _0x24d1b0.openUrl || _0x24d1b0["open-url"];
                    const _0x7ef044 = {
                      url: _0x42a95c
                    };
                    return _0x7ef044;
                  }
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
          $notification.post(_0x4e4eda, _0x4a7b45, _0x3a171f, _0x2423f8(_0x33d793));
        } else {
          if (this.isQuanX()) {
            $notify(_0x4e4eda, _0x4a7b45, _0x3a171f, _0x2423f8(_0x33d793));
          }
        }
      }
      if (!this.isMuteLog) {
        let _0x4f10b5 = ["", "==============📣系统通知📣=============="];
        _0x4f10b5.push(_0x4e4eda);
        _0x4a7b45 ? _0x4f10b5.push(_0x4a7b45) : "";
        _0x3a171f ? _0x4f10b5.push(_0x3a171f) : "";
        console.log(_0x4f10b5.join("\n"));
        this.logs = this.logs.concat(_0x4f10b5);
      }
    }
    log(..._0x4f4f6f) {
      if (_0x4f4f6f.length > 0) {
        this.logs = [...this.logs, ..._0x4f4f6f];
      }
      console.log(_0x4f4f6f.join(this.logSeparator));
    }
    logErr(_0x266e55, _0x513ff6) {
      const _0x3bc7b8 = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      if (!_0x3bc7b8) {
        this.log("", "❗️" + this.name + ", 错误!", _0x266e55);
      } else {
        this.log("", "❗️" + this.name + ", 错误!", _0x266e55.stack);
      }
    }
    wait(_0x58e799) {
      return new Promise(_0xaafa27 => setTimeout(_0xaafa27, _0x58e799));
    }
    done(_0x1c17f8 = {}) {
      const _0x34af87 = new Date().getTime();
      const _0x1cfdeb = (_0x34af87 - this.startTime) / 1000;
      this.log("", "🔔" + this.name + ", 结束!🕛" + _0x1cfdeb + "秒");
      this.log();
      if (this.isSurge() || this.isQuanX() || this.isLoon()) {
        $done(_0x1c17f8);
      }
    }
  }(_0x2c8fc7, _0x4e00f5);
}