ServerEvents.tags('block', (event) => {
    let additions = {
        dark_gem: [/evilcraft:dark_ore/]
    };

    Object.keys(additions).forEach((tag) => {
        event.get(`c:ores/${tag}`).add(additions[tag]);
        event.get('c:ores').add(additions[tag]);
    });
});
