ServerEvents.recipes(e => {

    // removing by id wasn't working for me, so this is good enough.
    e.remove({ output: 'botania:flight_tiara' });

    // -- FLUGEL TIARA -- //
    e.shaped("botania:flight_tiara", [
        ['botania:life_essence', 'ad_astra:calorite_tank', 'botania:life_essence'],
        [ 'botania:elementium_ingot', 'techreborn:lapotron_crystal', 'botania:elementium_ingot'],
        ['ad_astra:calorite_engine', 'modern_industrialization:turbo_upgrade', 'ad_astra:calorite_engine']
    ]).id('statech:botania/nerfed_flight_tiara');
    
});