import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Landing.css';
import AdSense from '../components/AdSense';

const Landing = () => {
  const navigate = useNavigate();
  const [view, setView] = useState('about'); // 'about' or 'tracks'
  const [showModal, setShowModal] = useState(false);

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
                <button 
                  className="learn-more-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowModal(true);
                  }}
                >
                  지표의 의미 알아보기 →
                </button>
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
        
        {/* Display Ad */}
        <AdSense adSlot="9391054607" />
      </div>

      <footer className="landing-footer">
        <p>© 2025 PENTYPE. Your boundary defines you.</p>
      </footer>

      <WhyWOModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};

const WhyWOModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content glass" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>&times;</button>
        <header className="modal-header">
          <h2>📚 왜 W/O 지표인가요?</h2>
          <p className="modal-intro">MBTI가 당신의 '엔진(동력)'이라면,<br/>W/O는 당신이 세상을 거르는 '필터'입니다.</p>
        </header>

        <div className="modal-body">
          <section className="modal-section">
            <h3>🔹 하트만의 경계 이론(Boundaries in the Mind)</h3>
            <p>심리학자 어니스트 하트만은 사람마다 마음의 경계 두께가 다르다는 것을 발견했습니다.</p>
            <div className="theory-grid">
              <div className="theory-card w">
                <h5>W (Wall) - 두꺼운 경계</h5>
                <p>'분리'와 '구분'에 능숙합니다. 공과 사를 철저히 나누며, 외부 자극으로부터 자신을 신중하게 보호합니다.</p>
              </div>
              <div className="theory-card o">
                <h5>O (Organic) - 얇은 경계</h5>
                <p>'연결'과 '융합'을 지향합니다. 타인의 감정에 깊이 공감하며, 경계 없는 유연하고 창의적인 소통을 즐깁니다.</p>
              </div>
            </div>
          </section>

          <section className="modal-section">
            <h3>🔹 일과 삶의 경계 관리 (Segmentors vs Integrators)</h3>
            <p>현대인의 라이프스타일에서도 W/O는 뚜렷하게 나타납니다.</p>
            <ul>
              <li><strong>분리자 (W):</strong> 업무와 사생활의 경계를 명확히 긋고, 페르소나를 활용해 사회적 역할을 수행합니다.</li>
              <li><strong>통합자 (O):</strong> 일과 삶이 자연스럽게 섞이는 것을 선호하며, 어디서든 '진짜 나'로 존재하기를 원합니다.</li>
            </ul>
          </section>

          <footer className="modal-footer">
            <p>"나는 왜 E인데도 가끔 혼자 있고 싶을까?"<br/>"나는 왜 I인데도 처음 본 사람에게 속마음을 털어놓을까?"</p>
            <p className="footer-highlight">그 해답은 당신의 5번째 지표, W/O에 있습니다.</p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Landing;
