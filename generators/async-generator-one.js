async function* asyncSequence(start, end) {
    for(let i = start; i < = end; i++) {
        yield new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(i);
            }, 1000);
        });
    }
}