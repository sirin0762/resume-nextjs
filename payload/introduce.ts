import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    'RESTful API와 배치 서비스의 아키텍처에 대한 이해를 바탕으로 대중교통 카드 시스템을 3년간 운영하며, 다량의 버스 및 지하철의 교통거래를 수집·정산해왔습니다. 또한, 한국철도공사 지하철 거래 수집·정산·청구 시스템 구축, 인천시 운행기록 수집 시스템 구축 등 다양한 프로젝트에 참여한 경험을 통해 실제 문제 상황에서 요구되는 설계·개발 능력과 운영 역량을 자연스럽게 체득할 수 있었습니다.',
    '대체 불가능한 개발자가 되겠다는 목표 하에 개인 및 팀 프로젝트를 통해 다양한 개발 경험을 쌓고, 이를 정리하여 더 나은 개발자가 되기 위해 노력하고 있습니다. 또한 다양한 사이드 프로젝트에서 리더를 맡아 다양한 이해관계자들 사이애서 주도적인 커뮤니케이션을 바탕으로 더 나은 제품을 만들기 위해 정진하고 있습니다.',
  ],
  sign: 'Yongjin Shin',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
