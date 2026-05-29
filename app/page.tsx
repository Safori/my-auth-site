export default function Home() {
  return (
    <main style={{ padding: 40, fontFamily: "Arial, sans-serif" }}>
      <h1>欢迎来到张栋老师的网站</h1>

      <p>
        李鑫鸣倾力制作。
      </p>

      <p>
        目前的功能是用户可以注册账号，登录后进入网站内部页面。
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