import '../styles/globals.css'
import '../styles/nprogress.css'
import type { AppProps } from 'next/app'
import NProgress from 'nprogress'
import { useEffect } from 'react'

export const progress = NProgress.configure({
  showSpinner: false,
})

function MyApp({ Component, pageProps, router }: AppProps) {
  useEffect(() => {
    const handleStart = (_: string, { shallow }: { shallow: boolean }) => {
      if (!shallow) {
        progress.start()
      }
    }
    const handleStop = () => {
      progress.done()
    }

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleStop)
    router.events.on('routeChangeError', handleStop)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleStop)
      router.events.off('routeChangeError', handleStop)
    }
  }, [router])
  return <Component {...pageProps} />
}

export default MyApp
