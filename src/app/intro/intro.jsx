import GitHubIcon from '@mui/icons-material/GitHub';

import { IntroSection, IntroTitle, Contacts, ProjectSimple, IntroPattern } from './intro.css.js';

const intro = () => {
  return (
    <IntroSection>
      <IntroPattern>
        <div />
      </IntroPattern>
      <IntroTitle>Frontend dev</IntroTitle>
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
        <span>
          <p>Github</p>
          <GitHubIcon />
        </span>
        <span>
          <p>삼성 청년 SW 아카데미 9기</p>
        </span>
      </Contacts>

      <ProjectSimple>
        <span>[ 프로젝트 이력 ]</span>
        <li>Heul-git ( SSAFY )</li>
        <li>
          Have-it ( SSAFY ) <span>수상: 삼성 청년 SW 아카데미 우수상</span>
        </li>
        <li>
          SSTUDE-HOUSE ( SSAFY ) <span>수상: 삼성 청년 SW 아카데미 우수상 및 결선발표회 입상</span>
        </li>
      </ProjectSimple>
    </IntroSection>
  );
};
export default intro;
