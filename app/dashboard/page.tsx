'use client'

import { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabase'
import { useRouter } from 'next/navigation'
import type { User } from '@supabase/supabase-js'

export default function DashboardPage() {
  const [user, setUser] = useState<User | null>(null)
  const router = useRouter()

  useEffect(() => {
    async function checkUser() {
      const { data } = await supabase.auth.getUser()

      if (!data.user) {
        router.push('/login')
      } else {
        setUser(data.user)
      }
    }

    checkUser()
  }, [router])

  async function handleLogout() {
    await supabase.auth.signOut()
    router.push('/login')
  }

  return (
    <main style={{ padding: 40, fontFamily: 'Arial, sans-serif' }}>
      <h1>欢迎进入张栋老师的网站</h1>

      <p>您已经成功登录。</p>

      <p>
        当前账号：{user?.email}
      </p>

      <p>
        恩情如山，永远铭记。
      </p>

      <button onClick={handleLogout} style={{ padding: 8 }}>
        退出登录
      </button>
    </main>
  )
}