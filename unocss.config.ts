import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    ['page-link', 'inline-flex justify-center items-center cursor-pointer hover:underline text-blue-600'],
    ['btn', 'px-4 rounded inline-flex justify-center items-center text-white cursor-pointer bg-opacity-60 shadow hover:shadow-md transition duration-300    disabled:cursor-default disabled:bg-gray-500 disabled:opacity-50 disabled:bg-opacity-30 disabled:hover:shadow-transparent active:outline-none focus:outline-none'],
    ['icon-btn', 'inline-flex justify-center items-center cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-blue-600'],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  safelist: 'max-w-800px prose prose-sm m-auto text-left'.split(' '),
})
