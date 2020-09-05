export class input {
    constructor() {
        this.lastInput = { x: 0, y: 0 };
        this.currentInput = { x: 0, y: 0 };
        window.addEventListener('keydown', (e) => {
            switch (e.key) {
                case 'ArrowUp':
                    if (this.lastInput.y != 0)
                        break;
                    this.currentInput = { x: 0, y: -1 };
                    break;
                case 'ArrowDown':
                    if (this.lastInput.y != 0)
                        break;
                    this.currentInput = { x: 0, y: 1 };
                    break;
                case 'ArrowLeft':
                    if (this.lastInput.x != 0)
                        break;
                    this.currentInput = { x: -1, y: 0 };
                    break;
                case 'ArrowRight':
                    if (this.lastInput.x != 0)
                        break;
                    this.currentInput = { x: 1, y: 0 };
                    break;
                default:
                    break;
            }
        });
    }
    static get_instance() {
        if (!this.instance)
            this.instance = new input();
        return this.instance;
    }
    getInput() {
        this.lastInput = this.currentInput;
        return this.currentInput;
    }
}
input.instance = null;
