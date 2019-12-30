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
    this.level = 1;
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
            this.levels();
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
            this.score++;
            document.querySelector('#score strong').innerText = this.score;
            const newCoin = new Coin();
            this.coin = newCoin;
            this.showCoin();
        }
    }

    this.levels = () => {
        const levelNumber = document.querySelector("#level");
        const board = document.querySelector("#board");
        const eachSquare = board.querySelectorAll("div");
        const body = document.querySelector("body");

        if (this.score >= 10 && this.score <20) {
            clearInterval(this.idSetInterval);
            this.level = "2"
            levelNumber.innerText = this.level;
            this.idSetInterval = setInterval(() => {
                this.moveFurry();
            }, 170);
            board.style.backgroundColor = "black";
            body.style.backgroundColor = "black";
        }

        if (this.score >= 20 && this.score <30 ) {
            clearInterval(this.idSetInterval);
            this.level = "3";
            levelNumber.innerText = this.level;
            this.idSetInterval = setInterval(() => {
                this.moveFurry();
            }, 130);
            board.style.backgroundColor = "black";
            body.style.backgroundColor = "black";
            for (let i = 0; i < eachSquare.length; i++) {
                eachSquare[i].style.boxShadow = "1px 1px 5px 1px rgb(0, 204, 255)"
            }
        }

        if (this.score >= 30 && this.score <40) {
            clearInterval(this.idSetInterval);
            this.level = "4";
            levelNumber.innerText = this.level;
            this.idSetInterval = setInterval(() => {
                this.moveFurry();
            }, 110);
            board.style.backgroundColor = "black";
            body.style.backgroundColor = "black";
            for (let i = 0; i < eachSquare.length; i++) {
                eachSquare[i].style.boxShadow = "1px 1px 5px 1px rgb(255, 5, 5)"
            }
        }

        if (this.score >= 40 && this.score <50) {
            clearInterval(this.idSetInterval);
            this.level = "5";
            levelNumber.innerText = this.level;
            this.idSetInterval = setInterval(() => {
                this.moveFurry();
            }, 100);
            board.style.backgroundColor = "black";
            body.style.backgroundColor = "black";
            for (let i = 0; i < eachSquare.length; i++) {
                eachSquare[i].style.boxShadow = "1px 1px 5px 1px rgb(13, 255, 5)"
            }
        }

        if (this.score >= 50) {
            clearInterval(this.idSetInterval);
            this.level = "6";
            levelNumber.innerText = this.level;
            this.idSetInterval = setInterval(() => {
                this.moveFurry();
            }, 80);
            board.style.backgroundColor = "black";
            body.style.backgroundColor = "black";
            for (let i = 0; i < eachSquare.length; i++) {
                eachSquare[i].style.boxShadow = "1px 1px 5px 1px rgb(247, 5, 255)"
            }
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
        }, 220);

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

