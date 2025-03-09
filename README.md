# Taskel

Taskelは効率的なタスク管理と生産性向上のためのモダンなツールです。

## 🌟 特徴

- **シンプルなタスク管理**: 直感的なUIでタスクの作成・編集・完了が簡単
- **モダンな技術スタック**: Next.js (React) とHono (CloudFlare Workers) を活用
- **レスポンシブデザイン**: どのデバイスからでも快適に使用可能
- **カスタマイズ可能**: ユーザーのニーズに合わせた柔軟なワークフロー

## 🛠️ 技術スタック

### フロントエンド
- Next.js 15.2.1
- React 19
- TailwindCSS 4
- TypeScript

### バックエンド
- Hono 4.7.4
- CloudFlare Workers
- TypeScript

## 🚀 始め方

### 必要条件
- [Node.js](https://nodejs.org/) (v18以上推奨)
- [pnpm](https://pnpm.io/) (v10.6.1以上)

### インストール手順

1. リポジトリをクローン
```bash
git clone <repository-url>
cd Taskel
```

2. 依存関係のインストール
```bash
pnpm install
```

3. 開発サーバーの起動

フロントエンド:
```bash
cd frontend
pnpm dev
```

バックエンド:
```bash
cd backend
pnpm dev
```

## 📂 プロジェクト構造

```
Taskel/
├── backend/           # バックエンドAPI (Hono + CloudFlare Workers)
│   ├── src/           # ソースコード
│   └── wrangler.toml  # CloudFlare Workers設定
├── frontend/          # フロントエンドアプリケーション (Next.js)
│   ├── public/        # 静的ファイル
│   └── src/           # ソースコード
└── docs/              # プロジェクトドキュメント
```

## 🧪 テスト

```bash
# テスト実行 (実装予定)
pnpm test
```

## 📝 コントリビューションガイドライン

1. このリポジトリをフォーク
2. 機能追加用のブランチを作成 (`git checkout -b feature/amazing-feature`)
3. 変更をコミット (`git commit -m 'feat: 素晴らしい機能を追加'`)
   - コミットメッセージはConventional Commits 1.0.0のルールに従う
   - 日本語で記述する
4. ブランチをプッシュ (`git push origin feature/amazing-feature`)
5. プルリクエストを作成

## 📜 ライセンス

ISCライセンスの下で配布されています。詳細は`LICENSE`ファイルを参照してください。

## 👥 開発者

[開発チーム名またはユーザー名]

---

*Taskel - シンプルで効率的なタスク管理を実現*