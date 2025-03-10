import { Contact } from '@/types/contact';
import {
  SiFacebook,
  SiGithub,
  SiInstagram,
  SiLinkedin,
  SiX,
  SiYoutube
} from '@icons-pack/react-simple-icons';

const contact: Contact = {
  email: 'johnfrancisabsalon17@gmail.com',
  socials: [
    {
      name: 'Github',
      href: 'https://github.com/FranzAbsalon',
      Icon: SiGithub
    },
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/johnfrancis.absalon/',
      Icon: SiFacebook
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/frnz.dev_and_design/',
      Icon: SiInstagram
    },
    {
      name: 'Linkedin',
      href: 'https://www.linkedin.com/in/john-francis-absalon/',
      Icon: SiLinkedin
    }
  ]
};

export { contact };
