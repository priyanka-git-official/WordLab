import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

export default function App() {
  return (
    <>
      <Navbar title="WordLab" />
      <TextForm heading="Enter the text to analyze below" />
    </>
  );
}