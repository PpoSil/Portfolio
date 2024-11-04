// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import { CategoryTitle } from '@/app/global.css.js';
import {
  TechsSection,
  TechsPattern,
  TechArticle,
  TechDetails,
} from './skills.css.js';

const Techs = () => {
  return (
    <TechsSection>
      <TechsPattern />
      <CategoryTitle>Techs</CategoryTitle>

      {/* 프론트엔드 개발 기술스택 */}
      <Tech
        category="Frontend"
        stack="JavaScript / React / React-native / Next.js / Vercel / Styled Components / CSS Modules"
      >
        웹 및 모바일 어플리케이션 개발시 React, Next.js 혹은 React-native를
        활용하고 있습니다.
        <br />
        <br />
        React 기반 라이브러리를 사용할 땐 컴포넌트의 재사용성과 React hook으로
        인한 불필요한 재랜더링을 억제하는걸 우선시합니다.
        <br />
        <br />
        프로젝트의 요구사항에 맞추어 CSR 혹은 SSR 모두 구현이 가능합니다.
        <br />
        <br />
        상황에 맞게 CSS-in-CSS와 CSS-in-JS를 선택하며, 주로 styled-components를
        활용합니다.
      </Tech>

      {/* 게임 개발 기술스택 */}
      <Tech category="Game dev" stack="Unity / C#">
        유니티를 활용하여 메타버스 게임을 개발한 경험이 있습니다.
        <br />
        <br />
        C#을 사용하여 플레이어의 이동과 UI를 설계하였고, 물리 엔진과 애니메이션
        시스템을 활용하여 몰입감 있는 게임 환경을 조성했습니다.
      </Tech>

      {/* 코드 관리 기술스택 */}
      <Tech
        category="Code Management"
        stack="Git / Github / GitLab / ESlint / Prettier"
      >
        코드 관리 측면에서는 Git과 GitHub/GitLab을 활용하여 버전 관리를
        체계적으로 진행하고 있습니다.
        <br />
        <br />
        ESLint와 Prettier를 활용하여 코드 스타일을 일관되게 유지하여 코드 품질을
        높이고자 합니다.
      </Tech>

      {/* 협업 도구 기술스택 */}
      <Tech
        category="Cooperation"
        stack="Jira / Notion / Mattermost / Figma / Source Tree"
      >
        동해물과
      </Tech>
    </TechsSection>
  );
};

const Tech = ({ category, stack, children }) => {
  return (
    <TechArticle>
      <TechDetails>
        <summary>
          <h2>
            {category}
            <span>
              <ArrowBackIosNewRoundedIcon className="icon-fold" />
              <ArrowBackIosNewRoundedIcon className="icon-open" />
            </span>
          </h2>
          {stack}
        </summary>
        <hr />
        <div>{children}</div>
      </TechDetails>
    </TechArticle>
  );
};
export default Techs;
