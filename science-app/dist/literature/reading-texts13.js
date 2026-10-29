// Complete underlying public-domain texts. Original commentary lives in content-batch13.js.
// No modern recording, translation, editorial notes or reconstructed Dickinson edition copied.
const p=(title,author,url,text,note='Complete underlying public-domain poem; line and stanza breaks retained. Typographic apostrophes normalised.')=>({title,author,url,text,note});
export const readings13={
 eagle:p('The Eagle','Alfred, Lord Tennyson','https://www.poetryfoundation.org/poems/45322/the-eagle-56d224c9a41d1',`He clasps the crag with crooked hands;
Close to the sun in lonely lands,
Ring’d with the azure world, he stands.

The wrinkled sea beneath him crawls;
He watches from his mountain walls,
And like a thunderbolt he falls.`),
 tropics:p('The Tropics in New York','Claude McKay','https://www.poetryfoundation.org/poems/44697/the-tropics-in-new-york',`Bananas ripe and green, and ginger-root,
    Cocoa in pods and alligator pears,
And tangerines and mangoes and grape fruit,
    Fit for the highest prize at parish fairs,

Set in the window, bringing memories
    Of fruit-trees laden by low-singing rills,
And dewy dawns, and mystical blue skies
    In benediction over nun-like hills.

My eyes grew dim, and I could no more gaze;
    A wave of longing through my body swept,
And, hungry for the old, familiar ways,
    I turned aside and bowed my head and wept.`),
 swing:p('The Swing','Robert Louis Stevenson','https://www.poetryfoundation.org/poems/43166/the-swing-56d221dc6ffc4',`How do you like to go up in a swing,
    Up in the air so blue?
Oh, I do think it the pleasantest thing
    Ever a child can do!

Up in the air and over the wall,
    Till I can see so wide,
Rivers and trees and cattle and all
    Over the countryside—

Till I look down on the garden green,
    Down on the roof so brown—
Up in the air I go flying again,
    Up in the air and down!`),
 spell:p('Spellbound','Emily Brontë','https://poets.org/sites/default/files/PoemInYrPocketDay_2015_FINAL.pdf',`The night is darkening round me,
The wild winds coldly blow;
But a tyrant spell has bound me
And I cannot, cannot go.

The giant trees are bending
Their bare boughs weighed with snow.
And the storm is fast descending,
And yet I cannot go.

Clouds beyond clouds above me,
Wastes beyond wastes below;
But nothing drear can move me;
I will not, cannot go.`, 'Complete underlying public-domain poem; follows the Academy of American Poets pocket-poem transcription, including the stop after snow. Editorial title retained; no surrounding commentary copied.'),
 fears:p('When I have Fears That I May Cease to Be','John Keats','https://www.poetryfoundation.org/poems/44488/when-i-have-fears-that-i-may-cease-to-be',`When I have fears that I may cease to be
    Before my pen has gleaned my teeming brain,
Before high-pilèd books, in charactery,
    Hold like rich garners the full ripened grain;
When I behold, upon the night’s starred face,
    Huge cloudy symbols of a high romance,
And think that I may never live to trace
    Their shadows with the magic hand of chance;
And when I feel, fair creature of an hour,
    That I shall never look upon thee more,
Never have relish in the faery power
    Of unreflecting love—then on the shore
Of the wide world I stand alone, and think
Till love and fame to nothingness do sink.`),
 poison:p('A Poison Tree','William Blake','https://www.poetryfoundation.org/poems/45952/a-poison-tree',`I was angry with my friend;
I told my wrath, my wrath did end.
I was angry with my foe:
I told it not, my wrath did grow.

And I waterd it in fears,
Night & morning with my tears:
And I sunned it with smiles,
And with soft deceitful wiles.

And it grew both day and night.
Till it bore an apple bright.
And my foe beheld it shine,
And he knew that it was mine.

And into my garden stole,
When the night had veild the pole;
In the morning glad I see;
My foe outstretched beneath the tree.`, 'Complete underlying public-domain poem; source spellings waterd/veild and ampersand retained. Figurative speaker is not an endorsed model of conduct.'),
 dwelt:p('She Dwelt among the Untrodden Ways','William Wordsworth','https://www.poetryfoundation.org/poems/45549/she-dwelt-among-the-untrodden-ways',`She dwelt among the untrodden ways
    Beside the springs of Dove,
A Maid whom there were none to praise
    And very few to love:

A violet by a mossy stone
    Half hidden from the eye!
—Fair as a star, when only one
    Is shining in the sky.

She lived unknown, and few could know
    When Lucy ceased to be;
But she is in her grave, and, oh,
    The difference to me!`),
 fig:p('First Fig','Edna St. Vincent Millay','https://www.poetryfoundation.org/poetrymagazine/poems/14095/first-fig',`My candle burns at both ends;
    It will not last the night;
But ah, my foes, and oh, my friends—
    It gives a lovely light!`, 'Complete underlying public-domain four-line poem, first published in Poetry, June 1918. Original magazine text; no modern editorial commentary copied.'),
 daffodils:p('I Wandered Lonely as a Cloud','William Wordsworth','https://www.poetryfoundation.org/poems/45521/i-wandered-lonely-as-a-cloud',`I wandered lonely as a cloud
That floats on high o’er vales and hills,
When all at once I saw a crowd,
A host, of golden daffodils;
Beside the lake, beneath the trees,
Fluttering and dancing in the breeze.

Continuous as the stars that shine
And twinkle on the milky way,
They stretched in never-ending line
Along the margin of a bay:
Ten thousand saw I at a glance,
Tossing their heads in sprightly dance.

The waves beside them danced; but they
Out-did the sparkling waves in glee:
A poet could not but be gay,
In such a jocund company:
I gazed—and gazed—but little thought
What wealth the show to me had brought:

For oft, when on my couch I lie
In vacant or in pensive mood,
They flash upon that inward eye
Which is the bliss of solitude;
And then my heart with pleasure fills,
And dances with the daffodils.`),
 leisure:p('Leisure','W. H. Davies','https://www.swansea.ac.uk/media/Leisure---W-H-Davies.pdf',`What is this life if, full of care,
We have no time to stand and stare.

No time to stand beneath the boughs
And stare as long as sheep or cows.

No time to see, when woods we pass,
Where squirrels hide their nuts in grass.

No time to see, in broad daylight,
Streams full of stars, like skies at night.

No time to turn at Beauty’s glance,
And watch her feet, how they can dance.

No time to wait till her mouth can
Enrich that smile her eyes began.

A poor life this if, full of care,
We have no time to stand and stare.`, 'Complete underlying public-domain poem; text follows the Swansea University teaching-text transcription. No accompanying modern analysis copied.')
};
export const whole13=(...keys)=>keys.map(k=>`${readings13[k].title} — ${readings13[k].author}\n\n${readings13[k].text}`).join('\n\n────────\n\n');
export const paper1Extracts=`TASK 1 · Macbeth, Act 2, scene 1 · Macbeth speaking

Is this a dagger which I see before me,
The handle toward my hand? Come, let me clutch thee.
I have thee not, and yet I see thee still.
Art thou not, fatal vision, sensible
To feeling as to sight? Or art thou but
A dagger of the mind, a false creation
Proceeding from the heat-oppressèd brain?
I see thee yet, in form as palpable
As this which now I draw.

TASK 2 · A Christmas Carol, Stave 2 · Scrooge discussing Fezziwig

“He has the power to render us happy or unhappy; to make our service light or burdensome; a pleasure or a toil. Say that his power lies in words and looks; in things so slight and insignificant that it is impossible to add and count ’em up: what then? The happiness he gives, is quite as great as if it cost a fortune.”`;
