import { IEducation } from '../component/education/IEducation';

const education: IEducation.Payload = {
  disable: false,

  list: [
    {
      title: '(주) 패스트캠퍼스 inner circle 풀스택 과정 2기',
      subTitle: '최우수 프로젝트 선정',
      startedAt: '2024-11',
      endedAt: '2025-03',
    },
    {
      title: '프로그래머스 웹 데브코스 백앤드 엔지니어링 과정 1기 수료',
      subTitle: '최우수 프로젝트 선정',
      startedAt: '2021-07',
      endedAt: '2021-12',
    },
    {
      title: '한국해양대학교 전기전자공학과 졸업',
      subTitle: '',
      startedAt: '2015-03',
      endedAt: '2021-08',
    },
  ],
};

export default education;
