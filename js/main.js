let fullBattery = document.querySelector('.battery'),
    endBattery = document.querySelectorAll('.end'),
    singleBatt = document.querySelectorAll('span');
    sBatt = Array.from(singleBatt);
    eBatt = Array.from(endBattery);

window.addEventListener('load', () => {

    setTimeout(() => {

        fullBattery.classList.add('done');

        sBatt.forEach((curr,index) => {

            if (index === sBatt.length - 1) {
                curr.classList.add('stopper');
            } else {
                curr.classList.add('full');
            }
    
        });

        eBatt.forEach((curr) => {
            curr.classList.add('done');
        });
    },8500);

});

