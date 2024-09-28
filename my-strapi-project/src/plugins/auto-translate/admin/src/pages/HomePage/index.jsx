import React, { useState } from 'react';
import { Button } from '@strapi/design-system/Button';
import { useIntl } from 'react-intl';
import axios from 'axios';

const HomePage = () => {
  const [loading, setLoading] = useState(false);
  const { formatMessage } = useIntl();

  const triggerTranslation = async () => {
    setLoading(true);
    try {
      const response = await axios.post('/auto-translate/translate-content');
      console.log('Translation successful:', response);
    } catch (error) {
      console.error('Translation failed:', error);
    }
    setLoading(false);
  };

  return (
    <div>
      <h1>{formatMessage({ id: 'plugin.auto-translate.title', defaultMessage: 'Auto Translate' })}</h1>
      <Button onClick={triggerTranslation} loading={loading}>
        {formatMessage({ id: 'plugin.auto-translate.button', defaultMessage: 'Trigger Translation' })}
      </Button>
    </div>
  );
};

export default HomePage;
