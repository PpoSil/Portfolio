// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useState } from 'react';

import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import { CategoryTitle } from '@/app/global.css.js';
import {
  TechsSection,
  TechsPattern,
  TechArticle,
  TechCategory,
  TechDescription,
  ArrowButton,
  TechDescriptionDetail,
  TechDetails,
} from './skills.css.js';

const Techs = () => {
  // const [isFrontDetailOpen, setIsFrontDetailOpen] = useState(false);
  const [isGameDetailOpen, setIsGameDetailOpen] = useState(false);
  const [isCodeDetailOpen, setIsCodeDetailOpen] = useState(false);
  const [isCoopDetailOpen, setIsCoopDetailOpen] = useState(false);

  // const toggleFront = () => {
  //   setIsFrontDetailOpen(!isFrontDetailOpen);
  // };

  const toggleGame = () => {
    setIsGameDetailOpen(!isGameDetailOpen);
  };

  const toggleCode = () => {
    setIsCodeDetailOpen(!isCodeDetailOpen);
  };

  const toggleCoop = () => {
    setIsCoopDetailOpen(!isCoopDetailOpen);
  };

  return (
    <TechsSection>
      <TechsPattern />
      <CategoryTitle>Techs</CategoryTitle>

      {/* 프론트엔드 개발 기술스택 */}
      <Tech
        category="Frontend"
        stack="JavaScript / React / Redux / Vue.js / Next.js / Styled Components"
      >
        동해물과
      </Tech>

      {/* 게임 개발 기술스택 */}
      <Tech category="Game dev" stack="Unity / C#">
        동해물과
      </Tech>

      {/* 코드 관리 기술스택 */}
      <Tech
        category="Code Management"
        stack="Git / Github / GitLab / ESlint / Prettier"
      >
        동해물과
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
