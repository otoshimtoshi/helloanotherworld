<template>
  <main class="pages">
    <section class="inner">
      <div>
        <h1 class="title en">Contact</h1>
        <h2 class="sub-title">お問い合わせ</h2>
      </div>
      <div class="content">
        <div>フォームのご用意ができておりません。</div>
        <div>
          <span>ご依頼・ご相談がありましたら</span>
          <a href="mailto:info@helloanotherworld.com" target="_blank">メール</a>
          <span>までご連絡ください。</span>
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
const metaInfo = getMetaInfo('collecontactction')

useNuxt2Meta(() => ({
  title: metaInfo?.title,
  meta: metaInfo?.meta
}))
</script>
