const i18nextMock = {
  use: () => i18nextMock,
  init: jest.fn(),
};

module.exports = i18nextMock;
