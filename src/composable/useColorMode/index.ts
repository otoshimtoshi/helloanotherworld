import { ref } from '#imports'

export const useColorMode = () => {
  /** カラーモード */
  const colorMode = ref<string>('light')
  /** light-mode */
  const className = computed(() => colorMode.value + '-mode')

  onMounted(() => {
    const localColorMode = window.localStorage.getItem('color-mode')
    if (localColorMode !== null && localColorMode !== '') {
      colorMode.value = localColorMode
    }
    addClass()
  })

  /** htmlタグにclassを追加 */
  const addClass = () => {
    document.documentElement.classList.add(className.value)
    setLocalStorage()
  }

  /** htmlタグからclassを削除 */
  const removeClass = () => {
    if (document.documentElement.classList) {
      document.documentElement.classList.remove(className.value)
    } else {
      document.documentElement.className =
        document.documentElement.className.replace(
          new RegExp(className.value, 'g'),
          ''
        )
    }
  }

  /**
   * ローカルストレージに保存
   * key: color-mode
   * value: light || dark
   */
  const setLocalStorage = () => {
    window.localStorage.setItem('color-mode', colorMode.value)
  }

  /** リアクティブなModeを設定 */
  const setMode = (mode: string) => {
    colorMode.value = mode
  }

  /**
   * リアクティブなModeを返却
   * @returns string
   */
  const getMode = () => {
    return colorMode
  }

  /**
   * カラーモード変更
   * @returns void
   */
  const changeMode = (mode: string) => {
    removeClass()
    setMode(mode)
    addClass()
  }

  return {
    getMode,
    changeMode
  }
}
