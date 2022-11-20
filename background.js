chrome.tabs.onActivated.addListener(function (activeInfo) {
  chrome.tabs.get(activeInfo.tabId, function (tab) {
    if (tab.url.match(/https:\/\/classroom\.google\.com\/.*/)) {
      var classrooms = [];
      chrome.storage.local.get("classrooms", function (data) {
        classrooms = data.classrooms;
        if (classrooms == null) {
          classrooms = [];
        } else {
          var classroom = classrooms.find(function (classroom) {
            return (
              classroom.url == tab.url || classroom.url == tab.url + "/t/all"
            );
          });
          if (classroom != null) {
            chrome.scripting.executeScript(
              {
                target: { tabId: tab.id },
                func: changeClassroomName,
              },
              function () {
                chrome.tabs.sendMessage(tab.id, {
                  classroomName: classroom.editedName,
                  classroomImage: classroom.header_Image,
                  classRoomthemeBackgroundColor: classroom.themeBackgroundColor,
                  classRoomthemeTextColor: classroom.themeTextColor,
                  classRoomBackgroundColor: classroom.backgroundColor,
                  Name: classroom.name,
                });
                chrome.action.setBadgeText({ text: "√", tabId: tab.id });
                chrome.action.setBadgeBackgroundColor({
                  color: "#00FF00",
                  tabId: tab.id,
                });
              }
            );
          }
        }
      });
      function changeClassroomName() {
        chrome.runtime.onMessage.addListener(function (
          request,
          sender,
          sendResponse
        ) {
          document.title = request.classroomName;
          document.querySelector("div.PFLqgc.PagUde").style.backgroundImage =
            "url(" + request.classroomImage + ")";
          document.querySelector("h1.tNGpbb.YrFhrf-ZoZQ1.YVvGBb").textContent =
            request.classroomName;
          document.querySelector("div.PFLqgc.PagUde").style.backgroundSize =
            "cover";
          document.querySelector("div.PFLqgc.PagUde").style.backgroundPosition =
            "center";
          document.querySelector("div.PFLqgc.PagUde").style.backgroundRepeat =
            "no-repeat";
          document.getElementById("UGb2Qe").textContent = request.classroomName;
          document.querySelectorAll("div.Aopndd").forEach(function (element) {
            element.style.backgroundColor =
              request.classRoomthemeBackgroundColor;
          });
          document.querySelector(
            "div.qk0lee.QRiHXd.VBEdtc-Wvd9Cc"
          ).style.backgroundColor = request.classRoomthemeBackgroundColor;
          document
            .querySelectorAll("div.pco8Kc.obylVb.j70YMc > html-blob > span")
            .forEach(function (element) {
              element.style.color = request.classRoomthemeTextColor;
              element.style.fontWeight = "bold";
              element.style.fontSize = "1.3em";
            });
          document
            .querySelectorAll(
              "div.ZjCSDe.dDKhVc.pco8Kc.j70YMc > html-blob > span"
            )
            .forEach(function (element) {
              element.style.color = request.classRoomthemeTextColor;
              element.style.fontWeight = "bold";
              element.style.fontSize = "1.3em";
            });
          document
            .querySelectorAll("div.tmMkWb.dDKhVc")
            .forEach(function (element) {
              element.style.color = request.classRoomthemeTextColor;
            });
          document
            .querySelectorAll("span.NPEfkd.RveJvd.snByac")
            .forEach(function (element) {
              element.style.color = request.classRoomthemeTextColor;
            });
          document.querySelectorAll(".NMm5M").forEach(function (element) {
            element.style.color = request.classRoomthemeTextColor;
          });
          document
            .querySelectorAll("div.VSWCL.tLDEHd > html-blob > span")
            .forEach(function (element) {
              element.style.color = request.classRoomthemeTextColor;
              element.style.fontWeight = "bold";
              element.style.fontSize = "1.3em";
            });
          document.querySelectorAll("svg.gb_Ve").forEach(function (element) {
            element.style.fill = request.classRoomthemeTextColor;
          });
          document
            .querySelectorAll("a.gJItbc.asQXV")
            .forEach(function (element) {
              element.style.color = request.classRoomthemeTextColor;
            });
          document
            .querySelectorAll("span.asQXV.QRiHXd")
            .forEach(function (element) {
              element.style.color = request.classRoomthemeTextColor;
            });
          document
            .querySelectorAll("div.Vlohie.asQXV.YVvGBb")
            .forEach(function (element) {
              element.style.color = request.classRoomthemeTextColor;
            });
          document.querySelectorAll(".A6dC2c").forEach(function (element) {
            element.style.color = request.classRoomthemeTextColor;
          });
          document
            .querySelectorAll("div.kRYv9b.YVvGBb")
            .forEach(function (element) {
              element.style.color = request.classRoomthemeTextColor;
            });
          document.querySelectorAll("span.T8rTjd").forEach(function (element) {
            element.style.color = request.classRoomthemeTextColor;
          });
          document
            .querySelectorAll("span.u7S8tc.YVvGBb")
            .forEach(function (element) {
              element.style.color = request.classRoomthemeTextColor;
            });
          document
            .querySelectorAll("div.Wd54if.dDKhVc.YVvGBb")
            .forEach(function (element) {
              element.style.color = request.classRoomthemeTextColor;
            });
          document
            .querySelectorAll("span.IMvYId.dDKhVc.YVvGBbb")
            .forEach(function (element) {
              element.style.color = request.classRoomthemeTextColor;
            });
          document
            .querySelectorAll("span.YVvGBb.asQXV")
            .forEach(function (element) {
              element.style.color = request.classRoomthemeTextColor;
              element.style.fontWeight = "bold";
              element.style.fontSize = "1.3em";
            });
          document.querySelector("div.lziZub.sdDCme").style.color =
            request.classRoomthemeTextColor;
          document.querySelector("span.Y5vSD").style.color =
            request.classRoomthemeTextColor;
          document.querySelector("h2.EZrbnd.sxa9Pc").style.color =
            request.classRoomthemeTextColor;
          document
            .querySelectorAll("div.d4Fe0d.LBlAUc")
            .forEach(function (element) {
              element.style.backgroundColor =
                request.classRoomthemeBackgroundColor;
            });
          document.querySelector(".n42Gr").style.color =
            request.classRoomthemeTextColor;
          document.querySelector("h1.tNGpbb.YrFhrf-ZoZQ1.YVvGBb").style.color =
            request.classRoomthemeTextColor;
          document.getElementById("UGb2Qe").style.color =
            request.classRoomthemeTextColor;
          document.body.style.backgroundColor =
            request.classRoomBackgroundColor;
          document.querySelector("div.qFmcrc.z3vRcc-ZoZQ1.YVvGBb").style.color =
            request.classRoomthemeBackgroundColor;
          document.getElementById("kO001e").style.backgroundColor =
            request.classRoomthemeBackgroundColor;
          document.querySelector(
            "button.VfPpkd-Bz112c-LgbsSe.yHy1rc.eT1oJ.mN1ivc.xSP5ic.oxacD"
          ).style.color = "white";
          document
            .querySelectorAll("a.u2mfde.hN1OOc.EZrbnd.J1raN.S6Vdac")
            .forEach(function (element) {
              element.style.fontWeight = "bold";
              element.style.fontSize = "1.3em";
              element.style.color = request.classRoomthemeTextColor;
            });
          document
            .querySelectorAll(
              "a.u2mfde.hN1OOc.EZrbnd.GblU6b.eumXzf.VnOHwf-Tvm9db.P3W0Dd-Ysl7Fe.UISY8d-Ysl7Fe.S6Vdac"
            )
            .forEach(function (element) {
              element.style.fontWeight = "bold";
              element.style.fontSize = "1.5em";
              element.style.color = request.classRoomthemeTextColor;
            });
          document.querySelector("div.ETRkCe").style.backgroundColor =
            request.classRoomthemeBackgroundColor;
          document
            .querySelector(
              "a.u2mfde.hN1OOc.EZrbnd.GblU6b.eumXzf.VnOHwf-Tvm9db.S6Vdac"
            )
            .classList.remove("UISY8d-Ysl7Fe");
          document
            .querySelector(
              "a.u2mfde.hN1OOc.EZrbnd.GblU6b.eumXzf.VnOHwf-Tvm9db.S6Vdac"
            )
            .classList.remove("P3W0Dd-Ysl7Fe");
          document.querySelectorAll("div.YVvGBb").forEach(function (element) {
            element.style.color = request.classRoomthemeTextColor;
            element.style.fontWeight = "bold";
            element.style.fontSize = "1em";
          });
          document
            .querySelectorAll(".YVvGBb.xUYklb.VnOHwf-Tvm9db.B7SYid")
            .forEach(function (element) {
              element.style.color = request.classRoomthemeTextColor;
              element.style.fontWeight = "bold";
              element.style.fontSize = "1.3em";
            });
          document
            .querySelector(".WpHeLc.VfPpkd-mRLv6.VfPpkd-RLmnJb")
            .forEach(function (element) {
              element.style.color = request.classRoomthemeTextColor;
              element.style.fontWeight = "bold";
              element.style.fontSize = "1.3em";
            });
          document
            .querySelector(".VnOHwf-Tvm9db.B7SYid")
            .forEach(function (element) {
              element.style.color = request.classRoomthemeTextColor;
              element.style.fontWeight = "bold";
              element.style.fontSize = "1.3em";
            });
          document
            .querySelector(".VnOHwf-Tvm9db.asQXV.jg22B")
            .forEach(function (element) {
              element.style.color = request.classRoomthemeTextColor;
              element.style.fontWeight = "bold";
              element.style.fontSize = "1.3em";
            });
          document
            .querySelector(".VnOHwf-Tvm9db.B7SYid.dRIMEd")
            .forEach(function (element) {
              element.style.color = request.classRoomthemeTextColor;
              element.style.fontWeight = "bold";
              element.style.fontSize = "1.3em";
            });
          document.querySelectorAll("a").forEach(function (element) {
            element.style.color = `#${Math.floor(Math.random() * 0xffffff).toString(16)}`;
          });
        });
      }
    }
  });
});
