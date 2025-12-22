import React, { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { questions, mbtiTypes } from '../data/questions';
import { calculateScores, encodeResultData } from '../utils/scoring';
import AdSense from '../components/AdSense';
import './Quiz.css';

const Quiz = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const track = searchParams.get('track') || 'full';

  const [currentStep, setCurrentStep] = useState(0); 
  const [isMbtiSelected, setIsMbtiSelected] = useState(track === 'full');
  const [selectedMbti, setSelectedMbti] = useState('');
  const [answers, setAnswers] = useState({});
  const [isTransitioning, setIsTransitioning] = useState(false);

  const activeQuestions = track === 'full' 
    ? questions 
    : questions.filter(q => q.type === 'WO');

  const totalSteps = activeQuestions.length;
  const currentQuestion = activeQuestions[currentStep];

  const handleMbtiSelect = (mbti) => {
    setSelectedMbti(mbti);
    setIsMbtiSelected(true);
  };

  const handleAnswer = (score) => {
    const newAnswers = { ...answers, [currentQuestion.id]: score };
    setAnswers(newAnswers);
    setIsTransitioning(true);

    // Automatically move to next after a short delay for better UX
    setTimeout(() => {
      if (currentStep < totalSteps - 1) {
        setCurrentStep(currentStep + 1);
        setIsTransitioning(false);
      } else {
        // Build query string for sharing
        let answersString = '';
        if (track === 'full') {
          // IDs 1 to 50
          for (let i = 1; i <= 50; i++) {
            answersString += newAnswers[i] || '3'; // Default to 3 if missing (safety)
          }
          const encoded = encodeResultData('full', '', answersString);
          navigate(`/result?data=${encoded}`);
        } else {
          // IDs 41 to 50
          for (let i = 41; i <= 50; i++) {
            answersString += newAnswers[i] || '3';
          }
          const encoded = encodeResultData('fast', selectedMbti, answersString);
          navigate(`/result?data=${encoded}`);
        }
      }
    }, 400); // Slightly longer for clearer selection feedback
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    } else {
      // If it's fast track and we go back from first question, show MBTI selection again
      if (track === 'fast') {
        setIsMbtiSelected(false);
      } else {
        navigate('/');
      }
    }
  };

  const handleNext = () => {
    if (answers[currentQuestion.id]) {
      if (currentStep < totalSteps - 1) {
        setCurrentStep(currentStep + 1);
      } else {
        navigate('/result', { state: { answers, mbti: selectedMbti, track } });
      }
    }
  };

  const progress = (currentStep / totalSteps) * 100;

  if (!isMbtiSelected) {
    return (
      <div className="quiz-page animate-fade">
        <div className="quiz-container glass">
          <div className="quiz-nav-top">
            <button className="nav-btn prev" onClick={() => navigate('/')}>메인 화면</button>
            <span className="step-count"></span>
            <div style={{ width: '80px' }}></div> {/* Spacer for balance */}
          </div>
          <h1>내 MBTI 선택</h1>
          <p className="hint">신속 측정을 위해 기존 MBTI를 선택해주세요.</p>
          <div className="mbti-grid">
            {mbtiTypes.map(mbti => (
              <button key={mbti} className="mbti-btn" onClick={() => handleMbtiSelect(mbti)}>
                {mbti}
              </button>
            ))}
          </div>
          
          {/* Display Ad */}
          <AdSense adSlot="9391054607" />
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-page animate-fade">
      <div className="quiz-container glass" key={currentQuestion?.id}>
        <div className="quiz-nav-top">
          <button className="nav-btn prev" onClick={handlePrev}>
            {currentStep === 0 ? '메인 화면' : '이전 질문'}
          </button>
          <span className="step-count">{currentStep + 1} / {totalSteps}</span>
          <button 
            className={`nav-btn next ${answers[currentQuestion?.id] && !isTransitioning ? 'visible' : ''}`} 
            onClick={handleNext}
          >
            {currentStep === totalSteps - 1 ? '결과 보기' : '다음 질문'}
          </button>
        </div>

        <h2 className="question-text">{currentQuestion?.text}</h2>
        
        <div className="options-container">
          <p className="option-label left">그렇지 않다</p>
          <div className="option-buttons">
            {[1, 2, 3, 4, 5].map(score => (
              <button 
                key={score} 
                className={`option-btn size-${score} ${answers[currentQuestion?.id] === score ? 'selected' : ''}`}
                onClick={() => handleAnswer(score)}
              ></button>
            ))}
          </div>
          <p className="option-label right">매우 그렇다</p>
        </div>

        <div className="progress-bar-container">
          <div className="progress-fill" style={{ width: `${progress}%` }}>
            <span className="progress-text">{Math.round(progress)}%</span>
          </div>
        </div>

        {/* Display Ad */}
        <AdSense adSlot="9391054607" />
      </div>
    </div>
  );
};

export default Quiz;
