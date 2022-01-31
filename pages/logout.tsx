import Head from "next/head";
import ContentContainer from "../components/ContentContainer";
import { dadJokes, randomNumberGenerator } from "../utils/dadJokes";

export default function Logout() {
    return ( 
        <>
            <Head>
                <title>Logged out</title>
            </Head>
            <ContentContainer>
                <div className="w-3/4 max-w-4xl">
                    <h1 className="font-montserrat font-bold text-2xl">You&apos;re logged out. Thanks for stopping by!</h1>
                    <p className="my-3">Here&apos;s a dad joke for the road.</p>
                    <button className="rounded-lg bg-gray-200 text-lg font-semibold font-montserrat px-3 py-1 hover:bg-cyan-600 hover:text-white transition" onClick={() => alert(dadJokes[randomNumberGenerator()])}>Joke Button</button>
                </div>
            </ContentContainer>
        </>)
}