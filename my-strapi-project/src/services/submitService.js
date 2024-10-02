import axios from 'axios';

export const submitTranslation = async (contentId, translatedContent) => {
  try {
    const response = await axios.put(`/api/hero-sections/${contentId}`, {
      data: {
        welcome_title: translatedContent,
        locale: 'fi',
        localizations: [contentId],
      },
    });
    console.log('翻译提交成功:', response.data);
  } catch (error) {
    console.error('提交翻译时出错:', error);
  }
};
