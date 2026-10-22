export function percentageYield(actual,theoretical){if(!Number.isFinite(actual)||actual<0||!Number.isFinite(theoretical)||theoretical<=0)throw Error('Invalid yield masses');return actual/theoretical*100;}
export function atomEconomy(desiredWeighted,reactantWeighted){if(!Number.isFinite(desiredWeighted)||desiredWeighted<=0||!Number.isFinite(reactantWeighted)||reactantWeighted<desiredWeighted)throw Error('Invalid equation masses');return desiredWeighted/reactantWeighted*100;}
export const yieldTasks=[
 {theoretical:10,actual:8,story:'Product was lost during filtration.',cause:'loss'},
 {theoretical:12,actual:9,story:'The reversible reaction stopped short of complete conversion.',cause:'incomplete'},
 {theoretical:20,actual:12,story:'Some reactant formed a different product in a side reaction.',cause:'alternative'}
];
export const economyTasks=[
 {equation:'CaCO₃ → CaO + CO₂',desired:'CaO',mrs:[100,56,44],coefficients:[1,1,1],names:['CaCO₃','CaO','CO₂'],numerator:56,denominator:100},
 {equation:'2H₂ + O₂ → 2H₂O',desired:'H₂O',mrs:[2,32,18],coefficients:[2,1,2],names:['H₂','O₂','H₂O'],numerator:36,denominator:36},
 {equation:'2NaHCO₃ → Na₂CO₃ + CO₂ + H₂O',desired:'Na₂CO₃',mrs:[84,106,44,18],coefficients:[2,1,1,1],names:['NaHCO₃','Na₂CO₃','CO₂','H₂O'],numerator:106,denominator:168}
];
