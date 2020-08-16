<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">Clusters</h1>
      <b-input-group prepend="x" class="mb-2 mr-sm-2">
        <b-input id="inline-form-input-username" placeholder="Cluster Cooridant X" v-model="x"></b-input>
      </b-input-group>
      <b-input-group prepend="y" class="mb-2 mr-sm-2">
        <b-input id="inline-form-input-username" placeholder="Cluster Cooridant Y" v-model="y"></b-input>
      </b-input-group>
      <p>Star Count: {{starCount }}</p>
      <Nav />
    </div>
  </div>
</template>

<script>
Math.range = function (min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};
function Star(x, y) {
  this.x = x;
  this.y = y;
}
function Cluster(x, y) {
  this.x = x;
  this.y = y;
  this.size = 100;
  this.stars = [];
  this.seed = x + y;
  // generate number of stars based on a seeded range.
  Math.seedrandom(`Cluster x:${x}, y:${y}`);
  this.starCount = Math.range(2, 12);
  // generate a list of stars based on the star count
  for (var i = 0; i < this.starCount; i++) {
    this.stars.push(
      new Star(Math.range(0, this.size), Math.range(0, this.size))
    );
  }
}
export default {
  data() {
    return {
      x: null,
      y: null,
      stars: [],
      size: null,
      starCount: 0,
    };
  },
  created() {
    var cluster = new Cluster(0, 0);
    this.x = cluster.x;
    this.y = cluster.y;
    this.stars = cluster.stars;
    this.size = cluster.size;
    this.starCount = cluster.starCount;
  },
  watch: {
    // When x or y is altered create new cluster
    x() {
      if (this.x) {
        var cluster = new Cluster(this.x, this.y);
        this.starCount = cluster.starCount;
      }
    },
    y() {
      if (this.y) {
        var cluster = new Cluster(this.x, this.y);
        this.starCount = cluster.starCount;
      }
    },
  },
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
