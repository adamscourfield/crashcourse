// Complete underlying public-domain poems; no modern performance or editorial commentary copied.
// Source versions checked 28 October 2026. Dickinson uses the early edited 1891 text, not a modern reconstruction.
const poem=(title,author,url,text,note='Complete public-domain poem; line and stanza breaks retained.')=>({title,author,url,text,note});
export const readings={
 adlestrop:poem('Adlestrop','Edward Thomas','https://www.poetryfoundation.org/poems/53744/adlestrop',`Yes. I remember Adlestrop—
The name, because one afternoon
Of heat the express-train drew up there
Unwontedly. It was late June.

The steam hissed. Someone cleared his throat.
No one left and no one came
On the bare platform. What I saw
Was Adlestrop—only the name

And willows, willow-herb, and grass,
And meadowsweet, and haycocks dry,
No whit less still and lonely fair
Than the high cloudlets in the sky.

And for that minute a blackbird sang
Close by, and round him, mistier,
Farther and farther, all the birds
Of Oxfordshire and Gloucestershire.`),
 uphill:poem('Up-Hill','Christina Rossetti','https://www.poetryfoundation.org/poems/45002/up-hill',`Does the road wind up-hill all the way?
   Yes, to the very end.
Will the day’s journey take the whole long day?
   From morn to night, my friend.

But is there for the night a resting-place?
   A roof for when the slow dark hours begin.
May not the darkness hide it from my face?
   You cannot miss that inn.

Shall I meet other wayfarers at night?
   Those who have gone before.
Then must I knock, or call when just in sight?
   They will not keep you standing at that door.

Shall I find comfort, travel-sore and weak?
   Of labour you shall find the sum.
Will there be beds for me and all who seek?
   Yea, beds for all who come.`),
 thrush:poem('The Darkling Thrush','Thomas Hardy','https://www.poetryfoundation.org/poems/44325/the-darkling-thrush',`I leant upon a coppice gate
      When Frost was spectre-grey,
And Winter's dregs made desolate
      The weakening eye of day.
The tangled bine-stems scored the sky
      Like strings of broken lyres,
And all mankind that haunted nigh
      Had sought their household fires.

The land's sharp features seemed to be
      The Century's corpse outleant,
His crypt the cloudy canopy,
      The wind his death-lament.
The ancient pulse of germ and birth
      Was shrunken hard and dry,
And every spirit upon earth
      Seemed fervourless as I.

At once a voice arose among
      The bleak twigs overhead
In a full-hearted evensong
      Of joy illimited;
An aged thrush, frail, gaunt, and small,
      In blast-beruffled plume,
Had chosen thus to fling his soul
      Upon the growing gloom.

So little cause for carolings
      Of such ecstatic sound
Was written on terrestrial things
      Afar or nigh around,
That I could think there trembled through
      His happy good-night air
Some blessed Hope, whereof he knew
      And I was unaware.`),
 rains:poem('There Will Come Soft Rains','Sara Teasdale','https://poets.org/poem/there-will-come-soft-rains',`(War Time)

There will come soft rains and the smell of the ground,
And swallows circling with their shimmering sound;

And frogs in the pools singing at night,
And wild plum trees in tremulous white,

Robins will wear their feathery fire
Whistling their whims on a low fence-wire;

And not one will know of the war, not one
Will care at last when it is done.
Not one would mind, neither bird nor tree
If mankind perished utterly;

And Spring herself, when she woke at dawn,
Would scarcely know that we were gone.`),
 barter:poem('Barter','Sara Teasdale','https://poets.org/poem/barter',`Life has loveliness to sell,
   All beautiful and splendid things,
Blue waves whitened on a cliff,
   Soaring fire that sways and sings,
And children's faces looking up
Holding wonder in a cup.

Life has loveliness to sell,
   Music like a curve of gold,
Scent of pine trees in the rain,
   Eyes that love you, arms that hold,
And for your spirit's still delight,
Holy thoughts that star the night.

Spend all you have for loveliness,
   Buy it and never count the cost;
For one white singing hour of peace
   Count many a year of strife well lost,
And for a breath of ecstacy
Give all you have been, or could be.`,'Complete public-domain poem, Academy of American Poets source version; source spelling “ecstacy” retained.'),
 remember:poem('Remember','Christina Rossetti','https://www.poetryfoundation.org/poems/45000/remember-56d224509b7ae',`Remember me when I am gone away,
         Gone far away into the silent land;
         When you can no more hold me by the hand,
Nor I half turn to go yet turning stay.
Remember me when no more day by day
         You tell me of our future that you plann'd:
         Only remember me; you understand
It will be late to counsel then or pray.
Yet if you should forget me for a while
         And afterwards remember, do not grieve:
         For if the darkness and corruption leave
         A vestige of the thoughts that once I had,
Better by far you should forget and smile
         Than that you should remember and be sad.`),
 glass:poem('I Look into My Glass','Thomas Hardy','https://www.brinkerhoffpoetry.org/poems/i-look-into-my-glass',`I look into my glass,
  And view my wasting skin,
And say, “Would God it came to pass
  My heart had shrunk as thin!”

For then, I, undistrest
  By hearts grown cold to me,
Could lonely wait my endless rest
  With equanimity.
But Time, to make me grieve,
  Part steals, lets part abide;
And shakes this fragile frame at eve
  With throbbings of noontide.`,'Complete public-domain poem; line and paragraph arrangement follows the Adrian Brinkerhoff Poetry Foundation version.'),
 hope:poem('Hope','Emily Dickinson','https://www.gutenberg.org/files/12242/12242-h/12242-h.htm',`Hope is the thing with feathers
That perches in the soul,
And sings the tune without the words,
And never stops at all,
And sweetest in the gale is heard;
And sore must be the storm
That could abash the little bird
That kept so many warm.
I 've heard it in the chillest land,
And on the strangest sea;
Yet, never, in extremity,
It asked a crumb of me.`,'Complete public-domain early edited text, Poems, Second Series (1891), VI “Hope”, editors Mabel Loomis Todd and T. W. Higginson; Project Gutenberg12242. This version differs in punctuation and layout from modern editions.'),
 sympathy:poem('Sympathy','Paul Laurence Dunbar','https://www.poetryfoundation.org/poems/46459/sympathy-56d22658afbc0',`I know what the caged bird feels, alas!
    When the sun is bright on the upland slopes;
When the wind stirs soft through the springing grass,
And the river flows like a stream of glass;
    When the first bird sings and the first bud opes,
And the faint perfume from its chalice steals—
I know what the caged bird feels!

I know why the caged bird beats his wing
    Till its blood is red on the cruel bars;
For he must fly back to his perch and cling
When he fain would be on the bough a-swing;
    And a pain still throbs in the old, old scars
And they pulse again with a keener sting—
I know why he beats his wing!

I know why the caged bird sings, ah me,
    When his wing is bruised and his bosom sore,—
When he beats his bars and he would be free;
It is not a carol of joy or glee,
    But a prayer that he sends from his heart’s deep core,
But a plea, that upward to Heaven he flings—
I know why the caged bird sings!`)
};
export const wholeReading=(...keys)=>keys.map(k=>`${readings[k].title} — ${readings[k].author}\n\n${readings[k].text}`).join('\n\n──────────\n\n');
export const ozymandias=`I met a traveller from an antique land
Who said: Two vast and trunkless legs of stone
Stand in the desert. Near them on the sand,
Half sunk, a shatter’d visage lies, whose frown
And wrinkled lip and sneer of cold command
Tell that its sculptor well those passions read
Which yet survive, stamp’d on these lifeless things,
The hand that mock’d them and the heart that fed;
And on the pedestal these words appear:
‘My name is Ozymandias, king of kings:
Look on my works, ye Mighty, and despair!’
Nothing beside remains. Round the decay
Of that colossal wreck, boundless and bare,
The lone and level sands stretch far away.`;
