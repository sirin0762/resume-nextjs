import { ISkill } from '../component/skill/ISkill';

const backend: ISkill.Skill = {
  category: 'Backend',
  items: [
    {
      title: 'Java',
    },
    {
      title: 'Spring Framework',
    },
    {
      title: 'Devon Framework',
    },
    {
      title: 'JPA & QueryDSL',
    },
    {
      title: 'Oracle',
    },
    {
      title: 'Mongo DB',
    },
  ],
};

const frontEnd: ISkill.Skill = {
  category: 'FrontEnd',
  items: [
    {
      title: 'Vue',
    },
    {
      title: 'Vite',
    },
    {
      title: 'Pinia',
    },
    {
      title: 'Quasar',
    },
  ],
};

const infra: ISkill.Skill = {
  category: 'Infra',
  items: [
    {
      title: 'AWS',
    },
    {
      title: 'Docker',
    },
    {
      title: 'Jenkins',
    },
    {
      title: 'GitHub Actions',
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [backend, frontEnd, infra],
};

export default skill;
