let Parser = require('rss-parser')
let fs = require('fs')
let querystring = require('querystring')
let urlMod = require('url')
let URL = urlMod.URL

let feedxUrls = {
  '路透': 'https://feedx.net/rss/reuters.xml',
  '纽约时报': 'https://feedx.net/rss/nytimes.xml',
  '美国之音': 'https://feedx.net/rss/mgzy1.xml',
  'BBC': 'https://rsshub.app/bbc/chinese', // 'https://feedx.net/rss/bbc.xml',
  '自由亚洲电台': 'https://www.rfa.org/mandarin/yataibaodao/rss2.xml',
  '法广': 'https://feedx.net/rss/rfi.xml',
  '德国之声': 'https://feedx.net/rss/dw.xml',
  '联合早报': 'https://rsshub.app/zaobao/realtime/china',
  '(臺)中央社CNA': 'https://feedx.net/rss/cna.xml',
  'CCTV新闻联播': 'https://rsshub.app/xinwenlianbo/index',
  '维权网': 'https://wqw2010.blogspot.com/feeds/posts/default',
  '寒冬': 'https://zh.bitterwinter.org/feed/',
  '经济学人en': 'https://feedx.net/rss/economist.xml',
  'Solidot': 'https://www.solidot.org/index.rss',
  '中国数字时代': 'https://chinadigitaltimes.net/chinese/feed/',
}

keys = Object.keys(feedxUrls)
jsonarr = keys.map(key => {
	return {'site': key, 'url':feedxUrls[key]}
})

let content = JSON.stringify(jsonarr, undefined, 4);
fs.writeFileSync(`./subs.json`, content)
