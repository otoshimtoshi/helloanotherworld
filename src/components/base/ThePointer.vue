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

<style lang="scss" scoped>
.pointer {
  -webkit-transform: translate(-10px, -10px);
  transform: translate(-10px, -10px);
  position: fixed;
  top: -4px;
  left: -4px;
  z-index: 1000;
  pointer-events: none;
  mix-blend-mode: exclusion;
  .pointer_cursor {
    -webkit-transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) 0s;
    transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) 0s;
    -webkit-transition-property: top, left, width, height;
    transition-property: top, left, width, height;
    transition: 0.3s;
    transition-timing-function: ease-out;
    position: absolute;
    width: 10px;
    height: 10px;
    top: 6px;
    left: 6px;
    border-radius: 50%;
    pointer-events: none;
    background: #ffffff;
    mix-blend-mode: exclusion;
  }
  .pointer_isover {
    width: 50px;
    height: 50px;
    top: -18px;
    left: -18px;
    font-weight: 500;
    font-size: 12px;
    line-height: 1;
    text-align: center;
    border: 4px solid rgba(55, 25, 55, 0.2);
  }
  .txt {
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    display: block;
    position: absolute;
    color: #000000;
    top: 50%;
    left: 50%;
    white-space: nowrap;
  }
  .spin {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -6.5rem;
    margin-top: -6.5rem;
    width: 13rem;
    height: 13rem;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;
    -webkit-animation: spin 10s linear infinite;
    animation: spin 10s linear infinite;
  }
}
</style>
