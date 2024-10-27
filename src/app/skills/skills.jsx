// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useState } from 'react';
import { CategoryTitle } from '@/app/global.css.js';
import {
  SkillsSection,
  SkillsPattern,
  Skill,
  SkillCategory,
  SkillDescription,
  SkillDescriptionDetails,
  ArrowButton,
} from './skills.css.js';

const Skills = () => {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const dropDownDetails = () => {
    setIsDetailsOpen(!isDetailsOpen);
  };

  return (
    <SkillsSection>
      <SkillsPattern />
      <CategoryTitle>Skills</CategoryTitle>
      <Skill>
        <SkillCategory>Frontend</SkillCategory>
        <ArrowButton onClick={dropDownDetails} $isOpen={isDetailsOpen} />
        <SkillDescription>
          <p>
            {
              '> JavaScript / React / Redux / Vue.js / Next.js / Styled Components'
            }
          </p>
        </SkillDescription>
        {isDetailsOpen && (
          <SkillDescriptionDetails>
            asdzdasdasdasdasdsad asdasdasdasd asdas dsad asdasdasdadasdasd
            asdasdas asdasdsadasdas sadsdas asdasdas
          </SkillDescriptionDetails>
        )}
      </Skill>

      <Skill>
        <SkillCategory>Game dev</SkillCategory>
        <SkillDescription>
          <p>{'> Unity / C#'}</p>
        </SkillDescription>
      </Skill>

      <Skill>
        <SkillCategory>Code Management</SkillCategory>
        <SkillDescription>
          <p>{'> Git / Github / GitLab / ESlint / Prettier'}</p>
        </SkillDescription>
      </Skill>

      <Skill>
        <SkillCategory>Cooperation</SkillCategory>
        <SkillDescription>
          <p>{'> Jira / Notion / Mattermost / Figma / Source Tree'}</p>
        </SkillDescription>
      </Skill>
    </SkillsSection>
  );
};
export default Skills;
