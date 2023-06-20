import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { GradientBackgroundCon } from '@/components/QuoteGenerator/QuoteGeneratorElements'


export default function Home() {
  return (  
    <>
      <Head>
        <title>Inspirational Quotes</title>
        <meta name="description" content="Some quotes for your life" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GradientBackgroundCon/>
    </>
  )
}
