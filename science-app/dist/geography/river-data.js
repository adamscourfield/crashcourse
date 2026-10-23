export const gauge={station:'Barnard Castle',river:'River Tees',id:'F3504',measure:'Instantaneous water level (stage)',unit:'m',source:'https://environment.data.gov.uk/flood-monitoring/id/stations/F3504.html',checked:'23 October 2026',observations:[{date:'23 December 2013 18:30',value:3.092},{date:'4 September 2017 04:30',value:0.297}]};
export const riverCases={base:{area:8,speed:.5},area:{area:16,speed:.5},speed:{area:8,speed:1},both:{area:16,speed:1}};
export const discharge=(area,speed)=>area*speed;
