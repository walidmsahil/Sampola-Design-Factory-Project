const { Configuration, OpenAIApi } = require('openai');

// 设置GPT API密钥
const configuration = new Configuration({
  apiKey: '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',  // 将你的 API 密钥存放在环境变量中
});
const openai = new OpenAIApi(configuration);

// 调用 GPT API 进行翻译
const translateWithGPT = async (text, targetLanguage) => {
  try {
    const response = await openai.createChatCompletion({
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content: `You are a translator that converts text to ${targetLanguage}.`,
        },
        {
          role: 'user',
          content: text,
        },
      ],
    });

    return response.data.choices[0].message.content;
  } catch (error) {
    console.error('翻译错误：', error);
    return null;
  }
};

module.exports = { translateWithGPT };
