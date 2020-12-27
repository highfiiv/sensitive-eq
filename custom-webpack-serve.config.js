(async () => {
    // const fetchPromise = fetch('node_modules/buttplug-wasm/dist/web/61e4105dac859589a376.module.wasm');
    // const { instance } = await WebAssembly.instantiateStreaming(fetchPromise);


    // WebAssembly.compileStreaming(fetch('node_modules/buttplug-wasm/dist/web/61e4105dac859589a376.module.wasm'))
    //     .then(function (mod) {
    //         var imports = WebAssembly.Module.imports(mod);
    //         console.log(imports[0]);
    //     });
    // WASM stuff
    // If using typescript, uncomment this declare line
    var __webpack_public_path__;
    var scripts = document.getElementsByTagName( "script" );
    var lastScript = scripts[scripts.length - 1].src;
    __webpack_public_path__ = lastScript.substr(0, lastScript.lastIndexOf('/') + 1);
    // output: {
    //     path: path.resolve('./dist'),
    //     publicPath: '/app/dist/',
    //     filename: 'build.js'
    // }
    console.log(__webpack_public_path__);
    console.log('instance', instance);
})();
console.log('serve custom');
