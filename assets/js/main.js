(function () {
  "use strict";

  /**
   * [설정 안내]
   * GitHub Pages (https://<아이디>.github.io/<저장소>)에 올리면 저장소를 자동으로 감지합니다.
   * 커스텀 도메인을 쓰거나 특정 저장소를 고정하려면 아래 GITHUB_REPO에 "아이디/저장소명"을 입력하세요.
   * 예: var GITHUB_REPO = "myaccount/SLauncher";
   */
  var GITHUB_REPO = "MOVINGSTART/SLauncher";

  var I18N = {
    ko: {
      navHome: "홈",
      navFeatures: "주요 기능",
      navChangelog: "패치 내역",
      navToolsMenu: "GRP · 채팅 기록",
      navGrpGuide: "GRP 적용법",
      navChatHistory: "채팅 기록",
      navJumpOpen: "열기 →",
      navCurrentBadge: "현재 페이지",
      navChatSecConnect: "로컬 연결 · 폴더 불러오기",
      navChatSecRooms: "날짜 · 참여 방 목록 탐색",
      navChatSecViewer: "대화 뷰어 · 검색 및 TXT 저장",
      navClanSoon: "공개 예정(클랜)",
      navClanSecChannel: "1.16.1 Op 클랜 채널 화면",
      navClanSecList: "클랜 목록 · 검색 기본 틀",
      navClanSecCreate: "클랜 개설 · 명령어 기본 틀",
      clanPillLabel: "1.16.1 Fish Server Style · Coming Soon",
      clanPageTitle: "공개 예정 (클랜 시스템)",
      clanPageSub: "스타크래프트 1.16.1 피쉬서버(Fish Server) 시절의 『Op 클랜 채널』 감성을 복원한 기본 UI 틀입니다. 현재는 화면 레이아웃만 먼저 공개되며 실제 기능은 추후 업데이트에서 연결됩니다.",
      clanStatThemeLabel: "UI 콘셉트",
      clanStatStateLabel: "현재 상태",
      clanStatStateVal: "공개 예정",
      clanSoonTag: "UI 미리보기",
      clanSoonDesc: "모든 버튼·입력창은 1.16.1 피쉬서버 스타일 기본 화면 구성을 보여주기 위한 비활성 프리뷰 상태이며, 서버 연동 및 클랜 기능은 아직 동작하지 않습니다.",
      clanS1Title: "1.16.1 피쉬서버 『Op 클랜 채널』 기본 화면",
      clanPreviewOnlyBadge: "기능 미활성 · UI 틀",
      clanWinTitle: "Battle.net — Fish Server Style Op Channel (1.16.1 UI)",
      clanWinMeta: "PREVIEW ONLY · 비활성 샘플",
      clanBtnCreate: "클랜 생성",
      clanBtnJoin: "클랜 가입",
      clanBtnList: "클랜 목록",
      clanBtnChannel: "채널 이동",
      clanBtnMatch: "클랜 내전",
      clanBtnQuit: "나가기",
      clanChanTopic: "클랜 전용 채널 예시 · Fish Server 1.16.1 감성",
      clanChatSys1: "--- Op SLauncher- 채널에 입장했습니다. (1.16.1 UI 미리보기) ---",
      clanChatMotd: "[클랜 공지] SLauncher 클랜 시스템 기본 UI 프리뷰입니다. (기능 공개 예정)",
      clanChatMsg1: "예전 1.16.1 피쉬서버 Op 클랜 채널 화면 구성 그대로 먼저 틀을 잡았습니다.",
      clanChatMsg2: "클랜장 블리자드(BLIZZARD), 부마·옵 초록 b.net, 보이스 은색 나팔 아이콘 그대로네요!",
      clanChatMsg3: "/c l 클랜원 목록, /c m 전체 공지 같은 기본 명령어도 추후 연동 예정입니다.",
      clanChatWhisper: "<From: SL]Bisu> 내전 헌터 4:4 자리 남으면 불러주세요! (예시 대화)",
      clanChatSys2: "[안내] 현재 화면은 정적 UI 프리뷰이며 채팅 전송·명령어 기능은 비활성 상태입니다.",
      clanInputPh: "채팅 및 /clan 명령어 입력창 (공개 예정 — 기능 비활성)",
      clanBtnSend: "보내기",
      clanBtnWhisper: "귓속말",
      clanRosterTitle: "Op SLauncher- (8)",
      clanS2Title: "클랜 목록 · 검색 기본 틀 (공개 예정)",
      clanSearchPh: "클랜명 · 태그(예: SL]) · Op 채널명 검색 (공개 예정)",
      clanFilterAll: "전체",
      clanFilterOpen: "모집 중",
      clanFilterOp: "Op 채널 활성",
      clanColTag: "태그",
      clanColName: "클랜명 · Op 채널",
      clanColMaster: "클랜 마스터",
      clanColMembers: "인원",
      clanColStatus: "상태",
      clanColAction: "가입 신청",
      clanSampleSoon: "공개 예정",
      clanSampleClosed: "예시 항목",
      clanApplyBtn: "가입 신청 (예정)",
      clanS3Title: "클랜 개설 · 등급 및 명령어 기본 틀",
      clanFormTitle: "신규 클랜 개설 양식 (미리보기)",
      clanFormSub: "추후 업데이트 시 클랜 태그와 전용 Op 채널을 등록할 수 있는 기본 입력 틀입니다.",
      clanFieldName: "클랜 이름",
      clanFieldTag: "클랜 태그",
      clanFieldChan: "기본 Op 채널",
      clanFieldIntro: "클랜 소개 · 공지 (MOTD)",
      clanSubmitSoonBtn: "클랜 개설하기 (공개 예정)",
      clanSpecTitle: "1.16.1 피쉬서버 등급 · 명령어 구성 (예정)",
      clanSpecSub: "과거 피쉬서버 Op 채널에서 쓰이던 직관적인 권한 체계와 슬래시 명령어 레이아웃입니다.",
      clanRankMaster: "클랜장 (BLIZZARD)",
      clanRankOp: "부마스터 · 옵 (b.net)",
      clanRankVoice: "보이스 클랜원 (나팔)",
      clanCmdListDesc: "클랜원 전체 명단 및 현재 온라인·접속 방 상태 확인",
      clanCmdSetDesc: "소속 클랜의 Op 채널을 기본 입장 채널로 지정",
      clanCmdMsgDesc: "접속 중인 클랜원 전체에게 클랜 공지·내전 호출 전송",
      clanCmdGiveDesc: "부마스터·옵(b.net · op) 및 클랜원 보이스(나팔 · vop) 권한 부여",
      navOnlineFmt: "실시간 {online}명",
      navUsersFmt: "사용자 {users}명",
      navUserTooltipFmt: "현재 SLauncher 실시간 접속 {online}명 · 누적 사용자 {users}명",
      navDownload: "다운로드",
      viewAllPatchesBtn: "전체 패치 내역 보기",
      panelGrpGuideBtn: "GRP 적용법 가이드 보기",
      panelChatHistoryBtn: "날짜별 채팅 기록 보기",
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
      p738Summary: "채널 친구 목록·배틀넷 목록 1:1 실시간 일치 동기화, 멀티 런처 환경 오버레이 시계·HUD·인게임 안내 문구 복구 및 해상도 전환 재정렬 개선",
      p738Item3: "배틀넷에서 『오프라인 표시』 상태이거나 접속 종료·앱 대기 전환된 친구가 인게임 채널 친구 목록(온라인 수·프로그램 그룹)에 잔류하거나 채널 퇴장 알림이 반복 출력되던 현상을 해결하여, 스타크래프트 채널 친구 목록과 공식 Battle.net 친구 목록이 실시간 1:1로 정확히 일치하도록 수정했습니다.",
      p738Item1: "바탕화면에 외부 멀티 런처(scr-multi-launcher 등)가 열려 있거나 StarCraft_SL.exe 파일이 남아 있는 환경에서 일반 스타크래프트 리마스터(StarCraft.exe) 실행 시 타 런처 프로세스로 오판해 연결이 건너뛰어지던 현상을 해결하고, 솔로 커스텀 방·싱글플레이 진입 시에도 『[s런처] 핵 감지기 사용중 입니다.』 인게임 안내 문구와 상단 HUD·오버레이 시계가 즉시 정상 출력되도록 수정했습니다.",
      p738Item2: "오버레이 디지털 시계(YYYY/MM/DD HH:MM:SS)에 외곽 그림자 렌더링과 즉시 리페인트를 적용해 밝은 배경에서도 선명하게 보이도록 개선했으며, 창 모드와 전체 화면(창 모드) 전환·해상도 변경 시 시계 우측 여백과 화면 좌표를 실시간 추적하여 정확한 위치에 유지되도록 보강했습니다.",
      p737Summary: "인게임·대기실 실시간 채팅 기록 누락(0바이트) 완벽 수정, 본인 참여 방 전용 날짜별 채팅 기록 UI(공식 사이트·런처 내장) 추가 및 빈 로그 파일 자동 정리",
      p737Item1: "최신 스타크래프트 리마스터 빌드에서 채팅 기록 파일이 방 제목 없이 0바이트 빈 텍스트 파일로 생성되던 문제를 근본 해결하여, 본인이 직접 참여한 멀티플레이 인게임 및 대기실 채팅이 정확한 방 제목·시각·경과 초와 함께 비동기 실시간 저장됩니다. (리플레이 재생·외부 공개 채널 제외, 빈 로그 자동 정리)",
      p737Item2: "공식 사이트 상단 『GRP 적용법』 우측 및 런처 내부 작업창·도우미(Ctrl+H)에 『채팅 기록』 전용 UI를 추가했습니다. 외부 서버 공유 없이 내 PC 로컬 연동만으로 본인이 직접 참여한 방·게임 목록을 날짜·시간별로 탐색하고 참여자별 필터링, 키워드 검색, TXT 복사·저장을 바로 사용할 수 있습니다.",
      p737Item3: "기존 K런처 채팅 기록 폴더에 남아 있던 정상 대화 기록을 자동으로 통합 불러오고, 비어 있던 0바이트 로그 파일과 빈 날짜 폴더를 자동 정리하여 날짜별 목록이 깔끔하게 유지됩니다.",
      chPillLabel: "Local Participated Chat Archive",
      chTitle: "날짜별 채팅 기록",
      chSubtitle: "타인의 채팅은 수집·노출되지 않으며, 오직 내 PC에서 본인이 직접 참여한 방·게임의 채팅 기록만 날짜와 시간순으로 확인합니다.",
      chStatDates: "기록된 날짜",
      chStatSessions: "내 참여 방·게임",
      chStatLines: "누적 대화 줄",
      chConnChecking: "내 PC SLauncher 연결 확인 중…",
      chConnLive: "내 PC SLauncher 로컬 연결됨",
      chConnLocalFiles: "로컬 폴더 파일 불러옴",
      chConnOffline: "SLauncher 미실행 (런처를 켜거나 『폴더 직접 불러오기』를 눌러주세요)",
      chPrivacyNote: "외부 서버 미전송 · 본인 참여 방 전용 (리플레이·공개 채널 제외)",
      chBtnRefresh: "새로고침",
      chBtnOpenFolder: "채팅기록 폴더 열기",
      chBtnImportLocal: "폴더 직접 불러오기",
      chColDates: "날짜별 목록",
      chColRooms: "참여한 방 목록",
      chAllDates: "전체 날짜",
      chLoadingDates: "날짜 목록을 불러오는 중입니다…",
      chRoomSearchPh: "방제 또는 참여자 닉네임 검색…",
      chScopeAll: "내 참여 전체",
      chScopeSpoke: "내가 채팅 친 방만",
      chSelectDateHint: "좌측에서 날짜를 선택하면 본인이 참여한 방 목록이 표시됩니다.",
      chViewerEmptyTitle: "방을 선택해 주세요",
      chMsgSearchPh: "대화 내용 · 닉네임 검색…",
      chBtnCopyTxt: "전체 복사",
      chBtnDownloadTxt: "TXT 저장",
      chBtnDelete: "삭제",
      chPlaceholderTitle: "내 참여 게임·대기실 채팅 기록 뷰어",
      chPlaceholderDesc: "SLauncher가 실행 중이면 내 PC에 저장된 채팅 기록이 날짜별로 자동 연결됩니다. 좌측에서 날짜와 방을 클릭해 대화를 확인하세요.",
      chEmptyNoLogs: "아직 기록된 참여 방 채팅이 없습니다. 게임을 플레이하고 채팅하면 날짜별로 자동 저장됩니다.",
      chEmptyFiltered: "검색 또는 필터 조건과 일치하는 방 기록이 없습니다.",
      chKindInGame: "인게임",
      chKindLobby: "대기실",
      chPartAll: "전체 참여자",
      chSelfBadge: "나",
      chCopiedToast: "채팅 기록 전체 텍스트를 클립보드에 복사했습니다.",
      chDeletedToast: "선택한 채팅 기록 파일을 삭제했습니다.",
      chDeleteConfirm: "이 방의 채팅 기록 파일을 삭제하시겠습니까?",
      p736Summary: "비공개 대기실 원클릭 따라가기([->]) 전면 활성화, 인게임 상단 방제(『방: ...』) 오표기·연속 게임 잔류 해결, 친구 목록 위치·채널명 정확도 개선 및 Windows 보안 오탐 해결",
      p736Item1: "방제가 공개된 비공개 대기실뿐만 아니라 배틀넷 정책상 방제가 가려진 『비공개 대기실』 상태의 친구에게도 초록색 따라가기([->]) 아이콘과 우클릭 『대기실 참가』 메뉴가 항상 활성화되며, 동일 채널·방 목록·FriendInfo 메모리 연동을 통해 비공개 방제·비밀번호 전파 및 게임 시작 시 『비공개 플레이 중』 전환이 즉시 반영됩니다.",
      p736Item4: "방 목록에서 다른 공방을 클릭한 뒤 방을 직접 생성하거나 세이브 게임으로 시작했을 때 인게임 상단 오버레이(『방: ...』)에 이전 클릭 방제가 표시되던 현상을 근본 해결하고, 실제 인게임 진행 구간에서 스타크래프트 엔진 방제 메모리와 실시간 동기화 및 경기 종료 즉시 이전 방제·생성 캐시를 초기화하도록 수정했습니다.",
      p736Item2: "32비트 스타크래프트 CEF 브라우저 매니저 구조체 오프셋 변경으로 인해 친구 패널 브리지 주입이 누락되던 문제를 복구하고, 오프라인 표시(BSAp) 접속자 승격·채널 참여자 및 리더보드 API 기반 부캐릭터 자동 탐색을 강화해 실제 접속 중인 친구가 『메뉴』에만 머물거나 인게임 도중 채널 입장 알림이 오출력되던 현상을 해결했습니다.",
      p736Item3: "설치 파일(Setup.exe) 및 자동 업데이터의 임시 PowerShell 스크립트 실행을 전면 제거하고 순수 C++ 네이티브 ZIP 압축 해제·COM 바로가기 생성으로 전환했으며, 단일 설치 파일 오버레이 결합 후 PE 헤더 체크섬 정밀 재계산 및 전 실행 파일 표준 UAC 매니페스트 내장을 적용해 Windows 보안(Defender) 오탐 차단을 해결했습니다.",
      p735Summary: "외부 유료 런처(HLauncherPay 등) 강제 드랍 공격 전 구간 실시간 원천 차단, 블랙리스트 메모장(TXT) 과적재로 인한 도우미(Ctrl+H) 먹통 완벽 해결 및 누적 메모장 파일 자동 삭제",
      p735Item1: "직접 UDP·배틀넷 중계(SNP)·TURN 릴레이 채널 및 즉시 완료 비동기 소켓 수신 경로 전 구간에서 외부 유료 런처(HLauncherPay 등)가 전송하는 위조 강제 드랍·타 슬롯 이탈 유도 패킷을 대기실·로딩·브리핑·인게임 초반부터 끝까지 실시간 무력화합니다. (방장·게스트·관전자 발신 전부 방어, 상단 『강제 드랍 공격 실시간 차단』 알림 표시, 대기실 비방장 공격자 즉시 자동 강퇴·재입장 원천 차단 및 정상 초록 핑·자진 퇴장·실제 타임아웃 드랍 오탐 0% 보장)",
      p735Item2: "블랙리스트 『TXT 가져오기』 클릭 후 일반 메모장 파일을 잘못 선택했을 때 수백·수천 줄이 무검증 등록되며 컴팩트 도우미(Ctrl+H) 창이 멈추던 현상을 근본 해결했습니다. TXT 파일 사전 형식·용량 검증과 추가 전 확인 안내창, 원클릭 『메모장·로컬 초기화』 버튼(큰 UI 및 Ctrl+H 도우미 내장)을 추가하고 대량 목록 동기화를 비동기 일괄 처리로 최적화하여 도우미(Ctrl+H)가 항상 즉시 반응합니다.",
      p735Item3: "업데이트 실행 시 기존에 비정상 누적된 외부 메모장 블랙리스트 파일·중복 데이터와 런타임 폴더에 쌓여 있던 임시 텍스트 로그 파일들을 자동으로 일괄 정리·삭제하도록 개선했습니다.",
      p734Summary: "대기실 고의 지속렉·본인 슬롯 오탐 차단, 상단 오버레이·서브시스템 중복 실행 정리 및 채널 친구 목록 메모 노출·실시간 위치 표시 완벽 수정",
      p734Item1: "대기실 대기 구간에서 『고의 지속렉/턴홀드 의심』 경고나 본인 슬롯 오탐이 발생하거나 경기 종료 후 이전 판 알림이 잔류하던 문제를 차단하고, 좌측 상단 오버레이·FPS·접힌 도우미(Ctrl+H) 바 위치가 서로 겹치지 않도록 정렬했습니다.",
      p734Item2: "채널에서 친구 목록 확인 시 배틀넷 친구 메모가 그대로 노출되어 『플레이 중 / 대기실 / 채널』 위치가 정상 표시되지 않던 문제를 해결하고, 메모와 다른 부캐(서브 ID)로 접속 중인 친구도 계정의 전체 캐릭터를 자동 탐색해 실제 닉네임과 실시간 위치를 즉시 표시하도록 개선했습니다.",
      p734Item3: "배속 가드·핑 측정 엔진(StarPing)·자동 강퇴·단축키 및 UI 타이머의 중복 실행 경합을 단일 경로로 통합하고, 스타크래프트와 런처 종료 후 보조 프렌즈 데몬이 백그라운드에 남지 않도록 자동 정리를 강화했습니다.",
      p733Summary: "친구 사용자 지정 게임 참가 알림 중복 반복 출력 수정, 방 입장 렉 최적화 및 선택형 업데이트 전환",
      p733Item1: "비공개(암호) 대기실 및 사용자 지정 게임에 참가 중인 친구 1명의 『친구 ... 님이 사용자 지정 게임 ...에 참가했습니다.』 알림이 상태 갱신 주기마다 중복 반복 출력되던 현상을 수정하여, 실제로 방을 나갔다 다시 입장하기 전까지 방당 1회만 표시되도록 개선했습니다.",
      p733Item2: "배틀넷 방 입장 시 중첩 실행되던 인게임 브리지 스크립트 재주입·초기 백그라운드 조회 및 타이머 부하를 제거하여 대기실 진입 구간의 끊김과 입장 렉을 대폭 해소했습니다.",
      p733Item3: "업데이트 방식을 강제 차단에서 선택형 안내(『지금 업데이트』 / 『나중에 하기』)로 전환하여 원할 때 자유롭게 업데이트하거나 현재 버전으로 즉시 실행할 수 있도록 개선했습니다.",
      p732Summary: "타인 건물 우클릭 랠리핵·AliveHack·컴샛 스캔핵 정밀 감지, 스풋·방폭 공격자 재입장 원천 차단(문지기 방어) 및 리플레이 악성 명령 자동 제거·재생 복구 추가",
      p732Item1: "타인 건물 선택 상태에서 우클릭으로 랠리포인트를 우회 변경하는 패킷, 비소유·타인 건물 기준 컴샛 스캔 시전 및 부대지정 없는 단일 턴 오토컴샛·생존 회피 매크로(AliveHack)를 정밀 감지·차단 등록합니다.",
      p732Item2: "룸붐·프로토콜 익스플로잇·슬롯 하이재킹·배틀태그 변조 스풋 및 강퇴 조치가 확정된 공격자 출처가 포트나 닉네임을 바꿔 같은 방에 재입장하려는 시도를 방 진입 단계에서 즉시 원천 차단합니다.",
      p732Item3: "리플레이 저장·로드 및 경기 종료 후 리플레이 파일 점검을 통해 되감기 무한루프·배속 테러·강제 종료 크래쉬·초과 선택 오버플로우·변조 채팅 폭탄만 안전하게 제거하여, 턴 지연 싱크 손상 없이 끝까지 정상 재생되도록 자동 복구합니다.",
      p731Summary: "최고관리자 권한 변경",
      p731Item1: "최고관리자 권한 변경",
      p730Summary: "플레이어 감지 UI 배틀태그 누락 완벽 복구, 방 입장 핵 감지기 안내 채팅 추가, 공개 대기실 오표기 해결 및 자기 시그니처 오탐 종료·공백 닉네임 오탐 알림 수정",
      p730Item1: "공개 방 목록 최상단(1순위) 방의 노출 순위값(visibility=1)이 비공개 속성으로 잘못 해석되거나 이전 동일 방제의 비밀번호 캐시가 재적용되어, 정상 공개 방이 프렌즈 패널에서 『비공개 대기실: ...』로 표시되던 문제를 완벽히 수정했습니다.",
      p730Item2: "런처·설치·보조 프로세스 실행 또는 즉시 종료 시 내장 안티치트 시그니처 문자열이 자기 바이너리와 매칭되며 『open-failed』 보안 차단으로 런처가 자동 종료되던 현상을 근본 해결했습니다.",
      p730Item3: "방 입장 직후 슬롯 초기화 구간의 임시 공백 바이트가 『공백 닉네임 변조 / (공백위장)』로 오탐되던 현상과 일반 띄어쓰기 닉네임 유저 입장 시 대기실에 자동 출력되던 안내 문구를 모두 정리했습니다.",
      p730Item4: "스타크래프트 비동기·WSARecvFrom UDP 수신 경로와 관전자 슬롯(Obs1~Obs4) 패킷, 로컬 Aurora 프로필 연동 및 다중 캐릭터 슬롯 매칭을 전면 복구하여, 『플레이어 감지 UI』에서 모든 플레이어와 관전자의 배틀태그가 입장 즉시 빠짐없이 표시되도록 수정했습니다.",
      p730Item5: "배틀넷 사용자 지정 게임 대기실 입장 시 『[S런처] 핵 감지기가 작동 중입니다. movingstart.github.io/SLauncher』 안내 채팅이 방당 1회 자동 송출되도록 추가했으며, 설정에서 방 입장·게임 시작 안내 문구를 통합 ON/OFF 할 수 있습니다.",
      p729Summary: "컴팩트 도우미(Ctrl+H) 최상단 고정 알림 중복 항목 정리 및 다인 방 친구 입장 알림 삭제·이름 누락 현상 완벽 수정",
      p729Item1: "컴팩트 도우미(Ctrl+H) 설정 창에서 『배틀넷 방』과 『채팅』 두 섹션에 중복 노출되던 『[방장] 방 최상단 고정 텍스트 알림 ([S런처])』 스위치를 『배틀넷 방』 단일 항목으로 통합 정리했습니다.",
      p729Item2: "동일 사용자 지정 게임 방에 2명 이상의 친구가 함께 입장하거나 연속 참가할 때 『친구 님이 사용자 지정 게임 ...에 참가했습니다.』 입장 알림이 통째로 삭제·누락되거나 친구 이름이 빈칸으로 출력되던 현상을 근본 해결하여, 모든 친구의 입장 알림과 『닉네임 (배틀태그)』가 빠짐없이 표시되도록 수정했습니다.",
      p728Summary: "상대방 친구 삭제 감지 시 본인 식별 해시 오탐으로 런처·오버레이·시계가 동반 종료되던 핫픽스 및 본인 계정 검증 격리 강화",
      p728Item1: "방 입장 초기 틱이나 슬롯·관전자 이동 순간 대기실 슬롯에서 타 유저의 배틀태그 해시가 본인 식별 캐시에 섞여 저장되어, 이후 해당 상대방이 나를 친구 삭제해 사용 제한 명단에 등록될 때 피해자인 내 런처까지 자동 종료되며 상단 오버레이와 시계가 사라지던 문제를 근본 수정했습니다.",
      p728Item2: "기존 오염 가능성이 있던 구버전 본인 해시 캐시를 실행 즉시 자동 정리 및 V2 저장소로 분리하고, 인게임 방 슬롯 대신 로컬 Battle.net 로그인 계정·프렌즈 브리지 본인 계정·OAuth 인증 정보만 본인 식별에 사용하도록 격리했습니다.",
      p727Summary: "인게임 디스창 숨기기(Num - 표시 전환) 도입, 디스창 대기 시간 1초 단축 및 디스 플레이어 내보내기 시 동반 연결 끊김 현상 완벽 해결",
      p727Item1: "인게임 대기(디스)창 자동 숨기기 옵션을 컴팩트 도우미(Ctrl+H)·전체 설정·스타크래프트 내부 설정에 추가했으며, 디스창이 떠 있는 상태에서 넘패드 -(Num -) 또는 Alt+Shift+D 키로 언제든지 디스창을 숨기거나 다시 띄워 플레이어 내보내기를 누를 수 있습니다.",
      p727Item2: "상대방 또는 관전자 지연으로 디스창이 열릴 때 기본 45초 카운트다운을 즉시 1초로 단축하여 지체 없이 내보내기 버튼이 활성화되도록 개선했습니다.",
      p727Item3: "유즈맵 빈 선택(0유닛) 동기화 턴 패킷이 오탐 차단되어 내 화면에서만 특정 유저가 디스 뜬 것처럼 보이던 문제와, 다인 방에서 1초 만에 먼저 내보내기를 눌렀을 때 순정 45초 타이머를 기다리는 다른 정상 유저들과의 시차로 본인까지 『게임과의 연결이 끊겼습니다.』로 튕기던 동반 끊김 원인을 모두 근본 해결했습니다.",
      p726Summary: "GRP 미적용 일반 맵 기본 유닛 자동 복원, 비방장 [방장] 오표기 수정 및 플레이어 감지 UI 배틀태그 표시 정상화",
      p726Item1: "내장 GRP가 포함된 맵이거나 GRP 설정에서 직접 지정한 맵을 열었을 때만 커스텀 유닛 스킨이 작동하도록 개선하고, 일반 밀리·유즈맵 진입 시에는 교체된 유닛 그래픽을 즉시 순정 스타크래프트 기본 유닛으로 자동 복원합니다.",
      p726Item2: "스타크래프트 내부 로컬 플레이어 슬롯 상태값이 방장으로 오인되어 게스트 입장 시에도 키패드 0 정보 차트·슬롯 매니저(Ctrl+L)·대기실 표시에 『[방장]』 배지가 붙던 현상을 수정하고, 실제 방 생성 및 공식 방장 승계 시에만 방장 표시가 나타나도록 바로잡았습니다.",
      p726Item3: "대기실 네트워크 식별자와 배틀태그 패킷을 즉시 연동하고 다중 캐릭터(게임 닉네임과 배틀태그가 다른 계정) 갱신 시 배틀태그가 초기화되던 문제를 해결하여, 플레이어 감지 UI와 인게임 오버레이 모두 닉네임과 배틀태그가 누락 없이 함께 표시됩니다.",
      p725Summary: "대기실 자리 이동 회피(슬롯 도주) 추적형 자동·수동 강퇴 도입 및 방장 승계 즉시 자동 강퇴 연동 패치",
      p725Item1: "블랙리스트·고유 식별자 차단·방제 승률 조건·#S 인증 대상자 및 방장이 직접 강퇴를 누른 대상이 플레이어(P1~P8)와 관전자(Obs1~Obs4) 슬롯 사이를 빠르게 옮겨 다니며 강퇴를 회피하더라도, 배틀태그·식별자 기반으로 이동한 슬롯 끝까지 실시간 추적하여 방 추방 및 강퇴를 즉시 집행합니다. (일반 유저의 자유로운 자리 변경에는 일절 간섭하지 않습니다.)",
      p725Item2: "대기실에 게스트로 입장해 있다가 기존 방장이 퇴장하여 본인에게 방장 권한이 승계되는 즉시 방장 상태를 자동 동기화하고, 방 안에 머물고 있는 모든 플레이어·관전자 슬롯에 대해 자동 강퇴 정책을 지연 없이 일괄 적용합니다.",
      p724Summary: "실시간 닉네임 위장·변조([닉변조]) 정밀 감지 및 전적·배틀태그 병기, 저그 자원핵 오탐·경고음 해결, 경기 후 도우미(Ctrl+H) 빈 창 버그 및 큰 UI·도우미 누적 렉 완벽 최적화",
      p724Item1: "대기실 서버 인증 프로필 불일치, 인게임 도중 닉네임 강제 변경, 초고속 슬롯 닉네임 교체, 색상·제어·투명 공백 문자 위장 및 패킷 신원 변조를 실시간 감지하여 일반 유저(프로필명≠배틀태그·자리 이동) 오탐 없이 실제 닉네임 변조 행위만 정밀 식별합니다.",
      p724Item2: "닉변조 감지 즉시 상단 SDetector 배너와 대기실·인게임 로컬 채팅창(『[S런처] ⚠ [닉변조]』)으로 알리고, 키패드 0 정보 차트·슬롯 매니저(Ctrl+L)·컴팩트 도우미(Ctrl+H)·런처 플레이어 목록 전체에 『[닉변조]』 배지와 실제 프로필·배틀태그 및 원래 승패 전적을 함께 표시합니다.",
      p724Item3: "인게임 중 상대 저그가 다수의 오버로드를 동시에 부화하거나 빠른무한·건물 취소 등으로 자원·인구수가 급변할 때 자원핵(미네랄핵·가스핵·인구수핵)으로 오감지되어 경고음과 패널 알림이 반복 출력되던 문제를 근본 해결했습니다.",
      p724Item4: "경기 종료 후 컴팩트 도우미(Ctrl+H) 단축키 입력 시 창 테두리만 뜨고 내부 기능 텍스트가 보이지 않던 화면 복구 누락 버그를 해결하고, 큰 설정 화면(큰 UI) 진입 및 도우미 열기·닫기·설정 변경을 반복할 때 백그라운드 렌더링과 로그·테이블 갱신이 누적되어 발생하던 렉 현상을 전면 최적화했습니다.",
      p723Summary: "공개방 목록 최상단 고정·30초 자동 갱신 및 [S런처] 알림 ON/OFF 도입, 스타크래프트 화면 클릭 시 오버레이·시계·정보 차트 사라짐 현상 완벽 해결",
      p723Item1: "배틀넷 공개방 생성 시 빈 슬롯이 있으면 방 목록 최상단에 자동 고정하고 30초 주기로 방 노출을 갱신하며, 풀방 전환 및 3분 이상 무입력 대기 시 자동으로 최하단 전환·복구합니다. (비밀번호·비공개방 자동 제외)",
      p723Item2: "대기실 채팅창에 출력되는 『[S런처]』 최상단 고정 상태 텍스트 알림을 추가하고, 런처 로비 탭·컴팩트 도우미(Ctrl+H)·인게임 로비 설정에서 최상단 고정 기능과 텍스트 알림을 각각 개별 ON/OFF 할 수 있도록 지원합니다.",
      p723Item3: "컴팩트 도우미(Ctrl+H) 사용 중이거나 다른 창에서 돌아와 스타크래프트 화면을 클릭할 때마다 상단 오버레이·디지털 시계·키패드 0 정보 차트가 게임 창 뒤로 밀려 사라지던 Z-순서 강등 원인을 근본 해결했습니다.",
      p722Summary: "윈도우 키 입력 및 타 창 전환 시에도 상단 오버레이·시계·정보 차트 상시 유지 패치",
      p722Item1: "윈도우 키를 누른 뒤 브라우저·메신저·탐색기·런처 등 다른 창으로 포커스를 전환하더라도 상단 오버레이·디지털 시계·키패드 0 정보 차트가 사라지지 않고 스타크래프트 화면 바로 위 층에 인게임 UI처럼 상시 유지되도록 Z-순서 고정 구조를 적용했습니다.",
      p722Item2: "실시간 창 포커스 이벤트 감지를 통해 다른 창을 띄웠을 때는 해당 창 본문을 가리지 않으면서 보이는 스타크래프트 영역 위에 오버레이를 그대로 표시하고, 스타크래프트 자체 최소화 또는 바탕화면 보기(Win+D) 시에만 자연스럽게 숨겨집니다.",
      p721Summary: "윈도우 키 입력 시 상단 오버레이·시계·정보 차트 사라짐 근본 수정 및 강제 업데이트 해제·선택형 업데이트 알림 UI 도입",
      p721Item1: "창 모드(전체 화면) 환경에서 윈도우 키(시작 메뉴·검색·작업 표시줄·휴대폰 연결 동반 카드) 입력 시 런처 백그라운드 창이 최상단으로 승격되거나 포커스 전환 과정에서 상단 오버레이·디지털 시계·키패드 0 정보 차트가 함께 숨겨지던 근본 원인을 해결했습니다.",
      p721Item2: "기존 최신 버전 강제 차단 방식을 해제하고 전용 다크 테마 업데이트 알림 UI(『지금 업데이트』 / 『나중에 하기』)를 도입하여, 새 버전 출시 시 원하는 시점에 자유롭게 업데이트하거나 현재 버전으로 즉시 실행할 수 있습니다.",
      p720Summary: "전용 클라우드 기반 실시간 접속·누적 사용자 정밀 집계 전환 및 런처 창 종료 후 스타크래프트 단독 플레이 실시간 연동 지원",
      p720Item1: "실시간 접속자 및 누적 사용자 집계를 SLauncher 전용 클라우드 서버 기반으로 전면 전환하여, 버전 업데이트나 재설치 시 중복 합산 없이 기기 기준 실제 누적 사용자 수와 현재 접속 인원을 오차 없이 즉시 반영합니다.",
      p720Item2: "스타크래프트를 실행한 뒤 S런처 창을 닫고 게임만 플레이하는 동안에도 실시간 접속 인원이 끊김 없이 유지되며, 게임과 런처를 모두 종료하면 수 초 내에 실시간 인원에서 즉시 차감되도록 연동했습니다.",
      p719Summary: "비(非)AI·비(非)래더 전 영역 핵·어뷰징 방어 대폭 확장 — 12유닛 초과선택·타인랠리·명령주입·오토마인·멀티커맨드·안개건물선택 감지, 강퇴 유저 부계정 재입장 알림, 지속 고의 렉·채팅 도배 실시간 무력화, OneDrive 미동기화 맵 멈춤 방지",
      p719Item1: "인게임 핵 감지·방어 엔진을 대폭 확장하여 12유닛 초과 선택핵, 타인 건물 랠리포인트 변경핵(팀밀리·동맹 공유제어 자동 제외), 비정상 명령 주입핵을 실시간 포착·무력화하고, 미탐색 검은 안개 속 적 건물을 반복 선택하는 맵핵과 외부 주입 핵 모듈까지 정밀 식별합니다.",
      p719Item2: "일꾼 자동 분배 채취(오토마인) 및 무부대지정 단일 턴 건물 생산·전투 재선택(멀티커맨드·오토큐) 의심 패턴을 오탐 강퇴 없이 화면에 즉시 안내하며, 방에서 내보낸 유저가 30분 내 동일 접속 환경(공용 중계·다중 접속 환경 자동 제외)에서 부계정·다른 닉네임으로 재입장하면 즉시 알려주는 부계정 재입장 알림을 추가했습니다.",
      p719Item3: "단절 반복뿐 아니라 한 명만 단독으로 지속되는 고의 렉·턴 멈춤 현상까지 감지해 디스 타이머 보호를 즉시 가동하며, 인게임 연속 채팅 도배를 키보드 간섭이나 게임 끊김 없이 실시간 자동 묵음 처리합니다. 또한 OneDrive 온라인 전용 미동기화 맵 파일을 열 때 발생하던 멈춤 현상을 방지해 즉시 정상 재다운로드로 전환합니다.",
      p718Summary: "웹 상단 실시간 접속·누적 사용자 현황 카운터 신설 및 런처 내부 중복 사용 인원 배지 일괄 정리",
      p718Item1: "공식 홈페이지 상단 『GRP 적용법』 우측에 기기 익명 해시 기반 실시간 실행 인원과 누적 사용자(설치·다운로드) 수를 즉시 반영하는 실시간 사용자 현황 배지를 추가했습니다.",
      p718Item2: "S런처 로그인·도우미·대시보드·계정 화면에 분산되어 있던 기존 사용 인원 배지를 모두 제거하여 인터페이스를 깔끔하게 정돈하고 백그라운드 경량 Presence 동기화로 일원화했습니다.",
      p717Summary: "외부 사용자 PC 독립 실행·무교착 복구 전면 개편, 64비트 스타 실행 감지·32비트 자동 전환, 읽기 전용 경로(Program Files)·OneDrive·커스텀 드라이브 완벽 호환",
      p717Item1: "외부 사용자 PC에서 중앙 서버 점검·오프라인이거나 『게임 실행 시 Battle.net 완전 종료』 설정으로 배틀넷 앱이 닫힌 상태에서도 인증 화면에 멈추지 않고 로컬 복구 서버 및 모든 런처·인게임 기능이 즉시 활성화되도록 전면 개편했습니다.",
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
      p714Item2: "다인방 호스트 중계 스트림, 피어 지연 측정 응답, Battle.net 공유 SNP 릴레이 경로 전환 시 발생하던 패킷 가드 오차단·공유 릴레이 격리를 전면 제거하여 모든 공방·로더 방에서 끊김 없이 게임이 시작되도록 정상화했습니다.",
      p714Item3: "배틀태그 은닉 또는 강퇴 이후 공유 SNP 릴레이·외부 프로그램으로 주입되는 원시 UDP 채팅 및 강제 종료 패킷만 정밀 식별해 무고한 릴레이 참가자 피해 없이 차단합니다.",
      p714Item4: "StarDesk·oCam·SOOP·NVIDIA 오버레이 등 제3자 상시 최상단(WS_EX_TOPMOST)·UI-Access 유틸리티 창이 떠 있는 환경에서도 윈도우 키(시작 메뉴·검색·작업 표시줄) 입력 시 상단 오버레이·디지털 시계·키패드 0 정보 차트가 절대 사라지지 않도록 윈도우 Z-Band 및 가시 영역 판정을 개선했습니다.",
      p713Summary: "강퇴 후 스타 강제 종료·채팅 박탈·단독 드랍 방어 보안 패치, HD/SD 커스텀 GRP 복구 및 키패드 0·오버레이 개선",
      p713Item1: "스타크래프트: 리마스터(1.23.10) HD·SD AnimSprite 컨테이너에 커스텀 .anim 스킨 텍스처와 프레임 좌표를 직접 바인딩하여 인게임에서 커스텀 GRP 스킨이 적용되지 않던 문제를 해결했습니다.",
      p713Item2: "인게임 키패드 0 플레이어 모니터의 상단 헤더를 한 줄(『방: 제목 · 맵이름』)로 압축하고 불필요한 중복 배틀태그·종족·EPM 표기를 정리했으며, 맵 슬롯 데이터로 인해 허위 관전자(OBS) 줄이 표시되던 현상을 제거했습니다.",
      p713Item3: "플레이 중 윈도우 키(시작 메뉴·검색·작업 표시줄)를 눌렀을 때 상단 메인 오버레이·디지털 시계·플레이어 모니터가 화면에서 사라지지 않고 그대로 유지되도록 개선했습니다.",
      p713Item4: "방 강퇴 이후에도 외부 UDP 패킷으로 방 안 유저의 스타를 강제 종료하거나 인게임 채팅 권한을 박탈하고 혼자만 드랍·디스 상태로 분리하던 악성 패킷 및 배틀태그 은닉·외부 프로그램 채팅 주입을 다중 계층(강퇴 엔드포인트 격리·프로토콜 검증·VEH 복구)으로 완벽 차단했습니다.",
      p712Summary: "런처·스타 실행 초기 친구 삭제 오감지 완벽 차단 및 공식 GRP 적용법 가이드 오픈",
      p712Item1: "S런처 및 스타크래프트 실행 직후 Battle.net 친구 목록 모델이 메모리에 완전히 로드되기 전 빈 목록이나 대량 변동이 일시 관측될 때 친구 삭제(친삭) 알림이 오감지되던 문제를 원천 차단했습니다.",
      p712Item2: "프렌즈 데몬 재연결 시 이전 세션의 메모리 알림 시퀀스를 자동 동기화하여 중복 토스트가 재출력되지 않도록 보강하고, 공식 홈페이지 상단에 『GRP 적용법』 전용 가이드를 추가했습니다.",
      p711Summary: "상단 메인 오버레이·디지털 시계 HUD 즉시 표시 복구 및 포커스 전환 개선",
      p711Item1: "스타크래프트 실행 직후 및 초기 설정 동기화 시 상단 메인 오버레이와 우측 상단 디지털 시계가 비활성 상태로 남아 화면에 표시되지 않던 문제를 해결했습니다.",
      p711Item2: "런처 창이 백그라운드로 숨겨지거나 컴팩트 도우미(Ctrl+H)와 함께 동작할 때 스타크래프트 창으로 포커스를 자연스럽게 인계하고 오버레이가 끊김 없이 유지되도록 개선했습니다.",
      p710Summary: "스타크래프트 연동 크래시 핫픽스 및 오버레이·브리핑 전환 안정성 강화",
      p710Item1: "스타크래프트 실행 및 대기 화면 감지 시 순환 호출로 런처가 종료되어 적용되지 않던 스택 오버플로우 버그를 즉시 수정했습니다.",
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
      p706Item1: "공방 입장 시 리마스터 P2P 핸드셰이크 및 Storm 지연 측정 핑 패킷이 오차단되어 본인만 빨핑으로 표시되던 문제를 해결했습니다.",
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
      grpStatGlobalVal: "GRP 맵 전용",
      grpStatCatalogLabel: "Image 카탈로그",
      grpStatQualityLabel: "지원 화질",
      grpQuick1Title: "대상 선택 · 파일 추가",
      grpQuick1Desc: "『맵 리소스 적용』 탭에서 유닛 이름을 검색해 이미지/ANIM 파일을 등록하거나 분류 폴더에 넣습니다.",
      grpQuick2Title: "RuntimeMod 동기화 · 미리보기",
      grpQuick2Desc: "『RuntimeMod 즉시 동기화』를 누르고 『GRP 미리보기』에서 HD/SD 실제 적용 화면을 확인합니다.",
      grpQuick3Title: "스타 실행 · GRP 맵 자동 적용",
      grpQuick3Desc: "내장 GRP 맵 또는 지정 맵에서만 스킨이 작동하며, 일반 맵에서는 자동으로 기본 유닛이 표시됩니다.",
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
      navToolsMenu: "GRP · Chat Logs",
      navGrpGuide: "GRP Guide",
      navChatHistory: "Chat Logs",
      navJumpOpen: "Open →",
      navCurrentBadge: "Current",
      navChatSecConnect: "Local Link · Folder Import",
      navChatSecRooms: "Browse Dates & Joined Rooms",
      navChatSecViewer: "Conversation Viewer · TXT Export",
      navClanSoon: "Coming Soon (Clans)",
      navClanSecChannel: "1.16.1 Op Clan Channel UI",
      navClanSecList: "Clan Directory · Search Shell",
      navClanSecCreate: "Create Clan · /clan Spec Shell",
      clanPillLabel: "1.16.1 Fish Server Style · Coming Soon",
      clanPageTitle: "Coming Soon (Clan System)",
      clanPageSub: "A preview UI shell recreating the classic StarCraft 1.16.1 Fish Server 'Op Clan Channel' experience. Only the basic layout is shown for now — live clan features will arrive in a future update.",
      clanStatThemeLabel: "UI Theme",
      clanStatStateLabel: "Current Status",
      clanStatStateVal: "Coming Soon",
      clanSoonTag: "UI Preview",
      clanSoonDesc: "All buttons and inputs on this page are disabled preview shells showcasing the classic 1.16.1 Fish Server clan layout — live server and clan actions are not yet active.",
      clanS1Title: "Classic 1.16.1 Fish Server 'Op Clan Channel' Layout",
      clanPreviewOnlyBadge: "Inactive · UI Shell",
      clanWinTitle: "Battle.net — Fish Server Style Op Channel (1.16.1 UI)",
      clanWinMeta: "PREVIEW ONLY · Disabled Sample",
      clanBtnCreate: "Create Clan",
      clanBtnJoin: "Join Clan",
      clanBtnList: "Clan List",
      clanBtnChannel: "Channel",
      clanBtnMatch: "Clan Match",
      clanBtnQuit: "Quit",
      clanChanTopic: "Sample Clan Channel · Fish Server 1.16.1 Vibe",
      clanChatSys1: "--- Joined channel Op SLauncher- (1.16.1 UI Preview) ---",
      clanChatMotd: "[Clan MOTD] Welcome to the SLauncher Clan UI preview shell. (Features coming soon)",
      clanChatMsg1: "We built the classic 1.16.1 Fish Server Op clan channel layout first.",
      clanChatMsg2: "Clan Master BLIZZARD, Sub/Op green b.net, and silver Voice horn icons — pure Fish Server!",
      clanChatMsg3: "Classic commands like /c l (member list) and /c m (clan broadcast) are planned.",
      clanChatWhisper: "<From: SL]Bisu> Ping me if a 4v4 Hunters in-house slot opens up! (Sample)",
      clanChatSys2: "[Note] Static UI preview only — chat sending and slash commands are currently disabled.",
      clanInputPh: "Chat & /clan command input (Coming Soon — currently disabled)",
      clanBtnSend: "Send",
      clanBtnWhisper: "Whisper",
      clanRosterTitle: "Op SLauncher- (8)",
      clanS2Title: "Clan Directory & Search Shell (Coming Soon)",
      clanSearchPh: "Search clan name, tag (e.g. SL]), or Op channel (Coming Soon)",
      clanFilterAll: "All",
      clanFilterOpen: "Recruiting",
      clanFilterOp: "Op Active",
      clanColTag: "Tag",
      clanColName: "Clan Name · Op Channel",
      clanColMaster: "Clan Master",
      clanColMembers: "Members",
      clanColStatus: "Status",
      clanColAction: "Apply",
      clanSampleSoon: "Coming Soon",
      clanSampleClosed: "Sample Row",
      clanApplyBtn: "Apply (Soon)",
      clanS3Title: "Clan Creation & /clan Command Spec Shell",
      clanFormTitle: "New Clan Creation Form (Preview)",
      clanFormSub: "Basic input layout where you will register a clan tag and dedicated Op channel in an upcoming release.",
      clanFieldName: "Clan Name",
      clanFieldTag: "Clan Tag",
      clanFieldChan: "Default Op Channel",
      clanFieldIntro: "Clan Description · MOTD",
      clanSubmitSoonBtn: "Create Clan (Coming Soon)",
      clanSpecTitle: "1.16.1 Fish Server Ranks & Commands (Planned)",
      clanSpecSub: "Classic operator hierarchy and slash commands inspired by Fish Server Op channels.",
      clanRankMaster: "Clan Master (BLIZZARD)",
      clanRankOp: "Sub-Master · Op (b.net)",
      clanRankVoice: "Clan Voice (Silver Horn)",
      clanCmdListDesc: "Check all clan members along with live online and room status",
      clanCmdSetDesc: "Set your clan's Op channel as your default home channel",
      clanCmdMsgDesc: "Broadcast a clan notice or in-house match call to online members",
      clanCmdGiveDesc: "Grant Sub-Master/Op (b.net · op) or Clan Voice (horn · vop) privileges",
      navOnlineFmt: "{online} Online",
      navUsersFmt: "{users} Users",
      navUserTooltipFmt: "{online} active SLauncher users online now · {users} cumulative users",
      navDownload: "Download",
      viewAllPatchesBtn: "View full patch notes",
      panelGrpGuideBtn: "Read GRP Skin Guide",
      panelChatHistoryBtn: "Browse Chat Logs by Date",
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
      p738Summary: "1:1 Channel & Battle.net Friend List Parity Sync, Plus Overlay Clock, HUD & In-Game Notice Fix Alongside Multi-Launcher Tools",
      p738Item3: "Fixed friends set to Appear Offline or transitioning offline/back to the Battle.net app lingering in the in-game channel friend list or repeating channel-leave notices — the StarCraft channel friend list and online count now stay strictly 1:1 synchronized with the official Battle.net friend list.",
      p738Item1: "Resolved an issue where having an external multi-launcher utility (such as scr-multi-launcher) open or a leftover StarCraft_SL.exe binary on disk caused SLauncher to skip attaching to standard StarCraft: Remastered (StarCraft.exe), preventing the digital clock and HUD overlays from appearing.",
      p738Item2: "Added crisp drop-shadow rendering and immediate first-frame repaint to the YYYY/MM/DD HH:MM:SS overlay clock, and added real-time client geometry tracking so right-anchored clock positions stay accurately aligned across windowed/fullscreen resolution transitions.",
      p737Summary: "Fixed 0-Byte Chat Log Recording Bug, Added Local Participated Date-by-Date Chat History UI (Website & Launcher) & Automatic Empty Log Cleanup",
      p737Item1: "Resolved an issue on current StarCraft: Remastered builds where chat log files were created as 0-byte empty text files without room titles — real-time multiplayer in-game and joined-lobby chats you personally participate in are now recorded asynchronously with exact room titles, timestamps, and elapsed seconds (excluding replays and public channels).",
      p737Item2: "Added a dedicated 'Chat Logs' viewer right next to 'GRP Guide' on the official website as well as inside SLauncher's workbench and Ctrl+H Helper, letting you browse only your own locally participated rooms by date/time, filter by participant, search keywords, and copy or export TXT with zero cloud sharing.",
      p737Item3: "Automatically imports existing non-empty KLauncher chat logs while sweeping away 0-byte empty text files and empty date folders.",
      chPillLabel: "Local Participated Chat Archive",
      chTitle: "Chat Logs by Date",
      chSubtitle: "Other users' chats are never collected or shared — browse only the lobbies and matches you personally joined on your own PC, organized by date and time.",
      chStatDates: "Recorded Dates",
      chStatSessions: "My Rooms & Matches",
      chStatLines: "Total Chat Lines",
      chConnChecking: "Checking local SLauncher connection…",
      chConnLive: "Connected to local SLauncher",
      chConnLocalFiles: "Loaded from local folder",
      chConnOffline: "SLauncher not running (launch SLauncher or click 'Import Folder')",
      chPrivacyNote: "100% local PC only · Your participated rooms only (replays & public channels excluded)",
      chBtnRefresh: "Refresh",
      chBtnOpenFolder: "Open Chat Folder",
      chBtnImportLocal: "Import Folder",
      chColDates: "Dates",
      chColRooms: "Participated Rooms",
      chAllDates: "All Dates",
      chLoadingDates: "Loading date list…",
      chRoomSearchPh: "Search room title or player…",
      chScopeAll: "All Participated",
      chScopeSpoke: "Where I Spoke",
      chSelectDateHint: "Select a date on the left to view your participated rooms.",
      chViewerEmptyTitle: "Select a room session",
      chMsgSearchPh: "Search messages or player…",
      chBtnCopyTxt: "Copy All",
      chBtnDownloadTxt: "Save TXT",
      chBtnDelete: "Delete",
      chPlaceholderTitle: "Participated Match & Lobby Chat Viewer",
      chPlaceholderDesc: "When SLauncher is running on your PC, your local chat history connects automatically by date. Pick a date and room on the left to read.",
      chEmptyNoLogs: "No participated room chat logs recorded yet. Chats from games you play will appear here automatically by date.",
      chEmptyFiltered: "No room sessions match your current search or filter.",
      chKindInGame: "In-Game",
      chKindLobby: "Lobby",
      chPartAll: "All Players",
      chSelfBadge: "ME",
      chCopiedToast: "Copied full chat log text to clipboard.",
      chDeletedToast: "Deleted selected chat log file.",
      chDeleteConfirm: "Delete this room's chat log file?",
      p736Summary: "Full One-Click Follow ([->]) for Private Lobbies, In-Game Top HUD Room-Title ('Room: ...') & Multi-Match Reset Fix, Friends List Accuracy Fix & Windows Security False-Positive Resolution",
      p736Item1: "Enables the green one-click Follow ([->]) icon and right-click 'Join Lobby' menu for friends in any 'Private Lobby' (even when Battle.net hides the title), propagating shared private room titles/passwords and transitioning immediately to 'In Private Game' once a match starts via channel, game-list, and live FriendInfo memory sync.",
      p736Item4: "Resolved an issue where clicking another public room in GameSearch before creating a room or starting a saved game caused the prior clicked room title to appear in the in-game top HUD ('Room: ...'), synchronizing directly with StarCraft's live in-game room-title memory during active matches and clearing post-match room/create caches immediately upon game exit.",
      p736Item2: "Restored Friends panel bridge injection on 32-bit StarCraft after the SceneCefBrowser BrowserManager struct offset shift, and strengthened appear-offline (BSAp) promotion plus channel-member and leaderboard-by-friends sub-character discovery so active friends no longer remain stuck on 'Menus' or trigger false channel-join notices mid-game.",
      p736Item3: "Eliminated all temporary PowerShell script invocations from Setup.exe and the auto-updater in favor of pure C++ native ZIP extraction and COM ShellLink shortcuts, recalculating PE header checksums after SFX overlay bundling and embedding standard asInvoker UAC manifests across all executables to eliminate Windows Defender false positives.",
      p735Summary: "Real-Time Full-Path Forced-Drop Exploit Defense (HLauncherPay, etc.), Fix for Blacklist Notepad (TXT) Overload Freezing Compact Helper (Ctrl+H) & Automatic Cleanup of Accumulated TXT Files",
      p735Item1: "Neutralizes forged forced-drop and cross-slot leave-spoofing packets sent by external paid launchers (such as HLauncherPay) across Direct UDP, Battle.net SNP relay, TURN relay channels, and synchronously completed overlapped socket receives throughout lobbies, loading/briefing, and matches from frame zero — covering host, guest, and observer origins with live 'Forced-Drop Attack Blocked' HUD alerts, automatic lobby attacker kick + DoorGuard re-entry quarantine, and 0% false positives on normal green latency pings, voluntary leaves, or genuine timeout drops.",
      p735Item2: "Resolved an issue where accidentally importing a large Notepad (.txt) file into the Blacklist queued hundreds or thousands of unvalidated lines and froze the Compact Helper (Ctrl+H). Added strict TXT format/size validation, a pre-import confirmation dialog, one-click 'Reset Notepad / Local Blacklist' buttons in both the main list view and Ctrl+H Helper, and O(1) coalesced async list syncing so Ctrl+H always opens instantaneously.",
      p735Item3: "Automatically cleans up and deletes previously accumulated external Notepad blacklist files, unverified bulk TXT entries, and piled-up temporary runtime text logs upon updating.",
      p734Summary: "Lobby Lag-Hold & Self-Slot False-Positive Fix, Top-Left Overlay & Subsystem Deduplication, and Channel Friends Memo / Live Location Fix",
      p734Item1: "Eliminated false 'Suspected Sustained Lag / Turn-Hold' and local self-slot alerts while waiting in lobbies, cleared stale post-match alerts immediately on game exit, and aligned the top-left HUD, FPS counter, and collapsed Ctrl+H bar without visual overlap.",
      p734Item2: "Fixed Battle.net friend memos displaying verbatim in the channel friends list and blocking 'In Game / Lobby / Channel' status updates, automatically discovering all StarCraft sub-IDs on a friend's account when they play under a different character than the memo.",
      p734Item3: "Consolidated duplicate SpeedGuard, StarPing, Auto-Kick, hotkey, and UI polling paths into single authoritative pipelines and ensured the background Friends Daemon exits cleanly after StarCraft and SLauncher close.",
      p733Summary: "Custom-Game Friend Join Duplicate Notification Fix, Room-Entry Lag Optimization & Optional Update Mode",
      p733Item1: "Fixed an issue where 'Friend ... joined custom game ...' notifications for a single friend in a passworded or custom lobby printed repeatedly on status refresh cycles, ensuring each room join is announced only once until a real exit occurs.",
      p733Item2: "Eliminated redundant in-game bridge re-injections, synchronous background polls, and multi-gateway profile bursts during room transitions to significantly reduce Battle.net lobby entry lag and stutter.",
      p733Item3: "Switched updates from mandatory version blocking back to optional prompts ('Update Now' / 'Later') so you can update whenever convenient or launch your current version immediately.",
      p732Summary: "Foreign Right-Click Rally, AliveHack & ComSat Hack Detection, Confirmed Spoof/Exploit Re-Entry DoorGuard & Automatic Replay Crash/Poison Recovery",
      p732Item1: "Detects right-click rally-point overrides on foreign buildings, ComSat Scanner Sweep casts without an owned Comsat Station (or via foreign building selection), and zero-hotkey single-turn Auto-ComSat and AliveHack unit-evasion macros.",
      p732Item2: "Added session DoorGuard quarantine blocking confirmed room-boom, protocol-exploit, slot-hijack, BattleTag-spoof, and kicked attacker origins from re-entering the same lobby even across port or nickname changes.",
      p732Item3: "Sanitizes replay save/load streams and post-match .rep files by stripping rewind bombs, speed thrash, abort/restart crashes, >12 unit selection overflows, and spoofed chat floods while preserving lockstep turn latency.",
      p731Summary: "Superadmin Permission Update",
      p731Item1: "Superadmin permission update",
      p730Summary: "Player Detection UI BattleTag Restoration, Lobby-Entry Detector Chat Notice, Public Lobby False 'Private Lobby' Fix & Self-Signature Auto-Shutdown / Blank Nickname Fixes",
      p730Item1: "Fixed an issue where top-ranked public lobbies (visibility=1) or remade public rooms sharing a previous private room's title were mislabeled as 'Private Lobby: ...' in the Friends panel, clearing stale password caches whenever a room is confirmed public.",
      p730Item2: "Eliminated false-positive self-signature matches and exited-PID race conditions ('open-failed') in the integrated anti-cheat guardian that could unexpectedly shut down SLauncher when helper, setup, or duplicate launcher instances exited.",
      p730Item3: "Prevented transient uninitialized ASCII-space slot bytes during lobby entry from triggering false 'Blank Nickname Spoof' alerts and removed automatic lobby notices for normal players with spaces in their nicknames.",
      p730Item4: "Restored full BattleTag resolution across overlapped/WSARecvFrom UDP receive hooks, observer slots (Obs1~Obs4), local Aurora profile lookups, and multi-character accounts so BattleTags display immediately for every player and observer in the Player Detection UI.",
      p730Item5: "Added automatic one-shot lobby-entry anti-cheat status chat ('[SLauncher] Anti-cheat detector is active. movingstart.github.io/SLauncher') upon joining or hosting Battle.net custom game lobbies, controlled alongside the in-game start notice toggle.",
      p729Summary: "Compact Helper (Ctrl+H) Duplicate Top-Pin Notice Toggle Cleanup & Multi-Friend Custom Game Join Notification Fix",
      p729Item1: "Removed the duplicate '[Host] Room Top-Pin Text Notice ([SLauncher])' toggle from the Chat section in the Compact Helper (Ctrl+H), consolidating it cleanly into a single control under Battle.net Room.",
      p729Item2: "Fixed a bug where 'Friend joined custom game ...' system notifications were suppressed, deleted, or rendered with blank friend names when two or more friends joined the same custom game lobby, ensuring every friend's join notice and full 'Nickname (BattleTag)' label displays reliably.",
      p728Summary: "Hotfix for False Self-Hash Shutdown & Overlay/Clock Disappearance Upon Being Unfriended + Strict Local Self-Identity Isolation",
      p728Item1: "Fixed a bug where foreign player BattleTag hashes from lobby seats could contaminate the local self-hash cache during early room-join ticks or seat swaps, causing the victim's own launcher, top HUD overlay, and clock to close when an unfriending peer was added to the restriction list.",
      p728Item2: "Automatically purges legacy v1 self-hash caches into an isolated v2 store on startup and restricts self-identity verification strictly to local Battle.net app login, FriendsBridge local account, and authenticated OAuth BattleTag sources rather than shared lobby slots.",
      p727Summary: "In-Game Disconnect Dialog Hide Toggle (Num - Switch), 1-Second Disconnect Countdown & Fix for Self-Disconnect When Dropping Lagging Players",
      p727Item1: "Added an option across the Compact Helper (Ctrl+H), main settings, and in-game StarCraft settings to automatically hide the disconnect dialog, with instant show/hide toggling via Numpad - (Num -) or Alt+Shift+D whenever you want to click Drop Players.",
      p727Item2: "Shortened the disconnect countdown from 45 seconds down to 1 second whenever an opponent or observer lags so Drop Players unlocks without delay.",
      p727Item3: "Fixed false-positive packet drops on valid zero-unit empty selection lockstep turns in UMS/EUD maps and added a 60-second post-early-drop peer synchronization shield so dropping a lagging player at 1 second in multi-player games never causes a false self-disconnect while remaining players finish their 45-second drop timer.",
      p726Summary: "Automatic Stock Unit Restoration on Non-GRP Maps, Non-Host [Host] Badge Fix & Full BattleTag Display in Player Detection UI",
      p726Item1: "Scoped custom GRP unit skins strictly to embedded-GRP maps and explicitly selected maps, automatically restoring all active unit graphics back to stock StarCraft units the moment any regular map is loaded.",
      p726Item2: "Fixed the issue where StarCraft's local-player slot marker was misinterpreted as host authority — eliminating false [Host] badges for guests across the NumPad 0 Player Monitor, Ctrl+L Slot Manager, and lobby views while preserving accurate host inheritance.",
      p726Item3: "Correlated live lobby slot identifiers directly with incoming BattleTag identity frames and prevented multi-character gateway nickname updates from clearing bound BattleTags, ensuring both nicknames and BattleTags appear reliably in the Player Detection UI and overlays.",
      p725Summary: "Follow-Across-Slots Auto & Manual Kick Enforcement Against Lobby Seat-Hopping Evasion & Instant Auto-Kick Sync on Host Inheritance",
      p725Item1: "Tracks blacklisted, UID-blocked, win-rate-filtered, #S-unverified, and manually kicked targets across all Player (P1~P8) and Observer (Obs1~Obs4) slots by verified BattleTag/identity so rapid slot-hopping macros can no longer evade kicks or bans — without ever interfering with normal players switching seats freely.",
      p725Item2: "Immediately synchronizes host authority the moment a previous lobby host leaves and host status transfers to you, executing a zero-delay Auto-Kick sweep across all occupied player and observer slots already in the room.",
      p724Summary: "Real-Time Nickname Spoofing Detection ([Nick Spoof]), Zerg Resource-Hack False-Positive & Alarm Fix, Post-Match Ctrl+H Blank Helper Fix & Full UI Lag Optimization",
      p724Item1: "Accurately detects live nickname tampering — including persistent lobby server-profile mismatches, mid-game nickname mutations, rapid in-place slot name swaps, invisible/control-character spoofing, and packet identity mismatches — with zero false positives for legitimate Gateway profiles or seat swaps.",
      p724Item2: "Displays instant top SDetector HUD banners and local lobby/in-game chat alerts ([SLauncher] Nick Spoof), while showing the [Nick Spoof] badge alongside the player's real profile, BattleTag, and original win-loss record across the NumPad 0 Player Monitor, Ctrl+L Slot Manager, Ctrl+H Helper, and main player tables.",
      p724Item3: "Eliminated false-positive resource/supply hack alerts and repeating warning sounds triggered when an opponent Zerg hatches multiple Overlords simultaneously or cancels buildings/morphs during matches.",
      p724Item4: "Fixed the post-match Ctrl+H Helper bug where only the empty window frame appeared without inner feature text, and eliminated background rendering and DOM/log accumulation lag when opening the full settings UI or repeatedly toggling helper settings.",
      p723Summary: "Public Room Top-Pin with 30s Auto-Refresh & [SLauncher] Notice ON/OFF Toggle, plus Permanent Fix for Overlays Disappearing on StarCraft Screen Clicks",
      p723Item1: "Automatically pins hosted public rooms with open slots to the top of the Battle.net game list with a 30-second auto-refresh cycle, demoting full or 3-minute idle rooms to the bottom and restoring them immediately on activity while strictly excluding private/password rooms.",
      p723Item2: "Added [SLauncher] lobby status text notifications along with independent ON/OFF switches for both Room Top-Pin and Text Notifications across the main Lobby tab, Compact Helper (Ctrl+H), and in-game Lobby & Chat Settings.",
      p723Item3: "Eliminated the Z-order demotion issue where clicking on the StarCraft screen (including while Ctrl+H Helper is open or returning from other windows) pushed the top HUD overlay, digital clock, and NumPad 0 player monitor behind the game window.",
      p722Summary: "Persistent Overlay, Clock & Player Monitor Across Windows Key and Multi-Window Switching",
      p722Item1: "Anchored the top HUD overlay, digital clock, and NumPad 0 player monitor directly onto StarCraft's Z-order layer so they never disappear even after pressing the Windows key and switching focus to browsers, messengers, File Explorer, or SLauncher.",
      p722Item2: "Added real-time window focus event hooks so active windows sit cleanly in front without overlap bleed while every visible region of StarCraft retains all overlays seamlessly, hiding only when StarCraft itself is minimized or Show Desktop (Win+D) is active.",
      p721Summary: "Root-Cause Fix for Overlay, Clock & Player Monitor Disappearing on Windows Key and Introduction of Optional Update Prompt UI",
      p721Item1: "Resolved the root Win32 Z-order promotion and Start Menu companion flyout handoff bugs in Borderless Windowed Fullscreen so the top HUD overlay, digital clock, and NumPad 0 player monitor remain 100% visible without flickering when pressing the Windows key.",
      p721Item2: "Replaced mandatory version blocking with a sleek dark-themed Update Notification UI ('Update Now' / 'Later'), allowing users to update whenever convenient or continue launching their current version immediately.",
      p720Summary: "Dedicated Cloud Real-Time Online & Unique User Tracking and Seamless StarCraft-Only Session Continuity",
      p720Item1: "Migrated live online and cumulative user metrics to SLauncher's dedicated cloud presence service, eliminating duplicate counting across version updates or reinstalls while pushing instant real-time updates to the website.",
      p720Item2: "Maintains accurate live online status even when the SLauncher window is closed while StarCraft remains running, and immediately decrements the live count within seconds once both StarCraft and SLauncher exit.",
      p719Summary: "Comprehensive Non-AI / Non-Ladder Anti-Cheat & Defense Expansion — Over-Selection, Foreign Rally, Command Injection, Auto-Gather, Multi-Command & Unexplored Building Detection, Kicked Alt Re-Entry Alert, Sustained Lag-Hold & Chat-Flood Protection, and OneDrive Cloud-Map Freeze Guard",
      p719Item1: "Expanded the live in-game anti-cheat engine to detect and neutralize Over-Selection (>12 units), Foreign-Building Rally Point modification (excluding allied/Team Melee shared control), forged internal command injections, repeated Unexplored Black-Mask Enemy Building selections, and injected external cheat modules.",
      p719Item2: "Added audit-only HUD alerts (zero false-positive kicks) for instant multi-worker mineral splits (Auto-Gather) and zero-hotkey single-turn macro + combat reselect bursts (Multi-Command/Auto-Queue), plus Kicked Alt Re-Entry alerts when a recently kicked player rejoins within 30 minutes under another account from the same direct connection.",
      p719Item3: "Added sustained solo lag-hold detection with automatic drop-timer protection, real-time lossless auto-mute protection against in-game chat floods without keyboard interference, and an unpinned OneDrive cloud-map guard that prevents file-open freezes and switches cleanly to automatic map redownload.",
      p718Summary: "Live Online & Cumulative User Counter in Top Navbar and Removal of Redundant In-App User Badges",
      p718Item1: "Added a real-time user counter pill right next to 'GRP Guide' in the official website header, tracking both active running SLauncher instances (anonymized device hash with automatic LWT cleanup) and cumulative users.",
      p718Item2: "Removed all redundant in-app online-count badges across the login gate, compact helper, top bar, dashboard, and account pages for a cleaner UI backed by a lightweight native background presence sync.",
      p717Summary: "External User PC Zero-Deadlock Standalone Recovery, Live 64-Bit StarCraft Detection & Auto 32-Bit Switch, Read-Only Program Files / OneDrive / Custom Drive Compatibility",
      p717Item1: "Overhauled external-PC startup so that even when the central server is offline or Battle.net exits automatically after game launch, SLauncher seamlessly activates its local recovery runtime  and unlocks all lobby and in-game features without deadlocking at the login screen.",
      p717Item2: "Enabled auto-login by default on fresh installs and aligned fallback bootstrap defaults (autoKick=true, pingAnnounce=true, fastDrop=false) so room-title win-rate % and Blacklist AutoKick work out-of-the-box on every PC.",
      p717Item3: "Added live 64-bit (x86_64) StarCraft process detection with automatic Battle.net 32-bit config refresh, plus seamless %LOCALAPPDATA% writable fallbacks for read-only Program Files (x86) folders, OneDrive Documents, and custom game drives.",
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
      p714Item2: "Eliminated false packet drops and shared-relay blackholing across host-forwarded multi-peer streams , peer latency ping/pong frames, and Direct-P2P ↔ Battle.net SNP relay transitions so every match starts and plays smoothly.",
      p714Item3: "Added per-slot hidden-BattleTag and post-kick  tracking plus full protobuf SNP envelope parsing to block programmatic raw UDP chat injection and malformed crash packets without affecting innocent players on shared relays.",
      p714Item4: "Upgraded Z-band (ZBID_UIACCESS / Immersive Shell) and passive-utility window snapshotting (StarDesk, oCam, SOOP, NVIDIA Overlay, etc.) so the top HUD, clock, and Numpad 0 monitor stay visible when pressing the Windows key while still hiding on Alt+Tab or Win+D.",
      p713Summary: "Post-Kick Remote Termination, Chat-Lock & Solo-Drop Security Defense, HD/SD GRP Fix & Overlay Persistence",
      p713Item1: "Bound custom .anim diffuse/teamcolor textures and frame coordinates directly into StarCraft: Remastered (1.23.10) HD and SD AnimSprite containers so custom GRP unit skins render reliably in-game.",
      p713Item2: "Condensed the in-game Numpad 0 Player Monitor header into a single compact line ('Room · Map'), trimmed redundant BattleTag/race/EPM padding, and eliminated phantom spectator (OBS) rows caused by raw map slot bytes.",
      p713Item3: "Kept the top main HUD, digital clock, and Numpad 0 player monitor visible when pressing the Windows key (Start Menu / Search / Taskbar flyouts) while StarCraft remains active on screen.",
      p713Item4: "Added multi-layer defenses (post-kick endpoint quarantine, Storm control/opcode filtering, and first-chance VEH recovery) blocking post-kick StarCraft termination, mid-game chat-permission stripping, targeted solo-drop room splits, stripped-BattleTag spoofing, and unauthorized external UDP chat injection.",
      p712Summary: "False-Positive Friend Removal Alert Elimination & Official GRP Skin Guide",
      p712Item1: "Eliminated false-positive friend-removal alerts triggered during SLauncher or StarCraft startup before Battle.net's in-memory FriendsModel finishes hydrating.",
      p712Item2: "Added automatic notice-sequence priming when reattaching to an existing Friends Daemon to prevent duplicate alerts, and launched the dedicated GRP Skin Guide in the top navigation bar.",
      p711Summary: "Top Main Overlay & Digital Clock HUD Visibility Fix and Focus Handoff",
      p711Item1: "Fixed a startup synchronization issue where the top-left main HUD and top-right digital clock overlay remained disabled right after launching StarCraft.",
      p711Item2: "Improved foreground focus handoff and overlay persistence when SLauncher minimizes to the background or runs alongside the compact helper (Ctrl+H).",
      p710Summary: "StarCraft Attachment Crash Hotfix & Pre-Game Transition Hardening",
      p710Item1: "Resolved a mutual recursion stack overflow  when attaching to StarCraft pre-game transitions.",
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
      p706Item1: "Fixed false packet filtering on SC:R P2P handshakes and Storm latency pings  that caused the local player to appear with red ping in public lobbies.",
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
      grpStatGlobalVal: "GRP Maps Only",
      grpStatCatalogLabel: "Image Catalog",
      grpStatQualityLabel: "Graphics Modes",
      grpQuick1Title: "Pick Target · Add Files",
      grpQuick1Desc: "Search any unit/building in 'Map Resource Apply' to import PNG/GIF/.anim files, or drop skin packs into category folders.",
      grpQuick2Title: "Sync RuntimeMod · Preview",
      grpQuick2Desc: "Click 'Sync RuntimeMod Now' and check both HD and SD sprites directly inside 'GRP Preview'.",
      grpQuick3Title: "Launch StarCraft · Map-Scoped Apply",
      grpQuick3Desc: "Applies custom skins on embedded-GRP and selected maps while automatically rendering stock units on regular maps.",
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
    tag: "v0.6.738",
    publishedAt: "2026-11-25T09:14:16Z",
    setupName: "SLauncher-0.6.738-win-setup.exe",
    setupUrl: "https://github.com/MOVINGSTART/SLauncher/releases/download/v0.6.738/SLauncher-0.6.738-win-setup.exe",
    setupBytes: 84153203,
    setupSha256: "6281bf25904c2b59aece374fadad994503323de8bff5fbec7524ff3f2ccf46d2",
    zipName: "SLauncher_v0.6.738.zip",
    zipUrl: "https://github.com/MOVINGSTART/SLauncher/releases/download/v0.6.738/SLauncher_v0.6.738.zip",
    zipBytes: 83571443,
    latestBody: "",
    repoSlug: "MOVINGSTART/SLauncher"
  };

  var PRESENCE_HTTP_URL = "https://presence.slauncher.kr/v1/stats";
  var PRESENCE_WS_URL = "wss://presence.slauncher.kr/v1/ws";

  var userStats = {
    online: 0,
    users: 8,
    loaded: false
  };

  function applyPresenceSnapshot(data) {
    if (!data || !data.ok) return;
    var onl = Number(data.online);
    var usr = Number(data.users);
    if (isFinite(onl) && onl >= 0) userStats.online = Math.floor(onl);
    if (isFinite(usr) && usr >= 0) userStats.users = Math.max(Math.floor(usr), userStats.online);
    userStats.loaded = true;
    renderUserBadge();
  }

  function renderUserBadge() {
    var badge = document.getElementById("nav-user-badge");
    var onlineEl = document.getElementById("nav-user-online");
    var totalEl = document.getElementById("nav-user-total");
    if (!badge || !onlineEl || !totalEl) return;

    var dict = I18N[currentLang] || I18N.ko;
    var onlineCount = userStats.online;
    var totalUsers = Math.max(userStats.users, onlineCount);

    onlineEl.textContent = (dict.navOnlineFmt || "{online}").replace("{online}", String(onlineCount));
    totalEl.textContent = (dict.navUsersFmt || "{users}").replace("{users}", String(totalUsers));
    badge.title = (dict.navUserTooltipFmt || "")
      .replace("{online}", String(onlineCount))
      .replace("{users}", String(totalUsers));
    badge.classList.toggle("is-live", onlineCount > 0);
  }

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
    renderUserBadge();
    updateChangelogFilter();
    if (typeof refreshChatHistoryI18n === "function") refreshChatHistoryI18n();
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

  function fetchPresenceStatsOnce() {
    fetch(PRESENCE_HTTP_URL, { cache: "no-store" })
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (data) { if (data) applyPresenceSnapshot(data); })
      .catch(function () {});
  }

  function connectPresenceLiveSocket() {
    if (typeof WebSocket === "undefined") return;
    var ws = null;
    var pingTimer = null;
    var retryTimer = null;
    var failures = 0;

    function clearTimers() {
      if (pingTimer) { clearInterval(pingTimer); pingTimer = null; }
      if (retryTimer) { clearTimeout(retryTimer); retryTimer = null; }
    }

    function scheduleReconnect() {
      if (retryTimer) return;
      var delay = Math.min(20000, 2500 * Math.pow(1.5, Math.min(failures++, 5)));
      retryTimer = setTimeout(function () {
        retryTimer = null;
        openWs();
      }, delay);
    }

    function openWs() {
      clearTimers();
      try {
        ws = new WebSocket(PRESENCE_WS_URL);
      } catch (_) {
        scheduleReconnect();
        return;
      }

      ws.onopen = function () {
        failures = 0;
        pingTimer = setInterval(function () {
          if (ws && ws.readyState === WebSocket.OPEN) {
            try { ws.send("ping"); } catch (_) {}
          }
        }, 25000);
      };

      ws.onmessage = function (ev) {
        if (!ev || typeof ev.data !== "string" || ev.data === "pong") return;
        try {
          var data = JSON.parse(ev.data);
          applyPresenceSnapshot(data);
        } catch (_) {}
      };

      ws.onclose = function () {
        clearTimers();
        scheduleReconnect();
      };

      ws.onerror = function () {};
    }

    openWs();

    document.addEventListener("visibilitychange", function () {
      if (!document.hidden) {
        fetchPresenceStatsOnce();
        if (ws && ws.readyState === WebSocket.OPEN) {
          try { ws.send("stats"); } catch (_) {}
        }
      }
    });
  }

  function startUserMetrics() {
    renderUserBadge();
    fetchPresenceStatsOnce();
    connectPresenceLiveSocket();
    setInterval(fetchPresenceStatsOnce, 30000);
  }

  // ==========================================================================
  // Dedicated Date-by-Date Participated Chat History Viewer (chat-history.html)
  // Connects ONLY to local SLauncher (127.0.0.1:53891) or user-selected local
  // folder; never uploads or exposes any chat logs externally.
  // ==========================================================================
  var LOCAL_CHAT_API_BASE = "http://127.0.0.1:53891";
  var refreshChatHistoryI18n = null;

  function initChatHistoryPage() {
    var chApp = document.getElementById("chat-history-app");
    if (!chApp) return;

    var state = {
      mode: "checking", // "live" | "local" | "offline" | "checking"
      dates: [],
      totalDates: 0,
      totalSessions: 0,
      totalLines: 0,
      selfBattleTag: "",
      selfToon: "",
      selectedDate: "",
      selectedSessionKey: "",
      roomSearch: "",
      scope: "all", // "all" | "spoke"
      msgSearch: "",
      selectedParticipant: "",
      loadedSession: null,
      localFileMap: {}
    };

    var SENDER_PALETTE = [
      "#7dd3fc", "#c4b5fd", "#fda4af", "#fcd34d",
      "#86efac", "#f9a8d4", "#93c5fd", "#fdba74",
      "#67e8f9", "#d8b4fe", "#bef264", "#fca5a5"
    ];

    function dict() {
      return I18N[currentLang] || I18N.ko;
    }

    function escapeHtml(str) {
      return String(str || "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
    }

    function highlightMatch(text, query) {
      var raw = String(text || "");
      if (!query) return escapeHtml(raw);
      var lowRaw = raw.toLowerCase();
      var lowQ = query.toLowerCase();
      var idx = lowRaw.indexOf(lowQ);
      if (idx < 0) return escapeHtml(raw);
      var out = "";
      var pos = 0;
      while (idx >= 0) {
        out += escapeHtml(raw.slice(pos, idx));
        out += "<mark>" + escapeHtml(raw.slice(idx, idx + query.length)) + "</mark>";
        pos = idx + query.length;
        idx = lowRaw.indexOf(lowQ, pos);
      }
      out += escapeHtml(raw.slice(pos));
      return out;
    }

    function colorForSender(name, isSelf) {
      if (isSelf) return "#34d399";
      var s = String(name || "");
      var hash = 0;
      for (var i = 0; i < s.length; i++) {
        hash = ((hash * 31) + s.charCodeAt(i)) >>> 0;
      }
      return SENDER_PALETTE[hash % SENDER_PALETTE.length];
    }

    function formatDayOfWeek(dateStr) {
      var parts = String(dateStr || "").split("-");
      if (parts.length !== 3) return "";
      var dt = new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2]));
      if (isNaN(dt.getTime())) return "";
      var koDays = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
      var enDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      return currentLang === "en" ? enDays[dt.getDay()] : koDays[dt.getDay()];
    }

    function parseFilenameMetaClient(fileName) {
      var stem = String(fileName || "").replace(/\.txt$/i, "");
      var m = stem.match(/^(\d{2})시\s*(\d{2})분\s*(\d{2})초\s*(.*)$/);
      var timeLabel = "";
      var roomPart = stem;
      var sessionKind = "ingame";
      if (m) {
        timeLabel = m[1] + ":" + m[2] + ":" + m[3];
        roomPart = String(m[4] || "").trim();
      }
      if (/\(대기실\)$/.test(roomPart)) {
        sessionKind = "lobby";
        roomPart = roomPart.replace(/\s*\(대기실\)$/, "").trim();
      }
      return {
        timeLabel: timeLabel,
        roomTitle: roomPart || (currentLang === "en" ? "Untitled Room" : "이름 없는 방"),
        sessionKind: sessionKind
      };
    }

    function parseChatTextClient(rawText) {
      var lines = String(rawText || "").split(/\r?\n/);
      var messages = [];
      var participants = [];
      var seen = {};
      for (var i = 0; i < lines.length; i++) {
        var ln = lines[i].trim();
        if (!ln) continue;
        var dateTime = "";
        var timeOnly = "";
        var elapsed = "";
        var sender = "";
        var content = ln;
        if (ln.charAt(0) === "[") {
          var closeBr = ln.indexOf("]");
          if (closeBr >= 19) {
            var meta = ln.slice(1, closeBr);
            var pIdx = meta.indexOf("(");
            if (pIdx >= 0) {
              dateTime = meta.slice(0, pIdx).trim();
              var pEnd = meta.indexOf(")", pIdx + 1);
              if (pEnd > pIdx) elapsed = meta.slice(pIdx + 1, pEnd).trim();
            } else {
              dateTime = meta.trim();
            }
            timeOnly = dateTime.length >= 19 ? dateTime.slice(11, 19) : dateTime;
            var rest = ln.slice(closeBr + 1);
            var sep = rest.indexOf(" : ");
            if (sep >= 0) {
              sender = rest.slice(0, sep).trim();
              content = rest.slice(sep + 3);
            }
          }
        }
        if (sender) {
          var coreS = sender.replace(/\s*\([^)]*\)$/, "").replace(/^\[[^\]]*\]\s*/, "").trim();
          var lowS = coreS.toLowerCase();
          if (lowS && !seen[lowS]) {
            seen[lowS] = true;
            participants.push(coreS);
          }
        }
        messages.push({
          dateTime: dateTime,
          time: timeOnly,
          elapsed: elapsed,
          sender: sender,
          content: content,
          isSelf: false
        });
      }
      return { messages: messages, participants: participants };
    }

    function updateConnectionBanner() {
      var d = dict();
      var badge = document.getElementById("ch-conn-badge");
      var txt = document.getElementById("ch-conn-text");
      var selfChip = document.getElementById("ch-self-identity");
      if (badge && txt) {
        badge.classList.remove("is-connecting", "is-connected", "is-local-files", "is-offline");
        if (state.mode === "live") {
          badge.classList.add("is-connected");
          txt.textContent = d.chConnLive;
        } else if (state.mode === "local") {
          badge.classList.add("is-local-files");
          txt.textContent = d.chConnLocalFiles;
        } else if (state.mode === "offline") {
          badge.classList.add("is-offline");
          txt.textContent = d.chConnOffline;
        } else {
          badge.classList.add("is-connecting");
          txt.textContent = d.chConnChecking;
        }
      }
      if (selfChip) {
        var idParts = [];
        if (state.selfToon) idParts.push(state.selfToon);
        if (state.selfBattleTag) idParts.push(state.selfBattleTag);
        if (idParts.length > 0) {
          selfChip.textContent = idParts.join(" · ");
          selfChip.classList.remove("hidden");
        } else {
          selfChip.classList.add("hidden");
        }
      }

      var elDates = document.getElementById("ch-stat-dates");
      var elSess = document.getElementById("ch-stat-sessions");
      var elLines = document.getElementById("ch-stat-lines");
      if (elDates) elDates.textContent = String(state.totalDates || 0);
      if (elSess) elSess.textContent = String(state.totalSessions || 0);
      if (elLines) elLines.textContent = String(state.totalLines || 0);
    }

    function renderDatesList() {
      var d = dict();
      var box = document.getElementById("ch-date-list");
      var badge = document.getElementById("ch-dates-badge");
      if (!box) return;
      if (badge) {
        badge.textContent = currentLang === "en"
          ? (state.dates.length + "d")
          : (state.dates.length + "일");
      }

      if (!state.dates.length) {
        box.innerHTML = '<div class="ch-empty-hint">' + escapeHtml(d.chEmptyNoLogs) + "</div>";
        return;
      }

      var html = "";
      var allActive = state.selectedDate === "__ALL__";
      html += '<button type="button" class="ch-date-btn' + (allActive ? " active" : "") + '" data-date="__ALL__">' +
        '<span class="ch-date-main"><span>' + escapeHtml(d.chAllDates) + '</span></span>' +
        '<span class="ch-date-cnt">' + state.totalSessions + "</span></button>";

      for (var i = 0; i < state.dates.length; i++) {
        var grp = state.dates[i];
        var isAct = state.selectedDate === grp.date;
        var dow = formatDayOfWeek(grp.date);
        html += '<button type="button" class="ch-date-btn' + (isAct ? " active" : "") + '" data-date="' + escapeHtml(grp.date) + '">' +
          '<span class="ch-date-main"><span>' + escapeHtml(grp.date) + '</span>' +
          (dow ? '<span class="ch-date-dow">' + escapeHtml(dow) + "</span>" : "") +
          '</span><span class="ch-date-cnt">' + grp.sessions.length + "</span></button>";
      }
      box.innerHTML = html;

      var btns = box.querySelectorAll(".ch-date-btn");
      for (var b = 0; b < btns.length; b++) {
        btns[b].addEventListener("click", function () {
          state.selectedDate = this.getAttribute("data-date") || "";
          renderDatesList();
          renderSessionsList(true);
        });
      }
    }

    function getFilteredSessions() {
      var list = [];
      var q = String(state.roomSearch || "").trim().toLowerCase();
      for (var di = 0; di < state.dates.length; di++) {
        var g = state.dates[di];
        if (state.selectedDate && state.selectedDate !== "__ALL__" && g.date !== state.selectedDate) continue;
        for (var si = 0; si < g.sessions.length; si++) {
          var s = g.sessions[si];
          if (state.scope === "spoke" && !s.selfSpoke) continue;
          if (q) {
            var hay = (s.roomTitle + " " + (s.participants || []).join(" ") + " " + (s.preview || "") + " " + g.date).toLowerCase();
            if (hay.indexOf(q) < 0) continue;
          }
          list.push({ date: g.date, session: s, key: g.date + "/" + s.file });
        }
      }
      return list;
    }

    function renderSessionsList(autoSelectFirst) {
      var d = dict();
      var box = document.getElementById("ch-session-list");
      var badge = document.getElementById("ch-sessions-badge");
      var titleLbl = document.getElementById("ch-selected-date-label");
      if (!box) return;

      if (titleLbl) {
        if (!state.selectedDate || state.selectedDate === "__ALL__") {
          titleLbl.textContent = d.chColRooms;
        } else {
          titleLbl.textContent = state.selectedDate;
        }
      }

      var items = getFilteredSessions();
      if (badge) {
        badge.textContent = currentLang === "en" ? String(items.length) : (items.length + "개");
      }

      if (!items.length) {
        box.innerHTML = '<div class="ch-empty-hint">' + escapeHtml(state.dates.length ? d.chEmptyFiltered : d.chEmptyNoLogs) + "</div>";
        return;
      }

      var hasSelected = false;
      for (var k = 0; k < items.length; k++) {
        if (items[k].key === state.selectedSessionKey) {
          hasSelected = true;
          break;
        }
      }

      var html = "";
      for (var i = 0; i < items.length; i++) {
        var it = items[i];
        var s = it.session;
        var isAct = it.key === state.selectedSessionKey;
        var isLob = s.sessionKind === "lobby";
        var kindText = isLob ? d.chKindLobby : d.chKindInGame;
        var timeDisp = (state.selectedDate === "__ALL__" ? (it.date + " ") : "") + (s.timeLabel || "");
        var lineLbl = currentLang === "en" ? (s.lineCount + " lines") : (s.lineCount + "줄");
        var partText = (s.participants && s.participants.length)
          ? s.participants.slice(0, 5).join(", ") + (s.participants.length > 5 ? " +" + (s.participants.length - 5) : "")
          : (s.preview || "");

        html += '<button type="button" class="ch-session-card' + (isAct ? " active" : "") + '" data-date="' + escapeHtml(it.date) + '" data-file="' + escapeHtml(s.file) + '" data-key="' + escapeHtml(it.key) + '">' +
          '<div class="ch-session-top">' +
          '<span class="ch-session-time">' + escapeHtml(timeDisp) + "</span>" +
          '<span class="ch-kind-badge' + (isLob ? " is-lobby" : "") + '">' + escapeHtml(kindText) + "</span>" +
          '<span class="ch-session-lines">' + escapeHtml(lineLbl) + "</span>" +
          "</div>" +
          '<div class="ch-session-room">' + highlightMatch(s.roomTitle, state.roomSearch) + "</div>" +
          (partText ? '<div class="ch-session-sub">' + highlightMatch(partText, state.roomSearch) + "</div>" : "") +
          "</button>";
      }
      box.innerHTML = html;

      var cards = box.querySelectorAll(".ch-session-card");
      for (var c = 0; c < cards.length; c++) {
        cards[c].addEventListener("click", function () {
          var dt = this.getAttribute("data-date") || "";
          var fl = this.getAttribute("data-file") || "";
          openSessionDetail(dt, fl);
        });
      }

      if (autoSelectFirst && !hasSelected && items.length > 0) {
        openSessionDetail(items[0].date, items[0].session.file);
      }
    }

    function renderViewer() {
      var d = dict();
      var kindEl = document.getElementById("ch-view-kind-badge");
      var dtEl = document.getElementById("ch-view-datetime");
      var titleEl = document.getElementById("ch-view-room-title");
      var partBar = document.getElementById("ch-participants-bar");
      var msgBox = document.getElementById("ch-messages-box");
      var btnCopy = document.getElementById("ch-btn-copy-txt");
      var btnDl = document.getElementById("ch-btn-download-txt");
      var btnDel = document.getElementById("ch-btn-delete-file");
      if (!msgBox) return;

      var sess = state.loadedSession;
      if (!sess) {
        if (kindEl) kindEl.classList.add("hidden");
        if (dtEl) dtEl.textContent = "—";
        if (titleEl) titleEl.textContent = d.chViewerEmptyTitle;
        if (partBar) partBar.classList.add("hidden");
        if (btnCopy) btnCopy.disabled = true;
        if (btnDl) btnDl.disabled = true;
        if (btnDel) btnDel.disabled = true;
        msgBox.innerHTML =
          '<div class="ch-viewer-placeholder">' +
          '<div class="ch-placeholder-icon" aria-hidden="true">💬</div>' +
          "<strong>" + escapeHtml(d.chPlaceholderTitle) + "</strong>" +
          "<p>" + escapeHtml(d.chPlaceholderDesc) + "</p></div>";
        return;
      }

      var isLob = sess.sessionKind === "lobby";
      if (kindEl) {
        kindEl.textContent = isLob ? d.chKindLobby : d.chKindInGame;
        kindEl.classList.toggle("is-lobby", isLob);
        kindEl.classList.remove("hidden");
      }
      if (dtEl) {
        dtEl.textContent = sess.date + (sess.timeLabel ? (" · " + sess.timeLabel) : "");
      }
      if (titleEl) {
        titleEl.textContent = sess.roomTitle || sess.file;
      }
      if (btnCopy) btnCopy.disabled = false;
      if (btnDl) btnDl.disabled = false;
      if (btnDel) btnDel.disabled = state.mode !== "live";

      // Render participant filter bar
      var parts = sess.participants || [];
      if (partBar) {
        if (parts.length > 0) {
          var pHtml = '<button type="button" class="ch-part-chip' + (!state.selectedParticipant ? " active" : "") + '" data-part="">' +
            escapeHtml(d.chPartAll) + " (" + parts.length + ")</button>";
          for (var pi = 0; pi < parts.length; pi++) {
            var pName = parts[pi];
            var pAct = state.selectedParticipant === pName;
            pHtml += '<button type="button" class="ch-part-chip' + (pAct ? " active" : "") + '" data-part="' + escapeHtml(pName) + '">' +
              escapeHtml(pName) + "</button>";
          }
          partBar.innerHTML = pHtml;
          partBar.classList.remove("hidden");
          var pBtns = partBar.querySelectorAll(".ch-part-chip");
          for (var pb = 0; pb < pBtns.length; pb++) {
            pBtns[pb].addEventListener("click", function () {
              state.selectedParticipant = this.getAttribute("data-part") || "";
              renderViewer();
            });
          }
        } else {
          partBar.classList.add("hidden");
        }
      }

      var q = String(state.msgSearch || "").trim();
      var qLow = q.toLowerCase();
      var partFilterLow = String(state.selectedParticipant || "").toLowerCase();
      var msgs = sess.messages || [];
      var rowsHtml = "";
      var shownCount = 0;

      for (var mi = 0; mi < msgs.length; mi++) {
        var m = msgs[mi];
        var coreSender = String(m.sender || "").replace(/\s*\([^)]*\)$/, "").replace(/^\[[^\]]*\]\s*/, "").trim();
        if (partFilterLow && coreSender.toLowerCase() !== partFilterLow) continue;
        if (qLow) {
          var mHay = (String(m.sender || "") + " " + String(m.content || "") + " " + String(m.time || "")).toLowerCase();
          if (mHay.indexOf(qLow) < 0) continue;
        }
        shownCount++;
        var sCol = colorForSender(coreSender, !!m.isSelf);
        var elapTxt = m.elapsed ? (" (" + m.elapsed + (/^\+\s*\d+$/.test(m.elapsed) && currentLang === "ko" ? "초" : "") + ")") : "";
        rowsHtml += '<div class="ch-msg-row' + (m.isSelf ? " is-self" : "") + '">' +
          '<span class="ch-msg-time">' + escapeHtml(m.time || "") +
          (elapTxt ? '<span class="ch-msg-elapsed">' + escapeHtml(elapTxt) + "</span>" : "") +
          "</span>" +
          '<span class="ch-msg-sender" style="color:' + sCol + '" title="' + escapeHtml(m.sender || "") + '">' +
          highlightMatch(m.sender || "—", q) +
          (m.isSelf ? '<span class="ch-msg-self-tag">' + escapeHtml(d.chSelfBadge) + "</span>" : "") +
          "</span>" +
          '<span class="ch-msg-body">' + highlightMatch(m.content || "", q) + "</span>" +
          "</div>";
      }

      if (!shownCount) {
        msgBox.innerHTML = '<div class="ch-empty-hint">' + escapeHtml(d.chEmptyFiltered) + "</div>";
      } else {
        msgBox.innerHTML = rowsHtml;
      }
    }

    function openSessionDetail(dateStr, fileStr) {
      var key = dateStr + "/" + fileStr;
      state.selectedSessionKey = key;
      state.selectedParticipant = "";
      renderSessionsList(false);

      if (state.mode === "local" && state.localFileMap[key]) {
        state.loadedSession = state.localFileMap[key];
        renderViewer();
        return;
      }

      var url = LOCAL_CHAT_API_BASE + "/api/chat/file?date=" + encodeURIComponent(dateStr) + "&file=" + encodeURIComponent(fileStr);
      fetch(url, { cache: "no-store", targetAddressSpace: "local" })
        .then(function (r) { return r.ok ? r.json() : null; })
        .then(function (data) {
          if (!data || !data.ok) return;
          state.loadedSession = data;
          renderViewer();
        })
        .catch(function () {});
    }

    function loadFromLocalLauncher(preserveSelection) {
      state.mode = "checking";
      updateConnectionBanner();

      fetch(LOCAL_CHAT_API_BASE + "/api/chat/directories", { cache: "no-store", targetAddressSpace: "local" })
        .then(function (r) { return r.ok ? r.json() : null; })
        .then(function (data) {
          if (!data || !data.ok) {
            state.mode = "offline";
            updateConnectionBanner();
            renderDatesList();
            renderSessionsList(false);
            renderViewer();
            return;
          }
          state.mode = "live";
          state.dates = Array.isArray(data.dates) ? data.dates : [];
          state.totalDates = Number(data.totalDates) || state.dates.length;
          state.totalSessions = Number(data.totalSessions) || 0;
          state.totalLines = Number(data.totalLines) || 0;
          state.selfBattleTag = String(data.selfBattleTag || "");
          state.selfToon = String(data.selfToon || "");
          state.localFileMap = {};

          if (!preserveSelection || !state.selectedDate) {
            state.selectedDate = state.dates.length > 0 ? state.dates[0].date : "";
          }
          updateConnectionBanner();
          renderDatesList();
          renderSessionsList(true);
          if (!state.dates.length) {
            state.loadedSession = null;
            renderViewer();
          }
        })
        .catch(function () {
          if (state.mode !== "local") {
            state.mode = "offline";
            updateConnectionBanner();
            renderDatesList();
            renderSessionsList(false);
            renderViewer();
          }
        });
    }

    function importLocalFolderFiles(fileList) {
      if (!fileList || !fileList.length) return;
      var txtFiles = [];
      for (var i = 0; i < fileList.length; i++) {
        var f = fileList[i];
        if (f && /\.txt$/i.test(f.name) && f.size > 0) {
          txtFiles.push(f);
        }
      }
      if (!txtFiles.length) return;

      var grouped = {};
      var localMap = {};
      var pending = txtFiles.length;
      var totalLines = 0;

      txtFiles.forEach(function (fileObj) {
        var rel = String(fileObj.webkitRelativePath || fileObj.name).replace(/\\/g, "/");
        var segs = rel.split("/");
        var dateFolder = "";
        for (var s = segs.length - 2; s >= 0; s--) {
          if (/^\d{4}-\d{2}-\d{2}$/.test(segs[s])) {
            dateFolder = segs[s];
            break;
          }
        }
        if (!dateFolder) {
          var dObj = new Date(fileObj.lastModified || Date.now());
          var mm = String(dObj.getMonth() + 1).padStart(2, "0");
          var dd = String(dObj.getDate()).padStart(2, "0");
          dateFolder = dObj.getFullYear() + "-" + mm + "-" + dd;
        }

        var reader = new FileReader();
        reader.onload = function () {
          var text = String(reader.result || "");
          var parsed = parseChatTextClient(text);
          var meta = parseFilenameMetaClient(fileObj.name);
          if (parsed.messages.length > 0) {
            if (!grouped[dateFolder]) grouped[dateFolder] = [];
            var sEntry = {
              file: fileObj.name,
              timeLabel: meta.timeLabel,
              roomTitle: meta.roomTitle,
              sessionKind: meta.sessionKind,
              size: fileObj.size,
              lineCount: parsed.messages.length,
              selfParticipated: true,
              selfSpoke: true,
              preview: parsed.messages[0].sender
                ? (parsed.messages[0].sender + ": " + parsed.messages[0].content)
                : parsed.messages[0].content,
              participants: parsed.participants
            };
            grouped[dateFolder].push(sEntry);
            localMap[dateFolder + "/" + fileObj.name] = {
              ok: true,
              date: dateFolder,
              file: fileObj.name,
              timeLabel: meta.timeLabel,
              roomTitle: meta.roomTitle,
              sessionKind: meta.sessionKind,
              lineCount: parsed.messages.length,
              participants: parsed.participants,
              messages: parsed.messages,
              rawText: text
            };
            totalLines += parsed.messages.length;
          }
          pending--;
          if (pending === 0) {
            var dateKeys = Object.keys(grouped).sort().reverse();
            var datesArr = [];
            var totalSess = 0;
            for (var dk = 0; dk < dateKeys.length; dk++) {
              var dKey = dateKeys[dk];
              var arr = grouped[dKey];
              arr.sort(function (a, b) { return a.file < b.file ? 1 : (a.file > b.file ? -1 : 0); });
              totalSess += arr.length;
              datesArr.push({ date: dKey, sessionCount: arr.length, sessions: arr });
            }
            state.mode = "local";
            state.dates = datesArr;
            state.totalDates = datesArr.length;
            state.totalSessions = totalSess;
            state.totalLines = totalLines;
            state.localFileMap = localMap;
            state.selectedDate = datesArr.length > 0 ? datesArr[0].date : "";
            state.selectedSessionKey = "";
            state.loadedSession = null;
            updateConnectionBanner();
            renderDatesList();
            renderSessionsList(true);
          }
        };
        reader.onerror = function () {
          pending--;
        };
        reader.readAsText(fileObj, "utf-8");
      });
    }

    // Bind UI controls
    var btnRefresh = document.getElementById("ch-btn-refresh");
    if (btnRefresh) {
      btnRefresh.addEventListener("click", function () {
        loadFromLocalLauncher(true);
      });
    }

    var btnOpenFolder = document.getElementById("ch-btn-open-folder");
    if (btnOpenFolder) {
      btnOpenFolder.addEventListener("click", function () {
        var targetDate = (state.selectedDate && state.selectedDate !== "__ALL__") ? state.selectedDate : "";
        fetch(LOCAL_CHAT_API_BASE + "/api/chat/open-folder", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ date: targetDate }),
          targetAddressSpace: "local"
        }).catch(function () {});
      });
    }

    var folderInput = document.getElementById("ch-folder-picker");
    if (folderInput) {
      folderInput.addEventListener("change", function () {
        importLocalFolderFiles(this.files);
      });
    }

    var roomSearch = document.getElementById("ch-room-search");
    if (roomSearch) {
      roomSearch.addEventListener("input", function () {
        state.roomSearch = this.value || "";
        renderSessionsList(false);
      });
    }

    var scopeBtns = chApp.querySelectorAll("[data-ch-scope]");
    for (var sb = 0; sb < scopeBtns.length; sb++) {
      scopeBtns[sb].addEventListener("click", function () {
        state.scope = this.getAttribute("data-ch-scope") || "all";
        for (var j = 0; j < scopeBtns.length; j++) {
          scopeBtns[j].classList.toggle("active", scopeBtns[j].getAttribute("data-ch-scope") === state.scope);
        }
        renderSessionsList(true);
      });
    }

    var msgSearch = document.getElementById("ch-msg-search");
    if (msgSearch) {
      msgSearch.addEventListener("input", function () {
        state.msgSearch = this.value || "";
        renderViewer();
      });
    }

    var btnCopy = document.getElementById("ch-btn-copy-txt");
    if (btnCopy) {
      btnCopy.addEventListener("click", function () {
        if (!state.loadedSession || !state.loadedSession.rawText) return;
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(state.loadedSession.rawText).then(function () {
            showToast(dict().chCopiedToast);
          });
        }
      });
    }

    var btnDl = document.getElementById("ch-btn-download-txt");
    if (btnDl) {
      btnDl.addEventListener("click", function () {
        if (!state.loadedSession || !state.loadedSession.rawText) return;
        var blob = new Blob([state.loadedSession.rawText], { type: "text/plain;charset=utf-8" });
        var a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = (state.loadedSession.date || "chat") + "_" + (state.loadedSession.file || "chat.txt");
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        setTimeout(function () { URL.revokeObjectURL(a.href); }, 1000);
      });
    }

    var btnDel = document.getElementById("ch-btn-delete-file");
    if (btnDel) {
      btnDel.addEventListener("click", function () {
        if (!state.loadedSession || state.mode !== "live") return;
        if (!window.confirm(dict().chDeleteConfirm)) return;
        fetch(LOCAL_CHAT_API_BASE + "/api/chat/delete-file", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ date: state.loadedSession.date, file: state.loadedSession.file }),
          targetAddressSpace: "local"
        })
          .then(function (r) { return r.ok ? r.json() : null; })
          .then(function (res) {
            if (res && res.ok) {
              showToast(dict().chDeletedToast);
              state.selectedSessionKey = "";
              state.loadedSession = null;
              loadFromLocalLauncher(true);
            }
          })
          .catch(function () {});
      });
    }

    refreshChatHistoryI18n = function () {
      updateConnectionBanner();
      renderDatesList();
      renderSessionsList(false);
      renderViewer();
    };

    document.addEventListener("visibilitychange", function () {
      if (!document.hidden && state.mode !== "local") {
        loadFromLocalLauncher(true);
      }
    });

    loadFromLocalLauncher(false);
  }

  // Bind SLauncher Helper-style expandable "GRP · Chat Logs" header dropdown
  (function initNavToolsDropdown() {
    var wrap = document.getElementById("nav-tools-dropdown");
    var btn = document.getElementById("nav-tools-trigger");
    var panel = document.getElementById("nav-tools-menu");
    if (!wrap || !btn || !panel) return;

    function setExpanded(open) {
      var next = !!open;
      wrap.classList.toggle("is-open", next);
      btn.setAttribute("aria-expanded", next ? "true" : "false");
      if (next) {
        panel.removeAttribute("hidden");
      } else {
        panel.setAttribute("hidden", "");
      }
    }

    btn.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      setExpanded(panel.hasAttribute("hidden"));
    });

    panel.addEventListener("click", function (e) {
      var link = e.target && e.target.closest ? e.target.closest("a[href]") : null;
      if (!link) return;
      var href = link.getAttribute("href") || "";
      setExpanded(false);
      if (href.indexOf("#") === 0 && href.length > 1) {
        var targetEl = document.getElementById(href.slice(1));
        if (targetEl) {
          e.preventDefault();
          targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
          try { history.replaceState(null, "", href); } catch (_) {}
        }
      }
    });

    document.addEventListener("click", function (e) {
      if (!panel.hasAttribute("hidden") && !wrap.contains(e.target)) {
        setExpanded(false);
      }
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !panel.hasAttribute("hidden")) {
        setExpanded(false);
        btn.focus();
      }
    });
  })();

  applyLanguage(currentLang);
  initChatHistoryPage();
  loadReleaseMetadata();
  startUserMetrics();
})();
