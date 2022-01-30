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
<style lang="scss" scoped>
img {
  width: 100%;
  height: auto;
}

.articles {
  display: flex;
  flex-wrap: wrap;

  .article-item {
    width: 100%;
    margin-bottom: 40px;
    article {
      width: 100%;
      cursor: pointer;

      .article-images {
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
        opacity: 1;
        transition: 0.2s $ease-out-cubic;
        .article-image {
          width: 100%;
          display: block;
          position: relative;
          background-color: var(--color);
          &::before {
            content: '';
            display: block;
            padding-top: 70%;
            width: 100%;
            height: auto;
          }
          .article-image-bg {
            transition-property: opacity;
            transition-delay: 0s;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-repeat: no-repeat;
            background-size: cover;
          }
          .article-image-label {
            opacity: 0;
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            color: var(--color);
            border: 5px solid var(--color);
            box-sizing: border-box;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: 0.2s $ease-out-cubic;
            z-index: 10;
          }
          span {
            transform: scale(0.01);
            transition-duration: 0.4s;
            transform-origin: bottom left;
          }
        }
        &:hover {
          opacity: 0.5;
          transition: 0.2s $ease-out-cubic;
          .article-image-label {
            opacity: 1;
            transition: 0.2s $ease-out-cubic;
          }
          span {
            transform: scale(1);
            transform-origin: bottom left;
            text-shadow: 1px 2px 2px var(--text-shadow);
            &:nth-of-type(1) {
              transition-delay: 0;
            }
            &:nth-of-type(2) {
              transition-delay: 0.04s;
            }
            &:nth-of-type(3) {
              transition-delay: 0.08s;
            }
            &:nth-of-type(4) {
              transition-delay: 0.12s;
            }
            &:nth-of-type(5) {
              transition-delay: 0.16s;
            }
            &:nth-of-type(6) {
              transition-delay: 0.2s;
            }
            &:nth-of-type(7) {
              transition-delay: 0.24s;
            }
            &:nth-of-type(8) {
              transition-delay: 0.28s;
            }
            &:nth-of-type(9) {
              transition-delay: 0.32s;
            }
          }
        }
        .pc {
          max-width: 815px;
          margin-right: 16px;
          width: 70%;
          @include mq('medium', max) {
            width: 100%;
            margin-right: 0;
          }
        }
        .sp {
          flex: 1;
          max-width: 375px;
          @include mq('medium', max) {
            display: none;
          }
        }
      }
    }
  }
}
</style>
