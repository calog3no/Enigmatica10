ServerEvents.tags('item', (event) => {
    // Items golems can pick up
    event.add('ars_nouveau:golem/shard', [
        'minecraft:amethyst_shard',
        'ae2:certus_quartz_crystal',
        'justdirethings:time_crystal'
    ]);
});
