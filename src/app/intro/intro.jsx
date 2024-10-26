'use client';

import { useState } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';

import {
  IntroSection,
  IntroTitle,
  Contacts,
  ProjectSimple,
  IntroPattern,
} from './intro.css.js';
import Modal from '@/app/common/modal.jsx';

const Intro = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const copyToClipboard = (text) => {
    try {
      navigator.clipboard.writeText(text);
      setIsModalOpen(true);
    } catch {
      setIsModalOpen(true);
    }
  };

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
        <button
          type="button"
          onClick={() => {
            copyToClipboard('010-2991-1153');
          }}
          title="전화번호 복사"
        >
          <p>010 · 4202 · 3113</p>
        </button>
        <button
          type="button"
          onClick={() => {
            copyToClipboard('solbi1996@gmail.com');
          }}
          title="이메일 복사"
        >
          <p>solbi1996@gmail.com</p>
        </button>
        <a
          href="https://github.com/PpoSil"
          target="_blank"
          rel="noreferrer"
          title="깃허브로 이동"
        >
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
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        클립보드에 저장완료
      </Modal>
    </IntroSection>
  );
};

export default Intro;
