import GitHubIcon from '@mui/icons-material/GitHub';

import { IntroSection, IntroTitle, Contacts, ProjectSimple, IntroPattern } from './intro.css.js';

const intro = () => {
  return (
    <IntroSection>
      <IntroPattern>
        <div />
      </IntroPattern>
      <IntroTitle>Frontend Dev</IntroTitle>
      <IntroTitle>An Solbi.</IntroTitle>

      <Contacts>
        <span>
          <p>안솔비</p>
        </span>
        <span>
          <p>010 · 4202 · 3113</p>
        </span>
        <span>
          <p>solbi1996@gmail.com</p>
        </span>
        <a href="https://github.com/PpoSil" target="_blank" rel="noreferrer" title="깃허브로 이동">
          <p>Github</p>
          <GitHubIcon />
        </a>
        <span>
          <p>삼성 청년 SW 아카데미 9기</p>
        </span>
      </Contacts>

      <ProjectSimple>
        {/* <span>[ 프로젝트 이력 ]</span> */}
        <li>
          <div />
          개발자 SNS, Heul-git
        </li>
        <li>
          <div />
          체력 증진 프로젝트, Have-it <br />
          <span>삼성 청년 SW 아카데미 우수상</span>
        </li>
        <li>
          <div />
          컬러 기반 스마트미러, SSTUDE-HOUSE
          <br />
          <span>삼성 청년 SW 아카데미 우수상 및 결선발표회 입상</span>
        </li>
      </ProjectSimple>
    </IntroSection>
  );
};
export default intro;
