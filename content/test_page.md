---
title: Test markdown features
slug: /Test
---

import TOCInline from '@theme/TOCInline';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Heading {#my-explicit-link-id}

# h1 Heading
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading


## Horizontal Rules

___

---

***

## Typographic replacements

Enable typographer option to see result.

(c) (C) (r) (R) (tm) (TM) (p) (P) +-

test.. test... test..... test?..... test!....

!!!!!! ???? ,,  -- ---

"Smartypants, double quotes" and 'single quotes'

## Emphasis

**This is bold text**

__This is bold text__

*This is italic text*

_This is italic text_

~~Strikethrough~~

## Blockquotes

> Blockquotes can also be nested...
>> ...by using additional greater-than signs right next to each other...
> > > ...or with spaces between arrows.

## Lists

Unordered

+ Create a list by starting a line with `+`, `-`, or `*`
+ Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    * Ac tristique libero volutpat at
    + Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
+ Very easy!

Ordered

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa

1. You can use sequential numbers...
1. ...or keep all the numbers as `1.`

Start numbering with offset:

57. foo
1. bar

## Code

Inline `code`

```
Sample text here...
```

```jsx title="code with title"
function HelloCodeTitle(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

Syntax highlighting
```cpp
#include <iostream>

int main() {
    std::cout << "Hello World!" << std::endl;
    return 0;
}
```

Line numbering
```cpp showLineNumbers
#include <iostream>

int main() {
    std::cout << "Hello World!" << std::endl;
    return 0;
}
```

Line highlighting
```js
function HighlightSomeText(highlight) {
  if (highlight) {
    // highlight-next-line
    return 'This text is highlighted!';
  }

  return 'Nothing highlighted';
}
```

## Tables

| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |

Right aligned columns

| Option | Description |
| ------:| -----------:|
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |

## Links

[link text](https://github.com/dsmtE)

Autoconverted link https://github.com/dsmtE

## Images

![Minion](https://octodex.github.com/images/minion.png)



Like links, Images also have a footnote style syntax

![Alt text][id]

With a reference later in the document defining the URL location:

[id]: https://octodex.github.com/images/dojocat.jpg  "The Dojocat"


## Maths

- $19^{th}$
- $H_2O$
  
When $a \ne 0$, there are two solutions to $(ax^2 + bx + c = 0)$ and they are
$$
x = {-b \pm \sqrt{b^2-4ac} \over 2a}
$$

## [Admonitions](https://docusaurus.io/docs/markdown-features/admonitions)

:::note
Some **content** with _Markdown_ `syntax`.
:::

:::tip
Some **content** with _Markdown_ `syntax`.
:::

:::info
Some **content** with _Markdown_ `syntax`.
:::

:::caution
Some **content** with _Markdown_ `syntax`.
:::

:::danger
Some **content** with _Markdown_ `syntax`.
:::

## Links

[link](#my-explicit-link-id)

## [Details](https://docusaurus.io/docs/next/markdown-features#details)

<details>
  <summary>Toggle me!</summary>
  <div>
    <div>This is the detailed content</div>
    <br/>
    <details>
      <summary>
        Nested toggle! Some surprise inside...
      </summary>
      <div>😲😲😲😲😲</div>
    </details>
  </div>
</details>

## Tabs

<Tabs>
  <TabItem value="apple" label="Apple" default>
    This is an apple 🍎
  </TabItem>
  <TabItem value="orange" label="Orange">
    This is an orange 🍊
  </TabItem>
  <TabItem value="banana" label="Banana">
    This is a banana 🍌
  </TabItem>
</Tabs>

Syncing tab choices

<Tabs groupId="operating-systems">
  <TabItem value="win" label="Windows">Use Ctrl + C to copy.</TabItem>
  <TabItem value="mac" label="macOS">Use Command + C to copy.</TabItem>
</Tabs>

<Tabs groupId="operating-systems">
  <TabItem value="win" label="Windows">Use Ctrl + V to paste.</TabItem>
  <TabItem value="mac" label="macOS">Use Command + V to paste.</TabItem>
</Tabs>

## Table of content [docusaurus](https://docusaurus.io/docs/markdown-features/toc#inline-table-of-contents)
<TOCInline toc={toc} />

## VSCodeExtension

<VSCodeExtension id="ms-vscode.cpptools-extension-pack"/> 
<VSCodeExtension id="twxs.cmake"/> 

## Iconify

<Icon icon="mdi:github" height="48" /> This is a GitHub icon.
