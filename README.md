# defaultjs-html-renderer

- [defaultjs-html-renderer](#defaultjs-html-renderer)
- [Intro](#intro)
- [How to include](#how-to-include)
- [How to use](#how-to-use)

# Intro

This a web component, that allows you, to render a html file or a [template file](https://github.com/default-js/defaultjs-template-language#readme) into your website.

# How to include

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

# How to use

Include the `d-renderer` tag into your html body and define the path to a template by attribute `template`. 

***Additional configuration attributes:***
- rendering mode by attribute `mode` and one of the possible values `append`, `prepend`, `replace`, `replace-self`.
- remote json data file by attribute `data`

```html
<d-renderer template="/path/to/template/file.tpl.html" data="/path/to/data/file.json" mode="[append|prepand|replace|replace-self]"></d-renderer>

<!-- render a template file into the d-renderer tag by replacing the content of d-renderer tag -->
<d-renderer template="/path/to/template/file.tpl.html"></d-renderer>
<d-renderer template="/path/to/template/file.tpl.html" mode="replace"></d-renderer>

<!-- render a template file into the d-renderer tag by appending -->
<d-renderer template="/path/to/template/file.tpl.html" mode="append"></d-renderer>
<!-- render a template file into the d-renderer tag by prepending -->
<d-renderer template="/path/to/template/file.tpl.html" mode="prepend"></d-renderer>

<!-- render a template file and replacing the d-renderer tag with the rendered content -->
<d-renderer template="/path/to/template/file.tpl.html" mode="replace-self"></d-renderer>

<!-- fetch and render remote json data with a template file into d-renderer tag -->
<d-renderer template="/path/to/template/file.tpl.html" data="/path/to/data/file.json"></d-renderer>
```