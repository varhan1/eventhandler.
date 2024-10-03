console.log("------ Inheritance ------");

class Gadget {
    constructor(name) {
        this.name = name;
    }
    present() {
        return `I have an ${this.name}`;
    }
}

class Handphone extends Gadget {
    constructor(name, mod) {
        super(name); // Memanggil constructor kelas induk (Gadget)
        this.model = mod; // Menyimpan model
    }

    show() {
        return `${this.present()}, it is ${this.model}`;
    }
}

let handphone = new Handphone("iPhone", "14 Pro Max");

console.log(handphone.show());
