const { Post } = require('../models');

const postData = [{
        title: 'DOCTOR IPSUM',
        content: 'Oh, my giddy aunt! We are not of this race. We are not of this earth. Susan and I are wanderers in the fourth dimension of time and space. Am I having a midlife crisis? Why are you pointing your screwdrivers like that? Theyre scientific instruments not water pistols! Sorry, Im going to have to relieve you of your pet. Shut up, I was talking to the horse. There are some corners of the universe which have bred the most terrible things. Things which act against everything we believe in. They must be fought.',
        user_id: 1

    },
    {
        title: 'Because I am the Doctor',
        content: '... and this is my spoon. You see when I started, all those years ago, I was just running. I called myself the Doctor but it was just a name. Then I went to Skaro. And I met you lot. And I understood who I was. What do you think of the new look? I was hoping for minimalism, but I think I came up with magician. You are the only mystery worth solving. ts called the TARDIS, this thing. T-A-R-D-I-S. Thats Time And Relative Dimension In Space. That’s okay. Culture shock. Happens to the best of us.',
        user_id: 2
    },
    {
        title: 'Its part of the TARDIS',
        content: 'Renewed? Have I? Thats it, Ive been renewed. Its part of the TARDIS. Without it I couldnt survive. One day, I shall come back. Yes, I shall come back. Until then, there must be no regrets, no tears, no anxieties. Just go forward in all your beliefs and prove to me that I am not mistaken in mine. Goodbye Susan. Goodbye my dear. Good grief.... Its a Stegosaurus! Allons-y! And Im looking for a blonde in a Union Jack. A specific one, mind, I didnt just wake up this morning with a craving. Brave heart, Teg',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;