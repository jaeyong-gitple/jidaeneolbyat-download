// 

/**
 * 지대넓얕 다운로드 from podcast archive
 */


const jidaeneolbyats = [
  {
      "title": "19회 - [인물] 나는위대하다3 (세종대왕)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_19hoe-inmul-naneunwidaehada3_1000317431819"
  },
  {
      "title": "19회 - [인물] 나는위대하다4 (달라이라마)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_19hoe-inmul-naneunwidaehada4_1000317431820"
  },
  {
      "title": "20회 - [사랑] 글로 배운 사랑 (2부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_20hoe-sarang-geulro-baeun-sa_1000317724713"
  },
  {
      "title": "20회 - [사랑] 글로 배운 사랑 (1부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_20hoe-sarang-geulro-baeun-sa_1000317724714"
  },
  {
      "title": "21회 - [사랑] 사회와 불륜 (3부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_21hoe-sarang-sahoewa-bulryun_1000318042534"
  },
  {
      "title": "21회 - [사랑] 경제와 연애 (4부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_21hoe-sarang-gyeongjewa-yeon_1000318042535"
  },
  {
      "title": "22회 - [철학] 니체 (2부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_22hoe-ceolhag-nice-2bu_1000318296458"
  },
  {
      "title": "22회 - [철학] 중세철학 (1부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_22hoe-ceolhag-jungseceolhag-_1000318296457"
  },
  {
      "title": "23회 - [철학] 키에르케고르 (3부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_23hoe-ceolhag-kiereukegoreu-_1000318561607"
  },
  {
      "title": "24회 - [철학] 소크라테스 (4-2부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_24hoe-ceolhag-sokeurateseu-4_1000318890401"
  },
  {
      "title": "24회 - [철학] 소크라테스 (4-1부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_24hoe-ceolhag-sokeurateseu-4_1000318890400"
  },
  {
      "title": "25회 - [시사] 팔레스타인과 이스라엘(2부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_25hoe-sisa-palreseutaingwa-i_1000319162639"
  },
  {
      "title": "25회 - [시사] 팔레스타인과 이스라엘(1부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_25hoe-sisa-palreseutaingwa-i_1000319162638"
  },
  {
      "title": "26회 - [시사] 일간베스트 (2부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_26hoe-sisa-ilganbeseuteu-2bu_1000319430428"
  },
  {
      "title": "26회 - [시사] 일간베스트 (1부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_26hoe-sisa-ilganbeseuteu-1bu_1000319430427"
  },
  {
      "title": "27회 - [시사] LHC와 블랙홀(1부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_27hoe-sisa-lhcwa-beulraeghol_1000319706864"
  },
  {
      "title": "27회 - [시사] LHC와 블랙홀(2부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_27hoe-sisa-lhcwa-beulraeghol_1000319706863"
  },
  {
      "title": "28회 - [시사] 말레이시아기 실종사건(1부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_28hoe-sisa-malreisiagi-siljo_1000319979182"
  },
  {
      "title": "28회 - [시사] 외계인 실종사건(2부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_28hoe-sisa-oegyein-siljongsa_1000319979183"
  },
  {
      "title": "29회 - [괴담] 에볼라 바이러스(2부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_29hoe-goedam-ebolra-baireose_1000320201012"
  },
  {
      "title": "29회 - [괴담] 터스키기 매독생체실험(1부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_29hoe-goedam-teoseukigi-maed_1000320201013"
  },
  {
      "title": "30회 - [미담] 외계인이 준 음식(4부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_30hoe-midam-oegyeini-jun-eum_1000320555416"
  },
  {
      "title": "30회 - [괴담] 조선족 괴담(3부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_30hoe-goedam-joseonjog-goeda_1000320555417"
  },
  {
      "title": "31회 - [단체] 이슬람암살단 어쌔신(1부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_31hoe-dance-iseulramamsaldan_1000321486003"
  },
  {
      "title": "31회 - [단체] 연방준비이사회 FRB(2부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_31hoe-dance-yeonbangjunbiisa_1000321486004"
  },
  {
      "title": "32회 - [단체] FRB 음모론(3부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_32hoe-dance-frb-eummoron3bu_1000323718057"
  },
  {
      "title": "32회 - [단체] 비밀 명상단체(4부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_32hoe-dance-bimil-myeongsang_1000323718058"
  },
  {
      "title": "33회 - [단체] 미 국가안보국NSA (5-1)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_33hoe-dance-mi-guggaanbogugn_1000325324695"
  },
  {
      "title": "33회 - [단체] 미 국가안보국NSA (5-2)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_33hoe-dance-mi-guggaanbogugn_1000325324696"
  },
  {
      "title": "34회 - [영화] 비카인드 리와인드(노동)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_34hoe-yeonghwa-bikaindeu-riw_1000326049817"
  },
  {
      "title": "34회 - [영화] 라이프 오브 파이(종교)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_34hoe-yeonghwa-raipeu-obeu-p_1000326049816"
  },
  {
      "title": "35회 - [영화] 인터스텔라1 (특수상대성이론)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_35hoe-yeonghwa-inteoseutelra_1000326293976"
  },
  {
      "title": "35회 - [영화] 인터스텔라2 (일반상대성이론)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_35hoe-yeonghwa-inteoseutelra_1000326293977"
  },
  {
      "title": "[공지] 2014 지대넓얕 공식 정모 안내",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_gongji-2014-jidaeneolbyat-gong_1000326548208"
  },
  {
      "title": "36회 - [영화] 프로메테우스(농사)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_36hoe-yeonghwa-peurometeuseu_1000326804428"
  },
  {
      "title": "36회 - [영화] 인터스텔라3 (영화해설편)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_36hoe-yeonghwa-inteoseutelra_1000326804427"
  },
  {
      "title": "37회 - [정모] 의식이란 무엇인가 (2부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_37hoe-jeongmo-yisigiran-mueo_1000327370312"
  },
  {
      "title": "37회 - [정모] 의식이란 무엇인가 (1부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_37hoe-jeongmo-yisigiran-mueo_1000327370313"
  },
  {
      "title": "38회 - [정모A/S] 윤리 배틀필드 (2부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_38hoe-jeongmoas-yunri-baeteu_1000328215958"
  },
  {
      "title": "38회 - [정모A/S] 윤리의 두 관점 (1부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_38hoe-jeongmoas-yunriyi-du-g_1000328215959"
  },
  {
      "title": "39회 - [새해] 김도인의 선물(깨달음2)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_39hoe-saehae-gimdoinyi-seonm_1000329458519"
  },
  {
      "title": "39회 - [새해] 김도인의 선물(깨달음1)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_39hoe-saehae-gimdoinyi-seonm_1000329458518"
  },
  {
      "title": "40회 - [새해] 깡선생의 선물(종교분쟁해결2)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_40hoe-saehae-ggangseonsaengy_1000332297025"
  },
  {
      "title": "40회 - [새해] 깡선생의 선물(종교분쟁해결1)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_40hoe-saehae-ggangseonsaengy_1000332297026"
  },
  {
      "title": "41회 - [새해] 독실이의 선물(커피2)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_41hoe-saehae-dogsiliyi-seonm_1000333858039"
  },
  {
      "title": "41회 - [새해] 독실이의 선물(커피1)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_41hoe-saehae-dogsiliyi-seonm_1000333858040"
  },
  {
      "title": "42회 - [새해] 채사장의 선물(미술사2)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_42hoe-saehae-caesajangyi-seo_1000334486244"
  },
  {
      "title": "42회 - [새해] 채사장의 선물(미술사1)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_42hoe-saehae-caesajangyi-seo_1000334486245"
  },
  {
      "title": "43회 - [지대북] 호모 루덴스 (1부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_43hoe-jidaebug-homo-rudenseu_1000335154097"
  },
  {
      "title": "43회 - [지대북] 호모 루덴스 (2부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_43hoe-jidaebug-homo-rudenseu_1000335154096"
  },
  {
      "title": "44회 - [지대북] 영혼들의 여행 (2부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_44hoe-jidaebug-yeonghondeuly_1000335494185"
  },
  {
      "title": "44회 - [지대북] 영혼들의 여행 (1부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_44hoe-jidaebug-yeonghondeuly_1000335494184"
  },
  {
      "title": "45회 - [지대북] 불안 (2부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_45hoe-jidaebug-bulan-2bu_1000336611244"
  },
  {
      "title": "45회 - [지대북] 불안 (1부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_45hoe-jidaebug-bulan-1bu_1000336611245"
  },
  {
      "title": "46회 - [지대북] 타인보다 더 민감한 사람(2부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_46hoe-jidaebug-tainboda-deo-_1000337136444"
  },
  {
      "title": "46회 - [지대북] 타인보다 더 민감한 사람(1부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_46hoe-jidaebug-tainboda-deo-_1000337136445"
  },
  {
      "title": "47회 - [과학] 플로지스톤과 화학(2부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_47hoe-gwahag-peulrojiseutong_1000337646966"
  },
  {
      "title": "47회 - [과학] 연금술과 화학의 역사(1부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_47hoe-gwahag-yeongeumsulgwa-_1000337646965"
  },
  {
      "title": "48회 - [과학] 인간의 유래 (2부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_48hoe-gwahag-inganyi-yurae-2_1000338144017"
  },
  {
      "title": "48회 - [과학] 인간의 유래 (1부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_48hoe-gwahag-inganyi-yurae-1_1000338144018"
  },
  {
      "title": "49회 - [과학] 인간의 유래 (3부 후생유전학)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_49hoe-gwahag-inganyi-yurae-3_1000338653224"
  },
  {
      "title": "49회 - [과학] 인간의 유래 (4부 성선택)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_49hoe-gwahag-inganyi-yurae-4_1000338653223"
  },
  {
      "title": "50회 - [1주년 특집] 지대어워드 (1부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_50hoe-1junyeon-teugjib-jidae_1000339256205"
  },
  {
      "title": "50회 - [1주년 특집] 지대인터뷰 (2부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_50hoe-1junyeon-teugjib-jidae_1000339256204"
  },
  {
      "title": "51회 - [과학] 테슬라외전 필라델피아실험(1부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_51hoe-gwahag-teseulraoejeon-_1000339765204"
  },
  {
      "title": "51회 - [과학] 테슬라도입 전자기 기초(2부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_51hoe-gwahag-teseulradoib-je_1000339765205"
  },
  {
      "title": "52회 - [과학] 생활속의 전자기학 (4부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_52hoe-gwahag-saenghwalsogyi-_1000340253558"
  },
  {
      "title": "52회 - [과학] 테슬라평전 (3부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_52hoe-gwahag-teseulrapyeongj_1000340253559"
  },
  {
      "title": "53회 - [수학] 수학과 무한의 비교 (2부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_53hoe-suhag-suhaggwa-muhanyi_1000340734713"
  },
  {
      "title": "53회 - [수학] 수학과 수체계 (1부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_53hoe-suhag-suhaggwa-sucegye_1000340734714"
  },
  {
      "title": "54회 - [수학] 수학교육이 필요한가 (4부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_54hoe-suhag-suhaggyoyugi-pil_1000341257733"
  },
  {
      "title": "54회 - [수학] 함수와 극한 (3부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_54hoe-suhag-hamsuwa-geughan-_1000341257732"
  },
  {
      "title": "결방 안내 + 결방 기념 선물",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_gyeolbang-annae-gyeolbang-gin_1000341736764"
  },
  {
      "title": "55회 - [교육] 보수적 교육과 진보적 교육 (1부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_55hoe-gyoyug-bosujeog-gyoyug_1000342363196"
  },
  {
      "title": "55회 - [교육] 어떤 교육이 필요한가 (2부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_55hoe-gyoyug-eoddeon-gyoyugi_1000342363195"
  },
  {
      "title": "56회 - [교육] 공교육과 대안학교 (4부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_56hoe-gyoyug-gonggyoyuggwa-d_1000342969919"
  },
  {
      "title": "56회 - [교육] 공교육과 대안학교 (3부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_56hoe-gyoyug-gonggyoyuggwa-d_1000342969920"
  },
  {
      "title": "결방 안내 ㅠㅠ",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_gyeolbang-annae-yuyu_1000343543701"
  },
  {
      "title": "57회 - [보건] 전염병의 역사 (1부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_57hoe-bogeon-jeonyeombyeongy_1000344121464"
  },
  {
      "title": "57회 - [보건] 세균과 바이러스 (2부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_57hoe-bogeon-segyungwa-baire_1000344121463"
  },
  {
      "title": "58회 - [인물] 나는천재다1-2 (율곡 이이)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_58hoe-inmul-naneunceonjaeda1_1000344689990"
  },
  {
      "title": "58회 - [인물] 나는천재다1-1 (율곡 이이)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_58hoe-inmul-naneunceonjaeda1_1000344689989"
  },
  {
      "title": "59회 - [인물] 나는천재다2-2 (알렉산더 대왕)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_59hoe-inmul-naneunceonjaeda2_1000345252380"
  },
  {
      "title": "59회 - [인물] 나는천재다2-1 (알렉산더 대왕)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_59hoe-inmul-naneunceonjaeda2_1000345252381"
  },
  {
      "title": "60회 - [인물] 나는천재다3-1 (카사노바)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_60hoe-inmul-naneunceonjaeda3_1000345821131"
  },
  {
      "title": "60회 - [인물] 나는천재다3-2 (카사노바)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_60hoe-inmul-naneunceonjaeda3_1000345821130"
  },
  {
      "title": "61회 - [인물] 나는천재다4-1 (붓다)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_61hoe-inmul-naneunceonjaeda4_1000346383130"
  },
  {
      "title": "61회 - [인물] 나는천재다4-2 (붓다)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_61hoe-inmul-naneunceonjaeda4_1000346383129"
  },
  {
      "title": "62회 - [역사] 동아시아정세와 일본제국주의 탄생(1부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_62hoe-yeogsa-dongasiajeongse_1000346902300"
  },
  {
      "title": "62회 - [역사] 독립투쟁의 시작(2부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_62hoe-yeogsa-dogribtujaengyi_1000346902299"
  },
  {
      "title": "63회 - [역사] 의열투쟁의 전개(3부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_63hoe-yeogsa-yiyeoltujaengyi_1000347420667"
  },
  {
      "title": "63회 - [역사] 광복이후와 반민특위(4부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_63hoe-yeogsa-gwangbogihuwa-b_1000347420668"
  },
  {
      "title": "64회 - [여름] 납량특집 배틀필드 (1부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_64hoe-yeoreum-nabryangteugji_1000347994123"
  },
  {
      "title": "64회 - [여름] 납량특집 배틀필드 (2부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_64hoe-yeoreum-nabryangteugji_1000347994124"
  },
  {
      "title": "65회 - [마리팟] 백기사 신드롬 (1부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_65hoe-maripas-baeggisa-sinde_1000348559908"
  },
  {
      "title": "65회 - [마리팟] 백기사 신드롬 (2부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_65hoe-maripas-baeggisa-sinde_1000348559909"
  },
  {
      "title": "결방안내",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_gyeolbangannae_1000384335789"
  },
  {
      "title": "66회 - [철학] 파르메니데스 (1부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_66hoe-ceolhag-pareumenideseu_1000349747215"
  },
  {
      "title": "66회 - [철학] 파르메니데스 (2부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_66hoe-ceolhag-pareumenideseu_1000349747216"
  },
  {
      "title": "67회 - [철학] 이기론 프리퀄 (2부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_67hoe-ceolhag-igiron-peurikw_1000350334701"
  },
  {
      "title": "67회 - [철학] 이기론 프리퀄 (1부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_67hoe-ceolhag-igiron-peurikw_1000350334700"
  },
  {
      "title": "68회 - [철학] 비트겐슈타인 (2부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_68hoe-ceolhag-biteugensyutai_1000350902175"
  },
  {
      "title": "68회 - [철학] 비트겐슈타인 (1부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_68hoe-ceolhag-biteugensyutai_1000350902176"
  },
  {
      "title": "69회 - [철학] 칼 포퍼 (2부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_69hoe-ceolhag-kal-popeo-2bu_1000351472295"
  },
  {
      "title": "69회 - [철학] 칼 포퍼 (1부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_69hoe-ceolhag-kal-popeo-1bu_1000351472296"
  },
  {
      "title": "결방안내",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_gyeolbangannae_1000384335784"
  },
  {
      "title": "70회 - [취미] 게임 (1부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_70hoe-cwimi-geim-1bu_1000352666238"
  },
  {
      "title": "70회 - [취미] 게임 (2부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_70hoe-cwimi-geim-2bu_1000352666237"
  },
  {
      "title": "71회 - [취미] 천연화장품 (2부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_71hoe-cwimi-ceonyeonhwajangp_1000353318387"
  },
  {
      "title": "71회 - [취미] 천연화장품 (1부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_71hoe-cwimi-ceonyeonhwajangp_1000353318388"
  },
  {
      "title": "72회 - [취미] 빨래 (1부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_72hoe-cwimi-bbalrae-1bu_1000353950542"
  },
  {
      "title": "72회 - [취미] 빨래 (2부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_72hoe-cwimi-bbalrae-2bu_1000353950541"
  },
  {
      "title": "73회 - [취미] 주식 (1부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_73hoe-cwimi-jusig-1bu_1000354587171"
  },
  {
      "title": "73회 - [취미] 주식 (2부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_73hoe-cwimi-jusig-2bu_1000354586131"
  },
  {
      "title": "74회 - [지대북] 독서의 역사 (1부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_74hoe-jidaebug-dogseoyi-yeog_1000354800784"
  },
  {
      "title": "74회 - [지대북] 독서의 역사 (2부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_74hoe-jidaebug-dogseoyi-yeog_1000354800087"
  },
  {
      "title": "75회 - [지대북] 초병렬 독서법 (2부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_75hoe-jidaebug-cobyeongryeol_1000355418012"
  },
  {
      "title": "75회 - [지대북] 초병렬 독서법 (1부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_75hoe-jidaebug-cobyeongryeol_1000355418011"
  },
  {
      "title": "76회 - [지대북] 기생충 제국 (2부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_76hoe-jidaebug-gisaengcung-j_1000356037945"
  },
  {
      "title": "76회 - [지대북] 기생충 제국 (1부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_76hoe-jidaebug-gisaengcung-j_1000356038186"
  },
  {
      "title": "77회 - [지대송] 대중음악 속 과학 (1부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_77hoe-jidaesong-daejungeumag_1000356634521"
  },
  {
      "title": "77회 - [지대송] 대중음악 속 과학 (2부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_77hoe-jidaesong-daejungeumag_1000356634520"
  },
  {
      "title": "78회 - [지대북] 티벳 사자의 서 (2부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_78hoe-jidaebug-tibes-sajayi-_1000357154501"
  },
  {
      "title": "78회 - [지대북] 티벳 사자의 서 (1부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_78hoe-jidaebug-tibes-sajayi-_1000357154500"
  },
  {
      "title": "[공지] 2015 지대넓얕 공개방송 // 이번 주 결방 안내",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_gongji-2015-jidaeneolbyat-gong_1000357345063"
  },
  {
      "title": "79회 - [공개강연] 인문학과 인간의 도덕 (1부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_79hoe-gonggaegangyeon-inmunh_1000357980815"
  },
  {
      "title": "79회 - [공개강연] 인문학과 인간의 도덕 (2부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_79hoe-gonggaegangyeon-inmunh_1000357980814"
  },
  {
      "title": "80회 - [문명] 이집트 문명 (2부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_80hoe-munmyeong-ijibteu-munm_1000358411517"
  },
  {
      "title": "80회 - [문명] 수메르 문명 (1부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_80hoe-munmyeong-sumereu-munm_1000358411518"
  },
  {
      "title": "81회 - [문명] 중국 문명 (3부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_81hoe-munmyeong-junggug-munm_1000358832249"
  },
  {
      "title": "81회 - [문명] 아즈텍 문명 (4부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_81hoe-munmyeong-ajeuteg-munm_1000358832248"
  },
  {
      "title": "82회 - [정모] 포스트모더니즘 (1부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_82hoe-jeongmo-poseuteumodeon_1000359267821"
  },
  {
      "title": "82회 - [정모] 포스트모더니즘 (2부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_82hoe-jeongmo-poseuteumodeon_1000359267820"
  },
  {
      "title": "결방안내",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_gyeolbangannae_1000384335787"
  },
  {
      "title": "83회 - [새해] 깡쌤의 선물(길가메시 서사시2)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_83hoe-saehae-ggangssaemyi-se_1000359971527"
  },
  {
      "title": "83회 - [새해] 깡쌤의 선물(길가메시 서사시1)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_83hoe-saehae-ggangssaemyi-se_1000359971528"
  },
  {
      "title": "84회 - [새해] 김도인의 선물(에니어그램2)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_84hoe-saehae-gimdoinyi-seonm_1000360383272"
  },
  {
      "title": "84회 - [새해] 김도인의 선물(에니어그램1)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_84hoe-saehae-gimdoinyi-seonm_1000360383273"
  },
  {
      "title": "85회 - [새해] 덕실이의 선물(밤하늘 이야기2)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_85hoe-saehae-deogsiliyi-seon_1000360795880"
  },
  {
      "title": "85회 - [새해] 덕실이의 선물(밤하늘 이야기1)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_85hoe-saehae-deogsiliyi-seon_1000360795881"
  },
  {
      "title": "86회 - [새해] 채사장의 선물(지저세계1)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_86hoe-saehae-caesajangyi-seo_1000361215754"
  },
  {
      "title": "86회 - [새해] 채사장의 선물(지저세계2)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_86hoe-saehae-caesajangyi-seo_1000361215753"
  },
  {
      "title": "87회 - [북토크 콘서트] 시민의 교양(1부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_87hoe-bugtokeu-konseoteu-sim_1000361722045"
  },
  {
      "title": "87회 - [북토크 콘서트] 시민의 교양(2부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_87hoe-bugtokeu-konseoteu-sim_1000361722044"
  },
  {
      "title": "결방안내",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_gyeolbangannae_1000384335785"
  },
  {
      "title": "특별편 - [과학] 중력파 특집",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_teugbyeolpyeon-gwahag-jungry_1000362872457"
  },
  {
      "title": "88회 - [영화] 대부 (2부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_88hoe-yeonghwa-daebu-2bu_1000362872458"
  },
  {
      "title": "88회 - [영화] 대부 (1부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_88hoe-yeonghwa-daebu-1bu_1000362872459"
  },
  {
      "title": "89회 - [영화] 안경 (1부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_89hoe-yeonghwa-angyeong-1bu_1000363317862"
  },
  {
      "title": "89회 - [영화] 안경 (2부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_89hoe-yeonghwa-angyeong-2bu_1000363317863"
  },
  {
      "title": "90회 - [영화] 설국열차 (1부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_90hoe-yeonghwa-seolgugyeolca_1000363804610"
  },
  {
      "title": "90회 - [영화] 설국열차 (2부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_90hoe-yeonghwa-seolgugyeolca_1000363804611"
  },
  {
      "title": "91회 - [영화] 공각기동대 (2부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_91hoe-yeonghwa-gonggaggidong_1000364264434"
  },
  {
      "title": "91회 - [영화] 공각기동대 (1부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_91hoe-yeonghwa-gonggaggidong_1000364264433"
  },
  {
      "title": "92회 - [출퇴근] 말 (1부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_92hoe-cultoegeun-mal-1bu_1000364706402"
  },
  {
      "title": "92회 - [출퇴근] 말 (2부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_92hoe-cultoegeun-mal-2bu_1000364706401"
  },
  {
      "title": "93회 - [출퇴근] 걷기",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_93hoe-cultoegeun-geodgi_1000365128842"
  },
  {
      "title": "93회 - [출퇴근] 기구",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_93hoe-cultoegeun-gigu_1000365128840"
  },
  {
      "title": "93회 - [출퇴근] 흑기사 위성",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_93hoe-cultoegeun-heuggisa-wi_1000365128841"
  },
  {
      "title": "[공지] 에피소드 업로드 지연 안내 - 4/5(화) 밤. 업로드 예정",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_gongji-episodeu-eobrodeu-jiyeo_1000365981894"
  },
  {
      "title": "94회 - [정치] 꿀벌의 민주주의 (1부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_94hoe-jeongci-ggulbeolyi-min_1000366209343"
  },
  {
      "title": "94회 - [정치] 꿀벌의 민주주의 (2부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_94hoe-jeongci-ggulbeolyi-min_1000366209344"
  },
  {
      "title": "95회 - [꿈과 수면] 꿈 (2부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_95hoe-ggumgwa-sumyeon-ggum-2_1000366533368"
  },
  {
      "title": "95회 - [꿈과 수면] 꿈 (1부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_95hoe-ggumgwa-sumyeon-ggum-1_1000366533367"
  },
  {
      "title": "96회 - [꿈과 수면] 수면의 과학 (1부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_96hoe-ggumgwa-sumyeon-sumyeo_1000366969597"
  },
  {
      "title": "96회 - [꿈과 수면] 수면의 과학 (2부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_96hoe-ggumgwa-sumyeon-sumyeo_1000366969596"
  },
  {
      "title": "97회 - [이불밖은 위험해] 지진 (1부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_97hoe-ibulbaggeun-wiheomhae-_1000367410123"
  },
  {
      "title": "97회 - [이불밖은 위험해] 지진 (2부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_97hoe-ibulbaggeun-wiheomhae-_1000367410122"
  },
  {
      "title": "98회 - [이불밖은 위험해] 파티마의 예언 (2부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_98hoe-ibulbaggeun-wiheomhae-_1000367826793"
  },
  {
      "title": "98회 - [이불밖은 위험해] 파티마의 예언 (1부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_98hoe-ibulbaggeun-wiheomhae-_1000367826794"
  },
  {
      "title": "[공지] 에피소드 업로드 지연 안내 - 5/10(화) 오전. 업로드 예정",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_gongji-episodeu-eobrodeu-jiyeo_1000368194702"
  },
  {
      "title": "99회 - [이불밖은 위험해] 모기 (2부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_99hoe-ibulbaggeun-wiheomhae-_1000368358901"
  },
  {
      "title": "99회 - [이불밖은 위험해] 모기 (1부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_99hoe-ibulbaggeun-wiheomhae-_1000368358900"
  },
  {
      "title": "100회 - [100회 특집] 내 마음 속 지대넓얕(1부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_100hoe-100hoe-teugjib-nae-ma_1000368708892"
  },
  {
      "title": "100회 - [100회 특집] 내 마음 속 지대넓얕(2부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_100hoe-100hoe-teugjib-nae-ma_1000368708891"
  },
  {
      "title": "101회 - [정신] 성격장애 (2부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_101hoe-jeongsin-seonggyeogja_1000369126705"
  },
  {
      "title": "101회 - [정신] 성격장애 (1부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_101hoe-jeongsin-seonggyeogja_1000369126704"
  },
  {
      "title": "102회 - [정신] 광기의 역사 (1부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_102hoe-jeongsin-gwanggiyi-ye_1000369577088"
  },
  {
      "title": "102회 - [정신] 광기의 역사 (2부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_102hoe-jeongsin-gwanggiyi-ye_1000369577089"
  },
  {
      "title": "103회 - [정신] 사이코패스 (1부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_103hoe-jeongsin-saikopaeseu-_1000370047828"
  },
  {
      "title": "103회 - [정신] 사이코패스 (2부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_103hoe-jeongsin-saikopaeseu-_1000370047829"
  },
  {
      "title": "104회 - [정신] 전생기억과 아카식레코드 (1부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_104hoe-jeongsin-jeonsaenggie_1000370517486"
  },
  {
      "title": "104회 - [정신] 전생기억과 아카식레코드 (2부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_104hoe-jeongsin-jeonsaenggie_1000370517487"
  },
  {
      "title": "결방안내",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_gyeolbangannae_1000384335786"
  },
  {
      "title": "105회 - [대화] 지적 대화의 탄생 (2부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_105hoe-daehwa-jijeog-daehway_1000371404151"
  },
  {
      "title": "105회 - [대화] 지적 대화의 탄생 (1부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_105hoe-daehwa-jijeog-daehway_1000371404152"
  },
  {
      "title": "106회 - [대화] 맹자의 논쟁 (2부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_106hoe-daehwa-maengjayi-nonj_1000371859617"
  },
  {
      "title": "106회 - [대화] 맹자의 논쟁 (1부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_106hoe-daehwa-maengjayi-nonj_1000371859618"
  },
  {
      "title": "107회 - [대화] 소피스트의 논쟁 (2부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_107hoe-daehwa-sopiseuteuyi-n_1000372204613"
  },
  {
      "title": "107회 - [대화] 소피스트의 논쟁 (1부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_107hoe-daehwa-sopiseuteuyi-n_1000372204612"
  },
  {
      "title": "결방안내 ㅠㅠ",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_gyeolbangannae-yuyu_1000372565840"
  },
  {
      "title": "108회 - [대화] 과학 전쟁 (2부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_108hoe-daehwa-gwahag-jeonjae_1000372992709"
  },
  {
      "title": "108회 - [대화] 과학 전쟁 (1부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_108hoe-daehwa-gwahag-jeonjae_1000372992710"
  },
  {
      "title": "109회 - [대화] 붓다의 모두까기 (2부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_109hoe-daehwa-busdayi-modugg_1000373446680"
  },
  {
      "title": "109회 - [대화] 붓다의 모두까기 (1부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_109hoe-daehwa-busdayi-modugg_1000373446679"
  },
  {
      "title": "110회 - [여행] 신화 속 세계 (2부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_110hoe-yeohaeng-sinhwa-sog-s_1000373813881"
  },
  {
      "title": "110회 - [여행] 양을 쫓는 모험 (1부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_110hoe-yeohaeng-yangeul-jjoc_1000373813880"
  },
  {
      "title": "111회 - [여행] 대항해시대 (2부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_111hoe-yeohaeng-daehanghaesi_1000374101883"
  },
  {
      "title": "111회 - [여행] 대항해시대 (1부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_111hoe-yeohaeng-daehanghaesi_1000374101884"
  },
  {
      "title": "112회 - [여행] 주성치와 떠나는 깨달음 여행(1부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_112hoe-yeohaeng-juseongciwa-_1000374372108"
  },
  {
      "title": "112회 - [여행] 주성치와 떠나는 깨달음 여행(2부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_112hoe-yeohaeng-juseongciwa-_1000374372109"
  },
  {
      "title": "113회 - [영화] 미스 페레그린과 이상한 아이들의 집(1부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_113hoe-yeonghwa-miseu-perege_1000374638488"
  },
  {
      "title": "113회 - [영화] 미스 페레그린과 이상한 아이들의 집(2부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_113hoe-yeonghwa-miseu-perege_1000374638489"
  },
  {
      "title": "114회 - [영화] 밀정 (2부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_114hoe-yeonghwa-miljeong-2bu_1000374891048"
  },
  {
      "title": "114회 - [영화] 밀정 (1부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_114hoe-yeonghwa-miljeong-1bu_1000374891049"
  },
  {
      "title": "[공지] 에피소드 업로드 지연 안내 - 9/13(화) 오전. 업로드 예정",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_gongji-episodeu-eobrodeu-jiyeo_1000375133148"
  },
  {
      "title": "115회 - [영화] 진짜로 일어날지도 몰라 기적(1부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_115hoe-yeonghwa-jinjjaro-ile_1000375236198"
  },
  {
      "title": "115회 - [영화] 진짜로 일어날지도 몰라 기적(2부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_115hoe-yeonghwa-jinjjaro-ile_1000375236199"
  },
  {
      "title": "116회 - [영화] 매트릭스 (1부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_116hoe-yeonghwa-maeteurigseu_1000375753699"
  },
  {
      "title": "116회 - [영화] 매트릭스 (2부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_116hoe-yeonghwa-maeteurigseu_1000375753698"
  },
  {
      "title": "[공지] 에피소드 업로드 지연 안내 - 10/5(수) 오전. 업로드 예정",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_gongji-episodeu-eobrodeu-jiyeo_1000376044569"
  },
  {
      "title": "117회 - [인권] 이란과 페르세폴리스 (2부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_117hoe-ingweon-irangwa-pereu_1000376263550"
  },
  {
      "title": "117회 - [인권] 이란과 페르세폴리스 (1부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_117hoe-ingweon-irangwa-pereu_1000376263551"
  },
  {
      "title": "118회 - [북콘서트] 김도인의 숨쉬듯 가볍게 (2부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_118hoe-bugkonseoteu-gimdoiny_1000376493014"
  },
  {
      "title": "118회 - [북콘서트] 김도인의 숨쉬듯 가볍게 (1부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_118hoe-bugkonseoteu-gimdoiny_1000376493013"
  },
  {
      "title": "[공지] 에피소드 업로드 지연 안내 - 10/18(화) 오전. 업로드 예정",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_gongji-episodeu-eobrodeu-jiyeo_1000376674773"
  },
  {
      "title": "119회 - [파워] 러시아 혁명과 라스푸틴 (2부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_119hoe-paweo-reosia-hyeogmye_1000376743785"
  },
  {
      "title": "119회 - [파워] 러시아 혁명과 라스푸틴 (1부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_119hoe-paweo-reosia-hyeogmye_1000376743784"
  },
  {
      "title": "120회 - [파워] 물리학에서의 파워 (1부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_120hoe-paweo-mulrihageseoyi-_1000377035513"
  },
  {
      "title": "120회 - [파워] 암흑에너지 (2부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_120hoe-paweo-amheugeneoji-2b_1000377035514"
  },
  {
      "title": "[공지] 에피소드 업로드 지연 안내 - 10/31(월) 오전. 업로드 예정",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_gongji-episodeu-eobrodeu-jiyeo_1000377261158"
  },
  {
      "title": "121회 - [파워] 도덕감정론과 멘탈파워 (2부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_121hoe-paweo-dodeoggamjeongr_1000377316454"
  },
  {
      "title": "121회 - [파워] 도덕감정론과 멘탈파워 (1부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_121hoe-paweo-dodeoggamjeongr_1000377316453"
  },
  {
      "title": "122회 - [파워] 머니파워 (1부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_122hoe-paweo-meonipaweo-1bu_1000377540018"
  },
  {
      "title": "122회 - [파워] 머니파워 (2부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_122hoe-paweo-meonipaweo-2bu_1000377540017"
  },
  {
      "title": "123회 - [생로병사] 암 (2부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_123hoe-saengrobyeongsa-am-2b_1000377793311"
  },
  {
      "title": "123회 - [생로병사] 암 (1부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_123hoe-saengrobyeongsa-am-1b_1000377793310"
  },
  {
      "title": "124회 - [생로병사] 임사체험 (2부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_124hoe-saengrobyeongsa-imsac_1000378073456"
  },
  {
      "title": "124회 - [생로병사] 임사체험 (1부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_124hoe-saengrobyeongsa-imsac_1000378073215"
  },
  {
      "title": "125회 - [2016공식정모] 죽음에 대하여 (2부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_125hoe-2016gongsigjeongmo-ju_1000378578486"
  },
  {
      "title": "125회 - [2016공식정모] 죽음에 대하여 (1부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_125hoe-2016gongsigjeongmo-ju_1000378578485"
  },
  {
      "title": "125회 - [2016공식정모] 죽음에 대하여 (3부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_125hoe-2016gongsigjeongmo-ju_1000378578487"
  },
  {
      "title": "126회 - [생로병사] 생의 목적 (1부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_126hoe-saengrobyeongsa-saeng_1000378818947"
  },
  {
      "title": "126회 - [생로병사] 생의 목적 (2부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_126hoe-saengrobyeongsa-saeng_1000378818946"
  },
  {
      "title": "127회 - [생로병사] 의식의 기원 (2부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_127hoe-saengrobyeongsa-yisig_1000379085958"
  },
  {
      "title": "127회 - [생로병사] 의식의 기원 (1부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_127hoe-saengrobyeongsa-yisig_1000379085959"
  },
  {
      "title": "128회 - [생로병사] 의식의 기원 (3부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_128hoe-saengrobyeongsa-yisig_1000379319739"
  },
  {
      "title": "128회 - [생로병사] 의식의 기원 (5부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_128hoe-saengrobyeongsa-yisig_1000379319738"
  },
  {
      "title": "128회 - [생로병사] 의식의 기원 (4부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_128hoe-saengrobyeongsa-yisig_1000379319737"
  },
  {
      "title": "129회 - [새해] 독실이의 선물 (수리부엉이 2부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_129hoe-saehae-dogsiliyi-seon_1000379723961"
  },
  {
      "title": "129회 - [새해] 독실이의 선물 (수리부엉이 1부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_129hoe-saehae-dogsiliyi-seon_1000379723962"
  },
  {
      "title": "130회 - [새해] 깡쌤의 선물 (국가 1부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_130hoe-saehae-ggangssaemyi-s_1000379997154"
  },
  {
      "title": "130회 - [새해] 깡쌤의 선물 (국가 2부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_130hoe-saehae-ggangssaemyi-s_1000379997153"
  },
  {
      "title": "130회 - [새해] 깡쌤의 선물 (국가 3부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_130hoe-saehae-ggangssaemyi-s_1000379997152"
  },
  {
      "title": "131회 - [새해] 채사장의 선물 (외계인과의 접촉 1부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_131hoe-saehae-caesajangyi-se_1000380256270"
  },
  {
      "title": "131회 - [새해] 채사장의 선물 (외계인과의 접촉 2부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_131hoe-saehae-caesajangyi-se_1000380256269"
  },
  {
      "title": "결방안내",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_gyeolbangannae_1000384335788"
  },
  {
      "title": "132회 - [새해] 김도인의 선물 (길을 안내하는 자 1부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_132hoe-saehae-gimdoinyi-seon_1000380824156"
  },
  {
      "title": "132회 - [새해] 김도인의 선물 (길을 안내하는 자 2부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_132hoe-saehae-gimdoinyi-seon_1000380824065"
  },
  {
      "title": "133회 - [북콘서트] 열한 계단 (2부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_133hoe-bugkonseoteu-yeolhan-_1000381119863"
  },
  {
      "title": "133회 - [북콘서트] 열한 계단 (1부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_133hoe-bugkonseoteu-yeolhan-_1000381119864"
  },
  {
      "title": "134회 - [혁명] 흑인민권과 버스안타기 운동 (2부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_134hoe-hyeogmyeong-heuginmin_1000381411954"
  },
  {
      "title": "134회 - [혁명] 흑인민권과 버스안타기 운동 (1부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_134hoe-hyeogmyeong-heuginmin_1000381411955"
  },
  {
      "title": "[공지] 결방안내 ㅠㅠ",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_gongji-gyeolbangannae-yuyu_1000381890739"
  },
  {
      "title": "135회 - [혁명] 우주 경쟁의 역사 (1부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_135hoe-hyeogmyeong-uju-gyeon_1000382217662"
  },
  {
      "title": "135회 - [혁명] 우주 경쟁의 역사 (2부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_135hoe-hyeogmyeong-uju-gyeon_1000382217661"
  },
  {
      "title": "135회 - [혁명] 우주 경쟁의 역사 (3부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_135hoe-hyeogmyeong-uju-gyeon_1000382217660"
  },
  {
      "title": "136회 - [혁명] 로드 혁명 (2부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_136hoe-hyeogmyeong-rodeu-hye_1000382516809"
  },
  {
      "title": "136회 - [혁명] 로드 혁명 (1부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_136hoe-hyeogmyeong-rodeu-hye_1000382516810"
  },
  {
      "title": "137회 - [혁명] 살바도르 아옌데 (2부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_137hoe-hyeogmyeong-salbadore_1000382819613"
  },
  {
      "title": "137회 - [혁명] 살바도르 아옌데 (1부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_137hoe-hyeogmyeong-salbadore_1000382819612"
  },
  {
      "title": "138회 - [혁명] 살바도르 아옌데 (3부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_138hoe-hyeogmyeong-salbadore_1000383144583"
  },
  {
      "title": "138회 - [혁명] 살바도르 아옌데 (4부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_138hoe-hyeogmyeong-salbadore_1000383144585"
  },
  {
      "title": "138회 - [혁명] 살바도르 아옌데 (5부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_138hoe-hyeogmyeong-salbadore_1000383144584"
  },
  {
      "title": "139회 - [3주년 특집] 지대 퀴즈 대잔치 (1부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_139hoe-3junyeon-teugjib-jida_1000383537053"
  },
  {
      "title": "139회 - [3주년 특집] 내 마음 속 지대넓얕 (2부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_139hoe-3junyeon-teugjib-nae-_1000383537054"
  },
  {
      "title": "140회 - [인물] 나는짱이다 (조조 1부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_140hoe-inmul-naneunjjangida-_1000384173255"
  },
  {
      "title": "140회 - [인물] 나는짱이다 (조조 2부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_140hoe-inmul-naneunjjangida-_1000384173256"
  },
  {
      "title": "140회 - [인물] 나는짱이다 (조조 3부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_140hoe-inmul-naneunjjangida-_1000384173254"
  },
  {
      "title": "141회 - [인물] 나는짱이다 (유비 1부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_141hoe-inmul-naneunjjangida-_1000384459796"
  },
  {
      "title": "141회 - [인물] 나는짱이다 (유비 3부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_141hoe-inmul-naneunjjangida-_1000384459797"
  },
  {
      "title": "141회 - [인물] 나는짱이다 (유비 2부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_141hoe-inmul-naneunjjangida-_1000384459798"
  },
  {
      "title": "142회 - [인물] 나는짱이다 (홀로코스트와 아빠 1부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_142hoe-inmul-naneunjjangida-_1000384677112"
  },
  {
      "title": "142회 - [인물] 나는짱이다 (홀로코스트와 아빠 2부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_142hoe-inmul-naneunjjangida-_1000384677113"
  },
  {
      "title": "143회 - [인물] 나는짱이다 (A.I.와 영생 2부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_143hoe-inmul-naneunjjangida-_1000384920467"
  },
  {
      "title": "143회 - [인물] 나는짱이다 (A.I.와 영생 1부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_143hoe-inmul-naneunjjangida-_1000384920468"
  },
  {
      "title": "144회 - [인물] 나는짱이다 (단테와 지옥여행 2부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_144hoe-inmul-naneunjjangida-_1000385407282"
  },
  {
      "title": "144회 - [인물] 나는짱이다 (단테와 지옥여행 1부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_144hoe-inmul-naneunjjangida-_1000385407281"
  },
  {
      "title": "145회 - [전생] 임진왜란 (배경 1부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_145hoe-jeonsaeng-imjinwaeran_1000385640964"
  },
  {
      "title": "145회 - [전생] 임진왜란 (선조 2부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_145hoe-jeonsaeng-imjinwaeran_1000385640963"
  },
  {
      "title": "146회 - [전생] 임진왜란 (전개 3부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_146hoe-jeonsaeng-imjinwaeran_1000385883533"
  },
  {
      "title": "146회 - [전생] 임진왜란 (종전 4부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_146hoe-jeonsaeng-imjinwaeran_1000385883532"
  },
  {
      "title": "147회 - [전생] 창과 전쟁의 역사 (1부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_147hoe-jeonsaeng-canggwa-jeo_1000386127830"
  },
  {
      "title": "147회 - [전생] 창과 전쟁의 역사 (2부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_147hoe-jeonsaeng-canggwa-jeo_1000386127829"
  },
  {
      "title": "148회 - [전생] 출가 (육사외도 2부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_148hoe-jeonsaeng-culga-yugsa_1000386389233"
  },
  {
      "title": "148회 - [전생] 출가 (마가다의 왕 1부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_148hoe-jeonsaeng-culga-magad_1000386389232"
  },
  {
      "title": "149회 - [전생] 출가 (육사외도 3부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_149hoe-jeonsaeng-culga-yugsa_1000386674909"
  },
  {
      "title": "149회 - [전생] 출가 (진정한 결실 4부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_149hoe-jeonsaeng-culga-jinje_1000386674908"
  },
  {
      "title": "150회 - [전생] 경계선 성격장애 (2부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_150hoe-jeonsaeng-gyeonggyese_1000389050615"
  },
  {
      "title": "150회 - [전생] 경계선 성격장애 (1부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_150hoe-jeonsaeng-gyeonggyese_1000389050616"
  },
  {
      "title": "151회 - [예술] 술 (2부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_151hoe-yesul-sul-2bu_1000389674570"
  },
  {
      "title": "151회 - [예술] 술 (1부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_151hoe-yesul-sul-1bu_1000389674571"
  },
  {
      "title": "152회 - [예술] 택시운전사와 5월의 기억 (1부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_152hoe-yesul-taegsiunjeonsaw_1000389932865"
  },
  {
      "title": "152회 - [예술] 택시운전사와 5월의 기억 (2부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_152hoe-yesul-taegsiunjeonsaw_1000389932864"
  },
  {
      "title": "153회 - [예술] LIFE 그리고 사진 (1부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_153hoe-yesul-life-geurigo-sa_1000390192270"
  },
  {
      "title": "153회 - [예술] LIFE 그리고 사진 (2부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_153hoe-yesul-life-geurigo-sa_1000390192271"
  },
  {
      "title": "[공지] 지대넓얕 시즌 종료 안내",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_gongji-jidaeneolbyat-sijeun-jo_1000390448414"
  },
  {
      "title": "154회 - [예술] 십우도 (1부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_154hoe-yesul-sibudo-1bu_1000390448412"
  },
  {
      "title": "154회 - [예술] 십우도 (2부)",
      "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_154hoe-yesul-sibudo-2bu_1000390448413"
  }
];

const sample = [
  {
    "title": "19회 - [인물] 나는위대하다3 (세종대왕)",
    "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_19hoe-inmul-naneunwidaehada3_1000317431819"
  },
  {
    "title": "154회 - [예술] 십우도 (2부)",
    "href": "https://archive.org/details/podcast_jidaeneolbyat-jijeog-daehwareu_154hoe-yesul-sibudo-2bu_1000390448413"
  }
];

import fs from 'fs';
import got from 'got';
import * as _ from 'lodash';
const cliProgress = require('cli-progress');
const colors = require('ansi-colors');

/**
 * download url example : https://archive.org/download/podcast_jidaeneolbyat-jijeog-daehwareu_154hoe-yesul-sibudo-1bu_1000390448412/podcast_jidaeneolbyat-jijeog-daehwareu_154hoe-yesul-sibudo-1bu_1000390448412.mp3
 */


const runDownload = async () => {
  for (const item of jidaeneolbyats) {
    const path = _.last(_.split(item.href, '/'));
    const fileName = item.title;
    const url = `https://archive.org/download/${path}/${path}.mp3`;
  
    const reqDownload = got(url).buffer();


    // create progress bar
    const progressBar = new cliProgress.SingleBar({
      format: '> ' + colors.cyan('{bar}') + '| {percentage}% || {transferred} / {size} | ' + fileName,
      barCompleteChar: '\u2588',
      barIncompleteChar: '\u2591',
      hideCursor: true
    });

    const eventListener = (progress: any) => {
      if (_.isNumber(progress.percent) && progress.total) {
        progressBar.update(
          Math.round(progress.percent * 100),
          { 
            transferred: progress.transferred,
            size: progress.total
          }
        );
      }
    };

    reqDownload.on('downloadProgress', eventListener);

    progressBar.start(100, 0, {
      transferred: 'N/A',
      size: 'N/A'
    });    

    const res = await reqDownload;

    fs.writeFileSync(`./downloads/${fileName.replace(/[\/\\:]/g, '_')}.mp3`, res);

    // stop the bar
    progressBar.stop();
    console.log('\n');
  }
};

runDownload();
