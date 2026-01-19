// app/page.js
import dynamic from "next/dynamic";

// Dynamically load Calculator on the client only
const Calculator = dynamic(() => import("./Calculator"), { ssr: false });

export default function Page() {
  return <Calculator />;
}
