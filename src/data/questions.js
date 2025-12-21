export const questions = [
  // EI
  { id: 1, type: 'EI', text: '많은 사람들과 어울리는 모임에 다녀오면 에너지가 충전되는 느낌을 받는다.', reverse: false },
  { id: 2, type: 'EI', text: '대화할 때 말하는 것보다 상대방의 이야기를 듣는 것이 더 편하다.', reverse: true },
  { id: 3, type: 'EI', text: '새로운 사람들을 만나고 먼저 다가가서 대화를 시작하는 것이 어렵지 않다.', reverse: false },
  { id: 4, type: 'EI', text: '주말이나 휴일에는 외출하기보다 집에서 혼자만의 시간을 보내는 것을 선호한다.', reverse: true },
  { id: 5, type: 'EI', text: '생각하기 전에 일단 행동으로 옮기거나 말하면서 생각을 정리하는 편이다.', reverse: false },
  { id: 6, type: 'EI', text: '나의 생각이나 의견을 말하기 전에 머릿속으로 충분히 정리할 시간이 필요하다.', reverse: true },
  { id: 7, type: 'EI', text: '조용한 분위기보다는 활기차고 시끌벅적한 분위기에서 편안함을 느낀다.', reverse: false },
  { id: 8, type: 'EI', text: '다수의 사람보다 소수의 친한 사람들과 깊게 대화하는 자리를 선호한다.', reverse: true },
  { id: 9, type: 'EI', text: '주목받는 상황이나 무대에서 나를 표현하는 것을 즐기는 편이다.', reverse: false },
  { id: 10, type: 'EI', text: '타인에게 연락을 하기보다는 연락이 오기를 기다리거나 문자/톡을 더 선호한다.', reverse: true },

  // SN
  { id: 11, type: 'SN', text: '추상적인 이론보다는 실제로 증명된 사실이나 데이터를 더 신뢰한다.', reverse: false },
  { id: 12, type: 'SN', text: '현재의 상황보다 미래의 가능성이나 의미를 상상하는 것을 즐긴다.', reverse: true },
  { id: 13, type: 'SN', text: '일을 처리할 때, 정해진 매뉴얼이나 기존의 방식을 따르는 것이 편하다.', reverse: false },
  { id: 14, type: 'SN', text: '구체적인 세부 사항보다 전체적인 흐름이나 큰 그림을 먼저 파악하려 한다.', reverse: true },
  { id: 15, type: 'SN', text: '대화할 때 비유나 은유보다 직설적이고 현실적인 표현을 선호한다.', reverse: false },
  { id: 16, type: 'SN', text: '남들이 보지 못하는 새로운 아이디어나 독창적인 방법을 떠올리는 데 능숙하다.', reverse: true },
  { id: 17, type: 'SN', text: '영화나 소설을 볼 때, 판타지보다는 현실감 있는 스토리에 더 몰입한다.', reverse: false },
  { id: 18, type: 'SN', text: '만약에 ~라면?과 같은 가상의 상황에 대해 토론하는 것을 좋아한다.', reverse: true },
  { id: 19, type: 'SN', text: '오감을 통해 직접 보고 듣고 만질 수 있는 구체적인 경험을 중요하게 생각한다.', reverse: false },
  { id: 20, type: 'SN', text: '반복되는 일상적인 업무보다는 변화가 많고 창의적인 일에 흥미를 느낀다.', reverse: true },

  // TF
  { id: 21, type: 'TF', text: '결정을 내릴 때, 내 감정보다 이성적인 논리와 객관적 사실을 우선시한다.', reverse: false },
  { id: 22, type: 'TF', text: '친구가 고민을 털어놓으면 해결책보다 먼저 공감해주고 위로하려 노력한다.', reverse: true },
  { id: 23, type: 'TF', text: '다수와 의견이 다르더라도 사실이 맞다면 직설적으로 이야기하는 편이다.', reverse: false },
  { id: 24, type: 'TF', text: '논리적으로 옳은 것보다 사람들 간의 조화와 화합이 더 중요하다고 생각한다.', reverse: true },
  { id: 25, type: 'TF', text: '타인의 감정에 휩쓸리기보다 상황을 냉정하게 분석하는 데 능숙하다.', reverse: false },
  { id: 26, type: 'TF', text: '상대방이 상처받을까 봐 듣기 싫은 소리나 비판을 하기가 어렵다.', reverse: true },
  { id: 27, type: 'TF', text: '"너 참 냉정하다" 혹은 "이성적이다"라는 말을 종종 듣는 편이다.', reverse: false },
  { id: 28, type: 'TF', text: '의사결정을 할 때, 이 결정이 타인에게 미칠 감정적 영향을 깊이 고려한다.', reverse: true },
  { id: 29, type: 'TF', text: '일의 과정이나 노력보다는 확실한 결과와 성과가 더 중요하다고 생각한다.', reverse: false },
  { id: 30, type: 'TF', text: '영화나 드라마를 보면서 등장인물의 감정에 이입해 눈물을 흘릴 때가 있다.', reverse: true },

  // JP
  { id: 31, type: 'JP', text: '여행이나 데이트를 할 때, 미리 구체적인 계획과 일정을 짜는 것을 선호한다.', reverse: false },
  { id: 32, type: 'JP', text: '미리 계획하기보다 상황에 따라 즉흥적으로 행동하는 것이 더 즐겁다.', reverse: true },
  { id: 33, type: 'JP', text: '정해진 마감 기한이나 약속 시간은 철저하게 지키려고 노력한다.', reverse: false },
  { id: 34, type: 'JP', text: '규칙이나 틀에 얽매이지 않고 융통성 있게 일 처리하는 것을 좋아한다.', reverse: true },
  { id: 35, type: 'JP', text: '내 방이나 책상은 항상 정돈되어 있고 물건이 제자리에 있어야 마음이 편하다.', reverse: false },
  { id: 36, type: 'JP', text: '결정을 빨리 내리기보다 마지막 순간까지 정보를 탐색하며 가능성을 열어둔다.', reverse: true },
  { id: 37, type: 'JP', text: '예측 불가능한 돌발 상황이 발생하면 스트레스를 많이 받는 편이다.', reverse: false },
  { id: 38, type: 'JP', text: '일을 할 때 순서대로 하기보다 마음이 내키는 것부터 시작하는 경향이 있다.', reverse: true },
  { id: 39, type: 'JP', text: '해야 할 일 목록(To-do list)을 작성하고 하나씩 지워나갈 때 성취감을 느낀다.', reverse: false },
  { id: 40, type: 'JP', text: '한 번에 하나의 일을 끝내기보다 여러 가지 일을 동시에 벌려놓는 경우가 있다.', reverse: true },

  // WO
  { id: 41, type: 'WO', text: "상황에 따라 나의 '사회적 역할'과 '본래의 사적인 모습'을 분리할 필요가 있다고 느낀다.", reverse: false },
  { id: 42, type: 'WO', text: '기쁘거나 힘들 때, 주변 사람들에게 나의 감정 상태를 솔직하게 공유하는 것이 편하다.', reverse: true },
  { id: 43, type: 'WO', text: '친한 사람이라도 나의 휴대폰 화면이나 갤러리를 보는 것에 민감하게 반응하는 편이다.', reverse: false },
  { id: 44, type: 'WO', text: '새로 만난 사람에게도 나의 솔직한 과거사나 복잡한 이야기를 공유하는 것에 거리낌이 없다.', reverse: true },
  { id: 45, type: 'WO', text: '퇴근 후나 주말에는 업무(학교)와 관련된 연락을 받고 싶지 않다.', reverse: false },
  { id: 46, type: 'WO', text: '고민이 생기면 혼자 생각하기보다, 누군가에게 이야기하면서 해결책을 찾는 것을 선호한다.', reverse: true },
  { id: 47, type: 'WO', text: '타인의 평가나 주변 분위기보다 나의 기준을 더 중요하게 생각하며 행동하는 편이다.', reverse: false },
  { id: 48, type: 'WO', text: '친한 사람이 예고 없이 내 방이나 집에 찾아와도 부담스럽지 않게 맞이할 수 있다.', reverse: true },
  { id: 49, type: 'WO', text: '나의 진짜 솔직한 모습은 극히 일부만 아는 비공개 계정이나 공간에 주로 표현한다.', reverse: false },
  { id: 50, type: 'WO', text: '주변 사람의 기분(우울함, 즐거움)이 나의 감정 상태에 큰 영향을 미치는 편이다.', reverse: true },
];

export const mbtiTypes = [
  "ISTJ", "ISFJ", "INFJ", "INTJ", "ISTP", "ISFP", "INFP", "INTP",
  "ESTP", "ESFP", "ENFP", "ENTP", "ESTJ", "ESFJ", "ENFJ", "ENTJ"
];
