// Using import() for object destructuring
let btn = document.querySelector('#show');

btn.addEventListener('click', function () {
    (async () => {
        try{
            let {
                show, hide
            } = await import('./dialog.js')

            show('Hi');
            hide();
        }catch (err) {
            console.log(err);
        }
    })();
});