import Component from "@default-js/defaultjs-html-components/src/Component";
import { toNodeName, define } from "@default-js/defaultjs-html-components/src/utils/DefineComponentHelper";
import { componentEventname } from "@default-js/defaultjs-html-components/src/utils/EventHelper";
import { privateProperty } from "@default-js/defaultjs-common-utils/src/PrivateProperty";
import Renderer from "@default-js/defaultjs-template-language/src/Renderer";
import Template from "@default-js/defaultjs-template-language/src/Template";
import ExpressionResolver from "@default-js/defaultjs-expression-language/src/ExpressionResolver";

const NODENAME = toNodeName("renderer");
const NODENAME_JSONDATA = toNodeName("json-data").toUpperCase();
const NODENAME_REQUEST = toNodeName("request").toUpperCase();

const EVENT_RENDERED = componentEventname("rendered", NODENAME);

const ATTRIBUTE_TEMPLATE = "template";
const ATTRIBUTE_DATA = "data";
const ATTRIBUTE_RENDER_MODE = "render-mode"; //append, prepend, replace, self-replace
const ATTRIBUTE_SHADOWMODE = "shadowmode"; //

const ATTRIBUTE_CONDITION = "condition"; // if condtion true, than render (context???)
const ATTRIBUTE_INITRUN = "initial-run"; // default: true
const ATTRIBUTE_LISTEN_EVENT = "listen-event";
const ATTRIBUTE_LISTEN_ELEMENT = "listen-element"; //default body
const ATTRIBUTE_TRIGGER_EVENT = "trigger-event"; // trigger event on render finished
const ATTRIBUTE_INCLUDE_ONLY = "include-only";

const ATTRIBUTES = [ATTRIBUTE_TEMPLATE, ATTRIBUTE_DATA, ATTRIBUTE_RENDER_MODE, ATTRIBUTE_INCLUDE_ONLY];

const PRIVATE_LISTENER = "listener";
const PRIVATE_DATA = "data";
const PRIVATE_RENDER_TIMEOUT = "renderTimeout";

const findElement = (element, selector) => {
	try {
		return find(selector).first();
	} catch (e) {}
};

const toURL = async (value, context= {}) => {
	value = await ExpressionResolver.resolveText(value, context);
	return new URL(value, location);
}

const loadTemplate = async (element) => {
	const value = element.attr(ATTRIBUTE_TEMPLATE);
	let template = null;
	if (value) {
		template = findElement(element, value);
		if (template instanceof HTMLTemplateElement) return await Template.load(template, false);
		else template = await Template.load(await toURL(value));
	} else if (element.childNodes && element.childNodes.length > 0) template = await Template.load(element.childNodes, false);

	return template;
};

const callRender = (element) => {
	const timeout = privateProperty(element, PRIVATE_RENDER_TIMEOUT);
	if (timeout) clearTimeout(timeout);

	privateProperty(
		element,
		PRIVATE_RENDER_TIMEOUT,
		setTimeout(() => {
			privateProperty(element, PRIVATE_RENDER_TIMEOUT, null);
			element.render();
		}, 100),
	);
};

const getListenElements = (renderer) => {
	const selector = renderer.attr(ATTRIBUTE_LISTEN_ELEMENT);
	if (selector) {
		const results = find(selector);
		if (results && results.length > 0) return results;
	}

	return document.body;
};

const addEventObserving = (renderer) => {
	const events = renderer.attr(ATTRIBUTE_LISTEN_EVENT);
	const element = getListenElements(renderer);

	const listener = (event) => {
		renderer.render({ event });
	};

	privateProperty(renderer, PRIVATE_LISTENER, listener);

	element.on(events, listener);
};

const removeEventObserving = (renderer) => {
	const listender = privateProperty(renderer, PRIVATE_LISTENER);
	if (listender) {
		const element = getListenElements(renderer);
		element.removeEventListener(listener);
	}
};

const triggerEvent = (renderer, content) => {
	const events = renderer.attr(ATTRIBUTE_TRIGGER_EVENT);
	if (events) content.trigger(events);
	content.trigger(EVENT_RENDERED);
};

const mergeData = (data1, data2) => {
	return Object.assign({}, data1 ? data1 : null, data2 ? data2 : null);
};

class HTMLRendererElement extends Component {

	static get observedAttributes() {
		return ATTRIBUTES;
	}

	static get NODENAME() {
		return NODENAME;
	}

	#initialized = false;
	#template

	constructor() {
		super();
		if (this.hasAttribute(ATTRIBUTE_SHADOWMODE)) this.attachShadow({ mode: open });
	}

	async init() {
		await super.init();

		if (!this.#initialized) {
			this.#template =  await loadTemplate(this);

			if (this.hasAttribute(ATTRIBUTE_LISTEN_EVENT)) addEventObserving(this);
			if (this.attr(ATTRIBUTE_INITRUN) != "false") await this.render();
			this.#initialized = true;
		}
	}

	async getTemplate() {
		return this.#template;
	}

	async getData() {
		const privateData = privateProperty(this, PRIVATE_DATA);
		if (privateData) return privateData;

		const value = this.attr(ATTRIBUTE_DATA);
		let data = null;
		if (value) {
			data = findElement(this, value);
			if (data) {
				if (data.nodeName == NODENAME_JSONDATA) data = data.json;
				else if (data.nodeName == NODENAME_REQUEST) {
					data = await data.execute({});
					data = await data.json();
				} else if (data instanceof HTMLElement) {
					data = data.textContent;
					if (data && data.trim().length > 0) data = JSON.parse(data);
				}
			} else {
				data = await fetch(await toURL(value));
				data = await data.json();
			}
		}

		return data;
	}

	async setData(data) {
		await this.ready;
		privateProperty(this, PRIVATE_DATA, data);
	}

	async render({ template, data, event } = {}) {
		const container = this.root;

		let context = mergeData(data, event);

		const includeOnly = this.hasAttribute(ATTRIBUTE_INCLUDE_ONLY);
		const condition = await ExpressionResolver.resolve(this.attr(ATTRIBUTE_CONDITION) || "true", context, false);
		if (!condition) return;

		if (template) template = await Template.load(template);
		else template = await this.#template;
		if (!template) return;

		if (!data) data = await this.getData(this);
		if (!data) data = {};

		context = mergeData(context, data);

		let replace = false;
		let mode = this.attr(ATTRIBUTE_RENDER_MODE);
		if (mode == "self-replace") {
			replace = true;
			mode = "replace";
		}

		if (includeOnly) {
			const content = template.importContent();
			if (mode == "prepend") container.prepend(content);
			else if (mode == "append") container.append(content);
			else {
				container.empty();
				container.append(content);
			}
		} else await Renderer.render({ template, data: context, container, mode });

		if (replace) {
			removeEventObserving(this);

			const content = container.content();
			if (content) {
				this.replace(content);
				triggerEvent(this, content);
			} else {
				triggerEvent(this, this.parent());
				this.remove();
			}
		} else triggerEvent(this, this);
	}

	attributeChangedCallback(name, oldValue, newValue) {
		if (this.#initialized && oldValue != newValue && this.isConnected) {
			if (name == ATTRIBUTE_TEMPLATE) loadTemplate(this);
			callRender(this);
		}
	}
}

define(HTMLRendererElement);
export default HTMLRendererElement;
