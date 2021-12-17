import Link from "next/link";
import { FC } from "react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import * as anchor from "@project-serum/anchor";

import { SolanaLogo } from "components";
import { MintSection } from "./MintSection";
import { config } from "./config";
import styles from "./index.module.css";

const treasury = new anchor.web3.PublicKey(config.TREASURY_ADDRESS!);

const candyMachineConfig = new anchor.web3.PublicKey(
  config.CANDY_MACHINE_CONFIG!
);

const candyMachineId = new anchor.web3.PublicKey(config.CANDY_MACHINE_ID!);

const startDateSeed = parseInt(process.env.REACT_APP_CANDY_START_DATE!, 10);

const txTimeout = 30000; // milliseconds (confirm this works for your project)

export const CandyMachineMintView: FC = ({}) => {
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
            <div className="text-sm breadcrumbs">
              <ul className="text-xl">
                <li>
                  <Link href="/">
                    <a>Solarity OS</a>
                  </Link>
                </li>
                <li>
                  <span className="opacity-40">Metaverse Mint</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex-none">
            <WalletMultiButton className="btn btn-ghost" />
          </div>
        </div>

        <div className="text-center pt-2">
          <div className="hero min-h-16 py-20">
            <div className="text-center hero-content">
              <div className="max-w-lg">
                <h1 className="mb-5 text-5xl">
                  Mint Your Own Metaverse 
                </h1>

                <p className="mb-5">
                  Buy a planet, select the size, and we think about everything else. <br /><br />
                  It uses{" "}
                  <a
                    href="/"
                    target="_blank"
                    className="link font-bold"
                    rel="noreferrer"
                  >
                    a NFT-DAO governance
                  </a>{" "}
                  based on the planet land ownership to provide the best organization for your VR world.
                </p>
              </div>
            </div>
          </div>

          <div>
            <MintSection
              candyMachineId={candyMachineId}
              config={candyMachineConfig}
              startDate={startDateSeed}
              treasury={treasury}
              txTimeout={txTimeout}
            />
          </div>

          <div className="max-w-xl mx-auto">
            <h1 className="mb-5 mt-16 text-5xl">Description:</h1>

            <p>
              You can test this Candy Machine mint on Devnet.
              <br />
              Switch to Devnet in <code>src/pages/_app.tsx</code> file. And run
              app locally.
            </p>
            <br />
            <p>
              Edit <code>src/views/CandyMachineMintView/config.ts</code> to use
              your own Candy Machine.
              <br /> You can read details about variables on{" "}
              <a
                href="https://github.com/exiled-apes/candy-machine-mint#environment-variables"
                target="_blank"
                rel="noreferrer"
                className="link hover:underline"
              >
                exiled-apes/candy-machine-mints Github
              </a>
            </p>
            <br />
            <p>
              Always set custom RPC server for the final mint site. <br />
              You can do it here: <code>src/pages/_app.tsx</code>
              <br />
              Otherwise, Solana can ban your website for overusing RPC server.
              You dont want it in the middle of your mint 😳
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
