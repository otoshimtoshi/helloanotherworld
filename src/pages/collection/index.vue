<template>
  <main class="pages">
    <section class="inner">
      <div>
        <h1 class="title en">Collection</h1>
        <h2 class="sub-title">作品集</h2>
      </div>
      <ul class="articles">
        <li
          class="article-item"
          v-for="(article, index) in collectionInfo"
          :key="index"
        >
          <article :id="`article${index}`" @click="onClickArticle(article.id)">
            <div class="article-images">
              <div class="article-image pc">
                <div
                  class="article-image-bg"
                  :style="`background-image:url(${article.pcSrc})`"
                />
                <div class="article-image-label">
                  <span>S</span>
                  <span>H</span>
                  <span>O</span>
                  <span>W</span>
                  <span>&nbsp;</span>
                  <span>T</span>
                  <span>H</span>
                  <span>I</span>
                  <span>S</span>
                </div>
              </div>
              <div class="article-image sp">
                <div
                  class="article-image-bg"
                  :style="`background-image:url(${article.spSrc})`"
                />
                <div class="article-image-label">
                  <span>S</span>
                  <span>H</span>
                  <span>O</span>
                  <span>W</span>
                  <span>&nbsp;</span>
                  <span>T</span>
                  <span>H</span>
                  <span>I</span>
                  <span>S</span>
                </div>
              </div>
            </div>
            <div>
              <h3>{{ article.title }}</h3>
              <div>{{ article.description }}</div>
            </div>
          </article>
        </li>
      </ul>
    </section>
    <Pointer />
  </main>
</template>

<script setup lang="ts">
import { useNuxt2Meta } from '#app'
import { useMetaInfo } from '~~/src/composable/useMetaInfo'
import { useCollectionInfo } from '~~/src/composable/useCollectionInfo'

const { getMetaInfo } = useMetaInfo()
const { collectionInfo } = useCollectionInfo()
const router = useRouter()
const metaInfo = getMetaInfo('collection')

useNuxt2Meta(() => ({
  title: metaInfo?.title,
  meta: metaInfo?.meta
}))

const onClickArticle = (id: string) => {
  router.push(`/collection/${id}/`)
}
</script>
