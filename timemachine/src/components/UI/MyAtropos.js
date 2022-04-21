import "atropos/css";
import timeloop from "./timeloop.jpeg";
import Atropos from "atropos/react";

export default function myAtropos() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <Atropos activeOffset={40} shadowScale={1.05}>
        <img
          className="relative rounded-lg shadow-lg"
          src={timeloop}
          alt="Clock spiralling infinitely into itself"
        />
      </Atropos>
    </div>
  );
}
