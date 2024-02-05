import type { StorybookConfig } from '@storybook/react-vite'
import * as path from 'path'
import { mergeConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

const config: StorybookConfig = {
    stories: [
        '../../src/**/*.mdx',
        '../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-onboarding',
        '@storybook/addon-interactions',
    ],
    framework: {
        name: '@storybook/react-vite',
        options: {
            builder: {
                viteConfigPath: path.resolve(
                    __dirname,
                    '../..',
                    'vite.config.ts'
                ),
            },
        },
    },
    core: {
        builder: '@storybook/builder-vite',
    },
    typescript: {
        reactDocgenTypescriptOptions: {
            compilerOptions: { noUnusedLocals: false },
        },
    },
    docs: {
        autodocs: 'tag',
    },
    async viteFinal(config) {
        return mergeConfig(config, {
            plugins: [tsconfigPaths()],
        })
    },
    staticDirs: ['../../public'],
}
export default config
