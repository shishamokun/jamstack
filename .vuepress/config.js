module.exports = {
    themeConfig: {
      // logoのイメージファイルを参照させます。
      logo: 'https://www.science.co.jp/wordpress/wp-content/themes/humanscience/common/img/logo.jpg',
  
      // ナビゲーションにコンテンツに加える内容を追加させます。
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Get Started', link: '/contents/' }
      ],

      // サイドバーを追加します。
    sidebar: [
        '/',
        '/contents/'
      ],
      // ヘディングタイトルを自動でサイドメニューに表示させます。
      displayAllHeaders: true,
  
      // h2までをサイドメニューに表示させます。
      sidebarDepth: 2
    }
  }