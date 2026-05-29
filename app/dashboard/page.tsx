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
      <h1>欢迎进入网站</h1>

      <p>你已经成功登录。</p>

      <p>
        当前账号：{user?.email}
      </p>

      <p>
        这里是登录后才能看到的页面。以后你可以在这里放文字、资料、图片或其他内容。
      </p>

      <button onClick={handleLogout} style={{ padding: 8 }}>
        退出登录
      </button>
    </main>
  )
}