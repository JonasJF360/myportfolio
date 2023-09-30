const acordeonTriggers = document.querySelectorAll('.acordeon .trigger')

acordeonTriggers.forEach((trigger) => {
    trigger.addEventListener('click', (e) => {
        const acordeon = trigger.parentElement

        acordeon.classList.contains('open')
            ? acordeon.classList.remove('open')
            : acordeon.classList.add('open');
    })
})
