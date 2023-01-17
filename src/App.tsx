import "./App.css";
import Navbar from "./Navbar";

import { ChakraProvider } from "@chakra-ui/react";
import { defaultTheme, ChainProvider } from "@cosmos-kit/react";
import { chains, assets } from "chain-registry";
import { wallets as vectisWallets } from "@cosmos-kit/vectis";
import { wallets as wcv2Wallets } from "@cosmos-kit/walletconnect-v2";
import { wallets as cosmostationWallets } from "@cosmos-kit/cosmostation";
import { wallets as keplrWallets } from "@cosmos-kit/keplr";
import { wallets as leapWallets } from "@cosmos-kit/leap";
import { Chain } from "@chain-registry/types";
import { GasPrice } from "@cosmjs/stargate";
import { Decimal } from "@cosmjs/math";

function App() {
    const signerOptions = {
        signingStargate: (chain: Chain) => {
            switch (chain.chain_name) {
                case "juno":
                    return {
                        gasPrice: new GasPrice(
                            Decimal.fromUserInput("25000", 2),
                            "ujuno"
                        ),
                    };
                default:
                    return undefined;
            }
        },
    };

    return (
        <div className="App">
            <ChakraProvider theme={defaultTheme}>
                <ChainProvider
                    chains={chains}
                    assetLists={assets}
                    signerOptions={signerOptions}
                    wallets={[
                        ...wcv2Wallets,
                        ...keplrWallets,
                        ...cosmostationWallets,
                        ...leapWallets,
                        ...vectisWallets,
                    ]}
                >
                    <div className="left-0 top-0 w-full fixed z-100">
                        <Navbar />
                    </div>
                    <main>
                        <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
                            main area
                        </div>
                    </main>
                </ChainProvider>
            </ChakraProvider>
        </div>
    );
}

export default App;
