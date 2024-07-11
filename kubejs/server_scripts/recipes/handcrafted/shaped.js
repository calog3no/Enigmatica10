ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:handcrafted/shaped/';

    const recipes = [];

    event.forEachRecipe({ mod: 'handcrafted', id: /_sheet$/ }, (r) => {
        let recipe = JSON.parse(r.json);
        let recipe_id = r.getId();

        let output = Item.of(recipe.result.id, recipe.result.count);
        let input = recipe.ingredients[0].item;
        recipes.push({
            output: output,
            pattern: ['AAA'],
            key: {
                A: input
            },
            id: recipe_id
        });
    });

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
