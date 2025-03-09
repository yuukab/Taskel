import { Hono } from 'hono';
import { cors } from 'hono/cors';

const app = new Hono();

// CORSミドルウェアを追加
app.use('/*', cors());

// ヘルスチェックエンドポイント
app.get('/', (c) => {
  return c.json({
    status: 'ok',
    message: 'Taskel API is running'
  });
});

// APIルートのグループ
const api = new Hono();

// タスク関連のエンドポイント (例)
api.get('/tasks', (c) => {
  return c.json({ tasks: [] });
});

// APIルートをメインアプリケーションにマウント
app.route('/api', api);

export default app;