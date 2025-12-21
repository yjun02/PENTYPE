import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Landing.css';

const Landing = () => {
  const navigate = useNavigate();
  const [view, setView] = useState('about'); // 'about' or 'tracks'

  return (
    <div className="landing-page animate-fade">
      <div className="bg-gradient-mesh"></div>
      
      <div className="landing-content">
        <header className="hero-section">
          <h1 className="logo">PENTYPE</h1>
          <p className="subtitle">기존 MBTI를 넘어선 5번째 지표, 당신의 경계 유형을 찾아보세요</p>
        </header>

        {view === 'about' ? (
          <section className="about-section glass clickable" onClick={() => setView('tracks')}>
            <div className="cta-overlay">
              <span className="cta-text">분석 시작하기 →</span>
            </div>
            <h2>왜 PENTYPE 인가요?</h2>
            <div className="about-grid">
              <div className="about-item">
                <span className="about-emoji">🧩</span>
                <h4>기존 MBTI의 한계 극복</h4>
                <p>E와 I를 단순히 '인싸'와 '아싸'로 나누는 오해를 해소합니다.</p>
              </div>
              <div className="about-item">
                <span className="about-emoji">🧱</span>
                <h4>5번째 지표: W/O</h4>
                <p><strong>Wall(경계형)</strong>과 <strong>Organic(융합형)</strong> 지표를 새롭게 정의합니다.</p>
              </div>
              <div className="about-item">
                <span className="about-emoji">📊</span>
                <h4>32가지 정밀 세분화</h4>
                <p>나의 모순적이지만 진실한 면모를 32가지 타입으로 발견하세요.</p>
              </div>
            </div>
            <p className="click-hint">박스를 클릭하여 테스트를 시작하세요!</p>
          </section>
        ) : (
          <div className="tracks-view animate-fade">
            <main className="tracks-container">
              <div className="track-card glass" onClick={() => navigate('/quiz?track=full')}>
                <div className="track-icon">✨</div>
                <h3>완벽 측정 (Full Track)</h3>
                <p>MBTI 4개 지표와 신규 W/O 지표까지 <br/>총 50문항으로 정밀하게 분석합니다.</p>
                <div className="track-link">완벽 측정 시작하기 →</div>
              </div>

              <div className="track-card glass" onClick={() => navigate('/quiz?track=fast')}>
                <div className="track-icon">⚡</div>
                <h3>신속 측정 (Fast Track)</h3>
                <p>내 MBTI를 이미 알고 있다면? <br/>W/O 지표 10문항만 빠르게 확인하세요.</p>
                <div className="track-link">신속 측정 시작하기 →</div>
              </div>
            </main>
            <button className="back-to-about" onClick={() => setView('about')}>← 뒤로가기</button>
          </div>
        )}
      </div>

      <footer className="landing-footer">
        <p>© 2025 PENTYPE. Your boundary defines you.</p>
      </footer>
    </div>
  );
};

export default Landing;
