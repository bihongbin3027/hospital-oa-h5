const { override, fixBabelImports, addLessLoader } = require('customize-cra')
// const path = require('path')

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: true,
  }),
  // addWebpackAlias({
  //   // eslint-disable-next-line
  //   ['@']: path.resolve(__dirname, 'src'),
  // }),
  addLessLoader({
    modifyVars: {
      // 页面背景
      '@fill-body': '#f4f1f4',
      // 标题字体大小
      '@font-size-heading': '16px',
    },
    javascriptEnabled: true,
  }),
)
