import fs from "fs";
import Stellar from "stellar-sdk";

const fileName = "accounts.json";

fs.writeFileSync(
    fileName, 
    JSON.stringify(
        ["Alice", "Bob"].map(name => {
            const pair = Stellar.Keypair.random();

            return {
                name,
                secret: pair.secret(),
                publicKey: pair.publicKey()
            };
        }
        )
    )
);