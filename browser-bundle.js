import "@default-js/defaultjs-extdom"
import GLOBAL from "@default-js/defaultjs-common-utils/src/Global";
import HTMLRendererElement from "./src/js/HTMLRendererElement";

GLOBAL.defaultjs = GLOBAL.defaultjs || {};
GLOBAL.defaultjs.html = GLOBAL.defaultjs.html || {};
GLOBAL.defaultjs.html.HTMLRendererElement = GLOBAL.defaultjs.html.HTMLRendererElement || HTMLRendererElement;
