# Contribution Guidelines
_I (PecantPie) am still following these guidelines, but I have changed some text here to clarify my intentions with this fork._

If you notice any issues or progression blocks please open an issue to let me know. Alternatively, feel free to submit a PR and I will review it.  

## Code Consistency
Any KubeJS added code must follow the existing formatting. Please note, that I may change how I format things in the future, but in general, it will look how it is currently.
Scripts are split based on their purpose. For Server Scripts, they are split based on the origin mod that is being modified. For example, if you're adding a new shaped/shapeless recipe for an item from Create, you would do so in `create.js`. If you're adding a new custom recipe that uses a Create mechanical fan as the type, then it would also go in the `create.js` file.

Modern Industrialization is an exception to this rule, due to the extent of which it has been modified. For regular shaped/shapeless recipes, they should be placed in the `mods/modern_industrialization.js` file, while any custom recipe type should go in the `modern_industrialization` subfolder. For example, a new Assembler recipe would be placed in the `mods/modern_industrialization/assembler.js` file.

In addition to the file organization, the code should also match a certain formatting. Any utility function should be declared at the top of the function, for example this could be the string utilities or custom recipe utilities. For each new recipe there should be a title listing the English in-game name for the item. For example, a recipe for the `modern_industrialization:steel_gear` should be headed with: `// -- STEEL GEAR -- //`

New materials, fluids, etc. for MI should be placed in the corresponding startup script in `modern_industrialization.js`. It is expected to match the formatting given within that file. Any new multiblocks should utilize the ShapeBuilder functionality recently added by Modern Industrialization.

## Design Philosophy
While changes are welcome, they should fall in line with how the pack is overall designed. To ensure the best outcome, I adhered to the following principles:
- ~~The pack must be focused on the Modern Industrialization mod. While there are other big mods in the pack like Spectrum, TechReborn, and the Twilight Forest, the player should be expected to use Modern Industrialization to advance.~~
- This fork _(GoG)_ includes an additional focus on Botania for progression, especially in the early game. The aim is to shift the focus away from exploration and mining and towards small automations and unique mechanics. However, nothing unlocked in Botania should leap ahead of base StaTech progression, so for example the Flugel Tiara's recipe is changed to be similar to the gravichestplate. 
- Recipes should complete in a reasonable amount of time. Extreme time-gating is not a fun feature, and waiting for a machine to finish a recipe should not be encouraged. The player should be constantly moving forward in progression, not moving a bit, waiting an hour, then moving a bit more. Additionally, this applies for recipe requirements, it should not take real life days to acquire the amount of materials to progress forward. I do not want an endgame that requires you to AFK while machines work.
- Quest rewards *should* be rewarding. As they may seem OP right now, they aren't in the grand scheme of things. The player will still need to setup automation for any material they might get as a reward, as they will need significantly more of it in the future. Rewards should be used to help the player progress and to activate the dopamine receptors when they complete something. That being said, rewards walk a thin line of what is too good and what is trash. Rewards should be acquirable in the players current stage of the game, and shouldn't be in a quantity that nullifies a significant part of progression.
- No complex processing lines for a mediocre outcomes. Long processing lines to produce a single ingot to make a pickaxe are not welcome. If a processing line is to be added, it should actually add something to the game. The best processing lines are the ones added to flesh out progression. As an example, the need to create a chemical line to create polyethylene is rewarding and is a good gate of progression into the next tiers of machines.
- Always moving forward. Anything added, whether recipe, machine, etc. should always be in a way to progress forward. This branches off from the previous point a bit, but users shouldn't have to build a complex processing line, that once complete, they will never use again.
- Hard, but rewarding. The player should be expected to have to think and figure out things in the pack. The questbook already does a good idea showing what needs to be made to progress, and doesn't hold their hand for the entire process. A strong expectation of good usage of REI is expected for the player. If you lay out each machine part or subcomponent they need to make, it will add too much bloat to the questbook and take agency from the player.
- Empower the player, but slowly. The player should be given new tools and items to help make their life easier as they progress, but they should not be given these tools either all at once or way too early in the pack. A good example of this is Creative Flight. While some packs unlock this sooner than later, where it is at now is a good spot, requiring a decent amount of work to get to for a great payoff.

## Configuration Changes
Changes to existing configs should only be done to:
1. Improve the pack by addressing any issues or adding missing features.
2. Improve the balancing in the pack
3. Improve the end-user experience