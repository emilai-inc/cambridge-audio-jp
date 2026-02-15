# Project Context: Cambridge Audio Japan Site Clone

## 1. プロジェクト概要

### 目的
Cambridge Audio 公式サイト（cambridgeaudio.com/row/en）をベースに、日本語ローカライズされた実運用レベルのクローンサイトを構築する。

### 現在のステータス: Phase 8 完了 — サイト全体完成

| フェーズ | 内容 | ステータス |
|---------|------|----------|
| Phase 1 | 初期構築（5ページ + CSS + JS + アセット） | 完了 |
| Phase 2 | CSS統合修正（インラインCSS自己完結型に統一） | 完了 |
| Phase 3 | index.html 本家忠実リライト | 完了 |
| Phase 4 | hifi/headphones/products/about 本家忠実化 | 完了 |
| Phase 5 | Hi-Fi 15製品 + ヘッドホン 2製品の詳細ページ作成 | 完了 |
| Phase 6 | accessories.html カテゴリページ + ナビリンク更新 | 完了 |
| Phase 7 | アクセサリー 9製品の詳細ページ作成 | 完了 |
| Phase 8 | 7つの補助ページ作成 + 全329箇所の href="#" 解消 | 完了 |

### サイト規模
- **HTMLファイル**: 39ページ（ルート13 + 製品詳細26）
- **画像ファイル**: 61枚（製品33 + ヒーロー/ライフスタイル/アイコン/about28）
- **フォントファイル**: 10個（Sohne系8 + Tiempos Headline系2）
- **CSS**: style.css（共通基盤 3,707行）+ 各ページのインラインCSS
- **JS**: main.js（781行 — カルーセル、メニュー、アニメーション）
- **href="#" 残存**: 0件（全329箇所を解消済み）

---

## 2. ファイル構成と役割

```
cambridge-audio-jp/
├── index.html              (2,158行) ホームページ — 本家に忠実なフルリライト
├── hifi.html               (803行)   Hi-Fiカテゴリページ — 15製品をカテゴリ別グリッド表示
├── headphones.html         (668行)   ヘッドホンカテゴリページ — 2製品
├── speakers.html           (571行)   スピーカーカテゴリページ — L/R + Evo One
├── accessories.html        (695行)   アクセサリーカテゴリページ — 9製品
├── products.html           (989行)   全製品一覧 — 4カテゴリカード + レンジカード
├── about.html              (998行)   ブランドストーリー — 歴史・哲学・チーム紹介
├── technology.html         (558行)   テクノロジー — DAC/アンプ/ストリーミング技術解説
├── support.html            (727行)   サポート — FAQ/取説/登録/販売店/保証/問い合わせ
├── news.html               (526行)   ニュース — 5件のニュースカード
├── reviews.html            (557行)   レビュー — 6件のメディアレビュー引用
├── privacy.html            (565行)   プライバシーポリシー + Cookieポリシー
├── terms.html              (715行)   利用規約 + 特定商取引法 + サイトマップ
│
├── products/                         製品詳細ページ（26ファイル）
│   ├── evo-one.html        (224行)   Evo One — オールインワンスピーカー
│   ├── evo-150-se.html     (221行)   Evo 150 SE — ストリーミングアンプ
│   ├── axa25.html          (213行)   AXA25 — インテグレーテッドアンプ
│   ├── cxa81-mkii.html     (217行)   CXA81 Mk II — インテグレーテッドアンプ
│   ├── exa100.html         (217行)   EXA100 — フラッグシップアンプ
│   ├── mxw70.html          (212行)   MXW70 — コンパクトパワーアンプ
│   ├── mxn10.html          (216行)   MXN10 — コンパクトネットワークプレーヤー
│   ├── cxn100.html         (217行)   CXN100 — ネットワークプレーヤー
│   ├── exn100.html         (218行)   EXN100 — フラッグシップネットワークプレーヤー
│   ├── axc35.html          (212行)   AXC35 — CDプレーヤー
│   ├── cxc.html            (209行)   CXC — CDトランスポート
│   ├── dacmagic-200m.html  (215行)   DacMagic 200M — DAC&ヘッドホンアンプ
│   ├── alva-solo.html      (827行)   Alva Solo — MMフォノプリアンプ
│   ├── alva-duo.html       (833行)   Alva Duo — MC/MMフォノプリアンプ
│   ├── alva-st.html        (828行)   Alva ST — ベルトドライブターンテーブル
│   ├── melomania-a100.html (828行)   Melomania A100 — ANC完全ワイヤレスイヤホン
│   ├── melomania-p100-se.html (833行) Melomania P100 SE — ANCオーバーイヤーヘッドホン
│   ├── alva-mc.html        (212行)   Alva MC — MCカートリッジ（アクセサリー）
│   ├── bt100.html          (196行)   BT100 — Bluetoothレシーバー
│   ├── ex-remote.html      (143行)   EXリモコン — EXシリーズ用
│   ├── memory-foam-tips.html (160行) メモリーフォームイヤーチップ
│   ├── replacement-case-m1plus.html (159行) 交換用ケース Melomania 1+
│   ├── replacement-case-touch.html  (159行) 交換用ケース Melomania Touch
│   ├── minx-floor-stands.html  (160行) Minx フロアスタンド
│   ├── minx-table-stands.html  (160行) Minx テーブルスタンド
│   └── minx-wall-brackets.html (160行) Minx ウォールブラケット
│
├── css/
│   └── style.css           (3,707行) 共通CSS基盤（リセット、フォント、ユーティリティ）
│
├── js/
│   └── main.js             (781行)   カルーセル、メニュー、スムーズスクロール、アニメーション
│
├── fonts/                            ローカルフォント（全10ファイル）
│   ├── sohne-bold.woff2              Sohne Bold（見出し）
│   ├── sohne-book.woff2              Sohne Book（本文）
│   ├── sohne-light.woff2             Sohne Light
│   ├── sohne-bold-italic.woff2
│   ├── sohne-book-italic.woff2
│   ├── sohne-light-italic.woff2
│   ├── sohne-mono-light.woff2        Sohne Mono（コード/仕様値）
│   ├── sohne-wide-bold.woff2         Sohne Wide Bold（UPPERCASE見出し）
│   ├── tiempos-headline-light.woff2  Tiempos Headline Light（セリフ見出し）
│   └── tiempos-headline-light-italic.woff2
│
└── images/
    ├── logo.svg                      Cambridge Audioロゴ
    ├── hero/                         ヒーロー画像（6枚）
    │   ├── lr-series-hero.webp       L/Rスピーカーヒーロー
    │   ├── evo-one-hero.webp         Evo Oneフィーチャー
    │   ├── cambridge-selects.webp    Cambridge Selectsバナー
    │   ├── evo-series.webp           Evoシリーズスライド
    │   ├── edge-series.webp          Edgeシリーズスライド
    │   ├── podcast-hero.webp         ポッドキャストポートレート
    │   └── alva-vinyl.webp           ビニールセクション
    ├── products/                     製品画像（33枚）— 全てwebp形式
    ├── lifestyle/                    ライフスタイル写真（5枚）
    ├── icons/                        メディアロゴ（2枚: forbes, gq）
    └── about/                        ブランドストーリー用画像（13枚）
```

---

## 3. 実施した具体的な変更点

### 3.1 CSSアーキテクチャ

**方針: インラインCSS自己完結型**

各HTMLファイルは `<style>` ブロック内に全てのCSSを持ち、独立して表示可能。
`css/style.css` は共通基盤（@font-face、リセット、汎用ユーティリティ）として読み込むが、
レイアウトやコンポーネントの定義は各ページのインラインCSSに含まれる。

この方針はPhase 2で決定。理由:
- products.htmlで実証済みの成功パターン
- style.cssと各ページのHTML構造の不整合が根本原因だったため
- デモサイトとして各ページが独立動作する方が確実

**CSS Custom Properties（全ページ共通）:**
```css
:root {
  --color-black: #000;
  --color-white: #fff;
  --color-gray-50: #f8f8f8;
  --color-gray-100: #f0f0f0;
  --color-gray-200: #e0e0e0;
  --color-gray-400: #999;
  --color-gray-600: #666;
  --color-gray-800: #333;
  --color-teal: #00857c;
  --color-teal-dark: #006b63;
  --font-sans: 'Helvetica Neue', 'Noto Sans JP', Arial, sans-serif;
  --font-serif: 'Tiempos Headline', 'Noto Serif JP', Georgia, serif;
  --max-width: 1280px;
  --header-height: 64px;
}
```

**レスポンシブブレークポイント:** 1024px / 768px / 480px

### 3.2 フォント

本家サイトから取得したカスタムフォント:
- **Sohne Wide Bold** (`sohne-wide-bold.woff2`): ディスプレイ見出し (UPPERCASE, 72-102px)
- **Tiempos Headline Light** (`tiempos-headline-light.woff2`): セクション見出し (32-56px, serif)
- **Sohne Book/Bold**: 本文・カード見出し (16-24px)

日本語フォールバック: `Noto Sans JP`, `Noto Serif JP`

### 3.3 タイポグラフィ仕様（本家実測値を再現）

| 用途 | フォント | サイズ | ウェイト |
|------|---------|--------|---------|
| ディスプレイ見出し | Sohne Wide Bold | 72-102px | 700 |
| セクション見出し | Tiempos Headline | 56px | 300 |
| サブ見出し | Tiempos Headline | 32px | 300 |
| 本文 | Sohne Book | 16-20px | 400 |
| カード見出し | Sohne Bold | 18-24px | 600 |
| CTA | Sohne Book | 16px | 400 |

### 3.4 日本語ローカライズ方針

| 対象 | 方針 | 例 |
|------|------|-----|
| ブランド名・製品名 | 英語のまま | Cambridge Audio, Evo One, Melomania A100 |
| UPPERCASE見出し | 英語のまま | SOUND THAT MAKES A STATEMENT, EVO SERIES |
| UI・ナビゲーション | 日本語 | Hi-Fi, ヘッドホン, スピーカー, アクセサリー |
| キャッチコピー | 自然な日本語に意訳 | 「比類なきサウンドを、日常に。」 |
| 技術仕様ラベル | 日本語 | 出力、周波数特性、入力端子 |
| 技術仕様値 | 英語/数値のまま | "14 x 50W into 4 Ohms" |
| CTA | 日本語 | 「販売店を探す」「詳しく見る」 |

### 3.5 CTAボタン

- **黒ピル**: `background: #000; color: #fff; border-radius: 30px; padding: 11px 20px;`
- **白ピル**: `background: #fff; color: #000; border-radius: 30px;`
- **アウトラインピル**: `background: transparent; color: #fff; border: 1px solid #fff; border-radius: 30px;`
- 全CTAに矢印アイコン `→` 付き

### 3.6 ページ別概要

#### index.html（ホームページ）
- Phase 3で完全リライト
- 本家の全13セクションを忠実に再現:
  ヒーロー → 商品カルーセル → Evo Oneフィーチャー → Cambridge Selects →
  ブランドストーリー → シリーズカルーセル → エンジニアリング →
  ポッドキャスト → プレス引用 → ビニール → ソーシャル → フッター
- ヒーロー: 巨大UPPERCASE見出し + フルワイド背景画像
- カルーセル: 横スクロール + ドラッグ対応

#### hifi.html / headphones.html / speakers.html / accessories.html
- 白背景の製品カタログページ
- パターン: UPPERCASE大見出し + Tiempos説明文 + カテゴリ別製品グリッド
- 製品カード: #f0f0f0背景、10px角丸、ホバーでtranslateY + box-shadow

#### products/（26製品ページ）
- 3ティアテンプレート:
  - **Tier A** (フル): ヒーロー + フィーチャー3行 + スペック表 + 関連製品
  - **Tier B** (中): ヒーロー + フィーチャー1-2行 + スペック表 + 関連製品
  - **Tier C** (シンプル): ヒーロー + 関連製品のみ
- テンプレート参照: `products/cxc.html`（209行、最もコンパクトな自己完結型）
- 各ページのヒーロー: 2カラムグリッド（左: 製品画像、右: カテゴリ + 製品名 + 説明 + 特徴アイコン + CTA）

#### support.html
- セクション: FAQ（details/summary） + 取扱説明書 + 製品登録 + 販売店 + 保証 + お問い合わせ
- アンカーリンク対応: `#faq`, `#manuals`, `#registration`, `#retailers`, `#warranty`, `#contact`

#### technology.html
- 黒背景ヒーロー + 4つの技術セクション（交互レイアウト: 画像+テキスト）
- DAC、アンプ設計、StreamMagic、音響エンジニアリング

#### terms.html
- `#sitemap` セクションに全ページリンク一覧（全39ページ）
- `#tokushoho` セクションに特定商取引法テーブル

### 3.7 リンク構造

**全サイトのリンク（href="#" → 0件）:**

| カテゴリ | リンク先 |
|---------|---------|
| ナビ「スピーカー」| speakers.html |
| フッター サポート | support.html#registration / #faq / #manuals / #contact |
| フッター ブランド | technology.html / news.html / reviews.html |
| フッター 法的情報 | privacy.html / terms.html / terms.html#tokushoho |
| フッター下部 | privacy.html / privacy.html#cookies / terms.html#sitemap |
| 製品CTA「販売店を探す」| ../support.html#retailers（products/内）|
| SNS | facebook.com / instagram.com / youtube.com / linkedin.com / x.com |
| アプリ | cambridgeaudio.com/.../streammagic / cambridge-connect |

**パス規則:**
- ルートHTMLから: `href="speakers.html"`, `href="support.html#faq"`
- products/内から: `href="../speakers.html"`, `href="../support.html#faq"`

### 3.8 画像

- 全てwebp形式（SVGロゴを除く）
- 本家サイトからcurlでダウンロード
- onerrorフォールバック付き: `onerror="this.parentElement.classList.add('product-card__image--placeholder');..."`
- 製品画像: `images/products/{product-name}.webp`

---

## 4. 環境・依存関係

### 技術スタック
- **HTML5**: セマンティックHTML（header, nav, main, section, article, footer）
- **CSS3**: Custom Properties, Grid, Flexbox, @font-face, @media queries
- **Vanilla JavaScript**: ES6+（カルーセル、IntersectionObserver、イベント委譲）
- **外部依存**: なし（CDN、ライブラリ、フレームワーク一切不使用）

### ビルド不要
- 静的HTMLサイト。ビルドステップなし
- ブラウザで直接開くか、任意のHTTPサーバーで配信可能
- 例: `python3 -m http.server 8000` でローカルサーバー起動

### ブラウザ互換性
- モダンブラウザ対象（Chrome, Safari, Firefox, Edge）
- CSS Grid/Flexbox/Custom Properties使用のため、IE非対応

---

## 5. 次回への申し送り事項

### 5.1 残存課題

1. **L/Rスピーカー専用詳細ページなし**: speakers.htmlにL/Rスピーカーが掲載されているが、個別の製品詳細ページ（products/lr-*.html）は未作成。現在は暫定的にproducts/evo-one.htmlにリンク
2. **products.htmlの独自構造**: 他のカタログページ（hifi, headphones等）と異なる自己完結型デザイン。統一するかは判断が必要
3. **モバイルメニュー**: main.jsのハンバーガーメニューのセレクタがページによって異なる可能性あり。全ページでの動作テストが必要
4. **画像の最適化**: 一部画像が大きめ。WebP圧縮率の調整や、srcset/sizes属性によるレスポンシブ画像対応は未実施
5. **メタデータ**: OGP（Open Graph Protocol）タグ、Twitter Cardタグが未設定
6. **favicon**: 未設定

### 5.2 改善候補（優先度低）

- Google Fonts (`Noto Sans JP`) の読み込み追加（日本語テキストのフォント品質向上）
- Lighthouse パフォーマンス監査 + 改善
- アクセシビリティ改善（ARIA属性の追加、コントラスト比の確認）
- 404エラーページの作成
- アニメーション/トランジションの追加（IntersectionObserverによるスクロールアニメーション）

### 5.3 開発上の注意事項

1. **CSSの自己完結性を維持**: 新規ページ追加時は必ずインライン `<style>` ブロックに全CSSを含める。style.cssに依存するレイアウトCSSを追加しない
2. **テンプレート参照**: 新しい製品ページを作成する場合は `products/cxc.html`（209行）をテンプレートとして使用
3. **パスの相対性**: products/内のファイルは `../` プレフィックスが必要。ルートファイルは直接ファイル名
4. **フッター/ヘッダーの一貫性**: 全ページで共通のヘッダーナビ5項目（Hi-Fi / ヘッドホン / スピーカー / アクセサリー / ブランドストーリー）とフッター4カラム（製品 / サポート / ブランド / 法的情報）を維持
5. **フォントファイル**: fonts/ディレクトリのwoff2はローカルに存在。外部CDNからの読み込みではない
6. **SNSリンク**: 外部URLには必ず `target="_blank" rel="noopener noreferrer"` を付与

### 5.4 プロジェクトの実行方法

```bash
# ローカルサーバーで確認
cd /Users/kenzo/claude/cambridge-audio-jp
python3 -m http.server 8000
# ブラウザで http://localhost:8000 を開く

# href="#" の残存チェック
grep -rn 'href="#"' *.html products/*.html | wc -l
# → 0 であるべき

# ファイル数の確認
find . -name "*.html" | wc -l
# → 39
```
