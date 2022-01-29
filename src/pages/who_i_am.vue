<template>
  <main class="pages">
    <section class="inner">
      <div>
        <h1 class="title en">Who I Am</h1>
        <h2 class="sub-title">自己紹介</h2>
      </div>
    </section>
    <section class="inner">
      <div class="content">
        <div>落司 聖稔(おとし まさとし)</div>
        <div>
          <a href="https://jam-company.co.jp/" target="_blank" rel="nofollow"
            >株式会社<span class="en">JAM</span></a
          >
          <span>に勤めています。</span>
        </div>
        <div>東京でフロントエンドディベロッパーとして活動しています。</div>
        <div>
          <span class="en">
            <a href="https://github.com/otoshimtoshi" target="_blank">Github</a>
          </span>
          <span>や</span>
          <span class="en">
            <a href="https://twitter.com/otoshimtoshi" target="_blank"
              >Twitter</a
            >
          </span>
          <span>もしくは、</span>
          <span>
            <a
              href="https://jam-company.co.jp/contact_com/"
              target="_blank"
              rel="nofollow"
              >株式会社<span class="en">JAM</span>お問合せより</a
            >
          </span>
          <span>ご連絡ください。</span>
        </div>
      </div>
    </section>
    <Pointer />
  </main>
</template>

<script setup lang="ts">
import { useNuxt2Meta } from '#app'
import { useMetaInfo } from '~~/src/composable/useMetaInfo'

const { getMetaInfo } = useMetaInfo()
const metaInfo = getMetaInfo('who_i_am')

useNuxt2Meta(() => ({
  title: metaInfo?.title,
  meta: metaInfo?.meta
}))
</script>
