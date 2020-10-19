import * as vue from 'vue/dist/vue.esm-browser.prod.js';
import { corruption, food, healthcare, inequality } from './data/stats';
import country from './data/countries';

const CORRUPTION_WEIGHT = 3;
const FOOD_WEIGHT = 1;
const HEALTHCARE_WEIGHT = 1;
const INEQUALITY_WEIGHT = 2;

function score(iso) {
  let sum =
    CORRUPTION_WEIGHT + FOOD_WEIGHT + HEALTHCARE_WEIGHT + INEQUALITY_WEIGHT;
  // note: missing scores get a “1” to calculate the final score, but it doesn’t look good when several are missing
  const c = (corruption[iso] || 0.5) * (CORRUPTION_WEIGHT / sum);
  const f = (food[iso] || 0.5) * (FOOD_WEIGHT / sum);
  const h = (healthcare[iso] || 0.5) * (HEALTHCARE_WEIGHT / sum);
  const i = (inequality[iso] || 0.5) * (INEQUALITY_WEIGHT / sum);
  return c + f + h + i;
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
      healthcare: healthcare[k],
      score: score(k),
    },
  ]); // score

function recolor(metric = 'score') {
  if (metric === 'name') return;

  const colors = {
    corruption: [255, 29, 76],
    food: [0, 202, 113],
    healthcare: [0, 131, 255],
    inequality: [255, 29, 76],
    score: [0, 131, 255],
  };

  const min = countries.reduce(
    (n, c) => (c[1][metric] < n ? c[1][metric] : n),
    Infinity,
  );
  const max = countries.reduce(
    (n, c) => (c[1][metric] > n ? c[1][metric] : n),
    0,
  );

  document.querySelectorAll('.map path').forEach((el) => {
    const data = countries.find(([k]) => k === el.id);
    if (data) {
      let a = (data[1][metric] - min) / (max - min);
      let [r, g, b] = colors[metric];
      if (metric === 'healthcare') {
        if (a < 0.5) [r, g, b] = [255, 29, 76];
        a = Math.abs(2 * (a - 0.5));
      }
      if (metric === 'corruption') a = 1 - a;
      if (metric === 'inequality') a = 1 - a;
      el.setAttribute('style', `fill:rgba(${r}, ${g}, ${b}, ${a || 0})`);
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
      if (this.sortCol === 'name') {
        sorted.sort((a, b) => {
          return this.sortDesc
            ? b[1].name.localeCompare(a[1].name)
            : a[1].name.localeCompare(b[1].name);
        });
      }
      sorted.sort((a, b) => {
        if (!a[1][this.sortCol]) return 1;
        if (!b[1][this.sortCol]) return -1;
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
        this.sortDesc = column === 'name' ? false : true;
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
    grade() {
      if (this.score >= 0.7) return 'high';
      if (this.score >= 0.6) return 'med';
      if (this.score >= 0.5) return 'med-low';
      return 'low';
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
    <circle v-if="score"class="country-score-chart-val" r="220" cx="256" cy="256" :data-grade="grade" :stroke-dasharray="max" :stroke-dashoffset="val"></circle>
  </svg>
  <div class="country-score-score">
    <span v-if="score">{{ scoreDisplay }}</span><span v-else>?</span>
  </div>
</div>`,
});
app.mount(document.querySelector('#app'));
