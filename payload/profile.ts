import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import { IProfile } from '../component/profile/IProfile';
import image from '../asset/resume_profile_image.jpg';

const profile: IProfile.Payload = {
  disable: false,

  image,
  name: {
    title: '신용진',
  },
  contact: [
    {
      title: 'tlsdydwls123@gmail.com',
      icon: faEnvelope,
    },
    {
      title: 'Please contact me by email',
      icon: faPhone,
      badge: true,
    },
    {
      link: 'https://github.com/sirin0762',
      icon: faGithub,
    },
    {
      link: 'https://www.facebook.com/groups/ubuntu.ko',
      icon: faLinkedin,
    },
  ],
};

export default profile;
