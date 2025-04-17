import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: '(주)롯데이노베이트',
      positions: [
        {
          title: 'Backend Developer',
          startedAt: '2022-03',
          descriptions: [
            '교통 카드 시스템에 필요한 전문 및 배치 서비스 개발, 데이터베이스 스키마 설계',
            '보험사, 금융사, 국가기관 등 타 기관과의 연계 서비스 개발',
            '한국철도공사 지하철 거래 데이터 수집 시스템 설계 및 개발',
            '인천시 디지털 운행기록(DTG) 수집 시스템 설계 및 개발',
          ],
        },
      ],
    },
  ],
};

export default experience;
