import { CategoryTitle } from '@/app/global.css.js';
import { SkillsSection, SkillsPattern, Skill, SkillCategory, SkillDescription } from './skills.css.js';

const Skills = () => {
  return (
    <SkillsSection>
      <SkillsPattern />
      <CategoryTitle>Skills</CategoryTitle>
      <Skill>
        <SkillCategory>Frontend</SkillCategory>
        <SkillDescription>
          <p>{'> JavaScript / React / Redux / Vue.js / Next.js / Styled Components'}</p>
        </SkillDescription>
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
