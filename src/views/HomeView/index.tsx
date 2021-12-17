import Link from "next/link";
import { FC } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

import { SolanaLogo } from "components";
import styles from "./index.module.css";

export const HomeView: FC = ({}) => {
  const { publicKey } = useWallet();

  const onClick = () => {};

  return (
    <div className="container mx-auto max-w-6xl p-8 2xl:px-0">
      <div className={styles.container}>
        <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box">
          <div className="flex-none">
            <button className="btn btn-square btn-ghost">
              <span className="text-4xl"><img src="https://i.ibb.co/0GQv3zW/logo-figos.png"/></span>
            </button>
          </div>
          <div className="flex-1 px-2 mx-2">
            <span className="text-lg font-bold">Solarity's OS</span>
          </div>
          <div className="flex-none">
            <WalletMultiButton className="btn btn-ghost" />
          </div>
        </div>

        <div className="text-center pt-2">
          <div className="hero min-h-16 py-20">
            <div className="text-center hero-content">
              <div className="max-w-lg">
                <h1 className="mb-5 text-5xl font-bold">
                  Hello Solarity's World!
                </h1>
                <p className="mb-5">
                  Try now our alpha, and get inside the metaverses operating system!
                  Deploy your own and start building and trading it with friends!
                </p>
                <br></br>
                  <button className="btn btn-primary btn-lg"><a href="ciao.html">Launch App</a> </button>
                <p>
                  {publicKey ? <>Your address: {publicKey.toBase58()}</> : null}
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <h1 className="mb-5 pb-8 text-5xl">Visit:</h1>
            <ul className="text-left leading-10">
              <li className="mb-5">
                <Link href="/gallery">
                  <a className="mb-5 text-4xl font-bold hover:underline">
                    🏞 -- NFT Gallery
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/mint">
                  <a className="mb-5 text-4xl font-bold hover:underline">
                    🍬 -- Mint your Land now!
                  </a>
                </Link>
              </li>
              <li> 
                <Link href="/mint">
                  <a className="mb-5 text-4xl font-bold hover:underline">
                    🍬 -- Create/Import your DAO!
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
