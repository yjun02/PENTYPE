import React, { useEffect } from 'react';

const AdSense = ({ adSlot, adFormat = 'auto', fullWidth = true, style = { display: 'block' }, type = 'display' }) => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error('AdSense error:', e);
    }
  }, []);

  return (
    <div className={`adsense-container ${type}`} style={{ margin: '2rem 0', overflow: 'hidden', minHeight: '100px' }}>
      <ins
        className="adsbygoogle"
        style={style}
        data-ad-client="ca-pub-5930106978959184"
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive={fullWidth ? 'true' : 'false'}
      ></ins>
    </div>
  );
};

export default AdSense;
