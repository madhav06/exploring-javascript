import FakeComponent from "./fake-component.js";

class Home extends FakeComponent {
    afterFirstRender() {
        console.log("homepage done rendering");
    }

    render() {
        return `<h1> Welcome home! </h1>`;
    }
}

const home = new Home();