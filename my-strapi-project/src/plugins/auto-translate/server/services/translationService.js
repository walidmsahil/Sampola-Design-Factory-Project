module.exports = {
    async translateContent(strapi, content) {
      const gptApiKey = process.env.GPT_API_KEY;
      const targetLanguages = ['fr', 'de', 'es'];
  
      for (const locale of targetLanguages) {
        const translatedContent = await this.callGptApi(content, locale);
  
        if (translatedContent) {
          await strapi.entityService.create('api::your-content-type-name.your-content-type-name', {
            data: {
              ...translatedContent,
              locale,
              publishedAt: new Date(),
            },
          });
        }
      }
    },
  
    async callGptApi(content, targetLocale) {
      try {
        const response = await axios.post('https://api.openai.com/v1/completions', {
          prompt: `Translate the following content to ${targetLocale}: ${content}`,
          max_tokens: 500,
        }, {
          headers: {
            Authorization: `Bearer ${process.env.GPT_API_KEY}`,
          },
        });
  
        return response.data.choices[0].text;
      } catch (error) {
        strapi.log.error('Error calling GPT API', error);
        return null;
      }
    },
  };
  