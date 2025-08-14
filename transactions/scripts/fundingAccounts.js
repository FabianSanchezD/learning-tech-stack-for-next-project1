import axios from "axios";
import accounts from "../accounts.json" with { type: "json" };

const fundAccounts = async accounts => {
    await Promise.all(
        accounts.map(
            async account =>
                await axios.get("/friendbot", {
                    baseURL: "https://horizon-testnet.stellar.org",
                    params: {addr: account.publicKey}
                })
        )
    )
};

fundAccounts(accounts).then(
    () => {
        console.log("All accounts funded");
    }
).catch(error => {
    console.error("Error funding accounts:", error);
});