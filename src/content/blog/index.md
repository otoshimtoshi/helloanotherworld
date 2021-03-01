---
title: Introduction
description: 'Empower your NuxtJS application with @nuxt/content module.'
position: 1
category: Getting started
version: 1.4
fullscreen: false
---

## 目次

**例**

```
# h1 Heading
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading
```

**出力**

# h1 Heading

## h2 Heading

### h3 Heading

#### h4 Heading

##### h5 Heading

###### h6 Heading

---

## 区切り線

**例**

```

---

---

---

```

**出力**

---

---

---

## 特殊記号

**例**

```

(c) (C) (r) (R) (tm) (TM) (p) (P) +-

```

**出力**

(c) (C) (r) (R) (tm) (TM) (p) (P) +-

## 強調

**例**

```
**This is bold text**
_This is italic text_
~~Strikethrough~~
```

**出力**

**This is bold text**

_This is italic text_

~~Strikethrough~~

## 引用

**例**

```
> Blockquotes Sample
>
> > Blockquotes Sample
> >
> > > Blockquotes Sample
```

**出力**

> Blockquotes Sample
>
> > Blockquotes Sample
> >
> > > Blockquotes Sample

## リスト

**例**

```
- Create a list by starting a line with `+`, `-`, or `*`
- Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    - Ac tristique libero volutpat at
    * Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
- Very easy!
```

**出力**

- Create a list by starting a line with `+`, `-`, or `*`
- Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    - Ac tristique libero volutpat at
    * Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
- Very easy!

**例**

```
1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa

1) You can use sequential numbers...
1) ...or keep all the numbers as `1.`
```

**出力**

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa

1) You can use sequential numbers...
1) ...or keep all the numbers as `1.`

**例**

```
57. foo
1. bar
```

**出力**

57. foo
1. bar

## コード

**例**

````
```javascript
var foo = function (bar) {
  return bar++;
};

console.log(foo(5));
```
````

**出力**

```javascript
var foo = function (bar) {
  return bar++
}

console.log(foo(5))
```

## テーブル

**例**

```
| Option | Description |
| ------ | ----------- |
| data   | Description |
| engine | Description |
| ext    | Description |
```

**出力**
| Option | Description |
| ------ | ----------- |
| data | Description |
| engine | Description |
| ext | Description |

**例**

```
| Option | Description |
|:------| -----------:|
| datadatadata   | DescriptionDescription |
| engineengineengine | DescriptionDescriptionDescription |
| extextextextextextext    | DescriptionDescriptionDescriptionDescription |
```

**出力**
| Option | Description |
| :-------------------- | -------------------------------------------: |
| datadatadata | DescriptionDescription |
| engineengineengine | DescriptionDescriptionDescription |
| extextextextextextext | DescriptionDescriptionDescriptionDescription |
