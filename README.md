# defaultjs-html-renderer

- [defaultjs-html-renderer](#defaultjs-html-renderer)
  - [Intro](#intro)
  - [How to include](#how-to-include)
  - [How to use](#how-to-use)
  - [Overview of all Attributes](#overview-of-all-attributes)
  - [How do define a template](#how-do-define-a-template)

## Intro

This a web component, that allows you, to render a html file or a [template file](https://github.com/default-js/defaultjs-template-language#readme) into your website. The rendering would be executed dynamicly on client at brower. This supports a easy way of client side rendering, additial by using remote data.

## How to include

**NPM**

```javascript
//import html renderer element
import { HTMLRendererElement } from "@default-js/defaultjs-html-renderer"
```

**Script Tag**

```html
<html>
    <head> ...</head>
    <body>   
        <d-renderer template="template.tpl.html"></d-renderer>

        //script file is located at dist directory
        <script type="application/javascript" src="/path/to/browser-bundle-defaultjs-html-renderer.min.js" />   
    </body>
</html>
```

## How to use

Include the `d-renderer` tag into your html body and 

- define the path to a template by attribute `template`.
- define a selector of a `HTMLTemplateElement` by attribute `template`.
- define a template as content of `d-renderer`.

```html
<d-renderer template="/path/to/template/file.tpl.html"></d-renderer>
<d-renderer template="#MyTemplate"></d-renderer>
<d-renderer>
    <!-- use content as template definition -->
</d-renderer>
```

## Overview of all Attributes

Attribute        | Default   | Description
-----------------|-----------|---------
`template`       |           | `URL string` or `dom selector string`
`render-mode`    | `replace` | Defines, how the rendered content be included. Values [`append`, `prepend`, `replace`, `self-replace`]
`data`           |           | `URL string` to load additional data
`condition`      |           | define an `Expression`, under what condition the renderer would be executed
`initial-run`    | `true`    | if the value `false`, you must execute the rendering by javascript or by an `Event` <- see other attributes
`include-only`   |           | if this attribute präsent, then the renderer would include the template without processing
`listen-event`   |           | define an `Event`, if this `Event` triggert the renderer would be executed. Combine this with `initial-run=false`
`listen-element` |           | define a `dom selector string` on witch element an `event` be observed
`trigger-event`  |           | define an `Event` there be triggered if the rendering process finished

```html
<d-renderer template="/path/to/template/file.tpl.html" data="/path/to/data/file.json" render-mode="[append|prepand|replace|replace-self]"></d-renderer>

<!-- render a template file into the d-renderer tag by replacing the content of d-renderer tag -->
<d-renderer template="/path/to/template/file.tpl.html"></d-renderer>
<d-renderer template="/path/to/template/file.tpl.html" render-mode="replace"></d-renderer>

<!-- render a template file into the d-renderer tag by appending -->
<d-renderer template="/path/to/template/file.tpl.html" render-mode="append"></d-renderer>
<!-- render a template file into the d-renderer tag by prepending -->
<d-renderer template="/path/to/template/file.tpl.html" render-mode="prepend"></d-renderer>

<!-- render a template file and replacing the d-renderer tag with the rendered content -->
<d-renderer template="/path/to/template/file.tpl.html" render-mode="self-replace"></d-renderer>

<!-- fetch and render remote json data with a template file into d-renderer tag -->
<d-renderer template="/path/to/template/file.tpl.html" render-mode="/path/to/data/file.json"></d-renderer>
```

## How do define a template

If you want to learn, `"How to define a template?"`, read the documentation of [defaultjs-template-language](https://github.com/default-js/defaultjs-template-language#readme).