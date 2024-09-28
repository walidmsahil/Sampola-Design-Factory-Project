'use strict';

module.exports = ({ strapi }) => ({
  async translateContent(ctx) {
    try {
      // 获取需要翻译的内容，可以根据需要从请求中获取内容 ID 或者类型
      const contentId = ctx.params.id;  // 从请求参数中获取内容 ID
      const content = await strapi.entityService.findOne('api::your-content-type-name.your-content-type-name', contentId);

      if (!content) {
        return ctx.send({ error: 'Content not found' }, 404);
      }

      // 调用自动翻译服务
      await strapi.plugin('auto-translate').service('translationService').translateContent(strapi, content);

      // 返回成功信息
      ctx.send({ message: 'Translation triggered successfully' });
    } catch (error) {
      // 错误处理
      strapi.log.error('Error triggering translation:', error);
      ctx.send({ error: 'Translation failed' }, 500);
    }
  },
});
