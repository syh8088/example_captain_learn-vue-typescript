<template>
  <div>
    <canvas id="myChart" ref="mychart" width="400" height="400"></canvas>
  </div>
</template>

<script lang="ts">
import Vue, { VueConstructor } from "vue";
import { MyVueRefs } from "./types/refs";
//import Chart from "chart.js";

// export default (
//   Vue as VueConstructor<Vue & { $refs: { mychart: HTMLCanvasElement } }>
// ).extend({
export default (Vue as MyVueRefs<{ myChart: HTMLCanvasElement }>).extend({
  methods: {
    sayHi() {
      const canvasElement = this.$refs.myChart;
    },
  },
  mounted() {
    // const canvasElement = document.getElementById(
    //   "myChart"
    // ) as HTMLCanvasElement;
    // const ctx = canvasElement.getContext("2d");
    // if (!ctx) {
    //   return;
    // }

    const myChart = new this.$_Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            label: "# of Votes",
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  },
});
</script>

<style scoped></style>
