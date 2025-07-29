'use client'

import GaugeExample from "./gauge";
import SparkLine from "./sparkline";
import Line from "./line";

export default function Home() {

  return (
    <div>
      <h1>Fear and Green Index</h1>
      <h3>
        What emotion is driving the market now?
      </h3>
      <div>
        <GaugeExample value={50}></GaugeExample>
        <SparkLine/>
        <Line/>
      </div>
    </div>
  );
}
