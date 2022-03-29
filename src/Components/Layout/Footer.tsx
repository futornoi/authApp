import Container from 'react-bootstrap/esm/Container';
import { Envelope, Github, Instagram, Linkedin, Phone } from 'react-bootstrap-icons';
import { ILayout } from './LayoutTypes';

const contactOptions = [
  { Icon: Instagram, target: true, href: 'https://www.instagram.com/futornoi/' },
  { Icon: Github, target: true, href: 'https://github.com/maxwelerning' },
  { Icon: Linkedin, target: true, href: 'https://www.linkedin.com/in/maksim-futornoi-42b7a9208/' },
  { Icon: Envelope, href: 'mailto:futornoi.maksim@gmail.com' },
  { Icon: Phone, href: 'tel:380502643404' }
];

const Footer: React.FC<ILayout> = ({ openedNav }) => {
  return (
    <footer
      id="footer"
      style={{ transitionDelay: openedNav ? '' : '.2s' }}
      className={openedNav ? 'openedNav' : ''}>
      <Container>
        <div className="contacts">
          {contactOptions.map(({ Icon, href, target }, index) => (
            <a key={index} href={href} className="contacts_item" target={target ? '_blank' : ''}>
              <Icon />
            </a>
          ))}
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
