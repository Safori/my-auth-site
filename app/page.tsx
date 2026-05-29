export default function Home() {
  return (
    <main style={{ padding: 40, fontFamily: "Arial, sans-serif" }}>
      <h1>欢迎来到我的网站</h1>

      <p>
        这是一个带有注册和登录功能的简单网站。
      </p>

      <p>
        用户可以注册账号，登录后进入网站内部页面。
      </p>

      <div style={{ marginTop: 20 }}>
        <a href="/register" style={{ marginRight: 20 }}>
          注册
        </a>

        <a href="/login">
          登录
        </a>
      </div>
    </main>
  );
}