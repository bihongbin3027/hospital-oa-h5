const {
  override,
  fixBabelImports,
  addWebpackAlias,
  addLessLoader,
} = require('customize-cra')
const path = require('path')

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: true,
  }),
  addWebpackAlias({
    // eslint-disable-next-line
    ['@']: path.resolve(__dirname, 'src'),
  }),
  addLessLoader({
    modifyVars: {
      // 页面背景
      '@fill-body': '#f4f1f4',
    },
  }),
)
