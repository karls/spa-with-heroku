import postcss from 'rollup-plugin-postcss'
import replace from '@rollup/plugin-replace';

const production = process.env.NODE_ENV === "production";

export default {
    input: 'src/main.js',
    output: {
      file: '../server/static/main.js',
      format: 'iife',
    },
    plugins: [
        postcss({
            extract: true,
            minimize: production
        }),
        replace({
            // Replace occurrences of __ENV__ in the JS source
            // with "procuction" if NODE_ENV is "production" and
            // "development" otherwise
            __ENV__: production ? "production" : "development"
        })
    ]
  };
