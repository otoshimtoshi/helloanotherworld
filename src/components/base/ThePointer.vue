<!-- pointerコンポーネント -->
<template>
  <div class="pointer">
    <div class="pointer_cursor" :class="{ pointer_isover: isOver }" :style="transformPosition">
      <span v-if="isHome" class="txt">Go Home</span>
      <span v-if="isMore" class="txt">Learn More</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { ElementIdCodes } from '@/script/constants/element-id-codes';

@Component({
  components: {},
})
export default class extends Vue {
  /** マウスのX座標 */
  private mouseX: number = 0;
  /** マウスのY座標 */
  private mouseY: number = 0;
  /** マウスオーバーフラグ */
  private isOver: boolean = false;
  /** 特定のaタグホバーフラグ */
  private isHome: boolean = false;
  /** 特定のaタグホバーフラグ */
  private isMore: boolean = false;
  /** aタグ情報を格納 */
  private aTagEventElement: any;

  /** マウス表示位置制御 */
  get transformPosition(): string {
    return 'transform: translate3d(' + this.mouseX + 'px, ' + this.mouseY + 'px, ' + '0px)';
  }

  /** 各種フラグの初期化 */
  initilize() {
    this.isOver = false;
    this.isHome = false;
    this.isMore = false;
  }

  /**
   * DOMのレンダリング後aタグを全て取得し取得タグのmousemove,mouseover,mouseoutイベント発火時
   * マウス座標を取得、ポインター座標へ取得座標を反映
   *
   */
  mounted() {
    window.addEventListener('mousemove', (e) => {
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;
    });
    if (!this.aTagEventElement) {
      this.aTagEventElement = document.querySelectorAll('a');
    }
    for (let i = 0; i < this.aTagEventElement.length; i++) {
      //マウスホバー時
      this.aTagEventElement[i].addEventListener('mouseover', () => {
        switch (this.aTagEventElement[i].dataset.id) {
          case ElementIdCodes.GO_HOME:
            this.isHome = true;
            this.isOver = true;
            break;
          case ElementIdCodes.LEARN_MORE:
            this.isMore = true;
            this.isOver = true;
            break;
          default:
            this.isOver = true;
        }
      });
      //マウスホバー解除時
      this.aTagEventElement[i].addEventListener('mouseout', () => {
        this.initilize();
      });
    }
  }
}
</script>
