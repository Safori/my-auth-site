'use client'

import { useState } from 'react'
import { supabase } from '../../lib/supabase'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  async function handleLogin() {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      alert(error.message)
    } else {
      router.push('/dashboard')
    }
  }

  return (
    <main style={{ padding: 40, fontFamily: 'Arial, sans-serif' }}>
      <h1>登录</h1>

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

      <button onClick={handleLogin} style={{ padding: 8 }}>
        登录
      </button>

      <p>
        没有账号？<a href="/register">去注册</a>
      </p>

      <p>
        <a href="/">返回首页</a>
      </p>
    </main>
  )
}