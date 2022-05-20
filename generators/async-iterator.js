class Sequence {
    constructor(start = 0, end = Infinity, interval = 1) {
        this.start = start;
        this.end = end;
        this.interval = interval;
    }

    [Symbol.iterator]() {
        let counter = 0;
        let nextIndex = this.start;

        return {
            next: () => {
                if(nextIndex <= this.end) {
                    let result = {
                        value: nextIndex,
                        done: false
                    }
                    nextIndex += this.interval;
                    counter++;
                    return result;
                }
                return {
                    value: counter,
                    done: true
                };
            }
        }
    }
}


///The following code transforms the Sequence class to the AsyncSequence class:




class AsyncSequence {
    constructor(start = 0, end = Infinity, interval = 1) {
        this.start = start;
        this.end = end;
        this.interval = interval;
    }

    [Symbol.asyncIterator]() {
        let counter = 0;
        let nextIndex = this.start;
        return {
            next: async() => {
                if(nextIndex <= this.end) {
                    let result = {
                        value: nextIndex,
                        done: false
                    }
                    nextIndex += this.interval;
                    counter++;

                    return new Promise((resolve, reject) => {
                        setTimeout(() => {
                            resolve({
                                value: counter,
                                done: true
                            });

                        }, 1000);
                    });
                }
            }
        }
    }
}