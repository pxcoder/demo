import type { CSSProperties } from 'vue';

/**
 * 设置网页标题
 * @param {string} title 网页标题
 */
export const setHtmlTitle = (title: string) => {
  document.title = title;
};

const camelizeRE = /-(\w)/g;

/**
 * 将中划线风格的字符串转换为驼峰命名风格
 * @param str 字符串
 * @returns 驼峰命名风格的类名
 */
const camelize = (str: string): string => {
  return str.replace(camelizeRE, (_, c: string) => (c ? c.toUpperCase() : ''));
};

/**
 * 获取元素指定样式的值
 * @param el 元素
 * @param styleName 样式名称
 * @returns 样式的值
 */
export const getStyle = (el: HTMLElement, styleName: keyof CSSProperties): string => {
  if (!el || !styleName) return '';

  let key = camelize(styleName);

  if (key === 'float') key = 'cssFloat';

  try {
    const style = el.style[styleName];
    if (style) return style;

    const computed = document.defaultView?.getComputedStyle(el, '');
    return computed ? computed[styleName] : '';
  } catch {
    return el.style[styleName];
  }
};

/**
 * 判断指定元素是否是滚动元素
 * @param el 元素
 * @param isHorizontal 是否是水平方向滚动
 * @returns 是否是滚动元素
 */
export const isScroll = (el: HTMLElement, isHorizontal?: boolean): boolean => {
  const key = (
    {
      undefined: 'overflow',
      true: 'overflow-x',
      false: 'overflow-y',
    } as const
  )[String(isHorizontal)]!;

  const overflow = getStyle(el, key);

  return ['scroll', 'auto', 'overlay'].some(s => overflow.includes(s));
};

/**
 * 获取指定元素的祖先级滚动元素
 * @param el 元素
 * @param isHorizontal 是否是水平方向滚动
 * @returns 滚动的祖先级元素
 */
export const getScrollContainer = (el: HTMLElement, isHorizontal?: boolean): Window | HTMLElement | undefined => {
  let parent: HTMLElement = el;
  while (parent) {
    if ([window, document, document.documentElement].includes(parent)) return window;
    if (isScroll(parent, isHorizontal)) return parent;
    parent = parent.parentNode as HTMLElement;
  }

  return parent;
};
