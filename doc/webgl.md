# ドキュメント

## WebGL 1.0 公式チートシート

https://www.khronos.org/files/webgl/webgl-reference-card-1_0.pdf

## シェーダの基礎

https://qiita.com/konweb/items/ec8fa8cd3bc33df14933

- attribute 変数

頂点属性に関するものは、 attribute というキーワードが使われる。頂点シェーダでは、アプリケーションから送らてきたデータを参照するのに attribute 変数を使います。

```
attribute vec3 position;
修飾子、変数の型、変数名
```

- uniform 変数

attribute 変数は頂点属性に関するデータを扱えるのに対し、 uniform 変数 は汎用的なデータをシェーダに送る際に使用する。

```
uniform mat4 mvpMatrix;
修飾子、変数の型、変数名
```

- 精度修飾子 lowp, mediump, highp

```
precision mediump float;
```
