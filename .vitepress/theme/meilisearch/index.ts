namespace MeiliSearchPlugin {
    export interface Options {
        index: string
    }
}

export function SearchPlugin({ index }: MeiliSearchPlugin.Options) {
    return {
        name: "vitepress-plugin-meilisearch",
        enforce: "pre",
        config: () => {
            return {
                define: {
                    __VITE_MEILISEARCH_INDEX__: JSON.stringify(index),
                }
            }
        },
    };
}
