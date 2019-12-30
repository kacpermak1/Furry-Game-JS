function Furry() {
    this.x = 0;
    this.y = 0;
    this.direction = "right";
}

function Coin() {
    this.x = Math.floor(Math.random() * 10);
    this.y = Math.floor(Math.random() * 10);
}

function Game() {
    this.board = document.querySelectorAll('#board div');
    this.furry = new Furry();
    this.coin = new Coin();
    this.score = 0;
    this.index = function (x, y) {
        return x + (y * 10);
    }

    this.showFurry = function () {
        this.hideVisibleFurry();
        this.board[this.index(this.furry.x, this.furry.y)].classList.add('furry');
    }

    this.showCoin = function () {
        this.board[this.index(this.coin.x, this.coin.y)].classList.add('coin');
    }

    const self = this;

    this.moveFurry = function () {
        if (self.furry.direction === "right") {
            self.furry.x = self.furry.x + 1;
        } else if (self.furry.direction === "left") {
            self.furry.x = self.furry.x - 1;
        } else if (self.furry.direction === "up") {
            self.furry.y = self.furry.y + 1;
        } else if (self.furry.direction === "down") {
            self.furry.y = self.furry.y + -1;
        }

        if (this.gameOver() === false) {
            this.showFurry();
            this.checkCoinCollision();
        }
    }

    this.hideVisibleFurry = function () {
        const visible = document.querySelector('.furry');
        if (visible !== null) {
            visible.classList.remove('furry');
        }
    }

    this.turnFurry = (key) => {
        switch (key) {
            case 37: this.furry.direction = "left";
                break;
            case 38: this.furry.direction = "down";
                break;
            case 39: this.furry.direction = "right";
                break;
            case 40: this.furry.direction = "up";
                break;
        }
    }

    this.checkCoinCollision = () => {
        if (this.furry.x === this.coin.x && this.furry.y === this.coin.y) {
            document.querySelector(".coin").classList.remove("coin");
            this.score = this.score + 1;
            document.querySelector('#score strong').innerText = this.score;
            const newCoin = new Coin();
            this.coin = newCoin;
            this.showCoin();
        }
    }

    this.gameOver = () => {
        if (this.furry.x < 0 || this.furry.x > 9 || this.furry.y < 0 || this.furry.y > 9) {
            clearInterval(this.idSetInterval);
            this.hideVisibleFurry();
            document.getElementById("over").style.display = "flex";
            document.getElementById("final_score").innerText = this.score;
            document.querySelector("#score").style.display = "none";
            document.querySelector("#board").style.display = "none";
            
            return true;
        } else { return false }
    }

    this.startGame = function () {
        this.idSetInterval = setInterval(() => {
            this.moveFurry();
        }, 250);

        document.addEventListener('keydown', (event) => {
            this.turnFurry(event.which);
        });
    }
}

const game = new Game();
game.showFurry();
game.showCoin();
game.startGame();

const overModal = document.getElementById("over");
const playAgainBtn = document.getElementById("again");

playAgainBtn.addEventListener('click', function () {
    window.location.reload();
})

