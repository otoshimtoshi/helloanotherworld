<template>
  <main class="pages">
    <section class="inner">
      <div>
        <h1 class="title en">Collection</h1>
        <h2 class="sub-title">作品集</h2>
      </div>
      <ul class="articles">
        <li
          class="article__item"
          v-for="(article, index) in articles"
          :key="index"
        >
          <article :id="`article${index}`" @click="onClickArticle(article.id)">
            <div class="article__images">
              <div
                class="article__image pc"
                :style="`background-image:url(${article.pcSrc})`"
              >
                <div class="article__image__label">
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
              <div
                class="article__image sp"
                :style="`background-image:url(${article.spSrc})`"
              >
                <div class="article__image__label">
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

<script lang="ts">
import {
  defineComponent,
  useContext,
  reactive,
  toRefs,
  useMeta,
  onMounted,
  computed
} from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const { app, route } = useContext()
    const state = reactive({
      metaInfo: app.store.getters.getMetaInfo('collection'),
      sectionStyles: {
        width: 0,
        height: 0
      }
      // articles: app.store.state.collectionInfo
    })

    useMeta(() => ({
      title: state.metaInfo?.title,
      meta: state.metaInfo?.meta
    }))

    const onClickArticle = (id: string) => {
      app.router.push(`/collection/${id}/`)
    }

    onMounted(() => {
      onWindowResize()
      window.addEventListener('resize', onWindowResize)
    })

    const onWindowResize = () => {
      state.sectionStyles.width = document.body.clientWidth
      state.sectionStyles.height = document.body.clientHeight
    }

    return {
      ...toRefs(state),
      onClickArticle
    }
  },
  // @ts-ignore
  head() {}
})
</script>
<style lang="scss" scoped>
img {
  width: 100%;
  height: auto;
}
.articles {
  display: flex;
  flex-wrap: wrap;
  .article__item {
    width: 100%;
    margin-bottom: 40px;
    article {
      width: 100%;
      cursor: pointer;
      .article__images {
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
        opacity: 1;
        transition: 0.2s $easeOutCubic;
        .article__image {
          width: 100%;
          display: block;
          position: relative;
          vertical-align: top;
          background-color: var(--color);
          z-index: 1;
          &::before {
            content: '';
            display: block;
            padding-top: 70%;
            width: 100%;
            height: auto;
          }
          .article__image__label {
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
            transition: 0.2s $easeOutCubic;
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
          transition: 0.2s $easeOutCubic;
          .article__image__label {
            opacity: 1;
            transition: 0.2s $easeOutCubic;
          }
          span {
            transform: scale(1);
            transform-origin: bottom left;
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
        }
        .sp {
          flex: 1;
          max-width: 375px;
        }
      }
    }
  }
}
</style>
