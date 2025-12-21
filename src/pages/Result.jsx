import React, { useMemo, useState, useRef } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import html2canvas from 'html2canvas';
import { calculateScores, getPentaCode, getPercentage, decodeResultData } from '../utils/scoring';
import { pentaTypes } from '../data/types';
import AdSense from '../components/AdSense';
import './Result.css';

const Result = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  
  // Parse state from URL (now uses encoded 'data')
  const dataParam = searchParams.get('data');
  const decoded = useMemo(() => decodeResultData(dataParam || ''), [dataParam]);
  
  const [showShareModal, setShowShareModal] = useState(false);
  const resultRef = useRef(null);

  const { answers, mbti } = useMemo(() => {
    if (!decoded) return { answers: null, mbti: null };
    const { track, mbti, answersStr } = decoded;
    
    const ans = {};
    if (track === 'full') {
      for (let i = 0; i < answersStr.length; i++) {
        ans[i + 1] = parseInt(answersStr[i]);
      }
    } else {
      // Fast track starts from 41
      for (let i = 0; i < answersStr.length; i++) {
        ans[i + 41] = parseInt(answersStr[i]);
      }
    }
    return { answers: ans, mbti };
  }, [decoded]);

  if (!answers) {
    return <div className="result-page">결과를 찾을 수 없습니다.</div>;
  }

  const scores = useMemo(() => calculateScores(answers, mbti), [answers, mbti]);
  const code = getPentaCode(scores);
  const typeData = pentaTypes[code] || {};
  
  const indicators = [
    { label: '에너지 방향', left: 'I', right: 'E', score: scores.EI, style: 'ei' },
    { label: '인식 방식', left: 'N', right: 'S', score: scores.SN, style: 'sn' },
    { label: '판단 근거', left: 'F', right: 'T', score: scores.TF, style: 'tf' },
    { label: '생활 양식', left: 'P', right: 'J', score: scores.JP, style: 'jp' },
    { label: '경계 유형', left: 'O', right: 'W', score: scores.WO, style: 'wo' },
  ];

  const imgCode = code.replace('-', '');

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      alert('링크가 복사되었습니다!');
      setShowShareModal(false);
    });
  };

    
  const handleSaveImage = async () => {
    if (!resultRef.current) return;
    
    try {
      const canvas = await html2canvas(resultRef.current, {
        backgroundColor: '#fff0f3',
        scale: 2,
        useCORS: true,
        logging: false,
        onclone: (documentClone) => {
          const layout = documentClone.querySelector('.result-layout');
          const leftSide = documentClone.querySelector('.result-left');
          const rightSide = documentClone.querySelector('.result-right');
          const page = documentClone.querySelector('.result-page');

          if (page) {
            page.style.height = 'auto';
            page.style.width = '800px'; 
            page.style.padding = '40px';
          }

          if (layout) {
            layout.style.display = 'flex';
            layout.style.flexDirection = 'column';
            layout.style.alignItems = 'center';
            layout.style.width = '100%';
            layout.style.gap = '2rem';
          }

          if (leftSide) {
            leftSide.style.width = '100%';
            leftSide.style.maxWidth = '100%';
          }

          if (rightSide) {
            rightSide.style.width = '100%';
            rightSide.style.maxWidth = '100%';
            rightSide.style.position = 'relative'; 
            rightSide.style.top = '0';
          }

          // Disable all animations/transitions
          const allElements = documentClone.querySelectorAll('*');
          allElements.forEach(el => {
            el.style.animation = 'none';
            el.style.transition = 'none';
          });
        }
      });
      
      const image = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = image;
      link.download = `pentype_result_${code}.png`;
      link.click();
      setShowShareModal(false);
    } catch (err) {
      console.error("Image save failed", err);
      alert("이미지 저장에 실패했습니다.");
    }
  };

  return (
    <div className="result-page animate-fade" ref={resultRef}>
      <div className="result-layout">
        <header className="result-header">
          <span className="result-label">Your PENTYPE is...</span>
          <h1 className="result-code">{code}</h1>
          <h2 className="result-nickname">{typeData.nickname}</h2>
        </header>
        
        {/* Left Column: Identity & Descriptions */}
        <div className="result-left">
          <div className="result-main-card glass">
            <div className="result-image-container">
              <img src={`/typeimg/${imgCode}.jpeg`} alt={code} className="result-image" />
            </div>
            <div className="result-quote">
              <p>"{typeData.quote}"</p>
            </div>
          </div>

          <div className="description-container glass">
            <div className="desc-section">
              <h4>기본 성격</h4>
              <p>{typeData.personality}</p>
            </div>
            <div className="desc-section">
              <h4>W/O 특징</h4>
              <p>{typeData.wo_feature}</p>
            </div>
            <div className="desc-summary">
              <p>✨ {typeData.summary}</p>
            </div>
          </div>
        </div>

        {/* Right Column: Metrics & Actions */}
        <div className="result-right">
          <div className="metrics-container glass">
            <h3>디테일 분석</h3>
            {indicators.map((ind) => {
              const typeKey = ind.style.toUpperCase();
              const rightPct = getPercentage(ind.score, answers, typeKey);
              const leftPct = 100 - rightPct;
              const isHalf = rightPct === 50;

              return (
                <div key={ind.label} className="metric-row">
                  <div className="metric-labels">
                    <span className={leftPct > 50 ? 'active' : ''}>{ind.left} {leftPct}%</span>
                    <span className="metric-title">{ind.label}</span>
                    <span className={rightPct > 50 ? 'active' : ''}>{rightPct}% {ind.right}</span>
                  </div>
                  <div className="metric-bar-container">
                    {isHalf ? (
                      <div className="metric-half-text">완전 반반! ⚖️</div>
                    ) : (
                      <div 
                        className={`metric-bar-fill ${ind.style}`} 
                        style={{ 
                          width: `${Math.abs(rightPct - 50) * 2}%`, 
                          left: rightPct > 50 ? '50%' : 'auto',
                          right: rightPct < 50 ? '50%' : 'auto',
                          borderRadius: rightPct > 50 ? '0 6px 6px 0' : '6px 0 0 6px'
                        }}
                      ></div>
                    )}
                    <div className="metric-center-line"></div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="action-buttons" data-html2canvas-ignore="true">
            <button className="reset-btn" onClick={() => navigate('/')}>다시 테스트하기</button>
            <button className="share-btn" onClick={() => setShowShareModal(true)}>결과 공유하기</button>
          </div>
        </div>

        {/* Multiplex Ad - Spans full width at the bottom of the layout */}
        <div style={{ gridColumn: '1 / -1', width: '100%' }} data-html2canvas-ignore="true">
          <AdSense adSlot="8013575517" adFormat="autorelaxed" type="multiplex" />
        </div>
      </div>

      {/* Share Modal */}
      {showShareModal && (
        <div className="share-modal-overlay" data-html2canvas-ignore="true" onClick={() => setShowShareModal(false)}>
          <div className="share-modal glass" onClick={(e) => e.stopPropagation()}>
            <h3>결과 공유하기</h3>
            <div className="share-options">
              <button onClick={handleCopyLink} className="share-option-btn">
                <span>🔗</span> 링크 복사
              </button>
              <button onClick={handleSaveImage} className="share-option-btn">
                <span>🖼️</span> 이미지 저장
              </button>
            </div>
            <button className="close-modal-btn" onClick={() => setShowShareModal(false)}>닫기</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Result;
