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
        stack="JavaScript / React / React Native / Next.js / Vercel / Styled Components / Module.css"
      >
        * React, Next.js, React Native를 메인으로 사용합니다.
        <br />
        React 개발시 컴포넌트의 재사용성, 불필요한 렌더링의 최소화 및 최적화를
        우선으로 고려하고 있습니다.
        <br />
        기존 프로젝트의 상태관리는 Redux와 Zustand 중 아키텍처를 고려하여
        사용하였습니다.
        <br />
        <br />
        <span>
          주로 CSS-in-JS 방식 및 Styled Components를 선호하며, <br />
          프로젝트 및 팀의 요구사항에 따라 CSS-in-CSS 방식 또한 활용할 수
          있습니다.
        </span>
      </Tech>

      {/* 게임 개발 기술스택 */}
      <Tech category="Game dev" stack="Unity / C#">
        유니티, C#을 사용한 플레이어의 이동과 UI 설계, <br />
        물리 엔진과 애니메이션 시스템을 활용한 게임 환경을 조성 경험이 있습니다.
      </Tech>

      {/* 코드 관리 기술스택 */}
      <Tech
        category="Code Management"
        stack="Git / Github / GitLab / ESlint / Prettier"
      >
        * 코드 관리 측면에서는 Git과 GitHub/GitLab을 활용하여 버전 관리를
        체계적으로 진행하고 있습니다.
        <br />
        <br />
        <span>
          ESLint와 Prettier를 활용하여 코드 스타일을 일관되게 유지하여 코드
          품질을 높이고자 합니다.
        </span>
      </Tech>

      {/* 협업 도구 기술스택 */}
      <Tech
        category="Cooperation"
        stack="Jira / Notion / Mattermost / Figma / Source Tree"
        noFold
      />
    </TechsSection>
  );
};

const Tech = ({ category, stack, noFold, children }) => {
  return (
    <TechArticle>
      {noFold ? (
        <TechDetails>
          <summary style={{ cursor: 'default' }}>
            <h2>{category}</h2>
            {stack}
          </summary>
        </TechDetails>
      ) : (
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
      )}
    </TechArticle>
  );
};
export default Techs;
