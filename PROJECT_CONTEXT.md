# Project Context: Cambridge Audio Japan Site Clone

## 1. プロジェクト概要

### 目的
Cambridge Audio 公式サイト（cambridgeaudio.com/row/en）をベースに、日本語ローカライズされた実運用レベルのクローンサイトを構築する。

### 現在のステータス: Phase 15 完了 — GitHub Issues #13, #17-18, #23-27 全件解決

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
| Phase 9 | L/Rスピーカー製品ページ3枚作成 + speakers.html修正（Issue #1, #2） | 完了 |
| Phase 10 | index.html ヒーローCTAリンク修正（Issue #3） | 完了 |
| Phase 11 | サイト品質改善: Google Fonts + スクロールアニメーション + バグ修正 | 完了 |
| Phase 12 | GitHub Issues #4-#12 全件解決: favicon, OGP, モバイルQA, SX+Minx 8製品追加 | 完了 |
| Phase 13 | 全37製品ページ UK準拠リデザイン: pp-classシステム + product-page.css + UK画像 | 完了 |
| Phase 14 | Hi-Fi 7製品ページ英語→日本語全文翻訳 + CSSクラス正規化(3ファイル) + スペック表統一 | 完了 |
| Phase 15 | GitHub Issues #13,#17-18,#23-27: レイアウト修正6件 + カラースウォッチJS実装 + about.html改善 | 完了 |

### サイト規模
- **HTMLファイル**: 51ページ（ルート13 + 製品詳細37 + 404.html）
- **画像ファイル**: 560+枚（製品サブディレクトリに hero/lifestyle/feature/fullwidth/quote-logo + カラーバリアント162枚）
- **フォントファイル**: 10個（Sohne系8 + Tiempos Headline系2）
- **CSS**: style.css（共通基盤 ~3,700行）+ product-page.css（製品ページ共有 ~810行）+ ルートページのインラインCSS
- **JS**: main.js（~800行 — カルーセル、メニュー、スクロールアニメーション）+ 製品ページ内ギャラリーJS + カラースウォッチ切替JS（10製品）
- **外部フォント**: Google Fonts（Noto Sans JP: 400/500/700）— 全50HTMLに読み込み済み
- **favicon**: favicon.png（48x48px）— 全51ページに設定済み
- **OGP/Twitter Card**: 全51ページにメタデータ設定済み
- **href="#" 残存**: 0件（全329箇所を解消済み）

---

## 2. ファイル構成と役割

```
cambridge-audio-jp/
├── index.html              (2,158行) ホームページ — 本家に忠実なフルリライト
├── hifi.html               (803行)   Hi-Fiカテゴリページ — 15製品をカテゴリ別グリッド表示
├── headphones.html         (668行)   ヘッドホンカテゴリページ — 2製品
├── speakers.html           (680行)   スピーカーカテゴリページ — Active(L/R+Evo) + SX + Minx
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
├── products/                         製品詳細ページ（37ファイル）
│   ├── lr-x.html                     L/R X — アドバンスド アクティブステレオストリーミングスピーカー
│   ├── lr-m.html                     L/R M — バーサタイル アクティブステレオストリーミングスピーカー
│   ├── lr-s.html                     L/R S — コンパクト アクティブステレオスピーカー
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
│   ├── sx-50.html             (236行) SX-50 — コンパクト ブックシェルフスピーカー
│   ├── sx-60.html             (236行) SX-60 — スタンドマウント ブックシェルフスピーカー
│   ├── sx-80.html             (236行) SX-80 — フロアスタンディングスピーカー
│   ├── minx-min-12.html       (234行) Minx Min 12 — BMRドライバー搭載 超コンパクトスピーカー
│   ├── minx-min-22.html       (234行) Minx Min 22 — デュアルドライバー コンパクトスピーカー
│   ├── minx-xl.html           (235行) Minx XL — フラッグシップ ブックシェルフスピーカー
│   ├── minx-x201.html         (235行) Minx X201 — 200W コンパクトサブウーファー
│   ├── minx-x301.html         (236行) Minx X301 — 300W ハイパフォーマンスサブウーファー
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

日本語フォント: Google Fonts `Noto Sans JP`（400/500/700）を全42ページに読み込み。
フォールバック: `-apple-system`, `BlinkMacSystemFont`, `Hiragino Sans`, `Meiryo`

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

#### index.html ヒーローCTA
- Phase 10で修正: 「詳しく見る」CTA → `speakers.html`（L/Rシリーズ紹介に対応）

#### products/（37製品ページ）
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
- `#sitemap` セクションに全ページリンク一覧（全42ページ）
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

### 3.8 スクロールアニメーション（Phase 11で追加）

**仕組み**: CSS初期状態（opacity:0等）+ IntersectionObserverで `--visible` クラスを付与してアニメーション発火。

**アニメーションクラス（style.css定義）:**
| クラス | 効果 | 可視クラス |
|--------|------|-----------|
| `.fade-in` | フェードイン + 上にスライド | `.fade-in--visible` |
| `.slide-left` | 左からスライドイン | `.slide-left--visible` |
| `.slide-right` | 右からスライドイン | `.slide-right--visible` |
| `.scale-up` | 拡大フェードイン | `.scale-up--visible` |

**IntersectionObserver設定（main.js）:**
- `threshold: 0` — 1pxでも交差したら発火
- `rootMargin: '100px 0px 100px 0px'` — ビューポートの上下100px外で先行検出
- スクロール位置復元対応: `requestAnimationFrame` で遅延チェック、ビューポート上方の要素は即時表示
- `prefers-reduced-motion` 対応済み（style.css）

**各ページへの適用:**
- index.html: 18要素（セクション見出し、カルーセル、ブランドストーリー画像等）
- カタログページ（hifi等）: ページ見出し + category-section に `fade-in`
- 製品ページ（products/*）: hero画像 `fade-in`、hero情報 `slide-right`、feature-row/spec/related `fade-in`
- products.html: カテゴリカードに `scale-up`

### 3.9 画像

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
- **外部依存**: Google Fonts（Noto Sans JP）のみ。ライブラリ・フレームワーク不使用

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

1. **products.htmlの独自構造**: 他のカタログページ（hifi, headphones等）と異なる自己完結型デザイン。統一するかは判断が必要
2. **画像の最適化**: 一部画像が大きめ。WebP圧縮率の調整や、srcset/sizes属性によるレスポンシブ画像対応は未実施
3. **SX/Minx製品画像**: 現在プレースホルダー画像（800x600 テキストのみ）。実画像への差し替えが必要

### 5.2 解決済みの課題（GitHub Issues — 全12件クローズ済み）

| Issue | 内容 | Phase | コミット |
|-------|------|-------|---------|
| #1 | スピーカーページの遷移バグ（L/Rカード → evo-one.htmlを参照） | Phase 9 | `a5b08ef` |
| #2 | L/Rスピーカー製品ページ未実装（lr-x/m/s.html が未作成） | Phase 9 | `a5b08ef` |
| #3 | トップページ ヒーローCTAリンク不正（products.html → speakers.htmlに修正） | Phase 10 | `7639263` |
| #4 | スピーカーラインナップ拡充 — SX 3製品 + Minx 5製品の新規ページ | Phase 12 | `fef3abc` |
| #5 | モバイルメニュー QA — dead code削除 + 全ページ動作確認 | Phase 12 | `cfa1601` |
| #6 | OGP/Twitter Card メタデータ — 全43ページに追加 | Phase 12 | `a49d9d0` |
| #7 | favicon 作成 — 48x48px PNG + 全43ページに設定 | Phase 12 | `6a150e3` |
| #8 | フォント品質向上 — Noto Sans JP 全42 HTMLに非同期ロード | Phase 11 | `af5f094` |
| #9 | パフォーマンス向上 — LCP 826ms→67ms | Phase 11 | `81d4edb` |
| #10 | アクセシビリティ — skip-link/aria-current/コントラスト比 | Phase 11 | `0a70bd0` |
| #11 | エラーページ — 404.html 新規作成 | Phase 11 | `d40f99f` |
| #12 | アニメーション — IntersectionObserver 全43ページ | Phase 11 | `2b1a7be` |
| #13 | カラースウォッチ機能実装 — 10製品ページ + 162カラーバリアント画像 | Phase 15 | `fe50e34` |
| #14 | AXA25 英語テキスト翻訳漏れ | Phase 14 | `4f1dfab` |
| #15 | CXA81 MkII 英語テキスト翻訳漏れ | Phase 14 | `4f1dfab` |
| #16 | EXA100 英語テキスト翻訳漏れ | Phase 14 | `4f1dfab` |
| #17 | MXW70 レイアウト不整合 — CSSクラス修正 | Phase 15 | `fe50e34` |
| #18 | MXN10 レイアウト不整合 — CSSクラス修正 | Phase 15 | `fe50e34` |
| #19 | CXN100 英語テキスト翻訳漏れ | Phase 14 | `4f1dfab` |
| #20 | EXN100 英語テキスト翻訳漏れ | Phase 14 | `4f1dfab` |
| #21 | AXC35 英語テキスト翻訳漏れ | Phase 14 | `4f1dfab` |
| #22 | CXC 英語テキスト翻訳漏れ | Phase 14 | `4f1dfab` |
| #23 | DacMagic 200M レイアウト不整合 — CSSクラス修正 | Phase 15 | `fe50e34` |
| #24 | Alva Solo レイアウト不整合 — CSSクラス修正 | Phase 15 | `fe50e34` |
| #25 | Alva Duo レイアウト不整合 — CSSクラス修正 | Phase 15 | `fe50e34` |
| #26 | Alva ST レイアウト不整合 — CSSクラス修正 | Phase 15 | `fe50e34` |
| #27 | about.html expertise セクション レイアウト改善 | Phase 15 | `fe50e34` |

### 5.3 Phase 11 で解決済みの改善候補（全5件完了）

| # | 改善項目 | 対応内容 | コミット |
|---|---------|---------|---------|
| 1 | Google Fonts (Noto Sans JP) | 全42 HTMLに `<link>` 追加、style.css + index.html の font-family 更新 | `af5f094` |
| 2 | Lighthouse パフォーマンス | Google Fonts非同期化、preload(hero+font)、fetchpriority、decoding="async"、大画像圧縮。LCP 826ms→67ms (91.9%改善) | `81d4edb` |
| 3 | アクセシビリティ改善 | skip-link全42HTML追加、aria-current="page"、コントラスト比修正(#888→#666以上、rgba 0.4→0.7)、見出し階層修正、カルーセルkeyboard操作+日本語aria-label | `0a70bd0` |
| 4 | 404エラーページ | `404.html` 新規作成（526行、インラインCSS自己完結型、ヘッダー/フッター完備） | `d40f99f` |
| 5 | アニメーション/トランジション | 全43ページにスクロールアニメーション追加（fade-in/slide-left/right/scale-up） | `2b1a7be` |
| 5b | アニメーション不具合修正 | legacy code削除、Observer threshold:0/rootMargin:100px最適化、スクロール復元対応 | `31a9b28` |

### 5.4 残存改善候補（優先度低）

- **srcset/sizes**: レスポンシブ画像対応（現在は単一webpのみ）
- **products.htmlの構造統一**: 他カタログページと異なる独自デザインの統一検討
- **SX/Minx実製品画像**: プレースホルダーから本番画像への差し替え

### 5.5 開発上の注意事項

1. **CSSの自己完結性を維持**: 新規ページ追加時は必ずインライン `<style>` ブロックに全CSSを含める。style.cssに依存するレイアウトCSSを追加しない
2. **テンプレート参照**: 新しい製品ページを作成する場合は `products/cxc.html`（209行）をテンプレートとして使用
3. **パスの相対性**: products/内のファイルは `../` プレフィックスが必要。ルートファイルは直接ファイル名
4. **フッター/ヘッダーの一貫性**: 全ページで共通のヘッダーナビ5項目（Hi-Fi / ヘッドホン / スピーカー / アクセサリー / ブランドストーリー）とフッター4カラム（製品 / サポート / ブランド / 法的情報）を維持
5. **フォントファイル**: fonts/ディレクトリのwoff2はローカルに存在。外部CDNからの読み込みではない
6. **SNSリンク**: 外部URLには必ず `target="_blank" rel="noopener noreferrer"` を付与
7. **アニメーションクラス**: 新規セクション追加時は `fade-in` 等のクラスを付与すること。CSSの初期状態は `opacity:0` のため、クラスなしだとJSが発火しない
8. **Google Fonts**: 新規HTML作成時は `<head>` に Noto Sans JP の `<link>` 3行を忘れずに追加
9. **Legacy support code禁止**: main.jsでインラインstyleで `opacity:0` を設定するパターンは使わない（CSS specificity問題の原因）
10. **skip-link**: 新規HTML作成時は `<body>` 直後に `<a href="#main-content" class="skip-link">メインコンテンツへスキップ</a>` を追加、`<main>` に `id="main-content"` を設定
11. **aria-current="page"**: ナビゲーションのアクティブリンクには `aria-current="page"` を付与
12. **Google Fonts非同期**: `<link>` は `media="print" onload="this.media='all'"` + `<noscript>` フォールバックで読み込み

### 5.6 プロジェクトの実行方法

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
# → 43 (42ページ + 404.html)
```

---

## 2026-02-17 作業記録

### 処理したIssue
- **Phase 11 Issue #1**: Google Fonts (Noto Sans JP) — 全42 HTMLに非同期読み込み追加 (`af5f094`)
- **Phase 11 Issue #2**: Lighthouse パフォーマンス — LCP 826ms→67ms、大画像圧縮、preload/fetchpriority (`81d4edb`)
- **Phase 11 Issue #3**: アクセシビリティ改善 — skip-link、aria-current、コントラスト比修正、keyboard操作 (`0a70bd0`)
- **Phase 11 Issue #4**: 404エラーページ新規作成 (`d40f99f`)
- **Phase 11 Issue #5**: スクロールアニメーション全43ページ追加 (`2b1a7be`) + バグ修正 (`31a9b28`)
- **ドキュメント更新**: PROJECT_CONTEXT.md (`54ed527`)

### 未解決のまま残ったIssue
なし。Phase 11 の全5件が完了。

### 技術的な判断・変更点
1. **Google Fonts非同期化**: `media="print" onload="this.media='all'"` パターン + `<noscript>` フォールバック（レンダリングブロッキング回避）
2. **IntersectionObserver設定**: threshold:0, rootMargin:'100px 0px 100px 0px' に最適化（ジャンプスクロール・スクロール復元対応）
3. **Legacy support code完全削除**: main.jsのインラインstyle設定パターンはCSS specificity問題を引き起こすため禁止
4. **アクセシビリティ基盤**: skip-link + id="main-content" + aria-current="page" を全ページに追加（今後の新規ページにも必須）

### 既知の問題・注意事項
- **プレス引用カルーセル画像**: index.htmlのプレス引用セクションで2枚の画像が非表示になることがあるが、カルーセルのオフスクリーン画像のため正常動作
- **ローカルとGitリポの2ディレクトリ同期**: 変更は必ず `/Users/kenzo/claude/cambridge-audio-jp/` と `/tmp/test-sites-clone/CMB/` の両方に適用する必要あり
- **products.htmlの独自構造**: 他のカタログページ（hifi等）とデザインパターンが異なる。将来的に統一検討が必要

---

## 2026-02-17 作業記録（Phase 13: UK準拠リデザイン）

### 処理したタスク
- **全37製品ページをUK Cambridge Audioサイト準拠にリデザイン**
  - 製品 #1-3: L/R X, L/R M, L/R S（アクティブスピーカー）
  - 製品 #4-5: Evo One, Evo 150 SE（オールインワン/ストリーミングアンプ）
  - 製品 #6-8: SX-50, SX-60, SX-80（パッシブスピーカー）
  - 製品 #9-13: Minx Min 12/22, XL, X201, X301（コンパクト/サブウーファー）
  - 製品 #14-18: CXN100, CXA81 MkII, CXC, AXA25, AXC35（CX/AXシリーズ）
  - 製品 #19-23: EXA100, EXN100, DacMagic 200M, MXN10, MXW70（EX/MXシリーズ）
  - 製品 #24-27: Alva Duo, Alva Solo, Alva ST, Alva MC（ターンテーブル/カートリッジ）
  - 製品 #28-29: Melomania A100, Melomania P100 SE（ヘッドホン）
  - 製品 #30-37: BT100, EX Remote, Memory Foam Tips, Minx Floor/Table/Wall Stands, Replacement Case M1+/Touch（アクセサリー8製品）
- **P100 SEカテゴリサムネイル欠損修正**: `images/products/melomania-p100-se.webp` を追加

### 未解決のまま残ったIssue
なし。全37製品ページのリデザインが完了。

### 技術的な判断・変更点

1. **CSSアーキテクチャの大転換: インラインCSS → 共有 product-page.css**
   - 旧: 各製品HTMLに ~100行のインライン `<style>` ブロック（Phase 2で確立した自己完結型）
   - 新: `css/product-page.css`（810行）に全レイアウトを集約、`pp-` プレフィックスのBEM命名
   - 各HTMLの `<head>` には `<style>` でフォント定義（@font-face 2件）のみ残存
   - **注意**: 今後の新規製品ページは `style.css` + `product-page.css` の2ファイルをリンクすること

2. **pp-classシステム（product-page.css の主要コンポーネント）**
   - `pp-hero`: 2カラムグリッド（画像ギャラリー左 + 製品情報右）
   - `pp-gallery`: 画像切替 + ドットナビゲーション（`is-active` クラスで制御）
   - `pp-swatch`: カラースウォッチ（`--black`, `--white`, `--lunar-grey` 等）
   - `pp-sticky-nav`: 製品名 + アンカーリンク（スクロール追従）
   - `pp-fullwidth-img--hero`: 3:2 ライフスタイル画像
   - `pp-three-col`: 3カラム フィーチャー画像グリッド
   - `pp-text-section`: センター寄せテキストブロック（暗い背景）
   - `pp-quote`: プレスクォート（カルーセル対応）
   - `pp-heading-block`: フルワイド画像 + オーバーレイ大見出し
   - `pp-feature-row`: 画像+テキスト交互レイアウト
   - `pp-specs`: 仕様表（白背景、2カラム）
   - `pp-related`: 関連製品カード（2-3列グリッド）

3. **画像ディレクトリ構造の変更**
   - 旧: `images/products/{product-name}.webp`（1枚のみ）
   - 新: `images/products/{product-name}/`（サブディレクトリに hero-N, lifestyle-N, feature-N, fullwidth-N, feature-col-N, quote-logo-N 等を格納）
   - カテゴリページ用サムネイル `images/products/{product-name}.webp` は維持

4. **UK画像の取得方法**
   - Chrome DevTools MCP でUKサイトを訪問 → snapshot/screenshotで構造分析
   - 画像URLを特定後、`curl` で直接ダウンロード（403回避）
   - WebFetch は UK サイトに対して 403 エラーのため使用不可

5. **ギャラリーJS（2パターン）**
   - メイン製品: `querySelectorAll('.pp-gallery__dot:not([data-quote])')` で画像ドットのみ選択（クォートカルーセルと共存）
   - アクセサリー（クォートなし）: `querySelectorAll('.pp-gallery__dot')` でシンプルに選択

6. **除外セクション（ユーザー指示）**
   - 星評価（Find a retailer 付近の ★ マーク）
   - Reviews セクション（ページ下部のユーザーレビュー）

### 既知の問題・注意事項
- **2ディレクトリ同期**: ローカル `/Users/kenzo/claude/cambridge-audio-jp/` と Git `/tmp/test-sites-clone/CMB/` は rsync で同期。必ず両方に反映すること
- **product-page.css の単一管理**: 全37製品が依存するため、変更時は全ページへの影響を確認すること
- **products.htmlの独自構造**: カテゴリページ（hifi.html等）と異なるデザインパターンが残存（優先度低）
- **SX/Minx製品画像**: UK画像に置換済み。旧プレースホルダー画像は不要
- **Git最終コミット**: `75159b7` (main branch, pushed to Kenzokono/Test-Sites)

---

## 2026-02-18 作業記録（Phase 14: 翻訳修正 + CSSクラス正規化）

### 処理したタスク
- **Phase 14**: Hi-Fi 7製品ページ（CXN100, CXA81 MkII, CXC, AXA25, AXC35, EXA100, EXN100）の英語テキスト約143箇所を日本語に全文翻訳
- **CSSクラス正規化**: exa100, exn100, axc35 の3ファイルで `pp-hero__*` → `pp-info__*` に統一（product-page.cssの定義と整合）
- **QA指摘修正**: スペック表 "Yes"→"対応" 全7ファイル統一、同梱物スペック値を日本語化、タイトルタグ正規化（axa25）、CSSクラス名ミス修正（exn100: `pp-feature-row__heading`→`__title`）
- **Phase 13アクセサリー画像追加**: Alva MC, BT100, EX Remote, Memory Foam Tips, Minx Stands x3, Replacement Case x2 の製品画像28点をコミット

### 未解決のまま残ったIssue
なし。Phase 14 の全タスクが完了。

### 技術的な判断・変更点
1. **CSSクラス正規化ルール確定**: `pp-hero__info`→`pp-info`, `pp-hero__category`→`pp-info__category`, `pp-hero__name`→`pp-info__name`, `pp-hero__desc`→`pp-info__desc`, `pp-hero__cta`→`pp-info__link`, `pp-hero__features`→`pp-features`。今後の新規ファイルでは `pp-info__*` パターンのみ使用すること
2. **スペック表の"Yes"統一**: 全製品ページで boolean スペック値は「対応」に統一（dacmagic-200m.htmlの先例に従う）
3. **同梱物翻訳**: スペック値であっても同梱物リストは日本語化する方針に確定（"Power cable, Remote control..."→「電源ケーブル、リモコン...」）
4. **タイトルタグ形式**: `[製品名] | Cambridge Audio Japan` が正式パターン。カテゴリ名（"Integrated Stereo Amplifier"等）は含めない

### 既知の問題・注意事項
- **DacMagic 200Mの独自クラスパターン**: Phase 15 Issue #23で修正済み（pp-gallery + pp-info パターンに統一）
- **Git最終コミット**: `7882b15` (main branch, 未push)

---

## 2026-02-18 作業記録（Phase 15: GitHub Issues #13, #17-18, #23-27）

### 処理したIssue

| Issue | 内容 | カテゴリ |
|-------|------|---------|
| #13 | カラースウォッチ機能実装 — 10製品ページにJS追加 + UK CDNから162カラーバリアント画像 | 機能追加 |
| #14-16, #19-22 | 7製品ページ英語翻訳漏れ（Phase 14で解決済み → クローズのみ） | クローズ処理 |
| #17 | MXW70 レイアウト修正 — CSSクラスをproduct-page.css準拠に統一 | レイアウト |
| #18 | MXN10 レイアウト修正 — 同上 | レイアウト |
| #23 | DacMagic 200M レイアウト修正 — 同上 | レイアウト |
| #24 | Alva Solo レイアウト修正 — 同上 | レイアウト |
| #25 | Alva Duo レイアウト修正 — 同上 | レイアウト |
| #26 | Alva ST レイアウト修正 — 同上 | レイアウト |
| #27 | about.html expertise セクション改善 — story-block パターンに変換 | レイアウト改善 |

### 未解決のまま残ったIssue
なし。GitHub Issues #1〜#27 全件クローズ済み。

### 技術的な判断・変更点

1. **レイアウト修正6件の共通パターン（#17, #18, #23-26）**
   - 根本原因: Phase 13リデザイン時にHTMLのCSSクラス名がproduct-page.cssの定義と不一致
   - 修正: `pp-hero__gallery`→`pp-gallery`, `pp-hero__main-image`→`pp-gallery__main`, `pp-text-block`→`pp-text-section`, `pp-fullwidth`→`pp-fullwidth-img`, `pp-twin`→`pp-feature-row`, `pp-quotes`→`pp-quote`, `pp-sticky-nav__links`→`pp-sticky-nav__nav` 等
   - 参照ファイル: `products/cxn100.html`（Phase 14で正規化済み）

2. **カラースウォッチJS実装（#13）**
   - UK Cambridge Audio CDNから162枚のカラーバリアント画像をダウンロード（PNG→WebP変換 cwebp -q 85）
   - CDNパス2種: `/sites/default/files/media/images/`（新製品）, `/sites/default/files/ecommece/product/image/`（Minx旧製品）
   - 命名規則: `hero-{color}-{N}.webp`（blackは既存の `hero-{N}.webp` を使用）
   - JS実装: `buildGallery()` でDOM動的再構築 + `bindDots()` でドットナビ連動 + スウォッチクリックハンドラ（regex `/pp-swatch--(\w+)/` でカラー名抽出）
   - 対応製品: LR-X/M/S（6色: black/white/orange/green/blue/walnut）、他7製品（2色: black/white）
   - 既存のquoteカルーセルJS保持（melomania-a100, melomania-p100-se）

3. **about.html改善（#27）**
   - expertise-section（beige/white 2色カード分割）→ story-section（story-block パターン）に変換
   - UK本国サイト `/row/en/about-us` のレイアウトに準拠
   - 不要CSS 14ルール削除（.expertise-section, .expertise-grid, .expertise-card 等）
   - venue-images を2枚→1枚のフルワイド画像に簡素化

### 既知の問題・注意事項
- **melomania-p100-se.html の青スウォッチ**: ~~line 89にインラインstyleの青スウォッチあり~~ → `8ed0e65` で削除済み
- **単色製品のスウォッチ**: ~~SX-50/60/80, Evo One/150 SE, BT100に不要な単色スウォッチあり~~ → `8ed0e65` で削除済み
- **LR-M White #2**: UK CDN上に存在しないため、White カラーは4画像のみ（他カラーは5画像）
- **Git最終コミット**: `8ed0e65` (main branch, pushed)

---

## 2026-02-18 作業記録（Phase 15 コミット＆スウォッチUI修正）

### 処理したIssue
- **Phase 15 未コミット修正のリポジトリ反映**: 19ファイル（レイアウト修正6件 + カラースウォッチJS10件 + about.html + progress.md + PROJECT_CONTEXT.md）をコミット `fe50e34` → push
- **P100 SE 青スウォッチ削除**: melomania-p100-se.html のインラインstyle青スウォッチを削除（UK本国に画像なし、JSのregex非対応）
- **単色製品スウォッチ削除**: SX-50/60/80, Evo One/150 SE, BT100 の6ファイルから不要な単色スウォッチHTML削除 → コミット `8ed0e65` → push
- **GitHub Issues #13, #17, #18, #23-27**: 各Issueにコミットハッシュ付き検証完了コメントを追加

### 未解決のまま残ったIssue
なし。GitHub Issues #1〜#27 全件クローズ済み、全件リポジトリにコミット反映済み。

### 技術的な判断・変更点
1. **スウォッチ表示ポリシー**: カラバリが1色のみの製品にはスウォッチUIを表示しない（切替先がないため不要）
2. **インラインstyleスウォッチの排除**: `pp-swatch--{color}` クラスを持たないインラインstyleスウォッチはJSのregex `/pp-swatch--(\w+)/` にマッチしないため動作しない。今後は必ず `pp-swatch--{color}` クラスで色を指定すること
3. **Phase 15修正が未コミットだった根本原因**: 前セッションでワーキングディレクトリに修正を適用後、git commitを実行せずにセッションが終了。今後は必ずセッション終了前にコミット状態を確認すること

### 既知の問題・注意事項
- **LR-M White #2**: UK CDN上に存在しないため、Whiteカラーは4画像のみ（他カラーは5画像）
- **残存改善候補（優先度低）**: srcset/sizes対応、products.html構造統一
