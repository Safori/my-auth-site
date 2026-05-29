'use client'

import { useState } from 'react'
import { supabase } from '../../lib/supabase'

export default function RegisterPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleRegister() {
    const { error } = await supabase.auth.signUp({
      email,
      password,
    })

    if (error) {
      alert(error.message)
    } else {
      alert('注册成功！请检查邮箱确认邮件，然后再登录。')
    }
  }

  return (
    <main style={{ padding: 40, fontFamily: 'Arial, sans-serif' }}>
      <h1>注册账号</h1>

      <div style={{ marginBottom: 10 }}>
        <input
          placeholder="请输入邮箱"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ padding: 8, width: 300 }}
        />
      </div>

      <div style={{ marginBottom: 10 }}>
        <input
          placeholder="请输入密码"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ padding: 8, width: 300 }}
        />
      </div>

      <button onClick={handleRegister} style={{ padding: 8 }}>
        注册
      </button>

      <p>
        已有账号？<a href="/login">去登录</a>
      </p>

      <p>
        <a href="/">返回首页</a>
      </p>
    </main>
  )
}