export const recipes = [
    {
        "type": "recipe",
        "name": "speed-module",
        "enabled": false,
        "ingredients": {
            "advanced-circuit": 5,
            "electronic-circuit": 5
        },
        "energy_required": 15,
        "result": "speed-module"
    },
    {
        "type": "recipe",
        "name": "speed-module-2",
        "enabled": false,
        "ingredients": {
            "speed-module": 4,
            "advanced-circuit": 5,
            "processing-unit": 5
        },
        "energy_required": 30,
        "result": "speed-module-2"
    },
    {
        "type": "recipe",
        "name": "speed-module-3",
        "enabled": false,
        "ingredients": {
            "speed-module-2": 5,
            "advanced-circuit": 5,
            "processing-unit": 5
        },
        "energy_required": 60,
        "result": "speed-module-3"
    },
    {
        "type": "recipe",
        "name": "productivity-module",
        "enabled": false,
        "ingredients": {
            "advanced-circuit": 5,
            "electronic-circuit": 5
        },
        "energy_required": 15,
        "result": "productivity-module"
    },
    {
        "type": "recipe",
        "name": "productivity-module-2",
        "enabled": false,
        "ingredients": {
            "productivity-module": 4,
            "advanced-circuit": 5,
            "processing-unit": 5
        },
        "energy_required": 30,
        "result": "productivity-module-2"
    },
    {
        "type": "recipe",
        "name": "productivity-module-3",
        "enabled": false,
        "ingredients": {
            "productivity-module-2": 5,
            "advanced-circuit": 5,
            "processing-unit": 5
        },
        "energy_required": 60,
        "result": "productivity-module-3"
    },
    {
        "type": "recipe",
        "name": "effectivity-module",
        "enabled": false,
        "ingredients": {
            "advanced-circuit": 5,
            "electronic-circuit": 5
        },
        "energy_required": 15,
        "result": "effectivity-module"
    },
    {
        "type": "recipe",
        "name": "effectivity-module-2",
        "enabled": false,
        "ingredients": {
            "effectivity-module": 4,
            "advanced-circuit": 5,
            "processing-unit": 5
        },
        "energy_required": 30,
        "result": "effectivity-module-2"
    },
    {
        "type": "recipe",
        "name": "effectivity-module-3",
        "enabled": false,
        "ingredients": {
            "effectivity-module-2": 5,
            "advanced-circuit": 5,
            "processing-unit": 5
        },
        "energy_required": 60,
        "result": "effectivity-module-3"
    },
    {
        "type": "recipe",
        "name": "stack-inserter",
        "enabled": false,
        "ingredients": {
            "iron-gear-wheel": 15,
            "electronic-circuit": 15,
            "advanced-circuit": 1,
            "fast-inserter": 1
        },
        "result": "stack-inserter"
    },
    {
        "type": "recipe",
        "name": "stack-filter-inserter",
        "enabled": false,
        "ingredients": {
            "stack-inserter": 1,
            "electronic-circuit": 5
        },
        "result": "stack-filter-inserter"
    },
    {
        "type": "recipe",
        "name": "basic-oil-processing",
        "category": "oil-processing",
        "enabled": false,
        "energy_required": 5,
        "ingredients": {
            "type": "fluid",
            "name": "crude-oil",
            "amount": 100,
            "fluidbox_index": 2
        },
        "result": {
            "type": "fluid",
            "name": "petroleum-gas",
            "amount": 45,
            "fluidbox_index": 3
        },
        "icon": "__base__/graphics/icons/fluid/basic-oil-processing.png",
        "icon_size": 64,
        "icon_mipmaps": 4,
        "subgroup": "fluid-recipes"
    },
    {
        "type": "recipe",
        "name": "advanced-oil-processing",
        "category": "oil-processing",
        "enabled": false,
        "energy_required": 5,
        "ingredients": [
            {
                "type": "fluid",
                "name": "water",
                "amount": 50
            },
            {
                "type": "fluid",
                "name": "crude-oil",
                "amount": 100
            }
        ],
        "result": [
            {
                "type": "fluid",
                "name": "heavy-oil",
                "amount": 25
            },
            {
                "type": "fluid",
                "name": "light-oil",
                "amount": 45
            },
            {
                "type": "fluid",
                "name": "petroleum-gas",
                "amount": 55
            }
        ],
        "icon": "__base__/graphics/icons/fluid/advanced-oil-processing.png",
        "icon_size": 64,
        "icon_mipmaps": 4,
        "subgroup": "fluid-recipes"
    },
    {
        "type": "recipe",
        "name": "coal-liquefaction",
        "category": "oil-processing",
        "enabled": false,
        "energy_required": 5,
        "ingredients": [
            {
                "type": "item",
                "name": "coal",
                "amount": 10
            },
            {
                "type": "fluid",
                "name": "heavy-oil",
                "amount": 25
            },
            {
                "type": "fluid",
                "name": "steam",
                "amount": 50
            }
        ],
        "result": [
            {
                "type": "fluid",
                "name": "heavy-oil",
                "amount": 90
            },
            {
                "type": "fluid",
                "name": "light-oil",
                "amount": 20
            },
            {
                "type": "fluid",
                "name": "petroleum-gas",
                "amount": 10
            }
        ],
        "icon": "__base__/graphics/icons/fluid/coal-liquefaction.png",
        "icon_size": 64,
        "icon_mipmaps": 4,
        "subgroup": "fluid-recipes"
    },
    {
        "type": "recipe",
        "name": "heavy-oil-cracking",
        "category": "chemistry",
        "enabled": false,
        "energy_required": 2,
        "ingredients": [
            {
                "type": "fluid",
                "name": "water",
                "amount": 30
            },
            {
                "type": "fluid",
                "name": "heavy-oil",
                "amount": 40
            }
        ],
        "result": [
            {
                "type": "fluid",
                "name": "light-oil",
                "amount": 30
            }
        ],
        "icon": "__base__/graphics/icons/fluid/heavy-oil-cracking.png",
        "icon_size": 64,
        "icon_mipmaps": 4,
        "subgroup": "fluid-recipes"
    },
    {
        "type": "recipe",
        "name": "light-oil-cracking",
        "category": "chemistry",
        "enabled": false,
        "energy_required": 2,
        "ingredients": [
            {
                "type": "fluid",
                "name": "water",
                "amount": 30
            },
            {
                "type": "fluid",
                "name": "light-oil",
                "amount": 30
            }
        ],
        "result": [
            {
                "type": "fluid",
                "name": "petroleum-gas",
                "amount": 20
            }
        ],
        "icon": "__base__/graphics/icons/fluid/light-oil-cracking.png",
        "icon_size": 64,
        "icon_mipmaps": 4,
        "subgroup": "fluid-recipes"
    },
    {
        "type": "recipe",
        "name": "sulfuric-acid",
        "category": "chemistry",
        "energy_required": 1,
        "enabled": false,
        "ingredients": [
            {
                "type": "item",
                "name": "sulfur",
                "amount": 5
            },
            {
                "type": "item",
                "name": "iron-plate",
                "amount": 1
            },
            {
                "type": "fluid",
                "name": "water",
                "amount": 100
            }
        ],
        "result": [
            {
                "type": "fluid",
                "name": "sulfuric-acid",
                "amount": 50
            }
        ],
        "subgroup": "fluid-recipes"
    },
    {
        "type": "recipe",
        "name": "plastic-bar",
        "category": "chemistry",
        "energy_required": 1,
        "enabled": false,
        "ingredients": [
            {
                "type": "fluid",
                "name": "petroleum-gas",
                "amount": 20
            },
            {
                "type": "item",
                "name": "coal",
                "amount": 1
            }
        ],
        "result": [
            {
                "type": "item",
                "name": "plastic-bar",
                "amount": 2
            }
        ]
    },
    {
        "type": "recipe",
        "name": "solid-fuel-from-light-oil",
        "category": "chemistry",
        "energy_required": 2,
        "ingredients": [
            {
                "type": "fluid",
                "name": "light-oil",
                "amount": 10
            }
        ],
        "result": [
            {
                "type": "item",
                "name": "solid-fuel",
                "amount": 1
            }
        ],
        "icon": "__base__/graphics/icons/solid-fuel-from-light-oil.png",
        "icon_size": 64,
        "icon_mipmaps": 4,
        "subgroup": "fluid-recipes",
        "enabled": false
    },
    {
        "type": "recipe",
        "name": "solid-fuel-from-petroleum-gas",
        "category": "chemistry",
        "energy_required": 2,
        "ingredients": [
            {
                "type": "fluid",
                "name": "petroleum-gas",
                "amount": 20
            }
        ],
        "result": [
            {
                "type": "item",
                "name": "solid-fuel",
                "amount": 1
            }
        ],
        "icon": "__base__/graphics/icons/solid-fuel-from-petroleum-gas.png",
        "icon_size": 64,
        "icon_mipmaps": 4,
        "subgroup": "fluid-recipes",
        "enabled": false
    },
    {
        "type": "recipe",
        "name": "solid-fuel-from-heavy-oil",
        "category": "chemistry",
        "energy_required": 2,
        "ingredients": [
            {
                "type": "fluid",
                "name": "heavy-oil",
                "amount": 20
            }
        ],
        "result": [
            {
                "type": "item",
                "name": "solid-fuel",
                "amount": 1
            }
        ],
        "icon": "__base__/graphics/icons/solid-fuel-from-heavy-oil.png",
        "icon_size": 64,
        "icon_mipmaps": 4,
        "subgroup": "fluid-recipes",
        "enabled": false
    },
    {
        "type": "recipe",
        "name": "sulfur",
        "category": "chemistry",
        "energy_required": 1,
        "enabled": false,
        "ingredients": [
            {
                "type": "fluid",
                "name": "water",
                "amount": 30
            },
            {
                "type": "fluid",
                "name": "petroleum-gas",
                "amount": 30
            }
        ],
        "result": [
            {
                "type": "item",
                "name": "sulfur",
                "amount": 2
            }
        ]
    },
    {
        "type": "recipe",
        "name": "lubricant",
        "category": "chemistry",
        "enabled": false,
        "energy_required": 1,
        "ingredients": [
            {
                "type": "fluid",
                "name": "heavy-oil",
                "amount": 10
            }
        ],
        "result": [
            {
                "type": "fluid",
                "name": "lubricant",
                "amount": 10
            }
        ],
        "subgroup": "fluid-recipes"
    },
    {
        "type": "recipe",
        "name": "empty-barrel",
        "category": "crafting",
        "energy_required": 1,
        "subgroup": "intermediate-product",
        "enabled": false,
        "ingredients": {
            "steel-plate": 1
        },
        "result": "empty-barrel"
    },
    {
        "type": "recipe",
        "name": "night-vision-equipment",
        "enabled": false,
        "energy_required": 10,
        "ingredients": {
            "advanced-circuit": 5,
            "steel-plate": 10
        },
        "result": "night-vision-equipment"
    },
    {
        "type": "recipe",
        "name": "belt-immunity-equipment",
        "enabled": false,
        "energy_required": 10,
        "ingredients": {
            "advanced-circuit": 5,
            "steel-plate": 10
        },
        "result": "belt-immunity-equipment"
    },
    {
        "type": "recipe",
        "name": "energy-shield-equipment",
        "enabled": false,
        "energy_required": 10,
        "ingredients": {
            "advanced-circuit": 5,
            "steel-plate": 10
        },
        "result": "energy-shield-equipment"
    },
    {
        "type": "recipe",
        "name": "energy-shield-mk2-equipment",
        "enabled": false,
        "energy_required": 10,
        "ingredients": {
            "energy-shield-equipment": 10,
            "processing-unit": 5,
            "low-density-structure": 5
        },
        "result": "energy-shield-mk2-equipment"
    },
    {
        "type": "recipe",
        "name": "battery-equipment",
        "enabled": false,
        "energy_required": 10,
        "ingredients": {
            "battery": 5,
            "steel-plate": 10
        },
        "result": "battery-equipment"
    },
    {
        "type": "recipe",
        "name": "battery-mk2-equipment",
        "enabled": false,
        "energy_required": 10,
        "ingredients": {
            "battery-equipment": 10,
            "processing-unit": 15,
            "low-density-structure": 5
        },
        "result": "battery-mk2-equipment"
    },
    {
        "type": "recipe",
        "name": "solar-panel-equipment",
        "enabled": false,
        "energy_required": 10,
        "ingredients": {
            "solar-panel": 1,
            "advanced-circuit": 2,
            "steel-plate": 5
        },
        "result": "solar-panel-equipment"
    },
    {
        "type": "recipe",
        "name": "fusion-reactor-equipment",
        "enabled": false,
        "energy_required": 10,
        "ingredients": {
            "processing-unit": 200,
            "low-density-structure": 50
        },
        "result": "fusion-reactor-equipment"
    },
    {
        "type": "recipe",
        "name": "personal-laser-defense-equipment",
        "enabled": false,
        "energy_required": 10,
        "ingredients": {
            "processing-unit": 20,
            "low-density-structure": 5,
            "laser-turret": 5
        },
        "result": "personal-laser-defense-equipment"
    },
    {
        "type": "recipe",
        "name": "discharge-defense-equipment",
        "enabled": false,
        "energy_required": 10,
        "ingredients": {
            "processing-unit": 5,
            "steel-plate": 20,
            "laser-turret": 10
        },
        "result": "discharge-defense-equipment"
    },
    {
        "type": "recipe",
        "name": "discharge-defense-remote",
        "enabled": false,
        "ingredients": {
            "electronic-circuit": 1
        },
        "result": "discharge-defense-remote"
    },
    {
        "type": "recipe",
        "name": "exoskeleton-equipment",
        "enabled": false,
        "energy_required": 10,
        "ingredients": {
            "processing-unit": 10,
            "electric-engine-unit": 30,
            "steel-plate": 20
        },
        "result": "exoskeleton-equipment"
    },
    {
        "type": "recipe",
        "name": "personal-roboport-equipment",
        "enabled": false,
        "energy_required": 10,
        "ingredients": {
            "advanced-circuit": 10,
            "iron-gear-wheel": 40,
            "steel-plate": 20,
            "battery": 45
        },
        "result": "personal-roboport-equipment"
    },
    {
        "type": "recipe",
        "name": "personal-roboport-mk2-equipment",
        "enabled": false,
        "energy_required": 20,
        "ingredients": {
            "personal-roboport-equipment": 5,
            "processing-unit": 100,
            "low-density-structure": 20
        },
        "result": "personal-roboport-mk2-equipment"
    },
    {
        "type": "recipe",
        "name": "laser-turret",
        "enabled": false,
        "energy_required": 20,
        "ingredients": {
            "steel-plate": 20,
            "electronic-circuit": 20,
            "battery": 12
        },
        "result": "laser-turret"
    },
    {
        "type": "recipe",
        "name": "flamethrower-turret",
        "enabled": false,
        "energy_required": 20,
        "ingredients": {
            "steel-plate": 30,
            "iron-gear-wheel": 15,
            "pipe": 10,
            "engine-unit": 5
        },
        "result": "flamethrower-turret"
    },
    {
        "type": "recipe",
        "name": "artillery-turret",
        "enabled": false,
        "energy_required": 40,
        "ingredients": {
            "steel-plate": 60,
            "concrete": 60,
            "iron-gear-wheel": 40,
            "advanced-circuit": 20
        },
        "result": "artillery-turret"
    },
    {
        "type": "recipe",
        "name": "artillery-targeting-remote",
        "enabled": false,
        "ingredients": {
            "processing-unit": 1,
            "radar": 1
        },
        "result": "artillery-targeting-remote"
    },
    {
        "type": "recipe",
        "name": "gun-turret",
        "enabled": false,
        "energy_required": 8,
        "ingredients": {
            "iron-gear-wheel": 10,
            "copper-plate": 10,
            "iron-plate": 20
        },
        "result": "gun-turret"
    },
    {
        "type": "recipe",
        "name": "wooden-chest",
        "ingredients": {
            "wood": 2
        },
        "result": "wooden-chest"
    },
    {
        "type": "recipe",
        "name": "iron-stick",
        "ingredients": {
            "iron-plate": 1
        },
        "result": "iron-stick",
        "result_count": 2
    },
    {
        "type": "recipe",
        "name": "stone-furnace",
        "ingredients": {
            "stone": 5
        },
        "result": "stone-furnace"
    },
    {
        "type": "recipe",
        "name": "boiler",
        "ingredients": {
            "stone-furnace": 1,
            "pipe": 4
        },
        "result": "boiler"
    },
    {
        "type": "recipe",
        "name": "steam-engine",
        "ingredients": {
            "iron-gear-wheel": 8,
            "pipe": 5,
            "iron-plate": 10
        },
        "result": "steam-engine"
    },
    {
        "type": "recipe",
        "name": "iron-gear-wheel",
        "ingredients": {
            "iron-plate": 2
        },
        "result": "iron-gear-wheel"
    },
    {
        "type": "recipe",
        "name": "electronic-circuit",
        "ingredients": {
            "iron-plate": 1,
            "copper-cable": 3
        },
        "result": "electronic-circuit"
    },
    {
        "type": "recipe",
        "name": "transport-belt",
        "ingredients": {
            "iron-plate": 1,
            "iron-gear-wheel": 1
        },
        "result": "transport-belt",
        "result_count": 2
    },
    {
        "type": "recipe",
        "name": "electric-mining-drill",
        "energy_required": 2,
        "ingredients": {
            "electronic-circuit": 3,
            "iron-gear-wheel": 5,
            "iron-plate": 10
        },
        "result": "electric-mining-drill"
    },
    {
        "type": "recipe",
        "name": "burner-mining-drill",
        "energy_required": 2,
        "ingredients": {
            "iron-gear-wheel": 3,
            "stone-furnace": 1,
            "iron-plate": 3
        },
        "result": "burner-mining-drill"
    },
    {
        "type": "recipe",
        "name": "inserter",
        "ingredients": {
            "electronic-circuit": 1,
            "iron-gear-wheel": 1,
            "iron-plate": 1
        },
        "result": "inserter"
    },
    {
        "type": "recipe",
        "name": "fast-inserter",
        "enabled": false,
        "ingredients": {
            "electronic-circuit": 2,
            "iron-plate": 2,
            "inserter": 1
        },
        "result": "fast-inserter"
    },
    {
        "type": "recipe",
        "name": "filter-inserter",
        "enabled": false,
        "ingredients": {
            "fast-inserter": 1,
            "electronic-circuit": 4
        },
        "result": "filter-inserter"
    },
    {
        "type": "recipe",
        "name": "long-handed-inserter",
        "enabled": false,
        "ingredients": {
            "iron-gear-wheel": 1,
            "iron-plate": 1,
            "inserter": 1
        },
        "result": "long-handed-inserter"
    },
    {
        "type": "recipe",
        "name": "burner-inserter",
        "ingredients": {
            "iron-plate": 1,
            "iron-gear-wheel": 1
        },
        "result": "burner-inserter"
    },
    {
        "type": "recipe",
        "name": "pipe",
        "ingredients": {
            "iron-plate": 1
        },
        "result": "pipe"
    },
    {
        "type": "recipe",
        "name": "offshore-pump",
        "ingredients": {
            "electronic-circuit": 2,
            "pipe": 1,
            "iron-gear-wheel": 1
        },
        "result": "offshore-pump"
    },
    {
        "type": "recipe",
        "name": "copper-cable",
        "ingredients": {
            "copper-plate": 1
        },
        "result": "copper-cable",
        "result_count": 2
    },
    {
        "type": "recipe",
        "name": "small-electric-pole",
        "ingredients": {
            "wood": 1,
            "copper-cable": 2
        },
        "result": "small-electric-pole",
        "result_count": 2
    },
    {
        "type": "recipe",
        "name": "pistol",
        "energy_required": 5,
        "ingredients": {
            "copper-plate": 5,
            "iron-plate": 5
        },
        "result": "pistol"
    },
    {
        "type": "recipe",
        "name": "submachine-gun",
        "enabled": false,
        "energy_required": 10,
        "ingredients": {
            "iron-gear-wheel": 10,
            "copper-plate": 5,
            "iron-plate": 10
        },
        "result": "submachine-gun"
    },
    {
        "type": "recipe",
        "name": "firearm-magazine",
        "energy_required": 1,
        "ingredients": {
            "iron-plate": 4
        },
        "result": "firearm-magazine",
        "result_count": 1
    },
    {
        "type": "recipe",
        "name": "light-armor",
        "enabled": true,
        "energy_required": 3,
        "ingredients": {
            "iron-plate": 40
        },
        "result": "light-armor"
    },
    {
        "type": "recipe",
        "name": "radar",
        "ingredients": {
            "electronic-circuit": 5,
            "iron-gear-wheel": 5,
            "iron-plate": 10
        },
        "result": "radar"
    },
    {
        "type": "recipe",
        "name": "small-lamp",
        "enabled": false,
        "ingredients": {
            "electronic-circuit": 1,
            "copper-cable": 3,
            "iron-plate": 1
        },
        "result": "small-lamp"
    },
    {
        "type": "recipe",
        "name": "pipe-to-ground",
        "ingredients": {
            "pipe": 10,
            "iron-plate": 5
        },
        "result_count": 2,
        "result": "pipe-to-ground"
    },
    {
        "type": "recipe",
        "name": "assembling-machine-1",
        "enabled": false,
        "ingredients": {
            "electronic-circuit": 3,
            "iron-gear-wheel": 5,
            "iron-plate": 9
        },
        "result": "assembling-machine-1"
    },
    {
        "type": "recipe",
        "name": "repair-pack",
        "ingredients": {
            "electronic-circuit": 2,
            "iron-gear-wheel": 2
        },
        "result": "repair-pack"
    },
    {
        "type": "recipe",
        "name": "automation-science-pack",
        "energy_required": 5,
        "ingredients": {
            "copper-plate": 1,
            "iron-gear-wheel": 1
        },
        "result": "automation-science-pack"
    },
    {
        "type": "recipe",
        "name": "logistic-science-pack",
        "enabled": false,
        "energy_required": 6,
        "ingredients": {
            "inserter": 1,
            "transport-belt": 1
        },
        "result": "logistic-science-pack"
    },
    {
        "type": "recipe",
        "name": "lab",
        "energy_required": 2,
        "ingredients": {
            "electronic-circuit": 10,
            "iron-gear-wheel": 10,
            "transport-belt": 4
        },
        "result": "lab"
    },
    {
        "type": "recipe",
        "name": "stone-wall",
        "enabled": false,
        "ingredients": {
            "stone-brick": 5
        },
        "result": "stone-wall"
    },
    {
        "type": "recipe",
        "name": "assembling-machine-2",
        "enabled": false,
        "ingredients": {
            "steel-plate": 2,
            "electronic-circuit": 3,
            "iron-gear-wheel": 5,
            "assembling-machine-1": 1
        },
        "result": "assembling-machine-2"
    },
    {
        "type": "recipe",
        "name": "splitter",
        "enabled": false,
        "energy_required": 1,
        "ingredients": {
            "electronic-circuit": 5,
            "iron-plate": 5,
            "transport-belt": 4
        },
        "result": "splitter"
    },
    {
        "type": "recipe",
        "name": "underground-belt",
        "enabled": false,
        "energy_required": 1,
        "ingredients": {
            "iron-plate": 10,
            "transport-belt": 5
        },
        "result_count": 2,
        "result": "underground-belt"
    },
    {
        "type": "recipe",
        "name": "loader",
        "enabled": false,
        "hidden": true,
        "energy_required": 1,
        "ingredients": {
            "inserter": 5,
            "electronic-circuit": 5,
            "iron-gear-wheel": 5,
            "iron-plate": 5,
            "transport-belt": 5
        },
        "result": "loader"
    },
    {
        "type": "recipe",
        "name": "car",
        "enabled": false,
        "energy_required": 2,
        "ingredients": {
            "engine-unit": 8,
            "iron-plate": 20,
            "steel-plate": 5
        },
        "result": "car"
    },
    {
        "type": "recipe",
        "name": "engine-unit",
        "energy_required": 10,
        "category": "advanced-crafting",
        "ingredients": {
            "steel-plate": 1,
            "iron-gear-wheel": 1,
            "pipe": 2
        },
        "result": "engine-unit",
        "enabled": false
    },
    {
        "type": "recipe",
        "name": "iron-chest",
        "enabled": true,
        "ingredients": {
            "iron-plate": 8
        },
        "result": "iron-chest"
    },
    {
        "type": "recipe",
        "name": "big-electric-pole",
        "enabled": false,
        "ingredients": {
            "iron-stick": 8,
            "steel-plate": 5,
            "copper-plate": 5
        },
        "result": "big-electric-pole"
    },
    {
        "type": "recipe",
        "name": "medium-electric-pole",
        "enabled": false,
        "ingredients": {
            "iron-stick": 4,
            "steel-plate": 2,
            "copper-plate": 2
        },
        "result": "medium-electric-pole"
    },
    {
        "type": "recipe",
        "name": "shotgun",
        "enabled": false,
        "energy_required": 10,
        "ingredients": {
            "iron-plate": 15,
            "iron-gear-wheel": 5,
            "copper-plate": 10,
            "wood": 5
        },
        "result": "shotgun"
    },
    {
        "type": "recipe",
        "name": "shotgun-shell",
        "enabled": false,
        "energy_required": 3,
        "ingredients": {
            "copper-plate": 2,
            "iron-plate": 2
        },
        "result": "shotgun-shell"
    },
    {
        "type": "recipe",
        "name": "piercing-rounds-magazine",
        "enabled": false,
        "energy_required": 3,
        "ingredients": {
            "firearm-magazine": 1,
            "steel-plate": 1,
            "copper-plate": 5
        },
        "result": "piercing-rounds-magazine"
    },
    {
        "type": "recipe",
        "name": "grenade",
        "enabled": false,
        "energy_required": 8,
        "ingredients": {
            "iron-plate": 5,
            "coal": 10
        },
        "result": "grenade"
    },
    {
        "type": "recipe",
        "name": "steel-furnace",
        "ingredients": {
            "steel-plate": 6,
            "stone-brick": 10
        },
        "result": "steel-furnace",
        "energy_required": 3,
        "enabled": false
    },
    {
        "type": "recipe",
        "name": "gate",
        "enabled": false,
        "ingredients": {
            "stone-wall": 1,
            "steel-plate": 2,
            "electronic-circuit": 2
        },
        "result": "gate"
    },
    {
        "type": "recipe",
        "name": "heavy-armor",
        "enabled": false,
        "energy_required": 8,
        "ingredients": {
            "copper-plate": 100,
            "steel-plate": 50
        },
        "result": "heavy-armor"
    },
    {
        "type": "recipe",
        "name": "steel-chest",
        "enabled": false,
        "ingredients": {
            "steel-plate": 8
        },
        "result": "steel-chest"
    },
    {
        "type": "recipe",
        "name": "fast-underground-belt",
        "energy_required": 2,
        "enabled": false,
        "ingredients": {
            "iron-gear-wheel": 40,
            "underground-belt": 2
        },
        "result_count": 2,
        "result": "fast-underground-belt"
    },
    {
        "type": "recipe",
        "name": "fast-splitter",
        "enabled": false,
        "energy_required": 2,
        "ingredients": {
            "splitter": 1,
            "iron-gear-wheel": 10,
            "electronic-circuit": 10
        },
        "result": "fast-splitter"
    },
    {
        "type": "recipe",
        "name": "concrete",
        "energy_required": 10,
        "enabled": false,
        "category": "crafting-with-fluid",
        "ingredients": [
            {
                "stone-brick": 5
            },
            {
                "iron-ore": 1
            },
            {
                "type": "fluid",
                "name": "water",
                "amount": 100
            }
        ],
        "result": "concrete",
        "result_count": 10
    },
    {
        "type": "recipe",
        "name": "hazard-concrete",
        "energy_required": 0.25,
        "enabled": false,
        "category": "crafting",
        "ingredients": {
            "concrete": 10
        },
        "result": "hazard-concrete",
        "result_count": 10
    },
    {
        "type": "recipe",
        "name": "refined-concrete",
        "energy_required": 15,
        "enabled": false,
        "category": "crafting-with-fluid",
        "ingredients": [
            {
                "concrete": 20
            },
            {
                "iron-stick": 8
            },
            {
                "steel-plate": 1
            },
            {
                "type": "fluid",
                "name": "water",
                "amount": 100
            }
        ],
        "result": "refined-concrete",
        "result_count": 10
    },
    {
        "type": "recipe",
        "name": "refined-hazard-concrete",
        "energy_required": 0.25,
        "enabled": false,
        "category": "crafting",
        "ingredients": {
            "refined-concrete": 10
        },
        "result": "refined-hazard-concrete",
        "result_count": 10
    },
    {
        "type": "recipe",
        "name": "landfill",
        "energy_required": 0.5,
        "enabled": false,
        "category": "crafting",
        "ingredients": {
            "stone": 20
        },
        "result": "landfill",
        "result_count": 1
    },
    {
        "type": "recipe",
        "name": "fast-transport-belt",
        "enabled": false,
        "ingredients": {
            "iron-gear-wheel": 5,
            "transport-belt": 1
        },
        "result": "fast-transport-belt"
    },
    {
        "type": "recipe",
        "name": "solar-panel",
        "energy_required": 10,
        "enabled": false,
        "ingredients": {
            "steel-plate": 5,
            "electronic-circuit": 15,
            "copper-plate": 5
        },
        "result": "solar-panel"
    },
    {
        "type": "recipe",
        "name": "rail",
        "enabled": false,
        "ingredients": {
            "stone": 1,
            "iron-stick": 1,
            "steel-plate": 1
        },
        "result": "rail",
        "result_count": 2
    },
    {
        "type": "recipe",
        "name": "locomotive",
        "energy_required": 4,
        "enabled": false,
        "ingredients": {
            "engine-unit": 20,
            "electronic-circuit": 10,
            "steel-plate": 30
        },
        "result": "locomotive"
    },
    {
        "type": "recipe",
        "name": "cargo-wagon",
        "energy_required": 1,
        "enabled": false,
        "ingredients": {
            "iron-gear-wheel": 10,
            "iron-plate": 20,
            "steel-plate": 20
        },
        "result": "cargo-wagon"
    },
    {
        "type": "recipe",
        "name": "rail-signal",
        "enabled": false,
        "ingredients": {
            "electronic-circuit": 1,
            "iron-plate": 5
        },
        "result": "rail-signal"
    },
    {
        "type": "recipe",
        "name": "rail-chain-signal",
        "enabled": false,
        "ingredients": {
            "electronic-circuit": 1,
            "iron-plate": 5
        },
        "result": "rail-chain-signal"
    },
    {
        "type": "recipe",
        "name": "train-stop",
        "enabled": false,
        "ingredients": {
            "electronic-circuit": 5,
            "iron-plate": 6,
            "iron-stick": 6,
            "steel-plate": 3
        },
        "result": "train-stop"
    },
    {
        "type": "recipe",
        "name": "copper-plate",
        "category": "smelting",
        "energy_required": 3.2,
        "ingredients": {
            "copper-ore": 1
        },
        "result": "copper-plate"
    },
    {
        "type": "recipe",
        "name": "iron-plate",
        "category": "smelting",
        "energy_required": 3.2,
        "ingredients": {
            "iron-ore": 1
        },
        "result": "iron-plate"
    },
    {
        "type": "recipe",
        "name": "stone-brick",
        "category": "smelting",
        "energy_required": 3.2,
        "enabled": true,
        "ingredients": {
            "stone": 2
        },
        "result": "stone-brick"
    },
    {
        "type": "recipe",
        "name": "steel-plate",
        "category": "smelting",
        "enabled": false,
        "energy_required": 16,
        "ingredients": {
            "iron-plate": 5
        },
        "result": "steel-plate"
    },
    {
        "type": "recipe",
        "name": "arithmetic-combinator",
        "enabled": false,
        "ingredients": {
            "copper-cable": 5,
            "electronic-circuit": 5
        },
        "result": "arithmetic-combinator"
    },
    {
        "type": "recipe",
        "name": "decider-combinator",
        "enabled": false,
        "ingredients": {
            "copper-cable": 5,
            "electronic-circuit": 5
        },
        "result": "decider-combinator"
    },
    {
        "type": "recipe",
        "name": "constant-combinator",
        "enabled": false,
        "ingredients": {
            "copper-cable": 5,
            "electronic-circuit": 2
        },
        "result": "constant-combinator"
    },
    {
        "type": "recipe",
        "name": "power-switch",
        "enabled": false,
        "energy_required": 2,
        "ingredients": {
            "iron-plate": 5,
            "copper-cable": 5,
            "electronic-circuit": 2
        },
        "result": "power-switch"
    },
    {
        "type": "recipe",
        "name": "programmable-speaker",
        "enabled": false,
        "energy_required": 2,
        "ingredients": {
            "iron-plate": 3,
            "iron-stick": 4,
            "copper-cable": 5,
            "electronic-circuit": 4
        },
        "result": "programmable-speaker"
    },
    {
        "type": "recipe",
        "name": "red-wire",
        "enabled": false,
        "ingredients": {
            "electronic-circuit": 1,
            "copper-cable": 1
        },
        "result": "red-wire"
    },
    {
        "type": "recipe",
        "name": "green-wire",
        "enabled": false,
        "ingredients": {
            "electronic-circuit": 1,
            "copper-cable": 1
        },
        "result": "green-wire"
    },
    {
        "type": "recipe",
        "name": "poison-capsule",
        "enabled": false,
        "energy_required": 8,
        "ingredients": {
            "steel-plate": 3,
            "electronic-circuit": 3,
            "coal": 10
        },
        "result": "poison-capsule"
    },
    {
        "type": "recipe",
        "name": "slowdown-capsule",
        "enabled": false,
        "energy_required": 8,
        "ingredients": {
            "steel-plate": 2,
            "electronic-circuit": 2,
            "coal": 5
        },
        "result": "slowdown-capsule"
    },
    {
        "type": "recipe",
        "name": "cluster-grenade",
        "enabled": false,
        "energy_required": 8,
        "ingredients": {
            "grenade": 7,
            "explosives": 5,
            "steel-plate": 5
        },
        "result": "cluster-grenade"
    },
    {
        "type": "recipe",
        "name": "defender-capsule",
        "enabled": false,
        "energy_required": 8,
        "ingredients": {
            "piercing-rounds-magazine": 3,
            "electronic-circuit": 3,
            "iron-gear-wheel": 3
        },
        "result": "defender-capsule"
    },
    {
        "type": "recipe",
        "name": "distractor-capsule",
        "enabled": false,
        "energy_required": 15,
        "ingredients": {
            "defender-capsule": 4,
            "advanced-circuit": 3
        },
        "result": "distractor-capsule"
    },
    {
        "type": "recipe",
        "name": "destroyer-capsule",
        "enabled": false,
        "energy_required": 15,
        "ingredients": {
            "distractor-capsule": 4,
            "speed-module": 1
        },
        "result": "destroyer-capsule"
    },
    {
        "type": "recipe",
        "name": "cliff-explosives",
        "enabled": false,
        "energy_required": 8,
        "ingredients": {
            "explosives": 10,
            "grenade": 1,
            "empty-barrel": 1
        },
        "result": "cliff-explosives"
    },
    {
        "type": "recipe",
        "name": "uranium-rounds-magazine",
        "enabled": false,
        "energy_required": 10,
        "ingredients": {
            "piercing-rounds-magazine": 1,
            "uranium-238": 1
        },
        "result": "uranium-rounds-magazine"
    },
    {
        "type": "recipe",
        "name": "rocket",
        "enabled": false,
        "energy_required": 8,
        "ingredients": {
            "electronic-circuit": 1,
            "explosives": 1,
            "iron-plate": 2
        },
        "result": "rocket"
    },
    {
        "type": "recipe",
        "name": "explosive-rocket",
        "enabled": false,
        "energy_required": 8,
        "ingredients": {
            "rocket": 1,
            "explosives": 2
        },
        "result": "explosive-rocket"
    },
    {
        "type": "recipe",
        "name": "atomic-bomb",
        "enabled": false,
        "energy_required": 50,
        "ingredients": {
            "rocket-control-unit": 10,
            "explosives": 10,
            "uranium-235": 30
        },
        "result": "atomic-bomb"
    },
    {
        "type": "recipe",
        "name": "piercing-shotgun-shell",
        "enabled": false,
        "energy_required": 8,
        "ingredients": {
            "shotgun-shell": 2,
            "copper-plate": 5,
            "steel-plate": 2
        },
        "result": "piercing-shotgun-shell"
    },
    {
        "type": "recipe",
        "name": "cannon-shell",
        "enabled": false,
        "energy_required": 8,
        "ingredients": {
            "steel-plate": 2,
            "plastic-bar": 2,
            "explosives": 1
        },
        "result": "cannon-shell"
    },
    {
        "type": "recipe",
        "name": "explosive-cannon-shell",
        "enabled": false,
        "energy_required": 8,
        "ingredients": {
            "steel-plate": 2,
            "plastic-bar": 2,
            "explosives": 2
        },
        "result": "explosive-cannon-shell"
    },
    {
        "type": "recipe",
        "name": "uranium-cannon-shell",
        "enabled": false,
        "energy_required": 12,
        "ingredients": {
            "cannon-shell": 1,
            "uranium-238": 1
        },
        "result": "uranium-cannon-shell"
    },
    {
        "type": "recipe",
        "name": "explosive-uranium-cannon-shell",
        "enabled": false,
        "energy_required": 12,
        "ingredients": {
            "explosive-cannon-shell": 1,
            "uranium-238": 1
        },
        "result": "explosive-uranium-cannon-shell"
    },
    {
        "type": "recipe",
        "name": "artillery-shell",
        "enabled": false,
        "energy_required": 15,
        "ingredients": {
            "explosive-cannon-shell": 4,
            "radar": 1,
            "explosives": 8
        },
        "result": "artillery-shell"
    },
    {
        "type": "recipe",
        "name": "flamethrower-ammo",
        "category": "chemistry",
        "enabled": false,
        "energy_required": 6,
        "ingredients": [
            {
                "type": "item",
                "name": "steel-plate",
                "amount": 5
            },
            {
                "type": "fluid",
                "name": "crude-oil",
                "amount": 100
            }
        ],
        "result": "flamethrower-ammo"
    },
    {
        "type": "recipe",
        "name": "express-transport-belt",
        "category": "crafting-with-fluid",
        "enabled": false,
        "ingredients": [
            {
                "iron-gear-wheel": 10
            },
            {
                "fast-transport-belt": 1
            },
            {
                "type": "fluid",
                "name": "lubricant",
                "amount": 20
            }
        ],
        "result": "express-transport-belt"
    },
    {
        "type": "recipe",
        "name": "assembling-machine-3",
        "enabled": false,
        "ingredients": {
            "speed-module": 4,
            "assembling-machine-2": 2
        },
        "result": "assembling-machine-3"
    },
    {
        "type": "recipe",
        "name": "tank",
        "enabled": false,
        "energy_required": 5,
        "ingredients": {
            "engine-unit": 32,
            "steel-plate": 50,
            "iron-gear-wheel": 15,
            "advanced-circuit": 10
        },
        "result": "tank"
    },
    {
        "type": "recipe",
        "name": "spidertron",
        "enabled": false,
        "energy_required": 10,
        "ingredients": {
            "exoskeleton-equipment": 4,
            "fusion-reactor-equipment": 2,
            "rocket-launcher": 4,
            "rocket-control-unit": 16,
            "low-density-structure": 150,
            "radar": 2,
            "effectivity-module-3": 2,
            "raw-fish": 1
        },
        "result": "spidertron"
    },
    {
        "type": "recipe",
        "name": "spidertron-remote",
        "enabled": false,
        "ingredients": {
            "rocket-control-unit": 1,
            "radar": 1
        },
        "result": "spidertron-remote"
    },
    {
        "type": "recipe",
        "name": "fluid-wagon",
        "enabled": false,
        "energy_required": 1.5,
        "ingredients": {
            "iron-gear-wheel": 10,
            "steel-plate": 16,
            "pipe": 8,
            "storage-tank": 1
        },
        "result": "fluid-wagon"
    },
    {
        "type": "recipe",
        "name": "artillery-wagon",
        "energy_required": 4,
        "enabled": false,
        "ingredients": {
            "engine-unit": 64,
            "iron-gear-wheel": 10,
            "steel-plate": 40,
            "pipe": 16,
            "advanced-circuit": 20
        },
        "result": "artillery-wagon"
    },
    {
        "type": "recipe",
        "name": "modular-armor",
        "enabled": false,
        "energy_required": 15,
        "ingredients": {
            "advanced-circuit": 30,
            "steel-plate": 50
        },
        "result": "modular-armor"
    },
    {
        "type": "recipe",
        "name": "power-armor",
        "enabled": false,
        "energy_required": 20,
        "ingredients": {
            "processing-unit": 40,
            "electric-engine-unit": 20,
            "steel-plate": 40
        },
        "result": "power-armor"
    },
    {
        "type": "recipe",
        "name": "power-armor-mk2",
        "enabled": false,
        "energy_required": 25,
        "ingredients": {
            "effectivity-module-2": 25,
            "speed-module-2": 25,
            "processing-unit": 60,
            "electric-engine-unit": 40,
            "low-density-structure": 30
        },
        "result": "power-armor-mk2"
    },
    {
        "type": "recipe",
        "name": "flamethrower",
        "enabled": false,
        "energy_required": 10,
        "ingredients": {
            "steel-plate": 5,
            "iron-gear-wheel": 10
        },
        "result": "flamethrower"
    },
    {
        "type": "recipe",
        "name": "land-mine",
        "enabled": false,
        "energy_required": 5,
        "ingredients": {
            "steel-plate": 1,
            "explosives": 2
        },
        "result": "land-mine",
        "result_count": 4
    },
    {
        "type": "recipe",
        "name": "rocket-launcher",
        "enabled": false,
        "energy_required": 10,
        "ingredients": {
            "iron-plate": 5,
            "iron-gear-wheel": 5,
            "electronic-circuit": 5
        },
        "result": "rocket-launcher"
    },
    {
        "type": "recipe",
        "name": "combat-shotgun",
        "enabled": false,
        "energy_required": 10,
        "ingredients": {
            "steel-plate": 15,
            "iron-gear-wheel": 5,
            "copper-plate": 10,
            "wood": 10
        },
        "result": "combat-shotgun"
    },
    {
        "type": "recipe",
        "name": "chemical-science-pack",
        "enabled": false,
        "energy_required": 24,
        "ingredients": {
            "engine-unit": 2,
            "advanced-circuit": 3,
            "sulfur": 1
        },
        "result_count": 2,
        "result": "chemical-science-pack"
    },
    {
        "type": "recipe",
        "name": "military-science-pack",
        "enabled": false,
        "energy_required": 10,
        "ingredients": {
            "piercing-rounds-magazine": 1,
            "grenade": 1,
            "stone-wall": 2
        },
        "result_count": 2,
        "result": "military-science-pack"
    },
    {
        "type": "recipe",
        "name": "production-science-pack",
        "enabled": false,
        "energy_required": 21,
        "ingredients": {
            "electric-furnace": 1,
            "productivity-module": 1,
            "rail": 30
        },
        "result_count": 3,
        "result": "production-science-pack"
    },
    {
        "type": "recipe",
        "name": "utility-science-pack",
        "enabled": false,
        "energy_required": 21,
        "ingredients": {
            "low-density-structure": 3,
            "processing-unit": 2,
            "flying-robot-frame": 1
        },
        "result_count": 3,
        "result": "utility-science-pack"
    },
    {
        "type": "recipe",
        "name": "express-underground-belt",
        "energy_required": 2,
        "category": "crafting-with-fluid",
        "enabled": false,
        "ingredients": [
            {
                "iron-gear-wheel": 80
            },
            {
                "fast-underground-belt": 2
            },
            {
                "type": "fluid",
                "name": "lubricant",
                "amount": 40
            }
        ],
        "result_count": 2,
        "result": "express-underground-belt"
    },
    {
        "type": "recipe",
        "name": "fast-loader",
        "enabled": false,
        "hidden": true,
        "energy_required": 3,
        "ingredients": {
            "fast-transport-belt": 5,
            "loader": 1
        },
        "result": "fast-loader"
    },
    {
        "type": "recipe",
        "name": "express-loader",
        "enabled": false,
        "hidden": true,
        "energy_required": 10,
        "ingredients": {
            "express-transport-belt": 5,
            "fast-loader": 1
        },
        "result": "express-loader"
    },
    {
        "type": "recipe",
        "name": "express-splitter",
        "category": "crafting-with-fluid",
        "enabled": false,
        "energy_required": 2,
        "ingredients": [
            {
                "fast-splitter": 1
            },
            {
                "iron-gear-wheel": 10
            },
            {
                "advanced-circuit": 10
            },
            {
                "type": "fluid",
                "name": "lubricant",
                "amount": 80
            }
        ],
        "result": "express-splitter"
    },
    {
        "type": "recipe",
        "name": "advanced-circuit",
        "enabled": false,
        "energy_required": 6,
        "ingredients": {
            "electronic-circuit": 2,
            "plastic-bar": 2,
            "copper-cable": 4
        },
        "result": "advanced-circuit"
    },
    {
        "type": "recipe",
        "name": "processing-unit",
        "category": "crafting-with-fluid",
        "enabled": false,
        "energy_required": 10,
        "ingredients": [
            {
                "electronic-circuit": 20
            },
            {
                "advanced-circuit": 2
            },
            {
                "type": "fluid",
                "name": "sulfuric-acid",
                "amount": 5
            }
        ],
        "result": "processing-unit"
    },
    {
        "type": "recipe",
        "name": "logistic-robot",
        "enabled": false,
        "ingredients": {
            "flying-robot-frame": 1,
            "advanced-circuit": 2
        },
        "result": "logistic-robot"
    },
    {
        "type": "recipe",
        "name": "construction-robot",
        "enabled": false,
        "ingredients": {
            "flying-robot-frame": 1,
            "electronic-circuit": 2
        },
        "result": "construction-robot"
    },
    {
        "type": "recipe",
        "name": "logistic-chest-passive-provider",
        "enabled": false,
        "ingredients": {
            "steel-chest": 1,
            "electronic-circuit": 3,
            "advanced-circuit": 1
        },
        "result": "logistic-chest-passive-provider"
    },
    {
        "type": "recipe",
        "name": "logistic-chest-active-provider",
        "enabled": false,
        "ingredients": {
            "steel-chest": 1,
            "electronic-circuit": 3,
            "advanced-circuit": 1
        },
        "result": "logistic-chest-active-provider"
    },
    {
        "type": "recipe",
        "name": "logistic-chest-storage",
        "enabled": false,
        "ingredients": {
            "steel-chest": 1,
            "electronic-circuit": 3,
            "advanced-circuit": 1
        },
        "result": "logistic-chest-storage"
    },
    {
        "type": "recipe",
        "name": "logistic-chest-buffer",
        "enabled": false,
        "ingredients": {
            "steel-chest": 1,
            "electronic-circuit": 3,
            "advanced-circuit": 1
        },
        "result": "logistic-chest-buffer"
    },
    {
        "type": "recipe",
        "name": "logistic-chest-requester",
        "enabled": false,
        "ingredients": {
            "steel-chest": 1,
            "electronic-circuit": 3,
            "advanced-circuit": 1
        },
        "result": "logistic-chest-requester"
    },
    {
        "type": "recipe",
        "name": "rocket-silo",
        "enabled": false,
        "ingredients": {
            "steel-plate": 1000,
            "concrete": 1000,
            "pipe": 100,
            "processing-unit": 200,
            "electric-engine-unit": 200
        },
        "energy_required": 30,
        "result": "rocket-silo"
    },
    {
        "type": "recipe",
        "name": "roboport",
        "enabled": false,
        "energy_required": 5,
        "ingredients": {
            "steel-plate": 45,
            "iron-gear-wheel": 45,
            "advanced-circuit": 45
        },
        "result": "roboport"
    },
    {
        "type": "recipe",
        "name": "substation",
        "enabled": false,
        "ingredients": {
            "steel-plate": 10,
            "advanced-circuit": 5,
            "copper-plate": 5
        },
        "result": "substation"
    },
    {
        "type": "recipe",
        "name": "accumulator",
        "energy_required": 10,
        "enabled": false,
        "ingredients": {
            "iron-plate": 2,
            "battery": 5
        },
        "result": "accumulator"
    },
    {
        "type": "recipe",
        "name": "electric-furnace",
        "ingredients": {
            "steel-plate": 10,
            "advanced-circuit": 5,
            "stone-brick": 10
        },
        "result": "electric-furnace",
        "energy_required": 5,
        "enabled": false
    },
    {
        "type": "recipe",
        "name": "beacon",
        "enabled": false,
        "energy_required": 15,
        "ingredients": {
            "electronic-circuit": 20,
            "advanced-circuit": 20,
            "steel-plate": 10,
            "copper-cable": 10
        },
        "result": "beacon"
    },
    {
        "type": "recipe",
        "name": "pumpjack",
        "energy_required": 5,
        "ingredients": {
            "steel-plate": 5,
            "iron-gear-wheel": 10,
            "electronic-circuit": 5,
            "pipe": 10
        },
        "result": "pumpjack",
        "enabled": false
    },
    {
        "type": "recipe",
        "name": "oil-refinery",
        "energy_required": 8,
        "ingredients": {
            "steel-plate": 15,
            "iron-gear-wheel": 10,
            "stone-brick": 10,
            "electronic-circuit": 10,
            "pipe": 10
        },
        "result": "oil-refinery",
        "enabled": false
    },
    {
        "type": "recipe",
        "name": "electric-engine-unit",
        "category": "crafting-with-fluid",
        "energy_required": 10,
        "ingredients": [
            {
                "engine-unit": 1
            },
            {
                "type": "fluid",
                "name": "lubricant",
                "amount": 15
            },
            {
                "electronic-circuit": 2
            }
        ],
        "result": "electric-engine-unit",
        "enabled": false
    },
    {
        "type": "recipe",
        "name": "flying-robot-frame",
        "energy_required": 20,
        "ingredients": {
            "electric-engine-unit": 1,
            "battery": 2,
            "steel-plate": 1,
            "electronic-circuit": 3
        },
        "result": "flying-robot-frame",
        "enabled": false
    },
    {
        "type": "recipe",
        "name": "explosives",
        "category": "chemistry",
        "energy_required": 4,
        "enabled": false,
        "ingredients": [
            {
                "type": "item",
                "name": "sulfur",
                "amount": 1
            },
            {
                "type": "item",
                "name": "coal",
                "amount": 1
            },
            {
                "type": "fluid",
                "name": "water",
                "amount": 10
            }
        ],
        "result": "explosives",
        "result_count": 2
    },
    {
        "type": "recipe",
        "name": "battery",
        "category": "chemistry",
        "energy_required": 4,
        "enabled": false,
        "ingredients": [
            {
                "type": "fluid",
                "name": "sulfuric-acid",
                "amount": 20
            },
            {
                "iron-plate": 1
            },
            {
                "copper-plate": 1
            }
        ],
        "result": "battery"
    },
    {
        "type": "recipe",
        "name": "storage-tank",
        "energy_required": 3,
        "enabled": false,
        "ingredients": {
            "iron-plate": 20,
            "steel-plate": 5
        },
        "result": "storage-tank"
    },
    {
        "type": "recipe",
        "name": "pump",
        "energy_required": 2,
        "enabled": false,
        "ingredients": {
            "engine-unit": 1,
            "steel-plate": 1,
            "pipe": 1
        },
        "result": "pump"
    },
    {
        "type": "recipe",
        "name": "chemical-plant",
        "energy_required": 5,
        "enabled": false,
        "ingredients": {
            "steel-plate": 5,
            "iron-gear-wheel": 5,
            "electronic-circuit": 5,
            "pipe": 5
        },
        "result": "chemical-plant"
    },
    {
        "type": "recipe",
        "name": "low-density-structure",
        "category": "crafting",
        "energy_required": 20,
        "enabled": false,
        "ingredients": {
            "steel-plate": 2,
            "copper-plate": 20,
            "plastic-bar": 5
        },
        "result": "low-density-structure"
    },
    {
        "type": "recipe",
        "name": "rocket-fuel",
        "energy_required": 30,
        "enabled": false,
        "category": "crafting-with-fluid",
        "ingredients": [
            {
                "solid-fuel": 10
            },
            {
                "type": "fluid",
                "name": "light-oil",
                "amount": 10
            }
        ],
        "result": "rocket-fuel"
    },
    {
        "type": "recipe",
        "name": "rocket-control-unit",
        "energy_required": 30,
        "enabled": false,
        "category": "crafting",
        "ingredients": {
            "processing-unit": 1,
            "speed-module": 1
        },
        "result": "rocket-control-unit"
    },
    {
        "type": "recipe",
        "name": "rocket-part",
        "energy_required": 3,
        "enabled": false,
        "hidden": true,
        "category": "rocket-building",
        "ingredients": {
            "rocket-control-unit": 10,
            "low-density-structure": 10,
            "rocket-fuel": 10
        },
        "result": "rocket-part"
    },
    {
        "type": "recipe",
        "name": "satellite",
        "energy_required": 5,
        "enabled": false,
        "category": "crafting",
        "ingredients": {
            "low-density-structure": 100,
            "solar-panel": 100,
            "accumulator": 100,
            "radar": 5,
            "processing-unit": 100,
            "rocket-fuel": 50
        },
        "result": "satellite"
    },
    {
        "type": "recipe",
        "name": "electric-energy-interface",
        "energy_required": 0.5,
        "enabled": false,
        "ingredients": {
            "iron-plate": 2,
            "electronic-circuit": 5
        },
        "result": "electric-energy-interface"
    },
    {
        "type": "recipe",
        "name": "nuclear-reactor",
        "energy_required": 8,
        "enabled": false,
        "ingredients": {
            "concrete": 500,
            "steel-plate": 500,
            "advanced-circuit": 500,
            "copper-plate": 500
        },
        "result": "nuclear-reactor"
    },
    {
        "type": "recipe",
        "name": "centrifuge",
        "energy_required": 4,
        "enabled": false,
        "ingredients": {
            "concrete": 100,
            "steel-plate": 50,
            "advanced-circuit": 100,
            "iron-gear-wheel": 100
        },
        "result": "centrifuge"
    },
    {
        "type": "recipe",
        "name": "uranium-processing",
        "energy_required": 12,
        "enabled": false,
        "category": "centrifuging",
        "ingredients": {
            "uranium-ore": 10
        },
        "icon": "__base__/graphics/icons/uranium-processing.png",
        "icon_size": 64,
        "icon_mipmaps": 4,
        "subgroup": "raw-material",
        "result": [
            {
                "name": "uranium-235",
                "probability": 0.007,
                "amount": 1
            },
            {
                "name": "uranium-238",
                "probability": 0.993,
                "amount": 1
            }
        ]
    },
    {
        "type": "recipe",
        "name": "kovarex-enrichment-process",
        "energy_required": 60,
        "enabled": false,
        "category": "centrifuging",
        "ingredients": {
            "uranium-235": 40,
            "uranium-238": 5
        },
        "icon": "__base__/graphics/icons/kovarex-enrichment-process.png",
        "icon_size": 64,
        "icon_mipmaps": 4,
        "subgroup": "intermediate-product",
        "result": [
            {
                "uranium-235": 41
            },
            {
                "uranium-238": 2
            }
        ]
    },
    {
        "type": "recipe",
        "name": "nuclear-fuel",
        "energy_required": 90,
        "enabled": false,
        "category": "centrifuging",
        "ingredients": {
            "uranium-235": 1,
            "rocket-fuel": 1
        },
        "icon": "__base__/graphics/icons/nuclear-fuel.png",
        "icon_size": 64,
        "icon_mipmaps": 4,
        "result": "nuclear-fuel"
    },
    {
        "type": "recipe",
        "name": "nuclear-fuel-reprocessing",
        "energy_required": 60,
        "enabled": false,
        "category": "centrifuging",
        "ingredients": {
            "used-up-uranium-fuel-cell": 5
        },
        "icon": "__base__/graphics/icons/nuclear-fuel-reprocessing.png",
        "icon_size": 64,
        "icon_mipmaps": 4,
        "subgroup": "intermediate-product",
        "result": {
            "uranium-238": 3
        }
    },
    {
        "type": "recipe",
        "name": "uranium-fuel-cell",
        "energy_required": 10,
        "enabled": false,
        "ingredients": {
            "iron-plate": 10,
            "uranium-235": 1,
            "uranium-238": 19
        },
        "result": "uranium-fuel-cell",
        "result_count": 10
    },
    {
        "type": "recipe",
        "name": "heat-exchanger",
        "energy_required": 3,
        "enabled": false,
        "ingredients": {
            "steel-plate": 10,
            "copper-plate": 100,
            "pipe": 10
        },
        "result": "heat-exchanger"
    },
    {
        "type": "recipe",
        "name": "heat-pipe",
        "energy_required": 1,
        "enabled": false,
        "ingredients": {
            "steel-plate": 10,
            "copper-plate": 20
        },
        "result": "heat-pipe"
    },
    {
        "type": "recipe",
        "name": "steam-turbine",
        "enabled": false,
        "energy_required": 3,
        "ingredients": {
            "iron-gear-wheel": 50,
            "copper-plate": 50,
            "pipe": 20
        },
        "result": "steam-turbine"
    }
];