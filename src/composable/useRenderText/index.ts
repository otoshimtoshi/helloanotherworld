export const useRenderText = () => {
  /** レンダリングテキスト */
  const renderText = useState('renderText', () => 'Hello Another World')

  const route = useRoute()

  const setText = (routeName: string) => {
    switch (routeName) {
      case 'index':
        changeText('Hello Another World')
      case 'who_i_am':
        changeText('Who I Am')
      case 'collection':
        changeText('Collection')
      case 'contact':
        changeText('Contact')
      default:
        changeText('')
    }
  }

  onMounted(() => {
    setText(route.name)
  })

  /**
   * カラーモード変更
   * @returns void
   */
  const changeText = (text: string) => {
    renderText.value = text
  }

  return {
    renderText: readonly(renderText),
    setText
  }
}
