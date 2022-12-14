require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid clog tackle spray green note praise punch harvest merry fog tray'; 
let testAccounts = [
"0x5478002c1ea7323e36a1f7b8e10f27798f63cdf972e432d83bce9e2a2ac1828a",
"0x85f2148fe4c4369d02396e33a72ccaecad0bb0b5bb24a855d689fec95796a4c8",
"0x60110e225f05575c155f7a8d4e50b2da96684ca9fb7daa1f09822bc62ce259d3",
"0x795a4def9a8fa0fdeee553d2fc950ea4a384d26fa54de8493353d6e08c084674",
"0x1909e66899f673fe0ef83034a2f93b5102e74038595dc36eed25bcd9900dec2b",
"0xec07d4f99ed75c319e8ac76e7372c48dab8e49a54c0c06f5d9319f54fcecfcfb",
"0x520aa4837cfc4eb32af9295f8352e37baeda56ac5111e1fcdc55f07797b79884",
"0x7ac9afff033d072b4eb913b8d7b8926544d6c122632dfad82f55e2659a5cf240",
"0xace8303600adc1c45b46c6f13a9386bba0ed93bbb28049e35f2140b8a29fb507",
"0x654637b5243ed6b19335ac23b08cf493860fdcf9f524c082b60e8c2c55c6bca7"
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

