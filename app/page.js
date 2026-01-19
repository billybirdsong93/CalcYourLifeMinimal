import dynamic from "next/dynamic";

// Dynamically load Calculator only on the client
const Calculator = dynamic(() => import("./Calculator"), { ssr: false });

export default function Page() {
  return <Calculator />;
}
