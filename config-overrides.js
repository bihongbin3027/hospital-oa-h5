const {
  override,
  fixBabelImports,
  addLessLoader,
  addWebpackAlias,
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
      // 标题字体大小
      '@font-size-heading': '16px',
      // 垂直间距
      '@v-spacing-md': '10px',
      // switch开关
      '@switch-fill': '#497fc5',
      // modal
      '@modal-font-size-heading': '16px',
      '@modal-button-font-size': '16px',
      // 全局品牌色
      '@brand-primary': '#497fc5',
    },
    javascriptEnabled: true,
  }),
)
