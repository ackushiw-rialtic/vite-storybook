module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  framework: "@storybook/vue3",
  core: {
    builder: "storybook-builder-vite",
  },
  async viteFinal(config, { configType }) {
    config.plugins = config.plugins ?? [];

    const { default: Unocss } = await import('@unocss/vite')
    config.plugins.push(Unocss());

    const { Plugin: ViteFonts } = await import('vite-plugin-fonts')

    config.plugins.push(
      ViteFonts({
        google: {
          families: ["Poppins"],
        },
      })
    );

    return config;
  },
};
