(function () {
  "use strict";

  /**
   * [설정 안내]
   * GitHub Pages (\x60https://<아이디>.github.io/<저장소>\x60)에 올리면 저장소를 자동으로 감지합니다.
   * 커스텀 도메인을 쓰거나 특정 저장소를 고정하려면 아래 GITHUB_REPO에 "아이디/저장소명"을 입력하세요.
   * 예: var GITHUB_REPO = "myaccount/SLauncher";
   */
  var GITHUB_REPO = "MOVINGSTART/SLauncher";

  var I18N = {
    ko: {
      navHome: "홈",
      navFeatures: "주요 기능",
      navChangelog: "패치 내역",
      navGrpGuide: "GRP 적용법",
      navDownload: "다운로드",
      viewAllPatchesBtn: "전체 패치 내역 보기",
      panelGrpGuideBtn: "GRP 적용법 가이드 보기",
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
      p717Summary: "외부 사용자 PC 독립 실행·무교착 복구 전면 개편, 64비트 스타 실행 감지·32비트 자동 전환, 읽기 전용 경로(Program Files)·OneDrive·커스텀 드라이브 완벽 호환",
      p717Item1: "외부 사용자 PC에서 중앙 서버 점검·오프라인이거나 『게임 실행 시 Battle.net 완전 종료』 설정으로 배틀넷 앱이 닫힌 상태에서도 인증 화면에 멈추지 않고 로컬 복구 서버(127.0.0.1:5080) 및 모든 런처·인게임 기능이 즉시 활성화되도록 전면 개편했습니다.",
      p717Item2: "내장 폴백 부트스트랩에서 자동 강퇴(autoKick)·핑 알림(pingAnnounce)이 꺼지던 기본값 불일치와 신규 설치 시 자동 로그인 비활성화 문제를 바로잡아, 첫 실행부터 방제 승률%·블랙리스트 자동 강퇴가 누락 없이 동작합니다.",
      p717Item3: "실행 중인 스타크래프트가 64비트(x86_64)인지 실시간 판별하여 안내하고 트레이에 상주 중인 Battle.net의 32비트 설정을 즉시 갱신하도록 강화했으며, Program Files (x86) 읽기 전용 폴더·OneDrive 문서 폴더·D:/E: 커스텀 설치 드라이브까지 모든 사용자 PC 환경을 완벽 지원합니다.",
      p716Summary: "방 필터링·새로고침 즉시 연동(32비트 자동 고정), Ctrl+L 슬롯·방제 승률%·배틀태그/블랙 강퇴 정상화, 인게임 종족/APM/EAPM·미니맵 핑·최근 플레이어 닉네임 일괄 패치",
      p716Item1: "Battle.net 설정(Battle.net.config)의 스타크래프트 32비트 실행 옵션(Run64Bit=false·Launch32Bit=true)을 자동 고정하고 SceneCefBrowser 브리지 연결 지연을 제거하여 방 필터링·자동 새로고침 등 런처 핵심 연동이 즉시 작동하도록 복구했습니다.",
      p716Item2: "로비·대기 화면에서 Ctrl+L 플레이어/관전자 슬롯 리스트가 즉시 열리고 닫히지 않도록 수정했으며, 방 제목 승률 조건(예: 50%이상, 55%↓, 45~55%, ~50%, 60%~ 등) 자동 파싱 및 미충족 참가자 자동 강퇴 기능을 적용했습니다.",
      p716Item3: "이전 게임의 netPlayerToGame 잔존 값으로 인해 로비 참가자의 배틀태그가 다른 슬롯 유저에게 뒤섞여 표기되던 문제를 차단하고, 정확한 슬롯별 배틀태그 매칭 기반으로 블랙리스트 자동 강퇴가 누락 없이 작동하도록 개선했습니다.",
      p716Item4: "인게임 키패드 0 플레이어 모니터에 종족([Z]/[T]/[P])·실시간 APM·EAPM 표시를 복구하고 무입력 대기 상태에서 APM이 100 이상으로 부풀려지던 오류를 0으로 바로잡았으며, 내 건물에서 유닛이 생산될 때 미니맵에 허위 핑이 찍히던 현상과 최근 플레이어 명단 닉네임 누락을 모두 해결했습니다.",
      p715Summary: "멀티·로더 인게임 엔터(채팅 입력창) 강제 활성화 먹통 핫픽스 및 채팅 상태 보호 정밀화",
      p715Item1: "배틀넷·로더 멀티플레이 진입 시 매 프레임 닫혀 있는 채팅 상태값(ChatBoxMode=0)을 전체 채팅 열림(2)으로 덮어써 엔터키가 강제로 고정되고 단축키·유닛 조작·메뉴 입력이 먹통이 되던 치명적 버그를 즉시 해결했습니다.",
      p715Item2: "인게임 채팅 모드 복구 가드가 실제 채팅 입력창(BinDlg)이 열려 있고 비정상 관전자 전용 모드(5)로 변조된 경우에만 정확히 1바이트 단위로 동작하도록 제한하여 평시 조작과 엔터·Esc 닫기가 100% 순정과 동일하게 작동합니다.",
      p714Summary: "멀티·로더 게임 시작 및 연결 끊김(디싱크) 완벽 해결, 공유 릴레이·프로그램 채팅 악용 차단 및 윈도우 키 오버레이 유지 패치",
      p714Item1: "비(非)EUD 일반 밀리·유즈맵에서 CUnit 3,400 풀의 초기 자유 리스트 순서를 순정(1번 인덱스 역순)과 100% 동일하게 유지하도록 수정하여, 로더·순정 유저와 멀티 플레이 시 시작 직후 발생하던 락스텝 연결 끊김(디싱크)을 완벽 해결했습니다.",
      p714Item2: "다인방 호스트 중계 스트림(resendFlag=0x04), 피어 지연 측정 응답(cmd=0x0C/0x0B), Battle.net 공유 SNP 릴레이 경로 전환 시 발생하던 패킷 가드 오차단·공유 릴레이 격리를 전면 제거하여 모든 공방·로더 방에서 끊김 없이 게임이 시작되도록 정상화했습니다.",
      p714Item3: "배틀태그 은닉(0x3A 해시 변조) 또는 강퇴(0x4E) 이후 공유 SNP 릴레이·외부 프로그램으로 주입되는 원시 UDP 채팅(0x00·0x4C·0x4D·0x5C) 및 강제 종료 패킷(0x39, 필드 순서 변조 포함)만 정밀 식별해 무고한 릴레이 참가자 피해 없이 차단합니다.",
      p714Item4: "StarDesk·oCam·SOOP·NVIDIA 오버레이 등 제3자 상시 최상단(WS_EX_TOPMOST)·UI-Access 유틸리티 창이 떠 있는 환경에서도 윈도우 키(시작 메뉴·검색·작업 표시줄) 입력 시 상단 오버레이·디지털 시계·키패드 0 정보 차트가 절대 사라지지 않도록 윈도우 Z-Band 및 가시 영역 판정을 개선했습니다.",
      p713Summary: "강퇴 후 스타 강제 종료·채팅 박탈·단독 드랍 방어 보안 패치, HD/SD 커스텀 GRP 복구 및 키패드 0·오버레이 개선",
      p713Item1: "스타크래프트: 리마스터(1.23.10) HD·SD AnimSprite 컨테이너에 커스텀 .anim 스킨 텍스처와 프레임 좌표를 직접 바인딩하여 인게임에서 커스텀 GRP 스킨이 적용되지 않던 문제를 해결했습니다.",
      p713Item2: "인게임 키패드 0 플레이어 모니터의 상단 헤더를 한 줄(『방: 제목 · 맵이름』)로 압축하고 불필요한 중복 배틀태그·종족·EPM 표기를 정리했으며, 맵 슬롯 데이터로 인해 허위 관전자(OBS) 줄이 표시되던 현상을 제거했습니다.",
      p713Item3: "플레이 중 윈도우 키(시작 메뉴·검색·작업 표시줄)를 눌렀을 때 상단 메인 오버레이·디지털 시계·플레이어 모니터가 화면에서 사라지지 않고 그대로 유지되도록 개선했습니다.",
      p713Item4: "방 강퇴 이후에도 외부 UDP 패킷으로 방 안 유저의 스타를 강제 종료(0x39·0xCC 트랩)하거나 인게임 채팅 권한을 박탈(위조 플레이어 정보 cmd=6·수신 모드 변조)하고 혼자만 드랍·디스 상태로 분리(위조 드랍 통지 cmd=0x0C/9/0x0B)하던 악성 패킷 및 배틀태그 은닉·외부 프로그램 채팅 주입을 다중 계층(강퇴 엔드포인트 격리·프로토콜 검증·VEH 복구)으로 완벽 차단했습니다.",
      p712Summary: "런처·스타 실행 초기 친구 삭제 오감지 완벽 차단 및 공식 GRP 적용법 가이드 오픈",
      p712Item1: "S런처 및 스타크래프트 실행 직후 Battle.net 친구 목록 모델이 메모리에 완전히 로드되기 전 빈 목록이나 대량 변동이 일시 관측될 때 친구 삭제(친삭) 알림이 오감지되던 문제를 원천 차단했습니다.",
      p712Item2: "프렌즈 데몬 재연결 시 이전 세션의 메모리 알림 시퀀스를 자동 동기화하여 중복 토스트가 재출력되지 않도록 보강하고, 공식 홈페이지 상단에 『GRP 적용법』 전용 가이드를 추가했습니다.",
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
      noShaYet: "표시할 SHA-256 해시 정보가 아직 없습니다.",
      grpPillLabel: "Custom Skin & Resource Guide",
      grpGuideTitle: "GRP 적용법",
      grpGuideSub: "일반 그림 파일(PNG·GIF)부터 리마스터 전용 .anim 스킨, 지형 타일, Iscript·콘솔 UI까지 S런처 안에서 몇 번의 클릭으로 안전하게 적용하고 미리보는 방법입니다.",
      grpStatGlobalLabel: "적용 방식",
      grpStatGlobalVal: "전역 항시",
      grpStatCatalogLabel: "Image 카탈로그",
      grpStatQualityLabel: "지원 화질",
      grpQuick1Title: "대상 선택 · 파일 추가",
      grpQuick1Desc: "『맵 리소스 적용』 탭에서 유닛 이름을 검색해 이미지/ANIM 파일을 등록하거나 분류 폴더에 넣습니다.",
      grpQuick2Title: "RuntimeMod 동기화 · 미리보기",
      grpQuick2Desc: "『RuntimeMod 즉시 동기화』를 누르고 『GRP 미리보기』에서 HD/SD 실제 적용 화면을 확인합니다.",
      grpQuick3Title: "스타 실행 · 인게임 자동 적용",
      grpQuick3Desc: "유즈맵 이름과 무관하게 모든 방에서 자동 적용되며, 토글 OFF 하나로 언제든 순정 복구됩니다.",
      grpTocTitle: "가이드 목차",
      grpNav1: "01. 작동 원리 · 지원 형식",
      grpNav2: "02. 999 Image ID 적용",
      grpNav3: "03. 스킨 팩 폴더 적용",
      grpNav4: "04. HD/SD 미리보기 · 삭제",
      grpNav5: "05. 인게임 확인 · 순정 복구",
      grpNav6: "06. 맵 내장 · 타일 · 보안",
      grpNav7: "07. 문제 해결 (FAQ)",
      grpS1Title: "기본 원리 및 지원 파일 형식",
      grpS1Badge: "원본 맵 무수정",
      grpS1Lead: "S런처의 GRP 그래픽 기능은 개별 유즈맵(.scx / .scm) 파일을 건드리지 않고 전역 UserAssets 및 RuntimeMod 경로를 통해 동작하므로, 공방·밀리·유즈맵 파일명이 무엇이든 항상 동일하게 적용됩니다.",
      grpFmt1Title: "일반 그림 파일 (자동 변환)",
      grpFmt1Desc: "따로 변환 툴을 쓸 필요 없이 999 Image ID 빌더에서 선택하면 HD/SD .anim 스프라이트로 즉시 자동 변환됩니다.",
      grpFmt2Title: "스타 리마스터 스킨 파일",
      grpFmt2Desc: "커뮤니티에서 배포되는 HD/SD 유닛·건물·투사체·기타 .anim 스킨 및 지형 타일 자산을 그대로 등록할 수 있습니다.",
      grpFmt3Title: "스크립트 · 콘솔 UI 확장",
      grpFmt3Desc: "검증된 단일 iscript.bin 애니메이션 스크립트와 허용된 콘솔 UI 스킨도 동일한 RuntimeMod 경로로 안전하게 동기화됩니다.",
      grpS2Title: "999 Image ID로 개별 스킨 바로 적용하기 (권장)",
      grpS2Badge: "가장 쉬운 방법",
      grpS2Lead: "파일 이름 규칙(main_XXX.anim)을 외울 필요 없이, S런처 내장 EUD Editor 기준 999개 Image 카탈로그에서 한글·영문 이름으로 검색해 바로 입힐 수 있습니다.",
      grpS2Step1Title: "『맵 리소스 적용』 메뉴 열기 & 스위치 확인",
      grpS2Step1Desc: "S런처 좌측 사이드바에서 『맵 리소스 적용』 탭을 클릭하고, 상단 『1. GRP 항시 적용』 카드의 『GRP 그래픽 활성화』 스위치가 ON 상태인지 확인합니다.",
      grpS2Step2Title: "원하는 유닛·건물·이펙트 검색 (0 ~ 998)",
      grpS2Step2Desc: "『2. 999 Image ID』 영역에서 분류(전체 / 유닛 203 / 건물 182 / 투사체·효과 287 / 기타 327)를 고르거나 검색창에 『마린』, 『히드라』, 『게이트웨이』, 『239』처럼 이름 또는 번호를 입력해 대상을 선택합니다.",
      grpS2Step3Title: "파일 종류에 맞는 적용 버튼 클릭",
      grpS2Step3Desc: "우측 『커스텀 이미지 적용』 영역에서 준비한 파일 형식에 맞는 버튼을 누릅니다. 일반 그림(PNG/GIF 등)은 『이미지 → 유닛 / 건물 / 투사체 / 기타』를, 이미 만들어진 .anim 파일은 『ANIM → 유닛 / 건물 / 투사체 / 기타』를 선택하면 HD와 SD 자산이 함께 동기화됩니다.",
      grpS2Step4Title: "『RuntimeMod 즉시 동기화』 확인",
      grpS2Step4Desc: "자산 추가 시 자동으로 반영되며, 상단 『RuntimeMod 즉시 동기화』 버튼을 한 번 눌러주면 『맵 GRP 프로필』 상태창에서 적용된 ANIM 개수와 대상 Image 수를 즉시 확인할 수 있습니다.",
      grpS3Title: "분류 폴더에 스킨 팩 한꺼번에 넣기",
      grpS3Badge: "대량 스킨 팩",
      grpS3Lead: "여러 개의 .anim 파일로 구성된 통합 스킨 팩을 보유하고 있다면, S런처의 분류별 전용 폴더에 복사해 한 번에 동기화할 수 있습니다.",
      grpTagFolder: "폴더",
      grpS3Item1: "상단 버튼 줄의 『Unit 폴더』, 『Building 폴더』, 『Projectile 폴더』, 『Other 폴더』, 『Tile 폴더』, 『SD 폴더』 버튼을 누르면 해당 UserAssets 폴더가 탐색기에서 바로 열립니다.",
      grpTagRule: "중요",
      grpS3Item2: "카테고리 격리 규칙: 각 .anim 파일의 Image ID는 반드시 해당 카탈로그 분류 폴더에 넣어야 합니다. (예: 건물 ID 파일을 Unit 폴더에 넣으면 정합성 검사가 안내하며 적용을 멈춥니다.)",
      grpTagSync: "적용",
      grpS3Item3: "파일 복사를 마친 뒤 S런처에서 『RuntimeMod 즉시 동기화』 또는 하단 『전체 리소스 다시 적용』 버튼을 누르면 모든 파일의 무결성 검사 후 일괄 적용됩니다.",
      grpS4Title: "GRP 미리보기에서 HD / SD 확인 및 개별 삭제",
      grpS4Lead: "게임을 켜기 전에도 S런처 안에서 UserAssets에 실제 저장된 HD·SD·타일 프레임을 즉시 렌더링해 눈으로 확인하고 관리할 수 있습니다.",
      grpTagPreview: "확인",
      grpS4Item1: "좌측 사이드바의 『GRP 미리보기』 탭(또는 999 Image ID 카드 하단의 『HD 미리보기』 / 『SD 미리보기』 버튼)을 누르면 실제 적용된 첫 프레임 이미지가 표시됩니다.",
      grpTagControl: "조작",
      grpS4Item2: "우측 상단 『HD / SD』 버튼으로 화질을 즉시 전환할 수 있고, 미리보기 스테이지에서 드래그·방향키·마우스 우클릭으로 스프라이트 이동 느낌까지 바로 테스트할 수 있습니다.",
      grpTagDelete: "삭제",
      grpS4Item3: "우측 『적용된 자산 목록』에서 원하는 항목을 클릭해 전환해 보다가 마음에 들지 않는 스킨이 있다면 상단 『선택 삭제』 버튼으로 해당 스킨만 깔끔하게 지울 수 있습니다.",
      grpS5Title: "스타크래프트 인게임 확인 & 1초 순정 복구",
      grpTagPlay: "실행",
      grpS5Item1: "S런처가 실행된 상태에서 Battle.net 앱의 『플레이(Play)』 또는 S런처 실행 버튼으로 StarCraft: Remastered에 접속하면 자동으로 프로세스를 감지해 GRP 자산을 연결합니다.",
      grpTagF5: "화질",
      grpS5Item2: "인게임 진입 후 『F5』 키로 HD 리마스터 그래픽과 SD 클래식 그래픽을 전환해도 양쪽 화질 모두 끊김 없이 동기화되며, S런처 상태 카드에 『실제 적용: 성공』 여부가 표시됩니다.",
      grpTagReset: "복구",
      grpS5Item3: "순정 그래픽으로 돌아가고 싶을 때: 넣어둔 스킨 파일을 일일이 삭제할 필요 없이 『GRP 그래픽 활성화』 토글만 OFF로 끄면 즉시 순정 상태로 돌아갑니다.",
      grpS6Title: "맵 제작자 내장 · 타일 편집 · 보안 검사",
      grpTagEmbed: "내장",
      grpS6Item1: "맵 파일에 직접 GRP 내장(선택사항): 특정 .scx / .scm 맵 자체에 GRP를 심어 배포하려는 제작자는 『SCX 선택』 후 『맵에 GRP 내장』 및 『실제 맵 트리거 테스트』 기능을 활용할 수 있습니다.",
      grpTagTile: "지형",
      grpS6Item2: "배틀넷 호환 타일 편집: 좌측 『타일 편집』 탭에서 .scx / .scm의 실제 MTXM 지형을 브러시(1×1 ~ 14×14)로 직접 수정·저장할 수 있으며, 첫 저장 전 원본 백업이 자동 생성됩니다.",
      grpTagSec: "보안",
      grpS6Item3: "위장 파일 자동 차단: 모든 스킨·Iscript(iscript.bin 단독 허용)·콘솔 UI 폴더는 적용 전 시그니처를 전수 검사하며, 실행파일(MZ/PE·ELF)이나 압축파일(ZIP·7z·RAR)이 하나라도 섞여 있으면 전체 적용을 즉시 차단해 PC를 보호합니다.",
      grpS7Title: "자주 묻는 질문 · 문제 해결",
      grpFaq1Q: "Q. 스킨을 넣었는데 인게임에서 기본 유닛으로 그대로 나와요.",
      grpFaq1A: "① 『GRP 그래픽 활성화』 토글이 ON인지 확인 후 『RuntimeMod 즉시 동기화』를 눌러주세요. ② 스타크래프트를 먼저 켜둔 상태에서 나중에 설정했다면 게임을 한 번 재실행하거나 인게임 F5 화질 전환을 확인하세요. ③ 입장한 방이 무단수정 의심(사기맵 해시 불일치)으로 감지된 경우 안전을 위해 해당 방에서는 GRP 연결이 자동 보류됩니다.",
      grpFaq2Q: "Q. 다른 사람 화면에도 내 커스텀 GRP 스킨이 보이나요? 방 갈림(디싱크)은 없나요?",
      grpFaq2A: "GRP 그래픽 동기화는 내 화면의 렌더링 텍스처만 안전하게 교체하므로 게임 판정·유닛 데이터에 영향을 주지 않아 일반 배틀넷 유저와 함께 플레이해도 방 갈림(디싱크)이 발생하지 않습니다. (단, 맵 제작자가 『맵에 GRP 내장』으로 배포한 맵은 맵 자체 리소스를 따릅니다.)",
      grpFaq3Q: "Q. 현재 적용 중인 스킨을 파일로 다시 꺼내서 백업할 수 있나요?",
      grpFaq3A: "가능합니다. 『2. 999 Image ID』 우측 카드의 『현재 적용 자산 추출』 영역에서 『추출 → 유닛/건물/투사체/기타』 또는 『타일 추출』을 누른 뒤 『추출 폴더 열기』를 클릭하면 자동 정리된 파일명으로 백업할 수 있습니다."
    },
    en: {
      navHome: "Home",
      navFeatures: "Features",
      navChangelog: "Patch Notes",
      navGrpGuide: "GRP Guide",
      navDownload: "Download",
      viewAllPatchesBtn: "View full patch notes",
      panelGrpGuideBtn: "Read GRP Skin Guide",
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
      p716Summary: "Room Filtering/Refresh Instant Attach (Auto 32-Bit Config), Ctrl+L Lobby Slots, Title Win-Rate % & BattleTag/Blacklist AutoKick, In-Game Race/APM/EAPM, Unit-Blip Ping & Recent Player Nicknames Fix",
      p716Item1: "Automatically enforced 32-bit StarCraft launch settings (Run64Bit=false, Launch32Bit=true) in Battle.net.config and removed SceneCefBrowser bridge attach delays so room filtering and auto-refresh work immediately.",
      p716Item2: "Restored manual Ctrl+L lobby player/observer slot list toggling across lobbies and pre-game screens, and implemented automatic room-title win-rate % rule parsing (50%+, <=55%, 45~55%, etc.) with host AutoKick.",
      p716Item3: "Eliminated BattleTag cross-slot misattribution caused by stale post-match netPlayerToGame mappings so slot BattleTags and Blacklist AutoKick trigger with 100% accuracy.",
      p716Item4: "Added [Z]/[T]/[P] race tags and live EAPM to the in-game Numpad 0 Player Monitor, fixed idle APM reading 0 instead of 100+, stopped false minimap pings when buildings finish training units, and displayed player nicknames clearly in Recent Players.",
      p715Summary: "Multiplayer In-Game Forced-Enter / Stuck Chat Input Hotfix & Chat-Mode Guard Precision Fix",
      p715Item1: "Fixed a critical regression in Battle.net/Loader multiplayer where closed ChatBoxMode (0) was overwritten to All-Chat Open (2) every frame, forcibly locking StarCraft in Enter chat-input mode and blocking all unit commands, hotkeys, and Esc/F10 menus.",
      p715Item2: "Restricted chat-mode recovery strictly to 1-byte writes only when an active chat BinDlg is genuinely open and corrupted to observer-only mode (5), restoring 100% native gameplay controls and Enter/Esc toggling.",
      p714Summary: "Multiplayer/Loader Match-Start & Lockstep Desync Fix, Shared-Relay / Programmatic Chat Exploit Guard & WinKey Overlay Persistence",
      p714Item1: "Preserved exact stock CUnit free-list ordering on non-EUD melee and UMS maps even with the 3,400-unit pool allocated, completely eliminating early-frame lockstep disconnects against vanilla and Loader peers.",
      p714Item2: "Eliminated false packet drops and shared-relay blackholing across host-forwarded multi-peer streams (resendFlag=0x04), peer latency ping/pong frames (cmd=0x0B/0x0C), and Direct-P2P ↔ Battle.net SNP relay transitions so every match starts and plays smoothly.",
      p714Item3: "Added per-slot hidden-BattleTag (0x3A) and post-kick (0x4E) tracking plus full protobuf SNP envelope parsing to block programmatic raw UDP chat injection (0x00/0x4C/0x4D/0x5C) and reordered-field 0x39 crash packets without affecting innocent players on shared relays.",
      p714Item4: "Upgraded Z-band (ZBID_UIACCESS / Immersive Shell) and passive-utility window snapshotting (StarDesk, oCam, SOOP, NVIDIA Overlay, etc.) so the top HUD, clock, and Numpad 0 monitor stay visible when pressing the Windows key while still hiding on Alt+Tab or Win+D.",
      p713Summary: "Post-Kick Remote Termination, Chat-Lock & Solo-Drop Security Defense, HD/SD GRP Fix & Overlay Persistence",
      p713Item1: "Bound custom .anim diffuse/teamcolor textures and frame coordinates directly into StarCraft: Remastered (1.23.10) HD and SD AnimSprite containers so custom GRP unit skins render reliably in-game.",
      p713Item2: "Condensed the in-game Numpad 0 Player Monitor header into a single compact line ('Room · Map'), trimmed redundant BattleTag/race/EPM padding, and eliminated phantom spectator (OBS) rows caused by raw map slot bytes.",
      p713Item3: "Kept the top main HUD, digital clock, and Numpad 0 player monitor visible when pressing the Windows key (Start Menu / Search / Taskbar flyouts) while StarCraft remains active on screen.",
      p713Item4: "Added multi-layer defenses (post-kick endpoint quarantine, Storm control/opcode filtering, and first-chance VEH recovery) blocking post-kick StarCraft termination (0x39/0xCC trap), mid-game chat-permission stripping (forged SYS cmd=6 / chat-mode mutation), targeted solo-drop room splits (forged SYS cmd=0x0C/9/0x0B), stripped-BattleTag spoofing, and unauthorized external UDP chat injection.",
      p712Summary: "False-Positive Friend Removal Alert Elimination & Official GRP Skin Guide",
      p712Item1: "Eliminated false-positive friend-removal alerts triggered during SLauncher or StarCraft startup before Battle.net's in-memory FriendsModel finishes hydrating.",
      p712Item2: "Added automatic notice-sequence priming when reattaching to an existing Friends Daemon to prevent duplicate alerts, and launched the dedicated GRP Skin Guide in the top navigation bar.",
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
      noShaYet: "SHA-256 hash is not available yet.",
      grpPillLabel: "Custom Skin & Resource Guide",
      grpGuideTitle: "GRP Skin Guide",
      grpGuideSub: "Step-by-step instructions to convert standard images (PNG/GIF), apply Remastered .anim skins, preview HD/SD sprites, edit terrain tiles, and restore vanilla graphics in one click.",
      grpStatGlobalLabel: "Scope",
      grpStatGlobalVal: "Global Always-On",
      grpStatCatalogLabel: "Image Catalog",
      grpStatQualityLabel: "Graphics Modes",
      grpQuick1Title: "Pick Target · Add Files",
      grpQuick1Desc: "Search any unit/building in 'Map Resource Apply' to import PNG/GIF/.anim files, or drop skin packs into category folders.",
      grpQuick2Title: "Sync RuntimeMod · Preview",
      grpQuick2Desc: "Click 'Sync RuntimeMod Now' and check both HD and SD sprites directly inside 'GRP Preview'.",
      grpQuick3Title: "Launch StarCraft · Auto-Apply",
      grpQuick3Desc: "Works globally across every lobby regardless of map filename, and restores vanilla graphics instantly when toggled OFF.",
      grpTocTitle: "Guide Contents",
      grpNav1: "01. How It Works · Formats",
      grpNav2: "02. 999 Image ID Builder",
      grpNav3: "03. Bulk Skin Pack Folders",
      grpNav4: "04. HD/SD Preview · Delete",
      grpNav5: "05. In-Game & Instant Reset",
      grpNav6: "06. Map Embed · Tiles · Safety",
      grpNav7: "07. Troubleshooting (FAQ)",
      grpS1Title: "How Global GRP Works & Supported File Formats",
      grpS1Badge: "Zero Map Edits",
      grpS1Lead: "SLauncher's GRP engine syncs through global UserAssets and RuntimeMod directories without modifying .scx / .scm files, so your custom skins stay active across public lobbies, melee, and UMS maps alike.",
      grpFmt1Title: "Standard Images (Auto-Convert)",
      grpFmt1Desc: "Select any image in the 999 Image ID builder to automatically convert and sync both HD and SD .anim sprites without external tools.",
      grpFmt2Title: "SC:R Native Skin Files",
      grpFmt2Desc: "Import community-made HD/SD unit, building, projectile, miscellaneous .anim skins, and custom terrain tile assets directly.",
      grpFmt3Title: "Iscript & Console UI",
      grpFmt3Desc: "Validated standalone iscript.bin animation scripts and approved ConsoleUI skins sync safely through the same RuntimeMod pipeline.",
      grpS2Title: "Apply Individual Skins via 999 Image ID (Recommended)",
      grpS2Badge: "Easiest Method",
      grpS2Lead: "No need to memorize main_XXX.anim numbers — search SLauncher's built-in 999-entry EUD Editor Image catalog by unit name or ID.",
      grpS2Step1Title: "Open 'Map Resource Apply' & Enable the Switch",
      grpS2Step1Desc: "Click 'Map Resource Apply' in SLauncher's left sidebar and confirm that 'Enable GRP Graphics' in Card 1 is toggled ON.",
      grpS2Step2Title: "Search Your Target Unit, Building, or Effect (0–998)",
      grpS2Step2Desc: "Filter by category (All / Units 203 / Buildings 182 / Projectiles 287 / Other 327) or type a name or ID such as 'Marine', 'Hydralisk', 'Gateway', or '239'.",
      grpS2Step3Title: "Click the Matching Import Button",
      grpS2Step3Desc: "Under 'Apply Custom Image', choose 'Image → Unit / Building / Projectile / Other' for PNG/GIF files, or 'ANIM → Unit / Building / Projectile / Other' for prebuilt .anim files.",
      grpS2Step4Title: "Click 'Sync RuntimeMod Now'",
      grpS2Step4Desc: "Assets sync automatically on import; clicking 'Sync RuntimeMod Now' refreshes the GRP Profile status card with your active ANIM and target Image counts.",
      grpS3Title: "Bulk-Install Skin Packs via Category Folders",
      grpS3Badge: "Skin Packs",
      grpS3Lead: "If you have a multi-file .anim skin pack, copy the files into SLauncher's dedicated category folders and sync them all at once.",
      grpTagFolder: "Folders",
      grpS3Item1: "Use the 'Unit Folder', 'Building Folder', 'Projectile Folder', 'Other Folder', 'Tile Folder', and 'SD Folder' buttons to open each UserAssets directory in File Explorer.",
      grpTagRule: "Rule",
      grpS3Item2: "Category isolation: each main_XXX.anim file must reside in its matching catalog folder (e.g., placing a building ID inside the Unit folder will be flagged and halted by validation).",
      grpTagSync: "Sync",
      grpS3Item3: "After copying your files, click 'Sync RuntimeMod Now' or 'Re-apply All Resources' to validate signatures and apply the entire pack.",
      grpS4Title: "Inspect HD / SD Frames & Remove Skins in GRP Preview",
      grpS4Lead: "Render actual UserAssets HD, SD, and tile frames inside SLauncher before even launching StarCraft.",
      grpTagPreview: "Preview",
      grpS4Item1: "Open 'GRP Preview' from the left sidebar (or click 'HD Preview' / 'SD Preview' under the 999 Image ID card) to view the active sprite.",
      grpTagControl: "Controls",
      grpS4Item2: "Toggle 'HD / SD' in the top-right corner and drag, use arrow keys, or right-click on the preview stage to test sprite movement.",
      grpTagDelete: "Remove",
      grpS4Item3: "Select any item in the 'Applied Assets' list on the right and click 'Delete Selected' to cleanly remove just that skin.",
      grpS5Title: "Verify In-Game & Restore Vanilla Graphics in 1 Second",
      grpTagPlay: "Launch",
      grpS5Item1: "With SLauncher running, launch StarCraft: Remastered via Battle.net Play or SLauncher — GRP assets attach automatically.",
      grpTagF5: "HD / SD",
      grpS5Item2: "Press F5 in-game to switch seamlessly between HD Remastered and SD Classic graphics while both modes stay synchronized.",
      grpTagReset: "Reset",
      grpS5Item3: "Want vanilla graphics back? Simply toggle 'Enable GRP Graphics' OFF — no need to delete your saved skin files.",
      grpS6Title: "Map Embedding, Terrain Tile Editor & Malware Blocking",
      grpTagEmbed: "Embed",
      grpS6Item1: "Optional map embedding: mapmakers distributing custom GRP inside a specific .scx / .scm can select the map and use 'Embed GRP into Map'.",
      grpTagTile: "Terrain",
      grpS6Item2: "Battle.net-compatible Tile Editor: paint MTXM terrain tiles (1×1 to 14×14 brush) directly on .scx / .scm maps with automatic first-save backups.",
      grpTagSec: "Security",
      grpS6Item3: "Disguised-binary protection: every skin, iscript.bin, and ConsoleUI folder undergoes magic-byte inspection; any executable (MZ/PE, ELF) or archive (ZIP, 7z, RAR) immediately blocks sync.",
      grpS7Title: "Frequently Asked Questions & Troubleshooting",
      grpFaq1Q: "Q. I added a skin, why does the default unit still appear in-game?",
      grpFaq1A: "1) Verify 'Enable GRP Graphics' is ON and click 'Sync RuntimeMod Now'. 2) If StarCraft was already open beforehand, restart the game or toggle F5 once. 3) In lobbies flagged for suspected map tampering, GRP attachment is paused automatically for safety.",
      grpFaq2Q: "Q. Can other players see my custom GRP skins, or can it cause desyncs?",
      grpFaq2A: "Global GRP replaces local visual textures only without altering gameplay simulation or unit tables, so it never causes desyncs when playing with standard Battle.net players.",
      grpFaq3Q: "Q. Can I export and back up my currently applied skins?",
      grpFaq3A: "Yes — in the 'Export Applied Assets' box of the 999 Image ID card, click 'Export → Unit/Building/Projectile/Other' or 'Export Tiles', then 'Open Export Folder'."
    }
  };

  var currentLang = "ko";
  try {
    var saved = localStorage.getItem("slauncher_lang");
    if (saved === "ko" || saved === "en") currentLang = saved;
  } catch (_) {}

  var releaseState = {
    tag: "v0.6.717",
    publishedAt: "2026-11-17T13:22:40Z",
    setupName: "SLauncher-0.6.717-win-setup.exe",
    setupUrl: "https://github.com/MOVINGSTART/SLauncher/releases/download/v0.6.717/SLauncher-0.6.717-win-setup.exe",
    setupBytes: 83773718,
    setupSha256: "608328b239a0bf219c1eac6977fb72dccf75e6a68ec830b7ded2f1f63d49d8b9",
    zipName: "SLauncher_v0.6.717.zip",
    zipUrl: "https://github.com/MOVINGSTART/SLauncher/releases/download/v0.6.717/SLauncher_v0.6.717.zip",
    zipBytes: 83194006,
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
          .replace(/\x60([^\x60]+)\x60/g, "$1")
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

  // Bind dedicated GRP guide TOC scroll-spy
  var grpApp = document.getElementById("grp-guide-app");
  if (grpApp) {
    var guideLinks = grpApp.querySelectorAll("[data-guide-sec]");
    for (var gl = 0; gl < guideLinks.length; gl++) {
      guideLinks[gl].addEventListener("click", function (e) {
        var sec = e.currentTarget.getAttribute("data-guide-sec");
        for (var gm = 0; gm < guideLinks.length; gm++) {
          guideLinks[gm].classList.toggle("active", guideLinks[gm].getAttribute("data-guide-sec") === sec);
        }
      });
    }
    if ("IntersectionObserver" in window) {
      var guideObserver = new IntersectionObserver(function (entries) {
        for (var ge = 0; ge < entries.length; ge++) {
          if (entries[ge].isIntersecting) {
            var gSec = entries[ge].target.getAttribute("data-guide-card");
            if (!gSec) continue;
            for (var gn = 0; gn < guideLinks.length; gn++) {
              guideLinks[gn].classList.toggle("active", guideLinks[gn].getAttribute("data-guide-sec") === gSec);
            }
            break;
          }
        }
      }, { rootMargin: "-95px 0px -65% 0px", threshold: 0 });

      var guideCards = grpApp.querySelectorAll("[data-guide-card]");
      for (var gc = 0; gc < guideCards.length; gc++) {
        guideObserver.observe(guideCards[gc]);
      }
    }
  }

  applyLanguage(currentLang);
  loadReleaseMetadata();
})();
