ServerEvents.recipes(e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- //
    let bo = (id) => `botania:${id}`;
    

    // -- BOTANIA REMOVED RECIPES -- //
    const BOTANIA_DELETED_ITEMS = [
        bo('recipes/flugel_tiara'),
    ];

    BOTANIA_DELETED_ITEMS.forEach(id => e.remove({id: id}))

    //
});