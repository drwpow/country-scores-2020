import * as vue from 'vue/dist/vue.esm-browser.prod.js';
import { corruption, food, inequality } from './data/stats';
import country from './data/countries';

const CORRUPTION_WEIGHT = 3;
const FOOD_WEIGHT = 1;
const INEQUALITY_WEIGHT = 2;

function score(iso) {
  let sum = 0;
  if (corruption[iso]) sum += CORRUPTION_WEIGHT;
  if (food[iso]) sum += FOOD_WEIGHT;
  if (inequality[iso]) sum += INEQUALITY_WEIGHT;
  const cScore = corruption[iso]
    ? corruption[iso] * (CORRUPTION_WEIGHT / sum)
    : 0;
  const fScore = food[iso] ? food[iso] * (FOOD_WEIGHT / sum) : 0;
  const iScore = inequality[iso]
    ? inequality[iso] * (INEQUALITY_WEIGHT / sum)
    : 0;
  return cScore + fScore + iScore;
}

let countries = Object.entries(country)
  .filter(([k]) => corruption[k] && inequality[k])
  .map(([k, v]) => [
    k,
    {
      ...v,
      corruption: corruption[k],
      food: food[k],
      inequality: inequality[k],
      score: score(k),
    },
  ]); // score

function recolor(metric = 'score') {
  document.querySelectorAll('.map path').forEach((el) => {
    const data = countries.find(([k]) => k === el.id);
    if (data && data[1][metric]) {
      el.setAttribute('style', `fill:rgba(0, 0, 255, ${data[1][metric]})`);
    }
  });
}

const app = vue.createApp({
  data() {
    return {
      data: countries,
      sortDesc: true,
      sortCol: 'score',
    };
  },
  computed: {
    sorted() {
      const sorted = [...this.data];
      sorted.sort((a, b) => {
        return this.sortDesc
          ? b[1][this.sortCol] - a[1][this.sortCol]
          : a[1][this.sortCol] - b[1][this.sortCol];
      });
      return sorted;
    },
  },
  methods: {
    sortBy(column) {
      if (this.sortCol === column) {
        this.sortDesc = !this.sortDesc;
      } else {
        this.sortCol = column;
        this.sortDesc = true;
      }
    },
  },
  mounted() {
    recolor(this.sortCol);
  },
  updated() {
    recolor(this.sortCol);
  },
});

app.component('score-display', {
  props: {
    title: String,
    score: Number,
  },
  data() {
    return {
      r: Math.PI * 2 * 220,
    };
  },
  computed: {
    max() {
      return this.r;
    },
    scoreDisplay() {
      return (this.score * 100).toFixed(1);
    },
    val() {
      return this.r - this.r * this.score;
    },
  },

  template: `<div class="country-score-display">
  <svg class="country-score-chart" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
    <title>{{ title }}: {{ scoreDisplay }}%</title>
    <circle class="country-score-chart-bg" r="220" cx="256" cy="256"></circle>
    <circle v-if="score"class="country-score-chart-val" r="220" cx="256" cy="256" :data-score="score >= 0.65 ? 'high' : (score <= 0.5 ? 'low' : 'med')" :stroke-dasharray="max" :stroke-dashoffset="val"></circle>
  </svg>
  <div class="country-score-score">
    <span v-if="score">{{ scoreDisplay }}</span><span v-else>?</span>
  </div>
</div>`,
});
app.mount(document.querySelector('#app'));
