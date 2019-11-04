module.exports = { 
    presets: [
      ['@babel/preset-env', { targets: ['node 6'] }],
    ],
    plugins: [
      ['@babel/plugin-transform-classes', { loose: true }],
      ['@babel/plugin-transform-destructuring', { loose: true }],
      ['@babel/plugin-transform-spread', { loose: true }] ,
      ['@babel/plugin-syntax-import-meta'],
      ["@babel/plugin-transform-runtime"] 
    ],
    env: { 
     
      mjs: {
        presets: [
          ['@babel/preset-env', { modules: 'commonjs' }],
        ], 
      },
    },
  };