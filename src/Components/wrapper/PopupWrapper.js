import React, { useRef, useEffect } from 'react';

const PopupWrapper = ({ children, onClose }) => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    // Dışarıya tıklama olayını dinle
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        onClose(); // Popup'ı gizlemek için onClose fonksiyonunu çağırır
      }
    };

    // Event listener'ı ekle
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className='popup-wrapper'>
      <div className='popup-content' ref={wrapperRef}>
        {children}
      </div>
    </div>
  );
};

export default PopupWrapper;
