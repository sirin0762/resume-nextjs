import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: '교통 거래 수집 시스템 개발 및 운영',
      startedAt: '2024-07',
      where: '교통카드 IS팀',
      descriptions: [
        {
          content: '디지털 운행 기록 수집 시스템 개발',
          weight: 'BOLD',
          descriptions: [
            {
              content:
                '문제  :  운행 기록 제조사별 상이한 데이터 규격에 대해 서비스 로직 내에 분기 처리 시 가독성 및 유지보수성 저하',
            },
            {
              content:
                '개선방법  :  인터페이스 기반 팩토리 메서드 패턴을 통해 파일 유형별 처리 모듈 분리, 메인 배치에서는 파일의 헤더 부를 읽어 그에 맞는 모듈에 전달하는 방식으로 신규 유형 추가 시 기존 코드 영향도 최소화',
            },
          ],
        },
        {
          content: 'K 패스 교통 거래 내역 전송 배치 최적화',
          weight: 'BOLD',
          descriptions: [
            { content: '문제  :  과도한 DB 자원 사용으로 인한 배치 처리 지연' },
            {
              content:
                '개선방법 : 쿼리 실행 계획 분석을 통해 부적절한 인덱스 및 조인 방식, UNION ALL 사용 등을 개선하여 기존 40분 이상의 처리 속도를 3분 내외로 개선',
            },
          ],
        },
      ],
    },
    {
      title: '한국철도공사 지하철 거래 수집 시스템 설계 및 구축',
      startedAt: '2023-11',
      endedAt: '2024-06',
      where: '교통카드 IS팀',
      descriptions: [
        {
          content: '지하철 거래 수집 및 대사 정합성 검증 자동화',
          weight: 'BOLD',
          descriptions: [
            { content: '문제  :  일 500만 건 이상의 지하철 거래의 무결성 보장 및 기관 간의 대사' },
            {
              content:
                '해결방법  :  한국철도공사와 티머니에서 수신한 대사 및 반송 파일을 기반으로, 일 단위 전체 거래 건수 및 금액에 대한 자동 대사 기능 구현. DB 설계 시 원천 파일명 및 데이터 순번을 테이블에 명시함으로써, 오류 발생 시 기관 담당자와의 커뮤니케이션 효율성 극대화',
            },
          ],
        },
        {
          content: '지하철 거래 이상 징후 알림 시스템 구축',
          weight: 'BOLD',
          descriptions: [
            { content: '문제  :  실시간으로 인입되는 파일 기반 교통 거래에 대한 모니터링 필요' },
            {
              content:
                '해결방법  :  사전에 정의된 오류 기준에 따라 오류 거래를 별도 테이블에 분리 적재하고, 티머니 수신 파일과의 대사 과정을 통해 데이터 정합성을 검증함. 이 외 오류 데이터 발생 시 SMS 알림을 통해 즉각 대응이 가능하도록 설계.',
            },
          ],
        },
      ],
    },
    {
      title: '자사 선불카드 정산 시스템 운영 및 유지보수',
      startedAt: '2022-03',
      endedAt: '2023-10',
      where: '교통카드 IS팀',
      descriptions: [
        {
          content: '정산 데이터 이상 탐지 로직 개선',
          weight: 'BOLD',
          descriptions: [
            {
              content:
                '문제  :  기존 모니터링 로직은 서비스별 정산 금액이 전주 대비 0원인 경우에만 이상으로 판단',
            },
            {
              content:
                '해결방법  :  서비스별 정산 금액 변화를 기반으로 비정상적인 정산 금액을 탐지할 수 있도록 개선. 해당 방식 으로 특정 서비스의 오정산을 조기 발견하였으며, 6억 원 이상의 정산 오류를 사전에 방지함',
            },
          ],
        },
        {
          content: '카드 상품별 거래 전송 기능 개발',
          weight: 'BOLD',
          descriptions: [
            {
              content:
                '카드 상품과 거래일자만을 매개변수로 받는 방식으로 설계하여 서비스 확장에 유연하도록 구현. 초기에는 로카페이 상품만을 대상으로 했지만, 이후 토스카드, 지역 복지카드 등으로 서비스가 확대되었음에도 소스코드 변경 없이 대응',
            },
          ],
        },
      ],
    },
  ],
};

export default project;
