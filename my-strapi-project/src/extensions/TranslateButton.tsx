import { useCMEditViewDataManager } from '@strapi/helper-plugin';
import React from 'react';
import axios from 'axios';
import { log } from 'console';

const TranslateButton = () => {
  const { modifiedData, slug } = useCMEditViewDataManager();

  // OpenAI API key
  const apiKey = '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'; // 这里填写你的 API key

  // 检查数据是否存在
  console.log('当前数据:', modifiedData);
  console.log('当前数据:', slug);
  return
  if (!modifiedData || !modifiedData.id || !slug) {
    return null; // 如果没有数据，不显示按钮
  }

  const handleTranslate = async () => {
    console.log('当前要翻译的内容:', modifiedData);

    try {
      // 使用 GPT 进行翻译的 API 调用
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: [
            { role: 'system', content: 'Translate this text to Chinese.' },
            { role: 'user', content: JSON.stringify(modifiedData) },
          ],
        },
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
          },
        }
      );

      // 获取翻译结果
      const translatedText = response.data.choices[0].message.content;
      console.log('翻译结果:', translatedText);

      
      // 这里可以添加代码，将翻译后的内容保存回 Strapi
    } catch (error) {
      console.error('翻译请求失败:', error);
      alert('翻译失败，请检查网络或 API key 设置。');
    }
  };

  return (
    <button onClick={handleTranslate} className="btn btn-primary">
      翻译内容
    </button>
  );
};

export default TranslateButton;
