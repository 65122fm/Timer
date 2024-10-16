const btn = document.getElementById('btn')
const inp = document.getElementById('inp1')
const list =document.querySelector('.list')

btn.addEventListener('click',()=>{
        setInterval(() => {
            list.innerHTML=`<ul>
                    <li class="numbers">27</li>
                    <li class="clockName">days</li>
                </ul>
                <p>:</p>
                <ul>
                    <li class="numbers">14</li>
                    <li class="clockName">hours</li>
                </ul>
                <p>:</p>
                <ul>
                    <li class="numbers">15</li>
                    <li class="clockName">minutes</li>
                </ul>
                <p>:</p>
                <ul>
                    <li class="numbers">10</li>
                    <li class="clockName">seconds</li>
                </ul>`
            const Date1 = new Date('oct 17, 2024 2:53:00').getTime();
            const nowDate = new Date().getTime();
            const timeDifference = Date1 - nowDate;
            
            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
            
            document.querySelectorAll('.numbers')[0].textContent = days;
            document.querySelectorAll('.numbers')[1].textContent = hours;
            document.querySelectorAll('.numbers')[2].textContent = minutes;
            document.querySelectorAll('.numbers')[3].textContent = seconds;
            
            if (timeDifference < 0) {
                list.innerHTML = "<p class='message'>The countdown has finished!</p>";
            }
        },1000);
})

