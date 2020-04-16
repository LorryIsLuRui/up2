module.exports={
    entry: './decorator/index.js',
    output: './decorator/bundle.js',
    module: {
        rules: [
            {
                test: /\.js/,
                exclude: './node_modules',
                use: {
                    loader: 'bable-loader',
                    options: {
                        
                    }
                }
            }
        ]
    }
}