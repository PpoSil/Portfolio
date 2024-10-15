import { CategoryTitle } from '@/app/global.css.js';
import { SkillsSection, Skill, SkillCategory, SkillDescription } from './skills.css.js';

const Skills = () => {
  return (
    <SkillsSection>
      <CategoryTitle>Skills</CategoryTitle>
      <Skill>
        <SkillCategory>Frontend</SkillCategory>
        <SkillDescription>
          <p>{'> '}</p>
          <span>JavaScript / React / Redux / Vue.js / Next.js / Styled Components</span>
          {/* <span>JavaScript / </span>
          <span>React</span>
          <span>Redux</span>
          <span>Vue.js</span>
          <span>Next.js</span>
          <span>Styled Components</span> */}
        </SkillDescription>
      </Skill>

      <Skill>
        <SkillCategory>Game dev</SkillCategory>
        <SkillDescription>
          <p>{'> '}</p>
          <span>Unity / C#</span>
          {/* <span>Unity</span>
          <span>C#</span> */}
        </SkillDescription>
      </Skill>

      <Skill>
        <SkillCategory>Code Management</SkillCategory>
        <SkillDescription>
          <p>{'> '}</p>
          <span>Git / Github / GitLab / ESlint / Prettier</span>
          {/* <span>Git</span>
          <span>Github</span>
          <span>GitLab</span>
          <span>ESlint</span>
          <span>Prettier</span> */}
        </SkillDescription>
      </Skill>

      <Skill>
        <SkillCategory>Cooperation</SkillCategory>
        <SkillDescription>
          <p>{'> '}</p>
          <span>Jira / Notion / Mattermost / Figma / Source Tree</span>
          {/* <span>Jira</span>
          <span>Notion</span>
          <span>Mattermost</span>
          <span>Figma</span>
          <span>Source Tree</span> */}
        </SkillDescription>
      </Skill>
    </SkillsSection>
  );
};
export default Skills;
