import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Landing.css'; // Reuse landing styles for consistency

const Privacy = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-page animate-fade">
      <div className="bg-gradient-mesh"></div>
      <div className="landing-content" style={{ maxWidth: '800px', padding: '2rem' }}>
        <section className="glass" style={{ padding: '3rem', textAlign: 'left' }}>
          <h2 style={{ marginBottom: '2rem', color: 'var(--primary-color)' }}>개인정보처리방침</h2>
          
          <div style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
            <p style={{ marginBottom: '1.5rem' }}>
              PENTYPE(이하 '회사')은 이용자의 개인정보를 중요시하며, "개인정보 보호법" 등 관련 법령을 준수하고 있습니다.
            </p>

            <h3 style={{ margin: '1.5rem 0 1rem', color: 'var(--text-primary)' }}>1. 개인정보의 수집 항목</h3>
            <p>
              회사는 별도의 회원가입 절차 없이 서비스를 제공하며, 이용자의 성명, 연락처 등 직접적인 개인 식별 정보를 수집하지 않습니다. 
              다만, 서비스 이용 과정에서 쿠키, 방문 기록, 접속 IP 정보 등이 자동으로 생성되어 수집될 수 있습니다.
            </p>

            <h3 style={{ margin: '1.5rem 0 1rem', color: 'var(--text-primary)' }}>2. 개인정보의 이용 목적</h3>
            <p>
              수집된 정보는 서비스 운영 및 개선, 접속 빈도 파악 등 통계적 목적으로만 사용됩니다.
            </p>

            <h3 style={{ margin: '1.5rem 0 1rem', color: 'var(--text-primary)' }}>3. 제3자 광고 플랫폼 이용</h3>
            <p>
              본 서비스는 Google AdSense를 통한 광고를 게재합니다. Google은 사용자의 브라우저에 쿠키를 삽입하거나 읽을 수 있으며, 
              이를 통해 사용자의 웹사이트 방문 기록에 기반한 광고를 제공할 수 있습니다. 
              이러한 정보 수집을 원치 않으실 경우, 브라우저 설정이나 [Google 광고 설정]을 통해 쿠키 사용을 중단하실 수 있습니다.
            </p>

            <h3 style={{ margin: '1.5rem 0 1rem', color: 'var(--text-primary)' }}>4. 개인정보의 파기</h3>
            <p>
              회사는 수집 목적이 달성된 후 해당 정보를 지체 없이 파기합니다. 전자적 파일 형태의 정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제합니다.
            </p>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem' }}>
            <button 
              className="action-btn primary" 
              style={{ width: '180px', fontSize: '1rem', padding: '0.8rem' }} 
              onClick={() => navigate('/')}
            >
              홈으로 돌아가기
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Privacy;
