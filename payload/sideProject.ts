import { ISideProject } from '../component/sideProject/ISideProject';

const sideProject: ISideProject.Payload = {
  disable: false,
  list: [
    {
      title: '개발의민족 - 배달 플랫폼 개발 (팀 프로젝트)',
      startedAt: '2024-12',
      endedAt: '2025-03',
      where: '(주) 패스트캠퍼스 inner circle - 재직자 대상 프로젝트 기반 교육 과정',
      descriptions: [
        {
          content:
            '프로젝트 리더로써 설계, 개발, 발표까지 프로젝트 전반을 리드하였고, 그 결과 최우수 프로젝트로 선정',
          weight: 'MEDIUM',
        },
        {
          content: '주문, 주문 취소에 따른 결제, 환불 기능 및 리뷰 관련 전체 기능 구현',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '문제  :  점주 측의 주문 수락과 사용자 측의 주문 취소 간 Race Condition 발생 가능성 존재',
            },
            {
              content:
                '해결방법 : 성능 저하가 우려되는 비관적 락은 배제. Persistence와 Domain Layer가 분리된 아키텍처로 인해 JPA의 version 기반 낙관적 락 적용도 어려웠음. 이에 따라 Redis 기반의 분산 락을 도입하여 Race Condition 상황에서의 상호 배제를 보장함.',
            },
          ],
        },
        {
          content: 'GitHub: https://github.com/FC-InnerCircle-ICD2/O2O-BE/wiki',
          weight: 'MEDIUM',
        },
        {
          content: 'Site : https://gaebalmin.com/ (현재 AWS 과금 이슈로 서비스 중지 상태)',
          weight: 'MEDIUM',
        },
      ],
    },
    {
      title: '영어학원 Admin 페이지 개발',
      startedAt: '2024-03',
      endedAt: '2024-08',
      where: '개인프로젝트',
      descriptions: [
        {
          content: '영어 회화 학원 스태프 간 소통을 위한 관리페이지 개발',
          weight: 'MEDIUM',
        },
        {
          content: 'Frontend, Backend, 인프라 모두 개발하며 기획부터 배포까지 전 과정을 직접 수행',
          weight: 'MEDIUM',
        },
        {
          content: '주요기능',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '로그인, 게시글 필터 및 검색, 공지사항 등록, 게시글 및 댓글 CRUD, 게시글 송신 및 수신 등',
            },
          ],
        },
        {
          content: '사용기술',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'Frontend - Vue3, Pinia, Vite, Quasar' },
            {
              content:
                'Backend - SpringBoot 3, JPA,  Querydsl, Spring Security, Spring Rest Docs, Mysql',
            },
            { content: 'Infra - AWS, Github Actions, Jenkins, Docker, Vercel' },
          ],
        },
        {
          content:
            'GitHub : https://github.com/TenSecondProject/member-management-back/tree/develop',
          weight: 'MEDIUM',
        },
        {
          content: 'Site  :  https://culcum-admin-dev.vercel.app/',
          weight: 'MEDIUM',
        },
      ],
    },
  ],
};

export default sideProject;
