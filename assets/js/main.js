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
      navHome: "홈",
      navFeatures: "주요 기능",
      navChangelog: "패치 내역",
      navDownload: "다운로드",
      viewAllPatchesBtn: "전체 패치 내역 보기",
      clBackHome: "메인 페이지로 돌아가기",
      clPillLabel: "Release History",
      clStatLatest: "현재 최신 버전",
      clStatTotal: "누적 릴리스 기록",
      clSearchPlaceholder: "버전 또는 키워드 검색 (예: v0.6.711, 오버레이, 귓속말, EUD...)",
      clFilterAll: "전체",
      clFilterNew: "신규",
      clFilterImprove: "개선",
      clFilterFix: "수정 · 핫픽스",
      clFilterSecurity: "보안 · 호환",
      clFilterEud: "EUD",
      clSidebarTitle: "버전 바로가기",
      clEmptyResult: "검색 조건과 일치하는 패치 내역이 없습니다.",
      clResetFilter: "필터 초기화",
      clCountFmt: "{shown} / {total}개 버전 표시 중",
      clCountAllFmt: "총 {total}개 버전 기록",
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
      patchTitle: "패치 내역",
      patchSub: "사용자 피드백을 바탕으로 안정성, 보안 가드, 인게임 편의 기능을 지속적으로 개선하고 있습니다.",
      patchBadgeLatest: "최신 업데이트",
      patchBadgeSecurity: "보안 · 호환 통합",
      patchBadgeCore: "엔진 · EUD 기반 구축",
      tagHotfix: "핫픽스",
      tagNew: "신규",
      tagImprove: "개선",
      tagFix: "수정",
      tagSecurity: "보안",
      tagCompat: "호환",
      tagEud: "EUD",
      p711Summary: "상단 메인 오버레이·디지털 시계 HUD 즉시 표시 복구 및 포커스 전환 개선",
      p711Item1: "스타크래프트 실행 직후 및 초기 설정 동기화 시 상단 메인 오버레이와 우측 상단 디지털 시계가 비활성 상태로 남아 화면에 표시되지 않던 문제를 해결했습니다.",
      p711Item2: "런처 창이 백그라운드로 숨겨지거나 컴팩트 도우미(Ctrl+H)와 함께 동작할 때 스타크래프트 창으로 포커스를 자연스럽게 인계하고 오버레이가 끊김 없이 유지되도록 개선했습니다.",
      p710Summary: "스타크래프트 연동 크래시 핫픽스 및 오버레이·브리핑 전환 안정성 강화",
      p710Item1: "스타크래프트 실행 및 대기 화면 감지 시 순환 호출(0xc00000fd)로 런처가 종료되어 적용되지 않던 스택 오버플로우 버그를 즉시 수정했습니다.",
      p710Item2: "PLAYER READY 및 키패드 0 모니터 오버레이의 스냅샷 데이터를 힙 메모리로 분리하고, 브리핑·로딩 화면 전환 유예 타이머를 3분으로 확장해 방 제목·맵 이름·배틀태그 컨텍스트를 안정적으로 유지합니다.",
      p709Summary: "인게임 플레이어 모니터(키패드 0) 전면 개편 및 레디 상태·배틀태그 표시 추가",
      p709Item1: "키패드 0 플레이어 모니터가 인게임 진입 시에만 표시되도록 고정하고, 상단 방 제목·맵 이름 및 플레이어별 전적(승-패-무·승률%)·레디 상태([방장]/[READY]/[대기])·배틀태그를 누락 없이 표시합니다.",
      p709Item2: "게임 시작 전 PLAYER READY 오버레이와 런처 내 플레이어 감지 UI에 각 참가자의 방장/READY/대기 상태 배지 및 배틀태그(Name#1234)를 함께 표기합니다.",
      p708Summary: "인게임 빠른 귓속말 답장(/r) 정상화 및 대규모 방 입장 알림 수정",
      p708Item1: "인게임 채팅에서 /r 명령어로 최근 귓속말 상대에게 답장이 전송되지 않던 문제를 수정하고, 답장 대상이 없을 때 + 키 입력 시 <???> 문구가 그대로 노출되던 현상을 제거했습니다.",
      p708Item2: "101번째부터 501번째 친구까지 대규모 인원 구간에서 인게임 참가 알림(님이 참가하였습니다.)이 정상 출력되도록 수정했습니다.",
      p707Summary: "공방 게임 시작 시 연결 끊김 해결 및 101~501번 ./r 답장 지원",
      p707Item1: "공개방 카운트다운 종료 후 실제 게임으로 진입할 때 간헐적으로 세션 연결이 끊기던 네트워크 전환 버그를 해결했습니다.",
      p707Item2: "로비 및 채널 채팅에서 101번~501번 친구 구간의 수신 귓속말에도 ./r 빠른 답장 명령어가 정상 동작하도록 확장했습니다.",
      p706Summary: "공방 본인 빨핑(Red Ping) 현상 수정 및 최신 버전 강제 적용 도입",
      p706Item1: "공방 입장 시 리마스터 P2P 핸드셰이크(0x3A) 및 Storm 지연 측정 핑(cmd=11) 패킷이 오차단되어 본인만 빨핑으로 표시되던 문제를 해결했습니다.",
      p706Item2: "구버전 클라이언트를 통한 우회 실행을 방지하고 모든 사용자가 동일한 최신 보안·호환 패치 환경에서 플레이하도록 최신 버전 강제 검증을 적용했습니다.",
      p705Summary: "공방 입장 멈춤·슬롯 미표시·채팅 불가 해결 및 Defender 검증 등록",
      p705Item1: "리마스터 로비 동기화 패킷, 옵저버 슬롯 ID, 비동기 채팅 패킷에 대한 패킷 가드 오차단 3종을 수정하여 공방 입장 및 대기실 채팅을 완벽히 정상화했습니다.",
      p705Item2: "Microsoft Security Intelligence(Windows Defender) 공식 개발자 파일 검증 등록 및 배포 파일 SHA-256 무결성 검증 체계를 구축했습니다.",
      p704Summary: "타 사용자 PC 완벽 호환 패치, 배틀넷 자동 로그인 옵션화 및 원파일 설치기 도입",
      p704Item1: "외부 PC 환경에서 발생하던 런타임 경로 의존성·바탕화면 바로가기 누락·초기 구동 실패 문제를 전면 해결하여 어떤 Windows 10/11 PC에서도 즉시 실행되도록 개선했습니다.",
      p704Item2: "설치 폴더 직접 지정·바로가기 생성·Windows '앱 및 기능' 제거(Uninstall.exe)를 지원하는 전용 설치 프로그램을 도입하고, 배틀넷 앱 스타일의 자동 로그인 체크 방식을 적용했습니다.",
      p703Summary: "맵 무단수정 정밀 감지 토스트, 핵·리플레이 크래시 방어 및 K런처·H런처 병행 지원",
      p703Item1: "원본 맵 지문과 비교해 Comment('') 삭제·비움, 트리거 순서·위치 변경, 편법 1배속 수정 흔적을 즉시 잡아내어 스타 화면 상단 토스트(방 입장 시 1회)로 경고합니다.",
      p703Item2: "시야 확장 기반 맵핵 정밀 탐지, 비정상 패킷 차단, 오염된 리플레이 시청 후 방 생성 시 '응답 없음'에 빠지던 스트림 포인터 크래시 방어를 통합했습니다.",
      p703Item3: "K런처 오프라인 단독 모드 및 H런처와 충돌 없이 동시 실행을 지원하고, 방 제목에 #h가 포함된 방도 S런처에서 바로 입장할 수 있도록 호환성을 확보했습니다.",
      p703Item4: "Tab 키 전환 및 따라가기 UI 표시 시 스타 순정 UI 비율을 100% 보존(확대·잘림 방지)하고, 배틀넷 채널 입장 시 발생하던 프레임 지연(렉)을 최적화했습니다.",
      p700Summary: "유즈맵 EUD 세이브/로드·유닛 확장, 반응속도 24 고정 및 실시간 방 목록·귓속말 엔진 구축",
      p700Item1: "유즈맵 전용 EUD 세이브/로드 시스템을 구축하여 데스값·STRx 로케이션·내장 .e3s 데이터까지 단일 .mlx 파일로 완벽 복원하며, 세이브 비호환 구조 맵은 자동 감지해 안내합니다.",
      p700Item2: "대기실 참가자 전원이 S런처 사용자인 경우 1700기 제한을 넘어서는 EUD 유닛 확장을 활성화하고, 일반 유저 혼합 시 방 갈림 방지를 위해 자동으로 오리지널 모드를 유지합니다.",
      p700Item3: "일반 공방 및 세이브 로드 시 반응속도 24 · 게임속도 '가장 빠름' 고정 기능을 지원하고, 맵 이름 변경을 통한 편법 배속 악용을 차단했습니다.",
      p700Item4: "이미 시작된 방 실시간 목록 제거·정확한 방 개수 동기화, 배틀넷 귓속말 7004 에러·중복 출력·크래시 방지, 탈퇴 계정(#0) 판별 및 부팅 시 불필요한 백그라운드 자동실행 해제를 완료했습니다.",
      dlTitle: "지금 바로 시작하기",
      dlSub: "최신 설치 파일을 받아 실행하세요. 원하는 설치 폴더와 바로가기 옵션을 직접 지정해 설치할 수 있으며, 이후 업데이트는 런처 안에서 바로 진행됩니다.",
      dlPortableLink: "무설치 포터블 (.zip)",
      dlCopySha: "SHA-256 복사",
      dlChangelogLink: "패치 내역 및 변경사항 보기",
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
      navHome: "Home",
      navFeatures: "Features",
      navChangelog: "Patch Notes",
      navDownload: "Download",
      viewAllPatchesBtn: "View full patch notes",
      clBackHome: "Back to main page",
      clPillLabel: "Release History",
      clStatLatest: "Latest Version",
      clStatTotal: "Documented Releases",
      clSearchPlaceholder: "Search version or keyword (e.g. v0.6.711, overlay, whisper, EUD...)",
      clFilterAll: "All",
      clFilterNew: "New",
      clFilterImprove: "Improved",
      clFilterFix: "Fixed · Hotfix",
      clFilterSecurity: "Security · Compat",
      clFilterEud: "EUD",
      clSidebarTitle: "Jump to Version",
      clEmptyResult: "No patch notes match your current search or filter.",
      clResetFilter: "Reset filters",
      clCountFmt: "Showing {shown} of {total} releases",
      clCountAllFmt: "{total} releases documented",
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
      patchTitle: "Patch Notes",
      patchSub: "Continuously refined for stability, anti-tamper protection, and seamless in-game convenience based on player feedback.",
      patchBadgeLatest: "Latest Release",
      patchBadgeSecurity: "Security · Coexistence",
      patchBadgeCore: "Core Engine · EUD",
      tagHotfix: "Hotfix",
      tagNew: "New",
      tagImprove: "Improved",
      tagFix: "Fixed",
      tagSecurity: "Security",
      tagCompat: "Compat",
      tagEud: "EUD",
      p711Summary: "Top Main Overlay & Digital Clock HUD Visibility Fix and Focus Handoff",
      p711Item1: "Fixed a startup synchronization issue where the top-left main HUD and top-right digital clock overlay remained disabled right after launching StarCraft.",
      p711Item2: "Improved foreground focus handoff and overlay persistence when SLauncher minimizes to the background or runs alongside the compact helper (Ctrl+H).",
      p710Summary: "StarCraft Attachment Crash Hotfix & Pre-Game Transition Hardening",
      p710Item1: "Resolved a mutual recursion stack overflow (0xc00000fd) when attaching to StarCraft pre-game transitions.",
      p710Item2: "Moved PLAYER READY & Numpad 0 monitor snapshots onto the heap and extended the lobby-to-briefing transition window to 3 minutes so room title, map name, and BattleTag context stay intact.",
      p709Summary: "In-Game Player Monitor (Numpad 0) Overhaul with Ready Status & BattleTags",
      p709Item1: "Restricted the Numpad 0 Player Monitor strictly to active in-game matches and unified room title, map name, W-L-D win rate records, [Host]/[READY]/[Waiting] badges, and BattleTags.",
      p709Item2: "Added live Host / READY / Waiting role badges and BattleTag (Name#1234) display to both the pre-game PLAYER READY overlay and the launcher's Player Detection panel.",
      p708Summary: "In-Game Quick Whisper Reply (/r) Fix & Large-Lobby Join Notifications",
      p708Item1: "Restored /r quick whisper replies inside StarCraft chat and eliminated literal <???> placeholders when pressing + without an active whisper target.",
      p708Item2: "Fixed missing in-game join announcements for friend slots 101 through 501.",
      p707Summary: "Public Lobby Match-Start Disconnect Fix & 101–501 ./r Quick Reply",
      p707Item1: "Fixed a network transition bug where public rooms could disconnect right as countdown finished and gameplay began.",
      p707Item2: "Extended ./r quick whisper replies in lobby and channel chat to cover friend indices 101 through 501.",
      p706Summary: "Public Lobby Self Red-Ping Fix & Mandatory Latest-Version Enforcement",
      p706Item1: "Fixed false packet filtering on SC:R P2P handshakes (0x3A) and Storm latency pings (cmd=11) that caused the local player to appear with red ping in public lobbies.",
      p706Item2: "Introduced mandatory latest-version verification so all players run on the newest security and compatibility rules.",
      p705Summary: "Public Lobby Entry, Slot Visibility & Chat Restoration + Defender Submission",
      p705Item1: "Resolved three packet-guard false positives affecting SC:R lobby sync packets, observer slot IDs, and async chat frames so public lobby entry and chat work seamlessly.",
      p705Item2: "Registered official developer builds with Microsoft Security Intelligence (Windows Defender) alongside SHA-256 integrity manifests.",
      p704Summary: "External PC Standalone Compatibility, Battle.net Auto-Login Option & Setup Installer",
      p704Item1: "Eliminated local path dependencies, missing desktop shortcuts, and startup issues on clean external Windows 10/11 PCs.",
      p704Item2: "Shipped the custom single-file setup installer (custom directory, shortcuts, Uninstall.exe in Apps & Features) and switched to Battle.net login with an optional auto-login checkbox.",
      p703Summary: "Map Tamper Toast Alerts, Anti-Hack / Replay Crash Guards & Multi-Launcher Coexistence",
      p703Item1: "Detects cleared/deleted Comment('') actions, reordered triggers, and unauthorized 1x speed edits against canonical maps with a clean one-time in-game toast alert.",
      p703Item2: "Integrated vision-expansion maphack detection, malformed-packet filtering, and stream-pointer protection preventing freezes after viewing corrupted replays.",
      p703Item3: "Added conflict-free coexistence with KLauncher offline standalone mode and HLauncher, including direct entry into #h rooms from SLauncher.",
      p703Item4: "Preserved 100% native StarCraft UI dimensions on Tab / Follow controls and eliminated Battle.net channel-entry frame stutter.",
      p700Summary: "UMS EUD Save/Load & Unit Expansion, Fixed Turn-Rate 24 & Live Room List Engine",
      p700Item1: "Built UMS EUD Save/Load restoring deaths, STRx locations, and embedded .e3s data inside a single unified .mlx file, with automatic detection for non-saveable map structures.",
      p700Item2: "Enabled guarded EUD unit-limit expansion beyond 1,700 units when all lobby members run SLauncher, automatically falling back to original limits in mixed lobbies to prevent desyncs.",
      p700Item3: "Locked public lobbies and loaded saves to Turn Rate 24 and Fastest speed while blocking map-rename speed-hack workarounds.",
      p700Item4: "Delivered real-time removal of started rooms, accurate game counts, Battle.net whisper 7004/duplicate/crash fixes, deleted-account (#0) detection, and removal of boot auto-start daemons.",
      dlTitle: "Get started now",
      dlSub: "Download and run the latest installer. Choose your preferred install folder and shortcut options directly, and install future updates right inside SLauncher.",
      dlPortableLink: "Portable archive (.zip)",
      dlCopySha: "Copy SHA-256",
      dlChangelogLink: "Patch notes & version history",
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
    tag: "v0.6.711",
    publishedAt: "2026-11-15T16:35:58Z",
    setupName: "SLauncher-0.6.711-win-setup.exe",
    setupUrl: "https://github.com/MOVINGSTART/SLauncher/releases/download/v0.6.711/SLauncher-0.6.711-win-setup.exe",
    setupBytes: 85430800,
    setupSha256: "6745d492c0bd1082e3cf7c76c4770616ae301f499db04d63dd4d2813fc736df3",
    zipName: "SLauncher_v0.6.711.zip",
    zipUrl: "https://github.com/MOVINGSTART/SLauncher/releases/download/v0.6.711/SLauncher_v0.6.711.zip",
    zipBytes: 84851088,
    latestBody: "",
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
    var calloutVer = document.getElementById("callout-version");
    if (calloutVer) calloutVer.textContent = releaseState.tag;
    var clLatestVer = document.getElementById("cl-latest-ver");
    if (clLatestVer) clLatestVer.textContent = releaseState.tag;

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

    // Automatically render any newer GitHub release notes above static cards if tag advances
    var dynSlot = document.getElementById("patch-dynamic-slot");
    if (dynSlot) {
      var hasStatic = !!document.querySelector('[data-patch-ver="' + releaseState.tag + '"]');
      if (!hasStatic && releaseState.tag && releaseState.latestBody) {
        var staticLatest = document.querySelector(".patch-card-latest");
        if (staticLatest) {
          staticLatest.classList.remove("patch-card-latest");
          var oldBadge = staticLatest.querySelector(".badge-latest");
          if (oldBadge) oldBadge.style.display = "none";
        }
        var cleanBody = String(releaseState.latestBody)
          .replace(/^#{1,4}\s+/gm, "")
          .replace(/\*\*(.*?)\*\*/g, "$1")
          .replace(/\`([^\`]+)\`/g, "$1")
          .trim();
        var card = document.createElement("article");
        card.className = "patch-card patch-card-latest";
        card.style.marginBottom = "16px";
        var head = document.createElement("div");
        head.className = "patch-head";
        var vg = document.createElement("div");
        vg.className = "patch-ver-group";
        var verSpan = document.createElement("span");
        verSpan.className = "patch-ver";
        verSpan.textContent = releaseState.tag;
        var bdg = document.createElement("span");
        bdg.className = "patch-badge badge-latest";
        bdg.textContent = dict.patchBadgeLatest || "Latest";
        vg.appendChild(verSpan);
        vg.appendChild(bdg);
        var dtEl = document.createElement("time");
        dtEl.className = "patch-date";
        dtEl.textContent = formatDate(releaseState.publishedAt, currentLang);
        head.appendChild(vg);
        head.appendChild(dtEl);
        var bodyP = document.createElement("div");
        bodyP.className = "patch-dynamic-body";
        bodyP.textContent = cleanBody;
        card.appendChild(head);
        card.appendChild(bodyP);
        dynSlot.innerHTML = "";
        dynSlot.appendChild(card);
      } else {
        dynSlot.innerHTML = "";
      }
    }

    if (releaseState.repoSlug) {
      var repoUrl = "https://github.com/" + releaseState.repoSlug;
      var navGh = document.getElementById("nav-github-link");
      var relLink = document.getElementById("link-releases");
      var relSep = document.getElementById("releases-sep");
      var issLink = document.getElementById("footer-issues-link");
      if (navGh) navGh.href = repoUrl;
      if (relLink) {
        relLink.href = "./changelog.html";
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

  var activeCategory = "all";

  function updateChangelogFilter() {
    var app = document.getElementById("changelog-app");
    if (!app) return;

    var dict = I18N[currentLang] || I18N.ko;
    var searchInput = document.getElementById("cl-search-input");
    var clearBtn = document.getElementById("cl-search-clear");
    var statusEl = document.getElementById("cl-result-status");
    var emptyEl = document.getElementById("cl-empty-state");
    var totalCountEl = document.getElementById("cl-total-count");

    var query = searchInput ? String(searchInput.value || "").trim().toLowerCase() : "";
    if (clearBtn) clearBtn.classList.toggle("hidden", !query);

    var cards = app.querySelectorAll(".patch-timeline .patch-card");
    var total = cards.length;
    if (totalCountEl) totalCountEl.textContent = String(total);

    var shown = 0;
    for (var i = 0; i < cards.length; i++) {
      var card = cards[i];
      var ver = String(card.getAttribute("data-patch-ver") || "");
      var items = card.querySelectorAll(".patch-list li");
      var cardText = String(card.textContent || "").toLowerCase();
      var matchesQuery = !query || cardText.indexOf(query) !== -1 || ver.toLowerCase().indexOf(query) !== -1;

      var visibleItems = 0;
      for (var k = 0; k < items.length; k++) {
        var li = items[k];
        var cat = li.getAttribute("data-cat") || "";
        var catOk = activeCategory === "all" || cat === activeCategory;
        var itemText = String(li.textContent || "").toLowerCase();
        var itemQueryOk = !query || matchesQuery || itemText.indexOf(query) !== -1;
        var showLi = catOk && itemQueryOk;
        li.style.display = showLi ? "" : "none";
        if (showLi) visibleItems++;
      }

      var showCard = matchesQuery && (activeCategory === "all" || visibleItems > 0);
      card.style.display = showCard ? "" : "none";
      if (showCard) shown++;

      var navLink = document.querySelector('.cl-ver-link[data-target-ver="' + ver + '"]');
      if (navLink) navLink.classList.toggle("filtered-out", !showCard);
    }

    if (emptyEl) emptyEl.classList.toggle("hidden", shown > 0);
    if (statusEl) {
      if (!query && activeCategory === "all") {
        statusEl.textContent = (dict.clCountAllFmt || "{total}").replace("{total}", String(total));
      } else {
        statusEl.textContent = (dict.clCountFmt || "{shown}/{total}")
          .replace("{shown}", String(shown))
          .replace("{total}", String(total));
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

    var phNodes = document.querySelectorAll("[data-i18n-placeholder]");
    for (var p = 0; p < phNodes.length; p++) {
      var pKey = phNodes[p].getAttribute("data-i18n-placeholder");
      if (dict[pKey]) phNodes[p].setAttribute("placeholder", dict[pKey]);
    }

    var langBtns = document.querySelectorAll(".lang-btn");
    for (var j = 0; j < langBtns.length; j++) {
      langBtns[j].classList.toggle("active", langBtns[j].getAttribute("data-lang") === currentLang);
    }

    renderReleaseUI();
    updateChangelogFilter();
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
            if (rel.body) releaseState.latestBody = String(rel.body);
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

  // Bind dedicated changelog search, category filter, and version scroll-spy
  var clApp = document.getElementById("changelog-app");
  if (clApp) {
    var searchInput = document.getElementById("cl-search-input");
    var clearBtn = document.getElementById("cl-search-clear");
    var resetBtn = document.getElementById("cl-reset-btn");
    var chips = clApp.querySelectorAll(".cl-chip");
    var verLinks = clApp.querySelectorAll(".cl-ver-link");

    var setCategory = function (cat) {
      activeCategory = cat || "all";
      for (var c = 0; c < chips.length; c++) {
        chips[c].classList.toggle("active", chips[c].getAttribute("data-filter") === activeCategory);
      }
      updateChangelogFilter();
    };

    if (searchInput) {
      searchInput.addEventListener("input", function () {
        updateChangelogFilter();
      });
    }
    if (clearBtn) {
      clearBtn.addEventListener("click", function () {
        if (searchInput) {
          searchInput.value = "";
          searchInput.focus();
        }
        updateChangelogFilter();
      });
    }
    if (resetBtn) {
      resetBtn.addEventListener("click", function () {
        if (searchInput) searchInput.value = "";
        setCategory("all");
      });
    }
    for (var ch = 0; ch < chips.length; ch++) {
      chips[ch].addEventListener("click", function (e) {
        setCategory(e.currentTarget.getAttribute("data-filter"));
      });
    }
    for (var vl = 0; vl < verLinks.length; vl++) {
      verLinks[vl].addEventListener("click", function (e) {
        var clickedVer = e.currentTarget.getAttribute("data-target-ver");
        for (var m = 0; m < verLinks.length; m++) {
          verLinks[m].classList.toggle("active", verLinks[m].getAttribute("data-target-ver") === clickedVer);
        }
      });
    }

    if ("IntersectionObserver" in window) {
      var observer = new IntersectionObserver(function (entries) {
        for (var en = 0; en < entries.length; en++) {
          if (entries[en].isIntersecting) {
            var v = entries[en].target.getAttribute("data-patch-ver");
            if (!v) continue;
            for (var n = 0; n < verLinks.length; n++) {
              verLinks[n].classList.toggle("active", verLinks[n].getAttribute("data-target-ver") === v);
            }
            break;
          }
        }
      }, { rootMargin: "-95px 0px -65% 0px", threshold: 0 });

      var observedCards = clApp.querySelectorAll(".patch-timeline .patch-card");
      for (var oc = 0; oc < observedCards.length; oc++) {
        observer.observe(observedCards[oc]);
      }
    }
  }

  applyLanguage(currentLang);
  loadReleaseMetadata();
})();
