export interface user {
	name: string;
	actualLevel: number;
	attack: attack;
	reward: number;
	actual_coins: number;
}

export interface attack {
	baseDamage: number;
}
