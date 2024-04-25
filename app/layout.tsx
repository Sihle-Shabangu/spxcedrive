"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {
  DynamicContextProvider,
} from "@dynamic-labs/sdk-react-core";
import { EthersExtension } from "@dynamic-labs/ethers-v5";

import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";
import AppBar from './components/AppBar';



const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <DynamicContextProvider
        settings={{
          // Find your environment id at https://app.dynamic.xyz/dashboard/developer
          environmentId: "c819b407-32e5-41d6-a658-fb42b71c76dc",
          walletConnectorExtensions: [EthersExtension],
          walletConnectors: [EthereumWalletConnectors],
        }}
      >
        <body className={inter.className}>
          <AppBar />

          {children}
        </body>
      </DynamicContextProvider>

    </html>
  );
}


// 
