
/*const comments = require('./comment_db')
const users = require('../user/user_db')

function getComments(id)
{
    let result = []

    comments.forEach(comment => {
        if (comment.postId === id)
        {
            let commentator = users.find(user => user.id === comment.userId)
            result.push({
                comment: comment.content,
                commentator: commentator.fullName

            })
        }
    })

    return result;
}

module.exports = { getComments }
*/
const comments = require('./commentdb'); // commentdb.js
const users = require('../user/userdb'); // userdb.js

function getComments(id) {
    let result = [];

    comments.forEach(comment => {
        if (comment.postId === id) {
            const commentator = users.find(user => user.id === comment.userId);
            
            if (commentator) {
                result.push({
                    comment: comment.content,
                    commentator: commentator.fullName
                });
            }
        }
    });

    return result;
}

module.exports = { getComments };
