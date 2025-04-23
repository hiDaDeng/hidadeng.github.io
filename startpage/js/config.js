class Config {
	constructor() { }

	getThemeMode() {
		const themeModes = {
			'light': {
				name: 'Light',
				icon: 'light-mode'
			},
			'dark': {
				name: 'Dark',
				icon: 'dark-mode'
			},
			'auto': {
				name: 'Auto',
				icon: 'auto-mode',
				lightHour: '7',
				darkHour: '18'
			}
		};

		return themeModes;
	}

	getFontFamily() {
		const fontFamilies = {
			'monospace': 'Fira Code Retina, Hack, Ubuntu Mono, Monaco, Lucida Console, monospace',
			'sans-serif': 'Inter, SF Pro Text, Roboto, Open Sans, sans-serif',
			'serif': 'serif'
		};

		return fontFamilies;
	}

	getQuickSearchData() {
		const quickSearchData = {
			"mail/": {urlPrefix: "https://mail.qq.com/"},
			"mdnice/": {urlPrefix: "https://editor.mdnice.com/"},
			"list/": {urlPrefix: "https://hidadeng.github.io/list/"},
			"baidu/": {urlPrefix: "https://www.baidu.com/s?wd="},
			"google/": {urlPrefix: "https://www.google.com/search?q="},
			"scholar/": {urlPrefix: "https://scholar.google.com/scholar?q="},
			"book/": {urlPrefix: "https://www.douban.com/search?cat=1001&q="},
			'r/': {urlPrefix: 'https://reddit.com/r/'},
			'myblog/': {urlPrefix: 'https://hidadeng.github.io/'},
			'gate/': {urlPrefix: "https://www.researchgate.net/"},
			'pnas/': {urlPrefix: "https://www.pnas.org/"},
			'wos/': {urlPrefix: 'https://www.webofscience.com/wos/alldb/basic-search'},
			'ssrn/': {urlPrefix: 'https://www.ssrn.com/'},
			'proquest/': {urlPrefix: 'https://www.proquest.com/'},
			'zhiwang/': {urlPrefix: 'https://www.cnki.net/'},
			'zhihu/': {urlPrefix: 'https://www.zhihu.com/search?type=content&q='},
			'img/': {urlPrefix: 'https://unsplash.com/s/photos/'},
			'jd/': {urlPrefix: 'https://amazon.com/s?k='},
			'taobao/': {urlPrefix: 'https://s.taobao.com/search?q='},
			'youtube/': {urlPrefix: 'https://youtube.com/results?search_query='},
			'bilibili/': {urlPrefix: 'https://search.bilibili.com/all?keyword='},
			'微信公众号/': {urlPrefix: 'https://mp.weixin.qq.com/'},
			'github/': {urlPrefix: 'https://github.com/search?q='},
			"scihub/": {urlPrefix: 'https://sci-hub.ee/'},
			"arxiv/": {urlPrefix: "https://arxiv.org/search/?searchtype=all&abstracts=show&order=-announced_date_first&size=50&query="},
			"medium/": {urlPrefix: 'https://medium.com/search?q='}
		};

		return quickSearchData;
	}

	getSearchEngines() {

		const searchEngines = {
			'Baidu':	{
				name: 'Baidu',
				icon: 'baidu',
				prefix: 'https://www.baidu.com/s?wd='
			},

			'google': {
				name: 'Google',
				prefix: 'https://www.google.com/search?q=',
				icon: 'google'
			},

			'yandex': {
				name: 'Yandex',
				prefix: 'https://yandex.com/search/?text=',
				icon: 'yandex'
			},
			
			'Scholar': {
				name: 'Google Scholar',
				prefix: 'https://scholar.google.com/scholar?q=',
				icon: 'google-scholar'
			},

			'Metaso': {
				name: 'Metaso',
				prefix: 'https://metaso.cn/?q=',
				icon: 'metaso'
			},
			
		};

		return searchEngines;
	}

	getWebSites() {
		// Web menu
		// A list of websites that will be generated and put on the web menu
		const webSites = [
			{
				site: '36Kr',
				icon: '36kr',
				url: 'https://www.36kr.com/',
				category: 'cNews'
			},
			{
				site: 'IndieHackers',
				icon: 'indie-hackers',
				url: 'https://www.indiehackers.com/',
				category: 'cNews'
			},
			{
				site: 'HackersNews中文',
				icon: 'hackernews',
				url: 'https://hackernews.cc/',
				category: 'cNews'
			},
			{
				site: 'HackersNews',
				icon: 'hackernews',
				url: 'https://news.ycombinator.com/',
				category: 'cNews'
			},
			{
				site: 'Product-Hunt',
				icon: 'product-hunt',
				url: 'https://www.producthunt.com/',
				category: 'cNews'
			},
			
			{
				site: '小红书',
				icon: 'xiaohongshu',
				url: 'https://www.xiaohongshu.com/',
				category: 'cNews'
			},


			{
				site: 'Reddit',
				icon: 'reddit',
				url: 'https://reddit.com/',
				category: 'Coding'
			},
			{
				site: '和鲸社区',
				icon: 'heywhale',
				url: 'https://www.heywhale.com/',
				category: 'Coding'
			},
			{
				site: 'Kaggle',
				icon: 'kaggle',
				url: 'https://www.kaggle.com/',
				category: 'Coding'
			},
			{
				site: 'Github',
				icon: 'github',
				url: 'https://github.com/',
				category: 'Coding'
			},
			{
				site: 'MyBlog',
				icon: 'myblog',
				url: 'https://hidadeng.github.io/',
				category: 'Coding'
			},
			
			{
				site: 'Bilibili',
				icon: 'bilibili',
				url: 'https://www.bilibili.com/',
				category: 'media'
			},

			{
				site: 'LetPub',
				icon: 'letpub',
				url: 'https://www.letpub.com.cn/index.php?page=journalapp&view=search',
				category: 'Academic Tools'
			},
			{
				site: 'alphaXiv',
				icon: 'alphaxiv',
				url: 'https://www.alphaxiv.org/explore',
				category: 'Academic Tools'
			},
			{
				site: 'Sci-Space',
				icon: 'scispace',
				url: 'https://scispace.com/search',
				category: 'Academic Tools'
			},

			{
				site: 'OSF HOME',
				icon: 'osf',
				url: 'https://osf.io/',
				category: 'Academic Tools'
			},

			{
				site: 'ChatGPT',
				icon: 'chatgpt',
				url: 'https://chat.openai.com/',
				category: 'Academic Tools'
			},
			{
				site: '秘塔',
				icon: 'metaso',
				url: 'https://metaso.cn/',
				category: 'Academic Tools'
			},

			{
				site: '文心一言',
				icon: 'wenxinyiyan',
				url: 'https://yiyan.baidu.com/',
				category: 'Academic Tools'
			},

			{
				site: '知网',
				icon: 'zhiwang',
				url: 'http://www-cnki-net-s.ivpn.hit.edu.cn:1080/',
				category: 'Academic Search Engine'
			},
			{
				site: 'Researcher',
				icon: '博士',
				url: 'https://www.researcher-app.com/feed/all',
				category: 'Academic Search Engine'
			},

			{
				site: 'Research Gate',
				icon: 'researchgate',
				url: 'https://www.researchgate.net/',
				category: 'Academic Search Engine'
			},
			{
				site: '图书资源',
				icon: 'annas-archive',
				url: 'https://annas-archive.org/',
				category: 'Academic Search Engine'
			},
			{
				site: 'Sci-Hub',
				icon: 'scihub',
				url: 'https://sci-hub.ee/',
				category: 'Academic Search Engine'
			},
			{
				site: 'ProQuest',
				icon: 'proquest',
				url: 'https://www.proquest.com/site/pqdd_unavailable.shtml',
				category: 'Academic Search Engine'
			},
			{
				site: 'Connected Papers',
				icon: 'connected',
				url: 'https://www.connectedpapers.com/',
				category: 'Academic Search Engine'
			},
			{
				site: '秘塔',
				icon: 'metaso',
				url: 'https://metaso.cn/',
				category: 'Academic Search Engine'
			},

			{
				site: 'Semantic Scholar',
				icon: 'semantic',
				url: 'https://www.semanticscholar.org/',
				category: 'Academic Search Engine'
			},
			{
				site: 'PubScholar',
				icon: 'pubscholar',
				url: 'https://pubscholar.cn/explore',
				category: 'Academic Search Engine'
			},
			{
				site: 'Zenodo',
				icon: 'zenodo',
				url: 'https://zenodo.org/',
				category: 'Academic Search Engine'
			},
			{
				site: '哈工大图书馆',
				icon: 'hit',
				url: 'http://lib-hit-edu-cn.ivpn.hit.edu.cn:1080/',
				category: 'Academic Search Engine'
			},
			
			{
				site: '谷歌翻译',
				icon: 'google-translate',
				url: 'https://translate.google.cn/',
				category: 'Academic Tools'
			},

			{
				site: 'ScienceNews',
				icon: 'sciencenews',
				url: 'https://www.sciencenews.org/',
				category: 'cNews'
			},
			{
				site: '豆瓣小组',
				icon: 'douban',
				url: 'https://www.douban.com/group/',
				category: 'cNews'
			},

			{
				site: '集智学园',
				icon: 'swarma',
				url: 'https://campus.swarma.org/',
				category: 'cNews'
			},

			{
				site: 'Nature',
				icon: 'nature',
				url: 'https://www.nature.com/',
				category: 'cNews'
			},
			{
				site: 'Science',
				icon: 'science',
				url: 'https://www.science.org/journal/science',
				category: 'cNews'
			},
			{
				site: 'PKMer',
				icon: 'pkmer',
				url: 'https://pkmer.cn/',
				category: 'cNews'
			},

			{
				site: 'PNAS',
				icon: 'pnas',
				url: 'https://www.pnas.org/',
				category: 'cNews'
			},
			{
				site: 'QQ_mail',
				icon: 'gmail',
				url: 'https://mail.qq.com/',
				category: 'Academic Tools'
			},




			{
				site: 'CNKI翻译',
				icon: 'cnki翻译',
				url: 'https://dict.cnki.net/index',
				category: 'Academic Tools'
			},  
			{
				site: 'doi2bib',
				icon: 'doi2bib',
				url: 'https://www.doi2bib.org/',
				category: 'Academic Tools'
			},
			{
				site: 'Grammarly',
				icon: 'grammarly',
				url: 'https://app.grammarly.com/',
				category: 'Academic Tools'
			},
			{
				site: 'CopyFromPDF',
				icon: 'copypdf',
				url: 'https://learncs.cn/tools/pdf',
				category: 'Academic Tools'
			},


			
			{
				site: 'Overleaf',
				icon: 'overleaf',
				url: 'https://www.overleaf.com/latex/templates',
				category: 'Academic Tools'
			},

			{
				site: '沉浸式翻译',
				icon: 'immersivetranslate',
				url: 'https://app.immersivetranslate.com/',
				category: 'Academic Tools'
			},

			{
				site: 'Qwen',
				icon: 'qwen',
				url: 'https://chat.qwen.ai/',
				category: 'Academic Tools'
			},


			{
				site: '豆包',
				icon: 'doubao',
				url: 'https://www.doubao.com/chat/',
				category: 'Academic Tools'
			},

			{
				site: '腾讯元宝',
				icon: 'yuanbao',
				url: 'https://yuanbao.tencent.com/chat/',
				category: 'Academic Tools'
			},


			{
				site: 'Aoogle Scholar',
				icon: 'google-scholar',
				url: 'https://scholar.google.com/',
				category: 'Academic Search Engine'
			}, 


			{
				site: '期刊分类',
				icon: 'list',
				url: 'https://hidadeng.github.io/list/',
				category: 'Academic Search Engine'
			},

			{
				site: 'EBSCO',
				icon: 'ebsco',
				url: 'https://search.ebscohost.com/',
				category: 'Academic Search Engine'
			}, 
			{
				site: 'iVPN',
				icon: 'hitvpn',
				url: 'http://ivpn.hit.edu.cn',
				category: 'Academic Search Engine'
			}, 
			
			{
				site: '开源arXiv',
				icon: 'arxiv',
				url: 'https://arxiv.org/search/?query=',
				category: 'Academic Search Engine'
			},
			{
				site: '国外学位论文',
				icon: 'pqdtcn',
				url: 'hhttps://www.pqdtcn.com/',
				category: 'Academic Search Engine'
			},
			{
				site: 'AnnualReviews',
				icon: 'annualreviews',
				url: 'https://www.annualreviews.org/',
				category: 'Academic Search Engine'
			},

			{
				site: 'Consensus',
				icon: 'consensus',
				url: 'https://consensus.app/',
				category: 'Academic Search Engine'
			},


			{
				site: 'SAGE',
				icon: 'sage',
				url: 'https://journals.sagepub.com/',
				category: 'dPublishers Group'
			},
			{
				site: 'Springer',
				icon: 'springer',
				url: 'https://link.springer.com/',
				category: 'dPublishers Group'
			},
			{
				site: 'Taylor & Francis',
				icon: 'taylorfrancis',
				url: 'https://www.tandfonline.com/',
				category: 'dPublishers Group'
			},
			
			{
				site: 'Elsevier',
				icon: 'elsevier',
				url: 'https://journalfinder.elsevier.com/',
				category: 'dPublishers Group'
			},

			{
				site: 'Web of Science',
				icon: 'wos',
				url: 'http://webofscience-clarivate-cn-s.ivpn.hit.edu.cn:1080/wos/alldb/basic-search',
				category: 'Academic Tools'
			},
			{
				site: '万词王',
				icon: 'wantwords',
				url: 'https://wantwords.net/',
				category: 'Academic Tools'
			},
			
			{
				site: '期刊等级',
				icon: 'fms',
				url: 'http://www.fms-journal.net/journals',
				category: 'Academic Tools'
			},

			{
				site: 'Youtube',
				icon: 'youtube',
				url: 'https://youtube.com/',
				category: 'media'
			},

            {
                site: '少数派',
                icon: '少数派',
                url: 'https://sspai.com/',
                category: 'cNews'
            },
            {
                site: 'VisualCapitalist',
                icon: 'VisualCapitalist',
                url: 'https://www.visualcapitalist.com/',
                category: 'cNews'
            },
             {
                site: 'Modevol',
                icon: 'modevol',
                url: 'https://www.modevol.com/',
                category: 'cNews'
            },
			{
                site: 'Zaker',
                icon: 'zaker',
                url: 'https://www.myzaker.com/',
                category: 'cNews'
            },
			{
				site: 'Zhihu',
				icon: 'zhihu',
				url: 'https://www.zhihu.com/hot',
				category: 'cNews'
			},
			{
				site: 'Medium',
				icon: 'medium',
				url: 'https://medium.com/',
				category: 'cNews'
			},
	
			{
				site: 'Duckduckgo',
				icon: 'duckduckgo',
				url: 'https://duckduckgo.com/',
				category: 'Search Engine'
			},
			{
				site: 'Yandex',
				icon: 'yandex',
				url: 'https://yandex.com/search/?text=',
				category: 'Search Engine'
			},
			{
				site: 'Ecosia',
				icon: 'ecosia',
				url: 'https://ecosia.org/',
				category: 'Search Engine'
			},
			{
				site: 'Google',
				icon: 'google',
				url: 'https://google.com/',
				category: 'Search Engine'
			},
			{
				site: 'Baidu',
				icon: 'baidu',
				url: 'https://www.baidu.com/',
				category: 'Search Engine'
			},
			{
				site: 'Bing',
				icon: 'bing',
				url: 'https://bing.com',
				category: 'Search Engine'
			},

			{
				site: 'Qwant',
				icon: 'qwant',
				url: 'https://qwant.com/',
				category: 'search Engine'
			},
			{
				site: 'Startpage',
				icon: 'startpage',
				url: 'https://startpage.com/',
				category: 'Search Engine'
			},

			{
				site: 'Unsplash',
				icon: 'unsplash',
				url: 'https://unsplash.com/',
				category: 'Coding'
			},


			{
				site: 'Icons8',
				icon: 'icons8',
				url: 'https://icons8.com/',
				category: 'Coding'
			},
			
			{
				site: 'Zlib',
				icon: 'zlib',
				url: 'https://zlib.knat.network/',
				category: 'Coding'
			},
			{
				site: 'MD Nice',
				icon: 'markdown',
				url: 'https://editor.mdnice.com/',
				category: 'Coding'
			},
            {
                site: 'Canva',
                icon: 'canva',
                url: 'https://www.canva.cn/',
                category: 'Coding'
            },
            
            {
                site: 'Favicon',
                icon: 'favicon',
                url: 'https://formito.com/tools/favicon',
                category: 'Coding'
            },
             {
                site: '统计之都',
                icon: 'cosx',
                url: 'https://cosx.org/',
                category: 'Coding'
            },
			{
				site: 'Logo DIY',
				icon: 'logo',
				url: 'https://logo.com/',
				category: 'Coding'
			},

			{
				site: '工大管院',
				icon: 'hitsom',
				url: 'http://som.hit.edu.cn/',
				category: 'BInformation'
			},
			{
				site: '工大信息',
				icon: 'hitindex',
				url: 'http://yjs.hit.edu.cn/zhxy-yjsxxjs/index',
				category: 'BInformation'
			},
			{
				site: '高校人才网',
				icon: 'gaoxiaojob',
				url: 'http://www.gaoxiaojob.com/',
				category: 'BInformation'
			},
			{
				site: '虎嗅网',
				icon: 'huxiu',
				url: 'https://www.huxiu.com/article/',
				category: 'Cnews'
			},
			{
				site: '凤凰网',
				icon: 'ifeng',
				url: 'https://www.ifeng.com/',
				category: 'Cnews'
			},
			
			{
				site: '国家统计局',
				icon: 'stats_gov',
				url: 'https://data.stats.gov.cn/',
				category: 'BInformation'
			},

			{
				site: '教育部',
				icon: 'education',
				url: 'http://www.moe.gov.cn/',
				category: 'BInformation'
			},
			{
				site: '中国政府网站',
				icon: 'goverment',
				url: 'https://www.gov.cn/',
				category: 'BInformation'
			},
			{
				site: '人人都是产品经理',
				icon: 'manager',
				url: 'https://www.woshipm.com/news',
				category: 'CNews'
			},
			{
				site: '黑龙江政府网',
				icon: 'heilongjiang',
				url: 'https://hrbthx.zwfw.hlj.gov.cn/?flag=false',
				category: 'BInformation'
			},
			
			{
				site: '自然基金查询',
				icon: 'nsfc-net',
				url: 'hhttps://kd.nsfc.gov.cn/finalProjectInit',
				category: 'BInformation'
			},
			{
				site: '安泰讲座',
				icon: 'antai',
				url: 'https://www.acem.sjtu.edu.cn/news_center/scholarship.html',
				category: 'BInformation'
			},

			{
				site: '光华研讨',
				icon: 'gsmpku',
				url: 'https://www.gsm.pku.edu.cn/faculty_and_research/sxgh/xsyth1.htm',
				category: 'BInformation'
			},


			{
				site: '科学网',
				icon: '科学网',
				url: 'http://www.sciencenet.cn/',
				category: 'BInformation'
			},

			{
				site: '雪球财经',
				icon: 'xueqiu',
				url: 'https://xueqiu.com/',
				category: 'CNews'
			},


		];

		return webSites;
	}

	getPanelSites() {
		// Panel
		// A list of websites that will be generated and put on the Panel
		const panelSites = [
			{
				site: 'Google Scholar',
				icon: 'google-scholar',
				url: 'https://scholar.google.com/'
			},
			{
				site: 'Consensus',
				icon: 'consensus',
				url: 'https://consensus.app/'
			},

			{
				site: '秘塔',
				icon: 'metaso',
				url: 'https://metaso.cn/',
			},

			{
				site: 'Sci-Space',
				icon: 'scispace',
				url: 'https://scispace.com/search',
			},


			{
				site: 'Github',
				icon: 'github',
				url: 'https://github.com/'
			},

			{
				site: 'QQmail',
				icon: 'gmail',
				url: 'https://mail.qq.com/'
			},
			{
				site: '哈工大图书馆',
				icon: 'hit',
				url: 'http://lib-hit-edu-cn.ivpn.hit.edu.cn:1080/'
			},
			{
				site: 'doi2bib',
				icon: 'doi2bib',
				url: 'https://www.doi2bib.org/'
			},


		];

		return panelSites;
	}
}
