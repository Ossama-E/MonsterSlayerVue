const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      gameStatus: true,
      message: "",
      currRound: 0,
    };
  },
  computed: {
    computedMonsterHealth() {
      return { width: this.monsterHealth + "%" };
    },
    computedPlayerHealth() {
      return { width: this.playerHealth + "%" };
    },
  },
  watch: {
    currRound() {
      console.log(this.currRound);
    },
  },
  methods: {
    calcAttack(monsterPower, playerPower) {
      this.currRound++;
      if (this.monsterHealth - playerPower <= 0) {
        this.monsterHealth = 0;
        this.gameStatus = false;
        this.message = "You won";
        return;
      } else if (this.playerHealth - monsterPower <= 0) {
        this.playerHealth = 0;
        this.gameStatus = false;
        this.message = "You lost";
        return;
      }
      this.playerHealth -= monsterPower;
      this.monsterHealth -= playerPower;
    },
    attackBoth() {
      const playerPower = Math.round(Math.random() * 14);
      const monsterPower = Math.round(Math.random() * 19);
      this.calcAttack(monsterPower, playerPower);
    },
    specialAttack() {
      const playerPower = Math.round(Math.random() * 25) + 10;
      const monsterPower = Math.round(Math.random() * 19);
      this.calcAttack(monsterPower, playerPower);
    },
  },
});

app.mount("#game");
