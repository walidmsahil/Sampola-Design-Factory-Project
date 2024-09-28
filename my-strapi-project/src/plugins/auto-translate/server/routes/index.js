module.exports = [
  {
    method: 'POST',
    path: '/translate-content',
    handler: 'translationController.translateContent',
    config: {
      policies: [],
      middlewares: [],
    },
  },
];
