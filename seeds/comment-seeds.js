const { Comment } = require('../models');

const commentData = [{
        comment_text: "So these are my replacements. A dandy and a clown",
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: "Oh, the pointing again! They're screwdrivers! What are you going to do? Assemble a cabinet at them? ",
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: "My people fought a race called the Daleks, for the sake of all creation. And they lost.",
        user_id: 3,
        post_id: 3
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;