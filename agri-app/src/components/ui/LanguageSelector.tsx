import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { useLanguage } from '../../utils/LanguageContext';

const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (newLanguage: 'vi' | 'en') => {
    setLanguage(newLanguage);
  };

  return (
    <Dropdown>
      <Dropdown.Toggle 
        variant="outline-light" 
        size="sm"
        className="d-flex align-items-center"
        style={{ minWidth: '60px' }}
      >
        {language === 'vi' ? '🇻🇳 VI' : '🇺🇸 EN'}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item 
          onClick={() => handleLanguageChange('vi')}
          active={language === 'vi'}
        >
          🇻🇳 Tiếng Việt
        </Dropdown.Item>
        <Dropdown.Item 
          onClick={() => handleLanguageChange('en')}
          active={language === 'en'}
        >
          🇺🇸 English
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default LanguageSelector;
