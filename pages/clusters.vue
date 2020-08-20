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
      <b-card
        v-for="(star, index) in stars"
        v-bind:data="star"
        v-bind:key="index"
        :img-src="star.image"
        img-alt="Card image"
        img-left
        class="mb-3"
      >
        <b-card-text>Star ID: {{index}} X: {{star.x}} Y: {{star.y}}</b-card-text>
      </b-card>
      <Nav />
    </div>
  </div>
</template>

<script>
Math.range = function (min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};
Math.pick = function (list) {
  return list[Math.range(0, list.length)];
};
function Star(starID, clusterX, clusterY, clusterSize) {
  this.seed = `?clusterX=${clusterX}&clusterY=${clusterY}&starID=${starID}`;
  Math.seedrandom(this.id);
  this.id = starID;
  this.x = Math.range(0, clusterSize);
  this.y = Math.range(0, clusterSize);
  let images = [
    "https://cdn.mos.cms.futurecdn.net/Pkx5h33mQDLDbYrCPv62rC.jpg",
    "https://www.rnz.co.nz/assets/news/219110/eight_col_beetle.jpg?1577494395",
    "https://earthsky.org/upl/2020/02/Castor-by-Espenak.jpg",
    "https://www.siliconrepublic.com/wp-content/uploads/2017/08/Star-close-up-718x523.jpg",
    "https://i.pinimg.com/originals/bb/75/25/bb752540154c00faf633c200d188c102.jpg",
    "https://www.factsjustforkids.com/images/red-giant-star.png",
  ];
  this.image = Math.pick(images);
}
function Cluster(x, y) {
  this.x = x;
  this.y = y;
  this.size = 100;
  this.stars = [];
  this.seed = x + y;
  // generate number of stars based on a seeded range.
  Math.seedrandom(`Cluster x:${x}, y:${y}`);
  this.starCount = Math.range(2, 5);
  // generate a list of stars based on the star count
  for (var starID = 0; starID < this.starCount; starID++) {
    this.stars.push(new Star(starID, this.x, this.y, this.size));
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
        this.stars = cluster.stars;
      }
    },
    y() {
      if (this.y) {
        var cluster = new Cluster(this.x, this.y);
        this.starCount = cluster.starCount;
        this.stars = cluster.stars;
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
.card-img-left {
  height: 100px;
}
</style>
