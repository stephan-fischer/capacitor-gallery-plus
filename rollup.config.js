export default {
    input: 'dist/esm/index.js',
    output: [
        {
            file: 'dist/plugin.js',
            format: 'iife',
            name: 'capacitorGalleryPlus',
            globals: {
                '@capacitor/core': 'capacitorExports'
            },
            sourcemap: true,
            inlineDynamicImports: true
        },
        {
            file: 'dist/plugin.cjs.js',
            format: 'cjs',
            sourcemap: true,
            inlineDynamicImports: true
        }
    ],
    external: ['@capacitor/core'],
    context: 'this'
};
