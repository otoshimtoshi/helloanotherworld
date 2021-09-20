<template>
  <div>
    <canvas id="mycanvas" ref="mycanvas" />
    <div class="pages">
      <div class="inner">
        <div>
          <h1 class="title">Who i am</h1>
        </div>
        <div class="content">
          <div>Hi! My name is Masatoshi Otoshi.</div>
          <div>I'm a front-end developer based in Tokyo.</div>
          <div>Please contact me via DM on SNS.</div>
        </div>
        <div>
          <h2 class="sub-title">自己紹介</h2>
        </div>
        <div class="content">
          <div>落司 聖稔(おとし まさとし)</div>
          <div>東京でフロントエンドディベロッパーとして活動しています。</div>
          <div>GithubやTwitterでご連絡ください。</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  useContext,
  reactive,
  toRefs,
  useMeta,
  ref,
  onMounted
} from '@nuxtjs/composition-api'
import {
  Scene,
  WebGL1Renderer,
  TextureLoader,
  PerspectiveCamera,
  Vector3,
  Vector2,
  Clock
} from 'three'
import Fog from '@/composable/fog'

export default defineComponent({
  layout: 'pages',
  setup() {
    const { app } = useContext()
    const state = reactive({
      metaInfo: app.store.getters.getMetaInfo('who-i-am'),
      camera: new PerspectiveCamera(),
      scene: new Scene(),
      fog: new Fog(),
      resolution: new Vector2(),
      clock: new Clock(),
      myReq: 0,
      mycanvas: null as any
    })

    useMeta(() => ({
      title: state.metaInfo?.title,
      meta: state.metaInfo?.meta
    }))

    const renderer = ref<WebGL1Renderer>()

    const init = () => {
      state.camera.far = 50000
      state.camera.setFocalLength(24)
    }
    init()

    onMounted(() => {
      const loader = new TextureLoader()
      loader.load('./fog.png', (texture) => {
        state.fog.obj = state.fog.createObj(texture)
        if (state.fog.obj !== null) {
          state.scene.add(state.fog.obj)
        }
      })
      const element: HTMLElement | null = document.getElementById('mycanvas')
      if (element === null) return
      renderer.value = new WebGL1Renderer({
        antialias: true,
        alpha: true,
        canvas: (element as unknown) as HTMLCanvasElement
      })
      state.resolution.set(window.innerWidth, window.innerHeight)
      renderer.value.setPixelRatio(window.devicePixelRatio)
      renderer.value.setSize(state.resolution.x - 44, state.resolution.y - 40)
      renderer.value.setClearColor(0x111111, 1.0)
      state.camera.position.set(0, 0, 1000)
      state.camera.lookAt(new Vector3())
      state.clock.start()
      animate()

      window.addEventListener('resize', onWindowResize)
    })

    const resizeCamera = () => {
      state.camera.aspect = state.resolution.x / state.resolution.y
      state.camera.updateProjectionMatrix()
    }

    function onWindowResize() {
      if (renderer.value === undefined) return
      state.mycanvas.width = state.resolution.x
      state.mycanvas.height = state.resolution.y
      resizeCamera()
      renderer.value.setSize(window.innerWidth - 44, window.innerHeight - 44)
    }

    const animate = () => {
      cancelAnimationFrame(state.myReq)
      state.myReq = requestAnimationFrame(animate)
      const time = state.clock.getDelta()
      state.fog.render(time)
      if (renderer.value === undefined) return
      renderer.value.render(state.scene, state.camera)
    }

    return {
      ...toRefs(state)
    }
  },
  // @ts-ignore
  head() {}
})
</script>
