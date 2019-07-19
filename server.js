const express = require('express');

const app = express();
/*
=====Tag Int Codes====
standard 	1
puzzle 	    2
speedrun 	3
auto 	    4
unomas 	    5
multi 	    6
music 	    7
troll 	    8
kaizo 	    9

=====Status Int Codes====
submitted 	    0
pulled 	        1
approved 	    2
denied 	        3
limbo 	        4
judge_ready 	5
judged 	        6
 */

app.get('/api/KaizoLevels', (req, res) => {
	const levels = [
		{
			course_id: "123-123-123",
			title: "P Break",
			userName: "Panga",
		},
		{
			course_id: "234-123-423",
			title: "Best Lever",
			userName: "SonoMore",
		},
	];

	res.json(levels);
});

const port = 5000;

app.listen(port, () => console.log(`Server start on port ${port}`));

/*
{course_id: ", userName: "SonoMore", 			 title:"Best Lever", 		   tag: "9", status:"", comments:"", score:"", screener_id:"", judge_id:""},
{course_id: "435-345-123", userName: "Defender1031", 		 title:"Pure Trash", 		   tag: "8", status:"", comments:"", score:"", screener_id:"", judge_id:""},
{course_id: "ABC-420-123", userName: "Marcy", 				 title:"Fun Level", 		   tag: "3", status:"", comments:"", score:"", screener_id:"", judge_id:""},
{course_id: "234-234-143", userName: "Emily", 				 title:"Draw the Things", 	   tag: "4", status:"", comments:"", score:"", screener_id:"", judge_id:""},
{course_id: "ABD-123-543", userName: "FrostBytes", 		 title:"Code Stuff", 		   tag: "1", status:"", comments:"", score:"", screener_id:"", judge_id:""},
{course_id: "893-123-THE", userName: "iScreaMan23", 		 title:"Break Things", 		   tag: "3", status:"", comments:"", score:"", screener_id:"", judge_id:""},
{course_id: "123-DOG-123",
]; userName: "Geek", 				 title:"Geeky Puzzle", 		   tag: "2", status:"", comments:"", score:"", screener_id:"", judge_id:""},
{course_id: "123-123-DOG", userName: "Lilithsm", 			 title:"Puzzle Castle", 	   tag: "2", status:"", comments:"", score:"", screener_id:"", judge_id:""},
{course_id: "DOG-123-123", userName: "PharmDuck", 			 title:"Quack", 			   tag: "4", status:"", comments:"", score:"", screener_id:"", judge_id:""},
{course_id: "123-DOG-123", userName: "ExplosiveDruid", 	 title:"Lucky Claw", 		   tag: "7", status:"", comments:"", score:"", screener_id:"", judge_id:""},
{course_id: "123-ASS-123", userName: "PotatoChan", 		 title:"Break Carl", 		   tag: "8", status:"", comments:"", score:"", screener_id:"", judge_id:""},
{course_id: "123-420-DOG", userName: "Foggles", 			 title:"Free-R", 			   tag: "5", status:"", comments:"", score:"", screener_id:"", judge_id:""},
{course_id: "123-123-123", userName: "CarlSagan42", 		 title:"Trust Issues", 		   tag: "6", status:"", comments:"", score:"", screener_id:"", judge_id:""},
{course_id: "123-ASS-123", userName: "Poo", 				 title:"Kaizo Training", 	   tag: "8", status:"", comments:"", score:"", screener_id:"", judge_id:""},
{course_id: "420-123-123", userName: "Barb", 				 title:"Master and Commander", tag: "6", status:"", comments:"", score:"", screener_id:"", judge_id:""},
{course_id: "123-123-ASS", userName: "Ryukhar", 			 title:"Sponge Things",		   tag: "5", status:"", comments:"", score:"", screener_id:"", judge_id:""},
{course_id: "123-123-420", userName: "BinaryChaos", 		 title:"The Proposal", 		   tag: "3", status:"", comments:"", score:"", screener_id:"", judge_id:""},
{course_id: "123-123-123", userName: "Bab", 				 title:"I <3 Beeb", 		   tag: "3", status:"", comments:"", score:"", screener_id:"", judge_id:""},
{course_id: "123-420-123", userName: "Grizzlage", 			 title:"GrizzRekt", 		   tag: "4", status:"", comments:"", score:"", screener_id:"", judge_id:""},
{course_id: "ASS-123-123", userName: "AverageGhost", 		 title:"Sub to AverageGhost",  tag: "7", status:"", comments:"", score:"", screener_id:"", judge_id:""},
{course_id: "123-123-ASS", userName: "Freak", 				 title:"Celeb Hands", 		   tag: "4", status:"", comments:"", score:"", screener_id:"", judge_id:""},
{course_id: "123-ASS-420", userName: "BloodFalcon",		 title:"Complicated Audio",    tag: "5", status:"", comments:"", score:"", screener_id:"", judge_id:""},
{course_id: "123-420-123", userName: "LadyFalcon",			 title:"Shave Blood", 		   tag: "1", status:"", comments:"", score:"", screener_id:"", judge_id:""},
{course_id: "420-123-ASS", userName: "TeddyBearKisses",	 title:"Gonna Be Mommy", 	   tag: "1", status:"", comments:"", score:"", screener_id:"", judge_id:""},
*/