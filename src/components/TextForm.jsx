import { useState } from "react";

export default function TextForm({ heading }) {
  const [text, setText] = useState("");
  const [copied, setCopied] = useState(false); // NEW

  const toUpper = () => setText(text.toUpperCase());
  const toLower = () => setText(text.toLowerCase());
  const clear = () => setText("");

  const copyText = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const removeExtraSpaces = () => {
    setText(text.replace(/ +/g, " ").trim());
  };

  const words = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

  return (
    <div className="container my-4">
      <h1>{heading}</h1>
      <textarea
        className="form-control"
        rows="8"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="btn btn-primary mt-3 me-2" onClick={toUpper}>Convert to Uppercase</button>
      <button className="btn btn-primary mt-3 me-2" onClick={toLower}>Convert to Lowercase</button>
      <button className="btn btn-danger mt-3 me-2" onClick={clear}>Clear</button>

      {/* NEW buttons */}
      <button className="btn btn-success mt-3 me-2" onClick={copyText}>
        {copied ? "Copied!" : "Copy Text"}
      </button>
      <button className="btn btn-secondary mt-3 me-2" onClick={removeExtraSpaces}>
        Remove Extra Spaces
      </button>

      <h2 className="mt-4">Your text summary</h2>
      <p>{words} words and {text.length} characters</p>
      <p>{(0.008 * words).toFixed(2)} minutes read</p>

      <h2>Preview</h2>
      <p>{text || "Nothing to preview"}</p>
    </div>
  );
}