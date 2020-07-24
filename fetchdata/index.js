const https = require('https')
const path = require('path')
const cheerio = require('cheerio')
const fs = require('fs')
const selector = [
  'getListByCountryTypeService2true',
  'getTimelineService2',
  'getAreaStat',
  'getIndexRecommendList2',
  'getTimelineService1',
  'getStatisticsService',
  'fetchWHOArticle',
  'getIndexRecommendListundefined',
  'fetchGoodsGuide',
  'getIndexRumorList',
  'getPV',
  'getWikiList',
  'getEntries',
  'showPuppeteerUA',
  //   'apierror',
]

var strHtml = ''

https.get('https://ncov.dxy.cn/ncovh5/view/pneumonia', function (res) {
  res.on('data', function (chunk) {
    strHtml += chunk
  })
  res.on('end', function () {
    getData(strHtml)
    console.log('Fetch from Dxy done')
  })
})

function getData(str) {
  let window = {}
  const $ = cheerio.load(str)
  selector.forEach((id) => {
    const targetEle = $(`#${id}`)
    eval(targetEle[0].children[0].data)
  })
  const windowObjStr = JSON.stringify(window),
    folderPath = path.resolve(__dirname, '../src/assets/json'),
    filePath = path.resolve(folderPath, 'data.js')
  fs.readdir(folderPath, (err) => {
    if (err) {
      fs.mkdirSync(folderPath)
    }
    fs.writeFile(filePath, `window.dxyData = ${windowObjStr}`, function () {
      console.log(`Writen to file:[${filePath}] done`)
    })
  })

  return
}
