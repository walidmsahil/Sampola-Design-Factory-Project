import TranslateButton from '../extensions/TranslateButton';

const config = {
  locales: [
    'zh-Hans',  // 添加你需要的语言
  ],
};

const bootstrap = (app) => {
  app.injectContentManagerComponent('editView', 'informations', {
    name: 'TranslateButton',
    Component: TranslateButton,
  });

  console.log('应用启动并注入了TranslateButton');
};

export default {
  config,
  bootstrap,
};
