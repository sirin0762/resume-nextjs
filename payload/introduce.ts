import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  contents: [
    'RESTful API와 배치 서비스 아키텍처에 대한 이해를 바탕으로, 지난 3년간 대중교통 카드 시스템을 개발 및 운영하며 일 1,000만 건 이상의 버스·지하철 교통 거래 데이터를 수집하고 정산하는 시스템을 장애 없이 안정적으로 운영해 왔습니다.',
    '또한 한국철도공사 지하철 거래 수집 시스템, 인천시 버스 운행 기록 수집 시스템 등 공공기관 프로젝트에 참여하여 복잡한 요구사항을 분석·설계·구현하는 경험을 통해 실무 중심의 문제 해결 능력과 운영 대응 역량을 키웠습니다.',
    '이 외에도 개인 및 팀 프로젝트를 통해 다양한 개발 경험을 지속적으로 쌓고 있습니다. (주) 패스트캠퍼스에서 주관한 재직자 대상 교육 프로그램에서는 팀 리더로서 역할을 수행하며, 개발 전 과정을 이끌고 이해관계자들과의 원활한 커뮤니케이션을 통해 최우수 프로젝트로 선정되는 성과를 이루었습니다.',
  ],

  disable: false,
  sign: 'Yongjin Shin',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
