import { appRouter } from './pages/AppRouter';
import Home from './pages/Home';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
// css 追加
import './App.css';

// ページ情報を定義して appRouter に設定
const pages = [
  { key: 'Home', path: '/', element: <Home /> },
  { key: 'Page1', path: '/page1', element: <Page1 /> },
  { key: 'Page2', path: '/page2', element: <Page2 text="text sample" /> },
];
const router = appRouter(pages);

const App = () => {
  return (
    <>
      {router.navbarLink}
      {/* 位置調整で main で括る */}
      <main>
        <h1>Hello World</h1>
        <p>App.jsx</p>
        {router.browserRouter}
      </main>
    </>
  );
};

export default App;
