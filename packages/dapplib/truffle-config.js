require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz argue opera food shoulder riot machine hole coral light army gate'; 
let testAccounts = [
"0x2640650ba95c0292727ee38260b81723c6eb8cc4e2f898b69989de56ee3a6272",
"0x10c2ffaf4f386bcad8e8ea733a00c365bbeff39de87eb4e5f3ce29b1d2025bd4",
"0x5f2c502e0a45b8dd61e635d65cf42325823d2c41efac5674744c159985297815",
"0xaaaf6049be899764df2b2e22dcc36afffe094098dac4e5238722c7cc98f8753e",
"0x4f616a13cd23c61d773a40165c43b8bf4d18455747ca75de4c6e0d5fa32ee11e",
"0x6e5d49b2d44a43ded18e5a4427a9a99fcfc5eda188326d16ef1099c3c46926a7",
"0x9fb1f970e0a599fd24499dcfdfe373cf19de0116691ee0d98bf30f43c32affc6",
"0x3362f3c620d09ab3166219b198934ce3af41705fb1a54889f240aa72f9adb2c1",
"0x3f9c4a1b591ba5d6fccf4cf3639183acfbdbc495d12577407c701e1ef221671b",
"0x49470617a6c906df1193645fab8a78af34cb33c965cf09c91dae7f67c47ec1ab"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

