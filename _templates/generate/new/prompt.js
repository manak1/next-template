const inputValidator = (input) => {
  if (input !== '') return true
}

module.exports = [
  {
    type: 'input',
    name: 'name',
    message: 'コンポーネントの名前を指定してください',
    validate: inputValidator,
  },
  {
    type: 'input',
    name: 'path',
    message: 'src/components以下のパスを指定してください',
    validate: inputValidator,
  },
  {
    type: 'toggle',
    name: 'withStory',
    message: '.stories.tsxも一緒に作成しますか？',
    enabled: 'yes',
    disabled: 'no',
    initial: true,
  },
  {
    type: 'toggle',
    name: 'withCss',
    message: 'styles.scssも一緒に作成しますか？',
    enabled: 'yes',
    disabled: 'no',
    initial: true,
  },
  {
    type: 'toggle',
    name: 'withTest',
    message: 'test.tsxも一緒に作成しますか？',
    enabled: 'yes',
    disabled: 'no',
    initial: true,
  },
]
