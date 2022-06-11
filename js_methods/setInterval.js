const interval = (callback, duration) =>{
    let timer = null;
    function fn() {
        console.log(new Date().toLocaleString())
        clearTimeout(timer)
        callback()
        timer = setTimeout(fn, duration)
    }
    timer = setTimeout(fn, duration)
    return {
        clear() {
            clearTimeout(timer)
        }
    }
}

let i=0
interval(function() {
    console.log(i++)
}, 1000)