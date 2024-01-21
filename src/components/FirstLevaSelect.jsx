import { useControls } from "leva";
import { Html } from "@react-three/drei"
const IconA = () => <span>IconA</span>;
const IconB = () => <span>IconB</span>;

export default function App() {
  const values = useControls({
    icon: {
      options: { none: "", IconA, IconB }
    }
  });

  return <Html><pre>{JSON.stringify(values)}</pre></Html>;
}