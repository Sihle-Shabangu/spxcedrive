"use client";
import {
  DynamicWidget,
  useDynamicContext,
} from "@dynamic-labs/sdk-react-core";

import { useIsLoggedIn } from "@dynamic-labs/sdk-react-core";

export default function Home() {
  const { primaryWallet } = useDynamicContext();
  const isLoggedIn = useIsLoggedIn()
  const getSigner = async () => {
    const signer = await primaryWallet?.connector.ethers?.getSigner();
    console.log(signer);
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
	<button className="rounded-md px-4 py-2 bg-indigo-600" onClick={(isLoggedIn) ? getSigner : () => {console.log("not Logged In")}}>
		get signers
	</button>
      </div>
    </main>
  );
};
