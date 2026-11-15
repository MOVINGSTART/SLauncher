(function () {
  "use strict";

  /**
   * [설정 안내]
   * GitHub Pages (`https://<아이디>.github.io/<저장소>`)에 올리면 저장소를 자동으로 감지합니다.
   * 커스텀 도메인을 쓰거나 특정 저장소를 고정하려면 아래 GITHUB_REPO에 "아이디/저장소명"을 입력하세요.
   * 예: var GITHUB_REPO = "myaccount/SLauncher";
   */
  var GITHUB_REPO = "MOVINGSTART/SLauncher";

  var I18N = {
    ko: {
      navDownload: "다운로드",
      heroSubtitle: "스타크래프트: 리마스터 올인원 통합 런처",
      heroDesc: "실시간 방 탐색·원클릭 따라가기부터 맵 위변조 감지, 리플레이 크래시 방어, 인게임 프렌즈 브리지, 커스텀 GRP 스킨까지 하나의 창에서 완결합니다.",
      heroDownloadBtn: "Windows용 다운로드",
      heroExploreBtn: "기능 살펴보기",
      previewStatusGuard: "보안 가드 활성",
      previewStatusBridge: "프렌즈 브리지 연결됨",
      mockRoomTag: "실시간 로비 · 따라가기",
      mockFollowPh: "[따라가기] 배틀태그 혹은 닉네임 입력후 오른쪽 아이콘 클릭",
      mockGuardTag: "맵 무결성 · 보안 가드",
      mockCheck1: "원본 맵 대조 및 Comment·트리거 무단수정 즉시 감지",
      mockCheck2: "리플레이 크래시 방어 및 비정상 패킷 실시간 차단",
      mockCheck3: "K런처 오프라인 모드 · H런처 병행 및 #h 방 호환 입장",
      featuresTitle: "주요 기능",
      featuresSub: "인게임 순정 UI를 해치지 않으면서 필요한 모든 편의 기능과 보호 기능을 통합했습니다.",
      tabFollow: "방 탐색 · 따라가기",
      tabSecurity: "보안 가드 · 맵 검증",
      tabFriends: "채팅 · 프렌즈 브리지",
      tabGrp: "GRP 스킨 · 호환성",
      panelFollowTitle: "배틀태그·닉네임 원클릭 따라가기 & 빠른 방 입장",
      panelFollowDesc: "인게임 채팅창 우측의 따라가기 아이콘이나 명령어로 친구 또는 최근 만난 유저의 대기실로 즉시 이동할 수 있습니다. 방 고정, 최근 방문 기록, 빠른 방 필터링을 기본 제공합니다.",
      panelSecurityTitle: "맵 무단수정 정밀 감지 & 리플레이 크래시 방어",
      panelSecurityDesc: "원본 맵 지문과 비교하여 Comment 삭제·비움, 트리거 위치 변경 등 교묘한 무단수정을 즉시 식별하며, 리플레이 크래시 및 비정상 패킷으로부터 게임 세션을 안전하게 보호합니다.",
      panelFriendsTitle: "스타크래프트 순정 UI 그대로 확장되는 프렌즈·채팅",
      panelFriendsDesc: "스타크래프트 자체 채팅·로비 UI 크기와 디자인을 100% 보존하면서, 실시간 친구 접속 위치 확인, 귓속말 보조, 로비 참가자 메모 및 자동 강퇴 관리 기능을 자연스럽게 통합합니다.",
      panelGrpTitle: "커스텀 GRP 스킨 프리뷰 & 타 런처 완벽 병행",
      panelGrpDesc: "SD/HD 유닛 및 지형 GRP 스킨을 미리보기로 확인하고 즉시 적용할 수 있으며, K런처 오프라인 모드·H런처와의 동시 병행 및 #h 전용방 호환 입장까지 지원합니다.",
      dlTitle: "지금 바로 시작하기",
      dlSub: "최신 설치 파일을 받아 실행하세요. 원하는 설치 폴더와 바로가기 옵션을 직접 지정해 설치할 수 있으며, 이후 업데이트는 런처 안에서 바로 진행됩니다.",
      dlPortableLink: "무설치 포터블 (.zip)",
      dlCopySha: "SHA-256 복사",
      dlChangelogLink: "이전 버전 및 변경사항 보기",
      badgeRequired: "필수",
      badgeIncluded: "기본 내장",
      badgeAuto: "자동 구성",
      reqScDesc: "설치 폴더와 Battle.net 경로를 레지스트리에서 자동으로 찾아 바로 연동합니다.",
      reqRuntimeTitle: "내장 포터블 런타임",
      reqRuntimeDesc: "로컬 서버용 Python 3.12 및 필수 모듈이 설치 파일 안에 모두 포함되어 있어 별도 설치가 필요 없습니다.",
      reqWv2Desc: "Windows 10/11에 기본 탑재되어 있으며, 미설치 환경에서도 내장 부트스트래퍼가 자동으로 설치합니다.",
      footerFeedback: "기능 제안 · 버그 제보",
      footerDisclaimer: "SLauncher는 StarCraft: Remastered 사용자 편의를 위한 서드파티 런처이며, Blizzard Entertainment와 제휴 관계가 아닙니다.",
      latestPrefix: "최신",
      downloadBtnFmt: "{tag} 다운로드",
      copiedSha: "설치 파일 SHA-256 해시가 클립보드에 복사되었습니다.",
      noShaYet: "표시할 SHA-256 해시 정보가 아직 없습니다."
    },
    en: {
      navDownload: "Download",
      heroSubtitle: "All-in-One Launcher for StarCraft: Remastered",
      heroDesc: "Live room search, one-click player follow, map tamper & replay-crash protection, in-game Friends Bridge, and custom GRP skins — all in one streamlined launcher.",
      heroDownloadBtn: "Download for Windows",
      heroExploreBtn: "Explore features",
      previewStatusGuard: "Security Guard Active",
      previewStatusBridge: "Friends Bridge Connected",
      mockRoomTag: "Live Lobby · Quick Follow",
      mockFollowPh: "[Follow] Enter BattleTag or nickname, then click the right icon",
      mockGuardTag: "Map Integrity · Packet Guard",
      mockCheck1: "Detects unauthorized map edits, cleared Comments & moved triggers",
      mockCheck2: "Replay-crash protection and malformed packet filtering",
      mockCheck3: "Runs alongside KLauncher offline / HLauncher with #h room support",
      featuresTitle: "Key Features",
      featuresSub: "Every convenience and security guard integrated cleanly without altering StarCraft's native UI proportions.",
      tabFollow: "Room Search · Follow",
      tabSecurity: "Security · Map Verify",
      tabFriends: "Chat · Friends Bridge",
      tabGrp: "GRP Skins · Compatibility",
      panelFollowTitle: "One-Click Player Follow & Fast Room Entry",
      panelFollowDesc: "Jump straight into a friend's or recent player's lobby right from the in-game chat bar icon or slash command, complete with room pinning and visit history.",
      panelSecurityTitle: "Map Tamper Detection & Replay Crash Defense",
      panelSecurityDesc: "Compares map fingerprints against canonical originals to catch cleared/deleted Comments or reordered triggers, while shielding sessions against replay crashes.",
      panelFriendsTitle: "Native-Preserving In-Game Chat & Friends Overlay",
      panelFriendsDesc: "Preserves 100% of StarCraft: Remastered's native chat dimensions while adding live friend location status, whisper helpers, player notes, and host auto-kick tools.",
      panelGrpTitle: "Custom SD/HD GRP Previews & Multi-Launcher Coexistence",
      panelGrpDesc: "Preview and apply custom unit/tile GRP skins effortlessly, and run smoothly alongside KLauncher offline mode and HLauncher (#h rooms).",
      dlTitle: "Get started now",
      dlSub: "Download and run the latest installer. Choose your preferred install folder and shortcut options directly, and install future updates right inside SLauncher.",
      dlPortableLink: "Portable archive (.zip)",
      dlCopySha: "Copy SHA-256",
      dlChangelogLink: "Previous versions and changelog",
      badgeRequired: "Required",
      badgeIncluded: "Bundled",
      badgeAuto: "Auto Setup",
      reqScDesc: "Game data and Battle.net paths are detected automatically from the Windows registry.",
      reqRuntimeTitle: "Bundled Portable Runtime",
      reqRuntimeDesc: "Includes an embedded Python 3.12 runtime and all local modules inside the installer — no external setup needed.",
      reqWv2Desc: "Preinstalled on Windows 10/11 and automatically bootstrapped if missing.",
      footerFeedback: "Feature requests · Bug reports",
      footerDisclaimer: "SLauncher is an independent community launcher for StarCraft: Remastered and is not affiliated with Blizzard Entertainment.",
      latestPrefix: "Latest",
      downloadBtnFmt: "Download {tag}",
      copiedSha: "Installer SHA-256 copied to clipboard.",
      noShaYet: "SHA-256 hash is not available yet."
    }
  };

  var currentLang = "ko";
  try {
    var saved = localStorage.getItem("slauncher_lang");
    if (saved === "ko" || saved === "en") currentLang = saved;
  } catch (_) {}

  var releaseState = {
    tag: "v0.6.705",
    publishedAt: "2026-11-15T06:54:50Z",
    setupName: "SLauncher-0.6.705-win-setup.exe",
    setupUrl: "https://github.com/MOVINGSTART/SLauncher/releases/download/v0.6.705/SLauncher-0.6.705-win-setup.exe",
    setupBytes: 85366342,
    setupSha256: "8ceb7dbde1c1592191b4aa8128f0b5cd9792f617d935149b323950d2653a3deb",
    zipName: "SLauncher_v0.6.705.zip",
    zipUrl: "https://github.com/MOVINGSTART/SLauncher/releases/download/v0.6.705/SLauncher_v0.6.705.zip",
    zipBytes: 84786630,
    repoSlug: "MOVINGSTART/SLauncher"
  };

  function detectGitHubRepo() {
    if (GITHUB_REPO && GITHUB_REPO.indexOf("/") > 0) return GITHUB_REPO.trim();
    var host = String((window.location && window.location.hostname) || "").toLowerCase();
    if (host.slice(-10) === ".github.io") {
      var owner = host.slice(0, -10);
      var segs = String((window.location && window.location.pathname) || "")
        .split("/")
        .filter(Boolean);
      if (owner && segs.length > 0) {
        return owner + "/" + segs[0];
      }
    }
    return "";
  }

  function formatSizeMB(bytes) {
    var n = Number(bytes) || 0;
    if (n <= 0) return "";
    return (n / (1024 * 1024)).toFixed(1) + " MB";
  }

  function formatDate(isoStr, lang) {
    if (!isoStr) return "";
    var d = new Date(isoStr);
    if (isNaN(d.getTime())) return "";
    if (lang === "ko") {
      return d.getFullYear() + "년 " + (d.getMonth() + 1) + "월 " + d.getDate() + "일";
    }
    return d.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
  }

  // Khaydarin Studio style asset scorer: prioritizes Windows setup/installer .exe
  function pickSetupAsset(assets) {
    if (!Array.isArray(assets) || !assets.length) return null;
    var best = null;
    var bestScore = -9999;
    for (var i = 0; i < assets.length; i++) {
      var a = assets[i];
      if (!a || !a.name || !a.browser_download_url) continue;
      var name = String(a.name);
      if (/\.json$|\.sha256$|\.sig$|\.blockmap$|\.yml$/i.test(name)) continue;
      var score = 0;
      if (/\b(setup|installer)\b/i.test(name)) score += 100;
      if (/\.exe$/i.test(name)) score += 45;
      if (/\.msi$/i.test(name)) score += 35;
      if (/\b(win|windows)\b/i.test(name)) score += 30;
      if (/\b(x64|x86_64|amd64|x86)\b/i.test(name)) score += 10;
      if (/\b(portable)\b/i.test(name)) score -= 25;
      if (/\.zip$/i.test(name)) score -= 15;
      if (score > bestScore) {
        bestScore = score;
        best = a;
      }
    }
    return best;
  }

  function pickPortableZipAsset(assets) {
    if (!Array.isArray(assets)) return null;
    for (var i = 0; i < assets.length; i++) {
      var a = assets[i];
      if (a && a.name && /\.zip$/i.test(a.name) && !/Native-/i.test(a.name)) return a;
    }
    for (var j = 0; j < assets.length; j++) {
      var b = assets[j];
      if (b && b.name && /\.zip$/i.test(b.name)) return b;
    }
    return null;
  }

  function renderReleaseUI() {
    var dict = I18N[currentLang] || I18N.ko;
    var heroVer = document.getElementById("hero-version");
    if (heroVer) heroVer.textContent = releaseState.tag;

    var btnSetup = document.getElementById("btn-download-setup");
    var btnLabel = document.getElementById("btn-download-label");
    if (btnSetup && releaseState.setupUrl) btnSetup.href = releaseState.setupUrl;
    if (btnLabel) btnLabel.textContent = dict.downloadBtnFmt.replace("{tag}", releaseState.tag);

    var btnZip = document.getElementById("btn-download-zip");
    if (btnZip && releaseState.zipUrl) {
      btnZip.href = releaseState.zipUrl;
      btnZip.classList.remove("hidden");
    }

    var metaEl = document.getElementById("release-meta");
    if (metaEl) {
      var parts = [dict.latestPrefix + " " + releaseState.tag];
      var dt = formatDate(releaseState.publishedAt, currentLang);
      if (dt) parts.push(dt);
      if (releaseState.setupName) parts.push(releaseState.setupName);
      var sz = formatSizeMB(releaseState.setupBytes);
      if (sz) parts.push(sz);
      metaEl.textContent = parts.join(" · ");
    }

    var copyBtn = document.getElementById("btn-copy-sha");
    if (copyBtn) {
      copyBtn.setAttribute("data-sha", releaseState.setupSha256 || "");
      copyBtn.style.display = releaseState.setupSha256 ? "" : "none";
    }

    if (releaseState.repoSlug) {
      var repoUrl = "https://github.com/" + releaseState.repoSlug;
      var navGh = document.getElementById("nav-github-link");
      var relLink = document.getElementById("link-releases");
      var relSep = document.getElementById("releases-sep");
      var issLink = document.getElementById("footer-issues-link");
      if (navGh) navGh.href = repoUrl;
      if (relLink) {
        relLink.href = repoUrl + "/releases";
        relLink.classList.remove("hidden");
      }
      if (relSep) relSep.classList.remove("hidden");
      if (issLink) {
        issLink.href = repoUrl + "/issues";
        issLink.target = "_blank";
        issLink.rel = "noopener";
      }
    }
  }

  function applyLanguage(lang) {
    currentLang = lang === "en" ? "en" : "ko";
    document.documentElement.lang = currentLang;
    try { localStorage.setItem("slauncher_lang", currentLang); } catch (_) {}

    var dict = I18N[currentLang];
    var nodes = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < nodes.length; i++) {
      var key = nodes[i].getAttribute("data-i18n");
      if (dict[key]) nodes[i].textContent = dict[key];
    }

    var langBtns = document.querySelectorAll(".lang-btn");
    for (var j = 0; j < langBtns.length; j++) {
      langBtns[j].classList.toggle("active", langBtns[j].getAttribute("data-lang") === currentLang);
    }

    renderReleaseUI();
  }

  function showToast(msg) {
    var t = document.getElementById("toast");
    if (!t) return;
    t.textContent = msg;
    t.classList.add("show");
    clearTimeout(t.__hideTimer);
    t.__hideTimer = setTimeout(function () {
      t.classList.remove("show");
    }, 2400);
  }

  function applyLocalManifest(m) {
    if (!m || typeof m !== "object") return;
    var ver = String(m.version || "").replace(/^v/i, "");
    if (ver) releaseState.tag = "v" + ver;
    if (m.pub_date) releaseState.publishedAt = m.pub_date;
    if (m.setup_file) releaseState.setupName = m.setup_file;
    if (m.setup_url) releaseState.setupUrl = m.setup_url;
    if (m.setup_size) releaseState.setupBytes = Number(m.setup_size) || 0;
    if (m.setup_sha256) releaseState.setupSha256 = String(m.setup_sha256);
    if (m.portable_file) releaseState.zipName = m.portable_file;
    if (m.portable_url) releaseState.zipUrl = m.portable_url;
    if (m.portable_size) releaseState.zipBytes = Number(m.portable_size) || 0;
    renderReleaseUI();
  }

  function loadReleaseMetadata() {
    var slug = detectGitHubRepo();
    releaseState.repoSlug = slug;

    // 1. Load local ./latest.json first (instant metadata + SHA-256 even before GitHub API resolves)
    fetch("./latest.json", { cache: "no-store" })
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (m) { if (m) applyLocalManifest(m); })
      .catch(function () {})
      .finally(function () {
        if (!slug) {
          renderReleaseUI();
          return;
        }
        // 2. Query GitHub Releases latest API just like Khaydarin Studio
        fetch("https://api.github.com/repos/" + slug + "/releases/latest", {
          headers: { Accept: "application/vnd.github+json" }
        })
          .then(function (r) { return r.ok ? r.json() : null; })
          .then(function (rel) {
            if (!rel || !rel.tag_name) return;
            releaseState.tag = String(rel.tag_name).indexOf("v") === 0 ? rel.tag_name : ("v" + rel.tag_name);
            if (rel.published_at) releaseState.publishedAt = rel.published_at;
            var setupAsset = pickSetupAsset(rel.assets || []);
            if (setupAsset) {
              releaseState.setupName = setupAsset.name;
              releaseState.setupUrl = setupAsset.browser_download_url;
              releaseState.setupBytes = Number(setupAsset.size) || 0;
            }
            var zipAsset = pickPortableZipAsset(rel.assets || []);
            if (zipAsset) {
              releaseState.zipName = zipAsset.name;
              releaseState.zipUrl = zipAsset.browser_download_url;
              releaseState.zipBytes = Number(zipAsset.size) || 0;
            }
            renderReleaseUI();
          })
          .catch(function () {
            renderReleaseUI();
          });
      });
  }

  // Bind language buttons
  var langBtns = document.querySelectorAll(".lang-btn");
  for (var lb = 0; lb < langBtns.length; lb++) {
    langBtns[lb].addEventListener("click", function (e) {
      applyLanguage(e.currentTarget.getAttribute("data-lang"));
    });
  }

  // Bind feature tabs
  var tabBtns = document.querySelectorAll(".tab-btn");
  for (var tb = 0; tb < tabBtns.length; tb++) {
    tabBtns[tb].addEventListener("click", function (e) {
      var target = e.currentTarget.getAttribute("data-tab");
      for (var i = 0; i < tabBtns.length; i++) {
        var active = tabBtns[i].getAttribute("data-tab") === target;
        tabBtns[i].classList.toggle("active", active);
        tabBtns[i].setAttribute("aria-selected", active ? "true" : "false");
      }
      var panels = document.querySelectorAll(".tab-panel");
      for (var p = 0; p < panels.length; p++) {
        panels[p].classList.toggle("active", panels[p].getAttribute("data-panel") === target);
      }
    });
  }

  // Bind SHA-256 copy button
  var copyBtn = document.getElementById("btn-copy-sha");
  if (copyBtn) {
    copyBtn.addEventListener("click", function () {
      var dict = I18N[currentLang] || I18N.ko;
      var sha = copyBtn.getAttribute("data-sha") || "";
      if (!sha) {
        showToast(dict.noShaYet);
        return;
      }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(sha).then(function () {
          showToast(dict.copiedSha);
        });
      }
    });
  }

  applyLanguage(currentLang);
  loadReleaseMetadata();
})();
