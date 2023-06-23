type IComment = {
    commentId: number; 
    commentContent: string;
    replies?: IComment[];
}


const comments: IComment[] = 
[
   { commentId: 1, commentContent: 'Hai',
       replies: [ { commentId: 11, commentContent: 'Hai juga', 
            replies: [ { commentId: 111, commentContent: 'Haai juga hai jugaa' },
               { commentId: 112, commentContent: 'Haai juga hai jugaa' } ] },
                   { commentId: 12, commentContent: 'Hai juga', 
                       replies: [ { commentId: 121, commentContent: 'Haai juga hai jugaa' } ] } ] },
                           { commentId: 2, commentContent: 'Halooo' } 
]

function getTotalCommentContent(data) {
 let total = 0;
 for (const comment of data) {
   total += 1; // Increment total for current comment
   if (comment.replies) {
     total += getTotalCommentContent(comment.replies); // Recursively add total from nested replies
   }
 }
 return total;
}

console.log("total comment ", getTotalCommentContent(comments))