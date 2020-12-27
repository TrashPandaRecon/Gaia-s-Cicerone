// Test datasets purely for unit testing.
export const SALESDATA = [
    {year: 1998, sales:1000200}
]

export const SOCIALNODEDATA = {
	nodes: [
		{ id: 'Harry' },
		{ id: 'Sally' },
		{ id: 'Alice' },
		{ id: 'influential_black_tarantula' },
		{ id: 'clinical_tan_flamingo' },
		{ id: 'sweet_aquamarine_guppy' },
		{ id: 'early_maroon_koi' },
		{ id: 'outstanding_cyan_mouse' },
		{ id: 'technical_turquoise_reptile' },
		{ id: 'gorgeous_magenta_ladybug' },
		{ id: 'arbitrary_rose_mongoose' },
		{ id: 'entire_white_dove' },
		{ id: 'pleased_green_opossum' },
		{ id: 'tired_sapphire_opossum' },
		{ id: 'plain_olive_fox' },
		{ id: 'bare_emerald_narwhal' },
		{ id: 'potential_coral_platypus' },
		{ id: 'slimy_silver_cephalopod' },
		{ id: 'drab_coral_chimpanzee' },
		{ id: 'top_white_cobra' },
		{ id: 'operational_green_muskox' },
		{ id: 'marine_peach_wolverine' },
		{ id: 'royal_indigo_bedbug' },
		{ id: 'significant_cyan_mongoose' },
	],
	links: [
		{ source: 'Harry', target: 'Sally' },
		{ source: 'Harry', target: 'Alice' },
		{ source: 'influential_black_tarantula', target: 'Alice' },
		{ source: 'clinical_tan_flamingo', target: 'Alice' },
		{
			source: 'sweet_aquamarine_guppy',
			target: 'clinical_tan_flamingo',
		},
		{ source: 'early_maroon_koi', target: 'clinical_tan_flamingo' },
		{
			source: 'outstanding_cyan_mouse',
			target: 'outstanding_cyan_mouse',
		},
		{
			source: 'technical_turquoise_reptile',
			target: 'influential_black_tarantula',
		},
		{ source: 'gorgeous_magenta_ladybug', target: 'Alice' },
		{
			source: 'arbitrary_rose_mongoose',
			target: 'gorgeous_magenta_ladybug',
		},
		{ source: 'entire_white_dove', target: 'entire_white_dove' },
		{
			source: 'pleased_green_opossum',
			target: 'pleased_green_opossum',
		},
		{
			source: 'tired_sapphire_opossum',
			target: 'pleased_green_opossum',
		},
		{ source: 'plain_olive_fox', target: 'Harry' },
		{ source: 'bare_emerald_narwhal', target: 'plain_olive_fox' },
		{ source: 'potential_coral_platypus', target: 'entire_white_dove' },
		{
			source: 'slimy_silver_cephalopod',
			target: 'outstanding_cyan_mouse',
		},
		{ source: 'drab_coral_chimpanzee', target: 'early_maroon_koi' },
		{ source: 'top_white_cobra', target: 'top_white_cobra' },
		{
			source: 'operational_green_muskox',
			target: 'pleased_green_opossum',
		},
		{
			source: 'marine_peach_wolverine',
			target: 'operational_green_muskox',
		},
		{ source: 'royal_indigo_bedbug', target: 'top_white_cobra' },
		{
			source: 'significant_cyan_mongoose',
			target: 'tired_sapphire_opossum',
		},
	],
};
export const SOCIALNODEDATA1 = {
	nodes: [
		{ id: 'Harry' },
		{ id: 'Sally' },
		{ id: 'Alice' },
	],
	links: [
		{ source: 'Harry', target: 'Sally' },
		{ source: 'Harry', target: 'Alice' },
	],
};