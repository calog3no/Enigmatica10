ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:enigmatica/shapeless/';

    const recipes = [
        {
            output: Item.of('minecraft:brown_dye', 2),
            inputs: ['#c:dyes/green', '#c:dyes/red'],
            id: `${id_prefix}brown_dye_from_green_red`
        },
        {
            output: Item.of('minecraft:brown_dye', 3),
            inputs: ['#c:dyes/blue', '#c:dyes/red', '#c:dyes/yellow'],
            id: `${id_prefix}brown_dye_from_blue_red_yellow`
        },
        {
            output: Item.of('minecraft:green_dye', 2),
            inputs: ['#c:dyes/blue', '#c:dyes/yellow'],
            id: `${id_prefix}green_dye_from_blue_yellow`
        },
        {
            output: Item.of('minecraft:green_dye', 1),
            inputs: [
                'minecraft:short_grass',
                'minecraft:short_grass',
                'minecraft:short_grass',
                'minecraft:short_grass'
            ],
            id: `${id_prefix}green_dye_from_short_grass`
        },
        {
            output: Item.of('minecraft:yellow_dye', 2),
            inputs: ['#c:dusts/sulfur'],
            id: `${id_prefix}yellow_dye_from_sulfur`
        },
        {
            output: Item.of('minecraft:reinforced_deepslate', 1),
            inputs: [
                'minecraft:polished_deepslate',
                '#c:ingots/iron',
                '#c:ingots/iron',
                '#c:ingots/iron',
                '#c:ingots/iron'
            ],
            id: `${id_prefix}reinforced_deepslate`
        }
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
