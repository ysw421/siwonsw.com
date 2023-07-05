import styles from './OperaPage.module.css';
import { SectionsContainer, Section, Header, Footer } from 'react-fullpage';

function OperaPage(props) {
  let options = {
    anchors: ['sectionOne', 'sectionTwo', 'sectionThree'],
  };

  return (
    <>
      <Header>
        <a href="#sectionOne" className="opa">
          Section One
        </a>
        <a href="#sectionTwo">Section Two</a>
        <a href="#sectionThree">Section Three</a>
      </Header>
      <Footer>
        <a href="" className="opa">
          Dcoumentation
        </a>
        <a href="">Example Source</a>
        <a href="">About</a>
      </Footer>
      <SectionsContainer {...options}>
        <Section>Page 1</Section>
        <Section>Page 2</Section>
        <Section>Page 3</Section>
      </SectionsContainer>
    </>
  );
}

export default OperaPage;
